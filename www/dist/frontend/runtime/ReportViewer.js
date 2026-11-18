const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x17e))/0x1*(parseInt(r(0x1ba))/0x2)+parseInt(r(0x1c4))/0x3*(-parseInt(r(0x225))/0x4)+-parseInt(r(0x18f))/0x5+parseInt(r(0x1d0))/0x6+-parseInt(r(0x1b6))/0x7+parseInt(r(0x1ad))/0x8*(-parseInt(r(0x20a))/0x9)+parseInt(r(0x1ac))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x32dfd));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';function b(c,d){c=c-0x17d;const e=a();let f=e[c];return f;}import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';function a(){const a2=['hide','Not\x20generated\x20—\x20','\x20—\x20','isArray','2750650VFpqfi','loadLog','getElementById','scale(','2sWGwOt','ies','report-ready','Cancelled\x20by\x20the\x20report\x20script.','generateTimeoutMs','\x20outstanding\x20—\x20','data-tb-off','connectedCallback','name','parse','12HCxelo','max','width','namespace','Loading\x20data…','cssText','change','placeholders','subscribeState','Report\x20not\x20found:\x20','height','scroll','138054RoHaTt','style','items','disable','slice','settings','Generating…','groups','today','getBoundingClientRect','get','reload','top','value','Pick\x20both\x20dates.','left','[report]\x20range\x20state\x20','getMinutes','html','webuiTheme','afterGenerate','zoomLabel','_getDomElement','title','btnSave','print','unsubscribeState',':host\x20#paper{','210mm','lastRun','toolbarVisible','whenScreenReady','__reportTheme','join','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','config','dispatchEvent','marginBottom','min','warn','number','reportRange','report-generated','Report\x20default\x20range','trim','pageNumber','scrollTop','isFinite','padStart','disconnectedCallback','\x20landscape','calc(','bottom','head','reportStateBase','addEventListener','Cancelled.','bar','243018niTimV','btnShow','page','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','toLocaleTimeString','hidden','report-load','project','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','end','date','getState','transform','Saved\x20on\x20the\x20server:\x20','@top-right\x20{\x20content:\x20\x22\x22;\x20}','rangeBoxes','forEach','fromState','\x20→\x20','the\x20server\x20refused\x20the\x20run','error','The\x20server\x20is\x20rendering\x20the\x20report.','body','push','_zoomLabel','_showBtn','file','230636dproJb','\x20threw','btnGen','createElement','@top-center\x20{\x20content:\x20\x22\x22;\x20}','deliver','canSaveReportsOnServer','format','lastFile','background:','getMonth','_bar','Downloaded:\x20','custom','@top-left\x20{\x20content:\x20\x22\x22;\x20}','Generating\x20on\x20the\x20server…','load','setScreenNameAndLoad','ready','313957nhcnul','length','\x20(+','range','generateReport','textContent','setAttribute','_rootShadow','history','_scriptObject','querySelectorAll','setReportRange','objectType','onReportLoad','runtime','onReportReady','getDate','1265195dROscr','btnFit','30d','orientation','_viewer','getTime','clientWidth','remove','now','rangeFrom','report','\x20and\x20','reportName','_paper','show','screenName','rangeKind','appendChild','shadowRoot','then','getFullYear','waitedMs','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','\x20control(s)\x20shown\x20as\x20placeholders','action','template','toolbox','toggle','round','16459740CvYsOm','80GbuOEp','mm\x20','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','catch','map'];a=function(){return a2;};return a();}export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static ['style']=css`
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
    `;static [s(0x1a8)]=html`
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
    `;#zoom=0x1;#reportName;get[s(0x19b)](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}[s(0x17d)](){const t=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[t(0x230)]=this[t(0x1e6)](t(0x209)),this[t(0x19c)]=this[t(0x1e6)]('paper'),this['_viewer']=this['_getDomElement']('viewer'),this['_status']=this['_getDomElement']('status'),this[t(0x222)]=this['_getDomElement'](t(0x1e5)),this['_viewer'][t(0x18a)]='report',this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.[t(0x207)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d(t(0x190),()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(t(0x227),()=>this.#generate(t(0x1e2))),d('btnSave',()=>this.#generate(t(0x1e2),'file')),iobrokerHandler[t(0x22b)]?.()[t(0x1a2)](e=>{const u=t,f=this[u(0x1e6)](u(0x1e8));if(f)f[u(0x20f)]=!e;})['catch'](()=>{}),this[t(0x223)]=this[t(0x1e6)](t(0x20b)),d('btnBar',()=>this[t(0x1ee)]=![]),d(t(0x20b),()=>this[t(0x1ee)]=!![]);if(this['_toolbarWanted']!==undefined)this[t(0x1ee)]=this['_toolbarWanted'];if(this.#reportName)this.#load();}set[s(0x1ee)](c){const v=s;this['_toolbarWanted']=!!c;if(this[v(0x230)])this[v(0x230)]['hidden']=!c;if(this[v(0x223)])this[v(0x223)]['hidden']=!!c;}get['toolbarVisible'](){const w=s;return this['_bar']?!this[w(0x230)]['hidden']:this['_toolbarWanted']??!![];}async #load(){const x=s;if(!this['_viewer'])return;this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject'](x(0x199),this.#reportName);if(!c){this.#busy(null),this.#say(x(0x1cd)+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper']['style'][x(0x1c6)]=d['width']??x(0x1ec),this[x(0x19c)][x(0x1d1)][x(0x1ce)]=d['height']??'297mm',this[x(0x193)][x(0x1d1)][x(0x1c9)]='display:block;width:100%;height:100%;',this.#applyTheme(d['theme']);const e=d['page']??{};this.#pageRule(e,d['printMargins']),await this.#applyToolbox(d[x(0x1a9)]),iobrokerHandler['beginFetchTracking']();if(this[x(0x193)][x(0x19e)]===this.#reportName)await this[x(0x193)][x(0x1db)]();else await this['_viewer'][x(0x236)](this.#reportName);this.#fit(),this.#hook(x(0x18b),this['_viewer'],this['_viewer'][x(0x185)]),this.#emit(x(0x210),{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this['_viewer'][x(0x1ef)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[x(0x193)]['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook(x(0x18d),this['_viewer'],this[x(0x193)]['_rootShadow'],{'missing':g}),this.#emit(x(0x1bc),{'name':this.#reportName,'missing':g});if(g[x(0x17f)])this.#say('No\x20value\x20from:\x20'+g['slice'](0x0,0x3)['map'](h=>h['id'])['join'](',\x20')+(g[x(0x17f)]>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const y=s,f=this['_viewer']?.[y(0x187)]?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console[y(0x21e)]('report\x20'+this.#reportName+':\x20'+c+y(0x226),g),undefined;}}#emit(c,d,e=![]){const z=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)[z(0x1f4)](f),f;}#pageRule(c,d){const A=s;if(this['parentElement']!==document[A(0x220)])return;const e='__report-page-rule';document[A(0x1b8)](e)?.[A(0x196)]();const f=document['createElement'](A(0x1d1));f['id']=e;const g=(c['size']??'A4')+(c[A(0x192)]==='landscape'?A(0x202):''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x214)])k['push'](A(0x233));if(!j[A(0x1e7)])k['push'](A(0x229),A(0x218));if(!j['url'])k['push'](A(0x1af),A(0x1a5));if(!j[A(0x1fd)])k['push'](A(0x1f2));f['textContent']='@page\x20{\x20size:\x20'+g+';\x20margin:\x20'+i(h[A(0x1dc)])+A(0x1ae)+i(h['right'])+A(0x1ae)+i(h[A(0x204)])+A(0x1ae)+i(h[A(0x1df)])+'mm;\x20'+k[A(0x1f1)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[A(0x205)][A(0x1a0)](f);}#setZoom(c){const B=s;this.#zoom=Math[B(0x1f6)](0x4,Math[B(0x1c5)](0.1,c)),this['_paper']['style'][B(0x216)]=B(0x1b9)+this.#zoom+')',this[B(0x19c)]['style'][B(0x1f5)]=B(0x203)+this['_paper'][B(0x1d1)][B(0x1ce)]+'\x20*\x20'+(this.#zoom-0x1)+')',this[B(0x222)][B(0x183)]=Math[B(0x1ab)](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement'](C(0x1cf))[C(0x195)]-0x24,d=this[C(0x19c)][C(0x1d9)]()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x1f6)](0x1,c/d));}#print(){const D=s;window[D(0x1e9)]();}async #applyToolbox(d){const E=s,f=d?.[E(0x1d2)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.['groups']??[],i=g?.['id']==='admin',j=this[E(0x230)]??this['_getDomElement']('bar');if(!j)return;for(const l of j[E(0x188)]('[data-tb]'))l['removeAttribute'](E(0x1c0));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n[E(0x19d)]===![])o=E(0x1b2);else{if(!i&&Array[E(0x1b5)](n['groups'])&&n['groups']['length']&&!n[E(0x1d7)]['some'](p=>h['includes'](p)))o=n[E(0x1a7)]===E(0x1d3)?'disable':E(0x1b2);}if(!o)continue;for(const p of j[E(0x188)]('[data-tb=\x22'+m+'\x22]'))p[E(0x184)](E(0x1c0),o);}}#initRange(){const F=s,c=this[F(0x1e6)](F(0x19f)),d=this['_getDomElement'](F(0x198)),e=this[F(0x1e6)]('rangeTo'),f=this['_getDomElement']('btnApply');if(!c)return;const g=this[F(0x1e6)](F(0x219)),h=i=>{if(g)g['hidden']=!i;};c[F(0x207)](F(0x1ca),()=>{const G=F;if(c[G(0x1dd)]===G(0x232)){const i=iobrokerHandler[G(0x1f9)]??this.#namedRange('today');if(d&&!d[G(0x1dd)])d['value']=this.#toLocalInput(i['start']);if(e&&!e[G(0x1dd)])e['value']=this.#toLocalInput(i[G(0x213)]);h(!![]);return;}h(![]),this.#applyRange(c[G(0x1dd)]==='report'?null:this.#namedRange(c[G(0x1dd)]));}),f?.['addEventListener']('click',()=>{const H=F,i=d?.[H(0x1dd)]?new Date(d[H(0x1dd)])['getTime']():NaN,j=e?.['value']?new Date(e['value'])['getTime']():NaN;if(!Number[H(0x1ff)](i)||!Number['isFinite'](j)){this.#say(H(0x1de),!![]);return;}if(i>=j){this.#say(H(0x212),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)[I(0x200)](0x2,'0');return e['getFullYear']()+'-'+f(e[I(0x22f)]()+0x1)+'-'+f(e[I(0x18e)]())+'T'+f(e['getHours']())+':'+f(e[I(0x1e1)]());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g[J(0x1a3)](),g['getMonth'](),g[J(0x18e)]())['getTime'](),f=0x5265c00;switch(c){case J(0x1d8):return{'start':e(d),'end':d['getTime']()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0x194)]()-0x7*f,'end':d['getTime']()};case J(0x191):return{'start':d[J(0x194)]()-0x1e*f,'end':d['getTime']()};case'month':return{'start':new Date(d['getFullYear'](),d[J(0x22f)](),0x1)['getTime'](),'end':d[J(0x194)]()};case'year':return{'start':new Date(d[J(0x1a3)](),0x0,0x1)[J(0x194)](),'end':d['getTime']()};default:return{'start':d[J(0x194)]()-f,'end':d[J(0x194)]()};}}async #applyRange(c){const K=s;iobrokerHandler[K(0x189)](c),this.#say(c?'Range:\x20'+new Date(c['start'])['toLocaleString']()+K(0x21c)+new Date(c[K(0x213)])['toLocaleString']():K(0x1fb)),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.[L(0x21b)]??'')['trim'](),e=(c?.['toState']??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k===M(0x1f8))return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)[M(0x1fc)]()!=='')return l;const m=Date[M(0x1c3)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler[N(0x1f9)];if(n&&n['start']===l&&n[N(0x213)]===m)return;iobrokerHandler[N(0x189)]({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+'\x20→\x20'+new Date(m)['toLocaleString']());const o=this['_getDomElement'](N(0x19f));if(o)o[N(0x1dd)]=N(0x199);const p=this[N(0x1e6)]('rangeBoxes');if(p)p[N(0x20f)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler[O(0x215)](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const P=O;g[l]=f(q?.['val']),h(!![])[P(0x1b0)](()=>{});};try{i[O(0x221)]([k,m,await iobrokerHandler[O(0x1cc)](k,m)]);}catch(p){console[O(0x1f7)](O(0x1e0)+k,p);}};await j(d,'start'),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const Q=L;for(const [k,l]of i){try{iobrokerHandler[Q(0x1ea)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const R=s;super[R(0x201)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}[s(0x1c1)](){super['connectedCallback']?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const S=b;if(c?.['type']!=='report'||c[S(0x1c2)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](S(0x199),this.#reportName);}catch(h){return;}if(!f)return;const g=f[S(0x1d5)]??{};this[S(0x19c)]&&(this[S(0x19c)]['style'][S(0x1c6)]=g['width']??'210mm',this['_paper'][S(0x1d1)][S(0x1ce)]=g[S(0x1ce)]??'297mm'),this.#pageRule(g[S(0x20c)]??{},g['printMargins']),this.#applyTheme(g['theme']),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const T=s,d=this[T(0x1a1)];if(!d)return;let e=d[T(0x1b8)](T(0x1f0));!e&&(e=document[T(0x228)](T(0x1d1)),e['id']=T(0x1f0),d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[T(0x1fc)]()===T(0x18c)?'':reportThemeDeclarations(f['name'],iobrokerHandler[T(0x1f3)]?.['globalStyle']);e['textContent']=T(0x1eb)+g+T(0x22e)+(f['paper']?'#fff':'var(--ui-page,\x20#fff)')+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const U=s,f=this[U(0x1e6)](U(0x235));if(!f)return;if(c==null){f['hidden']=!![];return;}f[U(0x20f)]=![];const g=this['_getDomElement']('loadWhat'),h=this['_getDomElement']('loadDetail');if(g)g[U(0x183)]=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const V=s,c=this[V(0x1e6)]('loadLog');if(c)c[V(0x183)]='';this.#logged=new Set();}#logged=new Set();#log(c){const W=s,d=this['_getDomElement'](W(0x1b7));if(!d||this.#logged['has'](c))return;this.#logged['add'](c);const e=new Date()[W(0x20e)]();d[W(0x183)]+=e+'\x20\x20'+c+'\x0a',d[W(0x1fe)]=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const X=b,g=iobrokerHandler['outstandingFetches']();if(!g[X(0x17f)]){this.#busy('Rendering…','');return;}const i=g['filter'](m=>m['kind']===X(0x186))[X(0x17f)],j=g[X(0x17f)]-i,k=[];if(j)k[X(0x221)](j+'\x20value'+(j>0x1?'s':''));if(i)k[X(0x221)](i+'\x20history\x20quer'+(i>0x1?X(0x1bb):'y'));const l=Math['round']((Date[X(0x197)]()-c)/0x3e8);this.#busy(X(0x1c8),k['join'](X(0x19a))+X(0x1bf)+l+'s');for(const m of g)if(m[X(0x1a4)]>d)this.#log('still\x20waiting:\x20'+m['id']+(m['kind']==='history'?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Y=s,f=iobrokerHandler[Y(0x1c7)]+'.'+IobrokerHandler[Y(0x206)](d,c),g=async l=>{const Z=Y;try{return(await iobrokerHandler['connection'][Z(0x215)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date['now'](),i=await g(Y(0x1ed));let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(Y(0x234),Y(0x21f));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(Y(0x22d))};if(k==='error')return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':Y(0x20d)};}#say(c,d){const a0=s;if(!this['_status'])return;this['_status'][a0(0x183)]=c,this['_status']['classList'][a0(0x1aa)]('err',!!d);}async #generate(c='html',d='download'){const a1=s,f=['btnGen','btnSave']['map'](i=>this[a1(0x1e6)](i))['filter'](Boolean);f[a1(0x21a)](i=>i['disabled']=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say(a1(0x1bd));return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say(a1(0x208));return;}h['format']=g['format'],h['range']=g[a1(0x181)];if(this.#missing[a1(0x17f)]){const j=this.#missing[a1(0x1d4)](0x0,0x3)[a1(0x1b1)](k=>k['id'])[a1(0x1f1)](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing[a1(0x17f)]>0x3?a1(0x180)+(this.#missing['length']-0x3)+'\x20more)':''));}this.#say(a1(0x1d6)),this.#busy(g[a1(0x22a)]==='file'?a1(0x234):a1(0x1d6),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a1(0x182)](g['name'],{'project':g[a1(0x211)],'format':g[a1(0x22c)],'range':g['range'],'deliver':g['deliver'],'timeoutMs':this[a1(0x1be)],'theme':document['documentElement']['dataset'][a1(0x1e3)]||undefined});if(i['viaTrigger']){const k=await this.#awaitServerRun(g[a1(0x1c2)],g['project']);if(!k['ok'])throw new Error(k['error']||a1(0x21d));h={...h,'success':!![],'file':k['file']??null},this.#say(a1(0x217)+(k[a1(0x224)]??''));}else{h={...h,'success':!![],'file':i[a1(0x224)]??null,'pages':i['pages']??null};const l=i[a1(0x1cb)]?.['length']?a1(0x1b4)+i[a1(0x1cb)]['length']+a1(0x1a6):'';this.#say(a1(0x231)+(i[a1(0x224)]??'')+l);}}catch(m){h[a1(0x21e)]=m?.['message']??String(m),this.#say(a1(0x1b3)+h['error'],!![]);}finally{f['forEach'](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h['success']?a1(0x1fa):'report-generate-failed',h);try{await this.#hook(a1(0x1e4),g,h);}catch(n){}}}if(!customElements[s(0x1da)]('iobroker-webui-report-viewer'))customElements['define']('iobroker-webui-report-viewer',ReportViewer);