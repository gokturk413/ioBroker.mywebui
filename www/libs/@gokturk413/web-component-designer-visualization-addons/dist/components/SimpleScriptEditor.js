const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x1dc))/0x1*(-parseInt(O(0x1fc))/0x2)+-parseInt(O(0x1cc))/0x3*(parseInt(O(0x22d))/0x4)+parseInt(O(0x211))/0x5*(-parseInt(O(0x1f9))/0x6)+parseInt(O(0x1c3))/0x7+parseInt(O(0x1ab))/0x8+-parseInt(O(0x1d3))/0x9+parseInt(O(0x1e0))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x3d6d7));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';function a(){const ay=['signal','color:#333;\x20white-space:pre-line;','object','srcdoc','specialAllreadyAdded','1QmAeRr','classList','else','helpRequested','11427600XyoYRP','root','yield','flex','true','addChildren','moveTo','length','isNew','children','Simple\x20Script\x20Editor\x20Help','public','bindableObjectsTarget','script','while','implements','_getBranchContainerNode','refresh','bindingDoubleClicked','scriptCommandsTypeInfo','expression','cssText','event','display','display:inline-block;\x20width:32px;','5466ZOyJPT','abort','format','445878FdrYUp','elseCommands','onchange','wb-drag-source','void','addEventListener','afterbegin','data','placeholder','edit\x20complex\x20value','throw','onclick','icons/delete.svg','innerText','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','...','getScriptCommands','protected','createTreeItem','content-box','prepend','1085FOqLpd','preventDefault','center','parentElement','node-projects-visualization-simple-script-editor','option','width','mousedown','closest','catch','return','button','function','Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','parse','commandTypeChosen','name','singleRow','flex:0\x200\x20120px;','for','createElement','types','parent','Complex\x20for\x20\x22','find','setPropertyValue','visualizationHandler','IScriptMultiplexValue','4qKZzlT','signalInProperty','branch','arguments','activated','querySelector','_showingCode','helpClicked','toggleCodeView','Add\x20Script\x20Command','title','selectedObject','commandList','formula','borderColor','_propertygrid','finally','Duplicate','_script','nowrap','justifyContent','Edit\x20signals','node','Code','setActive','\x20if\x20empty)','drag-handle','property','context','upgradeScriptCommand','boxSizing','show','_parseCodeViewScript','_title','trueCommands','loadScript','append','propertyNodeContextMenu','super','source','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','flex:1\x201\x20auto;','flex:0\x200\x2028px;\x20width:20px;','map','_showCodeView','instanceServiceContainer','_parseAttributesToProperties','display:inline-block;\x20width:24px;','cmd','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','Open\x20in\x20larger\x20editor','test','enter\x20value:','before','serviceContainer','oninput','dataTransfer','relative','code','height','_restoreCachedInititalValues','_commandListDiv','join','nodeElem','propertyPath','filter','toggle','null','elementProperty','textContent','this','Remove\x20signal','define','_addCommandBtn','remove','copy','continue','over','value','insertAdjacentElement','_getDomElement','splitView','instanceof','varName','item','e.g.\x20srm.rbg{__tagRoot}.error','extends','del','ellipsis','properties','trim','hidden','<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>','oncontextmenu','text/plain','move','try','type','20px','img','className','after','textOverflow','1563536ilUyKp','isArray','style','propertiesTypeInfo','_draggedNode','switch','code-mode','getTypeInfo','getData','span.wb-title','dropEffect','Invalid\x20JSON:\x0a','forEach','typeName','_commandListFancyTree','position','input','visualizationShell','includes','openConfirmation','push','opacity','#fdecea','some','967246BWiWqv','nodeToCommand','debugger','Typ','stringify','_codeView','language','package','emit','1274160bgVmPj','span','region','openModal','div','dragend','appendChild','3414843xQNqxN','_splitView','.drag-handle','_dragFromHandle'];a=function(){return ay;};return a();}const SAME_TREE_MOVE_MIME='application/x-simple-script-move';export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static [P(0x1ad)]=css`
        :host {
            background: var(--ui-surface, #252b38);
            color: var(--text-color, #e8e8ea);
            --wb-background-color: transparent;
            --wb-node-text-color: var(--text-color, #e8e8ea);
            --wb-alternate-row-color: transparent;
        }

    .root {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    .content {
      flex: 1 1 auto;
      min-height: 0;
      position: relative;
    }

    .split-view {
      height: calc(100% - 4px);
      width: calc(100% - 4px);
      position: relative;
      margin: 2px;
    }

    .list-pane {
      width: 48%;
      height: 100%;
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    .list-content {
      flex: 1 1 auto;
      min-height: 0;
      position: relative;
    }

    .grid-pane {
      width: 52%;
      height: 100%;
      position: relative;
      box-sizing: border-box;
    }

    .split-view.code-mode .grid-pane {
      display: none;
    }

    .split-view.code-mode::part(splitter) {
      display: none;
    }

    #commandList {
      position: absolute;
      inset: 0;
      overflow-x: hidden;
      overflow-y: auto;
      box-sizing: border-box;
    }

    #commandList.hidden {
      display: none;
    }

    #commandList {
      --wb-icon-outer-width: 22px;
    }

    #commandList i.wb-expander {
      background-size: 9px 9px;
      background-position-x: 6px;
      background-position-y: 6px;
      opacity: 0.55;
    }

    .code-view {
      position: absolute;
      inset: 0;
      display: none;
    }

    .code-view.visible {
      display: block;
    }

    node-projects-visualization-property-grid {
      width: 100%;
      height: 100%;
    }

    .toolbar {
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      flex: 0 0 auto;
      width: 100%;
      height: 36px;
      padding: 4px 8px;
      border-top: 1px solid #ccc;
      background-color: rgb(230, 230, 230);
    }

    .toolbar button {
      box-sizing: border-box;
      padding: 6px 16px;
      border-radius: 4px;
      border: 1px solid #b0b0b0;
      background: white;
      font-size: 12px;
      cursor: pointer;
    }

    .toolbar button:hover:not(:disabled) {
      background: #f0f0f0;
      border-color: #909090;
    }

    .toolbar button:active:not(:disabled) {
      background: #e2e2e2;
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

    .toolbar .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      padding: 0;
      box-sizing: border-box;
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .toolbar .icon-btn:hover {
      background: #eee;
    }

    .drag-handle {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #888;
      cursor: grab;
    }

    .cmd {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 0 2px;
      background: white;
    }

    .cmd img {
      width: 12px;
      height: 12px;
      cursor: pointer;
    }
  `;static ['template']=html`
    <div class="root">
      <div class="content">
        <node-projects-split-view
          id="splitView"
          class="split-view"
          orientation="horizontal"
        >
          <div id="listPane" class="list-pane">
            <div id="listContent" class="list-content">
              <div id="commandList"></div>
              <node-projects-code-view-monaco
                id="codeView"
                class="code-view"
                language="json"
              ></node-projects-code-view-monaco>
            </div>
            <div class="toolbar">
              <button
                id="addCommandBtn"
                class="primary"
                @click="[[this.addCommand()]]"
              >
                Add Command
              </button>
              <button id="codeToggleBtn" @click="[[this.toggleCodeView()]]">
                Code
              </button>
              <span class="spacer"></span>
              <button
                class="icon-btn"
                title="Help"
                @click="[[this.helpClicked()]]"
              >
                <svg viewBox="0 0 512 512" width="16" height="16">
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="grid-pane">
            <node-projects-visualization-property-grid
              id="propertygrid"
            ></node-projects-visualization-property-grid>
          </div>
        </node-projects-split-view>
      </div>
    </div>
  `;static ['is']=P(0x215);['_title'];get['title'](){const Q=P;return this[Q(0x24e)];}set['title'](d){this['_title']=d;}[P(0x17a)];[P(0x25a)];['visualizationHandler'];[P(0x1bc)];['scriptCommandsTypeInfo'];[P(0x1ae)];[P(0x1df)]=new TypedEvent();['commandDescriptions']={...nativeScriptCommandDescriptions};['_script'];[P(0x181)];['_commandListFancyTree'];[P(0x23c)];[P(0x1d4)];[P(0x1c8)];['_codeToggleBtn'];['_addCommandBtn'];['_showingCode']=![];['_dragFromHandle']=![];[P(0x1af)]=null;constructor(){const R=P;super(),this[R(0x180)](),this[R(0x181)]=this['_getDomElement'](R(0x239)),this[R(0x23c)]=this['_getDomElement']('propertygrid'),this['_splitView']=this['_getDomElement'](R(0x195)),this[R(0x1c8)]=this['_getDomElement']('codeView'),this['_codeToggleBtn']=this['_getDomElement']('codeToggleBtn'),this[R(0x18d)]=this[R(0x194)]('addCommandBtn');const d=this[R(0x194)]('listContent');d[R(0x201)](R(0x218),e=>{const S=R;this[S(0x1d6)]=!!e['target']?.[S(0x219)](S(0x1d5));}),document[R(0x201)](R(0x1d1),()=>{this['_draggedNode']=null;},!![]),d[R(0x201)]('dragover',e=>{const T=R;e[T(0x212)]();if(e[T(0x17c)]){const f=e[T(0x17c)]['types'][T(0x1bd)](SAME_TREE_MOVE_MIME);e[T(0x17c)]['dropEffect']=f?'move':T(0x18f);}}),d['addEventListener']('drop',e=>{const U=R;e[U(0x212)]();const f=e['dataTransfer']?.[U(0x226)][U(0x1bd)](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this['_commandListFancyTree']['root']['children'],h=g?.[g[U(0x1e7)]-0x1];if(h)this[U(0x1af)][U(0x1e6)](h,'after');this['_draggedNode']['setClass']('wb-drag-source',![]);}else{const i=e[U(0x17c)]?.[U(0x1b3)]('text/plain');if(i){const j={'type':i};this[U(0x1b9)][U(0x1e1)]['addChildren'](this[U(0x20e)](j));}}}),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptEditor['style']];}async['ready'](){const V=P;this[V(0x25b)](),this['_bindingsParse'](null,!![]),this['_assignEvents']();let d=async k=>{const W=V;let l=new VisualizationPropertyGrid();l[W(0x22b)]=this['visualizationHandler'],l['visualizationShell']=this['visualizationShell'],l[W(0x17a)]=this['serviceContainer'],l['instanceServiceContainer']=this[W(0x25a)],l[W(0x1ec)]=W(0x1ed),l[W(0x1b2)]=(n,o)=>typeInfoFromJsonSchema(this[W(0x1ae)],n,o),l['showHead']=![],l[W(0x1b8)]=W(0x22c),l[W(0x237)]=W(0x228)+k[W(0x184)]+'\x22';if(typeof k['value']===W(0x1d9))l['selectedObject']=k[W(0x192)]??{};else l[W(0x238)]={};l[W(0x1f2)]=n=>{const X=W;if(n['bindabletype']==X(0x248))l['setPropertyValue'](X(0x254),X(0x248));else n['bindabletype']=='context'?l['setPropertyValue']('source',X(0x249)):l[X(0x22a)](X(0x254),'signal');l['setPropertyValue'](X(0x221),n['fullName']),l[X(0x1f1)]();};let m=await this[W(0x1bc)][W(0x1be)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k[W(0x184)],l['selectedObject']),this['_propertygrid'][W(0x1f1)]());},e=async k=>{const Y=V,l=new CodeViewMonaco();l[Y(0x1c9)]='javascript',l[Y(0x1ad)][Y(0x1ba)]='relative',l['code']=k[Y(0x192)]??'';const m=await this[Y(0x1bc)]['openConfirmation'](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k[Y(0x184)],l['code']),this['_propertygrid'][Y(0x1f1)]());};const f=['signal',V(0x248),V(0x188),V(0x22e),'event','parameter','context','complexString','complexSignal',V(0x1f4)],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set(['break','case',V(0x21a),'class','const',V(0x190),V(0x1c5),'default','delete','do',V(0x1de),'export',V(0x19a),V(0x23d),V(0x224),V(0x21d),'if','import','in',V(0x196),'new',V(0x21b),V(0x253),V(0x1b0),V(0x18a),V(0x206),V(0x1a4),'typeof','var',V(0x200),V(0x1ee),'with',V(0x1e2),'let','static','enum','await',V(0x1ef),V(0x1ca),V(0x20d),'interface','private',V(0x1eb),V(0x187),'true','false','undefined',V(0x230),'eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':V(0x255),'elementProperty':'a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':'read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','parameter':'a\x20parameter\x20you\x20hand\x20over','context':'a\x20value\x20of\x20the\x20context','complexString':'a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','complexSignal':'read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const a0=V,l=(k['value']??[])['map'](E=>({...E})),m=E=>{const Z=b,F=(l[E]['varName']??'')[Z(0x19e)]();if(!F)return null;if(!g[Z(0x177)](F))return'\x22'+F+'\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.';if(h['has'](F))return'\x22'+F+'\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.';if(l[Z(0x1c2)]((G,H)=>H!==E&&(G[Z(0x197)]??'')['trim']()===F))return'\x22'+F+'\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.';return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[a0(0x225)]('div');o['style'][a0(0x1f5)]=a0(0x20a);const p=document['createElement']('div');p[a0(0x1ad)]['cssText']=a0(0x25e);const q=document['createElement'](a0(0x1cd));q['textContent']='Name',q[a0(0x1ad)][a0(0x1f5)]=a0(0x223);const r=document[a0(0x225)]('span');r[a0(0x189)]=a0(0x1c6),r[a0(0x1ad)]['cssText']='flex:0\x200\x20130px;';const s=document['createElement']('span');s['textContent']='Signal',s[a0(0x1ad)][a0(0x1f5)]=a0(0x256);const t=document[a0(0x225)]('span');t['style'][a0(0x1f5)]='flex:0\x200\x2022px;',p[a0(0x251)](q,r,s,t),o['appendChild'](p);const u=document[a0(0x225)]('div');u['style'][a0(0x1f5)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o['appendChild'](u);const v=document['createElement'](a0(0x1d0));v['style'][a0(0x1f5)]='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0x225)](a0(0x1d0));w['style'][a0(0x1f5)]='font-weight:bold;\x20margin-bottom:2px;';const x=document[a0(0x225)](a0(0x1d0));x['style'][a0(0x1f5)]=a0(0x1d8),v[a0(0x251)](w,x);const y=E=>{const a1=a0;w['textContent']='Typ:\x20'+E,x[a1(0x189)]=i[E]??'';},z=[],A=()=>{const a2=a0;l[a2(0x1b7)]((E,F)=>{const a3=a2,G=z[F];if(!G)return;const H=m(F);G['title']=H??a3(0x21e)+F+a3(0x246),G['style'][a3(0x23b)]=H?'#c0392b':'',G['style']['backgroundColor']=H?a3(0x1c1):'';});},B=()=>{const a4=a0;u['innerHTML']='',z['length']=0x0,l[a4(0x1b7)]((E,F)=>{const a5=a4,G=document['createElement']('div');G[a5(0x1ad)][a5(0x1f5)]='display:flex;\x20align-items:center;\x20gap:4px;';const H=document[a5(0x225)](a5(0x1bb));H['value']=E['varName']??'',H[a5(0x204)]='__'+F,H[a5(0x1ad)][a5(0x1f5)]=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H[a5(0x17b)]=()=>{E['varName']=H['value']||undefined,A();},z[a5(0x1bf)](H),G[a5(0x1d2)](H);const I=document[a5(0x225)]('select');I['style'][a5(0x1f5)]=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document[a5(0x225)](a5(0x216));N[a5(0x192)]=M,N[a5(0x189)]=M;if(E['source']===M)N['selected']=!![];I['appendChild'](N);}I[a5(0x1fe)]=()=>{const a6=a5;E['source']=I[a6(0x192)],y(I['value']);},I['onfocus']=()=>y(I['value']),G[a5(0x1d2)](I);const J=document[a5(0x225)]('input');J[a5(0x192)]=E['name']??'',J[a5(0x204)]=a5(0x199),J[a5(0x1ad)]['cssText']=n+'\x20flex:1\x201\x20auto;',J['oninput']=()=>{const a7=a5;E[a7(0x221)]=J[a7(0x192)];},G['appendChild'](J);const K=document[a5(0x225)](a5(0x21c));K[a5(0x237)]=a5(0x18b),K[a5(0x1ad)][a5(0x1f5)]=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document['createElement'](a5(0x1a7));L['src']=assetsPath+a5(0x208),L[a5(0x1ad)]['cssText']='width:12px;\x20height:12px;',K[a5(0x1d2)](L),K['onclick']=()=>{l['splice'](F,0x1),B();},G['appendChild'](K),u['appendChild'](G);}),A();};B();const C=document[a0(0x225)](a0(0x21c));C['textContent']='+\x20Add\x20signal',C['style'][a0(0x1f5)]=n+'\x20align-self:flex-start;\x20padding:0\x208px;',C[a0(0x207)]=()=>{l['push']({'source':'signal','name':''}),B();},o[a0(0x1d2)](C),y(l[0x0]?.['source']??a0(0x1d7)),o[a0(0x1d2)](v);const D=await this['visualizationShell'][a0(0x1be)](o,{'title':a0(0x242),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x23c)]['setPropertyValue'](k['propertyPath'],l),this[a0(0x23c)][a0(0x1f1)]());};this[V(0x23c)][V(0x22b)]=this[V(0x22b)],this[V(0x23c)]['visualizationShell']=this['visualizationShell'],this[V(0x23c)]['serviceContainer']=this['serviceContainer'],this['_propertygrid']['instanceServiceContainer']=this[V(0x25a)],this[V(0x23c)]['bindableObjectsTarget']='script',this['_propertygrid']['setNameColumnWidth'](0x82),this['_propertygrid'][V(0x1b2)]=(k,l)=>{const a8=V,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m[a8(0x19d)][a8(0x185)](n=>n['name']!=='trueCommands'&&n[a8(0x221)]!=='elseCommands')),m;},this[V(0x23c)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const a9=V;if(!k[a9(0x1db)]){k[a9(0x1db)]=!![];if(k[a9(0x1fb)]==='collection'){}else{if(k['format']==='signalList'){let p=document['createElement'](a9(0x21c));p['style']['height']='calc(100%\x20-\x206px)',p[a9(0x1ad)]['position']=a9(0x17d),p[a9(0x1ad)][a9(0x1f7)]=a9(0x1e3),p['style'][a9(0x241)]=a9(0x213),p[a9(0x1ad)]['width']=a9(0x1a6),p['style']['boxSizing']=a9(0x20f),p['innerText']=a9(0x19b),p[a9(0x207)]=()=>{const aa=a9;this['_propertygrid'][aa(0x22a)](m,undefined),this['_propertygrid']['refresh']();},n[a9(0x183)][a9(0x193)](a9(0x202),p);const q=Array['isArray'](l)?l:[];let r=document[a9(0x225)](a9(0x1d0));r['style']['display']='flex';let s=document[a9(0x225)]('span');s[a9(0x209)]=q['map']((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.[a9(0x254)]??'')+':'+(u?.[a9(0x221)]??''))[a9(0x182)](',\x20'),s[a9(0x1ad)]['overflow']=a9(0x19f),s[a9(0x1ad)]['whiteSpace']='nowrap',s[a9(0x1ad)]['textOverflow']='ellipsis',s['style']['flexGrow']='1',s[a9(0x237)]=JSON[a9(0x1c7)](q),r[a9(0x1d2)](s);let t=document[a9(0x225)]('button');return t[a9(0x209)]=a9(0x20b),t[a9(0x207)]=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n[a9(0x183)]['style']['display']=a9(0x1e3),r;}else{if(k['format']===a9(0x23a)){const u=document[a9(0x225)]('div');u[a9(0x1ad)][a9(0x1f5)]='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v['language']='javascript',v[a9(0x222)]=!![],v[a9(0x1ad)][a9(0x1f5)]='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v[a9(0x17e)]=l??'',v[a9(0x201)]('code-changed',()=>{const ab=a9;this[ab(0x23c)]['setPropertyValue'](m,v['code']);}),u['appendChild'](v);const w=document['createElement']('button');return w[a9(0x209)]='...',w['title']=a9(0x25f),w[a9(0x1ad)]['cssText']=a9(0x257),w['onclick']=()=>e({'value':v[a9(0x17e)],'propertyPath':m}),u[a9(0x1d2)](w),n[a9(0x183)][a9(0x1ad)]['display']=a9(0x1e3),u;}else{if(typeof l==='object'&&l!==null||k[a9(0x1fb)]==='complex'){let x=document['createElement'](a9(0x21c));x[a9(0x1ad)][a9(0x17f)]='calc(100%\x20-\x206px)',x['style'][a9(0x1ba)]='relative',x[a9(0x1ad)]['display']=a9(0x1e3),x[a9(0x1ad)][a9(0x241)]='center',x[a9(0x1ad)][a9(0x217)]='20px',x[a9(0x1ad)][a9(0x24b)]='content-box',x['innerText']=a9(0x19b),x[a9(0x207)]=()=>{this['_propertygrid']['setPropertyValue'](m,undefined),this['_propertygrid']['refresh']();},n['nodeElem'][a9(0x193)]('afterbegin',x);let y=document[a9(0x225)](a9(0x1d0));y['style']['display']='flex';let z=document['createElement'](a9(0x1cd));if(l)z['innerText']=(l[a9(0x254)]??'')+':\x20'+(l[a9(0x221)]??'');else z['innerText']='';z['style']['overflow']='hidden',z[a9(0x1ad)]['whiteSpace']=a9(0x240),z['style'][a9(0x1aa)]=a9(0x19c),z['style']['flexGrow']='1',z['title']=JSON[a9(0x1c7)](l),y['appendChild'](z);let A=document[a9(0x225)](a9(0x21c));return A[a9(0x209)]='...',A['onclick']=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n['nodeElem'][a9(0x1ad)]['display']=a9(0x1e3),y;}else{let B=document[a9(0x225)]('button');B[a9(0x1ad)][a9(0x17f)]='calc(100%\x20-\x206px)',B['style']['position']=a9(0x17d),B['style'][a9(0x1f7)]=a9(0x1e3),B['style'][a9(0x241)]='center',B[a9(0x1ad)][a9(0x217)]=a9(0x1a6),B[a9(0x1ad)]['boxSizing']='content-box',B[a9(0x237)]='complex\x20property\x20value',B[a9(0x1ad)][a9(0x1c0)]='0.2',B['innerText']='...',B[a9(0x207)]=()=>{d({'value':l,'propertyPath':m});},n[a9(0x183)]['insertAdjacentElement']('afterbegin',B),n['nodeElem']['style']['display']=a9(0x1e3);}}}}}return null;},this[V(0x23c)][V(0x252)]['on'](k=>{const ac=V;ContextMenu[ac(0x24c)]([{'title':ac(0x205),'action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ad=ac,l=prompt(ad(0x178));l&&(this[ad(0x23c)]['setPropertyValue'](k[ad(0x184)],l),this[ad(0x23c)]['refresh']());}},{'title':'remove\x20complex\x20value','action':async()=>{const ae=ac;this[ae(0x23c)][ae(0x22a)](k[ae(0x184)],undefined),this['_propertygrid'][ae(0x1f1)]();}}],k[ac(0x1f6)]);});}[P(0x234)](){const af=P,d=document[af(0x225)]('iframe');d[af(0x1da)]=simpleScriptEditorHelpHtml,d['style'][af(0x1f5)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['visualizationShell'][af(0x1cf)](d,{'title':af(0x1ea),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[af(0x1df)][af(0x1cb)]();}[P(0x235)](){const ag=P;if(!this[ag(0x233)]){const e=JSON['stringify']({'commands':this[ag(0x20c)]()},null,0x2);this[ag(0x1c8)]['update'](e),this[ag(0x259)](!![]);return;}const d=this['_parseCodeViewScript']();if(!d)return;this['_showCodeView'](![]),this[ag(0x250)](d);}[P(0x259)](d){const ah=P;this[ah(0x1c8)][ah(0x1dd)]['toggle']('visible',d),this['_commandListDiv']['classList']['toggle']('hidden',d),this[ah(0x1d4)][ah(0x1dd)][ah(0x186)](ah(0x1b1),d),this[ah(0x18d)]['disabled']=d,this['_codeToggleBtn']['innerText']=d?'Visual':ah(0x244),this['_showingCode']=d;if(d)requestAnimationFrame(()=>this['_codeView'][ah(0x231)]());}[P(0x24d)](){const ai=P;let d;try{d=JSON[ai(0x21f)](this['_codeView']['getText']());}catch(f){return alert(ai(0x1b6)+f['message']),null;}if(!Array[ai(0x1ac)](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}[P(0x250)](d){const aj=P;this[aj(0x23f)]=d;this[aj(0x1b9)]&&(this['_commandListFancyTree']['destroy'](),this['_commandListDiv']=this['_getDomElement'](aj(0x239)));let e=[];for(let f of this['_script']['commands']){f=ScriptUpgrades[aj(0x24a)](f),e[aj(0x1bf)](this[aj(0x20e)](f));}this['_commandListFancyTree']=new Wunderbaum({...defaultOptions,'element':this[aj(0x181)],'icon':![],'source':e,'activate':g=>{const ak=aj;this['_propertygrid']['selectedObject']=g['node'][ak(0x203)]['data'][ak(0x198)]??null;},'render':g=>{const al=aj,h=!!g['node'][al(0x203)][al(0x203)]?.['branch'];if(g[al(0x1e8)]){g['nodeElem'][al(0x1a1)]=k=>{const am=al;return k[am(0x212)](),![];};const j=document['createElement']('span');j['style'][al(0x1f5)]=al(0x25c),g[al(0x183)][al(0x210)](j);if(!h){const k=document['createElement'](al(0x1d0));k[al(0x1a8)]=al(0x247),k['title']='Drag\x20to\x20reorder',k['innerHTML']=al(0x1a0),g[al(0x183)]['prepend'](k);const l=g[al(0x183)][al(0x214)],m=document['createElement']('span');m[al(0x1ad)][al(0x1f5)]=al(0x1f8),g[al(0x183)]['appendChild'](m);const n=document['createElement'](al(0x1d0));n['className']=al(0x25d);const o=document[al(0x225)](al(0x1a7));o['src']=assetsPath+'icons/copy.svg',o[al(0x237)]=al(0x23e),o[al(0x207)]=()=>{const an=al,q=structuredClone(g['node'][an(0x203)]['data'][an(0x198)]),r=g[an(0x243)][an(0x227)]['addChildren'](this['createTreeItem'](q));r['moveTo'](g['node'],'after');};const p=document['createElement']('img');p['src']=assetsPath+al(0x208),p['title']='Remove',p[al(0x207)]=()=>g['node'][al(0x18e)](),n[al(0x251)](o,p),l[al(0x1d2)](n),g[al(0x183)]['_reservedRowWidth']=j['offsetWidth']+m['offsetWidth'];}else g['nodeElem']['_reservedRowWidth']=j['offsetWidth'];}const i=g['nodeElem']['_reservedRowWidth']??0x0;if(i){const q=g[al(0x183)][al(0x232)](al(0x1b4));if(q){const r=parseFloat(q[al(0x1ad)][al(0x217)]);if(!isNaN(r))q['style'][al(0x217)]=Math['max'](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ao=aj;if(!this[ao(0x1d6)])return![];return this['_draggedNode']=g[ao(0x243)],g['event'][ao(0x17c)]['effectAllowed']=ao(0x1a3),g[ao(0x1f6)][ao(0x17c)]['dropEffect']='move',g['event'][ao(0x17c)]['setData'](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{this['_draggedNode']=null;},'dragEnter':g=>{const ap=aj,h=g['event']['dataTransfer']?.['types'][ap(0x1bd)](SAME_TREE_MOVE_MIME);g[ap(0x1f6)][ap(0x17c)]['dropEffect']=h?'move':'copy';const i=!!g[ap(0x243)][ap(0x203)][ap(0x203)]?.[ap(0x22f)];return i?new Set([ap(0x191)]):new Set(['before',ap(0x1a9)]);},'dragOver':g=>{const aq=aj,h=g['event'][aq(0x17c)]?.[aq(0x226)][aq(0x1bd)](SAME_TREE_MOVE_MIME);g['event'][aq(0x17c)][aq(0x1b5)]=h?'move':aq(0x18f);},'drop':async g=>{const ar=aj,h=g[ar(0x1f6)]['dataTransfer']?.['types'][ar(0x1bd)](SAME_TREE_MOVE_MIME);if(g['region']===ar(0x191)){if(h&&this[ar(0x1af)])this['_draggedNode']['moveTo'](g[ar(0x243)],ar(0x1d2)),this[ar(0x1af)]['setClass'](ar(0x1ff),![]);else{const j=g['event'][ar(0x17c)]?.['getData']('text/plain');j&&g['node'][ar(0x1e5)](this[ar(0x20e)]({'type':j}));}return;}const i=g[ar(0x1ce)]==ar(0x179)?ar(0x179):'after';if(h&&this['_draggedNode'])this['_draggedNode']['moveTo'](g['node'],i),this['_draggedNode']['setClass'](ar(0x1ff),![]);else{const k=g[ar(0x1f6)][ar(0x17c)]?.[ar(0x1b3)](ar(0x1a2));if(k){const l={'type':k},m=this['createTreeItem'](l),n=g[ar(0x243)][ar(0x227)]['addChildren'](m);n[ar(0x1e6)](g['node'],i);}}}}}),this['_commandListFancyTree']['root'][aj(0x1e9)]?.[0x0]?.[aj(0x245)]();}[P(0x20e)](d){const as=P;if(d['type']==='If'){const e=d;return e[as(0x24f)]??=[],e[as(0x1fd)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':as(0x1e4),'expanded':!![],'data':{'branch':'true'},'children':e['trueCommands']['map'](f=>this['createTreeItem'](f))},{'title':'else','expanded':!![],'data':{'branch':'else'},'children':e[as(0x1fd)][as(0x258)](f=>this[as(0x20e)](f))}]};}return{'title':d['type'],'data':{'item':d}};}['nodeToCommand'](d){const at=P,e=d['data'][at(0x203)][at(0x198)];if(e[at(0x1a5)]==='If'){const f=d[at(0x1e9)]?.['find'](h=>h['data']['data']?.['branch']===at(0x1e4)),g=d[at(0x1e9)]?.[at(0x229)](h=>h['data'][at(0x203)]?.['branch']==='else');e[at(0x24f)]=(f?.[at(0x1e9)]??[])[at(0x258)](h=>this['nodeToCommand'](h)),e['elseCommands']=(g?.[at(0x1e9)]??[])[at(0x258)](h=>this[at(0x1c4)](h));}return e;}['_getBranchContainerNode'](d){const au=P;let e=d;while(e){if(e[au(0x203)]?.[au(0x203)]?.['branch'])return e;e=e[au(0x227)];}return null;}async['addCommand'](){const av=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this[av(0x1f3)],this['commandDescriptions']),d['title']=av(0x236),d[av(0x220)]['on'](()=>{const aw=av;if(d['selectedType']){const f={'type':d['selectedType']},g=this['createTreeItem'](f),h=this[aw(0x1f0)](this['_commandListFancyTree']['activeNode']);if(h)h[aw(0x1e5)](g);else this[aw(0x1b9)][aw(0x1e5)](g);}});const e=new AbortController();d['closeRequested']['on'](()=>e[av(0x1fa)]()),await this['visualizationShell']['openModal'](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}[P(0x20c)](){const ax=P;if(this['_showingCode']){const e=this[ax(0x24d)]();if(e)this[ax(0x250)](e);}let d=this[ax(0x1b9)]['root']['children'];return d[ax(0x258)](f=>this['nodeToCommand'](f));}}function b(c,d){c=c-0x177;const e=a();let f=e[c];return f;}customElements[P(0x18c)](SimpleScriptEditor['is'],SimpleScriptEditor);