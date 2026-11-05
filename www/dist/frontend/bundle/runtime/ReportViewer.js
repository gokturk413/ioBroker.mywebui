const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x13f))/0x1*(-parseInt(I(0xdf))/0x2)+-parseInt(I(0x12f))/0x3*(parseInt(I(0x10d))/0x4)+-parseInt(I(0x124))/0x5*(parseInt(I(0xc0))/0x6)+parseInt(I(0x146))/0x7+parseInt(I(0xac))/0x8+-parseInt(I(0xa4))/0x9+-parseInt(I(0x119))/0xa*(-parseInt(I(0xa0))/0xb);if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0xda1d9));function c(b,d){b=b-0x8e;const e=a();let f=e[b];return f;}import{a as e}from'../chunk-RED35JXF.js';import'../chunk-3BFVY2J4.js';import{F as f,G as g}from'../chunk-TEIESRV4.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0xdb)+l+J(0xe7),'g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()[J(0xea)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0xd3)?{'name':'light','paper':!0x0}:o==='runtime'?{'name':m[K(0xaa)](String(n??''))?String(n):'light','paper':!0x1}:{'name':m[K(0xaa)](o)?o:K(0xa7),'paper':!0x1};}function a(){const an=['theme','report','defaultPrevented','lastStatus','hide','dispose','disconnectedCallback','number','210mm','getCurrentUser','_showBtn','reportRange','btnShow','Generating…','cssText','btnBar','calc(','btnOut','paper','download','scrollHeight','background:','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','value','name','_bar','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','classList','\x20*\x20','min','870412XpRYtZ','[data-tb=\x22','setReportRange','\x20value','load','\x20history\x20quer','add','date','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','dataset','dispatchEvent','replace','parentElement','whenDataReady','bar','var(--ui-page,\x20#fff)','report-load','join','display:block;width:100%;height:100%;','getMonth','_rootShadow','_toolbarWanted','groups','val','catch','padStart','querySelectorAll','Downloaded:\x20','style','right','rangeBoxes','Range\x20from\x20states:\x20','ready','__report-page-rule','function','297mm','end','toolbarVisible','canSaveReportsOnServer','_viewer','status','toLocaleString','btnSave','Generating\x20on\x20the\x20server…','head','custom','1199060NTdFFo','settings','_getDomElement','report-generate-failed','lastError','Building\x20the\x20page…','objectType','setScreenNameAndLoad','orientation','getElementById','outstandingFetches','endFetchTracking','37810GbcHUu','reportName','[report]\x20range\x20state\x20','getDate','landscape','textContent','subscribeState','toggle','length','data','Cancelled\x20by\x20the\x20report\x20script.','245WvYhEL','map','connectedCallback','currentProject','@top-left\x20{\x20content:\x20\x22\x22;\x20}','bottom','show','unsubscribeState','deliver','globalStyle','body','9QCxNBe','beforeGenerate','_status','push','getMinutes','height','iobroker-webui-report-viewer',':host\x20#paper{','start','viaTrigger','margin','toolbox','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','filter',';\x20margin:\x20','shadowRoot','2xdhPoP','loadLog','mm;\x20','yesterday','loadWhat','scrollTop','_paper','11154941QDJLdP','isFinite','getTime','today','page','error','range','printMargins','No\x20value\x20from:\x20','objectsChanged',';color:var(--ui-text,\x20#1d2733);}','btnFit','format','_parseAttributesToProperties','Range:\x20','mm\x20','transform','getWebuiObject','rangeTo','report\x20','getFullYear','ies','pages','err','reportStateBase','_zoomLabel','913RkMuxX','disable','trim','setAttribute','4921290gRGKFE','isArray','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','light','btnGen','url','test','now','8794232KTzrkq','history','get','whenScreenReady','getState','disabled','report-ready','html','placeholders','still\x20waiting:\x20','width','left','rangeKind','__reportTheme','file','\x20outstanding\x20—\x20','hidden','readonly','project','action','188274AzjFdH'];a=function(){return an;};return a();}var b=class extends h{static [L(0xbd)]=!0x0;static [L(0xfb)]=i`
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
    `;static ['template']=j`
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
    `;#r=0x1;#t;get[L(0x11a)](){return this.#t;}set['reportName'](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0xff)](){const M=L;let l=this.#t;this[M(0x93)](),l&&!this.#t&&(this.#t=l),this[M(0xda)]=this['_getDomElement'](M(0xed)),this[M(0x145)]=this[M(0x10f)](M(0xd3)),this[M(0x106)]=this['_getDomElement']('viewer'),this[M(0x131)]=this[M(0x10f)](M(0x107)),this[M(0x9f)]=this['_getDomElement']('zoomLabel'),this[M(0x106)][M(0x113)]=M(0xc2),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener']('click',q);n('btnIn',()=>this.#d(this.#r*1.25)),n(M(0xd2),()=>this.#d(this.#r/1.25)),n(M(0x91),()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n(M(0xa8),()=>this.#x(M(0xb3))),n('btnSave',()=>this.#x(M(0xb3),M(0xba))),g[M(0x105)]?.()['then'](p=>{const N=M;let q=this[N(0x10f)](N(0x109));q&&(q['hidden']=!p);})[M(0xf7)](()=>{}),this[M(0xcb)]=this['_getDomElement']('btnShow'),n(M(0xd0),()=>this[M(0x104)]=!0x1),n(M(0xcd),()=>this[M(0x104)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this[M(0xf4)]),this.#t&&this.#s();}set[L(0x104)](l){const O=L;this[O(0xf4)]=!!l,this['_bar']&&(this[O(0xda)]['hidden']=!l),this['_showBtn']&&(this[O(0xcb)][O(0xbc)]=!!l);}get[L(0x104)](){const P=L;return this['_bar']?!this[P(0xda)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const Q=L;if(!this['_viewer'])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[Q(0x10e)]??{};this[Q(0x145)]['style'][Q(0xb6)]=n[Q(0xb6)]??'210mm',this['_paper'][Q(0xfb)][Q(0x134)]=n[Q(0x134)]??'297mm',this[Q(0x106)]['style'][Q(0xcf)]=Q(0xf1),this.#y(n[Q(0xc1)]);let p=n['page']??{};this.#u(p,n[Q(0x14d)]),await this.#g(n['toolbox']),g['beginFetchTracking'](),this['_viewer']['screenName']===this.#t?await this['_viewer']['reload']():await this['_viewer'][Q(0x114)](this.#t),this.#c(),this.#l('onReportLoad',this['_viewer'],this[Q(0x106)][Q(0xf3)]),this.#a(Q(0xef),{'name':this.#t}),await this.#k(n[Q(0x122)]),this.#o(Q(0x112),''),await this['_viewer'][Q(0xaf)]({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[Q(0x106)][Q(0xec)]();q(),g[Q(0x118)](),this.#o(null),this.#n=s,this.#l('onReportReady',this[Q(0x106)],this[Q(0x106)][Q(0xf3)],{'missing':s}),this.#a(Q(0xb2),{'name':this.#t,'missing':s}),s[Q(0x121)]&&this.#e(Q(0x8e)+s['slice'](0x0,0x3)[Q(0x125)](u=>u['id'])[Q(0xf0)](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p==R(0x101))try{return p(...n);}catch(q){console[R(0x14b)](R(0x99)+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){const T=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[T(0x106)]??this)[T(0xe9)](q),q;}#u(l,p){const U=L;if(this[U(0xeb)]!==document[U(0x12e)])return;let q=U(0x100);document[U(0x116)](q)?.['remove']();let u=document['createElement']('style');u['id']=q;let z=(l['size']??'A4')+(l[U(0x115)]===U(0x11d)?'\x20landscape':''),A=l[U(0x139)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[U(0xe6)]||D['push'](U(0x128)),C['title']||D[U(0x132)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C[U(0xa9)]||D[U(0x132)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']='@page\x20{\x20size:\x20'+z+U(0x13d)+B(A['top'])+'mm\x20'+B(A[U(0xfc)])+U(0x95)+B(A[U(0x129)])+U(0x95)+B(A[U(0xb7)])+U(0x141)+D[U(0xf0)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[U(0x10b)]['appendChild'](u);}#d(l){const V=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this['_paper'][V(0xfb)][V(0x96)]='scale('+this.#r+')',this['_paper']['style']['marginBottom']=V(0xd1)+this[V(0x145)][V(0xfb)]['height']+V(0xdd)+(this.#r-0x1)+')',this[V(0x9f)][V(0x11e)]=Math['round'](this.#r*0x64)+'%';}#c(){const W=L;let l=this[W(0x10f)]('scroll')['clientWidth']-0x24,n=this[W(0x145)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[W(0xde)](0x1,l/n));}#_(){window['print']();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g[X(0xca)]();}catch{}let z=u?.['groups']??[],A=u?.['id']==='admin',B=this['_bar']??this['_getDomElement']('bar');if(B){for(let C of B['querySelectorAll']('[data-tb]'))C['removeAttribute']('data-tb-off');for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E[X(0x12a)]===!0x1?F=X(0xc5):!A&&Array[X(0xa5)](E[X(0xf5)])&&E[X(0xf5)][X(0x121)]&&!E['groups']['some'](G=>z['includes'](G))&&(F=E[X(0xbf)]===X(0xa1)?X(0xa1):X(0xc5)),!!F){for(let G of B[X(0xf9)](X(0xe0)+D+'\x22]'))G[X(0xa3)]('data-tb-off',F);}}}}#S(){const Y=L;let l=this[Y(0x10f)](Y(0xb8)),p=this['_getDomElement']('rangeFrom'),q=this['_getDomElement'](Y(0x98)),s=this[Y(0x10f)]('btnApply');if(!l)return;let u=this[Y(0x10f)](Y(0xfd)),z=A=>{u&&(u['hidden']=!A);};l['addEventListener']('change',()=>{const Z=Y;if(l['value']===Z(0x10c)){let A=g[Z(0xcc)]??this.#b(Z(0x149));p&&!p['value']&&(p[Z(0xd8)]=this.#m(A['start'])),q&&!q['value']&&(q[Z(0xd8)]=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l[Z(0xd8)]==='report'?null:this.#b(l['value']));}),s?.['addEventListener']('click',()=>{const a0=Y;let A=p?.[a0(0xd8)]?new Date(p['value'])[a0(0x148)]():NaN,B=q?.[a0(0xd8)]?new Date(q['value'])[a0(0x148)]():NaN;if(!Number[a0(0x147)](A)||!Number[a0(0x147)](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e(a0(0xd7),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)[a1(0xf8)](0x2,'0');return n[a1(0x9a)]()+'-'+p(n[a1(0xf2)]()+0x1)+'-'+p(n[a1(0x11c)]())+'T'+p(n['getHours']())+':'+p(n[a1(0x133)]());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s[a2(0x9a)](),s['getMonth'](),s[a2(0x11c)]())['getTime'](),q=0x5265c00;switch(l){case a2(0x149):return{'start':p(n),'end':n['getTime']()};case a2(0x142):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a2(0x148)]()};case'30d':return{'start':n['getTime']()-0x1e*q,'end':n[a2(0x148)]()};case'month':return{'start':new Date(n[a2(0x9a)](),n['getMonth'](),0x1)[a2(0x148)](),'end':n['getTime']()};case'year':return{'start':new Date(n[a2(0x9a)](),0x0,0x1)['getTime'](),'end':n[a2(0x148)]()};default:return{'start':n[a2(0x148)]()-q,'end':n['getTime']()};}}async #f(l){const a3=L;g[a3(0xe1)](l),this.#e(l?a3(0x94)+new Date(l[a3(0x137)])[a3(0x108)]()+'\x20→\x20'+new Date(l[a3(0x103)])[a3(0x108)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.['fromState']??'')[a4(0xa2)](),q=(l?.['toState']??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C==a5(0xc8))return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)[a5(0xa2)]()!=='')return D;let E=Date['parse'](String(C));return Number[a5(0x147)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a6(0x13b),!0x0);return;}let F=g[a6(0xcc)];if(F&&F['start']===D&&F['end']===E)return;g[a6(0xe1)]({'start':D,'end':E}),this.#e(a6(0xfe)+new Date(D)[a6(0x108)]()+'\x20→\x20'+new Date(E)['toLocaleString']());let G=this[a6(0x10f)](a6(0xb8));G&&(G[a6(0xd8)]=a6(0xc2));let H=this[a6(0x10f)](a6(0xfd));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g[a7(0xb0)](C);u[D]=s(F?.[a7(0xf6)]);}catch{}let E=(G,H)=>{const a8=a7;u[D]=s(H?.['val']),z(!0x0)[a8(0xf7)](()=>{});};try{A['push']([C,E,await g[a7(0x11f)](C,E)]);}catch(G){console['warn'](a7(0x11b)+C,G);}};await B(p,a4(0x137)),await B(q,a4(0x103)),this.#v={'from':p,'to':q},this.#i=()=>{const a9=a4;for(let [C,D]of A)try{g[a9(0x12b)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){const aa=L;super[aa(0xc7)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[aa(0xc6)](),this.#h=null;}[L(0x126)](){const ab=L;super[ab(0x126)]?.(),this[ab(0xda)]&&this.#w();}#h=null;#w(){const ac=L;this.#h||(this.#h=g[ac(0x8f)]['on'](async l=>{const ad=ac;if(l?.['type']!==ad(0xc2)||l[ad(0xd9)]!==this.#t)return;let n;try{n=await g[ad(0x97)]('report',this.#t);}catch{return;}if(!n)return;let p=n[ad(0x10e)]??{};this['_paper']&&(this['_paper'][ad(0xfb)]['width']=p['width']??ad(0xc9),this['_paper'][ad(0xfb)][ad(0x134)]=p[ad(0x134)]??ad(0x102)),this.#u(p[ad(0x14a)]??{},p['printMargins']),this.#y(p[ad(0xc1)]),await this.#g(p[ad(0x13a)]),this.#c();}));}#y(l){const ae=L;let n=this[ae(0x13e)];if(!n)return;let p=n['getElementById']('__reportTheme');p||(p=document['createElement'](ae(0xfb)),p['id']=ae(0xb9),n['appendChild'](p));let q=x(l),s=String(l??'')[ae(0xa2)]()==='runtime'?'':y(q['name'],g['config']?.[ae(0x12d)]);p['textContent']=ae(0x136)+s+ae(0xd6)+(q['paper']?'#fff':ae(0xee))+ae(0x90);}#o(l,n){const af=L;let p=this[af(0x10f)](af(0xe3));if(!p)return;if(l==null){p[af(0xbc)]=!0x0;return;}p[af(0xbc)]=!0x1;let q=this['_getDomElement'](af(0x143)),s=this[af(0x10f)]('loadDetail');q&&(q[af(0x11e)]=l),s&&n!==void 0x0&&(s[af(0x11e)]=n);}#T(){const ag=L;let l=this[ag(0x10f)](ag(0x140));l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ah=L;let n=this['_getDomElement']('loadLog');if(!n||this.#p['has'](l))return;this.#p[ah(0xe5)](l);let p=new Date()['toLocaleTimeString']();n[ah(0x11e)]+=p+'\x20\x20'+l+'\x0a',n[ah(0x144)]=n[ah(0xd5)];}#$(){const ai=L;let l=Date[ai(0xab)](),n=0xbb8,p=()=>{const aj=ai;let u=g[aj(0x117)]();if(!u['length']){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']==='history')[aj(0x121)],A=u[aj(0x121)]-z,B=[];A&&B[aj(0x132)](A+aj(0xe2)+(A>0x1?'s':'')),z&&B['push'](z+aj(0xe4)+(z>0x1?aj(0x9b):'y'));let C=Math['round']((Date[aj(0xab)]()-l)/0x3e8);this.#o('Loading\x20data…',B[aj(0xf0)]('\x20and\x20')+aj(0xbb)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D(aj(0xb5)+D['id']+(D['kind']===aj(0xad)?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ak=L;let z=g['namespace']+'.'+f[ak(0x9e)](q,p),A=async E=>{try{return(await g['connection']['getState'](z+'.'+E))?.['val'];}catch{return;}},B=Date[ak(0xab)](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(ak(0xc4)),A('lastRun')]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E===ak(0x14b))return{'ok':!0x1,'error':await A(ak(0x111))};}}return{'ok':!0x1,'error':ak(0xa6)};}#e(l,n){const al=L;this[al(0x131)]&&(this[al(0x131)]['textContent']=l,this['_status'][al(0xdc)][al(0x120)](al(0x9d),!!n));}async #x(l='html',p=L(0xd4)){const am=L;let q=['btnGen','btnSave']['map'](z=>this[am(0x10f)](z))[am(0x13c)](Boolean);q['forEach'](z=>z[am(0xb1)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[am(0xcc)]??void 0x0,'project':g[am(0x127)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(am(0x130),s)===!0x1){this.#e(am(0x123));return;}if(this.#a('report-before-generate',s,!0x0)[am(0xc3)]){this.#e('Cancelled.');return;}if(u['format']=s['format'],u['range']=s[am(0x14c)],this.#n[am(0x121)]){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[am(0xf0)](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[am(0x121)]>0x3?'\x20(+'+(this.#n[am(0x121)]-0x3)+'\x20more)':''));}this.#e(am(0xce)),this.#o(s['deliver']==='file'?am(0x10a):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s['name'],{'project':s['project'],'format':s[am(0x92)],'range':s[am(0x14c)],'deliver':s[am(0x12c)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][am(0xe8)]['webuiTheme']||void 0x0});if(z[am(0x138)]){let B=await this.#E(s['name'],s[am(0xbe)]);if(!B['ok'])throw new Error(B['error']||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B['file']??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B['file']??''));}else{u={...u,'success':!0x0,'file':z[am(0xba)]??null,'pages':z[am(0x9c)]??null};let C=z['placeholders']?.[am(0x121)]?'\x20—\x20'+z[am(0xb4)][am(0x121)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e(am(0xfa)+(z[am(0xba)]??'')+C);}}catch(D){u[am(0x14b)]=D?.['message']??String(D),this.#e('Not\x20generated\x20—\x20'+u[am(0x14b)],!0x0);}finally{q['forEach'](E=>E[am(0xb1)]=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':am(0x110),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0xae)](L(0x135))||customElements['define'](L(0x135),b);export{b as ReportViewer};