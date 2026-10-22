const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x217))/0x1+-parseInt(i(0x20c))/0x2*(parseInt(i(0x1f6))/0x3)+parseInt(i(0x21d))/0x4*(parseInt(i(0x1ee))/0x5)+parseInt(i(0x204))/0x6*(parseInt(i(0x212))/0x7)+parseInt(i(0x1f5))/0x8+parseInt(i(0x206))/0x9+-parseInt(i(0x216))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xef558));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x205)]=css`
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
    `;static ['is']=j(0x210);[j(0x20e)];get[j(0x1f4)](){return this['_title'];}set[j(0x1f4)](d){const k=j;this[k(0x20e)]=d;}[j(0x1f1)];['commandTypeChosen']=new TypedEvent();[j(0x1f0)]=new TypedEvent();[j(0x1f9)];['_filter'];[j(0x1fd)];['_addBtn'];[j(0x1fe)];['_descriptions'];constructor(){const l=j;super(),this[l(0x218)](),this[l(0x209)]['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker[l(0x205)]],this['_descriptionDiv']=this['_getDomElement']('description'),this[l(0x214)]=this[l(0x1ef)]('addBtn'),this['_filter']=this[l(0x1ef)]('filter'),this[l(0x221)]['onkeyup']=()=>{const m=l,d=this[m(0x221)]['value'];this[m(0x1f9)][m(0x21b)](e=>new RegExp(d,'i')['test'](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this[l(0x1ef)]('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x20d),'highlight':!![]},'activate':d=>{const n=l;this['selectedType']=d[n(0x1f2)][n(0x1f4)],this['_addBtn']['disabled']=![],this['_renderDescription'](d[n(0x1f2)][n(0x1f4)]);},'dblclick':d=>{const o=l;return this[o(0x1f1)]=d['node']['title'],this['commandTypeChosen']['emit'](),![];},'render':d=>{const p=l;d['isNew']&&(d[p(0x208)][p(0x219)]=f=>{const q=p;return f[q(0x213)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=l;return d[r(0x1fa)][r(0x20b)]['effectAllowed']=r(0x200),d[r(0x1fa)][r(0x20b)]['dropEffect']=r(0x200),!![];}}});}async[j(0x215)](){const s=j;this[s(0x207)](),this['_bindingsParse'](null,!![]),this['_assignEvents']();}[j(0x223)](){const t=j;if(this[t(0x1f1)])this[t(0x21f)]['emit']();}['closeClicked'](){const u=j;this['closeRequested'][u(0x222)]();}['_renderDescription'](d){const v=j,e=this[v(0x211)]?.[d];if(e){this['_descriptionDiv'][v(0x1f7)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+v(0x220)+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e[v(0x1f8)])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?v(0x21e)+e[v(0x203)]+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this['_typeInfo']?.[v(0x202)]?.[d]?.[v(0x20a)];this[v(0x1fd)]['innerHTML']=v(0x21a)+d+v(0x1fc)+(f?'<div\x20class=\x22note\x22>'+f+v(0x20f):'')+'\x0a\x20\x20\x20\x20';}['loadCommands'](d,e){const w=j;this[w(0x1fe)]=d,this[w(0x211)]=e??{};const f=Object['keys'](d[w(0x202)])[w(0x21c)](g=>d[w(0x202)][g]['type']==='object'&&g!==w(0x1fb));this['_tree'][w(0x201)][w(0x1ff)](f[w(0x1f3)](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);function b(c,d){c=c-0x1ee;const e=a();let f=e[c];return f;}function a(){const x=['</div>','node-projects-visualization-simple-script-command-picker','_descriptions','15757MPQcPQ','preventDefault','_addBtn','ready','18317680lrFuDA','813012JOALki','_restoreCachedInititalValues','oncontextmenu','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','filterNodes','filter','13644aaQdOt','<div\x20class=\x22note\x22>','commandTypeChosen','<span\x20class=\x22hint\x22>','_filter','emit','addClicked','2140CVLUFm','_getDomElement','closeRequested','selectedType','node','map','title','3005120DMfbMi','114CEOMiY','innerHTML','example','_tree','event','ScriptCommands','</div>\x0a\x20\x20\x20\x20\x20\x20','_descriptionDiv','_typeInfo','addChildren','copy','root','definitions','note','102EQKXdQ','style','3460059WNakvp','_parseAttributesToProperties','nodeElem','shadowRoot','description','dataTransfer','13642UyUMfm','hide','_title'];a=function(){return x;};return a();}