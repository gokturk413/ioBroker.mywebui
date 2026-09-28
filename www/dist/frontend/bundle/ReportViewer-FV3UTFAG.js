const G=b;function b(c,d){c=c-0x1bc;const e=a();let f=e[c];return f;}(function(k,l){const F=b,n=k();while(!![]){try{const o=-parseInt(F(0x1f5))/0x1+parseInt(F(0x216))/0x2+parseInt(F(0x23d))/0x3*(parseInt(F(0x248))/0x4)+-parseInt(F(0x233))/0x5*(parseInt(F(0x25d))/0x6)+-parseInt(F(0x1d1))/0x7+parseInt(F(0x1be))/0x8*(parseInt(F(0x1d7))/0x9)+-parseInt(F(0x209))/0xa*(-parseInt(F(0x222))/0xb);if(o===l)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0xaf922));import'./chunk-EFPFPS32.js';function a(){const ae=['disabled','canSaveReportsOnServer','[report]\x20range\x20state\x20','length','17288zDZEdT','function','print','define','\x20history\x20quer','start','now','report\x20','getBoundingClientRect','filter','no\x20value\x20from:\x20','Range:\x20','rangeFrom','fromState','defaultPrevented','error','transform','_restoreCachedInititalValues','Generating\x20on\x20the\x20server…','7623196RLkMVG','\x20control(s)\x20shown\x20as\x20placeholders','removeAttribute','reportRange','\x20*\x20','loadDetail','3204kdWqyH','deliver','hidden','toolbarVisible','includes','disable','_rootShadow','status','bottom','format','toggle','lastRun','margin','[data-tb=\x22',';\x20margin:\x20','iobroker-webui-report-viewer','size','value','history','round','name','@top-left\x20{\x20content:\x20\x22\x22;\x20}','onReportReady','file','cssText','report-generate-failed','rangeBoxes','yesterday','addEventListener','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','419590CrKMeP','\x20→\x20','\x20and\x20','groups','head','Opening\x20','date','slice','getElementById','scrollTop','min','297mm','beginFetchTracking','Rendering…','Report\x20not\x20found:\x20','\x20landscape','lastStatus','style','afterGenerate','textContent','580SmKdRs','mm\x20','\x20(+','\x20—\x20','bar','project','btnShow','items','html','reportName','display:block;width:100%;height:100%;','hide','report','2816ZLYHWJ','report-before-generate','rangeTo','setScreenNameAndLoad','top','objectType','padStart','_paper','report-range-changed','_toolbarWanted','The\x20server\x20is\x20rendering\x20the\x20report.','rangeKind','125807UJNCRL','isArray','printMargins','all','remove','Downloaded:\x20','_showBtn','whenScreenReady','lastFile','toLocaleTimeString','btnGen','range','Generating…','querySelectorAll','btnFit','getMinutes','btnBar','1352830JYojsi','No\x20value\x20from:\x20','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','toLocaleString','connection','settings','getState','Range\x20from\x20states:\x20','clientWidth','click','2292uuMpab','add','map','getFullYear','isFinite','year','dispatchEvent','_viewer','show','btnIn','btnSave','5572eyaGeU','30d','trim','forEach','lastError','_bar','mm;\x20','scroll','classList','report-load','height','__report-page-rule','disconnectedCallback','data-tb-off','catch','calc(','warn','_getDomElement','scrollHeight','getTime','end','6ULeRgv','val','parentElement','kind','toolbox','join','push','whenDataReady','getMonth'];a=function(){return ae;};return a();}import{q as c,r as d}from'./chunk-Q4GLWT4I.js';import{BaseCustomWebComponentConstructorAppend as e,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var g=class extends e{static ['readonly']=!0x0;static ['style']=i`
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
    `;#i=0x1;#t;get['reportName'](){return this.#t;}set[G(0x212)](k){this.#t!==k&&(this.#t=k,this.#s());}constructor(){const H=G;super(),this[H(0x1cf)]();}['ready'](){const I=G;let k=this.#t;this['_parseAttributesToProperties'](),k&&!this.#t&&(this.#t=k),this[I(0x24d)]=this[I(0x259)](I(0x20d)),this[I(0x21d)]=this[I(0x259)]('paper'),this[I(0x244)]=this[I(0x259)]('viewer'),this['_status']=this['_getDomElement'](I(0x1de)),this['_zoomLabel']=this[I(0x259)]('zoomLabel'),this['_viewer'][I(0x21b)]='report';let l=(n,p)=>this[I(0x259)](n)?.['addEventListener'](I(0x23c),p);l(I(0x246),()=>this.#d(this.#i*1.25)),l('btnOut',()=>this.#d(this.#i/1.25)),l(I(0x230),()=>this.#c()),l('btnPrint',()=>this.#v()),this.#y(),l('btnGen',()=>this.#m('html')),l(I(0x247),()=>this.#m('html','file')),d[I(0x267)]?.()['then'](n=>{const J=I;let p=this['_getDomElement'](J(0x247));p&&(p['hidden']=!n);})[I(0x256)](()=>{}),this['_showBtn']=this['_getDomElement'](I(0x20f)),l(I(0x232),()=>this['toolbarVisible']=!0x1),l('btnShow',()=>this[I(0x1da)]=!0x0),this[I(0x21f)]!==void 0x0&&(this['toolbarVisible']=this[I(0x21f)]),this.#t&&this.#s();}set['toolbarVisible'](k){const K=G;this['_toolbarWanted']=!!k,this['_bar']&&(this['_bar'][K(0x1d9)]=!k),this[K(0x228)]&&(this['_showBtn'][K(0x1d9)]=!!k);}get['toolbarVisible'](){const L=G;return this['_bar']?!this['_bar'][L(0x1d9)]:this[L(0x21f)]??!0x0;}async #s(){const M=G;if(!this[M(0x244)])return;this.#e(''),this.#o(M(0x1fa)+this.#t+'…',''),this.#_();let k=await d['getWebuiObject']('report',this.#t);if(!k){this.#o(null),this.#e(M(0x203)+this.#t,!0x0);return;}let l=k[M(0x238)]??{};this['_paper'][M(0x206)]['width']=l['width']??'210mm',this['_paper'][M(0x206)]['height']=l['height']??M(0x200),this['_viewer']['style'][M(0x1ef)]=M(0x213);let n=l['page']??{};this.#f(n,l[M(0x224)]),await this.#w(l[M(0x261)]),d[M(0x201)](),this['_viewer']['screenName']===this.#t?await this[M(0x244)]['reload']():await this['_viewer'][M(0x219)](this.#t),this.#c(),this.#l('onReportLoad',this[M(0x244)],this[M(0x244)]['_rootShadow']),this.#a(M(0x251),{'name':this.#t}),await this.#x(l['data']),this.#o('Building\x20the\x20page…',''),await this['_viewer'][M(0x229)]({'timeout':0x1f40});let p=this.#S(),{missing:q}=await this['_viewer'][M(0x264)]();p(),d['endFetchTracking'](),this.#o(null),this.#n=q,this.#l(M(0x1ed),this[M(0x244)],this['_viewer'][M(0x1dd)],{'missing':q}),this.#a('report-ready',{'name':this.#t,'missing':q}),q[M(0x1bd)]&&this.#e(M(0x234)+q[M(0x1fc)](0x0,0x3)[M(0x23f)](s=>s['id'])[M(0x262)](',\x20')+(q['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(k,...l){const N=G;let n=this['_viewer']?.['_scriptObject']?.[k];if(typeof n==N(0x1bf))try{return n(...l);}catch(p){console[N(0x1cd)](N(0x1c5)+this.#t+':\x20'+k+'\x20threw',p);return;}}#a(k,l,n=!0x1){const O=G;let p=new CustomEvent(k,{'detail':l,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this[O(0x244)]??this)[O(0x243)](p),p;}#f(k,l){const P=G;if(this[P(0x25f)]!==document['body'])return;let p=P(0x253);document[P(0x1fd)](p)?.[P(0x226)]();let q=document['createElement'](P(0x206));q['id']=p;let u=(k[P(0x1e7)]??'A4')+(k['orientation']==='landscape'?P(0x204):''),x=k[P(0x1e3)]??{},y=B=>Number(B)||0x0,z=l??{},A=[];z[P(0x1fb)]||A['push'](P(0x1ec)),z['title']||A['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),z['url']||A[P(0x263)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),z['pageNumber']||A[P(0x263)](P(0x235)),q[P(0x208)]='@page\x20{\x20size:\x20'+u+P(0x1e5)+y(x[P(0x21a)])+P(0x20a)+y(x['right'])+P(0x20a)+y(x[P(0x1df)])+'mm\x20'+y(x['left'])+P(0x24e)+A[P(0x262)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[P(0x1f9)]['appendChild'](q);}#d(k){const Q=G;this.#i=Math[Q(0x1ff)](0x4,Math['max'](0.1,k)),this[Q(0x21d)][Q(0x206)][Q(0x1ce)]='scale('+this.#i+')',this[Q(0x21d)]['style']['marginBottom']=Q(0x257)+this['_paper'][Q(0x206)][Q(0x252)]+Q(0x1d5)+(this.#i-0x1)+')',this['_zoomLabel']['textContent']=Math[Q(0x1ea)](this.#i*0x64)+'%';}#c(){const R=G;let k=this[R(0x259)](R(0x24f))[R(0x23b)]-0x24,l=this['_paper'][R(0x1c6)]()['width']/(this.#i||0x1);l>0x0&&this.#d(Math['min'](0x1,k/l));}#v(){const S=G;window[S(0x1c0)]();}async #w(k){const T=G;let p=k?.[T(0x210)]??{},q=null;try{q=await d['getCurrentUser']();}catch{}let u=q?.['groups']??[],x=q?.['id']==='admin',y=this['_bar']??this[T(0x259)]('bar');if(y){for(let z of y['querySelectorAll']('[data-tb]'))z[T(0x1d3)](T(0x255));for(let [A,B]of Object['entries'](p)){if(!B)continue;let C=null;if(B[T(0x245)]===!0x1?C=T(0x214):!x&&Array[T(0x223)](B[T(0x1f8)])&&B['groups']['length']&&!B['groups']['some'](D=>u[T(0x1db)](D))&&(C=B['action']==='disable'?T(0x1dc):'hide'),!!C){for(let D of y[T(0x22f)](T(0x1e4)+A+'\x22]'))D['setAttribute'](T(0x255),C);}}}}#y(){const U=G;let k=this['_getDomElement'](U(0x221)),l=this['_getDomElement'](U(0x1ca)),p=this['_getDomElement'](U(0x218)),q=this[U(0x259)]('btnApply');if(!k)return;let s=this[U(0x259)]('rangeBoxes'),u=x=>{s&&(s['hidden']=!x);};k[U(0x1f3)]('change',()=>{const V=U;if(k[V(0x1e8)]==='custom'){let x=d['reportRange']??this.#u('today');l&&!l['value']&&(l[V(0x1e8)]=this.#p(x['start'])),p&&!p['value']&&(p['value']=this.#p(x['end'])),u(!0x0);return;}u(!0x1),this.#g(k['value']===V(0x215)?null:this.#u(k[V(0x1e8)]));}),q?.[U(0x1f3)]('click',()=>{const W=U;let x=l?.[W(0x1e8)]?new Date(l['value'])['getTime']():NaN,y=p?.['value']?new Date(p['value'])['getTime']():NaN;if(!Number[W(0x241)](x)||!Number['isFinite'](y)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(x>=y){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#g({'start':x,'end':y});});}#p(k){const X=G;let l=new Date(k),n=p=>String(p)[X(0x21c)](0x2,'0');return l[X(0x240)]()+'-'+n(l[X(0x265)]()+0x1)+'-'+n(l['getDate']())+'T'+n(l['getHours']())+':'+n(l[X(0x231)]());}#u(k){const Y=G;let l=new Date(),n=q=>new Date(q[Y(0x240)](),q[Y(0x265)](),q['getDate']())[Y(0x25b)](),p=0x5265c00;switch(k){case'today':return{'start':n(l),'end':l[Y(0x25b)]()};case Y(0x1f2):return{'start':n(l)-p,'end':n(l)};case'7d':return{'start':l[Y(0x25b)]()-0x7*p,'end':l['getTime']()};case Y(0x249):return{'start':l[Y(0x25b)]()-0x1e*p,'end':l['getTime']()};case'month':return{'start':new Date(l['getFullYear'](),l['getMonth'](),0x1)['getTime'](),'end':l['getTime']()};case Y(0x242):return{'start':new Date(l[Y(0x240)](),0x0,0x1)[Y(0x25b)](),'end':l[Y(0x25b)]()};default:return{'start':l['getTime']()-p,'end':l['getTime']()};}}async #g(k){const Z=G;d['setReportRange'](k),this.#e(k?Z(0x1c9)+new Date(k[Z(0x1c3)])['toLocaleString']()+'\x20→\x20'+new Date(k[Z(0x25c)])['toLocaleString']():'Report\x20default\x20range'),this.#a(Z(0x21e),{'range':k}),await this.#s();}async #x(k){const a0=G;let l=(k?.[a0(0x1cb)]??'')['trim'](),p=(k?.['toState']??'')[a0(0x24a)]();if(this.#r&&(this.#r(),this.#r=null),this.#b=null,!l||!p)return;let q=z=>{const a1=a0;if(z==null||z==='')return null;if(typeof z=='number')return z;let A=Number(z);if(Number[a1(0x241)](A)&&String(z)['trim']()!=='')return A;let B=Date['parse'](String(z));return Number['isFinite'](B)?B:null;},s={'start':null,'end':null},u=async z=>{const a2=a0;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let C=d[a2(0x1d4)];if(C&&C['start']===A&&C['end']===B)return;d['setReportRange']({'start':A,'end':B}),this.#e(a2(0x23a)+new Date(A)['toLocaleString']()+a2(0x1f6)+new Date(B)[a2(0x236)]());let D=this[a2(0x259)](a2(0x221));D&&(D[a2(0x1e8)]=a2(0x215));let E=this[a2(0x259)](a2(0x1f1));E&&(E[a2(0x1d9)]=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{const a3=a0;try{let C=await d[a3(0x239)](z);s[A]=q(C?.[a3(0x25e)]);}catch{}let B=(D,E)=>{const a4=a3;s[A]=q(E?.[a4(0x25e)]),u(!0x0)[a4(0x256)](()=>{});};try{x[a3(0x263)]([z,B,await d['subscribeState'](z,B)]);}catch(D){console[a3(0x258)](a3(0x1bc)+z,D);}};await y(l,'start'),await y(p,'end'),this.#b={'from':l,'to':p},this.#r=()=>{for(let [z,A]of x)try{d['unsubscribeState'](z,A);}catch{}},await u(!0x1);}#b=null;#r=null;[G(0x254)](){super['disconnectedCallback']?.(),this.#r&&(this.#r(),this.#r=null);}#o(k,l){const a5=G;let n=this[a5(0x259)]('load');if(!n)return;if(k==null){n['hidden']=!0x0;return;}n[a5(0x1d9)]=!0x1;let p=this[a5(0x259)]('loadWhat'),q=this['_getDomElement'](a5(0x1d6));p&&(p['textContent']=k),q&&l!==void 0x0&&(q[a5(0x208)]=l);}#_(){const a6=G;let k=this[a6(0x259)]('loadLog');k&&(k['textContent']=''),this.#h=new Set();}#h=new Set();#k(k){const a7=G;let l=this['_getDomElement']('loadLog');if(!l||this.#h['has'](k))return;this.#h[a7(0x23e)](k);let n=new Date()[a7(0x22b)]();l['textContent']+=n+'\x20\x20'+k+'\x0a',l[a7(0x1fe)]=l[a7(0x25a)];}#S(){const a8=G;let k=Date[a8(0x1c4)](),l=0xbb8,n=()=>{const a9=a8;let q=d['outstandingFetches']();if(!q['length']){this.#o(a9(0x202),'');return;}let u=q[a9(0x1c7)](A=>A[a9(0x260)]==='history')[a9(0x1bd)],x=q['length']-u,y=[];x&&y['push'](x+'\x20value'+(x>0x1?'s':'')),u&&y['push'](u+a9(0x1c2)+(u>0x1?'ies':'y'));let z=Math[a9(0x1ea)]((Date[a9(0x1c4)]()-k)/0x3e8);this.#o('Loading\x20data…',y['join'](a9(0x1f7))+'\x20outstanding\x20—\x20'+z+'s');for(let A of q)A['waitedMs']>l&&this.#k('still\x20waiting:\x20'+A['id']+(A[a9(0x260)]===a9(0x1e9)?'\x20(history)':''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #D(k,p,q=0x1d4c0){const ab=G;let u=d['namespace']+'.'+c['reportStateBase'](p,k),x=async B=>{const aa=b;try{return(await d[aa(0x237)][aa(0x239)](u+'.'+B))?.['val'];}catch{return;}},y=Date[ab(0x1c4)](),z=await x(ab(0x1e2)),A=!0x1;for(;Date['now']()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise[ab(0x225)]([x(ab(0x205)),x('lastRun')]),D=C!=null&&C!==z;if(B==='running'){A=!0x0,this.#o('Generating\x20on\x20the\x20server…',ab(0x220));continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x(ab(0x22a))};if(B==='error')return{'ok':!0x1,'error':await x(ab(0x24c))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(k,l){const ac=G;this['_status']&&(this['_status']['textContent']=k,this['_status'][ac(0x250)][ac(0x1e1)]('err',!!l));}async #m(k=G(0x211),l='download'){const ad=G;let p=[ad(0x22c),ad(0x247)]['map'](u=>this[ad(0x259)](u))[ad(0x1c7)](Boolean);p[ad(0x24b)](u=>u['disabled']=!0x0);let q={'name':this.#t,'format':k,'deliver':l,'range':d['reportRange']??void 0x0,'project':d['currentProject']},s={'success':!0x1,'format':k,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',q)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a(ad(0x217),q,!0x0)[ad(0x1cc)]){this.#e('Cancelled.');return;}if(s[ad(0x1e0)]=q[ad(0x1e0)],s['range']=q[ad(0x22d)],this.#n[ad(0x1bd)]){let x=this.#n[ad(0x1fc)](0x0,0x3)['map'](y=>y['id'])[ad(0x262)](',\x20');throw new Error(ad(0x1c8)+x+(this.#n['length']>0x3?ad(0x20b)+(this.#n[ad(0x1bd)]-0x3)+'\x20more)':''));}this.#e('Generating…'),this.#o(q[ad(0x1d8)]==='file'?ad(0x1d0):ad(0x22e),ad(0x1f4));let u=await d['generateReport'](q['name'],{'project':q['project'],'format':q[ad(0x1e0)],'range':q['range'],'deliver':q['deliver'],'timeoutMs':this['generateTimeoutMs']});if(u['viaTrigger']){let y=await this.#D(q[ad(0x1eb)],q[ad(0x20e)]);if(!y['ok'])throw new Error(y['error']||'the\x20server\x20refused\x20the\x20run');s={...s,'success':!0x0,'file':y[ad(0x1ee)]??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(y['file']??''));}else{s={...s,'success':!0x0,'file':u['file']??null,'pages':u['pages']??null};let z=u['placeholders']?.['length']?ad(0x20c)+u['placeholders'][ad(0x1bd)]+ad(0x1d2):'';this.#e(ad(0x227)+(u['file']??'')+z);}}catch(A){s[ad(0x1cd)]=A?.['message']??String(A),this.#e('Not\x20generated\x20—\x20'+s['error'],!0x0);}finally{p[ad(0x24b)](B=>B[ad(0x266)]=!0x1),this.#o(null);}this.#a(s['success']?'report-generated':ad(0x1f0),s);try{await this.#l(ad(0x207),q,s);}catch{}}};customElements['get']('iobroker-webui-report-viewer')||customElements[G(0x1c1)](G(0x1e6),g);export{g as ReportViewer};