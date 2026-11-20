const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x129))/0x1*(-parseInt(r(0x171))/0x2)+parseInt(r(0x10e))/0x3*(-parseInt(r(0x193))/0x4)+parseInt(r(0x11c))/0x5+parseInt(r(0x173))/0x6*(-parseInt(r(0x174))/0x7)+-parseInt(r(0x1a2))/0x8*(parseInt(r(0x145))/0x9)+-parseInt(r(0x124))/0xa*(parseInt(r(0x1e1))/0xb)+parseInt(r(0x143))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6028b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';import{applyTablePaging}from'../common/TablePager.js';import{bt}from'../common/BuiltinTranslations.js';import{toolbarControls,attrOf}from'../common/ReportToolbarControls.js';function b(c,d){c=c-0x10d;const e=a();let f=e[c];return f;}import{getCustomControlName}from'./CustomControls.js';function a(){const a7=['the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','\x20→\x20','ready','_getDomElement','html','yesterday','report.generating','join','min','now','style','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','toolbox','report.cancelled','report.range','\x20—\x20','report.pickDates','167660NpkdRt','\x20threw','defaultPrevented','dataset','querySelectorAll','nodeType','kind','isFinite','addEventListener','generateReport','calc(','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','afterGenerate','var(--ui-page,\x20#fff)','setReportRange','2168Uhtjmh','mm\x20','show','_restoreCachedInititalValues','childNodes','bottom',':host\x20#paper{','theme','btnSave','@top-center\x20{\x20content:\x20\x22\x22;\x20}','Rendering…','Generating…','report.savedOn','btnIn','report.to','objectsChanged','then','pages','The\x20server\x20is\x20rendering\x20the\x20report.','trim','currentProject','report.notGenerated','report.cancelledScript','history','reportToolbar','__reportTheme','click','connection','aria','report.zoomOut','disabled','@top-right\x20{\x20content:\x20\x22\x22;\x20}','append','outstandingFetches','report.applyTitle','#fff','body','297mm','scrollTop','groups','btnPrint','getBoundingClientRect','report-ready','report.save','btnGen','_toolbarWanted','report.range.30d','readonly','deliver','report.apply','name','config','report-generate-failed','toLocaleString','size','warn','length','number','_zoomLabel','dispatchEvent','action','\x20landscape','beforeGenerate','77cIIXfM','message','[data-tb]','18xBvxUy','_paper','text','test','report','shadowRoot','placeholders','report.printTitle','url','_bar','getMonth','_langOff','date','No\x20value\x20from:\x20','615370LTfVab','getTime','unsubscribeState','btnApply','objectType','settings','_status','slice','447770jlGYgB','height','width','languageChanged','report-range-changed','21025lTNjaQ','end','getMinutes','report.range.year','stringify','getElementById','report.range.custom','_rootShadow','load','endFetchTracking','rangeBoxes','has','rangeFrom','format','head','project','remove','inline-block','report.rangeIs','value','val','forEach','push','map','toolbarVisible','rangeKind','14938572TAZuPn','items','14589IDxMWZ','reload','hidden','all','\x20control(s)\x20shown\x20as\x20placeholders','title','_viewer','mm;\x20','error','report.range.month','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','\x20(+','entries','viaTrigger','appendChild','today','getFullYear','month','parentElement','clientWidth','isArray','btnShow','lastRun','function','aria-label','padStart','_showBtn','whenDataReady','textContent','getDate','start','bar','[data-tb=\x22','hide','[data-tb=\x22range\x22].icon','[report]\x20range\x20state\x20','add','getHours','setAttribute','connectedCallback','some','Generating\x20on\x20the\x20server…','printMargins','cssText','34xxoSFL','btnOut','822KQfLVs','16723iUBClj','success','page','control','file','data-tb-off','display:block;width:100%;height:100%;','waitedMs','dispose','getWebuiObject','\x20outstanding\x20—\x20','parse','report-before-generate','reportRange'];a=function(){return a7;};return a();}const TOOLBOX_TEXTS=[['btnOut','title',s(0x1bf)],[s(0x172),'aria','report.zoomOut'],['btnIn','title','report.zoomIn'],['btnIn',s(0x1be),'report.zoomIn'],['btnFit',s(0x110),'report.fit'],['btnFit','title','report.fitTitle'],['rangeKind','title',s(0x190)],[s(0x135),'title','report.from'],['rangeTo','title',s(0x1b0)],['btnApply',s(0x110),s(0x1d3)],['btnApply',s(0x14a),s(0x1c4)],['btnPrint','text','report.print'],[s(0x1ca),s(0x14a),s(0x115)],[s(0x1ce),s(0x110),'report.generate'],[s(0x1ce),s(0x14a),'report.generateTitle'],[s(0x1aa),s(0x110),s(0x1cd)],[s(0x1aa),s(0x14a),'report.saveTitle'],['btnBar',s(0x14a),'report.hideBar'],['btnBar','aria','report.hideBar'],[s(0x15a),s(0x14a),'report.showBar'],['btnShow',s(0x1be),'report.showBar']],RANGE_KEYS={'report':'report.range.report','today':'report.range.today','yesterday':'report.range.yesterday','7d':'report.range.7d','30d':s(0x1d0),'month':s(0x14e),'year':s(0x12c),'custom':s(0x12f)};export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x1d1)]=!![];static [s(0x18c)]=css`
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
        /* sticky in this viewer, not fixed to the window: under an app bar a fixed button sat
           behind it (Kamran 2026-11-20); the negative margin keeps it from taking room */
        #btnShow {
            position: sticky;
            top: 6px;
            display: block;
            width: fit-content;
            margin: 6px 10px -34px auto;
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
        /* custom controls of the toolbar (settings.toolbar, config.reportToolbar) */
        .extra { display: inline-flex; align-items: center; gap: 6px; }
        .extra:empty { display: none; }
        .extra > * { flex: none; }
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
            <span id="tbExtra" class="extra"></span>
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
    `;#zoom=0x1;#reportName;get['reportName'](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x1a5)]();}[s(0x184)](){const u=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this['_bar']=this[u(0x185)](u(0x164)),this[u(0x10f)]=this[u(0x185)]('paper'),this[u(0x14b)]=this['_getDomElement']('viewer'),this[u(0x122)]=this['_getDomElement']('status'),this[u(0x1dc)]=this['_getDomElement']('zoomLabel'),this[u(0x14b)][u(0x120)]=u(0x112),this.#watchReport();const d=(e,f)=>this[u(0x185)](e)?.[u(0x19b)](u(0x1bc),f);d(u(0x1af),()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(u(0x1ce),()=>this.#generate('html')),d('btnSave',()=>this.#generate('html','file')),iobrokerHandler['canSaveReportsOnServer']?.()[u(0x1b2)](e=>{const v=u,f=this['_getDomElement']('btnSave');if(f)f[v(0x147)]=!e;})['catch'](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),d('btnBar',()=>this['toolbarVisible']=![]),d('btnShow',()=>this['toolbarVisible']=!![]);if(this['_toolbarWanted']!==undefined)this[u(0x141)]=this['_toolbarWanted'];this.#translateToolbox(),this[u(0x119)]=iobrokerHandler[u(0x127)]?.['on']?.(()=>this.#translateToolbox());if(this.#reportName)this.#load();}#translateToolbox(){const w=s,c=f=>bt(iobrokerHandler,f);for(const [f,g,h]of TOOLBOX_TEXTS){const i=this['_getDomElement'](f);if(!i)continue;if(g==='title')i[w(0x14a)]=c(h);else{if(g===w(0x1be))i[w(0x16b)](w(0x15d),c(h));else{const j=[...i[w(0x1a6)]]['reverse']()['find'](k=>k[w(0x198)]===0x3&&k['textContent'][w(0x1b5)]());if(j)j['textContent']=c(h);else i[w(0x1c2)](c(h));}}}const d=this['_getDomElement'](w(0x142));for(const k of d?.['options']??[])if(RANGE_KEYS[k[w(0x13c)]])k[w(0x161)]=c(RANGE_KEYS[k['value']]);for(const l of this[w(0x113)]?.['querySelectorAll']?.(w(0x167))??[])l['title']=c('report.range');const e=this['_getDomElement']('loadWhat');if(e&&/^Loading/[w(0x111)](e['textContent']))e['textContent']=c('report.loading');}set[s(0x141)](c){const x=s;this['_toolbarWanted']=!!c;if(this['_bar'])this[x(0x117)]['hidden']=!c;if(this['_showBtn'])this[x(0x15f)]['hidden']=!!c;}get['toolbarVisible'](){const y=s;return this[y(0x117)]?!this[y(0x117)][y(0x147)]:this[y(0x1cf)]??!![];}#pager=null;async #load(){const z=s;if(!this['_viewer'])return;this.#pager?.[z(0x17c)](),this.#pager=null,this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject'](z(0x112),this.#reportName);if(!c){this.#busy(null),this.#say(bt(iobrokerHandler,'report.notFound',{'name':this.#reportName}),!![]);return;}const d=c['settings']??{};this['_paper'][z(0x18c)]['width']=d[z(0x126)]??'210mm',this[z(0x10f)]['style'][z(0x125)]=d['height']??'297mm',this[z(0x14b)]['style'][z(0x170)]=z(0x17a),this.#applyTheme(d['theme']);const f=d[z(0x176)]??{};this.#pageRule(f,d[z(0x16f)]),await this.#applyToolbox(d[z(0x18e)]),this.#applyToolbarControls(d['toolbar']),iobrokerHandler['beginFetchTracking']();if(this['_viewer']['screenName']===this.#reportName)await this['_viewer'][z(0x146)]();else await this[z(0x14b)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this['_viewer'],this['_viewer']['_rootShadow']),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this[z(0x14b)]['whenScreenReady']({'timeout':0x1f40});const g=this.#watchFetches(),{missing:h}=await this['_viewer'][z(0x160)]();g(),iobrokerHandler[z(0x132)](),this.#busy(null),this.#missing=h;try{const i=Number(d['page']?.['margin']?.[z(0x1a7)])||0x0;this.#pager=applyTablePaging(this['_viewer']['_rootShadow'],{'scale':()=>this.#zoom||0x1,'sheetBottom':()=>this[z(0x10f)]['getBoundingClientRect']()['bottom']-i*0x60/25.4*(this.#zoom||0x1)});}catch(j){console[z(0x1d9)]('[report]\x20table\x20paging',j);}this.#hook('onReportReady',this[z(0x14b)],this[z(0x14b)][z(0x130)],{'missing':h}),this.#emit(z(0x1cc),{'name':this.#reportName,'missing':h});if(h[z(0x1da)])this.#say(z(0x11b)+h['slice'](0x0,0x3)[z(0x140)](k=>k['id'])['join'](',\x20')+(h['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const A=s,f=this[A(0x14b)]?.['_scriptObject']?.[c];if(typeof f!==A(0x15c))return undefined;try{return f(...d);}catch(g){return console['error']('report\x20'+this.#reportName+':\x20'+c+A(0x194),g),undefined;}}#emit(c,d,e=![]){const B=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)[B(0x1dd)](f),f;}#pageRule(c,d){const C=s;if(this[C(0x157)]!==document[C(0x1c6)])return;const e='__report-page-rule';document[C(0x12e)](e)?.[C(0x139)]();const f=document['createElement'](C(0x18c));f['id']=e;const g=(c[C(0x1d8)]??'A4')+(c['orientation']==='landscape'?C(0x1df):''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[C(0x11a)])k['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k[C(0x13f)](C(0x1ab),C(0x1c1));if(!j[C(0x116)])k[C(0x13f)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',C(0x14f));if(!j['pageNumber'])k['push'](C(0x18d));f[C(0x161)]='@page\x20{\x20size:\x20'+g+';\x20margin:\x20'+i(h['top'])+'mm\x20'+i(h['right'])+C(0x1a3)+i(h[C(0x1a7)])+'mm\x20'+i(h['left'])+C(0x14c)+k[C(0x189)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[C(0x137)][C(0x153)](f);}#setZoom(c){const D=s;this.#zoom=Math[D(0x18a)](0x4,Math['max'](0.1,c)),this['_paper']['style']['transform']='scale('+this.#zoom+')',this['_paper']['style']['marginBottom']=D(0x19d)+this['_paper'][D(0x18c)][D(0x125)]+'\x20*\x20'+(this.#zoom-0x1)+')',this['_zoomLabel']['textContent']=Math['round'](this.#zoom*0x64)+'%';}#fit(){const E=s,c=this['_getDomElement']('scroll')[E(0x158)]-0x24,d=this['_paper'][E(0x1cb)]()[E(0x126)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const F=s,f=d?.[F(0x144)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[F(0x1c9)]??[],i=g?.['id']==='admin',j=this[F(0x117)]??this['_getDomElement']('bar');if(!j)return;for(const l of j['querySelectorAll'](F(0x10d)))l['removeAttribute'](F(0x179));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n[F(0x1a4)]===![])o=F(0x166);else{if(!i&&Array[F(0x159)](n[F(0x1c9)])&&n[F(0x1c9)][F(0x1da)]&&!n['groups'][F(0x16d)](p=>h['includes'](p)))o=n[F(0x1de)]==='disable'?'disable':'hide';}if(!o)continue;for(const p of j[F(0x197)](F(0x165)+m+'\x22]'))p['setAttribute']('data-tb-off',o);}}#toolbarKey='';#applyToolbarControls(c){const G=s,d=this['_getDomElement']('tbExtra');if(!d)return;const f=toolbarControls(iobrokerHandler['config']?.[G(0x1ba)],c),g=JSON[G(0x12d)](f);if(g===this.#toolbarKey)return;this.#toolbarKey=g,d['replaceChildren']();for(const h of f){let i;try{i=document['createElement'](getCustomControlName(h[G(0x177)]));}catch(j){console['warn']('[report]\x20toolbar\x20control',h[G(0x177)],j);continue;}for(const [l,m]of Object[G(0x151)](h['props'])){try{i[G(0x16b)](attrOf(l),String(m));}catch{}}i['style']['display']=G(0x13a);if(h['width'])i[G(0x18c)]['width']=h['width'];i['dataset']['toolbarControl']=h[G(0x177)],d['appendChild'](i);}}#initRange(){const H=s,c=this['_getDomElement']('rangeKind'),d=this[H(0x185)]('rangeFrom'),e=this['_getDomElement']('rangeTo'),f=this['_getDomElement'](H(0x11f));if(!c)return;const g=this['_getDomElement'](H(0x133)),h=i=>{const I=H;if(g)g[I(0x147)]=!i;};c['addEventListener']('change',()=>{const J=H;if(c[J(0x13c)]==='custom'){const i=iobrokerHandler['reportRange']??this.#namedRange(J(0x154));if(d&&!d[J(0x13c)])d[J(0x13c)]=this.#toLocalInput(i['start']);if(e&&!e['value'])e[J(0x13c)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c[J(0x13c)]===J(0x112)?null:this.#namedRange(c['value']));}),f?.['addEventListener']('click',()=>{const K=H,i=d?.[K(0x13c)]?new Date(d[K(0x13c)])[K(0x11d)]():NaN,j=e?.['value']?new Date(e[K(0x13c)])['getTime']():NaN;if(!Number['isFinite'](i)||!Number[K(0x19a)](j)){this.#say(bt(iobrokerHandler,K(0x192)),!![]);return;}if(i>=j){this.#say(bt(iobrokerHandler,'report.startBeforeEnd'),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const L=s,e=new Date(c),f=g=>String(g)[L(0x15e)](0x2,'0');return e['getFullYear']()+'-'+f(e['getMonth']()+0x1)+'-'+f(e[L(0x162)]())+'T'+f(e[L(0x16a)]())+':'+f(e[L(0x12b)]());}#namedRange(c){const M=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[M(0x118)](),g[M(0x162)]())['getTime'](),f=0x5265c00;switch(c){case M(0x154):return{'start':e(d),'end':d[M(0x11d)]()};case M(0x187):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[M(0x11d)]()-0x7*f,'end':d['getTime']()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d['getTime']()};case M(0x156):return{'start':new Date(d[M(0x155)](),d[M(0x118)](),0x1)[M(0x11d)](),'end':d[M(0x11d)]()};case'year':return{'start':new Date(d['getFullYear'](),0x0,0x1)['getTime'](),'end':d[M(0x11d)]()};default:return{'start':d['getTime']()-f,'end':d[M(0x11d)]()};}}async #applyRange(c){const N=s;iobrokerHandler['setReportRange'](c),this.#say(c?bt(iobrokerHandler,N(0x13b),{'from':new Date(c['start'])['toLocaleString'](),'to':new Date(c[N(0x12a)])[N(0x1d7)]()}):bt(iobrokerHandler,'report.range.report')),this.#emit(N(0x128),{'range':c}),await this.#load();}async #wireRangeStates(c){const S=s,d=(c?.['fromState']??'')['trim'](),e=(c?.['toState']??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const O=b;if(k==null||k===''||k===0x0||k==='0')return null;if(typeof k===O(0x1db))return k;const l=Number(k);if(Number[O(0x19a)](l)&&String(k)['trim']()!=='')return l;const m=Date[O(0x17f)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const P=b,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(P(0x19e),!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n[P(0x163)]===l&&n[P(0x12a)]===m)return;iobrokerHandler[P(0x1a1)]({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)[P(0x1d7)]()+P(0x183)+new Date(m)['toLocaleString']());const o=this['_getDomElement']('rangeKind');if(o)o[P(0x13c)]='report';const p=this['_getDomElement'](P(0x133));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const R=b;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{const Q=b;g[l]=f(q?.[Q(0x13d)]),h(!![])['catch'](()=>{});};try{i['push']([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console[R(0x1d9)](R(0x168)+k,p);}};await j(d,S(0x163)),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const T=S;for(const [k,l]of i){try{iobrokerHandler[T(0x11e)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const U=s;super['disconnectedCallback']?.();try{this[U(0x119)]?.[U(0x17c)]?.();}catch(c){}this['_langOff']=null,this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[U(0x17c)](),this.#reportChangedSub=null;}['connectedCallback'](){const V=s;super[V(0x16c)]?.();if(this[V(0x117)])this.#watchReport();}#reportChangedSub=null;#watchReport(){const W=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[W(0x1b1)]['on'](async c=>{const X=W;if(c?.['type']!=='report'||c[X(0x1d4)]!==this.#reportName)return;let f;try{f=await iobrokerHandler[X(0x17d)](X(0x112),this.#reportName);}catch(h){return;}if(!f)return;const g=f[X(0x121)]??{};this['_paper']&&(this[X(0x10f)][X(0x18c)][X(0x126)]=g['width']??'210mm',this['_paper']['style']['height']=g['height']??X(0x1c7)),this.#pageRule(g['page']??{},g[X(0x16f)]),this.#applyTheme(g[X(0x1a9)]),await this.#applyToolbox(g[X(0x18e)]),this.#applyToolbarControls(g['toolbar']),this.#fit();});}#applyTheme(c){const Y=s,d=this[Y(0x113)];if(!d)return;let e=d['getElementById']('__reportTheme');!e&&(e=document['createElement']('style'),e['id']=Y(0x1bb),d[Y(0x153)](e));const f=resolveReportTheme(c),g=String(c??'')[Y(0x1b5)]()==='runtime'?'':reportThemeDeclarations(f['name'],iobrokerHandler[Y(0x1d5)]?.['globalStyle']);e['textContent']=Y(0x1a8)+g+'background:'+(f['paper']?Y(0x1c5):Y(0x1a0))+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const Z=s,f=this['_getDomElement'](Z(0x131));if(!f)return;if(c==null){f['hidden']=!![];return;}f[Z(0x147)]=![];const g=this[Z(0x185)]('loadWhat'),h=this[Z(0x185)]('loadDetail');if(g)g[Z(0x161)]=c;if(h&&e!==undefined)h[Z(0x161)]=e;}#logReset(){const a0=s,c=this[a0(0x185)]('loadLog');if(c)c[a0(0x161)]='';this.#logged=new Set();}#logged=new Set();#log(c){const a1=s,d=this['_getDomElement']('loadLog');if(!d||this.#logged[a1(0x134)](c))return;this.#logged[a1(0x169)](c);const e=new Date()['toLocaleTimeString']();d['textContent']+=e+'\x20\x20'+c+'\x0a',d[a1(0x1c8)]=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const a2=b,g=iobrokerHandler[a2(0x1c3)]();if(!g[a2(0x1da)]){this.#busy(a2(0x1ac),'');return;}const i=g['filter'](m=>m[a2(0x199)]==='history')['length'],j=g[a2(0x1da)]-i,k=[];if(j)k[a2(0x13f)](j+'\x20value'+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math['round']((Date[a2(0x18b)]()-c)/0x3e8);this.#busy('Loading\x20data…',k[a2(0x189)]('\x20and\x20')+a2(0x17e)+l+'s');for(const m of g)if(m[a2(0x17b)]>d)this.#log('still\x20waiting:\x20'+m['id']+(m['kind']===a2(0x1b9)?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a4=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const a3=b;try{return(await iobrokerHandler[a3(0x1bd)]['getState'](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date['now'](),i=await g(a4(0x15b));let j=![];while(Date[a4(0x18b)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[a4(0x148)]([g('lastStatus'),g(a4(0x15b))]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(a4(0x16e),a4(0x1b4));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k==='error')return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':a4(0x182)};}#say(c,d){const a5=s;if(!this[a5(0x122)])return;this['_status'][a5(0x161)]=c,this[a5(0x122)]['classList']['toggle']('err',!!d);}async #generate(c=s(0x186),d='download'){const a6=s,f=['btnGen','btnSave'][a6(0x140)](i=>this['_getDomElement'](i))['filter'](Boolean);f['forEach'](i=>i[a6(0x1c0)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[a6(0x181)]??undefined,'project':iobrokerHandler[a6(0x1b6)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a6(0x1e0),g)===![]){this.#say(bt(iobrokerHandler,a6(0x1b8)));return;}if(this.#emit(a6(0x180),g,!![])[a6(0x195)]){this.#say(bt(iobrokerHandler,a6(0x18f)));return;}h['format']=g[a6(0x136)],h['range']=g['range'];if(this.#missing['length']){const j=this.#missing[a6(0x123)](0x0,0x3)[a6(0x140)](k=>k['id'])[a6(0x189)](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing[a6(0x1da)]>0x3?a6(0x150)+(this.#missing[a6(0x1da)]-0x3)+'\x20more)':''));}this.#say(bt(iobrokerHandler,a6(0x188))),this.#busy(g[a6(0x1d2)]==='file'?'Generating\x20on\x20the\x20server…':a6(0x1ad),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a6(0x19c)](g[a6(0x1d4)],{'project':g[a6(0x138)],'format':g[a6(0x136)],'range':g['range'],'deliver':g[a6(0x1d2)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][a6(0x196)]['webuiTheme']||undefined});if(i[a6(0x152)]){const k=await this.#awaitServerRun(g[a6(0x1d4)],g[a6(0x138)]);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a6(0x178)]??null},this.#say(bt(iobrokerHandler,a6(0x1ae),{'file':k['file']??''}));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i[a6(0x1b3)]??null};const l=i[a6(0x114)]?.['length']?a6(0x191)+i['placeholders'][a6(0x1da)]+a6(0x149):'';this.#say(bt(iobrokerHandler,'report.downloaded',{'file':i[a6(0x178)]??''})+l);}}catch(m){h['error']=m?.[a6(0x1e2)]??String(m),this.#say(bt(iobrokerHandler,a6(0x1b7),{'error':h[a6(0x14d)]}),!![]);}finally{f[a6(0x13e)](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h[a6(0x175)]?'report-generated':a6(0x1d6),h);try{await this.#hook(a6(0x19f),g,h);}catch(n){}}}if(!customElements['get']('iobroker-webui-report-viewer'))customElements['define']('iobroker-webui-report-viewer',ReportViewer);