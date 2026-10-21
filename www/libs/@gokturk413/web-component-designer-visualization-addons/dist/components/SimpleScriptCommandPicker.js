const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x1c5))/0x1+-parseInt(i(0x1b5))/0x2*(-parseInt(i(0x1cd))/0x3)+parseInt(i(0x1e8))/0x4*(parseInt(i(0x1dc))/0x5)+-parseInt(i(0x1d2))/0x6*(-parseInt(i(0x1cf))/0x7)+-parseInt(i(0x1e1))/0x8+parseInt(i(0x1e6))/0x9+parseInt(i(0x1bb))/0xa*(-parseInt(i(0x1c9))/0xb);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xd93b6));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';function b(c,d){c=c-0x1b1;const e=a();let f=e[c];return f;}import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';function a(){const x=['_parseAttributesToProperties','dataTransfer','dropEffect','isNew','preventDefault','node','type','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','copy','678379mcHlFL','oncontextmenu','_filter','commandTypeChosen','936188jCxhsz','onkeyup','_getDomElement','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','102QOKSWz','loadCommands','7JGLkhi','_restoreCachedInititalValues','note','4838442aexVic','event','template','effectAllowed','\x0a\x20\x20\x20\x20\x20\x20','closeRequested','description','_descriptionDiv','</div>','_assignEvents','15yzAZPG','emit','_title','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','_typeInfo','8166608yMJAYO','object','closeClicked','keys','filterNodes','8180253nzrVZT','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','32388saJquW','selectedType','commandList','title','filter','_bindingsParse','nodeElem','_addBtn','style','innerHTML','map','30230HYatFP','_tree','definitions','ScriptCommands','value','test','120oaJOiR'];a=function(){return x;};return a();}export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0x1d4)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get['title'](){const k=j;return this[k(0x1de)];}set[j(0x1eb)](d){this['_title']=d;}['selectedType'];[j(0x1c8)]=new TypedEvent();[j(0x1d7)]=new TypedEvent();['_tree'];[j(0x1c7)];[j(0x1d9)];['_addBtn'];[j(0x1e0)];['_descriptions'];constructor(){const l=j;super(),this[l(0x1d0)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0x1b2)]],this[l(0x1d9)]=this[l(0x1cb)](l(0x1d8)),this[l(0x1b1)]=this[l(0x1cb)]('addBtn'),this[l(0x1c7)]=this[l(0x1cb)]('filter'),this[l(0x1c7)][l(0x1ca)]=()=>{const m=l,d=this['_filter'][m(0x1b9)];this[m(0x1b6)][m(0x1e5)](e=>new RegExp(d,'i')[m(0x1ba)](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x1ea)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this[n(0x1e9)]=d[n(0x1c1)]['title'],this[n(0x1b1)]['disabled']=![],this['_renderDescription'](d[n(0x1c1)][n(0x1eb)]);},'dblclick':d=>{const o=l;return this[o(0x1e9)]=d[o(0x1c1)]['title'],this['commandTypeChosen']['emit'](),![];},'render':d=>{const p=l;d[p(0x1bf)]&&(d[p(0x1ee)][p(0x1c6)]=f=>{const q=p;return f[q(0x1c0)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=l;return d[r(0x1d3)][r(0x1bd)][r(0x1d5)]=r(0x1c4),d['event']['dataTransfer'][r(0x1be)]='copy',!![];}}});}async['ready'](){const s=j;this[s(0x1bc)](),this[s(0x1ed)](null,!![]),this[s(0x1db)]();}['addClicked'](){const t=j;if(this[t(0x1e9)])this[t(0x1c8)][t(0x1dd)]();}[j(0x1e3)](){const u=j;this['closeRequested'][u(0x1dd)]();}['_renderDescription'](d){const v=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv'][v(0x1b3)]=v(0x1cc)+d+'<span\x20class=\x22hint\x22>'+e['description']+v(0x1df)+highlightJson(e['example'])+v(0x1c3)+(e[v(0x1d1)]?'<div\x20class=\x22note\x22>'+e['note']+'</div>':'')+v(0x1d6);return;}const f=this[v(0x1e0)]?.[v(0x1b7)]?.[d]?.[v(0x1d8)];this['_descriptionDiv']['innerHTML']=v(0x1e7)+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+v(0x1da):'')+'\x0a\x20\x20\x20\x20';}[j(0x1ce)](d,e){const w=j;this[w(0x1e0)]=d,this['_descriptions']=e??{};const f=Object[w(0x1e4)](d['definitions'])[w(0x1ec)](g=>d[w(0x1b7)][g][w(0x1c2)]===w(0x1e2)&&g!==w(0x1b8));this[w(0x1b6)]['root']['addChildren'](f[w(0x1b4)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);