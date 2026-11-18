const L=c;function c(b,d){b=b-0x111;const e=a();let f=e[b];return f;}function a(){const ak=['webuiTheme','report-before-generate','the\x20server\x20refused\x20the\x20run','width',':host\x20#paper{','reload','whenDataReady','get','length','\x20(+','hide','no\x20value\x20from:\x20','now','padStart','connection','Opening\x20','btnGen','175584kANIvP','data','Generating\x20on\x20the\x20server…','objectType','_rootShadow','\x20—\x20','start','click','file','report\x20','setScreenNameAndLoad','change','getElementById','subscribeState','btnSave','placeholders','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','zoomLabel','getState','defaultPrevented','min','@top-right\x20{\x20content:\x20\x22\x22;\x20}','style',';color:var(--ui-text,\x20#1d2733);}','report','catch','generateReport','printMargins','custom','93801cKsSRu','toLocaleTimeString','scroll','btnOut','72ppLuTD','lastFile','theme','pages','end','Report\x20not\x20found:\x20','_getDomElement','_showBtn','\x20*\x20','lastError','reportStateBase','reportName','getTime','warn','landscape','beginFetchTracking','groups','addEventListener','waitedMs','bottom','@top-center\x20{\x20content:\x20\x22\x22;\x20}','toolbox','val','project','canSaveReportsOnServer','kind','210mm','message','textContent','mm\x20','onReportLoad','[report]\x20range\x20state\x20','still\x20waiting:\x20','getWebuiObject','disable','querySelectorAll','disconnectedCallback','month','_viewer','type','Rendering…','\x20threw','cssText','transform','success','page','297mm','setAttribute','dispose','createElement','_toolbarWanted','btnPrint','isFinite','#fff','\x20control(s)\x20shown\x20as\x20placeholders','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','_zoomLabel','light','rangeBoxes','lastRun','_restoreCachedInititalValues','deliver','[data-tb=\x22','Generating…','running','report-generate-failed','\x20landscape','18gXqRsF','right','hidden','Range\x20from\x20states:\x20','lastStatus','history','var(--ui-page,\x20#fff)','getCurrentUser','toLocaleString','scrollHeight','test','connectedCallback','data-tb-off','push','format','toolbarVisible','entries','range','Not\x20generated\x20—\x20','Pick\x20both\x20dates.','number','578990ZbwJIW','\x20and\x20','bar','getDate','40DzaVsl','readonly','load','value','No\x20value\x20from:\x20','error','setReportRange','template','isArray','btnShow','replace','Cancelled\x20by\x20the\x20report\x20script.','loadWhat','paper','_status','rangeKind','709264DJpVYA','_bar','fromState','head','Building\x20the\x20page…','loadLog','_paper','join','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','22534020quzzcy','1645808bjkbxW','map','\x20more)','height','trim','loadDetail','\x20value','margin','globalStyle','__report-page-rule','download','2876454gXzqkR','Cancelled.'];a=function(){return ak;};return a();}(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x180))/0x1+-parseInt(I(0x148))/0x2*(parseInt(I(0x19d))/0x3)+-parseInt(I(0x162))/0x4+parseInt(I(0x144))/0x5*(-parseInt(I(0x12f))/0x6)+parseInt(I(0x16d))/0x7+-parseInt(I(0x158))/0x8*(parseInt(I(0x1a1))/0x9)+parseInt(I(0x161))/0xa;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x6081a));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-EXTH57VQ.js';import{F as f,G as g}from'../chunk-3E6RVWNM.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+J(0x160),'g');for(let z of q['matchAll'](s))p+=z[0x1][J(0x166)]()[J(0x152)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x166)]();return!o||o===K(0x155)?{'name':'light','paper':!0x0}:o==='runtime'?{'name':m[K(0x139)](String(n??''))?String(n):'light','paper':!0x1}:{'name':m['test'](o)?o:K(0x125),'paper':!0x1};}var b=class extends h{static [L(0x149)]=!0x0;static ['style']=i`
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
    `;static [L(0x14f)]=j`
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
    `;#r=0x1;#t;get[L(0x1ac)](){return this.#t;}set['reportName'](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const M=L;super(),this[M(0x128)]();}['ready'](){const N=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this[N(0x159)]=this[N(0x1a7)]('bar'),this['_paper']=this['_getDomElement'](N(0x155)),this['_viewer']=this['_getDomElement']('viewer'),this[N(0x156)]=this[N(0x1a7)]('status'),this[N(0x124)]=this[N(0x1a7)](N(0x191)),this[N(0x112)][N(0x183)]='report',this.#w();let n=(p,q)=>this['_getDomElement'](p)?.[N(0x1b2)]('click',q);n('btnIn',()=>this.#d(this.#r*1.25)),n(N(0x1a0),()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n(N(0x11f),()=>this.#_()),this.#S(),n(N(0x17f),()=>this.#x('html')),n('btnSave',()=>this.#x('html','file')),g[N(0x1b9)]?.()['then'](p=>{const O=N;let q=this[O(0x1a7)]('btnSave');q&&(q['hidden']=!p);})[N(0x199)](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),n('btnBar',()=>this[N(0x13e)]=!0x1),n(N(0x151),()=>this['toolbarVisible']=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this['_toolbarWanted']),this.#t&&this.#s();}set[L(0x13e)](l){const P=L;this[P(0x11e)]=!!l,this['_bar']&&(this['_bar']['hidden']=!l),this[P(0x1a8)]&&(this['_showBtn']['hidden']=!!l);}get['toolbarVisible'](){return this['_bar']?!this['_bar']['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const Q=L;if(!this[Q(0x112)])return;this.#e(''),this.#o(Q(0x17e)+this.#t+'…',''),this.#T();let l=await g[Q(0x1c2)](Q(0x198),this.#t);if(!l){this.#o(null),this.#e(Q(0x1a6)+this.#t,!0x0);return;}let n=l['settings']??{};this['_paper'][Q(0x196)][Q(0x172)]=n['width']??Q(0x1bb),this['_paper'][Q(0x196)][Q(0x165)]=n[Q(0x165)]??Q(0x11a),this[Q(0x112)][Q(0x196)][Q(0x116)]='display:block;width:100%;height:100%;',this.#y(n[Q(0x1a3)]);let p=n[Q(0x119)]??{};this.#u(p,n['printMargins']),await this.#g(n[Q(0x1b6)]),g[Q(0x1b0)](),this['_viewer']['screenName']===this.#t?await this[Q(0x112)][Q(0x174)]():await this['_viewer'][Q(0x18a)](this.#t),this.#c(),this.#l(Q(0x1bf),this[Q(0x112)],this['_viewer'][Q(0x184)]),this.#a('report-load',{'name':this.#t}),await this.#k(n[Q(0x181)]),this.#o(Q(0x15c),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[Q(0x112)][Q(0x175)]();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this['_viewer'],this['_viewer'][Q(0x184)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[Q(0x177)]&&this.#e(Q(0x14c)+s['slice'](0x0,0x3)[Q(0x163)](u=>u['id'])[Q(0x15f)](',\x20')+(s[Q(0x177)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error'](R(0x189)+this.#t+':\x20'+l+R(0x115),q);return;}}#a(l,n,p=!0x1){const T=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[T(0x112)]??this)['dispatchEvent'](q),q;}#u(l,p){const U=L;if(this['parentElement']!==document['body'])return;let q=U(0x16b);document['getElementById'](q)?.['remove']();let u=document['createElement'](U(0x196));u['id']=q;let z=(l['size']??'A4')+(l['orientation']===U(0x1af)?U(0x12e):''),A=l[U(0x169)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D[U(0x13c)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),C['title']||D[U(0x13c)](U(0x1b5),U(0x195)),C['url']||D[U(0x13c)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D[U(0x13c)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u[U(0x1bd)]='@page\x20{\x20size:\x20'+z+';\x20margin:\x20'+B(A['top'])+'mm\x20'+B(A[U(0x130)])+'mm\x20'+B(A[U(0x1b4)])+U(0x1be)+B(A['left'])+'mm;\x20'+D['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[U(0x15b)]['appendChild'](u);}#d(l){const V=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this[V(0x15e)][V(0x196)][V(0x117)]='scale('+this.#r+')',this['_paper'][V(0x196)]['marginBottom']='calc('+this[V(0x15e)]['style']['height']+V(0x1a9)+(this.#r-0x1)+')',this['_zoomLabel']['textContent']=Math['round'](this.#r*0x64)+'%';}#c(){const W=L;let l=this['_getDomElement'](W(0x19f))['clientWidth']-0x24,n=this[W(0x15e)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[W(0x194)](0x1,l/n));}#_(){window['print']();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g[X(0x136)]();}catch{}let z=u?.[X(0x1b1)]??[],A=u?.['id']==='admin',B=this['_bar']??this[X(0x1a7)](X(0x146));if(B){for(let C of B[X(0x1c4)]('[data-tb]'))C['removeAttribute']('data-tb-off');for(let [D,E]of Object[X(0x13f)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F=X(0x179):!A&&Array[X(0x150)](E[X(0x1b1)])&&E[X(0x1b1)]['length']&&!E['groups']['some'](G=>z['includes'](G))&&(F=E['action']===X(0x1c3)?'disable':'hide'),!!F){for(let G of B['querySelectorAll'](X(0x12a)+D+'\x22]'))G[X(0x11b)](X(0x13b),F);}}}}#S(){const Y=L;let l=this[Y(0x1a7)](Y(0x157)),p=this['_getDomElement']('rangeFrom'),q=this[Y(0x1a7)]('rangeTo'),s=this['_getDomElement']('btnApply');if(!l)return;let u=this[Y(0x1a7)](Y(0x126)),z=A=>{u&&(u['hidden']=!A);};l['addEventListener'](Y(0x18b),()=>{const Z=Y;if(l[Z(0x14b)]===Z(0x19c)){let A=g['reportRange']??this.#b('today');p&&!p['value']&&(p[Z(0x14b)]=this.#m(A['start'])),q&&!q[Z(0x14b)]&&(q[Z(0x14b)]=this.#m(A[Z(0x1a5)])),z(!0x0);return;}z(!0x1),this.#f(l[Z(0x14b)]==='report'?null:this.#b(l['value']));}),s?.[Y(0x1b2)](Y(0x187),()=>{const a0=Y;let A=p?.['value']?new Date(p['value'])['getTime']():NaN,B=q?.[a0(0x14b)]?new Date(q['value'])[a0(0x1ad)]():NaN;if(!Number[a0(0x120)](A)||!Number[a0(0x120)](B)){this.#e(a0(0x142),!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)[a1(0x17c)](0x2,'0');return n['getFullYear']()+'-'+p(n['getMonth']()+0x1)+'-'+p(n[a1(0x147)]())+'T'+p(n['getHours']())+':'+p(n['getMinutes']());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s['getMonth'](),s[a2(0x147)]())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n['getTime']()};case'30d':return{'start':n['getTime']()-0x1e*q,'end':n['getTime']()};case a2(0x111):return{'start':new Date(n['getFullYear'](),n['getMonth'](),0x1)['getTime'](),'end':n[a2(0x1ad)]()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)[a2(0x1ad)](),'end':n[a2(0x1ad)]()};default:return{'start':n['getTime']()-q,'end':n[a2(0x1ad)]()};}}async #f(l){const a3=L;g[a3(0x14e)](l),this.#e(l?'Range:\x20'+new Date(l[a3(0x186)])['toLocaleString']()+'\x20→\x20'+new Date(l['end'])[a3(0x137)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.[a4(0x15a)]??'')['trim'](),q=(l?.['toState']??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C==a5(0x143))return C;let D=Number(C);if(Number[a5(0x120)](D)&&String(C)['trim']()!=='')return D;let E=Date['parse'](String(C));return Number[a5(0x120)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F[a6(0x186)]===D&&F[a6(0x1a5)]===E)return;g['setReportRange']({'start':D,'end':E}),this.#e(a6(0x132)+new Date(D)['toLocaleString']()+'\x20→\x20'+new Date(E)['toLocaleString']());let G=this[a6(0x1a7)]('rangeKind');G&&(G[a6(0x14b)]=a6(0x198));let H=this['_getDomElement'](a6(0x126));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g[a7(0x192)](C);u[D]=s(F?.[a7(0x1b7)]);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g[a7(0x18d)](C,E)]);}catch(G){console[a7(0x1ae)](a7(0x1c0)+C,G);}};await B(p,'start'),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x1c5)](){const a8=L;super[a8(0x1c5)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[a8(0x11c)](),this.#h=null;}[L(0x13a)](){super['connectedCallback']?.(),this['_bar']&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const a9=c;if(l?.[a9(0x113)]!==a9(0x198)||l['name']!==this.#t)return;let n;try{n=await g[a9(0x1c2)](a9(0x198),this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[a9(0x15e)]&&(this['_paper']['style'][a9(0x172)]=p['width']??a9(0x1bb),this['_paper'][a9(0x196)]['height']=p['height']??a9(0x11a)),this.#u(p[a9(0x119)]??{},p[a9(0x19b)]),this.#y(p['theme']),await this.#g(p['toolbox']),this.#c();}));}#y(l){const aa=L;let n=this['shadowRoot'];if(!n)return;let p=n[aa(0x18c)]('__reportTheme');p||(p=document[aa(0x11d)](aa(0x196)),p['id']='__reportTheme',n['appendChild'](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q['name'],g['config']?.[aa(0x16a)]);p['textContent']=aa(0x173)+s+'background:'+(q['paper']?aa(0x121):aa(0x135))+aa(0x197);}#o(l,n){const ab=L;let p=this[ab(0x1a7)](ab(0x14a));if(!p)return;if(l==null){p[ab(0x131)]=!0x0;return;}p[ab(0x131)]=!0x1;let q=this[ab(0x1a7)](ab(0x154)),s=this[ab(0x1a7)](ab(0x167));q&&(q['textContent']=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const ac=L;let l=this['_getDomElement'](ac(0x15d));l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ad=L;let n=this[ad(0x1a7)](ad(0x15d));if(!n||this.#p['has'](l))return;this.#p['add'](l);let p=new Date()[ad(0x19e)]();n[ad(0x1bd)]+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n[ad(0x138)];}#$(){const ae=L;let l=Date[ae(0x17b)](),n=0xbb8,p=()=>{const af=ae;let u=g['outstandingFetches']();if(!u[af(0x177)]){this.#o(af(0x114),'');return;}let z=u['filter'](D=>D[af(0x1ba)]===af(0x134))[af(0x177)],A=u[af(0x177)]-z,B=[];A&&B['push'](A+af(0x168)+(A>0x1?'s':'')),z&&B['push'](z+'\x20history\x20quer'+(z>0x1?'ies':'y'));let C=Math['round']((Date[af(0x17b)]()-l)/0x3e8);this.#o('Loading\x20data…',B['join'](af(0x145))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D[af(0x1b3)]>n&&this.#D(af(0x1c1)+D['id']+(D[af(0x1ba)]===af(0x134)?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ag=L;let z=g['namespace']+'.'+f[ag(0x1ab)](q,p),A=async E=>{const ah=ag;try{return(await g[ah(0x17d)]['getState'](z+'.'+E))?.[ah(0x1b7)];}catch{return;}},B=Date[ag(0x17b)](),C=await A(ag(0x127)),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(ag(0x133)),A(ag(0x127))]),G=F!=null&&F!==C;if(E===ag(0x12c)){D=!0x0,this.#o(ag(0x182),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ag(0x1a2))};if(E==='error')return{'ok':!0x1,'error':await A(ag(0x1aa))};}}return{'ok':!0x1,'error':ag(0x123)};}#e(l,n){const ai=L;this[ai(0x156)]&&(this['_status'][ai(0x1bd)]=l,this[ai(0x156)]['classList']['toggle']('err',!!n));}async #x(l='html',p=L(0x16c)){const aj=L;let q=['btnGen',aj(0x18e)]['map'](z=>this['_getDomElement'](z))['filter'](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g['reportRange']??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e(aj(0x153));return;}if(this.#a(aj(0x170),s,!0x0)[aj(0x193)]){this.#e(aj(0x16e));return;}if(u['format']=s[aj(0x13d)],u['range']=s[aj(0x140)],this.#n['length']){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[aj(0x15f)](',\x20');throw new Error(aj(0x17a)+A+(this.#n[aj(0x177)]>0x3?aj(0x178)+(this.#n[aj(0x177)]-0x3)+aj(0x164):''));}this.#e(aj(0x12b)),this.#o(s[aj(0x129)]==='file'?'Generating\x20on\x20the\x20server…':'Generating…',aj(0x190));let z=await g[aj(0x19a)](s['name'],{'project':s[aj(0x1b8)],'format':s['format'],'range':s['range'],'deliver':s[aj(0x129)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement']['dataset'][aj(0x16f)]||void 0x0});if(z['viaTrigger']){let B=await this.#E(s['name'],s['project']);if(!B['ok'])throw new Error(B[aj(0x14d)]||aj(0x171));u={...u,'success':!0x0,'file':B['file']??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B[aj(0x188)]??''));}else{u={...u,'success':!0x0,'file':z[aj(0x188)]??null,'pages':z[aj(0x1a4)]??null};let C=z[aj(0x18f)]?.['length']?aj(0x185)+z[aj(0x18f)]['length']+aj(0x122):'';this.#e('Downloaded:\x20'+(z['file']??'')+C);}}catch(D){u[aj(0x14d)]=D?.[aj(0x1bc)]??String(D),this.#e(aj(0x141)+u[aj(0x14d)],!0x0);}finally{q['forEach'](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u[aj(0x118)]?'report-generated':aj(0x12d),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0x176)]('iobroker-webui-report-viewer')||customElements['define']('iobroker-webui-report-viewer',b);export{b as ReportViewer};