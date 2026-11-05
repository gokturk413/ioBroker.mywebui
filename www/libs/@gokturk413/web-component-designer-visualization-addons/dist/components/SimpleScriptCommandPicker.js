const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x147))/0x1+-parseInt(i(0x145))/0x2+-parseInt(i(0x15f))/0x3*(-parseInt(i(0x15c))/0x4)+-parseInt(i(0x13f))/0x5+-parseInt(i(0x14e))/0x6+parseInt(i(0x154))/0x7*(parseInt(i(0x151))/0x8)+-parseInt(i(0x164))/0x9*(-parseInt(i(0x148))/0xa);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xddc4b));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';function b(c,d){c=c-0x13d;const e=a();let f=e[c];return f;}import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
            display: block;
            background: light-dark(white, #252b38);
            color: light-dark(#24292e, #e2e6ec);
            --wb-background-color: transparent;
            --wb-node-text-color: light-dark(#24292e, #e2e6ec);
            --wb-alternate-row-color: transparent;
            --wb-hover-color: light-dark(#e8f0fa, #343c4d);
            --wb-active-color: light-dark(#cfe1f5, #2c4a6b);
            --wb-active-hover-color: light-dark(#bcd5f0, #355a80);
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
            background: light-dark(white, #1d2230);
            color: inherit;
            border: 1px solid light-dark(#b0b0b0, #3b4250);
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
            color: light-dark(#24405c, #9ccaff);
            border-bottom: 2px solid light-dark(#2c6e9b, #4f8fc0);
            padding-bottom: 4px;
            margin-bottom: 6px;
        }

        .cmd-title .hint {
            font-size: 11px;
            font-weight: normal;
            color: light-dark(#808080, #9aa3b0);
            margin-left: 6px;
        }

        .snippet {
            font-family: Consolas, "Courier New", monospace;
            font-size: 11px;
            background: light-dark(#f6f8fa, #1d2230);
            color: light-dark(#24292e, #e2e6ec);
            border: 1px solid light-dark(#e1e4e8, #3b4250);
            border-radius: 4px;
            padding: 6px 10px;
            white-space: pre;
            overflow-x: auto;
            line-height: 1.5;
        }

        .cs-key  { color: light-dark(#22863a, #7ee787); }
        .cs-str  { color: light-dark(#032f62, #a5d6ff); }
        .cs-bool { color: light-dark(#d73a49, #ff7b72); }
        .cs-num  { color: light-dark(#e36209, #ffa657); }

        .note {
            font-size: 11px;
            color: light-dark(#666, #9aa3b0);
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
            border-top: 1px solid light-dark(#ccc, #3b4250);
            background-color: light-dark(rgb(230, 230, 230), #1d2230);
        }

        .toolbar button {
            box-sizing: border-box;
            padding: 6px 16px;
            border-radius: 4px;
            border: 1px solid light-dark(#b0b0b0, #3b4250);
            background: light-dark(white, #2c3342);
            color: inherit;
            font-size: 12px;
            cursor: pointer;
        }

        .toolbar button:hover:not(:disabled) {
            background: light-dark(#f0f0f0, #343c4d);
            border-color: light-dark(#909090, #5a6375);
        }

        .toolbar button:active:not(:disabled) {
            background: light-dark(#e2e2e2, #3b4456);
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
            color: light-dark(#666, #9aa3b0);
        }
    `;static [j(0x140)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';[j(0x16e)];get['title'](){const k=j;return this[k(0x16e)];}set['title'](d){this['_title']=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();[j(0x163)]=new TypedEvent();['_tree'];[j(0x170)];['_descriptionDiv'];[j(0x166)];[j(0x169)];[j(0x13e)];constructor(){const l=j;super(),this[l(0x157)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this[l(0x168)]=this[l(0x14b)]('description'),this[l(0x166)]=this[l(0x14b)]('addBtn'),this[l(0x170)]=this[l(0x14b)]('filter'),this[l(0x170)][l(0x161)]=()=>{const m=l,d=this['_filter'][m(0x16c)];this['_tree'][m(0x14a)](e=>new RegExp(d,'i')[m(0x16f)](e[m(0x16a)]),{});},this[l(0x156)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x165)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this['selectedType']=d[n(0x141)]['title'],this['_addBtn']['disabled']=![],this[n(0x15a)](d[n(0x141)][n(0x16a)]);},'dblclick':d=>{return this['selectedType']=d['node']['title'],this['commandTypeChosen']['emit'](),![];},'render':d=>{const o=l;d['isNew']&&(d[o(0x14c)]['oncontextmenu']=f=>{const p=o;return f[p(0x160)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d[q(0x162)]['dataTransfer']['effectAllowed']='copy',d['event'][q(0x146)][q(0x159)]='copy',!![];}}});}async[j(0x167)](){const r=j;this[r(0x153)](),this[r(0x143)](null,!![]),this[r(0x144)]();}[j(0x15e)](){const s=j;if(this[s(0x15d)])this['commandTypeChosen'][s(0x152)]();}['closeClicked'](){const t=j;this[t(0x163)][t(0x152)]();}[j(0x15a)](d){const u=j,e=this[u(0x13e)]?.[d];if(e){this[u(0x168)]['innerHTML']=u(0x158)+d+u(0x142)+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?'<div\x20class=\x22note\x22>'+e['note']+'</div>':'')+u(0x150);return;}const f=this[u(0x169)]?.['definitions']?.[d]?.['description'];this[u(0x168)][u(0x14f)]='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+u(0x13d)+(f?u(0x149)+f+'</div>':'')+'\x0a\x20\x20\x20\x20';}[j(0x14d)](d,e){const v=j;this['_typeInfo']=d,this[v(0x13e)]=e??{};const f=Object['keys'](d[v(0x16d)])['filter'](g=>d['definitions'][g][v(0x155)]==='object'&&g!==v(0x16b));this[v(0x156)][v(0x15b)]['addChildren'](f['map'](g=>({'title':g})));}}function a(){const w=['test','_filter','</div>\x0a\x20\x20\x20\x20\x20\x20','_descriptions','7254380EvyyPT','template','node','<span\x20class=\x22hint\x22>','_bindingsParse','_assignEvents','2860774rxEDwE','dataTransfer','1694787nQerwM','54430eyLHfO','<div\x20class=\x22note\x22>','filterNodes','_getDomElement','nodeElem','loadCommands','10007952vSxlKb','innerHTML','\x0a\x20\x20\x20\x20\x20\x20','16JbbWJT','emit','_parseAttributesToProperties','4390050oUsJBL','type','_tree','_restoreCachedInititalValues','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','dropEffect','_renderDescription','root','1697524eyupwK','selectedType','addClicked','12JRuYoy','preventDefault','onkeyup','event','closeRequested','1341lzRPZk','commandList','_addBtn','ready','_descriptionDiv','_typeInfo','title','ScriptCommands','value','definitions','_title'];a=function(){return w;};return a();}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);