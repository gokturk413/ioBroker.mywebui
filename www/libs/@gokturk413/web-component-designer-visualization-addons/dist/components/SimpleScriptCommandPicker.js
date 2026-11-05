const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x9a))/0x1*(-parseInt(i(0x85))/0x2)+-parseInt(i(0x9d))/0x3+parseInt(i(0x98))/0x4*(-parseInt(i(0x95))/0x5)+-parseInt(i(0xa9))/0x6*(parseInt(i(0xac))/0x7)+parseInt(i(0xa1))/0x8+parseInt(i(0xa0))/0x9*(parseInt(i(0xa8))/0xa)+parseInt(i(0x9e))/0xb*(parseInt(i(0x99))/0xc);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xc6011));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';function b(c,d){c=c-0x79;const e=a();let f=e[c];return f;}function a(){const w=['7061466ENXNge','nodeElem','<span\x20class=\x22hint\x22>','7aqSQpt','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','_title','closeRequested','_descriptionDiv','filter','example','\x0a\x20\x20\x20\x20','commandTypeChosen','</div>','\x0a\x20\x20\x20\x20\x20\x20','description','definitions','commandList','adoptedStyleSheets','keys','2681118XVWOdY','_assignEvents','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','type','_addBtn','template','hide','_descriptions','selectedType','node','isNew','title','style','event','_tree','emit','1057715QMQuwz','_filter','dropEffect','4aFXgcj','180wFswBS','1LjoVrc','ready','_typeInfo','2439603mCkrCQ','1803967rEriUA','note','4561281xgmaAX','11091800KwXCKb','shadowRoot','filterNodes','disabled','_getDomElement','define','_renderDescription','10lFNXWK'];a=function(){return w;};return a();}import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x91)]=css`
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
    `;static [j(0x8a)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';[j(0xae)];get[j(0x90)](){return this['_title'];}set['title'](d){const k=j;this[k(0xae)]=d;}[j(0x8d)];['commandTypeChosen']=new TypedEvent();[j(0xaf)]=new TypedEvent();['_tree'];[j(0x96)];[j(0x79)];[j(0x89)];['_typeInfo'];[j(0x8c)];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this[l(0xa2)][l(0x83)]=[c,defaultStyle,SimpleScriptCommandPicker[l(0x91)]],this['_descriptionDiv']=this[l(0xa5)]('description'),this['_addBtn']=this['_getDomElement']('addBtn'),this['_filter']=this[l(0xa5)](l(0x7a)),this['_filter']['onkeyup']=()=>{const m=l,d=this['_filter']['value'];this[m(0x93)][m(0xa3)](e=>new RegExp(d,'i')['test'](e['title']),{});},this[l(0x93)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x82)),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x8b),'highlight':!![]},'activate':d=>{const n=l;this['selectedType']=d['node'][n(0x90)],this[n(0x89)][n(0xa4)]=![],this[n(0xa7)](d['node']['title']);},'dblclick':d=>{const o=l;return this[o(0x8d)]=d[o(0x8e)][o(0x90)],this[o(0x7d)]['emit'](),![];},'render':d=>{const p=l;d[p(0x8f)]&&(d[p(0xaa)]['oncontextmenu']=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d[q(0x92)]['dataTransfer']['effectAllowed']='copy',d['event']['dataTransfer'][q(0x97)]='copy',!![];}}});}async[j(0x9b)](){const r=j;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[r(0x86)]();}['addClicked'](){const s=j;if(this['selectedType'])this[s(0x7d)]['emit']();}['closeClicked'](){const t=j;this[t(0xaf)][t(0x94)]();}['_renderDescription'](d){const u=j,e=this[u(0x8c)]?.[d];if(e){this[u(0x79)]['innerHTML']=u(0xad)+d+u(0xab)+e[u(0x80)]+u(0x87)+highlightJson(e[u(0x7b)])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e[u(0x9f)]?'<div\x20class=\x22note\x22>'+e['note']+u(0x7e):'')+u(0x7f);return;}const f=this[u(0x9c)]?.[u(0x81)]?.[d]?.['description'];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+u(0x7e):'')+u(0x7c);}['loadCommands'](d,e){const v=j;this[v(0x9c)]=d,this['_descriptions']=e??{};const f=Object[v(0x84)](d['definitions'])[v(0x7a)](g=>d[v(0x81)][g][v(0x88)]==='object'&&g!=='ScriptCommands');this['_tree']['root']['addChildren'](f['map'](g=>({'title':g})));}}customElements[j(0xa6)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);