const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x22f))/0x1*(parseInt(O(0x1fd))/0x2)+parseInt(O(0x21c))/0x3*(parseInt(O(0x1ed))/0x4)+parseInt(O(0x261))/0x5*(-parseInt(O(0x229))/0x6)+parseInt(O(0x287))/0x7+parseInt(O(0x1dc))/0x8+-parseInt(O(0x1df))/0x9*(parseInt(O(0x292))/0xa)+-parseInt(O(0x217))/0xb;if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x8d952));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';function b(c,d){c=c-0x1d2;const e=a();let f=e[c];return f;}import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME=P(0x2a4);export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static [P(0x289)]=css`
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
  `;static ['is']='node-projects-visualization-simple-script-editor';[P(0x295)];get['title'](){const Q=P;return this[Q(0x295)];}set['title'](d){const R=P;this[R(0x295)]=d;}[P(0x24b)];['instanceServiceContainer'];[P(0x27e)];['visualizationShell'];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];[P(0x239)]=new TypedEvent();[P(0x25f)]={...nativeScriptCommandDescriptions};['_script'];[P(0x232)];[P(0x27b)];[P(0x1d5)];['_splitView'];['_codeView'];['_codeToggleBtn'];[P(0x265)];[P(0x29c)]=![];[P(0x21d)]=![];[P(0x2b3)]=null;constructor(){const S=P;super(),this['_restoreCachedInititalValues'](),this[S(0x232)]=this[S(0x298)](S(0x207)),this['_propertygrid']=this['_getDomElement'](S(0x2b6)),this[S(0x25c)]=this[S(0x298)]('splitView'),this['_codeView']=this['_getDomElement'](S(0x2a6)),this[S(0x1d2)]=this['_getDomElement'](S(0x269)),this[S(0x265)]=this['_getDomElement']('addCommandBtn');const d=this[S(0x298)]('listContent');d['addEventListener']('mousedown',e=>{const T=S;this[T(0x21d)]=!!e[T(0x201)]?.[T(0x282)](T(0x26b));}),document[S(0x291)]('dragend',()=>{const U=S;this[U(0x2b3)]=null;},!![]),d[S(0x291)](S(0x276),e=>{const V=S;e['preventDefault']();if(e['dataTransfer']){const f=e[V(0x2bc)]['types']['includes'](SAME_TREE_MOVE_MIME);e[V(0x2bc)][V(0x2b1)]=f?'move':V(0x2a8);}}),d[S(0x291)](S(0x230),e=>{const W=S;e[W(0x205)]();const f=e['dataTransfer']?.[W(0x1d7)]['includes'](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this['_commandListFancyTree'][W(0x26a)][W(0x23b)],h=g?.[g[W(0x270)]-0x1];if(h)this[W(0x2b3)][W(0x208)](h,'after');this['_draggedNode'][W(0x1f1)](W(0x29f),![]);}else{const i=e['dataTransfer']?.['getData'](W(0x1de));if(i){const j={'type':i};this['_commandListFancyTree']['root']['addChildren'](this[W(0x1d9)](j));}}}),this['shadowRoot']['adoptedStyleSheets']=[c,defaultStyle,SimpleScriptEditor['style']];}async['ready'](){const X=P;this[X(0x1e2)](),this[X(0x212)](null,!![]),this[X(0x218)]();let d=async k=>{const Y=X;let l=new VisualizationPropertyGrid();l[Y(0x27e)]=this['visualizationHandler'],l['visualizationShell']=this[Y(0x1fa)],l['serviceContainer']=this['serviceContainer'],l[Y(0x2b4)]=this[Y(0x2b4)],l[Y(0x22b)]=Y(0x2af),l['getTypeInfo']=(n,o)=>typeInfoFromJsonSchema(this[Y(0x283)],n,o),l[Y(0x234)]=![],l['typeName']=Y(0x299),l['title']='Complex\x20for\x20\x22'+k['propertyPath']+'\x22';if(typeof k['value']===Y(0x22e))l[Y(0x1d6)]=k[Y(0x23f)]??{};else l[Y(0x1d6)]={};l[Y(0x209)]=n=>{const Z=Y;if(n['bindabletype']=='property')l['setPropertyValue'](Z(0x231),Z(0x20c));else n['bindabletype']==Z(0x255)?l['setPropertyValue']('source',Z(0x255)):l[Z(0x249)]('source',Z(0x27f));l[Z(0x249)]('name',n[Z(0x213)]),l['refresh']();};let m=await this[Y(0x1fa)][Y(0x20f)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l['selectedObject']),this[Y(0x1d5)][Y(0x1f9)]());},e=async k=>{const a0=X,l=new CodeViewMonaco();l[a0(0x1eb)]='javascript',l['style']['position']='relative',l[a0(0x28d)]=k[a0(0x23f)]??'';const m=await this[a0(0x1fa)][a0(0x20f)](l,{'title':'Edit\x20formula','x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this[a0(0x1d5)][a0(0x249)](k[a0(0x233)],l[a0(0x28d)]),this[a0(0x1d5)]['refresh']());};const f=['signal',X(0x20c),'elementProperty','signalInProperty',X(0x2a9),'parameter',X(0x255),'complexString','complexSignal','expression'],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([X(0x1ef),X(0x1f4),X(0x243),'class','const','continue',X(0x216),'default',X(0x296),'do','else',X(0x288),'extends',X(0x2a1),'for','function','if','import','in',X(0x262),'new',X(0x24a),'super','switch','this',X(0x24d),'try',X(0x20b),'var','void','while',X(0x2b5),X(0x290),X(0x236),'static','enum',X(0x219),'implements','package',X(0x27d),X(0x260),'private',X(0x222),X(0x1f6),'true','false','undefined','arguments','eval']),i={'signal':X(0x210),'property':'read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','elementProperty':X(0x271),'signalInProperty':X(0x1dd),'event':X(0x2a3),'parameter':'a\x20parameter\x20you\x20hand\x20over','context':'a\x20value\x20of\x20the\x20context','complexString':'a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','complexSignal':X(0x258),'expression':'js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object'};let j=async k=>{const a2=X,l=(k['value']??[])['map'](E=>({...E})),m=E=>{const a1=b,F=(l[E][a1(0x29e)]??'')[a1(0x26d)]();if(!F)return null;if(!g['test'](F))return'\x22'+F+a1(0x21a);if(h['has'](F))return'\x22'+F+a1(0x277);if(l[a1(0x26f)]((G,H)=>H!==E&&(G[a1(0x29e)]??'')[a1(0x26d)]()===F))return'\x22'+F+a1(0x272);return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[a2(0x278)]('div');o[a2(0x289)][a2(0x225)]='display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;';const p=document['createElement'](a2(0x248));p[a2(0x289)][a2(0x225)]='display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;';const q=document['createElement'](a2(0x29b));q['textContent']=a2(0x1f3),q[a2(0x289)]['cssText']=a2(0x22d);const r=document[a2(0x278)]('span');r['textContent']=a2(0x2b8),r[a2(0x289)][a2(0x225)]=a2(0x211);const s=document[a2(0x278)]('span');s['textContent']=a2(0x1ec),s[a2(0x289)][a2(0x225)]=a2(0x1e4);const t=document[a2(0x278)](a2(0x29b));t['style'][a2(0x225)]=a2(0x23c),p['append'](q,r,s,t),o[a2(0x1d3)](p);const u=document[a2(0x278)](a2(0x248));u[a2(0x289)][a2(0x225)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o['appendChild'](u);const v=document['createElement']('div');v['style'][a2(0x225)]=a2(0x280);const w=document['createElement']('div');w['style'][a2(0x225)]=a2(0x228);const x=document[a2(0x278)]('div');x[a2(0x289)]['cssText']=a2(0x22c),v[a2(0x28a)](w,x);const y=E=>{const a3=a2;w['textContent']=a3(0x28e)+E,x['textContent']=i[E]??'';},z=[],A=()=>{const a4=a2;l[a4(0x281)]((E,F)=>{const a5=a4,G=z[F];if(!G)return;const H=m(F);G[a5(0x275)]=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+'\x20if\x20empty)',G['style']['borderColor']=H?'#c0392b':'',G['style'][a5(0x224)]=H?a5(0x259):'';});},B=()=>{const a6=a2;u[a6(0x214)]='',z['length']=0x0,l['forEach']((E,F)=>{const a7=a6,G=document[a7(0x278)](a7(0x248));G[a7(0x289)]['cssText']=a7(0x2a5);const H=document['createElement']('input');H['value']=E[a7(0x29e)]??'',H['placeholder']='__'+F,H[a7(0x289)][a7(0x225)]=n+a7(0x2bd),H['oninput']=()=>{const a8=a7;E['varName']=H[a8(0x23f)]||undefined,A();},z[a7(0x21f)](H),G[a7(0x1d3)](H);const I=document['createElement']('select');I[a7(0x289)]['cssText']=n+a7(0x221);for(const M of f){const N=document[a7(0x278)]('option');N['value']=M,N['textContent']=M;if(E[a7(0x231)]===M)N[a7(0x1e0)]=!![];I['appendChild'](N);}I['onchange']=()=>{const a9=a7;E[a9(0x231)]=I[a9(0x23f)],y(I['value']);},I[a7(0x27c)]=()=>y(I[a7(0x23f)]),G['appendChild'](I);const J=document['createElement'](a7(0x1db));J['value']=E['name']??'',J['placeholder']='e.g.\x20srm.rbg{__tagRoot}.error',J[a7(0x289)][a7(0x225)]=n+a7(0x2aa),J[a7(0x1f7)]=()=>{const aa=a7;E['name']=J[aa(0x23f)];},G[a7(0x1d3)](J);const K=document[a7(0x278)]('button');K['title']='Remove\x20signal',K['style'][a7(0x225)]=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document[a7(0x278)](a7(0x273));L[a7(0x1ea)]=assetsPath+'icons/delete.svg',L['style']['cssText']=a7(0x29d),K['appendChild'](L),K[a7(0x266)]=()=>{const ab=a7;l[ab(0x297)](F,0x1),B();},G[a7(0x1d3)](K),u['appendChild'](G);}),A();};B();const C=document[a2(0x278)](a2(0x256));C[a2(0x2b9)]='+\x20Add\x20signal',C[a2(0x289)][a2(0x225)]=n+'\x20align-self:flex-start;\x20padding:0\x208px;',C[a2(0x266)]=()=>{const ac=a2;l['push']({'source':ac(0x27f),'name':''}),B();},o['appendChild'](C),y(l[0x0]?.['source']??a2(0x27f)),o[a2(0x1d3)](v);const D=await this[a2(0x1fa)][a2(0x20f)](o,{'title':'Edit\x20signals','x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this['_propertygrid']['setPropertyValue'](k[a2(0x233)],l),this['_propertygrid'][a2(0x1f9)]());};this['_propertygrid']['visualizationHandler']=this['visualizationHandler'],this[X(0x1d5)]['visualizationShell']=this[X(0x1fa)],this[X(0x1d5)][X(0x24b)]=this[X(0x24b)],this['_propertygrid'][X(0x2b4)]=this['instanceServiceContainer'],this[X(0x1d5)][X(0x22b)]=X(0x2af),this[X(0x1d5)][X(0x240)](0x82),this['_propertygrid'][X(0x268)]=(k,l)=>{const ad=X,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m[ad(0x237)]['filter'](n=>n[ad(0x1ff)]!=='trueCommands'&&n['name']!==ad(0x23d))),m;},this[X(0x1d5)][X(0x26c)]=async(k,l,m,n,o)=>{const ae=X;if(!k['specialAllreadyAdded']){k['specialAllreadyAdded']=!![];if(k['format']===ae(0x20a)){}else{if(k['format']===ae(0x1e9)){let p=document['createElement']('button');p[ae(0x289)]['height']=ae(0x2c0),p['style']['position']=ae(0x1ee),p[ae(0x289)]['display']=ae(0x28f),p[ae(0x289)][ae(0x200)]='center',p['style'][ae(0x267)]=ae(0x263),p[ae(0x289)][ae(0x245)]='content-box',p[ae(0x1d8)]=ae(0x20e),p[ae(0x266)]=()=>{const af=ae;this[af(0x1d5)]['setPropertyValue'](m,undefined),this['_propertygrid']['refresh']();},n['nodeElem']['insertAdjacentElement'](ae(0x257),p);const q=Array['isArray'](l)?l:[];let r=document['createElement']('div');r['style'][ae(0x1d4)]='flex';let s=document[ae(0x278)]('span');s[ae(0x1d8)]=q[ae(0x24f)]((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.[ae(0x231)]??'')+':'+(u?.[ae(0x1ff)]??''))['join'](',\x20'),s['style']['overflow']='hidden',s[ae(0x289)]['whiteSpace']='nowrap',s[ae(0x289)][ae(0x206)]=ae(0x2a0),s[ae(0x289)][ae(0x20d)]='1',s['title']=JSON[ae(0x23a)](q),r['appendChild'](s);let t=document['createElement']('button');return t['innerText']=ae(0x2bf),t['onclick']=()=>{j({'value':q,'propertyPath':m});},r[ae(0x1d3)](t),n['nodeElem']['style']['display']='flex',r;}else{if(k['format']===ae(0x203)){const u=document['createElement']('div');u['style'][ae(0x225)]='display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;';const v=new CodeViewMonaco();v[ae(0x1eb)]='javascript',v[ae(0x21e)]=!![],v['style'][ae(0x225)]='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v['code']=l??'',v['addEventListener'](ae(0x1e7),()=>{const ag=ae;this[ag(0x1d5)][ag(0x249)](m,v['code']);}),u['appendChild'](v);const w=document['createElement']('button');return w['innerText']=ae(0x2bf),w[ae(0x275)]=ae(0x2a7),w[ae(0x289)][ae(0x225)]=ae(0x28c),w['onclick']=()=>e({'value':v[ae(0x28d)],'propertyPath':m}),u[ae(0x1d3)](w),n['nodeElem']['style']['display']='flex',u;}else{if(typeof l===ae(0x22e)&&l!==null||k['format']===ae(0x2ba)){let x=document[ae(0x278)](ae(0x256));x[ae(0x289)][ae(0x24c)]='calc(100%\x20-\x206px)',x[ae(0x289)]['position']=ae(0x1ee),x[ae(0x289)]['display']='flex',x[ae(0x289)]['justifyContent']='center',x[ae(0x289)][ae(0x267)]='20px',x[ae(0x289)][ae(0x245)]=ae(0x22a),x['innerText']=ae(0x20e),x['onclick']=()=>{const ah=ae;this[ah(0x1d5)][ah(0x249)](m,undefined),this['_propertygrid']['refresh']();},n[ae(0x25d)]['insertAdjacentElement'](ae(0x257),x);let y=document['createElement']('div');y[ae(0x289)]['display']=ae(0x28f);let z=document[ae(0x278)](ae(0x29b));if(l)z['innerText']=(l[ae(0x231)]??'')+':\x20'+(l['name']??'');else z[ae(0x1d8)]='';z[ae(0x289)][ae(0x2ad)]='hidden',z[ae(0x289)][ae(0x1fe)]=ae(0x27a),z['style'][ae(0x206)]='ellipsis',z[ae(0x289)]['flexGrow']='1',z[ae(0x275)]=JSON[ae(0x23a)](l),y[ae(0x1d3)](z);let A=document[ae(0x278)](ae(0x256));return A[ae(0x1d8)]='...',A['onclick']=()=>{d({'value':l,'propertyPath':m});},y[ae(0x1d3)](A),n[ae(0x25d)][ae(0x289)]['display']='flex',y;}else{let B=document[ae(0x278)]('button');B[ae(0x289)][ae(0x24c)]='calc(100%\x20-\x206px)',B['style']['position']='relative',B[ae(0x289)]['display']=ae(0x28f),B['style'][ae(0x200)]=ae(0x2ae),B[ae(0x289)]['width']='20px',B[ae(0x289)]['boxSizing']='content-box',B[ae(0x275)]='complex\x20property\x20value',B[ae(0x289)][ae(0x2bb)]=ae(0x1f8),B['innerText']=ae(0x2bf),B[ae(0x266)]=()=>{d({'value':l,'propertyPath':m});},n[ae(0x25d)]['insertAdjacentElement'](ae(0x257),B),n['nodeElem'][ae(0x289)][ae(0x1d4)]='flex';}}}}}return null;},this[X(0x1d5)][X(0x279)]['on'](k=>{const ai=X;ContextMenu[ai(0x1e6)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':ai(0x264),'action':async()=>{const aj=ai,l=prompt('enter\x20value:');l&&(this[aj(0x1d5)]['setPropertyValue'](k['propertyPath'],l),this[aj(0x1d5)]['refresh']());}},{'title':'remove\x20complex\x20value','action':async()=>{const ak=ai;this[ak(0x1d5)]['setPropertyValue'](k['propertyPath'],undefined),this[ak(0x1d5)][ak(0x1f9)]();}}],k['event']);});}['helpClicked'](){const al=P,d=document[al(0x278)]('iframe');d['srcdoc']=simpleScriptEditorHelpHtml,d[al(0x289)]['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[al(0x1fa)]['openModal'](d,{'title':'Simple\x20Script\x20Editor\x20Help','parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[al(0x239)]['emit']();}[P(0x2b0)](){const am=P;if(!this['_showingCode']){const e=JSON['stringify']({'commands':this[am(0x244)]()},null,0x2);this[am(0x1e8)][am(0x1da)](e),this[am(0x24e)](!![]);return;}const d=this['_parseCodeViewScript']();if(!d)return;this[am(0x24e)](![]),this[am(0x29a)](d);}[P(0x24e)](d){const an=P;this[an(0x1e8)][an(0x21b)]['toggle'](an(0x250),d),this[an(0x232)][an(0x21b)][an(0x223)]('hidden',d),this['_splitView'][an(0x21b)]['toggle']('code-mode',d),this[an(0x265)][an(0x220)]=d,this['_codeToggleBtn']['innerText']=d?an(0x2b2):'Code',this['_showingCode']=d;if(d)requestAnimationFrame(()=>this['_codeView'][an(0x284)]());}['_parseCodeViewScript'](){const ao=P;let d;try{d=JSON['parse'](this['_codeView']['getText']());}catch(f){return alert('Invalid\x20JSON:\x0a'+f[ao(0x1f5)]),null;}if(!Array[ao(0x242)](d?.['commands']))return alert(ao(0x204)),null;return d;}['loadScript'](d){const ap=P;this['_script']=d;this[ap(0x27b)]&&(this['_commandListFancyTree']['destroy'](),this['_commandListDiv']=this[ap(0x298)](ap(0x207)));let e=[];for(let f of this['_script']['commands']){f=ScriptUpgrades[ap(0x215)](f),e['push'](this['createTreeItem'](f));}this[ap(0x27b)]=new Wunderbaum({...defaultOptions,'element':this['_commandListDiv'],'icon':![],'source':e,'activate':g=>{const aq=ap;this['_propertygrid'][aq(0x1d6)]=g[aq(0x1fc)][aq(0x286)]['data']['item']??null;},'render':g=>{const ar=ap,h=!!g[ar(0x1fc)]['data'][ar(0x286)]?.['branch'];if(g['isNew']){g[ar(0x25d)]['oncontextmenu']=k=>{return k['preventDefault'](),![];};const j=document[ar(0x278)]('span');j['style']['cssText']=ar(0x241),g['nodeElem']['prepend'](j);if(!h){const k=document['createElement']('div');k['className']=ar(0x23e),k[ar(0x275)]='Drag\x20to\x20reorder',k['innerHTML']=ar(0x235),g[ar(0x25d)]['prepend'](k);const l=g['nodeElem']['parentElement'],m=document['createElement']('span');m['style']['cssText']=ar(0x2b7),g['nodeElem'][ar(0x1d3)](m);const n=document[ar(0x278)](ar(0x248));n['className']='cmd';const o=document['createElement']('img');o['src']=assetsPath+'icons/copy.svg',o[ar(0x275)]='Duplicate',o[ar(0x266)]=()=>{const as=ar,q=structuredClone(g[as(0x1fc)]['data'][as(0x286)][as(0x274)]),r=g['node'][as(0x25e)][as(0x1e3)](this['createTreeItem'](q));r['moveTo'](g['node'],as(0x251));};const p=document[ar(0x278)]('img');p['src']=assetsPath+ar(0x26e),p['title']='Remove',p['onclick']=()=>g['node'][ar(0x246)](),n['append'](o,p),l[ar(0x1d3)](n),g[ar(0x25d)]['_reservedRowWidth']=j[ar(0x253)]+m['offsetWidth'];}else g[ar(0x25d)]['_reservedRowWidth']=j[ar(0x253)];}const i=g['nodeElem'][ar(0x2ac)]??0x0;if(i){const q=g['nodeElem']['querySelector'](ar(0x226));if(q){const r=parseFloat(q[ar(0x289)]['width']);if(!isNaN(r))q['style']['width']=Math['max'](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const at=ap;if(!this[at(0x21d)])return![];return this[at(0x2b3)]=g['node'],g[at(0x2a9)][at(0x2bc)]['effectAllowed']='move',g['event']['dataTransfer'][at(0x2b1)]='move',g[at(0x2a9)][at(0x2bc)]['setData'](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{const au=ap;this[au(0x2b3)]=null;},'dragEnter':g=>{const av=ap,h=g[av(0x2a9)][av(0x2bc)]?.['types'][av(0x25a)](SAME_TREE_MOVE_MIME);g[av(0x2a9)][av(0x2bc)]['dropEffect']=h?av(0x1f2):av(0x2a8);const i=!!g['node']['data'][av(0x286)]?.[av(0x1e5)];return i?new Set([av(0x1e1)]):new Set([av(0x2ab),av(0x251)]);},'dragOver':g=>{const aw=ap,h=g[aw(0x2a9)]['dataTransfer']?.[aw(0x1d7)]['includes'](SAME_TREE_MOVE_MIME);g['event'][aw(0x2bc)][aw(0x2b1)]=h?'move':aw(0x2a8);},'drop':async g=>{const ax=ap,h=g['event']['dataTransfer']?.[ax(0x1d7)]['includes'](SAME_TREE_MOVE_MIME);if(g[ax(0x294)]===ax(0x1e1)){if(h&&this[ax(0x2b3)])this['_draggedNode'][ax(0x208)](g['node'],'appendChild'),this[ax(0x2b3)][ax(0x1f1)]('wb-drag-source',![]);else{const j=g['event'][ax(0x2bc)]?.['getData']('text/plain');j&&g[ax(0x1fc)]['addChildren'](this['createTreeItem']({'type':j}));}return;}const i=g[ax(0x294)]=='before'?ax(0x2ab):ax(0x251);if(h&&this[ax(0x2b3)])this['_draggedNode'][ax(0x208)](g['node'],i),this['_draggedNode']['setClass']('wb-drag-source',![]);else{const k=g[ax(0x2a9)][ax(0x2bc)]?.[ax(0x293)]('text/plain');if(k){const l={'type':k},m=this['createTreeItem'](l),n=g[ax(0x1fc)][ax(0x25e)]['addChildren'](m);n[ax(0x208)](g[ax(0x1fc)],i);}}}}}),this['_commandListFancyTree'][ap(0x26a)][ap(0x23b)]?.[0x0]?.[ap(0x252)]();}[P(0x1d9)](d){const ay=P;if(d['type']==='If'){const e=d;return e[ay(0x2be)]??=[],e[ay(0x23d)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':'true'},'children':e[ay(0x2be)]['map'](f=>this[ay(0x1d9)](f))},{'title':'else','expanded':!![],'data':{'branch':'else'},'children':e[ay(0x23d)][ay(0x24f)](f=>this['createTreeItem'](f))}]};}return{'title':d[ay(0x254)],'data':{'item':d}};}[P(0x2a2)](d){const az=P,e=d['data']['data']['item'];if(e[az(0x254)]==='If'){const f=d['children']?.[az(0x227)](h=>h[az(0x286)][az(0x286)]?.[az(0x1e5)]===az(0x1f0)),g=d['children']?.[az(0x227)](h=>h['data']['data']?.['branch']==='else');e[az(0x2be)]=(f?.['children']??[])['map'](h=>this[az(0x2a2)](h)),e['elseCommands']=(g?.['children']??[])['map'](h=>this['nodeToCommand'](h));}return e;}['_getBranchContainerNode'](d){const aA=P;let e=d;while(e){if(e[aA(0x286)]?.[aA(0x286)]?.['branch'])return e;e=e['parent'];}return null;}async['addCommand'](){const aB=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this[aB(0x1fb)],this[aB(0x25f)]),d[aB(0x275)]=aB(0x25b),d[aB(0x28b)]['on'](()=>{const aC=aB;if(d[aC(0x202)]){const f={'type':d[aC(0x202)]},g=this[aC(0x1d9)](f),h=this[aC(0x238)](this['_commandListFancyTree'][aC(0x247)]);if(h)h[aC(0x1e3)](g);else this[aC(0x27b)]['addChildren'](g);}});const e=new AbortController();d['closeRequested']['on'](()=>e[aB(0x285)]()),await this['visualizationShell']['openModal'](d,{'title':'Add\x20Script\x20Command','x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e[aB(0x27f)]});}['getScriptCommands'](){const aD=P;if(this['_showingCode']){const e=this['_parseCodeViewScript']();if(e)this['loadScript'](e);}let d=this[aD(0x27b)][aD(0x26a)]['children'];return d['map'](f=>this['nodeToCommand'](f));}}function a(){const aE=['3WceWKI','drop','source','_commandListDiv','propertyPath','showHead','<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>','let','properties','_getBranchContainerNode','helpRequested','stringify','children','flex:0\x200\x2022px;','elseCommands','drag-handle','value','setNameColumnWidth','display:inline-block;\x20width:24px;','isArray','catch','getScriptCommands','boxSizing','remove','activeNode','div','setPropertyValue','return','serviceContainer','height','throw','_showCodeView','map','visible','after','setActive','offsetWidth','type','context','button','afterbegin','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','#fdecea','includes','Add\x20Script\x20Command','_splitView','nodeElem','parent','commandDescriptions','interface','25PqNCAK','instanceof','20px','edit\x20string','_addCommandBtn','onclick','width','getTypeInfo','codeToggleBtn','root','.drag-handle','getSpecialEditorForType','trim','icons/delete.svg','some','length','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.','img','item','title','dragover','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','createElement','propertyNodeContextMenu','nowrap','_commandListFancyTree','onfocus','protected','visualizationHandler','signal','flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;','forEach','closest','propertiesTypeInfo','activated','abort','data','7904960hkWeOS','export','style','append','commandTypeChosen','flex:0\x200\x2028px;\x20width:20px;','code','Typ:\x20','flex','yield','addEventListener','47210elWwUI','getData','region','_title','delete','splice','_getDomElement','IScriptMultiplexValue','loadScript','span','_showingCode','width:12px;\x20height:12px;','varName','wb-drag-source','ellipsis','finally','nodeToCommand','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','application/x-simple-script-move','display:flex;\x20align-items:center;\x20gap:4px;','codeView','Open\x20in\x20larger\x20editor','copy','event','\x20flex:1\x201\x20auto;','before','_reservedRowWidth','overflow','center','script','toggleCodeView','dropEffect','Visual','_draggedNode','instanceServiceContainer','with','propertygrid','display:inline-block;\x20width:32px;','Typ','textContent','complex','opacity','dataTransfer','\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;','trueCommands','...','calc(100%\x20-\x206px)','_codeToggleBtn','appendChild','display','_propertygrid','selectedObject','types','innerText','createTreeItem','update','input','5044296zUDKpU','read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','text/plain','171OkxRuN','selected','over','_parseAttributesToProperties','addChildren','flex:1\x201\x20auto;','branch','show','code-changed','_codeView','signalList','src','language','Signal','375764TzrGyD','relative','break','true','setClass','move','Name','case','message','null','oninput','0.2','refresh','visualizationShell','scriptCommandsTypeInfo','node','474620ohgFyZ','whiteSpace','name','justifyContent','target','selectedType','formula','The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.','preventDefault','textOverflow','commandList','moveTo','bindingDoubleClicked','collection','typeof','property','flexGrow','del','openConfirmation','read\x20the\x20value\x20from\x20a\x20Signal','flex:0\x200\x20130px;','_bindingsParse','fullName','innerHTML','upgradeScriptCommand','debugger','28745277JDwFcu','_assignEvents','await','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','classList','33XIWpDI','_dragFromHandle','singleRow','push','disabled','\x20flex:0\x200\x20130px;','public','toggle','backgroundColor','cssText','span.wb-title','find','font-weight:bold;\x20margin-bottom:2px;','266724mNdNXo','content-box','bindableObjectsTarget','color:#333;\x20white-space:pre-line;','flex:0\x200\x20120px;','object'];a=function(){return aE;};return a();}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);