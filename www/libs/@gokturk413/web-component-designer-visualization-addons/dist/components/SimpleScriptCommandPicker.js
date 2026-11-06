const j=b;(function(d,e){const i=b,f=d();while(!![]){try{const g=parseInt(i(0x20b))/0x1*(-parseInt(i(0x1e9))/0x2)+parseInt(i(0x20c))/0x3*(parseInt(i(0x1f8))/0x4)+-parseInt(i(0x20e))/0x5+parseInt(i(0x1fd))/0x6*(parseInt(i(0x1fa))/0x7)+-parseInt(i(0x1f0))/0x8+-parseInt(i(0x210))/0x9*(parseInt(i(0x1f3))/0xa)+parseInt(i(0x1ff))/0xb;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x6ffe3));function b(c,d){c=c-0x1e8;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';function a(){const w=['18WSlpyR','dataTransfer','copy','commandTypeChosen','nodeElem','_addBtn','node','<div\x20class=\x22note\x22>','addBtn','style','event','hide','1361634rTWEdX','root','template','</div>','isNew','ScriptCommands','oncontextmenu','6477320mTHSLQ','_descriptions','_bindingsParse','3367060aAdsBK','</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<pre\x20class=\x22snippet\x22>','_typeInfo','addChildren','\x0a\x20\x20\x20\x20','4UqJOWs','_renderDescription','145271VHRSqX','title','closeRequested','192nvkFKw','emit','21516066LpOXcS','object','_getDomElement','innerHTML','_title','filterNodes','definitions','_tree','selectedType','note','_filter','type','1UCgBIF','1077114OxGNGR','preventDefault','1782615yJkFUX','<span\x20class=\x22hint\x22>'];a=function(){return w;};return a();}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{highlightJson}from'../scripting/JsonSnippetHighlighter.js';export class SimpleScriptCommandPicker extends BaseCustomWebComponentConstructorAppend{static [j(0x219)]=css`
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
    `;static [j(0x1eb)]=html`
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
    `;static ['is']='node-projects-visualization-simple-script-command-picker';['_title'];get[j(0x1fb)](){const k=j;return this[k(0x203)];}set['title'](d){this['_title']=d;}[j(0x207)];[j(0x213)]=new TypedEvent();['closeRequested']=new TypedEvent();['_tree'];['_filter'];['_descriptionDiv'];['_addBtn'];['_typeInfo'];['_descriptions'];constructor(){const l=j;super(),this['_restoreCachedInititalValues'](),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptCommandPicker['style']],this['_descriptionDiv']=this['_getDomElement']('description'),this[l(0x215)]=this[l(0x201)](l(0x218)),this[l(0x209)]=this[l(0x201)]('filter'),this[l(0x209)]['onkeyup']=()=>{const m=l,d=this['_filter']['value'];this['_tree'][m(0x204)](e=>new RegExp(d,'i')['test'](e[m(0x1fb)]),{});},this[l(0x206)]=new Wunderbaum({...defaultOptions,'element':this[l(0x201)]('commandList'),'icon':![],'filter':{'autoExpand':!![],'mode':l(0x1e8),'highlight':!![]},'activate':d=>{const n=l;this[n(0x207)]=d['node']['title'],this[n(0x215)]['disabled']=![],this[n(0x1f9)](d[n(0x216)][n(0x1fb)]);},'dblclick':d=>{return this['selectedType']=d['node']['title'],this['commandTypeChosen']['emit'](),![];},'render':d=>{const o=l;d[o(0x1ed)]&&(d[o(0x214)][o(0x1ef)]=f=>{const p=o;return f[p(0x20d)](),![];});},'dnd':{'guessDropEffect':![],'serializeClipboardData':!![],'dragStart':d=>{const q=l;return d[q(0x21a)][q(0x211)]['effectAllowed']=q(0x212),d['event']['dataTransfer']['dropEffect']='copy',!![];}}});}async['ready'](){const r=j;this['_parseAttributesToProperties'](),this[r(0x1f2)](null,!![]),this['_assignEvents']();}['addClicked'](){const s=j;if(this['selectedType'])this[s(0x213)][s(0x1fe)]();}['closeClicked'](){const t=j;this[t(0x1fc)]['emit']();}[j(0x1f9)](d){const u=j,e=this[u(0x1f1)]?.[d];if(e){this['_descriptionDiv'][u(0x202)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+u(0x20f)+e['description']+u(0x1f4)+highlightJson(e['example'])+'</pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+(e[u(0x208)]?'<div\x20class=\x22note\x22>'+e[u(0x208)]+'</div>':'')+'\x0a\x20\x20\x20\x20\x20\x20';return;}const f=this['_typeInfo']?.[u(0x205)]?.[d]?.['description'];this['_descriptionDiv']['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22cmd-title\x22>'+d+'</div>\x0a\x20\x20\x20\x20\x20\x20'+(f?u(0x217)+f+u(0x1ec):'')+u(0x1f7);}['loadCommands'](d,e){const v=j;this[v(0x1f5)]=d,this[v(0x1f1)]=e??{};const f=Object['keys'](d['definitions'])['filter'](g=>d['definitions'][g][v(0x20a)]===v(0x200)&&g!==v(0x1ee));this[v(0x206)][v(0x1ea)][v(0x1f6)](f['map'](g=>({'title':g})));}}customElements['define'](SimpleScriptCommandPicker['is'],SimpleScriptCommandPicker);