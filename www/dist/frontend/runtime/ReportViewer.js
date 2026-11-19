const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x152))/0x1*(-parseInt(r(0xeb))/0x2)+parseInt(r(0xf2))/0x3+parseInt(r(0x17d))/0x4+parseInt(r(0x121))/0x5*(-parseInt(r(0xf8))/0x6)+-parseInt(r(0x115))/0x7+parseInt(r(0x150))/0x8+-parseInt(r(0xd2))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3ca7a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';function b(c,d){c=c-0xcd;const e=a();let f=e[c];return f;}import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';import{applyTablePaging}from'../common/TablePager.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static [s(0x11d)]=css`
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
    `;static [s(0x170)]=html`
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
    `;#zoom=0x1;#reportName;get['reportName'](){return this.#reportName;}set[s(0x178)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x17e)]();}['ready'](){const u=s,c=this.#reportName;this[u(0x174)]();if(c&&!this.#reportName)this.#reportName=c;this['_bar']=this['_getDomElement']('bar'),this[u(0x15c)]=this['_getDomElement'](u(0x164)),this[u(0xff)]=this['_getDomElement'](u(0x158)),this[u(0x141)]=this['_getDomElement']('status'),this[u(0x108)]=this['_getDomElement']('zoomLabel'),this['_viewer'][u(0x159)]='report',this.#watchReport();const d=(e,f)=>this[u(0x145)](e)?.[u(0xd1)]('click',f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(u(0x14b),()=>this.#setZoom(this.#zoom/1.25)),d(u(0xdd),()=>this.#fit()),d(u(0x131),()=>this.#print()),this.#initRange(),d(u(0x168),()=>this.#generate('html')),d(u(0xee),()=>this.#generate(u(0x12d),'file')),iobrokerHandler[u(0x106)]?.()['then'](e=>{const v=u,f=this[v(0x145)]('btnSave');if(f)f['hidden']=!e;})['catch'](()=>{}),this[u(0x172)]=this['_getDomElement']('btnShow'),d(u(0x11c),()=>this[u(0x18b)]=![]),d('btnShow',()=>this[u(0x18b)]=!![]);if(this[u(0x125)]!==undefined)this['toolbarVisible']=this[u(0x125)];if(this.#reportName)this.#load();}set[s(0x18b)](c){const w=s;this[w(0x125)]=!!c;if(this[w(0xcf)])this[w(0xcf)]['hidden']=!c;if(this[w(0x172)])this['_showBtn']['hidden']=!!c;}get[s(0x18b)](){const x=s;return this[x(0xcf)]?!this[x(0xcf)]['hidden']:this['_toolbarWanted']??!![];}#pager=null;async #load(){const y=s;if(!this['_viewer'])return;this.#pager?.[y(0x186)](),this.#pager=null,this.#say(''),this.#busy(y(0x18a)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject']('report',this.#reportName);if(!c){this.#busy(null),this.#say(y(0x156)+this.#reportName,!![]);return;}const d=c['settings']??{};this['_paper'][y(0x11d)]['width']=d[y(0xec)]??y(0x166),this['_paper'][y(0x11d)][y(0x118)]=d['height']??y(0x182),this[y(0xff)]['style'][y(0x103)]='display:block;width:100%;height:100%;',this.#applyTheme(d[y(0xe4)]);const f=d['page']??{};this.#pageRule(f,d['printMargins']),await this.#applyToolbox(d[y(0x160)]),iobrokerHandler[y(0x12b)]();if(this[y(0xff)][y(0x14f)]===this.#reportName)await this[y(0xff)]['reload']();else await this[y(0xff)][y(0x149)](this.#reportName);this.#fit(),this.#hook(y(0x16a),this['_viewer'],this[y(0xff)]['_rootShadow']),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy(y(0x188),''),await this['_viewer'][y(0x129)]({'timeout':0x1f40});const g=this.#watchFetches(),{missing:h}=await this[y(0xff)]['whenDataReady']();g(),iobrokerHandler['endFetchTracking'](),this.#busy(null),this.#missing=h;try{const i=Number(d[y(0xed)]?.[y(0xfc)]?.['bottom'])||0x0;this.#pager=applyTablePaging(this[y(0xff)][y(0x14e)],{'scale':()=>this.#zoom||0x1,'sheetBottom':()=>this['_paper'][y(0x139)]()[y(0x165)]-i*0x60/25.4*(this.#zoom||0x1)});}catch(j){console['warn'](y(0xdc),j);}this.#hook('onReportReady',this[y(0xff)],this['_viewer'][y(0x14e)],{'missing':h}),this.#emit(y(0x155),{'name':this.#reportName,'missing':h});if(h[y(0xf0)])this.#say(y(0x179)+h[y(0x153)](0x0,0x3)[y(0x13f)](k=>k['id'])[y(0x13b)](',\x20')+(h['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this['_viewer']?.['_scriptObject']?.[c];if(typeof f!==z(0x185))return undefined;try{return f(...d);}catch(g){return console[z(0xd4)](z(0x101)+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const A=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)[A(0xe0)](f),f;}#pageRule(c,d){const B=s;if(this[B(0x157)]!==document['body'])return;const e=B(0xe8);document['getElementById'](e)?.[B(0x123)]();const f=document[B(0x10e)](B(0x11d));f['id']=e;const g=(c[B(0x11a)]??'A4')+(c['orientation']===B(0x11b)?B(0x112):''),h=c[B(0xfc)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[B(0x169)])k['push'](B(0x12a));if(!j['title'])k[B(0x16c)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}','@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j[B(0xd6)])k[B(0x16c)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}');if(!j[B(0x180)])k['push'](B(0x100));f[B(0x148)]=B(0x122)+g+';\x20margin:\x20'+i(h['top'])+B(0x17b)+i(h[B(0x107)])+B(0x17b)+i(h[B(0x165)])+'mm\x20'+i(h[B(0x10c)])+B(0x10f)+k[B(0x13b)]('\x20')+B(0x15b),document[B(0x189)]['appendChild'](f);}#setZoom(c){const C=s;this.#zoom=Math['min'](0x4,Math['max'](0.1,c)),this[C(0x15c)][C(0x11d)]['transform']=C(0x116)+this.#zoom+')',this['_paper']['style'][C(0xfb)]=C(0xf9)+this['_paper']['style']['height']+C(0x154)+(this.#zoom-0x1)+')',this['_zoomLabel']['textContent']=Math['round'](this.#zoom*0x64)+'%';}#fit(){const D=s,c=this[D(0x145)]('scroll')[D(0x17f)]-0x24,d=this['_paper'][D(0x139)]()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math['min'](0x1,c/d));}#print(){const E=s;window[E(0x162)]();}async #applyToolbox(d){const F=s,f=d?.[F(0x16b)]??{};let g=null;try{g=await iobrokerHandler[F(0x16d)]();}catch(k){}const h=g?.[F(0x15e)]??[],i=g?.['id']===F(0x147),j=this['_bar']??this[F(0x145)]('bar');if(!j)return;for(const l of j['querySelectorAll']('[data-tb]'))l['removeAttribute']('data-tb-off');for(const [m,n]of Object[F(0x113)](f)){if(!n)continue;let o=null;if(n[F(0xfd)]===![])o='hide';else{if(!i&&Array[F(0x14a)](n[F(0x15e)])&&n['groups'][F(0xf0)]&&!n['groups'][F(0x133)](p=>h['includes'](p)))o=n[F(0x17a)]==='disable'?'disable':F(0xd8);}if(!o)continue;for(const p of j[F(0xe6)](F(0x176)+m+'\x22]'))p['setAttribute']('data-tb-off',o);}}#initRange(){const G=s,c=this['_getDomElement']('rangeKind'),d=this['_getDomElement']('rangeFrom'),e=this['_getDomElement']('rangeTo'),f=this[G(0x145)](G(0xef));if(!c)return;const g=this['_getDomElement'](G(0xd7)),h=i=>{const H=G;if(g)g[H(0xea)]=!i;};c[G(0xd1)](G(0x181),()=>{const I=G;if(c['value']===I(0xcd)){const i=iobrokerHandler[I(0xfe)]??this.#namedRange(I(0xf6));if(d&&!d[I(0x10b)])d[I(0x10b)]=this.#toLocalInput(i['start']);if(e&&!e[I(0x10b)])e['value']=this.#toLocalInput(i[I(0xf7)]);h(!![]);return;}h(![]),this.#applyRange(c[I(0x10b)]===I(0xe7)?null:this.#namedRange(c[I(0x10b)]));}),f?.['addEventListener'](G(0x135),()=>{const J=G,i=d?.[J(0x10b)]?new Date(d['value'])['getTime']():NaN,j=e?.[J(0x10b)]?new Date(e['value'])[J(0x16f)]():NaN;if(!Number[J(0x14c)](i)||!Number[J(0x14c)](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say(J(0x104),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const K=s,e=new Date(c),f=g=>String(g)[K(0x15d)](0x2,'0');return e[K(0x143)]()+'-'+f(e['getMonth']()+0x1)+'-'+f(e[K(0xd9)]())+'T'+f(e['getHours']())+':'+f(e['getMinutes']());}#namedRange(c){const L=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g['getMonth'](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case'today':return{'start':e(d),'end':d['getTime']()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[L(0x16f)]()-0x7*f,'end':d[L(0x16f)]()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d['getTime']()};case'month':return{'start':new Date(d[L(0x143)](),d['getMonth'](),0x1)['getTime'](),'end':d['getTime']()};case'year':return{'start':new Date(d[L(0x143)](),0x0,0x1)[L(0x16f)](),'end':d[L(0x16f)]()};default:return{'start':d[L(0x16f)]()-f,'end':d[L(0x16f)]()};}}async #applyRange(c){const M=s;iobrokerHandler['setReportRange'](c),this.#say(c?M(0xdf)+new Date(c[M(0x126)])[M(0xf1)]()+'\x20→\x20'+new Date(c['end'])['toLocaleString']():'Report\x20default\x20range'),this.#emit(M(0x137),{'range':c}),await this.#load();}async #wireRangeStates(c){const N=s,d=(c?.['fromState']??'')['trim'](),e=(c?.[N(0xde)]??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const O=N;if(k==null||k===''||k===0x0||k==='0')return null;if(typeof k===O(0x184))return k;const l=Number(k);if(Number['isFinite'](l)&&String(k)['trim']()!=='')return l;const m=Date[O(0x177)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const P=N,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(P(0x119),!![]);return;}const n=iobrokerHandler[P(0xfe)];if(n&&n[P(0x126)]===l&&n['end']===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)['toLocaleString']()+'\x20→\x20'+new Date(m)['toLocaleString']());const o=this[P(0x145)]('rangeKind');if(o)o['value']=P(0xe7);const p=this[P(0x145)](P(0xd7));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const Q=N;try{const n=await iobrokerHandler[Q(0x10d)](k);g[l]=f(n?.[Q(0x167)]);}catch(o){}const m=(p,q)=>{const R=Q;g[l]=f(q?.[R(0x167)]),h(!![])['catch'](()=>{});};try{i[Q(0x16c)]([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console['warn'](Q(0x10a)+k,p);}};await j(d,N(0x126)),await j(e,N(0xf7)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0x11f)](){const S=s;super[S(0x11f)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.['dispose'](),this.#reportChangedSub=null;}[s(0xda)](){const T=s;super[T(0xda)]?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const U=b;if(c?.['type']!==U(0xe7)||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler[U(0x13a)](U(0xe7),this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this['_paper']&&(this[U(0x15c)]['style'][U(0xec)]=g['width']??'210mm',this['_paper'][U(0x11d)]['height']=g['height']??U(0x182)),this.#pageRule(g[U(0xed)]??{},g[U(0xe9)]),this.#applyTheme(g['theme']),await this.#applyToolbox(g[U(0x160)]),this.#fit();});}#applyTheme(c){const V=s,d=this[V(0x13e)];if(!d)return;let e=d[V(0x183)]('__reportTheme');!e&&(e=document['createElement'](V(0x11d)),e['id']=V(0x128),d[V(0x17c)](e));const f=resolveReportTheme(c),g=String(c??'')[V(0x163)]()===V(0x114)?'':reportThemeDeclarations(f['name'],iobrokerHandler['config']?.[V(0xdb)]);e[V(0x148)]=':host\x20#paper{'+g+V(0x105)+(f[V(0x164)]?'#fff':'var(--ui-page,\x20#fff)')+V(0x146);}#busy(c,e){const W=s,f=this[W(0x145)]('load');if(!f)return;if(c==null){f[W(0xea)]=!![];return;}f[W(0xea)]=![];const g=this['_getDomElement'](W(0x187)),h=this[W(0x145)]('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h[W(0x148)]=e;}#logReset(){const c=this['_getDomElement']('loadLog');if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const X=s,d=this[X(0x145)](X(0x110));if(!d||this.#logged[X(0x171)](c))return;this.#logged['add'](c);const e=new Date()['toLocaleTimeString']();d['textContent']+=e+'\x20\x20'+c+'\x0a',d[X(0x14d)]=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const Y=b,g=iobrokerHandler[Y(0x144)]();if(!g[Y(0xf0)]){this.#busy('Rendering…','');return;}const i=g['filter'](m=>m[Y(0x175)]==='history')[Y(0xf0)],j=g['length']-i,k=[];if(j)k['push'](j+Y(0x142)+(j>0x1?'s':''));if(i)k[Y(0x16c)](i+'\x20history\x20quer'+(i>0x1?Y(0xce):'y'));const l=Math[Y(0xe3)]((Date[Y(0x12f)]()-c)/0x3e8);this.#busy(Y(0xe2),k['join'](Y(0x173))+Y(0xd5)+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log('still\x20waiting:\x20'+m['id']+(m['kind']===Y(0x140)?'\x20(history)':''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const Z=s,f=iobrokerHandler[Z(0x138)]+'.'+IobrokerHandler[Z(0x136)](d,c),g=async l=>{const a0=Z;try{return(await iobrokerHandler[a0(0x109)][a0(0x10d)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date[Z(0x12f)](),i=await g('lastRun');let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[Z(0xfa)]([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k===Z(0xf5)){j=!![],this.#busy('Generating\x20on\x20the\x20server…',Z(0x12c));continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(Z(0x111))};if(k===Z(0xd4))return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':Z(0x120)};}#say(c,d){const a1=s;if(!this[a1(0x141)])return;this[a1(0x141)][a1(0x148)]=c,this[a1(0x141)][a1(0x132)][a1(0x12e)](a1(0xd0),!!d);}async #generate(c=s(0x12d),d=s(0x13c)){const a2=s,f=['btnGen','btnSave'][a2(0x13f)](i=>this['_getDomElement'](i))[a2(0x16e)](Boolean);f['forEach'](i=>i[a2(0x127)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler[a2(0xe5)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit('report-before-generate',g,!![])[a2(0x130)]){this.#say('Cancelled.');return;}h[a2(0x151)]=g['format'],h['range']=g[a2(0xe1)];if(this.#missing['length']){const j=this.#missing['slice'](0x0,0x3)['map'](k=>k['id'])['join'](',\x20');throw new Error(a2(0x124)+j+(this.#missing[a2(0xf0)]>0x3?'\x20(+'+(this.#missing['length']-0x3)+'\x20more)':''));}this.#say(a2(0xd3)),this.#busy(g[a2(0x102)]===a2(0x13d)?'Generating\x20on\x20the\x20server…':a2(0xd3),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a2(0x117)](g[a2(0x11e)],{'project':g[a2(0x15a)],'format':g[a2(0x151)],'range':g['range'],'deliver':g['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement']['dataset'][a2(0xf3)]||undefined});if(i[a2(0x15f)]){const k=await this.#awaitServerRun(g[a2(0x11e)],g[a2(0x15a)]);if(!k['ok'])throw new Error(k[a2(0xd4)]||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a2(0x13d)]??null},this.#say(a2(0xf4)+(k['file']??''));}else{h={...h,'success':!![],'file':i['file']??null,'pages':i['pages']??null};const l=i['placeholders']?.[a2(0xf0)]?'\x20—\x20'+i['placeholders'][a2(0xf0)]+a2(0x161):'';this.#say('Downloaded:\x20'+(i[a2(0x13d)]??'')+l);}}catch(m){h['error']=m?.['message']??String(m),this.#say('Not\x20generated\x20—\x20'+h[a2(0xd4)],!![]);}finally{f[a2(0x134)](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h['success']?'report-generated':'report-generate-failed',h);try{await this.#hook('afterGenerate',g,h);}catch(n){}}}if(!customElements['get']('iobroker-webui-report-viewer'))customElements['define']('iobroker-webui-report-viewer',ReportViewer);function a(){const a3=['[report]\x20range\x20state\x20','value','left','getState','createElement','mm;\x20','loadLog','lastFile','\x20landscape','entries','runtime','1751932hyyXnX','scale(','generateReport','height','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','size','landscape','btnBar','style','name','disconnectedCallback','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','1154795rYJUGs','@page\x20{\x20size:\x20','remove','no\x20value\x20from:\x20','_toolbarWanted','start','disabled','__reportTheme','whenScreenReady','@top-left\x20{\x20content:\x20\x22\x22;\x20}','beginFetchTracking','The\x20server\x20is\x20rendering\x20the\x20report.','html','toggle','now','defaultPrevented','btnPrint','classList','some','forEach','click','reportStateBase','report-range-changed','namespace','getBoundingClientRect','getWebuiObject','join','download','file','shadowRoot','map','history','_status','\x20value','getFullYear','outstandingFetches','_getDomElement',';color:var(--ui-text,\x20#1d2733);}','admin','textContent','setScreenNameAndLoad','isArray','btnOut','isFinite','scrollTop','_rootShadow','screenName','1504544EnixOf','format','22993NBSGSP','slice','\x20*\x20','report-ready','Report\x20not\x20found:\x20','parentElement','viewer','objectType','project','\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}','_paper','padStart','groups','viaTrigger','toolbox','\x20control(s)\x20shown\x20as\x20placeholders','print','trim','paper','bottom','210mm','val','btnGen','date','onReportLoad','items','push','getCurrentUser','filter','getTime','template','has','_showBtn','\x20and\x20','_parseAttributesToProperties','kind','[data-tb=\x22','parse','reportName','No\x20value\x20from:\x20','action','mm\x20','appendChild','913312fZXLvp','_restoreCachedInititalValues','clientWidth','pageNumber','change','297mm','getElementById','number','function','dispose','loadWhat','Building\x20the\x20page…','head','Opening\x20','toolbarVisible','custom','ies','_bar','err','addEventListener','3102678FaZxqZ','Generating…','error','\x20outstanding\x20—\x20','url','rangeBoxes','hide','getDate','connectedCallback','globalStyle','[report]\x20table\x20paging','btnFit','toState','Range:\x20','dispatchEvent','range','Loading\x20data…','round','theme','currentProject','querySelectorAll','report','__report-page-rule','printMargins','hidden','40SetmFl','width','page','btnSave','btnApply','length','toLocaleString','594489Myjmhy','webuiTheme','Saved\x20on\x20the\x20server:\x20','running','today','end','6jUrSEu','calc(','all','marginBottom','margin','show','reportRange','_viewer','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','report\x20','deliver','cssText','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','background:','canSaveReportsOnServer','right','_zoomLabel','connection'];a=function(){return a3;};return a();}