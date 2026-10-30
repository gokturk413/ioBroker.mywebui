const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x19a))/0x1*(parseInt(r(0x15f))/0x2)+parseInt(r(0x1ce))/0x3+parseInt(r(0x154))/0x4*(parseInt(r(0x191))/0x5)+-parseInt(r(0x1ed))/0x6*(parseInt(r(0x174))/0x7)+parseInt(r(0x1a4))/0x8+-parseInt(r(0x158))/0x9+-parseInt(r(0x14a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdaa66));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler,IobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x141;const e=a();let f=e[c];return f;}import'./ScreenViewer.js';import{resolveReportTheme,reportThemeDeclarations}from'../common/ReportTheme.js';export class ReportViewer extends BaseCustomWebComponentConstructorAppend{static [s(0x181)]=!![];static [s(0x1c8)]=css`
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
    `;static [s(0x169)]=html`
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
    `;#zoom=0x1;#reportName;get['reportName'](){return this.#reportName;}set['reportName'](c){if(this.#reportName===c)return;this.#reportName=c,this.#load();}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const t=s,c=this.#reportName;this['_parseAttributesToProperties']();if(c&&!this.#reportName)this.#reportName=c;this[t(0x1b1)]=this['_getDomElement']('bar'),this[t(0x16a)]=this[t(0x18a)]('paper'),this[t(0x1b3)]=this[t(0x18a)]('viewer'),this['_status']=this[t(0x18a)](t(0x1ea)),this[t(0x1f4)]=this[t(0x18a)]('zoomLabel'),this['_viewer'][t(0x193)]=t(0x19b),this.#watchReport();const d=(e,f)=>this[t(0x18a)](e)?.[t(0x1dd)](t(0x1c9),f);d('btnIn',()=>this.#setZoom(this.#zoom*1.25)),d('btnOut',()=>this.#setZoom(this.#zoom/1.25)),d('btnFit',()=>this.#fit()),d('btnPrint',()=>this.#print()),this.#initRange(),d(t(0x151),()=>this.#generate(t(0x1b9))),d('btnSave',()=>this.#generate(t(0x1b9),'file')),iobrokerHandler['canSaveReportsOnServer']?.()[t(0x164)](e=>{const u=t,f=this[u(0x18a)](u(0x1b5));if(f)f['hidden']=!e;})[t(0x18f)](()=>{}),this[t(0x1b0)]=this[t(0x18a)]('btnShow'),d(t(0x194),()=>this['toolbarVisible']=![]),d('btnShow',()=>this['toolbarVisible']=!![]);if(this[t(0x173)]!==undefined)this[t(0x1a1)]=this[t(0x173)];if(this.#reportName)this.#load();}set['toolbarVisible'](c){const v=s;this[v(0x173)]=!!c;if(this[v(0x1b1)])this[v(0x1b1)][v(0x1e6)]=!c;if(this[v(0x1b0)])this[v(0x1b0)]['hidden']=!!c;}get['toolbarVisible'](){const w=s;return this[w(0x1b1)]?!this[w(0x1b1)]['hidden']:this[w(0x173)]??!![];}async #load(){const x=s;if(!this['_viewer'])return;this.#say(''),this.#busy('Opening\x20'+this.#reportName+'…',''),this.#logReset();const c=await iobrokerHandler['getWebuiObject'](x(0x19b),this.#reportName);if(!c){this.#busy(null),this.#say(x(0x1d1)+this.#reportName,!![]);return;}const d=c[x(0x159)]??{};this[x(0x16a)][x(0x1c8)]['width']=d['width']??'210mm',this[x(0x16a)][x(0x1c8)]['height']=d['height']??x(0x165),this['_viewer']['style'][x(0x1c5)]='display:block;width:100%;height:100%;',this.#applyTheme(d['theme']);const e=d[x(0x18e)]??{};this.#pageRule(e,d[x(0x1aa)]),await this.#applyToolbox(d[x(0x142)]),iobrokerHandler['beginFetchTracking']();if(this[x(0x1b3)][x(0x1c2)]===this.#reportName)await this[x(0x1b3)][x(0x1c4)]();else await this['_viewer']['setScreenNameAndLoad'](this.#reportName);this.#fit(),this.#hook('onReportLoad',this['_viewer'],this[x(0x1b3)]['_rootShadow']),this.#emit('report-load',{'name':this.#reportName}),await this.#wireRangeStates(d['data']),this.#busy('Building\x20the\x20page…',''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});const f=this.#watchFetches(),{missing:g}=await this['_viewer']['whenDataReady']();f(),iobrokerHandler[x(0x17a)](),this.#busy(null),this.#missing=g,this.#hook('onReportReady',this[x(0x1b3)],this[x(0x1b3)]['_rootShadow'],{'missing':g}),this.#emit(x(0x18d),{'name':this.#reportName,'missing':g});if(g['length'])this.#say('No\x20value\x20from:\x20'+g[x(0x1db)](0x0,0x3)[x(0x1c0)](h=>h['id'])['join'](',\x20')+(g['length']>0x3?'\x20…':''),!![]);}#missing=[];['generateTimeoutMs']=0xea60;#hook(c,...d){const y=s,f=this[y(0x1b3)]?.['_scriptObject']?.[c];if(typeof f!=='function')return undefined;try{return f(...d);}catch(g){return console['error'](y(0x143)+this.#reportName+':\x20'+c+y(0x152),g),undefined;}}#emit(c,d,e=![]){const z=s,f=new CustomEvent(c,{'detail':d,'bubbles':!![],'composed':!![],'cancelable':e});return(this[z(0x1b3)]??this)[z(0x1a8)](f),f;}#pageRule(c,d){const A=s;if(this[A(0x1a9)]!==document['body'])return;const e='__report-page-rule';document[A(0x1f0)](e)?.[A(0x195)]();const f=document['createElement'](A(0x1c8));f['id']=e;const g=(c['size']??'A4')+(c[A(0x1b6)]==='landscape'?'\x20landscape':''),h=c['margin']??{},i=l=>Number(l)||0x0,j=d??{},k=[];if(!j[A(0x16e)])k['push'](A(0x1ac));if(!j[A(0x186)])k['push'](A(0x1c6),'@top-right\x20{\x20content:\x20\x22\x22;\x20}');if(!j['url'])k['push'](A(0x1e8),A(0x184));if(!j['pageNumber'])k[A(0x183)](A(0x175));f[A(0x1ec)]=A(0x1d9)+g+';\x20margin:\x20'+i(h['top'])+'mm\x20'+i(h['right'])+'mm\x20'+i(h['bottom'])+'mm\x20'+i(h['left'])+'mm;\x20'+k[A(0x1a3)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[A(0x160)][A(0x178)](f);}#setZoom(c){const B=s;this.#zoom=Math['min'](0x4,Math[B(0x1ae)](0.1,c)),this[B(0x16a)]['style']['transform']=B(0x1f3)+this.#zoom+')',this['_paper']['style'][B(0x161)]='calc('+this['_paper']['style']['height']+'\x20*\x20'+(this.#zoom-0x1)+')',this['_zoomLabel']['textContent']=Math['round'](this.#zoom*0x64)+'%';}#fit(){const C=s,c=this[C(0x18a)]('scroll')[C(0x16d)]-0x24,d=this['_paper'][C(0x1c1)]()['width']/(this.#zoom||0x1);if(d>0x0)this.#setZoom(Math[C(0x1ef)](0x1,c/d));}#print(){window['print']();}async #applyToolbox(d){const D=s,f=d?.[D(0x1f6)]??{};let g=null;try{g=await iobrokerHandler['getCurrentUser']();}catch(k){}const h=g?.[D(0x1b4)]??[],i=g?.['id']==='admin',j=this['_bar']??this['_getDomElement']('bar');if(!j)return;for(const l of j['querySelectorAll'](D(0x14b)))l['removeAttribute'](D(0x144));for(const [m,n]of Object['entries'](f)){if(!n)continue;let o=null;if(n[D(0x1ee)]===![])o='hide';else{if(!i&&Array[D(0x176)](n[D(0x1b4)])&&n['groups']['length']&&!n[D(0x1b4)]['some'](p=>h[D(0x1d8)](p)))o=n[D(0x190)]===D(0x1a2)?D(0x1a2):'hide';}if(!o)continue;for(const p of j['querySelectorAll'](D(0x1d6)+m+'\x22]'))p['setAttribute']('data-tb-off',o);}}#initRange(){const E=s,c=this['_getDomElement']('rangeKind'),d=this[E(0x18a)](E(0x148)),e=this[E(0x18a)](E(0x189)),f=this['_getDomElement'](E(0x1ca));if(!c)return;const g=this[E(0x18a)](E(0x15e)),h=i=>{if(g)g['hidden']=!i;};c[E(0x1dd)]('change',()=>{const F=E;if(c[F(0x196)]==='custom'){const i=iobrokerHandler['reportRange']??this.#namedRange('today');if(d&&!d[F(0x196)])d[F(0x196)]=this.#toLocalInput(i['start']);if(e&&!e['value'])e[F(0x196)]=this.#toLocalInput(i['end']);h(!![]);return;}h(![]),this.#applyRange(c[F(0x196)]===F(0x19b)?null:this.#namedRange(c['value']));}),f?.['addEventListener']('click',()=>{const G=E,i=d?.[G(0x196)]?new Date(d['value'])[G(0x1f2)]():NaN,j=e?.['value']?new Date(e[G(0x196)])[G(0x1f2)]():NaN;if(!Number[G(0x170)](i)||!Number[G(0x170)](j)){this.#say(G(0x167),!![]);return;}if(i>=j){this.#say(G(0x1e5),!![]);return;}this.#applyRange({'start':i,'end':j});});}#toLocalInput(c){const H=s,e=new Date(c),f=g=>String(g)['padStart'](0x2,'0');return e[H(0x1eb)]()+'-'+f(e[H(0x1d7)]()+0x1)+'-'+f(e[H(0x1d0)]())+'T'+f(e['getHours']())+':'+f(e[H(0x179)]());}#namedRange(c){const I=s,d=new Date(),e=g=>new Date(g[I(0x1eb)](),g[I(0x1d7)](),g['getDate']())['getTime'](),f=0x5265c00;switch(c){case I(0x180):return{'start':e(d),'end':d['getTime']()};case I(0x147):return{'start':e(d)-f,'end':e(d)};case'7d':return{'start':d['getTime']()-0x7*f,'end':d['getTime']()};case I(0x19f):return{'start':d[I(0x1f2)]()-0x1e*f,'end':d[I(0x1f2)]()};case I(0x1df):return{'start':new Date(d[I(0x1eb)](),d['getMonth'](),0x1)['getTime'](),'end':d[I(0x1f2)]()};case'year':return{'start':new Date(d['getFullYear'](),0x0,0x1)['getTime'](),'end':d[I(0x1f2)]()};default:return{'start':d[I(0x1f2)]()-f,'end':d['getTime']()};}}async #applyRange(c){const J=s;iobrokerHandler[J(0x145)](c),this.#say(c?J(0x1ad)+new Date(c[J(0x1d5)])['toLocaleString']()+J(0x1be)+new Date(c['end'])['toLocaleString']():J(0x1c7)),this.#emit('report-range-changed',{'range':c}),await this.#load();}async #wireRangeStates(c){const K=s,d=(c?.[K(0x17d)]??'')[K(0x156)](),e=(c?.[K(0x1d4)]??'')[K(0x156)]();this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null);this.#rangeStates=null;if(!d||!e)return;const f=k=>{const L=K;if(k==null||k==='')return null;if(typeof k==='number')return k;const l=Number(k);if(Number[L(0x170)](l)&&String(k)['trim']()!=='')return l;const m=Date['parse'](String(k));return Number['isFinite'](m)?m:null;},g={'start':null,'end':null},h=async k=>{const M=K,{start:l,end:m}=g;if(l==null||m==null)return;if(!(l<m)){this.#say('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!![]);return;}const n=iobrokerHandler['reportRange'];if(n&&n[M(0x1d5)]===l&&n['end']===m)return;iobrokerHandler['setReportRange']({'start':l,'end':m}),this.#say(M(0x168)+new Date(l)['toLocaleString']()+'\x20→\x20'+new Date(m)[M(0x1cc)]());const o=this['_getDomElement'](M(0x1a0));if(o)o[M(0x196)]='report';const p=this[M(0x18a)]('rangeBoxes');if(p)p['hidden']=!![];if(k)await this.#load();},i=[],j=async(k,l)=>{const N=K;try{const n=await iobrokerHandler['getState'](k);g[l]=f(n?.[N(0x1d3)]);}catch(o){}const m=(p,q)=>{g[l]=f(q?.['val']),h(!![])['catch'](()=>{});};try{i[N(0x183)]([k,m,await iobrokerHandler[N(0x197)](k,m)]);}catch(p){console[N(0x1bd)]('[report]\x20range\x20state\x20'+k,p);}};await j(d,K(0x1d5)),await j(e,'end'),this.#rangeStates={'from':d,'to':e},this.#rangeStateUnsub=()=>{for(const [k,l]of i){try{iobrokerHandler['unsubscribeState'](k,l);}catch(m){}}},await h(![]);}#rangeStates=null;#rangeStateUnsub=null;['disconnectedCallback'](){const O=s;super[O(0x1bb)]?.(),this.#rangeStateUnsub&&(this.#rangeStateUnsub(),this.#rangeStateUnsub=null),this.#reportChangedSub?.[O(0x1e9)](),this.#reportChangedSub=null;}[s(0x15b)](){super['connectedCallback']?.();if(this['_bar'])this.#watchReport();}#reportChangedSub=null;#watchReport(){if(this.#reportChangedSub)return;this.#reportChangedSub=iobrokerHandler['objectsChanged']['on'](async c=>{const P=b;if(c?.['type']!==P(0x19b)||c['name']!==this.#reportName)return;let f;try{f=await iobrokerHandler[P(0x1ba)]('report',this.#reportName);}catch(h){return;}if(!f)return;const g=f[P(0x159)]??{};this['_paper']&&(this['_paper']['style']['width']=g[P(0x153)]??'210mm',this['_paper'][P(0x1c8)][P(0x18c)]=g['height']??P(0x165)),this.#pageRule(g['page']??{},g[P(0x1aa)]),this.#applyTheme(g['theme']),await this.#applyToolbox(g['toolbox']),this.#fit();});}#applyTheme(c){const Q=s,d=this['shadowRoot'];if(!d)return;let e=d['getElementById'](Q(0x1e7));!e&&(e=document[Q(0x1ab)](Q(0x1c8)),e['id']='__reportTheme',d[Q(0x178)](e));const f=resolveReportTheme(c),g=String(c??'')['trim']()===Q(0x1bf)?'':reportThemeDeclarations(f[Q(0x1da)],iobrokerHandler[Q(0x1e4)]?.[Q(0x14c)]);e['textContent']=Q(0x1bc)+g+Q(0x18b)+(f['paper']?Q(0x162):Q(0x15c))+Q(0x17e);}#busy(c,e){const R=s,f=this['_getDomElement']('load');if(!f)return;if(c==null){f[R(0x1e6)]=!![];return;}f['hidden']=![];const g=this[R(0x18a)]('loadWhat'),h=this[R(0x18a)]('loadDetail');if(g)g[R(0x1ec)]=c;if(h&&e!==undefined)h[R(0x1ec)]=e;}#logReset(){const c=this['_getDomElement']('loadLog');if(c)c['textContent']='';this.#logged=new Set();}#logged=new Set();#log(c){const S=s,d=this['_getDomElement']('loadLog');if(!d||this.#logged['has'](c))return;this.#logged[S(0x19d)](c);const e=new Date()[S(0x1de)]();d['textContent']+=e+'\x20\x20'+c+'\x0a',d['scrollTop']=d['scrollHeight'];}#watchFetches(){const c=Date['now'](),d=0xbb8,e=()=>{const T=b,g=iobrokerHandler[T(0x14d)]();if(!g['length']){this.#busy('Rendering…','');return;}const i=g[T(0x188)](m=>m['kind']==='history')[T(0x177)],j=g[T(0x177)]-i,k=[];if(j)k[T(0x183)](j+'\x20value'+(j>0x1?'s':''));if(i)k['push'](i+'\x20history\x20quer'+(i>0x1?'ies':'y'));const l=Math[T(0x17b)]((Date['now']()-c)/0x3e8);this.#busy(T(0x199),k['join']('\x20and\x20')+T(0x149)+l+'s');for(const m of g)if(m[T(0x16c)]>d)this.#log(T(0x15a)+m['id']+(m['kind']===T(0x1e3)?T(0x1e2):''));};e();const f=setInterval(e,0x1f4);return()=>clearInterval(f);}async #awaitServerRun(c,d,e=0x1d4c0){const U=s,f=iobrokerHandler['namespace']+'.'+IobrokerHandler[U(0x16b)](d,c),g=async l=>{const V=U;try{return(await iobrokerHandler[V(0x172)][V(0x146)](f+'.'+l))?.[V(0x1d3)];}catch(m){return undefined;}},h=Date[U(0x187)](),i=await g(U(0x17c));let j=![];while(Date[U(0x187)]()-h<e){await new Promise(n=>setTimeout(n,0x190));const [k,l]=await Promise[U(0x1b8)]([g(U(0x157)),g('lastRun')]),m=l!=null&&l!==i;if(k===U(0x155)){j=!![],this.#busy(U(0x1c3),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(m||j){if(k==='ok')return{'ok':!![],'file':await g(U(0x19e))};if(k===U(0x1cb))return{'ok':![],'error':await g(U(0x15d))};}}return{'ok':![],'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#say(c,d){const W=s;if(!this[W(0x17f)])return;this['_status']['textContent']=c,this['_status']['classList']['toggle'](W(0x166),!!d);}async #generate(c=s(0x1b9),d='download'){const X=s,f=[X(0x151),X(0x1b5)][X(0x1c0)](i=>this['_getDomElement'](i))['filter'](Boolean);f['forEach'](i=>i[X(0x14e)]=!![]);const g={'name':this.#reportName,'format':c,'deliver':d,'range':iobrokerHandler[X(0x171)]??undefined,'project':iobrokerHandler[X(0x14f)]};let h={'success':![],'format':c,'file':null,'pages':null,'range':undefined,'error':null};try{if(this.#hook(X(0x1f5),g)===![]){this.#say('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#emit('report-before-generate',g,!![])['defaultPrevented']){this.#say(X(0x1a6));return;}h[X(0x150)]=g['format'],h['range']=g['range'];if(this.#missing[X(0x177)]){const j=this.#missing[X(0x1db)](0x0,0x3)[X(0x1c0)](k=>k['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+j+(this.#missing['length']>0x3?'\x20(+'+(this.#missing[X(0x177)]-0x3)+X(0x185):''));}this.#say('Generating…'),this.#busy(g[X(0x1dc)]===X(0x1cd)?X(0x1c3):'Generating…',X(0x1b7));const i=await iobrokerHandler[X(0x1e1)](g['name'],{'project':g[X(0x1b2)],'format':g['format'],'range':g['range'],'deliver':g[X(0x1dc)],'timeoutMs':this[X(0x1a7)],'theme':document[X(0x192)][X(0x141)]['webuiTheme']||undefined});if(i[X(0x1a5)]){const k=await this.#awaitServerRun(g[X(0x1da)],g[X(0x1b2)]);if(!k['ok'])throw new Error(k[X(0x1cb)]||'the\x20server\x20refused\x20the\x20run');h={...h,'success':!![],'file':k[X(0x1cd)]??null},this.#say('Saved\x20on\x20the\x20server:\x20'+(k['file']??''));}else{h={...h,'success':!![],'file':i[X(0x1cd)]??null,'pages':i[X(0x16f)]??null};const l=i['placeholders']?.[X(0x177)]?'\x20—\x20'+i['placeholders'][X(0x177)]+X(0x1cf):'';this.#say('Downloaded:\x20'+(i['file']??'')+l);}}catch(m){h[X(0x1cb)]=m?.[X(0x163)]??String(m),this.#say('Not\x20generated\x20—\x20'+h[X(0x1cb)],!![]);}finally{f[X(0x19c)](n=>n[X(0x14e)]=![]),this.#busy(null);}this.#emit(h[X(0x182)]?X(0x1e0):'report-generate-failed',h);try{await this.#hook(X(0x1f1),g,h);}catch(n){}}}if(!customElements[s(0x1af)]('iobroker-webui-report-viewer'))customElements[s(0x1d2)](s(0x198),ReportViewer);function a(){const Y=['reportStateBase','waitedMs','clientWidth','date','pages','isFinite','reportRange','connection','_toolbarWanted','10227WeQlji','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','isArray','length','appendChild','getMinutes','endFetchTracking','round','lastRun','fromState',';color:var(--ui-text,\x20#1d2733);}','_status','today','readonly','success','push','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','\x20more)','title','now','filter','rangeTo','_getDomElement','background:','height','report-ready','page','catch','action','10gOJfNj','documentElement','objectType','btnBar','remove','value','subscribeState','iobroker-webui-report-viewer','Loading\x20data…','23IagfKD','report','forEach','add','lastFile','30d','rangeKind','toolbarVisible','disable','join','6287192ThRdbi','viaTrigger','Cancelled.','generateTimeoutMs','dispatchEvent','parentElement','printMargins','createElement','@top-left\x20{\x20content:\x20\x22\x22;\x20}','Range:\x20','max','get','_showBtn','_bar','project','_viewer','groups','btnSave','orientation','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','all','html','getWebuiObject','disconnectedCallback',':host\x20#paper{','warn','\x20→\x20','runtime','map','getBoundingClientRect','screenName','Generating\x20on\x20the\x20server…','reload','cssText','@top-center\x20{\x20content:\x20\x22\x22;\x20}','Report\x20default\x20range','style','click','btnApply','error','toLocaleString','file','3961986FpDndB','\x20control(s)\x20shown\x20as\x20placeholders','getDate','Report\x20not\x20found:\x20','define','val','toState','start','[data-tb=\x22','getMonth','includes','@page\x20{\x20size:\x20','name','slice','deliver','addEventListener','toLocaleTimeString','month','report-generated','generateReport','\x20(history)','history','config','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','hidden','__reportTheme','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','dispose','status','getFullYear','textContent','2034iXDLrd','show','min','getElementById','afterGenerate','getTime','scale(','_zoomLabel','beforeGenerate','items','dataset','toolbox','report\x20','data-tb-off','setReportRange','getState','yesterday','rangeFrom','\x20outstanding\x20—\x20','15604290GrrtqA','[data-tb]','globalStyle','outstandingFetches','disabled','currentProject','format','btnGen','\x20threw','width','3516636OIdDpE','running','trim','lastStatus','1404270aTbNNI','settings','still\x20waiting:\x20','connectedCallback','var(--ui-page,\x20#fff)','lastError','rangeBoxes','65874AolCtm','head','marginBottom','#fff','message','then','297mm','err','Pick\x20both\x20dates.','Range\x20from\x20states:\x20','template','_paper'];a=function(){return Y;};return a();}