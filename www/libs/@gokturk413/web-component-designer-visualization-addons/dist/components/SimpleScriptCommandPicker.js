const k=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0xb9))/0x1+parseInt(i(0xd7))/0x2*(parseInt(i(0xb5))/0x3)+-parseInt(i(0xb8))/0x4+-parseInt(i(0xd5))/0x5*(parseInt(i(0xaa))/0x6)+parseInt(i(0xae))/0x7+-parseInt(i(0xe0))/0x8+-parseInt(i(0xb2))/0x9*(-parseInt(i(0xce))/0xa);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x7cf53));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function a(){const y=['181698MJnGJu','<div\x20class=\x22note\x22>','_addBtn','_filter','6386485ikZCHW','innerHTML','copy','_tree','63nfTLDK','title','</div>','111YtnFde','ready','hide','2443632ysKRKf','975432JqqQBo','root','_typeInfo','closeClicked','oncontextmenu','definitions','dataTransfer','closeRequested','selectedType','dropEffect','value','effectAllowed','type','addChildren','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','_title','preventDefault','onkeyup','commandTypeChosen','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','ScriptCommands','2675670EZOEjW','_assignEvents','_descriptionDiv','loadCommands','nodeElem','_descriptions','description','110uKaFnl','event','8116gPBVYm','_getDomElement','_bindingsParse','node','_restoreCachedInititalValues','\x0a\x20\x20\x20\x20','test','object','emit','1368616fLSFzm'];a=function(){return y;};return a();}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';function b(c,d){c=c-0xaa;const e=a();let f=e[c];return f;}import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get['title'](){const j=b;return this[j(0xc8)];}set[k(0xb3)](d){const l=k;this[l(0xc8)]=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();[k(0xc0)]=new TypedEvent();[k(0xb1)];['_filter'];[k(0xd0)];[k(0xac)];['_typeInfo'];['_descriptions'];constructor(){const m=k;super(),this[m(0xdb)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this[m(0xd0)]=this['_getDomElement']('description'),this[m(0xac)]=this[m(0xd8)]('addBtn'),this['_filter']=this[m(0xd8)]('filter'),this[m(0xad)][m(0xca)]=()=>{const n=m,d=this[n(0xad)][n(0xc3)];this[n(0xb1)]['filterNodes'](e=>new RegExp(d,'i')[n(0xdd)](e[n(0xb3)]),{});},this[m(0xb1)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement']('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':m(0xb7),'highlight':!![]},'activate':d=>{const o=m;this[o(0xc1)]=d[o(0xda)]['title'],this['_addBtn']['disabled']=![],this['_renderDescription'](d[o(0xda)][o(0xb3)]);},'dblclick':d=>{const p=m;return this['selectedType']=d[p(0xda)][p(0xb3)],this[p(0xcb)][p(0xdf)](),![];},'render':d=>{const q=m;d['isNew']&&(d[q(0xd2)][q(0xbd)]=f=>{const r=q;return f[r(0xc9)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const s=m;return d[s(0xd6)][s(0xbf)][s(0xc4)]=s(0xb0),d['event']['dataTransfer'][s(0xc2)]=s(0xb0),!![];}}});}async[k(0xb6)](){const t=k;this['_parseAttributesToProperties'](),this[t(0xd9)](null,!![]),this[t(0xcf)]();}['addClicked'](){const u=k;if(this['selectedType'])this[u(0xcb)][u(0xdf)]();}[k(0xbc)](){const v=k;this[v(0xc0)][v(0xdf)]();}['_renderDescription'](d){const w=k,e=this[w(0xd3)]?.[d];if(e){this['_descriptionDiv'][w(0xaf)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'<span\x20class=\x22hint\x22>'+e['description']+w(0xcc)+highlightJson(e['example'])+w(0xc7)+(e['note']?w(0xab)+e['note']+w(0xb4):'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[w(0xbb)]?.[w(0xbe)]?.[d]?.[w(0xd4)];this['_descriptionDiv'][w(0xaf)]='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+w(0xb4):'')+w(0xdc);}[k(0xd1)](d,e){const x=k;this[x(0xbb)]=d,this[x(0xd3)]=e??{};const f=Object['keys'](d[x(0xbe)])['filter'](g=>d['definitions'][g][x(0xc5)]===x(0xde)&&g!==x(0xcd));this['_tree'][x(0xba)][x(0xc6)](f['map'](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);