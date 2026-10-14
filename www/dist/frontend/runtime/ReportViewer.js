const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x152))/0x1*(parseInt(r(0x1bb))/0x2)+-parseInt(r(0x1d9))/0x3+-parseInt(r(0x1f4))/0x4*(parseInt(r(0x197))/0x5)+-parseInt(r(0x1be))/0x6*(parseInt(r(0x189))/0x7)+-parseInt(r(0x159))/0x8+-parseInt(r(0x172))/0x9*(-parseInt(r(0x1f0))/0xa)+parseInt(r(0x1df))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6a1d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static ['readonly']=!![];static ['style']=css`
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
    `;#zoom=0x1;#reportName;get['reportName'](){return this.#reportName;}set[s(0x156)](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){const t=s;super(),this[t(0x176)]();}[s(0x1ca)](){const u=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[u(0x167)]=this['_getDomElement']('bar'),this['_paper']=this[u(0x14b)]('paper'),this[u(0x16a)]=this[u(0x14b)](u(0x1ac)),this[u(0x16c)]=this[u(0x14b)](u(0x171)),this[u(0x17f)]=this['_getDomElement'](u(0x17b)),this['_viewer'][u(0x1c1)]='report',this.#watchReport();const d=(e,f)=>this[u(0x14b)](e)?.['addEventListener'](u(0x19d),f);d(u(0x166),()=>this.#setZoom(this.#zoom*1.25)),d(u(0x13c),()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d(u(0x141),()=>this.#print()),this.#initRange(),d('btnGen',()=>this.#generate(u(0x1f2))),d(u(0x1c2),()=>this.#generate('html',u(0x1c7))),iobrokerHandler['canSaveReportsOnServer']?.()[u(0x14e)](e=>{const v=u,f=this[v(0x14b)](v(0x1c2));if(f)f['hidden']=!e;})['catch'](()=>{}),this[u(0x1e2)]=this['_getDomElement'](u(0x17d)),d(u(0x1ec),()=>this[u(0x160)]=![]),d(u(0x17d),()=>this['toolbarVisible']=!![]);if(this[u(0x1b7)]!==undefined)this[u(0x160)]=this[u(0x1b7)];if(this.#reportName)this.#load();}set['toolbarVisible'](c){const w=s;this[w(0x1b7)]=!!c;if(this[w(0x167)])this[w(0x167)]['hidden']=!c;if(this[w(0x1e2)])this[w(0x1e2)]['hidden']=!!c;}get['toolbarVisible'](){const x=s;return this[x(0x167)]?!this['_bar']['hidden']:this['_toolbarWanted']??!![];}async #load(){const y=s;if(!this['_viewer'])return;this.#say(''),this.#busy(y(0x15e)+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler[y(0x1e0)]('report',this.#reportName);if(!c){this.#busy(null),this.#say('Report\x20not\x20found:\x20'+this.#reportName,!![]);return;}const d=c['settings']??{};this[y(0x1b1)]['style']['width']=d['width']??y(0x175),this[y(0x1b1)]['style'][y(0x1ce)]=d['height']??'297mm',this['_viewer']['style'][y(0x148)]=y(0x1c8),this.#applyTheme(d['theme']);const e=d[y(0x18c)]??{};this.#pageRule(e,d[y(0x1d8)]),await this.#applyToolbox(d[y(0x169)]),iobrokerHandler[y(0x181)]();if(this[y(0x16a)]['screenName']===this.#reportName)await this[y(0x16a)]['reload']();else await this[y(0x16a)]['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this[y(0x16a)],this['_viewer']['_rootShadow']),this.#emit(y(0x142),{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy(y(0x1dd),''),await this['_viewer'][y(0x1d4)]({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer']['whenDataReady']();f(),iobrokerHandler[y(0x15b)](),this.#busy(null),this.#missing=g,this.#hook(y(0x17a),this['_viewer'],this[y(0x16a)]['_rootShadow'],{'missing':g}),this.#emit('report-ready',{'name':this.#reportName,'missing':g});if(g['length'])this.#say(y(0x199)+g[y(0x1e5)](0x0,0x3)['map'](h=>h['id'])[y(0x155)](',\x20')+(g['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const z=s,f=this[z(0x16a)]?.['_scriptObject']?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console[z(0x170)](z(0x1b5)+this.#reportName+':\x20'+c+'\x20threw',g),undefined;}}#emit(c,d,e=![]){const f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this['_viewer']??this)['dispatchEvent'](f),f;}#pageRule(c,d){const A=s;if(this[A(0x18e)]!==document['body'])return;const e='__report-page-rule';document['getElementById'](e)?.[A(0x178)]();const f=document[A(0x18f)](A(0x1cb));f['id']=e;const g=(c['size']??'A4')+(c[A(0x1de)]==='landscape'?'\x20landscape':''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x17e)])k['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}');if(!j['title'])k[A(0x1e4)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}',A(0x1d3));if(!j[A(0x191)])k['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',A(0x1a1));if(!j[A(0x19c)])k['push'](A(0x162));f[A(0x1c5)]=A(0x1bd)+g+';\x20margin:\x20'+i(h[A(0x1dc)])+A(0x13a)+i(h[A(0x19a)])+A(0x13a)+i(h[A(0x1e6)])+'mm\x20'+i(h['left'])+'mm;\x20'+k['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][A(0x165)](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x16b)](0.1,c)),this[B(0x1b1)]['style'][B(0x1ad)]='scale('+this.#zoom+')',this[B(0x1b1)][B(0x1cb)]['marginBottom']='calc('+this[B(0x1b1)][B(0x1cb)][B(0x1ce)]+'\x20*\x20'+(this.#zoom-0x1)+')',this[B(0x17f)][B(0x1c5)]=Math['round'](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this[C(0x14b)]('scroll')['clientWidth']-0x24,d=this['_paper']['getBoundingClientRect']()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x18d)](0x1,c/d));}#print(){const D=s;window[D(0x15d)]();}async #applyToolbox(d){const E=s,f=d?.[E(0x1cc)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[E(0x174)]??[],i=g?.['id']===E(0x1bf),j=this['_bar']??this[E(0x14b)]('bar');if(!j)return;for(const l of j['querySelectorAll']('[data-tb]'))l[E(0x1af)]('data-tb-off');for(const [m,n]of Object[E(0x147)](f)){if(!n)continue;let o=null;if(n[E(0x16e)]===![])o='hide';else{if(!i&&Array['isArray'](n[E(0x174)])&&n['groups']['length']&&!n[E(0x174)][E(0x1a8)](p=>h[E(0x179)](p)))o=n['action']==='disable'?'disable':'hide';}if(!o)continue;for(const p of j['querySelectorAll'](E(0x1ed)+m+'\x22]'))p[E(0x1b0)](E(0x180),o);}}#initRange(){const F=s,c=this['_getDomElement'](F(0x1ab)),d=this[F(0x14b)]('rangeFrom'),e=this[F(0x14b)](F(0x1f3)),f=this['_getDomElement']('btnApply');if(!c)return;const g=this['_getDomElement'](F(0x1ae)),h=i=>{const G=F;if(g)g[G(0x19f)]=!i;};c[F(0x1b3)]('change',()=>{const H=F;if(c['value']===H(0x18a)){const i=iobrokerHandler[H(0x168)]??this.#namedRange(H(0x1aa));if(d&&!d['value'])d[H(0x1e8)]=this.#toLocalInput(i[H(0x144)]);if(e&&!e['value'])e['value']=this.#toLocalInput(i[H(0x183)]);h(!![]);return;}h(![]),this.#applyRange(c[H(0x1e8)]===H(0x182)?null:this.#namedRange(c['value']));}),f?.['addEventListener'](F(0x19d),()=>{const I=F,i=d?.[I(0x1e8)]?new Date(d['value'])[I(0x185)]():NaN,j=e?.[I(0x1e8)]?new Date(e['value'])[I(0x185)]():NaN;if(!Number['isFinite'](i)||!Number['isFinite'](j)){this.#say(I(0x1c9),!![]);return;}if(i>=j){this.#say(I(0x1b6),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const J=s,e=new Date(c),f=g=>String(g)[J(0x190)](0x2,'0');return e['getFullYear']()+'-'+f(e[J(0x1b2)]()+0x1)+'-'+f(e[J(0x1a3)]())+'T'+f(e[J(0x13e)]())+':'+f(e['getMinutes']());}#namedRange(c){const K=s,d=new Date(),e=g=>new Date(g['getFullYear'](),g['getMonth'](),g[K(0x1a3)]())[K(0x185)](),f=0x5265c00;switch(c){case K(0x1aa):return{'start':e(d),'end':d['getTime']()};case K(0x15f):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d['getTime']()};case K(0x194):return{'start':d['getTime']()-0x1e*f,'end':d[K(0x185)]()};case K(0x164):return{'start':new Date(d['getFullYear'](),d['getMonth'](),0x1)[K(0x185)](),'end':d[K(0x185)]()};case K(0x154):return{'start':new Date(d['getFullYear'](),0x0,0x1)[K(0x185)](),'end':d[K(0x185)]()};default:return{'start':d['getTime']()-f,'end':d['getTime']()};}}async #applyRange(c){const L=s;iobrokerHandler[L(0x1d7)](c),this.#say(c?L(0x1e7)+new Date(c['start'])['toLocaleString']()+L(0x1a5)+new Date(c['end'])[L(0x157)]():L(0x18b)),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const M=s,d=(c?.['fromState']??'')[M(0x158)](),e=(c?.[M(0x1ea)]??'')[M(0x158)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const N=M;if(k==null||k==='')return null;if(typeof k==='number')return k;const l=Number(k);if(Number[N(0x1e3)](l)&&String(k)[N(0x158)]()!=='')return l;const m=Date[N(0x13d)](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const O=M,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say(O(0x1c3),!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n['start']===l&&n['end']===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say('Range\x20from\x20states:\x20'+new Date(l)[O(0x157)]()+'\x20→\x20'+new Date(m)['toLocaleString']());const o=this['_getDomElement'](O(0x1ab));if(o)o['value']='report';const p=this[O(0x14b)]('rangeBoxes');if(p)p[O(0x19f)]=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const P=M;try{const n=await iobrokerHandler[P(0x16d)](k);g[l]=f(n?.[P(0x163)]);}catch(o){}const m=(p,q)=>{const Q=P;g[l]=f(q?.['val']),h(!![])[Q(0x1a4)](()=>{});};try{i['push']([k,m,await iobrokerHandler[P(0x1cf)](k,m)]);}catch(p){console[P(0x1c0)](P(0x177)+k,p);}};await j(d,M(0x144)),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{const R=M;for(const [k,l]of i){try{iobrokerHandler[R(0x196)](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const S=s;super[S(0x139)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[S(0x1cd)](),this.#reportChangedSub=null;}[s(0x145)](){const T=s;super[T(0x145)]?.();if(this[T(0x167)])this.#watchReport();}#reportChangedSub=null;#watchReport(){const U=s;if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler[U(0x1b8)]['on'](async c=>{const V=U;if(c?.['type']!=='report'||c[V(0x1e1)]!==this.#reportName)return;let f;try{f=await iobrokerHandler[V(0x1e0)]('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f[V(0x1ee)]??{};this['_paper']&&(this['_paper'][V(0x1cb)]['width']=g[V(0x19e)]??V(0x175),this[V(0x1b1)][V(0x1cb)][V(0x1ce)]=g['height']??'297mm'),this.#pageRule(g[V(0x18c)]??{},g[V(0x1d8)]),this.#applyTheme(g['theme']),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const W=s,d=this[W(0x16f)];if(!d)return;let e=d['getElementById'](W(0x146));!e&&(e=document['createElement']('style'),e['id']='__reportTheme',d['appendChild'](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()===W(0x1a9)?'':reportThemeDeclarations(f['name'],iobrokerHandler['config']?.[W(0x17c)]);e[W(0x1c5)]=':host\x20#paper{'+g+W(0x193)+(f[W(0x1e9)]?'#fff':'var(--ui-page,\x20#fff)')+';color:var(--ui-text,\x20#1d2733);}';}#busy(c,e){const X=s,f=this['_getDomElement'](X(0x192));if(!f)return;if(c==null){f['hidden']=!![];return;}f['hidden']=![];const g=this['_getDomElement']('loadWhat'),h=this[X(0x14b)](X(0x15a));if(g)g[X(0x1c5)]=c;if(h&&e!==undefined)h['textContent']=e;}#logReset(){const Y=s,c=this['_getDomElement']('loadLog');if(c)c[Y(0x1c5)]='';this.#logged=new Set();}#logged=new Set();#log(c){const Z=s,d=this[Z(0x14b)]('loadLog');if(!d||this.#logged['has'](c))return;this.#logged[Z(0x140)](c);const e=new Date()[Z(0x1c4)]();d['textContent']+=e+'\x20\x20'+c+'\x0a',d[Z(0x14a)]=d['scrollHeight'];}#watchFetches(){const a0=s,c=Date[a0(0x151)](),d=0xbb8,e=()=>{const a1=a0,g=iobrokerHandler[a1(0x19b)]();if(!g['length']){this.#busy(a1(0x13f),'');return;}const i=g['filter'](m=>m['kind']===a1(0x15c))['length'],j=g[a1(0x195)]-i,k=[];if(j)k['push'](j+'\x20value'+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math[a1(0x1d2)]((Date['now']()-c)/0x3e8);this.#busy('Loading\x20data…',k['join'](a1(0x14d))+a1(0x1d1)+l+'s');for(const m of g)if(m['waitedMs']>d)this.#log(a1(0x150)+m['id']+(m['kind']==='history'?a1(0x153):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const a3=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler['reportStateBase'](d,c),g=async l=>{const a2=b;try{return(await iobrokerHandler[a2(0x143)][a2(0x16d)](f+'.'+l))?.['val'];}catch(m){return undefined;}},h=Date['now'](),i=await g(a3(0x1a0));let j=![];while(Date[a3(0x151)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[a3(0x1bc)]([g('lastStatus'),g(a3(0x1a0))]),m=l!=null&&l!==i;if(k===a3(0x184)){j=!![],this.#busy(a3(0x186),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(a3(0x14f))};if(k==='error')return{'ok':![],'error':await g('lastError')};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const a4=s;if(!this['_status'])return;this['_status']['textContent']=c,this['_status'][a4(0x149)][a4(0x1ef)]('err',!!d);}async #generate(c=s(0x1f2),d='download'){const a5=s,f=[a5(0x13b),a5(0x1c2)][a5(0x1ba)](i=>this['_getDomElement'](i))[a5(0x1d5)](Boolean);f[a5(0x1b4)](i=>i['disabled']=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[a5(0x168)]??undefined,'project':iobrokerHandler['currentProject']};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook('beforeGenerate',g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit(a5(0x1f1),g,!![])['defaultPrevented']){this.#say(a5(0x1a2));return;}h[a5(0x161)]=g[a5(0x161)],h['range']=g[a5(0x198)];if(this.#missing[a5(0x195)]){const j=this.#missing[a5(0x1e5)](0x0,0x3)['map'](k=>k['id'])['join'](',\x20');throw new Error(a5(0x1da)+j+(this.#missing[a5(0x195)]>0x3?'\x20(+'+(this.#missing[a5(0x195)]-0x3)+'\x20more)':''));}this.#say(a5(0x1a6)),this.#busy(g['deliver']===a5(0x1c7)?'Generating\x20on\x20the\x20server…':'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');const i=await iobrokerHandler[a5(0x14c)](g[a5(0x1e1)],{'project':g[a5(0x173)],'format':g[a5(0x161)],'range':g[a5(0x198)],'deliver':g['deliver'],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][a5(0x188)]['webuiTheme']||undefined});if(i['viaTrigger']){const k=await this.#awaitServerRun(g['name'],g['project']);if(!k['ok'])throw new Error(k[a5(0x170)]||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[a5(0x1c7)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k['file']??''));}else{h={...h,'success':!![],'file':i[a5(0x1c7)]??null,'pages':i['pages']??null};const l=i['placeholders']?.['length']?'\x20—\x20'+i['placeholders']['length']+a5(0x187):'';this.#say(a5(0x1db)+(i[a5(0x1c7)]??'')+l);}}catch(m){h['error']=m?.[a5(0x1c6)]??String(m),this.#say(a5(0x1a7)+h[a5(0x170)],!![]);}finally{f['forEach'](n=>n[a5(0x1d6)]=![]),this.#busy(null);}this.#emit(h['success']?a5(0x1b9):'report-generate-failed',h);try{await this.#hook(a5(0x1eb),g,h);}catch(n){}}}function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}if(!customElements['get']('iobroker-webui-report-viewer'))customElements['define'](s(0x1d0),ReportViewer);function a(){const a6=['30d','length','unsubscribeState','440rlDNTK','range','No\x20value\x20from:\x20','right','outstandingFetches','pageNumber','click','width','hidden','lastRun','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','Cancelled.','getDate','catch','\x20→\x20','Generating…','Not\x20generated\x20—\x20','some','runtime','today','rangeKind','viewer','transform','rangeBoxes','removeAttribute','setAttribute','_paper','getMonth','addEventListener','forEach','report\x20','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','_toolbarWanted','objectsChanged','report-generated','map','749806fQWRdL','all','@page\x20{\x20size:\x20','193890jIXxCz','admin','warn','objectType','btnSave','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','toLocaleTimeString','textContent','message','file','display:block;width:100%;height:100%;','Pick\x20both\x20dates.','ready','style','items','dispose','height','subscribeState','iobroker-webui-report-viewer','\x20outstanding\x20—\x20','round','@top-right\x20{\x20content:\x20\x22\x22;\x20}','whenScreenReady','filter','disabled','setReportRange','printMargins','4114173omqULa','no\x20value\x20from:\x20','Downloaded:\x20','top','Building\x20the\x20page…','orientation','38876563eVezIG','getWebuiObject','name','_showBtn','isFinite','push','slice','bottom','Range:\x20','value','paper','toState','afterGenerate','btnBar','[data-tb=\x22','settings','toggle','70EHShsO','report-before-generate','html','rangeTo','12416EBIGOe','disconnectedCallback','mm\x20','btnGen','btnOut','parse','getHours','Rendering…','add','btnPrint','report-load','connection','start','connectedCallback','__reportTheme','entries','cssText','classList','scrollTop','_getDomElement','generateReport','\x20and\x20','then','lastFile','still\x20waiting:\x20','now','2uZRMHx','\x20(history)','year','join','reportName','toLocaleString','trim','5120784pKMrHr','loadDetail','endFetchTracking','history','print','Opening\x20','yesterday','toolbarVisible','format','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','val','month','appendChild','btnIn','_bar','reportRange','toolbox','_viewer','max','_status','getState','show','shadowRoot','error','status','1068237sWvjYO','project','groups','210mm','_restoreCachedInititalValues','[report]\x20range\x20state\x20','remove','includes','onReportReady','zoomLabel','globalStyle','btnShow','date','_zoomLabel','data-tb-off','beginFetchTracking','report','end','running','getTime','Generating\x20on\x20the\x20server…','\x20control(s)\x20shown\x20as\x20placeholders','dataset','112ryjVBA','custom','Report\x20default\x20range','page','min','parentElement','createElement','padStart','url','load','background:'];a=function(){return a6;};return a();}