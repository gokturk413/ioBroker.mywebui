const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=-parseInt(O(0x1a0))/0x1+parseInt(O(0x202))/0x2*(parseInt(O(0x1a3))/0x3)+parseInt(O(0x17b))/0x4+parseInt(O(0x150))/0x5*(parseInt(O(0x152))/0x6)+-parseInt(O(0x213))/0x7*(parseInt(O(0x1e4))/0x8)+-parseInt(O(0x215))/0x9+parseInt(O(0x1b7))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xcc241));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';function a(){const aC=['loadScript','complex\x20property\x20value','innerText','new','node','name','textContent','src','flexGrow','null','Duplicate','undefined','title','bindabletype','\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;','dataTransfer','visualizationShell','icons/delete.svg','map','6bCifPf','source','visualizationHandler','move','\x20flex:1\x201\x20auto;','setPropertyValue','delete','selectedType','span','effectAllowed','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','whiteSpace','arguments','push','display:inline-block;\x20width:32px;','addCommand','flex','42eEczWh','shadowRoot','13384350uEUkQo','Visual','application/x-simple-script-move','after','helpRequested','preventDefault','setNameColumnWidth','hidden','commands','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','afterbegin','calc(100%\x20-\x206px)','event','_codeView','includes','property','Typ:\x20','appendChild','_splitView','this','upgradeScriptCommand','openConfirmation','context','flex:1\x201\x20auto;','moveTo','wb-drag-source','cssText','button','+\x20Add\x20signal','varName','20px','display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;','\x20align-self:flex-start;\x20padding:0\x208px;','types','_restoreCachedInititalValues','color:#333;\x20white-space:pre-line;','instanceof','finally','_showCodeView','justifyContent','_commandListFancyTree','else','propertygrid','565qXfRpv','show','60366xFmiWM','oncontextmenu','break','before','code','default','_script','signal','length','nowrap','placeholder','_propertygrid','_getBranchContainerNode','height','drop','_draggedNode','yield','switch','serviceContainer','_showingCode','append','insertAdjacentElement','createElement','_assignEvents','stringify','input','bindableObjectsTarget','visible','code-changed','textOverflow','createTreeItem','elseCommands','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','span.wb-title','opacity','trueCommands','oninput','style','copy','display:flex;\x20flex-direction:column;\x20gap:4px;','children','5834704McvQGq','dragover','srcdoc','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','offsetWidth','parse','test','display','setActive','display:flex;\x20align-items:center;\x20gap:4px;','javascript','prepend','display:inline-block;\x20width:24px;','branch','extends','getData','true','private','value','update','_codeToggleBtn','node-projects-visualization-simple-script-editor','IScriptMultiplexValue','target','ellipsis','showHead','_parseAttributesToProperties','typeof','_commandListDiv','content-box','addEventListener','loadCommands','class','addChildren','complex','root','setClass','104216zYtgWE','protected','e.g.\x20srm.rbg{__tagRoot}.error','36579WMYpUp','_title','splice','option','a\x20value\x20of\x20the\x20context','complexSignal','item','propertyPath','select','remove\x20complex\x20value','...','#c0392b','parent','flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;','img','onclick','complexString','_addCommandBtn','forEach','properties','9890310cdQZqa','remove','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','selected','_parseCodeViewScript','className','void','iframe','refresh','commandTypeChosen','_reservedRowWidth','helpClicked','nodeElem','join','cmd','boxSizing','package','nodeToCommand','_getDomElement','onchange','position','data','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','div','codeView','collection','instanceServiceContainer','implements','listContent','classList','adoptedStyleSheets','width','isArray','relative','selectedObject','closest','toggle','some','language','setData','_bindingsParse','getTypeInfo','#fdecea','Remove\x20signal','addCommandBtn','1591536zxeMIu','filter','Simple\x20Script\x20Editor\x20Help','center','closeRequested','format','formula','Add\x20Script\x20Command','debugger','icons/copy.svg','commandList'];a=function(){return aC;};return a();}function b(c,d){c=c-0x138;const e=a();let f=e[c];return f;}import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0x217);export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static [P(0x177)]=css`
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
  `;static ['is']=P(0x190);[P(0x1a4)];get['title'](){const Q=P;return this[Q(0x1a4)];}set[P(0x1fb)](d){this['_title']=d;}[P(0x164)];[P(0x1d1)];[P(0x204)];[P(0x1ff)];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];[P(0x219)]=new TypedEvent();['commandDescriptions']={...nativeScriptCommandDescriptions};[P(0x158)];[P(0x197)];[P(0x14d)];['_propertygrid'];[P(0x227)];['_codeView'];['_codeToggleBtn'];[P(0x1b4)];[P(0x165)]=![];['_dragFromHandle']=![];['_draggedNode']=null;constructor(){const R=P;super(),this[R(0x147)](),this[R(0x197)]=this['_getDomElement'](R(0x1ee)),this['_propertygrid']=this[R(0x1c9)](R(0x14f)),this[R(0x227)]=this[R(0x1c9)]('splitView'),this[R(0x222)]=this[R(0x1c9)](R(0x1cf)),this['_codeToggleBtn']=this[R(0x1c9)]('codeToggleBtn'),this['_addCommandBtn']=this[R(0x1c9)](R(0x1e3));const d=this[R(0x1c9)](R(0x1d3));d[R(0x199)]('mousedown',e=>{const S=R;this['_dragFromHandle']=!!e[S(0x192)]?.[S(0x1da)]('.drag-handle');}),document[R(0x199)]('dragend',()=>{this['_draggedNode']=null;},!![]),d['addEventListener'](R(0x17c),e=>{const T=R;e['preventDefault']();if(e[T(0x1fe)]){const f=e[T(0x1fe)][T(0x146)]['includes'](SAME_TREE_MOVE_MIME);e[T(0x1fe)]['dropEffect']=f?T(0x205):'copy';}}),d['addEventListener'](R(0x160),e=>{const U=R;e['preventDefault']();const f=e[U(0x1fe)]?.[U(0x146)]['includes'](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[U(0x14d)][U(0x19e)]['children'],h=g?.[g[U(0x15a)]-0x1];if(h)this[U(0x161)]['moveTo'](h,U(0x218));this[U(0x161)]['setClass']('wb-drag-source',![]);}else{const i=e['dataTransfer']?.[U(0x18a)]('text/plain');if(i){const j={'type':i};this['_commandListFancyTree'][U(0x19e)][U(0x19c)](this[U(0x170)](j));}}}),this[R(0x214)][R(0x1d5)]=[c,defaultStyle,SimpleScriptEditor['style']];}async['ready'](){const V=P;this[V(0x195)](),this[V(0x1df)](null,!![]),this[V(0x169)]();let d=async k=>{const W=V;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this[W(0x204)],l['visualizationShell']=this['visualizationShell'],l['serviceContainer']=this['serviceContainer'],l['instanceServiceContainer']=this['instanceServiceContainer'],l['bindableObjectsTarget']='script',l['getTypeInfo']=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l[W(0x194)]=![],l['typeName']=W(0x191),l['title']='Complex\x20for\x20\x22'+k[W(0x1aa)]+'\x22';if(typeof k['value']==='object')l['selectedObject']=k[W(0x18d)]??{};else l['selectedObject']={};l['bindingDoubleClicked']=n=>{const X=W;if(n[X(0x1fc)]==X(0x224))l['setPropertyValue'](X(0x203),X(0x224));else n[X(0x1fc)]==X(0x13b)?l['setPropertyValue']('source','context'):l['setPropertyValue'](X(0x203),X(0x159));l[X(0x207)]('name',n['fullName']),l['refresh']();};let m=await this['visualizationShell'][W(0x13a)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l[W(0x1d9)]),this['_propertygrid'][W(0x1bf)]());},e=async k=>{const Y=V,l=new CodeViewMonaco();l[Y(0x1dd)]=Y(0x185),l[Y(0x177)]['position']=Y(0x1d8),l[Y(0x156)]=k[Y(0x18d)]??'';const m=await this[Y(0x1ff)][Y(0x13a)](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Y(0x15d)][Y(0x207)](k[Y(0x1aa)],l[Y(0x156)]),this['_propertygrid']['refresh']());};const f=['signal','property','elementProperty','signalInProperty',V(0x221),'parameter','context',V(0x1b3),V(0x1a8),'expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([V(0x154),'case','catch',V(0x19b),'const','continue',V(0x1ec),V(0x157),V(0x208),'do',V(0x14e),'export',V(0x189),V(0x14a),'for','function','if','import','in',V(0x149),V(0x1f2),'return','super',V(0x163),V(0x138),'throw','try',V(0x196),'var',V(0x1bd),'while','with',V(0x162),'let','static','enum','await',V(0x1d2),V(0x1c7),V(0x1a1),'interface',V(0x18c),'public',V(0x1f8),V(0x18b),'false',V(0x1fa),V(0x20e),'eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':V(0x20c),'elementProperty':'a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':V(0x172),'parameter':'a\x20parameter\x20you\x20hand\x20over','context':V(0x1a7),'complexString':V(0x1cd),'complexSignal':'read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const Z=V,l=(k['value']??[])[Z(0x201)](E=>({...E})),m=E=>{const a0=Z,F=(l[E][a0(0x142)]??'')['trim']();if(!F)return null;if(!g[a0(0x181)](F))return'\x22'+F+'\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.';if(h['has'](F))return'\x22'+F+a0(0x17e);if(l[a0(0x1dc)]((G,H)=>H!==E&&(G[a0(0x142)]??'')['trim']()===F))return'\x22'+F+'\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.';return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[Z(0x168)]('div');o['style'][Z(0x13f)]=Z(0x21e);const p=document['createElement'](Z(0x1ce));p['style']['cssText']=Z(0x1b9);const q=document['createElement'](Z(0x20a));q['textContent']='Name',q[Z(0x177)][Z(0x13f)]='flex:0\x200\x20120px;';const r=document[Z(0x168)]('span');r[Z(0x1f5)]='Typ',r[Z(0x177)]['cssText']='flex:0\x200\x20130px;';const s=document[Z(0x168)]('span');s['textContent']='Signal',s[Z(0x177)][Z(0x13f)]=Z(0x13c);const t=document['createElement'](Z(0x20a));t['style']['cssText']='flex:0\x200\x2022px;',p['append'](q,r,s,t),o['appendChild'](p);const u=document[Z(0x168)]('div');u[Z(0x177)][Z(0x13f)]=Z(0x179),o[Z(0x226)](u);const v=document['createElement']('div');v[Z(0x177)][Z(0x13f)]=Z(0x1b0);const w=document[Z(0x168)](Z(0x1ce));w[Z(0x177)]['cssText']='font-weight:bold;\x20margin-bottom:2px;';const x=document[Z(0x168)](Z(0x1ce));x[Z(0x177)][Z(0x13f)]=Z(0x148),v[Z(0x166)](w,x);const y=E=>{const a1=Z;w[a1(0x1f5)]=a1(0x225)+E,x[a1(0x1f5)]=i[E]??'';},z=[],A=()=>{const a2=Z;l[a2(0x1b5)]((E,F)=>{const a3=a2,G=z[F];if(!G)return;const H=m(F);G['title']=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+'\x20if\x20empty)',G[a3(0x177)]['borderColor']=H?a3(0x1ae):'',G['style']['backgroundColor']=H?a3(0x1e1):'';});},B=()=>{u['innerHTML']='',z['length']=0x0,l['forEach']((E,F)=>{const a4=b,G=document['createElement'](a4(0x1ce));G['style']['cssText']=a4(0x184);const H=document['createElement'](a4(0x16b));H[a4(0x18d)]=E[a4(0x142)]??'',H[a4(0x15c)]='__'+F,H['style']['cssText']=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H['oninput']=()=>{const a5=a4;E['varName']=H[a5(0x18d)]||undefined,A();},z['push'](H),G[a4(0x226)](H);const I=document[a4(0x168)](a4(0x1ab));I['style'][a4(0x13f)]=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document['createElement'](a4(0x1a6));N['value']=M,N[a4(0x1f5)]=M;if(E[a4(0x203)]===M)N[a4(0x1ba)]=!![];I[a4(0x226)](N);}I[a4(0x1ca)]=()=>{const a6=a4;E['source']=I[a6(0x18d)],y(I['value']);},I['onfocus']=()=>y(I['value']),G[a4(0x226)](I);const J=document[a4(0x168)]('input');J[a4(0x18d)]=E['name']??'',J['placeholder']=a4(0x1a2),J['style']['cssText']=n+a4(0x206),J[a4(0x176)]=()=>{const a7=a4;E[a7(0x1f4)]=J['value'];},G[a4(0x226)](J);const K=document['createElement'](a4(0x140));K['title']=a4(0x1e2),K['style'][a4(0x13f)]=n+a4(0x1fd);const L=document[a4(0x168)](a4(0x1b1));L[a4(0x1f6)]=assetsPath+a4(0x200),L[a4(0x177)]['cssText']='width:12px;\x20height:12px;',K['appendChild'](L),K[a4(0x1b2)]=()=>{const a8=a4;l[a8(0x1a5)](F,0x1),B();},G[a4(0x226)](K),u[a4(0x226)](G);}),A();};B();const C=document['createElement']('button');C[Z(0x1f5)]=Z(0x141),C['style']['cssText']=n+Z(0x145),C['onclick']=()=>{const a9=Z;l[a9(0x20f)]({'source':a9(0x159),'name':''}),B();},o[Z(0x226)](C),y(l[0x0]?.[Z(0x203)]??Z(0x159)),o['appendChild'](v);const D=await this[Z(0x1ff)]['openConfirmation'](o,{'title':'Edit\x20signals','x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[Z(0x15d)]['setPropertyValue'](k[Z(0x1aa)],l),this['_propertygrid']['refresh']());};this[V(0x15d)][V(0x204)]=this[V(0x204)],this['_propertygrid'][V(0x1ff)]=this[V(0x1ff)],this[V(0x15d)][V(0x164)]=this['serviceContainer'],this[V(0x15d)][V(0x1d1)]=this['instanceServiceContainer'],this['_propertygrid'][V(0x16c)]='script',this[V(0x15d)][V(0x21b)](0x82),this[V(0x15d)][V(0x1e0)]=(k,l)=>{const aa=V,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m[aa(0x1b6)][aa(0x1e5)](n=>n[aa(0x1f4)]!=='trueCommands'&&n['name']!==aa(0x171))),m;},this['_propertygrid']['getSpecialEditorForType']=async(k,l,m,n,o)=>{const ab=V;if(!k['specialAllreadyAdded']){k['specialAllreadyAdded']=!![];if(k[ab(0x1e9)]===ab(0x1d0)){}else{if(k[ab(0x1e9)]==='signalList'){let p=document[ab(0x168)]('button');p['style'][ab(0x15f)]=ab(0x220),p['style']['position']='relative',p['style']['display']=ab(0x212),p[ab(0x177)][ab(0x14c)]='center',p['style']['width']='20px',p[ab(0x177)]['boxSizing']='content-box',p[ab(0x1f1)]='del',p['onclick']=()=>{const ac=ab;this[ac(0x15d)][ac(0x207)](m,undefined),this['_propertygrid']['refresh']();},n['nodeElem']['insertAdjacentElement']('afterbegin',p);const q=Array[ab(0x1d7)](l)?l:[];let r=document[ab(0x168)]('div');r[ab(0x177)]['display']=ab(0x212);let s=document['createElement'](ab(0x20a));s['innerText']=q[ab(0x201)]((u,w)=>(u?.[ab(0x142)]||'__'+w)+':\x20'+(u?.[ab(0x203)]??'')+':'+(u?.['name']??''))[ab(0x1c4)](',\x20'),s[ab(0x177)]['overflow']='hidden',s[ab(0x177)][ab(0x20d)]=ab(0x15b),s['style'][ab(0x16f)]=ab(0x193),s[ab(0x177)][ab(0x1f7)]='1',s[ab(0x1fb)]=JSON[ab(0x16a)](q),r['appendChild'](s);let t=document['createElement'](ab(0x140));return t['innerText']='...',t['onclick']=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n['nodeElem'][ab(0x177)]['display']=ab(0x212),r;}else{if(k[ab(0x1e9)]===ab(0x1ea)){const u=document[ab(0x168)]('div');u['style'][ab(0x13f)]=ab(0x144);const v=new CodeViewMonaco();v['language']=ab(0x185),v['singleRow']=!![],v['style'][ab(0x13f)]='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v[ab(0x156)]=l??'',v['addEventListener'](ab(0x16e),()=>{const ad=ab;this[ad(0x15d)]['setPropertyValue'](m,v[ad(0x156)]);}),u[ab(0x226)](v);const w=document[ab(0x168)]('button');return w['innerText']='...',w['title']='Open\x20in\x20larger\x20editor',w['style']['cssText']='flex:0\x200\x2028px;\x20width:20px;',w[ab(0x1b2)]=()=>e({'value':v['code'],'propertyPath':m}),u[ab(0x226)](w),n['nodeElem'][ab(0x177)][ab(0x182)]='flex',u;}else{if(typeof l==='object'&&l!==null||k['format']===ab(0x19d)){let x=document[ab(0x168)](ab(0x140));x[ab(0x177)][ab(0x15f)]=ab(0x220),x[ab(0x177)][ab(0x1cb)]='relative',x[ab(0x177)][ab(0x182)]=ab(0x212),x[ab(0x177)]['justifyContent']='center',x[ab(0x177)]['width']=ab(0x143),x['style'][ab(0x1c6)]=ab(0x198),x[ab(0x1f1)]='del',x['onclick']=()=>{const ae=ab;this['_propertygrid'][ae(0x207)](m,undefined),this['_propertygrid']['refresh']();},n[ab(0x1c3)][ab(0x167)](ab(0x21f),x);let y=document[ab(0x168)]('div');y[ab(0x177)]['display']='flex';let z=document[ab(0x168)]('span');if(l)z['innerText']=(l['source']??'')+':\x20'+(l['name']??'');else z['innerText']='';z[ab(0x177)]['overflow']=ab(0x21c),z[ab(0x177)][ab(0x20d)]=ab(0x15b),z[ab(0x177)][ab(0x16f)]='ellipsis',z[ab(0x177)][ab(0x1f7)]='1',z[ab(0x1fb)]=JSON['stringify'](l),y[ab(0x226)](z);let A=document[ab(0x168)](ab(0x140));return A[ab(0x1f1)]=ab(0x1ad),A[ab(0x1b2)]=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n['nodeElem'][ab(0x177)][ab(0x182)]='flex',y;}else{let B=document['createElement'](ab(0x140));B['style']['height']='calc(100%\x20-\x206px)',B['style']['position']='relative',B[ab(0x177)][ab(0x182)]='flex',B['style'][ab(0x14c)]=ab(0x1e7),B[ab(0x177)][ab(0x1d6)]=ab(0x143),B['style'][ab(0x1c6)]='content-box',B['title']=ab(0x1f0),B['style'][ab(0x174)]='0.2',B['innerText']='...',B[ab(0x1b2)]=()=>{d({'value':l,'propertyPath':m});},n[ab(0x1c3)]['insertAdjacentElement']('afterbegin',B),n['nodeElem']['style'][ab(0x182)]='flex';}}}}}return null;},this[V(0x15d)]['propertyNodeContextMenu']['on'](k=>{const af=V;ContextMenu[af(0x151)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ag=af,l=prompt('enter\x20value:');l&&(this[ag(0x15d)]['setPropertyValue'](k['propertyPath'],l),this['_propertygrid']['refresh']());}},{'title':af(0x1ac),'action':async()=>{const ah=af;this[ah(0x15d)]['setPropertyValue'](k['propertyPath'],undefined),this['_propertygrid']['refresh']();}}],k[af(0x221)]);});}[P(0x1c2)](){const ai=P,d=document['createElement'](ai(0x1be));d[ai(0x17d)]=simpleScriptEditorHelpHtml,d[ai(0x177)]['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['visualizationShell']['openModal'](d,{'title':ai(0x1e6),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[ai(0x219)]['emit']();}['toggleCodeView'](){const aj=P;if(!this[aj(0x165)]){const e=JSON['stringify']({'commands':this['getScriptCommands']()},null,0x2);this[aj(0x222)][aj(0x18e)](e),this[aj(0x14b)](!![]);return;}const d=this[aj(0x1bb)]();if(!d)return;this[aj(0x14b)](![]),this[aj(0x1ef)](d);}[P(0x14b)](d){const ak=P;this[ak(0x222)][ak(0x1d4)]['toggle'](ak(0x16d),d),this[ak(0x197)][ak(0x1d4)]['toggle']('hidden',d),this['_splitView'][ak(0x1d4)][ak(0x1db)]('code-mode',d),this['_addCommandBtn']['disabled']=d,this[ak(0x18f)]['innerText']=d?ak(0x216):'Code',this['_showingCode']=d;if(d)requestAnimationFrame(()=>this['_codeView']['activated']());}[P(0x1bb)](){const al=P;let d;try{d=JSON[al(0x180)](this[al(0x222)]['getText']());}catch(f){return alert('Invalid\x20JSON:\x0a'+f['message']),null;}if(!Array['isArray'](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}['loadScript'](d){const am=P;this[am(0x158)]=d;this[am(0x14d)]&&(this['_commandListFancyTree']['destroy'](),this[am(0x197)]=this[am(0x1c9)](am(0x1ee)));let e=[];for(let f of this['_script'][am(0x21d)]){f=ScriptUpgrades[am(0x139)](f),e[am(0x20f)](this['createTreeItem'](f));}this['_commandListFancyTree']=new Wunderbaum({...defaultOptions,'element':this['_commandListDiv'],'icon':![],'source':e,'activate':g=>{const an=am;this[an(0x15d)]['selectedObject']=g[an(0x1f3)]['data'][an(0x1cc)][an(0x1a9)]??null;},'render':g=>{const ao=am,h=!!g[ao(0x1f3)][ao(0x1cc)]['data']?.[ao(0x188)];if(g['isNew']){g[ao(0x1c3)][ao(0x153)]=k=>{const ap=ao;return k[ap(0x21a)](),![];};const j=document['createElement']('span');j[ao(0x177)][ao(0x13f)]=ao(0x187),g[ao(0x1c3)]['prepend'](j);if(!h){const k=document[ao(0x168)](ao(0x1ce));k[ao(0x1bc)]='drag-handle',k[ao(0x1fb)]='Drag\x20to\x20reorder',k['innerHTML']='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g[ao(0x1c3)][ao(0x186)](k);const l=g[ao(0x1c3)]['parentElement'],m=document[ao(0x168)]('span');m[ao(0x177)][ao(0x13f)]=ao(0x210),g[ao(0x1c3)]['appendChild'](m);const n=document['createElement'](ao(0x1ce));n[ao(0x1bc)]=ao(0x1c5);const o=document[ao(0x168)]('img');o['src']=assetsPath+ao(0x1ed),o['title']=ao(0x1f9),o['onclick']=()=>{const aq=ao,q=structuredClone(g[aq(0x1f3)][aq(0x1cc)]['data'][aq(0x1a9)]),r=g[aq(0x1f3)][aq(0x1af)]['addChildren'](this['createTreeItem'](q));r[aq(0x13d)](g['node'],aq(0x218));};const p=document[ao(0x168)](ao(0x1b1));p[ao(0x1f6)]=assetsPath+ao(0x200),p[ao(0x1fb)]='Remove',p[ao(0x1b2)]=()=>g['node'][ao(0x1b8)](),n[ao(0x166)](o,p),l['appendChild'](n),g[ao(0x1c3)]['_reservedRowWidth']=j[ao(0x17f)]+m[ao(0x17f)];}else g[ao(0x1c3)][ao(0x1c1)]=j['offsetWidth'];}const i=g['nodeElem']['_reservedRowWidth']??0x0;if(i){const q=g['nodeElem']['querySelector'](ao(0x173));if(q){const r=parseFloat(q['style'][ao(0x1d6)]);if(!isNaN(r))q['style'][ao(0x1d6)]=Math['max'](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ar=am;if(!this['_dragFromHandle'])return![];return this[ar(0x161)]=g['node'],g['event']['dataTransfer'][ar(0x20b)]='move',g[ar(0x221)][ar(0x1fe)]['dropEffect']=ar(0x205),g['event'][ar(0x1fe)][ar(0x1de)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const as=am;this[as(0x161)]=null;},'dragEnter':g=>{const at=am,h=g[at(0x221)]['dataTransfer']?.['types'][at(0x223)](SAME_TREE_MOVE_MIME);g[at(0x221)][at(0x1fe)]['dropEffect']=h?'move':at(0x178);const i=!!g['node']['data'][at(0x1cc)]?.[at(0x188)];return i?new Set(['over']):new Set(['before','after']);},'dragOver':g=>{const au=am,h=g['event']['dataTransfer']?.[au(0x146)][au(0x223)](SAME_TREE_MOVE_MIME);g[au(0x221)][au(0x1fe)]['dropEffect']=h?'move':au(0x178);},'drop':async g=>{const av=am,h=g['event']['dataTransfer']?.[av(0x146)]['includes'](SAME_TREE_MOVE_MIME);if(g['region']==='over'){if(h&&this['_draggedNode'])this[av(0x161)][av(0x13d)](g[av(0x1f3)],'appendChild'),this[av(0x161)][av(0x19f)](av(0x13e),![]);else{const j=g[av(0x221)][av(0x1fe)]?.['getData']('text/plain');j&&g[av(0x1f3)][av(0x19c)](this[av(0x170)]({'type':j}));}return;}const i=g['region']==av(0x155)?av(0x155):'after';if(h&&this[av(0x161)])this['_draggedNode']['moveTo'](g['node'],i),this[av(0x161)]['setClass'](av(0x13e),![]);else{const k=g[av(0x221)]['dataTransfer']?.['getData']('text/plain');if(k){const l={'type':k},m=this[av(0x170)](l),n=g['node'][av(0x1af)]['addChildren'](m);n[av(0x13d)](g['node'],i);}}}}}),this[am(0x14d)][am(0x19e)][am(0x17a)]?.[0x0]?.[am(0x183)]();}[P(0x170)](d){const aw=P;if(d['type']==='If'){const e=d;return e['trueCommands']??=[],e[aw(0x171)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':aw(0x18b)},'children':e['trueCommands']['map'](f=>this[aw(0x170)](f))},{'title':'else','expanded':!![],'data':{'branch':aw(0x14e)},'children':e[aw(0x171)]['map'](f=>this['createTreeItem'](f))}]};}return{'title':d['type'],'data':{'item':d}};}[P(0x1c8)](d){const ax=P,e=d[ax(0x1cc)][ax(0x1cc)][ax(0x1a9)];if(e['type']==='If'){const f=d['children']?.['find'](h=>h['data'][ax(0x1cc)]?.[ax(0x188)]===ax(0x18b)),g=d[ax(0x17a)]?.['find'](h=>h['data']['data']?.[ax(0x188)]===ax(0x14e));e[ax(0x175)]=(f?.[ax(0x17a)]??[])[ax(0x201)](h=>this['nodeToCommand'](h)),e['elseCommands']=(g?.[ax(0x17a)]??[])['map'](h=>this['nodeToCommand'](h));}return e;}[P(0x15e)](d){const ay=P;let e=d;while(e){if(e['data']?.['data']?.['branch'])return e;e=e[ay(0x1af)];}return null;}async[P(0x211)](){const az=P,d=new SimpleScriptCommandPicker();d[az(0x19a)](this['scriptCommandsTypeInfo'],this['commandDescriptions']),d[az(0x1fb)]='Add\x20Script\x20Command',d[az(0x1c0)]['on'](()=>{const aA=az;if(d[aA(0x209)]){const f={'type':d['selectedType']},g=this[aA(0x170)](f),h=this[aA(0x15e)](this[aA(0x14d)]['activeNode']);if(h)h['addChildren'](g);else this['_commandListFancyTree']['addChildren'](g);}});const e=new AbortController();d[az(0x1e8)]['on'](()=>e['abort']()),await this[az(0x1ff)]['openModal'](d,{'title':az(0x1eb),'x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}['getScriptCommands'](){const aB=P;if(this[aB(0x165)]){const e=this['_parseCodeViewScript']();if(e)this['loadScript'](e);}let d=this[aB(0x14d)][aB(0x19e)]['children'];return d['map'](f=>this[aB(0x1c8)](f));}}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);