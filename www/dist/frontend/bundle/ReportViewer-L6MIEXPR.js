const L=c;function c(b,d){b=b-0x119;const e=a();let f=e[b];return f;}(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x1af))/0x1+parseInt(I(0x18b))/0x2*(-parseInt(I(0x179))/0x3)+-parseInt(I(0x181))/0x4*(-parseInt(I(0x169))/0x5)+-parseInt(I(0x122))/0x6*(parseInt(I(0x19e))/0x7)+-parseInt(I(0x188))/0x8*(-parseInt(I(0x155))/0x9)+parseInt(I(0x18e))/0xa+parseInt(I(0x1b8))/0xb;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0xae8b9));import{a as e}from'./chunk-KVPT4J7H.js';import'./chunk-TLCLSVCQ.js';import{s as f,t as g}from'./chunk-TOF3HJP6.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0x1be)+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1][J(0x16e)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x1a7)?{'name':'light','paper':!0x0}:o===K(0x180)?{'name':m[K(0x1c5)](String(n??''))?String(n):K(0x139),'paper':!0x1}:{'name':m[K(0x1c5)](o)?o:K(0x139),'paper':!0x1};}var b=class extends h{static [L(0x14a)]=!0x0;static [L(0x11d)]=i`
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
    `;#r=0x1;#t;get[L(0x130)](){return this.#t;}set[L(0x130)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x19a)](){const M=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this['_bar']=this[M(0x14d)](M(0x1c1)),this['_paper']=this['_getDomElement'](M(0x1a7)),this['_viewer']=this['_getDomElement']('viewer'),this['_status']=this['_getDomElement'](M(0x17b)),this[M(0x147)]=this[M(0x14d)]('zoomLabel'),this[M(0x12d)][M(0x196)]='report',this.#w();let n=(p,q)=>this[M(0x14d)](p)?.[M(0x16a)]('click',q);n(M(0x189),()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n('btnGen',()=>this.#x(M(0x170))),n(M(0x18c),()=>this.#x(M(0x170),M(0x11f))),g['canSaveReportsOnServer']?.()[M(0x166)](p=>{const N=M;let q=this[N(0x14d)](N(0x18c));q&&(q['hidden']=!p);})[M(0x156)](()=>{}),this['_showBtn']=this[M(0x14d)]('btnShow'),n('btnBar',()=>this['toolbarVisible']=!0x1),n(M(0x182),()=>this['toolbarVisible']=!0x0),this['_toolbarWanted']!==void 0x0&&(this[M(0x127)]=this[M(0x121)]),this.#t&&this.#s();}set['toolbarVisible'](l){const O=L;this[O(0x121)]=!!l,this[O(0x16b)]&&(this[O(0x16b)][O(0x199)]=!l),this['_showBtn']&&(this['_showBtn']['hidden']=!!l);}get['toolbarVisible'](){const P=L;return this[P(0x16b)]?!this[P(0x16b)][P(0x199)]:this['_toolbarWanted']??!0x0;}async #s(){const Q=L;if(!this[Q(0x12d)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject'](Q(0x157),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l['settings']??{};this[Q(0x183)][Q(0x11d)][Q(0x124)]=n[Q(0x124)]??Q(0x158),this[Q(0x183)][Q(0x11d)]['height']=n['height']??Q(0x1ac),this[Q(0x12d)]['style'][Q(0x1c4)]='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n[Q(0x165)]??{};this.#u(p,n[Q(0x152)]),await this.#g(n['toolbox']),g[Q(0x1a1)](),this['_viewer'][Q(0x11a)]===this.#t?await this['_viewer'][Q(0x119)]():await this['_viewer']['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this[Q(0x12d)],this[Q(0x12d)]['_rootShadow']),this.#a('report-load',{'name':this.#t}),await this.#k(n['data']),this.#o('Building\x20the\x20page…',''),await this[Q(0x12d)]['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer']['whenDataReady']();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this['_viewer'],this['_viewer']['_rootShadow'],{'missing':s}),this.#a(Q(0x1b7),{'name':this.#t,'missing':s}),s[Q(0x18f)]&&this.#e('No\x20value\x20from:\x20'+s[Q(0x1a3)](0x0,0x3)[Q(0x1a8)](u=>u['id'])[Q(0x14b)](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];[L(0x15e)]=0xea60;#l(l,...n){let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error']('report\x20'+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)['dispatchEvent'](q),q;}#u(l,p){const R=L;if(this[R(0x11e)]!==document['body'])return;let q=R(0x1ba);document[R(0x13d)](q)?.[R(0x172)]();let u=document['createElement'](R(0x11d));u['id']=q;let z=(l['size']??'A4')+(l[R(0x13c)]==='landscape'?R(0x120):''),A=l[R(0x198)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D['push'](R(0x1a2)),C['title']||D[R(0x11c)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C['url']||D['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D[R(0x11c)](R(0x1ae)),u[R(0x136)]=R(0x19f)+z+R(0x187)+B(A['top'])+'mm\x20'+B(A[R(0x128)])+'mm\x20'+B(A['bottom'])+'mm\x20'+B(A[R(0x143)])+'mm;\x20'+D[R(0x14b)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][R(0x132)](u);}#d(l){const T=L;this.#r=Math[T(0x1b2)](0x4,Math[T(0x15a)](0.1,l)),this[T(0x183)][T(0x11d)]['transform']='scale('+this.#r+')',this[T(0x183)][T(0x11d)][T(0x129)]='calc('+this[T(0x183)]['style']['height']+T(0x17d)+(this.#r-0x1)+')',this['_zoomLabel'][T(0x136)]=Math['round'](this.#r*0x64)+'%';}#c(){const U=L;let l=this['_getDomElement'](U(0x14f))['clientWidth']-0x24,n=this[U(0x183)][U(0x12f)]()[U(0x124)]/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){const V=L;window[V(0x12a)]();}async #g(p){const W=L;let q=p?.['items']??{},u=null;try{u=await g[W(0x14e)]();}catch{}let z=u?.[W(0x186)]??[],A=u?.['id']===W(0x1b9),B=this[W(0x16b)]??this[W(0x14d)](W(0x1c1));if(B){for(let C of B[W(0x161)](W(0x159)))C[W(0x16f)]('data-tb-off');for(let [D,E]of Object[W(0x19c)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F='hide':!A&&Array['isArray'](E[W(0x186)])&&E['groups']['length']&&!E[W(0x186)]['some'](G=>z['includes'](G))&&(F=E[W(0x142)]==='disable'?'disable':W(0x1c3)),!!F){for(let G of B[W(0x161)](W(0x185)+D+'\x22]'))G['setAttribute']('data-tb-off',F);}}}}#S(){const X=L;let l=this[X(0x14d)](X(0x178)),p=this['_getDomElement'](X(0x1a9)),q=this['_getDomElement'](X(0x175)),s=this['_getDomElement']('btnApply');if(!l)return;let u=this[X(0x14d)](X(0x17f)),z=A=>{const Y=X;u&&(u[Y(0x199)]=!A);};l['addEventListener']('change',()=>{const Z=X;if(l['value']===Z(0x1bb)){let A=g['reportRange']??this.#b('today');p&&!p[Z(0x16d)]&&(p['value']=this.#m(A[Z(0x1a4)])),q&&!q['value']&&(q['value']=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l[Z(0x16d)]===Z(0x157)?null:this.#b(l['value']));}),s?.['addEventListener']('click',()=>{const a0=X;let A=p?.[a0(0x16d)]?new Date(p[a0(0x16d)])[a0(0x163)]():NaN,B=q?.['value']?new Date(q[a0(0x16d)])['getTime']():NaN;if(!Number['isFinite'](A)||!Number[a0(0x140)](B)){this.#e(a0(0x192),!0x0);return;}if(A>=B){this.#e(a0(0x176),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)[a1(0x145)](0x2,'0');return n['getFullYear']()+'-'+p(n['getMonth']()+0x1)+'-'+p(n[a1(0x194)]())+'T'+p(n[a1(0x135)]())+':'+p(n[a1(0x162)]());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s['getMonth'](),s[a2(0x194)]())['getTime'](),q=0x5265c00;switch(l){case a2(0x1bd):return{'start':p(n),'end':n[a2(0x163)]()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a2(0x163)]()-0x7*q,'end':n[a2(0x163)]()};case a2(0x149):return{'start':n['getTime']()-0x1e*q,'end':n[a2(0x163)]()};case'month':return{'start':new Date(n['getFullYear'](),n[a2(0x18a)](),0x1)[a2(0x163)](),'end':n[a2(0x163)]()};case'year':return{'start':new Date(n[a2(0x160)](),0x0,0x1)['getTime'](),'end':n['getTime']()};default:return{'start':n[a2(0x163)]()-q,'end':n[a2(0x163)]()};}}async #f(l){const a3=L;g[a3(0x17c)](l),this.#e(l?a3(0x150)+new Date(l[a3(0x1a4)])['toLocaleString']()+'\x20→\x20'+new Date(l[a3(0x1bc)])[a3(0x131)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.[a4(0x146)]??'')['trim'](),q=(l?.[a4(0x137)]??'')[a4(0x16e)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C==a5(0x177))return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)['trim']()!=='')return D;let E=Date[a5(0x141)](String(C));return Number[a5(0x140)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F['start']===D&&F[a6(0x1bc)]===E)return;g[a6(0x17c)]({'start':D,'end':E}),this.#e(a6(0x1ab)+new Date(D)['toLocaleString']()+a6(0x190)+new Date(E)[a6(0x131)]());let G=this['_getDomElement']('rangeKind');G&&(G[a6(0x16d)]='report');let H=this[a6(0x14d)]('rangeBoxes');H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g[a7(0x1b5)](C);u[D]=s(F?.[a7(0x1c0)]);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A[a7(0x11c)]([C,E,await g['subscribeState'](C,E)]);}catch(G){console['warn'](a7(0x1a5)+C,G);}};await B(p,a4(0x1a4)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x19b)](){const a8=L;super[a8(0x19b)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[a8(0x17e)](),this.#h=null;}['connectedCallback'](){const a9=L;super[a9(0x12c)]?.(),this[a9(0x16b)]&&this.#w();}#h=null;#w(){const aa=L;this.#h||(this.#h=g[aa(0x14c)]['on'](async l=>{const ab=aa;if(l?.['type']!==ab(0x157)||l[ab(0x1b3)]!==this.#t)return;let n;try{n=await g['getWebuiObject']('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[ab(0x183)]&&(this[ab(0x183)]['style'][ab(0x124)]=p['width']??'210mm',this['_paper'][ab(0x11d)]['height']=p['height']??ab(0x1ac)),this.#u(p['page']??{},p['printMargins']),this.#y(p[ab(0x184)]),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ac=L;let n=this[ac(0x154)];if(!n)return;let p=n['getElementById']('__reportTheme');p||(p=document['createElement'](ac(0x11d)),p['id']='__reportTheme',n['appendChild'](p));let q=x(l),s=String(l??'')[ac(0x16e)]()==='runtime'?'':y(q[ac(0x1b3)],g[ac(0x1b6)]?.['globalStyle']);p['textContent']=ac(0x138)+s+'background:'+(q['paper']?'#fff':ac(0x1b1))+ac(0x167);}#o(l,n){const ad=L;let p=this[ad(0x14d)]('load');if(!p)return;if(l==null){p[ad(0x199)]=!0x0;return;}p[ad(0x199)]=!0x1;let q=this[ad(0x14d)](ad(0x1bf)),s=this[ad(0x14d)]('loadDetail');q&&(q[ad(0x136)]=l),s&&n!==void 0x0&&(s[ad(0x136)]=n);}#T(){const ae=L;let l=this['_getDomElement'](ae(0x193));l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const af=L;let n=this['_getDomElement']('loadLog');if(!n||this.#p['has'](l))return;this.#p[af(0x153)](l);let p=new Date()[af(0x164)]();n[af(0x136)]+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n[af(0x171)];}#$(){const ag=L;let l=Date[ag(0x1c2)](),n=0xbb8,p=()=>{const ah=ag;let u=g['outstandingFetches']();if(!u['length']){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']===ah(0x13f))['length'],A=u[ah(0x18f)]-z,B=[];A&&B[ah(0x11c)](A+'\x20value'+(A>0x1?'s':'')),z&&B[ah(0x11c)](z+'\x20history\x20quer'+(z>0x1?ah(0x13a):'y'));let C=Math[ah(0x1ad)]((Date[ah(0x1c2)]()-l)/0x3e8);this.#o('Loading\x20data…',B['join']('\x20and\x20')+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D[ah(0x12e)]>n&&this.#D('still\x20waiting:\x20'+D['id']+(D['kind']===ah(0x13f)?ah(0x173):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=L;let z=g[ai(0x11b)]+'.'+f['reportStateBase'](q,p),A=async E=>{const aj=ai;try{return(await g['connection'][aj(0x1b5)](z+'.'+E))?.[aj(0x1c0)];}catch{return;}},B=Date[ai(0x1c2)](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(ai(0x134)),A('lastRun')]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ai(0x197))};if(E===ai(0x1aa))return{'ok':!0x1,'error':await A(ai(0x1b4))};}}return{'ok':!0x1,'error':ai(0x168)};}#e(l,n){const ak=L;this['_status']&&(this[ak(0x1b0)]['textContent']=l,this['_status']['classList']['toggle'](ak(0x151),!!n));}async #x(l=L(0x170),p=L(0x133)){const al=L;let q=[al(0x18d),'btnSave'][al(0x1a8)](z=>this['_getDomElement'](z))['filter'](Boolean);q[al(0x123)](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[al(0x174)]??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',s,!0x0)[al(0x13e)]){this.#e('Cancelled.');return;}if(u[al(0x12b)]=s[al(0x12b)],u[al(0x125)]=s['range'],this.#n['length']){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[al(0x14b)](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[al(0x18f)]>0x3?'\x20(+'+(this.#n[al(0x18f)]-0x3)+al(0x15c):''));}this.#e(al(0x15d)),this.#o(s['deliver']==='file'?'Generating\x20on\x20the\x20server…':'Generating…',al(0x16c));let z=await g[al(0x15f)](s['name'],{'project':s[al(0x17a)],'format':s[al(0x12b)],'range':s[al(0x125)],'deliver':s['deliver'],'timeoutMs':this[al(0x15e)],'theme':document[al(0x1a0)]['dataset']['webuiTheme']||void 0x0});if(z[al(0x144)]){let B=await this.#E(s[al(0x1b3)],s[al(0x17a)]);if(!B['ok'])throw new Error(B[al(0x1aa)]||al(0x148));u={...u,'success':!0x0,'file':B[al(0x11f)]??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B[al(0x11f)]??''));}else{u={...u,'success':!0x0,'file':z[al(0x11f)]??null,'pages':z['pages']??null};let C=z['placeholders']?.[al(0x18f)]?'\x20—\x20'+z['placeholders']['length']+al(0x1a6):'';this.#e('Downloaded:\x20'+(z[al(0x11f)]??'')+C);}}catch(D){u['error']=D?.[al(0x195)]??String(D),this.#e(al(0x19d)+u['error'],!0x0);}finally{q[al(0x123)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u[al(0x191)]?al(0x15b):'report-generate-failed',u);try{await this.#l(al(0x126),s,u);}catch{}}};customElements['get'](L(0x13b))||customElements['define']('iobroker-webui-report-viewer',b);export{b as ReportViewer};function a(){const am=['\x20more)','Generating…','generateTimeoutMs','generateReport','getFullYear','querySelectorAll','getMinutes','getTime','toLocaleTimeString','page','then',';color:var(--ui-text,\x20#1d2733);}','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','370cmWgvf','addEventListener','_bar','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','value','trim','removeAttribute','html','scrollHeight','remove','\x20(history)','reportRange','rangeTo','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','number','rangeKind','16125pcjHPD','project','status','setReportRange','\x20*\x20','dispose','rangeBoxes','runtime','11636oqCumG','btnShow','_paper','theme','[data-tb=\x22','groups',';\x20margin:\x20','5392IaIdwH','btnIn','getMonth','418xwWVXn','btnSave','btnGen','8652050jRzFUH','length','\x20→\x20','success','Pick\x20both\x20dates.','loadLog','getDate','message','objectType','lastFile','margin','hidden','ready','disconnectedCallback','entries','Not\x20generated\x20—\x20','3835223yCWcLj','@page\x20{\x20size:\x20','documentElement','beginFetchTracking','@top-left\x20{\x20content:\x20\x22\x22;\x20}','slice','start','[report]\x20range\x20state\x20','\x20control(s)\x20shown\x20as\x20placeholders','paper','map','rangeFrom','error','Range\x20from\x20states:\x20','297mm','round','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','164149dtJutD','_status','var(--ui-page,\x20#fff)','min','name','lastError','getState','config','report-ready','6574953GBDrYp','admin','__report-page-rule','custom','end','today','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','loadWhat','val','bar','now','hide','cssText','test','reload','screenName','namespace','push','style','parentElement','file','\x20landscape','_toolbarWanted','6EDlYVV','forEach','width','range','afterGenerate','toolbarVisible','right','marginBottom','print','format','connectedCallback','_viewer','waitedMs','getBoundingClientRect','reportName','toLocaleString','appendChild','download','lastStatus','getHours','textContent','toState',':host\x20#paper{','light','ies','iobroker-webui-report-viewer','orientation','getElementById','defaultPrevented','history','isFinite','parse','action','left','viaTrigger','padStart','fromState','_zoomLabel','the\x20server\x20refused\x20the\x20run','30d','readonly','join','objectsChanged','_getDomElement','getCurrentUser','scroll','Range:\x20','err','printMargins','add','shadowRoot','11646hgqrOI','catch','report','210mm','[data-tb]','max','report-generated'];a=function(){return am;};return a();}