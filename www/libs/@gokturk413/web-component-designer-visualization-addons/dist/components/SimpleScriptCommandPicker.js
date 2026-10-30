const j=b;function b(c,d){c=c-0x1e2;const e=a();let f=e[c];return f;}(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x204))/0x1+parseInt(i(0x20c))/0x2*(-parseInt(i(0x212))/0x3)+-parseInt(i(0x1f1))/0x4+-parseInt(i(0x20e))/0x5*(parseInt(i(0x1f6))/0x6)+parseInt(i(0x1f8))/0x7*(-parseInt(i(0x1fb))/0x8)+parseInt(i(0x20b))/0x9+parseInt(i(0x1e3))/0xa*(parseInt(i(0x1e8))/0xb);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x39439));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x210)]=css`
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
    `;static [j(0x214)]=html`
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
    `;static ['is']=j(0x215);[j(0x211)];get['title'](){return this['_title'];}set['title'](d){this['_title']=d;}['selectedType'];[j(0x1f2)]=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];['_filter'];['_descriptionDiv'];['_addBtn'];[j(0x200)];[j(0x1f4)];constructor(){const k=j;super(),this[k(0x1ef)](),this[k(0x219)]['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this[k(0x1e5)]=this['_getDomElement']('description'),this['_addBtn']=this[k(0x1e4)](k(0x202)),this['_filter']=this['_getDomElement']('filter'),this[k(0x1e7)][k(0x1fe)]=()=>{const l=k,d=this[l(0x1e7)][l(0x1e6)];this['_tree']['filterNodes'](e=>new RegExp(d,'i')['test'](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](k(0x1f0)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const m=k;this['selectedType']=d['node']['title'],this[m(0x1ee)][m(0x213)]=![],this['_renderDescription'](d['node']['title']);},'dblclick':d=>{const n=k;return this[n(0x218)]=d['node'][n(0x207)],this['commandTypeChosen']['emit'](),![];},'render':d=>{const o=k;d[o(0x21c)]&&(d[o(0x21a)]['oncontextmenu']=f=>{const p=o;return f[p(0x1fa)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=k;return d[q(0x206)][q(0x209)][q(0x217)]='copy',d['event']['dataTransfer'][q(0x20d)]='copy',!![];}}});}async['ready'](){const r=j;this[r(0x205)](),this[r(0x1f7)](null,!![]),this[r(0x1fd)]();}['addClicked'](){const s=j;if(this[s(0x218)])this['commandTypeChosen']['emit']();}[j(0x20a)](){const t=j;this[t(0x1f9)]['emit']();}['_renderDescription'](d){const u=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv'][u(0x216)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'<span\x20class=\x22hint\x22>'+e['description']+u(0x1ff)+highlightJson(e[u(0x21e)])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e['note']?u(0x1fc)+e['note']+'</div>':'')+u(0x1ec);return;}const f=this[u(0x200)]?.[u(0x21b)]?.[d]?.[u(0x203)];this[u(0x1e5)]['innerHTML']=u(0x21d)+d+u(0x20f)+(f?'<div\x20class=\x22note\x22>'+f+'</div>':'')+u(0x1e9);}[j(0x201)](d,e){const v=j;this['_typeInfo']=d,this[v(0x1f4)]=e??{};const f=Object[v(0x208)](d[v(0x21b)])[v(0x1ea)](g=>d[v(0x21b)][g][v(0x1f3)]===v(0x1eb)&&g!=='ScriptCommands');this['_tree'][v(0x1ed)]['addChildren'](f[v(0x1e2)](g=>({'title':g})));}}function a(){const w=['shadowRoot','nodeElem','definitions','isNew','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','example','map','15353830RdIvmY','_getDomElement','_descriptionDiv','value','_filter','11OJapeV','\x0a\x20\x20\x20\x20','filter','object','\x0a\x20\x20\x20\x20\x20\x20','root','_addBtn','_restoreCachedInititalValues','commandList','305868nTlWQa','commandTypeChosen','type','_descriptions','define','36wkpNjI','_bindingsParse','226961Kscqtz','closeRequested','preventDefault','88PRHoYE','<div\x20class=\x22note\x22>','_assignEvents','onkeyup','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','_typeInfo','loadCommands','addBtn','description','394508hWhOzm','_parseAttributesToProperties','event','title','keys','dataTransfer','closeClicked','3697299XUarJX','186OnQENX','dropEffect','355765ScQbmu','</div>\x0a\x20\x20\x20\x20\x20\x20','style','_title','14745YzzzfC','disabled','template','node-projects-visualization-simple-script-command-picker','innerHTML','effectAllowed','selectedType'];a=function(){return w;};return a();}customElements[j(0x1f5)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);