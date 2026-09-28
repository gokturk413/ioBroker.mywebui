const G=b;(function(k,l){const F=b,n=k();while(!![]){try{const o=-parseInt(F(0x1fa))/0x1+-parseInt(F(0x1eb))/0x2+-parseInt(F(0x1e8))/0x3+-parseInt(F(0x1fb))/0x4*(parseInt(F(0x1cc))/0x5)+parseInt(F(0x1ec))/0x6+parseInt(F(0x1d1))/0x7*(-parseInt(F(0x1ee))/0x8)+-parseInt(F(0x1c4))/0x9*(-parseInt(F(0x1ba))/0xa);if(o===l)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0x2a591));import'./chunk-WPDSHBGY.js';import{q as c,r as e}from'./chunk-THOJBUGZ.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var g=class extends h{static ['readonly']=!0x0;static [G(0x1b5)]=i`
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
    `;static [G(0x1a1)]=j`
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
    `;#o=0x1;#t;get['reportName'](){return this.#t;}set[G(0x21f)](k){this.#t!==k&&(this.#t=k,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[G(0x1ac)](){const H=G;let k=this.#t;this['_parseAttributesToProperties'](),k&&!this.#t&&(this.#t=k),this[H(0x210)]=this['_getDomElement'](H(0x1b9)),this[H(0x1cf)]=this['_getDomElement'](H(0x1c9)),this['_viewer']=this['_getDomElement']('viewer'),this[H(0x19d)]=this[H(0x1d5)](H(0x1a0)),this[H(0x21e)]=this['_getDomElement']('zoomLabel'),this['_viewer'][H(0x238)]=H(0x19c),this.#w();let l=(n,p)=>this['_getDomElement'](n)?.[H(0x1bb)](H(0x1c0),p);l('btnIn',()=>this.#d(this.#o*1.25)),l('btnOut',()=>this.#d(this.#o/1.25)),l(H(0x1f6),()=>this.#c()),l(H(0x22e),()=>this.#x()),this.#_(),l('btnGen',()=>this.#y(H(0x206))),l('btnSave',()=>this.#y('html',H(0x1f8))),e['canSaveReportsOnServer']?.()[H(0x19f)](n=>{const I=H;let p=this['_getDomElement'](I(0x20a));p&&(p['hidden']=!n);})['catch'](()=>{}),this[H(0x1e9)]=this['_getDomElement']('btnShow'),l(H(0x209),()=>this['toolbarVisible']=!0x1),l(H(0x1f2),()=>this[H(0x1ed)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this[H(0x1ed)]=this[H(0x230)]),this.#t&&this.#s();}set['toolbarVisible'](k){const J=G;this['_toolbarWanted']=!!k,this['_bar']&&(this['_bar']['hidden']=!k),this[J(0x1e9)]&&(this[J(0x1e9)]['hidden']=!!k);}get['toolbarVisible'](){const K=G;return this[K(0x210)]?!this['_bar']['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const L=G;if(!this['_viewer'])return;this.#e(''),this.#i('Opening\x20'+this.#t+'…',''),this.#S();let k=await e[L(0x1d7)]('report',this.#t);if(!k){this.#i(null),this.#e(L(0x22b)+this.#t,!0x0);return;}let l=k['settings']??{};this['_paper'][L(0x1b5)][L(0x1f1)]=l['width']??L(0x23f),this[L(0x1cf)]['style']['height']=l['height']??'297mm',this[L(0x219)]['style']['cssText']='display:block;width:100%;height:100%;';let n=l[L(0x1d4)]??{};this.#u(n,l['printMargins']),await this.#g(l[L(0x1f3)]),e['beginFetchTracking'](),this['_viewer'][L(0x1e4)]===this.#t?await this[L(0x219)]['reload']():await this[L(0x219)][L(0x1f4)](this.#t),this.#c(),this.#l(L(0x20c),this[L(0x219)],this[L(0x219)][L(0x232)]),this.#a('report-load',{'name':this.#t}),await this.#k(l['data']),this.#i('Building\x20the\x20page…',''),await this[L(0x219)][L(0x23a)]({'timeout':0x1f40});let p=this.#T(),{missing:q}=await this['_viewer']['whenDataReady']();p(),e['endFetchTracking'](),this.#i(null),this.#n=q,this.#l(L(0x20f),this[L(0x219)],this['_viewer'][L(0x232)],{'missing':q}),this.#a(L(0x1df),{'name':this.#t,'missing':q}),q['length']&&this.#e('No\x20value\x20from:\x20'+q[L(0x1af)](0x0,0x3)['map'](s=>s['id'])[L(0x19e)](',\x20')+(q['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(k,...l){const M=G;let n=this['_viewer']?.['_scriptObject']?.[k];if(typeof n=='function')try{return n(...l);}catch(p){console['error'](M(0x223)+this.#t+':\x20'+k+'\x20threw',p);return;}}#a(k,l,n=!0x1){const N=G;let p=new CustomEvent(k,{'detail':l,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this[N(0x219)]??this)[N(0x224)](p),p;}#u(k,l){const O=G;if(this['parentElement']!==document[O(0x200)])return;let p='__report-page-rule';document[O(0x1a3)](p)?.['remove']();let q=document[O(0x235)]('style');q['id']=p;let u=(k[O(0x214)]??'A4')+(k[O(0x1b4)]==='landscape'?O(0x1b0):''),x=k['margin']??{},y=B=>Number(B)||0x0,z=l??{},A=[];z['date']||A[O(0x204)](O(0x1b6)),z[O(0x245)]||A[O(0x204)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}',O(0x1dd)),z[O(0x1c2)]||A['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',O(0x1b1)),z[O(0x20d)]||A[O(0x204)](O(0x231)),q['textContent']=O(0x213)+u+';\x20margin:\x20'+y(x['top'])+'mm\x20'+y(x['right'])+'mm\x20'+y(x['bottom'])+O(0x1a4)+y(x['left'])+O(0x1c1)+A[O(0x19e)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][O(0x234)](q);}#d(k){const P=G;this.#o=Math[P(0x1fe)](0x4,Math[P(0x1bf)](0.1,k)),this['_paper'][P(0x1b5)][P(0x1cb)]='scale('+this.#o+')',this[P(0x1cf)][P(0x1b5)]['marginBottom']=P(0x1c7)+this[P(0x1cf)][P(0x1b5)][P(0x239)]+'\x20*\x20'+(this.#o-0x1)+')',this['_zoomLabel']['textContent']=Math[P(0x1c5)](this.#o*0x64)+'%';}#c(){const Q=G;let k=this[Q(0x1d5)]('scroll')[Q(0x22c)]-0x24,l=this[Q(0x1cf)][Q(0x228)]()[Q(0x1f1)]/(this.#o||0x1);l>0x0&&this.#d(Math[Q(0x1fe)](0x1,k/l));}#x(){window['print']();}async #g(k){const R=G;let p=k?.['items']??{},q=null;try{q=await e['getCurrentUser']();}catch{}let u=q?.['groups']??[],x=q?.['id']==='admin',y=this['_bar']??this[R(0x1d5)]('bar');if(y){for(let z of y['querySelectorAll']('[data-tb]'))z['removeAttribute'](R(0x1ab));for(let [A,B]of Object[R(0x241)](p)){if(!B)continue;let C=null;if(B[R(0x20b)]===!0x1?C=R(0x1c8):!x&&Array[R(0x21c)](B['groups'])&&B['groups'][R(0x1e7)]&&!B['groups'][R(0x227)](D=>u[R(0x207)](D))&&(C=B['action']==='disable'?R(0x1aa):'hide'),!!C){for(let D of y[R(0x22d)](R(0x1bc)+A+'\x22]'))D['setAttribute']('data-tb-off',C);}}}}#_(){const S=G;let k=this['_getDomElement']('rangeKind'),l=this['_getDomElement'](S(0x1e1)),p=this[S(0x1d5)](S(0x21a)),q=this['_getDomElement']('btnApply');if(!k)return;let s=this[S(0x1d5)]('rangeBoxes'),u=x=>{const T=S;s&&(s[T(0x1f5)]=!x);};k['addEventListener'](S(0x22a),()=>{const U=S;if(k[U(0x221)]==='custom'){let x=e[U(0x203)]??this.#m(U(0x1b3));l&&!l[U(0x221)]&&(l['value']=this.#b(x[U(0x1d3)])),p&&!p[U(0x221)]&&(p[U(0x221)]=this.#b(x['end'])),u(!0x0);return;}u(!0x1),this.#f(k[U(0x221)]==='report'?null:this.#m(k['value']));}),q?.[S(0x1bb)](S(0x1c0),()=>{const V=S;let x=l?.[V(0x221)]?new Date(l['value'])['getTime']():NaN,y=p?.[V(0x221)]?new Date(p[V(0x221)])['getTime']():NaN;if(!Number[V(0x242)](x)||!Number['isFinite'](y)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(x>=y){this.#e(V(0x1c3),!0x0);return;}this.#f({'start':x,'end':y});});}#b(k){const W=G;let l=new Date(k),n=p=>String(p)['padStart'](0x2,'0');return l['getFullYear']()+'-'+n(l['getMonth']()+0x1)+'-'+n(l[W(0x22f)]())+'T'+n(l['getHours']())+':'+n(l[W(0x216)]());}#m(k){const X=G;let l=new Date(),n=q=>new Date(q[X(0x1a9)](),q['getMonth'](),q['getDate']())[X(0x1ae)](),p=0x5265c00;switch(k){case'today':return{'start':n(l),'end':l['getTime']()};case X(0x1ea):return{'start':n(l)-p,'end':n(l)};case'7d':return{'start':l['getTime']()-0x7*p,'end':l[X(0x1ae)]()};case'30d':return{'start':l['getTime']()-0x1e*p,'end':l['getTime']()};case'month':return{'start':new Date(l['getFullYear'](),l[X(0x1d0)](),0x1)['getTime'](),'end':l[X(0x1ae)]()};case X(0x237):return{'start':new Date(l['getFullYear'](),0x0,0x1)['getTime'](),'end':l[X(0x1ae)]()};default:return{'start':l['getTime']()-p,'end':l['getTime']()};}}async #f(k){const Y=G;e['setReportRange'](k),this.#e(k?'Range:\x20'+new Date(k['start'])[Y(0x1de)]()+Y(0x1dc)+new Date(k[Y(0x1d9)])['toLocaleString']():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':k}),await this.#s();}async #k(k){const Z=G;let l=(k?.['fromState']??'')[Z(0x1d2)](),p=(k?.[Z(0x1ca)]??'')[Z(0x1d2)]();if(this.#r&&(this.#r(),this.#r=null),this.#v=null,!l||!p)return;let q=z=>{const a0=Z;if(z==null||z==='')return null;if(typeof z==a0(0x1e2))return z;let A=Number(z);if(Number['isFinite'](A)&&String(z)['trim']()!=='')return A;let B=Date['parse'](String(z));return Number['isFinite'](B)?B:null;},s={'start':null,'end':null},u=async z=>{const a1=Z;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let C=e[a1(0x203)];if(C&&C[a1(0x1d3)]===A&&C['end']===B)return;e['setReportRange']({'start':A,'end':B}),this.#e('Range\x20from\x20states:\x20'+new Date(A)[a1(0x1de)]()+'\x20→\x20'+new Date(B)['toLocaleString']());let D=this[a1(0x1d5)](a1(0x1c6));D&&(D['value']=a1(0x19c));let E=this['_getDomElement']('rangeBoxes');E&&(E[a1(0x1f5)]=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{const a2=Z;try{let C=await e[a2(0x222)](z);s[A]=q(C?.['val']);}catch{}let B=(D,E)=>{const a3=a2;s[A]=q(E?.[a3(0x1b2)]),u(!0x0)['catch'](()=>{});};try{x['push']([z,B,await e['subscribeState'](z,B)]);}catch(D){console['warn'](a2(0x23b)+z,D);}};await y(l,Z(0x1d3)),await y(p,'end'),this.#v={'from':l,'to':p},this.#r=()=>{const a4=Z;for(let [z,A]of x)try{e[a4(0x1ce)](z,A);}catch{}},await u(!0x1);}#v=null;#r=null;['disconnectedCallback'](){super['disconnectedCallback']?.(),this.#r&&(this.#r(),this.#r=null),this.#h?.['dispose'](),this.#h=null;}['connectedCallback'](){super['connectedCallback']?.(),this['_bar']&&this.#w();}#h=null;#w(){const a5=G;this.#h||(this.#h=e[a5(0x1e0)]['on'](async k=>{const a6=a5;if(k?.[a6(0x1f0)]!=='report'||k[a6(0x20e)]!==this.#t)return;let l;try{l=await e['getWebuiObject']('report',this.#t);}catch{return;}if(!l)return;let n=l[a6(0x208)]??{};this['_paper']&&(this[a6(0x1cf)][a6(0x1b5)][a6(0x1f1)]=n['width']??a6(0x23f),this[a6(0x1cf)]['style'][a6(0x239)]=n[a6(0x239)]??a6(0x215)),this.#u(n[a6(0x1d4)]??{},n[a6(0x202)]),await this.#g(n[a6(0x1f3)]),this.#c();}));}#i(k,l){const a7=G;let n=this[a7(0x1d5)]('load');if(!n)return;if(k==null){n[a7(0x1f5)]=!0x0;return;}n['hidden']=!0x1;let p=this['_getDomElement']('loadWhat'),q=this[a7(0x1d5)]('loadDetail');p&&(p[a7(0x1ad)]=k),q&&l!==void 0x0&&(q['textContent']=l);}#S(){let k=this['_getDomElement']('loadLog');k&&(k['textContent']=''),this.#p=new Set();}#p=new Set();#D(k){const a8=G;let l=this['_getDomElement']('loadLog');if(!l||this.#p['has'](k))return;this.#p['add'](k);let n=new Date()[a8(0x23d)]();l[a8(0x1ad)]+=n+'\x20\x20'+k+'\x0a',l[a8(0x1db)]=l['scrollHeight'];}#T(){let k=Date['now'](),l=0xbb8,n=()=>{const a9=b;let q=e['outstandingFetches']();if(!q['length']){this.#i('Rendering…','');return;}let u=q[a9(0x1cd)](A=>A[a9(0x243)]===a9(0x226))['length'],x=q[a9(0x1e7)]-u,y=[];x&&y['push'](x+a9(0x201)+(x>0x1?'s':'')),u&&y[a9(0x204)](u+'\x20history\x20quer'+(u>0x1?a9(0x1da):'y'));let z=Math['round']((Date[a9(0x1ef)]()-k)/0x3e8);this.#i(a9(0x23c),y[a9(0x19e)](a9(0x220))+a9(0x1be)+z+'s');for(let A of q)A[a9(0x244)]>l&&this.#D(a9(0x225)+A['id']+(A[a9(0x243)]===a9(0x226)?a9(0x233):''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #$(k,p,q=0x1d4c0){const aa=G;let u=e[aa(0x246)]+'.'+c['reportStateBase'](p,k),x=async B=>{const ab=aa;try{return(await e[ab(0x1a5)]['getState'](u+'.'+B))?.[ab(0x1b2)];}catch{return;}},y=Date[aa(0x1ef)](),z=await x('lastRun'),A=!0x1;for(;Date['now']()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise['all']([x(aa(0x1f9)),x('lastRun')]),D=C!=null&&C!==z;if(B==='running'){A=!0x0,this.#i(aa(0x1a6),aa(0x21b));continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x('lastFile')};if(B===aa(0x1a2))return{'ok':!0x1,'error':await x('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(k,l){const ac=G;this[ac(0x19d)]&&(this[ac(0x19d)]['textContent']=k,this[ac(0x19d)]['classList'][ac(0x1fd)](ac(0x229),!!l));}async #y(k=G(0x206),l=G(0x205)){const ad=G;let p=['btnGen','btnSave'][ad(0x218)](u=>this['_getDomElement'](u))['filter'](Boolean);p['forEach'](u=>u[ad(0x1e6)]=!0x0);let q={'name':this.#t,'format':k,'deliver':l,'range':e[ad(0x203)]??void 0x0,'project':e['currentProject']},s={'success':!0x1,'format':k,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(ad(0x21d),q)===!0x1){this.#e(ad(0x211));return;}if(this.#a('report-before-generate',q,!0x0)[ad(0x1f7)]){this.#e(ad(0x217));return;}if(s[ad(0x1bd)]=q['format'],s[ad(0x1fc)]=q[ad(0x1fc)],this.#n['length']){let x=this.#n['slice'](0x0,0x3)[ad(0x218)](y=>y['id'])['join'](',\x20');throw new Error(ad(0x1b7)+x+(this.#n[ad(0x1e7)]>0x3?'\x20(+'+(this.#n[ad(0x1e7)]-0x3)+'\x20more)':''));}this.#e(ad(0x240)),this.#i(q['deliver']===ad(0x1f8)?ad(0x1a6):'Generating…',ad(0x236));let u=await e[ad(0x1d6)](q[ad(0x20e)],{'project':q['project'],'format':q['format'],'range':q[ad(0x1fc)],'deliver':q[ad(0x1d8)],'timeoutMs':this['generateTimeoutMs']});if(u['viaTrigger']){let y=await this.#$(q[ad(0x20e)],q['project']);if(!y['ok'])throw new Error(y['error']||ad(0x1a7));s={...s,'success':!0x0,'file':y[ad(0x1f8)]??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(y['file']??''));}else{s={...s,'success':!0x0,'file':u['file']??null,'pages':u['pages']??null};let z=u['placeholders']?.['length']?'\x20—\x20'+u[ad(0x1a8)][ad(0x1e7)]+ad(0x212):'';this.#e('Downloaded:\x20'+(u['file']??'')+z);}}catch(A){s['error']=A?.['message']??String(A),this.#e('Not\x20generated\x20—\x20'+s['error'],!0x0);}finally{p[ad(0x1e5)](B=>B[ad(0x1e6)]=!0x1),this.#i(null);}this.#a(s['success']?ad(0x23e):'report-generate-failed',s);try{await this.#l(ad(0x1ff),q,s);}catch{}}};function a(){const ae=['report-ready','objectsChanged','rangeFrom','number','define','screenName','forEach','disabled','length','573867ZwJxov','_showBtn','yesterday','656174kqhtGT','1128534DLNeXr','toolbarVisible','273256gCaHPD','now','type','width','btnShow','toolbox','setScreenNameAndLoad','hidden','btnFit','defaultPrevented','file','lastStatus','242953SLJhtq','26764xdKJtw','range','toggle','min','afterGenerate','body','\x20value','printMargins','reportRange','push','download','html','includes','settings','btnBar','btnSave','show','onReportLoad','pageNumber','name','onReportReady','_bar','Cancelled\x20by\x20the\x20report\x20script.','\x20control(s)\x20shown\x20as\x20placeholders','@page\x20{\x20size:\x20','size','297mm','getMinutes','Cancelled.','map','_viewer','rangeTo','The\x20server\x20is\x20rendering\x20the\x20report.','isArray','beforeGenerate','_zoomLabel','reportName','\x20and\x20','value','getState','report\x20','dispatchEvent','still\x20waiting:\x20','history','some','getBoundingClientRect','err','change','Report\x20not\x20found:\x20','clientWidth','querySelectorAll','btnPrint','getDate','_toolbarWanted','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','_rootShadow','\x20(history)','appendChild','createElement','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','year','objectType','height','whenScreenReady','[report]\x20range\x20state\x20','Loading\x20data…','toLocaleTimeString','report-generated','210mm','Generating…','entries','isFinite','kind','waitedMs','title','namespace','report','_status','join','then','status','template','error','getElementById','mm\x20','connection','Generating\x20on\x20the\x20server…','the\x20server\x20refused\x20the\x20run','placeholders','getFullYear','disable','data-tb-off','ready','textContent','getTime','slice','\x20landscape','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','val','today','orientation','style','@top-left\x20{\x20content:\x20\x22\x22;\x20}','no\x20value\x20from:\x20','iobroker-webui-report-viewer','bar','11287110VlDFqq','addEventListener','[data-tb=\x22','format','\x20outstanding\x20—\x20','max','click','mm;\x20','url','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','9IHfGkl','round','rangeKind','calc(','hide','paper','toState','transform','55LVtkUs','filter','unsubscribeState','_paper','getMonth','63OsAXtO','trim','start','page','_getDomElement','generateReport','getWebuiObject','deliver','end','ies','scrollTop','\x20→\x20','@top-right\x20{\x20content:\x20\x22\x22;\x20}','toLocaleString'];a=function(){return ae;};return a();}function b(c,d){c=c-0x19c;const e=a();let f=e[c];return f;}customElements['get']('iobroker-webui-report-viewer')||customElements[G(0x1e3)](G(0x1b8),g);export{g as ReportViewer};