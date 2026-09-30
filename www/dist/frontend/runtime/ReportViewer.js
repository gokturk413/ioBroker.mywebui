const s=b;function a(){const X=['file','1672688xbYvTb','show','format','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','style','Downloaded:\x20','classList','reportName','setAttribute','objectsChanged','var(--ui-page,\x20#fff)','lastError','reload',';\x20margin:\x20','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','\x20—\x20','\x20history\x20quer','report-generate-failed','toLocaleString','\x20landscape','value','namespace','generateTimeoutMs','bar','canSaveReportsOnServer','action','805032JpjzoO','trim','slice','btnShow','loadWhat','isArray','_paper','isFinite','push','getMonth','filter','paper','range','rangeKind','disabled','_zoomLabel','mm\x20','loadLog','getCurrentUser','Range\x20from\x20states:\x20','#fff','The\x20server\x20is\x20rendering\x20the\x20report.','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','rangeFrom','add','height','some','number','dispose','getMinutes','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','includes','still\x20waiting:\x20','type','lastFile','_bar','dataset','_getDomElement','report','430938CRlxAu','page','report-range-changed','click','14OJpdhl','onReportLoad','date','_status','btnGen','setReportRange','200735CGYxtr','16qjzYDq','setScreenNameAndLoad','_viewer','\x20outstanding\x20—\x20','connection','now','btnBar','orientation','parentElement','iobroker-webui-report-viewer','rangeBoxes','83108ytVLKa','1647734SIAmsS','\x20more)','hidden','error','@top-left\x20{\x20content:\x20\x22\x22;\x20}','start','afterGenerate','\x20value','join','toolbox','@top-center\x20{\x20content:\x20\x22\x22;\x20}','textContent','min','No\x20value\x20from:\x20','319170AzfeIq','@page\x20{\x20size:\x20','success','querySelectorAll','name','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','data','printMargins','removeAttribute','Building\x20the\x20page…','history','ies','Generating\x20on\x20the\x20server…','warn','size','theme','clientWidth','subscribeState','Report\x20default\x20range','url','2wDLxgw','60SNHCoT','_showBtn','\x20*\x20','documentElement','groups','change','beforeGenerate','forEach','getFullYear','report-ready','createElement','entries','settings','\x20(history)',';color:var(--ui-text,\x20#1d2733);}','btnIn','Generating…','mm;\x20','lastRun','screenName','admin','head','210mm','_toolbarWanted','report-generated','runtime','117KZerhL','today','map','length','catch','html','scroll','getElementById','width','display:block;width:100%;height:100%;','reportRange','\x20→\x20','getTime','viewer','viaTrigger','getState','webuiTheme','hide','Rendering…'];a=function(){return X;};return a();}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1a8))/0x1*(-parseInt(r(0x122))/0x2)+parseInt(r(0x192))/0x3+parseInt(r(0x19d))/0x4*(-parseInt(r(0x19c))/0x5)+parseInt(r(0x16b))/0x6*(parseInt(r(0x196))/0x7)+parseInt(r(0x151))/0x8+parseInt(r(0x13d))/0x9*(parseInt(r(0x1b7))/0xa)+parseInt(r(0x1a9))/0xb*(-parseInt(r(0x123))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3328b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static ['style']=css`
        /* Loading overlay: a report opens by fetching everything it binds, and a year of
           history takes as long as it takes. Without this the sheet is simply blank and the
           operator cannot tell a slow load from a broken one (owner, 2026-09-27). */
        #load {
            position: absolute; inset: 0; z-index: 20;
            display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
            background: color-mix(in srgb, var(--ui-surface-2, #2f3545) 88%, transparent);
            color: var(--ui-text, #e8e8ea); font: 13px 'Segoe UI', sans-serif;
        }
        #load[hidden] { display: none; }
        #load .spin {
            width: 28px; height: 28px; border-radius: 50%;
            border: 3px solid var(--ui-border, #4a5570); border-top-color: var(--accent, #2680eb);
            animation: spin 900ms linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { #load .spin { animation-duration: 3s; } }
        #load .what { font-weight: 600; }
        #load .detail { font-size: 11px; color: var(--ui-dim, #9aa3b0); max-width: 70%; text-align: center; line-height: 1.5; }
        #load .log {
            margin-top: 4px; max-height: 32vh; overflow: auto; width: min(620px, 80%);
            font: 11px/1.6 ui-monospace, Consolas, monospace; color: var(--ui-dim, #9aa3b0);
            background: var(--ui-surface, #252b38); border: 1px solid var(--ui-border, #4a5570);
            border-radius: 4px; padding: 6px 8px; white-space: pre-wrap;
        }
        #load .log:empty { display: none; }
        @media print { #load { display: none !important; } }
        :host {
            display: block;
            width: 100%;
            height: 100%;
            overflow: auto;
            /* the loading overlay is positioned against this box */
            position: relative;
            background: var(--ui-surface-2, #2f3545);
            /* A neutral grey behind the sheet, like every print preview: the paper has to read
               as paper, so it cannot sit on the theme's own surface colour. */
            --paper-shadow: 0 2px 14px rgb(0 0 0 / .35);
        }
        #bar {
            position: sticky;
            top: 0;
            z-index: 10;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 4px;
            padding: 6px 10px;
            background: var(--ui-surface, #252b38);
            border-bottom: 1px solid var(--ui-border, #4a5570);
            font: 500 12px/1.4 'Source Sans Pro', ui-sans-serif, system-ui, sans-serif;
            color: var(--ui-text, #e8eaf0);
        }
        #bar[hidden] { display: none !important; }
        button {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: transparent;
            color: var(--ui-text, #e8eaf0);
            border: 1px solid transparent;
            border-radius: 6px;
            padding: 5px 8px;
            font: inherit;
            cursor: pointer;
            transition: background .12s, border-color .12s, color .12s;
        }
        button:hover:not(:disabled) { background: var(--ui-surface-2, #2f3545); border-color: var(--ui-border, #4a5570); }
        button:active:not(:disabled) { background: var(--ui-border, #4a5570); }
        button:focus-visible { outline: 2px solid var(--accent, #2680eb); outline-offset: -1px; }
        button:disabled { opacity: .45; cursor: default; }
        /* the action that produces something gets the accent; the rest stay quiet */
        button.primary { background: var(--accent, #2680eb); color: #fff; border-color: transparent; }
        button.primary:hover:not(:disabled) { background: var(--accent, #2680eb); filter: brightness(1.12); border-color: transparent; }
        /* icons are drawn as SVG so they follow the theme colour and the print rules, unlike
           emoji, which print as bitmaps and ignore currentColor */
        button svg, .icon svg { width: 15px; height: 15px; flex: none; stroke: currentColor; fill: none;
            stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .iconbtn { padding: 5px; }
        select, input[type="datetime-local"] {
            background: var(--ui-surface-2, #2f3545);
            color: var(--ui-text, #e8eaf0);
            border: 1px solid var(--ui-border, #4a5570);
            border-radius: 6px;
            padding: 4px 6px;
            font: inherit;
            cursor: pointer;
        }
        select:hover, input[type="datetime-local"]:hover { border-color: var(--accent, #2680eb); }
        select:focus-visible, input:focus-visible { outline: 2px solid var(--accent, #2680eb); outline-offset: -1px; }
        input[type="datetime-local"] { cursor: text; }
        .range { display: inline-flex; align-items: center; gap: 4px; }
        /* display:inline-flex beats the hidden attribute, so the date boxes stayed on the bar
           for every named range. Same trap as #btnShow above. */
        .range[hidden] { display: none !important; }
        /* toolbox parts switched off for this user (settings.toolbox) */
        [data-tb-off="hide"] { display: none !important; }
        [data-tb-off="disable"] { opacity: .4; pointer-events: none; }
        .range .arrow { opacity: .5; font-size: 11px; }
        .sep { width: 1px; height: 20px; background: var(--ui-border, #4a5570); margin: 0 4px; opacity: .7; }
        #btnShow {
            position: fixed;
            top: 6px;
            right: 10px;
            z-index: 11;
            opacity: .6;
            background: var(--ui-surface, #252b38);
            border-color: var(--ui-border, #4a5570);
            box-shadow: 0 1px 4px rgb(0 0 0 / .2);
        }
        #btnShow:hover { opacity: 1; }
        /* The hidden attribute alone loses to the position:fixed rule above, so the button
           would stay on screen while reporting itself as hidden. Make the attribute win. */
        #btnShow[hidden] { display: none !important; }
        @media print { #btnShow { display: none !important; } }
        .grow { flex: 1; }
        #zoomLabel { min-width: 42px; text-align: center; opacity: .85; }
        #status { font-size: 11px; opacity: .8; }
        #status.err { color: var(--ui-error, #e2574c); opacity: 1; }
        #scroll { padding: 18px; display: flex; justify-content: center; }
        #paper {
            background: #fff;
            box-shadow: var(--paper-shadow);
            transform-origin: top center;
            flex: none;
        }
        /* Print: only the sheet, at its true size, with no chrome around it. */
        @media print {
            :host { background: #fff; overflow: visible; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            #bar { display: none !important; }
            #scroll { padding: 0; display: block; }
            #paper { box-shadow: none; transform: none !important; }
        }
    `;static ['template']=html`
        <div id="bar">
            <button id="btnOut" data-tb="zoom" class="iconbtn" title="Zoom out" aria-label="Zoom out">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M8 11h6M20 20l-4.5-4.5"/></svg></button>
            <span id="zoomLabel" data-tb="zoom">100%</span>
            <button id="btnIn" data-tb="zoom" class="iconbtn" title="Zoom in" aria-label="Zoom in">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M8 11h6M11 8v6M20 20l-4.5-4.5"/></svg></button>
            <button id="btnFit" data-tb="zoom" title="Fit to width">
                <svg viewBox="0 0 24 24"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/></svg>Fit</button>
            <div class="sep"></div>
            <!-- Time range: a report that reads history is meaningless without one, and the
                 range belongs to the REPORT, not to a picker someone remembered to wire up.
                 Choosing here reloads the report, so tables are rebuilt with the new data.
                 The two date boxes appear only for "Custom": a range needs a start AND an end,
                 and for a named range the dates are implied. -->
            <span class="icon" data-tb="range" title="Time range">
                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span>
            <select id="rangeKind" data-tb="range" title="Time range">
                <option value="report">Report default</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="month">This month</option>
                <option value="year">This year</option>
                <option value="custom">Custom…</option>
            </select>
            <span class="range" id="rangeBoxes" data-tb="range" hidden>
                <input id="rangeFrom" type="datetime-local" title="From (start of the range)">
                <span class="arrow">→</span>
                <input id="rangeTo" type="datetime-local" title="To (end of the range)">
                <button id="btnApply" title="Load the report for this range">
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Apply</button>
            </span>
            <div class="sep"></div>
            <button id="btnPrint" data-tb="print" title="Print / save as PDF">
                <svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2"/><rect x="8" y="14" width="8" height="7"/></svg>Print</button>
            <button id="btnGen" data-tb="generate" class="primary" title="Generate and download to this computer">
                <svg viewBox="0 0 24 24"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></svg>Generate</button>
            <button id="btnSave" data-tb="save" hidden title="Generate and save to the report's output folder on the server">
                <svg viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>Save on server</button>
            <div class="sep"></div>
            <span id="status"></span>
            <span class="grow"></span>
            <button id="btnBar" data-tb="hide" class="iconbtn" title="Hide toolbar" aria-label="Hide toolbar">
                <svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg></button>
        </div>
        <!-- Once the bar is hidden there has to be a way back, or the toolbox is a one-way
             door: a thin tab in the corner, out of the way but always reachable. -->
        <button id="btnShow" class="iconbtn" hidden title="Show toolbar" aria-label="Show toolbar">
            <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
        <div id="load" hidden>
            <div class="spin"></div>
            <div class="what" id="loadWhat">Loading…</div>
            <div class="detail" id="loadDetail"></div>
            <div class="log" id="loadLog"></div>
        </div>
        <div id="scroll">
            <div id="paper">
                <iobroker-webui-screen-viewer id="viewer"></iobroker-webui-screen-viewer>
            </div>
        </div>
    `;#zoom=0x1;#reportName;get[s(0x158)](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const t=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[t(0x18e)]=this['_getDomElement'](t(0x168)),this[t(0x171)]=this['_getDomElement'](t(0x176)),this[t(0x19f)]=this[t(0x190)](t(0x14a)),this['_status']=this['_getDomElement']('status'),this['_zoomLabel']=this['_getDomElement']('zoomLabel'),this[t(0x19f)]['objectType']=t(0x191),this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.['addEventListener'](t(0x195),f);d(t(0x132),()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(t(0x19a),()=>this.#generate(t(0x142))),d('btnSave',()=>this.#generate(t(0x142),'file')),iobrokerHandler[t(0x169)]?.()['then'](e=>{const f=this['_getDomElement']('btnSave');if(f)f['hidden']=!e;})[t(0x141)](()=>{}),this[t(0x124)]=this[t(0x190)](t(0x16e)),d(t(0x1a3),()=>this['toolbarVisible']=![]),d('btnShow',()=>this['toolbarVisible']=!![]);if(this['_toolbarWanted']!==undefined)this['toolbarVisible']=this['_toolbarWanted'];if(this.#reportName)this.#load();}set['toolbarVisible'](c){const u=s;this[u(0x13a)]=!!c;if(this['_bar'])this['_bar']['hidden']=!c;if(this[u(0x124)])this[u(0x124)][u(0x1ab)]=!!c;}get['toolbarVisible'](){const v=s;return this['_bar']?!this[v(0x18e)]['hidden']:this[v(0x13a)]??!![];}async #load(){const w=s;if(!this[w(0x19f)])return;this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject']('report',this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c[w(0x12f)]??{};this['_paper'][w(0x155)]['width']=d[w(0x145)]??w(0x139),this['_paper']['style']['height']=d[w(0x184)]??'297mm',this['_viewer'][w(0x155)]['cssText']=w(0x146),this.#applyTheme(d[w(0x11d)]);const e=d['page']??{};this.#pageRule(e,d['printMargins']),await this.#applyToolbox(d['toolbox']),iobrokerHandler['beginFetchTracking']();if(this[w(0x19f)][w(0x136)]===this.#reportName)await this[w(0x19f)][w(0x15d)]();else await this[w(0x19f)][w(0x19e)](this.#reportName);this.#fit(),this.#hook(w(0x197),this[w(0x19f)],this['_viewer']['_rootShadow']),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d[w(0x1bd)]),this.#busy(w(0x1c0),''),await this[w(0x19f)]['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[w(0x19f)]['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this['_viewer'],this['_viewer']['_rootShadow'],{'missing':g}),this.#emit(w(0x12c),{'name':this.#reportName,'missing':g});if(g['length'])this.#say(w(0x1b6)+g[w(0x16d)](0x0,0x3)['map'](h=>h['id'])['join'](',\x20')+(g[w(0x140)]>0x3?'\x20…':''),!![]);}#missing=[];[s(0x167)]=0xea60;#hook(c,...d){const f=this['_viewer']?.['_scriptObject']?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console['error']('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)['dispatchEvent'](f),f;}#pageRule(c,d){const x=s;if(this[x(0x1a5)]!==document['body'])return;const e='__report-page-rule';document[x(0x144)](e)?.['remove']();const f=document[x(0x12d)](x(0x155));f['id']=e;const g=(c[x(0x1c5)]??'A4')+(c[x(0x1a4)]==='landscape'?x(0x164):''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[x(0x198)])k[x(0x173)](x(0x1ad));if(!j['title'])k[x(0x173)](x(0x1b3),'@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j[x(0x121)])k[x(0x173)](x(0x15f),x(0x189));if(!j['pageNumber'])k['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f[x(0x1b4)]=x(0x1b8)+g+x(0x15e)+i(h['top'])+'mm\x20'+i(h['right'])+x(0x17b)+i(h['bottom'])+'mm\x20'+i(h['left'])+x(0x134)+k[x(0x1b1)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[x(0x138)]['appendChild'](f);}#setZoom(c){const y=s;this.#zoom=Math[y(0x1b5)](0x4,Math['max'](0.1,c)),this[y(0x171)]['style']['transform']='scale('+this.#zoom+')',this[y(0x171)]['style']['marginBottom']='calc('+this[y(0x171)][y(0x155)]['height']+y(0x125)+(this.#zoom-0x1)+')',this[y(0x17a)][y(0x1b4)]=Math['round'](this.#zoom*0x64)+'%';}#fit(){const z=s,c=this['_getDomElement'](z(0x143))[z(0x11e)]-0x24,d=this[z(0x171)]['getBoundingClientRect']()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const A=s,f=d?.['items']??{};let g=null;try{g=await iobrokerHandler[A(0x17d)]();}catch(k){}const h=g?.[A(0x127)]??[],i=g?.['id']===A(0x137),j=this['_bar']??this['_getDomElement'](A(0x168));if(!j)return;for(const l of j[A(0x1ba)]('[data-tb]'))l[A(0x1bf)]('data-tb-off');for(const [m,n]of Object[A(0x12e)](f)){if(!n)continue;let o=null;if(n[A(0x152)]===![])o='hide';else{if(!i&&Array[A(0x170)](n['groups'])&&n['groups'][A(0x140)]&&!n['groups'][A(0x185)](p=>h[A(0x18a)](p)))o=n[A(0x16a)]==='disable'?'disable':A(0x14e);}if(!o)continue;for(const p of j[A(0x1ba)]('[data-tb=\x22'+m+'\x22]'))p[A(0x159)]('data-tb-off',o);}}#initRange(){const B=s,c=this['_getDomElement'](B(0x178)),d=this[B(0x190)](B(0x182)),e=this['_getDomElement']('rangeTo'),f=this['_getDomElement']('btnApply');if(!c)return;const g=this['_getDomElement']('rangeBoxes'),h=i=>{if(g)g['hidden']=!i;};c['addEventListener'](B(0x128),()=>{const C=B;if(c['value']==='custom'){const i=iobrokerHandler[C(0x147)]??this.#namedRange(C(0x13e));if(d&&!d['value'])d['value']=this.#toLocalInput(i['start']);if(e&&!e[C(0x165)])e[C(0x165)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c[C(0x165)]===C(0x191)?null:this.#namedRange(c['value']));}),f?.['addEventListener'](B(0x195),()=>{const D=B,i=d?.[D(0x165)]?new Date(d[D(0x165)])['getTime']():NaN,j=e?.[D(0x165)]?new Date(e[D(0x165)])['getTime']():NaN;if(!Number['isFinite'](i)||!Number['isFinite'](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say(D(0x1bc),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const E=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e[E(0x12b)]()+'-'+f(e[E(0x174)]()+0x1)+'-'+f(e['getDate']())+'T'+f(e['getHours']())+':'+f(e[E(0x188)]());}#namedRange(c){const F=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g['getMonth'](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d[F(0x149)]()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[F(0x149)]()-0x7*f,'end':d['getTime']()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d['getTime']()};case'month':return{'start':new Date(d[F(0x12b)](),d[F(0x174)](),0x1)[F(0x149)](),'end':d['getTime']()};case'year':return{'start':new Date(d['getFullYear'](),0x0,0x1)[F(0x149)](),'end':d['getTime']()};default:return{'start':d[F(0x149)]()-f,'end':d[F(0x149)]()};}}async #applyRange(c){const G=s;iobrokerHandler[G(0x19b)](c),this.#say(c?'Range:\x20'+new Date(c['start'])['toLocaleString']()+G(0x148)+new Date(c['end'])[G(0x163)]():G(0x120)),this.#emit(G(0x194),{'range':c}),await this.#load();}async #wireRangeStates(c){const H=s,d=(c?.['fromState']??'')[H(0x16c)](),e=(c?.['toState']??'')[H(0x16c)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const I=H;if(k==null||k==='')return null;if(typeof k===I(0x186))return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)[I(0x16c)]()!=='')return l;const m=Date['parse'](String(k));return Number[I(0x172)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const J=H,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler[J(0x147)];if(n&&n['start']===l&&n['end']===m)return;iobrokerHandler[J(0x19b)]({'start':l,'end':m}),this.#say(J(0x17e)+new Date(l)[J(0x163)]()+'\x20→\x20'+new Date(m)['toLocaleString']());const o=this['_getDomElement'](J(0x178));if(o)o['value']=J(0x191);const p=this[J(0x190)](J(0x1a7));if(p)p[J(0x1ab)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const K=H;try{const n=await iobrokerHandler[K(0x14c)](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{g[l]=f(q?.['val']),h(!![])['catch'](()=>{});};try{i[K(0x173)]([k,m,await iobrokerHandler[K(0x11f)](k,m)]);}catch(p){console[K(0x1c4)]('[report]\x20range\x20state\x20'+k,p);}};await j(d,H(0x1ae)),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const L=s;super['disconnectedCallback']?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[L(0x187)](),this.#reportChangedSub=null;}['connectedCallback'](){super['connectedCallback']?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){const M=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[M(0x15a)]['on'](async c=>{const N=M;if(c?.[N(0x18c)]!==N(0x191)||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject']('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this[N(0x171)]&&(this[N(0x171)]['style'][N(0x145)]=g['width']??N(0x139),this['_paper'][N(0x155)]['height']=g[N(0x184)]??'297mm'),this.#pageRule(g[N(0x193)]??{},g[N(0x1be)]),this.#applyTheme(g[N(0x11d)]),await this.#applyToolbox(g[N(0x1b2)]),this.#fit();});}#applyTheme(c){const O=s,d=this['shadowRoot'];if(!d)return;let e=d['getElementById']('__reportTheme');!e&&(e=document[O(0x12d)]('style'),e['id']='__reportTheme',d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[O(0x16c)]()===O(0x13c)?'':reportThemeDeclarations(f[O(0x1bb)],iobrokerHandler['config']?.['globalStyle']);e[O(0x1b4)]=':host\x20#paper{'+g+'background:'+(f['paper']?O(0x17f):O(0x15b))+O(0x131);}#busy(c,e){const P=s,f=this[P(0x190)]('load');if(!f)return;if(c==null){f[P(0x1ab)]=!![];return;}f['hidden']=![];const g=this[P(0x190)](P(0x16f)),h=this[P(0x190)]('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const Q=s,c=this['_getDomElement'](Q(0x17c));if(c)c[Q(0x1b4)]='';this.#logged=new Set();}#logged=new Set();#log(c){const R=s,d=this[R(0x190)](R(0x17c));if(!d||this.#logged['has'](c))return;this.#logged[R(0x183)](c);const e=new Date()['toLocaleTimeString']();d[R(0x1b4)]+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const S=b,g=iobrokerHandler['outstandingFetches']();if(!g[S(0x140)]){this.#busy(S(0x14f),'');return;}const i=g[S(0x175)](m=>m['kind']===S(0x1c1))['length'],j=g['length']-i,k=[];if(j)k['push'](j+S(0x1b0)+(j>0x1?'s':''));if(i)k['push'](i+S(0x161)+(i>0x1?S(0x1c2):'y'));const l=Math['round']((Date[S(0x1a2)]()-c)/0x3e8);this.#busy('Loading\x20data…',k[S(0x1b1)]('\x20and\x20')+S(0x1a0)+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log(S(0x18b)+m['id']+(m['kind']==='history'?S(0x130):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const T=s,f=iobrokerHandler[T(0x166)]+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const U=T;try{return(await iobrokerHandler[U(0x1a1)]['getState'](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[T(0x1a2)](),i=await g(T(0x135));let j=![];while(Date[T(0x1a2)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g(T(0x135))]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(T(0x1c3),T(0x180));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(T(0x18d))};if(k==='error')return{'ok':![],'error':await g(T(0x15c))};}}return{'ok':![],'error':T(0x154)};}#say(c,d){const V=s;if(!this['_status'])return;this[V(0x199)][V(0x1b4)]=c,this[V(0x199)][V(0x157)]['toggle']('err',!!d);}async #generate(c='html',d='download'){const W=s,f=[W(0x19a),'btnSave']['map'](i=>this[W(0x190)](i))['filter'](Boolean);f[W(0x12a)](i=>i['disabled']=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[W(0x147)]??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(W(0x129),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say('Cancelled.');return;}h[W(0x153)]=g[W(0x153)],h[W(0x177)]=g['range'];if(this.#missing['length']){const j=this.#missing[W(0x16d)](0x0,0x3)[W(0x13f)](k=>k['id'])[W(0x1b1)](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing[W(0x140)]>0x3?'\x20(+'+(this.#missing['length']-0x3)+W(0x1aa):''));}this.#say(W(0x133)),this.#busy(g['deliver']==='file'?W(0x1c3):'Generating…',W(0x181));const i=await iobrokerHandler['generateReport'](g[W(0x1bb)],{'project':g['project'],'format':g[W(0x153)],'range':g[W(0x177)],'deliver':g['deliver'],'timeoutMs':this[W(0x167)],'theme':document[W(0x126)][W(0x18f)][W(0x14d)]||undefined});if(i[W(0x14b)]){const k=await this.#awaitServerRun(g[W(0x1bb)],g['project']);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[W(0x150)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k[W(0x150)]??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i['pages']??null};const l=i['placeholders']?.['length']?W(0x160)+i['placeholders']['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say(W(0x156)+(i[W(0x150)]??'')+l);}}catch(m){h[W(0x1ac)]=m?.['message']??String(m),this.#say('Not\x20generated\x20—\x20'+h['error'],!![]);}finally{f[W(0x12a)](n=>n[W(0x179)]=![]),this.#busy(null);}this.#emit(h[W(0x1b9)]?W(0x13b):W(0x162),h);try{await this.#hook(W(0x1af),g,h);}catch(n){}}}if(!customElements['get']('iobroker-webui-report-viewer'))customElements['define'](s(0x1a6),ReportViewer);