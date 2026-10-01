function c(b,d){b=b-0x8c;const e=a();let f=e[b];return f;}const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x113))/0x1+-parseInt(I(0xea))/0x2*(-parseInt(I(0x132))/0x3)+-parseInt(I(0xdf))/0x4+-parseInt(I(0x10d))/0x5+-parseInt(I(0xa9))/0x6+-parseInt(I(0x147))/0x7+parseInt(I(0x106))/0x8;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x2c6e1));function a(){const am=['then','appendChild','report','\x20(history)','push','createElement','toState','[data-tb]','name','@top-right\x20{\x20content:\x20\x22\x22;\x20}','paper','end','mm\x20','beforeGenerate','6550896UyjuJm','slice','height','reload','right','rangeBoxes','map','1323780AOdwma','project','cssText','_zoomLabel','toLocaleTimeString','beginFetchTracking','157963RFePGb','Opening\x20','\x20—\x20','margin','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','_getDomElement','reportStateBase','reportRange','light','loadLog','toolbarVisible','waitedMs','297mm','_scriptObject','file','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','iobroker-webui-report-viewer',';color:var(--ui-text,\x20#1d2733);}','test','size','head','marginBottom','join','padStart',';\x20margin:\x20','getMonth','_toolbarWanted','The\x20server\x20is\x20rendering\x20the\x20report.','today','kind','load','87jsvonK','scale(','trim','\x20more)','isArray','btnIn','settings','change','toolbox','getMinutes','background:','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','__report-page-rule','min','_status','print','display:block;width:100%;height:100%;','viewer','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','getTime','btnSave','1430338hzxFyd','calc(','loadDetail','Generating\x20on\x20the\x20server…','scrollTop','error','width','val','entries','err','isFinite','disable','show','get','pageNumber','report\x20','config','btnPrint','_paper','catch','getBoundingClientRect','webuiTheme','format','scrollHeight','Report\x20default\x20range','zoomLabel','screenName','deliver','html','report-generated','mm;\x20','click','reportName','toLocaleString','990486WZYyUE','define','no\x20value\x20from:\x20','toggle','subscribeState','\x20→\x20','getWebuiObject','transform','replace','max','endFetchTracking','@top-center\x20{\x20content:\x20\x22\x22;\x20}','groups','getDate','now','\x20control(s)\x20shown\x20as\x20placeholders','@page\x20{\x20size:\x20','month','landscape','number','add','classList','setReportRange','[report]\x20range\x20state\x20','__reportTheme','Saved\x20on\x20the\x20server:\x20','hide','unsubscribeState','_bar','range','bar','template','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','_showBtn','round','textContent','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','Generating…','btnBar','\x20history\x20quer','_viewer','rangeFrom',':host\x20#paper{','dataset','objectType','style','ies','getHours','btnOut','var(--ui-page,\x20#fff)','printMargins','length','Rendering…','querySelectorAll','748004BVxWCy','hidden','Report\x20not\x20found:\x20','disabled','value','getState','data','rangeTo','Building\x20the\x20page…','\x20landscape','rangeKind','23604zjVExW','viaTrigger','theme','year','disconnectedCallback','start','currentProject','connectedCallback','btnShow','filter','Not\x20generated\x20—\x20','history','top','scroll'];a=function(){return am;};return a();}import{a as e}from'./chunk-KVPT4J7H.js';import'./chunk-G2T4KGPO.js';import{s as f,t as g}from'./chunk-TDFN5CKC.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m[J(0x125)](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0x117)+l+J(0x144),'g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()[J(0xb1)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x102)?{'name':'light','paper':!0x0}:o==='runtime'?{'name':m['test'](String(n??''))?String(n):'light','paper':!0x1}:{'name':m['test'](o)?o:K(0x11b),'paper':!0x1};}var b=class extends h{static ['readonly']=!0x0;static ['style']=i`
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
    `;static [L(0xc8)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set[L(0xa7)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const M=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this['_bar']=this['_getDomElement'](M(0xc7)),this['_paper']=this['_getDomElement']('paper'),this['_viewer']=this[M(0x118)](M(0x143)),this[M(0x140)]=this['_getDomElement']('status'),this[M(0x110)]=this['_getDomElement'](M(0xa0)),this[M(0xd1)][M(0xd5)]=M(0xfa),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener'](M(0xa6),q);n(M(0x137),()=>this.#d(this.#r*1.25)),n(M(0xd9),()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n(M(0x98),()=>this.#_()),this.#S(),n('btnGen',()=>this.#x('html')),n(M(0x146),()=>this.#x(M(0xa3),M(0x121))),g['canSaveReportsOnServer']?.()[M(0xf8)](p=>{const N=M;let q=this['_getDomElement'](N(0x146));q&&(q['hidden']=!p);})[M(0x9a)](()=>{}),this['_showBtn']=this[M(0x118)]('btnShow'),n(M(0xcf),()=>this['toolbarVisible']=!0x1),n(M(0xf2),()=>this['toolbarVisible']=!0x0),this['_toolbarWanted']!==void 0x0&&(this[M(0x11d)]=this[M(0x12d)]),this.#t&&this.#s();}set['toolbarVisible'](l){const O=L;this['_toolbarWanted']=!!l,this['_bar']&&(this['_bar'][O(0xe0)]=!l),this['_showBtn']&&(this[O(0xca)][O(0xe0)]=!!l);}get['toolbarVisible'](){const P=L;return this[P(0xc5)]?!this[P(0xc5)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const Q=L;if(!this['_viewer'])return;this.#e(''),this.#o(Q(0x114)+this.#t+'…',''),this.#T();let l=await g[Q(0xaf)](Q(0xfa),this.#t);if(!l){this.#o(null),this.#e(Q(0xe1)+this.#t,!0x0);return;}let n=l[Q(0x138)]??{};this[Q(0x99)]['style']['width']=n[Q(0x8d)]??'210mm',this[Q(0x99)][Q(0xd6)]['height']=n[Q(0x108)]??Q(0x11f),this['_viewer'][Q(0xd6)][Q(0x10f)]=Q(0x142),this.#y(n[Q(0xec)]);let p=n['page']??{};this.#u(p,n[Q(0xdb)]),await this.#g(n[Q(0x13a)]),g[Q(0x112)](),this[Q(0xd1)][Q(0xa1)]===this.#t?await this['_viewer'][Q(0x109)]():await this[Q(0xd1)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this[Q(0xd1)],this[Q(0xd1)]['_rootShadow']),this.#a('report-load',{'name':this.#t}),await this.#k(n[Q(0xe5)]),this.#o(Q(0xe7),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer']['whenDataReady']();q(),g[Q(0xb3)](),this.#o(null),this.#n=s,this.#l('onReportReady',this[Q(0xd1)],this[Q(0xd1)]['_rootShadow'],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[Q(0xdc)]&&this.#e('No\x20value\x20from:\x20'+s[Q(0x107)](0x0,0x3)[Q(0x10c)](u=>u['id'])['join'](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this[R(0xd1)]?.[R(0x120)]?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error'](R(0x96)+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)['dispatchEvent'](q),q;}#u(l,p){const T=L;if(this['parentElement']!==document['body'])return;let q=T(0x13e);document['getElementById'](q)?.['remove']();let u=document['createElement'](T(0xd6));u['id']=q;let z=(l[T(0x126)]??'A4')+(l['orientation']===T(0xbb)?T(0xe8):''),A=l[T(0x116)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D[T(0xfc)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),C['title']||D[T(0xfc)](T(0xb4),T(0x101)),C['url']||D['push'](T(0x13d),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C[T(0x95)]||D[T(0xfc)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']=T(0xb9)+z+T(0x12b)+B(A[T(0xf6)])+T(0x104)+B(A[T(0x10a)])+T(0x104)+B(A['bottom'])+T(0x104)+B(A['left'])+T(0xa5)+D['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[T(0x127)]['appendChild'](u);}#d(l){const U=L;this.#r=Math[U(0x13f)](0x4,Math[U(0xb2)](0.1,l)),this[U(0x99)][U(0xd6)][U(0xb0)]=U(0x133)+this.#r+')',this['_paper']['style'][U(0x128)]=U(0x148)+this['_paper']['style']['height']+'\x20*\x20'+(this.#r-0x1)+')',this[U(0x110)]['textContent']=Math[U(0xcb)](this.#r*0x64)+'%';}#c(){const V=L;let l=this[V(0x118)](V(0xf7))['clientWidth']-0x24,n=this[V(0x99)][V(0x9b)]()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[V(0x13f)](0x1,l/n));}#_(){const W=L;window[W(0x141)]();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.[X(0xb5)]??[],A=u?.['id']==='admin',B=this['_bar']??this['_getDomElement'](X(0xc7));if(B){for(let C of B[X(0xde)](X(0xff)))C['removeAttribute']('data-tb-off');for(let [D,E]of Object[X(0x8f)](q)){if(!E)continue;let F=null;if(E[X(0x93)]===!0x1?F=X(0xc3):!A&&Array[X(0x136)](E[X(0xb5)])&&E[X(0xb5)]['length']&&!E['groups']['some'](G=>z['includes'](G))&&(F=E['action']==='disable'?X(0x92):'hide'),!!F){for(let G of B[X(0xde)]('[data-tb=\x22'+D+'\x22]'))G['setAttribute']('data-tb-off',F);}}}}#S(){const Y=L;let l=this[Y(0x118)](Y(0xe9)),p=this[Y(0x118)](Y(0xd2)),q=this['_getDomElement'](Y(0xe6)),s=this['_getDomElement']('btnApply');if(!l)return;let u=this['_getDomElement']('rangeBoxes'),z=A=>{const Z=Y;u&&(u[Z(0xe0)]=!A);};l['addEventListener'](Y(0x139),()=>{const a0=Y;if(l[a0(0xe3)]==='custom'){let A=g['reportRange']??this.#b(a0(0x12f));p&&!p['value']&&(p['value']=this.#m(A[a0(0xef)])),q&&!q[a0(0xe3)]&&(q['value']=this.#m(A[a0(0x103)])),z(!0x0);return;}z(!0x1),this.#f(l[a0(0xe3)]===a0(0xfa)?null:this.#b(l['value']));}),s?.['addEventListener'](Y(0xa6),()=>{const a1=Y;let A=p?.['value']?new Date(p[a1(0xe3)])['getTime']():NaN,B=q?.['value']?new Date(q[a1(0xe3)])[a1(0x145)]():NaN;if(!Number[a1(0x91)](A)||!Number['isFinite'](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e(a1(0xcd),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=L;let n=new Date(l),p=q=>String(q)[a2(0x12a)](0x2,'0');return n['getFullYear']()+'-'+p(n[a2(0x12c)]()+0x1)+'-'+p(n[a2(0xb6)]())+'T'+p(n[a2(0xd8)]())+':'+p(n[a2(0x13b)]());}#b(l){const a3=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s[a3(0x12c)](),s[a3(0xb6)]())[a3(0x145)](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n[a3(0x145)]()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a3(0x145)]()-0x7*q,'end':n[a3(0x145)]()};case'30d':return{'start':n[a3(0x145)]()-0x1e*q,'end':n[a3(0x145)]()};case a3(0xba):return{'start':new Date(n['getFullYear'](),n['getMonth'](),0x1)['getTime'](),'end':n[a3(0x145)]()};case a3(0xed):return{'start':new Date(n['getFullYear'](),0x0,0x1)[a3(0x145)](),'end':n[a3(0x145)]()};default:return{'start':n[a3(0x145)]()-q,'end':n['getTime']()};}}async #f(l){const a4=L;g[a4(0xbf)](l),this.#e(l?'Range:\x20'+new Date(l['start'])[a4(0xa8)]()+a4(0xae)+new Date(l[a4(0x103)])[a4(0xa8)]():a4(0x9f)),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a5=L;let p=(l?.['fromState']??'')[a5(0x134)](),q=(l?.[a5(0xfe)]??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C==a6(0xbc))return C;let D=Number(C);if(Number[a6(0x91)](D)&&String(C)[a6(0x134)]()!=='')return D;let E=Date['parse'](String(C));return Number[a6(0x91)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F[a7(0xef)]===D&&F[a7(0x103)]===E)return;g['setReportRange']({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)[a7(0xa8)]()+'\x20→\x20'+new Date(E)['toLocaleString']());let G=this[a7(0x118)](a7(0xe9));G&&(G['value']=a7(0xfa));let H=this[a7(0x118)](a7(0x10b));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a5;try{let F=await g[a8(0xe4)](C);u[D]=s(F?.[a8(0x8e)]);}catch{}let E=(G,H)=>{const a9=a8;u[D]=s(H?.[a9(0x8e)]),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g[a8(0xad)](C,E)]);}catch(G){console['warn'](a8(0xc0)+C,G);}};await B(p,a5(0xef)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{const aa=a5;for(let [C,D]of A)try{g[aa(0xc4)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0xee)](){super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.['dispose'](),this.#h=null;}[L(0xf1)](){const ab=L;super['connectedCallback']?.(),this[ab(0xc5)]&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const ac=c;if(l?.['type']!==ac(0xfa)||l['name']!==this.#t)return;let n;try{n=await g[ac(0xaf)]('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this['_paper']&&(this['_paper'][ac(0xd6)][ac(0x8d)]=p['width']??'210mm',this['_paper'][ac(0xd6)]['height']=p[ac(0x108)]??ac(0x11f)),this.#u(p['page']??{},p['printMargins']),this.#y(p[ac(0xec)]),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ad=L;let n=this['shadowRoot'];if(!n)return;let p=n['getElementById'](ad(0xc1));p||(p=document[ad(0xfd)]('style'),p['id']=ad(0xc1),n[ad(0xf9)](p));let q=x(l),s=String(l??'')[ad(0x134)]()==='runtime'?'':y(q[ad(0x100)],g[ad(0x97)]?.['globalStyle']);p[ad(0xcc)]=ad(0xd3)+s+ad(0x13c)+(q['paper']?'#fff':ad(0xda))+ad(0x124);}#o(l,n){const ae=L;let p=this[ae(0x118)](ae(0x131));if(!p)return;if(l==null){p['hidden']=!0x0;return;}p[ae(0xe0)]=!0x1;let q=this['_getDomElement']('loadWhat'),s=this['_getDomElement'](ae(0x149));q&&(q[ae(0xcc)]=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const af=L;let l=this[af(0x118)]('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ag=L;let n=this['_getDomElement'](ag(0x11c));if(!n||this.#p['has'](l))return;this.#p[ag(0xbd)](l);let p=new Date()[ag(0x111)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[ag(0x14b)]=n[ag(0x9e)];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const ah=c;let u=g['outstandingFetches']();if(!u[ah(0xdc)]){this.#o(ah(0xdd),'');return;}let z=u[ah(0xf3)](D=>D['kind']===ah(0xf5))['length'],A=u['length']-z,B=[];A&&B[ah(0xfc)](A+'\x20value'+(A>0x1?'s':'')),z&&B[ah(0xfc)](z+ah(0xd0)+(z>0x1?ah(0xd7):'y'));let C=Math['round']((Date[ah(0xb7)]()-l)/0x3e8);this.#o('Loading\x20data…',B['join']('\x20and\x20')+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D[ah(0x11e)]>n&&this.#D('still\x20waiting:\x20'+D['id']+(D[ah(0x130)]===ah(0xf5)?ah(0xfb):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=L;let z=g['namespace']+'.'+f[ai(0x119)](q,p),A=async E=>{const aj=ai;try{return(await g['connection'][aj(0xe4)](z+'.'+E))?.['val'];}catch{return;}},B=Date['now'](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A('lastStatus'),A('lastRun')]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…',ai(0x12e));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':ai(0x122)};}#e(l,n){const ak=L;this['_status']&&(this['_status'][ak(0xcc)]=l,this['_status'][ak(0xbe)][ak(0xac)](ak(0x90),!!n));}async #x(l=L(0xa3),p='download'){const al=L;let q=['btnGen',al(0x146)][al(0x10c)](z=>this[al(0x118)](z))[al(0xf3)](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[al(0x11a)]??void 0x0,'project':g[al(0xf0)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(al(0x105),s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',s,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(u[al(0x9d)]=s[al(0x9d)],u[al(0xc6)]=s[al(0xc6)],this.#n['length']){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[al(0x129)](',\x20');throw new Error(al(0xab)+A+(this.#n['length']>0x3?'\x20(+'+(this.#n[al(0xdc)]-0x3)+al(0x135):''));}this.#e(al(0xce)),this.#o(s['deliver']==='file'?al(0x14a):'Generating…',al(0xc9));let z=await g['generateReport'](s[al(0x100)],{'project':s['project'],'format':s['format'],'range':s[al(0xc6)],'deliver':s[al(0xa2)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][al(0xd4)][al(0x9c)]||void 0x0});if(z[al(0xeb)]){let B=await this.#E(s['name'],s[al(0x10e)]);if(!B['ok'])throw new Error(B[al(0x8c)]||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B[al(0x121)]??null},this.#e(al(0xc2)+(B[al(0x121)]??''));}else{u={...u,'success':!0x0,'file':z[al(0x121)]??null,'pages':z['pages']??null};let C=z['placeholders']?.['length']?al(0x115)+z['placeholders'][al(0xdc)]+al(0xb8):'';this.#e('Downloaded:\x20'+(z['file']??'')+C);}}catch(D){u[al(0x8c)]=D?.['message']??String(D),this.#e(al(0xf4)+u['error'],!0x0);}finally{q['forEach'](E=>E[al(0xe2)]=!0x1),this.#o(null);}this.#a(u['success']?al(0xa4):'report-generate-failed',u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0x94)](L(0x123))||customElements[L(0xaa)](L(0x123),b);export{b as ReportViewer};