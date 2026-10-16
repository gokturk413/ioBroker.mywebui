const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x213))/0x1+-parseInt(I(0x20a))/0x2*(parseInt(I(0x24b))/0x3)+-parseInt(I(0x20b))/0x4*(-parseInt(I(0x216))/0x5)+parseInt(I(0x1c2))/0x6*(parseInt(I(0x25a))/0x7)+parseInt(I(0x1cb))/0x8+parseInt(I(0x24c))/0x9*(-parseInt(I(0x25c))/0xa)+parseInt(I(0x240))/0xb*(-parseInt(I(0x1a6))/0xc);if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x8b597));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-2GGL7RXG.js';import{F as f,G as g}from'../chunk-6L66BOT7.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0x1c4)+l+J(0x264),'g');for(let z of q['matchAll'](s))p+=z[0x1][J(0x1ca)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x1ca)]();return!o||o==='paper'?{'name':K(0x231),'paper':!0x0}:o==='runtime'?{'name':m[K(0x1b5)](String(n??''))?String(n):K(0x231),'paper':!0x1}:{'name':m['test'](o)?o:K(0x231),'paper':!0x1};}var b=class extends h{static [L(0x1c1)]=!0x0;static ['style']=i`
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
    `;static [L(0x205)]=j`
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
    `;#r=0x1;#t;get[L(0x254)](){return this.#t;}set['reportName'](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x243)](){const M=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this['_bar']=this['_getDomElement'](M(0x217)),this[M(0x1a9)]=this[M(0x1f9)]('paper'),this[M(0x24d)]=this[M(0x1f9)]('viewer'),this[M(0x1b0)]=this['_getDomElement']('status'),this['_zoomLabel']=this['_getDomElement'](M(0x1c7)),this[M(0x24d)]['objectType']='report',this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener'](M(0x248),q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(M(0x1bb),()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n('btnGen',()=>this.#x(M(0x20c))),n('btnSave',()=>this.#x('html','file')),g[M(0x1dc)]?.()[M(0x229)](p=>{let q=this['_getDomElement']('btnSave');q&&(q['hidden']=!p);})[M(0x211)](()=>{}),this[M(0x246)]=this['_getDomElement'](M(0x222)),n('btnBar',()=>this['toolbarVisible']=!0x1),n(M(0x222),()=>this[M(0x204)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this['_toolbarWanted']),this.#t&&this.#s();}set['toolbarVisible'](l){const N=L;this[N(0x232)]=!!l,this['_bar']&&(this[N(0x21f)]['hidden']=!l),this[N(0x246)]&&(this[N(0x246)]['hidden']=!!l);}get[L(0x204)](){const O=L;return this['_bar']?!this[O(0x21f)]['hidden']:this[O(0x232)]??!0x0;}async #s(){const P=L;if(!this[P(0x24d)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e(P(0x20e)+this.#t,!0x0);return;}let n=l['settings']??{};this[P(0x1a9)]['style']['width']=n[P(0x1a7)]??'210mm',this['_paper'][P(0x223)][P(0x256)]=n[P(0x256)]??'297mm',this[P(0x24d)]['style']['cssText']='display:block;width:100%;height:100%;',this.#y(n[P(0x1b1)]);let p=n[P(0x1aa)]??{};this.#u(p,n[P(0x22c)]),await this.#g(n['toolbox']),g[P(0x1b2)](),this[P(0x24d)]['screenName']===this.#t?await this['_viewer'][P(0x1a4)]():await this['_viewer'][P(0x1da)](this.#t),this.#c(),this.#l(P(0x1ec),this[P(0x24d)],this['_viewer'][P(0x227)]),this.#a(P(0x202),{'name':this.#t}),await this.#k(n[P(0x1f0)]),this.#o(P(0x24f),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer']['whenDataReady']();q(),g[P(0x1ba)](),this.#o(null),this.#n=s,this.#l(P(0x1ef),this['_viewer'],this[P(0x24d)]['_rootShadow'],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s['length']&&this.#e(P(0x23b)+s[P(0x1c3)](0x0,0x3)['map'](u=>u['id'])[P(0x1f5)](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const Q=L;let p=this[Q(0x24d)]?.['_scriptObject']?.[l];if(typeof p==Q(0x1fc))try{return p(...n);}catch(q){console[Q(0x22f)](Q(0x209)+this.#t+':\x20'+l+Q(0x1ed),q);return;}}#a(l,n,p=!0x1){const R=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[R(0x24d)]??this)[R(0x21e)](q),q;}#u(l,p){const T=L;if(this[T(0x20d)]!==document['body'])return;let q='__report-page-rule';document[T(0x218)](q)?.[T(0x263)]();let u=document[T(0x1d3)](T(0x223));u['id']=q;let z=(l['size']??'A4')+(l[T(0x24a)]==='landscape'?'\x20landscape':''),A=l[T(0x245)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D[T(0x1f4)](T(0x260)),C[T(0x1a2)]||D[T(0x1f4)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C[T(0x1ad)]||D['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',T(0x203)),C[T(0x228)]||D[T(0x1f4)](T(0x262)),u[T(0x21a)]=T(0x244)+z+T(0x25e)+B(A[T(0x221)])+'mm\x20'+B(A['right'])+T(0x258)+B(A[T(0x215)])+'mm\x20'+B(A['left'])+T(0x1e6)+D[T(0x1f5)]('\x20')+T(0x241),document['head'][T(0x1ac)](u);}#d(l){const U=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this['_paper']['style'][U(0x1c6)]=U(0x238)+this.#r+')',this['_paper']['style']['marginBottom']=U(0x1f1)+this[U(0x1a9)]['style']['height']+'\x20*\x20'+(this.#r-0x1)+')',this[U(0x210)][U(0x21a)]=Math['round'](this.#r*0x64)+'%';}#c(){const V=L;let l=this['_getDomElement'](V(0x1e8))['clientWidth']-0x24,n=this[V(0x1a9)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){const W=L;window[W(0x1bc)]();}async #g(p){const X=L;let q=p?.[X(0x1e7)]??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']==='admin',B=this[X(0x21f)]??this[X(0x1f9)]('bar');if(B){for(let C of B['querySelectorAll'](X(0x255)))C['removeAttribute'](X(0x208));for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E[X(0x1bd)]===!0x1?F='hide':!A&&Array['isArray'](E[X(0x212)])&&E['groups'][X(0x214)]&&!E[X(0x212)]['some'](G=>z[X(0x22d)](G))&&(F=E[X(0x25b)]==='disable'?X(0x1fb):'hide'),!!F){for(let G of B['querySelectorAll'](X(0x1ff)+D+'\x22]'))G[X(0x224)](X(0x208),F);}}}}#S(){const Y=L;let l=this['_getDomElement']('rangeKind'),p=this[Y(0x1f9)]('rangeFrom'),q=this['_getDomElement']('rangeTo'),s=this['_getDomElement'](Y(0x225));if(!l)return;let u=this[Y(0x1f9)](Y(0x1a8)),z=A=>{u&&(u['hidden']=!A);};l[Y(0x24e)](Y(0x1f6),()=>{const Z=Y;if(l[Z(0x235)]==='custom'){let A=g['reportRange']??this.#b(Z(0x1eb));p&&!p[Z(0x235)]&&(p[Z(0x235)]=this.#m(A['start'])),q&&!q['value']&&(q[Z(0x235)]=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l[Z(0x235)]==='report'?null:this.#b(l[Z(0x235)]));}),s?.['addEventListener'](Y(0x248),()=>{const a0=Y;let A=p?.[a0(0x235)]?new Date(p[a0(0x235)])[a0(0x1b6)]():NaN,B=q?.['value']?new Date(q[a0(0x235)])[a0(0x1b6)]():NaN;if(!Number['isFinite'](A)||!Number['isFinite'](B)){this.#e(a0(0x234),!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n['getFullYear']()+'-'+p(n['getMonth']()+0x1)+'-'+p(n['getDate']())+'T'+p(n[a1(0x237)]())+':'+p(n['getMinutes']());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s[a2(0x207)](),s['getDate']())[a2(0x1b6)](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case a2(0x1f8):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n['getTime']()};case a2(0x1b8):return{'start':n[a2(0x1b6)]()-0x1e*q,'end':n[a2(0x1b6)]()};case'month':return{'start':new Date(n[a2(0x253)](),n[a2(0x207)](),0x1)['getTime'](),'end':n['getTime']()};case a2(0x23c):return{'start':new Date(n[a2(0x253)](),0x0,0x1)['getTime'](),'end':n[a2(0x1b6)]()};default:return{'start':n['getTime']()-q,'end':n['getTime']()};}}async #f(l){const a3=L;g['setReportRange'](l),this.#e(l?a3(0x266)+new Date(l['start'])['toLocaleString']()+a3(0x1e0)+new Date(l[a3(0x1cd)])[a3(0x1c5)]():'Report\x20default\x20range'),this.#a(a3(0x1be),{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.[a4(0x1b9)]??'')[a4(0x1ca)](),q=(l?.['toState']??'')[a4(0x1ca)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C==a5(0x1dd))return C;let D=Number(C);if(Number[a5(0x1e5)](D)&&String(C)[a5(0x1ca)]()!=='')return D;let E=Date[a5(0x1bf)](String(C));return Number['isFinite'](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F[a6(0x23d)]===D&&F[a6(0x1cd)]===E)return;g['setReportRange']({'start':D,'end':E}),this.#e(a6(0x1e1)+new Date(D)['toLocaleString']()+a6(0x1e0)+new Date(E)['toLocaleString']());let G=this['_getDomElement'](a6(0x1d5));G&&(G[a6(0x235)]=a6(0x220));let H=this['_getDomElement'](a6(0x1a8));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g['getState'](C);u[D]=s(F?.[a7(0x21d)]);}catch{}let E=(G,H)=>{const a8=a7;u[D]=s(H?.['val']),z(!0x0)[a8(0x211)](()=>{});};try{A[a7(0x1f4)]([C,E,await g['subscribeState'](C,E)]);}catch(G){console['warn'](a7(0x1af)+C,G);}};await B(p,a4(0x23d)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{const a9=a4;for(let [C,D]of A)try{g[a9(0x219)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.['dispose'](),this.#h=null;}['connectedCallback'](){const aa=L;super[aa(0x1df)]?.(),this[aa(0x21f)]&&this.#w();}#h=null;#w(){const ab=L;this.#h||(this.#h=g[ab(0x257)]['on'](async l=>{const ac=ab;if(l?.['type']!=='report'||l[ac(0x1c0)]!==this.#t)return;let n;try{n=await g[ac(0x20f)]('report',this.#t);}catch{return;}if(!n)return;let p=n[ac(0x200)]??{};this[ac(0x1a9)]&&(this['_paper'][ac(0x223)][ac(0x1a7)]=p[ac(0x1a7)]??'210mm',this[ac(0x1a9)]['style']['height']=p['height']??ac(0x233)),this.#u(p['page']??{},p['printMargins']),this.#y(p[ac(0x1b1)]),await this.#g(p[ac(0x25f)]),this.#c();}));}#y(l){const ad=L;let n=this['shadowRoot'];if(!n)return;let p=n['getElementById'](ad(0x23a));p||(p=document['createElement']('style'),p['id']='__reportTheme',n[ad(0x1ac)](p));let q=x(l),s=String(l??'')[ad(0x1ca)]()==='runtime'?'':y(q[ad(0x1c0)],g['config']?.['globalStyle']);p['textContent']=':host\x20#paper{'+s+'background:'+(q['paper']?ad(0x1f2):'var(--ui-page,\x20#fff)')+ad(0x230);}#o(l,n){const ae=L;let p=this[ae(0x1f9)](ae(0x23e));if(!p)return;if(l==null){p[ae(0x1b4)]=!0x0;return;}p[ae(0x1b4)]=!0x1;let q=this[ae(0x1f9)]('loadWhat'),s=this['_getDomElement']('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const af=L;let l=this['_getDomElement']('loadLog');l&&(l[af(0x21a)]=''),this.#p=new Set();}#p=new Set();#D(l){const ag=L;let n=this['_getDomElement'](ag(0x1d0));if(!n||this.#p['has'](l))return;this.#p[ag(0x1b7)](l);let p=new Date()['toLocaleTimeString']();n[ag(0x21a)]+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n[ag(0x1d9)];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const ah=c;let u=g[ah(0x249)]();if(!u[ah(0x214)]){this.#o(ah(0x252),'');return;}let z=u[ah(0x1fd)](D=>D[ah(0x1fe)]==='history')[ah(0x214)],A=u['length']-z,B=[];A&&B[ah(0x1f4)](A+'\x20value'+(A>0x1?'s':'')),z&&B['push'](z+ah(0x22b)+(z>0x1?'ies':'y'));let C=Math['round']((Date[ah(0x236)]()-l)/0x3e8);this.#o(ah(0x1e9),B[ah(0x1f5)](ah(0x1e2))+ah(0x265)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D(ah(0x242)+D['id']+(D[ah(0x1fe)]==='history'?ah(0x1a5):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=L;let z=g['namespace']+'.'+f[ai(0x1c8)](q,p),A=async E=>{const aj=ai;try{return(await g[aj(0x1d2)]['getState'](z+'.'+E))?.[aj(0x21d)];}catch{return;}},B=Date['now'](),C=await A(ai(0x1f7)),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(ai(0x1ee)),A('lastRun')]),G=F!=null&&F!==C;if(E===ai(0x21c)){D=!0x0,this.#o(ai(0x23f),ai(0x206));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':ai(0x1cf)};}#e(l,n){const ak=L;this[ak(0x1b0)]&&(this['_status'][ak(0x21a)]=l,this[ak(0x1b0)][ak(0x1b3)][ak(0x1db)](ak(0x1cc),!!n));}async #x(l=L(0x20c),p=L(0x1d1)){const al=L;let q=[al(0x1d6),'btnSave']['map'](z=>this['_getDomElement'](z))['filter'](Boolean);q['forEach'](z=>z[al(0x1e3)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[al(0x1ab)]??void 0x0,'project':g[al(0x1f3)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(al(0x1e4),s)===!0x1){this.#e(al(0x251));return;}if(this.#a(al(0x1de),s,!0x0)['defaultPrevented']){this.#e(al(0x247));return;}if(u[al(0x1d7)]=s[al(0x1d7)],u[al(0x1ce)]=s['range'],this.#n['length']){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[al(0x1f5)](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[al(0x214)]>0x3?al(0x239)+(this.#n['length']-0x3)+'\x20more)':''));}this.#e(al(0x22e)),this.#o(s[al(0x226)]===al(0x261)?al(0x23f):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g[al(0x25d)](s['name'],{'project':s['project'],'format':s[al(0x1d7)],'range':s['range'],'deliver':s[al(0x226)],'timeoutMs':this['generateTimeoutMs'],'theme':document[al(0x22a)][al(0x201)]['webuiTheme']||void 0x0});if(z['viaTrigger']){let B=await this.#E(s[al(0x1c0)],s[al(0x250)]);if(!B['ok'])throw new Error(B[al(0x22f)]||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B['file']??null},this.#e(al(0x21b)+(B[al(0x261)]??''));}else{u={...u,'success':!0x0,'file':z[al(0x261)]??null,'pages':z['pages']??null};let C=z['placeholders']?.[al(0x214)]?al(0x1d4)+z['placeholders'][al(0x214)]+al(0x259):'';this.#e(al(0x1c9)+(z['file']??'')+C);}}catch(D){u['error']=D?.[al(0x1fa)]??String(D),this.#e('Not\x20generated\x20—\x20'+u['error'],!0x0);}finally{q[al(0x1a3)](E=>E[al(0x1e3)]=!0x1),this.#o(null);}this.#a(u[al(0x1d8)]?'report-generated':al(0x1ae),u);try{await this.#l('afterGenerate',s,u);}catch{}}};function c(b,d){b=b-0x1a2;const e=a();let f=e[b];return f;}function a(){const am=['\x20→\x20','Range\x20from\x20states:\x20','\x20and\x20','disabled','beforeGenerate','isFinite','mm;\x20','items','scroll','Loading\x20data…','get','today','onReportLoad','\x20threw','lastStatus','onReportReady','data','calc(','#fff','currentProject','push','join','change','lastRun','yesterday','_getDomElement','message','disable','function','filter','kind','[data-tb=\x22','settings','dataset','report-load','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','toolbarVisible','template','The\x20server\x20is\x20rendering\x20the\x20report.','getMonth','data-tb-off','report\x20','121898DAIgeq','993260lkzOxU','html','parentElement','Report\x20not\x20found:\x20','getWebuiObject','_zoomLabel','catch','groups','426194yElcyS','length','bottom','20KJKyYp','bar','getElementById','unsubscribeState','textContent','Saved\x20on\x20the\x20server:\x20','running','val','dispatchEvent','_bar','report','top','btnShow','style','setAttribute','btnApply','deliver','_rootShadow','pageNumber','then','documentElement','\x20history\x20quer','printMargins','includes','Generating…','error',';color:var(--ui-text,\x20#1d2733);}','light','_toolbarWanted','297mm','Pick\x20both\x20dates.','value','now','getHours','scale(','\x20(+','__reportTheme','No\x20value\x20from:\x20','year','start','load','Generating\x20on\x20the\x20server…','99143YlRLLI','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','still\x20waiting:\x20','ready','@page\x20{\x20size:\x20','margin','_showBtn','Cancelled.','click','outstandingFetches','orientation','21FXxIhL','9QizlKw','_viewer','addEventListener','Building\x20the\x20page…','project','Cancelled\x20by\x20the\x20report\x20script.','Rendering…','getFullYear','reportName','[data-tb]','height','objectsChanged','mm\x20','\x20control(s)\x20shown\x20as\x20placeholders','10913kPCPsR','action','1478990sHzFaU','generateReport',';\x20margin:\x20','toolbox','@top-left\x20{\x20content:\x20\x22\x22;\x20}','file','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','remove','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','\x20outstanding\x20—\x20','Range:\x20','title','forEach','reload','\x20(history)','648yLwmRG','width','rangeBoxes','_paper','page','reportRange','appendChild','url','report-generate-failed','[report]\x20range\x20state\x20','_status','theme','beginFetchTracking','classList','hidden','test','getTime','add','30d','fromState','endFetchTracking','btnFit','print','show','report-range-changed','parse','name','readonly','2202rWhewq','slice','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','toLocaleString','transform','zoomLabel','reportStateBase','Downloaded:\x20','trim','3942400FWnkbG','err','end','range','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','loadLog','download','connection','createElement','\x20—\x20','rangeKind','btnGen','format','success','scrollHeight','setScreenNameAndLoad','toggle','canSaveReportsOnServer','number','report-before-generate','connectedCallback'];a=function(){return am;};return a();}customElements[L(0x1ea)]('iobroker-webui-report-viewer')||customElements['define']('iobroker-webui-report-viewer',b);export{b as ReportViewer};