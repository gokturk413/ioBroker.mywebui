function a(){const ab=['file','objectType','querySelectorAll','_restoreCachedInititalValues','mm;\x20','print','getMonth','forEach','getElementById','297mm','Downloaded:\x20','The\x20server\x20is\x20rendering\x20the\x20report.','beforeGenerate','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','_paper','1284387cJPKEk','month','hidden','settings','rangeKind','status','_toolbarWanted','reload','getFullYear','map','_viewer','_parseAttributesToProperties','kind','message','then','cssText','slice','range','scrollTop',';\x20margin:\x20','hide','Range:\x20','\x20(+','lastRun','min','mm\x20','pages','82683xOiAnx','load','\x20(history)','groups','waitedMs','254115sJFIcA','loadDetail','title','some','subscribeState','30d','Saved\x20on\x20the\x20server:\x20','namespace','_zoomLabel','the\x20server\x20refused\x20the\x20run','Cancelled\x20by\x20the\x20report\x20script.','1552qKjWaQ','getTime','toolbarVisible','classList','transform','padStart','width','show','ready','463WbqlxJ','getBoundingClientRect','value','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','toLocaleString','\x20*\x20','outstandingFetches','_status','error','afterGenerate','left','\x20control(s)\x20shown\x20as\x20placeholders','210mm','textContent','4036422PQavBI','orientation','reportStateBase','style','btnIn','today','rangeTo','start','filter','setReportRange','Report\x20not\x20found:\x20','zoomLabel','loadWhat','template','get','admin','click','disconnectedCallback','scroll','btnOut','scale(','Loading\x20data…','history','screenName','@page\x20{\x20size:\x20','iobroker-webui-report-viewer','loadLog','dispatchEvent','toState','beginFetchTracking','36Iodlyc','rangeBoxes','_getDomElement','report\x20','btnSave','_bar','3048128CDLPhY','data-tb-off','report-range-changed','Generating\x20on\x20the\x20server…','canSaveReportsOnServer','size','2992640wxuAFr','viewer','html','now','Not\x20generated\x20—\x20','format','Building\x20the\x20page…','name','disabled','project','entries','parentElement','btnShow','disable','isFinite','_showBtn','report','scrollHeight','viaTrigger','report-load','reportName','950KzPFZU','_rootShadow','__report-page-rule','end','err','btnApply','push','trim','no\x20value\x20from:\x20','Report\x20default\x20range','appendChild','includes','onReportReady','\x20—\x20','btnPrint','\x20more)','length','setScreenNameAndLoad'];a=function(){return ab;};return a();}const G=b;(function(k,l){const F=b,n=k();while(!![]){try{const o=parseInt(F(0x1ce))/0x1*(-parseInt(F(0x1c5))/0x2)+parseInt(F(0x19a))/0x3+parseInt(F(0x158))/0x4*(parseInt(F(0x1ba))/0x5)+parseInt(F(0x1dc))/0x6+parseInt(F(0x164))/0x7+-parseInt(F(0x15e))/0x8+-parseInt(F(0x1b5))/0x9*(parseInt(F(0x179))/0xa);if(o===l)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0x5aff4));function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}import'./chunk-7HXTD2Z2.js';import{p as c,q as d}from'./chunk-QZZCS7D7.js';import{BaseCustomWebComponentConstructorAppend as e,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var g=class extends e{static ['readonly']=!0x0;static [G(0x1df)]=i`
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
    `;static [G(0x1e9)]=j`
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
    `;#i=0x1;#t;get['reportName'](){return this.#t;}set[G(0x178)](k){this.#t!==k&&(this.#t=k,this.#s());}constructor(){const H=G;super(),this[H(0x18e)]();}[G(0x1cd)](){const I=G;let k=this.#t;this[I(0x1a5)](),k&&!this.#t&&(this.#t=k),this[I(0x15d)]=this['_getDomElement']('bar'),this['_paper']=this[I(0x15a)]('paper'),this['_viewer']=this['_getDomElement'](I(0x165)),this[I(0x1d5)]=this[I(0x15a)](I(0x19f)),this[I(0x1c2)]=this['_getDomElement'](I(0x1e7)),this[I(0x1a4)][I(0x18c)]=I(0x174);let l=(n,p)=>this[I(0x15a)](n)?.['addEventListener']('click',p);l(I(0x1e0),()=>this.#d(this.#i*1.25)),l(I(0x1ef),()=>this.#d(this.#i/1.25)),l('btnFit',()=>this.#c()),l(I(0x187),()=>this.#v()),this.#y(),l('btnGen',()=>this.#m(I(0x166))),l(I(0x15c),()=>this.#m(I(0x166),I(0x18b))),d[I(0x162)]?.()[I(0x1a8)](n=>{const J=I;let p=this[J(0x15a)]('btnSave');p&&(p[J(0x19c)]=!n);})['catch'](()=>{}),this[I(0x173)]=this[I(0x15a)](I(0x170)),l('btnBar',()=>this[I(0x1c7)]=!0x1),l('btnShow',()=>this[I(0x1c7)]=!0x0),this[I(0x1a0)]!==void 0x0&&(this[I(0x1c7)]=this['_toolbarWanted']),this.#t&&this.#s();}set[G(0x1c7)](k){const K=G;this['_toolbarWanted']=!!k,this[K(0x15d)]&&(this[K(0x15d)][K(0x19c)]=!k),this[K(0x173)]&&(this[K(0x173)][K(0x19c)]=!!k);}get[G(0x1c7)](){const L=G;return this[L(0x15d)]?!this['_bar'][L(0x19c)]:this[L(0x1a0)]??!0x0;}async #s(){const M=G;if(!this['_viewer'])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#_();let k=await d['getWebuiObject'](M(0x174),this.#t);if(!k){this.#o(null),this.#e(M(0x1e6)+this.#t,!0x0);return;}let l=k[M(0x19d)]??{};this['_paper'][M(0x1df)][M(0x1cb)]=l[M(0x1cb)]??M(0x1da),this['_paper'][M(0x1df)]['height']=l['height']??M(0x194),this['_viewer'][M(0x1df)][M(0x1a9)]='display:block;width:100%;height:100%;';let n=l['page']??{};this.#f(n,l['printMargins']),await this.#w(l['toolbox']),d[M(0x1f9)](),this['_viewer'][M(0x1f3)]===this.#t?await this[M(0x1a4)][M(0x1a1)]():await this['_viewer'][M(0x18a)](this.#t),this.#c(),this.#l('onReportLoad',this[M(0x1a4)],this[M(0x1a4)][M(0x17a)]),this.#a(M(0x177),{'name':this.#t}),await this.#x(l['data']),this.#o(M(0x16a),''),await this[M(0x1a4)]['whenScreenReady']({'timeout':0x1f40});let p=this.#S(),{missing:q}=await this['_viewer']['whenDataReady']();p(),d['endFetchTracking'](),this.#o(null),this.#n=q,this.#l(M(0x185),this[M(0x1a4)],this[M(0x1a4)][M(0x17a)],{'missing':q}),this.#a('report-ready',{'name':this.#t,'missing':q}),q[M(0x189)]&&this.#e('No\x20value\x20from:\x20'+q[M(0x1aa)](0x0,0x3)[M(0x1a3)](s=>s['id'])['join'](',\x20')+(q[M(0x189)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(k,...l){const N=G;let n=this['_viewer']?.['_scriptObject']?.[k];if(typeof n=='function')try{return n(...l);}catch(p){console[N(0x1d6)](N(0x15b)+this.#t+':\x20'+k+'\x20threw',p);return;}}#a(k,l,n=!0x1){const O=G;let p=new CustomEvent(k,{'detail':l,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this['_viewer']??this)[O(0x1f7)](p),p;}#f(k,l){const P=G;if(this[P(0x16f)]!==document['body'])return;let p=P(0x17b);document[P(0x193)](p)?.['remove']();let q=document['createElement']('style');q['id']=p;let u=(k[P(0x163)]??'A4')+(k[P(0x1dd)]==='landscape'?'\x20landscape':''),x=k['margin']??{},y=B=>Number(B)||0x0,z=l??{},A=[];z['date']||A['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),z[P(0x1bc)]||A[P(0x17f)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),z['url']||A[P(0x17f)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),z['pageNumber']||A['push'](P(0x198)),q['textContent']=P(0x1f4)+u+P(0x1ad)+y(x['top'])+'mm\x20'+y(x['right'])+P(0x1b3)+y(x['bottom'])+P(0x1b3)+y(x[P(0x1d8)])+P(0x18f)+A['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][P(0x183)](q);}#d(k){const Q=G;this.#i=Math['min'](0x4,Math['max'](0.1,k)),this['_paper'][Q(0x1df)][Q(0x1c9)]=Q(0x1f0)+this.#i+')',this['_paper']['style']['marginBottom']='calc('+this['_paper'][Q(0x1df)]['height']+Q(0x1d3)+(this.#i-0x1)+')',this[Q(0x1c2)][Q(0x1db)]=Math['round'](this.#i*0x64)+'%';}#c(){const R=G;let k=this[R(0x15a)](R(0x1ee))['clientWidth']-0x24,l=this[R(0x199)][R(0x1cf)]()[R(0x1cb)]/(this.#i||0x1);l>0x0&&this.#d(Math[R(0x1b2)](0x1,k/l));}#v(){const S=G;window[S(0x190)]();}async #w(k){const T=G;let p=k?.['items']??{},q=null;try{q=await d['getCurrentUser']();}catch{}let u=q?.['groups']??[],x=q?.['id']===T(0x1eb),y=this['_bar']??this[T(0x15a)]('bar');if(y){for(let z of y['querySelectorAll']('[data-tb]'))z['removeAttribute']('data-tb-off');for(let [A,B]of Object[T(0x16e)](p)){if(!B)continue;let C=null;if(B[T(0x1cc)]===!0x1?C=T(0x1ae):!x&&Array['isArray'](B['groups'])&&B['groups'][T(0x189)]&&!B[T(0x1b8)][T(0x1bd)](D=>u[T(0x184)](D))&&(C=B['action']===T(0x171)?T(0x171):T(0x1ae)),!!C){for(let D of y[T(0x18d)]('[data-tb=\x22'+A+'\x22]'))D['setAttribute'](T(0x15f),C);}}}}#y(){const U=G;let k=this[U(0x15a)](U(0x19e)),l=this['_getDomElement']('rangeFrom'),p=this['_getDomElement'](U(0x1e2)),q=this[U(0x15a)](U(0x17e));if(!k)return;let s=this[U(0x15a)](U(0x159)),u=x=>{s&&(s['hidden']=!x);};k['addEventListener']('change',()=>{const V=U;if(k['value']==='custom'){let x=d['reportRange']??this.#u(V(0x1e1));l&&!l[V(0x1d0)]&&(l['value']=this.#p(x['start'])),p&&!p[V(0x1d0)]&&(p[V(0x1d0)]=this.#p(x[V(0x17c)])),u(!0x0);return;}u(!0x1),this.#g(k[V(0x1d0)]===V(0x174)?null:this.#u(k['value']));}),q?.['addEventListener'](U(0x1ec),()=>{const W=U;let x=l?.['value']?new Date(l['value'])[W(0x1c6)]():NaN,y=p?.[W(0x1d0)]?new Date(p['value'])['getTime']():NaN;if(!Number['isFinite'](x)||!Number['isFinite'](y)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(x>=y){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#g({'start':x,'end':y});});}#p(k){const X=G;let l=new Date(k),n=p=>String(p)[X(0x1ca)](0x2,'0');return l[X(0x1a2)]()+'-'+n(l['getMonth']()+0x1)+'-'+n(l['getDate']())+'T'+n(l['getHours']())+':'+n(l['getMinutes']());}#u(k){const Y=G;let l=new Date(),n=q=>new Date(q[Y(0x1a2)](),q[Y(0x191)](),q['getDate']())['getTime'](),p=0x5265c00;switch(k){case Y(0x1e1):return{'start':n(l),'end':l['getTime']()};case'yesterday':return{'start':n(l)-p,'end':n(l)};case'7d':return{'start':l[Y(0x1c6)]()-0x7*p,'end':l['getTime']()};case Y(0x1bf):return{'start':l['getTime']()-0x1e*p,'end':l[Y(0x1c6)]()};case Y(0x19b):return{'start':new Date(l[Y(0x1a2)](),l['getMonth'](),0x1)[Y(0x1c6)](),'end':l[Y(0x1c6)]()};case'year':return{'start':new Date(l[Y(0x1a2)](),0x0,0x1)[Y(0x1c6)](),'end':l[Y(0x1c6)]()};default:return{'start':l['getTime']()-p,'end':l[Y(0x1c6)]()};}}async #g(k){const Z=G;d['setReportRange'](k),this.#e(k?Z(0x1af)+new Date(k['start'])[Z(0x1d2)]()+'\x20→\x20'+new Date(k[Z(0x17c)])[Z(0x1d2)]():Z(0x182)),this.#a(Z(0x160),{'range':k}),await this.#s();}async #x(k){const a0=G;let l=(k?.['fromState']??'')[a0(0x180)](),p=(k?.[a0(0x1f8)]??'')['trim']();if(this.#r&&(this.#r(),this.#r=null),this.#b=null,!l||!p)return;let q=z=>{const a1=a0;if(z==null||z==='')return null;if(typeof z=='number')return z;let A=Number(z);if(Number[a1(0x172)](A)&&String(z)['trim']()!=='')return A;let B=Date['parse'](String(z));return Number[a1(0x172)](B)?B:null;},s={'start':null,'end':null},u=async z=>{const a2=a0;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e(a2(0x1d1),!0x0);return;}let C=d['reportRange'];if(C&&C[a2(0x1e3)]===A&&C['end']===B)return;d[a2(0x1e5)]({'start':A,'end':B}),this.#e('Range\x20from\x20states:\x20'+new Date(A)['toLocaleString']()+'\x20→\x20'+new Date(B)[a2(0x1d2)]());let D=this[a2(0x15a)](a2(0x19e));D&&(D['value']='report');let E=this['_getDomElement'](a2(0x159));E&&(E['hidden']=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{const a3=a0;try{let C=await d['getState'](z);s[A]=q(C?.['val']);}catch{}let B=(D,E)=>{s[A]=q(E?.['val']),u(!0x0)['catch'](()=>{});};try{x[a3(0x17f)]([z,B,await d[a3(0x1be)](z,B)]);}catch(D){console['warn']('[report]\x20range\x20state\x20'+z,D);}};await y(l,a0(0x1e3)),await y(p,'end'),this.#b={'from':l,'to':p},this.#r=()=>{for(let [z,A]of x)try{d['unsubscribeState'](z,A);}catch{}},await u(!0x1);}#b=null;#r=null;[G(0x1ed)](){super['disconnectedCallback']?.(),this.#r&&(this.#r(),this.#r=null);}#o(k,l){const a4=G;let n=this[a4(0x15a)](a4(0x1b6));if(!n)return;if(k==null){n['hidden']=!0x0;return;}n[a4(0x19c)]=!0x1;let p=this[a4(0x15a)](a4(0x1e8)),q=this[a4(0x15a)](a4(0x1bb));p&&(p[a4(0x1db)]=k),q&&l!==void 0x0&&(q['textContent']=l);}#_(){const a5=G;let k=this[a5(0x15a)](a5(0x1f6));k&&(k[a5(0x1db)]=''),this.#h=new Set();}#h=new Set();#k(k){const a6=G;let l=this['_getDomElement'](a6(0x1f6));if(!l||this.#h['has'](k))return;this.#h['add'](k);let n=new Date()['toLocaleTimeString']();l['textContent']+=n+'\x20\x20'+k+'\x0a',l[a6(0x1ac)]=l[a6(0x175)];}#S(){let k=Date['now'](),l=0xbb8,n=()=>{const a7=b;let q=d[a7(0x1d4)]();if(!q[a7(0x189)]){this.#o('Rendering…','');return;}let u=q[a7(0x1e4)](A=>A['kind']===a7(0x1f2))['length'],x=q[a7(0x189)]-u,y=[];x&&y[a7(0x17f)](x+'\x20value'+(x>0x1?'s':'')),u&&y['push'](u+'\x20history\x20quer'+(u>0x1?'ies':'y'));let z=Math['round']((Date[a7(0x167)]()-k)/0x3e8);this.#o(a7(0x1f1),y['join']('\x20and\x20')+'\x20outstanding\x20—\x20'+z+'s');for(let A of q)A[a7(0x1b9)]>l&&this.#k('still\x20waiting:\x20'+A['id']+(A[a7(0x1a6)]===a7(0x1f2)?a7(0x1b7):''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #D(k,p,q=0x1d4c0){const a8=G;let u=d[a8(0x1c1)]+'.'+c[a8(0x1de)](p,k),x=async B=>{try{return(await d['connection']['getState'](u+'.'+B))?.['val'];}catch{return;}},y=Date['now'](),z=await x('lastRun'),A=!0x1;for(;Date[a8(0x167)]()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise['all']([x('lastStatus'),x(a8(0x1b1))]),D=C!=null&&C!==z;if(B==='running'){A=!0x0,this.#o('Generating\x20on\x20the\x20server…',a8(0x196));continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x('lastFile')};if(B==='error')return{'ok':!0x1,'error':await x('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(k,l){const a9=G;this[a9(0x1d5)]&&(this['_status'][a9(0x1db)]=k,this[a9(0x1d5)][a9(0x1c8)]['toggle'](a9(0x17d),!!l));}async #m(k=G(0x166),l='download'){const aa=G;let p=['btnGen',aa(0x15c)][aa(0x1a3)](u=>this[aa(0x15a)](u))['filter'](Boolean);p[aa(0x192)](u=>u[aa(0x16c)]=!0x0);let q={'name':this.#t,'format':k,'deliver':l,'range':d['reportRange']??void 0x0,'project':d['currentProject']},s={'success':!0x1,'format':k,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(aa(0x197),q)===!0x1){this.#e(aa(0x1c4));return;}if(this.#a('report-before-generate',q,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(s['format']=q[aa(0x169)],s[aa(0x1ab)]=q[aa(0x1ab)],this.#n['length']){let x=this.#n[aa(0x1aa)](0x0,0x3)[aa(0x1a3)](y=>y['id'])['join'](',\x20');throw new Error(aa(0x181)+x+(this.#n['length']>0x3?aa(0x1b0)+(this.#n['length']-0x3)+aa(0x188):''));}this.#e('Generating…'),this.#o(q['deliver']===aa(0x18b)?aa(0x161):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let u=await d['generateReport'](q[aa(0x16b)],{'project':q['project'],'format':q[aa(0x169)],'range':q[aa(0x1ab)],'deliver':q['deliver'],'timeoutMs':this['generateTimeoutMs']});if(u[aa(0x176)]){let y=await this.#D(q[aa(0x16b)],q[aa(0x16d)]);if(!y['ok'])throw new Error(y['error']||aa(0x1c3));s={...s,'success':!0x0,'file':y[aa(0x18b)]??null},this.#e(aa(0x1c0)+(y[aa(0x18b)]??''));}else{s={...s,'success':!0x0,'file':u[aa(0x18b)]??null,'pages':u[aa(0x1b4)]??null};let z=u['placeholders']?.['length']?aa(0x186)+u['placeholders']['length']+aa(0x1d9):'';this.#e(aa(0x195)+(u[aa(0x18b)]??'')+z);}}catch(A){s['error']=A?.[aa(0x1a7)]??String(A),this.#e(aa(0x168)+s['error'],!0x0);}finally{p[aa(0x192)](B=>B[aa(0x16c)]=!0x1),this.#o(null);}this.#a(s['success']?'report-generated':'report-generate-failed',s);try{await this.#l(aa(0x1d7),q,s);}catch{}}};customElements[G(0x1ea)]('iobroker-webui-report-viewer')||customElements['define'](G(0x1f5),g);export{g as ReportViewer};