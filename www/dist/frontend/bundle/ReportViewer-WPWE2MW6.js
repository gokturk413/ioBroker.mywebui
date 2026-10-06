const L=c;(function(l,n){const I=c,o=l();while(!![]){try{const p=parseInt(I(0x132))/0x1*(-parseInt(I(0x10a))/0x2)+parseInt(I(0xda))/0x3*(parseInt(I(0xf4))/0x4)+parseInt(I(0x116))/0x5+-parseInt(I(0xc4))/0x6+parseInt(I(0xae))/0x7*(parseInt(I(0x11a))/0x8)+-parseInt(I(0xcb))/0x9+-parseInt(I(0xac))/0xa*(-parseInt(I(0x120))/0xb);if(p===n)break;else o['push'](o['shift']());}catch(q){o['push'](o['shift']());}}}(a,0xc1fba));import{a as e}from'./chunk-KVPT4J7H.js';function a(){const ap=['year','\x20→\x20','val','html','endFetchTracking','click','The\x20range\x20states\x20give\x20a\x20start\x20that\x20is\x20not\x20before\x20the\x20end.','__reportTheme','\x20—\x20','hide','disable','connection','3173112BrJsJm','globalStyle','value','left','getMinutes','parentElement','_toolbarWanted','remove','screenName','\x20outstanding\x20—\x20','btnGen','range','width','btnShow','still\x20waiting:\x20','runtime','[report]\x20range\x20state\x20','printMargins','calc(','report-load','@bottom-left\x20{\x20content:\x20\x22\x22;\x20}','297mm','6FAAlQN','today','success','Saved\x20on\x20the\x20server:\x20','forEach','data','items','some','max','iobroker-webui-report-viewer',';color:var(--ui-text,\x20#1d2733);}','lastRun','1115730hhGxJY','template','Downloaded:\x20','fromState','432MKehvJ','get','project','disconnectedCallback','btnFit','viewer','116303AjZQua','file','loadLog','@top-left\x20{\x20content:\x20\x22\x22;\x20}','reportName','getTime','The\x20server\x20is\x20rendering\x20the\x20report.','start','warn','page','Range:\x20','getFullYear','paper','download','Building\x20the\x20page…','mm;\x20','_showBtn','Generating…','455092ZXdQEt','unsubscribeState','isArray',';\x20margin:\x20','month','btnPrint','getMonth','waitedMs','connectedCallback','_paper','textContent','right','history','currentProject','name','marginBottom','objectsChanged','report-generated','appendChild','transform','setReportRange','replace','admin','report','change','round','push','light','getHours','rangeKind','_restoreCachedInititalValues','toLocaleString','groups','define','running','_status','afterGenerate','btnSave','_zoomLabel','length','ready','disabled','theme','reportRange','then','beforeGenerate','getState','loadDetail','data-tb-off','Report\x20not\x20found:\x20','toState','getCurrentUser','scale(','show','Pick\x20both\x20dates.','670iTeKPH','the\x20server\x20refused\x20the\x20run','35987EkKVRS','getWebuiObject','join','beginFetchTracking','min','orientation','_viewer','bar','body','ies','hidden','btnIn','loadWhat','lastStatus','report-ready','Report\x20default\x20range','test','toolbox','placeholders','head','clientWidth','[data-tb]','816180BaMaPr',':host\x20#paper{','_getDomElement','slice','readonly','webuiTheme','generateTimeoutMs','4498623xkRzPP','custom','isFinite','querySelectorAll','catch','objectType','message','height','style','lastFile','\x20control(s)\x20shown\x20as\x20placeholders','30d','end','cssText','[data-tb=\x22','6kufWbx','Cancelled\x20by\x20the\x20report\x20script.','addEventListener','_bar','\x20(history)','deliver','load','getElementById','map','@top-center\x20{\x20content:\x20\x22\x22;\x20}','entries','format','filter','removeAttribute'];a=function(){return ap;};return a();}import'./chunk-NPDVKA2F.js';import{s as f,t as g}from'./chunk-CVWTTI5E.js';import{BaseCustomWebComponentConstructorAppend as h,css as i,html as j}from'@gokturk413/base-custom-webcomponent';var m=/^[\w-]{1,40}$/;function y(l,n=''){const J=c;if(!m[J(0xbe)](String(l??'')))return'';let p='';for(let q of[e,String(n??'')]){let s=new RegExp('\x5c[data-webui-theme\x5cs*=\x5cs*[\x22\x27]?'+l+'[\x22\x27]?\x5c][^{]*\x5c{([^}]*)\x5c}','g');for(let z of q['matchAll'](s))p+=z[0x1]['trim']()[J(0x8a)](/;?$/,';');}return p;}function x(l,n){const K=c;let o=String(l??'')['trim']();return!o||o===K(0x12c)?{'name':'light','paper':!0x0}:o===K(0x103)?{'name':m[K(0xbe)](String(n??''))?String(n):K(0x90),'paper':!0x1}:{'name':m['test'](o)?o:K(0x90),'paper':!0x1};}function c(b,d){b=b-0x77;const e=a();let f=e[b];return f;}var b=class extends h{static [L(0xc8)]=!0x0;static [L(0xd3)]=i`
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
    `;static [L(0x117)]=j`
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
    `;#r=0x1;#t;get[L(0x124)](){return this.#t;}set['reportName'](l){this.#t!==l&&(this.#t=l,this.#s());}constructor(){const M=L;super(),this[M(0x93)]();}[L(0x9d)](){const N=L;let l=this.#t;this['_parseAttributesToProperties'](),l&&!this.#t&&(this.#t=l),this[N(0xdd)]=this[N(0xc6)](N(0xb5)),this['_paper']=this[N(0xc6)]('paper'),this['_viewer']=this[N(0xc6)](N(0x11f)),this['_status']=this['_getDomElement']('status'),this[N(0x9b)]=this['_getDomElement']('zoomLabel'),this[N(0xb4)][N(0xd0)]=N(0x8c),this.#w();let n=(p,q)=>this['_getDomElement'](p)?.['addEventListener']('click',q);n(N(0xb9),()=>this.#d(this.#r*1.25)),n('btnOut',()=>this.#d(this.#r/1.25)),n(N(0x11e),()=>this.#c()),n(N(0x7a),()=>this.#_()),this.#S(),n(N(0xfe),()=>this.#x('html')),n(N(0x9a),()=>this.#x(N(0xeb),N(0x121))),g['canSaveReportsOnServer']?.()[N(0xa1)](p=>{const O=N;let q=this['_getDomElement'](O(0x9a));q&&(q[O(0xb8)]=!p);})['catch'](()=>{}),this[N(0x130)]=this['_getDomElement']('btnShow'),n('btnBar',()=>this['toolbarVisible']=!0x1),n(N(0x101),()=>this['toolbarVisible']=!0x0),this['_toolbarWanted']!==void 0x0&&(this['toolbarVisible']=this[N(0xfa)]),this.#t&&this.#s();}set['toolbarVisible'](l){const P=L;this['_toolbarWanted']=!!l,this[P(0xdd)]&&(this[P(0xdd)]['hidden']=!l),this[P(0x130)]&&(this[P(0x130)]['hidden']=!!l);}get['toolbarVisible'](){const Q=L;return this['_bar']?!this[Q(0xdd)][Q(0xb8)]:this[Q(0xfa)]??!0x0;}async #s(){const R=L;if(!this[R(0xb4)])return;this.#e(''),this.#o('Opening\x20'+this.#t+'…',''),this.#T();let l=await g['getWebuiObject'](R(0x8c),this.#t);if(!l){this.#o(null),this.#e(R(0xa6)+this.#t,!0x0);return;}let n=l['settings']??{};this[R(0x7e)]['style']['width']=n['width']??'210mm',this['_paper'][R(0xd3)][R(0xd2)]=n['height']??'297mm',this[R(0xb4)]['style'][R(0xd8)]='display:block;width:100%;height:100%;',this.#y(n['theme']);let p=n[R(0x129)]??{};this.#u(p,n[R(0x105)]),await this.#g(n[R(0xbf)]),g[R(0xb1)](),this[R(0xb4)][R(0xfc)]===this.#t?await this['_viewer']['reload']():await this['_viewer']['setScreenNameAndLoad'](this.#t),this.#c(),this.#l('onReportLoad',this[R(0xb4)],this[R(0xb4)]['_rootShadow']),this.#a(R(0x107),{'name':this.#t}),await this.#k(n[R(0x10f)]),this.#o(R(0x12e),''),await this[R(0xb4)]['whenScreenReady']({'timeout':0x1f40});let q=this.#$(),{missing:s}=await this['_viewer']['whenDataReady']();q(),g[R(0xec)](),this.#o(null),this.#n=s,this.#l('onReportReady',this[R(0xb4)],this[R(0xb4)]['_rootShadow'],{'missing':s}),this.#a(R(0xbc),{'name':this.#t,'missing':s}),s[R(0x9c)]&&this.#e('No\x20value\x20from:\x20'+s[R(0xc7)](0x0,0x3)[R(0xe2)](u=>u['id'])[R(0xb0)](',\x20')+(s['length']>0x3?'\x20…':''),!0x0);}#n=[];['generateTimeoutMs']=0xea60;#l(l,...n){const T=L;let p=this[T(0xb4)]?.['_scriptObject']?.[l];if(typeof p=='function')try{return p(...n);}catch(q){console['error']('report\x20'+this.#t+':\x20'+l+'\x20threw',q);return;}}#a(l,n,p=!0x1){const U=L;let q=new CustomEvent(l,{'detail':n,'bubbles':!0x0,'composed':!0x0,'cancelable':p});return(this[U(0xb4)]??this)['dispatchEvent'](q),q;}#u(l,p){const V=L;if(this[V(0xf9)]!==document[V(0xb6)])return;let q='__report-page-rule';document['getElementById'](q)?.[V(0xfb)]();let u=document['createElement']('style');u['id']=q;let z=(l['size']??'A4')+(l[V(0xb3)]==='landscape'?'\x20landscape':''),A=l['margin']??{},B=E=>Number(E)||0x0,C=p??{},D=[];C['date']||D[V(0x8f)](V(0x123)),C['title']||D[V(0x8f)](V(0xe3),'@top-right\x20{\x20content:\x20\x22\x22;\x20}'),C['url']||D[V(0x8f)](V(0x108),'@bottom-center\x20{\x20content:\x20\x22\x22;\x20}'),C['pageNumber']||D[V(0x8f)]('@bottom-right\x20{\x20content:\x20\x22\x22;\x20}'),u['textContent']='@page\x20{\x20size:\x20'+z+V(0x78)+B(A['top'])+'mm\x20'+B(A[V(0x80)])+'mm\x20'+B(A['bottom'])+'mm\x20'+B(A[V(0xf7)])+V(0x12f)+D[V(0xb0)]('\x20')+'\x20}\x0a@media\x20print\x20{\x0a\x20\x20\x20\x20/*\x20Print\x20what\x20the\x20report\x20shows.\x20Browsers\x20drop\x20background\x20colours,\x20gradients\x20and\x20box\x0a\x20\x20\x20\x20\x20\x20\x20shadows\x20from\x20printed\x20output\x20unless\x20asked;\x20a\x20SCADA\x20report\x20is\x20colour\x20-\x20gauge\x20bars,\x20alarm\x0a\x20\x20\x20\x20\x20\x20\x20states,\x20status\x20lamps\x20-\x20so\x20dropping\x20them\x20changes\x20what\x20the\x20document\x20says.\x20\x22exact\x22\x20keeps\x0a\x20\x20\x20\x20\x20\x20\x20them\x20(owner,\x202026-09-27).\x20Inherited,\x20so\x20it\x20reaches\x20into\x20every\x20shadow\x20root.\x20*/\x0a\x20\x20\x20\x20*\x20{\x20-webkit-print-color-adjust:\x20exact\x20!important;\x20print-color-adjust:\x20exact\x20!important;\x20}\x0a\x20\x20\x20\x20html,\x20body\x20{\x20margin:\x200\x20!important;\x20padding:\x200\x20!important;\x20background:\x20#fff\x20!important;\x20height:\x20auto\x20!important;\x20overflow:\x20visible\x20!important;\x20}\x0a\x20\x20\x20\x20/*\x20everything\x20beside\x20the\x20report\x20viewer:\x20the\x20nav\x20shell,\x20dialogs,\x20anything\x20a\x20screen\x20mounted\x20*/\x0a\x20\x20\x20\x20body\x20>\x20*:not(iobroker-webui-report-viewer)\x20{\x20display:\x20none\x20!important;\x20}\x0a\x20\x20\x20\x20iobroker-webui-report-viewer\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20static\x20!important;\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200\x20!important;\x20top:\x200\x20!important;\x20width:\x20auto\x20!important;\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20}\x0a}',document[V(0xc1)][V(0x87)](u);}#d(l){const W=L;this.#r=Math['min'](0x4,Math[W(0x112)](0.1,l)),this['_paper'][W(0xd3)][W(0x88)]=W(0xa9)+this.#r+')',this['_paper']['style'][W(0x84)]=W(0x106)+this['_paper']['style'][W(0xd2)]+'\x20*\x20'+(this.#r-0x1)+')',this[W(0x9b)]['textContent']=Math[W(0x8e)](this.#r*0x64)+'%';}#c(){const X=L;let l=this['_getDomElement']('scroll')[X(0xc2)]-0x24,n=this['_paper']['getBoundingClientRect']()['width']/(this.#r||0x1);n>0x0&&this.#d(Math[X(0xb2)](0x1,l/n));}#_(){window['print']();}async #g(p){const Y=L;let q=p?.[Y(0x110)]??{},u=null;try{u=await g[Y(0xa8)]();}catch{}let z=u?.[Y(0x95)]??[],A=u?.['id']===Y(0x8b),B=this[Y(0xdd)]??this[Y(0xc6)]('bar');if(B){for(let C of B[Y(0xce)](Y(0xc3)))C[Y(0xe7)](Y(0xa5));for(let [D,E]of Object[Y(0xe4)](q)){if(!E)continue;let F=null;if(E[Y(0xaa)]===!0x1?F=Y(0xf1):!A&&Array[Y(0x77)](E['groups'])&&E['groups']['length']&&!E['groups'][Y(0x111)](G=>z['includes'](G))&&(F=E['action']===Y(0xf2)?Y(0xf2):'hide'),!!F){for(let G of B[Y(0xce)](Y(0xd9)+D+'\x22]'))G['setAttribute'](Y(0xa5),F);}}}}#S(){const Z=L;let l=this[Z(0xc6)](Z(0x92)),p=this['_getDomElement']('rangeFrom'),q=this['_getDomElement']('rangeTo'),s=this[Z(0xc6)]('btnApply');if(!l)return;let u=this['_getDomElement']('rangeBoxes'),z=A=>{const a0=Z;u&&(u[a0(0xb8)]=!A);};l[Z(0xdc)](Z(0x8d),()=>{const a1=Z;if(l[a1(0xf6)]===a1(0xcc)){let A=g['reportRange']??this.#b(a1(0x10b));p&&!p[a1(0xf6)]&&(p['value']=this.#m(A['start'])),q&&!q['value']&&(q[a1(0xf6)]=this.#m(A[a1(0xd7)])),z(!0x0);return;}z(!0x1),this.#f(l[a1(0xf6)]==='report'?null:this.#b(l['value']));}),s?.[Z(0xdc)](Z(0xed),()=>{const a2=Z;let A=p?.['value']?new Date(p[a2(0xf6)])['getTime']():NaN,B=q?.[a2(0xf6)]?new Date(q[a2(0xf6)])[a2(0x125)]():NaN;if(!Number['isFinite'](A)||!Number[a2(0xcd)](B)){this.#e(a2(0xab),!0x0);return;}if(A>=B){this.#e('The\x20start\x20has\x20to\x20be\x20before\x20the\x20end.',!0x0);return;}this.#f({'start':A,'end':B});});}#m(l){const a3=L;let n=new Date(l),p=q=>String(q)['padStart'](0x2,'0');return n[a3(0x12b)]()+'-'+p(n[a3(0x7b)]()+0x1)+'-'+p(n['getDate']())+'T'+p(n[a3(0x91)]())+':'+p(n[a3(0xf8)]());}#b(l){const a4=L;let n=new Date(),p=s=>new Date(s[a4(0x12b)](),s['getMonth'](),s['getDate']())['getTime'](),q=0x5265c00;switch(l){case'today':return{'start':p(n),'end':n[a4(0x125)]()};case'yesterday':return{'start':p(n)-q,'end':p(n)};case'7d':return{'start':n[a4(0x125)]()-0x7*q,'end':n['getTime']()};case a4(0xd6):return{'start':n['getTime']()-0x1e*q,'end':n['getTime']()};case a4(0x79):return{'start':new Date(n[a4(0x12b)](),n[a4(0x7b)](),0x1)[a4(0x125)](),'end':n[a4(0x125)]()};case a4(0xe8):return{'start':new Date(n[a4(0x12b)](),0x0,0x1)[a4(0x125)](),'end':n['getTime']()};default:return{'start':n[a4(0x125)]()-q,'end':n[a4(0x125)]()};}}async #f(l){const a5=L;g[a5(0x89)](l),this.#e(l?a5(0x12a)+new Date(l['start'])[a5(0x94)]()+a5(0xe9)+new Date(l[a5(0xd7)])[a5(0x94)]():a5(0xbd)),this.#a('report-range-changed',{'range':l}),await this.#s();}async #k(l){const a6=L;let p=(l?.[a6(0x119)]??'')['trim'](),q=(l?.[a6(0xa7)]??'')['trim']();if(this.#i&&(this.#i(),this.#i=null),this.#v=null,!p||!q)return;let s=C=>{const a7=a6;if(C==null||C==='')return null;if(typeof C=='number')return C;let D=Number(C);if(Number[a7(0xcd)](D)&&String(C)['trim']()!=='')return D;let E=Date['parse'](String(C));return Number['isFinite'](E)?E:null;},u={'start':null,'end':null},z=async C=>{const a8=a6;let {start:D,end:E}=u;if(D==null||E==null)return;if(!(D<E)){this.#e(a8(0xee),!0x0);return;}let F=g['reportRange'];if(F&&F[a8(0x127)]===D&&F[a8(0xd7)]===E)return;g[a8(0x89)]({'start':D,'end':E}),this.#e('Range\x20from\x20states:\x20'+new Date(D)['toLocaleString']()+a8(0xe9)+new Date(E)[a8(0x94)]());let G=this[a8(0xc6)]('rangeKind');G&&(G['value']=a8(0x8c));let H=this['_getDomElement']('rangeBoxes');H&&(H[a8(0xb8)]=!0x0),C&&await this.#s();},A=[],B=async(C,D)=>{const a9=a6;try{let F=await g['getState'](C);u[D]=s(F?.[a9(0xea)]);}catch{}let E=(G,H)=>{const aa=a9;u[D]=s(H?.['val']),z(!0x0)[aa(0xcf)](()=>{});};try{A['push']([C,E,await g['subscribeState'](C,E)]);}catch(G){console[a9(0x128)](a9(0x104)+C,G);}};await B(p,'start'),await B(q,a6(0xd7)),this.#v={'from':p,'to':q},this.#i=()=>{const ab=a6;for(let [C,D]of A)try{g[ab(0x133)](C,D);}catch{}},await z(!0x1);}#v=null;#i=null;['disconnectedCallback'](){const ac=L;super[ac(0x11d)]?.(),this.#i&&(this.#i(),this.#i=null),this.#h?.['dispose'](),this.#h=null;}['connectedCallback'](){const ad=L;super[ad(0x7d)]?.(),this[ad(0xdd)]&&this.#w();}#h=null;#w(){const ae=L;this.#h||(this.#h=g[ae(0x85)]['on'](async l=>{const af=ae;if(l?.['type']!==af(0x8c)||l['name']!==this.#t)return;let n;try{n=await g[af(0xaf)]('report',this.#t);}catch{return;}if(!n)return;let p=n['settings']??{};this['_paper']&&(this['_paper'][af(0xd3)][af(0x100)]=p[af(0x100)]??'210mm',this[af(0x7e)][af(0xd3)]['height']=p[af(0xd2)]??af(0x109)),this.#u(p[af(0x129)]??{},p[af(0x105)]),this.#y(p[af(0x9f)]),await this.#g(p['toolbox']),this.#c();}));}#y(l){const ag=L;let n=this['shadowRoot'];if(!n)return;let p=n[ag(0xe1)](ag(0xef));p||(p=document['createElement']('style'),p['id']='__reportTheme',n['appendChild'](p));let q=x(l),s=String(l??'')['trim']()===ag(0x103)?'':y(q['name'],g['config']?.[ag(0xf5)]);p[ag(0x7f)]=ag(0xc5)+s+'background:'+(q['paper']?'#fff':'var(--ui-page,\x20#fff)')+ag(0x114);}#o(l,n){const ah=L;let p=this['_getDomElement'](ah(0xe0));if(!p)return;if(l==null){p[ah(0xb8)]=!0x0;return;}p['hidden']=!0x1;let q=this[ah(0xc6)](ah(0xba)),s=this[ah(0xc6)](ah(0xa4));q&&(q['textContent']=l),s&&n!==void 0x0&&(s[ah(0x7f)]=n);}#T(){const ai=L;let l=this['_getDomElement'](ai(0x122));l&&(l[ai(0x7f)]=''),this.#p=new Set();}#p=new Set();#D(l){const aj=L;let n=this['_getDomElement'](aj(0x122));if(!n||this.#p['has'](l))return;this.#p['add'](l);let p=new Date()['toLocaleTimeString']();n['textContent']+=p+'\x20\x20'+l+'\x0a',n['scrollTop']=n['scrollHeight'];}#$(){let l=Date['now'](),n=0xbb8,p=()=>{const ak=c;let u=g['outstandingFetches']();if(!u[ak(0x9c)]){this.#o('Rendering…','');return;}let z=u['filter'](D=>D['kind']===ak(0x81))['length'],A=u[ak(0x9c)]-z,B=[];A&&B[ak(0x8f)](A+'\x20value'+(A>0x1?'s':'')),z&&B[ak(0x8f)](z+'\x20history\x20quer'+(z>0x1?ak(0xb7):'y'));let C=Math['round']((Date['now']()-l)/0x3e8);this.#o('Loading\x20data…',B['join']('\x20and\x20')+ak(0xfd)+C+'s');for(let D of u)D[ak(0x7c)]>n&&this.#D(ak(0x102)+D['id']+(D['kind']==='history'?ak(0xde):''));};p();let q=setInterval(p,0x1f4);return()=>clearInterval(q);}async #E(p,q,u=0x1d4c0){const am=L;let z=g['namespace']+'.'+f['reportStateBase'](q,p),A=async E=>{const al=c;try{return(await g[al(0xf3)][al(0xa3)](z+'.'+E))?.[al(0xea)];}catch{return;}},B=Date['now'](),C=await A(am(0x115)),D=!0x1;for(;Date['now']()-B<u;){await new Promise(H=>setTimeout(H,0x190));let [E,F]=await Promise['all']([A(am(0xbb)),A('lastRun')]),G=F!=null&&F!==C;if(E===am(0x97)){D=!0x0,this.#o('Generating\x20on\x20the\x20server…',am(0x126));continue;}if(G||D){if(E==='ok')return{'ok':!0x0,'file':await A(am(0xd4))};if(E==='error')return{'ok':!0x1,'error':await A('lastError')};}}return{'ok':!0x1,'error':'the\x20server\x20did\x20not\x20start\x20the\x20run\x20—\x20you\x20may\x20not\x20be\x20permitted\x20to\x20generate\x20on\x20the\x20server'};}#e(l,n){const an=L;this[an(0x98)]&&(this[an(0x98)]['textContent']=l,this[an(0x98)]['classList']['toggle']('err',!!n));}async #x(l='html',p=L(0x12d)){const ao=L;let q=[ao(0xfe),ao(0x9a)][ao(0xe2)](z=>this['_getDomElement'](z))[ao(0xe6)](Boolean);q['forEach'](z=>z['disabled']=!0x0);let s={'name':this.#t,'format':l,'deliver':p,'range':g[ao(0xa0)]??void 0x0,'project':g[ao(0x82)]},u={'success':!0x1,'format':l,'file':null,'pages':null,'range':void 0x0,'error':null};try{if(this.#l(ao(0xa2),s)===!0x1){this.#e(ao(0xdb));return;}if(this.#a('report-before-generate',s,!0x0)['defaultPrevented']){this.#e('Cancelled.');return;}if(u[ao(0xe5)]=s['format'],u['range']=s['range'],this.#n[ao(0x9c)]){let A=this.#n['slice'](0x0,0x3)['map'](B=>B['id'])[ao(0xb0)](',\x20');throw new Error('no\x20value\x20from:\x20'+A+(this.#n['length']>0x3?'\x20(+'+(this.#n[ao(0x9c)]-0x3)+'\x20more)':''));}this.#e(ao(0x131)),this.#o(s[ao(0xdf)]===ao(0x121)?'Generating\x20on\x20the\x20server…':ao(0x131),'The\x20server\x20renders\x20the\x20report\x20and\x20returns\x20the\x20file.');let z=await g['generateReport'](s[ao(0x83)],{'project':s[ao(0x11c)],'format':s['format'],'range':s[ao(0xff)],'deliver':s[ao(0xdf)],'timeoutMs':this[ao(0xca)],'theme':document['documentElement']['dataset'][ao(0xc9)]||void 0x0});if(z['viaTrigger']){let B=await this.#E(s['name'],s[ao(0x11c)]);if(!B['ok'])throw new Error(B['error']||ao(0xad));u={...u,'success':!0x0,'file':B['file']??null},this.#e(ao(0x10d)+(B[ao(0x121)]??''));}else{u={...u,'success':!0x0,'file':z[ao(0x121)]??null,'pages':z['pages']??null};let C=z[ao(0xc0)]?.['length']?ao(0xf0)+z['placeholders']['length']+ao(0xd5):'';this.#e(ao(0x118)+(z[ao(0x121)]??'')+C);}}catch(D){u['error']=D?.[ao(0xd1)]??String(D),this.#e('Not\x20generated\x20—\x20'+u['error'],!0x0);}finally{q[ao(0x10e)](E=>E[ao(0x9e)]=!0x1),this.#o(null);}this.#a(u[ao(0x10c)]?ao(0x86):'report-generate-failed',u);try{await this.#l(ao(0x99),s,u);}catch{}}};customElements[L(0x11b)]('iobroker-webui-report-viewer')||customElements[L(0x96)](L(0x113),b);export{b as ReportViewer};