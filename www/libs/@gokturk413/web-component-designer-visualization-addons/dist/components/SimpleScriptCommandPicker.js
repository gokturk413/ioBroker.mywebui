const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0xcf))/0x1+-parseInt(i(0xd9))/0x2*(parseInt(i(0xc7))/0x3)+-parseInt(i(0xb9))/0x4+parseInt(i(0xb8))/0x5+-parseInt(i(0xdd))/0x6+parseInt(i(0xe1))/0x7*(parseInt(i(0xd5))/0x8)+parseInt(i(0xbf))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x433b4));function b(c,d){c=c-0xb7;const e=a();let f=e[c];return f;}function a(){const x=['effectAllowed','_filter','event','isNew','onkeyup','addBtn','_typeInfo','987420tCCdCC','413608dybEaQ','definitions','filter','<div\x20class=\x22note\x22>','commandTypeChosen','ready','3696804RuxPzn','_renderDescription','</div>','emit','_descriptionDiv','_addBtn','keys','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','718458khTRPV','_title','ScriptCommands','node','map','dataTransfer','_assignEvents','value','99EJtnnM','closeRequested','description','_getDomElement','title','_tree','24wuOYlE','nodeElem','</div>\x0a\x20\x20\x20\x20\x20\x20','_parseAttributesToProperties','2keQlGo','hide','innerHTML','node-projects-visualization-simple-script-command-picker','2870754kQuvRf','_restoreCachedInititalValues','root','disabled','1140034BlcWuX','dropEffect','note','style','selectedType','object'];a=function(){return x;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0xe4)]=css`
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
    `;static ['is']=j(0xdc);[j(0xc8)];get['title'](){const k=j;return this[k(0xc8)];}set['title'](d){const l=j;this[l(0xc8)]=d;}[j(0xe5)];[j(0xbd)]=new TypedEvent();[j(0xd0)]=new TypedEvent();[j(0xd4)];['_filter'];[j(0xc3)];['_addBtn'];[j(0xb7)];['_descriptions'];constructor(){const m=j;super(),this[m(0xde)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this['_getDomElement'](m(0xd1)),this[m(0xc4)]=this[m(0xd2)](m(0xec)),this['_filter']=this['_getDomElement'](m(0xbb)),this['_filter'][m(0xeb)]=()=>{const n=m,d=this[n(0xe8)][n(0xce)];this['_tree']['filterNodes'](e=>new RegExp(d,'i')['test'](e[n(0xd3)]),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement']('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':m(0xda),'highlight':!![]},'activate':d=>{const o=m;this[o(0xe5)]=d[o(0xca)][o(0xd3)],this[o(0xc4)][o(0xe0)]=![],this['_renderDescription'](d[o(0xca)][o(0xd3)]);},'dblclick':d=>{const p=m;return this[p(0xe5)]=d['node'][p(0xd3)],this['commandTypeChosen'][p(0xc2)](),![];},'render':d=>{const q=m;d[q(0xea)]&&(d[q(0xd6)]['oncontextmenu']=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=m;return d[r(0xe9)][r(0xcc)][r(0xe7)]='copy',d['event']['dataTransfer'][r(0xe2)]='copy',!![];}}});}async[j(0xbe)](){const s=j;this[s(0xd8)](),this['_bindingsParse'](null,!![]),this[s(0xcd)]();}['addClicked'](){const t=j;if(this[t(0xe5)])this[t(0xbd)][t(0xc2)]();}['closeClicked'](){const u=j;this['closeRequested'][u(0xc2)]();}[j(0xc0)](d){const v=j,e=this['_descriptions']?.[d];if(e){this[v(0xc3)][v(0xdb)]=v(0xc6)+d+'<span\x20class=\x22hint\x22>'+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e[v(0xe3)]?'<div\x20class=\x22note\x22>'+e[v(0xe3)]+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[v(0xb7)]?.['definitions']?.[d]?.['description'];this[v(0xc3)][v(0xdb)]='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+v(0xd7)+(f?v(0xbc)+f+v(0xc1):'')+'\x0a\x20\x20\x20\x20';}['loadCommands'](d,e){const w=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object[w(0xc5)](d['definitions'])['filter'](g=>d[w(0xba)][g]['type']===w(0xe6)&&g!==w(0xc9));this[w(0xd4)][w(0xdf)]['addChildren'](f[w(0xcb)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);