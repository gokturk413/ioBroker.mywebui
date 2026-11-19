const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0xde))/0x1*(-parseInt(r(0x106))/0x2)+parseInt(r(0x9f))/0x3*(parseInt(r(0xa3))/0x4)+-parseInt(r(0xd7))/0x5+parseInt(r(0xe0))/0x6+-parseInt(r(0xe2))/0x7*(-parseInt(r(0xf6))/0x8)+-parseInt(r(0xe6))/0x9+-parseInt(r(0x11e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa762e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';function a(){const a2=['report','reportRange','kind','fromState','13862330WOEGpM','getBoundingClientRect','documentElement','marginBottom','\x20—\x20','click','report-before-generate','__report-page-rule','length','_scriptObject','runtime','toolbox','addEventListener','\x20more)','_getDomElement','scrollHeight','range','settings','btnShow','display:block;width:100%;height:100%;','btnOut','_paper','ies','isArray','page','toolbarVisible','canSaveReportsOnServer','number','rangeTo','\x20landscape','parse','Range\x20from\x20states:\x20','rangeBoxes','today','\x20outstanding\x20—\x20','head','getWebuiObject','The\x20server\x20is\x20rendering\x20the\x20report.','lastError','catch','scale(','then','lastRun','loadWhat','dispose','scrollTop','map','textContent','items','generateTimeoutMs','print','end','__reportTheme','still\x20waiting:\x20','toggle',';color:var(--ui-text,\x20#1d2733);}','Generating\x20on\x20the\x20server…','objectType','theme','html','style','no\x20value\x20from:\x20','3qkEeRL','outstandingFetches','btnGen','name','125860saYXsH','[report]\x20table\x20paging','data-tb-off','project','210mm','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','onReportReady','rangeFrom','has','config','get','ready','setAttribute','isFinite','filter','iobroker-webui-report-viewer','shadowRoot','whenDataReady','\x20*\x20','left','getState','push',';\x20margin:\x20','printMargins','the\x20server\x20refused\x20the\x20run','_showBtn','getElementById','30d','disconnectedCallback','getFullYear','_status','template','namespace','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','btnPrint','No\x20value\x20from:\x20','getTime','report\x20','disable','\x20value','\x20threw','mm\x20','endFetchTracking','@top-right\x20{\x20content:\x20\x22\x22;\x20}','subscribeState','pages','var(--ui-page,\x20#fff)','width','_parseAttributesToProperties','status','whenScreenReady','bottom','3176575nGeDWB','hidden','min','querySelectorAll','_viewer','admin','history','1825wPgJAf','year','6745608kYejAd','Not\x20generated\x20—\x20','14dLgyxa','Opening\x20','start','value','2124207sDFsVM','title','\x20(history)','success','change','bar','error','file','format','setReportRange','custom','_rootShadow','height','_bar','dataset','groups','2580008PELAxT','val','createElement','connectedCallback','getMonth','round','slice','toLocaleString','removeAttribute','deliver','max','reportName','\x20(+','trim','_toolbarWanted','define','1252RdIDAb','btnFit','getMinutes','btnApply','defaultPrevented','connection','\x20→\x20','cssText','now','btnSave','yesterday','scroll','Generating…','getDate','beforeGenerate','@top-center\x20{\x20content:\x20\x22\x22;\x20}','currentProject','transform','action','forEach'];a=function(){return a2;};return a();}import'./ScreenViewer.js';function b(c,d){c=c-0x6d;const e=a();let f=e[c];return f;}import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';import{applyTablePaging}from'../common/TablePager.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static [s(0x9d)]=css`
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
    `;static [s(0xc2)]=html`
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
    `;#zoom=0x1;#reportName;get[s(0x101)](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}[s(0xae)](){const t=s,c=this.#reportName;this[t(0xd3)]();if(c&&!this.#reportName)this.#reportName=c;this[t(0xf3)]=this['_getDomElement'](t(0xeb)),this[t(0x76)]=this[t(0x6f)]('paper'),this[t(0xdb)]=this['_getDomElement']('viewer'),this['_status']=this['_getDomElement'](t(0xd4)),this['_zoomLabel']=this['_getDomElement']('zoomLabel'),this[t(0xdb)][t(0x9a)]=t(0x11a),this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.[t(0x6d)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(t(0x75),()=>this.#setZoom(this.#zoom/1.25)),d(t(0x107),()=>this.#fit()),d(t(0xc5),()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate('html')),d('btnSave',()=>this.#generate(t(0x9c),t(0xed))),iobrokerHandler[t(0x7b)]?.()[t(0x8a)](e=>{const u=t,f=this[u(0x6f)]('btnSave');if(f)f['hidden']=!e;})[t(0x88)](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),d('btnBar',()=>this[t(0x7a)]=![]),d(t(0x73),()=>this['toolbarVisible']=!![]);if(this[t(0x104)]!==undefined)this[t(0x7a)]=this[t(0x104)];if(this.#reportName)this.#load();}set['toolbarVisible'](c){const v=s;this['_toolbarWanted']=!!c;if(this[v(0xf3)])this[v(0xf3)]['hidden']=!c;if(this[v(0xbc)])this[v(0xbc)][v(0xd8)]=!!c;}get[s(0x7a)](){const w=s;return this['_bar']?!this['_bar'][w(0xd8)]:this['_toolbarWanted']??!![];}#pager=null;async #load(){const x=s;if(!this[x(0xdb)])return;this.#pager?.['dispose'](),this.#pager=null,this.#say(''),this.#busy(x(0xe3)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[x(0x85)]('report',this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c[x(0x72)]??{};this['_paper'][x(0x9d)]['width']=d[x(0xd2)]??x(0xa7),this['_paper'][x(0x9d)]['height']=d[x(0xf2)]??'297mm',this[x(0xdb)]['style'][x(0x10d)]=x(0x74),this.#applyTheme(d[x(0x9b)]);const f=d['page']??{};this.#pageRule(f,d[x(0xba)]),await this.#applyToolbox(d[x(0x129)]),iobrokerHandler['beginFetchTracking']();if(this[x(0xdb)]['screenName']===this.#reportName)await this[x(0xdb)]['reload']();else await this[x(0xdb)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this['_viewer'],this['_viewer'][x(0xf1)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this['_viewer'][x(0xd5)]({'timeout':0x1f40});const g=this.#watchFetches(),{missing:h}=await this[x(0xdb)][x(0xb4)]();g(),iobrokerHandler[x(0xcd)](),this.#busy(null),this.#missing=h;try{const i=Number(d[x(0x79)]?.['margin']?.['bottom'])||0x0;this.#pager=applyTablePaging(this['_viewer'][x(0xf1)],{'scale':()=>this.#zoom||0x1,'sheetBottom':()=>this['_paper'][x(0x11f)]()[x(0xd6)]-i*0x60/25.4*(this.#zoom||0x1)});}catch(j){console['warn'](x(0xa4),j);}this.#hook(x(0xa9),this['_viewer'],this['_viewer']['_rootShadow'],{'missing':h}),this.#emit('report-ready',{'name':this.#reportName,'missing':h});if(h[x(0x126)])this.#say(x(0xc6)+h['slice'](0x0,0x3)[x(0x8f)](k=>k['id'])['join'](',\x20')+(h['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const y=s,f=this[y(0xdb)]?.[y(0x127)]?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console['error'](y(0xc8)+this.#reportName+':\x20'+c+y(0xcb),g),undefined;}}#emit(c,d,e=![]){const z=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[z(0xdb)]??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this['parentElement']!==document['body'])return;const e=A(0x125);document['getElementById'](e)?.['remove']();const f=document[A(0xf8)]('style');f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?A(0x7e):''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j['date'])k['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j[A(0xe7)])k[A(0xb8)](A(0x115),A(0xce));if(!j['url'])k['push'](A(0xa8),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}');if(!j['pageNumber'])k['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f['textContent']='@page\x20{\x20size:\x20'+g+A(0xb9)+i(h['top'])+A(0xcc)+i(h['right'])+A(0xcc)+i(h['bottom'])+A(0xcc)+i(h[A(0xb6)])+'mm;\x20'+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[A(0x84)]['appendChild'](f);}#setZoom(c){const B=s;this.#zoom=Math[B(0xd9)](0x4,Math[B(0x100)](0.1,c)),this[B(0x76)]['style'][B(0x117)]=B(0x89)+this.#zoom+')',this['_paper']['style'][B(0x121)]='calc('+this['_paper'][B(0x9d)][B(0xf2)]+B(0xb5)+(this.#zoom-0x1)+')',this['_zoomLabel']['textContent']=Math[B(0xfb)](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement'](C(0x111))['clientWidth']-0x24,d=this[C(0x76)]['getBoundingClientRect']()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0xd9)](0x1,c/d));}#print(){const D=s;window[D(0x93)]();}async #applyToolbox(d){const E=s,f=d?.[E(0x91)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[E(0xf5)]??[],i=g?.['id']===E(0xdc),j=this[E(0xf3)]??this['_getDomElement'](E(0xeb));if(!j)return;for(const l of j['querySelectorAll']('[data-tb]'))l[E(0xfe)]('data-tb-off');for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o='hide';else{if(!i&&Array[E(0x78)](n['groups'])&&n[E(0xf5)]['length']&&!n[E(0xf5)]['some'](p=>h['includes'](p)))o=n[E(0x118)]===E(0xc9)?'disable':'hide';}if(!o)continue;for(const p of j[E(0xda)]('[data-tb=\x22'+m+'\x22]'))p[E(0xaf)](E(0xa5),o);}}#initRange(){const F=s,c=this['_getDomElement']('rangeKind'),d=this[F(0x6f)](F(0xaa)),e=this['_getDomElement'](F(0x7d)),f=this[F(0x6f)](F(0x109));if(!c)return;const g=this['_getDomElement'](F(0x81)),h=i=>{if(g)g['hidden']=!i;};c['addEventListener'](F(0xea),()=>{const G=F;if(c['value']===G(0xf0)){const i=iobrokerHandler['reportRange']??this.#namedRange(G(0x82));if(d&&!d[G(0xe5)])d['value']=this.#toLocalInput(i['start']);if(e&&!e[G(0xe5)])e[G(0xe5)]=this.#toLocalInput(i[G(0x94)]);h(!![]);return;}h(![]),this.#applyRange(c['value']==='report'?null:this.#namedRange(c['value']));}),f?.[F(0x6d)](F(0x123),()=>{const H=F,i=d?.[H(0xe5)]?new Date(d['value'])[H(0xc7)]():NaN,j=e?.[H(0xe5)]?new Date(e['value'])[H(0xc7)]():NaN;if(!Number[H(0xb0)](i)||!Number[H(0xb0)](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e['getFullYear']()+'-'+f(e['getMonth']()+0x1)+'-'+f(e[I(0x113)]())+'T'+f(e['getHours']())+':'+f(e[I(0x108)]());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[J(0xfa)](),g['getDate']())[J(0xc7)](),f=0x5265c00;switch(c){case J(0x82):return{'start':e(d),'end':d['getTime']()};case J(0x110):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d['getTime']()};case J(0xbe):return{'start':d[J(0xc7)]()-0x1e*f,'end':d['getTime']()};case'month':return{'start':new Date(d[J(0xc0)](),d['getMonth'](),0x1)[J(0xc7)](),'end':d['getTime']()};case J(0xdf):return{'start':new Date(d[J(0xc0)](),0x0,0x1)['getTime'](),'end':d['getTime']()};default:return{'start':d[J(0xc7)]()-f,'end':d['getTime']()};}}async #applyRange(c){const K=s;iobrokerHandler[K(0xef)](c),this.#say(c?'Range:\x20'+new Date(c[K(0xe4)])['toLocaleString']()+'\x20→\x20'+new Date(c[K(0x94)])[K(0xfd)]():'Report\x20default\x20range'),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.[L(0x11d)]??'')['trim'](),e=(c?.['toState']??'')[L(0x103)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k===''||k===0x0||k==='0')return null;if(typeof k===M(0x7c))return k;const l=Number(k);if(Number[M(0xb0)](l)&&String(k)['trim']()!=='')return l;const m=Date[M(0x7f)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n[N(0xe4)]===l&&n[N(0x94)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(N(0x80)+new Date(l)['toLocaleString']()+N(0x10c)+new Date(m)[N(0xfd)]());const o=this[N(0x6f)]('rangeKind');if(o)o[N(0xe5)]='report';const p=this[N(0x6f)](N(0x81));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler[O(0xb7)](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const P=O;g[l]=f(q?.[P(0xf7)]),h(!![])[P(0x88)](()=>{});};try{i['push']([k,m,await iobrokerHandler[O(0xcf)](k,m)]);}catch(p){console['warn']('[report]\x20range\x20state\x20'+k,p);}};await j(d,'start'),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0xbf)](){const Q=s;super[Q(0xbf)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[Q(0x8d)](),this.#reportChangedSub=null;}[s(0xf9)](){const R=s;super['connectedCallback']?.();if(this[R(0xf3)])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const S=b;if(c?.['type']!=='report'||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](S(0x11a),this.#reportName);}catch(h){return;}if(!f)return;const g=f[S(0x72)]??{};this[S(0x76)]&&(this['_paper'][S(0x9d)]['width']=g[S(0xd2)]??'210mm',this['_paper']['style']['height']=g[S(0xf2)]??'297mm'),this.#pageRule(g[S(0x79)]??{},g[S(0xba)]),this.#applyTheme(g[S(0x9b)]),await this.#applyToolbox(g[S(0x129)]),this.#fit();});}#applyTheme(c){const T=s,d=this[T(0xb3)];if(!d)return;let e=d[T(0xbd)](T(0x95));!e&&(e=document[T(0xf8)]('style'),e['id']=T(0x95),d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()===T(0x128)?'':reportThemeDeclarations(f['name'],iobrokerHandler[T(0xac)]?.['globalStyle']);e[T(0x90)]=':host\x20#paper{'+g+'background:'+(f['paper']?'#fff':T(0xd1))+T(0x98);}#busy(c,e){const U=s,f=this['_getDomElement']('load');if(!f)return;if(c==null){f[U(0xd8)]=!![];return;}f['hidden']=![];const g=this[U(0x6f)](U(0x8c)),h=this[U(0x6f)]('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h[U(0x90)]=e;}#logReset(){const V=s,c=this[V(0x6f)]('loadLog');if(c)c[V(0x90)]='';this.#logged=new Set();}#logged=new Set();#log(c){const W=s,d=this['_getDomElement']('loadLog');if(!d||this.#logged[W(0xab)](c))return;this.#logged['add'](c);const e=new Date()['toLocaleTimeString']();d[W(0x90)]+=e+'\x20\x20'+c+'\x0a',d[W(0x8e)]=d[W(0x70)];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const X=b,g=iobrokerHandler[X(0xa0)]();if(!g['length']){this.#busy('Rendering…','');return;}const i=g[X(0xb1)](m=>m['kind']==='history')[X(0x126)],j=g['length']-i,k=[];if(j)k['push'](j+X(0xca)+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?X(0x77):'y'));const l=Math[X(0xfb)]((Date['now']()-c)/0x3e8);this.#busy('Loading\x20data…',k['join']('\x20and\x20')+X(0x83)+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log(X(0x96)+m['id']+(m[X(0x11c)]===X(0xdd)?X(0xe8):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Y=s,f=iobrokerHandler[Y(0xc3)]+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const Z=Y;try{return(await iobrokerHandler[Z(0x10b)]['getState'](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[Y(0x10e)](),i=await g(Y(0x8b));let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy('Generating\x20on\x20the\x20server…',Y(0x86));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k===Y(0xec))return{'ok':![],'error':await g(Y(0x87))};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const a0=s;if(!this['_status'])return;this['_status']['textContent']=c,this[a0(0xc1)]['classList'][a0(0x97)]('err',!!d);}async #generate(c='html',d='download'){const a1=s,f=[a1(0xa1),a1(0x10f)]['map'](i=>this['_getDomElement'](i))[a1(0xb1)](Boolean);f[a1(0x119)](i=>i['disabled']=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[a1(0x11b)]??undefined,'project':iobrokerHandler[a1(0x116)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a1(0x114),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit(a1(0x124),g,!![])[a1(0x10a)]){this.#say('Cancelled.');return;}h['format']=g['format'],h[a1(0x71)]=g[a1(0x71)];if(this.#missing[a1(0x126)]){const j=this.#missing[a1(0xfc)](0x0,0x3)[a1(0x8f)](k=>k['id'])['join'](',\x20');throw new Error(a1(0x9e)+j+(this.#missing['length']>0x3?a1(0x102)+(this.#missing['length']-0x3)+a1(0x6e):''));}this.#say(a1(0x112)),this.#busy(g['deliver']==='file'?a1(0x99):'Generating…',a1(0xc4));const i=await iobrokerHandler['generateReport'](g[a1(0xa2)],{'project':g[a1(0xa6)],'format':g[a1(0xee)],'range':g['range'],'deliver':g[a1(0xff)],'timeoutMs':this[a1(0x92)],'theme':document[a1(0x120)][a1(0xf4)]['webuiTheme']||undefined});if(i['viaTrigger']){const k=await this.#awaitServerRun(g[a1(0xa2)],g[a1(0xa6)]);if(!k['ok'])throw new Error(k[a1(0xec)]||a1(0xbb));h={...h,'success':!![],'file':k['file']??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k[a1(0xed)]??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i[a1(0xd0)]??null};const l=i['placeholders']?.[a1(0x126)]?a1(0x122)+i['placeholders']['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say('Downloaded:\x20'+(i['file']??'')+l);}}catch(m){h[a1(0xec)]=m?.['message']??String(m),this.#say(a1(0xe1)+h[a1(0xec)],!![]);}finally{f['forEach'](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h[a1(0xe9)]?'report-generated':'report-generate-failed',h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}if(!customElements[s(0xad)](s(0xb2)))customElements[s(0x105)](s(0xb2),ReportViewer);