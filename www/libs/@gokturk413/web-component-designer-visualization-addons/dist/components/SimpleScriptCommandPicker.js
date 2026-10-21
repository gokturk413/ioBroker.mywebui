const j=b;function a(){const v=['map','107373ciedLg','emit','addClicked','2112354Ptosyb','30481EFgPTD','object','addChildren','_bindingsParse','8040WtTWdc','_addBtn','20vykrEr','ScriptCommands','429015fXsqDu','description','190967kdogdD','definitions','oncontextmenu','node','adoptedStyleSheets','_tree','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','8jHyfjm','_assignEvents','isNew','_descriptions','closeRequested','keys','type','filter','event','38SKuTbK','_title','_filter','note','_descriptionDiv','example','effectAllowed','template','selectedType','filterNodes','style','2928296qSQqpA','title','_typeInfo','hide','174745QGyDjW','30ibqFAv','_renderDescription','commandTypeChosen','commandList'];a=function(){return v;};return a();}(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x15b))/0x1+-parseInt(i(0x16d))/0x2*(parseInt(i(0x14f))/0x3)+-parseInt(i(0x164))/0x4*(parseInt(i(0x149))/0x5)+-parseInt(i(0x14a))/0x6*(parseInt(i(0x15d))/0x7)+parseInt(i(0x178))/0x8+parseInt(i(0x152))/0x9*(-parseInt(i(0x159))/0xa)+-parseInt(i(0x153))/0xb*(-parseInt(i(0x157))/0xc);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x6ae58));function b(c,d){c=c-0x149;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0x174)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get['title'](){return this['_title'];}set[j(0x179)](d){const k=j;this[k(0x16e)]=d;}[j(0x175)];[j(0x14c)]=new TypedEvent();[j(0x168)]=new TypedEvent();['_tree'];[j(0x16f)];[j(0x171)];[j(0x158)];[j(0x17a)];['_descriptions'];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot'][l(0x161)]=[c,defaultStyle,SimpleScriptCommandPicker[l(0x177)]],this[l(0x171)]=this['_getDomElement'](l(0x15c)),this['_addBtn']=this['_getDomElement']('addBtn'),this[l(0x16f)]=this['_getDomElement'](l(0x16b)),this['_filter']['onkeyup']=()=>{const m=l,d=this['_filter']['value'];this['_tree'][m(0x176)](e=>new RegExp(d,'i')['test'](e[m(0x179)]),{});},this[l(0x162)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x14d)),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x17b),'highlight':!![]},'activate':d=>{const n=l;this['selectedType']=d[n(0x160)]['title'],this['_addBtn']['disabled']=![],this[n(0x14b)](d[n(0x160)]['title']);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0x160)]['title'],this[o(0x14c)][o(0x150)](),![];},'render':d=>{const p=l;d[p(0x166)]&&(d['nodeElem'][p(0x15f)]=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d[q(0x16c)]['dataTransfer'][q(0x173)]='copy',d[q(0x16c)]['dataTransfer']['dropEffect']='copy',!![];}}});}async['ready'](){const r=j;this['_parseAttributesToProperties'](),this[r(0x156)](null,!![]),this[r(0x165)]();}[j(0x151)](){const s=j;if(this['selectedType'])this[s(0x14c)][s(0x150)]();}['closeClicked'](){this['closeRequested']['emit']();}[j(0x14b)](d){const t=j,e=this[t(0x167)]?.[d];if(e){this[t(0x171)]['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'<span\x20class=\x22hint\x22>'+e[t(0x15c)]+t(0x163)+highlightJson(e[t(0x172)])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e[t(0x170)]?'<div\x20class=\x22note\x22>'+e['note']+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[t(0x17a)]?.[t(0x15e)]?.[d]?.[t(0x15c)];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+'</div>':'')+'\x0a\x20\x20\x20\x20';}['loadCommands'](d,e){const u=j;this['_typeInfo']=d,this[u(0x167)]=e??{};const f=Object[u(0x169)](d[u(0x15e)])[u(0x16b)](g=>d[u(0x15e)][g][u(0x16a)]===u(0x154)&&g!==u(0x15a));this[u(0x162)]['root'][u(0x155)](f[u(0x14e)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);