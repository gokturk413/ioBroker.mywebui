const G=b;(function(k,l){const F=b,n=k();while(!![]){try{const o=-parseInt(F(0x20a))/0x1+-parseInt(F(0x1e8))/0x2+-parseInt(F(0x25b))/0x3*(-parseInt(F(0x22e))/0x4)+-parseInt(F(0x21e))/0x5*(-parseInt(F(0x240))/0x6)+-parseInt(F(0x25a))/0x7+-parseInt(F(0x249))/0x8+-parseInt(F(0x212))/0x9*(-parseInt(F(0x228))/0xa);if(o===l)break;else n['push'](n['shift']());}catch(p){n['push'](n['shift']());}}}(a,0xaff75));import'./chunk-R6VCTUDJ.js';import{p as c,q as e}from'./chunk-Y42FM7CC.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var g=class extends h{static ['readonly']=!0x0;static [G(0x1ff)]=i`
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
    `;static ['template']=j`
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
    `;#o=0x1;#t;get['reportName'](){return this.#t;}set[G(0x237)](k){this.#t!==k&&(this.#t=k,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const H=G;let k=this.#t;this[H(0x1f2)](),k&&!this.#t&&(this.#t=k),this['_bar']=this[H(0x225)]('bar'),this[H(0x24b)]=this['_getDomElement'](H(0x256)),this[H(0x1f9)]=this[H(0x225)](H(0x230)),this['_status']=this[H(0x225)]('status'),this['_zoomLabel']=this[H(0x225)]('zoomLabel'),this['_viewer'][H(0x21b)]=H(0x20e);let l=(n,p)=>this[H(0x225)](n)?.['addEventListener']('click',p);l('btnIn',()=>this.#h(this.#o*1.25)),l('btnOut',()=>this.#h(this.#o/1.25)),l('btnFit',()=>this.#c()),l(H(0x222),()=>this.#v()),this.#w(),l(H(0x246),()=>this.#m(H(0x21f))),l('btnSave',()=>this.#m(H(0x21f),H(0x254))),e['canSaveReportsOnServer']?.()['then'](n=>{const I=H;let p=this[I(0x225)](I(0x221));p&&(p[I(0x247)]=!n);})['catch'](()=>{}),this['_showBtn']=this[H(0x225)](H(0x22f)),l(H(0x251),()=>this['toolbarVisible']=!0x1),l('btnShow',()=>this[H(0x258)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this[H(0x258)]=this[H(0x1eb)]),this.#t&&this.#s();}set[G(0x258)](k){const J=G;this[J(0x1eb)]=!!k,this[J(0x215)]&&(this['_bar'][J(0x247)]=!k),this['_showBtn']&&(this[J(0x24c)][J(0x247)]=!!k);}get['toolbarVisible'](){const K=G;return this[K(0x215)]?!this[K(0x215)][K(0x247)]:this[K(0x1eb)]??!0x0;}async #s(){const L=G;if(!this['_viewer'])return;this.#e(''),this.#i('Opening\x20'+this.#t+'…',''),this.#x();let k=await e[L(0x265)](L(0x20e),this.#t);if(!k){this.#i(null),this.#e(L(0x1ef)+this.#t,!0x0);return;}let l=k[L(0x209)]??{};this[L(0x24b)]['style'][L(0x255)]=l[L(0x255)]??'210mm',this[L(0x24b)]['style'][L(0x1fd)]=l['height']??L(0x268),this[L(0x1f9)]['style'][L(0x1e9)]=L(0x24f);let n=l['page']??{};this.#f(n,l[L(0x23c)]),e['beginFetchTracking'](),this[L(0x1f9)]['screenName']===this.#t?await this['_viewer']['reload']():await this[L(0x1f9)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this[L(0x1f9)],this[L(0x1f9)][L(0x205)]),this.#a(L(0x235),{'name':this.#t}),await this.#y(l['data']),this.#i(L(0x24e),''),await this[L(0x1f9)]['whenScreenReady']({'timeout':0x1f40});let p=this.#k(),{missing:q}=await this['_viewer'][L(0x270)]();p(),e[L(0x216)](),this.#i(null),this.#n=q,this.#l('onReportReady',this[L(0x1f9)],this[L(0x1f9)]['_rootShadow'],{'missing':q}),this.#a('report-ready',{'name':this.#t,'missing':q}),q['length']&&this.#e(L(0x1f5)+q['slice'](0x0,0x3)[L(0x242)](s=>s['id'])[L(0x279)](',\x20')+(q[L(0x21d)]>0x3?'\x20…':''),!0x0);}#n=[];[G(0x1e7)]=0xea60;#l(k,...l){const M=G;let n=this[M(0x1f9)]?.[M(0x243)]?.[k];if(typeof n=='function')try{return n(...l);}catch(p){console['error'](M(0x23a)+this.#t+':\x20'+k+'\x20threw',p);return;}}#a(k,l,n=!0x1){const N=G;let p=new CustomEvent(k,{'detail':l,'bubbles':!0x0,'composed':!0x0,'cancelable':n});return(this['_viewer']??this)[N(0x223)](p),p;}#f(k,l){const O=G;let p=O(0x1fb);document['getElementById'](p)?.['remove']();let q=document['createElement'](O(0x1ff));q['id']=p;let u=(k[O(0x22d)]??'A4')+(k[O(0x1f7)]===O(0x24a)?O(0x23d):''),x=k[O(0x20c)]??{},y=B=>Number(B)||0x0,z=l??{},A=[];z[O(0x26a)]||A[O(0x274)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),z[O(0x271)]||A['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}',O(0x250)),z['url']||A['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',O(0x241)),z['pageNumber']||A[O(0x274)](O(0x23f)),q['textContent']=O(0x218)+u+O(0x217)+y(x[O(0x25c)])+'mm\x20'+y(x[O(0x210)])+O(0x272)+y(x['bottom'])+O(0x272)+y(x[O(0x224)])+O(0x208)+A['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][O(0x1e5)](q);}#h(k){const P=G;this.#o=Math[P(0x261)](0x4,Math['max'](0.1,k)),this[P(0x24b)]['style'][P(0x257)]='scale('+this.#o+')',this[P(0x24b)][P(0x1ff)]['marginBottom']='calc('+this['_paper'][P(0x1ff)][P(0x1fd)]+P(0x231)+(this.#o-0x1)+')',this[P(0x259)]['textContent']=Math['round'](this.#o*0x64)+'%';}#c(){const Q=G;let k=this[Q(0x225)](Q(0x1f8))[Q(0x24d)]-0x24,l=this[Q(0x24b)]['getBoundingClientRect']()['width']/(this.#o||0x1);l>0x0&&this.#h(Math[Q(0x261)](0x1,k/l));}#v(){const R=G;window[R(0x245)]();}#w(){const S=G;let k=this[S(0x225)]('rangeKind'),l=this['_getDomElement']('rangeFrom'),p=this['_getDomElement']('rangeTo'),q=this[S(0x225)](S(0x238));if(!k)return;let s=this[S(0x225)]('rangeBoxes'),u=x=>{s&&(s['hidden']=!x);};k['addEventListener'](S(0x22a),()=>{const T=S;if(k[T(0x244)]===T(0x275)){let x=e['reportRange']??this.#u(T(0x276));l&&!l['value']&&(l['value']=this.#p(x[T(0x20f)])),p&&!p['value']&&(p['value']=this.#p(x['end'])),u(!0x0);return;}u(!0x1),this.#g(k['value']==='report'?null:this.#u(k['value']));}),q?.[S(0x25d)]('click',()=>{const U=S;let x=l?.[U(0x244)]?new Date(l['value'])['getTime']():NaN,y=p?.['value']?new Date(p['value'])[U(0x233)]():NaN;if(!Number['isFinite'](x)||!Number[U(0x20b)](y)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(x>=y){this.#e(U(0x203),!0x0);return;}this.#g({'start':x,'end':y});});}#p(k){const V=G;let l=new Date(k),n=p=>String(p)['padStart'](0x2,'0');return l[V(0x200)]()+'-'+n(l[V(0x236)]()+0x1)+'-'+n(l[V(0x26b)]())+'T'+n(l['getHours']())+':'+n(l[V(0x20d)]());}#u(k){const W=G;let l=new Date(),n=q=>new Date(q['getFullYear'](),q[W(0x236)](),q['getDate']())[W(0x233)](),p=0x5265c00;switch(k){case'today':return{'start':n(l),'end':l[W(0x233)]()};case'yesterday':return{'start':n(l)-p,'end':n(l)};case'7d':return{'start':l[W(0x233)]()-0x7*p,'end':l[W(0x233)]()};case W(0x239):return{'start':l['getTime']()-0x1e*p,'end':l[W(0x233)]()};case'month':return{'start':new Date(l[W(0x200)](),l['getMonth'](),0x1)[W(0x233)](),'end':l['getTime']()};case'year':return{'start':new Date(l[W(0x200)](),0x0,0x1)[W(0x233)](),'end':l[W(0x233)]()};default:return{'start':l['getTime']()-p,'end':l[W(0x233)]()};}}async #g(k){const X=G;e[X(0x1fa)](k),this.#e(k?X(0x211)+new Date(k['start'])['toLocaleString']()+'\x20→\x20'+new Date(k['end'])[X(0x26e)]():X(0x220)),this.#a('report-range-changed',{'range':k}),await this.#s();}async #y(k){const Y=G;let l=(k?.[Y(0x1fe)]??'')[Y(0x21a)](),p=(k?.['toState']??'')['trim']();if(this.#r&&(this.#r(),this.#r=null),this.#b=null,!l||!p)return;let q=z=>{const Z=Y;if(z==null||z==='')return null;if(typeof z==Z(0x232))return z;let A=Number(z);if(Number[Z(0x20b)](A)&&String(z)[Z(0x21a)]()!=='')return A;let B=Date[Z(0x21c)](String(z));return Number['isFinite'](B)?B:null;},s={'start':null,'end':null},u=async z=>{const a0=Y;let {start:A,end:B}=s;if(A==null||B==null)return;if(!(A<B)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let C=e['reportRange'];if(C&&C[a0(0x20f)]===A&&C['end']===B)return;e['setReportRange']({'start':A,'end':B}),this.#e('Range\x20from\x20states:\x20'+new Date(A)[a0(0x26e)]()+a0(0x22c)+new Date(B)['toLocaleString']());let D=this[a0(0x225)](a0(0x263));D&&(D['value']=a0(0x20e));let E=this['_getDomElement'](a0(0x204));E&&(E['hidden']=!0x0),z&&await this.#s();},x=[],y=async(z,A)=>{const a1=Y;try{let C=await e['getState'](z);s[A]=q(C?.[a1(0x1ec)]);}catch{}let B=(D,E)=>{const a2=a1;s[A]=q(E?.['val']),u(!0x0)[a2(0x273)](()=>{});};try{x['push']([z,B,await e['subscribeState'](z,B)]);}catch(D){console[a1(0x213)](a1(0x1e3)+z,D);}};await y(l,'start'),await y(p,'end'),this.#b={'from':l,'to':p},this.#r=()=>{for(let [z,A]of x)try{e['unsubscribeState'](z,A);}catch{}},await u(!0x1);}#b=null;#r=null;[G(0x206)](){const a3=G;super[a3(0x206)]?.(),this.#r&&(this.#r(),this.#r=null);}#i(k,l){const a4=G;let n=this[a4(0x225)](a4(0x26f));if(!n)return;if(k==null){n['hidden']=!0x0;return;}n[a4(0x247)]=!0x1;let p=this['_getDomElement']('loadWhat'),q=this['_getDomElement'](a4(0x278));p&&(p['textContent']=k),q&&l!==void 0x0&&(q[a4(0x1fc)]=l);}#x(){const a5=G;let k=this[a5(0x225)](a5(0x266));k&&(k[a5(0x1fc)]=''),this.#d=new Set();}#d=new Set();#_(k){const a6=G;let l=this[a6(0x225)]('loadLog');if(!l||this.#d['has'](k))return;this.#d[a6(0x262)](k);let n=new Date()[a6(0x219)]();l[a6(0x1fc)]+=n+'\x20\x20'+k+'\x0a',l[a6(0x26c)]=l[a6(0x1f1)];}#k(){let k=Date['now'](),l=0xbb8,n=()=>{const a7=b;let q=e['outstandingFetches']();if(!q['length']){this.#i('Rendering…','');return;}let u=q[a7(0x227)](A=>A['kind']===a7(0x264))['length'],x=q['length']-u,y=[];x&&y[a7(0x274)](x+'\x20value'+(x>0x1?'s':'')),u&&y[a7(0x274)](u+a7(0x23e)+(u>0x1?a7(0x1ea):'y'));let z=Math['round']((Date['now']()-k)/0x3e8);this.#i('Loading\x20data…',y['join'](a7(0x267))+'\x20outstanding\x20—\x20'+z+'s');for(let A of q)A[a7(0x253)]>l&&this.#_(a7(0x1f0)+A['id']+(A[a7(0x201)]==='history'?a7(0x207):''));};n();let p=setInterval(n,0x1f4);return()=>clearInterval(p);}async #S(k,p,q=0x1d4c0){const a9=G;let u=e['namespace']+'.'+c['reportStateBase'](p,k),x=async B=>{const a8=b;try{return(await e['connection'][a8(0x1e4)](u+'.'+B))?.['val'];}catch{return;}},y=Date['now'](),z=await x(a9(0x27a)),A=!0x1;for(;Date['now']()-y<q;){await new Promise(E=>setTimeout(E,0x190));let [B,C]=await Promise['all']([x('lastStatus'),x('lastRun')]),D=C!=null&&C!==z;if(B==='running'){A=!0x0,this.#i(a9(0x234),a9(0x25e));continue;}if(D||A){if(B==='ok')return{'ok':!0x0,'file':await x(a9(0x1e6))};if(B==='error')return{'ok':!0x1,'error':await x(a9(0x260))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(k,l){const aa=G;this['_status']&&(this['_status'][aa(0x1fc)]=k,this['_status'][aa(0x248)]['toggle'](aa(0x202),!!l));}async #m(k=G(0x21f),l='download'){const ab=G;let p=[ab(0x246),ab(0x221)]['map'](u=>this[ab(0x225)](u))[ab(0x227)](Boolean);p[ab(0x229)](u=>u['disabled']=!0x0);let q={'name':this.#t,'format':k,'deliver':l,'range':void 0x0,'project':e[ab(0x23b)]},s={'success':!0x1,'format':k,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(ab(0x1f3),q)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',q,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(s['format']=q['format'],s['range']=q['range'],this.#n['length']){let x=this.#n['slice'](0x0,0x3)[ab(0x242)](y=>y['id'])[ab(0x279)](',\x20');throw new Error('no\x20value\x20from:\x20'+x+(this.#n[ab(0x21d)]>0x3?ab(0x1ee)+(this.#n[ab(0x21d)]-0x3)+'\x20more)':''));}this.#e('Generating…'),this.#i(q[ab(0x226)]===ab(0x254)?'Generating\x20on\x20the\x20server…':'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let u=await e[ab(0x1f6)](q['name'],{'project':q['project'],'format':q['format'],'range':q[ab(0x1ed)],'deliver':q[ab(0x226)],'timeoutMs':this[ab(0x1e7)]});if(u['viaTrigger']){let y=await this.#S(q['name'],q['project']);if(!y['ok'])throw new Error(y['error']||'the\x20server\x20refused\x20the\x20run');s={...s,'success':!0x0,'file':y['file']??null},this.#e(ab(0x269)+(y[ab(0x254)]??''));}else{s={...s,'success':!0x0,'file':u[ab(0x254)]??null,'pages':u[ab(0x25f)]??null};let z=u['placeholders']?.['length']?'\x20—\x20'+u['placeholders'][ab(0x21d)]+ab(0x252):'';this.#e('Downloaded:\x20'+(u['file']??'')+z);}}catch(A){s['error']=A?.['message']??String(A),this.#e(ab(0x22b)+s['error'],!0x0);}finally{p['forEach'](B=>B[ab(0x1f4)]=!0x1),this.#i(null);}this.#a(s['success']?ab(0x214):ab(0x277),s);try{await this.#l('afterGenerate',q,s);}catch{}}};customElements[G(0x26d)]('iobroker-webui-report-viewer',g);function a(){const ac=['1758088zGLjzl','landscape','_paper','_showBtn','clientWidth','Building\x20the\x20page…','display:block;width:100%;height:100%;','@top-right\x20{\x20content:\x20\x22\x22;\x20}','btnBar','\x20control(s)\x20shown\x20as\x20placeholders','waitedMs','file','width','paper','transform','toolbarVisible','_zoomLabel','6736639VtXKGO','6eYbpNQ','top','addEventListener','The\x20server\x20is\x20rendering\x20the\x20report.','pages','lastError','min','add','rangeKind','history','getWebuiObject','loadLog','\x20and\x20','297mm','Saved\x20on\x20the\x20server:\x20','date','getDate','scrollTop','define','toLocaleString','load','whenDataReady','title','mm\x20','catch','push','custom','today','report-generate-failed','loadDetail','join','lastRun','[report]\x20range\x20state\x20','getState','appendChild','lastFile','generateTimeoutMs','749508qHzeCs','cssText','ies','_toolbarWanted','val','range','\x20(+','Report\x20not\x20found:\x20','still\x20waiting:\x20','scrollHeight','_parseAttributesToProperties','beforeGenerate','disabled','No\x20value\x20from:\x20','generateReport','orientation','scroll','_viewer','setReportRange','__report-page-rule','textContent','height','fromState','style','getFullYear','kind','err','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','rangeBoxes','_rootShadow','disconnectedCallback','\x20(history)','mm;\x20','settings','1094981JmrKsC','isFinite','margin','getMinutes','report','start','right','Range:\x20','63AutQHU','warn','report-generated','_bar','endFetchTracking',';\x20margin:\x20','@page\x20{\x20size:\x20','toLocaleTimeString','trim','objectType','parse','length','1941505VIAGmI','html','Report\x20default\x20range','btnSave','btnPrint','dispatchEvent','left','_getDomElement','deliver','filter','3263010HFKhtv','forEach','change','Not\x20generated\x20—\x20','\x20→\x20','size','1400444fcwHSZ','btnShow','viewer','\x20*\x20','number','getTime','Generating\x20on\x20the\x20server…','report-load','getMonth','reportName','btnApply','30d','report\x20','currentProject','printMargins','\x20landscape','\x20history\x20quer','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','6KFBrEz','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','map','_scriptObject','value','print','btnGen','hidden','classList'];a=function(){return ac;};return a();}function b(c,d){c=c-0x1e3;const e=a();let f=e[c];return f;}export{g as ReportViewer};