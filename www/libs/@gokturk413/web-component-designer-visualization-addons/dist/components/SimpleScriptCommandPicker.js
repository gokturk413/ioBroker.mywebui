function a(){const w=['\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','selectedType','disabled','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','5AjGqif','title','3cfBZVO','15813yAoDnt','<div\x20class=\x22note\x22>','root','map','_tree','4576344swlIzh','6267ZvCAwi','event','note','dropEffect','1518414qNFrGo','type','\x0a\x20\x20\x20\x20','emit','_descriptionDiv','copy','_getDomElement','object','330bSUxNo','shadowRoot','node','filterNodes','commandTypeChosen','value','isNew','test','addBtn','nodeElem','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','addClicked','_addBtn','closeRequested','filter','definitions','_renderDescription','5340FFvHSQ','effectAllowed','1979064cwiqZf','9643221CuKIFq','_typeInfo','_title','\x0a\x20\x20\x20\x20\x20\x20','hide','adoptedStyleSheets','_filter','_descriptions','oncontextmenu','node-projects-visualization-simple-script-command-picker','_bindingsParse','729619laKdia','_restoreCachedInititalValues'];a=function(){return w;};return a();}const j=b;function b(c,d){c=c-0x1ae;const e=a();let f=e[c];return f;}(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x1d6))/0x1*(parseInt(i(0x1e2))/0x2)+-parseInt(i(0x1cf))/0x3*(-parseInt(i(0x1bb))/0x4)+parseInt(i(0x1cd))/0x5*(parseInt(i(0x1da))/0x6)+-parseInt(i(0x1bc))/0x7+-parseInt(i(0x1d5))/0x8+parseInt(i(0x1d0))/0x9*(parseInt(i(0x1b9))/0xa)+parseInt(i(0x1c7))/0xb;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xcc4cb));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['is']=j(0x1c5);[j(0x1be)];get[j(0x1ce)](){return this['_title'];}set['title'](d){const k=j;this[k(0x1be)]=d;}['selectedType'];[j(0x1e6)]=new TypedEvent();[j(0x1b5)]=new TypedEvent();[j(0x1d4)];['_filter'];['_descriptionDiv'];[j(0x1b4)];[j(0x1bd)];['_descriptions'];constructor(){const l=j;super(),this[l(0x1c8)](),this[l(0x1e3)][l(0x1c1)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this[l(0x1de)]=this['_getDomElement']('description'),this['_addBtn']=this[l(0x1e0)](l(0x1b0)),this['_filter']=this[l(0x1e0)]('filter'),this['_filter']['onkeyup']=()=>{const m=l,d=this[m(0x1c2)][m(0x1e7)];this[m(0x1d4)][m(0x1e5)](e=>new RegExp(d,'i')[m(0x1af)](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this[l(0x1e0)]('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x1c0),'highlight':!![]},'activate':d=>{const n=l;this['selectedType']=d['node']['title'],this['_addBtn'][n(0x1cb)]=![],this['_renderDescription'](d[n(0x1e4)][n(0x1ce)]);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0x1e4)][o(0x1ce)],this[o(0x1e6)]['emit'](),![];},'render':d=>{const p=l;d[p(0x1ae)]&&(d[p(0x1b1)][p(0x1c4)]=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d[q(0x1d7)]['dataTransfer'][q(0x1ba)]=q(0x1df),d['event']['dataTransfer'][q(0x1d9)]=q(0x1df),!![];}}});}async['ready'](){const r=j;this['_parseAttributesToProperties'](),this[r(0x1c6)](null,!![]),this['_assignEvents']();}[j(0x1b3)](){const s=j;if(this[s(0x1ca)])this['commandTypeChosen'][s(0x1dd)]();}['closeClicked'](){const t=j;this[t(0x1b5)]['emit']();}[j(0x1b8)](d){const u=j,e=this[u(0x1c3)]?.[d];if(e){this[u(0x1de)]['innerHTML']=u(0x1c9)+d+'<span\x20class=\x22hint\x22>'+e['description']+u(0x1b2)+highlightJson(e['example'])+u(0x1cc)+(e[u(0x1d8)]?u(0x1d1)+e['note']+'</div>':'')+u(0x1bf);return;}const f=this['_typeInfo']?.[u(0x1b7)]?.[d]?.['description'];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?u(0x1d1)+f+'</div>':'')+u(0x1dc);}['loadCommands'](d,e){const v=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object['keys'](d['definitions'])[v(0x1b6)](g=>d[v(0x1b7)][g][v(0x1db)]===v(0x1e1)&&g!=='ScriptCommands');this['_tree'][v(0x1d2)]['addChildren'](f[v(0x1d3)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);