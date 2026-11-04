const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x19b))/0x1+parseInt(r(0xf4))/0x2+-parseInt(r(0x10b))/0x3+-parseInt(r(0x156))/0x4*(parseInt(r(0x18c))/0x5)+-parseInt(r(0x12b))/0x6+-parseInt(r(0x187))/0x7*(parseInt(r(0x140))/0x8)+parseInt(r(0x11b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbb692));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';function b(c,d){c=c-0xe1;const e=a();let f=e[c];return f;}function a(){const a4=['fromState','trim','catch','getDate','297mm','addEventListener','mm\x20','some','top','\x20→\x20','_restoreCachedInititalValues','config','year','appendChild','readonly','btnPrint','status','padStart','@top-right\x20{\x20content:\x20\x22\x22;\x20}','8VObJRh','yesterday','today','_paper','Generating…','connection','toState','join','kind','Report\x20default\x20range','_zoomLabel','scroll','\x20threw',';color:var(--ui-text,\x20#1d2733);}','documentElement','unsubscribeState','_bar','onReportLoad','lastError','Downloaded:\x20','Generating\x20on\x20the\x20server…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','22112PoKpFN','getHours','remove','history','outstandingFetches','end','transform','\x20*\x20',';\x20margin:\x20','Range:\x20','number','zoomLabel','style','toLocaleTimeString','getFullYear','width','html','has','lastFile','Cancelled.','beginFetchTracking','\x20landscape','classList','error','custom','__report-page-rule','hidden','all','\x20more)','btnGen','report-ready','viaTrigger','generateReport','forEach','setScreenNameAndLoad','type','placeholders','removeAttribute','_viewer','\x20and\x20','data','rangeBoxes','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','_rootShadow','setAttribute','_getDomElement','\x20control(s)\x20shown\x20as\x20placeholders','download','show','8950907GgwEvo','loadLog','url','entries','define','235BnGrXu','canSaveReportsOnServer','theme','display:block;width:100%;height:100%;','isFinite','afterGenerate','toolbox','reportName','getState','running','textContent','bar','success','cssText','currentProject','1156693IORPDe','get','btnSave','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','mm;\x20','lastRun','data-tb-off','project','value','marginBottom','getTime','objectType','min','map','head','disabled','still\x20waiting:\x20','height','toolbarVisible','_status','1996530lsgyAq','_showBtn','_toolbarWanted','name','format','dataset','groups','action','hide','Saved\x20on\x20the\x20server:\x20','getWebuiObject','loadDetail','start','report\x20','globalStyle','report','beforeGenerate','loadWhat','\x20(+','toLocaleString','Loading\x20data…','scale(','__reportTheme','2457336IEAoEg','setReportRange','month','length','report-generate-failed','max','reload','30d','report-load','push','now','generateTimeoutMs','then','calc(','Cancelled\x20by\x20the\x20report\x20script.','rangeKind','32441202AZLoZw','210mm','webuiTheme','Opening\x20','reportRange','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','items','background:','scrollTop','file','\x20outstanding\x20—\x20','querySelectorAll','No\x20value\x20from:\x20','disconnectedCallback','change','pages','1925322JjISZb','body'];a=function(){return a4;};return a();}import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x13b)]=!![];static [s(0x162)]=css`
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
    `;#zoom=0x1;#reportName;get[s(0x193)](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x137)]();}['ready'](){const u=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this['_bar']=this[u(0x183)]('bar'),this['_paper']=this[u(0x183)]('paper'),this[u(0x17c)]=this['_getDomElement']('viewer'),this['_status']=this[u(0x183)](u(0x13d)),this[u(0x14a)]=this[u(0x183)](u(0x161)),this[u(0x17c)][u(0xeb)]='report',this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.[u(0x132)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x13c),()=>this.#print()),this.#initRange(),d(u(0x173),()=>this.#generate(u(0x166))),d(u(0xe2),()=>this.#generate('html',u(0x124))),iobrokerHandler[u(0x18d)]?.()[u(0x117)](e=>{const v=u,f=this[v(0x183)]('btnSave');if(f)f[v(0x170)]=!e;})[u(0x12f)](()=>{}),this['_showBtn']=this[u(0x183)]('btnShow'),d('btnBar',()=>this[u(0xf2)]=![]),d('btnShow',()=>this['toolbarVisible']=!![]);if(this[u(0xf6)]!==undefined)this['toolbarVisible']=this[u(0xf6)];if(this.#reportName)this.#load();}set[s(0xf2)](c){const w=s;this['_toolbarWanted']=!!c;if(this['_bar'])this[w(0x150)][w(0x170)]=!c;if(this[w(0xf5)])this[w(0xf5)]['hidden']=!!c;}get[s(0xf2)](){const x=s;return this['_bar']?!this[x(0x150)][x(0x170)]:this[x(0xf6)]??!![];}async #load(){const y=s;if(!this[y(0x17c)])return;this.#say(''),this.#busy(y(0x11e)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0xfe)]('report',this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper']['style'][y(0x165)]=d[y(0x165)]??y(0x11c),this[y(0x143)][y(0x162)][y(0xf1)]=d['height']??'297mm',this[y(0x17c)]['style'][y(0x199)]=y(0x18f),this.#applyTheme(d['theme']);const e=d['page']??{};this.#pageRule(e,d['printMargins']),await this.#applyToolbox(d['toolbox']),iobrokerHandler[y(0x16a)]();if(this[y(0x17c)]['screenName']===this.#reportName)await this['_viewer'][y(0x111)]();else await this[y(0x17c)][y(0x178)](this.#reportName);this.#fit(),this.#hook(y(0x151),this['_viewer'],this['_viewer'][y(0x181)]),this.#emit(y(0x113),{'name':this.#reportName}),await this.#wireRangeStates(d[y(0x17e)]),this.#busy('Building\x20the\x20page…',''),await this[y(0x17c)]['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[y(0x17c)]['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this[y(0x17c)],this[y(0x17c)]['_rootShadow'],{'missing':g}),this.#emit(y(0x174),{'name':this.#reportName,'missing':g});if(g[y(0x10e)])this.#say(y(0x127)+g['slice'](0x0,0x3)['map'](h=>h['id'])[y(0x147)](',\x20')+(g[y(0x10e)]>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this[z(0x17c)]?.['_scriptObject']?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console['error'](z(0x101)+this.#reportName+':\x20'+c+z(0x14c),g),undefined;}}#emit(c,d,e=![]){const A=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[A(0x17c)]??this)['dispatchEvent'](f),f;}#pageRule(c,d){const B=s;if(this['parentElement']!==document[B(0x12c)])return;const e=B(0x16f);document['getElementById'](e)?.[B(0x158)]();const f=document['createElement'](B(0x162));f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?B(0x16b):''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j['date'])k['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k[B(0x114)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}',B(0x13f));if(!j[B(0x189)])k['push'](B(0x120),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}');if(!j['pageNumber'])k[B(0x114)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f[B(0x196)]='@page\x20{\x20size:\x20'+g+B(0x15e)+i(h[B(0x135)])+'mm\x20'+i(h['right'])+B(0x133)+i(h['bottom'])+'mm\x20'+i(h['left'])+B(0xe4)+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[B(0xee)]['appendChild'](f);}#setZoom(c){const C=s;this.#zoom=Math[C(0xec)](0x4,Math[C(0x110)](0.1,c)),this['_paper'][C(0x162)][C(0x15c)]=C(0x109)+this.#zoom+')',this[C(0x143)][C(0x162)][C(0xe9)]=C(0x118)+this['_paper'][C(0x162)]['height']+C(0x15d)+(this.#zoom-0x1)+')',this[C(0x14a)][C(0x196)]=Math['round'](this.#zoom*0x64)+'%';}#fit(){const D=s,c=this['_getDomElement'](D(0x14b))['clientWidth']-0x24,d=this[D(0x143)]['getBoundingClientRect']()[D(0x165)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[D(0xec)](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const E=s,f=d?.[E(0x121)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[E(0xfa)]??[],i=g?.['id']==='admin',j=this['_bar']??this[E(0x183)](E(0x197));if(!j)return;for(const l of j['querySelectorAll']('[data-tb]'))l[E(0x17b)](E(0xe6));for(const [m,n]of Object[E(0x18a)](f)){if(!n)continue;let o=null;if(n[E(0x186)]===![])o='hide';else{if(!i&&Array['isArray'](n[E(0xfa)])&&n['groups']['length']&&!n['groups'][E(0x134)](p=>h['includes'](p)))o=n[E(0xfb)]==='disable'?'disable':E(0xfc);}if(!o)continue;for(const p of j[E(0x126)]('[data-tb=\x22'+m+'\x22]'))p[E(0x182)](E(0xe6),o);}}#initRange(){const F=s,c=this['_getDomElement']('rangeKind'),d=this['_getDomElement']('rangeFrom'),e=this[F(0x183)]('rangeTo'),f=this['_getDomElement']('btnApply');if(!c)return;const g=this['_getDomElement'](F(0x17f)),h=i=>{if(g)g['hidden']=!i;};c['addEventListener'](F(0x129),()=>{const G=F;if(c[G(0xe8)]===G(0x16e)){const i=iobrokerHandler[G(0x11f)]??this.#namedRange(G(0x142));if(d&&!d['value'])d[G(0xe8)]=this.#toLocalInput(i['start']);if(e&&!e['value'])e[G(0xe8)]=this.#toLocalInput(i[G(0x15b)]);h(!![]);return;}h(![]),this.#applyRange(c[G(0xe8)]==='report'?null:this.#namedRange(c['value']));}),f?.['addEventListener']('click',()=>{const H=F,i=d?.['value']?new Date(d['value'])[H(0xea)]():NaN,j=e?.[H(0xe8)]?new Date(e[H(0xe8)])['getTime']():NaN;if(!Number[H(0x190)](i)||!Number['isFinite'](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say(H(0xe3),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)[I(0x13e)](0x2,'0');return e['getFullYear']()+'-'+f(e['getMonth']()+0x1)+'-'+f(e[I(0x130)]())+'T'+f(e[I(0x157)]())+':'+f(e['getMinutes']());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g['getMonth'](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d[J(0xea)]()};case J(0x141):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d[J(0xea)]()};case J(0x112):return{'start':d[J(0xea)]()-0x1e*f,'end':d['getTime']()};case J(0x10d):return{'start':new Date(d[J(0x164)](),d['getMonth'](),0x1)['getTime'](),'end':d['getTime']()};case J(0x139):return{'start':new Date(d['getFullYear'](),0x0,0x1)[J(0xea)](),'end':d['getTime']()};default:return{'start':d['getTime']()-f,'end':d[J(0xea)]()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?K(0x15f)+new Date(c['start'])['toLocaleString']()+K(0x136)+new Date(c['end'])['toLocaleString']():K(0x149)),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.[L(0x12d)]??'')[L(0x12e)](),e=(c?.[L(0x146)]??'')[L(0x12e)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k===M(0x160))return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)[M(0x12e)]()!=='')return l;const m=Date['parse'](String(k));return Number[M(0x190)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler[N(0x11f)];if(n&&n[N(0x100)]===l&&n[N(0x15b)]===m)return;iobrokerHandler[N(0x10c)]({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+'\x20→\x20'+new Date(m)[N(0x107)]());const o=this[N(0x183)](N(0x11a));if(o)o[N(0xe8)]=N(0x103);const p=this[N(0x183)](N(0x17f));if(p)p[N(0x170)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler[O(0x194)](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const P=O;g[l]=f(q?.['val']),h(!![])[P(0x12f)](()=>{});};try{i['push']([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console['warn']('[report]\x20range\x20state\x20'+k,p);}};await j(d,L(0x100)),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const Q=L;for(const [k,l]of i){try{iobrokerHandler[Q(0x14f)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const R=s;super[R(0x128)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}['connectedCallback'](){const S=s;super['connectedCallback']?.();if(this[S(0x150)])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const T=b;if(c?.[T(0x179)]!==T(0x103)||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler[T(0xfe)]('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this[T(0x143)]&&(this['_paper']['style'][T(0x165)]=g['width']??'210mm',this['_paper']['style'][T(0xf1)]=g['height']??T(0x131)),this.#pageRule(g['page']??{},g['printMargins']),this.#applyTheme(g[T(0x18e)]),await this.#applyToolbox(g[T(0x192)]),this.#fit();});}#applyTheme(c){const U=s,d=this['shadowRoot'];if(!d)return;let e=d['getElementById'](U(0x10a));!e&&(e=document['createElement'](U(0x162)),e['id']=U(0x10a),d[U(0x13a)](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()==='runtime'?'':reportThemeDeclarations(f[U(0xf7)],iobrokerHandler[U(0x138)]?.[U(0x102)]);e['textContent']=':host\x20#paper{'+g+U(0x122)+(f['paper']?'#fff':'var(--ui-page,\x20#fff)')+U(0x14d);}#busy(c,e){const V=s,f=this['_getDomElement']('load');if(!f)return;if(c==null){f['hidden']=!![];return;}f['hidden']=![];const g=this['_getDomElement'](V(0x105)),h=this[V(0x183)](V(0xff));if(g)g[V(0x196)]=c;if(h&&e!==undefined)h[V(0x196)]=e;}#logReset(){const W=s,c=this['_getDomElement'](W(0x188));if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const X=s,d=this['_getDomElement'](X(0x188));if(!d||this.#logged[X(0x167)](c))return;this.#logged['add'](c);const e=new Date()[X(0x163)]();d[X(0x196)]+=e+'\x20\x20'+c+'\x0a',d[X(0x123)]=d['scrollHeight'];}#watchFetches(){const Y=s,c=Date[Y(0x115)](),d=0xbb8,e=()=>{const Z=Y,g=iobrokerHandler[Z(0x15a)]();if(!g['length']){this.#busy('Rendering…','');return;}const i=g['filter'](m=>m['kind']==='history')[Z(0x10e)],j=g[Z(0x10e)]-i,k=[];if(j)k['push'](j+'\x20value'+(j>0x1?'s':''));if(i)k[Z(0x114)](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math['round']((Date[Z(0x115)]()-c)/0x3e8);this.#busy(Z(0x108),k[Z(0x147)](Z(0x17d))+Z(0x125)+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log(Z(0xf0)+m['id']+(m[Z(0x148)]===Z(0x159)?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a1=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const a0=b;try{return(await iobrokerHandler[a0(0x145)][a0(0x194)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[a1(0x115)](),i=await g(a1(0xe5));let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[a1(0x171)]([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k===a1(0x195)){j=!![],this.#busy('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(a1(0x168))};if(k===a1(0x16d))return{'ok':![],'error':await g(a1(0x152))};}}return{'ok':![],'error':a1(0x180)};}#say(c,d){const a2=s;if(!this['_status'])return;this[a2(0xf3)][a2(0x196)]=c,this['_status'][a2(0x16c)]['toggle']('err',!!d);}async #generate(c=s(0x166),d=s(0x185)){const a3=s,f=[a3(0x173),'btnSave'][a3(0xed)](i=>this[a3(0x183)](i))['filter'](Boolean);f['forEach'](i=>i[a3(0xef)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler[a3(0x19a)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a3(0x104),g)===![]){this.#say(a3(0x119));return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say(a3(0x169));return;}h[a3(0xf8)]=g['format'],h['range']=g['range'];if(this.#missing['length']){const j=this.#missing['slice'](0x0,0x3)[a3(0xed)](k=>k['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing['length']>0x3?a3(0x106)+(this.#missing[a3(0x10e)]-0x3)+a3(0x172):''));}this.#say(a3(0x144)),this.#busy(g['deliver']==='file'?a3(0x154):'Generating…',a3(0x155));const i=await iobrokerHandler[a3(0x176)](g['name'],{'project':g['project'],'format':g[a3(0xf8)],'range':g['range'],'deliver':g['deliver'],'timeoutMs':this[a3(0x116)],'theme':document[a3(0x14e)][a3(0xf9)][a3(0x11d)]||undefined});if(i[a3(0x175)]){const k=await this.#awaitServerRun(g[a3(0xf7)],g[a3(0xe7)]);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k['file']??null},this.#say(a3(0xfd)+(k[a3(0x124)]??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i[a3(0x12a)]??null};const l=i[a3(0x17a)]?.['length']?'\x20—\x20'+i[a3(0x17a)][a3(0x10e)]+a3(0x184):'';this.#say(a3(0x153)+(i[a3(0x124)]??'')+l);}}catch(m){h[a3(0x16d)]=m?.['message']??String(m),this.#say('Not\x20generated\x20—\x20'+h['error'],!![]);}finally{f[a3(0x177)](n=>n[a3(0xef)]=![]),this.#busy(null);}this.#emit(h[a3(0x198)]?'report-generated':a3(0x10f),h);try{await this.#hook(a3(0x191),g,h);}catch(n){}}}if(!customElements[s(0xe1)]('iobroker-webui-report-viewer'))customElements[s(0x18b)]('iobroker-webui-report-viewer',ReportViewer);