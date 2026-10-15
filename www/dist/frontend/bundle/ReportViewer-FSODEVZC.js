function c(b,d){b=b-0x169;const e=a();let f=e[b];return f;}const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x1b1))/0x1*(-parseInt(I(0x19b))/0x2)+-parseInt(I(0x213))/0x3+parseInt(I(0x1b7))/0x4*(-parseInt(I(0x20c))/0x5)+parseInt(I(0x22a))/0x6*(-parseInt(I(0x174))/0x7)+parseInt(I(0x1e4))/0x8*(-parseInt(I(0x20f))/0x9)+-parseInt(I(0x1c0))/0xa*(-parseInt(I(0x177))/0xb)+parseInt(I(0x1f8))/0xc;if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0x6bcb5));import{a as e}from'./chunk-KVPT4J7H.js';import'./chunk-GKVOZVKS.js';import{s as f,t as g}from'./chunk-6UCSEZIG.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';function a(){const am=['now','loadWhat','[data-tb=\x22','items','objectsChanged','warn','btnGen','_paper','settings','95GaAIIK','change','width','1995633lADxqE','unsubscribeState','endFetchTracking','getMinutes','1251042VoaMXQ','template','matchAll','name','type','download','setAttribute','month','background:','[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','generateTimeoutMs','url','define','onReportLoad','report','data','end','rangeFrom','status','toolbox','then','light','2048100htIqyZ','today','scrollHeight','@top-right\x20{\x20content:\x20\x22\x22;\x20}','btnSave','forEach','_zoomLabel','__report-page-rule','disable','Cancelled\x20by\x20the\x20report\x20script.','all','filter','14WRcznC','The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.','body','85019WReSsd','report-load','210mm','Loading\x20data…','mm;\x20','setScreenNameAndLoad','kind','click','disconnectedCallback','printMargins','outstandingFetches','report-before-generate','disabled','\x20→\x20','project','test','_bar','parse','btnPrint','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.','addEventListener','getMonth','isFinite','min','right','deliver','length','rangeKind','date','rangeTo','getElementById','catch','setReportRange','getTime','\x20and\x20','_parseAttributesToProperties','4utcGco','page','btnApply','Building\x20the\x20page…','message','trim','\x20(history)','classList','style','file','[report]\x20range\x20state\x20','subscribeState','whenDataReady','[data-tb]','\x20history\x20quer','theme','join','objectType','toolbarVisible','parentElement','_toolbarWanted','top','182641UfGLkp','round','__reportTheme','the\x20server\x20refused\x20the\x20run','margin','_viewer','42580MzHMRw','report-generate-failed','var(--ui-page,\x20#fff)','Report\x20not\x20found:\x20','_showBtn','toLocaleTimeString','reportName','iobroker-webui-report-viewer','getFullYear','430IirQFl','querySelectorAll','config','cssText','\x20more)','admin','\x20value','head','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','_rootShadow','landscape','marginBottom','Saved\x20on\x20the\x20server:\x20','\x20(+','show','btnShow','hidden','bottom','lastError','reportRange','No\x20value\x20from:\x20','mm\x20','toLocaleString','val','transform','loadDetail','textContent','lastStatus','includes','placeholders','getDate','range','clientWidth','error','whenScreenReady','print','24GcDXwJ','btnIn','beginFetchTracking','30d','left','297mm','report\x20','value','has','groups','push','height','_getDomElement','function','canSaveReportsOnServer','getHours','Opening\x20','get','lastRun','scale(','29299680TVFQpC','globalStyle','screenName','reportStateBase','webuiTheme','paper','btnBar','createElement','_scriptObject','rangeBoxes','start'];a=function(){return am;};return a();}var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m['test'](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+J(0x21c),'g');for(let z of q[J(0x215)](s))p+=z[0x1][J(0x1a0)]()['replace'](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o==='paper'?{'name':'light','paper':!0x0}:o==='runtime'?{'name':m[K(0x186)](String(n??''))?String(n):K(0x229),'paper':!0x1}:{'name':m['test'](o)?o:'light','paper':!0x1};}var b=class extends h{static ['readonly']=!0x0;static ['style']=i`
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
    `;static [L(0x214)]=j`
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
    `;#r=0x1;#t;get[L(0x1bd)](){return this.#t;}set[L(0x1bd)](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const M=L;let l=this.#t;this[M(0x19a)](),l&&!this.#t&&(this.#t=l),this['_bar']=this['_getDomElement']('bar'),this[M(0x20a)]=this['_getDomElement'](M(0x1fd)),this[M(0x1b6)]=this['_getDomElement']('viewer'),this['_status']=this['_getDomElement'](M(0x226)),this[M(0x16e)]=this['_getDomElement']('zoomLabel'),this['_viewer'][M(0x1ac)]='report',this.#w();let n=(p,q)=>this['_getDomElement'](p)?.[M(0x18b)](M(0x17e),q);n(M(0x1e5),()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n(M(0x189),()=>this.#_()),this.#S(),n('btnGen',()=>this.#x('html')),n(M(0x16c),()=>this.#x('html',M(0x1a4))),g[M(0x1f2)]?.()[M(0x228)](p=>{const N=M;let q=this['_getDomElement']('btnSave');q&&(q[N(0x1d0)]=!p);})['catch'](()=>{}),this['_showBtn']=this[M(0x1f0)]('btnShow'),n(M(0x1fe),()=>this['toolbarVisible']=!0x1),n(M(0x1cf),()=>this[M(0x1ad)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this[M(0x1af)]),this.#t&&this.#s();}set[L(0x1ad)](l){const O=L;this[O(0x1af)]=!!l,this['_bar']&&(this[O(0x187)]['hidden']=!l),this[O(0x1bb)]&&(this['_showBtn']['hidden']=!!l);}get[L(0x1ad)](){const P=L;return this[P(0x187)]?!this['_bar'][P(0x1d0)]:this[P(0x1af)]??!0x0;}async #s(){const Q=L;if(!this[Q(0x1b6)])return;this.#e(''),this.#o(Q(0x1f4)+this.#t+'…',''),this.#T();let l=await g['getWebuiObject']('report',this.#t);if(!l){this.#o(null),this.#e(Q(0x1ba)+this.#t,!0x0);return;}let n=l[Q(0x20b)]??{};this[Q(0x20a)][Q(0x1a3)][Q(0x20e)]=n['width']??Q(0x179),this[Q(0x20a)]['style']['height']=n['height']??Q(0x1e9),this[Q(0x1b6)]['style'][Q(0x1c3)]='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n[Q(0x19c)]??{};this.#u(p,n['printMargins']),await this.#g(n[Q(0x227)]),g[Q(0x1e6)](),this['_viewer'][Q(0x1fa)]===this.#t?await this['_viewer']['reload']():await this[Q(0x1b6)][Q(0x17c)](this.#t),this.#c(),this.#l(Q(0x221),this['_viewer'],this['_viewer']['_rootShadow']),this.#a(Q(0x178),{'name':this.#t}),await this.#k(n[Q(0x223)]),this.#o(Q(0x19e),''),await this[Q(0x1b6)][Q(0x1e2)]({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[Q(0x1b6)][Q(0x1a7)]();q(),g[Q(0x211)](),this.#o(null),this.#n=s,this.#l('onReportReady',this[Q(0x1b6)],this['_viewer'][Q(0x1c9)],{'missing':s}),this.#a('report-ready',{'name':this.#t,'missing':s}),s['length']&&this.#e(Q(0x1d4)+s['slice'](0x0,0x3)['map'](u=>u['id'])[Q(0x1ab)](',\x20')+(s[Q(0x191)]>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const R=L;let p=this['_viewer']?.[R(0x200)]?.[l];if(typeof p==R(0x1f1))try{return p(...n);}catch(q){console['error'](R(0x1ea)+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this['_viewer']??this)['dispatchEvent'](q),q;}#u(l,p){const T=L;if(this[T(0x1ae)]!==document[T(0x176)])return;let q=T(0x16f);document[T(0x195)](q)?.['remove']();let u=document['createElement'](T(0x1a3));u['id']=q;let z=(l['size']??'A4')+(l['orientation']===T(0x1ca)?'\x20landscape':''),A=l[T(0x1b5)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C[T(0x193)]||D['push']('@top-left\x20{\x20content:\x20\x22\x22;\x20}'),C['title']||D[T(0x1ee)]('@top-center\x20{\x20content:\x20\x22\x22;\x20}',T(0x16b)),C[T(0x21f)]||D[T(0x1ee)](T(0x1c8),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D[T(0x1ee)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']='@page\x20{\x20size:\x20'+z+';\x20margin:\x20'+B(A[T(0x1b0)])+'mm\x20'+B(A[T(0x18f)])+T(0x1d5)+B(A[T(0x1d1)])+'mm\x20'+B(A[T(0x1e8)])+T(0x17b)+D['join']('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[T(0x1c7)]['appendChild'](u);}#d(l){const U=L;this.#r=Math['min'](0x4,Math['max'](0.1,l)),this[U(0x20a)]['style'][U(0x1d8)]=U(0x1f7)+this.#r+')',this[U(0x20a)]['style'][U(0x1cb)]='calc('+this[U(0x20a)][U(0x1a3)]['height']+'\x20*\x20'+(this.#r-0x1)+')',this['_zoomLabel']['textContent']=Math[U(0x1b2)](this.#r*0x64)+'%';}#c(){const V=L;let l=this[V(0x1f0)]('scroll')[V(0x1e0)]-0x24,n=this[V(0x20a)]['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[V(0x18e)](0x1,l/n));}#_(){const W=L;window[W(0x1e3)]();}async #g(p){const X=L;let q=p?.[X(0x206)]??{},u=null;try{u=await g['getCurrentUser']();}catch{}let z=u?.['groups']??[],A=u?.['id']===X(0x1c5),B=this['_bar']??this[X(0x1f0)]('bar');if(B){for(let C of B['querySelectorAll'](X(0x1a8)))C['removeAttribute']('data-tb-off');for(let [D,E]of Object['entries'](q)){if(!E)continue;let F=null;if(E[X(0x1ce)]===!0x1?F='hide':!A&&Array['isArray'](E[X(0x1ed)])&&E['groups']['length']&&!E[X(0x1ed)]['some'](G=>z[X(0x1dc)](G))&&(F=E['action']===X(0x170)?'disable':'hide'),!!F){for(let G of B[X(0x1c1)](X(0x205)+D+'\x22]'))G[X(0x219)]('data-tb-off',F);}}}}#S(){const Y=L;let l=this[Y(0x1f0)](Y(0x192)),p=this['_getDomElement'](Y(0x225)),q=this['_getDomElement'](Y(0x194)),s=this['_getDomElement'](Y(0x19d));if(!l)return;let u=this['_getDomElement'](Y(0x201)),z=A=>{u&&(u['hidden']=!A);};l[Y(0x18b)](Y(0x20d),()=>{const Z=Y;if(l['value']==='custom'){let A=g['reportRange']??this.#b(Z(0x169));p&&!p[Z(0x1eb)]&&(p['value']=this.#m(A['start'])),q&&!q[Z(0x1eb)]&&(q['value']=this.#m(A['end'])),z(!0x0);return;}z(!0x1),this.#f(l['value']==='report'?null:this.#b(l['value']));}),s?.[Y(0x18b)]('click',()=>{const a0=Y;let A=p?.[a0(0x1eb)]?new Date(p['value'])['getTime']():NaN,B=q?.[a0(0x1eb)]?new Date(q['value'])['getTime']():NaN;if(!Number[a0(0x18d)](A)||!Number['isFinite'](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e(a0(0x175),!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n['getFullYear']()+'-'+p(n['getMonth']()+0x1)+'-'+p(n[a1(0x1de)]())+'T'+p(n[a1(0x1f3)]())+':'+p(n[a1(0x212)]());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s[a2(0x18c)](),s[a2(0x1de)]())['getTime'](),q=0x5265c00;switch(l){case a2(0x169):return{'start':p(n),'end':n['getTime']()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n['getTime']()-0x7*q,'end':n[a2(0x198)]()};case a2(0x1e7):return{'start':n['getTime']()-0x1e*q,'end':n[a2(0x198)]()};case a2(0x21a):return{'start':new Date(n['getFullYear'](),n[a2(0x18c)](),0x1)[a2(0x198)](),'end':n['getTime']()};case'year':return{'start':new Date(n[a2(0x1bf)](),0x0,0x1)['getTime'](),'end':n['getTime']()};default:return{'start':n[a2(0x198)]()-q,'end':n['getTime']()};}}async #f(l){const a3=L;g['setReportRange'](l),this.#e(l?'Range:\x20'+new Date(l[a3(0x202)])['toLocaleString']()+a3(0x184)+new Date(l['end'])[a3(0x1d6)]():'Report\x20default\x20range'),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.['fromState']??'')[a4(0x1a0)](),q=(l?.['toState']??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number[a5(0x18d)](D)&&String(C)['trim']()!=='')return D;let E=Date[a5(0x188)](String(C));return Number[a5(0x18d)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a6(0x21d),!0x0);return;}let F=g[a6(0x1d3)];if(F&&F['start']===D&&F[a6(0x224)]===E)return;g[a6(0x197)]({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)['toLocaleString']()+a6(0x184)+new Date(E)['toLocaleString']());let G=this[a6(0x1f0)](a6(0x192));G&&(G['value']='report');let H=this['_getDomElement']('rangeBoxes');H&&(H[a6(0x1d0)]=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a8=a4;try{let F=await g['getState'](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{const a7=c;u[D]=s(H?.[a7(0x1d7)]),z(!0x0)[a7(0x196)](()=>{});};try{A[a8(0x1ee)]([C,E,await g[a8(0x1a6)](C,E)]);}catch(G){console[a8(0x208)](a8(0x1a5)+C,G);}};await B(p,'start'),await B(q,a4(0x224)),this.#v={'from':p,'to':q},this.#i=()=>{const a9=a4;for(let [C,D]of A)try{g[a9(0x210)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){const aa=L;super[aa(0x17f)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.['dispose'](),this.#h=null;}['connectedCallback'](){const ab=L;super['connectedCallback']?.(),this[ab(0x187)]&&this.#w();}#h=null;#w(){const ac=L;this.#h||(this.#h=g[ac(0x207)]['on'](async l=>{const ad=ac;if(l?.[ad(0x217)]!==ad(0x222)||l[ad(0x216)]!==this.#t)return;let n;try{n=await g['getWebuiObject']('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[ad(0x20a)]&&(this['_paper'][ad(0x1a3)]['width']=p[ad(0x20e)]??ad(0x179),this['_paper'][ad(0x1a3)]['height']=p[ad(0x1ef)]??'297mm'),this.#u(p[ad(0x19c)]??{},p[ad(0x180)]),this.#y(p[ad(0x1aa)]),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ae=L;let n=this['shadowRoot'];if(!n)return;let p=n[ae(0x195)](ae(0x1b3));p||(p=document[ae(0x1ff)]('style'),p['id']=ae(0x1b3),n['appendChild'](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q[ae(0x216)],g[ae(0x1c2)]?.[ae(0x1f9)]);p['textContent']=':host\x20#paper{'+s+ae(0x21b)+(q[ae(0x1fd)]?'#fff':ae(0x1b9))+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const af=L;let p=this[af(0x1f0)]('load');if(!p)return;if(l==null){p['hidden']=!0x0;return;}p['hidden']=!0x1;let q=this[af(0x1f0)](af(0x204)),s=this[af(0x1f0)](af(0x1d9));q&&(q[af(0x1da)]=l),s&&n!==void 0x0&&(s[af(0x1da)]=n);}#T(){const ag=L;let l=this[ag(0x1f0)]('loadLog');l&&(l[ag(0x1da)]=''),this.#p=new Set();}#p=new Set();#D(l){const ah=L;let n=this['_getDomElement']('loadLog');if(!n||this.#p[ah(0x1ec)](l))return;this.#p['add'](l);let p=new Date()[ah(0x1bc)]();n['textContent']+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n[ah(0x16a)];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const ai=c;let u=g[ai(0x181)]();if(!u[ai(0x191)]){this.#o('Rendering…','');return;}let z=u['filter'](D=>D[ai(0x17d)]==='history')['length'],A=u[ai(0x191)]-z,B=[];A&&B[ai(0x1ee)](A+ai(0x1c6)+(A>0x1?'s':'')),z&&B['push'](z+ai(0x1a9)+(z>0x1?'ies':'y'));let C=Math['round']((Date[ai(0x203)]()-l)/0x3e8);this.#o(ai(0x17a),B[ai(0x1ab)](ai(0x199))+'\x20outstanding\x20—\x20'+C+'s');for(let D of u)D['waitedMs']>n&&this.#D('still\x20waiting:\x20'+D['id']+(D['kind']==='history'?ai(0x1a1):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const aj=L;let z=g['namespace']+'.'+f[aj(0x1fb)](q,p),A=async E=>{try{return(await g['connection']['getState'](z+'.'+E))?.['val'];}catch{return;}},B=Date['now'](),C=await A(aj(0x1f6)),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise[aj(0x172)]([A(aj(0x1db)),A(aj(0x1f6))]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o('Generating\x20on\x20the\x20server…','The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A('lastFile')};if(E==='error')return{'ok':!0x1,'error':await A(aj(0x1d2))};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const ak=L;this['_status']&&(this['_status'][ak(0x1da)]=l,this['_status'][ak(0x1a2)]['toggle']('err',!!n));}async #x(l='html',p=L(0x218)){const al=L;let q=[al(0x209),'btnSave']['map'](z=>this[al(0x1f0)](z))[al(0x173)](Boolean);q[al(0x16d)](z=>z[al(0x183)]=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g['reportRange']??void 0x0,'project':g['currentProject']},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l('beforeGenerate',s)===!0x1){this.#e(al(0x171));return;}if(this.#a(al(0x182),s,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(u['format']=s['format'],u['range']=s[al(0x1df)],this.#n[al(0x191)]){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])['join'](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n[al(0x191)]>0x3?al(0x1cd)+(this.#n['length']-0x3)+al(0x1c4):''));}this.#e('Generating…'),this.#o(s[al(0x190)]===al(0x1a4)?'Generating\x20on\x20the\x20server…':'Generating…',al(0x18a));let z=await g['generateReport'](s['name'],{'project':s[al(0x185)],'format':s['format'],'range':s[al(0x1df)],'deliver':s[al(0x190)],'timeoutMs':this[al(0x21e)],'theme':document['documentElement']['dataset'][al(0x1fc)]||void 0x0});if(z['viaTrigger']){let B=await this.#E(s[al(0x216)],s[al(0x185)]);if(!B['ok'])throw new Error(B['error']||al(0x1b4));u={...u,'success':!0x0,'file':B[al(0x1a4)]??null},this.#e(al(0x1cc)+(B['file']??''));}else{u={...u,'success':!0x0,'file':z['file']??null,'pages':z['pages']??null};let C=z['placeholders']?.['length']?'\x20—\x20'+z[al(0x1dd)]['length']+'\x20control(s)\x20shown\x20as\x20placeholders':'';this.#e('Downloaded:\x20'+(z[al(0x1a4)]??'')+C);}}catch(D){u['error']=D?.[al(0x19f)]??String(D),this.#e('Not\x20generated\x20—\x20'+u[al(0x1e1)],!0x0);}finally{q['forEach'](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':al(0x1b8),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements[L(0x1f5)](L(0x1be))||customElements[L(0x220)](L(0x1be),b);export{b as ReportViewer};