const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x108))/0x1+-parseInt(i(0xfa))/0x2+-parseInt(i(0x11f))/0x3*(-parseInt(i(0xf3))/0x4)+-parseInt(i(0x11e))/0x5*(-parseInt(i(0x105))/0x6)+parseInt(i(0x120))/0x7*(-parseInt(i(0x10f))/0x8)+parseInt(i(0xf1))/0x9*(-parseInt(i(0xef))/0xa)+parseInt(i(0xf2))/0xb;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x1ad87));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';function a(){const w=['5912874vUyTiI','1588xcdXaz','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','addBtn','dataTransfer','emit','selectedType','dropEffect','316266mLbtyJ','onkeyup','define','innerHTML','ScriptCommands','_descriptionDiv','copy','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','_assignEvents','root','loadCommands','30cwrgOV','_tree','style','117930WUBaQE','note','<div\x20class=\x22note\x22>','definitions','hide','filter','node','8EHWVrS','filterNodes','_addBtn','commandList','_descriptions','_getDomElement','addChildren','_title','title','description','</div>','value','_typeInfo','closeRequested','_renderDescription','24715Cjxzyb','327EHqRys','953869GyZDhg','832330Rbeeaz','addClicked','9LnfLqm'];a=function(){return w;};return a();}import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['template']=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get[j(0x117)](){const k=j;return this[k(0x116)];}set[j(0x117)](d){const l=j;this[l(0x116)]=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];['_filter'];['_descriptionDiv'];['_addBtn'];[j(0x11b)];[j(0x113)];constructor(){const m=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[m(0x107)]],this[m(0xff)]=this[m(0x114)](m(0x118)),this['_addBtn']=this[m(0x114)](m(0xf5)),this['_filter']=this['_getDomElement'](m(0x10d)),this['_filter'][m(0xfb)]=()=>{const n=m,d=this['_filter'][n(0x11a)];this[n(0x106)][n(0x110)](e=>new RegExp(d,'i')['test'](e[n(0x117)]),{});},this[m(0x106)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](m(0x112)),'icon':![],'filter':{'autoExpand':!![],'mode':m(0x10c),'highlight':!![]},'activate':d=>{const o=m;this['selectedType']=d[o(0x10e)]['title'],this[o(0x111)]['disabled']=![],this[o(0x11d)](d['node'][o(0x117)]);},'dblclick':d=>{const p=m;return this[p(0xf8)]=d['node']['title'],this['commandTypeChosen'][p(0xf7)](),![];},'render':d=>{d['isNew']&&(d['nodeElem']['oncontextmenu']=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=m;return d['event'][q(0xf6)]['effectAllowed']=q(0x100),d['event'][q(0xf6)][q(0xf9)]='copy',!![];}}});}async['ready'](){const r=j;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[r(0x102)]();}[j(0xf0)](){const s=j;if(this[s(0xf8)])this['commandTypeChosen']['emit']();}['closeClicked'](){const t=j;this[t(0x11c)][t(0xf7)]();}['_renderDescription'](d){const u=j,e=this[u(0x113)]?.[d];if(e){this['_descriptionDiv'][u(0xfd)]=u(0xf4)+d+'<span\x20class=\x22hint\x22>'+e[u(0x118)]+u(0x101)+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e[u(0x109)]?u(0x10a)+e[u(0x109)]+u(0x119):'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[u(0x11b)]?.[u(0x10b)]?.[d]?.[u(0x118)];this[u(0xff)]['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?u(0x10a)+f+u(0x119):'')+'\x0a\x20\x20\x20\x20';}[j(0x104)](d,e){const v=j;this[v(0x11b)]=d,this[v(0x113)]=e??{};const f=Object['keys'](d['definitions'])['filter'](g=>d['definitions'][g]['type']==='object'&&g!==v(0xfe));this[v(0x106)][v(0x103)][v(0x115)](f['map'](g=>({'title':g})));}}customElements[j(0xfc)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);