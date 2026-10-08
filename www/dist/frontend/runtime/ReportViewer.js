const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x21d))/0x1*(parseInt(r(0x1b5))/0x2)+-parseInt(r(0x19b))/0x3+-parseInt(r(0x1ba))/0x4+-parseInt(r(0x1ee))/0x5*(parseInt(r(0x1d1))/0x6)+-parseInt(r(0x1ff))/0x7*(-parseInt(r(0x1ed))/0x8)+parseInt(r(0x1a3))/0x9+-parseInt(r(0x1a0))/0xa*(-parseInt(r(0x1de))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xefe56));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x1a9)]=!![];static ['style']=css`
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
    `;static ['template']=html`
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
    `;#zoom=0x1;#reportName;get[s(0x239)](){return this.#reportName;}set[s(0x239)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x236)]();}['ready'](){const u=s,c=this.#reportName;this[u(0x231)]();if(c&&!this.#reportName)this.#reportName=c;this[u(0x215)]=this[u(0x235)](u(0x220)),this[u(0x1fb)]=this[u(0x235)]('paper'),this['_viewer']=this['_getDomElement'](u(0x22d)),this[u(0x1e7)]=this[u(0x235)]('status'),this[u(0x1ac)]=this[u(0x235)]('zoomLabel'),this['_viewer']['objectType']=u(0x1df),this.#watchReport();const d=(e,f)=>this[u(0x235)](e)?.[u(0x22b)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(u(0x1e6),()=>this.#generate('html')),d('btnSave',()=>this.#generate(u(0x1b1),'file')),iobrokerHandler[u(0x246)]?.()[u(0x1be)](e=>{const v=u,f=this[v(0x235)]('btnSave');if(f)f[v(0x237)]=!e;})[u(0x1e5)](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),d(u(0x1f6),()=>this['toolbarVisible']=![]),d(u(0x1a6),()=>this['toolbarVisible']=!![]);if(this[u(0x23d)]!==undefined)this['toolbarVisible']=this[u(0x23d)];if(this.#reportName)this.#load();}set['toolbarVisible'](c){const w=s;this['_toolbarWanted']=!!c;if(this['_bar'])this['_bar'][w(0x237)]=!c;if(this['_showBtn'])this['_showBtn']['hidden']=!!c;}get['toolbarVisible'](){const x=s;return this['_bar']?!this[x(0x215)]['hidden']:this[x(0x23d)]??!![];}async #load(){const y=s;if(!this[y(0x19c)])return;this.#say(''),this.#busy(y(0x245)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject'](y(0x1df),this.#reportName);if(!c){this.#busy(null),this.#say(y(0x1c9)+this.#reportName,!![]);return;}const d=c[y(0x212)]??{};this[y(0x1fb)]['style']['width']=d['width']??y(0x242),this['_paper']['style']['height']=d['height']??'297mm',this[y(0x19c)]['style']['cssText']=y(0x1e9),this.#applyTheme(d['theme']);const e=d[y(0x22e)]??{};this.#pageRule(e,d[y(0x19e)]),await this.#applyToolbox(d[y(0x1da)]),iobrokerHandler[y(0x22a)]();if(this['_viewer']['screenName']===this.#reportName)await this['_viewer']['reload']();else await this[y(0x19c)][y(0x1ef)](this.#reportName);this.#fit(),this.#hook('onReportLoad',this[y(0x19c)],this['_viewer'][y(0x1f5)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this[y(0x19c)][y(0x23f)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[y(0x19c)][y(0x247)]();f(),iobrokerHandler[y(0x216)](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this['_viewer'],this[y(0x19c)][y(0x1f5)],{'missing':g}),this.#emit(y(0x208),{'name':this.#reportName,'missing':g});if(g['length'])this.#say(y(0x204)+g[y(0x19f)](0x0,0x3)[y(0x229)](h=>h['id'])['join'](',\x20')+(g[y(0x223)]>0x3?'\x20…':''),!![]);}#missing=[];[s(0x20c)]=0xea60;#hook(c,...d){const z=s,f=this[z(0x19c)]?.[z(0x1b9)]?.[c];if(typeof f!==z(0x1a7))return undefined;try{return f(...d);}catch(g){return console['error']('report\x20'+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this['parentElement']!==document[A(0x1a8)])return;const e=A(0x241);document[A(0x230)](e)?.[A(0x197)]();const f=document['createElement']('style');f['id']=e;const g=(c[A(0x225)]??'A4')+(c['orientation']===A(0x1cd)?A(0x20f):''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x1c4)])k[A(0x1e2)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k['push'](A(0x1e0),A(0x243));if(!j[A(0x1cc)])k[A(0x1e2)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',A(0x23c));if(!j[A(0x1f2)])k['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f[A(0x1d7)]='@page\x20{\x20size:\x20'+g+A(0x226)+i(h['top'])+'mm\x20'+i(h[A(0x21c)])+A(0x1f7)+i(h[A(0x19d)])+'mm\x20'+i(h['left'])+A(0x1c0)+k['join']('\x20')+A(0x1a1),document[A(0x1d8)][A(0x19a)](f);}#setZoom(c){const B=s;this.#zoom=Math[B(0x213)](0x4,Math['max'](0.1,c)),this['_paper'][B(0x1d6)]['transform']=B(0x21b)+this.#zoom+')',this['_paper'][B(0x1d6)][B(0x20b)]='calc('+this[B(0x1fb)]['style']['height']+B(0x1c7)+(this.#zoom-0x1)+')',this['_zoomLabel']['textContent']=Math['round'](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this[C(0x235)]('scroll')['clientWidth']-0x24,d=this[C(0x1fb)][C(0x1f1)]()[C(0x20d)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const D=s,f=d?.[D(0x1ad)]??{};let g=null;try{g=await iobrokerHandler[D(0x228)]();}catch(k){}const h=g?.[D(0x1d9)]??[],i=g?.['id']===D(0x1cb),j=this['_bar']??this['_getDomElement']('bar');if(!j)return;for(const l of j['querySelectorAll']('[data-tb]'))l['removeAttribute']('data-tb-off');for(const [m,n]of Object[D(0x1d4)](f)){if(!n)continue;let o=null;if(n[D(0x1f3)]===![])o='hide';else{if(!i&&Array['isArray'](n['groups'])&&n[D(0x1d9)]['length']&&!n[D(0x1d9)]['some'](p=>h['includes'](p)))o=n['action']==='disable'?D(0x198):'hide';}if(!o)continue;for(const p of j[D(0x1bf)]('[data-tb=\x22'+m+'\x22]'))p[D(0x21f)]('data-tb-off',o);}}#initRange(){const E=s,c=this['_getDomElement'](E(0x210)),d=this['_getDomElement']('rangeFrom'),e=this[E(0x235)](E(0x227)),f=this[E(0x235)](E(0x20e));if(!c)return;const g=this[E(0x235)](E(0x1dc)),h=i=>{const F=E;if(g)g[F(0x237)]=!i;};c[E(0x22b)]('change',()=>{const G=E;if(c['value']==='custom'){const i=iobrokerHandler['reportRange']??this.#namedRange(G(0x224));if(d&&!d[G(0x1cf)])d['value']=this.#toLocalInput(i[G(0x201)]);if(e&&!e['value'])e[G(0x1cf)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c[G(0x1cf)]==='report'?null:this.#namedRange(c['value']));}),f?.[E(0x22b)](E(0x248),()=>{const H=E,i=d?.[H(0x1cf)]?new Date(d[H(0x1cf)])[H(0x1b6)]():NaN,j=e?.[H(0x1cf)]?new Date(e['value'])[H(0x1b6)]():NaN;if(!Number[H(0x1c1)](i)||!Number[H(0x1c1)](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say(H(0x1bb),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)[I(0x22c)](0x2,'0');return e[I(0x219)]()+'-'+f(e[I(0x1b0)]()+0x1)+'-'+f(e['getDate']())+'T'+f(e['getHours']())+':'+f(e[I(0x1e3)]());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g[J(0x219)](),g[J(0x1b0)](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case J(0x224):return{'start':e(d),'end':d['getTime']()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0x1b6)]()-0x7*f,'end':d[J(0x1b6)]()};case J(0x200):return{'start':d['getTime']()-0x1e*f,'end':d['getTime']()};case'month':return{'start':new Date(d[J(0x219)](),d['getMonth'](),0x1)['getTime'](),'end':d[J(0x1b6)]()};case J(0x218):return{'start':new Date(d[J(0x219)](),0x0,0x1)['getTime'](),'end':d[J(0x1b6)]()};default:return{'start':d[J(0x1b6)]()-f,'end':d[J(0x1b6)]()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?'Range:\x20'+new Date(c[K(0x201)])['toLocaleString']()+K(0x203)+new Date(c['end'])[K(0x232)]():K(0x23a)),this.#emit(K(0x1eb),{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')[L(0x233)](),e=(c?.['toState']??'')[L(0x233)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k===M(0x1b8))return k;const l=Number(k);if(Number[M(0x1c1)](l)&&String(k)['trim']()!=='')return l;const m=Date['parse'](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n[N(0x201)]===l&&n[N(0x214)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(N(0x1ea)+new Date(l)[N(0x232)]()+N(0x203)+new Date(m)[N(0x232)]());const o=this[N(0x235)](N(0x210));if(o)o['value']=N(0x1df);const p=this['_getDomElement'](N(0x1dc));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{g[l]=f(q?.['val']),h(!![])['catch'](()=>{});};try{i[O(0x1e2)]([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console['warn'](O(0x199)+k,p);}};await j(d,L(0x201)),await j(e,L(0x214)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0x206)](){const P=s;super[P(0x206)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[P(0x234)](),this.#reportChangedSub=null;}[s(0x1a4)](){const Q=s;super[Q(0x1a4)]?.();if(this[Q(0x215)])this.#watchReport();}#reportChangedSub=null;#watchReport(){const R=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[R(0x209)]['on'](async c=>{const S=R;if(c?.[S(0x1fa)]!==S(0x1df)||c[S(0x222)]!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](S(0x1df),this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this[S(0x1fb)]&&(this['_paper'][S(0x1d6)]['width']=g[S(0x20d)]??'210mm',this[S(0x1fb)][S(0x1d6)]['height']=g['height']??S(0x1c5)),this.#pageRule(g[S(0x22e)]??{},g[S(0x19e)]),this.#applyTheme(g[S(0x21a)]),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const T=s,d=this[T(0x1d3)];if(!d)return;let e=d['getElementById'](T(0x1f4));!e&&(e=document['createElement']('style'),e['id']='__reportTheme',d[T(0x19a)](e));const f=resolveReportTheme(c),g=String(c??'')[T(0x233)]()==='runtime'?'':reportThemeDeclarations(f[T(0x222)],iobrokerHandler[T(0x20a)]?.['globalStyle']);e[T(0x1d7)]=':host\x20#paper{'+g+'background:'+(f['paper']?T(0x1f8):T(0x1ec))+T(0x23b);}#busy(c,e){const U=s,f=this['_getDomElement']('load');if(!f)return;if(c==null){f['hidden']=!![];return;}f[U(0x237)]=![];const g=this[U(0x235)]('loadWhat'),h=this[U(0x235)](U(0x1af));if(g)g['textContent']=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const V=s,c=this['_getDomElement'](V(0x1fd));if(c)c[V(0x1d7)]='';this.#logged=new Set();}#logged=new Set();#log(c){const W=s,d=this['_getDomElement']('loadLog');if(!d||this.#logged['has'](c))return;this.#logged['add'](c);const e=new Date()['toLocaleTimeString']();d['textContent']+=e+'\x20\x20'+c+'\x0a',d[W(0x1bc)]=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const X=b,g=iobrokerHandler[X(0x1b3)]();if(!g['length']){this.#busy('Rendering…','');return;}const i=g[X(0x1b4)](m=>m[X(0x1ca)]==='history')[X(0x223)],j=g[X(0x223)]-i,k=[];if(j)k['push'](j+'\x20value'+(j>0x1?'s':''));if(i)k[X(0x1e2)](i+'\x20history\x20quer'+(i>0x1?X(0x1c6):'y'));const l=Math[X(0x202)]((Date[X(0x1e8)]()-c)/0x3e8);this.#busy(X(0x1c2),k['join']('\x20and\x20')+X(0x1ae)+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log(X(0x1d5)+m['id']+(m['kind']==='history'?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Y=s,f=iobrokerHandler[Y(0x1aa)]+'.'+IobrokerHandler[Y(0x1bd)](d,c),g=async l=>{const Z=Y;try{return(await iobrokerHandler[Z(0x21e)]['getState'](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date['now'](),i=await g(Y(0x205));let j=![];while(Date[Y(0x1e8)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(Y(0x244),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k==='error')return{'ok':![],'error':await g(Y(0x1fe))};}}return{'ok':![],'error':Y(0x22f)};}#say(c,d){const a0=s;if(!this['_status'])return;this['_status'][a0(0x1d7)]=c,this['_status'][a0(0x1b7)][a0(0x240)](a0(0x1e4),!!d);}async #generate(c='html',d='download'){const a1=s,f=[a1(0x1e6),a1(0x1f0)][a1(0x229)](i=>this['_getDomElement'](i))[a1(0x1b4)](Boolean);f['forEach'](i=>i[a1(0x23e)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[a1(0x249)]??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a1(0x1a2),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say('Cancelled.');return;}h['format']=g[a1(0x1db)],h['range']=g['range'];if(this.#missing['length']){const j=this.#missing[a1(0x19f)](0x0,0x3)[a1(0x229)](k=>k['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing['length']>0x3?'\x20(+'+(this.#missing[a1(0x223)]-0x3)+'\x20more)':''));}this.#say(a1(0x1d2)),this.#busy(g[a1(0x1fc)]===a1(0x1dd)?a1(0x244):a1(0x1d2),a1(0x217));const i=await iobrokerHandler['generateReport'](g[a1(0x222)],{'project':g[a1(0x1d0)],'format':g['format'],'range':g[a1(0x1c8)],'deliver':g['deliver'],'timeoutMs':this[a1(0x20c)],'theme':document['documentElement'][a1(0x1ce)][a1(0x1c3)]||undefined});if(i[a1(0x1f9)]){const k=await this.#awaitServerRun(g['name'],g['project']);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a1(0x1dd)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k['file']??''));}else{h={...h,'success':!![],'file':i[a1(0x1dd)]??null,'pages':i[a1(0x1e1)]??null};const l=i[a1(0x211)]?.[a1(0x223)]?a1(0x221)+i[a1(0x211)][a1(0x223)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say('Downloaded:\x20'+(i[a1(0x1dd)]??'')+l);}}catch(m){h['error']=m?.['message']??String(m),this.#say('Not\x20generated\x20—\x20'+h['error'],!![]);}finally{f[a1(0x1a5)](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h['success']?'report-generated':a1(0x238),h);try{await this.#hook(a1(0x1ab),g,h);}catch(n){}}}if(!customElements[s(0x1b2)](s(0x207)))customElements['define'](s(0x207),ReportViewer);function b(c,d){c=c-0x197;const e=a();let f=e[c];return f;}function a(){const a2=['994830RkcASJ','Generating…','shadowRoot','entries','still\x20waiting:\x20','style','textContent','head','groups','toolbox','format','rangeBoxes','file','9683432pVBOrE','report','@top-center\x20{\x20content:\x20\x22\x22;\x20}','pages','push','getMinutes','err','catch','btnGen','_status','now','display:block;width:100%;height:100%;','Range\x20from\x20states:\x20','report-range-changed','var(--ui-page,\x20#fff)','24uRkHkw','50cZGnTW','setScreenNameAndLoad','btnSave','getBoundingClientRect','pageNumber','show','__reportTheme','_rootShadow','btnBar','mm\x20','#fff','viaTrigger','type','_paper','deliver','loadLog','lastError','824614lAomyc','30d','start','round','\x20→\x20','No\x20value\x20from:\x20','lastRun','disconnectedCallback','iobroker-webui-report-viewer','report-ready','objectsChanged','config','marginBottom','generateTimeoutMs','width','btnApply','\x20landscape','rangeKind','placeholders','settings','min','end','_bar','endFetchTracking','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','year','getFullYear','theme','scale(','right','208GXOJXY','connection','setAttribute','bar','\x20—\x20','name','length','today','size',';\x20margin:\x20','rangeTo','getCurrentUser','map','beginFetchTracking','addEventListener','padStart','viewer','page','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','getElementById','_parseAttributesToProperties','toLocaleString','trim','dispose','_getDomElement','_restoreCachedInititalValues','hidden','report-generate-failed','reportName','Report\x20default\x20range',';color:var(--ui-text,\x20#1d2733);}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','_toolbarWanted','disabled','whenScreenReady','toggle','__report-page-rule','210mm','@top-right\x20{\x20content:\x20\x22\x22;\x20}','Generating\x20on\x20the\x20server…','Opening\x20','canSaveReportsOnServer','whenDataReady','click','reportRange','remove','disable','[report]\x20range\x20state\x20','appendChild','736284lQEWoE','_viewer','bottom','printMargins','slice','10eVjUaT','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','beforeGenerate','12508605mRsKiU','connectedCallback','forEach','btnShow','function','body','readonly','namespace','afterGenerate','_zoomLabel','items','\x20outstanding\x20—\x20','loadDetail','getMonth','html','get','outstandingFetches','filter','5750JDdQIB','getTime','classList','number','_scriptObject','1341884iqrnGQ','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','scrollTop','reportStateBase','then','querySelectorAll','mm;\x20','isFinite','Loading\x20data…','webuiTheme','date','297mm','ies','\x20*\x20','range','Report\x20not\x20found:\x20','kind','admin','url','landscape','dataset','value','project'];a=function(){return a2;};return a();}