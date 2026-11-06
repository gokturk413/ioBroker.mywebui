function a(){const aC=['super','trueCommands','javascript','height','disabled','preventDefault','getTypeInfo','visualizationShell','elseCommands','classList','...','borderColor','openModal','Remove\x20signal','void','trim','appendChild','helpRequested','application/x-simple-script-move','emit','source','boxSizing','flex:0\x200\x20120px;','innerHTML','wb-drag-source','toggle','data','export','style','isArray','addChildren','\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','a\x20value\x20of\x20the\x20context','Simple\x20Script\x20Editor\x20Help','this','calc(100%\x20-\x206px)','img','move','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','cmd','types','insertAdjacentElement','root','filter','e.g.\x20srm.rbg{__tagRoot}.error','name','formula','typeName','branch','enter\x20value:','dataTransfer','has','relative','context','break','createElement','remove\x20complex\x20value','\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;','2078762ouXmml','39nHiOFk','flex','_parseAttributesToProperties','message','div','_assignEvents','visible','throw','icons/delete.svg','propertygrid','_draggedNode','_script','createTreeItem','max','instanceServiceContainer','var','button','splice','bindabletype','flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;','color:#333;\x20white-space:pre-line;','Complex\x20for\x20\x22','1007589oPUzTG','hidden','children','before','language','collection','srcdoc','drop','setNameColumnWidth','yield','loadScript','_commandListDiv','src','nodeToCommand','dropEffect','onfocus','title','onclick','innerText','while','_getDomElement','function','placeholder','event','.drag-handle','Edit\x20formula','Typ','map','flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;','isNew','push','oncontextmenu','#c0392b','js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object','find','scriptCommandsTypeInfo','querySelector','test','interface','addEventListener','region','arguments','property','11535795NJzHzC','closeRequested','object','template','className','show','package','getData','includes','some','whiteSpace','offsetWidth','extends','moveTo','const','commandList','span.wb-title','Typ:\x20','Edit\x20signals','text/plain','item','try','specialAllreadyAdded','define','position','Name','await','visualizationHandler','serviceContainer','_dragFromHandle','forEach','nodeElem','2488905VmmCow','Remove','span','refresh','_title','addCommand','#fdecea','_showingCode','setPropertyValue','openConfirmation','157908EIoqxh','del','value','Visual','cssText','node','protected','display:flex;\x20flex-direction:column;\x20gap:4px;','20px','getText','propertyPath','_bindingsParse','Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','abort','ready','addCommandBtn','textContent','let','display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;','prepend','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','edit\x20complex\x20value','properties','_showCodeView','over','afterbegin','iframe','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','type','length','+\x20Add\x20signal','2436LoqDBR','true','codeView','The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.','after','a\x20parameter\x20you\x20hand\x20over','_propertygrid','new','format','flex:1\x201\x20auto;','oninput','_reservedRowWidth','getScriptCommands','default','copy','else','textOverflow','display','input','ellipsis','setClass','code','append','_codeView','_codeToggleBtn','adoptedStyleSheets','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','_commandListFancyTree','width','justifyContent','signal','commandDescriptions','_parseCodeViewScript','selectedObject','content-box','parent','4655208rUxXcR','commandTypeChosen','7469yrXkhc','parameter','0.2','read\x20the\x20value\x20from\x20a\x20Signal','continue','bindableObjectsTarget'];a=function(){return aC;};return a();}const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x1d0))/0x1+-parseInt(O(0x1b9))/0x2+-parseInt(O(0x1ba))/0x3*(-parseInt(O(0x225))/0x4)+parseInt(O(0x21b))/0x5+-parseInt(O(0x244))/0x6*(-parseInt(O(0x179))/0x7)+parseInt(O(0x177))/0x8+-parseInt(O(0x1fb))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xadf5a));function b(c,d){c=c-0x15a;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0x191);export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [P(0x1fe)]=html`
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
  `;static ['is']='node-projects-visualization-simple-script-editor';['_title'];get['title'](){const Q=P;return this[Q(0x21f)];}set[P(0x1e0)](d){this['_title']=d;}[P(0x217)];['instanceServiceContainer'];['visualizationHandler'];[P(0x186)];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];[P(0x190)]=new TypedEvent();[P(0x172)]={...nativeScriptCommandDescriptions};['_script'];[P(0x1db)];['_commandListFancyTree'];['_propertygrid'];['_splitView'];[P(0x16a)];[P(0x16b)];['_addCommandBtn'];[P(0x222)]=![];[P(0x218)]=![];['_draggedNode']=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this[R(0x1db)]=this[R(0x1e4)](R(0x20a)),this['_propertygrid']=this[R(0x1e4)](R(0x1c3)),this['_splitView']=this['_getDomElement']('splitView'),this[R(0x16a)]=this[R(0x1e4)](R(0x246)),this['_codeToggleBtn']=this[R(0x1e4)]('codeToggleBtn'),this['_addCommandBtn']=this['_getDomElement'](R(0x234));const d=this['_getDomElement']('listContent');d['addEventListener']('mousedown',e=>{const S=R;this[S(0x218)]=!!e['target']?.['closest'](S(0x1e8));}),document['addEventListener']('dragend',()=>{const T=R;this[T(0x1c4)]=null;},!![]),d['addEventListener']('dragover',e=>{const U=R;e['preventDefault']();if(e[U(0x1b1)]){const f=e['dataTransfer'][U(0x1a7)][U(0x203)](SAME_TREE_MOVE_MIME);e['dataTransfer']['dropEffect']=f?'move':U(0x161);}}),d[R(0x1f7)](R(0x1d7),e=>{const V=R;e[V(0x184)]();const f=e['dataTransfer']?.['types'][V(0x203)](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[V(0x16e)][V(0x1a9)][V(0x1d2)],h=g?.[g['length']-0x1];if(h)this['_draggedNode']['moveTo'](h,V(0x248));this[V(0x1c4)][V(0x167)]('wb-drag-source',![]);}else{const i=e[V(0x1b1)]?.['getData'](V(0x20e));if(i){const j={'type':i};this['_commandListFancyTree'][V(0x1a9)]['addChildren'](this['createTreeItem'](j));}}}),this['shadowRoot'][R(0x16c)]=[c,defaultStyle,SimpleScriptEditor['style']];}async[P(0x233)](){const W=P;this[W(0x1bc)](),this[W(0x230)](null,!![]),this[W(0x1bf)]();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l[X(0x216)]=this[X(0x216)],l[X(0x186)]=this[X(0x186)],l[X(0x217)]=this[X(0x217)],l[X(0x1c8)]=this[X(0x1c8)],l[X(0x17e)]='script',l[X(0x185)]=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l['showHead']=![],l[X(0x1ae)]='IScriptMultiplexValue',l['title']=X(0x1cf)+k['propertyPath']+'\x22';if(typeof k[X(0x227)]==='object')l['selectedObject']=k[X(0x227)]??{};else l[X(0x174)]={};l['bindingDoubleClicked']=n=>{const Y=X;if(n[Y(0x1cc)]==Y(0x1fa))l[Y(0x223)]('source',Y(0x1fa));else n['bindabletype']==Y(0x1b4)?l['setPropertyValue']('source','context'):l['setPropertyValue']('source','signal');l['setPropertyValue'](Y(0x1ac),n['fullName']),l[Y(0x21e)]();};let m=await this['visualizationShell']['openConfirmation'](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k[X(0x22f)],l[X(0x174)]),this['_propertygrid']['refresh']());},e=async k=>{const Z=W,l=new CodeViewMonaco();l[Z(0x1d4)]='javascript',l[Z(0x19b)][Z(0x213)]='relative',l['code']=k['value']??'';const m=await this['visualizationShell']['openConfirmation'](l,{'title':Z(0x1e9),'x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Z(0x24a)][Z(0x223)](k[Z(0x22f)],l['code']),this['_propertygrid'][Z(0x21e)]());};const f=['signal',W(0x1fa),'elementProperty','signalInProperty',W(0x1e7),W(0x17a),'context','complexString','complexSignal','expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([W(0x1b5),'case','catch','class',W(0x209),W(0x17d),'debugger',W(0x160),'delete','do','else',W(0x19a),W(0x207),'finally','for',W(0x1e5),'if','import','in','instanceof',W(0x15a),'return',W(0x17f),'switch',W(0x1a1),W(0x1c1),W(0x210),'typeof',W(0x1c9),W(0x18d),W(0x1e3),'with',W(0x1d9),W(0x236),'static','enum',W(0x215),'implements',W(0x201),W(0x22b),W(0x1f6),'private','public','null',W(0x245),'false','undefined',W(0x1f9),'eval']),i={'signal':W(0x17c),'property':'read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','elementProperty':'a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':'read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','parameter':W(0x249),'context':W(0x19f),'complexString':W(0x240),'complexSignal':'read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','expression':W(0x1f1)};let j=async k=>{const a0=W,l=(k[a0(0x227)]??[])[a0(0x1eb)](E=>({...E})),m=E=>{const a1=a0,F=(l[E]['varName']??'')['trim']();if(!F)return null;if(!g[a1(0x1f5)](F))return'\x22'+F+a1(0x1a5);if(h[a1(0x1b2)](F))return'\x22'+F+a1(0x16d);if(l[a1(0x204)]((G,H)=>H!==E&&(G['varName']??'')[a1(0x18e)]()===F))return'\x22'+F+a1(0x19e);return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document['createElement'](a0(0x1be));o[a0(0x19b)]['cssText']=a0(0x239);const p=document[a0(0x1b6)](a0(0x1be));p['style'][a0(0x229)]='display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;';const q=document[a0(0x1b6)](a0(0x21d));q[a0(0x235)]=a0(0x214),q[a0(0x19b)][a0(0x229)]=a0(0x195);const r=document[a0(0x1b6)](a0(0x21d));r['textContent']=a0(0x1ea),r['style'][a0(0x229)]='flex:0\x200\x20130px;';const s=document['createElement'](a0(0x21d));s[a0(0x235)]='Signal',s[a0(0x19b)]['cssText']=a0(0x15c);const t=document['createElement']('span');t['style']['cssText']='flex:0\x200\x2022px;',p['append'](q,r,s,t),o[a0(0x18f)](p);const u=document['createElement'](a0(0x1be));u[a0(0x19b)][a0(0x229)]=a0(0x22c),o[a0(0x18f)](u);const v=document[a0(0x1b6)](a0(0x1be));v['style']['cssText']=a0(0x1ec);const w=document['createElement']('div');w['style']['cssText']='font-weight:bold;\x20margin-bottom:2px;';const x=document[a0(0x1b6)](a0(0x1be));x['style'][a0(0x229)]=a0(0x1ce),v[a0(0x169)](w,x);const y=E=>{const a2=a0;w['textContent']=a2(0x20c)+E,x[a2(0x235)]=i[E]??'';},z=[],A=()=>{const a3=a0;l[a3(0x219)]((E,F)=>{const a4=a3,G=z[F];if(!G)return;const H=m(F);G[a4(0x1e0)]=H??a4(0x231)+F+'\x20if\x20empty)',G['style'][a4(0x18a)]=H?a4(0x1f0):'',G[a4(0x19b)]['backgroundColor']=H?a4(0x221):'';});},B=()=>{const a5=a0;u[a5(0x196)]='',z[a5(0x242)]=0x0,l[a5(0x219)]((E,F)=>{const a6=a5,G=document[a6(0x1b6)]('div');G[a6(0x19b)]['cssText']='display:flex;\x20align-items:center;\x20gap:4px;';const H=document['createElement'](a6(0x165));H['value']=E['varName']??'',H[a6(0x1e6)]='__'+F,H[a6(0x19b)]['cssText']=n+a6(0x1b8),H['oninput']=()=>{const a7=a6;E['varName']=H[a7(0x227)]||undefined,A();},z['push'](H),G[a6(0x18f)](H);const I=document['createElement']('select');I[a6(0x19b)][a6(0x229)]=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document['createElement']('option');N['value']=M,N['textContent']=M;if(E[a6(0x193)]===M)N['selected']=!![];I['appendChild'](N);}I['onchange']=()=>{const a8=a6;E[a8(0x193)]=I['value'],y(I[a8(0x227)]);},I[a6(0x1df)]=()=>y(I[a6(0x227)]),G[a6(0x18f)](I);const J=document['createElement']('input');J['value']=E['name']??'',J[a6(0x1e6)]=a6(0x1ab),J[a6(0x19b)][a6(0x229)]=n+'\x20flex:1\x201\x20auto;',J[a6(0x15d)]=()=>{E['name']=J['value'];},G[a6(0x18f)](J);const K=document['createElement']('button');K[a6(0x1e0)]=a6(0x18c),K['style']['cssText']=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document[a6(0x1b6)]('img');L['src']=assetsPath+'icons/delete.svg',L[a6(0x19b)][a6(0x229)]='width:12px;\x20height:12px;',K[a6(0x18f)](L),K['onclick']=()=>{const a9=a6;l[a9(0x1cb)](F,0x1),B();},G[a6(0x18f)](K),u['appendChild'](G);}),A();};B();const C=document['createElement'](a0(0x1ca));C[a0(0x235)]=a0(0x243),C['style']['cssText']=n+'\x20align-self:flex-start;\x20padding:0\x208px;',C[a0(0x1e1)]=()=>{const aa=a0;l[aa(0x1ee)]({'source':'signal','name':''}),B();},o[a0(0x18f)](C),y(l[0x0]?.[a0(0x193)]??a0(0x171)),o['appendChild'](v);const D=await this['visualizationShell'][a0(0x224)](o,{'title':a0(0x20d),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x24a)]['setPropertyValue'](k[a0(0x22f)],l),this['_propertygrid'][a0(0x21e)]());};this[W(0x24a)][W(0x216)]=this[W(0x216)],this['_propertygrid'][W(0x186)]=this[W(0x186)],this[W(0x24a)][W(0x217)]=this[W(0x217)],this[W(0x24a)]['instanceServiceContainer']=this['instanceServiceContainer'],this['_propertygrid'][W(0x17e)]='script',this[W(0x24a)][W(0x1d8)](0x82),this['_propertygrid'][W(0x185)]=(k,l)=>{const ab=W,m=typeInfoFromJsonSchema(this[ab(0x1f3)],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m[ab(0x23b)]=m[ab(0x23b)][ab(0x1aa)](n=>n['name']!=='trueCommands'&&n[ab(0x1ac)]!=='elseCommands')),m;},this[W(0x24a)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const ac=W;if(!k['specialAllreadyAdded']){k[ac(0x211)]=!![];if(k[ac(0x15b)]===ac(0x1d5)){}else{if(k[ac(0x15b)]==='signalList'){let p=document['createElement'](ac(0x1ca));p[ac(0x19b)]['height']=ac(0x1a2),p[ac(0x19b)]['position']='relative',p['style']['display']='flex',p[ac(0x19b)]['justifyContent']='center',p[ac(0x19b)][ac(0x16f)]='20px',p['style'][ac(0x194)]=ac(0x175),p[ac(0x1e2)]=ac(0x226),p['onclick']=()=>{const ad=ac;this[ad(0x24a)]['setPropertyValue'](m,undefined),this['_propertygrid'][ad(0x21e)]();},n['nodeElem'][ac(0x1a8)](ac(0x23e),p);const q=Array[ac(0x19c)](l)?l:[];let r=document[ac(0x1b6)]('div');r['style'][ac(0x164)]='flex';let s=document[ac(0x1b6)]('span');s[ac(0x1e2)]=q[ac(0x1eb)]((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.[ac(0x193)]??'')+':'+(u?.['name']??''))['join'](',\x20'),s[ac(0x19b)]['overflow']=ac(0x1d1),s['style'][ac(0x205)]='nowrap',s['style'][ac(0x163)]=ac(0x166),s[ac(0x19b)]['flexGrow']='1',s['title']=JSON['stringify'](q),r[ac(0x18f)](s);let t=document[ac(0x1b6)](ac(0x1ca));return t[ac(0x1e2)]='...',t['onclick']=()=>{j({'value':q,'propertyPath':m});},r[ac(0x18f)](t),n[ac(0x21a)]['style'][ac(0x164)]='flex',r;}else{if(k['format']===ac(0x1ad)){const u=document[ac(0x1b6)]('div');u['style']['cssText']=ac(0x237);const v=new CodeViewMonaco();v['language']=ac(0x181),v['singleRow']=!![],v[ac(0x19b)]['cssText']=ac(0x1cd),v[ac(0x168)]=l??'',v['addEventListener']('code-changed',()=>{const ae=ac;this[ae(0x24a)][ae(0x223)](m,v['code']);}),u['appendChild'](v);const w=document['createElement'](ac(0x1ca));return w['innerText']='...',w['title']='Open\x20in\x20larger\x20editor',w['style'][ac(0x229)]='flex:0\x200\x2028px;\x20width:20px;',w['onclick']=()=>e({'value':v['code'],'propertyPath':m}),u[ac(0x18f)](w),n[ac(0x21a)]['style']['display']='flex',u;}else{if(typeof l===ac(0x1fd)&&l!==null||k['format']==='complex'){let x=document[ac(0x1b6)]('button');x['style'][ac(0x182)]=ac(0x1a2),x['style']['position']=ac(0x1b3),x[ac(0x19b)][ac(0x164)]='flex',x[ac(0x19b)][ac(0x170)]='center',x[ac(0x19b)]['width']=ac(0x22d),x[ac(0x19b)]['boxSizing']='content-box',x[ac(0x1e2)]='del',x[ac(0x1e1)]=()=>{const af=ac;this[af(0x24a)]['setPropertyValue'](m,undefined),this[af(0x24a)]['refresh']();},n['nodeElem']['insertAdjacentElement'](ac(0x23e),x);let y=document[ac(0x1b6)](ac(0x1be));y[ac(0x19b)][ac(0x164)]='flex';let z=document['createElement']('span');if(l)z[ac(0x1e2)]=(l['source']??'')+':\x20'+(l[ac(0x1ac)]??'');else z[ac(0x1e2)]='';z[ac(0x19b)]['overflow']='hidden',z['style']['whiteSpace']='nowrap',z['style'][ac(0x163)]='ellipsis',z[ac(0x19b)]['flexGrow']='1',z[ac(0x1e0)]=JSON['stringify'](l),y[ac(0x18f)](z);let A=document['createElement'](ac(0x1ca));return A[ac(0x1e2)]=ac(0x189),A[ac(0x1e1)]=()=>{d({'value':l,'propertyPath':m});},y[ac(0x18f)](A),n['nodeElem']['style']['display']=ac(0x1bb),y;}else{let B=document[ac(0x1b6)](ac(0x1ca));B[ac(0x19b)][ac(0x182)]='calc(100%\x20-\x206px)',B[ac(0x19b)][ac(0x213)]=ac(0x1b3),B['style'][ac(0x164)]='flex',B[ac(0x19b)][ac(0x170)]='center',B['style'][ac(0x16f)]=ac(0x22d),B['style']['boxSizing']=ac(0x175),B['title']='complex\x20property\x20value',B['style']['opacity']=ac(0x17b),B['innerText']='...',B[ac(0x1e1)]=()=>{d({'value':l,'propertyPath':m});},n['nodeElem']['insertAdjacentElement'](ac(0x23e),B),n[ac(0x21a)]['style'][ac(0x164)]='flex';}}}}}return null;},this['_propertygrid']['propertyNodeContextMenu']['on'](k=>{const ag=W;ContextMenu[ag(0x200)]([{'title':ag(0x23a),'action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ah=ag,l=prompt(ah(0x1b0));l&&(this[ah(0x24a)]['setPropertyValue'](k[ah(0x22f)],l),this['_propertygrid']['refresh']());}},{'title':ag(0x1b7),'action':async()=>{const ai=ag;this[ai(0x24a)][ai(0x223)](k[ai(0x22f)],undefined),this['_propertygrid'][ai(0x21e)]();}}],k[ag(0x1e7)]);});}['helpClicked'](){const aj=P,d=document['createElement'](aj(0x23f));d[aj(0x1d6)]=simpleScriptEditorHelpHtml,d[aj(0x19b)][aj(0x229)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['visualizationShell'][aj(0x18b)](d,{'title':aj(0x1a0),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this['helpRequested'][aj(0x192)]();}['toggleCodeView'](){const ak=P;if(!this['_showingCode']){const e=JSON['stringify']({'commands':this[ak(0x15f)]()},null,0x2);this['_codeView']['update'](e),this[ak(0x23c)](!![]);return;}const d=this[ak(0x173)]();if(!d)return;this[ak(0x23c)](![]),this[ak(0x1da)](d);}['_showCodeView'](d){const al=P;this['_codeView'][al(0x188)][al(0x198)](al(0x1c0),d),this[al(0x1db)]['classList']['toggle']('hidden',d),this['_splitView']['classList'][al(0x198)]('code-mode',d),this['_addCommandBtn'][al(0x183)]=d,this[al(0x16b)][al(0x1e2)]=d?al(0x228):'Code',this[al(0x222)]=d;if(d)requestAnimationFrame(()=>this['_codeView']['activated']());}[P(0x173)](){const am=P;let d;try{d=JSON['parse'](this['_codeView'][am(0x22e)]());}catch(f){return alert('Invalid\x20JSON:\x0a'+f[am(0x1bd)]),null;}if(!Array[am(0x19c)](d?.['commands']))return alert(am(0x247)),null;return d;}['loadScript'](d){const an=P;this[an(0x1c5)]=d;this['_commandListFancyTree']&&(this['_commandListFancyTree']['destroy'](),this[an(0x1db)]=this['_getDomElement'](an(0x20a)));let e=[];for(let f of this['_script']['commands']){f=ScriptUpgrades['upgradeScriptCommand'](f),e[an(0x1ee)](this[an(0x1c6)](f));}this['_commandListFancyTree']=new Wunderbaum({...defaultOptions,'element':this['_commandListDiv'],'icon':![],'source':e,'activate':g=>{const ao=an;this[ao(0x24a)]['selectedObject']=g[ao(0x22a)][ao(0x199)]['data'][ao(0x20f)]??null;},'render':g=>{const ap=an,h=!!g[ap(0x22a)][ap(0x199)]['data']?.['branch'];if(g[ap(0x1ed)]){g[ap(0x21a)][ap(0x1ef)]=k=>{const aq=ap;return k[aq(0x184)](),![];};const j=document[ap(0x1b6)]('span');j['style']['cssText']='display:inline-block;\x20width:24px;',g[ap(0x21a)][ap(0x238)](j);if(!h){const k=document['createElement']('div');k[ap(0x1ff)]='drag-handle',k['title']='Drag\x20to\x20reorder',k['innerHTML']='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g[ap(0x21a)][ap(0x238)](k);const l=g['nodeElem']['parentElement'],m=document['createElement']('span');m[ap(0x19b)][ap(0x229)]='display:inline-block;\x20width:32px;',g['nodeElem'][ap(0x18f)](m);const n=document[ap(0x1b6)]('div');n[ap(0x1ff)]=ap(0x1a6);const o=document['createElement']('img');o['src']=assetsPath+'icons/copy.svg',o['title']='Duplicate',o[ap(0x1e1)]=()=>{const ar=ap,q=structuredClone(g['node'][ar(0x199)]['data'][ar(0x20f)]),r=g['node'][ar(0x176)]['addChildren'](this[ar(0x1c6)](q));r[ar(0x208)](g[ar(0x22a)],'after');};const p=document[ap(0x1b6)](ap(0x1a3));p[ap(0x1dc)]=assetsPath+ap(0x1c2),p[ap(0x1e0)]=ap(0x21c),p['onclick']=()=>g[ap(0x22a)]['remove'](),n[ap(0x169)](o,p),l[ap(0x18f)](n),g['nodeElem'][ap(0x15e)]=j[ap(0x206)]+m[ap(0x206)];}else g['nodeElem']['_reservedRowWidth']=j[ap(0x206)];}const i=g[ap(0x21a)]['_reservedRowWidth']??0x0;if(i){const q=g[ap(0x21a)][ap(0x1f4)](ap(0x20b));if(q){const r=parseFloat(q[ap(0x19b)][ap(0x16f)]);if(!isNaN(r))q[ap(0x19b)][ap(0x16f)]=Math[ap(0x1c7)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const as=an;if(!this[as(0x218)])return![];return this[as(0x1c4)]=g['node'],g['event']['dataTransfer']['effectAllowed']=as(0x1a4),g['event'][as(0x1b1)]['dropEffect']=as(0x1a4),g['event'][as(0x1b1)]['setData'](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{this['_draggedNode']=null;},'dragEnter':g=>{const at=an,h=g[at(0x1e7)][at(0x1b1)]?.['types']['includes'](SAME_TREE_MOVE_MIME);g[at(0x1e7)][at(0x1b1)][at(0x1de)]=h?at(0x1a4):at(0x161);const i=!!g['node']['data'][at(0x199)]?.['branch'];return i?new Set(['over']):new Set(['before',at(0x248)]);},'dragOver':g=>{const au=an,h=g['event']['dataTransfer']?.[au(0x1a7)]['includes'](SAME_TREE_MOVE_MIME);g['event'][au(0x1b1)]['dropEffect']=h?'move':'copy';},'drop':async g=>{const av=an,h=g[av(0x1e7)]['dataTransfer']?.[av(0x1a7)][av(0x203)](SAME_TREE_MOVE_MIME);if(g[av(0x1f8)]===av(0x23d)){if(h&&this['_draggedNode'])this['_draggedNode']['moveTo'](g[av(0x22a)],av(0x18f)),this['_draggedNode'][av(0x167)](av(0x197),![]);else{const j=g['event']['dataTransfer']?.['getData'](av(0x20e));j&&g['node'][av(0x19d)](this[av(0x1c6)]({'type':j}));}return;}const i=g[av(0x1f8)]==av(0x1d3)?'before':'after';if(h&&this[av(0x1c4)])this[av(0x1c4)]['moveTo'](g['node'],i),this[av(0x1c4)][av(0x167)](av(0x197),![]);else{const k=g['event'][av(0x1b1)]?.[av(0x202)](av(0x20e));if(k){const l={'type':k},m=this['createTreeItem'](l),n=g[av(0x22a)]['parent']['addChildren'](m);n['moveTo'](g['node'],i);}}}}}),this['_commandListFancyTree']['root'][an(0x1d2)]?.[0x0]?.['setActive']();}[P(0x1c6)](d){const aw=P;if(d[aw(0x241)]==='If'){const e=d;return e['trueCommands']??=[],e[aw(0x187)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':'true'},'children':e[aw(0x180)]['map'](f=>this['createTreeItem'](f))},{'title':'else','expanded':!![],'data':{'branch':aw(0x162)},'children':e['elseCommands']['map'](f=>this[aw(0x1c6)](f))}]};}return{'title':d[aw(0x241)],'data':{'item':d}};}[P(0x1dd)](d){const ax=P,e=d[ax(0x199)][ax(0x199)]['item'];if(e[ax(0x241)]==='If'){const f=d['children']?.[ax(0x1f2)](h=>h[ax(0x199)]['data']?.[ax(0x1af)]==='true'),g=d['children']?.['find'](h=>h[ax(0x199)]['data']?.['branch']===ax(0x162));e[ax(0x180)]=(f?.['children']??[])['map'](h=>this['nodeToCommand'](h)),e['elseCommands']=(g?.[ax(0x1d2)]??[])['map'](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const ay=P;let e=d;while(e){if(e['data']?.[ay(0x199)]?.['branch'])return e;e=e['parent'];}return null;}async[P(0x220)](){const az=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this['scriptCommandsTypeInfo'],this[az(0x172)]),d['title']='Add\x20Script\x20Command',d[az(0x178)]['on'](()=>{const aA=az;if(d['selectedType']){const f={'type':d['selectedType']},g=this[aA(0x1c6)](f),h=this['_getBranchContainerNode'](this['_commandListFancyTree']['activeNode']);if(h)h['addChildren'](g);else this[aA(0x16e)]['addChildren'](g);}});const e=new AbortController();d[az(0x1fc)]['on'](()=>e[az(0x232)]()),await this['visualizationShell'][az(0x18b)](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e[az(0x171)]});}[P(0x15f)](){const aB=P;if(this['_showingCode']){const e=this['_parseCodeViewScript']();if(e)this[aB(0x1da)](e);}let d=this[aB(0x16e)][aB(0x1a9)][aB(0x1d2)];return d[aB(0x1eb)](f=>this['nodeToCommand'](f));}}customElements[P(0x212)](SimpleScriptEditor['is'],SimpleScriptEditor);