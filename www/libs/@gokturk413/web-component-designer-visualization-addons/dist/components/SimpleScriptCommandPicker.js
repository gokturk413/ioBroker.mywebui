function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x17e))/0x1+-parseInt(i(0x181))/0x2+-parseInt(i(0x164))/0x3+parseInt(i(0x183))/0x4+parseInt(i(0x174))/0x5*(-parseInt(i(0x186))/0x6)+parseInt(i(0x17f))/0x7*(-parseInt(i(0x165))/0x8)+parseInt(i(0x175))/0x9*(parseInt(i(0x16b))/0xa);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xcbf82));function a(){const w=['\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','8816412qHWpWF','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','<span\x20class=\x22hint\x22>','note','_descriptions','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','_renderDescription','_bindingsParse','_filter','event','copy','\x0a\x20\x20\x20\x20\x20\x20','selectedType','preventDefault','_title','node','<div\x20class=\x22note\x22>','dropEffect','value','</div>\x0a\x20\x20\x20\x20\x20\x20','root','_addBtn','3297168jvZwpZ','125368tEMPku','addBtn','</div>','filterNodes','addClicked','innerHTML','10AAjZIC','commandTypeChosen','oncontextmenu','commandList','definitions','emit','example','_tree','_assignEvents','5alaSKO','58736871zDrCPb','_getDomElement','isNew','style','_typeInfo','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','test','hide','title','1109506CVLMzD','287btojmi','description','3315356MwaSmr','_descriptionDiv','1149168xWaepK','template'];a=function(){return w;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x178)]=css`
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
    `;static [j(0x184)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get[j(0x17d)](){const k=j;return this[k(0x194)];}set['title'](d){this['_title']=d;}[j(0x192)];['commandTypeChosen']=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];['_filter'];['_descriptionDiv'];['_addBtn'];[j(0x179)];['_descriptions'];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0x178)]],this[l(0x182)]=this[l(0x176)](l(0x180)),this['_addBtn']=this[l(0x176)](l(0x166)),this['_filter']=this['_getDomElement']('filter'),this['_filter']['onkeyup']=()=>{const m=l,d=this[m(0x18e)][m(0x198)];this[m(0x172)][m(0x168)](e=>new RegExp(d,'i')[m(0x17b)](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x16e)),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x17c),'highlight':!![]},'activate':d=>{const n=l;this[n(0x192)]=d['node'][n(0x17d)],this[n(0x163)]['disabled']=![],this[n(0x18c)](d['node'][n(0x17d)]);},'dblclick':d=>{const o=l;return this[o(0x192)]=d[o(0x195)]['title'],this[o(0x16c)]['emit'](),![];},'render':d=>{const p=l;d[p(0x177)]&&(d['nodeElem'][p(0x16d)]=f=>{const q=p;return f[q(0x193)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=l;return d[r(0x18f)]['dataTransfer']['effectAllowed']=r(0x190),d['event']['dataTransfer'][r(0x197)]='copy',!![];}}});}async['ready'](){const s=j;this['_parseAttributesToProperties'](),this[s(0x18d)](null,!![]),this[s(0x173)]();}[j(0x169)](){const t=j;if(this['selectedType'])this['commandTypeChosen'][t(0x170)]();}['closeClicked'](){this['closeRequested']['emit']();}['_renderDescription'](d){const u=j,e=this['_descriptions']?.[d];if(e){this[u(0x182)][u(0x16a)]=u(0x185)+d+u(0x188)+e[u(0x180)]+u(0x187)+highlightJson(e[u(0x171)])+u(0x18b)+(e['note']?u(0x196)+e[u(0x189)]+u(0x167):'')+u(0x191);return;}const f=this['_typeInfo']?.[u(0x16f)]?.[d]?.[u(0x180)];this[u(0x182)][u(0x16a)]=u(0x17a)+d+u(0x199)+(f?u(0x196)+f+u(0x167):'')+'\x0a\x20\x20\x20\x20';}['loadCommands'](d,e){const v=j;this['_typeInfo']=d,this[v(0x18a)]=e??{};const f=Object['keys'](d[v(0x16f)])['filter'](g=>d['definitions'][g]['type']==='object'&&g!=='ScriptCommands');this[v(0x172)][v(0x19a)]['addChildren'](f['map'](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);