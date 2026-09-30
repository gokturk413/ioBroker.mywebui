function c(b,d){b=b-0x119;const e=a();let f=e[b];return f;}const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x1a1))/0x1+parseInt(I(0x153))/0x2+-parseInt(I(0x17b))/0x3+parseInt(I(0x181))/0x4+parseInt(I(0x145))/0x5+parseInt(I(0x16a))/0x6+parseInt(I(0x18b))/0x7*(parseInt(I(0x156))/0x8);if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x9d5dd));import{a as e}from'./chunk-KVPT4J7H.js';import'./chunk-YMYCSI72.js';import{s as f,t as g}from'./chunk-5A724DQA.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function a(){const am=['width','marginBottom','1657914vmTZtp','transform','__reportTheme','left','@top-center\x20{\x20content:\x20\x22\x22;\x20}','dispose','whenDataReady','pageNumber','theme','210mm','month','placeholders','__report-page-rule','viaTrigger','currentProject','report-load','disable','1311573FXoBEf','format','head','querySelectorAll','lastStatus','lastError','5113000GdypMq','length','report-generate-failed','parse','ready','zoomLabel','template','hidden','\x20→\x20','slice','14bowWwS','The\x20server\x20is\x20rendering\x20the\x20report.','btnFit','Range:\x20','some','addEventListener','rangeKind','getElementById','get','height','paper','Downloaded:\x20','html','value',';color:var(--ui-text,\x20#1d2733);}','report','light','\x20and\x20','loadWhat','report-generated','Building\x20the\x20page…','_parseAttributesToProperties','923531NDVuEQ','\x20history\x20quer','shadowRoot','getDate','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','btnApply','btnSave','reportRange','toLocaleString','kind','min','_toolbarWanted','waitedMs','getState','disabled','@page\x20{\x20size:\x20','viewer','getFullYear','page','onReportLoad','documentElement','display:block;width:100%;height:100%;','Generating…','disconnectedCallback','toolbarVisible','toolbox','style','btnBar','yesterday','defaultPrevented','subscribeState',':host\x20#paper{','trim','classList','_viewer','_zoomLabel','lastRun','No\x20value\x20from:\x20','createElement','now','whenScreenReady','iobroker-webui-report-viewer','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','mm;\x20','matchAll','bar','reportStateBase','number','isArray','getMonth','Loading\x20data…','\x20threw','_rootShadow','toLocaleTimeString','toState','\x20more)','getTime','name','then','_showBtn','add','connection','groups','deliver','right','round','date','load','define','val','30d','canSaveReportsOnServer','start','still\x20waiting:\x20','Report\x20default\x20range','btnIn','project','btnShow','running','getWebuiObject','#fff','appendChild','test','message','1892515CuVkEI','reportName','cssText','_getDomElement','textContent','getMinutes','map','end','@top-left\x20{\x20content:\x20\x22\x22;\x20}','_bar','error','mm\x20','join','\x20control(s)\x20shown\x20as\x20placeholders','66798QvMFZr','entries','hide','155296SLJOtD','file','body','_paper','catch','getHours','connectedCallback','Rendering…','loadLog','scrollTop','_status','\x20(+','generateTimeoutMs','Cancelled.','Saved\x20on\x20the\x20server:\x20','isFinite','range','today'];a=function(){return am;};return a();}function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q[J(0x11d)](s))p+=z[0x1][J(0x1c1)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x1c1)]();return!o||o==='paper'?{'name':'light','paper':!0x0}:o==='runtime'?{'name':m['test'](String(n??''))?String(n):K(0x19b),'paper':!0x1}:{'name':m[K(0x143)](o)?o:K(0x19b),'paper':!0x1};}var b=class extends h{static ['readonly']=!0x0;static ['style']=i`
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
    `;static [L(0x187)]=j`
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
    `;#r=0x1;#t;get[L(0x146)](){return this.#t;}set[L(0x146)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x185)](){const M=L;let l=this.#t;this[M(0x1a0)](),l&&!this.#t&&(this.#t=l),this[M(0x14e)]=this['_getDomElement'](M(0x11e)),this['_paper']=this['_getDomElement'](M(0x195)),this[M(0x1c3)]=this['_getDomElement'](M(0x1b1)),this['_status']=this['_getDomElement']('status'),this['_zoomLabel']=this[M(0x148)](M(0x186)),this[M(0x1c3)]['objectType']=M(0x19a),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener']('click',q);n(M(0x13c),()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(M(0x18d),()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n('btnGen',()=>this.#x(M(0x197))),n('btnSave',()=>this.#x(M(0x197),'file')),g[M(0x138)]?.()[M(0x12b)](p=>{const N=M;let q=this[N(0x148)](N(0x1a7));q&&(q['hidden']=!p);})[M(0x15a)](()=>{}),this[M(0x12c)]=this[M(0x148)]('btnShow'),n(M(0x1bc),()=>this['toolbarVisible']=!0x1),n(M(0x13e),()=>this['toolbarVisible']=!0x0),this[M(0x1ac)]!==void 0x0&&(this[M(0x1b9)]=this['_toolbarWanted']),this.#t&&this.#s();}set[L(0x1b9)](l){const O=L;this['_toolbarWanted']=!!l,this[O(0x14e)]&&(this[O(0x14e)][O(0x188)]=!l),this[O(0x12c)]&&(this['_showBtn']['hidden']=!!l);}get['toolbarVisible'](){const P=L;return this['_bar']?!this[P(0x14e)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const Q=L;if(!this[Q(0x1c3)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g[Q(0x140)](Q(0x19a),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l['settings']??{};this[Q(0x159)][Q(0x1bb)]['width']=n[Q(0x168)]??Q(0x173),this[Q(0x159)]['style']['height']=n['height']??'297mm',this[Q(0x1c3)]['style'][Q(0x147)]=Q(0x1b6),this.#y(n['theme']);let p=n['page']??{};this.#u(p,n['printMargins']),await this.#g(n[Q(0x1ba)]),g['beginFetchTracking'](),this[Q(0x1c3)]['screenName']===this.#t?await this['_viewer']['reload']():await this['_viewer']['setScreenNameAndLoad'](this.#t),this.#c(),this.#l(Q(0x1b4),this[Q(0x1c3)],this['_viewer'][Q(0x125)]),this.#a(Q(0x179),{'name':this.#t}),await this.#k(n['data']),this.#o(Q(0x19f),''),await this[Q(0x1c3)][Q(0x119)]({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[Q(0x1c3)][Q(0x170)]();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this[Q(0x1c3)],this['_viewer'][Q(0x125)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[Q(0x182)]&&this.#e(Q(0x1c6)+s['slice'](0x0,0x3)[Q(0x14b)](u=>u['id'])[Q(0x151)](',\x20')+(s[Q(0x182)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error']('report\x20'+this.#t+':\x20'+l+R(0x124),q);return;}}#a(l,n,p=!0x1){const T=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[T(0x1c3)]??this)['dispatchEvent'](q),q;}#u(l,p){const U=L;if(this['parentElement']!==document[U(0x158)])return;let q=U(0x176);document[U(0x192)](q)?.['remove']();let u=document[U(0x1c7)](U(0x1bb));u['id']=q;let z=(l['size']??'A4')+(l['orientation']==='landscape'?'\x20landscape':''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[U(0x133)]||D['push'](U(0x14d)),C['title']||D['push'](U(0x16e),'@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C['url']||D['push'](U(0x1a5),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C[U(0x171)]||D['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']=U(0x1b0)+z+';\x20margin:\x20'+B(A['top'])+U(0x150)+B(A[U(0x131)])+U(0x150)+B(A['bottom'])+'mm\x20'+B(A[U(0x16d)])+U(0x11c)+D[U(0x151)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[U(0x17d)]['appendChild'](u);}#d(l){const V=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this[V(0x159)]['style'][V(0x16b)]='scale('+this.#r+')',this['_paper']['style'][V(0x169)]='calc('+this['_paper'][V(0x1bb)]['height']+'\x20*\x20'+(this.#r-0x1)+')',this[V(0x1c4)][V(0x149)]=Math[V(0x132)](this.#r*0x64)+'%';}#c(){const W=L;let l=this[W(0x148)]('scroll')['clientWidth']-0x24,n=this['_paper']['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[W(0x1ab)](0x1,l/n));}#_(){window['print']();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']==='admin',B=this[X(0x14e)]??this['_getDomElement'](X(0x11e));if(B){for(let C of B[X(0x17e)]('[data-tb]'))C['removeAttribute']('data-tb-off');for(let [D,E]of Object[X(0x154)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F=X(0x155):!A&&Array[X(0x121)](E[X(0x12f)])&&E['groups'][X(0x182)]&&!E['groups'][X(0x18f)](G=>z['includes'](G))&&(F=E['action']===X(0x17a)?X(0x17a):'hide'),!!F){for(let G of B[X(0x17e)]('[data-tb=\x22'+D+'\x22]'))G['setAttribute']('data-tb-off',F);}}}}#S(){const Y=L;let l=this[Y(0x148)](Y(0x191)),p=this[Y(0x148)]('rangeFrom'),q=this['_getDomElement']('rangeTo'),s=this['_getDomElement'](Y(0x1a6));if(!l)return;let u=this[Y(0x148)]('rangeBoxes'),z=A=>{const Z=Y;u&&(u[Z(0x188)]=!A);};l[Y(0x190)]('change',()=>{const a0=Y;if(l['value']==='custom'){let A=g[a0(0x1a8)]??this.#b(a0(0x167));p&&!p[a0(0x198)]&&(p[a0(0x198)]=this.#m(A[a0(0x139)])),q&&!q['value']&&(q['value']=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l['value']==='report'?null:this.#b(l[a0(0x198)]));}),s?.[Y(0x190)]('click',()=>{const a1=Y;let A=p?.['value']?new Date(p[a1(0x198)])['getTime']():NaN,B=q?.['value']?new Date(q['value'])[a1(0x129)]():NaN;if(!Number[a1(0x165)](A)||!Number[a1(0x165)](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a2(0x1b2)]()+'-'+p(n['getMonth']()+0x1)+'-'+p(n[a2(0x1a4)]())+'T'+p(n[a2(0x15b)]())+':'+p(n[a2(0x14a)]());}#b(l){const a3=L;let n=new Date(),p=s=>new Date(s[a3(0x1b2)](),s[a3(0x122)](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case a3(0x167):return{'start':p(n),'end':n['getTime']()};case a3(0x1bd):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a3(0x129)]()};case a3(0x137):return{'start':n[a3(0x129)]()-0x1e*q,'end':n['getTime']()};case a3(0x174):return{'start':new Date(n[a3(0x1b2)](),n['getMonth'](),0x1)[a3(0x129)](),'end':n[a3(0x129)]()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)[a3(0x129)](),'end':n[a3(0x129)]()};default:return{'start':n[a3(0x129)]()-q,'end':n[a3(0x129)]()};}}async #f(l){const a4=L;g['setReportRange'](l),this.#e(l?a4(0x18e)+new Date(l[a4(0x139)])[a4(0x1a9)]()+a4(0x189)+new Date(l['end'])['toLocaleString']():a4(0x13b)),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a5=L;let p=(l?.['fromState']??'')[a5(0x1c1)](),q=(l?.[a5(0x127)]??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C==a6(0x120))return C;let D=Number(C);if(Number[a6(0x165)](D)&&String(C)['trim']()!=='')return D;let E=Date[a6(0x184)](String(C));return Number[a6(0x165)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g[a7(0x1a8)];if(F&&F['start']===D&&F['end']===E)return;g['setReportRange']({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)['toLocaleString']()+a7(0x189)+new Date(E)[a7(0x1a9)]());let G=this[a7(0x148)]('rangeKind');G&&(G['value']=a7(0x19a));let H=this[a7(0x148)]('rangeBoxes');H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a5;try{let F=await g['getState'](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g[a8(0x1bf)](C,E)]);}catch(G){console['warn']('[report]\x20range\x20state\x20'+C,G);}};await B(p,'start'),await B(q,a5(0x14c)),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x1b8)](){const a9=L;super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[a9(0x16f)](),this.#h=null;}['connectedCallback'](){const aa=L;super[aa(0x15c)]?.(),this['_bar']&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const ab=c;if(l?.['type']!=='report'||l['name']!==this.#t)return;let n;try{n=await g['getWebuiObject'](ab(0x19a),this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[ab(0x159)]&&(this['_paper']['style']['width']=p[ab(0x168)]??ab(0x173),this['_paper'][ab(0x1bb)][ab(0x194)]=p[ab(0x194)]??'297mm'),this.#u(p[ab(0x1b3)]??{},p['printMargins']),this.#y(p[ab(0x172)]),await this.#g(p[ab(0x1ba)]),this.#c();}));}#y(l){const ac=L;let n=this[ac(0x1a3)];if(!n)return;let p=n[ac(0x192)](ac(0x16c));p||(p=document[ac(0x1c7)](ac(0x1bb)),p['id']=ac(0x16c),n[ac(0x142)](p));let q=x(l),s=String(l??'')[ac(0x1c1)]()==='runtime'?'':y(q[ac(0x12a)],g['config']?.['globalStyle']);p[ac(0x149)]=ac(0x1c0)+s+'background:'+(q[ac(0x195)]?ac(0x141):'var(--ui-page,\x20#fff)')+ac(0x199);}#o(l,n){const ad=L;let p=this[ad(0x148)](ad(0x134));if(!p)return;if(l==null){p['hidden']=!0x0;return;}p['hidden']=!0x1;let q=this['_getDomElement'](ad(0x19d)),s=this['_getDomElement']('loadDetail');q&&(q[ad(0x149)]=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const ae=L;let l=this[ae(0x148)]('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const af=L;let n=this[af(0x148)](af(0x15e));if(!n||this.#p['has'](l))return;this.#p[af(0x12d)](l);let p=new Date()[af(0x126)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[af(0x15f)]=n['scrollHeight'];}#$(){const ag=L;let l=Date[ag(0x1c8)](),n=0xbb8,p=()=>{const ah=ag;let u=g['outstandingFetches']();if(!u[ah(0x182)]){this.#o(ah(0x15d),'');return;}let z=u['filter'](D=>D[ah(0x1aa)]==='history')[ah(0x182)],A=u[ah(0x182)]-z,B=[];A&&B['push'](A+'\x20value'+(A>0x1?'s':'')),z&&B['push'](z+ah(0x1a2)+(z>0x1?'ies':'y'));let C=Math[ah(0x132)]((Date[ah(0x1c8)]()-l)/0x3e8);this.#o(ah(0x123),B['join'](ah(0x19c))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D[ah(0x1ad)]>n&&this.#D(ah(0x13a)+D['id']+(D['kind']==='history'?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=L;let z=g['namespace']+'.'+f[ai(0x11f)](q,p),A=async E=>{const aj=ai;try{return(await g[aj(0x12e)][aj(0x1ae)](z+'.'+E))?.[aj(0x136)];}catch{return;}},B=Date['now'](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(ai(0x17f)),A(ai(0x1c5))]),G=F!=null&&F!==C;if(E===ai(0x13f)){D=!0x0,this.#o('Generating\x20on\x20the\x20server…',ai(0x18c));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E==='error')return{'ok':!0x1,'error':await A(ai(0x180))};}}return{'ok':!0x1,'error':ai(0x11b)};}#e(l,n){const ak=L;this[ak(0x160)]&&(this['_status'][ak(0x149)]=l,this[ak(0x160)][ak(0x1c2)]['toggle']('err',!!n));}async #x(l='html',p='download'){const al=L;let q=['btnGen',al(0x1a7)]['map'](z=>this[al(0x148)](z))['filter'](Boolean);q['forEach'](z=>z[al(0x1af)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[al(0x1a8)]??void 0x0,'project':g[al(0x178)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',s,!0x0)[al(0x1be)]){this.#e(al(0x163));return;}if(u['format']=s[al(0x17c)],u['range']=s[al(0x166)],this.#n[al(0x182)]){let A=this.#n[al(0x18a)](0x0,0x3)[al(0x14b)](B=>B['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[al(0x182)]>0x3?al(0x161)+(this.#n[al(0x182)]-0x3)+al(0x128):''));}this.#e(al(0x1b7)),this.#o(s[al(0x130)]==='file'?'Generating\x20on\x20the\x20server…':'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s['name'],{'project':s['project'],'format':s[al(0x17c)],'range':s[al(0x166)],'deliver':s['deliver'],'timeoutMs':this[al(0x162)],'theme':document[al(0x1b5)]['dataset']['webuiTheme']||void 0x0});if(z[al(0x177)]){let B=await this.#E(s[al(0x12a)],s[al(0x13d)]);if(!B['ok'])throw new Error(B[al(0x14f)]||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B['file']??null},this.#e(al(0x164)+(B[al(0x157)]??''));}else{u={...u,'success':!0x0,'file':z['file']??null,'pages':z['pages']??null};let C=z[al(0x175)]?.['length']?'\x20—\x20'+z['placeholders']['length']+al(0x152):'';this.#e(al(0x196)+(z['file']??'')+C);}}catch(D){u[al(0x14f)]=D?.[al(0x144)]??String(D),this.#e('Not\x20generated\x20—\x20'+u['error'],!0x0);}finally{q['forEach'](E=>E[al(0x1af)]=!0x1),this.#o(null);}this.#a(u['success']?al(0x19e):al(0x183),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0x193)](L(0x11a))||customElements[L(0x135)]('iobroker-webui-report-viewer',b);export{b as ReportViewer};