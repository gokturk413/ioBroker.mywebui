const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0xcd))/0x1*(parseInt(I(0xd1))/0x2)+parseInt(I(0xf4))/0x3+-parseInt(I(0x14e))/0x4*(parseInt(I(0x13c))/0x5)+parseInt(I(0xc3))/0x6*(parseInt(I(0xe3))/0x7)+-parseInt(I(0xbb))/0x8+-parseInt(I(0x124))/0x9+parseInt(I(0x14d))/0xa;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0xcd132));import{a as e}from'./chunk-KVPT4J7H.js';import'./chunk-TLCLSVCQ.js';import{s as f,t as g}from'./chunk-TOF3HJP6.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';function c(b,d){b=b-0xac;const e=a();let f=e[b];return f;}var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+J(0xb7),'g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()[J(0xe9)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x12d)?{'name':K(0xe2),'paper':!0x0}:o==='runtime'?{'name':m[K(0x10f)](String(n??''))?String(n):'light','paper':!0x1}:{'name':m['test'](o)?o:'light','paper':!0x1};}var b=class extends h{static [L(0x116)]=!0x0;static ['style']=i`
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
    `;static [L(0x15c)]=j`
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
    `;#r=0x1;#t;get[L(0x108)](){return this.#t;}set[L(0x108)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const M=L;super(),this[M(0xde)]();}['ready'](){const N=L;let l=this.#t;this[N(0xe1)](),l&&!this.#t&&(this.#t=l),this['_bar']=this[N(0xdf)]('bar'),this['_paper']=this['_getDomElement'](N(0x12d)),this['_viewer']=this['_getDomElement'](N(0xc8)),this[N(0xc0)]=this[N(0xdf)]('status'),this[N(0xe5)]=this[N(0xdf)](N(0xf8)),this['_viewer']['objectType']=N(0x15a),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener']('click',q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(N(0x145),()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n(N(0xbc),()=>this.#x('html')),n(N(0x127),()=>this.#x(N(0x10c),'file')),g[N(0xfd)]?.()[N(0x102)](p=>{const O=N;let q=this['_getDomElement'](O(0x127));q&&(q[O(0x123)]=!p);})['catch'](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),n(N(0xb3),()=>this[N(0x131)]=!0x1),n(N(0xd8),()=>this['toolbarVisible']=!0x0),this[N(0x11d)]!==void 0x0&&(this[N(0x131)]=this[N(0x11d)]),this.#t&&this.#s();}set[L(0x131)](l){const P=L;this['_toolbarWanted']=!!l,this[P(0xd4)]&&(this[P(0xd4)]['hidden']=!l),this[P(0xea)]&&(this['_showBtn'][P(0x123)]=!!l);}get['toolbarVisible'](){const Q=L;return this['_bar']?!this[Q(0xd4)][Q(0x123)]:this[Q(0x11d)]??!0x0;}async #s(){const R=L;if(!this[R(0xba)])return;this.#e(''),this.#o(R(0x149)+this.#t+'…',''),this.#T();let l=await g['getWebuiObject'](R(0x15a),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[R(0xf7)]??{};this[R(0xd5)]['style'][R(0xf0)]=n[R(0xf0)]??R(0xfe),this['_paper'][R(0xb4)]['height']=n['height']??R(0xcc),this[R(0xba)][R(0xb4)]['cssText']='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n['page']??{};this.#u(p,n['printMargins']),await this.#g(n['toolbox']),g['beginFetchTracking'](),this['_viewer'][R(0xed)]===this.#t?await this[R(0xba)]['reload']():await this[R(0xba)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this['_viewer'],this['_viewer'][R(0xcb)]),this.#a('report-load',{'name':this.#t}),await this.#k(n['data']),this.#o('Building\x20the\x20page…',''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer'][R(0x138)]();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l(R(0x120),this[R(0xba)],this['_viewer']['_rootShadow'],{'missing':s}),this.#a(R(0x104),{'name':this.#t,'missing':s}),s[R(0x111)]&&this.#e('No\x20value\x20from:\x20'+s['slice'](0x0,0x3)['map'](u=>u['id'])['join'](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];[L(0x126)]=0xea60;#l(l,...n){const T=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console[T(0x10d)]('report\x20'+this.#t+':\x20'+l+T(0xca),q);return;}}#a(l,n,p=!0x1){const U=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[U(0xba)]??this)[U(0xdc)](q),q;}#u(l,p){const V=L;if(this[V(0x148)]!==document['body'])return;let q=V(0xc5);document['getElementById'](q)?.[V(0xc7)]();let u=document['createElement']('style');u['id']=q;let z=(l[V(0xb6)]??'A4')+(l[V(0xf1)]==='landscape'?V(0xee):''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[V(0x136)]||D['push'](V(0xbe)),C[V(0xb9)]||D[V(0x135)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C['url']||D['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',V(0x14c)),C[V(0xf6)]||D['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']='@page\x20{\x20size:\x20'+z+';\x20margin:\x20'+B(A['top'])+'mm\x20'+B(A['right'])+V(0xf3)+B(A[V(0x157)])+'mm\x20'+B(A[V(0xc6)])+'mm;\x20'+D[V(0x13b)]('\x20')+V(0x12f),document[V(0xb5)]['appendChild'](u);}#d(l){const W=L;this.#r=Math['min'](0x4,Math[W(0xec)](0.1,l)),this[W(0xd5)]['style']['transform']='scale('+this.#r+')',this['_paper'][W(0xb4)][W(0x109)]='calc('+this['_paper'][W(0xb4)]['height']+'\x20*\x20'+(this.#r-0x1)+')',this[W(0xe5)]['textContent']=Math[W(0x12c)](this.#r*0x64)+'%';}#c(){const X=L;let l=this[X(0xdf)](X(0x129))[X(0x125)]-0x24,n=this[X(0xd5)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[X(0xf2)](0x1,l/n));}#_(){window['print']();}async #g(p){const Y=L;let q=p?.[Y(0x11c)]??{},u=null;try{u=await g[Y(0x11b)]();}catch{}let z=u?.['groups']??[],A=u?.['id']==='admin',B=this['_bar']??this['_getDomElement'](Y(0xce));if(B){for(let C of B[Y(0xe0)](Y(0x151)))C[Y(0x100)]('data-tb-off');for(let [D,E]of Object[Y(0x119)](q)){if(!E)continue;let F=null;if(E[Y(0xd0)]===!0x1?F=Y(0x139):!A&&Array[Y(0xc1)](E['groups'])&&E['groups'][Y(0x111)]&&!E['groups']['some'](G=>z['includes'](G))&&(F=E[Y(0x146)]==='disable'?Y(0x134):Y(0x139)),!!F){for(let G of B[Y(0xe0)](Y(0x112)+D+'\x22]'))G['setAttribute']('data-tb-off',F);}}}}#S(){const Z=L;let l=this['_getDomElement']('rangeKind'),p=this[Z(0xdf)]('rangeFrom'),q=this[Z(0xdf)](Z(0x114)),s=this[Z(0xdf)](Z(0x14b));if(!l)return;let u=this['_getDomElement']('rangeBoxes'),z=A=>{u&&(u['hidden']=!A);};l[Z(0xff)](Z(0x12a),()=>{const a0=Z;if(l['value']==='custom'){let A=g[a0(0xd7)]??this.#b('today');p&&!p[a0(0x141)]&&(p['value']=this.#m(A[a0(0x144)])),q&&!q[a0(0x141)]&&(q[a0(0x141)]=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l[a0(0x141)]===a0(0x15a)?null:this.#b(l[a0(0x141)]));}),s?.['addEventListener'](Z(0x143),()=>{const a1=Z;let A=p?.['value']?new Date(p['value'])['getTime']():NaN,B=q?.['value']?new Date(q['value'])[a1(0xc2)]():NaN;if(!Number['isFinite'](A)||!Number['isFinite'](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a2(0x101)]()+'-'+p(n['getMonth']()+0x1)+'-'+p(n['getDate']())+'T'+p(n[a2(0x103)]())+':'+p(n['getMinutes']());}#b(l){const a3=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s[a3(0x107)](),s['getDate']())[a3(0xc2)](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case a3(0x14a):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a3(0xc2)]()-0x7*q,'end':n['getTime']()};case'30d':return{'start':n['getTime']()-0x1e*q,'end':n[a3(0xc2)]()};case a3(0xf5):return{'start':new Date(n[a3(0x101)](),n[a3(0x107)](),0x1)['getTime'](),'end':n[a3(0xc2)]()};case'year':return{'start':new Date(n[a3(0x101)](),0x0,0x1)[a3(0xc2)](),'end':n[a3(0xc2)]()};default:return{'start':n[a3(0xc2)]()-q,'end':n['getTime']()};}}async #f(l){const a4=L;g[a4(0xd6)](l),this.#e(l?a4(0xad)+new Date(l[a4(0x144)])['toLocaleString']()+a4(0x13e)+new Date(l['end'])[a4(0xfa)]():a4(0x152)),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a5=L;let p=(l?.['fromState']??'')[a5(0x12b)](),q=(l?.['toState']??'')[a5(0x12b)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)[a6(0x12b)]()!=='')return D;let E=Date['parse'](String(C));return Number['isFinite'](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a7(0x115),!0x0);return;}let F=g[a7(0xd7)];if(F&&F['start']===D&&F[a7(0xb1)]===E)return;g[a7(0xd6)]({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)[a7(0xfa)]()+a7(0x13e)+new Date(E)[a7(0xfa)]());let G=this[a7(0xdf)]('rangeKind');G&&(G['value']=a7(0x15a));let H=this['_getDomElement']('rangeBoxes');H&&(H[a7(0x123)]=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a9=a5;try{let F=await g['getState'](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a8=c;u[D]=s(H?.[a8(0xd9)]),z(!0x0)[a8(0x153)](()=>{});};try{A[a9(0x135)]([C,E,await g['subscribeState'](C,E)]);}catch(G){console[a9(0xe7)](a9(0xbf)+C,G);}};await B(p,'start'),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0xcf)](){const aa=L;super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[aa(0x11e)](),this.#h=null;}['connectedCallback'](){super['connectedCallback']?.(),this['_bar']&&this.#w();}#h=null;#w(){const ab=L;this.#h||(this.#h=g[ab(0x13f)]['on'](async l=>{const ac=ab;if(l?.['type']!==ac(0x15a)||l[ac(0x155)]!==this.#t)return;let n;try{n=await g['getWebuiObject'](ac(0x15a),this.#t);}catch{return;}if(!n)return;let p=n[ac(0xf7)]??{};this[ac(0xd5)]&&(this[ac(0xd5)][ac(0xb4)][ac(0xf0)]=p[ac(0xf0)]??ac(0xfe),this[ac(0xd5)]['style']['height']=p['height']??'297mm'),this.#u(p['page']??{},p['printMargins']),this.#y(p[ac(0x150)]),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ad=L;let n=this[ad(0xe6)];if(!n)return;let p=n['getElementById']('__reportTheme');p||(p=document[ad(0xdd)]('style'),p['id']=ad(0x105),n[ad(0x10e)](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q['name'],g[ad(0x142)]?.[ad(0x11f)]);p['textContent']=':host\x20#paper{'+s+ad(0xfc)+(q['paper']?ad(0x15e):'var(--ui-page,\x20#fff)')+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const ae=L;let p=this['_getDomElement'](ae(0x147));if(!p)return;if(l==null){p[ae(0x123)]=!0x0;return;}p['hidden']=!0x1;let q=this[ae(0xdf)](ae(0xda)),s=this['_getDomElement']('loadDetail');q&&(q[ae(0x117)]=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const af=L;let l=this[af(0xdf)]('loadLog');l&&(l[af(0x117)]=''),this.#p=new Set();}#p=new Set();#D(l){const ag=L;let n=this[ag(0xdf)]('loadLog');if(!n||this.#p[ag(0xb0)](l))return;this.#p['add'](l);let p=new Date()[ag(0x10a)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[ag(0x12e)]=n[ag(0x13d)];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const ah=c;let u=g[ah(0x121)]();if(!u['length']){this.#o('Rendering…','');return;}let z=u[ah(0xe4)](D=>D[ah(0x118)]==='history')[ah(0x111)],A=u['length']-z,B=[];A&&B['push'](A+'\x20value'+(A>0x1?'s':'')),z&&B[ah(0x135)](z+ah(0xb8)+(z>0x1?ah(0x158):'y'));let C=Math['round']((Date[ah(0xd3)]()-l)/0x3e8);this.#o(ah(0xef),B['join']('\x20and\x20')+ah(0x154)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D('still\x20waiting:\x20'+D['id']+(D['kind']==='history'?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=L;let z=g['namespace']+'.'+f[ai(0x13a)](q,p),A=async E=>{const aj=ai;try{return(await g['connection'][aj(0x106)](z+'.'+E))?.[aj(0xd9)];}catch{return;}},B=Date[ai(0xd3)](),C=await A(ai(0x15b)),D=!0x1;for(;Date[ai(0xd3)]()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(ai(0xeb)),A(ai(0x15b))]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o(ai(0x128),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ai(0x159))};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const ak=L;this[ak(0xc0)]&&(this[ak(0xc0)]['textContent']=l,this['_status'][ak(0x113)][ak(0x110)]('err',!!n));}async #x(l='html',p='download'){const al=L;let q=['btnGen','btnSave']['map'](z=>this['_getDomElement'](z))['filter'](Boolean);q['forEach'](z=>z[al(0xc9)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g['reportRange']??void 0x0,'project':g[al(0xfb)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e(al(0xf9));return;}if(this.#a('report-before-generate',s,!0x0)['defaultPrevented']){this.#e(al(0xbd));return;}if(u[al(0xb2)]=s[al(0xb2)],u[al(0x122)]=s['range'],this.#n['length']){let A=this.#n[al(0x15d)](0x0,0x3)['map'](B=>B['id'])[al(0x13b)](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[al(0x111)]>0x3?al(0xac)+(this.#n[al(0x111)]-0x3)+'\x20more)':''));}this.#e(al(0x156)),this.#o(s[al(0x15f)]==='file'?al(0x128):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g[al(0xe8)](s['name'],{'project':s[al(0x133)],'format':s['format'],'range':s['range'],'deliver':s['deliver'],'timeoutMs':this[al(0x126)],'theme':document['documentElement'][al(0x140)]['webuiTheme']||void 0x0});if(z[al(0x14f)]){let B=await this.#E(s[al(0x155)],s['project']);if(!B['ok'])throw new Error(B[al(0x10d)]||al(0x137));u={...u,'success':!0x0,'file':B[al(0xaf)]??null},this.#e(al(0x10b)+(B['file']??''));}else{u={...u,'success':!0x0,'file':z[al(0xaf)]??null,'pages':z['pages']??null};let C=z['placeholders']?.[al(0x111)]?'\x20—\x20'+z['placeholders'][al(0x111)]+al(0x132):'';this.#e('Downloaded:\x20'+(z[al(0xaf)]??'')+C);}}catch(D){u[al(0x10d)]=D?.[al(0xd2)]??String(D),this.#e(al(0xae)+u['error'],!0x0);}finally{q[al(0x130)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':al(0xdb),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0xc4)]('iobroker-webui-report-viewer')||customElements[L(0x11a)]('iobroker-webui-report-viewer',b);export{b as ReportViewer};function a(){const am=['onReportReady','outstandingFetches','range','hidden','9205362MIKpAG','clientWidth','generateTimeoutMs','btnSave','Generating\x20on\x20the\x20server…','scroll','change','trim','round','paper','scrollTop','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','forEach','toolbarVisible','\x20control(s)\x20shown\x20as\x20placeholders','project','disable','push','date','the\x20server\x20refused\x20the\x20run','whenDataReady','hide','reportStateBase','join','5OHIgjP','scrollHeight','\x20→\x20','objectsChanged','dataset','value','config','click','start','btnFit','action','load','parentElement','Opening\x20','yesterday','btnApply','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','300280kjdyWV','1065356bapAwJ','viaTrigger','theme','[data-tb]','Report\x20default\x20range','catch','\x20outstanding\x20—\x20','name','Generating…','bottom','ies','lastFile','report','lastRun','template','slice','#fff','deliver','\x20(+','Range:\x20','Not\x20generated\x20—\x20','file','has','end','format','btnBar','style','head','size','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','\x20history\x20quer','title','_viewer','11213232eZMqrk','btnGen','Cancelled.','@top-left\x20{\x20content:\x20\x22\x22;\x20}','[report]\x20range\x20state\x20','_status','isArray','getTime','90cdrNLV','get','__report-page-rule','left','remove','viewer','disabled','\x20threw','_rootShadow','297mm','1upSOxs','bar','disconnectedCallback','show','2884436iIiXID','message','now','_bar','_paper','setReportRange','reportRange','btnShow','val','loadWhat','report-generate-failed','dispatchEvent','createElement','_restoreCachedInititalValues','_getDomElement','querySelectorAll','_parseAttributesToProperties','light','416605eafqEp','filter','_zoomLabel','shadowRoot','warn','generateReport','replace','_showBtn','lastStatus','max','screenName','\x20landscape','Loading\x20data…','width','orientation','min','mm\x20','3497478RZZKyj','month','pageNumber','settings','zoomLabel','Cancelled\x20by\x20the\x20report\x20script.','toLocaleString','currentProject','background:','canSaveReportsOnServer','210mm','addEventListener','removeAttribute','getFullYear','then','getHours','report-ready','__reportTheme','getState','getMonth','reportName','marginBottom','toLocaleTimeString','Saved\x20on\x20the\x20server:\x20','html','error','appendChild','test','toggle','length','[data-tb=\x22','classList','rangeTo','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','readonly','textContent','kind','entries','define','getCurrentUser','items','_toolbarWanted','dispose','globalStyle'];a=function(){return am;};return a();}