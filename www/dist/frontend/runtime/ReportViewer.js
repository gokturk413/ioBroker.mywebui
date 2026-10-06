const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x25b))/0x1+-parseInt(r(0x270))/0x2+-parseInt(r(0x22f))/0x3+-parseInt(r(0x2a0))/0x4*(parseInt(r(0x27f))/0x5)+-parseInt(r(0x298))/0x6+parseInt(r(0x23f))/0x7*(parseInt(r(0x224))/0x8)+parseInt(r(0x26a))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf1a04));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1f2;const e=a();let f=e[c];return f;}import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';function a(){const a4=['the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','calc(','scale(','addEventListener','number','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','max','5659461hXkbHy','btnApply','__reportTheme','querySelectorAll','project','No\x20value\x20from:\x20','report-load','rangeKind','push','name',':host\x20#paper{','The\x20server\x20is\x20rendering\x20the\x20report.','disconnectedCallback','setReportRange','getFullYear','report-range-changed','133RYqMLr','createElement','getBoundingClientRect','left','viewer','toLocaleString','afterGenerate','connection','iobroker-webui-report-viewer','var(--ui-page,\x20#fff)','items','file','textContent','length','groups','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','\x20—\x20','reportRange','_zoomLabel','error','_scriptObject','load','err','ready','height','getWebuiObject','format','bar','1129316PRrzby','_parseAttributesToProperties','now','kind','210mm','Downloaded:\x20','btnBar','toolbarVisible','click','settings','_restoreCachedInititalValues','body','beginFetchTracking','parse','add','26595693frJTCn','isFinite','appendChild','value','_bar','end','362016COudUK','printMargins','mm;\x20','\x20value','btnOut','\x20→\x20','_viewer','background:','_paper','getState','transform','hidden','function','start','val','5HLIEPl','loadLog','@top-center\x20{\x20content:\x20\x22\x22;\x20}','Building\x20the\x20page…','has','\x20history\x20quer','outstandingFetches','whenDataReady','right','connectedCallback','report','_rootShadow','_toolbarWanted','Rendering…','lastFile','no\x20value\x20from:\x20','filter','\x20and\x20','message','warn','style','Cancelled.','trim','yesterday','html','7859112FimCuy','show','Opening\x20','btnPrint','reload','[data-tb=\x22','Generating…','getHours','4064668BUZKWi','Not\x20generated\x20—\x20','getTime','viaTrigger','zoomLabel','title','config','status','objectsChanged','type','getMonth','join','btnGen','url','disable','waitedMs','width','\x20more)','running','theme',';\x20margin:\x20','generateTimeoutMs','still\x20waiting:\x20','removeAttribute',';color:var(--ui-text,\x20#1d2733);}','unsubscribeState','dispose','297mm','\x20control(s)\x20shown\x20as\x20placeholders','mm\x20','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','rangeBoxes','range','getElementById','_status','data-tb-off','margin','catch','isArray','btnShow','globalStyle','placeholders','custom','data','orientation','action','_getDomElement','clientWidth','round','objectType','forEach','disabled','_showBtn','toolbox','scrollTop','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','546872JDrKMZ','btnSave','@top-right\x20{\x20content:\x20\x22\x22;\x20}','month'];a=function(){return a4;};return a();}import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static [s(0x293)]=css`
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
    `;#zoom=0x1;#reportName;get['reportName'](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x265)]();}[s(0x256)](){const u=s,c=this.#reportName;this[u(0x25c)]();if(c&&!this.#reportName)this.#reportName=c;this['_bar']=this['_getDomElement'](u(0x25a)),this[u(0x278)]=this[u(0x21a)]('paper'),this['_viewer']=this['_getDomElement'](u(0x243)),this['_status']=this[u(0x21a)](u(0x1f3)),this[u(0x251)]=this['_getDomElement'](u(0x2a4)),this['_viewer'][u(0x21d)]='report',this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.['addEventListener']('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(u(0x274),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x29b),()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate('html')),d('btnSave',()=>this.#generate(u(0x297),'file')),iobrokerHandler['canSaveReportsOnServer']?.()['then'](e=>{const v=u,f=this[v(0x21a)]('btnSave');if(f)f[v(0x27b)]=!e;})[u(0x211)](()=>{}),this['_showBtn']=this[u(0x21a)]('btnShow'),d(u(0x261),()=>this['toolbarVisible']=![]),d(u(0x213),()=>this[u(0x262)]=!![]);if(this[u(0x28b)]!==undefined)this[u(0x262)]=this['_toolbarWanted'];if(this.#reportName)this.#load();}set[s(0x262)](c){const w=s;this[w(0x28b)]=!!c;if(this['_bar'])this[w(0x26e)]['hidden']=!c;if(this[w(0x220)])this[w(0x220)][w(0x27b)]=!!c;}get['toolbarVisible'](){return this['_bar']?!this['_bar']['hidden']:this['_toolbarWanted']??!![];}async #load(){const x=s;if(!this[x(0x276)])return;this.#say(''),this.#busy(x(0x29a)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[x(0x258)](x(0x289),this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper'][x(0x293)][x(0x1fc)]=d['width']??'210mm',this[x(0x278)][x(0x293)][x(0x257)]=d[x(0x257)]??x(0x207),this['_viewer']['style']['cssText']='display:block;width:100%;height:100%;',this.#applyTheme(d[x(0x1ff)]);const e=d['page']??{};this.#pageRule(e,d[x(0x271)]),await this.#applyToolbox(d[x(0x221)]),iobrokerHandler[x(0x267)]();if(this[x(0x276)]['screenName']===this.#reportName)await this[x(0x276)][x(0x29c)]();else await this[x(0x276)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this['_viewer'],this['_viewer'][x(0x28a)]),this.#emit(x(0x235),{'name':this.#reportName}),await this.#wireRangeStates(d[x(0x217)]),this.#busy(x(0x282),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer'][x(0x286)]();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this[x(0x276)],this[x(0x276)][x(0x28a)],{'missing':g}),this.#emit('report-ready',{'name':this.#reportName,'missing':g});if(g['length'])this.#say(x(0x234)+g['slice'](0x0,0x3)['map'](h=>h['id'])[x(0x1f7)](',\x20')+(g[x(0x24c)]>0x3?'\x20…':''),!![]);}#missing=[];[s(0x201)]=0xea60;#hook(c,...d){const y=s,f=this[y(0x276)]?.[y(0x253)]?.[c];if(typeof f!==y(0x27c))return undefined;try{return f(...d);}catch(g){return console['error']('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const z=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[z(0x276)]??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this['parentElement']!==document[A(0x266)])return;const e='__report-page-rule';document[A(0x20d)](e)?.['remove']();const f=document[A(0x240)]('style');f['id']=e;const g=(c['size']??'A4')+(c[A(0x218)]==='landscape'?'\x20landscape':''),h=c[A(0x210)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j['date'])k[A(0x237)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j[A(0x2a5)])k[A(0x237)](A(0x281),A(0x226));if(!j[A(0x1f9)])k['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',A(0x20a));if(!j['pageNumber'])k[A(0x237)](A(0x22d));f['textContent']='@page\x20{\x20size:\x20'+g+A(0x200)+i(h['top'])+'mm\x20'+i(h[A(0x287)])+'mm\x20'+i(h['bottom'])+A(0x209)+i(h[A(0x242)])+A(0x272)+k[A(0x1f7)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][A(0x26c)](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x22e)](0.1,c)),this['_paper'][B(0x293)][B(0x27a)]=B(0x22a)+this.#zoom+')',this[B(0x278)]['style']['marginBottom']=B(0x229)+this['_paper'][B(0x293)][B(0x257)]+'\x20*\x20'+(this.#zoom-0x1)+')',this['_zoomLabel'][B(0x24b)]=Math[B(0x21c)](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement']('scroll')[C(0x21b)]-0x24,d=this[C(0x278)][C(0x241)]()[C(0x1fc)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const D=s,f=d?.[D(0x249)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.['groups']??[],i=g?.['id']==='admin',j=this[D(0x26e)]??this[D(0x21a)](D(0x25a));if(!j)return;for(const l of j['querySelectorAll']('[data-tb]'))l[D(0x203)](D(0x20f));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n[D(0x299)]===![])o='hide';else{if(!i&&Array[D(0x212)](n[D(0x24d)])&&n[D(0x24d)]['length']&&!n[D(0x24d)]['some'](p=>h['includes'](p)))o=n[D(0x219)]==='disable'?D(0x1fa):'hide';}if(!o)continue;for(const p of j[D(0x232)](D(0x29d)+m+'\x22]'))p['setAttribute']('data-tb-off',o);}}#initRange(){const E=s,c=this[E(0x21a)](E(0x236)),d=this['_getDomElement']('rangeFrom'),e=this[E(0x21a)]('rangeTo'),f=this['_getDomElement'](E(0x230));if(!c)return;const g=this[E(0x21a)]('rangeBoxes'),h=i=>{const F=E;if(g)g[F(0x27b)]=!i;};c['addEventListener']('change',()=>{const G=E;if(c['value']===G(0x216)){const i=iobrokerHandler[G(0x250)]??this.#namedRange('today');if(d&&!d[G(0x26d)])d[G(0x26d)]=this.#toLocalInput(i['start']);if(e&&!e['value'])e[G(0x26d)]=this.#toLocalInput(i[G(0x26f)]);h(!![]);return;}h(![]),this.#applyRange(c['value']==='report'?null:this.#namedRange(c['value']));}),f?.[E(0x22b)](E(0x263),()=>{const H=E,i=d?.[H(0x26d)]?new Date(d[H(0x26d)])[H(0x2a2)]():NaN,j=e?.[H(0x26d)]?new Date(e[H(0x26d)])[H(0x2a2)]():NaN;if(!Number[H(0x26b)](i)||!Number['isFinite'](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say(H(0x24e),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e[I(0x23d)]()+'-'+f(e['getMonth']()+0x1)+'-'+f(e['getDate']())+'T'+f(e[I(0x29f)]())+':'+f(e['getMinutes']());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[J(0x1f6)](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d[J(0x2a2)]()};case J(0x296):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0x2a2)]()-0x7*f,'end':d['getTime']()};case'30d':return{'start':d[J(0x2a2)]()-0x1e*f,'end':d[J(0x2a2)]()};case J(0x227):return{'start':new Date(d['getFullYear'](),d[J(0x1f6)](),0x1)['getTime'](),'end':d[J(0x2a2)]()};case'year':return{'start':new Date(d[J(0x23d)](),0x0,0x1)['getTime'](),'end':d[J(0x2a2)]()};default:return{'start':d['getTime']()-f,'end':d[J(0x2a2)]()};}}async #applyRange(c){const K=s;iobrokerHandler[K(0x23c)](c),this.#say(c?'Range:\x20'+new Date(c[K(0x27d)])['toLocaleString']()+K(0x275)+new Date(c['end'])['toLocaleString']():'Report\x20default\x20range'),this.#emit(K(0x23e),{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')[L(0x295)](),e=(c?.['toState']??'')[L(0x295)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k===M(0x22c))return k;const l=Number(k);if(Number[M(0x26b)](l)&&String(k)['trim']()!=='')return l;const m=Date[M(0x268)](String(k));return Number[M(0x26b)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(N(0x223),!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n['start']===l&&n[N(0x26f)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+N(0x275)+new Date(m)[N(0x244)]());const o=this['_getDomElement']('rangeKind');if(o)o[N(0x26d)]='report';const p=this[N(0x21a)](N(0x20b));if(p)p[N(0x27b)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.[O(0x27e)]);}catch(o){}const m=(p,q)=>{const P=O;g[l]=f(q?.[P(0x27e)]),h(!![])[P(0x211)](()=>{});};try{i[O(0x237)]([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console[O(0x292)]('[report]\x20range\x20state\x20'+k,p);}};await j(d,L(0x27d)),await j(e,L(0x26f)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const Q=L;for(const [k,l]of i){try{iobrokerHandler[Q(0x205)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0x23b)](){const R=s;super['disconnectedCallback']?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[R(0x206)](),this.#reportChangedSub=null;}[s(0x288)](){const S=s;super['connectedCallback']?.();if(this[S(0x26e)])this.#watchReport();}#reportChangedSub=null;#watchReport(){const T=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[T(0x1f4)]['on'](async c=>{const U=T;if(c?.[U(0x1f5)]!=='report'||c[U(0x238)]!==this.#reportName)return;let f;try{f=await iobrokerHandler[U(0x258)](U(0x289),this.#reportName);}catch(h){return;}if(!f)return;const g=f[U(0x264)]??{};this['_paper']&&(this['_paper']['style'][U(0x1fc)]=g['width']??U(0x25f),this['_paper'][U(0x293)]['height']=g['height']??U(0x207)),this.#pageRule(g['page']??{},g['printMargins']),this.#applyTheme(g['theme']),await this.#applyToolbox(g[U(0x221)]),this.#fit();});}#applyTheme(c){const V=s,d=this['shadowRoot'];if(!d)return;let e=d['getElementById']('__reportTheme');!e&&(e=document[V(0x240)](V(0x293)),e['id']=V(0x231),d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()==='runtime'?'':reportThemeDeclarations(f['name'],iobrokerHandler[V(0x1f2)]?.[V(0x214)]);e['textContent']=V(0x239)+g+V(0x277)+(f['paper']?'#fff':V(0x248))+V(0x204);}#busy(c,e){const W=s,f=this['_getDomElement'](W(0x254));if(!f)return;if(c==null){f[W(0x27b)]=!![];return;}f['hidden']=![];const g=this[W(0x21a)]('loadWhat'),h=this[W(0x21a)]('loadDetail');if(g)g[W(0x24b)]=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const X=s,c=this['_getDomElement'](X(0x280));if(c)c[X(0x24b)]='';this.#logged=new Set();}#logged=new Set();#log(c){const Y=s,d=this['_getDomElement'](Y(0x280));if(!d||this.#logged[Y(0x283)](c))return;this.#logged[Y(0x269)](c);const e=new Date()['toLocaleTimeString']();d[Y(0x24b)]+=e+'\x20\x20'+c+'\x0a',d[Y(0x222)]=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const Z=b,g=iobrokerHandler[Z(0x285)]();if(!g['length']){this.#busy(Z(0x28c),'');return;}const i=g[Z(0x28f)](m=>m['kind']==='history')[Z(0x24c)],j=g['length']-i,k=[];if(j)k[Z(0x237)](j+Z(0x273)+(j>0x1?'s':''));if(i)k[Z(0x237)](i+Z(0x284)+(i>0x1?'ies':'y'));const l=Math[Z(0x21c)]((Date[Z(0x25d)]()-c)/0x3e8);this.#busy('Loading\x20data…',k[Z(0x1f7)](Z(0x290))+'\x20outstanding\x20—\x20'+l+'s');for(const m of g)if(m[Z(0x1fb)]>d)this.#log(Z(0x202)+m['id']+(m[Z(0x25e)]==='history'?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a1=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const a0=b;try{return(await iobrokerHandler[a0(0x246)][a0(0x279)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[a1(0x25d)](),i=await g('lastRun');let j=![];while(Date[a1(0x25d)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k===a1(0x1fe)){j=!![],this.#busy('Generating\x20on\x20the\x20server…',a1(0x23a));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(a1(0x28d))};if(k===a1(0x252))return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':a1(0x228)};}#say(c,d){const a2=s;if(!this[a2(0x20e)])return;this[a2(0x20e)]['textContent']=c,this['_status']['classList']['toggle'](a2(0x255),!!d);}async #generate(c=s(0x297),d='download'){const a3=s,f=[a3(0x1f8),a3(0x225)]['map'](i=>this['_getDomElement'](i))['filter'](Boolean);f['forEach'](i=>i[a3(0x21f)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[a3(0x250)]??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say(a3(0x294));return;}h['format']=g[a3(0x259)],h[a3(0x20c)]=g['range'];if(this.#missing[a3(0x24c)]){const j=this.#missing['slice'](0x0,0x3)['map'](k=>k['id'])[a3(0x1f7)](',\x20');throw new Error(a3(0x28e)+j+(this.#missing['length']>0x3?'\x20(+'+(this.#missing[a3(0x24c)]-0x3)+a3(0x1fd):''));}this.#say('Generating…'),this.#busy(g['deliver']==='file'?'Generating\x20on\x20the\x20server…':a3(0x29e),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler['generateReport'](g[a3(0x238)],{'project':g['project'],'format':g[a3(0x259)],'range':g[a3(0x20c)],'deliver':g['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement']['dataset']['webuiTheme']||undefined});if(i[a3(0x2a3)]){const k=await this.#awaitServerRun(g['name'],g[a3(0x233)]);if(!k['ok'])throw new Error(k[a3(0x252)]||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k['file']??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k['file']??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i['pages']??null};const l=i[a3(0x215)]?.[a3(0x24c)]?a3(0x24f)+i['placeholders']['length']+a3(0x208):'';this.#say(a3(0x260)+(i[a3(0x24a)]??'')+l);}}catch(m){h[a3(0x252)]=m?.[a3(0x291)]??String(m),this.#say(a3(0x2a1)+h['error'],!![]);}finally{f[a3(0x21e)](n=>n[a3(0x21f)]=![]),this.#busy(null);}this.#emit(h['success']?'report-generated':'report-generate-failed',h);try{await this.#hook(a3(0x245),g,h);}catch(n){}}}if(!customElements['get'](s(0x247)))customElements['define'](s(0x247),ReportViewer);