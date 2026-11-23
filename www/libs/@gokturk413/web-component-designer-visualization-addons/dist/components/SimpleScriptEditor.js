const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=-parseInt(O(0x142))/0x1*(parseInt(O(0x1f1))/0x2)+parseInt(O(0x117))/0x3+-parseInt(O(0x1c4))/0x4+-parseInt(O(0x19e))/0x5*(-parseInt(O(0x1a5))/0x6)+parseInt(O(0x19c))/0x7*(parseInt(O(0x11e))/0x8)+-parseInt(O(0x1de))/0x9+parseInt(O(0x171))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x2551a));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';function a(){const aD=['max','display:inline-block;\x20width:32px;','getScriptCommands','innerHTML','wb-drag-source','commands','map','span','a\x20value\x20of\x20the\x20context','copy','code-changed','onclick','_codeView','Remove','formula','context','loadCommands','className','icons/copy.svg','classList','destroy','isArray','1302ckgxyO','append','65CncYYl','throw','visible','afterbegin','item','drop','parent','17352ypCIAd','some','remove','prepend','object','setData','_splitView','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','disabled','dropEffect','width:100%;\x20height:100%;\x20border:none;\x20display:block;','nodeToCommand','catch','elseCommands','textContent','closest','source','boxSizing','flex:0\x200\x2028px;\x20width:20px;','text/plain','selectedType','setClass','value','filter','overflow','commandList','_draggedNode','propertyNodeContextMenu','helpRequested','appendChild','relative','96944eGdiCF','title','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','node','height:22px;\x20box-sizing:border-box;\x20font-size:12px;','justifyContent','_propertygrid','show','openConfirmation','try','_assignEvents','move','preventDefault','property','20px','remove\x20complex\x20value','createTreeItem','display','debugger','forEach','Name','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','src','typeName','shadowRoot','delete','1260810ATUpoB','createElement','addChildren','Duplicate','code-mode','after','content-box','select','target','branch','message','color:#333;\x20white-space:pre-line;','while','+\x20Add\x20signal','expression','before','Complex\x20for\x20\x22','e.g.\x20srm.rbg{__tagRoot}.error','nodeElem','2164qlxxmu','name','offsetWidth','language','oninput','cssText','flex:0\x200\x2022px;','moveTo','Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','root','default','instanceServiceContainer','157956LnXDKP','img','else','stringify','\x20align-self:flex-start;\x20padding:0\x208px;','input','propertiesTypeInfo','6008AwUlzM','setPropertyValue','_reservedRowWidth','codeView','hidden','upgradeScriptCommand','_getDomElement','getData','loadScript','includes','nowrap','trueCommands','insertAdjacentElement','children','_title','signalInProperty','visualizationShell','Edit\x20signals','break','selectedObject','trim','js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object','varName','parentElement','srcdoc','getSpecialEditorForType','_script','class','.drag-handle','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','drag-handle','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','complex\x20property\x20value','ellipsis','var','div','136kFkYua','calc(100%\x20-\x206px)','dataTransfer','height','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','specialAllreadyAdded','Edit\x20formula','propertyPath','_showCodeView','implements','toggle','#fdecea','_dragFromHandle','data','format','_getBranchContainerNode','\x20flex:1\x201\x20auto;','yield','Typ:\x20','serviceContainer','template','button','toggleCodeView','addEventListener','_commandListDiv','_commandListFancyTree','whiteSpace','Visual','setNameColumnWidth','type','visualizationHandler','splice','iframe','signal','event','dragover','length','scriptCommandsTypeInfo','types','fullName','IScriptMultiplexValue','complexSignal','_parseCodeViewScript','region','position','bindingDoubleClicked','openModal','2344020mmbTIx','flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;','width','listContent','javascript','function','style','innerText','continue','placeholder','_showingCode','_restoreCachedInititalValues','push','complex','refresh','over','join','enter\x20value:','code','Signal','arguments'];a=function(){return aD;};return a();}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME='application/x-simple-script-move';export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [P(0x156)]=html`
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
  `;static ['is']='node-projects-visualization-simple-script-editor';[P(0x12c)];get[P(0x1c5)](){return this['_title'];}set[P(0x1c5)](d){const Q=P;this[Q(0x12c)]=d;}[P(0x155)];['instanceServiceContainer'];['visualizationHandler'];[P(0x12e)];[P(0x167)];[P(0x11d)];[P(0x1c1)]=new TypedEvent();['commandDescriptions']={...nativeScriptCommandDescriptions};[P(0x138)];[P(0x15a)];[P(0x15b)];['_propertygrid'];[P(0x1ab)];[P(0x192)];['_codeToggleBtn'];['_addCommandBtn'];[P(0x17b)]=![];[P(0x14e)]=![];['_draggedNode']=null;constructor(){const R=P;super(),this[R(0x17c)](),this[R(0x15a)]=this[R(0x124)]('commandList'),this['_propertygrid']=this['_getDomElement']('propertygrid'),this[R(0x1ab)]=this[R(0x124)]('splitView'),this['_codeView']=this['_getDomElement'](R(0x121)),this['_codeToggleBtn']=this[R(0x124)]('codeToggleBtn'),this['_addCommandBtn']=this['_getDomElement']('addCommandBtn');const d=this[R(0x124)](R(0x174));d[R(0x159)]('mousedown',e=>{const S=R;this['_dragFromHandle']=!!e[S(0x1e6)]?.[S(0x1b4)](S(0x13a));}),document['addEventListener']('dragend',()=>{const T=R;this[T(0x1bf)]=null;},!![]),d['addEventListener'](R(0x165),e=>{const U=R;e['preventDefault']();if(e['dataTransfer']){const f=e[U(0x144)]['types']['includes'](SAME_TREE_MOVE_MIME);e[U(0x144)][U(0x1ae)]=f?U(0x1cf):U(0x18f);}}),d[R(0x159)](R(0x1a3),e=>{const V=R;e['preventDefault']();const f=e['dataTransfer']?.[V(0x168)]['includes'](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this['_commandListFancyTree']['root'][V(0x12b)],h=g?.[g[V(0x166)]-0x1];if(h)this['_draggedNode'][V(0x112)](h,'after');this[V(0x1bf)][V(0x1ba)](V(0x18a),![]);}else{const i=e[V(0x144)]?.['getData'](V(0x1b8));if(i){const j={'type':i};this['_commandListFancyTree'][V(0x114)][V(0x1e0)](this[V(0x1d4)](j));}}}),this[R(0x1dc)]['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptEditor['style']];}async['ready'](){const W=P;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[W(0x1ce)]();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l[X(0x160)]=this[X(0x160)],l[X(0x12e)]=this[X(0x12e)],l[X(0x155)]=this[X(0x155)],l[X(0x116)]=this['instanceServiceContainer'],l['bindableObjectsTarget']='script',l['getTypeInfo']=(n,o)=>typeInfoFromJsonSchema(this[X(0x11d)],n,o),l['showHead']=![],l[X(0x1db)]=X(0x16a),l['title']=X(0x1ee)+k['propertyPath']+'\x22';if(typeof k['value']==='object')l['selectedObject']=k['value']??{};else l['selectedObject']={};l[X(0x16f)]=n=>{const Y=X;if(n['bindabletype']==Y(0x1d1))l['setPropertyValue']('source',Y(0x1d1));else n['bindabletype']==Y(0x195)?l[Y(0x11f)](Y(0x1b5),Y(0x195)):l['setPropertyValue']('source',Y(0x163));l['setPropertyValue']('name',n[Y(0x169)]),l[Y(0x17f)]();};let m=await this['visualizationShell'][X(0x1cc)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this[X(0x1ca)]['setPropertyValue'](k['propertyPath'],l['selectedObject']),this[X(0x1ca)]['refresh']());},e=async k=>{const Z=W,l=new CodeViewMonaco();l['language']=Z(0x175),l[Z(0x177)]['position']=Z(0x1c3),l[Z(0x183)]=k[Z(0x1bb)]??'';const m=await this['visualizationShell'][Z(0x1cc)](l,{'title':Z(0x148),'x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Z(0x1ca)][Z(0x11f)](k['propertyPath'],l[Z(0x183)]),this[Z(0x1ca)]['refresh']());};const f=[W(0x163),'property','elementProperty',W(0x12d),W(0x164),'parameter',W(0x195),'complexString',W(0x16b),W(0x1ec)],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([W(0x130),'case',W(0x1b1),W(0x139),'const',W(0x179),W(0x1d6),W(0x115),W(0x1dd),'do','else','export','extends','finally','for',W(0x176),'if','import','in','instanceof','new','return','super','switch','this',W(0x19f),W(0x1cd),'typeof',W(0x140),'void',W(0x1ea),'with',W(0x153),'let','static','enum','await',W(0x14b),'package','protected','interface','private','public','null','true','false','undefined',W(0x185),'eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':W(0x1ac),'elementProperty':W(0x13d),'signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':'read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','parameter':'a\x20parameter\x20you\x20hand\x20over','context':W(0x18e),'complexString':W(0x13b),'complexSignal':W(0x1c6),'expression':W(0x133)};let j=async k=>{const a0=W,l=(k['value']??[])[a0(0x18c)](E=>({...E})),m=E=>{const a1=a0,F=(l[E][a1(0x134)]??'')[a1(0x132)]();if(!F)return null;if(!g['test'](F))return'\x22'+F+'\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.';if(h['has'](F))return'\x22'+F+a1(0x146);if(l[a1(0x1a6)]((G,H)=>H!==E&&(G['varName']??'')[a1(0x132)]()===F))return'\x22'+F+'\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.';return null;},n=a0(0x1c8),o=document['createElement']('div');o['style'][a0(0x110)]='display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;';const p=document[a0(0x1df)]('div');p['style']['cssText']=a0(0x1d9);const q=document[a0(0x1df)]('span');q[a0(0x1b3)]=a0(0x1d8),q[a0(0x177)]['cssText']='flex:0\x200\x20120px;';const r=document[a0(0x1df)](a0(0x18d));r['textContent']='Typ',r[a0(0x177)][a0(0x110)]='flex:0\x200\x20130px;';const s=document['createElement'](a0(0x18d));s[a0(0x1b3)]=a0(0x184),s['style'][a0(0x110)]='flex:1\x201\x20auto;';const t=document[a0(0x1df)]('span');t['style'][a0(0x110)]=a0(0x111),p[a0(0x19d)](q,r,s,t),o[a0(0x1c2)](p);const u=document['createElement'](a0(0x141));u['style'][a0(0x110)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o[a0(0x1c2)](u);const v=document['createElement']('div');v['style'][a0(0x110)]='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0x1df)](a0(0x141));w[a0(0x177)]['cssText']='font-weight:bold;\x20margin-bottom:2px;';const x=document['createElement']('div');x['style']['cssText']=a0(0x1e9),v['append'](w,x);const y=E=>{const a2=a0;w['textContent']=a2(0x154)+E,x['textContent']=i[E]??'';},z=[],A=()=>{l['forEach']((E,F)=>{const a3=b,G=z[F];if(!G)return;const H=m(F);G[a3(0x1c5)]=H??a3(0x113)+F+'\x20if\x20empty)',G[a3(0x177)]['borderColor']=H?'#c0392b':'',G[a3(0x177)]['backgroundColor']=H?a3(0x14d):'';});},B=()=>{const a4=a0;u[a4(0x189)]='',z[a4(0x166)]=0x0,l[a4(0x1d7)]((E,F)=>{const a5=a4,G=document[a5(0x1df)]('div');G[a5(0x177)][a5(0x110)]='display:flex;\x20align-items:center;\x20gap:4px;';const H=document[a5(0x1df)](a5(0x11c));H['value']=E[a5(0x134)]??'',H[a5(0x17a)]='__'+F,H[a5(0x177)]['cssText']=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H[a5(0x10f)]=()=>{const a6=a5;E[a6(0x134)]=H['value']||undefined,A();},z[a5(0x17d)](H),G[a5(0x1c2)](H);const I=document['createElement'](a5(0x1e5));I['style'][a5(0x110)]=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document['createElement']('option');N['value']=M,N[a5(0x1b3)]=M;if(E['source']===M)N['selected']=!![];I[a5(0x1c2)](N);}I['onchange']=()=>{const a7=a5;E[a7(0x1b5)]=I['value'],y(I[a7(0x1bb)]);},I['onfocus']=()=>y(I['value']),G[a5(0x1c2)](I);const J=document['createElement'](a5(0x11c));J[a5(0x1bb)]=E['name']??'',J[a5(0x17a)]=a5(0x1ef),J['style'][a5(0x110)]=n+a5(0x152),J[a5(0x10f)]=()=>{const a8=a5;E[a8(0x1f2)]=J['value'];},G[a5(0x1c2)](J);const K=document['createElement'](a5(0x157));K[a5(0x1c5)]='Remove\x20signal',K[a5(0x177)]['cssText']=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document[a5(0x1df)](a5(0x118));L['src']=assetsPath+'icons/delete.svg',L[a5(0x177)][a5(0x110)]='width:12px;\x20height:12px;',K[a5(0x1c2)](L),K['onclick']=()=>{const a9=a5;l[a9(0x161)](F,0x1),B();},G['appendChild'](K),u[a5(0x1c2)](G);}),A();};B();const C=document['createElement'](a0(0x157));C[a0(0x1b3)]=a0(0x1eb),C[a0(0x177)][a0(0x110)]=n+a0(0x11b),C[a0(0x191)]=()=>{const aa=a0;l[aa(0x17d)]({'source':'signal','name':''}),B();},o[a0(0x1c2)](C),y(l[0x0]?.[a0(0x1b5)]??a0(0x163)),o['appendChild'](v);const D=await this['visualizationShell']['openConfirmation'](o,{'title':a0(0x12f),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x1ca)][a0(0x11f)](k['propertyPath'],l),this['_propertygrid'][a0(0x17f)]());};this[W(0x1ca)]['visualizationHandler']=this['visualizationHandler'],this[W(0x1ca)][W(0x12e)]=this['visualizationShell'],this[W(0x1ca)]['serviceContainer']=this[W(0x155)],this['_propertygrid'][W(0x116)]=this['instanceServiceContainer'],this[W(0x1ca)]['bindableObjectsTarget']='script',this['_propertygrid'][W(0x15e)](0x82),this['_propertygrid']['getTypeInfo']=(k,l)=>{const ab=W,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.[ab(0x15f)]==='If')&&(m['properties']=m['properties'][ab(0x1bc)](n=>n['name']!==ab(0x129)&&n[ab(0x1f2)]!=='elseCommands')),m;},this[W(0x1ca)][W(0x137)]=async(k,l,m,n,o)=>{const ac=W;if(!k[ac(0x147)]){k['specialAllreadyAdded']=!![];if(k[ac(0x150)]==='collection'){}else{if(k[ac(0x150)]==='signalList'){let p=document['createElement'](ac(0x157));p[ac(0x177)]['height']=ac(0x143),p['style'][ac(0x16e)]=ac(0x1c3),p['style']['display']='flex',p['style']['justifyContent']='center',p['style'][ac(0x173)]='20px',p['style']['boxSizing']='content-box',p[ac(0x178)]='del',p[ac(0x191)]=()=>{const ad=ac;this[ad(0x1ca)]['setPropertyValue'](m,undefined),this['_propertygrid'][ad(0x17f)]();},n['nodeElem']['insertAdjacentElement']('afterbegin',p);const q=Array[ac(0x19b)](l)?l:[];let r=document[ac(0x1df)](ac(0x141));r['style'][ac(0x1d5)]='flex';let s=document['createElement'](ac(0x18d));s['innerText']=q[ac(0x18c)]((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.[ac(0x1b5)]??'')+':'+(u?.['name']??''))[ac(0x181)](',\x20'),s[ac(0x177)][ac(0x1bd)]='hidden',s[ac(0x177)][ac(0x15c)]='nowrap',s['style']['textOverflow']=ac(0x13f),s['style']['flexGrow']='1',s['title']=JSON['stringify'](q),r['appendChild'](s);let t=document['createElement']('button');return t[ac(0x178)]='...',t['onclick']=()=>{j({'value':q,'propertyPath':m});},r[ac(0x1c2)](t),n[ac(0x1f0)]['style'][ac(0x1d5)]='flex',r;}else{if(k['format']===ac(0x194)){const u=document[ac(0x1df)](ac(0x141));u[ac(0x177)][ac(0x110)]='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v[ac(0x1f4)]='javascript',v['singleRow']=!![],v['style']['cssText']=ac(0x172),v['code']=l??'',v[ac(0x159)](ac(0x190),()=>{const ae=ac;this[ae(0x1ca)]['setPropertyValue'](m,v[ae(0x183)]);}),u['appendChild'](v);const w=document['createElement'](ac(0x157));return w['innerText']='...',w[ac(0x1c5)]='Open\x20in\x20larger\x20editor',w['style']['cssText']=ac(0x1b7),w[ac(0x191)]=()=>e({'value':v['code'],'propertyPath':m}),u[ac(0x1c2)](w),n[ac(0x1f0)]['style'][ac(0x1d5)]='flex',u;}else{if(typeof l===ac(0x1a9)&&l!==null||k['format']===ac(0x17e)){let x=document['createElement'](ac(0x157));x[ac(0x177)]['height']='calc(100%\x20-\x206px)',x[ac(0x177)]['position']='relative',x[ac(0x177)][ac(0x1d5)]='flex',x[ac(0x177)][ac(0x1c9)]='center',x['style']['width']='20px',x[ac(0x177)][ac(0x1b6)]=ac(0x1e4),x['innerText']='del',x[ac(0x191)]=()=>{const af=ac;this['_propertygrid'][af(0x11f)](m,undefined),this['_propertygrid'][af(0x17f)]();},n['nodeElem']['insertAdjacentElement'](ac(0x1a1),x);let y=document['createElement'](ac(0x141));y['style'][ac(0x1d5)]='flex';let z=document[ac(0x1df)]('span');if(l)z[ac(0x178)]=(l[ac(0x1b5)]??'')+':\x20'+(l['name']??'');else z[ac(0x178)]='';z[ac(0x177)]['overflow']=ac(0x122),z[ac(0x177)]['whiteSpace']=ac(0x128),z['style']['textOverflow']=ac(0x13f),z['style']['flexGrow']='1',z[ac(0x1c5)]=JSON[ac(0x11a)](l),y['appendChild'](z);let A=document[ac(0x1df)](ac(0x157));return A[ac(0x178)]='...',A[ac(0x191)]=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n[ac(0x1f0)]['style']['display']='flex',y;}else{let B=document['createElement']('button');B[ac(0x177)][ac(0x145)]=ac(0x143),B[ac(0x177)][ac(0x16e)]='relative',B[ac(0x177)]['display']='flex',B['style'][ac(0x1c9)]='center',B[ac(0x177)]['width']=ac(0x1d2),B['style'][ac(0x1b6)]='content-box',B[ac(0x1c5)]=ac(0x13e),B['style']['opacity']='0.2',B['innerText']='...',B['onclick']=()=>{d({'value':l,'propertyPath':m});},n[ac(0x1f0)][ac(0x12a)](ac(0x1a1),B),n[ac(0x1f0)][ac(0x177)][ac(0x1d5)]='flex';}}}}}return null;},this[W(0x1ca)][W(0x1c0)]['on'](k=>{const ag=W;ContextMenu[ag(0x1cb)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ah=ag,l=prompt(ah(0x182));l&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l),this['_propertygrid']['refresh']());}},{'title':ag(0x1d3),'action':async()=>{const ai=ag;this[ai(0x1ca)]['setPropertyValue'](k[ai(0x149)],undefined),this[ai(0x1ca)]['refresh']();}}],k['event']);});}['helpClicked'](){const aj=P,d=document['createElement'](aj(0x162));d[aj(0x136)]=simpleScriptEditorHelpHtml,d['style']['cssText']=aj(0x1af),this['visualizationShell'][aj(0x170)](d,{'title':'Simple\x20Script\x20Editor\x20Help','parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this['helpRequested']['emit']();}[P(0x158)](){const ak=P;if(!this[ak(0x17b)]){const e=JSON[ak(0x11a)]({'commands':this[ak(0x188)]()},null,0x2);this[ak(0x192)]['update'](e),this[ak(0x14a)](!![]);return;}const d=this[ak(0x16c)]();if(!d)return;this['_showCodeView'](![]),this['loadScript'](d);}['_showCodeView'](d){const al=P;this['_codeView'][al(0x199)][al(0x14c)](al(0x1a0),d),this['_commandListDiv'][al(0x199)]['toggle'](al(0x122),d),this[al(0x1ab)][al(0x199)]['toggle'](al(0x1e2),d),this['_addCommandBtn'][al(0x1ad)]=d,this['_codeToggleBtn']['innerText']=d?al(0x15d):'Code',this[al(0x17b)]=d;if(d)requestAnimationFrame(()=>this[al(0x192)]['activated']());}[P(0x16c)](){const am=P;let d;try{d=JSON['parse'](this[am(0x192)]['getText']());}catch(f){return alert('Invalid\x20JSON:\x0a'+f[am(0x1e8)]),null;}if(!Array['isArray'](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}['loadScript'](d){const an=P;this[an(0x138)]=d;this[an(0x15b)]&&(this['_commandListFancyTree'][an(0x19a)](),this['_commandListDiv']=this[an(0x124)](an(0x1be)));let e=[];for(let f of this[an(0x138)][an(0x18b)]){f=ScriptUpgrades[an(0x123)](f),e['push'](this['createTreeItem'](f));}this[an(0x15b)]=new Wunderbaum({...defaultOptions,'element':this[an(0x15a)],'icon':![],'source':e,'activate':g=>{const ao=an;this['_propertygrid'][ao(0x131)]=g[ao(0x1c7)][ao(0x14f)]['data']['item']??null;},'render':g=>{const ap=an,h=!!g[ap(0x1c7)][ap(0x14f)][ap(0x14f)]?.['branch'];if(g['isNew']){g['nodeElem']['oncontextmenu']=k=>{const aq=ap;return k[aq(0x1d0)](),![];};const j=document[ap(0x1df)]('span');j['style']['cssText']='display:inline-block;\x20width:24px;',g[ap(0x1f0)][ap(0x1a8)](j);if(!h){const k=document[ap(0x1df)](ap(0x141));k['className']=ap(0x13c),k['title']='Drag\x20to\x20reorder',k['innerHTML']='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g[ap(0x1f0)]['prepend'](k);const l=g[ap(0x1f0)][ap(0x135)],m=document['createElement']('span');m[ap(0x177)][ap(0x110)]=ap(0x187),g[ap(0x1f0)][ap(0x1c2)](m);const n=document['createElement'](ap(0x141));n[ap(0x197)]='cmd';const o=document['createElement'](ap(0x118));o['src']=assetsPath+ap(0x198),o['title']=ap(0x1e1),o['onclick']=()=>{const ar=ap,q=structuredClone(g[ar(0x1c7)]['data']['data'][ar(0x1a2)]),r=g[ar(0x1c7)]['parent'][ar(0x1e0)](this['createTreeItem'](q));r[ar(0x112)](g[ar(0x1c7)],ar(0x1e3));};const p=document[ap(0x1df)](ap(0x118));p[ap(0x1da)]=assetsPath+'icons/delete.svg',p[ap(0x1c5)]=ap(0x193),p[ap(0x191)]=()=>g['node'][ap(0x1a7)](),n['append'](o,p),l[ap(0x1c2)](n),g[ap(0x1f0)][ap(0x120)]=j[ap(0x1f3)]+m[ap(0x1f3)];}else g['nodeElem']['_reservedRowWidth']=j['offsetWidth'];}const i=g[ap(0x1f0)]['_reservedRowWidth']??0x0;if(i){const q=g[ap(0x1f0)]['querySelector']('span.wb-title');if(q){const r=parseFloat(q['style']['width']);if(!isNaN(r))q[ap(0x177)]['width']=Math[ap(0x186)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const as=an;if(!this['_dragFromHandle'])return![];return this[as(0x1bf)]=g['node'],g['event']['dataTransfer']['effectAllowed']=as(0x1cf),g['event'][as(0x144)]['dropEffect']=as(0x1cf),g['event'][as(0x144)][as(0x1aa)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const at=an;this[at(0x1bf)]=null;},'dragEnter':g=>{const au=an,h=g['event']['dataTransfer']?.[au(0x168)][au(0x127)](SAME_TREE_MOVE_MIME);g[au(0x164)][au(0x144)]['dropEffect']=h?'move':au(0x18f);const i=!!g[au(0x1c7)][au(0x14f)]['data']?.[au(0x1e7)];return i?new Set([au(0x180)]):new Set([au(0x1ed),au(0x1e3)]);},'dragOver':g=>{const av=an,h=g['event']['dataTransfer']?.['types'][av(0x127)](SAME_TREE_MOVE_MIME);g[av(0x164)]['dataTransfer'][av(0x1ae)]=h?av(0x1cf):av(0x18f);},'drop':async g=>{const aw=an,h=g[aw(0x164)][aw(0x144)]?.[aw(0x168)]['includes'](SAME_TREE_MOVE_MIME);if(g[aw(0x16d)]==='over'){if(h&&this['_draggedNode'])this[aw(0x1bf)]['moveTo'](g[aw(0x1c7)],aw(0x1c2)),this['_draggedNode']['setClass'](aw(0x18a),![]);else{const j=g[aw(0x164)][aw(0x144)]?.['getData'](aw(0x1b8));j&&g[aw(0x1c7)][aw(0x1e0)](this[aw(0x1d4)]({'type':j}));}return;}const i=g[aw(0x16d)]=='before'?'before':aw(0x1e3);if(h&&this['_draggedNode'])this['_draggedNode'][aw(0x112)](g[aw(0x1c7)],i),this['_draggedNode'][aw(0x1ba)]('wb-drag-source',![]);else{const k=g[aw(0x164)][aw(0x144)]?.[aw(0x125)](aw(0x1b8));if(k){const l={'type':k},m=this[aw(0x1d4)](l),n=g['node']['parent']['addChildren'](m);n[aw(0x112)](g[aw(0x1c7)],i);}}}}}),this['_commandListFancyTree'][an(0x114)]['children']?.[0x0]?.['setActive']();}['createTreeItem'](d){const ax=P;if(d[ax(0x15f)]==='If'){const e=d;return e[ax(0x129)]??=[],e[ax(0x1b2)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':'true'},'children':e[ax(0x129)]['map'](f=>this['createTreeItem'](f))},{'title':'else','expanded':!![],'data':{'branch':'else'},'children':e[ax(0x1b2)][ax(0x18c)](f=>this['createTreeItem'](f))}]};}return{'title':d['type'],'data':{'item':d}};}['nodeToCommand'](d){const ay=P,e=d['data'][ay(0x14f)][ay(0x1a2)];if(e['type']==='If'){const f=d[ay(0x12b)]?.['find'](h=>h[ay(0x14f)][ay(0x14f)]?.['branch']==='true'),g=d['children']?.['find'](h=>h['data'][ay(0x14f)]?.[ay(0x1e7)]===ay(0x119));e['trueCommands']=(f?.['children']??[])[ay(0x18c)](h=>this[ay(0x1b0)](h)),e[ay(0x1b2)]=(g?.['children']??[])['map'](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const az=P;let e=d;while(e){if(e[az(0x14f)]?.['data']?.[az(0x1e7)])return e;e=e[az(0x1a4)];}return null;}async['addCommand'](){const aA=P,d=new SimpleScriptCommandPicker();d[aA(0x196)](this['scriptCommandsTypeInfo'],this['commandDescriptions']),d['title']='Add\x20Script\x20Command',d['commandTypeChosen']['on'](()=>{const aB=aA;if(d['selectedType']){const f={'type':d[aB(0x1b9)]},g=this[aB(0x1d4)](f),h=this[aB(0x151)](this[aB(0x15b)]['activeNode']);if(h)h[aB(0x1e0)](g);else this[aB(0x15b)]['addChildren'](g);}});const e=new AbortController();d['closeRequested']['on'](()=>e['abort']()),await this['visualizationShell']['openModal'](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e[aA(0x163)]});}['getScriptCommands'](){const aC=P;if(this['_showingCode']){const e=this['_parseCodeViewScript']();if(e)this[aC(0x126)](e);}let d=this[aC(0x15b)]['root']['children'];return d['map'](f=>this[aC(0x1b0)](f));}}function b(c,d){c=c-0x10f;const e=a();let f=e[c];return f;}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);