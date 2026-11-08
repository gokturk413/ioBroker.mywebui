const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x97))/0x1*(parseInt(i(0x98))/0x2)+parseInt(i(0x8c))/0x3*(parseInt(i(0xa2))/0x4)+parseInt(i(0xaa))/0x5*(parseInt(i(0xb9))/0x6)+parseInt(i(0x99))/0x7*(parseInt(i(0xa4))/0x8)+-parseInt(i(0xa3))/0x9*(parseInt(i(0xb5))/0xa)+-parseInt(i(0x92))/0xb+-parseInt(i(0x9f))/0xc;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x6b154));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x8a;const e=a();let f=e[c];return f;}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';function a(){const w=['commandTypeChosen','<span\x20class=\x22hint\x22>','_title','_filter','42570IDDHSd','</div>\x0a\x20\x20\x20\x20\x20\x20','_tree','definitions','10806GSazgq','type','object','_renderDescription','addChildren','3AEfgre','_restoreCachedInititalValues','template','_getDomElement','dataTransfer','emit','168388SehDpL','oncontextmenu','closeRequested','_assignEvents','onkeyup','1CyaRPI','1357588jZsPHo','126iRZDxu','description','_descriptionDiv','_typeInfo','copy','ready','1509924wzuiDG','ScriptCommands','filter','1737604amjZBL','639zjuSwf','240472EdyZWk','_parseAttributesToProperties','selectedType','commandList','define','node','1625FcOxmk','note','_descriptions','isNew','</div>','title','closeClicked'];a=function(){return w;};return a();}export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0x8e)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get['title'](){return this['_title'];}set[j(0xaf)](d){const k=j;this[k(0xb3)]=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();[j(0x94)]=new TypedEvent();[j(0xb7)];[j(0xb4)];[j(0x9b)];['_addBtn'];[j(0x9c)];[j(0xac)];constructor(){const l=j;super(),this[l(0x8d)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this[l(0x9b)]=this[l(0x8f)](l(0x9a)),this['_addBtn']=this[l(0x8f)]('addBtn'),this[l(0xb4)]=this[l(0x8f)]('filter'),this['_filter'][l(0x96)]=()=>{const m=l,d=this[m(0xb4)]['value'];this[m(0xb7)]['filterNodes'](e=>new RegExp(d,'i')['test'](e[m(0xaf)]),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this[l(0x8f)](l(0xa7)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this[n(0xa6)]=d['node'][n(0xaf)],this['_addBtn']['disabled']=![],this[n(0x8a)](d['node'][n(0xaf)]);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0xa9)]['title'],this[o(0xb1)]['emit'](),![];},'render':d=>{const p=l;d[p(0xad)]&&(d['nodeElem'][p(0x93)]=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d['event']['dataTransfer']['effectAllowed']=q(0x9d),d['event'][q(0x90)]['dropEffect']=q(0x9d),!![];}}});}async[j(0x9e)](){const r=j;this[r(0xa5)](),this['_bindingsParse'](null,!![]),this[r(0x95)]();}['addClicked'](){const s=j;if(this[s(0xa6)])this[s(0xb1)][s(0x91)]();}[j(0xb0)](){const t=j;this[t(0x94)][t(0x91)]();}['_renderDescription'](d){const u=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+u(0xb2)+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?'<div\x20class=\x22note\x22>'+e[u(0xab)]+u(0xae):'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[u(0x9c)]?.['definitions']?.[d]?.[u(0x9a)];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+u(0xb6)+(f?'<div\x20class=\x22note\x22>'+f+u(0xae):'')+'\x0a\x20\x20\x20\x20';}['loadCommands'](d,e){const v=j;this[v(0x9c)]=d,this['_descriptions']=e??{};const f=Object['keys'](d[v(0xb8)])[v(0xa1)](g=>d[v(0xb8)][g][v(0xba)]===v(0xbb)&&g!==v(0xa0));this[v(0xb7)]['root'][v(0x8b)](f['map'](g=>({'title':g})));}}customElements[j(0xa8)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);