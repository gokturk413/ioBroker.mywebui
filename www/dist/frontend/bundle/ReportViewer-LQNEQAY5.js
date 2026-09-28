const G=c;(function(l,m){const F=c,n=l();while(!![]){try{const o=-parseInt(F(0xc8))/0x1*(parseInt(F(0x10c))/0x2)+parseInt(F(0xf5))/0x3*(parseInt(F(0xb4))/0x4)+parseInt(F(0xb0))/0x5+-parseInt(F(0x83))/0x6*(parseInt(F(0xa9))/0x7)+parseInt(F(0xdf))/0x8+-parseInt(F(0x9c))/0x9*(parseInt(F(0xf6))/0xa)+parseInt(F(0xbb))/0xb;if(o===m)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0x3f35a));import'./chunk-RQYXUZ7Q.js';import{p as e,q as h}from'./chunk-Y42FM7CC.js';function c(b,d){b=b-0x7b;const e=a();let f=e[b];return f;}import{BaseCustomWebComponentConstructorAppend as i,css as j,html as k}from'@gokturk413/base-custom-webcomponent';var g=class extends i{static ['readonly']=!0x0;static [G(0xc5)]=j`
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
    `;static ['template']=k`
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
    `;#o=0x1;#t;get['reportName'](){return this.#t;}set[G(0x112)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const H=G;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this[H(0x97)]=this[H(0x8a)]('bar'),this[H(0xfd)]=this['_getDomElement'](H(0xc7)),this['_viewer']=this[H(0x8a)]('viewer'),this['_status']=this[H(0x8a)]('status'),this[H(0x102)]=this['_getDomElement'](H(0x106)),this[H(0xb7)]['objectType']=H(0xe9);let m=(n,p)=>this['_getDomElement'](n)?.[H(0xfc)]('click',p);m('btnIn',()=>this.#h(this.#o*1.25)),m('btnOut',()=>this.#h(this.#o/1.25)),m('btnFit',()=>this.#c()),m('btnPrint',()=>this.#v()),this.#w(),m('btnGen',()=>this.#b('html')),m('btnSave',()=>this.#b(H(0xf4),'file')),h['canSaveReportsOnServer']?.()['then'](n=>{const I=H;let p=this['_getDomElement'](I(0xa2));p&&(p['hidden']=!n);})['catch'](()=>{}),this[H(0xd7)]=this[H(0x8a)]('btnShow'),m(H(0xae),()=>this['toolbarVisible']=!0x1),m('btnShow',()=>this[H(0xbf)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this[H(0x89)]),this.#t&&this.#s();}set['toolbarVisible'](l){const J=G;this['_toolbarWanted']=!!l,this[J(0x97)]&&(this[J(0x97)]['hidden']=!l),this['_showBtn']&&(this['_showBtn'][J(0x101)]=!!l);}get[G(0xbf)](){const K=G;return this[K(0x97)]?!this[K(0x97)]['hidden']:this['_toolbarWanted']??!0x0;}async #s(){const L=G;if(!this[L(0xb7)])return;this.#e(''),this.#i(L(0xc2)+this.#t+'…',''),this.#x();let l=await h['getWebuiObject']('report',this.#t);if(!l){this.#i(null),this.#e(L(0xc3)+this.#t,!0x0);return;}let m=l['settings']??{};this['_paper']['style']['width']=m['width']??'210mm',this['_paper']['style'][L(0x80)]=m[L(0x80)]??'297mm',this['_viewer']['style'][L(0xc4)]='display:block;width:100%;height:100%;';let n=m[L(0xff)]??{};this.#f(n,m[L(0xab)]),h[L(0xde)](),this[L(0xb7)]['screenName']===this.#t?await this[L(0xb7)][L(0xf1)]():await this[L(0xb7)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l(L(0xf7),this[L(0xb7)],this[L(0xb7)]['_rootShadow']),this.#a(L(0x96),{'name':this.#t}),await this.#y(m['data']),this.#i(L(0xf3),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let p=this.#k(),{missing:q}=await this['_viewer']['whenDataReady']();p(),h['endFetchTracking'](),this.#i(null),this.#n=q,this.#l(L(0xc1),this[L(0xb7)],this['_viewer']['_rootShadow'],{'missing':q}),this.#a(L(0xec),{'name':this.#t,'missing':q}),q['length']&&this.#e('No\x20value\x20from:\x20'+q['slice'](0x0,0x3)['map'](s=>s['id'])[L(0xfe)](',\x20')+(q['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...m){const M=G;let n=this['_viewer']?.['_scriptObject']?.[l];if(typeof n==M(0x103))try{return n(...m);}catch(p){console['error']('report\x20'+this.#t+':\x20'+l+'\x20threw',p);return;}}#a(l,m,n=!0x1){const N=G;let p=new CustomEvent(l,{'detail':m,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this['_viewer']??this)[N(0xa7)](p),p;}#f(l,m){const O=G;if(this['parentElement']!==document[O(0xe0)])return;let p=O(0x84);document[O(0xa6)](p)?.[O(0xdc)]();let q=document['createElement']('style');q['id']=p;let u=(l[O(0x111)]??'A4')+(l[O(0xb3)]==='landscape'?O(0xe4):''),x=l['margin']??{},y=B=>Number(B)||0x0,z=m??{},A=[];z[O(0xbd)]||A['push'](O(0xe6)),z['title']||A[O(0xb1)](O(0x10a),'@top-right\x20{\x20content:\x20\x22\x22;\x20}'),z['url']||A['push'](O(0x107),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),z['pageNumber']||A[O(0xb1)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),q['textContent']=O(0xbe)+u+';\x20margin:\x20'+y(x[O(0x98)])+'mm\x20'+y(x['right'])+'mm\x20'+y(x['bottom'])+'mm\x20'+y(x['left'])+'mm;\x20'+A['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head']['appendChild'](q);}#h(l){const P=G;this.#o=Math[P(0xef)](0x4,Math[P(0xcc)](0.1,l)),this[P(0xfd)][P(0xc5)][P(0x9a)]=P(0x7c)+this.#o+')',this[P(0xfd)][P(0xc5)]['marginBottom']=P(0xf2)+this[P(0xfd)][P(0xc5)]['height']+'\x20*\x20'+(this.#o-0x1)+')',this['_zoomLabel'][P(0x8d)]=Math['round'](this.#o*0x64)+'%';}#c(){const Q=G;let l=this[Q(0x8a)](Q(0x95))['clientWidth']-0x24,m=this['_paper']['getBoundingClientRect']()[Q(0x8f)]/(this.#o||0x1);m>0x0&&this.#h(Math['min'](0x1,l/m));}#v(){const R=G;window[R(0xee)]();}#w(){const S=G;let l=this[S(0x8a)](S(0x88)),m=this[S(0x8a)]('rangeFrom'),p=this['_getDomElement']('rangeTo'),q=this[S(0x8a)](S(0xb2));if(!l)return;let s=this[S(0x8a)](S(0xed)),u=x=>{s&&(s['hidden']=!x);};l['addEventListener']('change',()=>{const T=S;if(l[T(0xfb)]===T(0x9d)){let x=h[T(0xc9)]??this.#u('today');m&&!m[T(0xfb)]&&(m[T(0xfb)]=this.#p(x['start'])),p&&!p['value']&&(p[T(0xfb)]=this.#p(x[T(0xad)])),u(!0x0);return;}u(!0x1),this.#g(l[T(0xfb)]==='report'?null:this.#u(l[T(0xfb)]));}),q?.['addEventListener']('click',()=>{const U=S;let x=m?.['value']?new Date(m[U(0xfb)])['getTime']():NaN,y=p?.['value']?new Date(p['value'])['getTime']():NaN;if(!Number[U(0xea)](x)||!Number[U(0xea)](y)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(x>=y){this.#e(U(0xd6),!0x0);return;}this.#g({'start':x,'end':y});});}#p(l){const V=G;let m=new Date(l),n=p=>String(p)[V(0x85)](0x2,'0');return m[V(0x9b)]()+'-'+n(m['getMonth']()+0x1)+'-'+n(m['getDate']())+'T'+n(m[V(0xe7)]())+':'+n(m[V(0xe1)]());}#u(l){const W=G;let m=new Date(),n=q=>new Date(q[W(0x9b)](),q[W(0x10e)](),q['getDate']())[W(0x93)](),p=0x5265c00;switch(l){case W(0x8c):return{'start':n(m),'end':m['getTime']()};case'yesterday':return{'start':n(m)-p,'end':n(m)};case'7d':return{'start':m[W(0x93)]()-0x7*p,'end':m['getTime']()};case W(0xcd):return{'start':m['getTime']()-0x1e*p,'end':m['getTime']()};case W(0x81):return{'start':new Date(m['getFullYear'](),m['getMonth'](),0x1)[W(0x93)](),'end':m[W(0x93)]()};case W(0xca):return{'start':new Date(m['getFullYear'](),0x0,0x1)['getTime'](),'end':m[W(0x93)]()};default:return{'start':m['getTime']()-p,'end':m[W(0x93)]()};}}async #g(l){const X=G;h['setReportRange'](l),this.#e(l?'Range:\x20'+new Date(l['start'])['toLocaleString']()+'\x20→\x20'+new Date(l[X(0xad)])[X(0xf9)]():'Report\x20default\x20range'),this.#a(X(0x86),{'range':l}),await this.#s();}async #y(l){const Y=G;let m=(l?.[Y(0xdd)]??'')[Y(0x113)](),p=(l?.['toState']??'')['trim']();if(this.#r&&(this.#r(),this.#r=null),this.#m=null,!m||!p)return;let q=z=>{const Z=Y;if(z==null||z==='')return null;if(typeof z==Z(0xe8))return z;let A=Number(z);if(Number['isFinite'](A)&&String(z)['trim']()!=='')return A;let B=Date[Z(0xb6)](String(z));return Number[Z(0xea)](B)?B:null;},s={'start':null,'end':null},u=async z=>{const a0=Y;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let C=h['reportRange'];if(C&&C[a0(0xd4)]===A&&C[a0(0xad)]===B)return;h[a0(0x9e)]({'start':A,'end':B}),this.#e(a0(0x99)+new Date(A)['toLocaleString']()+a0(0xd1)+new Date(B)['toLocaleString']());let D=this[a0(0x8a)]('rangeKind');D&&(D[a0(0xfb)]=a0(0xe9));let E=this[a0(0x8a)](a0(0xed));E&&(E[a0(0x101)]=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{const a2=Y;try{let C=await h['getState'](z);s[A]=q(C?.['val']);}catch{}let B=(D,E)=>{const a1=c;s[A]=q(E?.[a1(0x10b)]),u(!0x0)['catch'](()=>{});};try{x[a2(0xb1)]([z,B,await h[a2(0xaf)](z,B)]);}catch(D){console[a2(0xa8)]('[report]\x20range\x20state\x20'+z,D);}};await y(m,Y(0xd4)),await y(p,Y(0xad)),this.#m={'from':m,'to':p},this.#r=()=>{const a3=Y;for(let [z,A]of x)try{h[a3(0xce)](z,A);}catch{}},await u(!0x1);}#m=null;#r=null;[G(0xb9)](){const a4=G;super[a4(0xb9)]?.(),this.#r&&(this.#r(),this.#r=null);}#i(l,m){const a5=G;let n=this['_getDomElement'](a5(0x114));if(!n)return;if(l==null){n[a5(0x101)]=!0x0;return;}n['hidden']=!0x1;let p=this['_getDomElement']('loadWhat'),q=this['_getDomElement']('loadDetail');p&&(p[a5(0x8d)]=l),q&&m!==void 0x0&&(q['textContent']=m);}#x(){const a6=G;let l=this[a6(0x8a)]('loadLog');l&&(l[a6(0x8d)]=''),this.#d=new Set();}#d=new Set();#_(l){const a7=G;let m=this['_getDomElement']('loadLog');if(!m||this.#d['has'](l))return;this.#d[a7(0xac)](l);let n=new Date()[a7(0xdb)]();m['textContent']+=n+'\x20\x20'+l+'\x0a',m['scrollTop']=m['scrollHeight'];}#k(){let l=Date['now'](),m=0xbb8,n=()=>{const a8=c;let q=h['outstandingFetches']();if(!q[a8(0xfa)]){this.#i('Rendering…','');return;}let u=q[a8(0x10d)](A=>A['kind']===a8(0xe3))[a8(0xfa)],x=q[a8(0xfa)]-u,y=[];x&&y[a8(0xb1)](x+'\x20value'+(x>0x1?'s':'')),u&&y['push'](u+'\x20history\x20quer'+(u>0x1?a8(0xaa):'y'));let z=Math[a8(0xa5)]((Date['now']()-l)/0x3e8);this.#i('Loading\x20data…',y['join'](a8(0x104))+a8(0xe5)+z+'s');for(let A of q)A[a8(0x7d)]>m&&this.#_('still\x20waiting:\x20'+A['id']+(A[a8(0xa0)]===a8(0xe3)?'\x20(history)':''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #S(m,p,q=0x1d4c0){const a9=G;let u=h[a9(0xd8)]+'.'+e['reportStateBase'](p,m),x=async B=>{const aa=a9;try{return(await h['connection'][aa(0x110)](u+'.'+B))?.[aa(0x10b)];}catch{return;}},y=Date[a9(0x7f)](),z=await x('lastRun'),A=!0x1;for(;Date['now']()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise[a9(0x7e)]([x(a9(0x7b)),x('lastRun')]),D=C!=null&&C!==z;if(B===a9(0x9f)){A=!0x0,this.#i('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x(a9(0xe2))};if(B===a9(0xa3))return{'ok':!0x1,'error':await x('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,m){const ab=G;this['_status']&&(this[ab(0x109)]['textContent']=l,this['_status']['classList']['toggle']('err',!!m));}async #b(l='html',m=G(0x90)){const ac=G;let p=[ac(0xcb),'btnSave'][ac(0xd5)](u=>this[ac(0x8a)](u))['filter'](Boolean);p['forEach'](u=>u['disabled']=!0x0);let q={'name':this.#t,'format':l,'deliver':m,'range':void 0x0,'project':h['currentProject']},s={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(ac(0x8e),q)===!0x1){this.#e(ac(0x10f));return;}if(this.#a(ac(0x82),q,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(s[ac(0xa4)]=q[ac(0xa4)],s[ac(0xd0)]=q[ac(0xd0)],this.#n['length']){let x=this.#n[ac(0xb8)](0x0,0x3)[ac(0xd5)](y=>y['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+x+(this.#n['length']>0x3?ac(0x94)+(this.#n[ac(0xfa)]-0x3)+ac(0xc0):''));}this.#e(ac(0xba)),this.#i(q['deliver']==='file'?'Generating\x20on\x20the\x20server…':ac(0xba),ac(0xf0));let u=await h['generateReport'](q['name'],{'project':q['project'],'format':q['format'],'range':q['range'],'deliver':q[ac(0xd3)],'timeoutMs':this[ac(0x108)]});if(u[ac(0xcf)]){let y=await this.#S(q[ac(0xd9)],q[ac(0x91)]);if(!y['ok'])throw new Error(y['error']||'the\x20server\x20refused\x20the\x20run');s={...s,'success':!0x0,'file':y['file']??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(y[ac(0xbc)]??''));}else{s={...s,'success':!0x0,'file':u['file']??null,'pages':u['pages']??null};let z=u[ac(0x8b)]?.['length']?'\x20—\x20'+u['placeholders'][ac(0xfa)]+ac(0x87):'';this.#e(ac(0xf8)+(u[ac(0xbc)]??'')+z);}}catch(A){s['error']=A?.[ac(0x92)]??String(A),this.#e(ac(0xda)+s['error'],!0x0);}finally{p['forEach'](B=>B['disabled']=!0x1),this.#i(null);}this.#a(s[ac(0xc6)]?ac(0x100):ac(0xeb),s);try{await this.#l(ac(0xd2),q,s);}catch{}}};function a(){const ad=['report-load','_bar','top','Range\x20from\x20states:\x20','transform','getFullYear','9yKZMYY','custom','setReportRange','running','kind','get','btnSave','error','format','round','getElementById','dispatchEvent','warn','871549Egsceb','ies','printMargins','add','end','btnBar','subscribeState','924560cHDXmp','push','btnApply','orientation','176CGAqWK','iobroker-webui-report-viewer','parse','_viewer','slice','disconnectedCallback','Generating…','30800TOYTay','file','date','@page\x20{\x20size:\x20','toolbarVisible','\x20more)','onReportReady','Opening\x20','Report\x20not\x20found:\x20','cssText','style','success','paper','2546IdJQhO','reportRange','year','btnGen','max','30d','unsubscribeState','viaTrigger','range','\x20→\x20','afterGenerate','deliver','start','map','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','_showBtn','namespace','name','Not\x20generated\x20—\x20','toLocaleTimeString','remove','fromState','beginFetchTracking','2555400sXlbVy','body','getMinutes','lastFile','history','\x20landscape','\x20outstanding\x20—\x20','@top-left\x20{\x20content:\x20\x22\x22;\x20}','getHours','number','report','isFinite','report-generate-failed','report-ready','rangeBoxes','print','min','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','reload','calc(','Building\x20the\x20page…','html','31587fhQhry','1931110IZyaHF','onReportLoad','Downloaded:\x20','toLocaleString','length','value','addEventListener','_paper','join','page','report-generated','hidden','_zoomLabel','function','\x20and\x20','define','zoomLabel','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','generateTimeoutMs','_status','@top-center\x20{\x20content:\x20\x22\x22;\x20}','val','16NNeiSa','filter','getMonth','Cancelled\x20by\x20the\x20report\x20script.','getState','size','reportName','trim','load','lastStatus','scale(','waitedMs','all','now','height','month','report-before-generate','24LGPhNn','__report-page-rule','padStart','report-range-changed','\x20control(s)\x20shown\x20as\x20placeholders','rangeKind','_toolbarWanted','_getDomElement','placeholders','today','textContent','beforeGenerate','width','download','project','message','getTime','\x20(+','scroll'];a=function(){return ad;};return a();}customElements[G(0xa1)]('iobroker-webui-report-viewer')||customElements[G(0x105)](G(0xb5),g);export{g as ReportViewer};