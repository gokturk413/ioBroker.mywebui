const K=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x12a))/0x1+-parseInt(I(0x189))/0x2*(parseInt(I(0x13a))/0x3)+parseInt(I(0x197))/0x4+parseInt(I(0x148))/0x5+parseInt(I(0x106))/0x6+parseInt(I(0x15e))/0x7+-parseInt(I(0x185))/0x8;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x9264e));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-YWQFZUFW.js';import{F as f,G as g}from'../chunk-DBPJFXPN.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()['replace'](/;?$/,';');}return p;}function x(l,n){const J=c;let o=String(l??'')['trim']();return!o||o==='paper'?{'name':'light','paper':!0x0}:o===J(0x187)?{'name':m[J(0x162)](String(n??''))?String(n):'light','paper':!0x1}:{'name':m[J(0x162)](o)?o:'light','paper':!0x1};}var b=class extends h{static [K(0x166)]=!0x0;static [K(0x145)]=i`
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
    `;static [K(0x168)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set[K(0x158)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const L=K;let l=this.#t;this[L(0x183)](),l&&!this.#t&&(this.#t=l),this[L(0x160)]=this['_getDomElement'](L(0x143)),this['_paper']=this[L(0x164)](L(0x137)),this[L(0x13f)]=this[L(0x164)](L(0x17d)),this[L(0x18d)]=this['_getDomElement']('status'),this['_zoomLabel']=this[L(0x164)]('zoomLabel'),this['_viewer']['objectType']=L(0x195),this.#w();let n=(p,q)=>this[L(0x164)](p)?.['addEventListener'](L(0x17a),q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(L(0x14e),()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n(L(0x11e),()=>this.#x(L(0x177))),n('btnSave',()=>this.#x('html','file')),g['canSaveReportsOnServer']?.()[L(0x146)](p=>{const M=L;let q=this[M(0x164)](M(0x1a1));q&&(q['hidden']=!p);})[L(0x154)](()=>{}),this[L(0x159)]=this['_getDomElement'](L(0x198)),n('btnBar',()=>this[L(0x141)]=!0x1),n(L(0x198),()=>this[L(0x141)]=!0x0),this[L(0x115)]!==void 0x0&&(this['toolbarVisible']=this['_toolbarWanted']),this.#t&&this.#s();}set['toolbarVisible'](l){const N=K;this[N(0x115)]=!!l,this['_bar']&&(this['_bar']['hidden']=!l),this[N(0x159)]&&(this[N(0x159)][N(0x17c)]=!!l);}get[K(0x141)](){const O=K;return this[O(0x160)]?!this[O(0x160)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const P=K;if(!this['_viewer'])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject'](P(0x195),this.#t);if(!l){this.#o(null),this.#e(P(0x163)+this.#t,!0x0);return;}let n=l[P(0x15b)]??{};this['_paper'][P(0x145)][P(0x113)]=n['width']??P(0x16e),this[P(0x19a)][P(0x145)]['height']=n[P(0x175)]??P(0x18e),this['_viewer'][P(0x145)][P(0x15f)]='display:block;width:100%;height:100%;',this.#y(n[P(0x19d)]);let p=n[P(0x109)]??{};this.#u(p,n[P(0x110)]),await this.#g(n['toolbox']),g[P(0x182)](),this['_viewer']['screenName']===this.#t?await this['_viewer'][P(0x117)]():await this[P(0x13f)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l(P(0x10b),this['_viewer'],this[P(0x13f)][P(0x11b)]),this.#a(P(0x161),{'name':this.#t}),await this.#k(n['data']),this.#o(P(0x1a5),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[P(0x13f)][P(0x14f)]();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this[P(0x13f)],this['_viewer'][P(0x11b)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s['length']&&this.#e(P(0x133)+s[P(0x10a)](0x0,0x3)['map'](u=>u['id'])[P(0x18b)](',\x20')+(s[P(0x165)]>0x3?'\x20…':''),!0x0);}#n=[];[K(0x12f)]=0xea60;#l(l,...n){const Q=K;let p=this[Q(0x13f)]?.['_scriptObject']?.[l];if(typeof p==Q(0x1aa))try{return p(...n);}catch(q){console['error']('report\x20'+this.#t+':\x20'+l+Q(0x123),q);return;}}#a(l,n,p=!0x1){const R=K;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)[R(0x19f)](q),q;}#u(l,p){const T=K;if(this['parentElement']!==document['body'])return;let q=T(0x17b);document['getElementById'](q)?.['remove']();let u=document[T(0x151)](T(0x145));u['id']=q;let z=(l['size']??'A4')+(l[T(0x1ae)]===T(0x124)?'\x20landscape':''),A=l[T(0x152)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[T(0x1b1)]||D['push'](T(0x171)),C[T(0x19c)]||D['push'](T(0x134),T(0x11d)),C['url']||D[T(0x132)](T(0x1a6),T(0x13d)),C['pageNumber']||D[T(0x132)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u[T(0x1ac)]='@page\x20{\x20size:\x20'+z+';\x20margin:\x20'+B(A['top'])+T(0x14d)+B(A['right'])+'mm\x20'+B(A['bottom'])+'mm\x20'+B(A['left'])+'mm;\x20'+D['join']('\x20')+T(0x1a8),document[T(0x18f)]['appendChild'](u);}#d(l){const U=K;this.#r=Math[U(0x127)](0x4,Math['max'](0.1,l)),this['_paper'][U(0x145)][U(0x153)]='scale('+this.#r+')',this[U(0x19a)]['style'][U(0x10d)]='calc('+this['_paper']['style'][U(0x175)]+'\x20*\x20'+(this.#r-0x1)+')',this['_zoomLabel'][U(0x1ac)]=Math[U(0x1a7)](this.#r*0x64)+'%';}#c(){const V=K;let l=this[V(0x164)]('scroll')['clientWidth']-0x24,n=this[V(0x19a)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){const W=K;window[W(0x13c)]();}async #g(p){const X=K;let q=p?.[X(0x101)]??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']==='admin',B=this['_bar']??this[X(0x164)]('bar');if(B){for(let C of B[X(0x136)]('[data-tb]'))C[X(0x169)]('data-tb-off');for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F=X(0x15d):!A&&Array['isArray'](E['groups'])&&E[X(0x135)][X(0x165)]&&!E[X(0x135)][X(0x16a)](G=>z[X(0x12b)](G))&&(F=E['action']==='disable'?'disable':X(0x15d)),!!F){for(let G of B[X(0x136)]('[data-tb=\x22'+D+'\x22]'))G['setAttribute'](X(0x126),F);}}}}#S(){const Y=K;let l=this[Y(0x164)](Y(0x131)),p=this[Y(0x164)](Y(0x13b)),q=this['_getDomElement'](Y(0x190)),s=this[Y(0x164)](Y(0x125));if(!l)return;let u=this['_getDomElement']('rangeBoxes'),z=A=>{u&&(u['hidden']=!A);};l[Y(0x13e)]('change',()=>{const Z=Y;if(l['value']===Z(0x14b)){let A=g[Z(0x17f)]??this.#b(Z(0x194));p&&!p['value']&&(p[Z(0x19b)]=this.#m(A[Z(0x181)])),q&&!q['value']&&(q['value']=this.#m(A[Z(0x184)])),z(!0x0);return;}z(!0x1),this.#f(l['value']===Z(0x195)?null:this.#b(l[Z(0x19b)]));}),s?.['addEventListener']('click',()=>{const a0=Y;let A=p?.['value']?new Date(p['value'])['getTime']():NaN,B=q?.[a0(0x19b)]?new Date(q[a0(0x19b)])['getTime']():NaN;if(!Number[a0(0x139)](A)||!Number['isFinite'](B)){this.#e(a0(0x11c),!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=K;let n=new Date(l),p=q=>String(q)[a1(0x114)](0x2,'0');return n['getFullYear']()+'-'+p(n[a1(0x128)]()+0x1)+'-'+p(n['getDate']())+'T'+p(n[a1(0x196)]())+':'+p(n['getMinutes']());}#b(l){const a2=K;let n=new Date(),p=s=>new Date(s[a2(0x188)](),s[a2(0x128)](),s[a2(0x147)]())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n[a2(0x1a9)]()};case a2(0x1b0):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a2(0x1a9)]()};case a2(0x16b):return{'start':n['getTime']()-0x1e*q,'end':n[a2(0x1a9)]()};case'month':return{'start':new Date(n[a2(0x188)](),n[a2(0x128)](),0x1)['getTime'](),'end':n['getTime']()};case a2(0x1a3):return{'start':new Date(n[a2(0x188)](),0x0,0x1)[a2(0x1a9)](),'end':n[a2(0x1a9)]()};default:return{'start':n[a2(0x1a9)]()-q,'end':n['getTime']()};}}async #f(l){const a3=K;g[a3(0x16c)](l),this.#e(l?'Range:\x20'+new Date(l['start'])[a3(0x16f)]()+a3(0x193)+new Date(l['end'])[a3(0x16f)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a4=K;let p=(l?.['fromState']??'')['trim'](),q=(l?.['toState']??'')[a4(0x10e)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C==a5(0x199))return C;let D=Number(C);if(Number[a5(0x139)](D)&&String(C)['trim']()!=='')return D;let E=Date['parse'](String(C));return Number[a5(0x139)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a6(0x11f),!0x0);return;}let F=g[a6(0x17f)];if(F&&F[a6(0x181)]===D&&F['end']===E)return;g['setReportRange']({'start':D,'end':E}),this.#e(a6(0x121)+new Date(D)['toLocaleString']()+'\x20→\x20'+new Date(E)[a6(0x16f)]());let G=this[a6(0x164)]('rangeKind');G&&(G['value']='report');let H=this['_getDomElement']('rangeBoxes');H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a4;try{let F=await g['getState'](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a7=c;u[D]=s(H?.[a7(0x157)]),z(!0x0)['catch'](()=>{});};try{A[a8(0x132)]([C,E,await g[a8(0x17e)](C,E)]);}catch(G){console[a8(0x12d)](a8(0x14a)+C,G);}};await B(p,'start'),await B(q,a4(0x184)),this.#v={'from':p,'to':q},this.#i=()=>{const a9=a4;for(let [C,D]of A)try{g[a9(0x100)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){const aa=K;super[aa(0x155)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[aa(0x142)](),this.#h=null;}['connectedCallback'](){super['connectedCallback']?.(),this['_bar']&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const ab=c;if(l?.['type']!=='report'||l['name']!==this.#t)return;let n;try{n=await g['getWebuiObject'](ab(0x195),this.#t);}catch{return;}if(!n)return;let p=n[ab(0x15b)]??{};this['_paper']&&(this['_paper'][ab(0x145)][ab(0x113)]=p[ab(0x113)]??'210mm',this['_paper'][ab(0x145)]['height']=p[ab(0x175)]??ab(0x18e)),this.#u(p[ab(0x109)]??{},p[ab(0x110)]),this.#y(p['theme']),await this.#g(p[ab(0x144)]),this.#c();}));}#y(l){const ac=K;let n=this[ac(0x1a0)];if(!n)return;let p=n['getElementById'](ac(0x1a4));p||(p=document['createElement'](ac(0x145)),p['id']=ac(0x1a4),n[ac(0x172)](p));let q=x(l),s=String(l??'')['trim']()===ac(0x187)?'':y(q['name'],g[ac(0x116)]?.['globalStyle']);p['textContent']=ac(0x178)+s+ac(0x16d)+(q[ac(0x137)]?'#fff':ac(0x176))+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const ad=K;let p=this[ad(0x164)](ad(0x1af));if(!p)return;if(l==null){p['hidden']=!0x0;return;}p[ad(0x17c)]=!0x1;let q=this['_getDomElement']('loadWhat'),s=this[ad(0x164)]('loadDetail');q&&(q[ad(0x1ac)]=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const ae=K;let l=this[ae(0x164)]('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const af=K;let n=this[af(0x164)]('loadLog');if(!n||this.#p[af(0x10c)](l))return;this.#p['add'](l);let p=new Date()[af(0x170)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[af(0x119)]=n['scrollHeight'];}#$(){const ag=K;let l=Date[ag(0x19e)](),n=0xbb8,p=()=>{const ah=ag;let u=g[ah(0x107)]();if(!u['length']){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']===ah(0x111))[ah(0x165)],A=u['length']-z,B=[];A&&B['push'](A+ah(0x156)+(A>0x1?'s':'')),z&&B[ah(0x132)](z+ah(0x192)+(z>0x1?'ies':'y'));let C=Math[ah(0x1a7)]((Date[ah(0x19e)]()-l)/0x3e8);this.#o('Loading\x20data…',B['join']('\x20and\x20')+ah(0x138)+C+'s');for(let D of u)D[ah(0x120)]>n&&this.#D('still\x20waiting:\x20'+D['id']+(D['kind']===ah(0x111)?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=K;let z=g['namespace']+'.'+f[ai(0x150)](q,p),A=async E=>{const aj=ai;try{return(await g['connection'][aj(0x15a)](z+'.'+E))?.[aj(0x157)];}catch{return;}},B=Date[ai(0x19e)](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[ai(0x102)]([A('lastStatus'),A('lastRun')]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o(ai(0x1ab),ai(0x10f));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':ai(0x191)};}#e(l,n){const ak=K;this['_status']&&(this[ak(0x18d)][ak(0x1ac)]=l,this[ak(0x18d)]['classList'][ak(0x1ad)](ak(0x129),!!n));}async #x(l='html',p=K(0x18a)){const al=K;let q=[al(0x11e),al(0x1a1)]['map'](z=>this['_getDomElement'](z))['filter'](Boolean);q[al(0x104)](z=>z[al(0x103)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[al(0x17f)]??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a(al(0x167),s,!0x0)['defaultPrevented']){this.#e(al(0x118));return;}if(u['format']=s[al(0x174)],u['range']=s[al(0x149)],this.#n[al(0x165)]){let A=this.#n[al(0x10a)](0x0,0x3)[al(0x18c)](B=>B['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n['length']>0x3?al(0x1a2)+(this.#n['length']-0x3)+'\x20more)':''));}this.#e('Generating…'),this.#o(s['deliver']==='file'?'Generating\x20on\x20the\x20server…':al(0x180),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s[al(0x12c)],{'project':s['project'],'format':s['format'],'range':s['range'],'deliver':s[al(0x12e)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement']['dataset']['webuiTheme']||void 0x0});if(z[al(0x186)]){let B=await this.#E(s[al(0x12c)],s['project']);if(!B['ok'])throw new Error(B['error']||al(0x130));u={...u,'success':!0x0,'file':B['file']??null},this.#e(al(0x122)+(B[al(0x112)]??''));}else{u={...u,'success':!0x0,'file':z[al(0x112)]??null,'pages':z[al(0x173)]??null};let C=z[al(0x108)]?.['length']?'\x20—\x20'+z['placeholders']['length']+al(0x14c):'';this.#e(al(0x140)+(z[al(0x112)]??'')+C);}}catch(D){u[al(0x105)]=D?.['message']??String(D),this.#e('Not\x20generated\x20—\x20'+u['error'],!0x0);}finally{q[al(0x104)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':al(0x179),u);try{await this.#l(al(0x11a),s,u);}catch{}}};customElements['get']('iobroker-webui-report-viewer')||customElements['define'](K(0x15c),b);function c(b,d){b=b-0x100;const e=a();let f=e[b];return f;}export{b as ReportViewer};function a(){const am=['reportName','_showBtn','getState','settings','iobroker-webui-report-viewer','hide','2465890ySFdeD','cssText','_bar','report-load','test','Report\x20not\x20found:\x20','_getDomElement','length','readonly','report-before-generate','template','removeAttribute','some','30d','setReportRange','background:','210mm','toLocaleString','toLocaleTimeString','@top-left\x20{\x20content:\x20\x22\x22;\x20}','appendChild','pages','format','height','var(--ui-page,\x20#fff)','html',':host\x20#paper{','report-generate-failed','click','__report-page-rule','hidden','viewer','subscribeState','reportRange','Generating…','start','beginFetchTracking','_parseAttributesToProperties','end','6698240SyUWgi','viaTrigger','runtime','getFullYear','6TUPUrh','download','join','map','_status','297mm','head','rangeTo','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','\x20history\x20quer','\x20→\x20','today','report','getHours','687924KhveSb','btnShow','number','_paper','value','title','theme','now','dispatchEvent','shadowRoot','btnSave','\x20(+','year','__reportTheme','Building\x20the\x20page…','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','round','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','getTime','function','Generating\x20on\x20the\x20server…','textContent','toggle','orientation','load','yesterday','date','unsubscribeState','items','all','disabled','forEach','error','3182286xIgAkc','outstandingFetches','placeholders','page','slice','onReportLoad','has','marginBottom','trim','The\x20server\x20is\x20rendering\x20the\x20report.','printMargins','history','file','width','padStart','_toolbarWanted','config','reload','Cancelled.','scrollTop','afterGenerate','_rootShadow','Pick\x20both\x20dates.','@top-right\x20{\x20content:\x20\x22\x22;\x20}','btnGen','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','waitedMs','Range\x20from\x20states:\x20','Saved\x20on\x20the\x20server:\x20','\x20threw','landscape','btnApply','data-tb-off','min','getMonth','err','459164uhjaqQ','includes','name','warn','deliver','generateTimeoutMs','the\x20server\x20refused\x20the\x20run','rangeKind','push','No\x20value\x20from:\x20','@top-center\x20{\x20content:\x20\x22\x22;\x20}','groups','querySelectorAll','paper','\x20outstanding\x20—\x20','isFinite','529791pSZbbX','rangeFrom','print','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','addEventListener','_viewer','Downloaded:\x20','toolbarVisible','dispose','bar','toolbox','style','then','getDate','2264525JeKgnl','range','[report]\x20range\x20state\x20','custom','\x20control(s)\x20shown\x20as\x20placeholders','mm\x20','btnFit','whenDataReady','reportStateBase','createElement','margin','transform','catch','disconnectedCallback','\x20value','val'];a=function(){return am;};return a();}