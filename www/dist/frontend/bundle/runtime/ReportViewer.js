function c(b,d){b=b-0xf0;const e=a();let f=e[b];return f;}const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x175))/0x1*(parseInt(I(0x116))/0x2)+parseInt(I(0x11d))/0x3*(parseInt(I(0x10a))/0x4)+-parseInt(I(0x128))/0x5*(parseInt(I(0x13f))/0x6)+parseInt(I(0x179))/0x7+parseInt(I(0x10e))/0x8*(-parseInt(I(0x125))/0x9)+-parseInt(I(0x150))/0xa*(parseInt(I(0x174))/0xb)+parseInt(I(0x197))/0xc*(parseInt(I(0xf1))/0xd);if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x2927b));import{a as e}from'../chunk-RED35JXF.js';import'../chunk-7CUNVCLI.js';import{F as f,G as g}from'../chunk-K2MGXAGM.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp(J(0x122)+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()[J(0x123)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x19e)?{'name':K(0x183),'paper':!0x0}:o==='runtime'?{'name':m['test'](String(n??''))?String(n):'light','paper':!0x1}:{'name':m[K(0x165)](o)?o:'light','paper':!0x1};}function a(){const ap=[';color:var(--ui-text,\x20#1d2733);}','iobroker-webui-report-viewer','objectType','background:','2XaVtoU','click','\x20history\x20quer','defaultPrevented','getMonth','btnPrint','warn','3IJCbzf','btnSave','textContent','_parseAttributesToProperties','has','\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?','replace','length','558Lfessp','whenDataReady','\x20threw','18555nPQHPk','Not\x20generated\x20—\x20','hide','toState','scrollTop','value','disconnectedCallback','lastError','_getDomElement','min','trim','_paper','max','onReportReady','error','isArray',':host\x20#paper{','height','getHours','getFullYear','getTime','orientation','_restoreCachedInititalValues','6wxnyTN','getDate','end','210mm','toggle','_rootShadow','[data-tb=\x22','add','name','hidden','_showBtn','still\x20waiting:\x20','btnGen','change','join','reportRange','rangeTo','5710PPhTmr','catch','\x20control(s)\x20shown\x20as\x20placeholders','define','getElementById','val','ready','today','now','message','report-before-generate','@page\x20{\x20size:\x20','Rendering…','Generating…','action','kind','_status','lastStatus','[data-tb]','disabled','generateReport','test','calc(','disable','isFinite','report-generate-failed','appendChild','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','currentProject','admin','@top-center\x20{\x20content:\x20\x22\x22;\x20}','right','pages','data-tb-off','_bar','yesterday','4675THCPBx','319481wHvKva','custom','theme','date','808808wZefKV','marginBottom','dispatchEvent','mm\x20','var(--ui-page,\x20#fff)','btnIn','then','afterGenerate','number','forEach','light','rangeKind','placeholders','outstandingFetches','Generating\x20on\x20the\x20server…','bar','connectedCallback','format','querySelectorAll','push','groups','createElement','filter','unsubscribeState','function','@top-left\x20{\x20content:\x20\x22\x22;\x20}','dispose','all','\x20landscape','transform','792vGuUvo','bottom','mm;\x20','width','report-generated','btnOut','reportStateBase','paper','err','Range\x20from\x20states:\x20','_viewer','scale(','Cancelled\x20by\x20the\x20report\x20script.','runtime','The\x20server\x20is\x20rendering\x20the\x20report.','removeAttribute','deliver','viaTrigger','beforeGenerate','30d','addEventListener','report','scrollHeight','style','type','toolbarVisible','99632RajuOd','report-load','loadWhat','\x20outstanding\x20—\x20','start','project','rangeBoxes','no\x20value\x20from:\x20','toLocaleString','file','297mm','documentElement','\x20more)','reportName','lastRun','range','map','slice','_toolbarWanted','printMargins','round','report\x20','classList','parentElement','btnShow','773936GvUFGe','Opening\x20','setAttribute','Range:\x20','10376OHeQxA','show','getBoundingClientRect','getState'];a=function(){return ap;};return a();}var b=class extends h{static ['readonly']=!0x0;static [L(0x1ae)]=i`
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
    `;static ['template']=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set[L(0xfe)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const M=L;super(),this[M(0x13e)]();}[L(0x156)](){const N=L;let l=this.#t;this[N(0x120)](),l&&!this.#t&&(this.#t=l),this['_bar']=this[N(0x130)](N(0x188)),this[N(0x133)]=this['_getDomElement']('paper'),this['_viewer']=this[N(0x130)]('viewer'),this['_status']=this[N(0x130)]('status'),this['_zoomLabel']=this[N(0x130)]('zoomLabel'),this['_viewer'][N(0x114)]=N(0x1ac),this.#w();let n=(p,q)=>this[N(0x130)](p)?.[N(0x1ab)](N(0x117),q);n(N(0x17e),()=>this.#d(this.#r*1.25)),n(N(0x19c),()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n(N(0x11b),()=>this.#_()),this.#S(),n(N(0x14b),()=>this.#x('html')),n('btnSave',()=>this.#x('html','file')),g['canSaveReportsOnServer']?.()[N(0x17f)](p=>{const O=N;let q=this[O(0x130)]('btnSave');q&&(q[O(0x148)]=!p);})['catch'](()=>{}),this[N(0x149)]=this[N(0x130)](N(0x109)),n('btnBar',()=>this['toolbarVisible']=!0x1),n(N(0x109),()=>this[N(0xf0)]=!0x0),this[N(0x103)]!==void 0x0&&(this['toolbarVisible']=this[N(0x103)]),this.#t&&this.#s();}set[L(0xf0)](l){const P=L;this[P(0x103)]=!!l,this[P(0x172)]&&(this['_bar'][P(0x148)]=!l),this[P(0x149)]&&(this[P(0x149)]['hidden']=!!l);}get['toolbarVisible'](){const Q=L;return this['_bar']?!this['_bar'][Q(0x148)]:this['_toolbarWanted']??!0x0;}async #s(){const R=L;if(!this[R(0x1a1)])return;this.#e(''),this.#o(R(0x10b)+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l['settings']??{};this['_paper']['style'][R(0x19a)]=n[R(0x19a)]??R(0x142),this['_paper'][R(0x1ae)][R(0x139)]=n[R(0x139)]??R(0xfb),this[R(0x1a1)]['style']['cssText']='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n['page']??{};this.#u(p,n[R(0x104)]),await this.#g(n['toolbox']),g['beginFetchTracking'](),this[R(0x1a1)]['screenName']===this.#t?await this['_viewer']['reload']():await this['_viewer']['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this['_viewer'],this['_viewer'][R(0x144)]),this.#a(R(0xf2),{'name':this.#t}),await this.#k(n['data']),this.#o('Building\x20the\x20page…',''),await this[R(0x1a1)]['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[R(0x1a1)][R(0x126)]();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l(R(0x135),this['_viewer'],this['_viewer'][R(0x144)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s['length']&&this.#e('No\x20value\x20from:\x20'+s[R(0x102)](0x0,0x3)['map'](u=>u['id'])[R(0x14d)](',\x20')+(s[R(0x124)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const T=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p==T(0x191))try{return p(...n);}catch(q){console[T(0x136)](T(0x106)+this.#t+':\x20'+l+T(0x127),q);return;}}#a(l,n,p=!0x1){const U=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)[U(0x17b)](q),q;}#u(l,p){const V=L;if(this[V(0x108)]!==document['body'])return;let q='__report-page-rule';document[V(0x154)](q)?.['remove']();let u=document[V(0x18e)]('style');u['id']=q;let z=(l['size']??'A4')+(l[V(0x13d)]==='landscape'?V(0x195):''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[V(0x178)]||D[V(0x18c)](V(0x192)),C['title']||D[V(0x18c)](V(0x16e),'@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C['url']||D[V(0x18c)](V(0x16b),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D['push']('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u[V(0x11f)]=V(0x15b)+z+';\x20margin:\x20'+B(A['top'])+V(0x17c)+B(A[V(0x16f)])+'mm\x20'+B(A[V(0x198)])+V(0x17c)+B(A['left'])+V(0x199)+D[V(0x14d)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head']['appendChild'](u);}#d(l){const W=L;this.#r=Math[W(0x131)](0x4,Math[W(0x134)](0.1,l)),this[W(0x133)][W(0x1ae)][W(0x196)]=W(0x1a2)+this.#r+')',this['_paper'][W(0x1ae)][W(0x17a)]=W(0x166)+this[W(0x133)]['style'][W(0x139)]+'\x20*\x20'+(this.#r-0x1)+')',this['_zoomLabel'][W(0x11f)]=Math[W(0x105)](this.#r*0x64)+'%';}#c(){const X=L;let l=this['_getDomElement']('scroll')['clientWidth']-0x24,n=this[X(0x133)][X(0x110)]()[X(0x19a)]/(this.#r||0x1);n>0x0&&this.#d(Math['min'](0x1,l/n));}#_(){window['print']();}async #g(p){const Y=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']===Y(0x16d),B=this['_bar']??this[Y(0x130)](Y(0x188));if(B){for(let C of B[Y(0x18b)](Y(0x162)))C[Y(0x1a6)](Y(0x171));for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E[Y(0x10f)]===!0x1?F=Y(0x12a):!A&&Array[Y(0x137)](E[Y(0x18d)])&&E[Y(0x18d)]['length']&&!E[Y(0x18d)]['some'](G=>z['includes'](G))&&(F=E[Y(0x15e)]===Y(0x167)?Y(0x167):Y(0x12a)),!!F){for(let G of B['querySelectorAll'](Y(0x145)+D+'\x22]'))G[Y(0x10c)]('data-tb-off',F);}}}}#S(){const Z=L;let l=this[Z(0x130)]('rangeKind'),p=this[Z(0x130)]('rangeFrom'),q=this['_getDomElement'](Z(0x14f)),s=this['_getDomElement']('btnApply');if(!l)return;let u=this['_getDomElement'](Z(0xf7)),z=A=>{const a0=Z;u&&(u[a0(0x148)]=!A);};l[Z(0x1ab)](Z(0x14c),()=>{const a1=Z;if(l['value']===a1(0x176)){let A=g['reportRange']??this.#b(a1(0x157));p&&!p['value']&&(p['value']=this.#m(A['start'])),q&&!q['value']&&(q[a1(0x12d)]=this.#m(A[a1(0x141)])),z(!0x0);return;}z(!0x1),this.#f(l['value']===a1(0x1ac)?null:this.#b(l['value']));}),s?.['addEventListener'](Z(0x117),()=>{const a2=Z;let A=p?.['value']?new Date(p[a2(0x12d)])[a2(0x13c)]():NaN,B=q?.['value']?new Date(q[a2(0x12d)])['getTime']():NaN;if(!Number[a2(0x168)](A)||!Number[a2(0x168)](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a3=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n['getFullYear']()+'-'+p(n[a3(0x11a)]()+0x1)+'-'+p(n[a3(0x140)]())+'T'+p(n[a3(0x13a)]())+':'+p(n['getMinutes']());}#b(l){const a4=L;let n=new Date(),p=s=>new Date(s[a4(0x13b)](),s[a4(0x11a)](),s[a4(0x140)]())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case a4(0x173):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a4(0x13c)]()};case a4(0x1aa):return{'start':n[a4(0x13c)]()-0x1e*q,'end':n[a4(0x13c)]()};case'month':return{'start':new Date(n[a4(0x13b)](),n[a4(0x11a)](),0x1)[a4(0x13c)](),'end':n[a4(0x13c)]()};case'year':return{'start':new Date(n[a4(0x13b)](),0x0,0x1)[a4(0x13c)](),'end':n['getTime']()};default:return{'start':n[a4(0x13c)]()-q,'end':n[a4(0x13c)]()};}}async #f(l){const a5=L;g['setReportRange'](l),this.#e(l?a5(0x10d)+new Date(l[a5(0xf5)])[a5(0xf9)]()+'\x20→\x20'+new Date(l[a5(0x141)])[a5(0xf9)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a6=L;let p=(l?.['fromState']??'')['trim'](),q=(l?.[a6(0x12b)]??'')[a6(0x132)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a7=a6;if(C==null||C==='')return null;if(typeof C==a7(0x181))return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)[a7(0x132)]()!=='')return D;let E=Date['parse'](String(C));return Number['isFinite'](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a8=a6;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e('The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.',!0x0);return;}let F=g['reportRange'];if(F&&F[a8(0xf5)]===D&&F[a8(0x141)]===E)return;g['setReportRange']({'start':D,'end':E}),this.#e(a8(0x1a0)+new Date(D)[a8(0xf9)]()+'\x20→\x20'+new Date(E)[a8(0xf9)]());let G=this['_getDomElement'](a8(0x184));G&&(G['value']=a8(0x1ac));let H=this['_getDomElement'](a8(0xf7));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const aa=a6;try{let F=await g['getState'](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a9=c;u[D]=s(H?.['val']),z(!0x0)[a9(0x151)](()=>{});};try{A['push']([C,E,await g['subscribeState'](C,E)]);}catch(G){console[aa(0x11c)]('[report]\x20range\x20state\x20'+C,G);}};await B(p,a6(0xf5)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{const ab=a6;for(let [C,D]of A)try{g[ab(0x190)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){const ac=L;super[ac(0x12e)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[ac(0x193)](),this.#h=null;}[L(0x189)](){const ad=L;super[ad(0x189)]?.(),this[ad(0x172)]&&this.#w();}#h=null;#w(){this.#h||(this.#h=g['objectsChanged']['on'](async l=>{const ae=c;if(l?.[ae(0x1af)]!==ae(0x1ac)||l['name']!==this.#t)return;let n;try{n=await g['getWebuiObject']('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[ae(0x133)]&&(this[ae(0x133)]['style'][ae(0x19a)]=p['width']??ae(0x142),this['_paper'][ae(0x1ae)][ae(0x139)]=p['height']??ae(0xfb)),this.#u(p['page']??{},p['printMargins']),this.#y(p[ae(0x177)]),await this.#g(p['toolbox']),this.#c();}));}#y(l){const af=L;let n=this['shadowRoot'];if(!n)return;let p=n['getElementById']('__reportTheme');p||(p=document['createElement'](af(0x1ae)),p['id']='__reportTheme',n[af(0x16a)](p));let q=x(l),s=String(l??'')[af(0x132)]()===af(0x1a4)?'':y(q[af(0x147)],g['config']?.['globalStyle']);p[af(0x11f)]=af(0x138)+s+af(0x115)+(q['paper']?'#fff':af(0x17d))+af(0x112);}#o(l,n){const ag=L;let p=this['_getDomElement']('load');if(!p)return;if(l==null){p[ag(0x148)]=!0x0;return;}p[ag(0x148)]=!0x1;let q=this['_getDomElement'](ag(0xf3)),s=this[ag(0x130)]('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s[ag(0x11f)]=n);}#T(){const ah=L;let l=this[ah(0x130)]('loadLog');l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ai=L;let n=this[ai(0x130)]('loadLog');if(!n||this.#p[ai(0x121)](l))return;this.#p[ai(0x146)](l);let p=new Date()['toLocaleTimeString']();n[ai(0x11f)]+=p+'\x20\x20'+l+'\x0a',n[ai(0x12c)]=n[ai(0x1ad)];}#$(){const aj=L;let l=Date[aj(0x158)](),n=0xbb8,p=()=>{const ak=aj;let u=g[ak(0x186)]();if(!u['length']){this.#o(ak(0x15c),'');return;}let z=u[ak(0x18f)](D=>D[ak(0x15f)]==='history')[ak(0x124)],A=u[ak(0x124)]-z,B=[];A&&B[ak(0x18c)](A+'\x20value'+(A>0x1?'s':'')),z&&B[ak(0x18c)](z+ak(0x118)+(z>0x1?'ies':'y'));let C=Math[ak(0x105)]((Date['now']()-l)/0x3e8);this.#o('Loading\x20data…',B[ak(0x14d)]('\x20and\x20')+ak(0xf4)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D(ak(0x14a)+D['id']+(D[ak(0x15f)]==='history'?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const al=L;let z=g['namespace']+'.'+f[al(0x19d)](q,p),A=async E=>{const am=al;try{return(await g['connection'][am(0x111)](z+'.'+E))?.[am(0x155)];}catch{return;}},B=Date['now'](),C=await A('lastRun'),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[al(0x194)]([A(al(0x161)),A(al(0xff))]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…',al(0x1a5));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E===al(0x136))return{'ok':!0x1,'error':await A(al(0x12f))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const an=L;this[an(0x160)]&&(this[an(0x160)][an(0x11f)]=l,this['_status'][an(0x107)][an(0x143)](an(0x19f),!!n));}async #x(l='html',p='download'){const ao=L;let q=['btnGen',ao(0x11e)][ao(0x101)](z=>this['_getDomElement'](z))[ao(0x18f)](Boolean);q[ao(0x182)](z=>z[ao(0x163)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[ao(0x14e)]??void 0x0,'project':g[ao(0x16c)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(ao(0x1a9),s)===!0x1){this.#e(ao(0x1a3));return;}if(this.#a(ao(0x15a),s,!0x0)[ao(0x119)]){this.#e('Cancelled.');return;}if(u[ao(0x18a)]=s['format'],u['range']=s['range'],this.#n[ao(0x124)]){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[ao(0x14d)](',\x20');throw new Error(ao(0xf8)+A+(this.#n[ao(0x124)]>0x3?'\x20(+'+(this.#n['length']-0x3)+ao(0xfd):''));}this.#e(ao(0x15d)),this.#o(s[ao(0x1a7)]==='file'?ao(0x187):ao(0x15d),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g[ao(0x164)](s[ao(0x147)],{'project':s[ao(0xf6)],'format':s[ao(0x18a)],'range':s[ao(0x100)],'deliver':s[ao(0x1a7)],'timeoutMs':this['generateTimeoutMs'],'theme':document[ao(0xfc)]['dataset']['webuiTheme']||void 0x0});if(z[ao(0x1a8)]){let B=await this.#E(s['name'],s['project']);if(!B['ok'])throw new Error(B[ao(0x136)]||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B['file']??null},this.#e('Saved\x20on\x20the\x20server:\x20'+(B[ao(0xfa)]??''));}else{u={...u,'success':!0x0,'file':z[ao(0xfa)]??null,'pages':z[ao(0x170)]??null};let C=z['placeholders']?.[ao(0x124)]?'\x20—\x20'+z[ao(0x185)]['length']+ao(0x152):'';this.#e('Downloaded:\x20'+(z[ao(0xfa)]??'')+C);}}catch(D){u['error']=D?.[ao(0x159)]??String(D),this.#e(ao(0x129)+u['error'],!0x0);}finally{q[ao(0x182)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?ao(0x19b):ao(0x169),u);try{await this.#l(ao(0x180),s,u);}catch{}}};customElements['get'](L(0x113))||customElements[L(0x153)](L(0x113),b);export{b as ReportViewer};