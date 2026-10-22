const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=-parseInt(O(0x12e))/0x1*(parseInt(O(0xbe))/0x2)+-parseInt(O(0x12f))/0x3+-parseInt(O(0xb9))/0x4+parseInt(O(0x86))/0x5+-parseInt(O(0x109))/0x6*(parseInt(O(0x11a))/0x7)+-parseInt(O(0x74))/0x8+parseInt(O(0x152))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x33979));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';function a(){const aC=['propertiesTypeInfo','types','find','visualizationShell','hidden','instanceServiceContainer','onclick','root','selectedType','12033171hvnWsU','update','propertygrid','1746920iBuWGx','includes','over','0.2','item','dropEffect','elseCommands','implements','code','flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;','_getBranchContainerNode','font-weight:bold;\x20margin-bottom:2px;','_commandListDiv','serviceContainer','flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;','after','setData','const','143025ZhoeQi','flex:1\x201\x20auto;','language','Code','source','_propertygrid','display','target','event','emit','addEventListener','data','trim','setClass','textContent','\x20flex:0\x200\x20130px;','_addCommandBtn','dragend','super','moveTo','whiteSpace','addChildren','insertAdjacentElement','addCommand','private','bindabletype','preventDefault','children','before','...','nodeElem','_showCodeView','a\x20parameter\x20you\x20hand\x20over','has','dataTransfer','package','parentElement','script','node-projects-visualization-simple-script-editor','length','collection','refresh','propertyNodeContextMenu','catch','className','map','_codeView','value','Name','template','node','857704pFZeKB','commands','signal','getScriptCommands','_showingCode','26WAZZWf','_codeToggleBtn','type','define','wb-drag-source','overflow','offsetWidth','\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;','javascript','width:12px;\x20height:12px;','Add\x20Script\x20Command','nodeToCommand','stringify','while','_parseCodeViewScript','_getDomElement','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','showHead','branch','with','loadScript','splice','openConfirmation','position','Visual','20px','calc(100%\x20-\x206px)','_assignEvents','option','display:flex;\x20align-items:center;\x20gap:4px;','openModal','abort','visualizationHandler','setActive','closeRequested','opacity','icons/delete.svg','flex','placeholder','cmd','varName','class','code-mode','createElement','_splitView','_title','switch','signalInProperty','\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;','getData','copy','filter','innerText','_commandListFancyTree','appendChild','src','format','_reservedRowWidth','application/x-simple-script-move','prepend','height','break','activated','oninput','input','Edit\x20signals','getTypeInfo','createTreeItem','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','name','textOverflow','Typ:\x20','toggle','mousedown','Complex\x20for\x20\x22','1385646heVRkP','title','commandDescriptions','test','move','show','let','span','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','max','cssText','true','_dragFromHandle','innerHTML','content-box','ellipsis','complex\x20property\x20value','7hKEbSV','Invalid\x20JSON:\x0a','srcdoc','\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','scriptCommandsTypeInfo','button','commandList','width:100%;\x20height:100%;\x20border:none;\x20display:block;','bindableObjectsTarget','selectedObject','void','boxSizing','img','text/plain','region','edit\x20string','else','complex','The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.','style','6459JrrqWY','1219812nMXdbR','specialAllreadyAdded','setPropertyValue','trueCommands','read\x20the\x20value\x20from\x20a\x20Signal','enter\x20value:','width','flexGrow','formula','effectAllowed','div','center','forEach','relative','_script','justifyContent','property','loadCommands','push','helpRequested','flex:0\x200\x2028px;\x20width:20px;','\x20align-self:flex-start;\x20padding:0\x208px;','querySelector','_draggedNode','propertyPath','static'];a=function(){return aC;};return a();}function b(c,d){c=c-0x73;const e=a();let f=e[c];return f;}import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0xf8);export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static [P(0x12d)]=css`
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
  `;static [P(0xb7)]=html`
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
  `;static ['is']=P(0xac);[P(0xeb)];get[P(0x10a)](){const Q=P;return this[Q(0xeb)];}set[P(0x10a)](d){this['_title']=d;}['serviceContainer'];[P(0x14e)];['visualizationHandler'];['visualizationShell'];[P(0x11e)];['propertiesTypeInfo'];[P(0x142)]=new TypedEvent();[P(0x10b)]={...nativeScriptCommandDescriptions};['_script'];[P(0x80)];['_commandListFancyTree'];[P(0x8b)];[P(0xea)];[P(0xb4)];[P(0xbf)];[P(0x96)];[P(0xbd)]=![];[P(0x115)]=![];['_draggedNode']=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this['_commandListDiv']=this['_getDomElement']('commandList'),this[R(0x8b)]=this['_getDomElement'](R(0x73)),this[R(0xea)]=this[R(0xcd)]('splitView'),this['_codeView']=this['_getDomElement']('codeView'),this['_codeToggleBtn']=this[R(0xcd)]('codeToggleBtn'),this[R(0x96)]=this['_getDomElement']('addCommandBtn');const d=this[R(0xcd)]('listContent');d['addEventListener'](R(0x107),e=>{const S=R;this['_dragFromHandle']=!!e[S(0x8d)]?.['closest']('.drag-handle');}),document[R(0x90)](R(0x97),()=>{this['_draggedNode']=null;},!![]),d[R(0x90)]('dragover',e=>{const T=R;e['preventDefault']();if(e['dataTransfer']){const f=e[T(0xa8)][T(0x14a)]['includes'](SAME_TREE_MOVE_MIME);e[T(0xa8)][T(0x79)]=f?'move':T(0xf0);}}),d[R(0x90)]('drop',e=>{const U=R;e[U(0xa0)]();const f=e[U(0xa8)]?.['types']['includes'](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this['_commandListFancyTree'][U(0x150)][U(0xa1)],h=g?.[g['length']-0x1];if(h)this['_draggedNode']['moveTo'](h,'after');this['_draggedNode'][U(0x93)](U(0xc2),![]);}else{const i=e['dataTransfer']?.[U(0xef)]('text/plain');if(i){const j={'type':i};this[U(0xf3)]['root'][U(0x9b)](this[U(0x101)](j));}}}),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptEditor[R(0x12d)]];}async['ready'](){const V=P;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[V(0xd9)]();let d=async k=>{const W=V;let l=new VisualizationPropertyGrid();l[W(0xde)]=this[W(0xde)],l[W(0x14c)]=this[W(0x14c)],l[W(0x81)]=this['serviceContainer'],l['instanceServiceContainer']=this['instanceServiceContainer'],l[W(0x122)]=W(0xab),l[W(0x100)]=(n,o)=>typeInfoFromJsonSchema(this[W(0x149)],n,o),l[W(0xcf)]=![],l['typeName']='IScriptMultiplexValue',l[W(0x10a)]=W(0x108)+k['propertyPath']+'\x22';if(typeof k['value']==='object')l['selectedObject']=k['value']??{};else l['selectedObject']={};l['bindingDoubleClicked']=n=>{const X=W;if(n[X(0x9f)]=='property')l['setPropertyValue']('source',X(0x13f));else n[X(0x9f)]=='context'?l[X(0x131)](X(0x8a),'context'):l['setPropertyValue']('source',X(0xbb));l[X(0x131)](X(0x103),n['fullName']),l['refresh']();};let m=await this[W(0x14c)][W(0xd4)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this[W(0x8b)][W(0x131)](k['propertyPath'],l[W(0x123)]),this['_propertygrid'][W(0xaf)]());},e=async k=>{const Y=V,l=new CodeViewMonaco();l['language']=Y(0xc6),l[Y(0x12d)][Y(0xd5)]=Y(0x13c),l['code']=k[Y(0xb5)]??'';const m=await this['visualizationShell']['openConfirmation'](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Y(0x8b)]['setPropertyValue'](k[Y(0x147)],l[Y(0x7c)]),this[Y(0x8b)][Y(0xaf)]());};const f=[V(0xbb),V(0x13f),'elementProperty',V(0xed),V(0x8e),'parameter','context','complexString','complexSignal','expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([V(0xfb),'case',V(0xb1),V(0xe7),V(0x85),'continue','debugger','default','delete','do',V(0x12a),'export','extends','finally','for','function','if','import','in','instanceof','new','return',V(0x98),V(0xec),'this','throw','try','typeof','var',V(0x124),V(0xcb),V(0xd1),'yield',V(0x10f),V(0x148),'enum','await',V(0x7b),V(0xa9),'protected','interface',V(0x9e),'public','null','true','false','undefined','arguments','eval']),i={'signal':V(0x133),'property':'read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','elementProperty':'a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':V(0x111),'parameter':V(0xa6),'context':'a\x20value\x20of\x20the\x20context','complexString':'a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','complexSignal':V(0x102),'expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const a0=V,l=(k['value']??[])['map'](E=>({...E})),m=E=>{const Z=b,F=(l[E]['varName']??'')[Z(0x92)]();if(!F)return null;if(!g[Z(0x10c)](F))return'\x22'+F+'\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.';if(h[Z(0xa7)](F))return'\x22'+F+'\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.';if(l['some']((G,H)=>H!==E&&(G[Z(0xe6)]??'')['trim']()===F))return'\x22'+F+Z(0x11d);return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document['createElement'](a0(0x139));o[a0(0x12d)][a0(0x113)]=a0(0xce);const p=document['createElement'](a0(0x139));p['style']['cssText']='display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;';const q=document['createElement']('span');q[a0(0x94)]=a0(0xb6),q['style']['cssText']='flex:0\x200\x20120px;';const r=document['createElement']('span');r['textContent']='Typ',r['style'][a0(0x113)]='flex:0\x200\x20130px;';const s=document[a0(0xe9)]('span');s[a0(0x94)]='Signal',s['style'][a0(0x113)]=a0(0x87);const t=document[a0(0xe9)](a0(0x110));t['style']['cssText']='flex:0\x200\x2022px;',p['append'](q,r,s,t),o['appendChild'](p);const u=document['createElement']('div');u[a0(0x12d)]['cssText']='display:flex;\x20flex-direction:column;\x20gap:4px;',o['appendChild'](u);const v=document[a0(0xe9)]('div');v['style'][a0(0x113)]=a0(0x82);const w=document['createElement'](a0(0x139));w['style']['cssText']=a0(0x7f);const x=document['createElement']('div');x[a0(0x12d)]['cssText']='color:#333;\x20white-space:pre-line;',v['append'](w,x);const y=E=>{const a1=a0;w['textContent']=a1(0x105)+E,x[a1(0x94)]=i[E]??'';},z=[],A=()=>{const a2=a0;l[a2(0x13b)]((E,F)=>{const a3=a2,G=z[F];if(!G)return;const H=m(F);G['title']=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+'\x20if\x20empty)',G['style']['borderColor']=H?'#c0392b':'',G[a3(0x12d)]['backgroundColor']=H?'#fdecea':'';});},B=()=>{const a4=a0;u['innerHTML']='',z[a4(0xad)]=0x0,l['forEach']((E,F)=>{const a5=a4,G=document['createElement'](a5(0x139));G[a5(0x12d)]['cssText']=a5(0xdb);const H=document[a5(0xe9)]('input');H['value']=E[a5(0xe6)]??'',H[a5(0xe4)]='__'+F,H[a5(0x12d)][a5(0x113)]=n+a5(0xee),H[a5(0xfd)]=()=>{const a6=a5;E[a6(0xe6)]=H[a6(0xb5)]||undefined,A();},z['push'](H),G['appendChild'](H);const I=document['createElement']('select');I['style']['cssText']=n+a5(0x95);for(const M of f){const N=document['createElement'](a5(0xda));N['value']=M,N['textContent']=M;if(E['source']===M)N['selected']=!![];I[a5(0xf4)](N);}I['onchange']=()=>{const a7=a5;E[a7(0x8a)]=I[a7(0xb5)],y(I['value']);},I['onfocus']=()=>y(I['value']),G['appendChild'](I);const J=document[a5(0xe9)](a5(0xfe));J['value']=E[a5(0x103)]??'',J['placeholder']='e.g.\x20srm.rbg{__tagRoot}.error',J['style']['cssText']=n+'\x20flex:1\x201\x20auto;',J[a5(0xfd)]=()=>{const a8=a5;E[a8(0x103)]=J[a8(0xb5)];},G[a5(0xf4)](J);const K=document[a5(0xe9)](a5(0x11f));K[a5(0x10a)]='Remove\x20signal',K['style']['cssText']=n+a5(0xc5);const L=document['createElement'](a5(0x126));L[a5(0xf5)]=assetsPath+a5(0xe2),L[a5(0x12d)][a5(0x113)]=a5(0xc7),K[a5(0xf4)](L),K[a5(0x14f)]=()=>{const a9=a5;l[a9(0xd3)](F,0x1),B();},G['appendChild'](K),u['appendChild'](G);}),A();};B();const C=document['createElement'](a0(0x11f));C[a0(0x94)]='+\x20Add\x20signal',C['style'][a0(0x113)]=n+a0(0x144),C[a0(0x14f)]=()=>{l['push']({'source':'signal','name':''}),B();},o[a0(0xf4)](C),y(l[0x0]?.[a0(0x8a)]??a0(0xbb)),o['appendChild'](v);const D=await this['visualizationShell']['openConfirmation'](o,{'title':a0(0xff),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l),this[a0(0x8b)]['refresh']());};this[V(0x8b)][V(0xde)]=this[V(0xde)],this['_propertygrid']['visualizationShell']=this['visualizationShell'],this['_propertygrid'][V(0x81)]=this[V(0x81)],this[V(0x8b)]['instanceServiceContainer']=this['instanceServiceContainer'],this[V(0x8b)][V(0x122)]=V(0xab),this['_propertygrid']['setNameColumnWidth'](0x82),this['_propertygrid'][V(0x100)]=(k,l)=>{const aa=V,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m['properties'][aa(0xf1)](n=>n[aa(0x103)]!=='trueCommands'&&n[aa(0x103)]!==aa(0x7a))),m;},this[V(0x8b)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const ab=V;if(!k[ab(0x130)]){k[ab(0x130)]=!![];if(k['format']===ab(0xae)){}else{if(k['format']==='signalList'){let p=document[ab(0xe9)]('button');p[ab(0x12d)]['height']='calc(100%\x20-\x206px)',p[ab(0x12d)][ab(0xd5)]='relative',p['style'][ab(0x8c)]=ab(0xe3),p['style'][ab(0x13e)]='center',p['style'][ab(0x135)]='20px',p['style'][ab(0x125)]=ab(0x117),p[ab(0xf2)]='del',p[ab(0x14f)]=()=>{const ac=ab;this['_propertygrid'][ac(0x131)](m,undefined),this[ac(0x8b)]['refresh']();},n['nodeElem']['insertAdjacentElement']('afterbegin',p);const q=Array['isArray'](l)?l:[];let r=document['createElement']('div');r[ab(0x12d)]['display']=ab(0xe3);let s=document['createElement']('span');s['innerText']=q[ab(0xb3)]((u,w)=>(u?.[ab(0xe6)]||'__'+w)+':\x20'+(u?.[ab(0x8a)]??'')+':'+(u?.[ab(0x103)]??''))['join'](',\x20'),s['style'][ab(0xc3)]=ab(0x14d),s[ab(0x12d)][ab(0x9a)]='nowrap',s[ab(0x12d)]['textOverflow']=ab(0x118),s['style'][ab(0x136)]='1',s['title']=JSON[ab(0xca)](q),r['appendChild'](s);let t=document[ab(0xe9)](ab(0x11f));return t[ab(0xf2)]=ab(0xa3),t[ab(0x14f)]=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n['nodeElem']['style'][ab(0x8c)]=ab(0xe3),r;}else{if(k[ab(0xf6)]===ab(0x137)){const u=document[ab(0xe9)]('div');u['style']['cssText']='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v[ab(0x88)]='javascript',v['singleRow']=!![],v[ab(0x12d)][ab(0x113)]=ab(0x7d),v[ab(0x7c)]=l??'',v[ab(0x90)]('code-changed',()=>{const ad=ab;this['_propertygrid'][ad(0x131)](m,v[ad(0x7c)]);}),u[ab(0xf4)](v);const w=document['createElement'](ab(0x11f));return w['innerText']=ab(0xa3),w[ab(0x10a)]='Open\x20in\x20larger\x20editor',w[ab(0x12d)]['cssText']=ab(0x143),w[ab(0x14f)]=()=>e({'value':v[ab(0x7c)],'propertyPath':m}),u[ab(0xf4)](w),n[ab(0xa4)]['style']['display']='flex',u;}else{if(typeof l==='object'&&l!==null||k[ab(0xf6)]===ab(0x12b)){let x=document['createElement']('button');x['style']['height']='calc(100%\x20-\x206px)',x['style'][ab(0xd5)]='relative',x['style']['display']='flex',x['style'][ab(0x13e)]=ab(0x13a),x['style'][ab(0x135)]=ab(0xd7),x[ab(0x12d)][ab(0x125)]=ab(0x117),x[ab(0xf2)]='del',x['onclick']=()=>{const ae=ab;this['_propertygrid']['setPropertyValue'](m,undefined),this['_propertygrid'][ae(0xaf)]();},n[ab(0xa4)]['insertAdjacentElement']('afterbegin',x);let y=document['createElement']('div');y['style'][ab(0x8c)]=ab(0xe3);let z=document[ab(0xe9)](ab(0x110));if(l)z[ab(0xf2)]=(l[ab(0x8a)]??'')+':\x20'+(l[ab(0x103)]??'');else z[ab(0xf2)]='';z['style']['overflow']='hidden',z['style'][ab(0x9a)]='nowrap',z[ab(0x12d)][ab(0x104)]=ab(0x118),z[ab(0x12d)]['flexGrow']='1',z['title']=JSON['stringify'](l),y['appendChild'](z);let A=document['createElement'](ab(0x11f));return A['innerText']='...',A['onclick']=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n[ab(0xa4)]['style'][ab(0x8c)]=ab(0xe3),y;}else{let B=document[ab(0xe9)](ab(0x11f));B[ab(0x12d)][ab(0xfa)]=ab(0xd8),B[ab(0x12d)][ab(0xd5)]='relative',B[ab(0x12d)]['display']=ab(0xe3),B['style'][ab(0x13e)]=ab(0x13a),B['style']['width']='20px',B[ab(0x12d)]['boxSizing']='content-box',B[ab(0x10a)]=ab(0x119),B[ab(0x12d)][ab(0xe1)]=ab(0x77),B['innerText']=ab(0xa3),B[ab(0x14f)]=()=>{d({'value':l,'propertyPath':m});},n[ab(0xa4)][ab(0x9c)]('afterbegin',B),n[ab(0xa4)][ab(0x12d)][ab(0x8c)]=ab(0xe3);}}}}}return null;},this['_propertygrid'][V(0xb0)]['on'](k=>{const af=V;ContextMenu[af(0x10e)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':af(0x129),'action':async()=>{const ag=af,l=prompt(ag(0x134));l&&(this[ag(0x8b)]['setPropertyValue'](k['propertyPath'],l),this[ag(0x8b)]['refresh']());}},{'title':'remove\x20complex\x20value','action':async()=>{const ah=af;this[ah(0x8b)][ah(0x131)](k[ah(0x147)],undefined),this['_propertygrid']['refresh']();}}],k[af(0x8e)]);});}['helpClicked'](){const ai=P,d=document[ai(0xe9)]('iframe');d[ai(0x11c)]=simpleScriptEditorHelpHtml,d['style']['cssText']=ai(0x121),this[ai(0x14c)][ai(0xdc)](d,{'title':'Simple\x20Script\x20Editor\x20Help','parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this['helpRequested'][ai(0x8f)]();}['toggleCodeView'](){const aj=P;if(!this[aj(0xbd)]){const e=JSON[aj(0xca)]({'commands':this['getScriptCommands']()},null,0x2);this[aj(0xb4)][aj(0x153)](e),this[aj(0xa5)](!![]);return;}const d=this[aj(0xcc)]();if(!d)return;this['_showCodeView'](![]),this[aj(0xd2)](d);}[P(0xa5)](d){const ak=P;this[ak(0xb4)]['classList'][ak(0x106)]('visible',d),this[ak(0x80)]['classList'][ak(0x106)](ak(0x14d),d),this['_splitView']['classList'][ak(0x106)](ak(0xe8),d),this[ak(0x96)]['disabled']=d,this['_codeToggleBtn'][ak(0xf2)]=d?ak(0xd6):ak(0x89),this['_showingCode']=d;if(d)requestAnimationFrame(()=>this[ak(0xb4)][ak(0xfc)]());}['_parseCodeViewScript'](){const al=P;let d;try{d=JSON['parse'](this['_codeView']['getText']());}catch(f){return alert(al(0x11b)+f['message']),null;}if(!Array['isArray'](d?.[al(0xba)]))return alert(al(0x12c)),null;return d;}['loadScript'](d){const am=P;this[am(0x13d)]=d;this['_commandListFancyTree']&&(this[am(0xf3)]['destroy'](),this[am(0x80)]=this[am(0xcd)](am(0x120)));let e=[];for(let f of this[am(0x13d)][am(0xba)]){f=ScriptUpgrades['upgradeScriptCommand'](f),e[am(0x141)](this[am(0x101)](f));}this[am(0xf3)]=new Wunderbaum({...defaultOptions,'element':this[am(0x80)],'icon':![],'source':e,'activate':g=>{const an=am;this['_propertygrid'][an(0x123)]=g[an(0xb8)]['data'][an(0x91)]['item']??null;},'render':g=>{const ao=am,h=!!g['node'][ao(0x91)]['data']?.['branch'];if(g['isNew']){g[ao(0xa4)]['oncontextmenu']=k=>{const ap=ao;return k[ap(0xa0)](),![];};const j=document[ao(0xe9)]('span');j['style']['cssText']='display:inline-block;\x20width:24px;',g[ao(0xa4)][ao(0xf9)](j);if(!h){const k=document[ao(0xe9)]('div');k['className']='drag-handle',k[ao(0x10a)]='Drag\x20to\x20reorder',k[ao(0x116)]='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g['nodeElem'][ao(0xf9)](k);const l=g[ao(0xa4)][ao(0xaa)],m=document['createElement']('span');m['style'][ao(0x113)]='display:inline-block;\x20width:32px;',g[ao(0xa4)][ao(0xf4)](m);const n=document['createElement']('div');n[ao(0xb2)]=ao(0xe5);const o=document[ao(0xe9)]('img');o[ao(0xf5)]=assetsPath+'icons/copy.svg',o[ao(0x10a)]='Duplicate',o[ao(0x14f)]=()=>{const aq=ao,q=structuredClone(g['node']['data'][aq(0x91)]['item']),r=g['node']['parent']['addChildren'](this['createTreeItem'](q));r[aq(0x99)](g['node'],aq(0x83));};const p=document[ao(0xe9)](ao(0x126));p['src']=assetsPath+'icons/delete.svg',p['title']='Remove',p[ao(0x14f)]=()=>g[ao(0xb8)]['remove'](),n['append'](o,p),l[ao(0xf4)](n),g[ao(0xa4)][ao(0xf7)]=j[ao(0xc4)]+m['offsetWidth'];}else g['nodeElem'][ao(0xf7)]=j['offsetWidth'];}const i=g[ao(0xa4)]['_reservedRowWidth']??0x0;if(i){const q=g['nodeElem'][ao(0x145)]('span.wb-title');if(q){const r=parseFloat(q[ao(0x12d)]['width']);if(!isNaN(r))q['style']['width']=Math[ao(0x112)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ar=am;if(!this['_dragFromHandle'])return![];return this[ar(0x146)]=g[ar(0xb8)],g['event'][ar(0xa8)][ar(0x138)]='move',g[ar(0x8e)]['dataTransfer']['dropEffect']=ar(0x10d),g['event']['dataTransfer'][ar(0x84)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const as=am;this[as(0x146)]=null;},'dragEnter':g=>{const at=am,h=g['event']['dataTransfer']?.[at(0x14a)]['includes'](SAME_TREE_MOVE_MIME);g['event'][at(0xa8)]['dropEffect']=h?at(0x10d):'copy';const i=!!g[at(0xb8)][at(0x91)][at(0x91)]?.[at(0xd0)];return i?new Set([at(0x76)]):new Set(['before','after']);},'dragOver':g=>{const au=am,h=g[au(0x8e)][au(0xa8)]?.[au(0x14a)][au(0x75)](SAME_TREE_MOVE_MIME);g[au(0x8e)]['dataTransfer']['dropEffect']=h?'move':'copy';},'drop':async g=>{const av=am,h=g[av(0x8e)][av(0xa8)]?.['types']['includes'](SAME_TREE_MOVE_MIME);if(g[av(0x128)]==='over'){if(h&&this[av(0x146)])this[av(0x146)]['moveTo'](g['node'],'appendChild'),this[av(0x146)]['setClass'](av(0xc2),![]);else{const j=g[av(0x8e)]['dataTransfer']?.[av(0xef)](av(0x127));j&&g['node']['addChildren'](this['createTreeItem']({'type':j}));}return;}const i=g[av(0x128)]==av(0xa2)?'before':av(0x83);if(h&&this['_draggedNode'])this[av(0x146)][av(0x99)](g['node'],i),this[av(0x146)]['setClass']('wb-drag-source',![]);else{const k=g['event'][av(0xa8)]?.[av(0xef)]('text/plain');if(k){const l={'type':k},m=this[av(0x101)](l),n=g[av(0xb8)]['parent'][av(0x9b)](m);n[av(0x99)](g['node'],i);}}}}}),this['_commandListFancyTree'][am(0x150)]['children']?.[0x0]?.[am(0xdf)]();}['createTreeItem'](d){const aw=P;if(d[aw(0xc0)]==='If'){const e=d;return e[aw(0x132)]??=[],e[aw(0x7a)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':aw(0x114),'expanded':!![],'data':{'branch':'true'},'children':e[aw(0x132)]['map'](f=>this[aw(0x101)](f))},{'title':'else','expanded':!![],'data':{'branch':'else'},'children':e[aw(0x7a)]['map'](f=>this['createTreeItem'](f))}]};}return{'title':d[aw(0xc0)],'data':{'item':d}};}[P(0xc9)](d){const ax=P,e=d['data']['data'][ax(0x78)];if(e[ax(0xc0)]==='If'){const f=d[ax(0xa1)]?.[ax(0x14b)](h=>h['data']['data']?.[ax(0xd0)]==='true'),g=d[ax(0xa1)]?.[ax(0x14b)](h=>h[ax(0x91)]['data']?.['branch']==='else');e['trueCommands']=(f?.[ax(0xa1)]??[])['map'](h=>this['nodeToCommand'](h)),e['elseCommands']=(g?.[ax(0xa1)]??[])[ax(0xb3)](h=>this['nodeToCommand'](h));}return e;}[P(0x7e)](d){const ay=P;let e=d;while(e){if(e['data']?.[ay(0x91)]?.['branch'])return e;e=e['parent'];}return null;}async[P(0x9d)](){const az=P,d=new SimpleScriptCommandPicker();d[az(0x140)](this[az(0x11e)],this['commandDescriptions']),d['title']=az(0xc8),d['commandTypeChosen']['on'](()=>{const aA=az;if(d[aA(0x151)]){const f={'type':d['selectedType']},g=this[aA(0x101)](f),h=this[aA(0x7e)](this[aA(0xf3)]['activeNode']);if(h)h[aA(0x9b)](g);else this['_commandListFancyTree']['addChildren'](g);}});const e=new AbortController();d[az(0xe0)]['on'](()=>e[az(0xdd)]()),await this[az(0x14c)][az(0xdc)](d,{'title':az(0xc8),'x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e[az(0xbb)]});}[P(0xbc)](){const aB=P;if(this[aB(0xbd)]){const e=this[aB(0xcc)]();if(e)this['loadScript'](e);}let d=this[aB(0xf3)]['root'][aB(0xa1)];return d['map'](f=>this[aB(0xc9)](f));}}customElements[P(0xc1)](SimpleScriptEditor['is'],SimpleScriptEditor);