function a(){const x=['1527975JhJHpH','ScriptCommands','commandList','_descriptionDiv','style','_tree','selectedType','6018016gFkZBD','_getDomElement','disabled','_addBtn','<div\x20class=\x22note\x22>','node-projects-visualization-simple-script-command-picker','158631dsKwTC','node','dropEffect','\x0a\x20\x20\x20\x20','8NgfcXg','_title','closeRequested','addBtn','description','2Pjmsgz','dataTransfer','title','innerHTML','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20','222KGezJg','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','208418BacjdJ','commandTypeChosen','_filter','2110CTiUXE','_parseAttributesToProperties','9818EtwPYY','filter','event','</div>','copy','_descriptions','shadowRoot','note','nodeElem','9846261NGnrGz','test','adoptedStyleSheets','oncontextmenu','preventDefault','5148855XJjEVB','hide','_typeInfo'];a=function(){return x;};return a();}function b(c,d){c=c-0x14b;const e=a();let f=e[c];return f;}const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x15f))/0x1*(parseInt(i(0x16c))/0x2)+parseInt(i(0x17d))/0x3+-parseInt(i(0x150))/0x4+parseInt(i(0x17a))/0x5+-parseInt(i(0x165))/0x6*(parseInt(i(0x167))/0x7)+parseInt(i(0x15a))/0x8*(-parseInt(i(0x175))/0x9)+parseInt(i(0x16a))/0xa*(parseInt(i(0x156))/0xb);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xd9ab6));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x14d)]=css`
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
    `;static ['is']=j(0x155);[j(0x15b)];get[j(0x161)](){const k=j;return this[k(0x15b)];}set['title'](d){const l=j;this[l(0x15b)]=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();[j(0x15c)]=new TypedEvent();['_tree'];['_filter'];[j(0x14c)];[j(0x153)];[j(0x17c)];[j(0x171)];constructor(){const m=j;super(),this['_restoreCachedInititalValues'](),this[m(0x172)][m(0x177)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this['_getDomElement']('description'),this['_addBtn']=this[m(0x151)](m(0x15d)),this['_filter']=this['_getDomElement'](m(0x16d)),this[m(0x169)]['onkeyup']=()=>{const n=m,d=this['_filter']['value'];this['_tree']['filterNodes'](e=>new RegExp(d,'i')[n(0x176)](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this[m(0x151)](m(0x14b)),'icon':![],'filter':{'autoExpand':!![],'mode':m(0x17b),'highlight':!![]},'activate':d=>{const o=m;this[o(0x14f)]=d[o(0x157)][o(0x161)],this[o(0x153)][o(0x152)]=![],this['_renderDescription'](d[o(0x157)]['title']);},'dblclick':d=>{const p=m;return this['selectedType']=d[p(0x157)][p(0x161)],this[p(0x168)]['emit'](),![];},'render':d=>{const q=m;d['isNew']&&(d[q(0x174)][q(0x178)]=f=>{const r=q;return f[r(0x179)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const s=m;return d['event']['dataTransfer']['effectAllowed']=s(0x170),d[s(0x16e)][s(0x160)][s(0x158)]=s(0x170),!![];}}});}async['ready'](){const t=j;this[t(0x16b)](),this['_bindingsParse'](null,!![]),this['_assignEvents']();}['addClicked'](){if(this['selectedType'])this['commandTypeChosen']['emit']();}['closeClicked'](){const u=j;this[u(0x15c)]['emit']();}['_renderDescription'](d){const v=j,e=this['_descriptions']?.[d];if(e){this[v(0x14c)][v(0x162)]=v(0x166)+d+'<span\x20class=\x22hint\x22>'+e[v(0x15e)]+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e['example'])+v(0x163)+(e[v(0x173)]?'<div\x20class=\x22note\x22>'+e[v(0x173)]+'</div>':'')+v(0x164);return;}const f=this['_typeInfo']?.['definitions']?.[d]?.['description'];this['_descriptionDiv'][v(0x162)]='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?v(0x154)+f+v(0x16f):'')+v(0x159);}['loadCommands'](d,e){const w=j;this[w(0x17c)]=d,this[w(0x171)]=e??{};const f=Object['keys'](d['definitions'])[w(0x16d)](g=>d['definitions'][g]['type']==='object'&&g!==w(0x17e));this[w(0x14e)]['root']['addChildren'](f['map'](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);