function b(c,d){c=c-0x128;const e=a();let f=e[c];return f;}const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1a7))/0x1+parseInt(r(0x1a5))/0x2+-parseInt(r(0x191))/0x3*(-parseInt(r(0x178))/0x4)+-parseInt(r(0x16f))/0x5+parseInt(r(0x1b8))/0x6+-parseInt(r(0x1b1))/0x7*(-parseInt(r(0x197))/0x8)+parseInt(r(0x12d))/0x9*(-parseInt(r(0x1ce))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd0357));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';function a(){const a3=['round','join','success','slice',':host\x20#paper{','project','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','deliver','range','hide','custom','today','getFullYear','_viewer','disabled','head','reportName','left','generateReport','Cancelled.','dataset','isArray','value','Report\x20not\x20found:\x20','number','addEventListener','_rootShadow','generateTimeoutMs','length','bottom','documentElement','calc(','onReportLoad','hidden','forEach','title','disable','shadowRoot','210mm','whenScreenReady','date','includes','btnSave','@top-center\x20{\x20content:\x20\x22\x22;\x20}','toolbarVisible',';color:var(--ui-text,\x20#1d2733);}','kind','_toolbarWanted','margin','file','Pick\x20both\x20dates.','message','connectedCallback','outstandingFetches','2777550KjqEAJ','lastError','createElement','disconnectedCallback','getMonth','error','lastFile','btnOut','start','20nmkobL','textContent','has','loadLog','_zoomLabel','getMinutes','name','screenName','\x20—\x20','viaTrigger','297mm','querySelectorAll','setScreenNameAndLoad','change','paper','iobroker-webui-report-viewer','btnPrint','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','rangeBoxes','\x20more)','groups','getState','history','items','parentElement','670701lnxSap','__report-page-rule','format','getTime','toLocaleString','afterGenerate','2688952IsfRBk','style','status','report-before-generate','running','isFinite','click','_restoreCachedInititalValues','placeholders','toggle','bar','btnFit','toState','settings','2404760tFnIzJ','beforeGenerate','636417ZfJdmY','print','data-tb-off','min','parse','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','var(--ui-page,\x20#fff)','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','Range\x20from\x20states:\x20','reportStateBase','21quDbqg','dispose','toLocaleTimeString','\x20(history)','btnIn','btnShow','push','5966046PQrqBW','height','getWebuiObject','_showBtn','pages','beginFetchTracking','report','viewer','month','now','Not\x20generated\x20—\x20','appendChild','btnGen','_paper','trim','No\x20value\x20from:\x20','webuiTheme','globalStyle','loadWhat','Rendering…','all','Generating…','126370VknrrF','no\x20value\x20from:\x20','_getDomElement','_bar','\x20value','toolbox','objectType','namespace','cssText','[data-tb]','[data-tb=\x22','page','val','end','Building\x20the\x20page…','reportRange','admin','reload','printMargins','scrollTop','report-generated','landscape','2529qTCNcZ','connection','max','getDate','scale(','map','_status','defaultPrevented','filter','The\x20server\x20is\x20rendering\x20the\x20report.','remove','width'];a=function(){return a3;};return a();}import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static ['style']=css`
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
    `;#zoom=0x1;#reportName;get[s(0x149)](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x19e)]();}['ready'](){const u=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[u(0x1d1)]=this['_getDomElement'](u(0x1a1)),this['_paper']=this['_getDomElement'](u(0x186)),this['_viewer']=this[u(0x1d0)](u(0x1bf)),this[u(0x133)]=this[u(0x1d0)](u(0x199)),this[u(0x17c)]=this['_getDomElement']('zoomLabel'),this[u(0x146)][u(0x1d4)]=u(0x1be),this.#watchReport();const d=(e,f)=>this[u(0x1d0)](e)?.['addEventListener'](u(0x19d),f);d(u(0x1b5),()=>this.#setZoom(this.#zoom*1.25)),d(u(0x176),()=>this.#setZoom(this.#zoom/1.25)),d(u(0x1a2),()=>this.#fit()),d(u(0x188),()=>this.#print()),this.#initRange(),d(u(0x1c4),()=>this.#generate('html')),d(u(0x163),()=>this.#generate('html','file')),iobrokerHandler['canSaveReportsOnServer']?.()['then'](e=>{const v=u,f=this[v(0x1d0)]('btnSave');if(f)f[v(0x15a)]=!e;})['catch'](()=>{}),this[u(0x1bb)]=this['_getDomElement'](u(0x1b6)),d('btnBar',()=>this['toolbarVisible']=![]),d('btnShow',()=>this[u(0x165)]=!![]);if(this['_toolbarWanted']!==undefined)this['toolbarVisible']=this[u(0x168)];if(this.#reportName)this.#load();}set[s(0x165)](c){const w=s;this[w(0x168)]=!!c;if(this['_bar'])this['_bar'][w(0x15a)]=!c;if(this['_showBtn'])this['_showBtn'][w(0x15a)]=!!c;}get['toolbarVisible'](){const x=s;return this[x(0x1d1)]?!this[x(0x1d1)][x(0x15a)]:this['_toolbarWanted']??!![];}async #load(){const y=s;if(!this['_viewer'])return;this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x1ba)](y(0x1be),this.#reportName);if(!c){this.#busy(null),this.#say(y(0x150)+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper'][y(0x198)]['width']=d[y(0x138)]??y(0x15f),this['_paper'][y(0x198)][y(0x1b9)]=d['height']??'297mm',this['_viewer']['style'][y(0x1d6)]='display:block;width:100%;height:100%;',this.#applyTheme(d['theme']);const e=d[y(0x1d9)]??{};this.#pageRule(e,d[y(0x129)]),await this.#applyToolbox(d[y(0x1d3)]),iobrokerHandler[y(0x1bd)]();if(this['_viewer'][y(0x17f)]===this.#reportName)await this[y(0x146)][y(0x128)]();else await this['_viewer'][y(0x184)](this.#reportName);this.#fit(),this.#hook(y(0x159),this[y(0x146)],this[y(0x146)][y(0x153)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy(y(0x1dc),''),await this['_viewer'][y(0x160)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer']['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this[y(0x146)],this['_viewer'][y(0x153)],{'missing':g}),this.#emit('report-ready',{'name':this.#reportName,'missing':g});if(g['length'])this.#say(y(0x1c7)+g['slice'](0x0,0x3)[y(0x132)](h=>h['id'])['join'](',\x20')+(g[y(0x155)]>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this[z(0x146)]?.['_scriptObject']?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console[z(0x174)]('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this[A(0x190)]!==document['body'])return;const e=A(0x192);document['getElementById'](e)?.[A(0x137)]();const f=document[A(0x171)]('style');f['id']=e;const g=(c['size']??'A4')+(c['orientation']===A(0x12c)?'\x20landscape':''),h=c[A(0x169)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x161)])k[A(0x1b7)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j[A(0x15c)])k['push'](A(0x164),'@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j['url'])k[A(0x1b7)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',A(0x1ac));if(!j['pageNumber'])k['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f[A(0x179)]='@page\x20{\x20size:\x20'+g+';\x20margin:\x20'+i(h['top'])+'mm\x20'+i(h['right'])+'mm\x20'+i(h[A(0x156)])+'mm\x20'+i(h[A(0x14a)])+'mm;\x20'+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[A(0x148)][A(0x1c3)](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x12f)](0.1,c)),this['_paper'][B(0x198)]['transform']=B(0x131)+this.#zoom+')',this['_paper']['style']['marginBottom']=B(0x158)+this[B(0x1c5)][B(0x198)]['height']+'\x20*\x20'+(this.#zoom-0x1)+')',this['_zoomLabel'][B(0x179)]=Math[B(0x139)](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement']('scroll')['clientWidth']-0x24,d=this['_paper']['getBoundingClientRect']()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x1aa)](0x1,c/d));}#print(){const D=s;window[D(0x1a8)]();}async #applyToolbox(d){const E=s,f=d?.[E(0x18f)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[E(0x18c)]??[],i=g?.['id']===E(0x1de),j=this['_bar']??this[E(0x1d0)]('bar');if(!j)return;for(const l of j['querySelectorAll'](E(0x1d7)))l['removeAttribute'](E(0x1a9));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o=E(0x142);else{if(!i&&Array[E(0x14e)](n['groups'])&&n['groups']['length']&&!n['groups']['some'](p=>h[E(0x162)](p)))o=n['action']==='disable'?E(0x15d):E(0x142);}if(!o)continue;for(const p of j[E(0x183)](E(0x1d8)+m+'\x22]'))p['setAttribute'](E(0x1a9),o);}}#initRange(){const F=s,c=this[F(0x1d0)]('rangeKind'),d=this['_getDomElement']('rangeFrom'),e=this[F(0x1d0)]('rangeTo'),f=this[F(0x1d0)]('btnApply');if(!c)return;const g=this[F(0x1d0)](F(0x18a)),h=i=>{if(g)g['hidden']=!i;};c['addEventListener'](F(0x185),()=>{const G=F;if(c['value']===G(0x143)){const i=iobrokerHandler['reportRange']??this.#namedRange(G(0x144));if(d&&!d['value'])d['value']=this.#toLocalInput(i[G(0x177)]);if(e&&!e['value'])e['value']=this.#toLocalInput(i[G(0x1db)]);h(!![]);return;}h(![]),this.#applyRange(c['value']===G(0x1be)?null:this.#namedRange(c[G(0x14f)]));}),f?.[F(0x152)]('click',()=>{const H=F,i=d?.[H(0x14f)]?new Date(d['value'])['getTime']():NaN,j=e?.[H(0x14f)]?new Date(e[H(0x14f)])['getTime']():NaN;if(!Number[H(0x19c)](i)||!Number[H(0x19c)](j)){this.#say(H(0x16b),!![]);return;}if(i>=j){this.#say(H(0x13f),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e['getFullYear']()+'-'+f(e[I(0x173)]()+0x1)+'-'+f(e['getDate']())+'T'+f(e['getHours']())+':'+f(e[I(0x17d)]());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[J(0x173)](),g[J(0x130)]())['getTime'](),f=0x5265c00;switch(c){case J(0x144):return{'start':e(d),'end':d[J(0x194)]()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d[J(0x194)]()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d[J(0x194)]()};case J(0x1c0):return{'start':new Date(d[J(0x145)](),d[J(0x173)](),0x1)[J(0x194)](),'end':d['getTime']()};case'year':return{'start':new Date(d['getFullYear'](),0x0,0x1)[J(0x194)](),'end':d['getTime']()};default:return{'start':d[J(0x194)]()-f,'end':d[J(0x194)]()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?'Range:\x20'+new Date(c['start'])['toLocaleString']()+'\x20→\x20'+new Date(c['end'])[K(0x195)]():'Report\x20default\x20range'),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')['trim'](),e=(c?.[L(0x1a3)]??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k===M(0x151))return k;const l=Number(k);if(Number[M(0x19c)](l)&&String(k)['trim']()!=='')return l;const m=Date[M(0x1ab)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(N(0x189),!![]);return;}const n=iobrokerHandler[N(0x1dd)];if(n&&n['start']===l&&n[N(0x1db)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(N(0x1af)+new Date(l)['toLocaleString']()+'\x20→\x20'+new Date(m)[N(0x195)]());const o=this['_getDomElement']('rangeKind');if(o)o[N(0x14f)]=N(0x1be);const p=this[N(0x1d0)]('rangeBoxes');if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const P=L;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const O=b;g[l]=f(q?.[O(0x1da)]),h(!![])['catch'](()=>{});};try{i[P(0x1b7)]([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console['warn']('[report]\x20range\x20state\x20'+k,p);}};await j(d,'start'),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0x172)](){const Q=s;super['disconnectedCallback']?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[Q(0x1b2)](),this.#reportChangedSub=null;}['connectedCallback'](){const R=s;super[R(0x16d)]?.();if(this[R(0x1d1)])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const S=b;if(c?.['type']!=='report'||c[S(0x17e)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](S(0x1be),this.#reportName);}catch(h){return;}if(!f)return;const g=f[S(0x1a4)]??{};this['_paper']&&(this['_paper']['style']['width']=g['width']??'210mm',this['_paper']['style'][S(0x1b9)]=g[S(0x1b9)]??S(0x182)),this.#pageRule(g[S(0x1d9)]??{},g['printMargins']),this.#applyTheme(g['theme']),await this.#applyToolbox(g[S(0x1d3)]),this.#fit();});}#applyTheme(c){const T=s,d=this[T(0x15e)];if(!d)return;let e=d['getElementById']('__reportTheme');!e&&(e=document['createElement'](T(0x198)),e['id']='__reportTheme',d[T(0x1c3)](e));const f=resolveReportTheme(c),g=String(c??'')[T(0x1c6)]()==='runtime'?'':reportThemeDeclarations(f['name'],iobrokerHandler['config']?.[T(0x1c9)]);e[T(0x179)]=T(0x13d)+g+'background:'+(f['paper']?'#fff':T(0x1ad))+T(0x166);}#busy(c,e){const U=s,f=this[U(0x1d0)]('load');if(!f)return;if(c==null){f[U(0x15a)]=!![];return;}f['hidden']=![];const g=this['_getDomElement'](U(0x1ca)),h=this['_getDomElement']('loadDetail');if(g)g[U(0x179)]=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const V=s,c=this[V(0x1d0)]('loadLog');if(c)c[V(0x179)]='';this.#logged=new Set();}#logged=new Set();#log(c){const W=s,d=this['_getDomElement'](W(0x17b));if(!d||this.#logged[W(0x17a)](c))return;this.#logged['add'](c);const e=new Date()[W(0x1b3)]();d['textContent']+=e+'\x20\x20'+c+'\x0a',d[W(0x12a)]=d['scrollHeight'];}#watchFetches(){const X=s,c=Date[X(0x1c1)](),d=0xbb8,e=()=>{const Y=X,g=iobrokerHandler[Y(0x16e)]();if(!g['length']){this.#busy(Y(0x1cb),'');return;}const i=g['filter'](m=>m[Y(0x167)]===Y(0x18e))[Y(0x155)],j=g['length']-i,k=[];if(j)k['push'](j+Y(0x1d2)+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math['round']((Date[Y(0x1c1)]()-c)/0x3e8);this.#busy('Loading\x20data…',k['join']('\x20and\x20')+'\x20outstanding\x20—\x20'+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log('still\x20waiting:\x20'+m['id']+(m[Y(0x167)]===Y(0x18e)?Y(0x1b4):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Z=s,f=iobrokerHandler[Z(0x1d5)]+'.'+IobrokerHandler[Z(0x1b0)](d,c),g=async l=>{const a0=Z;try{return(await iobrokerHandler[a0(0x12e)][a0(0x18d)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[Z(0x1c1)](),i=await g('lastRun');let j=![];while(Date[Z(0x1c1)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[Z(0x1cc)]([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k===Z(0x19b)){j=!![],this.#busy('Generating\x20on\x20the\x20server…',Z(0x136));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(Z(0x175))};if(k==='error')return{'ok':![],'error':await g(Z(0x170))};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const a1=s;if(!this['_status'])return;this['_status'][a1(0x179)]=c,this[a1(0x133)]['classList'][a1(0x1a0)]('err',!!d);}async #generate(c='html',d='download'){const a2=s,f=[a2(0x1c4),a2(0x163)]['map'](i=>this['_getDomElement'](i))[a2(0x135)](Boolean);f[a2(0x15b)](i=>i[a2(0x147)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a2(0x1a6),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit(a2(0x19a),g,!![])[a2(0x134)]){this.#say(a2(0x14c));return;}h['format']=g[a2(0x193)],h['range']=g[a2(0x141)];if(this.#missing[a2(0x155)]){const j=this.#missing[a2(0x13c)](0x0,0x3)[a2(0x132)](k=>k['id'])[a2(0x13a)](',\x20');throw new Error(a2(0x1cf)+j+(this.#missing[a2(0x155)]>0x3?'\x20(+'+(this.#missing[a2(0x155)]-0x3)+a2(0x18b):''));}this.#say('Generating…'),this.#busy(g['deliver']===a2(0x16a)?'Generating\x20on\x20the\x20server…':a2(0x1cd),a2(0x1ae));const i=await iobrokerHandler[a2(0x14b)](g['name'],{'project':g[a2(0x13e)],'format':g['format'],'range':g[a2(0x141)],'deliver':g[a2(0x140)],'timeoutMs':this[a2(0x154)],'theme':document[a2(0x157)][a2(0x14d)][a2(0x1c8)]||undefined});if(i[a2(0x181)]){const k=await this.#awaitServerRun(g[a2(0x17e)],g['project']);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k['file']??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k['file']??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i[a2(0x1bc)]??null};const l=i['placeholders']?.['length']?a2(0x180)+i[a2(0x19f)]['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say('Downloaded:\x20'+(i['file']??'')+l);}}catch(m){h['error']=m?.[a2(0x16c)]??String(m),this.#say(a2(0x1c2)+h['error'],!![]);}finally{f['forEach'](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h[a2(0x13b)]?a2(0x12b):'report-generate-failed',h);try{await this.#hook(a2(0x196),g,h);}catch(n){}}}if(!customElements['get']('iobroker-webui-report-viewer'))customElements['define'](s(0x187),ReportViewer);