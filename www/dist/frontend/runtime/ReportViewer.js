const s=b;function b(c,d){c=c-0x1a6;const e=a();let f=e[c];return f;}(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1b4))/0x1*(parseInt(r(0x248))/0x2)+parseInt(r(0x1e6))/0x3*(parseInt(r(0x214))/0x4)+parseInt(r(0x1c5))/0x5+-parseInt(r(0x1b6))/0x6+parseInt(r(0x237))/0x7*(-parseInt(r(0x24a))/0x8)+parseInt(r(0x1fa))/0x9+-parseInt(r(0x238))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x821d7));function a(){const a5=['lastError','screenName','_paper','Generating…','now','objectsChanged','btnSave','btnPrint','padStart',':host\x20#paper{','1372581ydcZkY','6095950qNouoh','bar','range','beginFetchTracking','background:','hidden','left','cssText','pageNumber','report-generated','var(--ui-page,\x20#fff)','\x20landscape','@top-center\x20{\x20content:\x20\x22\x22;\x20}','data-tb-off',';color:var(--ui-text,\x20#1d2733);}','map','2fejRwI','_rootShadow','40CBIhQb','[data-tb]','toggle','isArray','getHours','disconnectedCallback','function','mm;\x20','push','status','kind','beforeGenerate','error','getState','namespace','558291swDhfE','classList','428484sicWKC','file','max','page','length','history','define','config','toolbox','join','data','margin','getTime','print','waitedMs','3658625XHbGxs','Cancelled.','bottom','isFinite','btnBar','rangeKind','lastFile','Generating\x20on\x20the\x20server…','disabled','report','report-before-generate','_bar','parentElement','val','catch','html','warn','btnShow','afterGenerate','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','toolbarVisible','calc(','getCurrentUser','outstandingFetches','mm\x20','endFetchTracking','\x20→\x20','scrollTop','\x20outstanding\x20—\x20','Range:\x20','min','reportStateBase','reportName','6RPopDM','message','documentElement','lastRun','change','transform','toState','deliver','toLocaleString','trim','addEventListener','remove','loadLog','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','format','url','ready','210mm','getBoundingClientRect','Rendering…','1162233QnkxkU','getFullYear','iobroker-webui-report-viewer','loadWhat','\x20control(s)\x20shown\x20as\x20placeholders','Report\x20not\x20found:\x20','#fff','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','has','end','forEach','\x20history\x20quer','_getDomElement','_status','printMargins','Pick\x20both\x20dates.','style','appendChild','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','generateTimeoutMs','viewer','unsubscribeState','connection','_toolbarWanted','setAttribute','shadowRoot','1550444XsVUzH','btnOut','start','globalStyle','_showBtn','textContent','width','still\x20waiting:\x20','297mm','setReportRange','name','value','@top-right\x20{\x20content:\x20\x22\x22;\x20}','load','_viewer','slice','Range\x20from\x20states:\x20','btnGen','paper','round','hide','getWebuiObject','settings','height','filter'];a=function(){return a5;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static ['style']=css`
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
    `;#zoom=0x1;#reportName;get[s(0x1e5)](){return this.#reportName;}set[s(0x1e5)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}[s(0x1f6)](){const t=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[t(0x1d0)]=this[t(0x206)]('bar'),this[t(0x22f)]=this[t(0x206)](t(0x226)),this[t(0x222)]=this[t(0x206)](t(0x20e)),this[t(0x207)]=this[t(0x206)](t(0x1ae)),this['_zoomLabel']=this['_getDomElement']('zoomLabel'),this['_viewer']['objectType']=t(0x1ce),this.#watchReport();const d=(e,f)=>this[t(0x206)](e)?.[t(0x1f0)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(t(0x215),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(t(0x234),()=>this.#print()),this.#initRange(),d(t(0x225),()=>this.#generate(t(0x1d4))),d('btnSave',()=>this.#generate(t(0x1d4),t(0x1b7))),iobrokerHandler['canSaveReportsOnServer']?.()['then'](e=>{const u=t,f=this[u(0x206)](u(0x233));if(f)f['hidden']=!e;})[t(0x1d3)](()=>{}),this[t(0x218)]=this['_getDomElement']('btnShow'),d(t(0x1c9),()=>this[t(0x1d9)]=![]),d(t(0x1d6),()=>this[t(0x1d9)]=!![]);if(this[t(0x211)]!==undefined)this[t(0x1d9)]=this[t(0x211)];if(this.#reportName)this.#load();}set[s(0x1d9)](c){const v=s;this['_toolbarWanted']=!!c;if(this[v(0x1d0)])this['_bar'][v(0x23d)]=!c;if(this['_showBtn'])this[v(0x218)][v(0x23d)]=!!c;}get[s(0x1d9)](){const w=s;return this[w(0x1d0)]?!this[w(0x1d0)]['hidden']:this['_toolbarWanted']??!![];}async #load(){const x=s;if(!this[x(0x222)])return;this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[x(0x229)](x(0x1ce),this.#reportName);if(!c){this.#busy(null),this.#say(x(0x1ff)+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper']['style']['width']=d[x(0x21a)]??x(0x1f7),this['_paper']['style']['height']=d[x(0x22b)]??x(0x21c),this['_viewer']['style'][x(0x23f)]='display:block;width:100%;height:100%;',this.#applyTheme(d['theme']);const e=d['page']??{};this.#pageRule(e,d['printMargins']),await this.#applyToolbox(d['toolbox']),iobrokerHandler[x(0x23b)]();if(this['_viewer'][x(0x22e)]===this.#reportName)await this[x(0x222)]['reload']();else await this[x(0x222)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this['_viewer'],this[x(0x222)][x(0x249)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d[x(0x1c0)]),this.#busy('Building\x20the\x20page…',''),await this[x(0x222)]['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer']['whenDataReady']();f(),iobrokerHandler[x(0x1de)](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this['_viewer'],this['_viewer'][x(0x249)],{'missing':g}),this.#emit('report-ready',{'name':this.#reportName,'missing':g});if(g[x(0x1ba)])this.#say('No\x20value\x20from:\x20'+g[x(0x223)](0x0,0x3)['map'](h=>h['id'])['join'](',\x20')+(g['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const y=s,f=this[y(0x222)]?.['_scriptObject']?.[c];if(typeof f!==y(0x1ab))return undefined;try{return f(...d);}catch(g){return console[y(0x1b1)]('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const z=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[z(0x222)]??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this[A(0x1d1)]!==document['body'])return;const e='__report-page-rule';document['getElementById'](e)?.[A(0x1f1)]();const f=document['createElement']('style');f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?A(0x243):''),h=c[A(0x1c1)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j['date'])k[A(0x1ad)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k[A(0x1ad)](A(0x244),A(0x220));if(!j[A(0x1f5)])k['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',A(0x1d8));if(!j[A(0x240)])k['push'](A(0x1f3));f['textContent']='@page\x20{\x20size:\x20'+g+';\x20margin:\x20'+i(h['top'])+'mm\x20'+i(h['right'])+A(0x1dd)+i(h[A(0x1c7)])+A(0x1dd)+i(h[A(0x23e)])+A(0x1ac)+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][A(0x20b)](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x1b8)](0.1,c)),this[B(0x22f)]['style'][B(0x1eb)]='scale('+this.#zoom+')',this['_paper'][B(0x20a)]['marginBottom']=B(0x1da)+this[B(0x22f)]['style']['height']+'\x20*\x20'+(this.#zoom-0x1)+')',this['_zoomLabel'][B(0x219)]=Math[B(0x227)](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement']('scroll')['clientWidth']-0x24,d=this[C(0x22f)][C(0x1f8)]()[C(0x21a)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x1e3)](0x1,c/d));}#print(){const D=s;window[D(0x1c3)]();}async #applyToolbox(d){const E=s,f=d?.['items']??{};let g=null;try{g=await iobrokerHandler[E(0x1db)]();}catch(k){}const h=g?.['groups']??[],i=g?.['id']==='admin',j=this['_bar']??this['_getDomElement'](E(0x239));if(!j)return;for(const l of j['querySelectorAll'](E(0x1a6)))l['removeAttribute'](E(0x245));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o=E(0x228);else{if(!i&&Array[E(0x1a8)](n['groups'])&&n['groups']['length']&&!n['groups']['some'](p=>h['includes'](p)))o=n['action']==='disable'?'disable':'hide';}if(!o)continue;for(const p of j['querySelectorAll']('[data-tb=\x22'+m+'\x22]'))p[E(0x212)](E(0x245),o);}}#initRange(){const F=s,c=this[F(0x206)]('rangeKind'),d=this['_getDomElement']('rangeFrom'),e=this['_getDomElement']('rangeTo'),f=this[F(0x206)]('btnApply');if(!c)return;const g=this['_getDomElement']('rangeBoxes'),h=i=>{const G=F;if(g)g[G(0x23d)]=!i;};c['addEventListener'](F(0x1ea),()=>{const H=F;if(c['value']==='custom'){const i=iobrokerHandler['reportRange']??this.#namedRange('today');if(d&&!d[H(0x21f)])d['value']=this.#toLocalInput(i[H(0x216)]);if(e&&!e['value'])e[H(0x21f)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c[H(0x21f)]===H(0x1ce)?null:this.#namedRange(c['value']));}),f?.[F(0x1f0)]('click',()=>{const I=F,i=d?.['value']?new Date(d[I(0x21f)])['getTime']():NaN,j=e?.[I(0x21f)]?new Date(e[I(0x21f)])[I(0x1c2)]():NaN;if(!Number['isFinite'](i)||!Number[I(0x1c8)](j)){this.#say(I(0x209),!![]);return;}if(i>=j){this.#say(I(0x201),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const J=s,e=new Date(c),f=g=>String(g)[J(0x235)](0x2,'0');return e[J(0x1fb)]()+'-'+f(e['getMonth']()+0x1)+'-'+f(e['getDate']())+'T'+f(e[J(0x1a9)]())+':'+f(e['getMinutes']());}#namedRange(c){const K=s,d=new Date(),e=g=>new Date(g[K(0x1fb)](),g['getMonth'](),g['getDate']())[K(0x1c2)](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d[K(0x1c2)]()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d['getTime']()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d[K(0x1c2)]()};case'month':return{'start':new Date(d[K(0x1fb)](),d['getMonth'](),0x1)['getTime'](),'end':d[K(0x1c2)]()};case'year':return{'start':new Date(d[K(0x1fb)](),0x0,0x1)['getTime'](),'end':d['getTime']()};default:return{'start':d[K(0x1c2)]()-f,'end':d['getTime']()};}}async #applyRange(c){const L=s;iobrokerHandler['setReportRange'](c),this.#say(c?L(0x1e2)+new Date(c[L(0x216)])['toLocaleString']()+'\x20→\x20'+new Date(c[L(0x203)])['toLocaleString']():'Report\x20default\x20range'),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const M=s,d=(c?.['fromState']??'')[M(0x1ef)](),e=(c?.[M(0x1ec)]??'')[M(0x1ef)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const N=M;if(k==null||k==='')return null;if(typeof k==='number')return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)[N(0x1ef)]()!=='')return l;const m=Date['parse'](String(k));return Number[N(0x1c8)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const O=M,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(O(0x20c),!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n['start']===l&&n['end']===m)return;iobrokerHandler[O(0x21d)]({'start':l,'end':m}),this.#say(O(0x224)+new Date(l)[O(0x1ee)]()+O(0x1df)+new Date(m)['toLocaleString']());const o=this['_getDomElement'](O(0x1ca));if(o)o[O(0x21f)]=O(0x1ce);const p=this[O(0x206)]('rangeBoxes');if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const P=M;try{const n=await iobrokerHandler[P(0x1b2)](k);g[l]=f(n?.[P(0x1d2)]);}catch(o){}const m=(p,q)=>{g[l]=f(q?.['val']),h(!![])['catch'](()=>{});};try{i['push']([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console[P(0x1d5)]('[report]\x20range\x20state\x20'+k,p);}};await j(d,M(0x216)),await j(e,M(0x203)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const Q=M;for(const [k,l]of i){try{iobrokerHandler[Q(0x20f)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0x1aa)](){const R=s;super[R(0x1aa)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}['connectedCallback'](){const S=s;super['connectedCallback']?.();if(this[S(0x1d0)])this.#watchReport();}#reportChangedSub=null;#watchReport(){const T=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[T(0x232)]['on'](async c=>{const U=T;if(c?.['type']!=='report'||c[U(0x21e)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject']('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f[U(0x22a)]??{};this[U(0x22f)]&&(this[U(0x22f)]['style'][U(0x21a)]=g[U(0x21a)]??'210mm',this['_paper'][U(0x20a)][U(0x22b)]=g[U(0x22b)]??U(0x21c)),this.#pageRule(g[U(0x1b9)]??{},g[U(0x208)]),this.#applyTheme(g['theme']),await this.#applyToolbox(g[U(0x1be)]),this.#fit();});}#applyTheme(c){const V=s,d=this[V(0x213)];if(!d)return;let e=d['getElementById']('__reportTheme');!e&&(e=document['createElement'](V(0x20a)),e['id']='__reportTheme',d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[V(0x1ef)]()==='runtime'?'':reportThemeDeclarations(f['name'],iobrokerHandler[V(0x1bd)]?.[V(0x217)]);e['textContent']=V(0x236)+g+V(0x23c)+(f[V(0x226)]?V(0x200):V(0x242))+V(0x246);}#busy(c,e){const W=s,f=this['_getDomElement'](W(0x221));if(!f)return;if(c==null){f[W(0x23d)]=!![];return;}f['hidden']=![];const g=this[W(0x206)](W(0x1fd)),h=this[W(0x206)]('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const X=s,c=this[X(0x206)](X(0x1f2));if(c)c[X(0x219)]='';this.#logged=new Set();}#logged=new Set();#log(c){const Y=s,d=this[Y(0x206)]('loadLog');if(!d||this.#logged[Y(0x202)](c))return;this.#logged['add'](c);const e=new Date()['toLocaleTimeString']();d[Y(0x219)]+=e+'\x20\x20'+c+'\x0a',d[Y(0x1e0)]=d['scrollHeight'];}#watchFetches(){const Z=s,c=Date[Z(0x231)](),d=0xbb8,e=()=>{const a0=Z,g=iobrokerHandler[a0(0x1dc)]();if(!g['length']){this.#busy(a0(0x1f9),'');return;}const i=g[a0(0x22c)](m=>m[a0(0x1af)]===a0(0x1bb))['length'],j=g['length']-i,k=[];if(j)k['push'](j+'\x20value'+(j>0x1?'s':''));if(i)k[a0(0x1ad)](i+a0(0x205)+(i>0x1?'ies':'y'));const l=Math['round']((Date[a0(0x231)]()-c)/0x3e8);this.#busy('Loading\x20data…',k[a0(0x1bf)]('\x20and\x20')+a0(0x1e1)+l+'s');for(const m of g)if(m[a0(0x1c4)]>d)this.#log(a0(0x21b)+m['id']+(m[a0(0x1af)]===a0(0x1bb)?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a1=s,f=iobrokerHandler[a1(0x1b3)]+'.'+IobrokerHandler[a1(0x1e4)](d,c),g=async l=>{const a2=a1;try{return(await iobrokerHandler[a2(0x210)]['getState'](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[a1(0x231)](),i=await g('lastRun');let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g(a1(0x1e9))]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(a1(0x1cc),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(a1(0x1cb))};if(k==='error')return{'ok':![],'error':await g(a1(0x22d))};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const a3=s;if(!this['_status'])return;this[a3(0x207)][a3(0x219)]=c,this['_status'][a3(0x1b5)][a3(0x1a7)]('err',!!d);}async #generate(c='html',d='download'){const a4=s,f=[a4(0x225),'btnSave'][a4(0x247)](i=>this[a4(0x206)](i))[a4(0x22c)](Boolean);f[a4(0x204)](i=>i[a4(0x1cd)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a4(0x1b0),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit(a4(0x1cf),g,!![])['defaultPrevented']){this.#say(a4(0x1c6));return;}h['format']=g[a4(0x1f4)],h['range']=g[a4(0x23a)];if(this.#missing[a4(0x1ba)]){const j=this.#missing['slice'](0x0,0x3)['map'](k=>k['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing[a4(0x1ba)]>0x3?'\x20(+'+(this.#missing[a4(0x1ba)]-0x3)+'\x20more)':''));}this.#say(a4(0x230)),this.#busy(g['deliver']===a4(0x1b7)?'Generating\x20on\x20the\x20server…':'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler['generateReport'](g[a4(0x21e)],{'project':g['project'],'format':g[a4(0x1f4)],'range':g['range'],'deliver':g[a4(0x1ed)],'timeoutMs':this[a4(0x20d)],'theme':document[a4(0x1e8)]['dataset']['webuiTheme']||undefined});if(i['viaTrigger']){const k=await this.#awaitServerRun(g[a4(0x21e)],g['project']);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a4(0x1b7)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k[a4(0x1b7)]??''));}else{h={...h,'success':!![],'file':i[a4(0x1b7)]??null,'pages':i['pages']??null};const l=i['placeholders']?.[a4(0x1ba)]?'\x20—\x20'+i['placeholders'][a4(0x1ba)]+a4(0x1fe):'';this.#say('Downloaded:\x20'+(i[a4(0x1b7)]??'')+l);}}catch(m){h[a4(0x1b1)]=m?.[a4(0x1e7)]??String(m),this.#say('Not\x20generated\x20—\x20'+h[a4(0x1b1)],!![]);}finally{f['forEach'](n=>n[a4(0x1cd)]=![]),this.#busy(null);}this.#emit(h['success']?a4(0x241):'report-generate-failed',h);try{await this.#hook(a4(0x1d7),g,h);}catch(n){}}}if(!customElements['get'](s(0x1fc)))customElements[s(0x1bc)]('iobroker-webui-report-viewer',ReportViewer);