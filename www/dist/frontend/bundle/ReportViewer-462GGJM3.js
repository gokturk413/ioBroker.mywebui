const G=b;(function(k,l){const F=b,n=k();while(!![]){try{const o=-parseInt(F(0x1df))/0x1+parseInt(F(0x18d))/0x2+-parseInt(F(0x1cd))/0x3*(-parseInt(F(0x14f))/0x4)+-parseInt(F(0x174))/0x5+-parseInt(F(0x15e))/0x6*(-parseInt(F(0x1cb))/0x7)+-parseInt(F(0x14d))/0x8+parseInt(F(0x135))/0x9;if(o===l)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0x87b49));import'./chunk-YGA5D2BL.js';import{q as c,r as d}from'./chunk-Q4GLWT4I.js';import{BaseCustomWebComponentConstructorAppend as e,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var g=class extends e{static [G(0x178)]=!0x0;static [G(0x1d7)]=i`
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
    `;static [G(0x1aa)]=j`
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
    `;#i=0x1;#t;get[G(0x16a)](){return this.#t;}set['reportName'](k){this.#t!==k&&(this.#t=k,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[G(0x1a9)](){const H=G;let k=this.#t;this['_parseAttributesToProperties'](),k&&!this.#t&&(this.#t=k),this[H(0x15c)]=this['_getDomElement'](H(0x179)),this['_paper']=this[H(0x13a)]('paper'),this[H(0x151)]=this['_getDomElement']('viewer'),this['_status']=this[H(0x13a)](H(0x1da)),this['_zoomLabel']=this[H(0x13a)](H(0x1a2)),this[H(0x151)][H(0x138)]=H(0x190);let l=(n,p)=>this['_getDomElement'](n)?.[H(0x17a)](H(0x164),p);l('btnIn',()=>this.#d(this.#i*1.25)),l(H(0x13f),()=>this.#d(this.#i/1.25)),l(H(0x1be),()=>this.#c()),l('btnPrint',()=>this.#v()),this.#y(),l('btnGen',()=>this.#m('html')),l(H(0x131),()=>this.#m('html',H(0x173))),d[H(0x189)]?.()['then'](n=>{const I=H;let p=this[I(0x13a)]('btnSave');p&&(p['hidden']=!n);})[H(0x1d8)](()=>{}),this['_showBtn']=this[H(0x13a)](H(0x1b5)),l('btnBar',()=>this['toolbarVisible']=!0x1),l(H(0x1b5),()=>this['toolbarVisible']=!0x0),this['_toolbarWanted']!==void 0x0&&(this[H(0x195)]=this[H(0x1db)]),this.#t&&this.#s();}set['toolbarVisible'](k){const J=G;this['_toolbarWanted']=!!k,this['_bar']&&(this['_bar'][J(0x18a)]=!k),this['_showBtn']&&(this[J(0x1a7)][J(0x18a)]=!!k);}get['toolbarVisible'](){const K=G;return this[K(0x15c)]?!this[K(0x15c)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const L=G;if(!this[L(0x151)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#_();let k=await d['getWebuiObject']('report',this.#t);if(!k){this.#o(null),this.#e(L(0x192)+this.#t,!0x0);return;}let l=k['settings']??{};this[L(0x18e)][L(0x1d7)]['width']=l[L(0x175)]??L(0x187),this['_paper']['style']['height']=l['height']??L(0x1af),this['_viewer'][L(0x1d7)]['cssText']='display:block;width:100%;height:100%;';let n=l[L(0x159)]??{};this.#f(n,l[L(0x1d3)]),await this.#w(l['toolbox']),d['beginFetchTracking'](),this['_viewer']['screenName']===this.#t?await this[L(0x151)][L(0x155)]():await this[L(0x151)][L(0x18f)](this.#t),this.#c(),this.#l(L(0x177),this[L(0x151)],this[L(0x151)]['_rootShadow']),this.#a(L(0x19a),{'name':this.#t}),await this.#x(l['data']),this.#o(L(0x188),''),await this['_viewer'][L(0x1b2)]({'timeout':0x1f40});let p=this.#S(),{missing:q}=await this['_viewer'][L(0x1d2)]();p(),d[L(0x150)](),this.#o(null),this.#n=q,this.#l(L(0x170),this['_viewer'],this['_viewer'][L(0x1ba)],{'missing':q}),this.#a('report-ready',{'name':this.#t,'missing':q}),q[L(0x149)]&&this.#e(L(0x1c1)+q[L(0x132)](0x0,0x3)['map'](s=>s['id'])[L(0x1a8)](',\x20')+(q['length']>0x3?'\x20…':''),!0x0);}#n=[];[G(0x144)]=0xea60;#l(k,...l){const M=G;let n=this['_viewer']?.['_scriptObject']?.[k];if(typeof n==M(0x160))try{return n(...l);}catch(p){console['error'](M(0x1cc)+this.#t+':\x20'+k+'\x20threw',p);return;}}#a(k,l,n=!0x1){const N=G;let p=new CustomEvent(k,{'detail':l,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this[N(0x151)]??this)['dispatchEvent'](p),p;}#f(k,l){const O=G;if(this[O(0x152)]!==document[O(0x1d6)])return;let p=O(0x169);document[O(0x163)](p)?.[O(0x16d)]();let q=document[O(0x130)](O(0x1d7));q['id']=p;let u=(k['size']??'A4')+(k['orientation']==='landscape'?'\x20landscape':''),x=k['margin']??{},y=B=>Number(B)||0x0,z=l??{},A=[];z[O(0x1ae)]||A[O(0x197)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),z[O(0x1b4)]||A['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),z[O(0x15b)]||A['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),z[O(0x194)]||A[O(0x197)](O(0x1dd)),q[O(0x1b3)]='@page\x20{\x20size:\x20'+u+';\x20margin:\x20'+y(x[O(0x1b7)])+'mm\x20'+y(x['right'])+O(0x1a0)+y(x[O(0x15a)])+O(0x1a0)+y(x['left'])+O(0x167)+A[O(0x1a8)]('\x20')+O(0x13c),document[O(0x17b)][O(0x181)](q);}#d(k){const P=G;this.#i=Math['min'](0x4,Math['max'](0.1,k)),this['_paper']['style']['transform']=P(0x183)+this.#i+')',this[P(0x18e)]['style'][P(0x143)]='calc('+this['_paper'][P(0x1d7)]['height']+'\x20*\x20'+(this.#i-0x1)+')',this[P(0x1ad)]['textContent']=Math[P(0x1bc)](this.#i*0x64)+'%';}#c(){const Q=G;let k=this[Q(0x13a)]('scroll')[Q(0x15d)]-0x24,l=this['_paper']['getBoundingClientRect']()['width']/(this.#i||0x1);l>0x0&&this.#d(Math[Q(0x1c4)](0x1,k/l));}#v(){window['print']();}async #w(k){const R=G;let p=k?.[R(0x191)]??{},q=null;try{q=await d[R(0x17e)]();}catch{}let u=q?.[R(0x1bb)]??[],x=q?.['id']==='admin',y=this['_bar']??this['_getDomElement']('bar');if(y){for(let z of y[R(0x16e)](R(0x17c)))z['removeAttribute']('data-tb-off');for(let [A,B]of Object['entries'](p)){if(!B)continue;let C=null;if(B[R(0x1e0)]===!0x1?C='hide':!x&&Array['isArray'](B['groups'])&&B['groups']['length']&&!B['groups'][R(0x19d)](D=>u['includes'](D))&&(C=B[R(0x1d4)]==='disable'?'disable':'hide'),!!C){for(let D of y[R(0x16e)](R(0x1d0)+A+'\x22]'))D['setAttribute']('data-tb-off',C);}}}}#y(){const S=G;let k=this['_getDomElement'](S(0x146)),l=this[S(0x13a)]('rangeFrom'),p=this[S(0x13a)]('rangeTo'),q=this['_getDomElement']('btnApply');if(!k)return;let s=this['_getDomElement']('rangeBoxes'),u=x=>{const T=S;s&&(s[T(0x18a)]=!x);};k['addEventListener']('change',()=>{const U=S;if(k['value']===U(0x162)){let x=d[U(0x1c0)]??this.#u(U(0x176));l&&!l['value']&&(l[U(0x1b0)]=this.#p(x[U(0x154)])),p&&!p['value']&&(p[U(0x1b0)]=this.#p(x['end'])),u(!0x0);return;}u(!0x1),this.#g(k[U(0x1b0)]==='report'?null:this.#u(k[U(0x1b0)]));}),q?.['addEventListener'](S(0x164),()=>{const V=S;let x=l?.['value']?new Date(l[V(0x1b0)])['getTime']():NaN,y=p?.[V(0x1b0)]?new Date(p[V(0x1b0)])['getTime']():NaN;if(!Number['isFinite'](x)||!Number['isFinite'](y)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(x>=y){this.#e(V(0x13e),!0x0);return;}this.#g({'start':x,'end':y});});}#p(k){const W=G;let l=new Date(k),n=p=>String(p)[W(0x145)](0x2,'0');return l[W(0x137)]()+'-'+n(l['getMonth']()+0x1)+'-'+n(l['getDate']())+'T'+n(l[W(0x153)]())+':'+n(l[W(0x1e1)]());}#u(k){const X=G;let l=new Date(),n=q=>new Date(q['getFullYear'](),q[X(0x186)](),q['getDate']())['getTime'](),p=0x5265c00;switch(k){case'today':return{'start':n(l),'end':l['getTime']()};case'yesterday':return{'start':n(l)-p,'end':n(l)};case'7d':return{'start':l[X(0x15f)]()-0x7*p,'end':l['getTime']()};case'30d':return{'start':l[X(0x15f)]()-0x1e*p,'end':l['getTime']()};case'month':return{'start':new Date(l[X(0x137)](),l[X(0x186)](),0x1)['getTime'](),'end':l['getTime']()};case'year':return{'start':new Date(l['getFullYear'](),0x0,0x1)[X(0x15f)](),'end':l['getTime']()};default:return{'start':l['getTime']()-p,'end':l[X(0x15f)]()};}}async #g(k){const Y=G;d[Y(0x14c)](k),this.#e(k?'Range:\x20'+new Date(k[Y(0x154)])['toLocaleString']()+'\x20→\x20'+new Date(k[Y(0x142)])[Y(0x157)]():Y(0x1d9)),this.#a('report-range-changed',{'range':k}),await this.#s();}async #x(k){const Z=G;let l=(k?.[Z(0x161)]??'')[Z(0x148)](),p=(k?.[Z(0x1bf)]??'')[Z(0x148)]();if(this.#r&&(this.#r(),this.#r=null),this.#b=null,!l||!p)return;let q=z=>{const a0=Z;if(z==null||z==='')return null;if(typeof z==a0(0x140))return z;let A=Number(z);if(Number[a0(0x14e)](A)&&String(z)[a0(0x148)]()!=='')return A;let B=Date['parse'](String(z));return Number['isFinite'](B)?B:null;},s={'start':null,'end':null},u=async z=>{const a1=Z;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e(a1(0x1ca),!0x0);return;}let C=d[a1(0x1c0)];if(C&&C[a1(0x154)]===A&&C['end']===B)return;d[a1(0x14c)]({'start':A,'end':B}),this.#e('Range\x20from\x20states:\x20'+new Date(A)[a1(0x157)]()+a1(0x1cf)+new Date(B)[a1(0x157)]());let D=this[a1(0x13a)](a1(0x146));D&&(D['value']=a1(0x190));let E=this[a1(0x13a)]('rangeBoxes');E&&(E['hidden']=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{const a2=Z;try{let C=await d[a2(0x17f)](z);s[A]=q(C?.[a2(0x16c)]);}catch{}let B=(D,E)=>{const a3=a2;s[A]=q(E?.['val']),u(!0x0)[a3(0x1d8)](()=>{});};try{x['push']([z,B,await d[a2(0x18b)](z,B)]);}catch(D){console[a2(0x1d5)](a2(0x13b)+z,D);}};await y(l,'start'),await y(p,'end'),this.#b={'from':l,'to':p},this.#r=()=>{const a4=Z;for(let [z,A]of x)try{d[a4(0x156)](z,A);}catch{}},await u(!0x1);}#b=null;#r=null;[G(0x141)](){const a5=G;super[a5(0x141)]?.(),this.#r&&(this.#r(),this.#r=null);}#o(k,l){const a6=G;let n=this[a6(0x13a)](a6(0x1ce));if(!n)return;if(k==null){n[a6(0x18a)]=!0x0;return;}n[a6(0x18a)]=!0x1;let p=this['_getDomElement']('loadWhat'),q=this[a6(0x13a)](a6(0x1a1));p&&(p['textContent']=k),q&&l!==void 0x0&&(q[a6(0x1b3)]=l);}#_(){let k=this['_getDomElement']('loadLog');k&&(k['textContent']=''),this.#h=new Set();}#h=new Set();#k(k){const a7=G;let l=this['_getDomElement']('loadLog');if(!l||this.#h['has'](k))return;this.#h['add'](k);let n=new Date()['toLocaleTimeString']();l[a7(0x1b3)]+=n+'\x20\x20'+k+'\x0a',l[a7(0x1ab)]=l[a7(0x19b)];}#S(){let k=Date['now'](),l=0xbb8,n=()=>{const a8=b;let q=d[a8(0x199)]();if(!q[a8(0x149)]){this.#o(a8(0x166),'');return;}let u=q[a8(0x136)](A=>A[a8(0x165)]===a8(0x147))['length'],x=q[a8(0x149)]-u,y=[];x&&y['push'](x+'\x20value'+(x>0x1?'s':'')),u&&y[a8(0x197)](u+a8(0x158)+(u>0x1?a8(0x182):'y'));let z=Math['round']((Date['now']()-k)/0x3e8);this.#o(a8(0x17d),y['join']('\x20and\x20')+a8(0x1c2)+z+'s');for(let A of q)A[a8(0x1b8)]>l&&this.#k(a8(0x172)+A['id']+(A['kind']==='history'?'\x20(history)':''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #D(k,p,q=0x1d4c0){const aa=G;let u=d['namespace']+'.'+c['reportStateBase'](p,k),x=async B=>{const a9=b;try{return(await d[a9(0x198)]['getState'](u+'.'+B))?.['val'];}catch{return;}},y=Date[aa(0x1d1)](),z=await x('lastRun'),A=!0x1;for(;Date['now']()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise[aa(0x1c9)]([x(aa(0x193)),x(aa(0x180))]),D=C!=null&&C!==z;if(B==='running'){A=!0x0,this.#o('Generating\x20on\x20the\x20server…',aa(0x1a6));continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x(aa(0x13d))};if(B===aa(0x1a3))return{'ok':!0x1,'error':await x(aa(0x1dc))};}}return{'ok':!0x1,'error':aa(0x19f)};}#e(k,l){const ab=G;this[ab(0x1a4)]&&(this[ab(0x1a4)]['textContent']=k,this['_status'][ab(0x184)]['toggle']('err',!!l));}async #m(k=G(0x1b6),l='download'){const ac=G;let p=['btnGen','btnSave'][ac(0x1c7)](u=>this['_getDomElement'](u))['filter'](Boolean);p['forEach'](u=>u[ac(0x1bd)]=!0x0);let q={'name':this.#t,'format':k,'deliver':l,'range':d['reportRange']??void 0x0,'project':d['currentProject']},s={'success':!0x1,'format':k,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(ac(0x1c5),q)===!0x1){this.#e(ac(0x1b9));return;}if(this.#a('report-before-generate',q,!0x0)[ac(0x1ac)]){this.#e(ac(0x134));return;}if(s[ac(0x18c)]=q['format'],s[ac(0x16f)]=q[ac(0x16f)],this.#n[ac(0x149)]){let x=this.#n['slice'](0x0,0x3)[ac(0x1c7)](y=>y['id'])[ac(0x1a8)](',\x20');throw new Error(ac(0x1c3)+x+(this.#n[ac(0x149)]>0x3?'\x20(+'+(this.#n[ac(0x149)]-0x3)+ac(0x171):''));}this.#e('Generating…'),this.#o(q['deliver']==='file'?'Generating\x20on\x20the\x20server…':ac(0x1b1),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let u=await d['generateReport'](q['name'],{'project':q[ac(0x1a5)],'format':q[ac(0x18c)],'range':q['range'],'deliver':q[ac(0x19c)],'timeoutMs':this['generateTimeoutMs']});if(u[ac(0x133)]){let y=await this.#D(q[ac(0x16b)],q['project']);if(!y['ok'])throw new Error(y['error']||ac(0x1de));s={...s,'success':!0x0,'file':y[ac(0x173)]??null},this.#e(ac(0x14a)+(y[ac(0x173)]??''));}else{s={...s,'success':!0x0,'file':u[ac(0x173)]??null,'pages':u['pages']??null};let z=u['placeholders']?.[ac(0x149)]?ac(0x1c6)+u['placeholders']['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e(ac(0x19e)+(u['file']??'')+z);}}catch(A){s[ac(0x1a3)]=A?.[ac(0x185)]??String(A),this.#e('Not\x20generated\x20—\x20'+s['error'],!0x0);}finally{p['forEach'](B=>B[ac(0x1bd)]=!0x1),this.#o(null);}this.#a(s['success']?'report-generated':ac(0x14b),s);try{await this.#l(ac(0x139),q,s);}catch{}}};customElements[G(0x196)](G(0x1c8))||customElements[G(0x168)]('iobroker-webui-report-viewer',g);function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}export{g as ReportViewer};function a(){const ad=['_viewer','parentElement','getHours','start','reload','unsubscribeState','toLocaleString','\x20history\x20quer','page','bottom','url','_bar','clientWidth','439962ZSouPo','getTime','function','fromState','custom','getElementById','click','kind','Rendering…','mm;\x20','define','__report-page-rule','reportName','name','val','remove','querySelectorAll','range','onReportReady','\x20more)','still\x20waiting:\x20','file','1799505kYMLfL','width','today','onReportLoad','readonly','bar','addEventListener','head','[data-tb]','Loading\x20data…','getCurrentUser','getState','lastRun','appendChild','ies','scale(','classList','message','getMonth','210mm','Building\x20the\x20page…','canSaveReportsOnServer','hidden','subscribeState','format','979736WBRTCe','_paper','setScreenNameAndLoad','report','items','Report\x20not\x20found:\x20','lastStatus','pageNumber','toolbarVisible','get','push','connection','outstandingFetches','report-load','scrollHeight','deliver','some','Downloaded:\x20','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','mm\x20','loadDetail','zoomLabel','error','_status','project','The\x20server\x20is\x20rendering\x20the\x20report.','_showBtn','join','ready','template','scrollTop','defaultPrevented','_zoomLabel','date','297mm','value','Generating…','whenScreenReady','textContent','title','btnShow','html','top','waitedMs','Cancelled\x20by\x20the\x20report\x20script.','_rootShadow','groups','round','disabled','btnFit','toState','reportRange','No\x20value\x20from:\x20','\x20outstanding\x20—\x20','no\x20value\x20from:\x20','min','beforeGenerate','\x20—\x20','map','iobroker-webui-report-viewer','all','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','7ulglZm','report\x20','15yxUcfe','load','\x20→\x20','[data-tb=\x22','now','whenDataReady','printMargins','action','warn','body','style','catch','Report\x20default\x20range','status','_toolbarWanted','lastError','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','the\x20server\x20refused\x20the\x20run','601867iBdYub','show','getMinutes','createElement','btnSave','slice','viaTrigger','Cancelled.','14063490QcoNAY','filter','getFullYear','objectType','afterGenerate','_getDomElement','[report]\x20range\x20state\x20','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','lastFile','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','btnOut','number','disconnectedCallback','end','marginBottom','generateTimeoutMs','padStart','rangeKind','history','trim','length','Saved\x20on\x20the\x20server:\x20','report-generate-failed','setReportRange','8519064zVEPoG','isFinite','365356UOORqk','endFetchTracking'];a=function(){return ad;};return a();}