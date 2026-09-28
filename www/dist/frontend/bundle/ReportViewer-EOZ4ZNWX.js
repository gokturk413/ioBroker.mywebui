const G=b;function b(c,d){c=c-0x1e1;const e=a();let f=e[c];return f;}(function(k,l){const F=b,n=k();while(!![]){try{const o=-parseInt(F(0x268))/0x1+-parseInt(F(0x21c))/0x2+parseInt(F(0x26f))/0x3*(parseInt(F(0x26b))/0x4)+-parseInt(F(0x249))/0x5*(parseInt(F(0x22f))/0x6)+parseInt(F(0x1e9))/0x7+parseInt(F(0x1fe))/0x8*(parseInt(F(0x240))/0x9)+parseInt(F(0x22e))/0xa*(-parseInt(F(0x1f9))/0xb);if(o===l)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0x7a417));import'./chunk-DV5UA2CC.js';import{p as c,q as e}from'./chunk-Y42FM7CC.js';function a(){const a8=['report-load','399246ksOied','range','min','no\x20value\x20from:\x20','slice','month','\x20—\x20','error','height','change','report-generated','date','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','report-before-generate','5747119pVacoC','file','_viewer','297mm','toLocaleString','btnApply','has','placeholders','clientWidth','\x20value','load','_paper','lastRun','getBoundingClientRect','disconnectedCallback','right','11rqgKPR','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','__report-page-rule','setScreenNameAndLoad','namespace','3320zSJaHe','_status','still\x20waiting:\x20','bar','settings','hidden','report-ready','reload','join','Not\x20generated\x20—\x20','transform','waitedMs','today','btnSave','Saved\x20on\x20the\x20server:\x20','message','pages','value','dispatchEvent','get','getMonth','getFullYear','display:block;width:100%;height:100%;','toState','Rendering…','trim','connection','the\x20server\x20refused\x20the\x20run','paper','toLocaleTimeString','22400tvhzDr','bottom','addEventListener','_rootShadow','_zoomLabel','Generating…','isFinite','_toolbarWanted','readonly','setReportRange','val','push','then','custom','generateTimeoutMs','Generating\x20on\x20the\x20server…','\x20and\x20','scale(','9679980uFUUBu','2574tTxqfv','project','canSaveReportsOnServer','lastStatus','name','\x20control(s)\x20shown\x20as\x20placeholders','reportName','No\x20value\x20from:\x20','btnGen','viewer','toolbarVisible','style','now','Loading\x20data…','fromState','start','btnBar','14031ESiGjE','\x20(history)','loadLog','length','getState','margin','forEach','head','status','6705tUVibM','catch','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','loadDetail','btnFit','orientation','_showBtn','end','padStart','year','click','history','Pick\x20both\x20dates.','_getDomElement','\x20→\x20','mm\x20','getElementById','ready','btnShow','createElement','deliver','data','format','Building\x20the\x20page…','_bar','\x20more)','getTime','reportRange','textContent','iobroker-webui-report-viewer','rangeTo','344330NSQWCL','\x20(+','left','28YKhAop','210mm','title'];a=function(){return a8;};return a();}import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var g=class extends h{static [G(0x224)]=!0x0;static ['style']=i`
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
            <button id="btnOut" class="iconbtn" title="Zoom out" aria-label="Zoom out">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M8 11h6M20 20l-4.5-4.5"/></svg></button>
            <span id="zoomLabel">100%</span>
            <button id="btnIn" class="iconbtn" title="Zoom in" aria-label="Zoom in">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M8 11h6M11 8v6M20 20l-4.5-4.5"/></svg></button>
            <button id="btnFit" title="Fit to width">
                <svg viewBox="0 0 24 24"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/></svg>Fit</button>
            <div class="sep"></div>
            <!-- Time range: a report that reads history is meaningless without one, and the
                 range belongs to the REPORT, not to a picker someone remembered to wire up.
                 Choosing here reloads the report, so tables are rebuilt with the new data.
                 The two date boxes appear only for "Custom": a range needs a start AND an end,
                 and for a named range the dates are implied. -->
            <span class="icon" title="Time range">
                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span>
            <select id="rangeKind" title="Time range">
                <option value="report">Report default</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="month">This month</option>
                <option value="year">This year</option>
                <option value="custom">Custom…</option>
            </select>
            <span class="range" id="rangeBoxes" hidden>
                <input id="rangeFrom" type="datetime-local" title="From (start of the range)">
                <span class="arrow">→</span>
                <input id="rangeTo" type="datetime-local" title="To (end of the range)">
                <button id="btnApply" title="Load the report for this range">
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>Apply</button>
            </span>
            <div class="sep"></div>
            <button id="btnPrint" title="Print / save as PDF">
                <svg viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2"/><rect x="8" y="14" width="8" height="7"/></svg>Print</button>
            <button id="btnGen" class="primary" title="Generate and download to this computer">
                <svg viewBox="0 0 24 24"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></svg>Generate</button>
            <button id="btnSave" hidden title="Generate and save to the report's output folder on the server">
                <svg viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>Save on server</button>
            <div class="sep"></div>
            <span id="status"></span>
            <span class="grow"></span>
            <button id="btnBar" class="iconbtn" title="Hide toolbar" aria-label="Hide toolbar">
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
    `;#o=0x1;#t;get[G(0x235)](){return this.#t;}set['reportName'](k){this.#t!==k&&(this.#t=k,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[G(0x25a)](){const H=G;let k=this.#t;this['_parseAttributesToProperties'](),k&&!this.#t&&(this.#t=k),this['_bar']=this[H(0x256)](H(0x201)),this['_paper']=this[H(0x256)](H(0x21a)),this['_viewer']=this[H(0x256)](H(0x238)),this[H(0x1ff)]=this['_getDomElement'](H(0x248)),this['_zoomLabel']=this[H(0x256)]('zoomLabel'),this[H(0x1eb)]['objectType']='report';let l=(n,p)=>this['_getDomElement'](n)?.[H(0x21e)](H(0x253),p);l('btnIn',()=>this.#h(this.#o*1.25)),l('btnOut',()=>this.#h(this.#o/1.25)),l(H(0x24d),()=>this.#c()),l('btnPrint',()=>this.#v()),this.#w(),l(H(0x237),()=>this.#m('html')),l(H(0x20b),()=>this.#m('html','file')),e[H(0x231)]?.()[H(0x228)](n=>{const I=H;let p=this['_getDomElement'](I(0x20b));p&&(p[I(0x203)]=!n);})[H(0x24a)](()=>{}),this['_showBtn']=this[H(0x256)](H(0x25b)),l(H(0x23f),()=>this[H(0x239)]=!0x1),l('btnShow',()=>this['toolbarVisible']=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this[H(0x223)]),this.#t&&this.#s();}set[G(0x239)](k){const J=G;this[J(0x223)]=!!k,this[J(0x261)]&&(this[J(0x261)][J(0x203)]=!k),this['_showBtn']&&(this[J(0x24f)][J(0x203)]=!!k);}get['toolbarVisible'](){const K=G;return this[K(0x261)]?!this[K(0x261)][K(0x203)]:this['_toolbarWanted']??!0x0;}async #s(){const L=G;if(!this['_viewer'])return;this.#e(''),this.#i('Opening\x20'+this.#t+'…',''),this.#x();let k=await e['getWebuiObject']('report',this.#t);if(!k){this.#i(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let l=k[L(0x202)]??{};this[L(0x1f4)][L(0x23a)]['width']=l['width']??L(0x26c),this[L(0x1f4)][L(0x23a)]['height']=l['height']??L(0x1ec),this[L(0x1eb)][L(0x23a)]['cssText']=L(0x214);let n=l['page']??{};this.#f(n,l['printMargins']),e['beginFetchTracking'](),this['_viewer']['screenName']===this.#t?await this['_viewer'][L(0x205)]():await this['_viewer'][L(0x1fc)](this.#t),this.#c(),this.#l('onReportLoad',this['_viewer'],this['_viewer'][L(0x21f)]),this.#a(L(0x26e),{'name':this.#t}),await this.#y(l[L(0x25e)]),this.#i(L(0x260),''),await this[L(0x1eb)]['whenScreenReady']({'timeout':0x1f40});let p=this.#k(),{missing:q}=await this[L(0x1eb)]['whenDataReady']();p(),e['endFetchTracking'](),this.#i(null),this.#n=q,this.#l('onReportReady',this[L(0x1eb)],this['_viewer']['_rootShadow'],{'missing':q}),this.#a(L(0x204),{'name':this.#t,'missing':q}),q[L(0x243)]&&this.#e(L(0x236)+q[L(0x273)](0x0,0x3)['map'](s=>s['id'])[L(0x206)](',\x20')+(q['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(k,...l){let n=this['_viewer']?.['_scriptObject']?.[k];if(typeof n=='function')try{return n(...l);}catch(p){console['error']('report\x20'+this.#t+':\x20'+k+'\x20threw',p);return;}}#a(k,l,n=!0x1){const M=G;let p=new CustomEvent(k,{'detail':l,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this['_viewer']??this)[M(0x210)](p),p;}#f(k,l){const N=G;let p=N(0x1fb);document[N(0x259)](p)?.['remove']();let q=document[N(0x25c)](N(0x23a));q['id']=p;let u=(k['size']??'A4')+(k[N(0x24e)]==='landscape'?'\x20landscape':''),x=k[N(0x245)]??{},y=B=>Number(B)||0x0,z=l??{},A=[];z[N(0x1e6)]||A[N(0x227)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),z[N(0x26d)]||A['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),z['url']||A['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),z['pageNumber']||A[N(0x227)](N(0x1e7)),q[N(0x265)]='@page\x20{\x20size:\x20'+u+';\x20margin:\x20'+y(x['top'])+N(0x258)+y(x[N(0x1f8)])+N(0x258)+y(x[N(0x21d)])+N(0x258)+y(x[N(0x26a)])+'mm;\x20'+A[N(0x206)]('\x20')+N(0x1fa),document[N(0x247)]['appendChild'](q);}#h(k){const O=G;this.#o=Math['min'](0x4,Math['max'](0.1,k)),this[O(0x1f4)]['style'][O(0x208)]=O(0x22d)+this.#o+')',this[O(0x1f4)][O(0x23a)]['marginBottom']='calc('+this[O(0x1f4)]['style'][O(0x1e3)]+'\x20*\x20'+(this.#o-0x1)+')',this[O(0x220)]['textContent']=Math['round'](this.#o*0x64)+'%';}#c(){const P=G;let k=this['_getDomElement']('scroll')[P(0x1f1)]-0x24,l=this['_paper'][P(0x1f6)]()['width']/(this.#o||0x1);l>0x0&&this.#h(Math[P(0x271)](0x1,k/l));}#v(){window['print']();}#w(){const Q=G;let k=this[Q(0x256)]('rangeKind'),l=this['_getDomElement']('rangeFrom'),p=this['_getDomElement'](Q(0x267)),q=this[Q(0x256)](Q(0x1ee));if(!k)return;let s=this['_getDomElement']('rangeBoxes'),u=x=>{s&&(s['hidden']=!x);};k['addEventListener'](Q(0x1e4),()=>{const R=Q;if(k[R(0x20f)]===R(0x229)){let x=e[R(0x264)]??this.#u(R(0x20a));l&&!l['value']&&(l['value']=this.#p(x['start'])),p&&!p[R(0x20f)]&&(p['value']=this.#p(x[R(0x250)])),u(!0x0);return;}u(!0x1),this.#g(k[R(0x20f)]==='report'?null:this.#u(k['value']));}),q?.['addEventListener'](Q(0x253),()=>{const S=Q;let x=l?.[S(0x20f)]?new Date(l['value'])['getTime']():NaN,y=p?.['value']?new Date(p['value'])['getTime']():NaN;if(!Number[S(0x222)](x)||!Number['isFinite'](y)){this.#e(S(0x255),!0x0);return;}if(x>=y){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#g({'start':x,'end':y});});}#p(k){const T=G;let l=new Date(k),n=p=>String(p)[T(0x251)](0x2,'0');return l['getFullYear']()+'-'+n(l[T(0x212)]()+0x1)+'-'+n(l['getDate']())+'T'+n(l['getHours']())+':'+n(l['getMinutes']());}#u(k){const U=G;let l=new Date(),n=q=>new Date(q['getFullYear'](),q['getMonth'](),q['getDate']())['getTime'](),p=0x5265c00;switch(k){case'today':return{'start':n(l),'end':l['getTime']()};case'yesterday':return{'start':n(l)-p,'end':n(l)};case'7d':return{'start':l['getTime']()-0x7*p,'end':l[U(0x263)]()};case'30d':return{'start':l['getTime']()-0x1e*p,'end':l['getTime']()};case U(0x274):return{'start':new Date(l['getFullYear'](),l[U(0x212)](),0x1)[U(0x263)](),'end':l['getTime']()};case U(0x252):return{'start':new Date(l[U(0x213)](),0x0,0x1)[U(0x263)](),'end':l[U(0x263)]()};default:return{'start':l[U(0x263)]()-p,'end':l['getTime']()};}}async #g(k){const V=G;e['setReportRange'](k),this.#e(k?'Range:\x20'+new Date(k[V(0x23e)])[V(0x1ed)]()+V(0x257)+new Date(k[V(0x250)])['toLocaleString']():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':k}),await this.#s();}async #y(k){const W=G;let l=(k?.[W(0x23d)]??'')['trim'](),p=(k?.[W(0x215)]??'')['trim']();if(this.#r&&(this.#r(),this.#r=null),this.#b=null,!l||!p)return;let q=z=>{const X=W;if(z==null||z==='')return null;if(typeof z=='number')return z;let A=Number(z);if(Number[X(0x222)](A)&&String(z)[X(0x217)]()!=='')return A;let B=Date['parse'](String(z));return Number['isFinite'](B)?B:null;},s={'start':null,'end':null},u=async z=>{const Y=W;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let C=e['reportRange'];if(C&&C['start']===A&&C[Y(0x250)]===B)return;e[Y(0x225)]({'start':A,'end':B}),this.#e('Range\x20from\x20states:\x20'+new Date(A)[Y(0x1ed)]()+'\x20→\x20'+new Date(B)['toLocaleString']());let D=this[Y(0x256)]('rangeKind');D&&(D[Y(0x20f)]='report');let E=this['_getDomElement']('rangeBoxes');E&&(E['hidden']=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{try{let C=await e['getState'](z);s[A]=q(C?.['val']);}catch{}let B=(D,E)=>{const Z=b;s[A]=q(E?.['val']),u(!0x0)[Z(0x24a)](()=>{});};try{x['push']([z,B,await e['subscribeState'](z,B)]);}catch(D){console['warn']('[report]\x20range\x20state\x20'+z,D);}};await y(l,'start'),await y(p,W(0x250)),this.#b={'from':l,'to':p},this.#r=()=>{for(let [z,A]of x)try{e['unsubscribeState'](z,A);}catch{}},await u(!0x1);}#b=null;#r=null;[G(0x1f7)](){super['disconnectedCallback']?.(),this.#r&&(this.#r(),this.#r=null);}#i(k,l){const a0=G;let n=this['_getDomElement'](a0(0x1f3));if(!n)return;if(k==null){n['hidden']=!0x0;return;}n[a0(0x203)]=!0x1;let p=this['_getDomElement']('loadWhat'),q=this['_getDomElement'](a0(0x24c));p&&(p[a0(0x265)]=k),q&&l!==void 0x0&&(q[a0(0x265)]=l);}#x(){const a1=G;let k=this['_getDomElement']('loadLog');k&&(k[a1(0x265)]=''),this.#d=new Set();}#d=new Set();#_(k){const a2=G;let l=this[a2(0x256)](a2(0x242));if(!l||this.#d[a2(0x1ef)](k))return;this.#d['add'](k);let n=new Date()[a2(0x21b)]();l[a2(0x265)]+=n+'\x20\x20'+k+'\x0a',l['scrollTop']=l['scrollHeight'];}#k(){let k=Date['now'](),l=0xbb8,n=()=>{const a3=b;let q=e['outstandingFetches']();if(!q[a3(0x243)]){this.#i(a3(0x216),'');return;}let u=q['filter'](A=>A['kind']==='history')[a3(0x243)],x=q[a3(0x243)]-u,y=[];x&&y[a3(0x227)](x+a3(0x1f2)+(x>0x1?'s':'')),u&&y[a3(0x227)](u+'\x20history\x20quer'+(u>0x1?'ies':'y'));let z=Math['round']((Date['now']()-k)/0x3e8);this.#i(a3(0x23c),y['join'](a3(0x22c))+'\x20outstanding\x20—\x20'+z+'s');for(let A of q)A[a3(0x209)]>l&&this.#_(a3(0x200)+A['id']+(A['kind']===a3(0x254)?a3(0x241):''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #S(k,p,q=0x1d4c0){const a4=G;let u=e[a4(0x1fd)]+'.'+c['reportStateBase'](p,k),x=async B=>{const a5=a4;try{return(await e[a5(0x218)][a5(0x244)](u+'.'+B))?.[a5(0x226)];}catch{return;}},y=Date[a4(0x23b)](),z=await x(a4(0x1f5)),A=!0x1;for(;Date[a4(0x23b)]()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise['all']([x(a4(0x232)),x(a4(0x1f5))]),D=C!=null&&C!==z;if(B==='running'){A=!0x0,this.#i(a4(0x22b),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x('lastFile')};if(B===a4(0x1e2))return{'ok':!0x1,'error':await x('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(k,l){const a6=G;this['_status']&&(this[a6(0x1ff)][a6(0x265)]=k,this[a6(0x1ff)]['classList']['toggle']('err',!!l));}async #m(k='html',l='download'){const a7=G;let p=[a7(0x237),a7(0x20b)]['map'](u=>this['_getDomElement'](u))['filter'](Boolean);p['forEach'](u=>u['disabled']=!0x0);let q={'name':this.#t,'format':k,'deliver':l,'range':void 0x0,'project':e['currentProject']},s={'success':!0x1,'format':k,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',q)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a(a7(0x1e8),q,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(s[a7(0x25f)]=q['format'],s[a7(0x270)]=q['range'],this.#n[a7(0x243)]){let x=this.#n['slice'](0x0,0x3)['map'](y=>y['id'])['join'](',\x20');throw new Error(a7(0x272)+x+(this.#n['length']>0x3?a7(0x269)+(this.#n['length']-0x3)+a7(0x262):''));}this.#e(a7(0x221)),this.#i(q[a7(0x25d)]==='file'?'Generating\x20on\x20the\x20server…':a7(0x221),a7(0x24b));let u=await e['generateReport'](q[a7(0x233)],{'project':q[a7(0x230)],'format':q[a7(0x25f)],'range':q[a7(0x270)],'deliver':q[a7(0x25d)],'timeoutMs':this[a7(0x22a)]});if(u['viaTrigger']){let y=await this.#S(q[a7(0x233)],q['project']);if(!y['ok'])throw new Error(y['error']||a7(0x219));s={...s,'success':!0x0,'file':y[a7(0x1ea)]??null},this.#e(a7(0x20c)+(y[a7(0x1ea)]??''));}else{s={...s,'success':!0x0,'file':u['file']??null,'pages':u[a7(0x20e)]??null};let z=u['placeholders']?.['length']?a7(0x1e1)+u[a7(0x1f0)]['length']+a7(0x234):'';this.#e('Downloaded:\x20'+(u['file']??'')+z);}}catch(A){s[a7(0x1e2)]=A?.[a7(0x20d)]??String(A),this.#e(a7(0x207)+s['error'],!0x0);}finally{p[a7(0x246)](B=>B['disabled']=!0x1),this.#i(null);}this.#a(s['success']?a7(0x1e5):'report-generate-failed',s);try{await this.#l('afterGenerate',q,s);}catch{}}};customElements[G(0x211)]('iobroker-webui-report-viewer')||customElements['define'](G(0x266),g);export{g as ReportViewer};