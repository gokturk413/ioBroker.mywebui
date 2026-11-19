const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x1f4))/0x1+parseInt(i(0x215))/0x2+-parseInt(i(0x1fa))/0x3*(-parseInt(i(0x1ee))/0x4)+parseInt(i(0x1f7))/0x5+-parseInt(i(0x202))/0x6*(parseInt(i(0x1fd))/0x7)+parseInt(i(0x1e4))/0x8*(parseInt(i(0x1f9))/0x9)+parseInt(i(0x216))/0xa*(-parseInt(i(0x214))/0xb);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x81027));function a(){const w=['emit','keys','_renderDescription','_tree','_title','_descriptionDiv','<div\x20class=\x22note\x22>','3564OJKHhC','1473668qOldJH','66670pJyqvN','shadowRoot','adoptedStyleSheets','_addBtn','8440136YtLSEr','_getDomElement','innerHTML','ready','copy','commandList','_bindingsParse','preventDefault','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','filter','17864cSNAOB','_parseAttributesToProperties','disabled','note','definitions','_descriptions','364126CVzofk','\x0a\x20\x20\x20\x20\x20\x20','style','2445060WSRXjF','effectAllowed','9MwSMia','270YDkUAB','title','onkeyup','92918RCYMnX','\x0a\x20\x20\x20\x20','node-projects-visualization-simple-script-command-picker','dataTransfer','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','162IXtJre','description','closeRequested','map','_filter','closeClicked','test','selectedType','addBtn','template','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'];a=function(){return w;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};function b(c,d){c=c-0x1e2;const e=a();let f=e[c];return f;}import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x1f6)]=css`
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
    `;static [j(0x20b)]=html`
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
    `;static ['is']=j(0x1ff);['_title'];get[j(0x1fb)](){return this['_title'];}set['title'](d){const k=j;this[k(0x211)]=d;}['selectedType'];['commandTypeChosen']=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];[j(0x206)];['_descriptionDiv'];[j(0x1e3)];['_typeInfo'];['_descriptions'];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this[l(0x217)][l(0x1e2)]=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this['_getDomElement'](l(0x203)),this['_addBtn']=this[l(0x1e5)](l(0x20a)),this[l(0x206)]=this['_getDomElement']('filter'),this['_filter'][l(0x1fc)]=()=>{const m=l,d=this[m(0x206)]['value'];this[m(0x210)]['filterNodes'](e=>new RegExp(d,'i')[m(0x208)](e[m(0x1fb)]),{});},this[l(0x210)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x1e9)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this[n(0x209)]=d['node']['title'],this['_addBtn'][n(0x1f0)]=![],this['_renderDescription'](d['node'][n(0x1fb)]);},'dblclick':d=>{const o=l;return this[o(0x209)]=d['node']['title'],this['commandTypeChosen']['emit'](),![];},'render':d=>{d['isNew']&&(d['nodeElem']['oncontextmenu']=f=>{const p=b;return f[p(0x1eb)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d['event'][q(0x200)][q(0x1f8)]='copy',d['event'][q(0x200)]['dropEffect']=q(0x1e8),!![];}}});}async[j(0x1e7)](){const r=j;this[r(0x1ef)](),this[r(0x1ea)](null,!![]),this['_assignEvents']();}['addClicked'](){const s=j;if(this['selectedType'])this['commandTypeChosen'][s(0x20d)]();}[j(0x207)](){const t=j;this[t(0x204)]['emit']();}[j(0x20f)](d){const u=j,e=this[u(0x1f3)]?.[d];if(e){this[u(0x212)]['innerHTML']=u(0x1ec)+d+'<span\x20class=\x22hint\x22>'+e[u(0x203)]+u(0x201)+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?u(0x213)+e[u(0x1f1)]+'</div>':'')+u(0x1f5);return;}const f=this['_typeInfo']?.['definitions']?.[d]?.['description'];this[u(0x212)][u(0x1e6)]=u(0x20c)+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?u(0x213)+f+'</div>':'')+u(0x1fe);}['loadCommands'](d,e){const v=j;this['_typeInfo']=d,this['_descriptions']=e??{};const f=Object[v(0x20e)](d[v(0x1f2)])[v(0x1ed)](g=>d['definitions'][g]['type']==='object'&&g!=='ScriptCommands');this[v(0x210)]['root']['addChildren'](f[v(0x205)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);