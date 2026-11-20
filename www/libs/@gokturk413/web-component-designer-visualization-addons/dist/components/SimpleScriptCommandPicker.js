const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0x140))/0x1*(-parseInt(i(0x122))/0x2)+-parseInt(i(0x136))/0x3+parseInt(i(0x13c))/0x4*(parseInt(i(0x13e))/0x5)+parseInt(i(0x119))/0x6+parseInt(i(0x120))/0x7*(-parseInt(i(0x146))/0x8)+parseInt(i(0x141))/0x9+-parseInt(i(0x13d))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xbb211));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x119;const e=a();let f=e[c];return f;}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';function a(){const x=['title','_descriptions','commandTypeChosen','_getDomElement','node','_descriptionDiv','type','</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','loadCommands','384540rktyzf','_filter','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','oncontextmenu','dataTransfer','closeRequested','8DlVFeV','9035540qtQbae','271960JWsNHV','keys','43DAWnea','6293664GnbByo','_renderDescription','onkeyup','dropEffect','define','3336zSGOqu','node-projects-visualization-simple-script-command-picker','filter','closeClicked','<div\x20class=\x22note\x22>','_tree','template','emit','2348850zdPchc','innerHTML','_title','preventDefault','selectedType','nodeElem','addChildren','1883xFnLcf','style','33062eVnoBh','example','</div>','commandList','object','<span\x20class=\x22hint\x22>','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','definitions','_bindingsParse','description','_typeInfo'];a=function(){return x;};return a();}import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x121)]=css`
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
    `;static [j(0x14c)]=html`
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
    `;static ['is']=j(0x147);[j(0x11b)];get['title'](){return this['_title'];}set['title'](d){const k=j;this[k(0x11b)]=d;}['selectedType'];[j(0x12f)]=new TypedEvent();[j(0x13b)]=new TypedEvent();[j(0x14b)];['_filter'];[j(0x132)];['_addBtn'];['_typeInfo'];['_descriptions'];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this[l(0x130)]('description'),this['_addBtn']=this[l(0x130)]('addBtn'),this[l(0x137)]=this['_getDomElement'](l(0x148)),this['_filter'][l(0x143)]=()=>{const m=l,d=this[m(0x137)]['value'];this['_tree']['filterNodes'](e=>new RegExp(d,'i')['test'](e['title']),{});},this['_tree']=new Wunderbaum({...defaultOptions,'element':this['_getDomElement'](l(0x125)),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const n=l;this[n(0x11d)]=d['node'][n(0x12d)],this['_addBtn']['disabled']=![],this['_renderDescription'](d[n(0x131)]['title']);},'dblclick':d=>{const o=l;return this['selectedType']=d[o(0x131)][o(0x12d)],this[o(0x12f)]['emit'](),![];},'render':d=>{const p=l;d['isNew']&&(d[p(0x11e)][p(0x139)]=f=>{const q=p;return f[q(0x11c)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const r=l;return d['event'][r(0x13a)]['effectAllowed']='copy',d['event'][r(0x13a)][r(0x144)]='copy',!![];}}});}async['ready'](){const s=j;this['_parseAttributesToProperties'](),this[s(0x12a)](null,!![]),this['_assignEvents']();}['addClicked'](){const t=j;if(this['selectedType'])this[t(0x12f)][t(0x14d)]();}[j(0x149)](){const u=j;this['closeRequested'][u(0x14d)]();}[j(0x142)](d){const v=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv'][v(0x11a)]=v(0x138)+d+v(0x127)+e['description']+v(0x128)+highlightJson(e[v(0x123)])+v(0x134)+(e['note']?v(0x14a)+e['note']+v(0x124):'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[v(0x12c)]?.['definitions']?.[d]?.[v(0x12b)];this['_descriptionDiv'][v(0x11a)]='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?v(0x14a)+f+'</div>':'')+'\x0a\x20\x20\x20\x20';}[j(0x135)](d,e){const w=j;this['_typeInfo']=d,this[w(0x12e)]=e??{};const f=Object[w(0x13f)](d[w(0x129)])[w(0x148)](g=>d[w(0x129)][g][w(0x133)]===w(0x126)&&g!=='ScriptCommands');this['_tree']['root'][w(0x11f)](f['map'](g=>({'title':g})));}}customElements[j(0x145)](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);