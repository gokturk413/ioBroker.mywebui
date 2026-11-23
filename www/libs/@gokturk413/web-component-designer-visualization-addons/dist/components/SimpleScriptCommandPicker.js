const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x21a))/0x1*(parseInt(i(0x202))/0x2)+-parseInt(i(0x216))/0x3+-parseInt(i(0x21f))/0x4*(parseInt(i(0x20d))/0x5)+parseInt(i(0x218))/0x6+-parseInt(i(0x20f))/0x7*(-parseInt(i(0x226))/0x8)+parseInt(i(0x203))/0x9*(-parseInt(i(0x22a))/0xa)+parseInt(i(0x1fb))/0xb;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x29ed6));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x1fe)]=css`
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
    `;static ['is']=j(0x217);['_title'];get['title'](){const k=j;return this[k(0x21e)];}set['title'](d){const l=j;this[l(0x21e)]=d;}[j(0x219)];[j(0x220)]=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];[j(0x208)];['_descriptionDiv'];[j(0x229)];['_typeInfo'];[j(0x1f9)];constructor(){const m=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot'][m(0x211)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this['_getDomElement']('description'),this[m(0x229)]=this['_getDomElement'](m(0x1fc)),this['_filter']=this['_getDomElement']('filter'),this[m(0x208)][m(0x20c)]=()=>{const n=m,d=this['_filter']['value'];this['_tree']['filterNodes'](e=>new RegExp(d,'i')['test'](e[n(0x210)]),{});},this[m(0x20a)]=new Wunderbaum({...defaultOptions,'element':this[m(0x21c)]('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':m(0x206),'highlight':!![]},'activate':d=>{const o=m;this['selectedType']=d['node'][o(0x210)],this[o(0x229)][o(0x214)]=![],this[o(0x20b)](d['node'][o(0x210)]);},'dblclick':d=>{const p=m;return this[p(0x219)]=d['node'][p(0x210)],this['commandTypeChosen'][p(0x21b)](),![];},'render':d=>{const q=m;d[q(0x228)]&&(d['nodeElem'][q(0x22c)]=f=>{const r=q;return f[r(0x212)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const s=m;return d[s(0x1f5)]['dataTransfer'][s(0x215)]=s(0x207),d[s(0x1f5)]['dataTransfer'][s(0x1fa)]=s(0x207),!![];}}});}async[j(0x20e)](){const t=j;this[t(0x213)](),this['_bindingsParse'](null,!![]),this[t(0x224)]();}['addClicked'](){const u=j;if(this['selectedType'])this[u(0x220)][u(0x21b)]();}[j(0x22b)](){const v=j;this[v(0x209)][v(0x21b)]();}[j(0x20b)](d){const w=j,e=this[w(0x1f9)]?.[d];if(e){this['_descriptionDiv'][w(0x1f7)]=w(0x1ff)+d+'<span\x20class=\x22hint\x22>'+e['description']+w(0x1f6)+highlightJson(e[w(0x205)])+w(0x1fd)+(e['note']?'<div\x20class=\x22note\x22>'+e['note']+w(0x1f8):'')+w(0x201);return;}const f=this[w(0x227)]?.['definitions']?.[d]?.[w(0x204)];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+w(0x200)+(f?'<div\x20class=\x22note\x22>'+f+'</div>':'')+'\x0a\x20\x20\x20\x20';}[j(0x222)](d,e){const x=j;this[x(0x227)]=d,this[x(0x1f9)]=e??{};const f=Object['keys'](d['definitions'])['filter'](g=>d[x(0x225)][g][x(0x21d)]==='object'&&g!==x(0x1f4));this[x(0x20a)]['root']['addChildren'](f[x(0x223)](g=>({'title':g})));}}function a(){const y=['40EbHqSS','ready','7wILgSQ','title','adoptedStyleSheets','preventDefault','_parseAttributesToProperties','disabled','effectAllowed','907971CuUvHx','node-projects-visualization-simple-script-command-picker','1528194wAktvR','selectedType','168881qvqEBB','emit','_getDomElement','type','_title','60YUAfRn','commandTypeChosen','define','loadCommands','map','_assignEvents','definitions','1547736xjwqzC','_typeInfo','isNew','_addBtn','31410EcaCFy','closeClicked','oncontextmenu','ScriptCommands','event','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','innerHTML','</div>','_descriptions','dropEffect','6112788piuxcg','addBtn','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','style','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','</div>\x0a\x20\x20\x20\x20\x20\x20','\x0a\x20\x20\x20\x20\x20\x20','4ytYqGf','549yFPyVu','description','example','hide','copy','_filter','closeRequested','_tree','_renderDescription','onkeyup'];a=function(){return y;};return a();}function b(c,d){c=c-0x1f4;const e=a();let f=e[c];return f;}customElements[j(0x221)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);