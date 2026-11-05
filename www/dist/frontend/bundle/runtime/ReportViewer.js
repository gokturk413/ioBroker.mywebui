const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x279))/0x1+-parseInt(I(0x1d6))/0x2+-parseInt(I(0x227))/0x3+parseInt(I(0x1e9))/0x4+parseInt(I(0x25e))/0x5*(parseInt(I(0x251))/0x6)+-parseInt(I(0x24a))/0x7*(parseInt(I(0x23f))/0x8)+parseInt(I(0x23d))/0x9;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x7ac63));import{a as e}from'../chunk-RED35JXF.js';function a(){const ak=['scroll','url','\x20→\x20','297mm','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','calc(','width','matchAll','btnFit','fromState','value','left','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','_status','kind','forEach','\x20(+','parentElement','Pick\x20both\x20dates.','removeAttribute','groups','zoomLabel','val','btnApply','820056AOzJXI','map','btnSave','clientWidth','report-load','loadLog','__reportTheme','toggle','Downloaded:\x20','data','__report-page-rule','round','some','lastFile','onReportLoad','Building\x20the\x20page…','items','config','entries','min','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','isFinite','9336375vDUibe','toolbox','128EmkVlt','hide','title','dispatchEvent',':host\x20#paper{','getTime','all','body','top','\x20landscape','_viewer','276836fKECoI','210mm','includes','then','screenName','size','mm\x20','419232huUTcO','createElement','lastRun','Generating…','defaultPrevented','join','getMinutes','report\x20','push','display:block;width:100%;height:100%;','page','yesterday','trim','5YbmBzS','get','parse','Generating\x20on\x20the\x20server…','appendChild','_bar','now','querySelectorAll','\x20—\x20','disable','has','type','file','status','head','loadWhat','remove','reportStateBase','btnBar','btnGen','light','test','load','toolbarVisible','report-generate-failed','_toolbarWanted','@top-center\x20{\x20content:\x20\x22\x22;\x20}','123022WMbprS','_scriptObject','getMonth','reload','reportRange','\x20outstanding\x20—\x20','toLocaleTimeString','pageNumber','transform','subscribeState','getFullYear','no\x20value\x20from:\x20','generateReport','rangeTo','getElementById','template','lastError','unsubscribeState','name','1616672ArhoPd','\x20threw','_getDomElement','_paper','\x20more)','paper','@top-right\x20{\x20content:\x20\x22\x22;\x20}','style','success','runtime','setReportRange','height','rangeKind','whenScreenReady','theme','report','classList','connectedCallback','message','3948280XbqhBK','deliver','the\x20server\x20refused\x20the\x20run','printMargins','html','_zoomLabel','format','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','toLocaleString','_rootShadow','show','end','hidden','beforeGenerate','_showBtn','iobroker-webui-report-viewer','length','rangeBoxes','mm;\x20','data-tb-off','define','error','Saved\x20on\x20the\x20server:\x20','report-generated','ready','report-range-changed','textContent','add',';color:var(--ui-text,\x20#1d2733);}','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','Cancelled.','start','range','still\x20waiting:\x20','landscape','running','reportName','btnShow'];a=function(){return ak;};return a();}import'../chunk-3BFVY2J4.js';function c(b,d){b=b-0x1d5;const e=a();let f=e[b];return f;}import{F as f,G as g}from'../chunk-TEIESRV4.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0x21b)+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q[J(0x216)](s))p+=z[0x1][J(0x25d)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x25d)]();return!o||o==='paper'?{'name':K(0x272),'paper':!0x0}:o==='runtime'?{'name':m[K(0x273)](String(n??''))?String(n):'light','paper':!0x1}:{'name':m[K(0x273)](o)?o:'light','paper':!0x1};}var b=class extends h{static ['readonly']=!0x0;static [L(0x1dd)]=i`
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
    `;static [L(0x288)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set[L(0x20d)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x201)](){const M=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this[M(0x263)]=this[M(0x1d8)]('bar'),this[M(0x1d9)]=this[M(0x1d8)](M(0x1db)),this[M(0x249)]=this[M(0x1d8)]('viewer'),this['_status']=this['_getDomElement'](M(0x26b)),this[M(0x1ee)]=this[M(0x1d8)](M(0x224)),this[M(0x249)]['objectType']='report',this.#w();let n=(p,q)=>this[M(0x1d8)](p)?.['addEventListener']('click',q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(M(0x217),()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n('btnGen',()=>this.#x(M(0x1ed))),n(M(0x229),()=>this.#x('html',M(0x26a))),g['canSaveReportsOnServer']?.()[M(0x24d)](p=>{const N=M;let q=this[N(0x1d8)](N(0x229));q&&(q['hidden']=!p);})['catch'](()=>{}),this['_showBtn']=this['_getDomElement']('btnShow'),n(M(0x270),()=>this[M(0x275)]=!0x1),n(M(0x20e),()=>this[M(0x275)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this[M(0x277)]),this.#t&&this.#s();}set[L(0x275)](l){const O=L;this[O(0x277)]=!!l,this['_bar']&&(this[O(0x263)]['hidden']=!l),this[O(0x1f7)]&&(this[O(0x1f7)][O(0x1f5)]=!!l);}get[L(0x275)](){const P=L;return this[P(0x263)]?!this['_bar'][P(0x1f5)]:this[P(0x277)]??!0x0;}async #s(){const Q=L;if(!this[Q(0x249)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l['settings']??{};this['_paper']['style'][Q(0x215)]=n[Q(0x215)]??Q(0x24b),this[Q(0x1d9)][Q(0x1dd)]['height']=n['height']??Q(0x212),this['_viewer'][Q(0x1dd)]['cssText']=Q(0x25a),this.#y(n['theme']);let p=n['page']??{};this.#u(p,n['printMargins']),await this.#g(n[Q(0x23e)]),g['beginFetchTracking'](),this[Q(0x249)][Q(0x24e)]===this.#t?await this['_viewer'][Q(0x27c)]():await this[Q(0x249)]['setScreenNameAndLoad'](this.#t),this.#c(),this.#l(Q(0x235),this['_viewer'],this[Q(0x249)]['_rootShadow']),this.#a(Q(0x22b),{'name':this.#t}),await this.#k(n[Q(0x230)]),this.#o(Q(0x236),''),await this[Q(0x249)][Q(0x1e3)]({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer']['whenDataReady']();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this[Q(0x249)],this[Q(0x249)][Q(0x1f2)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s[Q(0x1f9)]&&this.#e('No\x20value\x20from:\x20'+s['slice'](0x0,0x3)['map'](u=>u['id'])[Q(0x256)](',\x20')+(s[Q(0x1f9)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.[R(0x27a)]?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console[R(0x1fe)](R(0x258)+this.#t+':\x20'+l+R(0x1d7),q);return;}}#a(l,n,p=!0x1){const T=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)[T(0x242)](q),q;}#u(l,p){const U=L;if(this[U(0x220)]!==document[U(0x246)])return;let q=U(0x231);document[U(0x287)](q)?.[U(0x26e)]();let u=document[U(0x252)]('style');u['id']=q;let z=(l[U(0x24f)]??'A4')+(l['orientation']===U(0x20b)?U(0x248):''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D[U(0x259)]('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),C[U(0x241)]||D['push'](U(0x278),U(0x1dc)),C[U(0x210)]||D['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C[U(0x280)]||D['push'](U(0x23b)),u[U(0x203)]='@page\x20{\x20size:\x20'+z+';\x20margin:\x20'+B(A[U(0x247)])+U(0x250)+B(A['right'])+U(0x250)+B(A['bottom'])+U(0x250)+B(A[U(0x21a)])+U(0x1fb)+D['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[U(0x26c)][U(0x262)](u);}#d(l){const V=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this[V(0x1d9)][V(0x1dd)][V(0x281)]='scale('+this.#r+')',this[V(0x1d9)]['style']['marginBottom']=V(0x214)+this['_paper']['style'][V(0x1e1)]+'\x20*\x20'+(this.#r-0x1)+')',this['_zoomLabel'][V(0x203)]=Math[V(0x232)](this.#r*0x64)+'%';}#c(){const W=L;let l=this['_getDomElement'](W(0x20f))[W(0x22a)]-0x24,n=this['_paper']['getBoundingClientRect']()[W(0x215)]/(this.#r||0x1);n>0x0&&this.#d(Math[W(0x23a)](0x1,l/n));}#_(){window['print']();}async #g(p){const X=L;let q=p?.[X(0x237)]??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.[X(0x223)]??[],A=u?.['id']==='admin',B=this['_bar']??this['_getDomElement']('bar');if(B){for(let C of B[X(0x265)]('[data-tb]'))C[X(0x222)](X(0x1fc));for(let [D,E]of Object[X(0x239)](q)){if(!E)continue;let F=null;if(E[X(0x1f3)]===!0x1?F='hide':!A&&Array['isArray'](E[X(0x223)])&&E[X(0x223)]['length']&&!E['groups'][X(0x233)](G=>z[X(0x24c)](G))&&(F=E['action']===X(0x267)?'disable':X(0x240)),!!F){for(let G of B['querySelectorAll']('[data-tb=\x22'+D+'\x22]'))G['setAttribute'](X(0x1fc),F);}}}}#S(){const Y=L;let l=this[Y(0x1d8)](Y(0x1e2)),p=this['_getDomElement']('rangeFrom'),q=this[Y(0x1d8)](Y(0x286)),s=this['_getDomElement'](Y(0x226));if(!l)return;let u=this[Y(0x1d8)](Y(0x1fa)),z=A=>{u&&(u['hidden']=!A);};l['addEventListener']('change',()=>{const Z=Y;if(l[Z(0x219)]==='custom'){let A=g['reportRange']??this.#b('today');p&&!p[Z(0x219)]&&(p[Z(0x219)]=this.#m(A['start'])),q&&!q[Z(0x219)]&&(q['value']=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l[Z(0x219)]==='report'?null:this.#b(l['value']));}),s?.['addEventListener']('click',()=>{const a0=Y;let A=p?.['value']?new Date(p[a0(0x219)])['getTime']():NaN,B=q?.['value']?new Date(q[a0(0x219)])['getTime']():NaN;if(!Number['isFinite'](A)||!Number[a0(0x23c)](B)){this.#e(a0(0x221),!0x0);return;}if(A>=B){this.#e(a0(0x213),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a1(0x283)]()+'-'+p(n[a1(0x27b)]()+0x1)+'-'+p(n['getDate']())+'T'+p(n['getHours']())+':'+p(n[a1(0x257)]());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s[a2(0x283)](),s[a2(0x27b)](),s['getDate']())[a2(0x244)](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case a2(0x25c):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a2(0x244)]()};case'30d':return{'start':n[a2(0x244)]()-0x1e*q,'end':n[a2(0x244)]()};case'month':return{'start':new Date(n[a2(0x283)](),n['getMonth'](),0x1)[a2(0x244)](),'end':n['getTime']()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)[a2(0x244)](),'end':n[a2(0x244)]()};default:return{'start':n['getTime']()-q,'end':n[a2(0x244)]()};}}async #f(l){const a3=L;g['setReportRange'](l),this.#e(l?'Range:\x20'+new Date(l[a3(0x208)])['toLocaleString']()+'\x20→\x20'+new Date(l[a3(0x1f4)])['toLocaleString']():'Report\x20default\x20range'),this.#a(a3(0x202),{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.[a4(0x218)]??'')[a4(0x25d)](),q=(l?.['toState']??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number[a5(0x23c)](D)&&String(C)['trim']()!=='')return D;let E=Date[a5(0x260)](String(C));return Number[a5(0x23c)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a6(0x206),!0x0);return;}let F=g[a6(0x27d)];if(F&&F[a6(0x208)]===D&&F['end']===E)return;g[a6(0x1e0)]({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)[a6(0x1f1)]()+a6(0x211)+new Date(E)['toLocaleString']());let G=this['_getDomElement'](a6(0x1e2));G&&(G[a6(0x219)]=a6(0x1e5));let H=this['_getDomElement'](a6(0x1fa));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g['getState'](C);u[D]=s(F?.[a7(0x225)]);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g[a7(0x282)](C,E)]);}catch(G){console['warn']('[report]\x20range\x20state\x20'+C,G);}};await B(p,a4(0x208)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{const a8=a4;for(let [C,D]of A)try{g[a8(0x28a)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.['dispose'](),this.#h=null;}[L(0x1e7)](){const a9=L;super[a9(0x1e7)]?.(),this[a9(0x263)]&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const aa=c;if(l?.[aa(0x269)]!=='report'||l[aa(0x1d5)]!==this.#t)return;let n;try{n=await g['getWebuiObject']('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this['_paper']&&(this[aa(0x1d9)]['style']['width']=p[aa(0x215)]??aa(0x24b),this['_paper']['style']['height']=p['height']??aa(0x212)),this.#u(p[aa(0x25b)]??{},p[aa(0x1ec)]),this.#y(p[aa(0x1e4)]),await this.#g(p[aa(0x23e)]),this.#c();}));}#y(l){const ab=L;let n=this['shadowRoot'];if(!n)return;let p=n['getElementById'](ab(0x22d));p||(p=document[ab(0x252)](ab(0x1dd)),p['id']='__reportTheme',n[ab(0x262)](p));let q=x(l),s=String(l??'')['trim']()===ab(0x1df)?'':y(q['name'],g[ab(0x238)]?.['globalStyle']);p['textContent']=ab(0x243)+s+'background:'+(q['paper']?'#fff':'var(--ui-page,\x20#fff)')+ab(0x205);}#o(l,n){const ac=L;let p=this['_getDomElement'](ac(0x274));if(!p)return;if(l==null){p[ac(0x1f5)]=!0x0;return;}p['hidden']=!0x1;let q=this[ac(0x1d8)](ac(0x26d)),s=this['_getDomElement']('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s[ac(0x203)]=n);}#T(){let l=this['_getDomElement']('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ad=L;let n=this['_getDomElement'](ad(0x22c));if(!n||this.#p[ad(0x268)](l))return;this.#p[ad(0x204)](l);let p=new Date()[ad(0x27f)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n['scrollHeight'];}#$(){const ae=L;let l=Date[ae(0x264)](),n=0xbb8,p=()=>{const af=ae;let u=g['outstandingFetches']();if(!u[af(0x1f9)]){this.#o('Rendering…','');return;}let z=u['filter'](D=>D[af(0x21d)]==='history')['length'],A=u['length']-z,B=[];A&&B[af(0x259)](A+'\x20value'+(A>0x1?'s':'')),z&&B['push'](z+'\x20history\x20quer'+(z>0x1?'ies':'y'));let C=Math[af(0x232)]((Date[af(0x264)]()-l)/0x3e8);this.#o('Loading\x20data…',B[af(0x256)]('\x20and\x20')+af(0x27e)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D(af(0x20a)+D['id']+(D['kind']==='history'?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ag=L;let z=g['namespace']+'.'+f[ag(0x26f)](q,p),A=async E=>{const ah=ag;try{return(await g['connection']['getState'](z+'.'+E))?.[ah(0x225)];}catch{return;}},B=Date['now'](),C=await A(ag(0x253)),D=!0x1;for(;Date[ag(0x264)]()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[ag(0x245)]([A('lastStatus'),A(ag(0x253))]),G=F!=null&&F!==C;if(E===ag(0x20c)){D=!0x0,this.#o(ag(0x261),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ag(0x234))};if(E==='error')return{'ok':!0x1,'error':await A(ag(0x289))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const ai=L;this[ai(0x21c)]&&(this[ai(0x21c)]['textContent']=l,this[ai(0x21c)][ai(0x1e6)][ai(0x22e)]('err',!!n));}async #x(l='html',p='download'){const aj=L;let q=[aj(0x271),'btnSave']['map'](z=>this[aj(0x1d8)](z))['filter'](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[aj(0x27d)]??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(aj(0x1f6),s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',s,!0x0)[aj(0x255)]){this.#e(aj(0x207));return;}if(u['format']=s[aj(0x1ef)],u[aj(0x209)]=s[aj(0x209)],this.#n['length']){let A=this.#n['slice'](0x0,0x3)[aj(0x228)](B=>B['id'])[aj(0x256)](',\x20');throw new Error(aj(0x284)+A+(this.#n[aj(0x1f9)]>0x3?aj(0x21f)+(this.#n[aj(0x1f9)]-0x3)+aj(0x1da):''));}this.#e(aj(0x254)),this.#o(s['deliver']==='file'?'Generating\x20on\x20the\x20server…':'Generating…',aj(0x1f0));let z=await g[aj(0x285)](s['name'],{'project':s['project'],'format':s[aj(0x1ef)],'range':s[aj(0x209)],'deliver':s[aj(0x1ea)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement']['dataset']['webuiTheme']||void 0x0});if(z['viaTrigger']){let B=await this.#E(s['name'],s['project']);if(!B['ok'])throw new Error(B[aj(0x1fe)]||aj(0x1eb));u={...u,'success':!0x0,'file':B['file']??null},this.#e(aj(0x1ff)+(B[aj(0x26a)]??''));}else{u={...u,'success':!0x0,'file':z[aj(0x26a)]??null,'pages':z['pages']??null};let C=z['placeholders']?.[aj(0x1f9)]?aj(0x266)+z['placeholders']['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e(aj(0x22f)+(z[aj(0x26a)]??'')+C);}}catch(D){u[aj(0x1fe)]=D?.[aj(0x1e8)]??String(D),this.#e('Not\x20generated\x20—\x20'+u[aj(0x1fe)],!0x0);}finally{q[aj(0x21e)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u[aj(0x1de)]?aj(0x200):aj(0x276),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0x25f)]('iobroker-webui-report-viewer')||customElements[L(0x1fd)](L(0x1f8),b);export{b as ReportViewer};