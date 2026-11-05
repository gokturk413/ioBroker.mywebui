const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=-parseInt(i(0xb7))/0x1+parseInt(i(0x9c))/0x2*(-parseInt(i(0xc7))/0x3)+-parseInt(i(0xb9))/0x4+-parseInt(i(0xbf))/0x5+-parseInt(i(0xa7))/0x6*(-parseInt(i(0xa1))/0x7)+parseInt(i(0xb4))/0x8*(-parseInt(i(0xc3))/0x9)+parseInt(i(0xb6))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x68dce));function b(c,d){c=c-0x95;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};function a(){const w=['definitions','2174yrgfJa','object','title','disabled','onkeyup','94360uZoWHg','_renderDescription','<div\x20class=\x22note\x22>','preventDefault','commandTypeChosen','template','186lwmAhT','\x0a\x20\x20\x20\x20','_typeInfo','dataTransfer','_descriptions','_tree','value','innerHTML','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>','_descriptionDiv','note','emit','addChildren','51912jtPyhX','_bindingsParse','15203190VKKbyl','163075pjGnHm','oncontextmenu','862444rqtrQc','example','copy','addClicked','_filter','nodeElem','639915vXJhhc','</div>','description','test','648DVLRhn','closeRequested','filterNodes','_addBtn','1476DmYVme','_restoreCachedInititalValues','filter','node','selectedType','type','_getDomElement'];a=function(){return w;};return a();}import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    `;static [j(0xa6)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get[j(0x9e)](){return this['_title'];}set[j(0x9e)](d){this['_title']=d;}['selectedType'];[j(0xa5)]=new TypedEvent();['closeRequested']=new TypedEvent();[j(0xac)];[j(0xbd)];['_descriptionDiv'];['_addBtn'];['_typeInfo'];['_descriptions'];constructor(){const k=j;super(),this[k(0x95)](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this[k(0xb0)]=this[k(0x9a)](k(0xc1)),this[k(0xc6)]=this['_getDomElement']('addBtn'),this['_filter']=this[k(0x9a)](k(0x96)),this['_filter'][k(0xa0)]=()=>{const l=k,d=this['_filter'][l(0xad)];this['_tree'][l(0xc5)](e=>new RegExp(d,'i')[l(0xc2)](e[l(0x9e)]),{});},this[k(0xac)]=new Wunderbaum({...defaultOptions,'element':this['_getDomElement']('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':'hide','highlight':!![]},'activate':d=>{const m=k;this[m(0x98)]=d[m(0x97)][m(0x9e)],this[m(0xc6)][m(0x9f)]=![],this[m(0xa2)](d['node'][m(0x9e)]);},'dblclick':d=>{const n=k;return this[n(0x98)]=d['node']['title'],this[n(0xa5)][n(0xb2)](),![];},'render':d=>{const o=k;d['isNew']&&(d[o(0xbe)][o(0xb8)]=f=>{const p=o;return f[p(0xa4)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=k;return d['event'][q(0xaa)]['effectAllowed']=q(0xbb),d['event']['dataTransfer']['dropEffect']='copy',!![];}}});}async['ready'](){const r=j;this['_parseAttributesToProperties'](),this[r(0xb5)](null,!![]),this['_assignEvents']();}[j(0xbc)](){const s=j;if(this[s(0x98)])this[s(0xa5)][s(0xb2)]();}['closeClicked'](){const t=j;this[t(0xc4)][t(0xb2)]();}[j(0xa2)](d){const u=j,e=this['_descriptions']?.[d];if(e){this['_descriptionDiv']['innerHTML']=u(0xaf)+d+'<span\x20class=\x22hint\x22>'+e['description']+'</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>'+highlightJson(e[u(0xba)])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e[u(0xb1)]?u(0xa3)+e['note']+u(0xc0):'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this[u(0xa9)]?.['definitions']?.[d]?.[u(0xc1)];this[u(0xb0)][u(0xae)]='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?'<div\x20class=\x22note\x22>'+f+'</div>':'')+u(0xa8);}['loadCommands'](d,e){const v=j;this[v(0xa9)]=d,this[v(0xab)]=e??{};const f=Object['keys'](d['definitions'])['filter'](g=>d[v(0x9b)][g][v(0x99)]===v(0x9d)&&g!=='ScriptCommands');this['_tree']['root'][v(0xb3)](f['map'](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);