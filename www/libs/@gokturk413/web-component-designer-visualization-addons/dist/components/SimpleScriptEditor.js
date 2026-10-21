const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x133))/0x1*(parseInt(O(0x69))/0x2)+-parseInt(O(0xea))/0x3+parseInt(O(0x9d))/0x4*(parseInt(O(0x13f))/0x5)+parseInt(O(0x8c))/0x6*(-parseInt(O(0xf5))/0x7)+-parseInt(O(0x139))/0x8+parseInt(O(0x102))/0x9*(-parseInt(O(0x13a))/0xa)+parseInt(O(0xdd))/0xb*(parseInt(O(0x116))/0xc);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x9796d));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';function b(c,d){c=c-0x64;const e=a();let f=e[c];return f;}import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';function a(){const aC=['\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','860850dHmPxi','setActive','toggleCodeView','img','javascript','del','1926808NOKpwb','57760pAVBeC','className','loadCommands','over','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','5043165fQrfla','flex:0\x200\x20130px;','getScriptCommands','span','#fdecea','await','undefined','placeholder','_getDomElement','classList','div','break','IScriptMultiplexValue','serviceContainer','dataTransfer','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','onclick','forEach','2nNjDra','mousedown','Code','src','flexGrow','nodeToCommand','instanceof','children','Invalid\x20JSON:\x0a','_codeView','visualizationHandler','getSpecialEditorForType','message','_parseCodeViewScript','case','addCommand','display:flex;\x20align-items:center;\x20gap:4px;','_addCommandBtn','adoptedStyleSheets','varName','getText','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','Drag\x20to\x20reorder','flex','_reservedRowWidth','language','Duplicate','private','_script','refresh','selectedObject','splice','overflow','\x20if\x20empty)','a\x20parameter\x20you\x20hand\x20over','150knwTSx','createTreeItem','_codeToggleBtn','signalInProperty','innerHTML','property','20px','length','createElement','propertyNodeContextMenu','addCommandBtn','node','singleRow','listContent','append','boxSizing','title','4ynDKxM','source','properties','flex:0\x200\x20120px;','map','data','Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','object','icons/delete.svg','copy','setPropertyValue','textOverflow','content-box','includes','hidden','upgradeScriptCommand','opacity','text/plain','push','format','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','Typ:\x20','addChildren','effectAllowed','shadowRoot','let','trueCommands','types','true','innerText','implements','abort','appendChild','selected','name','remove','scriptCommandsTypeInfo','relative','ready','borderColor','code','_propertygrid','has','stringify','extends','position','flex:1\x201\x20auto;','join','signal','target','after','emit','drag-handle','setClass','switch','_dragFromHandle','disabled','#c0392b','isNew','protected','try','Add\x20Script\x20Command','import','style','33UVVBQc','ellipsis','event','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','oncontextmenu','codeToggleBtn','a\x20value\x20of\x20the\x20context','bindabletype','openConfirmation','throw','read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','cssText','else','2288073vARVAz','move','elseCommands','toggle','textContent','node-projects-visualization-simple-script-editor','closeRequested','context','whiteSpace','preventDefault','...','94773xUlxbc','_draggedNode','branch','Name','width','helpClicked','root','codeView','display','typeName','moveTo','visualizationShell','onchange','576iNTQJp','nodeElem','Edit\x20signals','parent','e.g.\x20srm.rbg{__tagRoot}.error','_splitView','specialAllreadyAdded','_title','\x20align-self:flex-start;\x20padding:0\x208px;','height','button','addEventListener','value','propertyPath','enum','offsetWidth','calc(100%\x20-\x206px)','wb-drag-source','flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;','instanceServiceContainer','1852428WPkvfD','fullName','before','commandDescriptions','code-mode','_commandListFancyTree','return','setNameColumnWidth','_showingCode','setData','backgroundColor','onfocus','_commandListDiv','type','Remove\x20signal','_showCodeView','font-weight:bold;\x20margin-bottom:2px;','drop','new','parameter','bindableObjectsTarget','Complex\x20for\x20\x22','dropEffect','bindingDoubleClicked','some','justifyContent','_assignEvents','filter'];a=function(){return aC;};return a();}const SAME_TREE_MOVE_MIME='application/x-simple-script-move';export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static [P(0xdc)]=css`
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
  `;static ['is']=P(0xef);['_title'];get[P(0x9c)](){const Q=P;return this[Q(0x109)];}set[P(0x9c)](d){this['_title']=d;}['serviceContainer'];[P(0x115)];['visualizationHandler'];[P(0x100)];[P(0xc1)];['propertiesTypeInfo'];['helpRequested']=new TypedEvent();[P(0x119)]={...nativeScriptCommandDescriptions};['_script'];['_commandListDiv'];['_commandListFancyTree'];['_propertygrid'];['_splitView'];['_codeView'];[P(0x8e)];[P(0x7a)];['_showingCode']=![];[P(0xd4)]=![];[P(0xf6)]=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this['_commandListDiv']=this[R(0x147)]('commandList'),this['_propertygrid']=this['_getDomElement']('propertygrid'),this['_splitView']=this['_getDomElement']('splitView'),this['_codeView']=this['_getDomElement'](R(0xfc)),this['_codeToggleBtn']=this[R(0x147)](R(0xe2)),this['_addCommandBtn']=this['_getDomElement'](R(0x96));const d=this['_getDomElement'](R(0x99));d['addEventListener'](R(0x6a),e=>{const S=R;this[S(0xd4)]=!!e[S(0xce)]?.['closest']('.drag-handle');}),document['addEventListener']('dragend',()=>{const T=R;this[T(0xf6)]=null;},!![]),d['addEventListener']('dragover',e=>{const U=R;e[U(0xf3)]();if(e['dataTransfer']){const f=e[U(0x65)]['types'][U(0xaa)](SAME_TREE_MOVE_MIME);e[U(0x65)][U(0x12c)]=f?U(0xeb):U(0xa6);}}),d[R(0x10d)](R(0x127),e=>{const V=R;e['preventDefault']();const f=e['dataTransfer']?.['types'][V(0xaa)](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[V(0x11b)]['root'][V(0x70)],h=g?.[g[V(0x93)]-0x1];if(h)this[V(0xf6)]['moveTo'](h,V(0xcf));this['_draggedNode'][V(0xd2)]('wb-drag-source',![]);}else{const i=e['dataTransfer']?.['getData']('text/plain');if(i){const j={'type':i};this[V(0x11b)]['root']['addChildren'](this[V(0x8d)](j));}}}),this[R(0xb5)][R(0x7b)]=[c,defaultStyle,SimpleScriptEditor['style']];}async[P(0xc3)](){const W=P;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[W(0x130)]();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this[X(0x73)],l[X(0x100)]=this['visualizationShell'],l[X(0x64)]=this['serviceContainer'],l['instanceServiceContainer']=this[X(0x115)],l[X(0x12a)]='script',l['getTypeInfo']=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l['showHead']=![],l[X(0xfe)]=X(0x14b),l[X(0x9c)]=X(0x12b)+k['propertyPath']+'\x22';if(typeof k['value']===X(0xa4))l['selectedObject']=k[X(0x10e)]??{};else l[X(0x87)]={};l[X(0x12d)]=n=>{const Y=X;if(n['bindabletype']=='property')l[Y(0xa7)](Y(0x9e),Y(0x91));else n[Y(0xe4)]=='context'?l['setPropertyValue']('source',Y(0xf1)):l[Y(0xa7)]('source','signal');l['setPropertyValue']('name',n[Y(0x117)]),l[Y(0x86)]();};let m=await this['visualizationShell'][X(0xe5)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this[X(0xc6)][X(0xa7)](k['propertyPath'],l['selectedObject']),this[X(0xc6)][X(0x86)]());},e=async k=>{const Z=W,l=new CodeViewMonaco();l[Z(0x82)]=Z(0x137),l[Z(0xdc)][Z(0xca)]='relative',l[Z(0xc5)]=k['value']??'';const m=await this[Z(0x100)][Z(0xe5)](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k[Z(0x10f)],l[Z(0xc5)]),this['_propertygrid']['refresh']());};const f=['signal','property','elementProperty',W(0x8f),W(0xdf),W(0x129),'context','complexString','complexSignal','expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([W(0x14a),W(0x77),'catch','class','const','continue','debugger','default','delete','do',W(0xe9),'export',W(0xc9),'finally','for','function','if',W(0xdb),'in',W(0x6f),W(0x128),W(0x11c),'super',W(0xd3),'this',W(0xe6),W(0xd9),'typeof','var','void','while','with','yield',W(0xb6),'static',W(0x110),W(0x144),W(0xbb),'package',W(0xd8),'interface',W(0x84),'public','null',W(0xb9),'false',W(0x145),'arguments','eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':W(0x7e),'elementProperty':'a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','signalInProperty':W(0xe7),'event':W(0xb1),'parameter':W(0x8b),'context':W(0xe3),'complexString':'a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','complexSignal':'read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const a0=W,l=(k[a0(0x10e)]??[])[a0(0xa1)](E=>({...E})),m=E=>{const a1=a0,F=(l[E][a1(0x7c)]??'')['trim']();if(!F)return null;if(!g['test'](F))return'\x22'+F+a1(0xe0);if(h[a1(0xc7)](F))return'\x22'+F+'\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.';if(l[a1(0x12e)]((G,H)=>H!==E&&(G[a1(0x7c)]??'')['trim']()===F))return'\x22'+F+a1(0x132);return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[a0(0x94)]('div');o[a0(0xdc)]['cssText']=a0(0x13e);const p=document['createElement']('div');p[a0(0xdc)]['cssText']=a0(0x66);const q=document['createElement']('span');q['textContent']=a0(0xf8),q[a0(0xdc)][a0(0xe8)]=a0(0xa0);const r=document[a0(0x94)]('span');r[a0(0xee)]='Typ',r[a0(0xdc)][a0(0xe8)]=a0(0x140);const s=document['createElement'](a0(0x142));s[a0(0xee)]='Signal',s[a0(0xdc)][a0(0xe8)]=a0(0xcb);const t=document[a0(0x94)](a0(0x142));t['style']['cssText']='flex:0\x200\x2022px;',p['append'](q,r,s,t),o[a0(0xbd)](p);const u=document['createElement']('div');u['style'][a0(0xe8)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o[a0(0xbd)](u);const v=document[a0(0x94)]('div');v['style'][a0(0xe8)]='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0x94)]('div');w['style']['cssText']=a0(0x126);const x=document[a0(0x94)](a0(0x149));x[a0(0xdc)]['cssText']='color:#333;\x20white-space:pre-line;',v[a0(0x9a)](w,x);const y=E=>{const a2=a0;w[a2(0xee)]=a2(0xb2)+E,x[a2(0xee)]=i[E]??'';},z=[],A=()=>{const a3=a0;l[a3(0x68)]((E,F)=>{const a4=a3,G=z[F];if(!G)return;const H=m(F);G[a4(0x9c)]=H??a4(0xa3)+F+a4(0x8a),G['style'][a4(0xc4)]=H?a4(0xd6):'',G[a4(0xdc)][a4(0x120)]=H?a4(0x143):'';});},B=()=>{const a5=a0;u[a5(0x90)]='',z['length']=0x0,l['forEach']((E,F)=>{const a6=a5,G=document[a6(0x94)]('div');G['style'][a6(0xe8)]=a6(0x79);const H=document[a6(0x94)]('input');H[a6(0x10e)]=E[a6(0x7c)]??'',H[a6(0x146)]='__'+F,H[a6(0xdc)][a6(0xe8)]=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H['oninput']=()=>{const a7=a6;E[a7(0x7c)]=H['value']||undefined,A();},z[a6(0xaf)](H),G[a6(0xbd)](H);const I=document[a6(0x94)]('select');I['style'][a6(0xe8)]=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document['createElement']('option');N[a6(0x10e)]=M,N['textContent']=M;if(E['source']===M)N[a6(0xbe)]=!![];I['appendChild'](N);}I[a6(0x101)]=()=>{const a8=a6;E[a8(0x9e)]=I[a8(0x10e)],y(I['value']);},I[a6(0x121)]=()=>y(I['value']),G[a6(0xbd)](I);const J=document[a6(0x94)]('input');J[a6(0x10e)]=E['name']??'',J['placeholder']=a6(0x106),J['style']['cssText']=n+'\x20flex:1\x201\x20auto;',J['oninput']=()=>{const a9=a6;E[a9(0xbf)]=J['value'];},G[a6(0xbd)](J);const K=document['createElement']('button');K['title']=a6(0x124),K['style']['cssText']=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document[a6(0x94)](a6(0x136));L[a6(0x6c)]=assetsPath+'icons/delete.svg',L[a6(0xdc)]['cssText']='width:12px;\x20height:12px;',K['appendChild'](L),K[a6(0x67)]=()=>{const aa=a6;l[aa(0x88)](F,0x1),B();},G['appendChild'](K),u['appendChild'](G);}),A();};B();const C=document['createElement'](a0(0x10c));C[a0(0xee)]='+\x20Add\x20signal',C['style'][a0(0xe8)]=n+a0(0x10a),C[a0(0x67)]=()=>{const ab=a0;l[ab(0xaf)]({'source':'signal','name':''}),B();},o[a0(0xbd)](C),y(l[0x0]?.[a0(0x9e)]??a0(0xcd)),o[a0(0xbd)](v);const D=await this['visualizationShell']['openConfirmation'](o,{'title':a0(0x104),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0xc6)][a0(0xa7)](k['propertyPath'],l),this['_propertygrid']['refresh']());};this[W(0xc6)]['visualizationHandler']=this[W(0x73)],this[W(0xc6)]['visualizationShell']=this['visualizationShell'],this[W(0xc6)][W(0x64)]=this[W(0x64)],this['_propertygrid']['instanceServiceContainer']=this['instanceServiceContainer'],this['_propertygrid'][W(0x12a)]='script',this['_propertygrid'][W(0x11d)](0x82),this[W(0xc6)]['getTypeInfo']=(k,l)=>{const ac=W,m=typeInfoFromJsonSchema(this[ac(0xc1)],k,l);return m&&(l==='If'||k?.[ac(0x123)]==='If')&&(m[ac(0x9f)]=m[ac(0x9f)][ac(0x131)](n=>n[ac(0xbf)]!=='trueCommands'&&n['name']!==ac(0xec))),m;},this['_propertygrid'][W(0x74)]=async(k,l,m,n,o)=>{const ad=W;if(!k[ad(0x108)]){k[ad(0x108)]=!![];if(k[ad(0xb0)]==='collection'){}else{if(k[ad(0xb0)]==='signalList'){let p=document[ad(0x94)](ad(0x10c));p[ad(0xdc)][ad(0x10b)]=ad(0x112),p['style']['position']=ad(0xc2),p['style']['display']='flex',p['style'][ad(0x12f)]='center',p['style'][ad(0xf9)]=ad(0x92),p['style']['boxSizing']=ad(0xa9),p['innerText']=ad(0x138),p['onclick']=()=>{const ae=ad;this['_propertygrid'][ae(0xa7)](m,undefined),this[ae(0xc6)][ae(0x86)]();},n[ad(0x103)]['insertAdjacentElement']('afterbegin',p);const q=Array['isArray'](l)?l:[];let r=document['createElement']('div');r['style'][ad(0xfd)]='flex';let s=document[ad(0x94)](ad(0x142));s['innerText']=q['map']((u,w)=>(u?.[ad(0x7c)]||'__'+w)+':\x20'+(u?.['source']??'')+':'+(u?.['name']??''))[ad(0xcc)](',\x20'),s['style'][ad(0x89)]=ad(0xab),s[ad(0xdc)][ad(0xf2)]='nowrap',s['style'][ad(0xa8)]=ad(0xde),s['style'][ad(0x6d)]='1',s[ad(0x9c)]=JSON[ad(0xc8)](q),r[ad(0xbd)](s);let t=document['createElement'](ad(0x10c));return t['innerText']=ad(0xf4),t['onclick']=()=>{j({'value':q,'propertyPath':m});},r[ad(0xbd)](t),n['nodeElem']['style'][ad(0xfd)]=ad(0x80),r;}else{if(k[ad(0xb0)]==='formula'){const u=document['createElement'](ad(0x149));u['style'][ad(0xe8)]='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v[ad(0x82)]=ad(0x137),v[ad(0x98)]=!![],v['style'][ad(0xe8)]=ad(0x114),v['code']=l??'',v[ad(0x10d)]('code-changed',()=>{const af=ad;this[af(0xc6)][af(0xa7)](m,v['code']);}),u[ad(0xbd)](v);const w=document[ad(0x94)](ad(0x10c));return w[ad(0xba)]=ad(0xf4),w[ad(0x9c)]='Open\x20in\x20larger\x20editor',w[ad(0xdc)][ad(0xe8)]='flex:0\x200\x2028px;\x20width:20px;',w['onclick']=()=>e({'value':v[ad(0xc5)],'propertyPath':m}),u[ad(0xbd)](w),n['nodeElem'][ad(0xdc)][ad(0xfd)]='flex',u;}else{if(typeof l===ad(0xa4)&&l!==null||k['format']==='complex'){let x=document['createElement'](ad(0x10c));x['style'][ad(0x10b)]=ad(0x112),x[ad(0xdc)][ad(0xca)]=ad(0xc2),x['style'][ad(0xfd)]='flex',x['style']['justifyContent']='center',x['style']['width']=ad(0x92),x[ad(0xdc)]['boxSizing']='content-box',x[ad(0xba)]='del',x[ad(0x67)]=()=>{const ag=ad;this['_propertygrid'][ag(0xa7)](m,undefined),this[ag(0xc6)]['refresh']();},n[ad(0x103)]['insertAdjacentElement']('afterbegin',x);let y=document['createElement']('div');y[ad(0xdc)]['display']='flex';let z=document['createElement']('span');if(l)z[ad(0xba)]=(l['source']??'')+':\x20'+(l[ad(0xbf)]??'');else z[ad(0xba)]='';z['style'][ad(0x89)]='hidden',z[ad(0xdc)][ad(0xf2)]='nowrap',z['style']['textOverflow']=ad(0xde),z['style']['flexGrow']='1',z['title']=JSON['stringify'](l),y['appendChild'](z);let A=document['createElement']('button');return A['innerText']='...',A['onclick']=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n[ad(0x103)][ad(0xdc)]['display']=ad(0x80),y;}else{let B=document['createElement'](ad(0x10c));B[ad(0xdc)][ad(0x10b)]=ad(0x112),B[ad(0xdc)]['position']='relative',B[ad(0xdc)]['display']='flex',B[ad(0xdc)][ad(0x12f)]='center',B['style']['width']=ad(0x92),B['style'][ad(0x9b)]='content-box',B['title']='complex\x20property\x20value',B[ad(0xdc)][ad(0xad)]='0.2',B['innerText']=ad(0xf4),B['onclick']=()=>{d({'value':l,'propertyPath':m});},n[ad(0x103)]['insertAdjacentElement']('afterbegin',B),n[ad(0x103)]['style'][ad(0xfd)]='flex';}}}}}return null;},this[W(0xc6)][W(0x95)]['on'](k=>{ContextMenu['show']([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ah=b,l=prompt('enter\x20value:');l&&(this[ah(0xc6)]['setPropertyValue'](k[ah(0x10f)],l),this[ah(0xc6)][ah(0x86)]());}},{'title':'remove\x20complex\x20value','action':async()=>{const ai=b;this['_propertygrid'][ai(0xa7)](k['propertyPath'],undefined),this['_propertygrid']['refresh']();}}],k['event']);});}[P(0xfa)](){const aj=P,d=document[aj(0x94)]('iframe');d['srcdoc']=simpleScriptEditorHelpHtml,d['style'][aj(0xe8)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['visualizationShell']['openModal'](d,{'title':'Simple\x20Script\x20Editor\x20Help','parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this['helpRequested'][aj(0xd0)]();}[P(0x135)](){const ak=P;if(!this[ak(0x11e)]){const e=JSON[ak(0xc8)]({'commands':this[ak(0x141)]()},null,0x2);this['_codeView']['update'](e),this[ak(0x125)](!![]);return;}const d=this[ak(0x76)]();if(!d)return;this[ak(0x125)](![]),this['loadScript'](d);}['_showCodeView'](d){const al=P;this['_codeView']['classList']['toggle']('visible',d),this[al(0x122)][al(0x148)][al(0xed)](al(0xab),d),this[al(0x107)]['classList']['toggle'](al(0x11a),d),this['_addCommandBtn'][al(0xd5)]=d,this['_codeToggleBtn']['innerText']=d?'Visual':al(0x6b),this[al(0x11e)]=d;if(d)requestAnimationFrame(()=>this[al(0x72)]['activated']());}['_parseCodeViewScript'](){const am=P;let d;try{d=JSON['parse'](this['_codeView'][am(0x7d)]());}catch(f){return alert(am(0x71)+f[am(0x75)]),null;}if(!Array['isArray'](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}['loadScript'](d){const an=P;this[an(0x85)]=d;this['_commandListFancyTree']&&(this[an(0x11b)]['destroy'](),this[an(0x122)]=this[an(0x147)]('commandList'));let e=[];for(let f of this['_script']['commands']){f=ScriptUpgrades[an(0xac)](f),e[an(0xaf)](this[an(0x8d)](f));}this['_commandListFancyTree']=new Wunderbaum({...defaultOptions,'element':this['_commandListDiv'],'icon':![],'source':e,'activate':g=>{const ao=an;this['_propertygrid'][ao(0x87)]=g[ao(0x97)]['data'][ao(0xa2)]['item']??null;},'render':g=>{const ap=an,h=!!g[ap(0x97)]['data']['data']?.[ap(0xf7)];if(g[ap(0xd7)]){g['nodeElem'][ap(0xe1)]=k=>{return k['preventDefault'](),![];};const j=document['createElement']('span');j[ap(0xdc)][ap(0xe8)]='display:inline-block;\x20width:24px;',g[ap(0x103)]['prepend'](j);if(!h){const k=document['createElement'](ap(0x149));k['className']=ap(0xd1),k[ap(0x9c)]=ap(0x7f),k[ap(0x90)]='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g[ap(0x103)]['prepend'](k);const l=g['nodeElem']['parentElement'],m=document[ap(0x94)](ap(0x142));m[ap(0xdc)][ap(0xe8)]='display:inline-block;\x20width:32px;',g[ap(0x103)][ap(0xbd)](m);const n=document[ap(0x94)](ap(0x149));n[ap(0x13b)]='cmd';const o=document['createElement']('img');o[ap(0x6c)]=assetsPath+'icons/copy.svg',o[ap(0x9c)]=ap(0x83),o['onclick']=()=>{const aq=ap,q=structuredClone(g[aq(0x97)][aq(0xa2)]['data']['item']),r=g[aq(0x97)][aq(0x105)]['addChildren'](this['createTreeItem'](q));r[aq(0xff)](g[aq(0x97)],'after');};const p=document[ap(0x94)](ap(0x136));p[ap(0x6c)]=assetsPath+ap(0xa5),p[ap(0x9c)]='Remove',p[ap(0x67)]=()=>g[ap(0x97)][ap(0xc0)](),n[ap(0x9a)](o,p),l[ap(0xbd)](n),g[ap(0x103)]['_reservedRowWidth']=j['offsetWidth']+m[ap(0x111)];}else g[ap(0x103)][ap(0x81)]=j[ap(0x111)];}const i=g[ap(0x103)][ap(0x81)]??0x0;if(i){const q=g['nodeElem']['querySelector']('span.wb-title');if(q){const r=parseFloat(q[ap(0xdc)][ap(0xf9)]);if(!isNaN(r))q['style']['width']=Math['max'](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ar=an;if(!this['_dragFromHandle'])return![];return this[ar(0xf6)]=g['node'],g[ar(0xdf)]['dataTransfer'][ar(0xb4)]=ar(0xeb),g[ar(0xdf)]['dataTransfer']['dropEffect']=ar(0xeb),g[ar(0xdf)][ar(0x65)][ar(0x11f)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const as=an;this[as(0xf6)]=null;},'dragEnter':g=>{const at=an,h=g['event'][at(0x65)]?.['types'][at(0xaa)](SAME_TREE_MOVE_MIME);g['event'][at(0x65)][at(0x12c)]=h?'move':'copy';const i=!!g['node']['data']['data']?.[at(0xf7)];return i?new Set([at(0x13d)]):new Set(['before','after']);},'dragOver':g=>{const au=an,h=g[au(0xdf)][au(0x65)]?.['types']['includes'](SAME_TREE_MOVE_MIME);g[au(0xdf)]['dataTransfer'][au(0x12c)]=h?au(0xeb):'copy';},'drop':async g=>{const av=an,h=g[av(0xdf)][av(0x65)]?.[av(0xb8)][av(0xaa)](SAME_TREE_MOVE_MIME);if(g['region']===av(0x13d)){if(h&&this['_draggedNode'])this['_draggedNode'][av(0xff)](g[av(0x97)],av(0xbd)),this['_draggedNode']['setClass'](av(0x113),![]);else{const j=g[av(0xdf)][av(0x65)]?.['getData'](av(0xae));j&&g[av(0x97)][av(0xb3)](this['createTreeItem']({'type':j}));}return;}const i=g['region']==av(0x118)?'before':'after';if(h&&this[av(0xf6)])this[av(0xf6)][av(0xff)](g['node'],i),this['_draggedNode']['setClass'](av(0x113),![]);else{const k=g[av(0xdf)]['dataTransfer']?.['getData'](av(0xae));if(k){const l={'type':k},m=this['createTreeItem'](l),n=g['node']['parent']['addChildren'](m);n[av(0xff)](g[av(0x97)],i);}}}}}),this['_commandListFancyTree']['root'][an(0x70)]?.[0x0]?.[an(0x134)]();}['createTreeItem'](d){const aw=P;if(d[aw(0x123)]==='If'){const e=d;return e[aw(0xb7)]??=[],e[aw(0xec)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':aw(0xb9),'expanded':!![],'data':{'branch':'true'},'children':e[aw(0xb7)][aw(0xa1)](f=>this['createTreeItem'](f))},{'title':'else','expanded':!![],'data':{'branch':'else'},'children':e[aw(0xec)][aw(0xa1)](f=>this['createTreeItem'](f))}]};}return{'title':d['type'],'data':{'item':d}};}['nodeToCommand'](d){const ax=P,e=d['data'][ax(0xa2)]['item'];if(e[ax(0x123)]==='If'){const f=d['children']?.['find'](h=>h['data']['data']?.['branch']===ax(0xb9)),g=d[ax(0x70)]?.['find'](h=>h[ax(0xa2)]['data']?.['branch']==='else');e['trueCommands']=(f?.[ax(0x70)]??[])['map'](h=>this[ax(0x6e)](h)),e['elseCommands']=(g?.[ax(0x70)]??[])[ax(0xa1)](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const ay=P;let e=d;while(e){if(e[ay(0xa2)]?.['data']?.['branch'])return e;e=e['parent'];}return null;}async[P(0x78)](){const az=P,d=new SimpleScriptCommandPicker();d[az(0x13c)](this[az(0xc1)],this['commandDescriptions']),d['title']=az(0xda),d['commandTypeChosen']['on'](()=>{const aA=az;if(d['selectedType']){const f={'type':d['selectedType']},g=this[aA(0x8d)](f),h=this['_getBranchContainerNode'](this['_commandListFancyTree']['activeNode']);if(h)h[aA(0xb3)](g);else this['_commandListFancyTree'][aA(0xb3)](g);}});const e=new AbortController();d[az(0xf0)]['on'](()=>e[az(0xbc)]()),await this[az(0x100)]['openModal'](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}['getScriptCommands'](){const aB=P;if(this['_showingCode']){const e=this['_parseCodeViewScript']();if(e)this['loadScript'](e);}let d=this[aB(0x11b)][aB(0xfb)][aB(0x70)];return d[aB(0xa1)](f=>this['nodeToCommand'](f));}}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);