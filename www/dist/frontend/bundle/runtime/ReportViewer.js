const K=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x1ab))/0x1*(parseInt(I(0x1c5))/0x2)+-parseInt(I(0x1f8))/0x3*(parseInt(I(0x213))/0x4)+-parseInt(I(0x1a3))/0x5+parseInt(I(0x207))/0x6*(-parseInt(I(0x1e6))/0x7)+parseInt(I(0x1db))/0x8+-parseInt(I(0x1cc))/0x9*(parseInt(I(0x1fc))/0xa)+parseInt(I(0x1ef))/0xb;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0xbcff2));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-NBFIFH6J.js';function c(b,d){b=b-0x1a2;const e=a();let f=e[b];return f;}import{F as f,G as g}from'../chunk-T7ENCSA4.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()['replace'](/;?$/,';');}return p;}function x(l,n){const J=c;let o=String(l??'')[J(0x208)]();return!o||o==='paper'?{'name':J(0x216),'paper':!0x0}:o===J(0x1bb)?{'name':m['test'](String(n??''))?String(n):'light','paper':!0x1}:{'name':m['test'](o)?o:J(0x216),'paper':!0x1};}var b=class extends h{static [K(0x1b7)]=!0x0;static [K(0x21a)]=i`
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
    `;static [K(0x1af)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set[K(0x1d0)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const L=K;super(),this[L(0x20c)]();}[K(0x224)](){const M=K;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this[M(0x206)]=this[M(0x1e9)](M(0x1f4)),this[M(0x1d9)]=this[M(0x1e9)]('paper'),this['_viewer']=this[M(0x1e9)](M(0x1f9)),this['_status']=this[M(0x1e9)]('status'),this['_zoomLabel']=this['_getDomElement']('zoomLabel'),this[M(0x204)]['objectType']=M(0x1c2),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.[M(0x244)](M(0x229),q);n('btnIn',()=>this.#d(this.#r*1.25)),n(M(0x23c),()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n(M(0x228),()=>this.#x('html')),n(M(0x1b6),()=>this.#x(M(0x1a2),'file')),g[M(0x24d)]?.()[M(0x231)](p=>{const N=M;let q=this['_getDomElement'](N(0x1b6));q&&(q[N(0x226)]=!p);})['catch'](()=>{}),this[M(0x1e3)]=this[M(0x1e9)](M(0x202)),n(M(0x1ec),()=>this['toolbarVisible']=!0x1),n('btnShow',()=>this['toolbarVisible']=!0x0),this[M(0x257)]!==void 0x0&&(this['toolbarVisible']=this[M(0x257)]),this.#t&&this.#s();}set['toolbarVisible'](l){const O=K;this[O(0x257)]=!!l,this[O(0x206)]&&(this['_bar'][O(0x226)]=!l),this['_showBtn']&&(this['_showBtn']['hidden']=!!l);}get['toolbarVisible'](){const P=K;return this[P(0x206)]?!this[P(0x206)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const Q=K;if(!this[Q(0x204)])return;this.#e(''),this.#o(Q(0x1ae)+this.#t+'…',''),this.#T();let l=await g[Q(0x1b0)](Q(0x1c2),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[Q(0x1ed)]??{};this['_paper'][Q(0x21a)][Q(0x1da)]=n[Q(0x1da)]??Q(0x220),this[Q(0x1d9)][Q(0x21a)][Q(0x249)]=n[Q(0x249)]??Q(0x1cf),this['_viewer'][Q(0x21a)][Q(0x1cb)]=Q(0x1b5),this.#y(n[Q(0x242)]);let p=n[Q(0x24e)]??{};this.#u(p,n[Q(0x243)]),await this.#g(n['toolbox']),g[Q(0x1ca)](),this[Q(0x204)]['screenName']===this.#t?await this[Q(0x204)][Q(0x1b9)]():await this[Q(0x204)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this[Q(0x204)],this['_viewer']['_rootShadow']),this.#a('report-load',{'name':this.#t}),await this.#k(n[Q(0x240)]),this.#o(Q(0x221),''),await this['_viewer'][Q(0x20d)]({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer'][Q(0x23e)]();q(),g[Q(0x230)](),this.#o(null),this.#n=s,this.#l('onReportReady',this['_viewer'],this[Q(0x204)]['_rootShadow'],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[Q(0x1fa)]&&this.#e('No\x20value\x20from:\x20'+s['slice'](0x0,0x3)[Q(0x1e4)](u=>u['id'])['join'](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=K;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p==R(0x200))try{return p(...n);}catch(q){console[R(0x22e)]('report\x20'+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)['dispatchEvent'](q),q;}#u(l,p){const T=K;if(this[T(0x1d6)]!==document[T(0x1c1)])return;let q='__report-page-rule';document[T(0x212)](q)?.['remove']();let u=document[T(0x1fb)]('style');u['id']=q;let z=(l[T(0x246)]??'A4')+(l['orientation']==='landscape'?T(0x1f3):''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[T(0x21d)]||D[T(0x219)](T(0x1e0)),C[T(0x1c0)]||D['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}',T(0x21e)),C['url']||D['push'](T(0x1b2),T(0x1ac)),C['pageNumber']||D['push'](T(0x234)),u[T(0x201)]=T(0x1b1)+z+';\x20margin:\x20'+B(A[T(0x22f)])+'mm\x20'+B(A['right'])+'mm\x20'+B(A[T(0x1b8)])+'mm\x20'+B(A['left'])+'mm;\x20'+D['join']('\x20')+T(0x209),document[T(0x1df)][T(0x1ce)](u);}#d(l){const U=K;this.#r=Math[U(0x241)](0x4,Math['max'](0.1,l)),this['_paper']['style']['transform']='scale('+this.#r+')',this[U(0x1d9)]['style']['marginBottom']=U(0x22a)+this['_paper']['style']['height']+U(0x1d7)+(this.#r-0x1)+')',this['_zoomLabel'][U(0x201)]=Math['round'](this.#r*0x64)+'%';}#c(){const V=K;let l=this[V(0x1e9)](V(0x235))['clientWidth']-0x24,n=this['_paper']['getBoundingClientRect']()[V(0x1da)]/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){const W=K;window[W(0x253)]();}async #g(p){const X=K;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.[X(0x214)]??[],A=u?.['id']===X(0x255),B=this[X(0x206)]??this['_getDomElement']('bar');if(B){for(let C of B['querySelectorAll']('[data-tb]'))C['removeAttribute'](X(0x254));for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F='hide':!A&&Array[X(0x205)](E['groups'])&&E[X(0x214)]['length']&&!E[X(0x214)][X(0x23a)](G=>z['includes'](G))&&(F=E[X(0x1f0)]===X(0x21b)?'disable':X(0x1f1)),!!F){for(let G of B['querySelectorAll'](X(0x22c)+D+'\x22]'))G[X(0x238)]('data-tb-off',F);}}}}#S(){const Y=K;let l=this['_getDomElement'](Y(0x1ee)),p=this[Y(0x1e9)](Y(0x1c9)),q=this[Y(0x1e9)](Y(0x1d3)),s=this[Y(0x1e9)](Y(0x22d));if(!l)return;let u=this['_getDomElement']('rangeBoxes'),z=A=>{const Z=Y;u&&(u[Z(0x226)]=!A);};l['addEventListener'](Y(0x1ad),()=>{const a0=Y;if(l[a0(0x1dd)]===a0(0x1be)){let A=g[a0(0x222)]??this.#b(a0(0x1fd));p&&!p['value']&&(p[a0(0x1dd)]=this.#m(A['start'])),q&&!q['value']&&(q[a0(0x1dd)]=this.#m(A[a0(0x1c6)])),z(!0x0);return;}z(!0x1),this.#f(l[a0(0x1dd)]===a0(0x1c2)?null:this.#b(l['value']));}),s?.['addEventListener']('click',()=>{const a1=Y;let A=p?.['value']?new Date(p['value'])[a1(0x1f7)]():NaN,B=q?.[a1(0x1dd)]?new Date(q[a1(0x1dd)])['getTime']():NaN;if(!Number['isFinite'](A)||!Number['isFinite'](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e(a1(0x227),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=K;let n=new Date(l),p=q=>String(q)[a2(0x1bf)](0x2,'0');return n['getFullYear']()+'-'+p(n['getMonth']()+0x1)+'-'+p(n[a2(0x1e8)]())+'T'+p(n['getHours']())+':'+p(n['getMinutes']());}#b(l){const a3=K;let n=new Date(),p=s=>new Date(s['getFullYear'](),s[a3(0x23f)](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n[a3(0x1f7)]()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a3(0x1f7)]()-0x7*q,'end':n[a3(0x1f7)]()};case a3(0x1a5):return{'start':n['getTime']()-0x1e*q,'end':n['getTime']()};case a3(0x223):return{'start':new Date(n['getFullYear'](),n[a3(0x23f)](),0x1)['getTime'](),'end':n[a3(0x1f7)]()};case a3(0x23d):return{'start':new Date(n['getFullYear'](),0x0,0x1)[a3(0x1f7)](),'end':n[a3(0x1f7)]()};default:return{'start':n['getTime']()-q,'end':n[a3(0x1f7)]()};}}async #f(l){const a4=K;g['setReportRange'](l),this.#e(l?'Range:\x20'+new Date(l['start'])[a4(0x1aa)]()+a4(0x1e1)+new Date(l[a4(0x1c6)])[a4(0x1aa)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a5=K;let p=(l?.['fromState']??'')[a5(0x208)](),q=(l?.[a5(0x1b3)]??'')[a5(0x208)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C==a6(0x24f))return C;let D=Number(C);if(Number[a6(0x20e)](D)&&String(C)['trim']()!=='')return D;let E=Date['parse'](String(C));return Number[a6(0x20e)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F[a7(0x247)]===D&&F['end']===E)return;g['setReportRange']({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)['toLocaleString']()+a7(0x1e1)+new Date(E)['toLocaleString']());let G=this[a7(0x1e9)]('rangeKind');G&&(G['value']=a7(0x1c2));let H=this[a7(0x1e9)]('rangeBoxes');H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a5;try{let F=await g[a8(0x22b)](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a9=a8;u[D]=s(H?.['val']),z(!0x0)[a9(0x1d2)](()=>{});};try{A['push']([C,E,await g[a8(0x239)](C,E)]);}catch(G){console[a8(0x1c7)]('[report]\x20range\x20state\x20'+C,G);}};await B(p,a5(0x247)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{const aa=a5;for(let [C,D]of A)try{g[aa(0x1de)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[K(0x20a)](){const ab=K;super[ab(0x20a)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[ab(0x1d5)](),this.#h=null;}['connectedCallback'](){const ac=K;super[ac(0x1f5)]?.(),this['_bar']&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const ad=c;if(l?.['type']!==ad(0x1c2)||l[ad(0x1d8)]!==this.#t)return;let n;try{n=await g[ad(0x1b0)](ad(0x1c2),this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[ad(0x1d9)]&&(this['_paper']['style'][ad(0x1da)]=p['width']??'210mm',this[ad(0x1d9)]['style'][ad(0x249)]=p['height']??'297mm'),this.#u(p[ad(0x24e)]??{},p['printMargins']),this.#y(p['theme']),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ae=K;let n=this[ae(0x1b4)];if(!n)return;let p=n[ae(0x212)]('__reportTheme');p||(p=document[ae(0x1fb)]('style'),p['id']='__reportTheme',n[ae(0x1ce)](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q[ae(0x1d8)],g[ae(0x203)]?.[ae(0x1eb)]);p[ae(0x201)]=':host\x20#paper{'+s+'background:'+(q['paper']?ae(0x24a):'var(--ui-page,\x20#fff)')+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const af=K;let p=this['_getDomElement'](af(0x1ea));if(!p)return;if(l==null){p[af(0x226)]=!0x0;return;}p['hidden']=!0x1;let q=this['_getDomElement'](af(0x225)),s=this[af(0x1e9)]('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const ag=K;let l=this[ag(0x1e9)]('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ah=K;let n=this[ah(0x1e9)](ah(0x24c));if(!n||this.#p[ah(0x1cd)](l))return;this.#p['add'](l);let p=new Date()['toLocaleTimeString']();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[ah(0x218)]=n['scrollHeight'];}#$(){const ai=K;let l=Date[ai(0x20b)](),n=0xbb8,p=()=>{const aj=ai;let u=g['outstandingFetches']();if(!u[aj(0x1fa)]){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']===aj(0x1ff))['length'],A=u['length']-z,B=[];A&&B[aj(0x219)](A+'\x20value'+(A>0x1?'s':'')),z&&B[aj(0x219)](z+aj(0x1a8)+(z>0x1?'ies':'y'));let C=Math['round']((Date[aj(0x20b)]()-l)/0x3e8);this.#o(aj(0x1bd),B[aj(0x1e7)](aj(0x232))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D[aj(0x23b)]>n&&this.#D(aj(0x217)+D['id']+(D[aj(0x1f2)]==='history'?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const al=K;let z=g['namespace']+'.'+f['reportStateBase'](q,p),A=async E=>{const ak=c;try{return(await g[ak(0x248)][ak(0x22b)](z+'.'+E))?.['val'];}catch{return;}},B=Date['now'](),C=await A('lastRun'),D=!0x1;for(;Date[al(0x20b)]()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[al(0x215)]([A(al(0x210)),A('lastRun')]),G=F!=null&&F!==C;if(E===al(0x245)){D=!0x0,this.#o('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E==='error')return{'ok':!0x1,'error':await A(al(0x1ba))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const am=K;this[am(0x21c)]&&(this[am(0x21c)][am(0x201)]=l,this[am(0x21c)][am(0x1a9)]['toggle']('err',!!n));}async #x(l='html',p='download'){const an=K;let q=['btnGen','btnSave'][an(0x1e4)](z=>this[an(0x1e9)](z))[an(0x1a6)](Boolean);q[an(0x1a4)](z=>z[an(0x1bc)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[an(0x222)]??void 0x0,'project':g[an(0x20f)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e(an(0x211));return;}if(this.#a('report-before-generate',s,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(u[an(0x237)]=s[an(0x237)],u[an(0x233)]=s['range'],this.#n['length']){let A=this.#n[an(0x1c4)](0x0,0x3)['map'](B=>B['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n['length']>0x3?'\x20(+'+(this.#n[an(0x1fa)]-0x3)+'\x20more)':''));}this.#e(an(0x1d1)),this.#o(s[an(0x256)]===an(0x1e5)?an(0x1d4):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s[an(0x1d8)],{'project':s[an(0x1f6)],'format':s['format'],'range':s['range'],'deliver':s['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document[an(0x1a7)]['dataset']['webuiTheme']||void 0x0});if(z[an(0x250)]){let B=await this.#E(s[an(0x1d8)],s['project']);if(!B['ok'])throw new Error(B['error']||an(0x251));u={...u,'success':!0x0,'file':B['file']??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B[an(0x1e5)]??''));}else{u={...u,'success':!0x0,'file':z['file']??null,'pages':z['pages']??null};let C=z[an(0x1fe)]?.['length']?'\x20—\x20'+z[an(0x1fe)][an(0x1fa)]+an(0x236):'';this.#e(an(0x1c8)+(z['file']??'')+C);}}catch(D){u['error']=D?.[an(0x1e2)]??String(D),this.#e('Not\x20generated\x20—\x20'+u[an(0x22e)],!0x0);}finally{q['forEach'](E=>E[an(0x1bc)]=!0x1),this.#o(null);}this.#a(u[an(0x252)]?'report-generated':an(0x21f),u);try{await this.#l('afterGenerate',s,u);}catch{}}};function a(){const ao=['length','createElement','604270NMITaH','today','placeholders','history','function','textContent','btnShow','config','_viewer','isArray','_bar','1116870WsEGwl','trim','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','disconnectedCallback','now','_restoreCachedInititalValues','whenScreenReady','isFinite','currentProject','lastStatus','Cancelled\x20by\x20the\x20report\x20script.','getElementById','212gOMatH','groups','all','light','still\x20waiting:\x20','scrollTop','push','style','disable','_status','date','@top-right\x20{\x20content:\x20\x22\x22;\x20}','report-generate-failed','210mm','Building\x20the\x20page…','reportRange','month','ready','loadWhat','hidden','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','btnGen','click','calc(','getState','[data-tb=\x22','btnApply','error','top','endFetchTracking','then','\x20and\x20','range','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','scroll','\x20control(s)\x20shown\x20as\x20placeholders','format','setAttribute','subscribeState','some','waitedMs','btnOut','year','whenDataReady','getMonth','data','min','theme','printMargins','addEventListener','running','size','start','connection','height','#fff','define','loadLog','canSaveReportsOnServer','page','number','viaTrigger','the\x20server\x20refused\x20the\x20run','success','print','data-tb-off','admin','deliver','_toolbarWanted','html','1548120QGyVar','forEach','30d','filter','documentElement','\x20history\x20quer','classList','toLocaleString','93634qoGAqg','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','change','Opening\x20','template','getWebuiObject','@page\x20{\x20size:\x20','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','toState','shadowRoot','display:block;width:100%;height:100%;','btnSave','readonly','bottom','reload','lastError','runtime','disabled','Loading\x20data…','custom','padStart','title','body','report','iobroker-webui-report-viewer','slice','32TXFUex','end','warn','Downloaded:\x20','rangeFrom','beginFetchTracking','cssText','207ZSNCtG','has','appendChild','297mm','reportName','Generating…','catch','rangeTo','Generating\x20on\x20the\x20server…','dispose','parentElement','\x20*\x20','name','_paper','width','11890376PqtMfj','get','value','unsubscribeState','head','@top-left\x20{\x20content:\x20\x22\x22;\x20}','\x20→\x20','message','_showBtn','map','file','28DjEhyQ','join','getDate','_getDomElement','load','globalStyle','btnBar','settings','rangeKind','19343181HapyBO','action','hide','kind','\x20landscape','bar','connectedCallback','project','getTime','86307veqMIB','viewer'];a=function(){return ao;};return a();}customElements[K(0x1dc)](K(0x1c3))||customElements[K(0x24b)]('iobroker-webui-report-viewer',b);export{b as ReportViewer};