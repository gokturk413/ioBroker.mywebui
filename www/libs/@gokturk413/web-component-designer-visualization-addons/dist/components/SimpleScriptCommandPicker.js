const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x1a6))/0x1+parseInt(i(0x1a2))/0x2+parseInt(i(0x1b8))/0x3+-parseInt(i(0x1b6))/0x4+-parseInt(i(0x1b9))/0x5+parseInt(i(0x1c6))/0x6*(parseInt(i(0x1ca))/0x7)+-parseInt(i(0x1c2))/0x8;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x2b442));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a2;const e=a();let f=e[c];return f;}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};function a(){const v=['\x0a\x20\x20\x20\x20\x20\x20','_title','style','_typeInfo','5510144BlsvBI','innerHTML','_renderDescription','node-projects-visualization-simple-script-command-picker','36ciqdDc','title','closeClicked','dropEffect','337897gwIvpY','addChildren','commandList','node','\x0a\x20\x20\x20\x20','keys','_tree','oncontextmenu','465502IrNijJ','_assignEvents','note','_getDomElement','283221RqeONn','selectedType','_bindingsParse','addBtn','filter','<div\x20class=\x22note\x22>','closeRequested','onkeyup','_filter','filterNodes','event','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','<span\x20class=\x22hint\x22>','adoptedStyleSheets','ready','description','340476pvsqHY','_restoreCachedInititalValues','837318ouGbIX','667995CijKIp','commandTypeChosen','_descriptions','map','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'];a=function(){return v;};return a();}import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x1c0)]=css`
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
    `;static ['is']=j(0x1c5);[j(0x1bf)];get[j(0x1c7)](){return this['_title'];}set[j(0x1c7)](d){this['_title']=d;}['selectedType'];[j(0x1ba)]=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];[j(0x1ae)];['_descriptionDiv'];['_addBtn'];['_typeInfo'];[j(0x1bb)];constructor(){const k=j;super(),this[k(0x1b7)](),this['shadowRoot'][k(0x1b3)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this[k(0x1a5)](k(0x1b5)),this['_addBtn']=this['_getDomElement'](k(0x1a9)),this['_filter']=this[k(0x1a5)](k(0x1aa)),this['_filter'][k(0x1ad)]=()=>{const l=k,d=this[l(0x1ae)]['value'];this[l(0x1d0)][l(0x1af)](e=>new RegExp(d,'i')['test'](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this[k(0x1a5)](k(0x1cc)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const m=k;this[m(0x1a7)]=d['node'][m(0x1c7)],this['_addBtn']['disabled']=![],this['_renderDescription'](d[m(0x1cd)]['title']);},'dblclick':d=>{const n=k;return this['selectedType']=d['node']['title'],this[n(0x1ba)]['emit'](),![];},'render':d=>{const o=k;d['isNew']&&(d['nodeElem'][o(0x1d1)]=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const p=k;return d[p(0x1b0)]['dataTransfer']['effectAllowed']='copy',d[p(0x1b0)]['dataTransfer'][p(0x1c9)]='copy',!![];}}});}async[j(0x1b4)](){const q=j;this['_parseAttributesToProperties'](),this[q(0x1a8)](null,!![]),this[q(0x1a3)]();}['addClicked'](){const r=j;if(this['selectedType'])this[r(0x1ba)]['emit']();}[j(0x1c8)](){const s=j;this[s(0x1ac)]['emit']();}[j(0x1c4)](d){const t=j,e=this[t(0x1bb)]?.[d];if(e){this['_descriptionDiv'][t(0x1c3)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+t(0x1b2)+e['description']+t(0x1bd)+highlightJson(e['example'])+t(0x1b1)+(e['note']?'<div\x20class=\x22note\x22>'+e[t(0x1a4)]+'</div>':'')+t(0x1be);return;}const f=this[t(0x1c1)]?.['definitions']?.[d]?.['description'];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?t(0x1ab)+f+'</div>':'')+t(0x1ce);}['loadCommands'](d,e){const u=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object[u(0x1cf)](d['definitions'])['filter'](g=>d['definitions'][g]['type']==='object'&&g!=='ScriptCommands');this['_tree']['root'][u(0x1cb)](f[u(0x1bc)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);