const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x232))/0x1+parseInt(r(0x248))/0x2+parseInt(r(0x22d))/0x3+-parseInt(r(0x20f))/0x4+parseInt(r(0x22f))/0x5*(-parseInt(r(0x1cf))/0x6)+parseInt(r(0x1b7))/0x7*(parseInt(r(0x235))/0x8)+parseInt(r(0x24e))/0x9*(-parseInt(r(0x1e8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x62383));function b(c,d){c=c-0x1b5;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x23e)]=!![];static ['style']=css`
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
    `;static [s(0x22c)]=html`
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
    `;#zoom=0x1;#reportName;get[s(0x258)](){return this.#reportName;}set[s(0x258)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x1d2)]();}['ready'](){const u=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[u(0x226)]=this[u(0x223)]('bar'),this[u(0x242)]=this['_getDomElement']('paper'),this[u(0x23b)]=this[u(0x223)](u(0x1e9)),this['_status']=this[u(0x223)]('status'),this['_zoomLabel']=this['_getDomElement'](u(0x1d7)),this[u(0x23b)][u(0x23c)]=u(0x1ee),this.#watchReport();const d=(e,f)=>this['_getDomElement'](e)?.[u(0x201)]('click',f);d(u(0x219),()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x20c),()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate(u(0x245))),d('btnSave',()=>this.#generate('html',u(0x1d5))),iobrokerHandler['canSaveReportsOnServer']?.()[u(0x224)](e=>{const v=u,f=this['_getDomElement'](v(0x218));if(f)f[v(0x22a)]=!e;})['catch'](()=>{}),this['_showBtn']=this[u(0x223)]('btnShow'),d(u(0x1bb),()=>this[u(0x21a)]=![]),d(u(0x227),()=>this[u(0x21a)]=!![]);if(this['_toolbarWanted']!==undefined)this['toolbarVisible']=this[u(0x1ba)];if(this.#reportName)this.#load();}set[s(0x21a)](c){const w=s;this['_toolbarWanted']=!!c;if(this[w(0x226)])this[w(0x226)]['hidden']=!c;if(this['_showBtn'])this['_showBtn'][w(0x22a)]=!!c;}get['toolbarVisible'](){const x=s;return this[x(0x226)]?!this['_bar']['hidden']:this[x(0x1ba)]??!![];}async #load(){const y=s;if(!this['_viewer'])return;this.#say(''),this.#busy(y(0x244)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x1ed)](y(0x1ee),this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper'][y(0x23d)]['width']=d[y(0x1bc)]??'210mm',this[y(0x242)]['style'][y(0x260)]=d['height']??'297mm',this['_viewer'][y(0x23d)][y(0x1db)]='display:block;width:100%;height:100%;',this.#applyTheme(d[y(0x23a)]);const e=d['page']??{};this.#pageRule(e,d['printMargins']),await this.#applyToolbox(d['toolbox']),iobrokerHandler[y(0x22e)]();if(this['_viewer'][y(0x1d1)]===this.#reportName)await this['_viewer']['reload']();else await this[y(0x23b)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook(y(0x1f3),this[y(0x23b)],this[y(0x23b)][y(0x1b8)]),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this[y(0x23b)]['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this[y(0x23b)]['whenDataReady']();f(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this[y(0x23b)],this[y(0x23b)]['_rootShadow'],{'missing':g}),this.#emit('report-ready',{'name':this.#reportName,'missing':g});if(g[y(0x1be)])this.#say(y(0x1d0)+g['slice'](0x0,0x3)[y(0x240)](h=>h['id'])[y(0x24b)](',\x20')+(g[y(0x1be)]>0x3?'\x20…':''),!![]);}#missing=[];[s(0x1bf)]=0xea60;#hook(c,...d){const z=s,f=this[z(0x23b)]?.[z(0x1e1)]?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console[z(0x1fb)](z(0x1ec)+this.#reportName+':\x20'+c+z(0x238),g),undefined;}}#emit(c,d,e=![]){const A=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)[A(0x25b)](f),f;}#pageRule(c,d){const B=s;if(this[B(0x202)]!==document['body'])return;const e='__report-page-rule';document[B(0x217)](e)?.['remove']();const f=document[B(0x1fe)]('style');f['id']=e;const g=(c['size']??'A4')+(c[B(0x251)]===B(0x237)?B(0x1f8):''),h=c[B(0x1c3)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[B(0x1f7)])k['push'](B(0x1c7));if(!j[B(0x1eb)])k[B(0x20e)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j[B(0x24a)])k[B(0x20e)](B(0x1e0),B(0x221));if(!j['pageNumber'])k['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f['textContent']=B(0x1ce)+g+';\x20margin:\x20'+i(h['top'])+'mm\x20'+i(h[B(0x255)])+'mm\x20'+i(h['bottom'])+'mm\x20'+i(h['left'])+B(0x25c)+k['join']('\x20')+B(0x1f5),document[B(0x200)]['appendChild'](f);}#setZoom(c){const C=s;this.#zoom=Math[C(0x25a)](0x4,Math[C(0x206)](0.1,c)),this['_paper']['style']['transform']=C(0x1c9)+this.#zoom+')',this[C(0x242)]['style'][C(0x1ea)]=C(0x207)+this[C(0x242)][C(0x23d)][C(0x260)]+C(0x1cd)+(this.#zoom-0x1)+')',this[C(0x21c)]['textContent']=Math['round'](this.#zoom*0x64)+'%';}#fit(){const D=s,c=this['_getDomElement']('scroll')['clientWidth']-0x24,d=this['_paper'][D(0x247)]()[D(0x1bc)]/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[D(0x25a)](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const E=s,f=d?.[E(0x1e5)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.['groups']??[],i=g?.['id']==='admin',j=this['_bar']??this['_getDomElement'](E(0x222));if(!j)return;for(const l of j[E(0x25d)](E(0x256)))l['removeAttribute'](E(0x1fa));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n[E(0x1b5)]===![])o='hide';else{if(!i&&Array[E(0x254)](n[E(0x1cb)])&&n['groups']['length']&&!n['groups']['some'](p=>h[E(0x220)](p)))o=n[E(0x1f0)]===E(0x239)?E(0x239):'hide';}if(!o)continue;for(const p of j['querySelectorAll']('[data-tb=\x22'+m+'\x22]'))p['setAttribute']('data-tb-off',o);}}#initRange(){const F=s,c=this[F(0x223)]('rangeKind'),d=this[F(0x223)]('rangeFrom'),e=this[F(0x223)]('rangeTo'),f=this['_getDomElement'](F(0x1de));if(!c)return;const g=this['_getDomElement']('rangeBoxes'),h=i=>{if(g)g['hidden']=!i;};c[F(0x201)]('change',()=>{const G=F;if(c[G(0x1d6)]==='custom'){const i=iobrokerHandler['reportRange']??this.#namedRange('today');if(d&&!d['value'])d['value']=this.#toLocalInput(i[G(0x1f1)]);if(e&&!e['value'])e[G(0x1d6)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c['value']===G(0x1ee)?null:this.#namedRange(c['value']));}),f?.['addEventListener']('click',()=>{const H=F,i=d?.[H(0x1d6)]?new Date(d[H(0x1d6)])['getTime']():NaN,j=e?.[H(0x1d6)]?new Date(e[H(0x1d6)])['getTime']():NaN;if(!Number['isFinite'](i)||!Number['isFinite'](j)){this.#say(H(0x241),!![]);return;}if(i>=j){this.#say('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)[I(0x205)](0x2,'0');return e['getFullYear']()+'-'+f(e['getMonth']()+0x1)+'-'+f(e[I(0x1da)]())+'T'+f(e[I(0x233)]())+':'+f(e['getMinutes']());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g[J(0x1c6)](),g[J(0x1d9)](),g[J(0x1da)]())['getTime'](),f=0x5265c00;switch(c){case J(0x1f6):return{'start':e(d),'end':d['getTime']()};case J(0x225):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0x1b9)]()-0x7*f,'end':d[J(0x1b9)]()};case'30d':return{'start':d[J(0x1b9)]()-0x1e*f,'end':d['getTime']()};case J(0x257):return{'start':new Date(d['getFullYear'](),d['getMonth'](),0x1)['getTime'](),'end':d[J(0x1b9)]()};case'year':return{'start':new Date(d[J(0x1c6)](),0x0,0x1)['getTime'](),'end':d['getTime']()};default:return{'start':d['getTime']()-f,'end':d[J(0x1b9)]()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?K(0x236)+new Date(c[K(0x1f1)])[K(0x1b6)]()+'\x20→\x20'+new Date(c[K(0x230)])['toLocaleString']():'Report\x20default\x20range'),this.#emit(K(0x215),{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')[L(0x204)](),e=(c?.['toState']??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k==='number')return k;const l=Number(k);if(Number[M(0x1ff)](l)&&String(k)['trim']()!=='')return l;const m=Date[M(0x1cc)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n[N(0x1f1)]===l&&n[N(0x230)]===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+'\x20→\x20'+new Date(m)[N(0x1b6)]());const o=this['_getDomElement']('rangeKind');if(o)o['value']='report';const p=this[N(0x223)](N(0x1d4));if(p)p[N(0x22a)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.[O(0x214)]);}catch(o){}const m=(p,q)=>{const P=O;g[l]=f(q?.[P(0x214)]),h(!![])[P(0x20a)](()=>{});};try{i[O(0x20e)]([k,m,await iobrokerHandler[O(0x21e)](k,m)]);}catch(p){console['warn'](O(0x228)+k,p);}};await j(d,'start'),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const Q=s;super[Q(0x208)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}['connectedCallback'](){super['connectedCallback']?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){const R=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[R(0x212)]['on'](async c=>{const S=R;if(c?.['type']!==S(0x1ee)||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler['getWebuiObject'](S(0x1ee),this.#reportName);}catch(h){return;}if(!f)return;const g=f[S(0x1c8)]??{};this[S(0x242)]&&(this[S(0x242)][S(0x23d)]['width']=g['width']??S(0x1c1),this[S(0x242)][S(0x23d)][S(0x260)]=g['height']??'297mm'),this.#pageRule(g['page']??{},g['printMargins']),this.#applyTheme(g['theme']),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const T=s,d=this[T(0x23f)];if(!d)return;let e=d['getElementById'](T(0x20d));!e&&(e=document[T(0x1fe)](T(0x23d)),e['id']='__reportTheme',d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')[T(0x204)]()===T(0x25e)?'':reportThemeDeclarations(f['name'],iobrokerHandler['config']?.['globalStyle']);e[T(0x1c4)]=T(0x1c0)+g+'background:'+(f['paper']?'#fff':T(0x253))+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const U=s,f=this['_getDomElement'](U(0x1bd));if(!f)return;if(c==null){f['hidden']=!![];return;}f[U(0x22a)]=![];const g=this[U(0x223)](U(0x229)),h=this['_getDomElement']('loadDetail');if(g)g[U(0x1c4)]=c;if(h&&e!==undefined)h[U(0x1c4)]=e;}#logReset(){const c=this['_getDomElement']('loadLog');if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const V=s,d=this['_getDomElement']('loadLog');if(!d||this.#logged[V(0x213)](c))return;this.#logged['add'](c);const e=new Date()[V(0x1e3)]();d[V(0x1c4)]+=e+'\x20\x20'+c+'\x0a',d[V(0x21f)]=d[V(0x249)];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const W=b,g=iobrokerHandler[W(0x231)]();if(!g['length']){this.#busy(W(0x24c),'');return;}const i=g['filter'](m=>m['kind']==='history')[W(0x1be)],j=g[W(0x1be)]-i,k=[];if(j)k['push'](j+W(0x1c5)+(j>0x1?'s':''));if(i)k[W(0x20e)](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math['round']((Date['now']()-c)/0x3e8);this.#busy(W(0x211),k['join']('\x20and\x20')+'\x20outstanding\x20—\x20'+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log('still\x20waiting:\x20'+m['id']+(m[W(0x21b)]===W(0x1ca)?W(0x1fc):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const X=s,f=iobrokerHandler[X(0x246)]+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const Y=X;try{return(await iobrokerHandler[Y(0x209)]['getState'](f+'.'+l))?.[Y(0x214)];}catch(m){return undefined;}},h=Date['now'](),i=await g(X(0x24f));let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise['all']([g(X(0x210)),g('lastRun')]),m=l!=null&&l!==i;if(k==='running'){j=!![],this.#busy(X(0x1e2),X(0x1ef));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(X(0x250))};if(k===X(0x1fb))return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const Z=s;if(!this[Z(0x234)])return;this[Z(0x234)]['textContent']=c,this['_status'][Z(0x261)][Z(0x24d)]('err',!!d);}async #generate(c=s(0x245),d='download'){const a0=s,f=['btnGen',a0(0x218)]['map'](i=>this['_getDomElement'](i))[a0(0x1e7)](Boolean);f[a0(0x1fd)](i=>i[a0(0x1d8)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[a0(0x259)]??undefined,'project':iobrokerHandler[a0(0x203)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a0(0x20b),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit('report-before-generate',g,!![])[a0(0x1f9)]){this.#say(a0(0x25f));return;}h[a0(0x252)]=g['format'],h['range']=g['range'];if(this.#missing[a0(0x1be)]){const j=this.#missing[a0(0x21d)](0x0,0x3)[a0(0x240)](k=>k['id'])[a0(0x24b)](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing['length']>0x3?'\x20(+'+(this.#missing['length']-0x3)+a0(0x243):''));}this.#say(a0(0x216)),this.#busy(g['deliver']===a0(0x1d5)?a0(0x1e2):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a0(0x1d3)](g['name'],{'project':g[a0(0x1c2)],'format':g[a0(0x252)],'range':g[a0(0x1f4)],'deliver':g[a0(0x1dd)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][a0(0x1e6)][a0(0x22b)]||undefined});if(i['viaTrigger']){const k=await this.#awaitServerRun(g[a0(0x1f2)],g[a0(0x1c2)]);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a0(0x1d5)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k['file']??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i['pages']??null};const l=i['placeholders']?.['length']?'\x20—\x20'+i['placeholders'][a0(0x1be)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#say(a0(0x1df)+(i['file']??'')+l);}}catch(m){h[a0(0x1fb)]=m?.['message']??String(m),this.#say('Not\x20generated\x20—\x20'+h[a0(0x1fb)],!![]);}finally{f['forEach'](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h['success']?a0(0x1e4):'report-generate-failed',h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}function a(){const a1=['filter','1460fddVEM','viewer','marginBottom','title','report\x20','getWebuiObject','report','The\x20server\x20is\x20rendering\x20the\x20report.','action','start','name','onReportLoad','range','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','today','date','\x20landscape','defaultPrevented','data-tb-off','error','\x20(history)','forEach','createElement','isFinite','head','addEventListener','parentElement','currentProject','trim','padStart','max','calc(','disconnectedCallback','connection','catch','beforeGenerate','btnPrint','__reportTheme','push','160804mZLCmV','lastStatus','Loading\x20data…','objectsChanged','has','val','report-range-changed','Generating…','getElementById','btnSave','btnIn','toolbarVisible','kind','_zoomLabel','slice','subscribeState','scrollTop','includes','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','bar','_getDomElement','then','yesterday','_bar','btnShow','[report]\x20range\x20state\x20','loadWhat','hidden','webuiTheme','template','1328892cEEfkK','beginFetchTracking','3229895WanIip','end','outstandingFetches','205775oqblLG','getHours','_status','200jSftTt','Range:\x20','landscape','\x20threw','disable','theme','_viewer','objectType','style','readonly','shadowRoot','map','Pick\x20both\x20dates.','_paper','\x20more)','Opening\x20','html','namespace','getBoundingClientRect','1449238eXBrWo','scrollHeight','url','join','Rendering…','toggle','41409AmLfBJ','lastRun','lastFile','orientation','format','var(--ui-page,\x20#fff)','isArray','right','[data-tb]','month','reportName','reportRange','min','dispatchEvent','mm;\x20','querySelectorAll','runtime','Cancelled.','height','classList','show','toLocaleString','108325JnvXVW','_rootShadow','getTime','_toolbarWanted','btnBar','width','load','length','generateTimeoutMs',':host\x20#paper{','210mm','project','margin','textContent','\x20value','getFullYear','@top-left\x20{\x20content:\x20\x22\x22;\x20}','settings','scale(','history','groups','parse','\x20*\x20','@page\x20{\x20size:\x20','6sXwtCb','No\x20value\x20from:\x20','screenName','_restoreCachedInititalValues','generateReport','rangeBoxes','file','value','zoomLabel','disabled','getMonth','getDate','cssText','iobroker-webui-report-viewer','deliver','btnApply','Downloaded:\x20','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','_scriptObject','Generating\x20on\x20the\x20server…','toLocaleTimeString','report-generated','items','dataset'];a=function(){return a1;};return a();}if(!customElements['get'](s(0x1dc)))customElements['define']('iobroker-webui-report-viewer',ReportViewer);