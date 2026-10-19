const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x16f))/0x1*(-parseInt(i(0x188))/0x2)+parseInt(i(0x16a))/0x3+parseInt(i(0x17d))/0x4+parseInt(i(0x16c))/0x5*(parseInt(i(0x17e))/0x6)+parseInt(i(0x182))/0x7+parseInt(i(0x180))/0x8+-parseInt(i(0x175))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x43625));function a(){const w=['dropEffect','onkeyup','360976MQmrRX','2034QEBcXi','note','4009016DplLNv','ScriptCommands','77357MTsMFo','object','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','_typeInfo','isNew','definitions','6EpNHaq','value','ready','commandTypeChosen','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','_filter','define','filter','_tree','</div>','node','_descriptions','filterNodes','closeRequested','template','_descriptionDiv','map','commandList','title','description','542031SVDqCK','selectedType','285wCnfgc','_renderDescription','copy','47514qvCsmZ','_title','addChildren','adoptedStyleSheets','_getDomElement','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','6020631stVKVz','<div\x20class=\x22note\x22>','loadCommands','_addBtn','keys','emit'];a=function(){return w;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0x164)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get['title'](){const k=j;return this[k(0x170)];}set['title'](d){const l=j;this[l(0x170)]=d;}[j(0x16b)];['commandTypeChosen']=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];[j(0x15b)];['_descriptionDiv'];[j(0x178)];[j(0x185)];[j(0x161)];constructor(){const m=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot'][m(0x172)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this['_getDomElement']('description'),this['_addBtn']=this[m(0x173)]('addBtn'),this[m(0x15b)]=this['_getDomElement']('filter'),this['_filter'][m(0x17c)]=()=>{const n=m,d=this[n(0x15b)][n(0x189)];this[n(0x15e)][n(0x162)](e=>new RegExp(d,'i')['test'](e[n(0x168)]),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](m(0x167)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const o=m;this['selectedType']=d[o(0x160)]['title'],this[o(0x178)]['disabled']=![],this['_renderDescription'](d['node'][o(0x168)]);},'dblclick':d=>{const p=m;return this['selectedType']=d[p(0x160)][p(0x168)],this['commandTypeChosen']['emit'](),![];},'render':d=>{const q=m;d[q(0x186)]&&(d['nodeElem']['oncontextmenu']=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=m;return d['event']['dataTransfer']['effectAllowed']=r(0x16e),d['event']['dataTransfer'][r(0x17b)]='copy',!![];}}});}async[j(0x158)](){this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this['_assignEvents']();}['addClicked'](){const s=j;if(this[s(0x16b)])this[s(0x159)][s(0x17a)]();}['closeClicked'](){const t=j;this[t(0x163)][t(0x17a)]();}[j(0x16d)](d){const u=j,e=this['_descriptions']?.[d];if(e){this[u(0x165)]['innerHTML']=u(0x184)+d+'<span\x20class=\x22hint\x22>'+e['description']+u(0x174)+highlightJson(e['example'])+u(0x15a)+(e[u(0x17f)]?u(0x176)+e[u(0x17f)]+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[u(0x185)]?.[u(0x187)]?.[d]?.[u(0x169)];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+u(0x15f):'')+'\x0a\x20\x20\x20\x20';}[j(0x177)](d,e){const v=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object[v(0x179)](d['definitions'])[v(0x15d)](g=>d[v(0x187)][g]['type']===v(0x183)&&g!==v(0x181));this[v(0x15e)]['root'][v(0x171)](f[v(0x166)](g=>({'title':g})));}}function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}customElements[j(0x15c)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);