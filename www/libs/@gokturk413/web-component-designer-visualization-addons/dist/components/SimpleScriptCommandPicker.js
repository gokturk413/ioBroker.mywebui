const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0xbe))/0x1*(parseInt(i(0xb2))/0x2)+parseInt(i(0xd4))/0x3+parseInt(i(0xc4))/0x4+-parseInt(i(0xb5))/0x5+parseInt(i(0xcd))/0x6+parseInt(i(0xca))/0x7+-parseInt(i(0xdd))/0x8*(parseInt(i(0xd6))/0x9);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x3adb4));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
            display: block;
            background: white;
        }

        .root {
            width: calc(100% - 8px);
            height: calc(100% - 8px);
            margin: 4px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }

        #filter {
            width: 100%;
            height: 26px;
            box-sizing: border-box;
        }

        .content {
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
        }

        #commandList {
            width: 40%;
            overflow: auto;
            box-sizing: border-box;
        }

        #description {
            width: 60%;
        }

        .detail {
            padding: 8px;
            overflow: auto;
            box-sizing: border-box;
        }

        .cmd-title {
            font-size: 14px;
            font-weight: bold;
            color: #24405c;
            border-bottom: 2px solid #2c6e9b;
            padding-bottom: 4px;
            margin-bottom: 6px;
        }

        .cmd-title .hint {
            font-size: 11px;
            font-weight: normal;
            color: #808080;
            margin-left: 6px;
        }

        .snippet {
            font-family: Consolas, "Courier New", monospace;
            font-size: 11px;
            background: #f6f8fa;
            color: #24292e;
            border: 1px solid #e1e4e8;
            border-radius: 4px;
            padding: 6px 10px;
            white-space: pre;
            overflow-x: auto;
            line-height: 1.5;
        }

        .cs-key  { color: #22863a; }
        .cs-str  { color: #032f62; }
        .cs-bool { color: #d73a49; }
        .cs-num  { color: #e36209; }

        .note {
            font-size: 11px;
            color: #666;
            font-style: italic;
            margin-top: 6px;
        }

        .toolbar {
            display: flex;
            align-items: center;
            gap: 8px;
            box-sizing: border-box;
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            padding: 4px 8px;
            border-top: 1px solid #ccc;
            background-color: rgb(230, 230, 230);
        }

        .toolbar button {
            box-sizing: border-box;
            padding: 6px 16px;
            border-radius: 4px;
            border: 1px solid #b0b0b0;
            background: white;
            font-size: 12px;
            cursor: pointer;
        }

        .toolbar button:hover:not(:disabled) {
            background: #f0f0f0;
            border-color: #909090;
        }

        .toolbar button:active:not(:disabled) {
            background: #e2e2e2;
        }

        .toolbar button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .toolbar button.primary {
            background: #2c6e9b;
            border-color: #2c6e9b;
            color: white;
        }

        .toolbar button.primary:hover:not(:disabled) {
            background: #255d83;
            border-color: #255d83;
        }

        .toolbar button.primary:active:not(:disabled) {
            background: #1e4d6b;
        }

        .toolbar .spacer {
            flex: 1 1 auto;
        }

        .toolbar .hint {
            font-size: 11px;
            font-style: italic;
            color: #666;
        }
    `;static [j(0xb9)]=html`
        <div class="root">
            <input id="filter" placeholder="Filter..." autocomplete="off">
            <div class="content">
                <div id="commandList"></div>
                <div id="description" class="detail"></div>
            </div>
            <div class="toolbar">
                <button id="addBtn" class="primary" disabled @click="[[this.addClicked()]]">Add</button>
                <span class="hint">or drag a command into the script list</span>
                <span class="spacer"></span>
                <button id="closeBtn" @click="[[this.closeClicked()]]">Close</button>
            </div>
        </div>
    `;static ['is']='node-projects-visualization-simple-script-command-picker';[j(0xc2)];get['title'](){const k=j;return this[k(0xc2)];}set['title'](d){this['_title']=d;}['selectedType'];[j(0xaa)]=new TypedEvent();['closeRequested']=new TypedEvent();[j(0xce)];[j(0xdc)];[j(0xc8)];['_addBtn'];[j(0xc1)];['_descriptions'];constructor(){const l=j;super(),this[l(0xb7)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0xac)]],this[l(0xc8)]=this['_getDomElement'](l(0xd7)),this[l(0xd3)]=this['_getDomElement'](l(0xcf)),this[l(0xdc)]=this[l(0xbd)]('filter'),this[l(0xdc)]['onkeyup']=()=>{const m=l,d=this[m(0xdc)][m(0xc5)];this[m(0xce)][m(0xb3)](e=>new RegExp(d,'i')['test'](e[m(0xbc)]),{});},this[l(0xce)]=new Wunderbaum({...defaultOptions,'element':this[l(0xbd)]('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this[n(0xab)]=d[n(0xbb)]['title'],this[n(0xd3)]['disabled']=![],this[n(0xde)](d[n(0xbb)]['title']);},'dblclick':d=>{const o=l;return this['selectedType']=d['node']['title'],this[o(0xaa)][o(0xd9)](),![];},'render':d=>{const p=l;d['isNew']&&(d[p(0xc0)][p(0xaf)]=f=>{const q=p;return f[q(0xbf)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=l;return d['event'][r(0xda)][r(0xa7)]=r(0xad),d['event']['dataTransfer']['dropEffect']=r(0xad),!![];}}});}async[j(0xb8)](){const s=j;this[s(0xcb)](),this['_bindingsParse'](null,!![]),this[s(0xa9)]();}['addClicked'](){const t=j;if(this[t(0xab)])this[t(0xaa)][t(0xd9)]();}[j(0xb0)](){const u=j;this[u(0xdb)][u(0xd9)]();}[j(0xde)](d){const v=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv'][v(0xd5)]=v(0xb4)+d+'<span\x20class=\x22hint\x22>'+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e[v(0xb6)])+v(0xd8)+(e[v(0xc9)]?v(0xd1)+e['note']+v(0xc7):'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[v(0xc1)]?.[v(0xba)]?.[d]?.['description'];this[v(0xc8)][v(0xd5)]=v(0xd0)+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?v(0xd1)+f+v(0xc7):'')+v(0xd2);}['loadCommands'](d,e){const w=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object[w(0xc6)](d['definitions'])[w(0xc3)](g=>d['definitions'][g][w(0xb1)]==='object'&&g!==w(0xa8));this['_tree']['root']['addChildren'](f[w(0xcc)](g=>({'title':g})));}}function b(c,d){c=c-0xa7;const e=a();let f=e[c];return f;}customElements[j(0xae)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);function a(){const x=['define','oncontextmenu','closeClicked','type','2GfAAlb','filterNodes','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','1609645lTZMpo','example','_restoreCachedInititalValues','ready','template','definitions','node','title','_getDomElement','28309vxgReo','preventDefault','nodeElem','_typeInfo','_title','filter','466232WQvHdS','value','keys','</div>','_descriptionDiv','note','1792315BwQqww','_parseAttributesToProperties','map','648006ZAmyDk','_tree','addBtn','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','<div\x20class=\x22note\x22>','\x0a\x20\x20\x20\x20','_addBtn','980958ZRKcxV','innerHTML','973242TmkyCC','description','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','emit','dataTransfer','closeRequested','_filter','16nmWLhg','_renderDescription','effectAllowed','ScriptCommands','_assignEvents','commandTypeChosen','selectedType','style','copy'];a=function(){return x;};return a();}