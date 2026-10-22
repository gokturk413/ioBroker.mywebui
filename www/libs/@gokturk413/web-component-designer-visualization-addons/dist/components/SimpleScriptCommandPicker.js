const j=b;function a(){const w=['784612EOCmAN','1650516XWtQWg','3LTVWjd','node','</div>','commandList','loadCommands','_bindingsParse','example','title','4642840rViDPJ','1273532pIjPXa','_renderDescription','description','selectedType','5950912CMjqvW','_tree','root','dataTransfer','ready','_title','closeRequested','_descriptionDiv','definitions','_filter','oncontextmenu','6RBoZVL','commandTypeChosen','style','dropEffect','addChildren','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','_parseAttributesToProperties','template','emit','keys','event','_addBtn','<div\x20class=\x22note\x22>','effectAllowed','copy','filterNodes','object','13015809nbLoOi','3074547dtSINi','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','value','onkeyup','_getDomElement'];a=function(){return w;};return a();}function b(c,d){c=c-0x125;const e=a();let f=e[c];return f;}(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x145))/0x1+parseInt(i(0x146))/0x2+-parseInt(i(0x147))/0x3*(parseInt(i(0x150))/0x4)+parseInt(i(0x14f))/0x5+-parseInt(i(0x12e))/0x6*(-parseInt(i(0x140))/0x7)+-parseInt(i(0x154))/0x8+-parseInt(i(0x13f))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x728db));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0x135)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';[j(0x128)];get['title'](){const k=j;return this[k(0x128)];}set['title'](d){this['_title']=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();['closeRequested']=new TypedEvent();[j(0x155)];['_filter'];[j(0x12a)];[j(0x139)];['_typeInfo'];['_descriptions'];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0x130)]],this['_descriptionDiv']=this[l(0x144)](l(0x152)),this[l(0x139)]=this['_getDomElement']('addBtn'),this[l(0x12c)]=this['_getDomElement']('filter'),this['_filter'][l(0x143)]=()=>{const m=l,d=this['_filter'][m(0x142)];this['_tree'][m(0x13d)](e=>new RegExp(d,'i')['test'](e[m(0x14e)]),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x14a)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this[n(0x153)]=d['node'][n(0x14e)],this['_addBtn']['disabled']=![],this['_renderDescription'](d['node']['title']);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0x148)][o(0x14e)],this['commandTypeChosen'][o(0x136)](),![];},'render':d=>{const p=l;d['isNew']&&(d['nodeElem'][p(0x12d)]=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d['event'][q(0x126)][q(0x13b)]='copy',d[q(0x138)][q(0x126)][q(0x131)]=q(0x13c),!![];}}});}async[j(0x127)](){const r=j;this[r(0x134)](),this[r(0x14c)](null,!![]),this['_assignEvents']();}['addClicked'](){const s=j;if(this[s(0x153)])this[s(0x12f)][s(0x136)]();}['closeClicked'](){const t=j;this[t(0x129)]['emit']();}[j(0x151)](d){const u=j,e=this['_descriptions']?.[d];if(e){this[u(0x12a)]['innerHTML']=u(0x141)+d+'<span\x20class=\x22hint\x22>'+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e[u(0x14d)])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?'<div\x20class=\x22note\x22>'+e['note']+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this['_typeInfo']?.[u(0x12b)]?.[d]?.['description'];this['_descriptionDiv']['innerHTML']=u(0x133)+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?u(0x13a)+f+u(0x149):'')+'\x0a\x20\x20\x20\x20';}[j(0x14b)](d,e){const v=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object[v(0x137)](d[v(0x12b)])['filter'](g=>d[v(0x12b)][g]['type']===v(0x13e)&&g!=='ScriptCommands');this[v(0x155)][v(0x125)][v(0x132)](f['map'](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);