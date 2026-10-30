const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x1b6))/0x1*(-parseInt(I(0x208))/0x2)+-parseInt(I(0x199))/0x3+-parseInt(I(0x20b))/0x4+-parseInt(I(0x232))/0x5+parseInt(I(0x19f))/0x6*(-parseInt(I(0x191))/0x7)+parseInt(I(0x234))/0x8+parseInt(I(0x18b))/0x9;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x22ac3));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-5QDJJATQ.js';import{F as f,G as g}from'../chunk-GXA5QZRV.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';function c(b,d){b=b-0x17a;const e=a();let f=e[b];return f;}var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m[J(0x22e)](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0x1fc)+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q[J(0x188)](s))p+=z[0x1]['trim']()[J(0x185)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x1e3)?{'name':K(0x1ff),'paper':!0x0}:o==='runtime'?{'name':m['test'](String(n??''))?String(n):K(0x1ff),'paper':!0x1}:{'name':m[K(0x22e)](o)?o:K(0x1ff),'paper':!0x1};}var b=class extends h{static [L(0x218)]=!0x0;static ['style']=i`
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
    `;#r=0x1;#t;get[L(0x1e7)](){return this.#t;}set[L(0x1e7)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const M=L;let l=this.#t;this[M(0x1a2)](),l&&!this.#t&&(this.#t=l),this[M(0x1d4)]=this[M(0x230)](M(0x1d5)),this[M(0x19b)]=this['_getDomElement']('paper'),this[M(0x1b4)]=this[M(0x230)](M(0x1ee)),this[M(0x1e9)]=this['_getDomElement'](M(0x1fd)),this[M(0x19a)]=this['_getDomElement'](M(0x1d8)),this[M(0x1b4)]['objectType']=M(0x228),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener'](M(0x1ae),q);n('btnIn',()=>this.#d(this.#r*1.25)),n(M(0x1e5),()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n(M(0x225),()=>this.#_()),this.#S(),n('btnGen',()=>this.#x(M(0x1c6))),n('btnSave',()=>this.#x(M(0x1c6),'file')),g[M(0x213)]?.()[M(0x195)](p=>{const N=M;let q=this[N(0x230)](N(0x18e));q&&(q['hidden']=!p);})['catch'](()=>{}),this['_showBtn']=this['_getDomElement'](M(0x202)),n('btnBar',()=>this['toolbarVisible']=!0x1),n('btnShow',()=>this['toolbarVisible']=!0x0),this[M(0x200)]!==void 0x0&&(this[M(0x223)]=this[M(0x200)]),this.#t&&this.#s();}set['toolbarVisible'](l){const O=L;this[O(0x200)]=!!l,this[O(0x1d4)]&&(this['_bar']['hidden']=!l),this[O(0x1db)]&&(this['_showBtn']['hidden']=!!l);}get[L(0x223)](){const P=L;return this[P(0x1d4)]?!this['_bar']['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const Q=L;if(!this[Q(0x1b4)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[Q(0x1d2)]??{};this['_paper']['style'][Q(0x1e8)]=n['width']??'210mm',this[Q(0x19b)]['style'][Q(0x1a4)]=n[Q(0x1a4)]??Q(0x207),this['_viewer']['style']['cssText']=Q(0x196),this.#y(n['theme']);let p=n['page']??{};this.#u(p,n[Q(0x19c)]),await this.#g(n['toolbox']),g[Q(0x222)](),this[Q(0x1b4)][Q(0x1c9)]===this.#t?await this['_viewer']['reload']():await this[Q(0x1b4)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l(Q(0x1cd),this['_viewer'],this['_viewer'][Q(0x217)]),this.#a('report-load',{'name':this.#t}),await this.#k(n[Q(0x214)]),this.#o('Building\x20the\x20page…',''),await this[Q(0x1b4)]['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer'][Q(0x1b1)]();q(),g[Q(0x21c)](),this.#o(null),this.#n=s,this.#l(Q(0x21d),this['_viewer'],this['_viewer'][Q(0x217)],{'missing':s}),this.#a(Q(0x192),{'name':this.#t,'missing':s}),s[Q(0x209)]&&this.#e('No\x20value\x20from:\x20'+s[Q(0x1dc)](0x0,0x3)['map'](u=>u['id'])[Q(0x22d)](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p==R(0x1f4))try{return p(...n);}catch(q){console[R(0x205)](R(0x22c)+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){const T=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[T(0x1b4)]??this)[T(0x1d7)](q),q;}#u(l,p){const U=L;if(this[U(0x21b)]!==document['body'])return;let q=U(0x237);document[U(0x21e)](q)?.[U(0x231)]();let u=document[U(0x224)]('style');u['id']=q;let z=(l[U(0x18a)]??'A4')+(l[U(0x1ec)]===U(0x22b)?U(0x180):''),A=l[U(0x1f7)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),C[U(0x197)]||D['push'](U(0x1eb),'@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C['url']||D[U(0x182)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',U(0x1af)),C[U(0x187)]||D['push'](U(0x1ed)),u['textContent']='@page\x20{\x20size:\x20'+z+U(0x1a8)+B(A[U(0x216)])+U(0x229)+B(A['right'])+'mm\x20'+B(A['bottom'])+'mm\x20'+B(A['left'])+'mm;\x20'+D['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][U(0x1b0)](u);}#d(l){const V=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this['_paper']['style']['transform']=V(0x1aa)+this.#r+')',this['_paper']['style']['marginBottom']='calc('+this[V(0x19b)]['style']['height']+V(0x183)+(this.#r-0x1)+')',this['_zoomLabel']['textContent']=Math[V(0x235)](this.#r*0x64)+'%';}#c(){const W=L;let l=this[W(0x230)](W(0x1fa))['clientWidth']-0x24,n=this[W(0x19b)][W(0x1b7)]()[W(0x1e8)]/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){window['print']();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.[X(0x1ad)]??[],A=u?.['id']===X(0x1f2),B=this[X(0x1d4)]??this[X(0x230)]('bar');if(B){for(let C of B[X(0x1c3)]('[data-tb]'))C['removeAttribute'](X(0x1f5));for(let [D,E]of Object[X(0x1b9)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F='hide':!A&&Array[X(0x1b8)](E[X(0x1ad)])&&E[X(0x1ad)][X(0x209)]&&!E['groups']['some'](G=>z['includes'](G))&&(F=E[X(0x1f6)]===X(0x184)?X(0x184):X(0x1c1)),!!F){for(let G of B['querySelectorAll']('[data-tb=\x22'+D+'\x22]'))G[X(0x1cb)]('data-tb-off',F);}}}}#S(){const Y=L;let l=this[Y(0x230)](Y(0x201)),p=this[Y(0x230)]('rangeFrom'),q=this[Y(0x230)](Y(0x203)),s=this['_getDomElement'](Y(0x1ef));if(!l)return;let u=this[Y(0x230)](Y(0x1b3)),z=A=>{const Z=Y;u&&(u[Z(0x1ab)]=!A);};l[Y(0x1e4)](Y(0x20e),()=>{const a0=Y;if(l['value']==='custom'){let A=g[a0(0x1c8)]??this.#b(a0(0x1da));p&&!p['value']&&(p[a0(0x1de)]=this.#m(A['start'])),q&&!q[a0(0x1de)]&&(q['value']=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l['value']===a0(0x228)?null:this.#b(l['value']));}),s?.['addEventListener'](Y(0x1ae),()=>{const a1=Y;let A=p?.['value']?new Date(p['value'])[a1(0x211)]():NaN,B=q?.[a1(0x1de)]?new Date(q[a1(0x1de)])[a1(0x211)]():NaN;if(!Number[a1(0x1fb)](A)||!Number['isFinite'](B)){this.#e(a1(0x1bd),!0x0);return;}if(A>=B){this.#e(a1(0x1cc),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=L;let n=new Date(l),p=q=>String(q)[a2(0x1f9)](0x2,'0');return n[a2(0x186)]()+'-'+p(n[a2(0x204)]()+0x1)+'-'+p(n[a2(0x181)]())+'T'+p(n[a2(0x233)]())+':'+p(n['getMinutes']());}#b(l){const a3=L;let n=new Date(),p=s=>new Date(s[a3(0x186)](),s['getMonth'](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case a3(0x1da):return{'start':p(n),'end':n[a3(0x211)]()};case a3(0x20d):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a3(0x211)]()};case'30d':return{'start':n['getTime']()-0x1e*q,'end':n[a3(0x211)]()};case a3(0x1df):return{'start':new Date(n[a3(0x186)](),n[a3(0x204)](),0x1)['getTime'](),'end':n[a3(0x211)]()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)['getTime'](),'end':n[a3(0x211)]()};default:return{'start':n[a3(0x211)]()-q,'end':n[a3(0x211)]()};}}async #f(l){const a4=L;g['setReportRange'](l),this.#e(l?a4(0x1c4)+new Date(l['start'])['toLocaleString']()+'\x20→\x20'+new Date(l[a4(0x1a3)])['toLocaleString']():'Report\x20default\x20range'),this.#a(a4(0x20c),{'range':l}),await this.#s();}async #k(l){const a5=L;let p=(l?.['fromState']??'')[a5(0x1e2)](),q=(l?.['toState']??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C==a6(0x1fe))return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)['trim']()!=='')return D;let E=Date['parse'](String(C));return Number[a6(0x1fb)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g[a7(0x1c8)];if(F&&F[a7(0x212)]===D&&F['end']===E)return;g['setReportRange']({'start':D,'end':E}),this.#e(a7(0x189)+new Date(D)[a7(0x198)]()+'\x20→\x20'+new Date(E)['toLocaleString']());let G=this[a7(0x230)]('rangeKind');G&&(G['value']='report');let H=this[a7(0x230)]('rangeBoxes');H&&(H[a7(0x1ab)]=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a5;try{let F=await g[a8(0x221)](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a9=a8;u[D]=s(H?.[a9(0x236)]),z(!0x0)[a9(0x1c7)](()=>{});};try{A['push']([C,E,await g['subscribeState'](C,E)]);}catch(G){console['warn']('[report]\x20range\x20state\x20'+C,G);}};await B(p,'start'),await B(q,a5(0x1a3)),this.#v={'from':p,'to':q},this.#i=()=>{const aa=a5;for(let [C,D]of A)try{g[aa(0x18f)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x1bf)](){const ab=L;super[ab(0x1bf)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[ab(0x1d6)](),this.#h=null;}[L(0x18d)](){super['connectedCallback']?.(),this['_bar']&&this.#w();}#h=null;#w(){const ac=L;this.#h||(this.#h=g[ac(0x1a6)]['on'](async l=>{const ad=ac;if(l?.[ad(0x22a)]!=='report'||l['name']!==this.#t)return;let n;try{n=await g[ad(0x1be)]('report',this.#t);}catch{return;}if(!n)return;let p=n[ad(0x1d2)]??{};this[ad(0x19b)]&&(this['_paper']['style'][ad(0x1e8)]=p['width']??'210mm',this[ad(0x19b)][ad(0x1b2)][ad(0x1a4)]=p['height']??'297mm'),this.#u(p[ad(0x1c2)]??{},p['printMargins']),this.#y(p[ad(0x1b5)]),await this.#g(p[ad(0x1e1)]),this.#c();}));}#y(l){const ae=L;let n=this[ae(0x21f)];if(!n)return;let p=n[ae(0x21e)]('__reportTheme');p||(p=document[ae(0x224)]('style'),p['id']='__reportTheme',n[ae(0x1b0)](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q[ae(0x19e)],g[ae(0x194)]?.[ae(0x1ce)]);p[ae(0x1ea)]=ae(0x1e0)+s+ae(0x1d1)+(q[ae(0x1e3)]?'#fff':'var(--ui-page,\x20#fff)')+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const af=L;let p=this['_getDomElement'](af(0x1d9));if(!p)return;if(l==null){p['hidden']=!0x0;return;}p['hidden']=!0x1;let q=this['_getDomElement']('loadWhat'),s=this[af(0x230)](af(0x220));q&&(q['textContent']=l),s&&n!==void 0x0&&(s[af(0x1ea)]=n);}#T(){const ag=L;let l=this[ag(0x230)](ag(0x1ba));l&&(l[ag(0x1ea)]=''),this.#p=new Set();}#p=new Set();#D(l){const ah=L;let n=this[ah(0x230)](ah(0x1ba));if(!n||this.#p[ah(0x1bc)](l))return;this.#p[ah(0x21a)](l);let p=new Date()['toLocaleTimeString']();n[ah(0x1ea)]+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n[ah(0x219)];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const ai=c;let u=g['outstandingFetches']();if(!u[ai(0x209)]){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']==='history')['length'],A=u[ai(0x209)]-z,B=[];A&&B['push'](A+ai(0x17f)+(A>0x1?'s':'')),z&&B[ai(0x182)](z+ai(0x17c)+(z>0x1?'ies':'y'));let C=Math[ai(0x235)]((Date['now']()-l)/0x3e8);this.#o(ai(0x18c),B[ai(0x22d)](ai(0x22f))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D['waitedMs']>n&&this.#D('still\x20waiting:\x20'+D['id']+(D[ai(0x1f3)]==='history'?ai(0x1a7):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const aj=L;let z=g['namespace']+'.'+f['reportStateBase'](q,p),A=async E=>{try{return(await g['connection']['getState'](z+'.'+E))?.['val'];}catch{return;}},B=Date['now'](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[aj(0x1c5)]([A(aj(0x19d)),A(aj(0x1ac))]),G=F!=null&&F!==C;if(E===aj(0x1d0)){D=!0x0,this.#o(aj(0x193),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E===aj(0x205))return{'ok':!0x1,'error':await A(aj(0x226))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const ak=L;this[ak(0x1e9)]&&(this[ak(0x1e9)][ak(0x1ea)]=l,this['_status']['classList']['toggle'](ak(0x20f),!!n));}async #x(l='html',p='download'){const al=L;let q=[al(0x1a5),al(0x18e)][al(0x1a9)](z=>this['_getDomElement'](z))['filter'](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g['reportRange']??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(al(0x1f0),s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',s,!0x0)[al(0x215)]){this.#e('Cancelled.');return;}if(u['format']=s[al(0x190)],u[al(0x1a1)]=s[al(0x1a1)],this.#n['length']){let A=this.#n['slice'](0x0,0x3)[al(0x1a9)](B=>B['id'])['join'](',\x20');throw new Error(al(0x1f8)+A+(this.#n['length']>0x3?'\x20(+'+(this.#n[al(0x209)]-0x3)+'\x20more)':''));}this.#e(al(0x1ca)),this.#o(s['deliver']==='file'?'Generating\x20on\x20the\x20server…':'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g[al(0x17a)](s[al(0x19e)],{'project':s['project'],'format':s['format'],'range':s['range'],'deliver':s['deliver'],'timeoutMs':this[al(0x1c0)],'theme':document[al(0x1f1)][al(0x1cf)][al(0x1a0)]||void 0x0});if(z['viaTrigger']){let B=await this.#E(s[al(0x19e)],s[al(0x1bb)]);if(!B['ok'])throw new Error(B['error']||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B[al(0x17d)]??null},this.#e(al(0x1dd)+(B[al(0x17d)]??''));}else{u={...u,'success':!0x0,'file':z['file']??null,'pages':z['pages']??null};let C=z[al(0x206)]?.[al(0x209)]?'\x20—\x20'+z[al(0x206)]['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e(al(0x1e6)+(z['file']??'')+C);}}catch(D){u['error']=D?.[al(0x20a)]??String(D),this.#e(al(0x227)+u[al(0x205)],!0x0);}finally{q[al(0x210)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?al(0x1d3):al(0x17b),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements['get'](L(0x17e))||customElements['define']('iobroker-webui-report-viewer',b);export{b as ReportViewer};function a(){const am=['val','__report-page-rule','generateReport','report-generate-failed','\x20history\x20quer','file','iobroker-webui-report-viewer','\x20value','\x20landscape','getDate','push','\x20*\x20','disable','replace','getFullYear','pageNumber','matchAll','Range\x20from\x20states:\x20','size','2119797iHcLNI','Loading\x20data…','connectedCallback','btnSave','unsubscribeState','format','35gFjxVR','report-ready','Generating\x20on\x20the\x20server…','config','then','display:block;width:100%;height:100%;','title','toLocaleString','316053mQqONY','_zoomLabel','_paper','printMargins','lastStatus','name','9804zfxTvp','webuiTheme','range','_parseAttributesToProperties','end','height','btnGen','objectsChanged','\x20(history)',';\x20margin:\x20','map','scale(','hidden','lastRun','groups','click','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','appendChild','whenDataReady','style','rangeBoxes','_viewer','theme','3NKmeOD','getBoundingClientRect','isArray','entries','loadLog','project','has','Pick\x20both\x20dates.','getWebuiObject','disconnectedCallback','generateTimeoutMs','hide','page','querySelectorAll','Range:\x20','all','html','catch','reportRange','screenName','Generating…','setAttribute','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','onReportLoad','globalStyle','dataset','running','background:','settings','report-generated','_bar','bar','dispose','dispatchEvent','zoomLabel','load','today','_showBtn','slice','Saved\x20on\x20the\x20server:\x20','value','month',':host\x20#paper{','toolbox','trim','paper','addEventListener','btnOut','Downloaded:\x20','reportName','width','_status','textContent','@top-center\x20{\x20content:\x20\x22\x22;\x20}','orientation','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','viewer','btnApply','beforeGenerate','documentElement','admin','kind','function','data-tb-off','action','margin','no\x20value\x20from:\x20','padStart','scroll','isFinite','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','status','number','light','_toolbarWanted','rangeKind','btnShow','rangeTo','getMonth','error','placeholders','297mm','22782GaNBlr','length','message','795780GDYjio','report-range-changed','yesterday','change','err','forEach','getTime','start','canSaveReportsOnServer','data','defaultPrevented','top','_rootShadow','readonly','scrollHeight','add','parentElement','endFetchTracking','onReportReady','getElementById','shadowRoot','loadDetail','getState','beginFetchTracking','toolbarVisible','createElement','btnPrint','lastError','Not\x20generated\x20—\x20','report','mm\x20','type','landscape','report\x20','join','test','\x20and\x20','_getDomElement','remove','12195cYPOLv','getHours','1497744uVHWrc','round'];a=function(){return am;};return a();}