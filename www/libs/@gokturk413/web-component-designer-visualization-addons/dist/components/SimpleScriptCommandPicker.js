const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x10b))/0x1*(-parseInt(i(0x113))/0x2)+-parseInt(i(0x124))/0x3+-parseInt(i(0x10f))/0x4+parseInt(i(0x107))/0x5*(parseInt(i(0x116))/0x6)+parseInt(i(0x114))/0x7+parseInt(i(0x108))/0x8*(parseInt(i(0x11a))/0x9)+-parseInt(i(0x10e))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xce65a));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';function a(){const u=['2678264BRNADH','note','type','27484myJxYz','<span\x20class=\x22hint\x22>','test','7823430SPkobz','3796504hKSanf','_typeInfo','dropEffect','template','6LnDcGK','8998990MhEJSK','ScriptCommands','2778CyvoIN','innerHTML','_tree','_filter','27CLBnAS','hide','description','</div>','\x0a\x20\x20\x20\x20','keys','_addBtn','commandList','_bindingsParse','nodeElem','1571397KPnxzq','example','_assignEvents','selectedType','_restoreCachedInititalValues','_descriptionDiv','effectAllowed','_getDomElement','value','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','node','commandTypeChosen','_renderDescription','title','<div\x20class=\x22note\x22>','definitions','emit','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','adoptedStyleSheets','disabled','filter','\x0a\x20\x20\x20\x20\x20\x20','_descriptions','event','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','7865cLnTNn'];a=function(){return u;};return a();}export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0x112)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get[j(0xfb)](){return this['_title'];}set['title'](d){this['_title']=d;}['selectedType'];[j(0xf9)]=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];[j(0x119)];[j(0xf3)];['_addBtn'];['_typeInfo'];[j(0x104)];constructor(){const k=j;super(),this[k(0xf2)](),this['shadowRoot'][k(0x100)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this[k(0xf5)](k(0x11c)),this[k(0x120)]=this[k(0xf5)]('addBtn'),this[k(0x119)]=this[k(0xf5)]('filter'),this[k(0x119)]['onkeyup']=()=>{const l=k,d=this['_filter'][l(0xf6)];this['_tree']['filterNodes'](e=>new RegExp(d,'i')[l(0x10d)](e['title']),{});},this[k(0x118)]=new Wunderbaum({...defaultOptions,'element':this[k(0xf5)](k(0x121)),'icon':![],'filter':{'autoExpand':!![],'mode':k(0x11b),'highlight':!![]},'activate':d=>{const m=k;this[m(0x127)]=d[m(0xf8)][m(0xfb)],this[m(0x120)][m(0x101)]=![],this[m(0xfa)](d['node']['title']);},'dblclick':d=>{const n=k;return this['selectedType']=d[n(0xf8)]['title'],this['commandTypeChosen'][n(0xfe)](),![];},'render':d=>{const o=k;d['isNew']&&(d[o(0x123)]['oncontextmenu']=f=>{return f['preventDefault'](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const p=k;return d['event']['dataTransfer'][p(0xf4)]='copy',d[p(0x105)]['dataTransfer'][p(0x111)]='copy',!![];}}});}async['ready'](){const q=j;this['_parseAttributesToProperties'](),this[q(0x122)](null,!![]),this[q(0x126)]();}['addClicked'](){const r=j;if(this['selectedType'])this[r(0xf9)][r(0xfe)]();}['closeClicked'](){this['closeRequested']['emit']();}['_renderDescription'](d){const s=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv']['innerHTML']=s(0xff)+d+s(0x10c)+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e[s(0x125)])+s(0x106)+(e[s(0x109)]?s(0xfc)+e[s(0x109)]+s(0x11d):'')+s(0x103);return;}const f=this[s(0x110)]?.[s(0xfd)]?.[d]?.['description'];this['_descriptionDiv'][s(0x117)]=s(0xf7)+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+'</div>':'')+s(0x11e);}['loadCommands'](d,e){const t=j;this[t(0x110)]=d,this[t(0x104)]=e??{};const f=Object[t(0x11f)](d[t(0xfd)])[t(0x102)](g=>d['definitions'][g][t(0x10a)]==='object'&&g!==t(0x115));this[t(0x118)]['root']['addChildren'](f['map'](g=>({'title':g})));}}function b(c,d){c=c-0xf2;const e=a();let f=e[c];return f;}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);