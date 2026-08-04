'use strict';

const https = require('https');
const http  = require('http');

function mapGrafanaLanguage(lang) {
    switch (lang) {
        case 'az': return 'az-AZ';
        case 'ru': return 'ru-RU';
        case 'en': return 'en-US';
        case 'de': return 'de-DE';
        case 'tr': return 'tr-TR';
        default:   return 'en-US';
    }
}

function httpPatch(urlStr, headers, body) {
    return new Promise((resolve, reject) => {
        const parsed = new URL(urlStr);
        const lib = parsed.protocol === 'https:' ? https : http;
        const req = lib.request(parsed, { method: 'PATCH', headers }, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });
        req.on('error', reject);
        req.setTimeout(3000, () => { req.destroy(); reject(new Error('timeout')); });
        req.write(body);
        req.end();
    });
}

class MywebuiWebExtension {
    /**
     * @param {import('http').Server} server
     * @param {{secure: boolean, port: number}} settings
     * @param {object} adapter  - iobroker.web adapter instance
     * @param {object} config   - system.adapter.mywebui.0 object
     * @param {import('express').Application} app
     */
    constructor(server, settings, adapter, config, app) {
        this._adapter = adapter;
        const native = config?.native || {};

        if (!native.grafanaEnabled) {
            adapter.log.debug('[mywebui/WebExt] Grafana disabled — no endpoints registered');
            return;
        }

        const grafanaUrl = (native.grafanaUrl || 'http://localhost:3000').replace(/\/$/, '');

        // ── SSO auth check (nginx auth_request) ──────────────────────────────
        if (native.grafanaSsoEnabled) {
            app.get('/mywebui-auth-check', (req, res) => {
                // Method 1: passport session (v6 + v8 traditional login)
                const sessionUser = req.user || req.session?.passport?.user;
                if (sessionUser) {
                    res.setHeader('X-User', sessionUser);
                    res.status(200).end();
                    return;
                }

                // Method 2: OAuth2 access_token cookie (v8 OAuth2 login)
                const accessToken = req.cookies?.access_token;
                const store = adapter.store;
                if (accessToken && store) {
                    store.get(`a:${accessToken}`, (err, session) => {
                        if (!err && session && session.user) {
                            res.setHeader('X-User', session.user);
                            res.status(200).end();
                        } else {
                            res.status(401).end();
                        }
                    });
                    return;
                }

                res.status(401).end();
            });
            adapter.log.info('[mywebui/WebExt] /mywebui-auth-check registered for nginx SSO (v6+v8)');
        }

        // ── Language sync (session-verified, no username from frontend) ──────
        if (native.grafanaLangSyncEnabled) {
            app.post('/mywebui-grafana-lang', async (req, res) => {
                const username = req.user || req.session?.passport?.user;
                if (!username) { res.status(401).json({ error: 'not authenticated' }); return; }

                const lang = req.body?.lang;
                if (!lang) { res.status(400).json({ error: 'missing lang' }); return; }

                const grafanaLang = mapGrafanaLanguage(lang);
                const payload = JSON.stringify({ language: grafanaLang });
                try {
                    const r = await httpPatch(
                        grafanaUrl + '/api/user/preferences',
                        {
                            'Content-Type': 'application/json',
                            'Content-Length': Buffer.byteLength(payload),
                            'X-WEBAUTH-USER': username
                        },
                        payload
                    );
                    if (r.status === 200) {
                        adapter.log.debug(`[mywebui/WebExt] lang synced: ${username} → ${grafanaLang}`);
                        res.json({ success: true });
                    } else {
                        adapter.log.warn(`[mywebui/WebExt] Grafana ${r.status}: ${r.body}`);
                        res.status(502).json({ error: `Grafana HTTP ${r.status}` });
                    }
                } catch (e) {
                    adapter.log.warn(`[mywebui/WebExt] lang sync error: ${e.message}`);
                    res.status(500).json({ error: e.message });
                }
            });
            adapter.log.info('[mywebui/WebExt] /mywebui-grafana-lang registered (session-verified)');
        }
    }
}

module.exports = MywebuiWebExtension;
