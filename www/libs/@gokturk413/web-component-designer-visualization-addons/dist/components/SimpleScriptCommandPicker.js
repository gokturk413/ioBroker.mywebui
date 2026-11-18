const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x1eb))/0x1*(parseInt(i(0x1f1))/0x2)+-parseInt(i(0x1fd))/0x3*(parseInt(i(0x1f9))/0x4)+-parseInt(i(0x1f7))/0x5+parseInt(i(0x1ef))/0x6+parseInt(i(0x204))/0x7*(parseInt(i(0x1e5))/0x8)+parseInt(i(0x1f3))/0x9+-parseInt(i(0x201))/0xa*(-parseInt(i(0x1e7))/0xb);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xc6d3b));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1d9;const e=a();let f=e[c];return f;}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';function a(){const u=['10GaAjLZ','dataTransfer','551016AwQdar','_descriptionDiv','_renderDescription','loadCommands','5670950ALEJRh','event','100ocWwTQ','commandList','template','_assignEvents','62763UKIzaN','define','style','map','290IEoyIu','note','selectedType','794906AwHRSu','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','object','effectAllowed','closeClicked','_tree','keys','_filter','addChildren','node','copy','_typeInfo','</div>','ScriptCommands','preventDefault','hide','_descriptions','96CwEERa','shadowRoot','833723HsvrPV','addBtn','_title','node-projects-visualization-simple-script-command-picker','245525hljCVF','filterNodes','description','title','463908IEOYMk','closeRequested'];a=function(){return u;};return a();}import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x1ff)]=css`
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
    `;static [j(0x1fb)]=html`
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
    `;static ['is']=j(0x1ea);['_title'];get['title'](){const k=j;return this[k(0x1e9)];}set['title'](d){this['_title']=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();[j(0x1f0)]=new TypedEvent();['_tree'];['_filter'];['_descriptionDiv'];['_addBtn'];['_typeInfo'];[j(0x1e4)];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this[l(0x1e6)]['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0x1ff)]],this[l(0x1f4)]=this['_getDomElement']('description'),this['_addBtn']=this['_getDomElement'](l(0x1e8)),this['_filter']=this['_getDomElement']('filter'),this[l(0x1db)]['onkeyup']=()=>{const m=l,d=this[m(0x1db)]['value'];this['_tree'][m(0x1ec)](e=>new RegExp(d,'i')['test'](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x1fa)),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x1e3),'highlight':!![]},'activate':d=>{const n=l;this[n(0x203)]=d[n(0x1dd)]['title'],this['_addBtn']['disabled']=![],this[n(0x1f5)](d[n(0x1dd)][n(0x1ee)]);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0x1dd)][o(0x1ee)],this['commandTypeChosen']['emit'](),![];},'render':d=>{d['isNew']&&(d['nodeElem']['oncontextmenu']=f=>{const p=b;return f[p(0x1e2)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d['event']['dataTransfer'][q(0x207)]=q(0x1de),d[q(0x1f8)][q(0x1f2)]['dropEffect']=q(0x1de),!![];}}});}async['ready'](){const r=j;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[r(0x1fc)]();}['addClicked'](){if(this['selectedType'])this['commandTypeChosen']['emit']();}[j(0x208)](){this['closeRequested']['emit']();}['_renderDescription'](d){const s=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'<span\x20class=\x22hint\x22>'+e[s(0x1ed)]+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e['example'])+s(0x205)+(e[s(0x202)]?'<div\x20class=\x22note\x22>'+e[s(0x202)]+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[s(0x1df)]?.['definitions']?.[d]?.['description'];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+s(0x1e0):'')+'\x0a\x20\x20\x20\x20';}[j(0x1f6)](d,e){const t=j;this[t(0x1df)]=d,this[t(0x1e4)]=e??{};const f=Object[t(0x1da)](d['definitions'])['filter'](g=>d['definitions'][g]['type']===t(0x206)&&g!==t(0x1e1));this[t(0x1d9)]['root'][t(0x1dc)](f[t(0x200)](g=>({'title':g})));}}customElements[j(0x1fe)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);