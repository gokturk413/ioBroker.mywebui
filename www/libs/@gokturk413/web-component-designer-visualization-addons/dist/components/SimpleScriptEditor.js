const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=-parseInt(O(0x1a6))/0x1*(parseInt(O(0x19d))/0x2)+-parseInt(O(0x235))/0x3+parseInt(O(0x1c4))/0x4*(-parseInt(O(0x1e8))/0x5)+-parseInt(O(0x17c))/0x6+parseInt(O(0x18e))/0x7*(-parseInt(O(0x1ec))/0x8)+parseInt(O(0x1b3))/0x9+parseInt(O(0x22c))/0xa;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xbe3f2));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0x1d3);export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static [P(0x18b)]=css`
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
  `;static [P(0x16a)]=html`
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
  `;static ['is']='node-projects-visualization-simple-script-editor';['_title'];get['title'](){return this['_title'];}set['title'](d){const Q=P;this[Q(0x19a)]=d;}[P(0x22e)];[P(0x1b5)];['visualizationHandler'];['visualizationShell'];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];['helpRequested']=new TypedEvent();['commandDescriptions']={...nativeScriptCommandDescriptions};[P(0x187)];[P(0x1c0)];['_commandListFancyTree'];['_propertygrid'];[P(0x18a)];['_codeView'];[P(0x20a)];[P(0x185)];[P(0x1e9)]=![];['_dragFromHandle']=![];['_draggedNode']=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this[R(0x1c0)]=this[R(0x1b2)](R(0x224)),this[R(0x1de)]=this[R(0x1b2)]('propertygrid'),this[R(0x18a)]=this['_getDomElement']('splitView'),this[R(0x21d)]=this[R(0x1b2)]('codeView'),this[R(0x20a)]=this['_getDomElement']('codeToggleBtn'),this[R(0x185)]=this[R(0x1b2)](R(0x1f0));const d=this['_getDomElement'](R(0x1ca));d[R(0x1f3)]('mousedown',e=>{const S=R;this['_dragFromHandle']=!!e[S(0x226)]?.[S(0x199)](S(0x1d6));}),document[R(0x1f3)](R(0x196),()=>{const T=R;this[T(0x22b)]=null;},!![]),d[R(0x1f3)]('dragover',e=>{const U=R;e['preventDefault']();if(e[U(0x19b)]){const f=e['dataTransfer']['types']['includes'](SAME_TREE_MOVE_MIME);e['dataTransfer'][U(0x1e2)]=f?'move':U(0x203);}}),d['addEventListener'](R(0x17b),e=>{const V=R;e[V(0x1af)]();const f=e[V(0x19b)]?.['types']['includes'](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[V(0x1ba)]['root']['children'],h=g?.[g['length']-0x1];if(h)this[V(0x22b)]['moveTo'](h,V(0x229));this['_draggedNode']['setClass']('wb-drag-source',![]);}else{const i=e['dataTransfer']?.['getData']('text/plain');if(i){const j={'type':i};this['_commandListFancyTree'][V(0x1c5)][V(0x1fb)](this['createTreeItem'](j));}}}),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptEditor['style']];}async[P(0x1b9)](){const W=P;this[W(0x1c1)](),this['_bindingsParse'](null,!![]),this[W(0x172)]();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this[X(0x1d5)],l['visualizationShell']=this['visualizationShell'],l['serviceContainer']=this['serviceContainer'],l[X(0x1b5)]=this[X(0x1b5)],l['bindableObjectsTarget']=X(0x1fa),l[X(0x223)]=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l['showHead']=![],l['typeName']='IScriptMultiplexValue',l[X(0x18d)]='Complex\x20for\x20\x22'+k[X(0x221)]+'\x22';if(typeof k[X(0x1c3)]===X(0x168))l['selectedObject']=k[X(0x1c3)]??{};else l[X(0x197)]={};l[X(0x1c2)]=n=>{const Y=X;if(n[Y(0x1ee)]=='property')l['setPropertyValue']('source','property');else n[Y(0x1ee)]==Y(0x225)?l[Y(0x1ad)](Y(0x193),'context'):l['setPropertyValue']('source',Y(0x1e5));l['setPropertyValue'](Y(0x228),n['fullName']),l['refresh']();};let m=await this['visualizationShell'][X(0x1c6)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid'][X(0x1ad)](k['propertyPath'],l['selectedObject']),this[X(0x1de)][X(0x1cf)]());},e=async k=>{const Z=W,l=new CodeViewMonaco();l[Z(0x178)]=Z(0x171),l['style']['position']='relative',l['code']=k['value']??'';const m=await this[Z(0x227)]['openConfirmation'](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l[Z(0x205)]),this['_propertygrid'][Z(0x1cf)]());};const f=['signal',W(0x162),'elementProperty','signalInProperty',W(0x211),'parameter','context',W(0x1bd),'complexSignal',W(0x218)],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([W(0x215),'case','catch','class',W(0x1df),W(0x1a9),W(0x1ac),'default','delete','do',W(0x1d9),W(0x1d0),W(0x1ce),'finally',W(0x207),W(0x170),'if',W(0x22d),'in','instanceof','new',W(0x202),'super','switch','this',W(0x1ab),W(0x1d8),'typeof','var',W(0x1bf),'while',W(0x23d),W(0x16c),'let','static','enum','await','implements',W(0x22a),'protected',W(0x1f8),'private','public','null',W(0x18c),'false',W(0x175),'arguments','eval']),i={'signal':W(0x21b),'property':'read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','elementProperty':W(0x1bb),'signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':W(0x243),'parameter':'a\x20parameter\x20you\x20hand\x20over','context':W(0x212),'complexString':W(0x166),'complexSignal':'read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','expression':W(0x1a4)};let j=async k=>{const a0=W,l=(k[a0(0x1c3)]??[])['map'](E=>({...E})),m=E=>{const a1=a0,F=(l[E]['varName']??'')['trim']();if(!F)return null;if(!g['test'](F))return'\x22'+F+a1(0x174);if(h['has'](F))return'\x22'+F+a1(0x1dd);if(l['some']((G,H)=>H!==E&&(G['varName']??'')['trim']()===F))return'\x22'+F+a1(0x20d);return null;},n=a0(0x240),o=document[a0(0x247)](a0(0x163));o[a0(0x18b)][a0(0x1b4)]=a0(0x1a1);const p=document['createElement'](a0(0x163));p['style']['cssText']='display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;';const q=document[a0(0x247)]('span');q['textContent']='Name',q['style']['cssText']='flex:0\x200\x20120px;';const r=document['createElement'](a0(0x1a2));r['textContent']=a0(0x232),r['style'][a0(0x1b4)]=a0(0x1ff);const s=document['createElement'](a0(0x1a2));s[a0(0x1d1)]=a0(0x21a),s[a0(0x18b)]['cssText']='flex:1\x201\x20auto;';const t=document['createElement'](a0(0x1a2));t[a0(0x18b)][a0(0x1b4)]=a0(0x1b7),p[a0(0x244)](q,r,s,t),o['appendChild'](p);const u=document[a0(0x247)](a0(0x163));u[a0(0x18b)][a0(0x1b4)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o[a0(0x164)](u);const v=document[a0(0x247)](a0(0x163));v[a0(0x18b)][a0(0x1b4)]=a0(0x20f);const w=document['createElement']('div');w[a0(0x18b)][a0(0x1b4)]=a0(0x1b8);const x=document['createElement']('div');x['style'][a0(0x1b4)]='color:#333;\x20white-space:pre-line;',v['append'](w,x);const y=E=>{const a2=a0;w[a2(0x1d1)]=a2(0x245)+E,x['textContent']=i[E]??'';},z=[],A=()=>{const a3=a0;l[a3(0x16e)]((E,F)=>{const a4=a3,G=z[F];if(!G)return;const H=m(F);G[a4(0x18d)]=H??a4(0x220)+F+a4(0x1cc),G[a4(0x18b)][a4(0x22f)]=H?'#c0392b':'',G[a4(0x18b)]['backgroundColor']=H?'#fdecea':'';});},B=()=>{const a5=a0;u['innerHTML']='',z[a5(0x213)]=0x0,l[a5(0x16e)]((E,F)=>{const a6=a5,G=document[a6(0x247)](a6(0x163));G[a6(0x18b)][a6(0x1b4)]=a6(0x19e);const H=document['createElement']('input');H['value']=E[a6(0x181)]??'',H[a6(0x230)]='__'+F,H['style'][a6(0x1b4)]=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H[a6(0x208)]=()=>{const a7=a6;E[a7(0x181)]=H['value']||undefined,A();},z[a6(0x16d)](H),G['appendChild'](H);const I=document['createElement'](a6(0x19c));I[a6(0x18b)][a6(0x1b4)]=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document[a6(0x247)]('option');N[a6(0x1c3)]=M,N[a6(0x1d1)]=M;if(E[a6(0x193)]===M)N[a6(0x17f)]=!![];I['appendChild'](N);}I['onchange']=()=>{E['source']=I['value'],y(I['value']);},I[a6(0x234)]=()=>y(I['value']),G['appendChild'](I);const J=document[a6(0x247)]('input');J['value']=E['name']??'',J[a6(0x230)]='e.g.\x20srm.rbg{__tagRoot}.error',J['style']['cssText']=n+'\x20flex:1\x201\x20auto;',J['oninput']=()=>{const a8=a6;E['name']=J[a8(0x1c3)];},G[a6(0x164)](J);const K=document['createElement']('button');K[a6(0x18d)]='Remove\x20signal',K[a6(0x18b)]['cssText']=n+a6(0x1ea);const L=document['createElement'](a6(0x214));L['src']=assetsPath+a6(0x182),L[a6(0x18b)][a6(0x1b4)]='width:12px;\x20height:12px;',K[a6(0x164)](L),K[a6(0x1f4)]=()=>{l['splice'](F,0x1),B();},G[a6(0x164)](K),u['appendChild'](G);}),A();};B();const C=document['createElement']('button');C['textContent']=a0(0x19f),C['style']['cssText']=n+a0(0x17d),C['onclick']=()=>{l['push']({'source':'signal','name':''}),B();},o['appendChild'](C),y(l[0x0]?.['source']??a0(0x1e5)),o[a0(0x164)](v);const D=await this[a0(0x227)][a0(0x1c6)](o,{'title':'Edit\x20signals','x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x1de)][a0(0x1ad)](k[a0(0x221)],l),this[a0(0x1de)][a0(0x1cf)]());};this[W(0x1de)][W(0x1d5)]=this['visualizationHandler'],this[W(0x1de)][W(0x227)]=this[W(0x227)],this['_propertygrid'][W(0x22e)]=this[W(0x22e)],this[W(0x1de)]['instanceServiceContainer']=this['instanceServiceContainer'],this['_propertygrid'][W(0x1c9)]=W(0x1fa),this['_propertygrid'][W(0x204)](0x82),this['_propertygrid'][W(0x223)]=(k,l)=>{const a9=W,m=typeInfoFromJsonSchema(this[a9(0x217)],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m[a9(0x1f9)]=m[a9(0x1f9)]['filter'](n=>n[a9(0x228)]!==a9(0x23e)&&n['name']!=='elseCommands')),m;},this[W(0x1de)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const aa=W;if(!k['specialAllreadyAdded']){k[aa(0x1d7)]=!![];if(k['format']==='collection'){}else{if(k['format']===aa(0x1db)){let p=document['createElement']('button');p[aa(0x18b)][aa(0x1a0)]='calc(100%\x20-\x206px)',p['style'][aa(0x161)]='relative',p[aa(0x18b)]['display']='flex',p['style'][aa(0x23c)]=aa(0x241),p[aa(0x18b)][aa(0x236)]='20px',p[aa(0x18b)]['boxSizing']='content-box',p['innerText']=aa(0x1f7),p[aa(0x1f4)]=()=>{const ab=aa;this[ab(0x1de)][ab(0x1ad)](m,undefined),this[ab(0x1de)]['refresh']();},n['nodeElem']['insertAdjacentElement']('afterbegin',p);const q=Array['isArray'](l)?l:[];let r=document['createElement'](aa(0x163));r[aa(0x18b)]['display']=aa(0x1a3);let s=document['createElement']('span');s['innerText']=q['map']((u,w)=>(u?.[aa(0x181)]||'__'+w)+':\x20'+(u?.[aa(0x193)]??'')+':'+(u?.['name']??''))['join'](',\x20'),s[aa(0x18b)]['overflow']='hidden',s['style']['whiteSpace']=aa(0x201),s[aa(0x18b)][aa(0x1be)]='ellipsis',s['style'][aa(0x188)]='1',s['title']=JSON[aa(0x176)](q),r['appendChild'](s);let t=document[aa(0x247)](aa(0x195));return t[aa(0x1f5)]='...',t['onclick']=()=>{j({'value':q,'propertyPath':m});},r[aa(0x164)](t),n[aa(0x21f)][aa(0x18b)]['display']='flex',r;}else{if(k[aa(0x1ae)]===aa(0x20c)){const u=document[aa(0x247)]('div');u['style'][aa(0x1b4)]='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v['language']=aa(0x171),v['singleRow']=!![],v['style']['cssText']='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v[aa(0x205)]=l??'',v['addEventListener'](aa(0x219),()=>{const ac=aa;this['_propertygrid'][ac(0x1ad)](m,v[ac(0x205)]);}),u[aa(0x164)](v);const w=document[aa(0x247)](aa(0x195));return w[aa(0x1f5)]=aa(0x198),w[aa(0x18d)]=aa(0x239),w['style']['cssText']=aa(0x233),w[aa(0x1f4)]=()=>e({'value':v[aa(0x205)],'propertyPath':m}),u[aa(0x164)](w),n['nodeElem'][aa(0x18b)][aa(0x1b0)]=aa(0x1a3),u;}else{if(typeof l===aa(0x168)&&l!==null||k['format']===aa(0x200)){let x=document[aa(0x247)]('button');x[aa(0x18b)]['height']='calc(100%\x20-\x206px)',x[aa(0x18b)]['position']='relative',x[aa(0x18b)][aa(0x1b0)]='flex',x[aa(0x18b)][aa(0x23c)]='center',x['style']['width']=aa(0x189),x[aa(0x18b)]['boxSizing']=aa(0x186),x['innerText']=aa(0x1f7),x[aa(0x1f4)]=()=>{const ad=aa;this[ad(0x1de)]['setPropertyValue'](m,undefined),this['_propertygrid'][ad(0x1cf)]();},n['nodeElem'][aa(0x237)](aa(0x238),x);let y=document['createElement']('div');y['style']['display']='flex';let z=document['createElement'](aa(0x1a2));if(l)z[aa(0x1f5)]=(l['source']??'')+':\x20'+(l['name']??'');else z['innerText']='';z['style']['overflow']=aa(0x1fe),z[aa(0x18b)][aa(0x173)]=aa(0x201),z[aa(0x18b)]['textOverflow']='ellipsis',z['style']['flexGrow']='1',z[aa(0x18d)]=JSON['stringify'](l),y[aa(0x164)](z);let A=document[aa(0x247)](aa(0x195));return A['innerText']=aa(0x198),A['onclick']=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n['nodeElem']['style']['display']=aa(0x1a3),y;}else{let B=document['createElement']('button');B[aa(0x18b)]['height']=aa(0x1a7),B['style'][aa(0x161)]='relative',B[aa(0x18b)]['display']='flex',B['style']['justifyContent']='center',B['style'][aa(0x236)]='20px',B['style'][aa(0x246)]=aa(0x186),B[aa(0x18d)]=aa(0x1cd),B[aa(0x18b)][aa(0x160)]=aa(0x180),B['innerText']='...',B[aa(0x1f4)]=()=>{d({'value':l,'propertyPath':m});},n[aa(0x21f)]['insertAdjacentElement'](aa(0x238),B),n[aa(0x21f)][aa(0x18b)]['display']=aa(0x1a3);}}}}}return null;},this[W(0x1de)][W(0x231)]['on'](k=>{const ae=W;ContextMenu[ae(0x183)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':ae(0x192),'action':async()=>{const af=ae,l=prompt(af(0x23b));l&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l),this[af(0x1de)]['refresh']());}},{'title':ae(0x1a8),'action':async()=>{const ag=ae;this[ag(0x1de)][ag(0x1ad)](k['propertyPath'],undefined),this[ag(0x1de)][ag(0x1cf)]();}}],k['event']);});}[P(0x1eb)](){const ah=P,d=document[ah(0x247)](ah(0x1f2));d['srcdoc']=simpleScriptEditorHelpHtml,d['style'][ah(0x1b4)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['visualizationShell']['openModal'](d,{'title':ah(0x21c),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this['helpRequested']['emit']();}['toggleCodeView'](){const ai=P;if(!this[ai(0x1e9)]){const e=JSON['stringify']({'commands':this[ai(0x165)]()},null,0x2);this[ai(0x21d)]['update'](e),this['_showCodeView'](!![]);return;}const d=this['_parseCodeViewScript']();if(!d)return;this['_showCodeView'](![]),this[ai(0x1d4)](d);}['_showCodeView'](d){const aj=P;this[aj(0x21d)][aj(0x1d2)][aj(0x23f)](aj(0x1c7),d),this[aj(0x1c0)]['classList']['toggle'](aj(0x1fe),d),this['_splitView'][aj(0x1d2)]['toggle']('code-mode',d),this[aj(0x185)][aj(0x1da)]=d,this['_codeToggleBtn'][aj(0x1f5)]=d?'Visual':aj(0x1aa),this[aj(0x1e9)]=d;if(d)requestAnimationFrame(()=>this['_codeView'][aj(0x1f1)]());}[P(0x177)](){const ak=P;let d;try{d=JSON['parse'](this['_codeView']['getText']());}catch(f){return alert('Invalid\x20JSON:\x0a'+f['message']),null;}if(!Array['isArray'](d?.[ak(0x191)]))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}['loadScript'](d){const al=P;this[al(0x187)]=d;this[al(0x1ba)]&&(this['_commandListFancyTree']['destroy'](),this[al(0x1c0)]=this['_getDomElement'](al(0x224)));let e=[];for(let f of this['_script'][al(0x191)]){f=ScriptUpgrades['upgradeScriptCommand'](f),e['push'](this['createTreeItem'](f));}this[al(0x1ba)]=new Wunderbaum({...defaultOptions,'element':this[al(0x1c0)],'icon':![],'source':e,'activate':g=>{const am=al;this[am(0x1de)][am(0x197)]=g['node'][am(0x1c8)][am(0x1c8)][am(0x1e1)]??null;},'render':g=>{const an=al,h=!!g['node']['data']['data']?.[an(0x179)];if(g[an(0x206)]){g['nodeElem']['oncontextmenu']=k=>{return k['preventDefault'](),![];};const j=document[an(0x247)](an(0x1a2));j['style']['cssText']=an(0x17e),g[an(0x21f)]['prepend'](j);if(!h){const k=document['createElement'](an(0x163));k[an(0x16f)]='drag-handle',k['title']=an(0x1e3),k['innerHTML']='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g[an(0x21f)][an(0x1cb)](k);const l=g[an(0x21f)]['parentElement'],m=document['createElement']('span');m['style'][an(0x1b4)]=an(0x190),g[an(0x21f)]['appendChild'](m);const n=document['createElement']('div');n[an(0x16f)]='cmd';const o=document[an(0x247)](an(0x214));o[an(0x1a5)]=assetsPath+an(0x1ed),o['title']='Duplicate',o['onclick']=()=>{const ao=an,q=structuredClone(g['node']['data'][ao(0x1c8)][ao(0x1e1)]),r=g['node']['parent'][ao(0x1fb)](this[ao(0x23a)](q));r[ao(0x21e)](g['node'],'after');};const p=document['createElement']('img');p['src']=assetsPath+an(0x182),p['title']='Remove',p[an(0x1f4)]=()=>g['node'][an(0x1fc)](),n[an(0x244)](o,p),l[an(0x164)](n),g[an(0x21f)][an(0x1bc)]=j[an(0x169)]+m['offsetWidth'];}else g[an(0x21f)]['_reservedRowWidth']=j['offsetWidth'];}const i=g[an(0x21f)]['_reservedRowWidth']??0x0;if(i){const q=g[an(0x21f)]['querySelector']('span.wb-title');if(q){const r=parseFloat(q['style'][an(0x236)]);if(!isNaN(r))q['style'][an(0x236)]=Math[an(0x1e7)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ap=al;if(!this['_dragFromHandle'])return![];return this[ap(0x22b)]=g['node'],g[ap(0x211)]['dataTransfer']['effectAllowed']='move',g['event']['dataTransfer'][ap(0x1e2)]=ap(0x216),g['event'][ap(0x19b)][ap(0x18f)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const aq=al;this[aq(0x22b)]=null;},'dragEnter':g=>{const ar=al,h=g[ar(0x211)][ar(0x19b)]?.['types']['includes'](SAME_TREE_MOVE_MIME);g[ar(0x211)]['dataTransfer']['dropEffect']=h?ar(0x216):'copy';const i=!!g[ar(0x1fd)]['data'][ar(0x1c8)]?.['branch'];return i?new Set(['over']):new Set([ar(0x1e4),'after']);},'dragOver':g=>{const as=al,h=g['event']['dataTransfer']?.[as(0x242)][as(0x1f6)](SAME_TREE_MOVE_MIME);g[as(0x211)][as(0x19b)][as(0x1e2)]=h?as(0x216):'copy';},'drop':async g=>{const at=al,h=g['event'][at(0x19b)]?.['types'][at(0x1f6)](SAME_TREE_MOVE_MIME);if(g[at(0x1e6)]===at(0x17a)){if(h&&this[at(0x22b)])this[at(0x22b)]['moveTo'](g['node'],'appendChild'),this[at(0x22b)][at(0x1ef)]('wb-drag-source',![]);else{const j=g['event']['dataTransfer']?.[at(0x1b6)]('text/plain');j&&g[at(0x1fd)]['addChildren'](this['createTreeItem']({'type':j}));}return;}const i=g['region']==at(0x1e4)?'before':'after';if(h&&this[at(0x22b)])this['_draggedNode']['moveTo'](g['node'],i),this[at(0x22b)][at(0x1ef)]('wb-drag-source',![]);else{const k=g['event']['dataTransfer']?.[at(0x1b6)]('text/plain');if(k){const l={'type':k},m=this['createTreeItem'](l),n=g['node'][at(0x20e)][at(0x1fb)](m);n['moveTo'](g[at(0x1fd)],i);}}}}}),this['_commandListFancyTree'][al(0x1c5)]['children']?.[0x0]?.['setActive']();}[P(0x23a)](d){const au=P;if(d[au(0x210)]==='If'){const e=d;return e['trueCommands']??=[],e['elseCommands']??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':'true'},'children':e['trueCommands'][au(0x167)](f=>this['createTreeItem'](f))},{'title':'else','expanded':!![],'data':{'branch':au(0x1d9)},'children':e[au(0x222)]['map'](f=>this[au(0x23a)](f))}]};}return{'title':d['type'],'data':{'item':d}};}['nodeToCommand'](d){const av=P,e=d['data']['data'][av(0x1e1)];if(e[av(0x210)]==='If'){const f=d[av(0x209)]?.['find'](h=>h[av(0x1c8)][av(0x1c8)]?.[av(0x179)]==='true'),g=d['children']?.['find'](h=>h['data']['data']?.['branch']===av(0x1d9));e['trueCommands']=(f?.['children']??[])[av(0x167)](h=>this[av(0x194)](h)),e['elseCommands']=(g?.[av(0x209)]??[])[av(0x167)](h=>this[av(0x194)](h));}return e;}[P(0x16b)](d){const aw=P;let e=d;while(e){if(e[aw(0x1c8)]?.['data']?.[aw(0x179)])return e;e=e['parent'];}return null;}async[P(0x1dc)](){const ax=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this['scriptCommandsTypeInfo'],this['commandDescriptions']),d[ax(0x18d)]=ax(0x20b),d['commandTypeChosen']['on'](()=>{const ay=ax;if(d['selectedType']){const f={'type':d[ay(0x184)]},g=this[ay(0x23a)](f),h=this['_getBranchContainerNode'](this['_commandListFancyTree'][ay(0x1b1)]);if(h)h[ay(0x1fb)](g);else this[ay(0x1ba)]['addChildren'](g);}});const e=new AbortController();d['closeRequested']['on'](()=>e['abort']()),await this[ax(0x227)]['openModal'](d,{'title':ax(0x20b),'x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e[ax(0x1e5)]});}['getScriptCommands'](){const az=P;if(this['_showingCode']){const e=this[az(0x177)]();if(e)this['loadScript'](e);}let d=this[az(0x1ba)]['root'][az(0x209)];return d[az(0x167)](f=>this[az(0x194)](f));}}function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}function a(){const aA=['property','div','appendChild','getScriptCommands','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','map','object','offsetWidth','template','_getBranchContainerNode','yield','push','forEach','className','function','javascript','_assignEvents','whiteSpace','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','undefined','stringify','_parseCodeViewScript','language','branch','over','drop','3657126ysMOcH','\x20align-self:flex-start;\x20padding:0\x208px;','display:inline-block;\x20width:24px;','selected','0.2','varName','icons/delete.svg','show','selectedType','_addCommandBtn','content-box','_script','flexGrow','20px','_splitView','style','true','title','70YXionO','setData','display:inline-block;\x20width:32px;','commands','edit\x20string','source','nodeToCommand','button','dragend','selectedObject','...','closest','_title','dataTransfer','select','2uLSeZz','display:flex;\x20align-items:center;\x20gap:4px;','+\x20Add\x20signal','height','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','span','flex','js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object','src','1260939XJxdVr','calc(100%\x20-\x206px)','remove\x20complex\x20value','continue','Code','throw','debugger','setPropertyValue','format','preventDefault','display','activeNode','_getDomElement','6870780UheANk','cssText','instanceServiceContainer','getData','flex:0\x200\x2022px;','font-weight:bold;\x20margin-bottom:2px;','ready','_commandListFancyTree','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','_reservedRowWidth','complexString','textOverflow','void','_commandListDiv','_parseAttributesToProperties','bindingDoubleClicked','value','25572fMEGng','root','openConfirmation','visible','data','bindableObjectsTarget','listContent','prepend','\x20if\x20empty)','complex\x20property\x20value','extends','refresh','export','textContent','classList','application/x-simple-script-move','loadScript','visualizationHandler','.drag-handle','specialAllreadyAdded','try','else','disabled','signalList','addCommand','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','_propertygrid','const','define','item','dropEffect','Drag\x20to\x20reorder','before','signal','region','max','425QqwaWM','_showingCode','\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;','helpClicked','913112PAWyMc','icons/copy.svg','bindabletype','setClass','addCommandBtn','activated','iframe','addEventListener','onclick','innerText','includes','del','interface','properties','script','addChildren','remove','node','hidden','flex:0\x200\x20130px;','complex','nowrap','return','copy','setNameColumnWidth','code','isNew','for','oninput','children','_codeToggleBtn','Add\x20Script\x20Command','formula','\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','parent','flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;','type','event','a\x20value\x20of\x20the\x20context','length','img','break','move','scriptCommandsTypeInfo','expression','code-changed','Signal','read\x20the\x20value\x20from\x20a\x20Signal','Simple\x20Script\x20Editor\x20Help','_codeView','moveTo','nodeElem','Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','propertyPath','elseCommands','getTypeInfo','commandList','context','target','visualizationShell','name','after','package','_draggedNode','50728490AGYkrf','import','serviceContainer','borderColor','placeholder','propertyNodeContextMenu','Typ','flex:0\x200\x2028px;\x20width:20px;','onfocus','4505292mWVbIW','width','insertAdjacentElement','afterbegin','Open\x20in\x20larger\x20editor','createTreeItem','enter\x20value:','justifyContent','with','trueCommands','toggle','height:22px;\x20box-sizing:border-box;\x20font-size:12px;','center','types','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','append','Typ:\x20','boxSizing','createElement','opacity','position'];a=function(){return aA;};return a();}customElements[P(0x1e0)](SimpleScriptEditor['is'],SimpleScriptEditor);