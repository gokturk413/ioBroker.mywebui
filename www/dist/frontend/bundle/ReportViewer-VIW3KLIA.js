function c(b,d){b=b-0x1e3;const e=a();let f=e[b];return f;}const L=c;function a(){const an=['98fRPEuj','\x20history\x20quer','getFullYear','_restoreCachedInititalValues','[data-tb]','Opening\x20','project','btnSave','padStart','_status','defaultPrevented','download','click','scrollHeight','beforeGenerate','getElementById','paper','groups','btnShow','No\x20value\x20from:\x20','toolbox','30d','slice','max','screenName','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','admin','_bar','getHours','globalStyle','211376WaqFMd','\x20→\x20','title','_paper','Cancelled.','textContent','printMargins','get','month','report','fromState','reportRange','subscribeState','getMonth','_toolbarWanted','join','disable','\x20and\x20','size','14049651fImhkH','zoomLabel','forEach','getBoundingClientRect','386672WpXfnd','range','lastFile','all','Building\x20the\x20page…','status','outstandingFetches','\x20—\x20','@top-left\x20{\x20content:\x20\x22\x22;\x20}','runtime','parse','lastRun','toLocaleTimeString','Saved\x20on\x20the\x20server:\x20','file','setScreenNameAndLoad','viewer','currentProject','test','var(--ui-page,\x20#fff)','print','Range\x20from\x20states:\x20','getWebuiObject','readonly','history','_rootShadow','isArray','@page\x20{\x20size:\x20','iobroker-webui-report-viewer','pages','549261stvWvO','light','The\x20server\x20is\x20rendering\x20the\x20report.','page','btnGen','message','deliver','Not\x20generated\x20—\x20','@top-right\x20{\x20content:\x20\x22\x22;\x20}','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','getDate','hidden','2540mWFygj','Range:\x20','@top-center\x20{\x20content:\x20\x22\x22;\x20}','round','toLocaleString','afterGenerate','end','\x20more)','value','lastStatus','settings','29166zlKjEk','canSaveReportsOnServer','hide','btnFit','loadLog','report\x20','viaTrigger','push','bar','url','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','still\x20waiting:\x20','classList','addEventListener','some','__report-page-rule','config','dispose','start','_getDomElement','now','scale(','add','rangeKind','btnApply','html','format','_viewer','reload','rangeBoxes','min','template','Generating\x20on\x20the\x20server…','today','querySelectorAll','27yfbFXr','catch','getMinutes','createElement','Downloaded:\x20','4806rALHKz',';\x20margin:\x20','generateReport','length','dataset','style','val','height','err','toolbarVisible','toState','disconnectedCallback','name','remove',':host\x20#paper{','warn','placeholders','width','webuiTheme','kind','getTime','Loading\x20data…','trim','scrollTop','btnPrint','5tIATXs','objectsChanged','433434mXVJRo'];a=function(){return an;};return a();}(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x1ea))/0x1*(-parseInt(I(0x275))/0x2)+-parseInt(I(0x25e))/0x3+parseInt(I(0x240))/0x4+-parseInt(I(0x208))/0x5*(parseInt(I(0x20a))/0x6)+-parseInt(I(0x20b))/0x7*(parseInt(I(0x229))/0x8)+-parseInt(I(0x1ef))/0x9*(parseInt(I(0x26a))/0xa)+parseInt(I(0x23c))/0xb;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x358a2));import{a as e}from'./chunk-KVPT4J7H.js';import'./chunk-YBPYQWW6.js';import{s as f,t as g}from'./chunk-IFBVYILO.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1][J(0x205)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')[K(0x205)]();return!o||o===K(0x21b)?{'name':K(0x25f),'paper':!0x0}:o==='runtime'?{'name':m['test'](String(n??''))?String(n):K(0x25f),'paper':!0x1}:{'name':m[K(0x252)](o)?o:K(0x25f),'paper':!0x1};}var b=class extends h{static [L(0x257)]=!0x0;static [L(0x1f4)]=i`
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
    `;static [L(0x1e6)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set['reportName'](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const M=L;super(),this[M(0x20e)]();}['ready'](){const N=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this[N(0x226)]=this[N(0x288)](N(0x27d)),this['_paper']=this[N(0x288)]('paper'),this['_viewer']=this['_getDomElement'](N(0x250)),this[N(0x214)]=this[N(0x288)](N(0x245)),this['_zoomLabel']=this[N(0x288)](N(0x23d)),this[N(0x290)]['objectType']=N(0x232),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.[N(0x282)](N(0x217),q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(N(0x278),()=>this.#c()),n(N(0x207),()=>this.#_()),this.#S(),n(N(0x262),()=>this.#x('html')),n(N(0x212),()=>this.#x(N(0x28e),'file')),g[N(0x276)]?.()['then'](p=>{const O=N;let q=this['_getDomElement']('btnSave');q&&(q[O(0x269)]=!p);})[N(0x1eb)](()=>{}),this['_showBtn']=this[N(0x288)](N(0x21d)),n('btnBar',()=>this[N(0x1f8)]=!0x1),n(N(0x21d),()=>this[N(0x1f8)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this['_toolbarWanted']),this.#t&&this.#s();}set[L(0x1f8)](l){const P=L;this[P(0x237)]=!!l,this[P(0x226)]&&(this['_bar']['hidden']=!l),this['_showBtn']&&(this['_showBtn'][P(0x269)]=!!l);}get['toolbarVisible'](){const Q=L;return this['_bar']?!this[Q(0x226)][Q(0x269)]:this['_toolbarWanted']??!0x0;}async #s(){const R=L;if(!this[R(0x290)])return;this.#e(''),this.#o(R(0x210)+this.#t+'…',''),this.#T();let l=await g[R(0x256)]('report',this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[R(0x274)]??{};this['_paper']['style'][R(0x200)]=n['width']??'210mm',this[R(0x22c)]['style']['height']=n['height']??'297mm',this['_viewer']['style']['cssText']='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n[R(0x261)]??{};this.#u(p,n[R(0x22f)]),await this.#g(n[R(0x21f)]),g['beginFetchTracking'](),this[R(0x290)][R(0x223)]===this.#t?await this['_viewer'][R(0x1e3)]():await this['_viewer'][R(0x24f)](this.#t),this.#c(),this.#l('onReportLoad',this['_viewer'],this[R(0x290)][R(0x259)]),this.#a('report-load',{'name':this.#t}),await this.#k(n['data']),this.#o(R(0x244),''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[R(0x290)]['whenDataReady']();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this[R(0x290)],this[R(0x290)][R(0x259)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s['length']&&this.#e(R(0x21e)+s['slice'](0x0,0x3)['map'](u=>u['id'])[R(0x238)](',\x20')+(s[R(0x1f2)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const T=L;let p=this['_viewer']?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error'](T(0x27a)+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){const U=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[U(0x290)]??this)['dispatchEvent'](q),q;}#u(l,p){const V=L;if(this['parentElement']!==document['body'])return;let q=V(0x284);document[V(0x21a)](q)?.[V(0x1fc)]();let u=document[V(0x1ed)]('style');u['id']=q;let z=(l[V(0x23b)]??'A4')+(l['orientation']==='landscape'?'\x20landscape':''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D['push'](V(0x248)),C[V(0x22b)]||D['push'](V(0x26c),V(0x266)),C[V(0x27e)]||D[V(0x27c)]('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D[V(0x27c)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u[V(0x22e)]=V(0x25b)+z+V(0x1f0)+B(A['top'])+'mm\x20'+B(A['right'])+'mm\x20'+B(A['bottom'])+'mm\x20'+B(A['left'])+'mm;\x20'+D['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head']['appendChild'](u);}#d(l){const W=L;this.#r=Math[W(0x1e5)](0x4,Math[W(0x222)](0.1,l)),this['_paper']['style']['transform']=W(0x28a)+this.#r+')',this[W(0x22c)]['style']['marginBottom']='calc('+this['_paper']['style'][W(0x1f6)]+'\x20*\x20'+(this.#r-0x1)+')',this['_zoomLabel']['textContent']=Math[W(0x26d)](this.#r*0x64)+'%';}#c(){const X=L;let l=this['_getDomElement']('scroll')['clientWidth']-0x24,n=this['_paper'][X(0x23f)]()[X(0x200)]/(this.#r||0x1);n>0x0&&this.#d(Math[X(0x1e5)](0x1,l/n));}#_(){const Y=L;window[Y(0x254)]();}async #g(p){const Z=L;let q=p?.['items']??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']===Z(0x225),B=this['_bar']??this['_getDomElement']('bar');if(B){for(let C of B['querySelectorAll'](Z(0x20f)))C['removeAttribute']('data-tb-off');for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F=Z(0x277):!A&&Array[Z(0x25a)](E[Z(0x21c)])&&E[Z(0x21c)][Z(0x1f2)]&&!E['groups'][Z(0x283)](G=>z['includes'](G))&&(F=E['action']==='disable'?Z(0x239):Z(0x277)),!!F){for(let G of B[Z(0x1e9)]('[data-tb=\x22'+D+'\x22]'))G['setAttribute']('data-tb-off',F);}}}}#S(){const a0=L;let l=this['_getDomElement']('rangeKind'),p=this[a0(0x288)]('rangeFrom'),q=this[a0(0x288)]('rangeTo'),s=this['_getDomElement'](a0(0x28d));if(!l)return;let u=this['_getDomElement'](a0(0x1e4)),z=A=>{u&&(u['hidden']=!A);};l['addEventListener']('change',()=>{const a1=a0;if(l['value']==='custom'){let A=g['reportRange']??this.#b(a1(0x1e8));p&&!p[a1(0x272)]&&(p['value']=this.#m(A[a1(0x287)])),q&&!q[a1(0x272)]&&(q['value']=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l['value']==='report'?null:this.#b(l['value']));}),s?.[a0(0x282)](a0(0x217),()=>{const a2=a0;let A=p?.[a2(0x272)]?new Date(p['value'])['getTime']():NaN,B=q?.[a2(0x272)]?new Date(q['value'])['getTime']():NaN;if(!Number['isFinite'](A)||!Number['isFinite'](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e(a2(0x267),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a3=L;let n=new Date(l),p=q=>String(q)[a3(0x213)](0x2,'0');return n[a3(0x20d)]()+'-'+p(n['getMonth']()+0x1)+'-'+p(n['getDate']())+'T'+p(n[a3(0x227)]())+':'+p(n[a3(0x1ec)]());}#b(l){const a4=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s['getMonth'](),s[a4(0x268)]())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a4(0x203)]()-0x7*q,'end':n['getTime']()};case a4(0x220):return{'start':n[a4(0x203)]()-0x1e*q,'end':n[a4(0x203)]()};case a4(0x231):return{'start':new Date(n['getFullYear'](),n[a4(0x236)](),0x1)['getTime'](),'end':n[a4(0x203)]()};case'year':return{'start':new Date(n['getFullYear'](),0x0,0x1)['getTime'](),'end':n[a4(0x203)]()};default:return{'start':n[a4(0x203)]()-q,'end':n[a4(0x203)]()};}}async #f(l){const a5=L;g['setReportRange'](l),this.#e(l?a5(0x26b)+new Date(l[a5(0x287)])[a5(0x26e)]()+a5(0x22a)+new Date(l['end'])['toLocaleString']():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a6=L;let p=(l?.[a6(0x233)]??'')[a6(0x205)](),q=(l?.[a6(0x1f9)]??'')[a6(0x205)]();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a7=a6;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)['trim']()!=='')return D;let E=Date[a7(0x24a)](String(C));return Number['isFinite'](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a8=a6;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a8(0x27f),!0x0);return;}let F=g['reportRange'];if(F&&F['start']===D&&F[a8(0x270)]===E)return;g['setReportRange']({'start':D,'end':E}),this.#e(a8(0x255)+new Date(D)['toLocaleString']()+'\x20→\x20'+new Date(E)['toLocaleString']());let G=this[a8(0x288)](a8(0x28c));G&&(G[a8(0x272)]=a8(0x232));let H=this[a8(0x288)](a8(0x1e4));H&&(H[a8(0x269)]=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a9=a6;try{let F=await g['getState'](C);u[D]=s(F?.[a9(0x1f5)]);}catch{}let E=(G,H)=>{const aa=a9;u[D]=s(H?.['val']),z(!0x0)[aa(0x1eb)](()=>{});};try{A[a9(0x27c)]([C,E,await g[a9(0x235)](C,E)]);}catch(G){console[a9(0x1fe)]('[report]\x20range\x20state\x20'+C,G);}};await B(p,'start'),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x1fa)](){const ab=L;super['disconnectedCallback']?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[ab(0x286)](),this.#h=null;}['connectedCallback'](){super['connectedCallback']?.(),this['_bar']&&this.#w();}#h=null;#w(){const ac=L;this.#h||(this.#h=g[ac(0x209)]['on'](async l=>{const ad=ac;if(l?.['type']!=='report'||l[ad(0x1fb)]!==this.#t)return;let n;try{n=await g[ad(0x256)](ad(0x232),this.#t);}catch{return;}if(!n)return;let p=n[ad(0x274)]??{};this[ad(0x22c)]&&(this['_paper'][ad(0x1f4)][ad(0x200)]=p[ad(0x200)]??'210mm',this[ad(0x22c)][ad(0x1f4)][ad(0x1f6)]=p[ad(0x1f6)]??'297mm'),this.#u(p[ad(0x261)]??{},p[ad(0x22f)]),this.#y(p['theme']),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ae=L;let n=this['shadowRoot'];if(!n)return;let p=n['getElementById']('__reportTheme');p||(p=document[ae(0x1ed)]('style'),p['id']='__reportTheme',n['appendChild'](p));let q=x(l),s=String(l??'')['trim']()===ae(0x249)?'':y(q[ae(0x1fb)],g[ae(0x285)]?.[ae(0x228)]);p['textContent']=ae(0x1fd)+s+'background:'+(q[ae(0x21b)]?'#fff':ae(0x253))+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const af=L;let p=this[af(0x288)]('load');if(!p)return;if(l==null){p['hidden']=!0x0;return;}p['hidden']=!0x1;let q=this['_getDomElement']('loadWhat'),s=this['_getDomElement']('loadDetail');q&&(q['textContent']=l),s&&n!==void 0x0&&(s['textContent']=n);}#T(){const ag=L;let l=this[ag(0x288)](ag(0x279));l&&(l['textContent']=''),this.#p=new Set();}#p=new Set();#D(l){const ah=L;let n=this['_getDomElement'](ah(0x279));if(!n||this.#p['has'](l))return;this.#p[ah(0x28b)](l);let p=new Date()[ah(0x24c)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n[ah(0x206)]=n[ah(0x218)];}#$(){const ai=L;let l=Date[ai(0x289)](),n=0xbb8,p=()=>{const aj=ai;let u=g[aj(0x246)]();if(!u[aj(0x1f2)]){this.#o('Rendering…','');return;}let z=u['filter'](D=>D[aj(0x202)]===aj(0x258))[aj(0x1f2)],A=u[aj(0x1f2)]-z,B=[];A&&B['push'](A+'\x20value'+(A>0x1?'s':'')),z&&B['push'](z+aj(0x20c)+(z>0x1?'ies':'y'));let C=Math['round']((Date['now']()-l)/0x3e8);this.#o(aj(0x204),B[aj(0x238)](aj(0x23a))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D['waitedMs']>n&&this.#D(aj(0x280)+D['id']+(D[aj(0x202)]===aj(0x258)?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ak=L;let z=g['namespace']+'.'+f['reportStateBase'](q,p),A=async E=>{try{return(await g['connection']['getState'](z+'.'+E))?.['val'];}catch{return;}},B=Date[ak(0x289)](),C=await A(ak(0x24b)),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[ak(0x243)]([A(ak(0x273)),A('lastRun')]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o(ak(0x1e7),ak(0x260));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ak(0x242))};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':ak(0x224)};}#e(l,n){const al=L;this[al(0x214)]&&(this['_status']['textContent']=l,this[al(0x214)][al(0x281)]['toggle'](al(0x1f7),!!n));}async #x(l=L(0x28e),p=L(0x216)){const am=L;let q=[am(0x262),'btnSave']['map'](z=>this['_getDomElement'](z))['filter'](Boolean);q[am(0x23e)](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[am(0x234)]??void 0x0,'project':g[am(0x251)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(am(0x219),s)===!0x1){this.#e('Cancelled\x20by\x20the\x20report\x20script.');return;}if(this.#a('report-before-generate',s,!0x0)[am(0x215)]){this.#e(am(0x22d));return;}if(u[am(0x28f)]=s[am(0x28f)],u[am(0x241)]=s[am(0x241)],this.#n[am(0x1f2)]){let A=this.#n[am(0x221)](0x0,0x3)['map'](B=>B['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[am(0x1f2)]>0x3?'\x20(+'+(this.#n[am(0x1f2)]-0x3)+am(0x271):''));}this.#e('Generating…'),this.#o(s[am(0x264)]==='file'?am(0x1e7):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g[am(0x1f1)](s[am(0x1fb)],{'project':s[am(0x211)],'format':s['format'],'range':s['range'],'deliver':s[am(0x264)],'timeoutMs':this['generateTimeoutMs'],'theme':document['documentElement'][am(0x1f3)][am(0x201)]||void 0x0});if(z[am(0x27b)]){let B=await this.#E(s['name'],s['project']);if(!B['ok'])throw new Error(B['error']||'the\x20server\x20refused\x20the\x20run');u={...u,'success':!0x0,'file':B[am(0x24e)]??null},this.#e(am(0x24d)+(B[am(0x24e)]??''));}else{u={...u,'success':!0x0,'file':z[am(0x24e)]??null,'pages':z[am(0x25d)]??null};let C=z[am(0x1ff)]?.['length']?am(0x247)+z[am(0x1ff)][am(0x1f2)]+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e(am(0x1ee)+(z[am(0x24e)]??'')+C);}}catch(D){u['error']=D?.[am(0x263)]??String(D),this.#e(am(0x265)+u['error'],!0x0);}finally{q[am(0x23e)](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':'report-generate-failed',u);try{await this.#l(am(0x26f),s,u);}catch{}}};customElements[L(0x230)]('iobroker-webui-report-viewer')||customElements['define'](L(0x25c),b);export{b as ReportViewer};