const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x12b))/0x1+parseInt(r(0x137))/0x2+-parseInt(r(0x103))/0x3+-parseInt(r(0xea))/0x4+-parseInt(r(0xa0))/0x5*(parseInt(r(0x13d))/0x6)+parseInt(r(0xc1))/0x7+-parseInt(r(0xf4))/0x8*(-parseInt(r(0xe0))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x77b91));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const a5=['_rootShadow','report-ready','_showBtn','hidden','\x20more)','message','get','no\x20value\x20from:\x20','@page\x20{\x20size:\x20','_toolbarWanted','define','__reportTheme','load','bar','appendChild','\x20(+','Cancelled\x20by\x20the\x20report\x20script.','_scriptObject','marginBottom','reportName','getTime','head','loadLog','reportRange','getHours','type','getElementById','\x20landscape','date','map','@top-center\x20{\x20content:\x20\x22\x22;\x20}','getFullYear','btnShow','696382vrElrF','_getDomElement','catch','trim','range','report\x20','#fff','display:block;width:100%;height:100%;','addEventListener','Pick\x20both\x20dates.','Opening\x20','report','462172IYIjpT','toState','whenDataReady','disabled','config','_restoreCachedInititalValues','186fvIAdH','_paper','width','round','history','project','lastError','click','file','filter','canSaveReportsOnServer','rangeKind','_zoomLabel','dataset','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','afterGenerate','slice','viaTrigger','right','deliver','btnBar','subscribeState','rangeTo','dispatchEvent','printMargins','push','length','btnPrint','cssText','warn','Building\x20the\x20page…','58605oJLgFp','Report\x20default\x20range','start','getDate','data','lastRun','var(--ui-page,\x20#fff)','body','getMonth','settings','viewer','err','querySelectorAll','print','top','_bar','currentProject','includes','has','end','pages','globalStyle','name','running','isArray','margin','namespace','mm\x20','waitedMs','scale(','calc(','connectedCallback','style','5373683GgDNYU','pageNumber','height','html','number','min','val','@top-right\x20{\x20content:\x20\x22\x22;\x20}','max','generateReport','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','setScreenNameAndLoad','the\x20server\x20refused\x20the\x20run','action','still\x20waiting:\x20','hide','today','No\x20value\x20from:\x20','_status','Generating…','lastFile','toolbox','btnOut','error','createElement','readonly','isFinite','getState','[report]\x20range\x20state\x20','Range\x20from\x20states:\x20','setReportRange','17829801bQcdhJ','whenScreenReady','loadDetail','ies','format','disable','now','textContent','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','rangeFrom','3568364EvJewd','join','parentElement','rangeBoxes','210mm','ready','admin','Cancelled.','yesterday','[data-tb=\x22','8ZXqssH','groups','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','btnSave','bottom','Generating\x20on\x20the\x20server…','shadowRoot','template','toolbarVisible','objectsChanged','then','\x20→\x20','placeholders','297mm','_viewer','1612905nmopbf','\x20threw',';\x20margin:\x20','screenName','toLocaleString','\x20outstanding\x20—\x20','value'];a=function(){return a5;};return a();}import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0xda)]=!![];static ['style']=css`
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
    `;static [s(0xfb)]=html`
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
    `;#zoom=0x1;#reportName;get[s(0x11d)](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x13c)]();}[s(0xef)](){const u=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this['_bar']=this[u(0x12c)](u(0x117)),this['_paper']=this[u(0x12c)]('paper'),this[u(0x102)]=this[u(0x12c)](u(0xaa)),this['_status']=this['_getDomElement']('status'),this[u(0x8d)]=this['_getDomElement']('zoomLabel'),this[u(0x102)]['objectType']='report',this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.[u(0x133)](u(0x144),f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(u(0xd7),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x9c),()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate('html')),d(u(0xf7),()=>this.#generate(u(0xc4),'file')),iobrokerHandler[u(0x8b)]?.()[u(0xfe)](e=>{const v=u,f=this['_getDomElement'](v(0xf7));if(f)f['hidden']=!e;})['catch'](()=>{}),this['_showBtn']=this['_getDomElement'](u(0x12a)),d(u(0x95),()=>this['toolbarVisible']=![]),d(u(0x12a),()=>this['toolbarVisible']=!![]);if(this['_toolbarWanted']!==undefined)this[u(0xfc)]=this['_toolbarWanted'];if(this.#reportName)this.#load();}set[s(0xfc)](c){const w=s;this[w(0x113)]=!!c;if(this['_bar'])this['_bar'][w(0x10d)]=!c;if(this[w(0x10c)])this['_showBtn']['hidden']=!!c;}get[s(0xfc)](){const x=s;return this['_bar']?!this['_bar']['hidden']:this[x(0x113)]??!![];}async #load(){const y=s;if(!this[y(0x102)])return;this.#say(''),this.#busy(y(0x135)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject'](y(0x136),this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c[y(0xa9)]??{};this['_paper']['style'][y(0x13f)]=d[y(0x13f)]??y(0xee),this['_paper'][y(0xc0)][y(0xc3)]=d['height']??y(0x101),this[y(0x102)][y(0xc0)][y(0x9d)]=y(0x132),this.#applyTheme(d['theme']);const e=d['page']??{};this.#pageRule(e,d[y(0x99)]),await this.#applyToolbox(d['toolbox']),iobrokerHandler['beginFetchTracking']();if(this[y(0x102)][y(0x106)]===this.#reportName)await this[y(0x102)]['reload']();else await this['_viewer'][y(0xcc)](this.#reportName);this.#fit(),this.#hook('onReportLoad',this[y(0x102)],this['_viewer'][y(0x10a)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d[y(0xa4)]),this.#busy(y(0x9f),''),await this['_viewer'][y(0xe1)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[y(0x102)][y(0x139)]();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this['_viewer'],this['_viewer'][y(0x10a)],{'missing':g}),this.#emit(y(0x10b),{'name':this.#reportName,'missing':g});if(g[y(0x9b)])this.#say(y(0xd2)+g[y(0x91)](0x0,0x3)[y(0x127)](h=>h['id'])['join'](',\x20')+(g['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this[z(0x102)]?.[z(0x11b)]?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console[z(0xd8)](z(0x130)+this.#reportName+':\x20'+c+z(0x104),g),undefined;}}#emit(c,d,e=![]){const A=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)[A(0x98)](f),f;}#pageRule(c,d){const B=s;if(this[B(0xec)]!==document[B(0xa7)])return;const e='__report-page-rule';document['getElementById'](e)?.['remove']();const f=document['createElement'](B(0xc0));f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?B(0x125):''),h=c[B(0xb9)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[B(0x126)])k[B(0x9a)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k['push'](B(0x128),B(0xc8));if(!j['url'])k['push'](B(0xf6),B(0x8f));if(!j[B(0xc2)])k['push'](B(0xe8));f['textContent']=B(0x112)+g+B(0x105)+i(h[B(0xae)])+'mm\x20'+i(h[B(0x93)])+'mm\x20'+i(h[B(0xf8)])+B(0xbb)+i(h['left'])+'mm;\x20'+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[B(0x11f)][B(0x118)](f);}#setZoom(c){const C=s;this.#zoom=Math[C(0xc6)](0x4,Math[C(0xc9)](0.1,c)),this['_paper']['style']['transform']=C(0xbd)+this.#zoom+')',this['_paper'][C(0xc0)][C(0x11c)]=C(0xbe)+this['_paper']['style']['height']+'\x20*\x20'+(this.#zoom-0x1)+')',this['_zoomLabel'][C(0xe7)]=Math['round'](this.#zoom*0x64)+'%';}#fit(){const D=s,c=this['_getDomElement']('scroll')['clientWidth']-0x24,d=this['_paper']['getBoundingClientRect']()[D(0x13f)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){const E=s;window[E(0xad)]();}async #applyToolbox(d){const F=s,f=d?.['items']??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[F(0xf5)]??[],i=g?.['id']===F(0xf0),j=this[F(0xaf)]??this[F(0x12c)](F(0x117));if(!j)return;for(const l of j[F(0xac)]('[data-tb]'))l['removeAttribute']('data-tb-off');for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o=F(0xd0);else{if(!i&&Array[F(0xb8)](n[F(0xf5)])&&n[F(0xf5)]['length']&&!n['groups']['some'](p=>h[F(0xb1)](p)))o=n[F(0xce)]===F(0xe5)?'disable':F(0xd0);}if(!o)continue;for(const p of j[F(0xac)](F(0xf3)+m+'\x22]'))p['setAttribute']('data-tb-off',o);}}#initRange(){const G=s,c=this[G(0x12c)]('rangeKind'),d=this[G(0x12c)](G(0xe9)),e=this[G(0x12c)](G(0x97)),f=this['_getDomElement']('btnApply');if(!c)return;const g=this[G(0x12c)](G(0xed)),h=i=>{const H=G;if(g)g[H(0x10d)]=!i;};c[G(0x133)]('change',()=>{const I=G;if(c[I(0x109)]==='custom'){const i=iobrokerHandler[I(0x121)]??this.#namedRange(I(0xd1));if(d&&!d[I(0x109)])d[I(0x109)]=this.#toLocalInput(i['start']);if(e&&!e[I(0x109)])e[I(0x109)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c[I(0x109)]==='report'?null:this.#namedRange(c[I(0x109)]));}),f?.['addEventListener'](G(0x144),()=>{const J=G,i=d?.[J(0x109)]?new Date(d[J(0x109)])['getTime']():NaN,j=e?.['value']?new Date(e[J(0x109)])['getTime']():NaN;if(!Number[J(0xdb)](i)||!Number[J(0xdb)](j)){this.#say(J(0x134),!![]);return;}if(i>=j){this.#say('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const K=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e['getFullYear']()+'-'+f(e['getMonth']()+0x1)+'-'+f(e[K(0xa3)]())+'T'+f(e[K(0x122)]())+':'+f(e['getMinutes']());}#namedRange(c){const L=s,d=new Date(),e=g=>new Date(g[L(0x129)](),g['getMonth'](),g[L(0xa3)]())['getTime'](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d[L(0x11e)]()};case L(0xf2):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[L(0x11e)]()-0x7*f,'end':d[L(0x11e)]()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d[L(0x11e)]()};case'month':return{'start':new Date(d['getFullYear'](),d[L(0xa8)](),0x1)[L(0x11e)](),'end':d[L(0x11e)]()};case'year':return{'start':new Date(d['getFullYear'](),0x0,0x1)[L(0x11e)](),'end':d[L(0x11e)]()};default:return{'start':d[L(0x11e)]()-f,'end':d['getTime']()};}}async #applyRange(c){const M=s;iobrokerHandler[M(0xdf)](c),this.#say(c?'Range:\x20'+new Date(c[M(0xa2)])['toLocaleString']()+M(0xff)+new Date(c['end'])[M(0x107)]():M(0xa1)),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const N=s,d=(c?.['fromState']??'')[N(0x12e)](),e=(c?.[N(0x138)]??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const O=N;if(k==null||k==='')return null;if(typeof k===O(0xc5))return k;const l=Number(k);if(Number[O(0xdb)](l)&&String(k)[O(0x12e)]()!=='')return l;const m=Date['parse'](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const P=N,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler[P(0x121)];if(n&&n[P(0xa2)]===l&&n[P(0xb3)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(P(0xde)+new Date(l)[P(0x107)]()+P(0xff)+new Date(m)['toLocaleString']());const o=this['_getDomElement'](P(0x8c));if(o)o[P(0x109)]='report';const p=this[P(0x12c)]('rangeBoxes');if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const Q=N;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.[Q(0xc7)]);}catch(o){}const m=(p,q)=>{const R=Q;g[l]=f(q?.[R(0xc7)]),h(!![])[R(0x12d)](()=>{});};try{i[Q(0x9a)]([k,m,await iobrokerHandler[Q(0x96)](k,m)]);}catch(p){console[Q(0x9e)](Q(0xdd)+k,p);}};await j(d,N(0xa2)),await j(e,N(0xb3)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){super['disconnectedCallback']?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}['connectedCallback'](){const S=s;super[S(0xbf)]?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){const T=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[T(0xfd)]['on'](async c=>{const U=T;if(c?.[U(0x123)]!==U(0x136)||c[U(0xb6)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](U(0x136),this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this[U(0x13e)]&&(this['_paper']['style'][U(0x13f)]=g[U(0x13f)]??U(0xee),this['_paper'][U(0xc0)]['height']=g['height']??U(0x101)),this.#pageRule(g['page']??{},g[U(0x99)]),this.#applyTheme(g['theme']),await this.#applyToolbox(g[U(0xd6)]),this.#fit();});}#applyTheme(c){const V=s,d=this[V(0xfa)];if(!d)return;let e=d[V(0x124)]('__reportTheme');!e&&(e=document[V(0xd9)]('style'),e['id']=V(0x115),d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[V(0x12e)]()==='runtime'?'':reportThemeDeclarations(f[V(0xb6)],iobrokerHandler[V(0x13b)]?.[V(0xb5)]);e['textContent']=':host\x20#paper{'+g+'background:'+(f['paper']?V(0x131):V(0xa6))+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const W=s,f=this[W(0x12c)](W(0x116));if(!f)return;if(c==null){f['hidden']=!![];return;}f[W(0x10d)]=![];const g=this['_getDomElement']('loadWhat'),h=this['_getDomElement'](W(0xe2));if(g)g['textContent']=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const X=s,c=this[X(0x12c)](X(0x120));if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const Y=s,d=this[Y(0x12c)](Y(0x120));if(!d||this.#logged[Y(0xb2)](c))return;this.#logged['add'](c);const e=new Date()['toLocaleTimeString']();d[Y(0xe7)]+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d['scrollHeight'];}#watchFetches(){const Z=s,c=Date[Z(0xe6)](),d=0xbb8,e=()=>{const a0=Z,g=iobrokerHandler['outstandingFetches']();if(!g[a0(0x9b)]){this.#busy('Rendering…','');return;}const i=g['filter'](m=>m['kind']==='history')[a0(0x9b)],j=g['length']-i,k=[];if(j)k['push'](j+'\x20value'+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?a0(0xe3):'y'));const l=Math[a0(0x140)]((Date[a0(0xe6)]()-c)/0x3e8);this.#busy('Loading\x20data…',k[a0(0xeb)]('\x20and\x20')+a0(0x108)+l+'s');for(const m of g)if(m[a0(0xbc)]>d)this.#log(a0(0xcf)+m['id']+(m['kind']===a0(0x141)?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a1=s,f=iobrokerHandler[a1(0xba)]+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const a2=a1;try{return(await iobrokerHandler['connection'][a2(0xdc)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[a1(0xe6)](),i=await g('lastRun');let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g(a1(0xa5))]),m=l!=null&&l!==i;if(k===a1(0xb7)){j=!![],this.#busy(a1(0xf9),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(a1(0xd5))};if(k===a1(0xd8))return{'ok':![],'error':await g(a1(0x143))};}}return{'ok':![],'error':a1(0xcb)};}#say(c,d){const a3=s;if(!this['_status'])return;this[a3(0xd3)]['textContent']=c,this[a3(0xd3)]['classList']['toggle'](a3(0xab),!!d);}async #generate(c=s(0xc4),d='download'){const a4=s,f=['btnGen',a4(0xf7)]['map'](i=>this[a4(0x12c)](i))[a4(0x8a)](Boolean);f['forEach'](i=>i[a4(0x13a)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler[a4(0xb0)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say(a4(0x11a));return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say(a4(0xf1));return;}h['format']=g[a4(0xe4)],h[a4(0x12f)]=g['range'];if(this.#missing[a4(0x9b)]){const j=this.#missing[a4(0x91)](0x0,0x3)[a4(0x127)](k=>k['id'])[a4(0xeb)](',\x20');throw new Error(a4(0x111)+j+(this.#missing[a4(0x9b)]>0x3?a4(0x119)+(this.#missing[a4(0x9b)]-0x3)+a4(0x10e):''));}this.#say('Generating…'),this.#busy(g[a4(0x94)]===a4(0x89)?'Generating\x20on\x20the\x20server…':a4(0xd4),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a4(0xca)](g[a4(0xb6)],{'project':g[a4(0x142)],'format':g['format'],'range':g[a4(0x12f)],'deliver':g['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][a4(0x8e)]['webuiTheme']||undefined});if(i[a4(0x92)]){const k=await this.#awaitServerRun(g[a4(0xb6)],g['project']);if(!k['ok'])throw new Error(k[a4(0xd8)]||a4(0xcd));h={...h,'success':!![],'file':k['file']??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k[a4(0x89)]??''));}else{h={...h,'success':!![],'file':i[a4(0x89)]??null,'pages':i[a4(0xb4)]??null};const l=i['placeholders']?.['length']?'\x20—\x20'+i[a4(0x100)][a4(0x9b)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say('Downloaded:\x20'+(i['file']??'')+l);}}catch(m){h['error']=m?.[a4(0x10f)]??String(m),this.#say('Not\x20generated\x20—\x20'+h[a4(0xd8)],!![]);}finally{f['forEach'](n=>n[a4(0x13a)]=![]),this.#busy(null);}this.#emit(h['success']?'report-generated':'report-generate-failed',h);try{await this.#hook(a4(0x90),g,h);}catch(n){}}}function b(c,d){c=c-0x89;const e=a();let f=e[c];return f;}if(!customElements[s(0x110)]('iobroker-webui-report-viewer'))customElements[s(0x114)]('iobroker-webui-report-viewer',ReportViewer);