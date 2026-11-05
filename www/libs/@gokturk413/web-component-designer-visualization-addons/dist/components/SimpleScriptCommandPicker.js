const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x128))/0x1+-parseInt(i(0x14e))/0x2+-parseInt(i(0x129))/0x3*(-parseInt(i(0x135))/0x4)+-parseInt(i(0x13d))/0x5+-parseInt(i(0x152))/0x6*(-parseInt(i(0x143))/0x7)+-parseInt(i(0x149))/0x8+parseInt(i(0x142))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x7adc0));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';function a(){const v=['1369560komnTx','event','_title','keys','title','736982vsEkuL','_addBtn','selectedType','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','5262666mFgKEq','_descriptionDiv','description','type','_descriptions','loadCommands','isNew','</div>\x0a\x20\x20\x20\x20\x20\x20','commandTypeChosen','_tree','object','filter','46734CyGKux','39891sjbepC','map','disabled','adoptedStyleSheets','commandList','_getDomElement','filterNodes','onkeyup','test','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','dropEffect','_typeInfo','96qIrVxA','emit','oncontextmenu','_filter','copy','_renderDescription','style','innerHTML','3493085tmWXVy','value','shadowRoot','_assignEvents','nodeElem','5328270fWfqTr','7sMfZVA','<div\x20class=\x22note\x22>','definitions','\x0a\x20\x20\x20\x20\x20\x20','node','_bindingsParse'];a=function(){return v;};return a();}export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';[j(0x14b)];get[j(0x14d)](){return this['_title'];}set[j(0x14d)](d){this['_title']=d;}[j(0x150)];[j(0x124)]=new TypedEvent();['closeRequested']=new TypedEvent();[j(0x125)];['_filter'];[j(0x11d)];['_addBtn'];['_typeInfo'];[j(0x120)];constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x13f)][k(0x12c)]=[c,defaultStyle,SimpleScriptCommandPicker[k(0x13b)]],this['_descriptionDiv']=this[k(0x12e)](k(0x11e)),this['_addBtn']=this[k(0x12e)]('addBtn'),this[k(0x138)]=this['_getDomElement']('filter'),this[k(0x138)][k(0x130)]=()=>{const l=k,d=this[l(0x138)][l(0x13e)];this[l(0x125)][l(0x12f)](e=>new RegExp(d,'i')[l(0x131)](e[l(0x14d)]),{});},this[k(0x125)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](k(0x12d)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const m=k;this['selectedType']=d['node']['title'],this[m(0x14f)][m(0x12b)]=![],this[m(0x13a)](d[m(0x147)]['title']);},'dblclick':d=>{const n=k;return this[n(0x150)]=d[n(0x147)]['title'],this['commandTypeChosen'][n(0x136)](),![];},'render':d=>{const o=k;d[o(0x122)]&&(d[o(0x141)][o(0x137)]=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const p=k;return d['event']['dataTransfer']['effectAllowed']=p(0x139),d[p(0x14a)]['dataTransfer'][p(0x133)]='copy',!![];}}});}async['ready'](){const q=j;this['_parseAttributesToProperties'](),this[q(0x148)](null,!![]),this[q(0x140)]();}['addClicked'](){const r=j;if(this['selectedType'])this[r(0x124)][r(0x136)]();}['closeClicked'](){const s=j;this['closeRequested'][s(0x136)]();}[j(0x13a)](d){const t=j,e=this['_descriptions']?.[d];if(e){this[t(0x11d)][t(0x13c)]=t(0x151)+d+'<span\x20class=\x22hint\x22>'+e[t(0x11e)]+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?t(0x144)+e['note']+'</div>':'')+t(0x146);return;}const f=this[t(0x134)]?.[t(0x145)]?.[d]?.['description'];this[t(0x11d)][t(0x13c)]=t(0x132)+d+t(0x123)+(f?t(0x144)+f+'</div>':'')+'\x0a\x20\x20\x20\x20';}[j(0x121)](d,e){const u=j;this['_typeInfo']=d,this[u(0x120)]=e??{};const f=Object[u(0x14c)](d['definitions'])[u(0x127)](g=>d['definitions'][g][u(0x11f)]===u(0x126)&&g!=='ScriptCommands');this['_tree']['root']['addChildren'](f[u(0x12a)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);