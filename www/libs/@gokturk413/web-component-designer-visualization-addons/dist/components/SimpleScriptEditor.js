const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0xf0))/0x1*(-parseInt(O(0x160))/0x2)+parseInt(O(0xe5))/0x3+-parseInt(O(0x195))/0x4*(parseInt(O(0xf7))/0x5)+-parseInt(O(0x11d))/0x6+-parseInt(O(0x17c))/0x7+-parseInt(O(0x16e))/0x8*(parseInt(O(0x1ca))/0x9)+parseInt(O(0xf8))/0xa*(parseInt(O(0x196))/0xb);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x46f4b));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0x133);function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static ['is']='node-projects-visualization-simple-script-editor';[P(0x109)];get['title'](){const Q=P;return this[Q(0x109)];}set['title'](d){this['_title']=d;}['serviceContainer'];['instanceServiceContainer'];[P(0x186)];['visualizationShell'];[P(0x16a)];['propertiesTypeInfo'];[P(0x16d)]=new TypedEvent();['commandDescriptions']={...nativeScriptCommandDescriptions};['_script'];[P(0x127)];[P(0xd8)];['_propertygrid'];['_splitView'];['_codeView'];[P(0x124)];['_addCommandBtn'];[P(0x10c)]=![];[P(0x1c2)]=![];['_draggedNode']=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this['_commandListDiv']=this['_getDomElement'](R(0x1c5)),this[R(0x149)]=this[R(0x15c)](R(0x1cb)),this[R(0xf5)]=this[R(0x15c)]('splitView'),this[R(0x125)]=this[R(0x15c)](R(0x18c)),this['_codeToggleBtn']=this[R(0x15c)](R(0x176)),this[R(0xde)]=this[R(0x15c)]('addCommandBtn');const d=this['_getDomElement']('listContent');d[R(0x18f)]('mousedown',e=>{const S=R;this[S(0x1c2)]=!!e['target']?.['closest']('.drag-handle');}),document[R(0x18f)](R(0xd7),()=>{const T=R;this[T(0x128)]=null;},!![]),d[R(0x18f)]('dragover',e=>{const U=R;e[U(0x148)]();if(e[U(0x173)]){const f=e[U(0x173)][U(0x15e)]['includes'](SAME_TREE_MOVE_MIME);e['dataTransfer'][U(0x101)]=f?'move':'copy';}}),d[R(0x18f)]('drop',e=>{const V=R;e[V(0x148)]();const f=e[V(0x173)]?.[V(0x15e)]['includes'](SAME_TREE_MOVE_MIME);if(f&&this[V(0x128)]){const g=this[V(0xd8)]['root'][V(0x194)],h=g?.[g['length']-0x1];if(h)this[V(0x128)][V(0x110)](h,V(0x119));this[V(0x128)][V(0x191)](V(0xf3),![]);}else{const i=e[V(0x173)]?.[V(0xf6)](V(0x1b3));if(i){const j={'type':i};this['_commandListFancyTree'][V(0x161)][V(0xdb)](this[V(0x1c8)](j));}}}),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptEditor['style']];}async[P(0x1cc)](){const W=P;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[W(0x17a)]();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this['visualizationHandler'],l[X(0x16c)]=this['visualizationShell'],l[X(0x107)]=this[X(0x107)],l[X(0xff)]=this['instanceServiceContainer'],l['bindableObjectsTarget']=X(0x157),l['getTypeInfo']=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l[X(0x108)]=![],l['typeName']=X(0x10d),l['title']=X(0x1ac)+k['propertyPath']+'\x22';if(typeof k['value']==='object')l[X(0x168)]=k['value']??{};else l[X(0x168)]={};l['bindingDoubleClicked']=n=>{const Y=X;if(n['bindabletype']=='property')l['setPropertyValue']('source','property');else n['bindabletype']==Y(0x179)?l[Y(0x169)](Y(0x180),Y(0x179)):l['setPropertyValue']('source',Y(0x1c6));l[Y(0x169)](Y(0x1a0),n['fullName']),l[Y(0x187)]();};let m=await this[X(0x16c)]['openConfirmation'](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid'][X(0x169)](k[X(0x117)],l['selectedObject']),this['_propertygrid'][X(0x187)]());},e=async k=>{const Z=W,l=new CodeViewMonaco();l[Z(0x19d)]=Z(0x102),l[Z(0x136)][Z(0x12a)]='relative',l[Z(0x156)]=k['value']??'';const m=await this['visualizationShell'][Z(0xed)](l,{'title':Z(0x12c),'x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[Z(0x149)]['setPropertyValue'](k[Z(0x117)],l['code']),this[Z(0x149)][Z(0x187)]());};const f=['signal','property',W(0x185),W(0x193),W(0x1ae),W(0xf1),'context',W(0x153),W(0x11c),W(0x114)],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([W(0xe2),'case',W(0x1b1),W(0xe0),'const',W(0x19f),'debugger',W(0xd6),W(0x1c3),'do',W(0x139),'export','extends','finally',W(0x120),'function','if','import','in','instanceof','new',W(0xe6),W(0x1ba),W(0x19c),'this','throw','try',W(0x164),W(0x1c4),W(0x1cd),W(0xfc),W(0x1b2),'yield','let','static',W(0xe7),'await','implements','package','protected',W(0x14f),'private',W(0x18a),W(0x14b),'true',W(0x174),'undefined','arguments','eval']),i={'signal':'read\x20the\x20value\x20from\x20a\x20Signal','property':W(0x143),'elementProperty':W(0x130),'signalInProperty':W(0x151),'event':W(0x1a4),'parameter':W(0x16b),'context':W(0x15a),'complexString':W(0x140),'complexSignal':W(0x126),'expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const a0=W,l=(k['value']??[])[a0(0x162)](E=>({...E})),m=E=>{const a1=a0,F=(l[E][a1(0x15d)]??'')['trim']();if(!F)return null;if(!g[a1(0x19e)](F))return'\x22'+F+'\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.';if(h[a1(0x1aa)](F))return'\x22'+F+a1(0x100);if(l['some']((G,H)=>H!==E&&(G[a1(0x15d)]??'')[a1(0x123)]()===F))return'\x22'+F+a1(0x122);return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[a0(0x116)](a0(0x197));o[a0(0x136)]['cssText']='display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;';const p=document['createElement'](a0(0x197));p['style'][a0(0x166)]=a0(0x17f);const q=document['createElement'](a0(0x144));q[a0(0x17e)]='Name',q[a0(0x136)]['cssText']='flex:0\x200\x20120px;';const r=document['createElement'](a0(0x144));r[a0(0x17e)]='Typ',r['style'][a0(0x166)]=a0(0x138);const s=document['createElement'](a0(0x144));s[a0(0x17e)]='Signal',s[a0(0x136)][a0(0x166)]='flex:1\x201\x20auto;';const t=document[a0(0x116)]('span');t[a0(0x136)][a0(0x166)]='flex:0\x200\x2022px;',p[a0(0x1ad)](q,r,s,t),o['appendChild'](p);const u=document['createElement'](a0(0x197));u['style']['cssText']='display:flex;\x20flex-direction:column;\x20gap:4px;',o[a0(0x1be)](u);const v=document[a0(0x116)]('div');v[a0(0x136)]['cssText']='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0x116)](a0(0x197));w[a0(0x136)]['cssText']='font-weight:bold;\x20margin-bottom:2px;';const x=document[a0(0x116)](a0(0x197));x[a0(0x136)]['cssText']=a0(0x11a),v['append'](w,x);const y=E=>{const a2=a0;w['textContent']=a2(0x103)+E,x[a2(0x17e)]=i[E]??'';},z=[],A=()=>{const a3=a0;l[a3(0xfb)]((E,F)=>{const a4=a3,G=z[F];if(!G)return;const H=m(F);G['title']=H??a4(0x1a2)+F+a4(0x1c0),G['style'][a4(0x1b6)]=H?'#c0392b':'',G['style']['backgroundColor']=H?a4(0x178):'';});},B=()=>{const a5=a0;u[a5(0x199)]='',z[a5(0x192)]=0x0,l['forEach']((E,F)=>{const a6=a5,G=document[a6(0x116)]('div');G[a6(0x136)][a6(0x166)]=a6(0x1b9);const H=document['createElement']('input');H[a6(0x13b)]=E['varName']??'',H['placeholder']='__'+F,H[a6(0x136)][a6(0x166)]=n+'\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;',H['oninput']=()=>{const a7=a6;E[a7(0x15d)]=H[a7(0x13b)]||undefined,A();},z['push'](H),G[a6(0x1be)](H);const I=document['createElement'](a6(0x1c1));I['style']['cssText']=n+a6(0x171);for(const M of f){const N=document[a6(0x116)]('option');N[a6(0x13b)]=M,N['textContent']=M;if(E[a6(0x180)]===M)N[a6(0x129)]=!![];I['appendChild'](N);}I[a6(0x1b7)]=()=>{const a8=a6;E[a8(0x180)]=I['value'],y(I['value']);},I['onfocus']=()=>y(I['value']),G['appendChild'](I);const J=document['createElement']('input');J['value']=E[a6(0x1a0)]??'',J[a6(0x154)]=a6(0x145),J[a6(0x136)]['cssText']=n+a6(0xec),J['oninput']=()=>{const a9=a6;E['name']=J[a9(0x13b)];},G['appendChild'](J);const K=document[a6(0x116)]('button');K[a6(0x181)]=a6(0x131),K['style'][a6(0x166)]=n+a6(0x19a);const L=document['createElement']('img');L[a6(0x105)]=assetsPath+a6(0x18e),L[a6(0x136)][a6(0x166)]='width:12px;\x20height:12px;',K['appendChild'](L),K[a6(0x1ab)]=()=>{const aa=a6;l[aa(0xe1)](F,0x1),B();},G['appendChild'](K),u['appendChild'](G);}),A();};B();const C=document[a0(0x116)]('button');C[a0(0x17e)]='+\x20Add\x20signal',C[a0(0x136)]['cssText']=n+'\x20align-self:flex-start;\x20padding:0\x208px;',C['onclick']=()=>{const ab=a0;l[ab(0xee)]({'source':'signal','name':''}),B();},o[a0(0x1be)](C),y(l[0x0]?.[a0(0x180)]??'signal'),o[a0(0x1be)](v);const D=await this[a0(0x16c)]['openConfirmation'](o,{'title':a0(0x172),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x149)]['setPropertyValue'](k[a0(0x117)],l),this[a0(0x149)][a0(0x187)]());};this['_propertygrid']['visualizationHandler']=this[W(0x186)],this['_propertygrid']['visualizationShell']=this['visualizationShell'],this['_propertygrid']['serviceContainer']=this['serviceContainer'],this[W(0x149)][W(0xff)]=this['instanceServiceContainer'],this[W(0x149)]['bindableObjectsTarget']=W(0x157),this['_propertygrid'][W(0x12d)](0x82),this['_propertygrid'][W(0xfd)]=(k,l)=>{const ac=W,m=typeInfoFromJsonSchema(this[ac(0x16a)],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m[ac(0x1b5)]['filter'](n=>n['name']!=='trueCommands'&&n['name']!==ac(0x13f))),m;},this[W(0x149)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const ad=W;if(!k[ad(0x19b)]){k['specialAllreadyAdded']=!![];if(k['format']===ad(0x1a7)){}else{if(k['format']===ad(0x10e)){let p=document['createElement']('button');p[ad(0x136)][ad(0xf9)]='calc(100%\x20-\x206px)',p[ad(0x136)][ad(0x12a)]='relative',p['style']['display']=ad(0x175),p[ad(0x136)][ad(0x1b8)]=ad(0x10f),p[ad(0x136)][ad(0x10a)]='20px',p['style']['boxSizing']='content-box',p[ad(0x15f)]=ad(0x150),p[ad(0x1ab)]=()=>{const ae=ad;this['_propertygrid'][ae(0x169)](m,undefined),this[ae(0x149)]['refresh']();},n['nodeElem']['insertAdjacentElement'](ad(0x11e),p);const q=Array[ad(0x198)](l)?l:[];let r=document['createElement'](ad(0x197));r[ad(0x136)][ad(0x1a1)]=ad(0x175);let s=document[ad(0x116)](ad(0x144));s[ad(0x15f)]=q['map']((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.['source']??'')+':'+(u?.['name']??''))[ad(0x118)](',\x20'),s[ad(0x136)]['overflow']=ad(0x10b),s['style']['whiteSpace']='nowrap',s[ad(0x136)][ad(0x113)]='ellipsis',s[ad(0x136)]['flexGrow']='1',s[ad(0x181)]=JSON[ad(0x17b)](q),r['appendChild'](s);let t=document[ad(0x116)](ad(0x189));return t[ad(0x15f)]=ad(0x13e),t[ad(0x1ab)]=()=>{j({'value':q,'propertyPath':m});},r[ad(0x1be)](t),n[ad(0x115)]['style']['display']=ad(0x175),r;}else{if(k[ad(0x1a8)]===ad(0x184)){const u=document['createElement'](ad(0x197));u[ad(0x136)]['cssText']=ad(0x183);const v=new CodeViewMonaco();v['language']='javascript',v['singleRow']=!![],v[ad(0x136)]['cssText']=ad(0x13a),v[ad(0x156)]=l??'',v[ad(0x18f)](ad(0xeb),()=>{const af=ad;this[af(0x149)]['setPropertyValue'](m,v[af(0x156)]);}),u[ad(0x1be)](v);const w=document[ad(0x116)]('button');return w['innerText']='...',w['title']=ad(0xd9),w[ad(0x136)][ad(0x166)]=ad(0xdf),w['onclick']=()=>e({'value':v['code'],'propertyPath':m}),u[ad(0x1be)](w),n[ad(0x115)][ad(0x136)][ad(0x1a1)]=ad(0x175),u;}else{if(typeof l==='object'&&l!==null||k['format']===ad(0x1bd)){let x=document['createElement']('button');x['style']['height']=ad(0x1c9),x['style'][ad(0x12a)]='relative',x[ad(0x136)][ad(0x1a1)]='flex',x[ad(0x136)]['justifyContent']=ad(0x10f),x['style']['width']='20px',x['style'][ad(0x12b)]='content-box',x[ad(0x15f)]=ad(0x150),x[ad(0x1ab)]=()=>{this['_propertygrid']['setPropertyValue'](m,undefined),this['_propertygrid']['refresh']();},n[ad(0x115)]['insertAdjacentElement'](ad(0x11e),x);let y=document[ad(0x116)](ad(0x197));y['style']['display']=ad(0x175);let z=document['createElement']('span');if(l)z['innerText']=(l['source']??'')+':\x20'+(l['name']??'');else z['innerText']='';z[ad(0x136)]['overflow']='hidden',z[ad(0x136)]['whiteSpace']='nowrap',z['style']['textOverflow']='ellipsis',z[ad(0x136)]['flexGrow']='1',z['title']=JSON[ad(0x17b)](l),y['appendChild'](z);let A=document['createElement'](ad(0x189));return A['innerText']=ad(0x13e),A[ad(0x1ab)]=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n[ad(0x115)][ad(0x136)][ad(0x1a1)]=ad(0x175),y;}else{let B=document['createElement'](ad(0x189));B['style'][ad(0xf9)]='calc(100%\x20-\x206px)',B['style'][ad(0x12a)]=ad(0x1b4),B[ad(0x136)][ad(0x1a1)]='flex',B['style'][ad(0x1b8)]=ad(0x10f),B['style'][ad(0x10a)]='20px',B[ad(0x136)][ad(0x12b)]=ad(0xd5),B['title']=ad(0x1af),B[ad(0x136)][ad(0x14e)]='0.2',B[ad(0x15f)]=ad(0x13e),B[ad(0x1ab)]=()=>{d({'value':l,'propertyPath':m});},n['nodeElem']['insertAdjacentElement'](ad(0x11e),B),n[ad(0x115)][ad(0x136)]['display']='flex';}}}}}return null;},this[W(0x149)][W(0x106)]['on'](k=>{const ag=W;ContextMenu[ag(0x137)]([{'title':ag(0x1a3),'action':async()=>{d(k);}},{'title':ag(0x1a9),'action':async()=>{const ah=ag,l=prompt(ah(0xdc));l&&(this[ah(0x149)][ah(0x169)](k['propertyPath'],l),this['_propertygrid']['refresh']());}},{'title':ag(0x14d),'action':async()=>{const ai=ag;this['_propertygrid']['setPropertyValue'](k[ai(0x117)],undefined),this['_propertygrid'][ai(0x187)]();}}],k[ag(0x1ae)]);});}['helpClicked'](){const aj=P,d=document[aj(0x116)](aj(0x134));d['srcdoc']=simpleScriptEditorHelpHtml,d[aj(0x136)]['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[aj(0x16c)]['openModal'](d,{'title':aj(0x1bc),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[aj(0x16d)][aj(0x18d)]();}[P(0x121)](){const ak=P;if(!this['_showingCode']){const e=JSON['stringify']({'commands':this[ak(0xf4)]()},null,0x2);this[ak(0x125)][ak(0x112)](e),this[ak(0x165)](!![]);return;}const d=this[ak(0x1a6)]();if(!d)return;this['_showCodeView'](![]),this['loadScript'](d);}['_showCodeView'](d){const al=P;this[al(0x125)][al(0x182)][al(0xfa)](al(0xe4),d),this[al(0x127)][al(0x182)]['toggle'](al(0x10b),d),this[al(0xf5)]['classList']['toggle'](al(0x167),d),this['_addCommandBtn']['disabled']=d,this[al(0x124)][al(0x15f)]=d?al(0x11f):al(0x190),this['_showingCode']=d;if(d)requestAnimationFrame(()=>this['_codeView']['activated']());}['_parseCodeViewScript'](){const am=P;let d;try{d=JSON['parse'](this['_codeView'][am(0x18b)]());}catch(f){return alert(am(0x188)+f[am(0x132)]),null;}if(!Array['isArray'](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}['loadScript'](d){const an=P;this[an(0x12f)]=d;this['_commandListFancyTree']&&(this['_commandListFancyTree']['destroy'](),this['_commandListDiv']=this['_getDomElement'](an(0x1c5)));let e=[];for(let f of this[an(0x12f)][an(0x147)]){f=ScriptUpgrades['upgradeScriptCommand'](f),e['push'](this['createTreeItem'](f));}this[an(0xd8)]=new Wunderbaum({...defaultOptions,'element':this['_commandListDiv'],'icon':![],'source':e,'activate':g=>{const ao=an;this['_propertygrid'][ao(0x168)]=g['node']['data']['data']['item']??null;},'render':g=>{const ap=an,h=!!g['node'][ap(0x141)][ap(0x141)]?.['branch'];if(g[ap(0x1bf)]){g[ap(0x115)][ap(0x111)]=k=>{const aq=ap;return k[aq(0x148)](),![];};const j=document[ap(0x116)](ap(0x144));j[ap(0x136)][ap(0x166)]=ap(0x15b),g['nodeElem']['prepend'](j);if(!h){const k=document[ap(0x116)]('div');k[ap(0x146)]='drag-handle',k[ap(0x181)]=ap(0xf2),k['innerHTML']=ap(0x1c7),g[ap(0x115)][ap(0x1b0)](k);const l=g['nodeElem'][ap(0x155)],m=document['createElement']('span');m[ap(0x136)][ap(0x166)]='display:inline-block;\x20width:32px;',g['nodeElem'][ap(0x1be)](m);const n=document['createElement']('div');n['className']=ap(0x17d);const o=document[ap(0x116)](ap(0x135));o[ap(0x105)]=assetsPath+'icons/copy.svg',o['title']=ap(0x14a),o[ap(0x1ab)]=()=>{const ar=ap,q=structuredClone(g['node'][ar(0x141)][ar(0x141)]['item']),r=g[ar(0x13c)]['parent'][ar(0xdb)](this['createTreeItem'](q));r['moveTo'](g[ar(0x13c)],ar(0x119));};const p=document[ap(0x116)](ap(0x135));p['src']=assetsPath+ap(0x18e),p[ap(0x181)]=ap(0x142),p['onclick']=()=>g['node']['remove'](),n[ap(0x1ad)](o,p),l[ap(0x1be)](n),g['nodeElem']['_reservedRowWidth']=j[ap(0x152)]+m[ap(0x152)];}else g[ap(0x115)]['_reservedRowWidth']=j[ap(0x152)];}const i=g['nodeElem']['_reservedRowWidth']??0x0;if(i){const q=g['nodeElem']['querySelector']('span.wb-title');if(q){const r=parseFloat(q[ap(0x136)][ap(0x10a)]);if(!isNaN(r))q[ap(0x136)][ap(0x10a)]=Math[ap(0x13d)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const as=an;if(!this['_dragFromHandle'])return![];return this['_draggedNode']=g['node'],g[as(0x1ae)][as(0x173)][as(0xef)]=as(0x1bb),g['event'][as(0x173)]['dropEffect']='move',g[as(0x1ae)][as(0x173)][as(0x159)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{this['_draggedNode']=null;},'dragEnter':g=>{const at=an,h=g['event']['dataTransfer']?.['types']['includes'](SAME_TREE_MOVE_MIME);g['event'][at(0x173)][at(0x101)]=h?at(0x1bb):at(0x11b);const i=!!g['node']['data'][at(0x141)]?.['branch'];return i?new Set(['over']):new Set([at(0x104),'after']);},'dragOver':g=>{const au=an,h=g['event']['dataTransfer']?.[au(0x15e)][au(0x16f)](SAME_TREE_MOVE_MIME);g['event'][au(0x173)]['dropEffect']=h?au(0x1bb):au(0x11b);},'drop':async g=>{const av=an,h=g[av(0x1ae)][av(0x173)]?.[av(0x15e)]['includes'](SAME_TREE_MOVE_MIME);if(g['region']===av(0xfe)){if(h&&this[av(0x128)])this[av(0x128)][av(0x110)](g[av(0x13c)],'appendChild'),this['_draggedNode']['setClass'](av(0xf3),![]);else{const j=g[av(0x1ae)][av(0x173)]?.['getData'](av(0x1b3));j&&g['node'][av(0xdb)](this['createTreeItem']({'type':j}));}return;}const i=g['region']=='before'?'before':'after';if(h&&this['_draggedNode'])this[av(0x128)]['moveTo'](g['node'],i),this[av(0x128)][av(0x191)]('wb-drag-source',![]);else{const k=g[av(0x1ae)][av(0x173)]?.['getData']('text/plain');if(k){const l={'type':k},m=this['createTreeItem'](l),n=g[av(0x13c)][av(0x170)][av(0xdb)](m);n[av(0x110)](g['node'],i);}}}}}),this['_commandListFancyTree']['root']['children']?.[0x0]?.[an(0xe9)]();}[P(0x1c8)](d){const aw=P;if(d[aw(0xe8)]==='If'){const e=d;return e[aw(0xea)]??=[],e[aw(0x13f)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':aw(0xe3),'expanded':!![],'data':{'branch':aw(0xe3)},'children':e['trueCommands']['map'](f=>this[aw(0x1c8)](f))},{'title':aw(0x139),'expanded':!![],'data':{'branch':'else'},'children':e[aw(0x13f)]['map'](f=>this[aw(0x1c8)](f))}]};}return{'title':d['type'],'data':{'item':d}};}[P(0xda)](d){const ax=P,e=d[ax(0x141)][ax(0x141)][ax(0x14c)];if(e[ax(0xe8)]==='If'){const f=d[ax(0x194)]?.[ax(0x158)](h=>h['data'][ax(0x141)]?.['branch']===ax(0xe3)),g=d[ax(0x194)]?.['find'](h=>h[ax(0x141)]['data']?.['branch']==='else');e['trueCommands']=(f?.['children']??[])['map'](h=>this[ax(0xda)](h)),e['elseCommands']=(g?.[ax(0x194)]??[])['map'](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const ay=P;let e=d;while(e){if(e['data']?.[ay(0x141)]?.[ay(0x163)])return e;e=e['parent'];}return null;}async['addCommand'](){const az=P,d=new SimpleScriptCommandPicker();d[az(0x1a5)](this[az(0x16a)],this['commandDescriptions']),d[az(0x181)]='Add\x20Script\x20Command',d[az(0xdd)]['on'](()=>{const aA=az;if(d['selectedType']){const f={'type':d['selectedType']},g=this['createTreeItem'](f),h=this[aA(0x177)](this['_commandListFancyTree']['activeNode']);if(h)h[aA(0xdb)](g);else this[aA(0xd8)]['addChildren'](g);}});const e=new AbortController();d['closeRequested']['on'](()=>e['abort']()),await this[az(0x16c)][az(0x12e)](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e[az(0x1c6)]});}[P(0xf4)](){const aB=P;if(this['_showingCode']){const e=this['_parseCodeViewScript']();if(e)this['loadScript'](e);}let d=this[aB(0xd8)][aB(0x161)][aB(0x194)];return d['map'](f=>this['nodeToCommand'](f));}}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);function a(){const aC=['show','flex:0\x200\x20130px;','else','flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;','value','node','max','...','elseCommands','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','data','Remove','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','span','e.g.\x20srm.rbg{__tagRoot}.error','className','commands','preventDefault','_propertygrid','Duplicate','null','item','remove\x20complex\x20value','opacity','interface','del','read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','offsetWidth','complexString','placeholder','parentElement','code','script','find','setData','a\x20value\x20of\x20the\x20context','display:inline-block;\x20width:24px;','_getDomElement','varName','types','innerText','2696xwgJIJ','root','map','branch','typeof','_showCodeView','cssText','code-mode','selectedObject','setPropertyValue','scriptCommandsTypeInfo','a\x20parameter\x20you\x20hand\x20over','visualizationShell','helpRequested','1719320eCXYCC','includes','parent','\x20flex:0\x200\x20130px;','Edit\x20signals','dataTransfer','false','flex','codeToggleBtn','_getBranchContainerNode','#fdecea','context','_assignEvents','stringify','895279wYLijO','cmd','textContent','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','source','title','classList','display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;','formula','elementProperty','visualizationHandler','refresh','Invalid\x20JSON:\x0a','button','public','getText','codeView','emit','icons/delete.svg','addEventListener','Code','setClass','length','signalInProperty','children','14108FzwfND','726gnPIau','div','isArray','innerHTML','\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;','specialAllreadyAdded','switch','language','test','continue','name','display','Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','edit\x20complex\x20value','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','loadCommands','_parseCodeViewScript','collection','format','edit\x20string','has','onclick','Complex\x20for\x20\x22','append','event','complex\x20property\x20value','prepend','catch','with','text/plain','relative','properties','borderColor','onchange','justifyContent','display:flex;\x20align-items:center;\x20gap:4px;','super','move','Simple\x20Script\x20Editor\x20Help','complex','appendChild','isNew','\x20if\x20empty)','select','_dragFromHandle','delete','var','commandList','signal','<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>','createTreeItem','calc(100%\x20-\x206px)','9WPFHQM','propertygrid','ready','void','content-box','default','dragend','_commandListFancyTree','Open\x20in\x20larger\x20editor','nodeToCommand','addChildren','enter\x20value:','commandTypeChosen','_addCommandBtn','flex:0\x200\x2028px;\x20width:20px;','class','splice','break','true','visible','988089wrpMqN','return','enum','type','setActive','trueCommands','code-changed','\x20flex:1\x201\x20auto;','openConfirmation','push','effectAllowed','38BWbNGj','parameter','Drag\x20to\x20reorder','wb-drag-source','getScriptCommands','_splitView','getData','345XrZavL','159950WBCCBg','height','toggle','forEach','while','getTypeInfo','over','instanceServiceContainer','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','dropEffect','javascript','Typ:\x20','before','src','propertyNodeContextMenu','serviceContainer','showHead','_title','width','hidden','_showingCode','IScriptMultiplexValue','signalList','center','moveTo','oncontextmenu','update','textOverflow','expression','nodeElem','createElement','propertyPath','join','after','color:#333;\x20white-space:pre-line;','copy','complexSignal','2741994sImeIg','afterbegin','Visual','for','toggleCodeView','\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','trim','_codeToggleBtn','_codeView','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','_commandListDiv','_draggedNode','selected','position','boxSizing','Edit\x20formula','setNameColumnWidth','openModal','_script','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','Remove\x20signal','message','application/x-simple-script-move','iframe','img','style'];a=function(){return aC;};return a();}