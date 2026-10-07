const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=-parseInt(I(0x24f))/0x1*(-parseInt(I(0x21e))/0x2)+parseInt(I(0x1f9))/0x3*(parseInt(I(0x212))/0x4)+parseInt(I(0x1d4))/0x5*(parseInt(I(0x1af))/0x6)+-parseInt(I(0x24e))/0x7+parseInt(I(0x1d9))/0x8+parseInt(I(0x231))/0x9*(-parseInt(I(0x1d5))/0xa)+-parseInt(I(0x1e6))/0xb*(parseInt(I(0x21f))/0xc);if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0xa1087));import{a as e}from'./chunk-KVPT4J7H.js';function c(b,d){b=b-0x1a6;const e=a();let f=e[b];return f;}import'./chunk-GKVOZVKS.js';import{s as f,t as g}from'./chunk-6UCSEZIG.js';function a(){const ak=['1341XZpDGR','_toolbarWanted','getState','_parseAttributesToProperties','year','height','hide','_getDomElement','landscape','replace','define','clientWidth','getMonth','screenName','iobroker-webui-report-viewer','getElementById','_rootShadow','rangeTo','has','toState','filter','round','paper','margin','beginFetchTracking','download','\x20and\x20','isArray','template','1045961rnJIws','86nXNBcd','viewer','\x20—\x20','beforeGenerate','_paper','the\x20server\x20refused\x20the\x20run','lastRun','appendChild','scrollHeight','data-tb-off','month','history','end','toolbarVisible','message','report-generate-failed','setAttribute','lastError','Report\x20default\x20range','mm\x20','693264IUeoDj','subscribeState','test','size','toLocaleTimeString','@top-right\x20{\x20content:\x20\x22\x22;\x20}','297mm','setReportRange','Downloaded:\x20','objectsChanged','map','print','top','catch','Rendering…','webuiTheme','cssText','dispose','loadDetail','dispatchEvent','file','\x20(+','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','kind','report-range-changed','rangeBoxes','__report-page-rule','now','\x20history\x20quer','\x20more)','range','style','trim','Generating\x20on\x20the\x20server…','Loading\x20data…','push','loadWhat','55icUIzc','32910Ulgmrc','\x20control(s)\x20shown\x20as\x20placeholders','getCurrentUser','custom','6347200PKWjpD','report-before-generate','textContent','addEventListener','html','groups','removeAttribute','number','currentProject','loadLog','length','placeholders',';\x20margin:\x20','13115355hUAnmu','viaTrigger','load','settings','runtime','parentElement','name','report','@bottom-right\x20{\x20content:\x20\x22\x22;\x20}','readonly','reportRange','entries','Cancelled\x20by\x20the\x20report\x20script.','join','Generating…','_bar','_viewer','yesterday','ready','2493oisZsV','_zoomLabel','[data-tb=\x22','no\x20value\x20from:\x20','lastFile','slice','value','format','btnGen','report-ready','scroll','Range\x20from\x20states:\x20','reportStateBase','generateTimeoutMs','type','__reportTheme','getWebuiObject','toLocaleString','mm;\x20','btnSave','defaultPrevented','@top-left\x20{\x20content:\x20\x22\x22;\x20}','dataset','today','project','2188gEmucE','Saved\x20on\x20the\x20server:\x20','[data-tb]','the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server','@top-center\x20{\x20content:\x20\x22\x22;\x20}','deliver','getHours','hidden','disconnectedCallback','start','bar','getDate','27094nbLQBn','24pNJbgq','30d','getTime','title','outstandingFetches','orientation','min','_scriptObject','pageNumber',':host\x20#paper{','toolbox','var(--ui-page,\x20#fff)','@bottom-center\x20{\x20content:\x20\x22\x22;\x20}','\x20outstanding\x20—\x20','isFinite','documentElement','printMargins','light'];a=function(){return ak;};return a();}import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m[J(0x1b1)](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()[J(0x23a)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x247)?{'name':'light','paper':!0x0}:o===K(0x1ea)?{'name':m['test'](String(n??''))?String(n):K(0x230),'paper':!0x1}:{'name':m[K(0x1b1)](o)?o:'light','paper':!0x1};}var b=class extends h{static [L(0x1ef)]=!0x0;static [L(0x1ce)]=i`
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
    `;static [L(0x24d)]=j`
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
    `;#r=0x1;#t;get['reportName'](){return this.#t;}set['reportName'](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){super(),this['_restoreCachedInititalValues']();}[L(0x1f8)](){const M=L;let l=this.#t;this[M(0x234)](),l&&!this.#t&&(this.#t=l),this[M(0x1f5)]=this['_getDomElement'](M(0x21c)),this['_paper']=this[M(0x238)](M(0x247)),this['_viewer']=this[M(0x238)](M(0x250)),this['_status']=this['_getDomElement']('status'),this[M(0x1fa)]=this[M(0x238)]('zoomLabel'),this['_viewer']['objectType']='report',this.#w();let n=(p,q)=>this['_getDomElement'](p)?.[M(0x1dc)]('click',q);n('btnIn',()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n('btnFit',()=>this.#c()),n('btnPrint',()=>this.#_()),this.#S(),n(M(0x201),()=>this.#x('html')),n(M(0x20c),()=>this.#x('html','file')),g['canSaveReportsOnServer']?.()['then'](p=>{let q=this['_getDomElement']('btnSave');q&&(q['hidden']=!p);})[M(0x1bc)](()=>{}),this['_showBtn']=this[M(0x238)]('btnShow'),n('btnBar',()=>this[M(0x1a8)]=!0x1),n('btnShow',()=>this[M(0x1a8)]=!0x0),this['_toolbarWanted']!==void 0x0&&(this[M(0x1a8)]=this[M(0x232)]),this.#t&&this.#s();}set[L(0x1a8)](l){const N=L;this['_toolbarWanted']=!!l,this[N(0x1f5)]&&(this['_bar'][N(0x219)]=!l),this['_showBtn']&&(this['_showBtn'][N(0x219)]=!!l);}get['toolbarVisible'](){const O=L;return this[O(0x1f5)]?!this['_bar']['hidden']:this[O(0x232)]??!0x0;}async #s(){const P=L;if(!this['_viewer'])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g[P(0x209)](P(0x1ed),this.#t);if(!l){this.#o(null),this.#e('Report\x20not\x20found:\x20'+this.#t,!0x0);return;}let n=l[P(0x1e9)]??{};this['_paper'][P(0x1ce)]['width']=n['width']??'210mm',this['_paper'][P(0x1ce)][P(0x236)]=n[P(0x236)]??P(0x1b5),this[P(0x1f6)][P(0x1ce)][P(0x1bf)]='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n['page']??{};this.#u(p,n[P(0x22f)]),await this.#g(n[P(0x229)]),g[P(0x249)](),this['_viewer'][P(0x23e)]===this.#t?await this[P(0x1f6)]['reload']():await this['_viewer']['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this[P(0x1f6)],this[P(0x1f6)][P(0x241)]),this.#a('report-load',{'name':this.#t}),await this.#k(n['data']),this.#o('Building\x20the\x20page…',''),await this['_viewer']['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this[P(0x1f6)]['whenDataReady']();q(),g['endFetchTracking'](),this.#o(null),this.#n=s,this.#l('onReportReady',this['_viewer'],this['_viewer']['_rootShadow'],{'missing':s}),this.#a(P(0x202),{'name':this.#t,'missing':s}),s['length']&&this.#e('No\x20value\x20from:\x20'+s[P(0x1fe)](0x0,0x3)[P(0x1b9)](u=>u['id'])[P(0x1f3)](',\x20')+(s[P(0x1e3)]>0x3?'\x20…':''),!0x0);}#n=[];[L(0x206)]=0xea60;#l(l,...n){const Q=L;let p=this['_viewer']?.[Q(0x226)]?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error']('report\x20'+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){const R=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[R(0x1f6)]??this)[R(0x1c2)](q),q;}#u(l,p){const T=L;if(this[T(0x1eb)]!==document['body'])return;let q=T(0x1c9);document[T(0x240)](q)?.['remove']();let u=document['createElement'](T(0x1ce));u['id']=q;let z=(l[T(0x1b2)]??'A4')+(l[T(0x224)]===T(0x239)?'\x20landscape':''),A=l[T(0x248)]??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D['push'](T(0x20e)),C[T(0x222)]||D[T(0x1d2)](T(0x216),T(0x1b4)),C['url']||D['push']('@bottom-left\x20{\x20content:\x20\x22\x22;\x20}',T(0x22b)),C[T(0x227)]||D['push'](T(0x1ee)),u[T(0x1db)]='@page\x20{\x20size:\x20'+z+T(0x1e5)+B(A[T(0x1bb)])+'mm\x20'+B(A['right'])+T(0x1ae)+B(A['bottom'])+T(0x1ae)+B(A['left'])+T(0x20b)+D[T(0x1f3)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document['head'][T(0x256)](u);}#d(l){const U=L;this.#r=Math[U(0x225)](0x4,Math['max'](0.1,l)),this['_paper']['style']['transform']='scale('+this.#r+')',this[U(0x253)]['style']['marginBottom']='calc('+this['_paper'][U(0x1ce)][U(0x236)]+'\x20*\x20'+(this.#r-0x1)+')',this[U(0x1fa)][U(0x1db)]=Math[U(0x246)](this.#r*0x64)+'%';}#c(){const V=L;let l=this['_getDomElement'](V(0x203))[V(0x23c)]-0x24,n=this['_paper']['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[V(0x225)](0x1,l/n));}#_(){const W=L;window[W(0x1ba)]();}async #g(p){const X=L;let q=p?.['items']??{},u=null;try{u=await g[X(0x1d7)]();}catch{}let z=u?.['groups']??[],A=u?.['id']==='admin',B=this[X(0x1f5)]??this['_getDomElement']('bar');if(B){for(let C of B['querySelectorAll'](X(0x214)))C[X(0x1df)](X(0x258));for(let [D,E]of Object[X(0x1f1)](q)){if(!E)continue;let F=null;if(E['show']===!0x1?F=X(0x237):!A&&Array[X(0x24c)](E[X(0x1de)])&&E[X(0x1de)][X(0x1e3)]&&!E[X(0x1de)]['some'](G=>z['includes'](G))&&(F=E['action']==='disable'?'disable':X(0x237)),!!F){for(let G of B['querySelectorAll'](X(0x1fb)+D+'\x22]'))G[X(0x1ab)](X(0x258),F);}}}}#S(){const Y=L;let l=this[Y(0x238)]('rangeKind'),p=this[Y(0x238)]('rangeFrom'),q=this[Y(0x238)](Y(0x242)),s=this['_getDomElement']('btnApply');if(!l)return;let u=this['_getDomElement'](Y(0x1c8)),z=A=>{u&&(u['hidden']=!A);};l[Y(0x1dc)]('change',()=>{const Z=Y;if(l[Z(0x1ff)]===Z(0x1d8)){let A=g[Z(0x1f0)]??this.#b(Z(0x210));p&&!p['value']&&(p['value']=this.#m(A[Z(0x21b)])),q&&!q['value']&&(q[Z(0x1ff)]=this.#m(A[Z(0x1a7)])),z(!0x0);return;}z(!0x1),this.#f(l['value']===Z(0x1ed)?null:this.#b(l[Z(0x1ff)]));}),s?.['addEventListener']('click',()=>{const a0=Y;let A=p?.[a0(0x1ff)]?new Date(p[a0(0x1ff)])['getTime']():NaN,B=q?.['value']?new Date(q[a0(0x1ff)])[a0(0x221)]():NaN;if(!Number['isFinite'](A)||!Number['isFinite'](B)){this.#e('Pick\x20both\x20dates.',!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a1=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n['getFullYear']()+'-'+p(n[a1(0x23d)]()+0x1)+'-'+p(n[a1(0x21d)]())+'T'+p(n[a1(0x218)]())+':'+p(n['getMinutes']());}#b(l){const a2=L;let n=new Date(),p=s=>new Date(s['getFullYear'](),s['getMonth'](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n['getTime']()};case a2(0x1f7):return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a2(0x221)]()-0x7*q,'end':n['getTime']()};case a2(0x220):return{'start':n['getTime']()-0x1e*q,'end':n[a2(0x221)]()};case a2(0x259):return{'start':new Date(n['getFullYear'](),n[a2(0x23d)](),0x1)[a2(0x221)](),'end':n[a2(0x221)]()};case a2(0x235):return{'start':new Date(n['getFullYear'](),0x0,0x1)['getTime'](),'end':n[a2(0x221)]()};default:return{'start':n[a2(0x221)]()-q,'end':n['getTime']()};}}async #f(l){const a3=L;g[a3(0x1b6)](l),this.#e(l?'Range:\x20'+new Date(l['start'])['toLocaleString']()+'\x20→\x20'+new Date(l['end'])[a3(0x20a)]():a3(0x1ad)),this.#a(a3(0x1c7),{'range':l}),await this.#s();}async #k(l){const a4=L;let p=(l?.['fromState']??'')[a4(0x1cf)](),q=(l?.[a4(0x244)]??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a5=a4;if(C==null||C==='')return null;if(typeof C==a5(0x1e0))return C;let D=Number(C);if(Number['isFinite'](D)&&String(C)['trim']()!=='')return D;let E=Date['parse'](String(C));return Number[a5(0x22d)](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a6=a4;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a6(0x1c5),!0x0);return;}let F=g[a6(0x1f0)];if(F&&F['start']===D&&F['end']===E)return;g[a6(0x1b6)]({'start':D,'end':E}),this.#e(a6(0x204)+new Date(D)['toLocaleString']()+'\x20→\x20'+new Date(E)['toLocaleString']());let G=this[a6(0x238)]('rangeKind');G&&(G['value']='report');let H=this['_getDomElement'](a6(0x1c8));H&&(H['hidden']=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a7=a4;try{let F=await g[a7(0x233)](C);u[D]=s(F?.['val']);}catch{}let E=(G,H)=>{u[D]=s(H?.['val']),z(!0x0)['catch'](()=>{});};try{A['push']([C,E,await g[a7(0x1b0)](C,E)]);}catch(G){console['warn']('[report]\x20range\x20state\x20'+C,G);}};await B(p,a4(0x21b)),await B(q,'end'),this.#v={'from':p,'to':q},this.#i=()=>{for(let [C,D]of A)try{g['unsubscribeState'](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;[L(0x21a)](){const a8=L;super[a8(0x21a)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.[a8(0x1c0)](),this.#h=null;}['connectedCallback'](){const a9=L;super['connectedCallback']?.(),this[a9(0x1f5)]&&this.#w();}#h=null;#w(){const aa=L;this.#h||(this.#h=g[aa(0x1b8)]['on'](async l=>{const ab=aa;if(l?.[ab(0x207)]!==ab(0x1ed)||l['name']!==this.#t)return;let n;try{n=await g[ab(0x209)]('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this[ab(0x253)]&&(this['_paper']['style']['width']=p['width']??'210mm',this[ab(0x253)]['style']['height']=p['height']??ab(0x1b5)),this.#u(p['page']??{},p['printMargins']),this.#y(p['theme']),await this.#g(p[ab(0x229)]),this.#c();}));}#y(l){const ac=L;let n=this['shadowRoot'];if(!n)return;let p=n[ac(0x240)]('__reportTheme');p||(p=document['createElement'](ac(0x1ce)),p['id']=ac(0x208),n['appendChild'](p));let q=x(l),s=String(l??'')['trim']()==='runtime'?'':y(q[ac(0x1ec)],g['config']?.['globalStyle']);p[ac(0x1db)]=ac(0x228)+s+'background:'+(q[ac(0x247)]?'#fff':ac(0x22a))+';color:var(--ui-text,\x20#1d2733);}';}#o(l,n){const ad=L;let p=this['_getDomElement'](ad(0x1e8));if(!p)return;if(l==null){p[ad(0x219)]=!0x0;return;}p[ad(0x219)]=!0x1;let q=this[ad(0x238)](ad(0x1d3)),s=this[ad(0x238)](ad(0x1c1));q&&(q[ad(0x1db)]=l),s&&n!==void 0x0&&(s[ad(0x1db)]=n);}#T(){const ae=L;let l=this['_getDomElement'](ae(0x1e2));l&&(l[ae(0x1db)]=''),this.#p=new Set();}#p=new Set();#D(l){const af=L;let n=this['_getDomElement']('loadLog');if(!n||this.#p[af(0x243)](l))return;this.#p['add'](l);let p=new Date()[af(0x1b3)]();n[af(0x1db)]+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n[af(0x257)];}#$(){const ag=L;let l=Date[ag(0x1ca)](),n=0xbb8,p=()=>{const ah=ag;let u=g[ah(0x223)]();if(!u['length']){this.#o(ah(0x1bd),'');return;}let z=u['filter'](D=>D[ah(0x1c6)]===ah(0x1a6))[ah(0x1e3)],A=u[ah(0x1e3)]-z,B=[];A&&B['push'](A+'\x20value'+(A>0x1?'s':'')),z&&B['push'](z+ah(0x1cb)+(z>0x1?'ies':'y'));let C=Math['round']((Date['now']()-l)/0x3e8);this.#o(ah(0x1d1),B['join'](ah(0x24b))+ah(0x22c)+C+'s');for(let D of u)D['waitedMs']>n&&this.#D('still\x20waiting:\x20'+D['id']+(D[ah(0x1c6)]===ah(0x1a6)?'\x20(history)':''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const ai=L;let z=g['namespace']+'.'+f[ai(0x205)](q,p),A=async E=>{try{return(await g['connection']['getState'](z+'.'+E))?.['val'];}catch{return;}},B=Date[ai(0x1ca)](),C=await A(ai(0x255)),D=!0x1;for(;Date[ai(0x1ca)]()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A('lastStatus'),A(ai(0x255))]),G=F!=null&&F!==C;if(E==='running'){D=!0x0,this.#o(ai(0x1d0),'The\x20server\x20is\x20rendering\x20the\x20report.');continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(ai(0x1fd))};if(E==='error')return{'ok':!0x1,'error':await A(ai(0x1ac))};}}return{'ok':!0x1,'error':ai(0x215)};}#e(l,n){this['_status']&&(this['_status']['textContent']=l,this['_status']['classList']['toggle']('err',!!n));}async #x(l=L(0x1dd),p=L(0x24a)){const aj=L;let q=['btnGen',aj(0x20c)][aj(0x1b9)](z=>this[aj(0x238)](z))[aj(0x245)](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g['reportRange']??void 0x0,'project':g[aj(0x1e1)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(aj(0x252),s)===!0x1){this.#e(aj(0x1f2));return;}if(this.#a(aj(0x1da),s,!0x0)[aj(0x20d)]){this.#e('Cancelled.');return;}if(u['format']=s[aj(0x200)],u[aj(0x1cd)]=s['range'],this.#n[aj(0x1e3)]){let A=this.#n[aj(0x1fe)](0x0,0x3)[aj(0x1b9)](B=>B['id'])['join'](',\x20');throw new Error(aj(0x1fc)+A+(this.#n[aj(0x1e3)]>0x3?aj(0x1c4)+(this.#n[aj(0x1e3)]-0x3)+aj(0x1cc):''));}this.#e(aj(0x1f4)),this.#o(s[aj(0x217)]==='file'?aj(0x1d0):'Generating…','The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s['name'],{'project':s[aj(0x211)],'format':s['format'],'range':s[aj(0x1cd)],'deliver':s[aj(0x217)],'timeoutMs':this['generateTimeoutMs'],'theme':document[aj(0x22e)][aj(0x20f)][aj(0x1be)]||void 0x0});if(z[aj(0x1e7)]){let B=await this.#E(s[aj(0x1ec)],s[aj(0x211)]);if(!B['ok'])throw new Error(B['error']||aj(0x254));u={...u,'success':!0x0,'file':B['file']??null},this.#e(aj(0x213)+(B['file']??''));}else{u={...u,'success':!0x0,'file':z[aj(0x1c3)]??null,'pages':z['pages']??null};let C=z['placeholders']?.['length']?aj(0x251)+z[aj(0x1e4)][aj(0x1e3)]+aj(0x1d6):'';this.#e(aj(0x1b7)+(z['file']??'')+C);}}catch(D){u['error']=D?.[aj(0x1a9)]??String(D),this.#e('Not\x20generated\x20—\x20'+u['error'],!0x0);}finally{q['forEach'](E=>E['disabled']=!0x1),this.#o(null);}this.#a(u['success']?'report-generated':aj(0x1aa),u);try{await this.#l('afterGenerate',s,u);}catch{}}};customElements['get']('iobroker-webui-report-viewer')||customElements[L(0x23b)](L(0x23f),b);export{b as ReportViewer};