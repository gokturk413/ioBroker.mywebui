const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x166))/0x1+parseInt(I(0x142))/0x2*(parseInt(I(0x11f))/0x3)+-parseInt(I(0xc3))/0x4+-parseInt(I(0x140))/0x5+parseInt(I(0x148))/0x6*(parseInt(I(0xba))/0x7)+-parseInt(I(0x10d))/0x8*(parseInt(I(0x167))/0x9)+parseInt(I(0x104))/0xa;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x230c0));function c(b,d){b=b-0xb7;const e=a();let f=e[b];return f;}import{a as e}from'../chunk-RED35JXF.js';import'../chunk-3BFVY2J4.js';import{F as f,G as g}from'../chunk-TEIESRV4.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m[J(0x151)](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+J(0x160),'g');for(let z of q['matchAll'](s))p+=z[0x1][J(0xbc)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0xbc)]();return!o||o==='paper'?{'name':K(0xfd),'paper':!0x0}:o===K(0x132)?{'name':m[K(0x151)](String(n??''))?String(n):K(0xfd),'paper':!0x1}:{'name':m[K(0x151)](o)?o:'light','paper':!0x1};}var b=class extends h{static [L(0x126)]=!0x0;static ['style']=i`
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
    `;#r=0x1;#t;get[L(0x164)](){return this.#t;}set[L(0x164)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x105)](){const M=L;let l=this.#t;this[M(0x136)](),l&&!this.#t&&(this.#t=l),this[M(0x106)]=this['_getDomElement']('bar'),this['_paper']=this[M(0x146)]('paper'),this['_viewer']=this[M(0x146)]('viewer'),this[M(0xc0)]=this['_getDomElement']('status'),this['_zoomLabel']=this[M(0x146)]('zoomLabel'),this[M(0xdf)]['objectType']='report',this.#w();let n=(p,q)=>this[M(0x146)](p)?.['addEventListener'](M(0xf7),q);n('btnIn',()=>this.#d(this.#r*1.25)),n(M(0xea),()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n('btnGen',()=>this.#x('html')),n('btnSave',()=>this.#x('html',M(0x119))),g[M(0xf0)]?.()['then'](p=>{const N=M;let q=this['_getDomElement']('btnSave');q&&(q[N(0xf4)]=!p);})['catch'](()=>{}),this[M(0x134)]=this['_getDomElement']('btnShow'),n(M(0x12a),()=>this[M(0x15b)]=!0x1),n(M(0xd6),()=>this[M(0x15b)]=!0x0),this[M(0x117)]!==void 0x0&&(this['toolbarVisible']=this['_toolbarWanted']),this.#t&&this.#s();}set[L(0x15b)](l){const O=L;this[O(0x117)]=!!l,this['_bar']&&(this['_bar'][O(0xf4)]=!l),this[O(0x134)]&&(this[O(0x134)][O(0xf4)]=!!l);}get['toolbarVisible'](){const P=L;return this[P(0x106)]?!this['_bar']['hidden']:this[P(0x117)]??!0x0;}async #s(){const Q=L;if(!this[Q(0xdf)])return;this.#e(''),this.#o(Q(0x139)+this.#t+'…',''),this.#T();let l=await g['getWebuiObject'](Q(0x165),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l['settings']??{};this[Q(0x152)]['style'][Q(0x13e)]=n[Q(0x13e)]??Q(0xb9),this['_paper'][Q(0xe5)][Q(0xf8)]=n[Q(0xf8)]??'297mm',this['_viewer']['style']['cssText']='display:block;width:100%;height:100%;',this.#y(n[Q(0xfb)]);let p=n['page']??{};this.#u(p,n[Q(0x15e)]),await this.#g(n[Q(0x161)]),g['beginFetchTracking'](),this['_viewer'][Q(0xbf)]===this.#t?await this['_viewer']['reload']():await this['_viewer'][Q(0xd5)](this.#t),this.#c(),this.#l('onReportLoad',this[Q(0xdf)],this['_viewer'][Q(0xe3)]),this.#a(Q(0xde),{'name':this.#t}),await this.#k(n['data']),this.#o(Q(0xce),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[Q(0xdf)]['whenDataReady']();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l(Q(0xe8),this[Q(0xdf)],this[Q(0xdf)][Q(0xe3)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[Q(0xef)]&&this.#e('No\x20value\x20from:\x20'+s[Q(0x154)](0x0,0x3)[Q(0x15f)](u=>u['id'])['join'](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];[L(0x143)]=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console[R(0x123)]('report\x20'+this.#t+':\x20'+l+R(0xb8),q);return;}}#a(l,n,p=!0x1){let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)['dispatchEvent'](q),q;}#u(l,p){const T=L;if(this['parentElement']!==document['body'])return;let q=T(0x147);document['getElementById'](q)?.[T(0x16e)]();let u=document[T(0x10e)](T(0xe5));u['id']=q;let z=(l[T(0x100)]??'A4')+(l[T(0xdc)]===T(0xf6)?'\x20landscape':''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[T(0xc7)]||D[T(0x16f)](T(0x109)),C[T(0xe6)]||D[T(0x16f)](T(0x168),T(0x101)),C[T(0x12b)]||D[T(0x16f)](T(0x107),T(0x11c)),C['pageNumber']||D['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']=T(0xf5)+z+';\x20margin:\x20'+B(A['top'])+T(0x153)+B(A[T(0x12d)])+T(0x153)+B(A['bottom'])+'mm\x20'+B(A['left'])+T(0x113)+D[T(0xda)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[T(0x15c)]['appendChild'](u);}#d(l){const U=L;this.#r=Math[U(0xdb)](0x4,Math['max'](0.1,l)),this['_paper'][U(0xe5)]['transform']='scale('+this.#r+')',this[U(0x152)][U(0xe5)][U(0x15a)]=U(0xd3)+this[U(0x152)][U(0xe5)]['height']+U(0x10f)+(this.#r-0x1)+')',this['_zoomLabel'][U(0x135)]=Math['round'](this.#r*0x64)+'%';}#c(){const V=L;let l=this[V(0x146)](V(0xca))[V(0x16a)]-0x24,n=this[V(0x152)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){window['print']();}async #g(p){const W=L;let q=p?.[W(0x112)]??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']===W(0x118),B=this['_bar']??this['_getDomElement']('bar');if(B){for(let C of B[W(0xe2)](W(0xdd)))C[W(0xe9)]('data-tb-off');for(let [D,E]of Object[W(0x13c)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F='hide':!A&&Array[W(0x163)](E['groups'])&&E['groups'][W(0xef)]&&!E['groups']['some'](G=>z['includes'](G))&&(F=E['action']==='disable'?'disable':'hide'),!!F){for(let G of B['querySelectorAll'](W(0x14a)+D+'\x22]'))G['setAttribute']('data-tb-off',F);}}}}#S(){const X=L;let l=this[X(0x146)](X(0xc6)),p=this[X(0x146)](X(0x145)),q=this[X(0x146)]('rangeTo'),s=this[X(0x146)](X(0xfc));if(!l)return;let u=this['_getDomElement']('rangeBoxes'),z=A=>{const Y=X;u&&(u[Y(0xf4)]=!A);};l[X(0x16c)](X(0xf9),()=>{const Z=X;if(l[Z(0x102)]===Z(0x111)){let A=g['reportRange']??this.#b('today');p&&!p[Z(0x102)]&&(p[Z(0x102)]=this.#m(A['start'])),q&&!q['value']&&(q['value']=this.#m(A[Z(0x10a)])),z(!0x0);return;}z(!0x1),this.#f(l['value']===Z(0x165)?null:this.#b(l[Z(0x102)]));}),s?.[X(0x16c)](X(0xf7),()=>{const a0=X;let A=p?.[a0(0x102)]?new Date(p[a0(0x102)])['getTime']():NaN,B=q?.['value']?new Date(q['value'])[a0(0x14d)]():NaN;if(!Number[a0(0xd7)](A)||!Number['isFinite'](B)){this.#e(a0(0x122),!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a1(0x103)]()+'-'+p(n['getMonth']()+0x1)+'-'+p(n['getDate']())+'T'+p(n[a1(0xec)]())+':'+p(n['getMinutes']());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s[a2(0x103)](),s[a2(0x14f)](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case a2(0x11b):return{'start':p(n),'end':n[a2(0x14d)]()};case a2(0xcd):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a2(0x14d)]()-0x7*q,'end':n[a2(0x14d)]()};case'30d':return{'start':n['getTime']()-0x1e*q,'end':n[a2(0x14d)]()};case'month':return{'start':new Date(n['getFullYear'](),n['getMonth'](),0x1)['getTime'](),'end':n[a2(0x14d)]()};case'year':return{'start':new Date(n[a2(0x103)](),0x0,0x1)['getTime'](),'end':n[a2(0x14d)]()};default:return{'start':n['getTime']()-q,'end':n[a2(0x14d)]()};}}async #f(l){const a3=L;g[a3(0x157)](l),this.#e(l?a3(0xbe)+new Date(l[a3(0x159)])[a3(0x108)]()+'\x20→\x20'+new Date(l['end'])['toLocaleString']():a3(0x124)),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.['fromState']??'')[a4(0xbc)](),q=(l?.['toState']??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)[a5(0xbc)]()!=='')return D;let E=Date['parse'](String(C));return Number[a5(0xd7)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a6(0xf3),!0x0);return;}let F=g['reportRange'];if(F&&F[a6(0x159)]===D&&F[a6(0x10a)]===E)return;g['setReportRange']({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)[a6(0x108)]()+a6(0xed)+new Date(E)[a6(0x108)]());let G=this[a6(0x146)](a6(0xc6));G&&(G[a6(0x102)]='report');let H=this['_getDomElement']('rangeBoxes');H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g[a7(0x149)](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g['subscribeState'](C,E)]);}catch(G){console[a7(0xf2)]('[report]\x20range\x20state\x20'+C,G);}};await B(p,'start'),await B(q,a4(0x10a)),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x13a)](){const a8=L;super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[a8(0x11d)](),this.#h=null;}['connectedCallback'](){const a9=L;super[a9(0x138)]?.(),this[a9(0x106)]&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const aa=c;if(l?.[aa(0x14b)]!=='report'||l[aa(0x16b)]!==this.#t)return;let n;try{n=await g['getWebuiObject']('report',this.#t);}catch{return;}if(!n)return;let p=n[aa(0xeb)]??{};this[aa(0x152)]&&(this[aa(0x152)]['style']['width']=p[aa(0x13e)]??aa(0xb9),this['_paper'][aa(0xe5)]['height']=p['height']??'297mm'),this.#u(p[aa(0x155)]??{},p['printMargins']),this.#y(p[aa(0xfb)]),await this.#g(p[aa(0x161)]),this.#c();}));}#y(l){const ab=L;let n=this[ab(0xff)];if(!n)return;let p=n[ab(0xe1)]('__reportTheme');p||(p=document['createElement']('style'),p['id']='__reportTheme',n['appendChild'](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q[ab(0x16b)],g['config']?.[ab(0x10b)]);p['textContent']=ab(0xfe)+s+ab(0x14c)+(q['paper']?ab(0x127):'var(--ui-page,\x20#fff)')+ab(0x11a);}#o(l,n){const ac=L;let p=this[ac(0x146)](ac(0x120));if(!p)return;if(l==null){p['hidden']=!0x0;return;}p['hidden']=!0x1;let q=this[ac(0x146)](ac(0x13d)),s=this['_getDomElement']('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const ad=L;let l=this[ad(0x146)](ad(0x141));l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ae=L;let n=this[ae(0x146)]('loadLog');if(!n||this.#p['has'](l))return;this.#p[ae(0x115)](l);let p=new Date()[ae(0xbd)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[ae(0x133)]=n[ae(0x114)];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const af=c;let u=g['outstandingFetches']();if(!u[af(0xef)]){this.#o(af(0xfa),'');return;}let z=u[af(0x156)](D=>D['kind']===af(0x169))['length'],A=u[af(0xef)]-z,B=[];A&&B['push'](A+af(0x137)+(A>0x1?'s':'')),z&&B['push'](z+af(0xee)+(z>0x1?af(0x121):'y'));let C=Math['round']((Date['now']()-l)/0x3e8);this.#o('Loading\x20data…',B['join'](af(0xcf))+af(0xd1)+C+'s');for(let D of u)D[af(0x162)]>n&&this.#D(af(0xd9)+D['id']+(D['kind']===af(0x169)?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ag=L;let z=g['namespace']+'.'+f[ag(0xb7)](q,p),A=async E=>{const ah=ag;try{return(await g['connection'][ah(0x149)](z+'.'+E))?.['val'];}catch{return;}},B=Date[ag(0x12f)](),C=await A(ag(0x158)),D=!0x1;for(;Date[ag(0x12f)]()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[ag(0x11e)]([A('lastStatus'),A(ag(0x158))]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…',ag(0xcb));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ag(0xc2))};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':ag(0xbb)};}#e(l,n){const ai=L;this[ai(0xc0)]&&(this[ai(0xc0)][ai(0x135)]=l,this[ai(0xc0)]['classList']['toggle'](ai(0xc1),!!n));}async #x(l=L(0x150),p=L(0x131)){const aj=L;let q=[aj(0x14e),'btnSave']['map'](z=>this['_getDomElement'](z))[aj(0x156)](Boolean);q[aj(0xe4)](z=>z[aj(0x16d)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[aj(0x12c)]??void 0x0,'project':g[aj(0xe7)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e(aj(0xd4));return;}if(this.#a(aj(0x125),s,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(u[aj(0x130)]=s['format'],u[aj(0x144)]=s['range'],this.#n['length']){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])['join'](',\x20');throw new Error(aj(0xf1)+A+(this.#n['length']>0x3?aj(0x13f)+(this.#n['length']-0x3)+'\x20more)':''));}this.#e(aj(0x129)),this.#o(s[aj(0xd2)]==='file'?aj(0x116):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s[aj(0x16b)],{'project':s[aj(0xc4)],'format':s['format'],'range':s['range'],'deliver':s['deliver'],'timeoutMs':this[aj(0x143)],'theme':document[aj(0xe0)][aj(0xd8)][aj(0xc8)]||void 0x0});if(z[aj(0x13b)]){let B=await this.#E(s[aj(0x16b)],s[aj(0xc4)]);if(!B['ok'])throw new Error(B['error']||aj(0xcc));u={...u,'success':!0x0,'file':B[aj(0x119)]??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B['file']??''));}else{u={...u,'success':!0x0,'file':z[aj(0x119)]??null,'pages':z['pages']??null};let C=z[aj(0x110)]?.['length']?aj(0xc9)+z[aj(0x110)]['length']+aj(0xc5):'';this.#e(aj(0x128)+(z[aj(0x119)]??'')+C);}}catch(D){u[aj(0x123)]=D?.['message']??String(D),this.#e('Not\x20generated\x20—\x20'+u['error'],!0x0);}finally{q[aj(0xe4)](E=>E[aj(0x16d)]=!0x1),this.#o(null);}this.#a(u[aj(0xd0)]?'report-generated':'report-generate-failed',u);try{await this.#l(aj(0x12e),s,u);}catch{}}};function a(){const ak=['67534GxilpW','21429MVQprj','@top-center\x20{\x20content:\x20\x22\x22;\x20}','history','clientWidth','name','addEventListener','disabled','remove','push','reportStateBase','\x20threw','210mm','563738lenANO','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','trim','toLocaleTimeString','Range:\x20','screenName','_status','err','lastFile','145472cKpFrR','project','\x20control(s)\x20shown\x20as\x20placeholders','rangeKind','date','webuiTheme','\x20—\x20','scroll','The\x20server\x20is\x20rendering\x20the\x20report.','the\x20server\x20refused\x20the\x20run','yesterday','Building\x20the\x20page…','\x20and\x20','success','\x20outstanding\x20—\x20','deliver','calc(','Cancelled\x20by\x20the\x20report\x20script.','setScreenNameAndLoad','btnShow','isFinite','dataset','still\x20waiting:\x20','join','min','orientation','[data-tb]','report-load','_viewer','documentElement','getElementById','querySelectorAll','_rootShadow','forEach','style','title','currentProject','onReportReady','removeAttribute','btnOut','settings','getHours','\x20→\x20','\x20history\x20quer','length','canSaveReportsOnServer','no\x20value\x20from:\x20','warn','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','hidden','@page\x20{\x20size:\x20','landscape','click','height','change','Rendering…','theme','btnApply','light',':host\x20#paper{','shadowRoot','size','@top-right\x20{\x20content:\x20\x22\x22;\x20}','value','getFullYear','2218110QnzNBL','ready','_bar','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','toLocaleString','@top-left\x20{\x20content:\x20\x22\x22;\x20}','end','globalStyle','iobroker-webui-report-viewer','848GLAYiy','createElement','\x20*\x20','placeholders','custom','items','mm;\x20','scrollHeight','add','Generating\x20on\x20the\x20server…','_toolbarWanted','admin','file',';color:var(--ui-text,\x20#1d2733);}','today','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','dispose','all','9147RNgCDR','load','ies','Pick\x20both\x20dates.','error','Report\x20default\x20range','report-before-generate','readonly','#fff','Downloaded:\x20','Generating…','btnBar','url','reportRange','right','afterGenerate','now','format','download','runtime','scrollTop','_showBtn','textContent','_parseAttributesToProperties','\x20value','connectedCallback','Opening\x20','disconnectedCallback','viaTrigger','entries','loadWhat','width','\x20(+','308350CElbCJ','loadLog','170QqxpQQ','generateTimeoutMs','range','rangeFrom','_getDomElement','__report-page-rule','6jIzIKp','getState','[data-tb=\x22','type','background:','getTime','btnGen','getMonth','html','test','_paper','mm\x20','slice','page','filter','setReportRange','lastRun','start','marginBottom','toolbarVisible','head','get','printMargins','map','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','toolbox','waitedMs','isArray','reportName','report'];a=function(){return ak;};return a();}customElements[L(0x15d)](L(0x10c))||customElements['define'](L(0x10c),b);export{b as ReportViewer};