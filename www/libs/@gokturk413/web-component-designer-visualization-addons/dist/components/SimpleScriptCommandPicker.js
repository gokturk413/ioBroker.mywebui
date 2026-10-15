const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x108))/0x1*(-parseInt(i(0x116))/0x2)+parseInt(i(0x126))/0x3+-parseInt(i(0x123))/0x4+parseInt(i(0x104))/0x5*(parseInt(i(0xf4))/0x6)+parseInt(i(0x110))/0x7+-parseInt(i(0x10d))/0x8+parseInt(i(0xfe))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x2cbf1));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xef;const e=a();let f=e[c];return f;}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x11b)]=css`
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
    `;static [j(0x117)]=html`
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
    `;static ['is']=j(0x119);[j(0xf3)];get[j(0xff)](){const k=j;return this[k(0xf3)];}set[j(0xff)](d){this['_title']=d;}[j(0x114)];[j(0xf8)]=new TypedEvent();['closeRequested']=new TypedEvent();[j(0xf1)];[j(0x121)];[j(0x112)];[j(0x100)];[j(0xfa)];['_descriptions'];constructor(){const l=j;super(),this[l(0xfc)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0x11b)]],this['_descriptionDiv']=this[l(0x109)](l(0x118)),this[l(0x100)]=this[l(0x109)]('addBtn'),this[l(0x121)]=this['_getDomElement']('filter'),this['_filter'][l(0x10f)]=()=>{const m=l,d=this['_filter']['value'];this[m(0xf1)][m(0x111)](e=>new RegExp(d,'i')['test'](e['title']),{});},this[l(0xf1)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement']('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':l(0xf6),'highlight':!![]},'activate':d=>{const n=l;this[n(0x114)]=d[n(0x103)]['title'],this[n(0x100)]['disabled']=![],this[n(0x101)](d['node'][n(0xff)]);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0x103)][o(0xff)],this[o(0xf8)]['emit'](),![];},'render':d=>{const p=l;d[p(0x11c)]&&(d['nodeElem']['oncontextmenu']=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d['event'][q(0x10a)][q(0xf0)]=q(0xfb),d['event'][q(0x10a)][q(0xf9)]='copy',!![];}}});}async['ready'](){const r=j;this[r(0x11d)](),this[r(0x122)](null,!![]),this[r(0x113)]();}[j(0x11a)](){const s=j;if(this[s(0x114)])this['commandTypeChosen']['emit']();}['closeClicked'](){const t=j;this['closeRequested'][t(0x107)]();}[j(0x101)](d){const u=j,e=this[u(0x115)]?.[d];if(e){this[u(0x112)]['innerHTML']=u(0x11e)+d+u(0x102)+e[u(0x118)]+u(0x124)+highlightJson(e[u(0xf5)])+u(0x106)+(e['note']?u(0x10e)+e[u(0x11f)]+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[u(0xfa)]?.['definitions']?.[d]?.[u(0x118)];this[u(0x112)]['innerHTML']=u(0xf7)+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+u(0x105):'')+'\x0a\x20\x20\x20\x20';}[j(0x120)](d,e){const v=j;this[v(0xfa)]=d,this['_descriptions']=e??{};const f=Object[v(0xf2)](d[v(0xef)])['filter'](g=>d['definitions'][g][v(0x10b)]===v(0x10c)&&g!=='ScriptCommands');this[v(0xf1)][v(0xfd)]['addChildren'](f['map'](g=>({'title':g})));}}customElements[j(0x125)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);function a(){const w=['54052CrGCAy','_getDomElement','dataTransfer','type','object','1031808AJUBAz','<div\x20class=\x22note\x22>','onkeyup','1585199sfpgpS','filterNodes','_descriptionDiv','_assignEvents','selectedType','_descriptions','10UXbCwl','template','description','node-projects-visualization-simple-script-command-picker','addClicked','style','isNew','_parseAttributesToProperties','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','note','loadCommands','_filter','_bindingsParse','1235112FxVuXF','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','define','503439mCmfaW','definitions','effectAllowed','_tree','keys','_title','30ySPZSW','example','hide','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','commandTypeChosen','dropEffect','_typeInfo','copy','_restoreCachedInititalValues','root','3409560szuBhE','title','_addBtn','_renderDescription','<span\x20class=\x22hint\x22>','node','118185TeWKeN','</div>','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','emit'];a=function(){return w;};return a();}