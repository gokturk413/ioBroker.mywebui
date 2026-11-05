function b(c,d){c=c-0xba;const e=a();let f=e[c];return f;}const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x122))/0x1+parseInt(r(0xe0))/0x2+-parseInt(r(0x166))/0x3*(parseInt(r(0x121))/0x4)+parseInt(r(0xdd))/0x5*(parseInt(r(0x117))/0x6)+parseInt(r(0x131))/0x7*(-parseInt(r(0xfd))/0x8)+parseInt(r(0xe9))/0x9+-parseInt(r(0x134))/0xa*(-parseInt(r(0xf2))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbacde));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x146)]=!![];static [s(0xbb)]=css`
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
    `;#zoom=0x1;#reportName;get[s(0xe3)](){return this.#reportName;}set[s(0xe3)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x11b)]();}[s(0x11e)](){const u=s,c=this.#reportName;this[u(0x129)]();if(c&&!this.#reportName)this.#reportName=c;this[u(0x136)]=this[u(0x15d)](u(0x149)),this['_paper']=this[u(0x15d)]('paper'),this['_viewer']=this['_getDomElement']('viewer'),this[u(0x128)]=this[u(0x15d)]('status'),this[u(0x114)]=this['_getDomElement']('zoomLabel'),this[u(0x10b)][u(0x111)]=u(0x13d),this.#watchReport();const d=(e,f)=>this[u(0x15d)](e)?.['addEventListener'](u(0x161),f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d(u(0xdb),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate('html')),d(u(0x10e),()=>this.#generate('html','file')),iobrokerHandler['canSaveReportsOnServer']?.()['then'](e=>{const v=u,f=this[v(0x15d)](v(0x10e));if(f)f['hidden']=!e;})[u(0xe8)](()=>{}),this['_showBtn']=this['_getDomElement'](u(0x120)),d('btnBar',()=>this[u(0xea)]=![]),d('btnShow',()=>this[u(0xea)]=!![]);if(this[u(0x132)]!==undefined)this[u(0xea)]=this[u(0x132)];if(this.#reportName)this.#load();}set[s(0xea)](c){const w=s;this[w(0x132)]=!!c;if(this[w(0x136)])this['_bar'][w(0xe1)]=!c;if(this['_showBtn'])this['_showBtn']['hidden']=!!c;}get['toolbarVisible'](){const x=s;return this[x(0x136)]?!this['_bar']['hidden']:this[x(0x132)]??!![];}async #load(){const y=s;if(!this[y(0x10b)])return;this.#say(''),this.#busy(y(0xe2)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x100)](y(0x13d),this.#reportName);if(!c){this.#busy(null),this.#say(y(0xd8)+this.#reportName,!![]);return;}const d=c[y(0x109)]??{};this[y(0xf5)]['style'][y(0x108)]=d[y(0x108)]??y(0x101),this[y(0xf5)]['style'][y(0x119)]=d[y(0x119)]??'297mm',this[y(0x10b)][y(0xbb)][y(0xf4)]=y(0x15c),this.#applyTheme(d['theme']);const e=d['page']??{};this.#pageRule(e,d['printMargins']),await this.#applyToolbox(d['toolbox']),iobrokerHandler['beginFetchTracking']();if(this[y(0x10b)]['screenName']===this.#reportName)await this[y(0x10b)][y(0x14a)]();else await this['_viewer'][y(0xc7)](this.#reportName);this.#fit(),this.#hook(y(0x10d),this['_viewer'],this['_viewer']['_rootShadow']),this.#emit(y(0x12d),{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this['_viewer'][y(0x13e)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer'][y(0x12c)]();f(),iobrokerHandler[y(0xc8)](),this.#busy(null),this.#missing=g,this.#hook(y(0x155),this['_viewer'],this['_viewer']['_rootShadow'],{'missing':g}),this.#emit(y(0x107),{'name':this.#reportName,'missing':g});if(g[y(0x113)])this.#say(y(0xd6)+g[y(0x103)](0x0,0x3)['map'](h=>h['id'])['join'](',\x20')+(g[y(0x113)]>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this[z(0x10b)]?.['_scriptObject']?.[c];if(typeof f!==z(0xee))return undefined;try{return f(...d);}catch(g){return console[z(0xdc)]('report\x20'+this.#reportName+':\x20'+c+z(0x163),g),undefined;}}#emit(c,d,e=![]){const f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this[A(0xf7)]!==document[A(0xc0)])return;const e='__report-page-rule';document['getElementById'](e)?.['remove']();const f=document[A(0xeb)]('style');f['id']=e;const g=(c[A(0xf3)]??'A4')+(c['orientation']===A(0xec)?A(0x11f):''),h=c[A(0x154)]??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x148)])k['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k['push']('@top-center\x20{\x20content:\x20\x22\x22;\x20}',A(0xcb));if(!j['url'])k['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}');if(!j[A(0x118)])k[A(0xcf)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}');f[A(0x142)]='@page\x20{\x20size:\x20'+g+A(0x106)+i(h['top'])+A(0x133)+i(h[A(0x137)])+A(0x133)+i(h['bottom'])+A(0x133)+i(h[A(0x15f)])+'mm;\x20'+k[A(0x115)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[A(0x144)]['appendChild'](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x138)](0.1,c)),this[B(0xf5)][B(0xbb)]['transform']=B(0xd5)+this.#zoom+')',this[B(0xf5)]['style'][B(0x13a)]='calc('+this['_paper']['style']['height']+B(0x15a)+(this.#zoom-0x1)+')',this['_zoomLabel'][B(0x142)]=Math['round'](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this[C(0x15d)]('scroll')['clientWidth']-0x24,d=this['_paper'][C(0x156)]()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x13f)](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const D=s,f=d?.['items']??{};let g=null;try{g=await iobrokerHandler[D(0x130)]();}catch(k){}const h=g?.['groups']??[],i=g?.['id']===D(0x162),j=this['_bar']??this['_getDomElement']('bar');if(!j)return;for(const l of j[D(0x165)]('[data-tb]'))l['removeAttribute'](D(0xf8));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n['show']===![])o=D(0x12a);else{if(!i&&Array[D(0x125)](n[D(0xf1)])&&n['groups'][D(0x113)]&&!n[D(0xf1)][D(0xcc)](p=>h['includes'](p)))o=n['action']==='disable'?'disable':'hide';}if(!o)continue;for(const p of j['querySelectorAll']('[data-tb=\x22'+m+'\x22]'))p['setAttribute'](D(0xf8),o);}}#initRange(){const E=s,c=this['_getDomElement']('rangeKind'),d=this['_getDomElement'](E(0x157)),e=this['_getDomElement']('rangeTo'),f=this['_getDomElement']('btnApply');if(!c)return;const g=this['_getDomElement']('rangeBoxes'),h=i=>{const F=E;if(g)g[F(0xe1)]=!i;};c['addEventListener'](E(0x14c),()=>{const G=E;if(c['value']===G(0xd2)){const i=iobrokerHandler[G(0xd0)]??this.#namedRange(G(0xe6));if(d&&!d['value'])d['value']=this.#toLocalInput(i['start']);if(e&&!e['value'])e[G(0xfc)]=this.#toLocalInput(i[G(0x16b)]);h(!![]);return;}h(![]),this.#applyRange(c['value']==='report'?null:this.#namedRange(c['value']));}),f?.[E(0xe5)](E(0x161),()=>{const H=E,i=d?.[H(0xfc)]?new Date(d['value'])[H(0xc2)]():NaN,j=e?.[H(0xfc)]?new Date(e['value'])[H(0xc2)]():NaN;if(!Number[H(0x127)](i)||!Number[H(0x127)](j)){this.#say('Pick\x20both\x20dates.',!![]);return;}if(i>=j){this.#say('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const I=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e[I(0x145)]()+'-'+f(e[I(0x153)]()+0x1)+'-'+f(e[I(0xef)]())+'T'+f(e['getHours']())+':'+f(e[I(0x102)]());}#namedRange(c){const J=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g[J(0x153)](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case J(0xe6):return{'start':e(d),'end':d[J(0xc2)]()};case'yesterday':return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d[J(0xc2)]()-0x7*f,'end':d['getTime']()};case'30d':return{'start':d['getTime']()-0x1e*f,'end':d['getTime']()};case J(0x16c):return{'start':new Date(d[J(0x145)](),d[J(0x153)](),0x1)[J(0xc2)](),'end':d['getTime']()};case J(0xd4):return{'start':new Date(d[J(0x145)](),0x0,0x1)[J(0xc2)](),'end':d[J(0xc2)]()};default:return{'start':d['getTime']()-f,'end':d[J(0xc2)]()};}}async #applyRange(c){const K=s;iobrokerHandler['setReportRange'](c),this.#say(c?'Range:\x20'+new Date(c['start'])['toLocaleString']()+'\x20→\x20'+new Date(c['end'])['toLocaleString']():K(0x143)),this.#emit(K(0x16a),{'range':c}),await this.#load();}async #wireRangeStates(c){const L=s,d=(c?.['fromState']??'')[L(0x13b)](),e=(c?.['toState']??'')['trim']();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const M=L;if(k==null||k==='')return null;if(typeof k==='number')return k;const l=Number(k);if(Number[M(0x127)](l)&&String(k)['trim']()!=='')return l;const m=Date[M(0xfa)](String(k));return Number[M(0x127)](m)?m:null;},g={'start':null,'end':null},h=async k=>{const N=L,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(N(0x11c),!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n[N(0xfb)]===l&&n['end']===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(N(0xc1)+new Date(l)['toLocaleString']()+N(0xbd)+new Date(m)['toLocaleString']());const o=this['_getDomElement'](N(0xca));if(o)o['value']=N(0x13d);const p=this['_getDomElement'](N(0x152));if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const O=L;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.['val']);}catch(o){}const m=(p,q)=>{g[l]=f(q?.['val']),h(!![])['catch'](()=>{});};try{i['push']([k,m,await iobrokerHandler['subscribeState'](k,m)]);}catch(p){console['warn'](O(0xc9)+k,p);}};await j(d,'start'),await j(e,L(0x16b)),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const P=L;for(const [k,l]of i){try{iobrokerHandler[P(0xf9)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;[s(0x123)](){const Q=s;super[Q(0x123)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[Q(0xd3)](),this.#reportChangedSub=null;}['connectedCallback'](){const R=s;super[R(0xbe)]?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){const S=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[S(0x14e)]['on'](async c=>{const T=S;if(c?.[T(0x135)]!==T(0x13d)||c[T(0x112)]!==this.#reportName)return;let f;try{f=await iobrokerHandler[T(0x100)](T(0x13d),this.#reportName);}catch(h){return;}if(!f)return;const g=f['settings']??{};this[T(0xf5)]&&(this['_paper']['style'][T(0x108)]=g['width']??'210mm',this['_paper'][T(0xbb)]['height']=g[T(0x119)]??'297mm'),this.#pageRule(g['page']??{},g['printMargins']),this.#applyTheme(g['theme']),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const U=s,d=this['shadowRoot'];if(!d)return;let e=d[U(0x14b)]('__reportTheme');!e&&(e=document['createElement']('style'),e['id']='__reportTheme',d[U(0x151)](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()==='runtime'?'':reportThemeDeclarations(f[U(0x112)],iobrokerHandler['config']?.['globalStyle']);e['textContent']=':host\x20#paper{'+g+'background:'+(f[U(0x147)]?U(0x10f):'var(--ui-page,\x20#fff)')+U(0x105);}#busy(c,e){const V=s,f=this[V(0x15d)](V(0xba));if(!f)return;if(c==null){f[V(0xe1)]=!![];return;}f[V(0xe1)]=![];const g=this['_getDomElement']('loadWhat'),h=this['_getDomElement']('loadDetail');if(g)g['textContent']=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const W=s,c=this[W(0x15d)](W(0xcd));if(c)c[W(0x142)]='';this.#logged=new Set();}#logged=new Set();#log(c){const X=s,d=this['_getDomElement'](X(0xcd));if(!d||this.#logged['has'](c))return;this.#logged[X(0xd9)](c);const e=new Date()['toLocaleTimeString']();d[X(0x142)]+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d['scrollHeight'];}#watchFetches(){const Y=s,c=Date[Y(0x12f)](),d=0xbb8,e=()=>{const Z=Y,g=iobrokerHandler[Z(0xda)]();if(!g['length']){this.#busy(Z(0xde),'');return;}const i=g[Z(0xdf)](m=>m[Z(0xc6)]==='history')[Z(0x113)],j=g[Z(0x113)]-i,k=[];if(j)k[Z(0xcf)](j+'\x20value'+(j>0x1?'s':''));if(i)k[Z(0xcf)](i+Z(0xc5)+(i>0x1?Z(0xf6):'y'));const l=Math['round']((Date['now']()-c)/0x3e8);this.#busy('Loading\x20data…',k['join']('\x20and\x20')+Z(0xe7)+l+'s');for(const m of g)if(m[Z(0x11a)]>d)this.#log('still\x20waiting:\x20'+m['id']+(m[Z(0xc6)]===Z(0x116)?Z(0x14d):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a0=s,f=iobrokerHandler[a0(0xfe)]+'.'+IobrokerHandler[a0(0x15e)](d,c),g=async l=>{const a1=a0;try{return(await iobrokerHandler['connection']['getState'](f+'.'+l))?.[a1(0x13c)];}catch(m){return undefined;}},h=Date[a0(0x12f)](),i=await g('lastRun');let j=![];while(Date['now']()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[a0(0x14f)]([g('lastStatus'),g('lastRun')]),m=l!=null&&l!==i;if(k===a0(0x110)){j=!![],this.#busy('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g('lastFile')};if(k===a0(0xdc))return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':a0(0xed)};}#say(c,d){const a2=s;if(!this['_status'])return;this[a2(0x128)]['textContent']=c,this[a2(0x128)]['classList']['toggle']('err',!!d);}async #generate(c='html',d='download'){const a3=s,f=[a3(0x167),a3(0x10e)]['map'](i=>this[a3(0x15d)](i))['filter'](Boolean);f[a3(0x159)](i=>i[a3(0xce)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler['reportRange']??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(a3(0x160),g)===![]){this.#say(a3(0xd1));return;}if(this.#emit(a3(0x150),g,!![])['defaultPrevented']){this.#say(a3(0xc4));return;}h['format']=g['format'],h['range']=g['range'];if(this.#missing['length']){const j=this.#missing[a3(0x103)](0x0,0x3)[a3(0x139)](k=>k['id'])['join'](',\x20');throw new Error(a3(0x124)+j+(this.#missing[a3(0x113)]>0x3?'\x20(+'+(this.#missing['length']-0x3)+'\x20more)':''));}this.#say(a3(0x168)),this.#busy(g[a3(0x141)]===a3(0xd7)?a3(0xbc):'Generating…',a3(0xe4));const i=await iobrokerHandler[a3(0x11d)](g[a3(0x112)],{'project':g['project'],'format':g[a3(0xf0)],'range':g['range'],'deliver':g['deliver'],'timeoutMs':this[a3(0xff)],'theme':document['documentElement']['dataset']['webuiTheme']||undefined});if(i[a3(0x140)]){const k=await this.#awaitServerRun(g[a3(0x112)],g['project']);if(!k['ok'])throw new Error(k['error']||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a3(0xd7)]??null},this.#say(a3(0x104)+(k['file']??''));}else{h={...h,'success':!![],'file':i[a3(0xd7)]??null,'pages':i[a3(0x158)]??null};const l=i[a3(0x10c)]?.[a3(0x113)]?a3(0x12b)+i['placeholders']['length']+a3(0x164):'';this.#say(a3(0x12e)+(i['file']??'')+l);}}catch(m){h['error']=m?.['message']??String(m),this.#say(a3(0xbf)+h['error'],!![]);}finally{f[a3(0x159)](n=>n['disabled']=![]),this.#busy(null);}this.#emit(h[a3(0xc3)]?'report-generated':'report-generate-failed',h);try{await this.#hook(a3(0x10a),g,h);}catch(n){}}}function a(){const a4=['now','getCurrentUser','14RrgCZe','_toolbarWanted','mm\x20','22710rIcTVn','type','_bar','right','max','map','marginBottom','trim','val','report','whenScreenReady','min','viaTrigger','deliver','textContent','Report\x20default\x20range','head','getFullYear','readonly','paper','date','bar','reload','getElementById','change','\x20(history)','objectsChanged','all','report-before-generate','appendChild','rangeBoxes','getMonth','margin','onReportReady','getBoundingClientRect','rangeFrom','pages','forEach','\x20*\x20','iobroker-webui-report-viewer','display:block;width:100%;height:100%;','_getDomElement','reportStateBase','left','beforeGenerate','click','admin','\x20threw','\x20control(s)\x20shown\x20as\x20placeholders','querySelectorAll','975930fqKdVw','btnGen','Generating…','define','report-range-changed','end','month','load','style','Generating\x20on\x20the\x20server…','\x20→\x20','connectedCallback','Not\x20generated\x20—\x20','body','Range\x20from\x20states:\x20','getTime','success','Cancelled.','\x20history\x20quer','kind','setScreenNameAndLoad','endFetchTracking','[report]\x20range\x20state\x20','rangeKind','@top-right\x20{\x20content:\x20\x22\x22;\x20}','some','loadLog','disabled','push','reportRange','Cancelled\x20by\x20the\x20report\x20script.','custom','dispose','year','scale(','No\x20value\x20from:\x20','file','Report\x20not\x20found:\x20','add','outstandingFetches','btnOut','error','97245ZgiHgf','Rendering…','filter','821450fZqObF','hidden','Opening\x20','reportName','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','addEventListener','today','\x20outstanding\x20—\x20','catch','3708252YYLjvV','toolbarVisible','createElement','landscape','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','function','getDate','format','groups','10681cbvQLj','size','cssText','_paper','ies','parentElement','data-tb-off','unsubscribeState','parse','start','value','4049192UyetIV','namespace','generateTimeoutMs','getWebuiObject','210mm','getMinutes','slice','Saved\x20on\x20the\x20server:\x20',';color:var(--ui-text,\x20#1d2733);}',';\x20margin:\x20','report-ready','width','settings','afterGenerate','_viewer','placeholders','onReportLoad','btnSave','#fff','running','objectType','name','length','_zoomLabel','join','history','102HJrnyc','pageNumber','height','waitedMs','_restoreCachedInititalValues','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','generateReport','ready','\x20landscape','btnShow','8dGBHfd','930459OEqeBg','disconnectedCallback','no\x20value\x20from:\x20','isArray','get','isFinite','_status','_parseAttributesToProperties','hide','\x20—\x20','whenDataReady','report-load','Downloaded:\x20'];a=function(){return a4;};return a();}if(!customElements[s(0x126)](s(0x15b)))customElements[s(0x169)](s(0x15b),ReportViewer);