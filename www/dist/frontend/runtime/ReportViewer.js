const s=b;function a(){const a2=['range','16JpJINT','objectType','max','getTime','warn','deliver','210mm','pages','clientWidth','viaTrigger','dataset','map','\x20→\x20','now','_rootShadow','__report-page-rule','right','67KMnHKr','btnGen','join','add','getDate','has','min','report-range-changed','toolbarVisible','Report\x20default\x20range','btnShow','trim','10hwcrKk','marginBottom','onReportLoad','date','kind','top','hide','\x20*\x20','reload','btnOut',':host\x20#paper{','\x20—\x20','Opening\x20','getFullYear','iobroker-webui-report-viewer','beginFetchTracking','error','_restoreCachedInititalValues','history','#fff','margin','getCurrentUser','filter','yesterday','name','_scriptObject','14697188wXonVe','_paper','url','data-tb-off','1329167PwmINV','width','height','scale(','disabled','print','value','disconnectedCallback','then','bar','reportRange','Generating\x20on\x20the\x20server…','disable','3347109aAvSXZ','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','Report\x20not\x20found:\x20','outstandingFetches','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','report-ready','_showBtn','No\x20value\x20from:\x20','rangeBoxes','isArray','297mm','report-generate-failed','getElementById',';\x20margin:\x20','btnPrint','theme','printMargins','onReportReady','toolbox','placeholders','custom','success','@top-center\x20{\x20content:\x20\x22\x22;\x20}','ies','today','12QrzTcH','hidden','push','2102muafMu','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','the\x20server\x20refused\x20the\x20run','_getDomElement','runtime','[data-tb=\x22','isFinite','getWebuiObject','The\x20server\x20is\x20rendering\x20the\x20report.','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','val','items','_zoomLabel','btnApply','report-before-generate','Cancelled.','getMonth','mm;\x20','download','Generating…','1507795ymeIvm','scroll','[report]\x20range\x20state\x20','month','html','file','waitedMs','display:block;width:100%;height:100%;','100024zPURYl','generateTimeoutMs','no\x20value\x20from:\x20','groups','_viewer','[data-tb]','currentProject','connection','querySelectorAll','parentElement','_parseAttributesToProperties','_bar','1291026AhWYvF','\x20more)','btnSave','globalStyle','function','style','load','project','reportName','lastStatus','length','lastError','_status','@top-left\x20{\x20content:\x20\x22\x22;\x20}','toLocaleTimeString','report','page','createElement','end','_toolbarWanted','textContent','forEach','objectsChanged','toLocaleString'];a=function(){return a2;};return a();}(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1c2))/0x1*(-parseInt(r(0x215))/0x2)+-parseInt(r(0x212))/0x3*(-parseInt(r(0x231))/0x4)+-parseInt(r(0x229))/0x5+-parseInt(r(0x23d))/0x6+-parseInt(r(0x1ec))/0x7*(parseInt(r(0x1b1))/0x8)+parseInt(r(0x1f9))/0x9*(-parseInt(r(0x1ce))/0xa)+parseInt(r(0x1e8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a24c));function b(c,d){c=c-0x1b1;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static [s(0x242)]=css`
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
    `;#zoom=0x1;#reportName;get[s(0x245)](){return this.#reportName;}set[s(0x245)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x1df)]();}['ready'](){const u=s,c=this.#reportName;this[u(0x23b)]();if(c&&!this.#reportName)this.#reportName=c;this['_bar']=this[u(0x218)](u(0x1f5)),this[u(0x1e9)]=this[u(0x218)]('paper'),this[u(0x235)]=this[u(0x218)]('viewer'),this['_status']=this['_getDomElement']('status'),this[u(0x221)]=this['_getDomElement']('zoomLabel'),this[u(0x235)][u(0x1b2)]=u(0x24c),this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.['addEventListener']('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(u(0x1d7),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x207),()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate(u(0x22d))),d(u(0x23f),()=>this.#generate('html',u(0x22e))),iobrokerHandler['canSaveReportsOnServer']?.()[u(0x1f4)](e=>{const v=u,f=this[v(0x218)](v(0x23f));if(f)f[v(0x213)]=!e;})['catch'](()=>{}),this[u(0x1ff)]=this[u(0x218)](u(0x1cc)),d('btnBar',()=>this['toolbarVisible']=![]),d(u(0x1cc),()=>this[u(0x1ca)]=!![]);if(this[u(0x250)]!==undefined)this[u(0x1ca)]=this['_toolbarWanted'];if(this.#reportName)this.#load();}set['toolbarVisible'](c){const w=s;this['_toolbarWanted']=!!c;if(this[w(0x23c)])this[w(0x23c)][w(0x213)]=!c;if(this[w(0x1ff)])this[w(0x1ff)]['hidden']=!!c;}get[s(0x1ca)](){const x=s;return this['_bar']?!this['_bar'][x(0x213)]:this[x(0x250)]??!![];}async #load(){const y=s;if(!this[y(0x235)])return;this.#say(''),this.#busy(y(0x1da)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x21c)](y(0x24c),this.#reportName);if(!c){this.#busy(null),this.#say(y(0x1fb)+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper'][y(0x242)][y(0x1ed)]=d[y(0x1ed)]??y(0x1b7),this[y(0x1e9)]['style'][y(0x1ee)]=d['height']??y(0x203),this[y(0x235)][y(0x242)]['cssText']=y(0x230),this.#applyTheme(d[y(0x208)]);const e=d[y(0x24d)]??{};this.#pageRule(e,d[y(0x209)]),await this.#applyToolbox(d[y(0x20b)]),iobrokerHandler[y(0x1dd)]();if(this[y(0x235)]['screenName']===this.#reportName)await this['_viewer'][y(0x1d6)]();else await this[y(0x235)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook(y(0x1d0),this['_viewer'],this['_viewer'][y(0x1bf)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer']['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook(y(0x20a),this['_viewer'],this['_viewer']['_rootShadow'],{'missing':g}),this.#emit(y(0x1fe),{'name':this.#reportName,'missing':g});if(g['length'])this.#say(y(0x200)+g['slice'](0x0,0x3)['map'](h=>h['id'])['join'](',\x20')+(g[y(0x247)]>0x3?'\x20…':''),!![]);}#missing=[];[s(0x232)]=0xea60;#hook(c,...d){const z=s,f=this['_viewer']?.[z(0x1e7)]?.[c];if(typeof f!==z(0x241))return undefined;try{return f(...d);}catch(g){return console[z(0x1de)]('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this[A(0x23a)]!==document['body'])return;const e=A(0x1c0);document[A(0x205)](e)?.['remove']();const f=document[A(0x24e)](A(0x242));f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?'\x20landscape':''),h=c[A(0x1e2)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x1d1)])k['push'](A(0x24a));if(!j['title'])k['push'](A(0x20f),'@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j[A(0x1ea)])k[A(0x214)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',A(0x216));if(!j['pageNumber'])k[A(0x214)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f[A(0x251)]='@page\x20{\x20size:\x20'+g+A(0x206)+i(h[A(0x1d3)])+'mm\x20'+i(h[A(0x1c1)])+'mm\x20'+i(h['bottom'])+'mm\x20'+i(h['left'])+A(0x226)+k[A(0x1c4)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head']['appendChild'](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x1b3)](0.1,c)),this['_paper']['style']['transform']=B(0x1ef)+this.#zoom+')',this['_paper']['style'][B(0x1cf)]='calc('+this['_paper']['style']['height']+B(0x1d5)+(this.#zoom-0x1)+')',this[B(0x221)]['textContent']=Math['round'](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this['_getDomElement'](C(0x22a))[C(0x1b9)]-0x24,d=this['_paper']['getBoundingClientRect']()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x1c8)](0x1,c/d));}#print(){const D=s;window[D(0x1f1)]();}async #applyToolbox(d){const E=s,f=d?.[E(0x220)]??{};let g=null;try{g=await iobrokerHandler[E(0x1e3)]();}catch(k){}const h=g?.[E(0x234)]??[],i=g?.['id']==='admin',j=this[E(0x23c)]??this['_getDomElement'](E(0x1f5));if(!j)return;for(const l of j['querySelectorAll'](E(0x236)))l['removeAttribute'](E(0x1eb));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o='hide';else{if(!i&&Array[E(0x202)](n['groups'])&&n['groups']['length']&&!n[E(0x234)]['some'](p=>h['includes'](p)))o=n['action']===E(0x1f8)?'disable':E(0x1d4);}if(!o)continue;for(const p of j[E(0x239)](E(0x21a)+m+'\x22]'))p['setAttribute'](E(0x1eb),o);}}#initRange(){const F=s,c=this['_getDomElement']('rangeKind'),d=this['_getDomElement']('rangeFrom'),e=this[F(0x218)]('rangeTo'),f=this['_getDomElement'](F(0x222));if(!c)return;const g=this[F(0x218)](F(0x201)),h=i=>{const G=F;if(g)g[G(0x213)]=!i;};c['addEventListener']('change',()=>{const H=F;if(c['value']===H(0x20d)){const i=iobrokerHandler[H(0x1f6)]??this.#namedRange(H(0x211));if(d&&!d[H(0x1f2)])d['value']=this.#toLocalInput(i['start']);if(e&&!e[H(0x1f2)])e[H(0x1f2)]=this.#toLocalInput(i[H(0x24f)]);h(!![]);return;}h(![]),this.#applyRange(c[H(0x1f2)]===H(0x24c)?null:this.#namedRange(c[H(0x1f2)]));}),f?.['addEventListener']('click',()=>{const I=F,i=d?.['value']?new Date(d['value'])['getTime']():NaN,j=e?.['value']?new Date(e['value'])['getTime']():NaN;if(!Number['isFinite'](i)||!Number[I(0x21b)](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say(I(0x1fd),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e['getFullYear']()+'-'+f(e['getMonth']()+0x1)+'-'+f(e['getDate']())+'T'+f(e['getHours']())+':'+f(e['getMinutes']());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[J(0x225)](),g[J(0x1c6)]())[J(0x1b4)](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d['getTime']()};case J(0x1e5):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0x1b4)]()-0x7*f,'end':d['getTime']()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d[J(0x1b4)]()};case J(0x22c):return{'start':new Date(d[J(0x1db)](),d[J(0x225)](),0x1)[J(0x1b4)](),'end':d[J(0x1b4)]()};case'year':return{'start':new Date(d[J(0x1db)](),0x0,0x1)[J(0x1b4)](),'end':d[J(0x1b4)]()};default:return{'start':d['getTime']()-f,'end':d[J(0x1b4)]()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?'Range:\x20'+new Date(c['start'])[K(0x254)]()+K(0x1bd)+new Date(c[K(0x24f)])[K(0x254)]():K(0x1cb)),this.#emit(K(0x1c9),{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')[L(0x1cd)](),e=(c?.['toState']??'')[L(0x1cd)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{if(k==null||k==='')return null;if(typeof k==='number')return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)['trim']()!=='')return l;const m=Date['parse'](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const M=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n['start']===l&&n['end']===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+M(0x1bd)+new Date(m)[M(0x254)]());const o=this[M(0x218)]('rangeKind');if(o)o[M(0x1f2)]=M(0x24c);const p=this['_getDomElement']('rangeBoxes');if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const N=L;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.[N(0x21f)]);}catch(o){}const m=(p,q)=>{const O=N;g[l]=f(q?.[O(0x21f)]),h(!![])['catch'](()=>{});};try{i[N(0x214)]([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console[N(0x1b5)](N(0x22b)+k,p);}};await j(d,'start'),await j(e,L(0x24f)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const P=s;super[P(0x1f3)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}['connectedCallback'](){super['connectedCallback']?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){const Q=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[Q(0x253)]['on'](async c=>{const R=Q;if(c?.['type']!=='report'||c[R(0x1e6)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject']('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this['_paper']&&(this['_paper']['style']['width']=g['width']??R(0x1b7),this[R(0x1e9)][R(0x242)][R(0x1ee)]=g[R(0x1ee)]??R(0x203)),this.#pageRule(g['page']??{},g[R(0x209)]),this.#applyTheme(g[R(0x208)]),await this.#applyToolbox(g[R(0x20b)]),this.#fit();});}#applyTheme(c){const S=s,d=this['shadowRoot'];if(!d)return;let e=d[S(0x205)]('__reportTheme');!e&&(e=document['createElement'](S(0x242)),e['id']='__reportTheme',d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[S(0x1cd)]()===S(0x219)?'':reportThemeDeclarations(f['name'],iobrokerHandler['config']?.[S(0x240)]);e['textContent']=S(0x1d8)+g+'background:'+(f['paper']?S(0x1e1):'var(--ui-page,\x20#fff)')+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const T=s,f=this['_getDomElement'](T(0x243));if(!f)return;if(c==null){f[T(0x213)]=!![];return;}f['hidden']=![];const g=this[T(0x218)]('loadWhat'),h=this[T(0x218)]('loadDetail');if(g)g[T(0x251)]=c;if(h&&e!==undefined)h[T(0x251)]=e;}#logReset(){const U=s,c=this['_getDomElement']('loadLog');if(c)c[U(0x251)]='';this.#logged=new Set();}#logged=new Set();#log(c){const V=s,d=this['_getDomElement']('loadLog');if(!d||this.#logged[V(0x1c7)](c))return;this.#logged[V(0x1c5)](c);const e=new Date()[V(0x24b)]();d['textContent']+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d['scrollHeight'];}#watchFetches(){const W=s,c=Date[W(0x1be)](),d=0xbb8,e=()=>{const X=W,g=iobrokerHandler[X(0x1fc)]();if(!g[X(0x247)]){this.#busy('Rendering…','');return;}const i=g['filter'](m=>m[X(0x1d2)]===X(0x1e0))['length'],j=g[X(0x247)]-i,k=[];if(j)k[X(0x214)](j+'\x20value'+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?X(0x210):'y'));const l=Math['round']((Date[X(0x1be)]()-c)/0x3e8);this.#busy('Loading\x20data…',k[X(0x1c4)]('\x20and\x20')+'\x20outstanding\x20—\x20'+l+'s');for(const m of g)if(m[X(0x22f)]>d)this.#log('still\x20waiting:\x20'+m['id']+(m['kind']===X(0x1e0)?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Z=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const Y=b;try{return(await iobrokerHandler[Y(0x238)]['getState'](f+'.'+l))?.[Y(0x21f)];}catch(m){return undefined;}},h=Date['now'](),i=await g('lastRun');let j=![];while(Date[Z(0x1be)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g(Z(0x246)),g('lastRun')]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(Z(0x1f7),Z(0x21d));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k==='error')return{'ok':![],'error':await g(Z(0x248))};}}return{'ok':![],'error':Z(0x1fa)};}#say(c,d){const a0=s;if(!this['_status'])return;this['_status']['textContent']=c,this[a0(0x249)]['classList']['toggle']('err',!!d);}async #generate(c='html',d=s(0x227)){const a1=s,f=[a1(0x1c3),a1(0x23f)][a1(0x1bc)](i=>this[a1(0x218)](i))[a1(0x1e4)](Boolean);f['forEach'](i=>i[a1(0x1f0)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler[a1(0x237)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit(a1(0x223),g,!![])['defaultPrevented']){this.#say(a1(0x224));return;}h['format']=g['format'],h[a1(0x255)]=g['range'];if(this.#missing[a1(0x247)]){const j=this.#missing['slice'](0x0,0x3)['map'](k=>k['id'])[a1(0x1c4)](',\x20');throw new Error(a1(0x233)+j+(this.#missing[a1(0x247)]>0x3?'\x20(+'+(this.#missing[a1(0x247)]-0x3)+a1(0x23e):''));}this.#say(a1(0x228)),this.#busy(g[a1(0x1b6)]===a1(0x22e)?a1(0x1f7):a1(0x228),a1(0x21e));const i=await iobrokerHandler['generateReport'](g[a1(0x1e6)],{'project':g['project'],'format':g['format'],'range':g['range'],'deliver':g['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][a1(0x1bb)]['webuiTheme']||undefined});if(i[a1(0x1ba)]){const k=await this.#awaitServerRun(g[a1(0x1e6)],g[a1(0x244)]);if(!k['ok'])throw new Error(k[a1(0x1de)]||a1(0x217));h={...h,'success':!![],'file':k[a1(0x22e)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k[a1(0x22e)]??''));}else{h={...h,'success':!![],'file':i[a1(0x22e)]??null,'pages':i[a1(0x1b8)]??null};const l=i[a1(0x20c)]?.['length']?a1(0x1d9)+i['placeholders'][a1(0x247)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say('Downloaded:\x20'+(i['file']??'')+l);}}catch(m){h[a1(0x1de)]=m?.['message']??String(m),this.#say('Not\x20generated\x20—\x20'+h[a1(0x1de)],!![]);}finally{f[a1(0x252)](n=>n[a1(0x1f0)]=![]),this.#busy(null);}this.#emit(h[a1(0x20e)]?'report-generated':a1(0x204),h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}if(!customElements['get'](s(0x1dc)))customElements['define']('iobroker-webui-report-viewer',ReportViewer);