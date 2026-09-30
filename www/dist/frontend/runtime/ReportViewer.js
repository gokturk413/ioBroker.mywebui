const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x117))/0x1*(parseInt(r(0x189))/0x2)+-parseInt(r(0x13a))/0x3+parseInt(r(0x123))/0x4+-parseInt(r(0x15b))/0x5*(-parseInt(r(0x15f))/0x6)+-parseInt(r(0x12e))/0x7*(-parseInt(r(0x16a))/0x8)+parseInt(r(0x1b5))/0x9*(parseInt(r(0x115))/0xa)+-parseInt(r(0x149))/0xb*(parseInt(r(0x173))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcbe89));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';function a(){const a3=['_viewer','Generating\x20on\x20the\x20server…','_zoomLabel','remove','items','no\x20value\x20from:\x20','template','join','532596PQZqDr','format','margin','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','all','calc(','deliver','includes','reportName','size','groups','message','orientation','documentElement','report-generate-failed','today','canSaveReportsOnServer','project','function','custom','addEventListener','setAttribute','4184LFQBQx','range','297mm','outstandingFetches','toLocaleString','ready','url','\x20(history)','toggle','var(--ui-page,\x20#fff)','cssText','slice','btnApply','disabled','\x20(+','btnGen','toolbarVisible','\x20value','lastStatus','\x20→\x20','printMargins','setScreenNameAndLoad','beginFetchTracking','\x20and\x20','config','theme','left','__report-page-rule','warn','Opening\x20','trim','waitedMs','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','getState','btnSave','Cancelled\x20by\x20the\x20report\x20script.','lastError','textContent','Saved\x20on\x20the\x20server:\x20','_bar','head','now','click','toLocaleTimeString','1255563QElxwA','kind','_getDomElement','scale(','val','parentElement','right','setReportRange','report-range-changed','style','number','getMinutes','_paper','createElement','success','month','still\x20waiting:\x20','reload','70uFyvqk','disconnectedCallback','76INTQez','map','__reportTheme','running','@top-center\x20{\x20content:\x20\x22\x22;\x20}','getWebuiObject','getTime','btnOut','@top-right\x20{\x20content:\x20\x22\x22;\x20}','catch','[report]\x20range\x20state\x20','Range\x20from\x20states:\x20','245376zcHroY','change','\x20outstanding\x20—\x20','pageNumber','placeholders','getMonth','isFinite','_status','height','getFullYear','Generating…','525wqBZPV','reportRange','querySelectorAll','hidden','defaultPrevented','generateTimeoutMs','scrollHeight','end','value','Pick\x20both\x20dates.','isArray','mm\x20','1465353enuxrD','rangeFrom','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','forEach','loadLog','_toolbarWanted','scroll','filter','file','beforeGenerate','year','bar','name','screenName','toState','407uhrwoL','getElementById','report-load','lastRun','error','date','report','width','dispatchEvent','start','padStart','then','unsubscribeState','marginBottom','admin','length','Report\x20default\x20range','No\x20value\x20from:\x20','25disyqU','push','html','readonly','1694316eTTvQw','\x20*\x20','210mm','min','onReportReady','connection','define','_showBtn','btnShow','connectedCallback','Loading\x20data…','72000fngKis'];a=function(){return a3;};return a();}import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';function b(c,d){c=c-0x10d;const e=a();let f=e[c];return f;}export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x15e)]=!![];static [s(0x1be)]=css`
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
    `;static [s(0x171)]=html`
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
    `;#zoom=0x1;#reportName;get[s(0x17b)](){return this.#reportName;}set[s(0x17b)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}[s(0x18e)](){const t=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[t(0x1b0)]=this[t(0x1b7)](t(0x145)),this[t(0x10f)]=this[t(0x1b7)]('paper'),this['_viewer']=this[t(0x1b7)]('viewer'),this['_status']=this[t(0x1b7)]('status'),this['_zoomLabel']=this['_getDomElement']('zoomLabel'),this[t(0x16b)]['objectType']='report',this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.['addEventListener'](t(0x1b3),f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(t(0x11e),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(t(0x198),()=>this.#generate(t(0x15d))),d(t(0x1ab),()=>this.#generate(t(0x15d),'file')),iobrokerHandler[t(0x183)]?.()[t(0x154)](e=>{const u=t,f=this[u(0x1b7)]('btnSave');if(f)f[u(0x131)]=!e;})[t(0x120)](()=>{}),this[t(0x166)]=this[t(0x1b7)](t(0x167)),d('btnBar',()=>this['toolbarVisible']=![]),d(t(0x167),()=>this['toolbarVisible']=!![]);if(this[t(0x13f)]!==undefined)this[t(0x199)]=this[t(0x13f)];if(this.#reportName)this.#load();}set[s(0x199)](c){const v=s;this['_toolbarWanted']=!!c;if(this['_bar'])this['_bar']['hidden']=!c;if(this['_showBtn'])this[v(0x166)][v(0x131)]=!!c;}get[s(0x199)](){const w=s;return this[w(0x1b0)]?!this[w(0x1b0)][w(0x131)]:this[w(0x13f)]??!![];}async #load(){const x=s;if(!this[x(0x16b)])return;this.#say(''),this.#busy(x(0x1a6)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[x(0x11c)]('report',this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper']['style'][x(0x150)]=d[x(0x150)]??'210mm',this['_paper']['style']['height']=d['height']??x(0x18b),this['_viewer'][x(0x1be)][x(0x193)]='display:block;width:100%;height:100%;',this.#applyTheme(d[x(0x1a2)]);const e=d['page']??{};this.#pageRule(e,d[x(0x19d)]),await this.#applyToolbox(d['toolbox']),iobrokerHandler[x(0x19f)]();if(this[x(0x16b)][x(0x147)]===this.#reportName)await this['_viewer'][x(0x114)]();else await this['_viewer'][x(0x19e)](this.#reportName);this.#fit(),this.#hook('onReportLoad',this[x(0x16b)],this[x(0x16b)]['_rootShadow']),this.#emit(x(0x14b),{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this[x(0x16b)]['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer']['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook(x(0x163),this['_viewer'],this['_viewer']['_rootShadow'],{'missing':g}),this.#emit('report-ready',{'name':this.#reportName,'missing':g});if(g[x(0x158)])this.#say(x(0x15a)+g['slice'](0x0,0x3)[x(0x118)](h=>h['id'])[x(0x172)](',\x20')+(g[x(0x158)]>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const y=s,f=this['_viewer']?.['_scriptObject']?.[c];if(typeof f!==y(0x185))return undefined;try{return f(...d);}catch(g){return console['error']('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const z=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[z(0x16b)]??this)[z(0x151)](f),f;}#pageRule(c,d){const A=s;if(this[A(0x1ba)]!==document['body'])return;const e=A(0x1a4);document[A(0x14a)](e)?.[A(0x16e)]();const f=document[A(0x110)](A(0x1be));f['id']=e;const g=(c[A(0x17c)]??'A4')+(c[A(0x17f)]==='landscape'?'\x20landscape':''),h=c[A(0x175)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x14e)])k[A(0x15c)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k[A(0x15c)](A(0x11b),A(0x11f));if(!j[A(0x18f)])k[A(0x15c)](A(0x1a9),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}');if(!j[A(0x126)])k[A(0x15c)](A(0x13c));f['textContent']='@page\x20{\x20size:\x20'+g+';\x20margin:\x20'+i(h['top'])+A(0x139)+i(h[A(0x1bb)])+'mm\x20'+i(h['bottom'])+A(0x139)+i(h[A(0x1a3)])+'mm;\x20'+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[A(0x1b1)]['appendChild'](f);}#setZoom(c){const B=s;this.#zoom=Math[B(0x162)](0x4,Math['max'](0.1,c)),this[B(0x10f)]['style']['transform']=B(0x1b8)+this.#zoom+')',this['_paper'][B(0x1be)][B(0x156)]=B(0x178)+this[B(0x10f)]['style']['height']+B(0x160)+(this.#zoom-0x1)+')',this[B(0x16d)][B(0x1ae)]=Math['round'](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement'](C(0x140))['clientWidth']-0x24,d=this['_paper']['getBoundingClientRect']()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const D=s,f=d?.[D(0x16f)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.['groups']??[],i=g?.['id']===D(0x157),j=this['_bar']??this['_getDomElement'](D(0x145));if(!j)return;for(const l of j[D(0x130)]('[data-tb]'))l['removeAttribute']('data-tb-off');for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o='hide';else{if(!i&&Array[D(0x138)](n['groups'])&&n[D(0x17d)]['length']&&!n['groups']['some'](p=>h[D(0x17a)](p)))o=n['action']==='disable'?'disable':'hide';}if(!o)continue;for(const p of j['querySelectorAll']('[data-tb=\x22'+m+'\x22]'))p[D(0x188)]('data-tb-off',o);}}#initRange(){const E=s,c=this['_getDomElement']('rangeKind'),d=this[E(0x1b7)](E(0x13b)),e=this['_getDomElement']('rangeTo'),f=this[E(0x1b7)](E(0x195));if(!c)return;const g=this['_getDomElement']('rangeBoxes'),h=i=>{const F=E;if(g)g[F(0x131)]=!i;};c['addEventListener'](E(0x124),()=>{const G=E;if(c[G(0x136)]===G(0x186)){const i=iobrokerHandler['reportRange']??this.#namedRange('today');if(d&&!d[G(0x136)])d[G(0x136)]=this.#toLocalInput(i[G(0x152)]);if(e&&!e['value'])e[G(0x136)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c['value']==='report'?null:this.#namedRange(c['value']));}),f?.[E(0x187)](E(0x1b3),()=>{const H=E,i=d?.[H(0x136)]?new Date(d[H(0x136)])[H(0x11d)]():NaN,j=e?.['value']?new Date(e['value'])['getTime']():NaN;if(!Number[H(0x129)](i)||!Number['isFinite'](j)){this.#say(H(0x137),!![]);return;}if(i>=j){this.#say('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)[I(0x153)](0x2,'0');return e[I(0x12c)]()+'-'+f(e['getMonth']()+0x1)+'-'+f(e['getDate']())+'T'+f(e['getHours']())+':'+f(e[I(0x10e)]());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g[J(0x12c)](),g['getMonth'](),g['getDate']())[J(0x11d)](),f=0x5265c00;switch(c){case J(0x182):return{'start':e(d),'end':d[J(0x11d)]()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0x11d)]()-0x7*f,'end':d[J(0x11d)]()};case'30d':return{'start':d[J(0x11d)]()-0x1e*f,'end':d['getTime']()};case J(0x112):return{'start':new Date(d[J(0x12c)](),d[J(0x128)](),0x1)['getTime'](),'end':d['getTime']()};case J(0x144):return{'start':new Date(d['getFullYear'](),0x0,0x1)['getTime'](),'end':d[J(0x11d)]()};default:return{'start':d[J(0x11d)]()-f,'end':d['getTime']()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?'Range:\x20'+new Date(c[K(0x152)])['toLocaleString']()+K(0x19c)+new Date(c[K(0x135)])['toLocaleString']():K(0x159)),this.#emit(K(0x1bd),{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')[L(0x1a7)](),e=(c?.[L(0x148)]??'')[L(0x1a7)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k===M(0x10d))return k;const l=Number(k);if(Number[M(0x129)](l)&&String(k)['trim']()!=='')return l;const m=Date['parse'](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler[N(0x12f)];if(n&&n['start']===l&&n[N(0x135)]===m)return;iobrokerHandler[N(0x1bc)]({'start':l,'end':m}),this.#say(N(0x122)+new Date(l)[N(0x18d)]()+N(0x19c)+new Date(m)[N(0x18d)]());const o=this[N(0x1b7)]('rangeKind');if(o)o[N(0x136)]=N(0x14f);const p=this['_getDomElement']('rangeBoxes');if(p)p[N(0x131)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler[O(0x1aa)](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const P=O;g[l]=f(q?.[P(0x1b9)]),h(!![])[P(0x120)](()=>{});};try{i['push']([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console[O(0x1a5)](O(0x121)+k,p);}};await j(d,'start'),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const Q=L;for(const [k,l]of i){try{iobrokerHandler[Q(0x155)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const R=s;super[R(0x116)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}[s(0x168)](){const S=s;super[S(0x168)]?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const T=b;if(c?.['type']!=='report'||c[T(0x146)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](T(0x14f),this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this['_paper']&&(this[T(0x10f)][T(0x1be)]['width']=g[T(0x150)]??T(0x161),this[T(0x10f)][T(0x1be)][T(0x12b)]=g['height']??'297mm'),this.#pageRule(g['page']??{},g[T(0x19d)]),this.#applyTheme(g['theme']),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const U=s,d=this['shadowRoot'];if(!d)return;let e=d['getElementById'](U(0x119));!e&&(e=document['createElement'](U(0x1be)),e['id']=U(0x119),d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()==='runtime'?'':reportThemeDeclarations(f[U(0x146)],iobrokerHandler[U(0x1a1)]?.['globalStyle']);e['textContent']=':host\x20#paper{'+g+'background:'+(f['paper']?'#fff':U(0x192))+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const V=s,f=this['_getDomElement']('load');if(!f)return;if(c==null){f['hidden']=!![];return;}f[V(0x131)]=![];const g=this[V(0x1b7)]('loadWhat'),h=this[V(0x1b7)]('loadDetail');if(g)g[V(0x1ae)]=c;if(h&&e!==undefined)h[V(0x1ae)]=e;}#logReset(){const W=s,c=this[W(0x1b7)](W(0x13e));if(c)c[W(0x1ae)]='';this.#logged=new Set();}#logged=new Set();#log(c){const X=s,d=this[X(0x1b7)]('loadLog');if(!d||this.#logged['has'](c))return;this.#logged['add'](c);const e=new Date()[X(0x1b4)]();d['textContent']+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d[X(0x134)];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const Y=b,g=iobrokerHandler[Y(0x18c)]();if(!g['length']){this.#busy('Rendering…','');return;}const i=g['filter'](m=>m[Y(0x1b6)]==='history')['length'],j=g['length']-i,k=[];if(j)k[Y(0x15c)](j+Y(0x19a)+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math['round']((Date[Y(0x1b2)]()-c)/0x3e8);this.#busy(Y(0x169),k['join'](Y(0x1a0))+Y(0x125)+l+'s');for(const m of g)if(m[Y(0x1a8)]>d)this.#log(Y(0x113)+m['id']+(m['kind']==='history'?Y(0x190):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a0=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const Z=b;try{return(await iobrokerHandler[Z(0x164)][Z(0x1aa)](f+'.'+l))?.[Z(0x1b9)];}catch(m){return undefined;}},h=Date['now'](),i=await g(a0(0x14c));let j=![];while(Date[a0(0x1b2)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[a0(0x177)]([g(a0(0x19b)),g(a0(0x14c))]),m=l!=null&&l!==i;if(k===a0(0x11a)){j=!![],this.#busy('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k===a0(0x14d))return{'ok':![],'error':await g(a0(0x1ad))};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const a1=s;if(!this['_status'])return;this[a1(0x12a)][a1(0x1ae)]=c,this[a1(0x12a)]['classList'][a1(0x191)]('err',!!d);}async #generate(c=s(0x15d),d='download'){const a2=s,f=['btnGen','btnSave'][a2(0x118)](i=>this['_getDomElement'](i))[a2(0x141)](Boolean);f[a2(0x13d)](i=>i[a2(0x196)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a2(0x143),g)===![]){this.#say(a2(0x1ac));return;}if(this.#emit('report-before-generate',g,!![])[a2(0x132)]){this.#say('Cancelled.');return;}h['format']=g[a2(0x174)],h['range']=g[a2(0x18a)];if(this.#missing[a2(0x158)]){const j=this.#missing[a2(0x194)](0x0,0x3)[a2(0x118)](k=>k['id'])[a2(0x172)](',\x20');throw new Error(a2(0x170)+j+(this.#missing[a2(0x158)]>0x3?a2(0x197)+(this.#missing[a2(0x158)]-0x3)+'\x20more)':''));}this.#say('Generating…'),this.#busy(g[a2(0x179)]==='file'?a2(0x16c):a2(0x12d),a2(0x176));const i=await iobrokerHandler['generateReport'](g['name'],{'project':g[a2(0x184)],'format':g[a2(0x174)],'range':g[a2(0x18a)],'deliver':g[a2(0x179)],'timeoutMs':this[a2(0x133)],'theme':document[a2(0x180)]['dataset']['webuiTheme']||undefined});if(i['viaTrigger']){const k=await this.#awaitServerRun(g['name'],g['project']);if(!k['ok'])throw new Error(k[a2(0x14d)]||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k['file']??null},this.#say(a2(0x1af)+(k[a2(0x142)]??''));}else{h={...h,'success':!![],'file':i[a2(0x142)]??null,'pages':i['pages']??null};const l=i['placeholders']?.[a2(0x158)]?'\x20—\x20'+i[a2(0x127)]['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say('Downloaded:\x20'+(i['file']??'')+l);}}catch(m){h[a2(0x14d)]=m?.[a2(0x17e)]??String(m),this.#say('Not\x20generated\x20—\x20'+h['error'],!![]);}finally{f['forEach'](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h[a2(0x111)]?'report-generated':a2(0x181),h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}if(!customElements['get']('iobroker-webui-report-viewer'))customElements[s(0x165)]('iobroker-webui-report-viewer',ReportViewer);