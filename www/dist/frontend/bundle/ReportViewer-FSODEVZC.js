const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0xfc))/0x1+-parseInt(I(0x128))/0x2+-parseInt(I(0x94))/0x3+parseInt(I(0xdc))/0x4+-parseInt(I(0xac))/0x5*(parseInt(I(0xdf))/0x6)+parseInt(I(0x135))/0x7*(-parseInt(I(0xcc))/0x8)+parseInt(I(0x101))/0x9;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x6c52a));import{a as e}from'./chunk-KVPT4J7H.js';function c(b,d){b=b-0x8d;const e=a();let f=e[b];return f;}import'./chunk-GKVOZVKS.js';import{s as f,t as g}from'./chunk-6UCSEZIG.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m[J(0xe0)](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+J(0x14f),'g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x11e)]();return!o||o==='paper'?{'name':K(0xfd),'paper':!0x0}:o==='runtime'?{'name':m['test'](String(n??''))?String(n):'light','paper':!0x1}:{'name':m[K(0xe0)](o)?o:K(0xfd),'paper':!0x1};}var b=class extends h{static ['readonly']=!0x0;static ['style']=i`
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
    `;static [L(0x141)]=j`
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
    `;#r=0x1;#t;get[L(0x129)](){return this.#t;}set[L(0x129)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x14d)](){const M=L;let l=this.#t;this[M(0x14a)](),l&&!this.#t&&(this.#t=l),this['_bar']=this[M(0x148)]('bar'),this['_paper']=this[M(0x148)]('paper'),this['_viewer']=this['_getDomElement']('viewer'),this['_status']=this[M(0x148)]('status'),this[M(0x9f)]=this['_getDomElement'](M(0xad)),this['_viewer'][M(0xbe)]='report',this.#w();let n=(p,q)=>this[M(0x148)](p)?.['addEventListener'](M(0x92),q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(M(0x91),()=>this.#c()),n(M(0xb2),()=>this.#_()),this.#S(),n(M(0x151),()=>this.#x(M(0xeb))),n('btnSave',()=>this.#x(M(0xeb),M(0xe5))),g[M(0x90)]?.()['then'](p=>{const N=M;let q=this[N(0x148)]('btnSave');q&&(q['hidden']=!p);})['catch'](()=>{}),this[M(0xfa)]=this['_getDomElement'](M(0x121)),n(M(0x102),()=>this[M(0xff)]=!0x1),n('btnShow',()=>this['toolbarVisible']=!0x0),this[M(0xe9)]!==void 0x0&&(this[M(0xff)]=this[M(0xe9)]),this.#t&&this.#s();}set['toolbarVisible'](l){const O=L;this['_toolbarWanted']=!!l,this[O(0x116)]&&(this[O(0x116)][O(0xb9)]=!l),this[O(0xfa)]&&(this['_showBtn']['hidden']=!!l);}get['toolbarVisible'](){const P=L;return this['_bar']?!this[P(0x116)]['hidden']:this[P(0xe9)]??!0x0;}async #s(){const Q=L;if(!this[Q(0x106)])return;this.#e(''),this.#o(Q(0x104)+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[Q(0xe4)]??{};this[Q(0xc7)][Q(0x95)]['width']=n['width']??Q(0x93),this[Q(0xc7)][Q(0x95)]['height']=n[Q(0xef)]??'297mm',this[Q(0x106)]['style'][Q(0x10b)]=Q(0xaa),this.#y(n['theme']);let p=n['page']??{};this.#u(p,n['printMargins']),await this.#g(n['toolbox']),g[Q(0x11f)](),this['_viewer']['screenName']===this.#t?await this['_viewer'][Q(0x98)]():await this[Q(0x106)][Q(0x147)](this.#t),this.#c(),this.#l('onReportLoad',this[Q(0x106)],this[Q(0x106)]['_rootShadow']),this.#a(Q(0x10a),{'name':this.#t}),await this.#k(n[Q(0xfe)]),this.#o('Building\x20the\x20page…',''),await this[Q(0x106)]['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[Q(0x106)][Q(0x113)]();q(),g[Q(0x11b)](),this.#o(null),this.#n=s,this.#l('onReportReady',this[Q(0x106)],this['_viewer']['_rootShadow'],{'missing':s}),this.#a(Q(0xc2),{'name':this.#t,'missing':s}),s[Q(0xe8)]&&this.#e(Q(0xbd)+s[Q(0x131)](0x0,0x3)[Q(0xc9)](u=>u['id'])[Q(0xf7)](',\x20')+(s[Q(0xe8)]>0x3?'\x20…':''),!0x0);}#n=[];[L(0xd7)]=0xea60;#l(l,...n){const R=L;let p=this[R(0x106)]?.[R(0xd9)]?.[l];if(typeof p==R(0xd5))try{return p(...n);}catch(q){console['error']('report\x20'+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){const T=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[T(0x106)]??this)[T(0xe7)](q),q;}#u(l,p){const U=L;if(this[U(0x9a)]!==document['body'])return;let q='__report-page-rule';document[U(0xe1)](q)?.[U(0xaf)]();let u=document[U(0xd2)]('style');u['id']=q;let z=(l['size']??'A4')+(l['orientation']==='landscape'?'\x20landscape':''),A=l[U(0x137)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[U(0xb4)]||D[U(0x99)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),C[U(0xd8)]||D[U(0x99)](U(0x11a),U(0x130)),C[U(0xa7)]||D[U(0x99)](U(0x12b),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D['push'](U(0x12d)),u['textContent']=U(0x118)+z+';\x20margin:\x20'+B(A[U(0xa2)])+'mm\x20'+B(A[U(0x120)])+U(0xd4)+B(A[U(0xee)])+U(0xd4)+B(A[U(0xe2)])+'mm;\x20'+D[U(0xf7)]('\x20')+U(0x138),document[U(0x123)][U(0x11d)](u);}#d(l){const V=L;this.#r=Math['min'](0x4,Math[V(0xb0)](0.1,l)),this['_paper'][V(0x95)][V(0x146)]='scale('+this.#r+')',this['_paper']['style'][V(0x115)]='calc('+this[V(0xc7)][V(0x95)][V(0xef)]+V(0x10f)+(this.#r-0x1)+')',this[V(0x9f)][V(0xcb)]=Math[V(0xbc)](this.#r*0x64)+'%';}#c(){const W=L;let l=this['_getDomElement']('scroll')[W(0x112)]-0x24,n=this[W(0xc7)][W(0x13e)]()[W(0x150)]/(this.#r||0x1);n>0x0&&this.#d(Math[W(0x132)](0x1,l/n));}#_(){window['print']();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']===X(0x9d),B=this[X(0x116)]??this[X(0x148)]('bar');if(B){for(let C of B['querySelectorAll'](X(0x107)))C['removeAttribute']('data-tb-off');for(let [D,E]of Object[X(0xa0)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F='hide':!A&&Array[X(0x154)](E[X(0xca)])&&E[X(0xca)]['length']&&!E[X(0xca)][X(0xb7)](G=>z['includes'](G))&&(F=E[X(0x14b)]==='disable'?'disable':'hide'),!!F){for(let G of B['querySelectorAll']('[data-tb=\x22'+D+'\x22]'))G[X(0x10c)](X(0xa1),F);}}}}#S(){const Y=L;let l=this['_getDomElement'](Y(0xf4)),p=this[Y(0x148)](Y(0x10e)),q=this[Y(0x148)](Y(0x8e)),s=this['_getDomElement'](Y(0xb1));if(!l)return;let u=this['_getDomElement'](Y(0x134)),z=A=>{const Z=Y;u&&(u[Z(0xb9)]=!A);};l[Y(0xec)](Y(0x100),()=>{const a0=Y;if(l['value']==='custom'){let A=g[a0(0x133)]??this.#b('today');p&&!p['value']&&(p[a0(0xc4)]=this.#m(A['start'])),q&&!q['value']&&(q[a0(0xc4)]=this.#m(A[a0(0x8f)])),z(!0x0);return;}z(!0x1),this.#f(l[a0(0xc4)]==='report'?null:this.#b(l['value']));}),s?.[Y(0xec)]('click',()=>{const a1=Y;let A=p?.[a1(0xc4)]?new Date(p['value'])[a1(0x12f)]():NaN,B=q?.[a1(0xc4)]?new Date(q[a1(0xc4)])[a1(0x12f)]():NaN;if(!Number[a1(0x9e)](A)||!Number[a1(0x9e)](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e(a1(0x143),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a2(0x14e)]()+'-'+p(n['getMonth']()+0x1)+'-'+p(n[a2(0xed)]())+'T'+p(n[a2(0xc0)]())+':'+p(n[a2(0x122)]());}#b(l){const a3=L;let n=new Date(),p=s=>new Date(s[a3(0x14e)](),s['getMonth'](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n[a3(0x12f)]()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a3(0x12f)]()-0x7*q,'end':n['getTime']()};case'30d':return{'start':n['getTime']()-0x1e*q,'end':n[a3(0x12f)]()};case'month':return{'start':new Date(n['getFullYear'](),n[a3(0xb3)](),0x1)['getTime'](),'end':n[a3(0x12f)]()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)['getTime'](),'end':n[a3(0x12f)]()};default:return{'start':n[a3(0x12f)]()-q,'end':n[a3(0x12f)]()};}}async #f(l){const a4=L;g['setReportRange'](l),this.#e(l?a4(0x117)+new Date(l[a4(0x109)])[a4(0x127)]()+a4(0x9c)+new Date(l['end'])[a4(0x127)]():a4(0x13b)),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a5=L;let p=(l?.[a5(0xa5)]??'')['trim'](),q=(l?.[a5(0xa3)]??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)['trim']()!=='')return D;let E=Date[a6(0xb6)](String(C));return Number[a6(0x9e)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a7(0x139),!0x0);return;}let F=g[a7(0x133)];if(F&&F['start']===D&&F['end']===E)return;g[a7(0x105)]({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)['toLocaleString']()+'\x20→\x20'+new Date(E)[a7(0x127)]());let G=this['_getDomElement'](a7(0xf4));G&&(G['value']=a7(0xde));let H=this[a7(0x148)](a7(0x134));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a5;try{let F=await g[a8(0xf3)](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a9=a8;u[D]=s(H?.['val']),z(!0x0)[a9(0x142)](()=>{});};try{A['push']([C,E,await g[a8(0x13a)](C,E)]);}catch(G){console['warn']('[report]\x20range\x20state\x20'+C,G);}};await B(p,'start'),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x149)](){const aa=L;super[aa(0x149)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[aa(0x126)](),this.#h=null;}['connectedCallback'](){const ab=L;super[ab(0x111)]?.(),this['_bar']&&this.#w();}#h=null;#w(){const ac=L;this.#h||(this.#h=g[ac(0xbf)]['on'](async l=>{const ad=ac;if(l?.[ad(0x114)]!==ad(0xde)||l['name']!==this.#t)return;let n;try{n=await g[ad(0x9b)]('report',this.#t);}catch{return;}if(!n)return;let p=n[ad(0xe4)]??{};this['_paper']&&(this[ad(0xc7)][ad(0x95)]['width']=p[ad(0x150)]??'210mm',this[ad(0xc7)]['style']['height']=p['height']??ad(0xc3)),this.#u(p[ad(0xd3)]??{},p[ad(0x97)]),this.#y(p['theme']),await this.#g(p[ad(0xcd)]),this.#c();}));}#y(l){const ae=L;let n=this['shadowRoot'];if(!n)return;let p=n['getElementById'](ae(0x12c));p||(p=document['createElement']('style'),p['id']='__reportTheme',n['appendChild'](p));let q=x(l),s=String(l??'')[ae(0x11e)]()==='runtime'?'':y(q['name'],g['config']?.[ae(0xcf)]);p['textContent']=':host\x20#paper{'+s+ae(0x153)+(q[ae(0x119)]?ae(0x13f):ae(0xa4))+ae(0xce);}#o(l,n){const af=L;let p=this[af(0x148)]('load');if(!p)return;if(l==null){p[af(0xb9)]=!0x0;return;}p['hidden']=!0x1;let q=this['_getDomElement'](af(0x11c)),s=this[af(0x148)]('loadDetail');q&&(q[af(0xcb)]=l),s&&n!==void 0x0&&(s[af(0xcb)]=n);}#T(){const ag=L;let l=this['_getDomElement'](ag(0x12a));l&&(l[ag(0xcb)]=''),this.#p=new Set();}#p=new Set();#D(l){const ah=L;let n=this['_getDomElement'](ah(0x12a));if(!n||this.#p['has'](l))return;this.#p[ah(0xf5)](l);let p=new Date()['toLocaleTimeString']();n[ah(0xcb)]+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n['scrollHeight'];}#$(){const ai=L;let l=Date[ai(0x152)](),n=0xbb8,p=()=>{const aj=ai;let u=g[aj(0x13d)]();if(!u['length']){this.#o(aj(0xba),'');return;}let z=u['filter'](D=>D['kind']===aj(0xdb))[aj(0xe8)],A=u['length']-z,B=[];A&&B[aj(0x99)](A+'\x20value'+(A>0x1?'s':'')),z&&B['push'](z+'\x20history\x20quer'+(z>0x1?aj(0x140):'y'));let C=Math[aj(0xbc)]((Date[aj(0x152)]()-l)/0x3e8);this.#o('Loading\x20data…',B['join'](aj(0xc6))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D['waitedMs']>n&&this.#D('still\x20waiting:\x20'+D['id']+(D['kind']===aj(0xdb)?aj(0xc8):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ak=L;let z=g['namespace']+'.'+f[ak(0xe3)](q,p),A=async E=>{const al=ak;try{return(await g['connection'][al(0xf3)](z+'.'+E))?.[al(0xc1)];}catch{return;}},B=Date['now'](),C=await A(ak(0x8d)),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[ak(0xf2)]([A(ak(0x144)),A('lastRun')]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ak(0x136))};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const am=L;this[am(0xc5)]&&(this['_status']['textContent']=l,this['_status'][am(0x103)]['toggle']('err',!!n));}async #x(l='html',p='download'){const an=L;let q=[an(0x151),'btnSave']['map'](z=>this['_getDomElement'](z))[an(0x12e)](Boolean);q[an(0xae)](z=>z[an(0x13c)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g['reportRange']??void 0x0,'project':g[an(0x10d)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(an(0xa6),s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a(an(0xf0),s,!0x0)['defaultPrevented']){this.#e(an(0xd6));return;}if(u[an(0xda)]=s[an(0xda)],u['range']=s['range'],this.#n[an(0xe8)]){let A=this.#n['slice'](0x0,0x3)[an(0xc9)](B=>B['id'])[an(0xf7)](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n['length']>0x3?an(0xf6)+(this.#n['length']-0x3)+'\x20more)':''));}this.#e(an(0x125)),this.#o(s[an(0x145)]==='file'?an(0x108):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s[an(0xe6)],{'project':s['project'],'format':s['format'],'range':s[an(0x96)],'deliver':s['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][an(0xa8)][an(0xf8)]||void 0x0});if(z['viaTrigger']){let B=await this.#E(s[an(0xe6)],s[an(0xbb)]);if(!B['ok'])throw new Error(B[an(0xf9)]||an(0xfb));u={...u,'success':!0x0,'file':B[an(0xe5)]??null},this.#e(an(0xea)+(B[an(0xe5)]??''));}else{u={...u,'success':!0x0,'file':z['file']??null,'pages':z['pages']??null};let C=z['placeholders']?.['length']?an(0x124)+z[an(0xab)][an(0xe8)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e(an(0xdd)+(z['file']??'')+C);}}catch(D){u['error']=D?.['message']??String(D),this.#e(an(0x110)+u[an(0xf9)],!0x0);}finally{q[an(0xae)](E=>E[an(0x13c)]=!0x1),this.#o(null);}this.#a(u[an(0xb8)]?an(0x14c):an(0xd1),u);try{await this.#l(an(0xd0),s,u);}catch{}}};function a(){const ao=['rangeTo','end','canSaveReportsOnServer','btnFit','click','210mm','2397345KLuZEW','style','range','printMargins','reload','push','parentElement','getWebuiObject','\x20→\x20','admin','isFinite','_zoomLabel','entries','data-tb-off','top','toState','var(--ui-page,\x20#fff)','fromState','beforeGenerate','url','dataset','get','display:block;width:100%;height:100%;','placeholders','60IgZpmp','zoomLabel','forEach','remove','max','btnApply','btnPrint','getMonth','date','define','parse','some','success','hidden','Rendering…','project','round','No\x20value\x20from:\x20','objectType','objectsChanged','getHours','val','report-ready','297mm','value','_status','\x20and\x20','_paper','\x20(history)','map','groups','textContent','228504QMyHjU','toolbox',';color:var(--ui-text,\x20#1d2733);}','globalStyle','afterGenerate','report-generate-failed','createElement','page','mm\x20','function','Cancelled.','generateTimeoutMs','title','_scriptObject','format','history','2410380eKymVx','Downloaded:\x20','report','341742foADQr','test','getElementById','left','reportStateBase','settings','file','name','dispatchEvent','length','_toolbarWanted','Saved\x20on\x20the\x20server:\x20','html','addEventListener','getDate','bottom','height','report-before-generate','iobroker-webui-report-viewer','all','getState','rangeKind','add','\x20(+','join','webuiTheme','error','_showBtn','the\x20server\x20refused\x20the\x20run','193508EtmoOC','light','data','toolbarVisible','change','24612570FofrfT','btnBar','classList','Opening\x20','setReportRange','_viewer','[data-tb]','Generating\x20on\x20the\x20server…','start','report-load','cssText','setAttribute','currentProject','rangeFrom','\x20*\x20','Not\x20generated\x20—\x20','connectedCallback','clientWidth','whenDataReady','type','marginBottom','_bar','Range:\x20','@page\x20{\x20size:\x20','paper','@top-center\x20{\x20content:\x20\x22\x22;\x20}','endFetchTracking','loadWhat','appendChild','trim','beginFetchTracking','right','btnShow','getMinutes','head','\x20—\x20','Generating…','dispose','toLocaleString','1552434tEstUB','reportName','loadLog','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','__reportTheme','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','filter','getTime','@top-right\x20{\x20content:\x20\x22\x22;\x20}','slice','min','reportRange','rangeBoxes','203qkuvNY','lastFile','margin','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','subscribeState','Report\x20default\x20range','disabled','outstandingFetches','getBoundingClientRect','#fff','ies','template','catch','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','lastStatus','deliver','transform','setScreenNameAndLoad','_getDomElement','disconnectedCallback','_parseAttributesToProperties','action','report-generated','ready','getFullYear','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','width','btnGen','now','background:','isArray','lastRun'];a=function(){return ao;};return a();}customElements[L(0xa9)](L(0xf1))||customElements[L(0xb5)](L(0xf1),b);export{b as ReportViewer};