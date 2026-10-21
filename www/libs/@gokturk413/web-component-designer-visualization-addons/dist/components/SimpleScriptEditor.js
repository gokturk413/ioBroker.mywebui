const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x1ff))/0x1*(parseInt(O(0x1fc))/0x2)+parseInt(O(0x1ad))/0x3+parseInt(O(0x195))/0x4+-parseInt(O(0x227))/0x5*(-parseInt(O(0x240))/0x6)+-parseInt(O(0x23d))/0x7+parseInt(O(0x1a1))/0x8+-parseInt(O(0x237))/0x9;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0xbcc42));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME='application/x-simple-script-move';export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static ['is']=P(0x226);[P(0x190)];get['title'](){const Q=P;return this[Q(0x190)];}set['title'](d){const R=P;this[R(0x190)]=d;}[P(0x1ab)];['instanceServiceContainer'];['visualizationHandler'];['visualizationShell'];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];[P(0x254)]=new TypedEvent();[P(0x248)]={...nativeScriptCommandDescriptions};[P(0x18b)];['_commandListDiv'];['_commandListFancyTree'];['_propertygrid'];[P(0x222)];[P(0x1d1)];[P(0x180)];[P(0x23b)];[P(0x1e0)]=![];[P(0x19a)]=![];[P(0x1cb)]=null;constructor(){const S=P;super(),this[S(0x192)](),this[S(0x230)]=this['_getDomElement']('commandList'),this['_propertygrid']=this[S(0x24b)]('propertygrid'),this[S(0x222)]=this['_getDomElement'](S(0x234)),this['_codeView']=this['_getDomElement'](S(0x20a)),this['_codeToggleBtn']=this['_getDomElement']('codeToggleBtn'),this[S(0x23b)]=this[S(0x24b)]('addCommandBtn');const d=this['_getDomElement'](S(0x1e1));d[S(0x187)](S(0x23a),e=>{const T=S;this['_dragFromHandle']=!!e['target']?.[T(0x170)](T(0x251));}),document[S(0x187)]('dragend',()=>{this['_draggedNode']=null;},!![]),d['addEventListener'](S(0x16f),e=>{const U=S;e[U(0x23e)]();if(e[U(0x204)]){const f=e['dataTransfer'][U(0x1df)]['includes'](SAME_TREE_MOVE_MIME);e[U(0x204)]['dropEffect']=f?U(0x245):'copy';}}),d[S(0x187)]('drop',e=>{const V=S;e[V(0x23e)]();const f=e[V(0x204)]?.[V(0x1df)]['includes'](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this['_commandListFancyTree']['root']['children'],h=g?.[g['length']-0x1];if(h)this[V(0x1cb)]['moveTo'](h,'after');this['_draggedNode']['setClass'](V(0x24d),![]);}else{const i=e[V(0x204)]?.['getData'](V(0x236));if(i){const j={'type':i};this[V(0x1d2)]['root'][V(0x1ce)](this['createTreeItem'](j));}}}),this['shadowRoot'][S(0x238)]=[c,defaultStyle,SimpleScriptEditor['style']];}async['ready'](){const W=P;this['_parseAttributesToProperties'](),this['_bindingsParse'](null,!![]),this[W(0x179)]();let d=async k=>{const X=W;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this['visualizationHandler'],l['visualizationShell']=this[X(0x23f)],l['serviceContainer']=this[X(0x1ab)],l[X(0x228)]=this['instanceServiceContainer'],l['bindableObjectsTarget']=X(0x1c5),l[X(0x210)]=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l[X(0x21d)]=![],l['typeName']='IScriptMultiplexValue',l['title']=X(0x25a)+k['propertyPath']+'\x22';if(typeof k[X(0x21b)]==='object')l[X(0x1f3)]=k[X(0x21b)]??{};else l['selectedObject']={};l['bindingDoubleClicked']=n=>{const Y=X;if(n['bindabletype']==Y(0x1f2))l[Y(0x16c)](Y(0x1e9),'property');else n['bindabletype']==Y(0x212)?l['setPropertyValue'](Y(0x1e9),Y(0x212)):l[Y(0x16c)]('source',Y(0x1d5));l['setPropertyValue']('name',n['fullName']),l['refresh']();};let m=await this[X(0x23f)]['openConfirmation'](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this[X(0x215)]['setPropertyValue'](k[X(0x16e)],l['selectedObject']),this[X(0x215)]['refresh']());},e=async k=>{const Z=W,l=new CodeViewMonaco();l['language']='javascript',l['style'][Z(0x213)]='relative',l['code']=k[Z(0x21b)]??'';const m=await this[Z(0x23f)][Z(0x202)](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this['_propertygrid'][Z(0x16c)](k[Z(0x16e)],l[Z(0x247)]),this[Z(0x215)][Z(0x255)]());};const f=[W(0x1d5),W(0x1f2),W(0x168),'signalInProperty',W(0x16b),W(0x231),'context','complexString',W(0x221),W(0x17f)],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([W(0x169),W(0x19d),W(0x250),W(0x1ba),W(0x18a),'continue','debugger',W(0x191),'delete','do','else',W(0x16a),W(0x174),W(0x20c),'for',W(0x1c1),'if','import','in',W(0x199),'new','return',W(0x178),'switch',W(0x1bc),'throw',W(0x1da),W(0x219),W(0x1c3),'void',W(0x1db),'with',W(0x1be),'let',W(0x1a4),W(0x1ed),'await','implements','package','protected',W(0x173),W(0x1aa),'public','null','true','false','undefined','arguments',W(0x1c6)]),i={'signal':W(0x1ae),'property':W(0x18f),'elementProperty':W(0x21f),'signalInProperty':'read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','event':'read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','parameter':'a\x20parameter\x20you\x20hand\x20over','context':W(0x1af),'complexString':W(0x1ca),'complexSignal':W(0x185),'expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const a0=W,l=(k[a0(0x21b)]??[])[a0(0x193)](E=>({...E})),m=E=>{const a1=a0,F=(l[E][a1(0x1c4)]??'')[a1(0x217)]();if(!F)return null;if(!g['test'](F))return'\x22'+F+a1(0x1c9);if(h['has'](F))return'\x22'+F+a1(0x1c8);if(l[a1(0x19b)]((G,H)=>H!==E&&(G['varName']??'')['trim']()===F))return'\x22'+F+a1(0x171);return null;},n=a0(0x22d),o=document['createElement'](a0(0x184));o[a0(0x249)]['cssText']=a0(0x1ac);const p=document[a0(0x17e)](a0(0x184));p[a0(0x249)][a0(0x18c)]=a0(0x1d7);const q=document['createElement'](a0(0x211));q['textContent']=a0(0x1c2),q['style']['cssText']='flex:0\x200\x20120px;';const r=document['createElement']('span');r['textContent']=a0(0x1dc),r['style']['cssText']='flex:0\x200\x20130px;';const s=document['createElement']('span');s['textContent']=a0(0x246),s['style'][a0(0x18c)]='flex:1\x201\x20auto;';const t=document[a0(0x17e)](a0(0x211));t['style'][a0(0x18c)]='flex:0\x200\x2022px;',p[a0(0x25c)](q,r,s,t),o['appendChild'](p);const u=document[a0(0x17e)]('div');u['style']['cssText']=a0(0x205),o[a0(0x1a2)](u);const v=document[a0(0x17e)](a0(0x184));v[a0(0x249)][a0(0x18c)]='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[a0(0x17e)](a0(0x184));w[a0(0x249)]['cssText']='font-weight:bold;\x20margin-bottom:2px;';const x=document[a0(0x17e)](a0(0x184));x['style']['cssText']=a0(0x167),v[a0(0x25c)](w,x);const y=E=>{const a2=a0;w[a2(0x1a8)]=a2(0x1d6)+E,x[a2(0x1a8)]=i[E]??'';},z=[],A=()=>{l['forEach']((E,F)=>{const a3=b,G=z[F];if(!G)return;const H=m(F);G['title']=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+a3(0x1d3),G['style'][a3(0x22a)]=H?a3(0x1f8):'',G['style']['backgroundColor']=H?a3(0x200):'';});},B=()=>{const a4=a0;u['innerHTML']='',z['length']=0x0,l[a4(0x242)]((E,F)=>{const a5=a4,G=document['createElement']('div');G['style'][a5(0x18c)]=a5(0x1b2);const H=document[a5(0x17e)](a5(0x1b6));H['value']=E['varName']??'',H[a5(0x220)]='__'+F,H['style']['cssText']=n+a5(0x223),H[a5(0x24c)]=()=>{E['varName']=H['value']||undefined,A();},z[a5(0x23c)](H),G[a5(0x1a2)](H);const I=document[a5(0x17e)](a5(0x1a5));I['style']['cssText']=n+'\x20flex:0\x200\x20130px;';for(const M of f){const N=document[a5(0x17e)]('option');N[a5(0x21b)]=M,N['textContent']=M;if(E[a5(0x1e9)]===M)N['selected']=!![];I[a5(0x1a2)](N);}I[a5(0x235)]=()=>{E['source']=I['value'],y(I['value']);},I['onfocus']=()=>y(I[a5(0x21b)]),G[a5(0x1a2)](I);const J=document['createElement'](a5(0x1b6));J['value']=E['name']??'',J[a5(0x220)]=a5(0x206),J['style']['cssText']=n+'\x20flex:1\x201\x20auto;',J[a5(0x24c)]=()=>{E['name']=J['value'];},G[a5(0x1a2)](J);const K=document[a5(0x17e)]('button');K['title']=a5(0x1b4),K['style']['cssText']=n+a5(0x181);const L=document[a5(0x17e)]('img');L[a5(0x256)]=assetsPath+a5(0x1b7),L['style']['cssText']='width:12px;\x20height:12px;',K['appendChild'](L),K['onclick']=()=>{l['splice'](F,0x1),B();},G['appendChild'](K),u['appendChild'](G);}),A();};B();const C=document['createElement']('button');C[a0(0x1a8)]=a0(0x244),C['style']['cssText']=n+a0(0x1e5),C[a0(0x1d8)]=()=>{const a6=a0;l['push']({'source':a6(0x1d5),'name':''}),B();},o[a0(0x1a2)](C),y(l[0x0]?.[a0(0x1e9)]??a0(0x1d5)),o['appendChild'](v);const D=await this['visualizationShell']['openConfirmation'](o,{'title':a0(0x16d),'x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this[a0(0x215)]['setPropertyValue'](k['propertyPath'],l),this['_propertygrid'][a0(0x255)]());};this['_propertygrid'][W(0x17b)]=this['visualizationHandler'],this['_propertygrid']['visualizationShell']=this[W(0x23f)],this[W(0x215)]['serviceContainer']=this['serviceContainer'],this['_propertygrid']['instanceServiceContainer']=this[W(0x228)],this['_propertygrid'][W(0x1bd)]='script',this['_propertygrid'][W(0x203)](0x82),this[W(0x215)]['getTypeInfo']=(k,l)=>{const a7=W,m=typeInfoFromJsonSchema(this[a7(0x25d)],k,l);return m&&(l==='If'||k?.[a7(0x252)]==='If')&&(m['properties']=m[a7(0x243)]['filter'](n=>n['name']!=='trueCommands'&&n['name']!=='elseCommands')),m;},this['_propertygrid']['getSpecialEditorForType']=async(k,l,m,n,o)=>{const a8=W;if(!k[a8(0x21a)]){k[a8(0x21a)]=!![];if(k['format']==='collection'){}else{if(k['format']===a8(0x1b5)){let p=document[a8(0x17e)]('button');p['style']['height']='calc(100%\x20-\x206px)',p[a8(0x249)]['position']=a8(0x1d0),p[a8(0x249)]['display']=a8(0x1e6),p['style']['justifyContent']='center',p[a8(0x249)]['width']='20px',p['style'][a8(0x24f)]=a8(0x20e),p['innerText']='del',p[a8(0x1d8)]=()=>{const a9=a8;this[a9(0x215)]['setPropertyValue'](m,undefined),this[a9(0x215)]['refresh']();},n['nodeElem']['insertAdjacentElement'](a8(0x1a6),p);const q=Array[a8(0x20f)](l)?l:[];let r=document[a8(0x17e)](a8(0x184));r[a8(0x249)][a8(0x1fa)]=a8(0x1e6);let s=document['createElement']('span');s['innerText']=q[a8(0x193)]((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.['source']??'')+':'+(u?.['name']??''))[a8(0x24e)](',\x20'),s['style'][a8(0x1e8)]=a8(0x216),s[a8(0x249)]['whiteSpace']=a8(0x1b8),s[a8(0x249)][a8(0x233)]=a8(0x24a),s[a8(0x249)]['flexGrow']='1',s[a8(0x207)]=JSON[a8(0x22b)](q),r['appendChild'](s);let t=document[a8(0x17e)](a8(0x218));return t['innerText']=a8(0x196),t['onclick']=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n['nodeElem']['style']['display']=a8(0x1e6),r;}else{if(k[a8(0x22c)]==='formula'){const u=document['createElement']('div');u[a8(0x249)]['cssText']='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v[a8(0x253)]=a8(0x20b),v[a8(0x1cf)]=!![],v[a8(0x249)][a8(0x18c)]='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v['code']=l??'',v['addEventListener']('code-changed',()=>{const aa=a8;this[aa(0x215)]['setPropertyValue'](m,v['code']);}),u['appendChild'](v);const w=document[a8(0x17e)]('button');return w['innerText']=a8(0x196),w[a8(0x207)]='Open\x20in\x20larger\x20editor',w[a8(0x249)]['cssText']='flex:0\x200\x2028px;\x20width:20px;',w[a8(0x1d8)]=()=>e({'value':v['code'],'propertyPath':m}),u['appendChild'](w),n['nodeElem'][a8(0x249)][a8(0x1fa)]=a8(0x1e6),u;}else{if(typeof l===a8(0x25b)&&l!==null||k['format']==='complex'){let x=document[a8(0x17e)](a8(0x218));x[a8(0x249)][a8(0x1ec)]=a8(0x225),x['style']['position']='relative',x[a8(0x249)]['display']=a8(0x1e6),x['style'][a8(0x1c0)]=a8(0x188),x['style'][a8(0x17a)]=a8(0x1cd),x[a8(0x249)][a8(0x24f)]=a8(0x20e),x['innerText']=a8(0x1fb),x['onclick']=()=>{const ab=a8;this['_propertygrid'][ab(0x16c)](m,undefined),this[ab(0x215)][ab(0x255)]();},n[a8(0x1d9)]['insertAdjacentElement']('afterbegin',x);let y=document[a8(0x17e)](a8(0x184));y[a8(0x249)]['display']=a8(0x1e6);let z=document['createElement']('span');if(l)z[a8(0x22f)]=(l[a8(0x1e9)]??'')+':\x20'+(l[a8(0x1f7)]??'');else z[a8(0x22f)]='';z['style']['overflow']='hidden',z[a8(0x249)]['whiteSpace']='nowrap',z[a8(0x249)]['textOverflow']=a8(0x24a),z[a8(0x249)][a8(0x197)]='1',z[a8(0x207)]=JSON[a8(0x22b)](l),y['appendChild'](z);let A=document['createElement'](a8(0x218));return A[a8(0x22f)]='...',A[a8(0x1d8)]=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n['nodeElem'][a8(0x249)][a8(0x1fa)]=a8(0x1e6),y;}else{let B=document['createElement']('button');B['style'][a8(0x1ec)]=a8(0x225),B[a8(0x249)][a8(0x213)]=a8(0x1d0),B[a8(0x249)]['display']='flex',B['style'][a8(0x1c0)]='center',B[a8(0x249)]['width']=a8(0x1cd),B['style']['boxSizing']='content-box',B[a8(0x207)]=a8(0x1a9),B['style']['opacity']=a8(0x1fd),B[a8(0x22f)]=a8(0x196),B['onclick']=()=>{d({'value':l,'propertyPath':m});},n[a8(0x1d9)][a8(0x209)](a8(0x1a6),B),n['nodeElem'][a8(0x249)][a8(0x1fa)]=a8(0x1e6);}}}}}return null;},this['_propertygrid']['propertyNodeContextMenu']['on'](k=>{const ac=W;ContextMenu['show']([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':ac(0x259),'action':async()=>{const ad=ac,l=prompt(ad(0x1a7));l&&(this['_propertygrid'][ad(0x16c)](k['propertyPath'],l),this[ad(0x215)]['refresh']());}},{'title':ac(0x258),'action':async()=>{const ae=ac;this['_propertygrid'][ae(0x16c)](k['propertyPath'],undefined),this['_propertygrid'][ae(0x255)]();}}],k['event']);});}[P(0x1b3)](){const af=P,d=document[af(0x17e)](af(0x1bb));d[af(0x201)]=simpleScriptEditorHelpHtml,d[af(0x249)]['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[af(0x23f)]['openModal'](d,{'title':af(0x232),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this['helpRequested']['emit']();}['toggleCodeView'](){const ag=P;if(!this[ag(0x1e0)]){const e=JSON['stringify']({'commands':this['getScriptCommands']()},null,0x2);this[ag(0x1d1)][ag(0x1d4)](e),this['_showCodeView'](!![]);return;}const d=this['_parseCodeViewScript']();if(!d)return;this[ag(0x229)](![]),this['loadScript'](d);}['_showCodeView'](d){const ah=P;this[ah(0x1d1)][ah(0x1f1)][ah(0x176)]('visible',d),this['_commandListDiv']['classList'][ah(0x176)]('hidden',d),this['_splitView']['classList']['toggle']('code-mode',d),this['_addCommandBtn'][ah(0x177)]=d,this[ah(0x180)]['innerText']=d?ah(0x172):'Code',this[ah(0x1e0)]=d;if(d)requestAnimationFrame(()=>this[ah(0x1d1)]['activated']());}['_parseCodeViewScript'](){const ai=P;let d;try{d=JSON['parse'](this['_codeView']['getText']());}catch(f){return alert(ai(0x241)+f[ai(0x208)]),null;}if(!Array['isArray'](d?.['commands']))return alert(ai(0x1e2)),null;return d;}[P(0x186)](d){const aj=P;this['_script']=d;this[aj(0x1d2)]&&(this['_commandListFancyTree']['destroy'](),this['_commandListDiv']=this['_getDomElement'](aj(0x1eb)));let e=[];for(let f of this[aj(0x18b)][aj(0x1ef)]){f=ScriptUpgrades[aj(0x183)](f),e[aj(0x23c)](this['createTreeItem'](f));}this[aj(0x1d2)]=new Wunderbaum({...defaultOptions,'element':this[aj(0x230)],'icon':![],'source':e,'activate':g=>{const ak=aj;this['_propertygrid']['selectedObject']=g[ak(0x1dd)][ak(0x1ea)][ak(0x1ea)]['item']??null;},'render':g=>{const al=aj,h=!!g['node']['data'][al(0x1ea)]?.['branch'];if(g['isNew']){g[al(0x1d9)][al(0x1f5)]=k=>{return k['preventDefault'](),![];};const j=document['createElement']('span');j['style'][al(0x18c)]='display:inline-block;\x20width:24px;',g['nodeElem'][al(0x18e)](j);if(!h){const k=document[al(0x17e)](al(0x184));k['className']=al(0x19f),k[al(0x207)]=al(0x239),k['innerHTML']='<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>',g['nodeElem'][al(0x18e)](k);const l=g['nodeElem']['parentElement'],m=document['createElement'](al(0x211));m['style'][al(0x18c)]=al(0x1a3),g[al(0x1d9)]['appendChild'](m);const n=document['createElement']('div');n['className']=al(0x1f9);const o=document[al(0x17e)]('img');o[al(0x256)]=assetsPath+'icons/copy.svg',o['title']='Duplicate',o[al(0x1d8)]=()=>{const am=al,q=structuredClone(g['node']['data'][am(0x1ea)][am(0x17d)]),r=g[am(0x1dd)][am(0x18d)][am(0x1ce)](this['createTreeItem'](q));r['moveTo'](g['node'],am(0x182));};const p=document['createElement'](al(0x214));p['src']=assetsPath+'icons/delete.svg',p['title']='Remove',p[al(0x1d8)]=()=>g['node'][al(0x1c7)](),n[al(0x25c)](o,p),l['appendChild'](n),g[al(0x1d9)][al(0x1f0)]=j[al(0x1b1)]+m[al(0x1b1)];}else g['nodeElem'][al(0x1f0)]=j[al(0x1b1)];}const i=g['nodeElem']['_reservedRowWidth']??0x0;if(i){const q=g['nodeElem']['querySelector']('span.wb-title');if(q){const r=parseFloat(q[al(0x249)]['width']);if(!isNaN(r))q['style']['width']=Math[al(0x194)](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const an=aj;if(!this[an(0x19a)])return![];return this[an(0x1cb)]=g[an(0x1dd)],g['event']['dataTransfer']['effectAllowed']='move',g['event']['dataTransfer'][an(0x1e3)]=an(0x245),g[an(0x16b)][an(0x204)]['setData'](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{this['_draggedNode']=null;},'dragEnter':g=>{const ao=aj,h=g['event'][ao(0x204)]?.[ao(0x1df)]['includes'](SAME_TREE_MOVE_MIME);g['event'][ao(0x204)]['dropEffect']=h?'move':'copy';const i=!!g['node']['data'][ao(0x1ea)]?.['branch'];return i?new Set([ao(0x1fe)]):new Set(['before','after']);},'dragOver':g=>{const ap=aj,h=g[ap(0x16b)]['dataTransfer']?.['types']['includes'](SAME_TREE_MOVE_MIME);g[ap(0x16b)][ap(0x204)][ap(0x1e3)]=h?ap(0x245):ap(0x1bf);},'drop':async g=>{const aq=aj,h=g[aq(0x16b)][aq(0x204)]?.['types'][aq(0x19c)](SAME_TREE_MOVE_MIME);if(g[aq(0x1b0)]===aq(0x1fe)){if(h&&this['_draggedNode'])this['_draggedNode']['moveTo'](g[aq(0x1dd)],'appendChild'),this[aq(0x1cb)]['setClass'](aq(0x24d),![]);else{const j=g[aq(0x16b)]['dataTransfer']?.[aq(0x1e4)](aq(0x236));j&&g['node'][aq(0x1ce)](this[aq(0x20d)]({'type':j}));}return;}const i=g[aq(0x1b0)]=='before'?aq(0x189):'after';if(h&&this[aq(0x1cb)])this[aq(0x1cb)][aq(0x1a0)](g[aq(0x1dd)],i),this['_draggedNode']['setClass'](aq(0x24d),![]);else{const k=g['event']['dataTransfer']?.[aq(0x1e4)]('text/plain');if(k){const l={'type':k},m=this[aq(0x20d)](l),n=g['node']['parent']['addChildren'](m);n['moveTo'](g[aq(0x1dd)],i);}}}}}),this[aj(0x1d2)]['root']['children']?.[0x0]?.[aj(0x1f4)]();}['createTreeItem'](d){const ar=P;if(d[ar(0x252)]==='If'){const e=d;return e[ar(0x198)]??=[],e[ar(0x17c)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':ar(0x22e),'expanded':!![],'data':{'branch':ar(0x22e)},'children':e[ar(0x198)]['map'](f=>this[ar(0x20d)](f))},{'title':ar(0x257),'expanded':!![],'data':{'branch':ar(0x257)},'children':e[ar(0x17c)]['map'](f=>this[ar(0x20d)](f))}]};}return{'title':d['type'],'data':{'item':d}};}['nodeToCommand'](d){const as=P,e=d[as(0x1ea)]['data'][as(0x17d)];if(e[as(0x252)]==='If'){const f=d[as(0x21c)]?.[as(0x224)](h=>h[as(0x1ea)]['data']?.[as(0x21e)]==='true'),g=d['children']?.[as(0x224)](h=>h['data'][as(0x1ea)]?.[as(0x21e)]==='else');e['trueCommands']=(f?.[as(0x21c)]??[])[as(0x193)](h=>this['nodeToCommand'](h)),e['elseCommands']=(g?.['children']??[])[as(0x193)](h=>this[as(0x1cc)](h));}return e;}['_getBranchContainerNode'](d){const at=P;let e=d;while(e){if(e['data']?.[at(0x1ea)]?.[at(0x21e)])return e;e=e[at(0x18d)];}return null;}async['addCommand'](){const au=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this[au(0x25d)],this['commandDescriptions']),d['title']='Add\x20Script\x20Command',d[au(0x175)]['on'](()=>{const av=au;if(d['selectedType']){const f={'type':d['selectedType']},g=this['createTreeItem'](f),h=this[av(0x1b9)](this[av(0x1d2)]['activeNode']);if(h)h['addChildren'](g);else this[av(0x1d2)][av(0x1ce)](g);}});const e=new AbortController();d[au(0x1f6)]['on'](()=>e['abort']()),await this['visualizationShell'][au(0x1de)](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}['getScriptCommands'](){const aw=P;if(this['_showingCode']){const e=this[aw(0x1e7)]();if(e)this[aw(0x186)](e);}let d=this[aw(0x1d2)][aw(0x19e)]['children'];return d[aw(0x193)](f=>this['nodeToCommand'](f));}}function a(){const ax=['serviceContainer','display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;','1525965dIucFz','read\x20the\x20value\x20from\x20a\x20Signal','a\x20value\x20of\x20the\x20context','region','offsetWidth','display:flex;\x20align-items:center;\x20gap:4px;','helpClicked','Remove\x20signal','signalList','input','icons/delete.svg','nowrap','_getBranchContainerNode','class','iframe','this','bindableObjectsTarget','yield','copy','justifyContent','function','Name','var','varName','script','eval','remove','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','_draggedNode','nodeToCommand','20px','addChildren','singleRow','relative','_codeView','_commandListFancyTree','\x20if\x20empty)','update','signal','Typ:\x20','display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;','onclick','nodeElem','try','while','Typ','node','openModal','types','_showingCode','listContent','The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.','dropEffect','getData','\x20align-self:flex-start;\x20padding:0\x208px;','flex','_parseCodeViewScript','overflow','source','data','commandList','height','enum','define','commands','_reservedRowWidth','classList','property','selectedObject','setActive','oncontextmenu','closeRequested','name','#c0392b','cmd','display','del','341294mrMDtm','0.2','over','7MFzoVJ','#fdecea','srcdoc','openConfirmation','setNameColumnWidth','dataTransfer','display:flex;\x20flex-direction:column;\x20gap:4px;','e.g.\x20srm.rbg{__tagRoot}.error','title','message','insertAdjacentElement','codeView','javascript','finally','createTreeItem','content-box','isArray','getTypeInfo','span','context','position','img','_propertygrid','hidden','trim','button','typeof','specialAllreadyAdded','value','children','showHead','branch','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','placeholder','complexSignal','_splitView','\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;','find','calc(100%\x20-\x206px)','node-projects-visualization-simple-script-editor','3732355mjbQXl','instanceServiceContainer','_showCodeView','borderColor','stringify','format','height:22px;\x20box-sizing:border-box;\x20font-size:12px;','true','innerText','_commandListDiv','parameter','Simple\x20Script\x20Editor\x20Help','textOverflow','splitView','onchange','text/plain','24573717VREdLo','adoptedStyleSheets','Drag\x20to\x20reorder','mousedown','_addCommandBtn','push','4967956DWyJvg','preventDefault','visualizationShell','12IyGaWs','Invalid\x20JSON:\x0a','forEach','properties','+\x20Add\x20signal','move','Signal','code','commandDescriptions','style','ellipsis','_getDomElement','oninput','wb-drag-source','join','boxSizing','catch','.drag-handle','type','language','helpRequested','refresh','src','else','remove\x20complex\x20value','edit\x20string','Complex\x20for\x20\x22','object','append','scriptCommandsTypeInfo','color:#333;\x20white-space:pre-line;','elementProperty','break','export','event','setPropertyValue','Edit\x20signals','propertyPath','dragover','closest','\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','Visual','interface','extends','commandTypeChosen','toggle','disabled','super','_assignEvents','width','visualizationHandler','elseCommands','item','createElement','expression','_codeToggleBtn','\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;','after','upgradeScriptCommand','div','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','loadScript','addEventListener','center','before','const','_script','cssText','parent','prepend','read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','_title','default','_restoreCachedInititalValues','map','max','3159664lLotXr','...','flexGrow','trueCommands','instanceof','_dragFromHandle','some','includes','case','root','drag-handle','moveTo','1818120bNvdJc','appendChild','display:inline-block;\x20width:32px;','static','select','afterbegin','enter\x20value:','textContent','complex\x20property\x20value','private'];a=function(){return ax;};return a();}function b(c,d){c=c-0x167;const e=a();let f=e[c];return f;}customElements[P(0x1ee)](SimpleScriptEditor['is'],SimpleScriptEditor);