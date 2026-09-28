const s=b;function a(){const a2=['start','iobroker-webui-report-viewer','Generating…','the\x20server\x20refused\x20the\x20run','setAttribute','\x20(history)','format','toState','_status','whenDataReady','433059zaEBqa','436045YZHpnH','\x20—\x20','top','kind','Cancelled.','271280ceEqWU','screenName','loadWhat','catch','paper','getMonth','removeAttribute','today','_toolbarWanted','now','getTime','btnGen','error','getWebuiObject','clientWidth','success','then','template','connection','342OxvgIQ','reportName','history','Report\x20not\x20found:\x20','createElement','appendChild','printMargins','trim','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','includes','admin','change','isArray','placeholders','report-generated','36mOKoEp','_getDomElement','whenScreenReady','Downloaded:\x20','padStart','Cancelled\x20by\x20the\x20report\x20script.','getState','addEventListener','ies','btnSave','items','117846jrCbBI','show','reportRange','waitedMs','calc(','__report-page-rule','2521442BJjLQd','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','[data-tb]','add','report-ready','style','endFetchTracking','[data-tb=\x22','@page\x20{\x20size:\x20','err','textContent','_rootShadow','generateTimeoutMs','type','\x20control(s)\x20shown\x20as\x20placeholders','rangeTo','round','display:block;width:100%;height:100%;','join','rangeKind','val','function','objectType','width','btnIn','btnPrint','Range:\x20','@top-left\x20{\x20content:\x20\x22\x22;\x20}','get','value','zoomLabel','height','end','Pick\x20both\x20dates.','Not\x20generated\x20—\x20','Generating\x20on\x20the\x20server…','marginBottom','mm;\x20','210mm','outstandingFetches','max','custom','remove','push','range','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','forEach','length','Loading\x20data…','status','getMinutes','report-generate-failed','\x20*\x20','6828NnhsvP','html','toolbarVisible','map','_paper','loadLog','report-range-changed','_restoreCachedInititalValues','min','_viewer','disabled','date','print','load','_zoomLabel','toLocaleTimeString','connectedCallback','rangeFrom','parse','download','32UbwUqH','number','yesterday','report','toolbox','action','getElementById','viewer','file','hidden','disable','lastRun','transform','has','filter','\x20value','groups','getDate','6acbKPD','1163805jJwABF','toggle','project','rangeBoxes','setReportRange','_parseAttributesToProperties','scrollHeight','settings','2maLumi','unsubscribeState','\x20more)','hide','_bar','pages','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','page','all','isFinite','canSaveReportsOnServer','\x20history\x20quer','querySelectorAll','\x20→\x20'];a=function(){return a2;};return a();}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1f3))/0x1*(-parseInt(r(0x1da))/0x2)+-parseInt(r(0x20b))/0x3*(parseInt(r(0x1ab))/0x4)+parseInt(r(0x1d2))/0x5*(parseInt(r(0x1d1))/0x6)+-parseInt(r(0x22b))/0x7+parseInt(r(0x1bf))/0x8*(parseInt(r(0x225))/0x9)+-parseInt(r(0x1f8))/0xa+-parseInt(r(0x1f2))/0xb*(-parseInt(r(0x21a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3ed4d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1a7;const e=a();let f=e[c];return f;}import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static [s(0x230)]=css`
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
    `;static [s(0x209)]=html`
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
    `;#zoom=0x1;#reportName;get['reportName'](){return this.#reportName;}set[s(0x20c)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x1b2)]();}['ready'](){const u=s,c=this.#reportName;this[u(0x1d7)]();if(c&&!this.#reportName)this.#reportName=c;this[u(0x1de)]=this['_getDomElement']('bar'),this['_paper']=this[u(0x21b)](u(0x1fc)),this[u(0x1b4)]=this['_getDomElement'](u(0x1c6)),this['_status']=this[u(0x21b)](u(0x1a7)),this[u(0x1b9)]=this[u(0x21b)](u(0x249)),this['_viewer'][u(0x241)]='report',this.#watchReport();const d=(e,f)=>this[u(0x21b)](e)?.['addEventListener']('click',f);d(u(0x243),()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x244),()=>this.#print()),this.#initRange(),d(u(0x203),()=>this.#generate(u(0x1ac))),d(u(0x223),()=>this.#generate(u(0x1ac),u(0x1c7))),iobrokerHandler[u(0x1e4)]?.()[u(0x208)](e=>{const v=u,f=this[v(0x21b)]('btnSave');if(f)f['hidden']=!e;})[u(0x1fb)](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),d('btnBar',()=>this[u(0x1ad)]=![]),d('btnShow',()=>this[u(0x1ad)]=!![]);if(this[u(0x200)]!==undefined)this['toolbarVisible']=this['_toolbarWanted'];if(this.#reportName)this.#load();}set[s(0x1ad)](c){const w=s;this['_toolbarWanted']=!!c;if(this['_bar'])this['_bar'][w(0x1c8)]=!c;if(this['_showBtn'])this['_showBtn']['hidden']=!!c;}get[s(0x1ad)](){const x=s;return this[x(0x1de)]?!this[x(0x1de)]['hidden']:this[x(0x200)]??!![];}async #load(){const y=s;if(!this[y(0x1b4)])return;this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x205)]('report',this.#reportName);if(!c){this.#busy(null),this.#say(y(0x20e)+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper']['style'][y(0x242)]=d[y(0x242)]??y(0x251),this[y(0x1af)][y(0x230)][y(0x24a)]=d['height']??'297mm',this['_viewer'][y(0x230)]['cssText']=y(0x23c);const e=d[y(0x1e1)]??{};this.#pageRule(e,d[y(0x211)]),await this.#applyToolbox(d[y(0x1c3)]),iobrokerHandler['beginFetchTracking']();if(this[y(0x1b4)][y(0x1f9)]===this.#reportName)await this['_viewer']['reload']();else await this['_viewer']['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this[y(0x1b4)],this[y(0x1b4)][y(0x236)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this[y(0x1b4)][y(0x21c)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[y(0x1b4)][y(0x1f1)]();f(),iobrokerHandler[y(0x231)](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this['_viewer'],this['_viewer'][y(0x236)],{'missing':g}),this.#emit(y(0x22f),{'name':this.#reportName,'missing':g});if(g[y(0x25a)])this.#say('No\x20value\x20from:\x20'+g['slice'](0x0,0x3)['map'](h=>h['id'])['join'](',\x20')+(g['length']>0x3?'\x20…':''),!![]);}#missing=[];[s(0x237)]=0xea60;#hook(c,...d){const z=s,f=this[z(0x1b4)]?.['_scriptObject']?.[c];if(typeof f!==z(0x240))return undefined;try{return f(...d);}catch(g){return console['error']('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const A=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[A(0x1b4)]??this)['dispatchEvent'](f),f;}#pageRule(c,d){const B=s;if(this['parentElement']!==document['body'])return;const e=B(0x22a);document[B(0x1c5)](e)?.[B(0x255)]();const f=document[B(0x20f)]('style');f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?'\x20landscape':''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[B(0x1b6)])k['push'](B(0x246));if(!j['title'])k['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j['url'])k['push'](B(0x213),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}');if(!j['pageNumber'])k['push'](B(0x22c));f['textContent']=B(0x233)+g+';\x20margin:\x20'+i(h[B(0x1f5)])+'mm\x20'+i(h['right'])+'mm\x20'+i(h['bottom'])+'mm\x20'+i(h['left'])+B(0x250)+k[B(0x23d)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][B(0x210)](f);}#setZoom(c){const C=s;this.#zoom=Math['min'](0x4,Math[C(0x253)](0.1,c)),this[C(0x1af)][C(0x230)][C(0x1cb)]='scale('+this.#zoom+')',this['_paper']['style'][C(0x24f)]=C(0x229)+this[C(0x1af)][C(0x230)]['height']+C(0x1aa)+(this.#zoom-0x1)+')',this[C(0x1b9)][C(0x235)]=Math[C(0x23b)](this.#zoom*0x64)+'%';}#fit(){const D=s,c=this['_getDomElement']('scroll')[D(0x206)]-0x24,d=this[D(0x1af)]['getBoundingClientRect']()[D(0x242)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[D(0x1b3)](0x1,c/d));}#print(){const E=s;window[E(0x1b7)]();}async #applyToolbox(d){const F=s,f=d?.[F(0x224)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.['groups']??[],i=g?.['id']===F(0x215),j=this['_bar']??this['_getDomElement']('bar');if(!j)return;for(const l of j['querySelectorAll'](F(0x22d)))l[F(0x1fe)]('data-tb-off');for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n[F(0x226)]===![])o='hide';else{if(!i&&Array[F(0x217)](n[F(0x1cf)])&&n[F(0x1cf)][F(0x25a)]&&!n['groups']['some'](p=>h[F(0x214)](p)))o=n[F(0x1c4)]===F(0x1c9)?F(0x1c9):F(0x1dd);}if(!o)continue;for(const p of j[F(0x1e6)](F(0x232)+m+'\x22]'))p[F(0x1ec)]('data-tb-off',o);}}#initRange(){const G=s,c=this['_getDomElement'](G(0x23e)),d=this['_getDomElement'](G(0x1bc)),e=this['_getDomElement'](G(0x23a)),f=this['_getDomElement']('btnApply');if(!c)return;const g=this[G(0x21b)]('rangeBoxes'),h=i=>{if(g)g['hidden']=!i;};c[G(0x221)](G(0x216),()=>{const H=G;if(c[H(0x248)]===H(0x254)){const i=iobrokerHandler[H(0x227)]??this.#namedRange('today');if(d&&!d[H(0x248)])d['value']=this.#toLocalInput(i[H(0x1e8)]);if(e&&!e[H(0x248)])e['value']=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c['value']==='report'?null:this.#namedRange(c[H(0x248)]));}),f?.[G(0x221)]('click',()=>{const I=G,i=d?.[I(0x248)]?new Date(d[I(0x248)])['getTime']():NaN,j=e?.[I(0x248)]?new Date(e[I(0x248)])['getTime']():NaN;if(!Number[I(0x1e3)](i)||!Number[I(0x1e3)](j)){this.#say(I(0x24c),!![]);return;}if(i>=j){this.#say('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const J=s,e=new Date(c),f=g=>String(g)[J(0x21e)](0x2,'0');return e['getFullYear']()+'-'+f(e[J(0x1fd)]()+0x1)+'-'+f(e['getDate']())+'T'+f(e['getHours']())+':'+f(e[J(0x1a8)]());}#namedRange(c){const K=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[K(0x1fd)](),g[K(0x1d0)]())['getTime'](),f=0x5265c00;switch(c){case K(0x1ff):return{'start':e(d),'end':d['getTime']()};case K(0x1c1):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d[K(0x202)]()};case'30d':return{'start':d[K(0x202)]()-0x1e*f,'end':d['getTime']()};case'month':return{'start':new Date(d['getFullYear'](),d[K(0x1fd)](),0x1)[K(0x202)](),'end':d['getTime']()};case'year':return{'start':new Date(d['getFullYear'](),0x0,0x1)['getTime'](),'end':d[K(0x202)]()};default:return{'start':d['getTime']()-f,'end':d[K(0x202)]()};}}async #applyRange(c){const L=s;iobrokerHandler[L(0x1d6)](c),this.#say(c?L(0x245)+new Date(c[L(0x1e8)])['toLocaleString']()+'\x20→\x20'+new Date(c[L(0x24b)])['toLocaleString']():'Report\x20default\x20range'),this.#emit(L(0x1b1),{'range':c}),await this.#load();}async #wireRangeStates(c){const M=s,d=(c?.['fromState']??'')['trim'](),e=(c?.[M(0x1ef)]??'')[M(0x212)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const N=M;if(k==null||k==='')return null;if(typeof k===N(0x1c0))return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)['trim']()!=='')return l;const m=Date[N(0x1bd)](String(k));return Number[N(0x1e3)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const O=M,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler[O(0x227)];if(n&&n['start']===l&&n['end']===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+O(0x1e7)+new Date(m)['toLocaleString']());const o=this['_getDomElement'](O(0x23e));if(o)o['value']=O(0x1c2);const p=this[O(0x21b)](O(0x1d5));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const P=b;g[l]=f(q?.[P(0x23f)]),h(!![])[P(0x1fb)](()=>{});};try{i['push']([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console['warn']('[report]\x20range\x20state\x20'+k,p);}};await j(d,'start'),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const Q=M;for(const [k,l]of i){try{iobrokerHandler[Q(0x1db)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){super['disconnectedCallback']?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}[s(0x1bb)](){const R=s;super[R(0x1bb)]?.();if(this[R(0x1de)])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const S=b;if(c?.[S(0x238)]!==S(0x1c2)||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject']('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f[S(0x1d9)]??{};this['_paper']&&(this['_paper'][S(0x230)]['width']=g[S(0x242)]??S(0x251),this[S(0x1af)][S(0x230)][S(0x24a)]=g['height']??'297mm'),this.#pageRule(g['page']??{},g[S(0x211)]),await this.#applyToolbox(g[S(0x1c3)]),this.#fit();});}#busy(c,e){const T=s,f=this[T(0x21b)](T(0x1b8));if(!f)return;if(c==null){f['hidden']=!![];return;}f['hidden']=![];const g=this[T(0x21b)](T(0x1fa)),h=this['_getDomElement']('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h[T(0x235)]=e;}#logReset(){const U=s,c=this[U(0x21b)](U(0x1b0));if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const V=s,d=this[V(0x21b)]('loadLog');if(!d||this.#logged[V(0x1cc)](c))return;this.#logged[V(0x22e)](c);const e=new Date()[V(0x1ba)]();d['textContent']+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d[V(0x1d8)];}#watchFetches(){const W=s,c=Date[W(0x201)](),d=0xbb8,e=()=>{const X=W,g=iobrokerHandler[X(0x252)]();if(!g[X(0x25a)]){this.#busy('Rendering…','');return;}const i=g[X(0x1cd)](m=>m[X(0x1f6)]===X(0x20d))[X(0x25a)],j=g[X(0x25a)]-i,k=[];if(j)k[X(0x256)](j+X(0x1ce)+(j>0x1?'s':''));if(i)k['push'](i+X(0x1e5)+(i>0x1?X(0x222):'y'));const l=Math['round']((Date['now']()-c)/0x3e8);this.#busy(X(0x25b),k[X(0x23d)]('\x20and\x20')+'\x20outstanding\x20—\x20'+l+'s');for(const m of g)if(m[X(0x228)]>d)this.#log('still\x20waiting:\x20'+m['id']+(m[X(0x1f6)]===X(0x20d)?X(0x1ed):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Z=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const Y=b;try{return(await iobrokerHandler[Y(0x20a)][Y(0x220)](f+'.'+l))?.[Y(0x23f)];}catch(m){return undefined;}},h=Date[Z(0x201)](),i=await g('lastRun');let j=![];while(Date[Z(0x201)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[Z(0x1e2)]([g('lastStatus'),g(Z(0x1ca))]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(Z(0x24e),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k===Z(0x204))return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':Z(0x1e0)};}#say(c,d){const a0=s;if(!this['_status'])return;this[a0(0x1f0)]['textContent']=c,this[a0(0x1f0)]['classList'][a0(0x1d3)](a0(0x234),!!d);}async #generate(c=s(0x1ac),d=s(0x1be)){const a1=s,f=[a1(0x203),a1(0x223)][a1(0x1ae)](i=>this[a1(0x21b)](i))['filter'](Boolean);f['forEach'](i=>i[a1(0x1b5)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say(a1(0x21f));return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say(a1(0x1f7));return;}h['format']=g[a1(0x1ee)],h[a1(0x257)]=g[a1(0x257)];if(this.#missing['length']){const j=this.#missing['slice'](0x0,0x3)['map'](k=>k['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing[a1(0x25a)]>0x3?'\x20(+'+(this.#missing[a1(0x25a)]-0x3)+a1(0x1dc):''));}this.#say(a1(0x1ea)),this.#busy(g['deliver']==='file'?a1(0x24e):'Generating…',a1(0x258));const i=await iobrokerHandler['generateReport'](g['name'],{'project':g[a1(0x1d4)],'format':g['format'],'range':g[a1(0x257)],'deliver':g['deliver'],'timeoutMs':this[a1(0x237)]});if(i['viaTrigger']){const k=await this.#awaitServerRun(g['name'],g['project']);if(!k['ok'])throw new Error(k[a1(0x204)]||a1(0x1eb));h={...h,'success':!![],'file':k[a1(0x1c7)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k[a1(0x1c7)]??''));}else{h={...h,'success':!![],'file':i[a1(0x1c7)]??null,'pages':i[a1(0x1df)]??null};const l=i[a1(0x218)]?.['length']?a1(0x1f4)+i['placeholders'][a1(0x25a)]+a1(0x239):'';this.#say(a1(0x21d)+(i['file']??'')+l);}}catch(m){h[a1(0x204)]=m?.['message']??String(m),this.#say(a1(0x24d)+h['error'],!![]);}finally{f[a1(0x259)](n=>n[a1(0x1b5)]=![]),this.#busy(null);}this.#emit(h[a1(0x207)]?a1(0x219):a1(0x1a9),h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}if(!customElements[s(0x247)]('iobroker-webui-report-viewer'))customElements['define'](s(0x1e9),ReportViewer);