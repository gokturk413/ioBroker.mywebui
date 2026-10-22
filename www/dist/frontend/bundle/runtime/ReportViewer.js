const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x1f5))/0x1*(parseInt(I(0x16b))/0x2)+-parseInt(I(0x170))/0x3*(-parseInt(I(0x17a))/0x4)+parseInt(I(0x1dc))/0x5*(-parseInt(I(0x1c5))/0x6)+-parseInt(I(0x1d2))/0x7*(parseInt(I(0x1f0))/0x8)+-parseInt(I(0x16a))/0x9*(-parseInt(I(0x195))/0xa)+parseInt(I(0x19e))/0xb+parseInt(I(0x16f))/0xc;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x9e11e));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-LBDBY53I.js';import{F as f,G as g}from'../chunk-SLPZPTSA.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q[J(0x15c)](s))p+=z[0x1]['trim']()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x186)]();return!o||o==='paper'?{'name':K(0x171),'paper':!0x0}:o===K(0x154)?{'name':m['test'](String(n??''))?String(n):'light','paper':!0x1}:{'name':m['test'](o)?o:'light','paper':!0x1};}var b=class extends h{static ['readonly']=!0x0;static [L(0x1e8)]=i`
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
    `;static [L(0x191)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set[L(0x1ed)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const M=L;super(),this[M(0x1a0)]();}['ready'](){const N=L;let l=this.#t;this[N(0x1ad)](),l&&!this.#t&&(this.#t=l),this[N(0x155)]=this['_getDomElement']('bar'),this[N(0x1e1)]=this[N(0x1a3)]('paper'),this[N(0x176)]=this[N(0x1a3)](N(0x1cf)),this['_status']=this['_getDomElement'](N(0x18a)),this['_zoomLabel']=this['_getDomElement']('zoomLabel'),this[N(0x176)]['objectType']='report',this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener']('click',q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n('btnGen',()=>this.#x('html')),n(N(0x197),()=>this.#x('html',N(0x15a))),g[N(0x17d)]?.()['then'](p=>{const O=N;let q=this[O(0x1a3)]('btnSave');q&&(q['hidden']=!p);})['catch'](()=>{}),this[N(0x1d1)]=this['_getDomElement'](N(0x1e7)),n('btnBar',()=>this[N(0x17b)]=!0x1),n(N(0x1e7),()=>this['toolbarVisible']=!0x0),this[N(0x181)]!==void 0x0&&(this[N(0x17b)]=this[N(0x181)]),this.#t&&this.#s();}set['toolbarVisible'](l){const P=L;this[P(0x181)]=!!l,this['_bar']&&(this[P(0x155)]['hidden']=!l),this['_showBtn']&&(this['_showBtn'][P(0x183)]=!!l);}get['toolbarVisible'](){const Q=L;return this['_bar']?!this[Q(0x155)][Q(0x183)]:this['_toolbarWanted']??!0x0;}async #s(){const R=L;if(!this['_viewer'])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject'](R(0x1a8),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[R(0x18e)]??{};this[R(0x1e1)][R(0x1e8)]['width']=n['width']??R(0x200),this[R(0x1e1)]['style'][R(0x1bb)]=n['height']??'297mm',this['_viewer']['style']['cssText']=R(0x1b4),this.#y(n[R(0x1d3)]);let p=n['page']??{};this.#u(p,n['printMargins']),await this.#g(n['toolbox']),g['beginFetchTracking'](),this['_viewer'][R(0x1a4)]===this.#t?await this['_viewer']['reload']():await this['_viewer'][R(0x1c9)](this.#t),this.#c(),this.#l('onReportLoad',this['_viewer'],this[R(0x176)][R(0x190)]),this.#a(R(0x1f8),{'name':this.#t}),await this.#k(n['data']),this.#o('Building\x20the\x20page…',''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[R(0x176)]['whenDataReady']();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this[R(0x176)],this[R(0x176)][R(0x190)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[R(0x16c)]&&this.#e('No\x20value\x20from:\x20'+s[R(0x1c6)](0x0,0x3)[R(0x194)](u=>u['id'])['join'](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const T=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p==T(0x1db))try{return p(...n);}catch(q){console[T(0x177)](T(0x1ea)+this.#t+':\x20'+l+T(0x1b3),q);return;}}#a(l,n,p=!0x1){const U=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[U(0x176)]??this)['dispatchEvent'](q),q;}#u(l,p){const V=L;if(this['parentElement']!==document[V(0x19c)])return;let q='__report-page-rule';document[V(0x1d4)](q)?.[V(0x187)]();let u=document[V(0x19b)](V(0x1e8));u['id']=q;let z=(l[V(0x1e3)]??'A4')+(l[V(0x1c8)]==='landscape'?V(0x1d8):''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D['push'](V(0x178)),C['title']||D['push'](V(0x17f),V(0x1fd)),C[V(0x165)]||D['push'](V(0x173),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C[V(0x1c0)]||D['push'](V(0x1d0)),u['textContent']='@page\x20{\x20size:\x20'+z+';\x20margin:\x20'+B(A[V(0x1e6)])+'mm\x20'+B(A['right'])+V(0x168)+B(A['bottom'])+'mm\x20'+B(A['left'])+'mm;\x20'+D[V(0x1a6)]('\x20')+V(0x159),document[V(0x1d9)][V(0x1ff)](u);}#d(l){const W=L;this.#r=Math[W(0x189)](0x4,Math['max'](0.1,l)),this[W(0x1e1)]['style']['transform']='scale('+this.#r+')',this['_paper'][W(0x1e8)][W(0x1f9)]=W(0x1a1)+this[W(0x1e1)][W(0x1e8)]['height']+'\x20*\x20'+(this.#r-0x1)+')',this[W(0x1dd)]['textContent']=Math[W(0x1f1)](this.#r*0x64)+'%';}#c(){const X=L;let l=this[X(0x1a3)]('scroll')[X(0x169)]-0x24,n=this['_paper'][X(0x1e9)]()[X(0x166)]/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){window['print']();}async #g(p){const Y=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.[Y(0x1bf)]??[],A=u?.['id']===Y(0x1e0),B=this[Y(0x155)]??this['_getDomElement'](Y(0x1c4));if(B){for(let C of B['querySelectorAll']('[data-tb]'))C['removeAttribute'](Y(0x1da));for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F=Y(0x164):!A&&Array['isArray'](E['groups'])&&E[Y(0x1bf)]['length']&&!E['groups']['some'](G=>z['includes'](G))&&(F=E[Y(0x1ee)]===Y(0x1b0)?'disable':'hide'),!!F){for(let G of B['querySelectorAll'](Y(0x198)+D+'\x22]'))G[Y(0x193)](Y(0x1da),F);}}}}#S(){const Z=L;let l=this[Z(0x1a3)]('rangeKind'),p=this[Z(0x1a3)](Z(0x17e)),q=this['_getDomElement']('rangeTo'),s=this['_getDomElement']('btnApply');if(!l)return;let u=this['_getDomElement'](Z(0x1fa)),z=A=>{u&&(u['hidden']=!A);};l['addEventListener']('change',()=>{const a0=Z;if(l['value']===a0(0x1b5)){let A=g[a0(0x18f)]??this.#b('today');p&&!p[a0(0x1b8)]&&(p['value']=this.#m(A[a0(0x1e2)])),q&&!q[a0(0x1b8)]&&(q[a0(0x1b8)]=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l[a0(0x1b8)]===a0(0x1a8)?null:this.#b(l[a0(0x1b8)]));}),s?.['addEventListener'](Z(0x1a9),()=>{const a1=Z;let A=p?.[a1(0x1b8)]?new Date(p[a1(0x1b8)])[a1(0x188)]():NaN,B=q?.[a1(0x1b8)]?new Date(q[a1(0x1b8)])['getTime']():NaN;if(!Number[a1(0x167)](A)||!Number[a1(0x167)](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a2=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a2(0x179)]()+'-'+p(n[a2(0x1cb)]()+0x1)+'-'+p(n[a2(0x15e)]())+'T'+p(n[a2(0x1b6)]())+':'+p(n[a2(0x201)]());}#b(l){const a3=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s[a3(0x1cb)](),s['getDate']())[a3(0x188)](),q=0x5265c00;switch(l){case a3(0x1eb):return{'start':p(n),'end':n[a3(0x188)]()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n['getTime']()};case a3(0x1ab):return{'start':n[a3(0x188)]()-0x1e*q,'end':n['getTime']()};case a3(0x196):return{'start':new Date(n[a3(0x179)](),n[a3(0x1cb)](),0x1)[a3(0x188)](),'end':n['getTime']()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)['getTime'](),'end':n[a3(0x188)]()};default:return{'start':n['getTime']()-q,'end':n['getTime']()};}}async #f(l){const a4=L;g[a4(0x1ef)](l),this.#e(l?'Range:\x20'+new Date(l[a4(0x1e2)])[a4(0x1c2)]()+a4(0x19f)+new Date(l[a4(0x18b)])['toLocaleString']():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a5=L;let p=(l?.['fromState']??'')['trim'](),q=(l?.[a5(0x1d6)]??'')[a5(0x186)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a6=a5;if(C==null||C==='')return null;if(typeof C==a6(0x1fc))return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)[a6(0x186)]()!=='')return D;let E=Date['parse'](String(C));return Number['isFinite'](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a7=a5;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F['start']===D&&F['end']===E)return;g[a7(0x1ef)]({'start':D,'end':E}),this.#e(a7(0x153)+new Date(D)[a7(0x1c2)]()+a7(0x19f)+new Date(E)[a7(0x1c2)]());let G=this['_getDomElement'](a7(0x1b2));G&&(G['value']=a7(0x1a8));let H=this[a7(0x1a3)](a7(0x1fa));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a5;try{let F=await g[a8(0x1f2)](C);u[D]=s(F?.[a8(0x1fe)]);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g['subscribeState'](C,E)]);}catch(G){console[a8(0x174)]('[report]\x20range\x20state\x20'+C,G);}};await B(p,'start'),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x17c)](){super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.['dispose'](),this.#h=null;}['connectedCallback'](){const a9=L;super['connectedCallback']?.(),this[a9(0x155)]&&this.#w();}#h=null;#w(){const aa=L;this.#h||(this.#h=g[aa(0x15f)]['on'](async l=>{const ab=aa;if(l?.[ab(0x16d)]!=='report'||l[ab(0x1ce)]!==this.#t)return;let n;try{n=await g[ab(0x1df)](ab(0x1a8),this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this['_paper']&&(this[ab(0x1e1)][ab(0x1e8)][ab(0x166)]=p['width']??ab(0x200),this['_paper']['style']['height']=p[ab(0x1bb)]??ab(0x160)),this.#u(p['page']??{},p['printMargins']),this.#y(p['theme']),await this.#g(p[ab(0x1bc)]),this.#c();}));}#y(l){const ac=L;let n=this[ac(0x1c3)];if(!n)return;let p=n['getElementById']('__reportTheme');p||(p=document[ac(0x19b)]('style'),p['id']=ac(0x1f6),n['appendChild'](p));let q=x(l),s=String(l??'')[ac(0x186)]()==='runtime'?'':y(q['name'],g['config']?.[ac(0x175)]);p[ac(0x1ae)]=ac(0x1cd)+s+'background:'+(q[ac(0x1e4)]?ac(0x1ca):ac(0x172))+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const ad=L;let p=this[ad(0x1a3)](ad(0x180));if(!p)return;if(l==null){p[ad(0x183)]=!0x0;return;}p['hidden']=!0x1;let q=this[ad(0x1a3)]('loadWhat'),s=this[ad(0x1a3)]('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s[ad(0x1ae)]=n);}#T(){let l=this['_getDomElement']('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ae=L;let n=this[ae(0x1a3)](ae(0x185));if(!n||this.#p[ae(0x1b9)](l))return;this.#p[ae(0x19a)](l);let p=new Date()[ae(0x199)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n['scrollHeight'];}#$(){const af=L;let l=Date[af(0x152)](),n=0xbb8,p=()=>{const ag=af;let u=g['outstandingFetches']();if(!u['length']){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']===ag(0x1ec))[ag(0x16c)],A=u['length']-z,B=[];A&&B[ag(0x15b)](A+ag(0x1c7)+(A>0x1?'s':'')),z&&B['push'](z+ag(0x1a5)+(z>0x1?'ies':'y'));let C=Math[ag(0x1f1)]((Date[ag(0x152)]()-l)/0x3e8);this.#o('Loading\x20data…',B['join']('\x20and\x20')+ag(0x18d)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D(ag(0x1b7)+D['id']+(D['kind']==='history'?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ah=L;let z=g['namespace']+'.'+f[ah(0x1a7)](q,p),A=async E=>{const ai=ah;try{return(await g['connection']['getState'](z+'.'+E))?.[ai(0x1fe)];}catch{return;}},B=Date[ah(0x152)](),C=await A('lastRun'),D=!0x1;for(;Date[ah(0x152)]()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A('lastStatus'),A(ah(0x15d))]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o(ah(0x163),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E===ah(0x177))return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':ah(0x1bd)};}#e(l,n){const aj=L;this['_status']&&(this[aj(0x1ba)]['textContent']=l,this[aj(0x1ba)][aj(0x1aa)]['toggle'](aj(0x158),!!n));}async #x(l=L(0x1ac),p='download'){const ak=L;let q=[ak(0x16e),ak(0x197)][ak(0x194)](z=>this['_getDomElement'](z))['filter'](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[ak(0x18f)]??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e(ak(0x156));return;}if(this.#a(ak(0x1fb),s,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(u[ak(0x19d)]=s[ak(0x19d)],u['range']=s[ak(0x1de)],this.#n['length']){let A=this.#n[ak(0x1c6)](0x0,0x3)['map'](B=>B['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n['length']>0x3?ak(0x1a2)+(this.#n[ak(0x16c)]-0x3)+ak(0x1b1):''));}this.#e(ak(0x184)),this.#o(s[ak(0x1e5)]===ak(0x15a)?'Generating\x20on\x20the\x20server…':'Generating…',ak(0x1af));let z=await g['generateReport'](s['name'],{'project':s[ak(0x1c1)],'format':s['format'],'range':s['range'],'deliver':s[ak(0x1e5)],'timeoutMs':this[ak(0x18c)],'theme':document['documentElement'][ak(0x157)][ak(0x182)]||void 0x0});if(z[ak(0x1f7)]){let B=await this.#E(s['name'],s[ak(0x1c1)]);if(!B['ok'])throw new Error(B[ak(0x177)]||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B[ak(0x15a)]??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B[ak(0x15a)]??''));}else{u={...u,'success':!0x0,'file':z['file']??null,'pages':z[ak(0x1d5)]??null};let C=z[ak(0x1f3)]?.['length']?'\x20—\x20'+z[ak(0x1f3)][ak(0x16c)]+ak(0x192):'';this.#e('Downloaded:\x20'+(z['file']??'')+C);}}catch(D){u[ak(0x177)]=D?.[ak(0x1cc)]??String(D),this.#e('Not\x20generated\x20—\x20'+u[ak(0x177)],!0x0);}finally{q[ak(0x1d7)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':'report-generate-failed',u);try{await this.#l(ak(0x162),s,u);}catch{}}};customElements[L(0x1be)](L(0x161))||customElements[L(0x1f4)]('iobroker-webui-report-viewer',b);function c(b,d){b=b-0x152;const e=a();let f=e[b];return f;}export{b as ReportViewer};function a(){const al=['length','type','btnGen','2336808YwvmXs','9fyAzye','light','var(--ui-page,\x20#fff)','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','warn','globalStyle','_viewer','error','@top-left\x20{\x20content:\x20\x22\x22;\x20}','getFullYear','1720916cGYcjw','toolbarVisible','disconnectedCallback','canSaveReportsOnServer','rangeFrom','@top-center\x20{\x20content:\x20\x22\x22;\x20}','load','_toolbarWanted','webuiTheme','hidden','Generating…','loadLog','trim','remove','getTime','min','status','end','generateTimeoutMs','\x20outstanding\x20—\x20','settings','reportRange','_rootShadow','template','\x20control(s)\x20shown\x20as\x20placeholders','setAttribute','map','430WPpfdr','month','btnSave','[data-tb=\x22','toLocaleTimeString','add','createElement','body','format','6607997Ujrorr','\x20→\x20','_restoreCachedInititalValues','calc(','\x20(+','_getDomElement','screenName','\x20history\x20quer','join','reportStateBase','report','click','classList','30d','html','_parseAttributesToProperties','textContent','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','disable','\x20more)','rangeKind','\x20threw','display:block;width:100%;height:100%;','custom','getHours','still\x20waiting:\x20','value','has','_status','height','toolbox','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','get','groups','pageNumber','project','toLocaleString','shadowRoot','bar','6823218CjHJKJ','slice','\x20value','orientation','setScreenNameAndLoad','#fff','getMonth','message',':host\x20#paper{','name','viewer','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','_showBtn','136766ERDKaz','theme','getElementById','pages','toState','forEach','\x20landscape','head','data-tb-off','function','5yDNSEy','_zoomLabel','range','getWebuiObject','admin','_paper','start','size','paper','deliver','top','btnShow','style','getBoundingClientRect','report\x20','today','history','reportName','action','setReportRange','256BdEwbU','round','getState','placeholders','define','478DcWXpN','__reportTheme','viaTrigger','report-load','marginBottom','rangeBoxes','report-before-generate','number','@top-right\x20{\x20content:\x20\x22\x22;\x20}','val','appendChild','210mm','getMinutes','now','Range\x20from\x20states:\x20','runtime','_bar','Cancelled\x20by\x20the\x20report\x20script.','dataset','err','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','file','push','matchAll','lastRun','getDate','objectsChanged','297mm','iobroker-webui-report-viewer','afterGenerate','Generating\x20on\x20the\x20server…','hide','url','width','isFinite','mm\x20','clientWidth','60453GZKlTX','146VgupyH'];a=function(){return al;};return a();}