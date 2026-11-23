const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x208))/0x1*(parseInt(r(0x28a))/0x2)+parseInt(r(0x232))/0x3+parseInt(r(0x22c))/0x4*(-parseInt(r(0x269))/0x5)+parseInt(r(0x211))/0x6+parseInt(r(0x276))/0x7*(-parseInt(r(0x21c))/0x8)+-parseInt(r(0x244))/0x9*(parseInt(r(0x20e))/0xa)+-parseInt(r(0x1fc))/0xb*(-parseInt(r(0x268))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa0a2c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';import{applyTablePaging}from'../common/TablePager.js';function b(c,d){c=c-0x1f2;const e=a();let f=e[c];return f;}import{bt}from'../common/BuiltinTranslations.js';import{toolbarControls,attrOf}from'../common/ReportToolbarControls.js';import{getCustomControlName}from'./CustomControls.js';const TOOLBOX_TEXTS=[['btnOut','title',s(0x2b2)],['btnOut','aria',s(0x2b2)],['btnIn',s(0x2ab),s(0x25d)],[s(0x1f4),s(0x20d),'report.zoomIn'],['btnFit',s(0x2c0),'report.fit'],[s(0x216),'title','report.fitTitle'],[s(0x224),s(0x2ab),s(0x2a1)],[s(0x22e),s(0x2ab),'report.from'],[s(0x261),'title','report.to'],['btnApply',s(0x2c0),'report.apply'],['btnApply',s(0x2ab),s(0x2ae)],[s(0x273),s(0x2c0),'report.print'],[s(0x273),s(0x2ab),s(0x2b6)],['btnGen',s(0x2c0),'report.generate'],[s(0x27b),s(0x2ab),'report.generateTitle'],[s(0x235),s(0x2c0),s(0x220)],['btnSave','title','report.saveTitle'],['btnBar',s(0x2ab),'report.hideBar'],[s(0x21f),'aria','report.hideBar'],[s(0x2c1),s(0x2ab),'report.showBar'],[s(0x2c1),s(0x20d),'report.showBar']],RANGE_KEYS={'report':'report.range.report','today':s(0x200),'yesterday':s(0x237),'7d':'report.range.7d','30d':s(0x29d),'month':'report.range.month','year':'report.range.year','custom':s(0x299)};function a(){const a5=['_rootShadow','297mm','toggle','defaultPrevented','isFinite',';color:var(--ui-text,\x20#1d2733);}','scale(','report.pickDates','report.range.custom','dispose','download','\x20(+','report.range.30d','report.cancelledScript','removeAttribute','createElement','report.range','start','get','style','push','name',';\x20margin:\x20','lastStatus','loadWhat','disabled','title','_getDomElement','all','report.applyTitle','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','whenDataReady','@top-center\x20{\x20content:\x20\x22\x22;\x20}','report.zoomOut','theme','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','today','report.printTitle','connection','print','bar','_viewer','[report]\x20table\x20paging','length','pageNumber','settings','format','text','btnShow','display:block;width:100%;height:100%;','No\x20value\x20from:\x20','webuiTheme','whenScreenReady','btnIn','report.notGenerated','Generating…','page','reportStateBase','toLocaleTimeString','disconnectedCallback','report.savedOn','737YxyITP','_bar','toolbarVisible','30d','report.range.today','toolbox','toLocaleString','_langOff','deliver','report.cancelled','height','readonly','23722uAmRqi','getState','aria-label','end','_status','aria','3541740OaYWDK','groups','report.loading','7831572wzBgda','zoomLabel','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','getHours','now','btnFit','@top-left\x20{\x20content:\x20\x22\x22;\x20}','_paper','warn','generateReport','toolbar','4054880VYXKvQ','month','mm;\x20','btnBar','report.save','round','forEach','\x20landscape','rangeKind','textContent','isArray','catch','getDate','getBoundingClientRect','html','outstandingFetches','940eFsrif','test','rangeFrom','subscribeState','bottom','210mm','1210800RIDBlX','getWebuiObject','body','btnSave','custom','report.range.yesterday','report','unsubscribeState','yesterday','getTime','paper','getFullYear','replaceChildren','margin','admin','reportName','namespace','report-range-changed','9PLUTGO','report-before-generate','trim','value','includes','setAttribute','\x20history\x20quer','viaTrigger','documentElement','history','mm\x20','Generating\x20on\x20the\x20server…','remove','error','tbExtra','report.downloaded','inline-block','report\x20','\x20(history)','currentProject','control','range','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','getMonth','entries','report.zoomIn','__reportTheme','appendChild','toState','rangeTo','Range\x20from\x20states:\x20','filter','__report-page-rule','#fff','hide','width','349812EIakPx','18845gulYEs','Opening\x20','map','data-tb-off','canSaveReportsOnServer','scrollTop','project','show','screenName','file','btnPrint','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','getMinutes','7cPEyLc','placeholders','[report]\x20toolbar\x20control','loadLog','join','btnGen','_toolbarWanted','report-ready','action','\x20*\x20','hidden','reportToolbar','type','addEventListener','head','lastRun','beforeGenerate','cssText','year','dispatchEvent','106guqirJ','objectType','rangeBoxes','childNodes','reverse','querySelectorAll','err'];a=function(){return a5;};return a();}export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x207)]=!![];static [s(0x2a4)]=css`
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
    `;#zoom=0x1;#reportName;get[s(0x241)](){return this.#reportName;}set[s(0x241)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const t=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[t(0x1fd)]=this[t(0x2ac)](t(0x2b9)),this['_paper']=this[t(0x2ac)](t(0x23c)),this[t(0x2ba)]=this['_getDomElement']('viewer'),this[t(0x20c)]=this['_getDomElement']('status'),this['_zoomLabel']=this[t(0x2ac)](t(0x212)),this[t(0x2ba)][t(0x28b)]=t(0x238),this.#watchReport();const d=(e,f)=>this[t(0x2ac)](e)?.[t(0x283)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(t(0x27b),()=>this.#generate(t(0x22a))),d(t(0x235),()=>this.#generate('html',t(0x272))),iobrokerHandler[t(0x26d)]?.()['then'](e=>{const u=t,f=this[u(0x2ac)](u(0x235));if(f)f['hidden']=!e;})[t(0x227)](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),d(t(0x21f),()=>this[t(0x1fe)]=![]),d(t(0x2c1),()=>this['toolbarVisible']=!![]);if(this[t(0x27c)]!==undefined)this[t(0x1fe)]=this[t(0x27c)];this.#translateToolbox(),this[t(0x203)]=iobrokerHandler['languageChanged']?.['on']?.(()=>this.#translateToolbox());if(this.#reportName)this.#load();}#translateToolbox(){const v=s,c=f=>bt(iobrokerHandler,f);for(const [f,g,h]of TOOLBOX_TEXTS){const i=this['_getDomElement'](f);if(!i)continue;if(g===v(0x2ab))i[v(0x2ab)]=c(h);else{if(g===v(0x20d))i['setAttribute'](v(0x20a),c(h));else{const j=[...i[v(0x28d)]][v(0x28e)]()['find'](k=>k['nodeType']===0x3&&k['textContent']['trim']());if(j)j[v(0x225)]=c(h);else i['append'](c(h));}}}const d=this[v(0x2ac)]('rangeKind');for(const k of d?.['options']??[])if(RANGE_KEYS[k['value']])k['textContent']=c(RANGE_KEYS[k[v(0x247)]]);for(const l of this['shadowRoot']?.['querySelectorAll']?.('[data-tb=\x22range\x22].icon')??[])l[v(0x2ab)]=c('report.range');const e=this[v(0x2ac)](v(0x2a9));if(e&&/^Loading/[v(0x22d)](e['textContent']))e['textContent']=c(v(0x210));}set[s(0x1fe)](c){const w=s;this['_toolbarWanted']=!!c;if(this[w(0x1fd)])this['_bar'][w(0x280)]=!c;if(this['_showBtn'])this['_showBtn'][w(0x280)]=!!c;}get[s(0x1fe)](){const x=s;return this['_bar']?!this[x(0x1fd)][x(0x280)]:this['_toolbarWanted']??!![];}#pager=null;async #load(){const y=s;if(!this[y(0x2ba)])return;this.#pager?.['dispose'](),this.#pager=null,this.#say(''),this.#busy(y(0x26a)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x233)]('report',this.#reportName);if(!c){this.#busy(null),this.#say(bt(iobrokerHandler,'report.notFound',{'name':this.#reportName}),!![]);return;}const d=c[y(0x2be)]??{};this[y(0x218)][y(0x2a4)][y(0x267)]=d['width']??'210mm',this['_paper'][y(0x2a4)][y(0x206)]=d[y(0x206)]??y(0x292),this['_viewer']['style'][y(0x287)]=y(0x2c2),this.#applyTheme(d[y(0x2b3)]);const f=d['page']??{};this.#pageRule(f,d['printMargins']),await this.#applyToolbox(d[y(0x201)]),this.#applyToolbarControls(d['toolbar']),iobrokerHandler['beginFetchTracking']();if(this[y(0x2ba)][y(0x271)]===this.#reportName)await this['_viewer']['reload']();else await this['_viewer']['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this['_viewer'],this[y(0x2ba)]['_rootShadow']),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this['_viewer'][y(0x1f3)]({'timeout':0x1f40});const g=this.#watchFetches(),{missing:h}=await this[y(0x2ba)][y(0x2b0)]();g(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=h;try{const i=Number(d['page']?.[y(0x23f)]?.[y(0x230)])||0x0;this.#pager=applyTablePaging(this['_viewer'][y(0x291)],{'scale':()=>this.#zoom||0x1,'sheetBottom':()=>this['_paper'][y(0x229)]()['bottom']-i*0x60/25.4*(this.#zoom||0x1)});}catch(j){console[y(0x219)](y(0x2bb),j);}this.#hook('onReportReady',this[y(0x2ba)],this[y(0x2ba)][y(0x291)],{'missing':h}),this.#emit(y(0x27d),{'name':this.#reportName,'missing':h});if(h[y(0x2bc)])this.#say(y(0x2c3)+h['slice'](0x0,0x3)['map'](k=>k['id'])['join'](',\x20')+(h['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this[z(0x2ba)]?.['_scriptObject']?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console['error'](z(0x255)+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const A=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[A(0x2ba)]??this)[A(0x289)](f),f;}#pageRule(c,d){const B=s;if(this['parentElement']!==document[B(0x234)])return;const e=B(0x264);document['getElementById'](e)?.[B(0x250)]();const f=document['createElement']('style');f['id']=e;const g=(c['size']??'A4')+(c['orientation']==='landscape'?B(0x223):''),h=c[B(0x23f)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j['date'])k['push'](B(0x217));if(!j['title'])k['push'](B(0x2b1),'@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j['url'])k[B(0x2a5)](B(0x25a),B(0x274));if(!j[B(0x2bd)])k['push'](B(0x213));f['textContent']='@page\x20{\x20size:\x20'+g+B(0x2a7)+i(h['top'])+B(0x24e)+i(h['right'])+'mm\x20'+i(h['bottom'])+'mm\x20'+i(h['left'])+B(0x21e)+k['join']('\x20')+B(0x2af),document[B(0x284)][B(0x25f)](f);}#setZoom(c){const C=s;this.#zoom=Math['min'](0x4,Math['max'](0.1,c)),this['_paper'][C(0x2a4)]['transform']=C(0x297)+this.#zoom+')',this['_paper'][C(0x2a4)]['marginBottom']='calc('+this[C(0x218)][C(0x2a4)][C(0x206)]+C(0x27f)+(this.#zoom-0x1)+')',this['_zoomLabel'][C(0x225)]=Math[C(0x221)](this.#zoom*0x64)+'%';}#fit(){const D=s,c=this['_getDomElement']('scroll')['clientWidth']-0x24,d=this['_paper'][D(0x229)]()[D(0x267)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){const E=s;window[E(0x2b8)]();}async #applyToolbox(d){const F=s,f=d?.['items']??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[F(0x20f)]??[],i=g?.['id']===F(0x240),j=this['_bar']??this['_getDomElement'](F(0x2b9));if(!j)return;for(const l of j[F(0x28f)]('[data-tb]'))l[F(0x29f)](F(0x26c));for(const [m,n]of Object[F(0x25c)](f)){if(!n)continue;let o=null;if(n[F(0x270)]===![])o=F(0x266);else{if(!i&&Array[F(0x226)](n[F(0x20f)])&&n[F(0x20f)][F(0x2bc)]&&!n['groups']['some'](p=>h[F(0x248)](p)))o=n[F(0x27e)]==='disable'?'disable':F(0x266);}if(!o)continue;for(const p of j[F(0x28f)]('[data-tb=\x22'+m+'\x22]'))p['setAttribute'](F(0x26c),o);}}#toolbarKey='';#applyToolbarControls(c){const G=s,d=this[G(0x2ac)](G(0x252));if(!d)return;const f=toolbarControls(iobrokerHandler['config']?.[G(0x281)],c),g=JSON['stringify'](f);if(g===this.#toolbarKey)return;this.#toolbarKey=g,d[G(0x23e)]();for(const h of f){let i;try{i=document[G(0x2a0)](getCustomControlName(h[G(0x258)]));}catch(j){console[G(0x219)](G(0x278),h[G(0x258)],j);continue;}for(const [l,m]of Object['entries'](h['props'])){try{i[G(0x249)](attrOf(l),String(m));}catch{}}i[G(0x2a4)]['display']=G(0x254);if(h[G(0x267)])i[G(0x2a4)][G(0x267)]=h[G(0x267)];i['dataset']['toolbarControl']=h['control'],d[G(0x25f)](i);}}#initRange(){const H=s,c=this['_getDomElement']('rangeKind'),d=this['_getDomElement'](H(0x22e)),e=this['_getDomElement']('rangeTo'),f=this['_getDomElement']('btnApply');if(!c)return;const g=this['_getDomElement']('rangeBoxes'),h=i=>{const I=H;if(g)g[I(0x280)]=!i;};c[H(0x283)]('change',()=>{const J=H;if(c['value']===J(0x236)){const i=iobrokerHandler['reportRange']??this.#namedRange('today');if(d&&!d['value'])d[J(0x247)]=this.#toLocalInput(i['start']);if(e&&!e['value'])e['value']=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c['value']==='report'?null:this.#namedRange(c[J(0x247)]));}),f?.['addEventListener']('click',()=>{const K=H,i=d?.[K(0x247)]?new Date(d[K(0x247)])['getTime']():NaN,j=e?.[K(0x247)]?new Date(e[K(0x247)])['getTime']():NaN;if(!Number['isFinite'](i)||!Number[K(0x295)](j)){this.#say(bt(iobrokerHandler,K(0x298)),!![]);return;}if(i>=j){this.#say(bt(iobrokerHandler,'report.startBeforeEnd'),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const L=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e[L(0x23d)]()+'-'+f(e['getMonth']()+0x1)+'-'+f(e['getDate']())+'T'+f(e[L(0x214)]())+':'+f(e[L(0x275)]());}#namedRange(c){const M=s,d=new Date(),e=g=>new Date(g[M(0x23d)](),g[M(0x25b)](),g[M(0x228)]())['getTime'](),f=0x5265c00;switch(c){case M(0x2b5):return{'start':e(d),'end':d['getTime']()};case M(0x23a):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[M(0x23b)]()-0x7*f,'end':d[M(0x23b)]()};case M(0x1ff):return{'start':d['getTime']()-0x1e*f,'end':d['getTime']()};case M(0x21d):return{'start':new Date(d['getFullYear'](),d[M(0x25b)](),0x1)[M(0x23b)](),'end':d[M(0x23b)]()};case M(0x288):return{'start':new Date(d['getFullYear'](),0x0,0x1)[M(0x23b)](),'end':d['getTime']()};default:return{'start':d[M(0x23b)]()-f,'end':d['getTime']()};}}async #applyRange(c){const N=s;iobrokerHandler['setReportRange'](c),this.#say(c?bt(iobrokerHandler,'report.rangeIs',{'from':new Date(c[N(0x2a2)])['toLocaleString'](),'to':new Date(c[N(0x20b)])['toLocaleString']()}):bt(iobrokerHandler,'report.range.report')),this.#emit(N(0x243),{'range':c}),await this.#load();}async #wireRangeStates(c){const O=s,d=(c?.['fromState']??'')[O(0x246)](),e=(c?.[O(0x260)]??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const P=O;if(k==null||k===''||k===0x0||k==='0')return null;if(typeof k==='number')return k;const l=Number(k);if(Number[P(0x295)](l)&&String(k)['trim']()!=='')return l;const m=Date['parse'](String(k));return Number[P(0x295)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const Q=O,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n['start']===l&&n[Q(0x20b)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(Q(0x262)+new Date(l)[Q(0x202)]()+'\x20→\x20'+new Date(m)['toLocaleString']());const o=this[Q(0x2ac)](Q(0x224));if(o)o['value']='report';const p=this['_getDomElement'](Q(0x28c));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const R=O;try{const n=await iobrokerHandler[R(0x209)](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{g[l]=f(q?.['val']),h(!![])['catch'](()=>{});};try{i[R(0x2a5)]([k,m,await iobrokerHandler[R(0x22f)](k,m)]);}catch(p){console[R(0x219)]('[report]\x20range\x20state\x20'+k,p);}};await j(d,O(0x2a2)),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const S=O;for(const [k,l]of i){try{iobrokerHandler[S(0x239)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const T=s;super[T(0x1fa)]?.();try{this['_langOff']?.[T(0x29a)]?.();}catch(c){}this[T(0x203)]=null,this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}['connectedCallback'](){const U=s;super['connectedCallback']?.();if(this[U(0x1fd)])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const V=b;if(c?.[V(0x282)]!=='report'||c[V(0x2a6)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](V(0x238),this.#reportName);}catch(h){return;}if(!f)return;const g=f[V(0x2be)]??{};this['_paper']&&(this['_paper'][V(0x2a4)]['width']=g['width']??V(0x231),this[V(0x218)]['style'][V(0x206)]=g['height']??V(0x292)),this.#pageRule(g[V(0x1f7)]??{},g['printMargins']),this.#applyTheme(g['theme']),await this.#applyToolbox(g[V(0x201)]),this.#applyToolbarControls(g[V(0x21b)]),this.#fit();});}#applyTheme(c){const W=s,d=this['shadowRoot'];if(!d)return;let e=d['getElementById'](W(0x25e));!e&&(e=document['createElement'](W(0x2a4)),e['id']='__reportTheme',d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[W(0x246)]()==='runtime'?'':reportThemeDeclarations(f[W(0x2a6)],iobrokerHandler['config']?.['globalStyle']);e[W(0x225)]=':host\x20#paper{'+g+'background:'+(f[W(0x23c)]?W(0x265):'var(--ui-page,\x20#fff)')+W(0x296);}#busy(c,e){const X=s,f=this[X(0x2ac)]('load');if(!f)return;if(c==null){f[X(0x280)]=!![];return;}f[X(0x280)]=![];const g=this['_getDomElement']('loadWhat'),h=this['_getDomElement']('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const Y=s,c=this['_getDomElement'](Y(0x279));if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const Z=s,d=this['_getDomElement'](Z(0x279));if(!d||this.#logged['has'](c))return;this.#logged['add'](c);const e=new Date()[Z(0x1f9)]();d[Z(0x225)]+=e+'\x20\x20'+c+'\x0a',d[Z(0x26e)]=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const a0=b,g=iobrokerHandler[a0(0x22b)]();if(!g[a0(0x2bc)]){this.#busy('Rendering…','');return;}const i=g[a0(0x263)](m=>m['kind']===a0(0x24d))['length'],j=g[a0(0x2bc)]-i,k=[];if(j)k['push'](j+'\x20value'+(j>0x1?'s':''));if(i)k[a0(0x2a5)](i+a0(0x24a)+(i>0x1?'ies':'y'));const l=Math['round']((Date['now']()-c)/0x3e8);this.#busy('Loading\x20data…',k[a0(0x27a)]('\x20and\x20')+'\x20outstanding\x20—\x20'+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log('still\x20waiting:\x20'+m['id']+(m['kind']===a0(0x24d)?a0(0x256):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a1=s,f=iobrokerHandler[a1(0x242)]+'.'+IobrokerHandler[a1(0x1f8)](d,c),g=async l=>{const a2=a1;try{return(await iobrokerHandler[a2(0x2b7)]['getState'](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[a1(0x215)](),i=await g(a1(0x285));let j=![];while(Date[a1(0x215)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[a1(0x2ad)]([g(a1(0x2a8)),g('lastRun')]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(a1(0x24f),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k==='error')return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':a1(0x2b4)};}#say(c,d){const a3=s;if(!this[a3(0x20c)])return;this['_status']['textContent']=c,this[a3(0x20c)]['classList'][a3(0x293)](a3(0x290),!!d);}async #generate(c='html',d=s(0x29b)){const a4=s,f=['btnGen','btnSave'][a4(0x26b)](i=>this[a4(0x2ac)](i))['filter'](Boolean);f[a4(0x222)](i=>i['disabled']=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler[a4(0x257)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a4(0x286),g)===![]){this.#say(bt(iobrokerHandler,a4(0x29e)));return;}if(this.#emit(a4(0x245),g,!![])[a4(0x294)]){this.#say(bt(iobrokerHandler,a4(0x205)));return;}h['format']=g[a4(0x2bf)],h['range']=g[a4(0x259)];if(this.#missing[a4(0x2bc)]){const j=this.#missing['slice'](0x0,0x3)['map'](k=>k['id'])[a4(0x27a)](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing[a4(0x2bc)]>0x3?a4(0x29c)+(this.#missing['length']-0x3)+'\x20more)':''));}this.#say(bt(iobrokerHandler,'report.generating')),this.#busy(g[a4(0x204)]===a4(0x272)?'Generating\x20on\x20the\x20server…':a4(0x1f6),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a4(0x21a)](g['name'],{'project':g[a4(0x26f)],'format':g['format'],'range':g['range'],'deliver':g['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document[a4(0x24c)]['dataset'][a4(0x1f2)]||undefined});if(i[a4(0x24b)]){const k=await this.#awaitServerRun(g['name'],g[a4(0x26f)]);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a4(0x272)]??null},this.#say(bt(iobrokerHandler,a4(0x1fb),{'file':k['file']??''}));}else{h={...h,'success':!![],'file':i[a4(0x272)]??null,'pages':i['pages']??null};const l=i[a4(0x277)]?.[a4(0x2bc)]?'\x20—\x20'+i[a4(0x277)]['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say(bt(iobrokerHandler,a4(0x253),{'file':i[a4(0x272)]??''})+l);}}catch(m){h[a4(0x251)]=m?.['message']??String(m),this.#say(bt(iobrokerHandler,a4(0x1f5),{'error':h['error']}),!![]);}finally{f['forEach'](n=>n[a4(0x2aa)]=![]),this.#busy(null);}this.#emit(h['success']?'report-generated':'report-generate-failed',h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}if(!customElements[s(0x2a3)]('iobroker-webui-report-viewer'))customElements['define']('iobroker-webui-report-viewer',ReportViewer);