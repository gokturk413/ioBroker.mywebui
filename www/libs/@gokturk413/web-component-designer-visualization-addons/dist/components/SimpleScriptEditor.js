const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x174))/0x1+-parseInt(O(0x13a))/0x2*(parseInt(O(0x119))/0x3)+-parseInt(O(0xbd))/0x4*(parseInt(O(0x197))/0x5)+parseInt(O(0x136))/0x6+-parseInt(O(0x107))/0x7+parseInt(O(0x149))/0x8+-parseInt(O(0x154))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x54c7f));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';function a(){const az=['drop','object','instanceServiceContainer','createElement','_splitView','_codeView','_addCommandBtn','extends','else','specialAllreadyAdded','IScriptMultiplexValue','js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object','createTreeItem','openModal','dragend','selectedObject','break','edit\x20complex\x20value','img','span','srcdoc','show','getText','serviceContainer','typeName','setNameColumnWidth','\x20if\x20empty)','addChildren','flex:0\x200\x2028px;\x20width:20px;','continue','enum','nodeElem','setPropertyValue','arguments','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','implements','moveTo','interface','item','fullName','Drag\x20to\x20reorder','offsetWidth','node-projects-visualization-simple-script-editor','ellipsis','with','526463ktnxmP','_propertygrid','abort','data','toggle','javascript','finally','getTypeInfo','wb-drag-source','language','Add\x20Script\x20Command','20px','includes','justifyContent','propertyPath','null','code-mode','closeRequested','81HDnkPv','type','move','textContent','innerText','bindabletype','append','debugger','ready','Typ:\x20','selectedType','some','try','catch','commandTypeChosen','source','bindableObjectsTarget','afterbegin','height','dataTransfer','throw','insertAdjacentElement','node','overflow','after','flex','.drag-handle','setClass','adoptedStyleSheets','1850688fsgQTc','src','openConfirmation','width:12px;\x20height:12px;','27944nGCMJc','event','_script','define','oncontextmenu','button','flex:0\x200\x20120px;','code','push','icons/delete.svg','import','Complex\x20for\x20\x22','max','cmd','parentElement','3778568UfhYkI','parameter','del','Open\x20in\x20larger\x20editor','parent','\x20flex:0\x200\x20130px;','_codeToggleBtn','getData','a\x20parameter\x20you\x20hand\x20over','onfocus','map','459738ODDOkS','...','switch','yield','borderColor','font-weight:bold;\x20margin-bottom:2px;','width','cssText','over','_draggedNode','position','static','application/x-simple-script-move','trueCommands','root','center','showHead','export','Code','isArray','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','addCommand','boxSizing','true','span.wb-title','visualizationHandler','varName','default','content-box','await','text/plain','onclick','341812EpYMpv','div','copy','nodeToCommand','commandList','parse','_commandListDiv','_commandListFancyTree','#c0392b','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','_assignEvents','onchange','value','loadScript','display:inline-block;\x20width:24px;','package','drag-handle','title','Edit\x20formula','_showingCode','property','remove','option','region','helpRequested','icons/copy.svg','appendChild','placeholder','branch','bindingDoubleClicked','propertiesTypeInfo','_showCodeView','getScriptCommands','activated','find','1358915ePtcaF','textOverflow','_getDomElement','_title','<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','scriptCommandsTypeInfo','context','script','visualizationShell','innerHTML','types','prepend','children','hidden','calc(100%\x20-\x206px)','whiteSpace','4JRBRxn','classList','dropEffect','Visual','trim','elseCommands','complex\x20property\x20value','addEventListener','display','properties','closest','refresh','e.g.\x20srm.rbg{__tagRoot}.error','commands','test','signal','format','filter','complexSignal','_dragFromHandle','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','color:#333;\x20white-space:pre-line;','_parseCodeViewScript','stringify','style','formula','className','name','a\x20value\x20of\x20the\x20context'];a=function(){return az;};return a();}import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';function b(c,d){c=c-0xb8;const e=a();let f=e[c];return f;}import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0x160);export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static ['is']=P(0x104);[P(0x19a)];get['title'](){return this['_title'];}set['title'](d){this['_title']=d;}['serviceContainer'];[P(0xdc)];['visualizationHandler'];[P(0x1a0)];['scriptCommandsTypeInfo'];[P(0x192)];['helpRequested']=new TypedEvent();['commandDescriptions']={...nativeScriptCommandDescriptions};[P(0x13c)];[P(0x17a)];['_commandListFancyTree'];[P(0x108)];['_splitView'];[P(0xdf)];[P(0x14f)];[P(0xe0)];[P(0x187)]=![];['_dragFromHandle']=![];['_draggedNode']=null;constructor(){const Q=P;super(),this['_restoreCachedInititalValues'](),this['_commandListDiv']=this['_getDomElement']('commandList'),this['_propertygrid']=this[Q(0x199)]('propertygrid'),this[Q(0xde)]=this['_getDomElement']('splitView'),this[Q(0xdf)]=this['_getDomElement']('codeView'),this['_codeToggleBtn']=this['_getDomElement']('codeToggleBtn'),this['_addCommandBtn']=this[Q(0x199)]('addCommandBtn');const d=this[Q(0x199)]('listContent');d[Q(0xc4)]('mousedown',e=>{const R=Q;this[R(0xd0)]=!!e['target']?.[R(0xc7)](R(0x133));}),document['addEventListener'](Q(0xe8),()=>{const S=Q;this[S(0x15d)]=null;},!![]),d['addEventListener']('dragover',e=>{const T=Q;e['preventDefault']();if(e[T(0x12c)]){const f=e[T(0x12c)]['types'][T(0x113)](SAME_TREE_MOVE_MIME);e['dataTransfer']['dropEffect']=f?T(0x11b):T(0x176);}}),d[Q(0xc4)](Q(0xda),e=>{const U=Q;e['preventDefault']();const f=e[U(0x12c)]?.['types'][U(0x113)](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[U(0x17b)][U(0x162)][U(0xb9)],h=g?.[g['length']-0x1];if(h)this[U(0x15d)]['moveTo'](h,U(0x131));this['_draggedNode']['setClass']('wb-drag-source',![]);}else{const i=e['dataTransfer']?.['getData'](U(0x172));if(i){const j={'type':i};this['_commandListFancyTree']['root']['addChildren'](this['createTreeItem'](j));}}}),this['shadowRoot'][Q(0x135)]=[c,defaultStyle,SimpleScriptEditor['style']];}async[P(0x121)](){const V=P;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[V(0x17e)]();let d=async k=>{const W=V;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this['visualizationHandler'],l['visualizationShell']=this[W(0x1a0)],l['serviceContainer']=this[W(0xf1)],l[W(0xdc)]=this[W(0xdc)],l['bindableObjectsTarget']='script',l[W(0x10e)]=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l[W(0x164)]=![],l[W(0xf2)]=W(0xe4),l[W(0x185)]=W(0x145)+k['propertyPath']+'\x22';if(typeof k[W(0x180)]===W(0xdb))l[W(0xe9)]=k['value']??{};else l['selectedObject']={};l[W(0x191)]=n=>{const X=W;if(n[X(0x11e)]=='property')l[X(0xfa)]('source',X(0x188));else n[X(0x11e)]=='context'?l['setPropertyValue'](X(0x128),'context'):l[X(0xfa)]('source','signal');l['setPropertyValue']('name',n[X(0x101)]),l[X(0xc8)]();};let m=await this[W(0x1a0)]['openConfirmation'](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this[W(0x108)][W(0xfa)](k['propertyPath'],l[W(0xe9)]),this[W(0x108)][W(0xc8)]());},e=async k=>{const Y=V,l=new CodeViewMonaco();l[Y(0x110)]=Y(0x10c),l[Y(0xd5)][Y(0x15e)]='relative',l['code']=k['value']??'';const m=await this[Y(0x1a0)][Y(0x138)](l,{'title':Y(0x186),'x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Y(0x108)][Y(0xfa)](k[Y(0x115)],l['code']),this[Y(0x108)][Y(0xc8)]());};const f=[V(0xcc),V(0x188),'elementProperty','signalInProperty',V(0x13b),V(0x14a),V(0x19e),'complexString',V(0xcf),'expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([V(0xea),'case',V(0x126),'class','const',V(0xf7),V(0x120),V(0x16f),'delete','do','else',V(0x165),V(0xe1),V(0x10d),'for','function','if',V(0x144),'in','instanceof','new','return','super',V(0x156),'this',V(0x12d),V(0x125),'typeof','var','void','while',V(0x106),V(0x157),'let',V(0x15f),V(0xf8),V(0x171),V(0xfd),V(0x183),'protected',V(0xff),'private','public',V(0x116),'true','false','undefined',V(0xfb),'eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':V(0x168),'elementProperty':V(0xfc),'signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':'read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','parameter':V(0x151),'context':V(0xd9),'complexString':'a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','complexSignal':V(0x17d),'expression':V(0xe5)};let j=async k=>{const a0=V,l=(k['value']??[])['map'](E=>({...E})),m=E=>{const Z=b,F=(l[E][Z(0x16e)]??'')[Z(0xc1)]();if(!F)return null;if(!g[Z(0xcb)](F))return'\x22'+F+'\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.';if(h['has'](F))return'\x22'+F+'\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.';if(l[Z(0x124)]((G,H)=>H!==E&&(G[Z(0x16e)]??'')['trim']()===F))return'\x22'+F+'\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.';return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[a0(0xdd)]('div');o['style']['cssText']=a0(0xd1);const p=document['createElement'](a0(0x175));p[a0(0xd5)][a0(0x15b)]=a0(0x19c);const q=document[a0(0xdd)](a0(0xed));q[a0(0x11c)]='Name',q['style']['cssText']=a0(0x140);const r=document[a0(0xdd)]('span');r['textContent']='Typ',r['style'][a0(0x15b)]='flex:0\x200\x20130px;';const s=document['createElement']('span');s[a0(0x11c)]='Signal',s[a0(0xd5)]['cssText']='flex:1\x201\x20auto;';const t=document[a0(0xdd)]('span');t['style']['cssText']='flex:0\x200\x2022px;',p[a0(0x11f)](q,r,s,t),o['appendChild'](p);const u=document[a0(0xdd)](a0(0x175));u['style'][a0(0x15b)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o[a0(0x18e)](u);const v=document['createElement']('div');v[a0(0xd5)]['cssText']='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0xdd)]('div');w['style']['cssText']=a0(0x159);const x=document['createElement'](a0(0x175));x['style']['cssText']=a0(0xd2),v[a0(0x11f)](w,x);const y=E=>{const a1=a0;w[a1(0x11c)]=a1(0x122)+E,x['textContent']=i[E]??'';},z=[],A=()=>{l['forEach']((E,F)=>{const a2=b,G=z[F];if(!G)return;const H=m(F);G[a2(0x185)]=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+a2(0xf4),G[a2(0xd5)][a2(0x158)]=H?a2(0x17c):'',G['style']['backgroundColor']=H?'#fdecea':'';});},B=()=>{const a3=a0;u[a3(0x1a1)]='',z['length']=0x0,l['forEach']((E,F)=>{const a4=a3,G=document['createElement'](a4(0x175));G['style'][a4(0x15b)]='display:flex;\x20align-items:center;\x20gap:4px;';const H=document['createElement']('input');H[a4(0x180)]=E['varName']??'',H[a4(0x18f)]='__'+F,H[a4(0xd5)][a4(0x15b)]=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H['oninput']=()=>{const a5=a4;E['varName']=H[a5(0x180)]||undefined,A();},z[a4(0x142)](H),G['appendChild'](H);const I=document['createElement']('select');I[a4(0xd5)]['cssText']=n+a4(0x14e);for(const M of f){const N=document['createElement'](a4(0x18a));N[a4(0x180)]=M,N[a4(0x11c)]=M;if(E[a4(0x128)]===M)N['selected']=!![];I[a4(0x18e)](N);}I[a4(0x17f)]=()=>{const a6=a4;E[a6(0x128)]=I[a6(0x180)],y(I['value']);},I[a4(0x152)]=()=>y(I[a4(0x180)]),G[a4(0x18e)](I);const J=document['createElement']('input');J[a4(0x180)]=E[a4(0xd8)]??'',J[a4(0x18f)]=a4(0xc9),J['style'][a4(0x15b)]=n+'\x20flex:1\x201\x20auto;',J['oninput']=()=>{const a7=a4;E['name']=J[a7(0x180)];},G[a4(0x18e)](J);const K=document['createElement']('button');K[a4(0x185)]='Remove\x20signal',K[a4(0xd5)][a4(0x15b)]=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document['createElement'](a4(0xec));L[a4(0x137)]=assetsPath+a4(0x143),L['style'][a4(0x15b)]=a4(0x139),K['appendChild'](L),K[a4(0x173)]=()=>{l['splice'](F,0x1),B();},G[a4(0x18e)](K),u[a4(0x18e)](G);}),A();};B();const C=document[a0(0xdd)](a0(0x13f));C['textContent']='+\x20Add\x20signal',C['style']['cssText']=n+'\x20align-self:flex-start;\x20padding:0\x208px;',C['onclick']=()=>{const a8=a0;l[a8(0x142)]({'source':'signal','name':''}),B();},o[a0(0x18e)](C),y(l[0x0]?.['source']??a0(0xcc)),o['appendChild'](v);const D=await this['visualizationShell'][a0(0x138)](o,{'title':'Edit\x20signals','x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x108)]['setPropertyValue'](k['propertyPath'],l),this['_propertygrid'][a0(0xc8)]());};this[V(0x108)][V(0x16d)]=this[V(0x16d)],this[V(0x108)][V(0x1a0)]=this[V(0x1a0)],this[V(0x108)]['serviceContainer']=this['serviceContainer'],this['_propertygrid']['instanceServiceContainer']=this[V(0xdc)],this[V(0x108)][V(0x129)]=V(0x19f),this['_propertygrid'][V(0xf3)](0x82),this[V(0x108)]['getTypeInfo']=(k,l)=>{const a9=V,m=typeInfoFromJsonSchema(this[a9(0x19d)],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m[a9(0xc6)][a9(0xce)](n=>n[a9(0xd8)]!==a9(0x161)&&n[a9(0xd8)]!=='elseCommands')),m;},this[V(0x108)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const aa=V;if(!k['specialAllreadyAdded']){k[aa(0xe3)]=!![];if(k[aa(0xcd)]==='collection'){}else{if(k['format']==='signalList'){let p=document['createElement']('button');p[aa(0xd5)]['height']=aa(0xbb),p['style']['position']='relative',p['style']['display']='flex',p['style'][aa(0x114)]='center',p[aa(0xd5)][aa(0x15a)]=aa(0x112),p['style']['boxSizing']=aa(0x170),p[aa(0x11d)]='del',p['onclick']=()=>{const ab=aa;this[ab(0x108)]['setPropertyValue'](m,undefined),this['_propertygrid'][ab(0xc8)]();},n['nodeElem']['insertAdjacentElement'](aa(0x12a),p);const q=Array['isArray'](l)?l:[];let r=document[aa(0xdd)](aa(0x175));r['style']['display']='flex';let s=document['createElement']('span');s['innerText']=q['map']((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.['source']??'')+':'+(u?.['name']??''))['join'](',\x20'),s[aa(0xd5)][aa(0x130)]=aa(0xba),s['style'][aa(0xbc)]='nowrap',s['style'][aa(0x198)]=aa(0x105),s['style']['flexGrow']='1',s['title']=JSON['stringify'](q),r['appendChild'](s);let t=document['createElement'](aa(0x13f));return t[aa(0x11d)]=aa(0x155),t['onclick']=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n[aa(0xf9)]['style'][aa(0xc5)]='flex',r;}else{if(k[aa(0xcd)]===aa(0xd6)){const u=document[aa(0xdd)]('div');u[aa(0xd5)][aa(0x15b)]='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v['language']=aa(0x10c),v['singleRow']=!![],v['style']['cssText']='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v[aa(0x141)]=l??'',v['addEventListener']('code-changed',()=>{const ac=aa;this[ac(0x108)][ac(0xfa)](m,v[ac(0x141)]);}),u['appendChild'](v);const w=document[aa(0xdd)](aa(0x13f));return w['innerText']=aa(0x155),w['title']=aa(0x14c),w[aa(0xd5)][aa(0x15b)]=aa(0xf6),w['onclick']=()=>e({'value':v['code'],'propertyPath':m}),u[aa(0x18e)](w),n['nodeElem']['style'][aa(0xc5)]=aa(0x132),u;}else{if(typeof l==='object'&&l!==null||k['format']==='complex'){let x=document[aa(0xdd)]('button');x['style']['height']=aa(0xbb),x['style'][aa(0x15e)]='relative',x[aa(0xd5)]['display']=aa(0x132),x[aa(0xd5)][aa(0x114)]=aa(0x163),x[aa(0xd5)]['width']='20px',x['style'][aa(0x16a)]='content-box',x[aa(0x11d)]=aa(0x14b),x['onclick']=()=>{const ad=aa;this[ad(0x108)][ad(0xfa)](m,undefined),this[ad(0x108)]['refresh']();},n[aa(0xf9)][aa(0x12e)](aa(0x12a),x);let y=document['createElement'](aa(0x175));y['style'][aa(0xc5)]='flex';let z=document[aa(0xdd)](aa(0xed));if(l)z['innerText']=(l[aa(0x128)]??'')+':\x20'+(l['name']??'');else z[aa(0x11d)]='';z['style']['overflow']='hidden',z['style'][aa(0xbc)]='nowrap',z[aa(0xd5)]['textOverflow']='ellipsis',z['style']['flexGrow']='1',z[aa(0x185)]=JSON['stringify'](l),y['appendChild'](z);let A=document['createElement'](aa(0x13f));return A['innerText']=aa(0x155),A['onclick']=()=>{d({'value':l,'propertyPath':m});},y[aa(0x18e)](A),n['nodeElem'][aa(0xd5)]['display']=aa(0x132),y;}else{let B=document[aa(0xdd)](aa(0x13f));B[aa(0xd5)][aa(0x12b)]='calc(100%\x20-\x206px)',B['style']['position']='relative',B['style'][aa(0xc5)]='flex',B['style'][aa(0x114)]='center',B[aa(0xd5)][aa(0x15a)]='20px',B[aa(0xd5)][aa(0x16a)]='content-box',B['title']=aa(0xc3),B[aa(0xd5)]['opacity']='0.2',B['innerText']=aa(0x155),B['onclick']=()=>{d({'value':l,'propertyPath':m});},n['nodeElem'][aa(0x12e)](aa(0x12a),B),n[aa(0xf9)]['style'][aa(0xc5)]=aa(0x132);}}}}}return null;},this['_propertygrid']['propertyNodeContextMenu']['on'](k=>{const ae=V;ContextMenu[ae(0xef)]([{'title':ae(0xeb),'action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const af=ae,l=prompt('enter\x20value:');l&&(this[af(0x108)][af(0xfa)](k['propertyPath'],l),this[af(0x108)]['refresh']());}},{'title':'remove\x20complex\x20value','action':async()=>{const ag=ae;this['_propertygrid']['setPropertyValue'](k['propertyPath'],undefined),this[ag(0x108)]['refresh']();}}],k['event']);});}['helpClicked'](){const ah=P,d=document['createElement']('iframe');d[ah(0xee)]=simpleScriptEditorHelpHtml,d[ah(0xd5)][ah(0x15b)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[ah(0x1a0)][ah(0xe7)](d,{'title':'Simple\x20Script\x20Editor\x20Help','parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[ah(0x18c)]['emit']();}['toggleCodeView'](){const ai=P;if(!this['_showingCode']){const e=JSON[ai(0xd4)]({'commands':this[ai(0x194)]()},null,0x2);this[ai(0xdf)]['update'](e),this[ai(0x193)](!![]);return;}const d=this[ai(0xd3)]();if(!d)return;this['_showCodeView'](![]),this[ai(0x181)](d);}['_showCodeView'](d){const aj=P;this[aj(0xdf)]['classList'][aj(0x10b)]('visible',d),this[aj(0x17a)][aj(0xbe)][aj(0x10b)]('hidden',d),this[aj(0xde)][aj(0xbe)][aj(0x10b)](aj(0x117),d),this['_addCommandBtn']['disabled']=d,this['_codeToggleBtn']['innerText']=d?aj(0xc0):aj(0x166),this['_showingCode']=d;if(d)requestAnimationFrame(()=>this['_codeView'][aj(0x195)]());}[P(0xd3)](){const ak=P;let d;try{d=JSON[ak(0x179)](this[ak(0xdf)][ak(0xf0)]());}catch(f){return alert('Invalid\x20JSON:\x0a'+f['message']),null;}if(!Array[ak(0x167)](d?.[ak(0xca)]))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}['loadScript'](d){const al=P;this[al(0x13c)]=d;this[al(0x17b)]&&(this['_commandListFancyTree']['destroy'](),this[al(0x17a)]=this[al(0x199)](al(0x178)));let e=[];for(let f of this['_script']['commands']){f=ScriptUpgrades['upgradeScriptCommand'](f),e['push'](this[al(0xe6)](f));}this[al(0x17b)]=new Wunderbaum({...defaultOptions,'element':this['_commandListDiv'],'icon':![],'source':e,'activate':g=>{const am=al;this[am(0x108)][am(0xe9)]=g['node']['data']['data']['item']??null;},'render':g=>{const an=al,h=!!g[an(0x12f)][an(0x10a)][an(0x10a)]?.[an(0x190)];if(g['isNew']){g[an(0xf9)][an(0x13e)]=k=>{return k['preventDefault'](),![];};const j=document['createElement'](an(0xed));j['style'][an(0x15b)]=an(0x182),g['nodeElem'][an(0xb8)](j);if(!h){const k=document[an(0xdd)](an(0x175));k[an(0xd7)]=an(0x184),k['title']=an(0x102),k['innerHTML']=an(0x19b),g[an(0xf9)]['prepend'](k);const l=g[an(0xf9)][an(0x148)],m=document['createElement']('span');m[an(0xd5)]['cssText']='display:inline-block;\x20width:32px;',g['nodeElem']['appendChild'](m);const n=document[an(0xdd)]('div');n[an(0xd7)]=an(0x147);const o=document['createElement'](an(0xec));o[an(0x137)]=assetsPath+an(0x18d),o['title']='Duplicate',o['onclick']=()=>{const ao=an,q=structuredClone(g[ao(0x12f)][ao(0x10a)][ao(0x10a)]['item']),r=g['node'][ao(0x14d)][ao(0xf5)](this[ao(0xe6)](q));r[ao(0xfe)](g[ao(0x12f)],'after');};const p=document[an(0xdd)](an(0xec));p[an(0x137)]=assetsPath+'icons/delete.svg',p['title']='Remove',p[an(0x173)]=()=>g[an(0x12f)][an(0x189)](),n[an(0x11f)](o,p),l[an(0x18e)](n),g[an(0xf9)]['_reservedRowWidth']=j['offsetWidth']+m[an(0x103)];}else g[an(0xf9)]['_reservedRowWidth']=j['offsetWidth'];}const i=g[an(0xf9)]['_reservedRowWidth']??0x0;if(i){const q=g[an(0xf9)]['querySelector'](an(0x16c));if(q){const r=parseFloat(q['style']['width']);if(!isNaN(r))q['style'][an(0x15a)]=Math[an(0x146)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ap=al;if(!this[ap(0xd0)])return![];return this[ap(0x15d)]=g['node'],g[ap(0x13b)]['dataTransfer']['effectAllowed']=ap(0x11b),g[ap(0x13b)][ap(0x12c)]['dropEffect']=ap(0x11b),g[ap(0x13b)]['dataTransfer']['setData'](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{this['_draggedNode']=null;},'dragEnter':g=>{const aq=al,h=g[aq(0x13b)][aq(0x12c)]?.['types']['includes'](SAME_TREE_MOVE_MIME);g[aq(0x13b)][aq(0x12c)][aq(0xbf)]=h?'move':'copy';const i=!!g['node'][aq(0x10a)][aq(0x10a)]?.[aq(0x190)];return i?new Set(['over']):new Set(['before','after']);},'dragOver':g=>{const ar=al,h=g[ar(0x13b)][ar(0x12c)]?.[ar(0x1a2)][ar(0x113)](SAME_TREE_MOVE_MIME);g['event'][ar(0x12c)][ar(0xbf)]=h?ar(0x11b):ar(0x176);},'drop':async g=>{const as=al,h=g[as(0x13b)][as(0x12c)]?.['types']['includes'](SAME_TREE_MOVE_MIME);if(g['region']===as(0x15c)){if(h&&this[as(0x15d)])this[as(0x15d)][as(0xfe)](g[as(0x12f)],'appendChild'),this[as(0x15d)][as(0x134)](as(0x10f),![]);else{const j=g['event'][as(0x12c)]?.['getData']('text/plain');j&&g['node'][as(0xf5)](this['createTreeItem']({'type':j}));}return;}const i=g[as(0x18b)]=='before'?'before':'after';if(h&&this['_draggedNode'])this[as(0x15d)][as(0xfe)](g[as(0x12f)],i),this['_draggedNode'][as(0x134)]('wb-drag-source',![]);else{const k=g['event']['dataTransfer']?.[as(0x150)]('text/plain');if(k){const l={'type':k},m=this['createTreeItem'](l),n=g[as(0x12f)][as(0x14d)][as(0xf5)](m);n[as(0xfe)](g['node'],i);}}}}}),this['_commandListFancyTree'][al(0x162)][al(0xb9)]?.[0x0]?.['setActive']();}[P(0xe6)](d){const at=P;if(d[at(0x11a)]==='If'){const e=d;return e[at(0x161)]??=[],e[at(0xc2)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':at(0x16b)},'children':e[at(0x161)][at(0x153)](f=>this[at(0xe6)](f))},{'title':at(0xe2),'expanded':!![],'data':{'branch':at(0xe2)},'children':e[at(0xc2)]['map'](f=>this[at(0xe6)](f))}]};}return{'title':d[at(0x11a)],'data':{'item':d}};}[P(0x177)](d){const au=P,e=d['data']['data'][au(0x100)];if(e['type']==='If'){const f=d[au(0xb9)]?.[au(0x196)](h=>h['data']['data']?.[au(0x190)]==='true'),g=d['children']?.['find'](h=>h['data']['data']?.['branch']==='else');e['trueCommands']=(f?.[au(0xb9)]??[])['map'](h=>this['nodeToCommand'](h)),e['elseCommands']=(g?.[au(0xb9)]??[])['map'](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const av=P;let e=d;while(e){if(e['data']?.['data']?.[av(0x190)])return e;e=e[av(0x14d)];}return null;}async[P(0x169)](){const aw=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this['scriptCommandsTypeInfo'],this['commandDescriptions']),d[aw(0x185)]='Add\x20Script\x20Command',d[aw(0x127)]['on'](()=>{const ax=aw;if(d[ax(0x123)]){const f={'type':d['selectedType']},g=this[ax(0xe6)](f),h=this['_getBranchContainerNode'](this['_commandListFancyTree']['activeNode']);if(h)h['addChildren'](g);else this[ax(0x17b)][ax(0xf5)](g);}});const e=new AbortController();d[aw(0x118)]['on'](()=>e[aw(0x109)]()),await this['visualizationShell']['openModal'](d,{'title':aw(0x111),'x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}['getScriptCommands'](){const ay=P;if(this['_showingCode']){const e=this['_parseCodeViewScript']();if(e)this[ay(0x181)](e);}let d=this[ay(0x17b)][ay(0x162)]['children'];return d['map'](f=>this['nodeToCommand'](f));}}customElements[P(0x13d)](SimpleScriptEditor['is'],SimpleScriptEditor);