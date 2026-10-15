const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x1f3))/0x1+-parseInt(O(0x1c6))/0x2+-parseInt(O(0x242))/0x3+parseInt(O(0x1eb))/0x4+parseInt(O(0x254))/0x5+-parseInt(O(0x20e))/0x6+parseInt(O(0x276))/0x7*(parseInt(O(0x28c))/0x8);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xefa11));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';function a(){const aD=['activated','selectedObject','display:flex;\x20flex-direction:column;\x20gap:4px;','insertAdjacentElement','signalList','commandDescriptions','Typ:\x20','serviceContainer','varName','object','IScriptMultiplexValue','3418014NxkrRS','value','append','commands','arguments','region','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','setPropertyValue','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','protected','has','branch','complexString','max','isArray','ready','propertyNodeContextMenu','helpClicked','ellipsis','wb-drag-source','instanceServiceContainer','span','elseCommands','_parseAttributesToProperties','dragover','typeof','opacity','filter','forEach','move','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','shadowRoot','button','icons/copy.svg','option','_script','bindabletype','5425184nQweBH','Remove\x20signal','_commandListDiv','content-box','img','over','setClass','showHead','150103LCrbUR','openConfirmation','parentElement','Simple\x20Script\x20Editor\x20Help','while','_reservedRowWidth','visualizationHandler','join','oncontextmenu','addChildren','throw','property','propertygrid','case','copy','flex:0\x200\x2022px;','moveTo','helpRequested','position','code','addEventListener','classList','_title','refresh','icons/delete.svg','activeNode','Complex\x20for\x20\x22','7513128mrLrwL','closest','script','div','toggle','width','name','codeView','Remove','cssText','closeRequested','instanceof','const','flex:0\x200\x20120px;','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','return','commandList','elementProperty','template','<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>','overflow','parent','yield','_getDomElement','_bindingsParse','_addCommandBtn','getScriptCommands','_showingCode','display:inline-block;\x20width:32px;','font-weight:bold;\x20margin-bottom:2px;','_getBranchContainerNode','private','placeholder','remove','mousedown','_propertygrid','nowrap','else','data','parse','interface','_showCodeView','test','_draggedNode','visualizationShell','find','delete','dataTransfer','format','var','item','debugger','548865nKkdqM','trueCommands','switch','src','nodeToCommand','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','_commandListFancyTree','color:#333;\x20white-space:pre-line;','js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object','width:12px;\x20height:12px;','catch','false','onfocus','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','_codeView','push','afterbegin','calc(100%\x20-\x206px)','1865375orUuUW','offsetWidth','addCommand','0.2','+\x20Add\x20signal','undefined','dropEffect','for','Invalid\x20JSON:\x0a','_splitView','singleRow','20px','hidden','Add\x20Script\x20Command','complex','propertyPath','openModal','setData','className','some','function','target','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','textContent','types','preventDefault','javascript','innerText','true','context','innerHTML','show','length','Duplicate','18347QDiqVy','boxSizing','update','splice','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','onclick','\x20if\x20empty)','event','center','after','effectAllowed','_dragFromHandle','type','getTypeInfo','...','span.wb-title','input','dragend','adoptedStyleSheets','Open\x20in\x20larger\x20editor','title','getSpecialEditorForType','6856zTiPsv','flexGrow','enum','children','getText','specialAllreadyAdded','createTreeItem','this','getData','nodeElem','node','#c0392b','\x20align-self:flex-start;\x20padding:0\x208px;','onchange','code-mode','loadScript','_codeToggleBtn','implements','public','appendChild','root','map','signal','relative','e.g.\x20srm.rbg{__tagRoot}.error','extends','display','style','includes','emit','before','createElement','flex','fullName'];a=function(){return aD;};return a();}import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';function b(c,d){c=c-0x1b4;const e=a();let f=e[c];return f;}import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME='application/x-simple-script-move';export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [P(0x220)]=html`
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
  `;static ['is']='node-projects-visualization-simple-script-editor';[P(0x209)];get[P(0x28a)](){const Q=P;return this[Q(0x209)];}set['title'](d){this['_title']=d;}[P(0x1c2)];[P(0x1da)];[P(0x1f9)];[P(0x23a)];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];['helpRequested']=new TypedEvent();[P(0x1c0)]={...nativeScriptCommandDescriptions};[P(0x1e9)];[P(0x1ed)];['_commandListFancyTree'];[P(0x231)];[P(0x25d)];[P(0x250)];[P(0x29c)];[P(0x227)];[P(0x229)]=![];['_dragFromHandle']=![];[P(0x239)]=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this[R(0x1ed)]=this['_getDomElement'](R(0x21e)),this[R(0x231)]=this[R(0x225)](R(0x1ff)),this[R(0x25d)]=this[R(0x225)]('splitView'),this['_codeView']=this[R(0x225)](R(0x215)),this[R(0x29c)]=this['_getDomElement']('codeToggleBtn'),this[R(0x227)]=this[R(0x225)]('addCommandBtn');const d=this['_getDomElement']('listContent');d['addEventListener'](R(0x230),e=>{const S=R;this[S(0x281)]=!!e[S(0x269)]?.[S(0x20f)]('.drag-handle');}),document['addEventListener'](R(0x287),()=>{const T=R;this[T(0x239)]=null;},!![]),d[R(0x207)](R(0x1de),e=>{const U=R;e[U(0x26d)]();if(e[U(0x23d)]){const f=e['dataTransfer'][U(0x26c)]['includes'](SAME_TREE_MOVE_MIME);e['dataTransfer']['dropEffect']=f?U(0x1e3):'copy';}}),d['addEventListener']('drop',e=>{const V=R;e['preventDefault']();const f=e['dataTransfer']?.[V(0x26c)][V(0x1b5)](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[V(0x248)][V(0x2a0)]['children'],h=g?.[g[V(0x274)]-0x1];if(h)this[V(0x239)][V(0x203)](h,V(0x27f));this['_draggedNode']['setClass'](V(0x1d9),![]);}else{const i=e[V(0x23d)]?.[V(0x294)]('text/plain');if(i){const j={'type':i};this['_commandListFancyTree'][V(0x2a0)]['addChildren'](this[V(0x292)](j));}}}),this[R(0x1e5)][R(0x288)]=[c,defaultStyle,SimpleScriptEditor[R(0x1b4)]];}async[P(0x1d5)](){const W=P;this[W(0x1dd)](),this[W(0x226)](null,!![]),this['_assignEvents']();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this['visualizationHandler'],l[X(0x23a)]=this['visualizationShell'],l['serviceContainer']=this[X(0x1c2)],l[X(0x1da)]=this['instanceServiceContainer'],l['bindableObjectsTarget']=X(0x210),l[X(0x283)]=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l[X(0x1f2)]=![],l['typeName']=X(0x1c5),l['title']=X(0x20d)+k['propertyPath']+'\x22';if(typeof k['value']===X(0x1c4))l['selectedObject']=k['value']??{};else l[X(0x1bc)]={};l['bindingDoubleClicked']=n=>{const Y=X;if(n[Y(0x1ea)]=='property')l['setPropertyValue']('source',Y(0x1fe));else n['bindabletype']=='context'?l['setPropertyValue']('source',Y(0x271)):l['setPropertyValue']('source','signal');l[Y(0x1cd)](Y(0x214),n[Y(0x1ba)]),l['refresh']();};let m=await this[X(0x23a)][X(0x1f4)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this[X(0x231)]['setPropertyValue'](k['propertyPath'],l[X(0x1bc)]),this['_propertygrid']['refresh']());},e=async k=>{const Z=W,l=new CodeViewMonaco();l['language']=Z(0x26e),l[Z(0x1b4)][Z(0x205)]='relative',l['code']=k['value']??'';const m=await this['visualizationShell'][Z(0x1f4)](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Z(0x231)]['setPropertyValue'](k['propertyPath'],l[Z(0x206)]),this['_propertygrid'][Z(0x20a)]());};const f=[W(0x2a2),W(0x1fe),W(0x21f),'signalInProperty','event','parameter',W(0x271),W(0x1d2),'complexSignal','expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set(['break',W(0x200),W(0x24c),'class',W(0x21a),'continue',W(0x241),'default',W(0x23c),'do',W(0x233),'export',W(0x2a5),'finally',W(0x25b),W(0x268),'if','import','in',W(0x219),'new',W(0x21d),'super',W(0x244),W(0x293),W(0x1fd),'try',W(0x1df),W(0x23f),'void',W(0x1f7),'with',W(0x224),'let','static',W(0x28e),'await',W(0x29d),'package',W(0x1cf),W(0x236),W(0x22d),W(0x29e),'null',W(0x270),W(0x24d),W(0x259),W(0x1ca),'eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':W(0x27a),'elementProperty':W(0x26a),'signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':W(0x247),'parameter':'a\x20parameter\x20you\x20hand\x20over','context':'a\x20value\x20of\x20the\x20context','complexString':W(0x24f),'complexSignal':W(0x1ce),'expression':W(0x24a)};let j=async k=>{const a0=W,l=(k[a0(0x1c7)]??[])['map'](E=>({...E})),m=E=>{const a1=a0,F=(l[E][a1(0x1c3)]??'')['trim']();if(!F)return null;if(!g[a1(0x238)](F))return'\x22'+F+a1(0x21c);if(h[a1(0x1d0)](F))return'\x22'+F+a1(0x1cc);if(l[a1(0x267)]((G,H)=>H!==E&&(G[a1(0x1c3)]??'')['trim']()===F))return'\x22'+F+'\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.';return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[a0(0x1b8)](a0(0x211));o[a0(0x1b4)][a0(0x217)]='display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;';const p=document[a0(0x1b8)](a0(0x211));p['style']['cssText']=a0(0x1e4);const q=document['createElement']('span');q[a0(0x26b)]='Name',q[a0(0x1b4)]['cssText']=a0(0x21b);const r=document['createElement']('span');r['textContent']='Typ',r['style'][a0(0x217)]='flex:0\x200\x20130px;';const s=document['createElement'](a0(0x1db));s['textContent']='Signal',s['style'][a0(0x217)]='flex:1\x201\x20auto;';const t=document[a0(0x1b8)]('span');t['style'][a0(0x217)]=a0(0x202),p[a0(0x1c8)](q,r,s,t),o[a0(0x29f)](p);const u=document[a0(0x1b8)]('div');u[a0(0x1b4)]['cssText']=a0(0x1bd),o['appendChild'](u);const v=document[a0(0x1b8)](a0(0x211));v['style']['cssText']='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0x1b8)]('div');w['style']['cssText']=a0(0x22b);const x=document[a0(0x1b8)]('div');x[a0(0x1b4)]['cssText']=a0(0x249),v['append'](w,x);const y=E=>{const a2=a0;w[a2(0x26b)]=a2(0x1c1)+E,x['textContent']=i[E]??'';},z=[],A=()=>{l['forEach']((E,F)=>{const a3=b,G=z[F];if(!G)return;const H=m(F);G[a3(0x28a)]=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+a3(0x27c),G[a3(0x1b4)]['borderColor']=H?a3(0x297):'',G[a3(0x1b4)]['backgroundColor']=H?'#fdecea':'';});},B=()=>{const a4=a0;u[a4(0x272)]='',z[a4(0x274)]=0x0,l[a4(0x1e2)]((E,F)=>{const a5=a4,G=document['createElement']('div');G[a5(0x1b4)][a5(0x217)]='display:flex;\x20align-items:center;\x20gap:4px;';const H=document[a5(0x1b8)](a5(0x286));H['value']=E[a5(0x1c3)]??'',H[a5(0x22e)]='__'+F,H[a5(0x1b4)][a5(0x217)]=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H['oninput']=()=>{const a6=a5;E[a6(0x1c3)]=H['value']||undefined,A();},z[a5(0x251)](H),G['appendChild'](H);const I=document['createElement']('select');I['style']['cssText']=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document[a5(0x1b8)](a5(0x1e8));N[a5(0x1c7)]=M,N['textContent']=M;if(E['source']===M)N['selected']=!![];I['appendChild'](N);}I[a5(0x299)]=()=>{const a7=a5;E['source']=I[a7(0x1c7)],y(I['value']);},I[a5(0x24e)]=()=>y(I[a5(0x1c7)]),G[a5(0x29f)](I);const J=document['createElement']('input');J['value']=E[a5(0x214)]??'',J[a5(0x22e)]=a5(0x2a4),J['style'][a5(0x217)]=n+'\x20flex:1\x201\x20auto;',J['oninput']=()=>{const a8=a5;E['name']=J[a8(0x1c7)];},G['appendChild'](J);const K=document['createElement'](a5(0x1e6));K['title']=a5(0x1ec),K[a5(0x1b4)]['cssText']=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document[a5(0x1b8)](a5(0x1ef));L[a5(0x245)]=assetsPath+a5(0x20b),L['style'][a5(0x217)]=a5(0x24b),K['appendChild'](L),K[a5(0x27b)]=()=>{const a9=a5;l[a9(0x279)](F,0x1),B();},G[a5(0x29f)](K),u['appendChild'](G);}),A();};B();const C=document['createElement'](a0(0x1e6));C[a0(0x26b)]=a0(0x258),C[a0(0x1b4)][a0(0x217)]=n+a0(0x298),C[a0(0x27b)]=()=>{const aa=a0;l['push']({'source':aa(0x2a2),'name':''}),B();},o[a0(0x29f)](C),y(l[0x0]?.['source']??'signal'),o[a0(0x29f)](v);const D=await this[a0(0x23a)][a0(0x1f4)](o,{'title':'Edit\x20signals','x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this['_propertygrid'][a0(0x1cd)](k['propertyPath'],l),this[a0(0x231)][a0(0x20a)]());};this['_propertygrid']['visualizationHandler']=this[W(0x1f9)],this[W(0x231)]['visualizationShell']=this[W(0x23a)],this['_propertygrid']['serviceContainer']=this['serviceContainer'],this['_propertygrid']['instanceServiceContainer']=this['instanceServiceContainer'],this[W(0x231)]['bindableObjectsTarget']=W(0x210),this['_propertygrid']['setNameColumnWidth'](0x82),this[W(0x231)][W(0x283)]=(k,l)=>{const ab=W,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m['properties'][ab(0x1e1)](n=>n['name']!=='trueCommands'&&n[ab(0x214)]!==ab(0x1dc))),m;},this['_propertygrid'][W(0x28b)]=async(k,l,m,n,o)=>{const ac=W;if(!k[ac(0x291)]){k[ac(0x291)]=!![];if(k['format']==='collection'){}else{if(k['format']===ac(0x1bf)){let p=document['createElement']('button');p[ac(0x1b4)]['height']=ac(0x253),p[ac(0x1b4)][ac(0x205)]=ac(0x2a3),p[ac(0x1b4)]['display']=ac(0x1b9),p[ac(0x1b4)]['justifyContent']=ac(0x27e),p[ac(0x1b4)][ac(0x213)]='20px',p['style'][ac(0x277)]=ac(0x1ee),p[ac(0x26f)]='del',p[ac(0x27b)]=()=>{const ad=ac;this[ad(0x231)]['setPropertyValue'](m,undefined),this[ad(0x231)][ad(0x20a)]();},n[ac(0x295)][ac(0x1be)](ac(0x252),p);const q=Array[ac(0x1d4)](l)?l:[];let r=document['createElement']('div');r['style'][ac(0x2a6)]='flex';let s=document['createElement']('span');s['innerText']=q['map']((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.['source']??'')+':'+(u?.[ac(0x214)]??''))[ac(0x1fa)](',\x20'),s['style'][ac(0x222)]='hidden',s['style']['whiteSpace']=ac(0x232),s['style']['textOverflow']=ac(0x1d8),s['style'][ac(0x28d)]='1',s['title']=JSON['stringify'](q),r[ac(0x29f)](s);let t=document['createElement'](ac(0x1e6));return t['innerText']='...',t[ac(0x27b)]=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n['nodeElem']['style'][ac(0x2a6)]='flex',r;}else{if(k['format']==='formula'){const u=document['createElement'](ac(0x211));u['style']['cssText']='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v['language']=ac(0x26e),v[ac(0x25e)]=!![],v[ac(0x1b4)]['cssText']='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v['code']=l??'',v['addEventListener']('code-changed',()=>{const ae=ac;this['_propertygrid']['setPropertyValue'](m,v[ae(0x206)]);}),u['appendChild'](v);const w=document['createElement'](ac(0x1e6));return w['innerText']='...',w[ac(0x28a)]=ac(0x289),w['style']['cssText']='flex:0\x200\x2028px;\x20width:20px;',w[ac(0x27b)]=()=>e({'value':v[ac(0x206)],'propertyPath':m}),u['appendChild'](w),n[ac(0x295)][ac(0x1b4)]['display']=ac(0x1b9),u;}else{if(typeof l==='object'&&l!==null||k[ac(0x23e)]===ac(0x262)){let x=document[ac(0x1b8)](ac(0x1e6));x['style']['height']=ac(0x253),x[ac(0x1b4)][ac(0x205)]='relative',x['style'][ac(0x2a6)]='flex',x['style']['justifyContent']=ac(0x27e),x[ac(0x1b4)][ac(0x213)]='20px',x[ac(0x1b4)][ac(0x277)]='content-box',x['innerText']='del',x[ac(0x27b)]=()=>{const af=ac;this['_propertygrid']['setPropertyValue'](m,undefined),this[af(0x231)][af(0x20a)]();},n[ac(0x295)][ac(0x1be)](ac(0x252),x);let y=document[ac(0x1b8)]('div');y['style'][ac(0x2a6)]=ac(0x1b9);let z=document[ac(0x1b8)](ac(0x1db));if(l)z[ac(0x26f)]=(l['source']??'')+':\x20'+(l['name']??'');else z['innerText']='';z['style']['overflow']='hidden',z[ac(0x1b4)]['whiteSpace']='nowrap',z[ac(0x1b4)]['textOverflow']=ac(0x1d8),z['style'][ac(0x28d)]='1',z['title']=JSON['stringify'](l),y[ac(0x29f)](z);let A=document[ac(0x1b8)]('button');return A['innerText']=ac(0x284),A['onclick']=()=>{d({'value':l,'propertyPath':m});},y[ac(0x29f)](A),n['nodeElem'][ac(0x1b4)]['display']=ac(0x1b9),y;}else{let B=document[ac(0x1b8)](ac(0x1e6));B['style']['height']=ac(0x253),B[ac(0x1b4)]['position']=ac(0x2a3),B[ac(0x1b4)]['display']=ac(0x1b9),B[ac(0x1b4)]['justifyContent']='center',B[ac(0x1b4)]['width']=ac(0x25f),B[ac(0x1b4)]['boxSizing']=ac(0x1ee),B[ac(0x28a)]='complex\x20property\x20value',B[ac(0x1b4)][ac(0x1e0)]=ac(0x257),B[ac(0x26f)]='...',B['onclick']=()=>{d({'value':l,'propertyPath':m});},n['nodeElem'][ac(0x1be)]('afterbegin',B),n['nodeElem'][ac(0x1b4)]['display']=ac(0x1b9);}}}}}return null;},this[W(0x231)][W(0x1d6)]['on'](k=>{const ag=W;ContextMenu[ag(0x273)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ah=ag,l=prompt('enter\x20value:');l&&(this[ah(0x231)][ah(0x1cd)](k['propertyPath'],l),this[ah(0x231)][ah(0x20a)]());}},{'title':'remove\x20complex\x20value','action':async()=>{const ai=ag;this['_propertygrid'][ai(0x1cd)](k[ai(0x263)],undefined),this['_propertygrid'][ai(0x20a)]();}}],k['event']);});}[P(0x1d7)](){const aj=P,d=document[aj(0x1b8)]('iframe');d['srcdoc']=simpleScriptEditorHelpHtml,d[aj(0x1b4)][aj(0x217)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[aj(0x23a)]['openModal'](d,{'title':aj(0x1f6),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[aj(0x204)][aj(0x1b6)]();}['toggleCodeView'](){const ak=P;if(!this[ak(0x229)]){const e=JSON['stringify']({'commands':this[ak(0x228)]()},null,0x2);this[ak(0x250)][ak(0x278)](e),this[ak(0x237)](!![]);return;}const d=this['_parseCodeViewScript']();if(!d)return;this['_showCodeView'](![]),this['loadScript'](d);}['_showCodeView'](d){const al=P;this[al(0x250)]['classList']['toggle']('visible',d),this['_commandListDiv']['classList']['toggle'](al(0x260),d),this[al(0x25d)][al(0x208)][al(0x212)](al(0x29a),d),this[al(0x227)]['disabled']=d,this[al(0x29c)]['innerText']=d?'Visual':'Code',this['_showingCode']=d;if(d)requestAnimationFrame(()=>this['_codeView'][al(0x1bb)]());}['_parseCodeViewScript'](){const am=P;let d;try{d=JSON[am(0x235)](this['_codeView'][am(0x290)]());}catch(f){return alert(am(0x25c)+f['message']),null;}if(!Array['isArray'](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}[P(0x29b)](d){const an=P;this['_script']=d;this[an(0x248)]&&(this['_commandListFancyTree']['destroy'](),this[an(0x1ed)]=this['_getDomElement']('commandList'));let e=[];for(let f of this[an(0x1e9)][an(0x1c9)]){f=ScriptUpgrades['upgradeScriptCommand'](f),e['push'](this['createTreeItem'](f));}this[an(0x248)]=new Wunderbaum({...defaultOptions,'element':this[an(0x1ed)],'icon':![],'source':e,'activate':g=>{const ao=an;this[ao(0x231)]['selectedObject']=g['node']['data']['data']['item']??null;},'render':g=>{const ap=an,h=!!g['node']['data']['data']?.[ap(0x1d1)];if(g['isNew']){g['nodeElem'][ap(0x1fb)]=k=>{const aq=ap;return k[aq(0x26d)](),![];};const j=document[ap(0x1b8)]('span');j[ap(0x1b4)]['cssText']='display:inline-block;\x20width:24px;',g['nodeElem']['prepend'](j);if(!h){const k=document[ap(0x1b8)](ap(0x211));k[ap(0x266)]='drag-handle',k['title']='Drag\x20to\x20reorder',k[ap(0x272)]=ap(0x221),g[ap(0x295)]['prepend'](k);const l=g[ap(0x295)][ap(0x1f5)],m=document[ap(0x1b8)]('span');m[ap(0x1b4)]['cssText']=ap(0x22a),g[ap(0x295)]['appendChild'](m);const n=document[ap(0x1b8)]('div');n['className']='cmd';const o=document[ap(0x1b8)](ap(0x1ef));o['src']=assetsPath+ap(0x1e7),o[ap(0x28a)]=ap(0x275),o[ap(0x27b)]=()=>{const ar=ap,q=structuredClone(g[ar(0x296)][ar(0x234)][ar(0x234)]['item']),r=g['node']['parent'][ar(0x1fc)](this['createTreeItem'](q));r[ar(0x203)](g[ar(0x296)],'after');};const p=document['createElement']('img');p[ap(0x245)]=assetsPath+ap(0x20b),p[ap(0x28a)]=ap(0x216),p['onclick']=()=>g[ap(0x296)][ap(0x22f)](),n[ap(0x1c8)](o,p),l['appendChild'](n),g[ap(0x295)][ap(0x1f8)]=j['offsetWidth']+m[ap(0x255)];}else g['nodeElem'][ap(0x1f8)]=j[ap(0x255)];}const i=g['nodeElem'][ap(0x1f8)]??0x0;if(i){const q=g[ap(0x295)]['querySelector'](ap(0x285));if(q){const r=parseFloat(q[ap(0x1b4)][ap(0x213)]);if(!isNaN(r))q[ap(0x1b4)][ap(0x213)]=Math[ap(0x1d3)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const as=an;if(!this['_dragFromHandle'])return![];return this['_draggedNode']=g['node'],g[as(0x27d)]['dataTransfer'][as(0x280)]='move',g['event']['dataTransfer'][as(0x25a)]='move',g[as(0x27d)]['dataTransfer'][as(0x265)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const at=an;this[at(0x239)]=null;},'dragEnter':g=>{const au=an,h=g['event']['dataTransfer']?.['types']['includes'](SAME_TREE_MOVE_MIME);g['event'][au(0x23d)][au(0x25a)]=h?au(0x1e3):au(0x201);const i=!!g['node'][au(0x234)]['data']?.['branch'];return i?new Set([au(0x1f0)]):new Set(['before','after']);},'dragOver':g=>{const av=an,h=g['event']['dataTransfer']?.[av(0x26c)][av(0x1b5)](SAME_TREE_MOVE_MIME);g[av(0x27d)][av(0x23d)][av(0x25a)]=h?av(0x1e3):av(0x201);},'drop':async g=>{const aw=an,h=g['event']['dataTransfer']?.['types']['includes'](SAME_TREE_MOVE_MIME);if(g[aw(0x1cb)]===aw(0x1f0)){if(h&&this['_draggedNode'])this[aw(0x239)][aw(0x203)](g['node'],aw(0x29f)),this['_draggedNode'][aw(0x1f1)]('wb-drag-source',![]);else{const j=g[aw(0x27d)][aw(0x23d)]?.[aw(0x294)]('text/plain');j&&g[aw(0x296)]['addChildren'](this['createTreeItem']({'type':j}));}return;}const i=g[aw(0x1cb)]==aw(0x1b7)?aw(0x1b7):'after';if(h&&this[aw(0x239)])this['_draggedNode'][aw(0x203)](g['node'],i),this['_draggedNode'][aw(0x1f1)]('wb-drag-source',![]);else{const k=g['event'][aw(0x23d)]?.[aw(0x294)]('text/plain');if(k){const l={'type':k},m=this[aw(0x292)](l),n=g[aw(0x296)][aw(0x223)]['addChildren'](m);n['moveTo'](g['node'],i);}}}}}),this['_commandListFancyTree'][an(0x2a0)]['children']?.[0x0]?.['setActive']();}['createTreeItem'](d){const ax=P;if(d[ax(0x282)]==='If'){const e=d;return e[ax(0x243)]??=[],e[ax(0x1dc)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':ax(0x270),'expanded':!![],'data':{'branch':'true'},'children':e[ax(0x243)]['map'](f=>this[ax(0x292)](f))},{'title':'else','expanded':!![],'data':{'branch':ax(0x233)},'children':e[ax(0x1dc)][ax(0x2a1)](f=>this['createTreeItem'](f))}]};}return{'title':d[ax(0x282)],'data':{'item':d}};}[P(0x246)](d){const ay=P,e=d['data'][ay(0x234)][ay(0x240)];if(e['type']==='If'){const f=d[ay(0x28f)]?.['find'](h=>h[ay(0x234)]['data']?.[ay(0x1d1)]===ay(0x270)),g=d[ay(0x28f)]?.[ay(0x23b)](h=>h[ay(0x234)][ay(0x234)]?.[ay(0x1d1)]==='else');e['trueCommands']=(f?.['children']??[])['map'](h=>this['nodeToCommand'](h)),e[ay(0x1dc)]=(g?.[ay(0x28f)]??[])[ay(0x2a1)](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const az=P;let e=d;while(e){if(e[az(0x234)]?.['data']?.['branch'])return e;e=e[az(0x223)];}return null;}async[P(0x256)](){const aA=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this['scriptCommandsTypeInfo'],this[aA(0x1c0)]),d[aA(0x28a)]='Add\x20Script\x20Command',d['commandTypeChosen']['on'](()=>{const aB=aA;if(d['selectedType']){const f={'type':d['selectedType']},g=this[aB(0x292)](f),h=this[aB(0x22c)](this['_commandListFancyTree'][aB(0x20c)]);if(h)h['addChildren'](g);else this[aB(0x248)][aB(0x1fc)](g);}});const e=new AbortController();d[aA(0x218)]['on'](()=>e['abort']()),await this['visualizationShell'][aA(0x264)](d,{'title':aA(0x261),'x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}['getScriptCommands'](){const aC=P;if(this[aC(0x229)]){const e=this['_parseCodeViewScript']();if(e)this['loadScript'](e);}let d=this[aC(0x248)][aC(0x2a0)][aC(0x28f)];return d[aC(0x2a1)](f=>this[aC(0x246)](f));}}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);