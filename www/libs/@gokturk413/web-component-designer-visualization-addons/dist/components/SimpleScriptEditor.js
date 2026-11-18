const P=b;(function(d,e){const O=b,f=d();while(!![]){try{const g=parseInt(O(0x28b))/0x1+parseInt(O(0x1bf))/0x2+parseInt(O(0x1e1))/0x3*(parseInt(O(0x293))/0x4)+parseInt(O(0x22c))/0x5+-parseInt(O(0x1fc))/0x6+parseInt(O(0x22e))/0x7+-parseInt(O(0x229))/0x8*(parseInt(O(0x1af))/0x9);if(g===e)break;else f['push'](f['shift']());}catch(h){f['push'](f['shift']());}}}(a,0x8057c));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@node-projects/base-custom-webcomponent';import{ContextMenu,assetsPath}from'@gokturk413/web-component-designer';import{typeInfoFromJsonSchema}from'@node-projects/propertygrid.webcomponent';import{defaultOptions,defaultStyle}from'@gokturk413/web-component-designer-widgets-wunderbaum';import{Wunderbaum}from'wunderbaum';import c from'wunderbaum/dist/wunderbaum.css'with{type:'css'};import{VisualizationPropertyGrid}from'./VisualizationPropertyGrid.js';import{CodeViewMonaco}from'@gokturk413/web-component-designer-codeview-monaco';import{SimpleScriptCommandPicker}from'./SimpleScriptCommandPicker.js';import{simpleScriptEditorHelpHtml}from'./SimpleScriptEditorHelp.js';import{nativeScriptCommandDescriptions}from'../scripting/ScriptCommandsDescriptions.js';import'@node-projects/splitview.webcomponent';function b(c,d){c=c-0x1a4;const e=a();let f=e[c];return f;}import{ScriptUpgrades}from'../scripting/ScriptUpgrader.js';const SAME_TREE_MOVE_MIME='application/x-simple-script-move';export class SimpleScriptEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [P(0x261)]=html`
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
  `;static ['is']=P(0x264);[P(0x1c2)];get['title'](){return this['_title'];}set['title'](d){const Q=P;this[Q(0x1c2)]=d;}['serviceContainer'];['instanceServiceContainer'];['visualizationHandler'];[P(0x288)];['scriptCommandsTypeInfo'];['propertiesTypeInfo'];['helpRequested']=new TypedEvent();[P(0x1cb)]={...nativeScriptCommandDescriptions};[P(0x1ef)];[P(0x271)];['_commandListFancyTree'];['_propertygrid'];['_splitView'];[P(0x1b5)];['_codeToggleBtn'];['_addCommandBtn'];['_showingCode']=![];['_dragFromHandle']=![];['_draggedNode']=null;constructor(){const R=P;super(),this['_restoreCachedInititalValues'](),this[R(0x271)]=this['_getDomElement'](R(0x24a)),this[R(0x290)]=this[R(0x21a)](R(0x1de)),this[R(0x273)]=this['_getDomElement']('splitView'),this[R(0x1b5)]=this['_getDomElement']('codeView'),this[R(0x23a)]=this['_getDomElement']('codeToggleBtn'),this[R(0x222)]=this[R(0x21a)](R(0x1b2));const d=this[R(0x21a)](R(0x1c6));d['addEventListener']('mousedown',e=>{const S=R;this['_dragFromHandle']=!!e[S(0x1fe)]?.[S(0x1aa)]('.drag-handle');}),document['addEventListener']('dragend',()=>{this['_draggedNode']=null;},!![]),d['addEventListener'](R(0x254),e=>{const T=R;e['preventDefault']();if(e['dataTransfer']){const f=e['dataTransfer']['types'][T(0x244)](SAME_TREE_MOVE_MIME);e[T(0x1b6)]['dropEffect']=f?T(0x256):'copy';}}),d['addEventListener'](R(0x27c),e=>{const U=R;e['preventDefault']();const f=e[U(0x1b6)]?.['types'][U(0x244)](SAME_TREE_MOVE_MIME);if(f&&this['_draggedNode']){const g=this[U(0x26d)][U(0x242)]['children'],h=g?.[g[U(0x205)]-0x1];if(h)this[U(0x21f)]['moveTo'](h,U(0x209));this['_draggedNode']['setClass']('wb-drag-source',![]);}else{const i=e['dataTransfer']?.['getData']('text/plain');if(i){const j={'type':i};this['_commandListFancyTree'][U(0x242)]['addChildren'](this['createTreeItem'](j));}}}),this[R(0x23e)][R(0x1d3)]=[c,defaultStyle,SimpleScriptEditor[R(0x1ff)]];}async[P(0x285)](){const V=P;this['_parseAttributesToProperties'](),this[V(0x24c)](null,!![]),this['_assignEvents']();let d=async k=>{const W=V;let l=new VisualizationPropertyGrid();l['visualizationHandler']=this[W(0x1da)],l[W(0x288)]=this[W(0x288)],l['serviceContainer']=this[W(0x1a9)],l['instanceServiceContainer']=this[W(0x1c9)],l['bindableObjectsTarget']=W(0x282),l['getTypeInfo']=(n,o)=>typeInfoFromJsonSchema(this['propertiesTypeInfo'],n,o),l[W(0x27a)]=![],l['typeName']=W(0x21d),l[W(0x265)]=W(0x233)+k['propertyPath']+'\x22';if(typeof k['value']==='object')l['selectedObject']=k[W(0x21e)]??{};else l[W(0x24b)]={};l[W(0x1d4)]=n=>{const X=W;if(n[X(0x276)]==X(0x214))l[X(0x20c)](X(0x278),'property');else n[X(0x276)]==X(0x1a8)?l['setPropertyValue']('source','context'):l['setPropertyValue'](X(0x278),'signal');l[X(0x20c)](X(0x23c),n[X(0x1b0)]),l[X(0x240)]();};let m=await this[W(0x288)][W(0x225)](l,{'x':0x64,'y':0x64,'width':0x190,'height':0x1f4,'parent':this});m&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l['selectedObject']),this[W(0x290)][W(0x240)]());},e=async k=>{const Y=V,l=new CodeViewMonaco();l[Y(0x1bc)]=Y(0x250),l['style'][Y(0x280)]=Y(0x275),l['code']=k[Y(0x21e)]??'';const m=await this[Y(0x288)][Y(0x225)](l,{'title':Y(0x259),'x':0x64,'y':0x32,'width':0x2bc,'height':0x1c2,'parent':this});m&&(this['_propertygrid'][Y(0x20c)](k['propertyPath'],l['code']),this['_propertygrid']['refresh']());};const f=['signal','property',V(0x22b),'signalInProperty',V(0x204),'parameter',V(0x1a8),'complexString',V(0x27f),V(0x1ec)],g=/^[A-Za-z_$][A-Za-z0-9_$]*$/,h=new Set([V(0x1d0),V(0x1cf),V(0x238),'class','const','continue','debugger','default',V(0x1f9),'do',V(0x22d),V(0x268),V(0x27e),V(0x284),'for','function','if',V(0x1c8),'in',V(0x279),V(0x263),'return',V(0x235),V(0x26a),V(0x1d2),'throw','try','typeof',V(0x252),'void',V(0x1f5),V(0x266),V(0x20e),V(0x232),'static',V(0x227),'await',V(0x23d),V(0x245),'protected',V(0x1b8),V(0x239),V(0x1ac),'null','true',V(0x22a),V(0x20a),V(0x1ce),'eval']),i={'signal':V(0x1e9),'property':'read\x20the\x20value\x20from\x20a\x20property\x20of\x20the\x20customControl\x20(not\x20usable\x20in\x20screens)','elementProperty':V(0x26b),'signalInProperty':V(0x1d1),'event':V(0x25e),'parameter':V(0x23f),'context':V(0x223),'complexString':'a\x20string\x20with\x20signals\x20(contained\x20in\x20{})','complexSignal':V(0x1ee),'expression':V(0x243)};let j=async k=>{const Z=V,l=(k[Z(0x21e)]??[])['map'](E=>({...E})),m=E=>{const a0=Z,F=(l[E][a0(0x241)]??'')['trim']();if(!F)return null;if(!g['test'](F))return'\x22'+F+a0(0x220);if(h[a0(0x1df)](F))return'\x22'+F+a0(0x211);if(l[a0(0x1f3)]((G,H)=>H!==E&&(G['varName']??'')['trim']()===F))return'\x22'+F+'\x22\x20is\x20used\x20by\x20more\x20than\x20one\x20signal.';return null;},n='height:22px;\x20box-sizing:border-box;\x20font-size:12px;',o=document[Z(0x28d)]('div');o['style']['cssText']='display:flex;\x20flex-direction:column;\x20gap:6px;\x20padding:8px;\x20height:100%;\x20box-sizing:border-box;\x20overflow-y:auto;\x20font-size:12px;';const p=document['createElement']('div');p['style']['cssText']='display:flex;\x20align-items:center;\x20gap:4px;\x20font-weight:bold;';const q=document['createElement']('span');q['textContent']=Z(0x21c),q['style'][Z(0x248)]='flex:0\x200\x20120px;';const r=document[Z(0x28d)](Z(0x1be));r['textContent']='Typ',r[Z(0x1ff)][Z(0x248)]=Z(0x215);const s=document[Z(0x28d)]('span');s[Z(0x1c4)]='Signal',s[Z(0x1ff)][Z(0x248)]=Z(0x212);const t=document[Z(0x28d)](Z(0x1be));t[Z(0x1ff)]['cssText']=Z(0x1ad),p[Z(0x1e5)](q,r,s,t),o['appendChild'](p);const u=document[Z(0x28d)](Z(0x1dc));u['style'][Z(0x248)]='display:flex;\x20flex-direction:column;\x20gap:4px;',o[Z(0x226)](u);const v=document['createElement']('div');v['style'][Z(0x248)]='flex:0\x200\x20auto;\x20margin-top:4px;\x20padding-top:6px;\x20border-top:1px\x20solid\x20#ccc;\x20font-size:12px;';const w=document[Z(0x28d)]('div');w['style']['cssText']='font-weight:bold;\x20margin-bottom:2px;';const x=document['createElement']('div');x[Z(0x1ff)]['cssText']=Z(0x210),v['append'](w,x);const y=E=>{const a1=Z;w[a1(0x1c4)]=a1(0x26f)+E,x[a1(0x1c4)]=i[E]??'';},z=[],A=()=>{l['forEach']((E,F)=>{const a2=b,G=z[F];if(!G)return;const H=m(F);G[a2(0x265)]=H??'Variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+F+a2(0x25d),G[a2(0x1ff)][a2(0x230)]=H?a2(0x26e):'',G[a2(0x1ff)][a2(0x1eb)]=H?'#fdecea':'';});},B=()=>{const a3=Z;u[a3(0x208)]='',z[a3(0x205)]=0x0,l[a3(0x206)]((E,F)=>{const a4=a3,G=document['createElement']('div');G[a4(0x1ff)][a4(0x248)]='display:flex;\x20align-items:center;\x20gap:4px;';const H=document['createElement'](a4(0x234));H['value']=E[a4(0x241)]??'',H['placeholder']='__'+F,H['style']['cssText']=n+a4(0x236),H[a4(0x213)]=()=>{E['varName']=H['value']||undefined,A();},z[a4(0x1d8)](H),G[a4(0x226)](H);const I=document[a4(0x28d)]('select');I['style']['cssText']=n+a4(0x1c0);for(const M of f){const N=document['createElement'](a4(0x1c7));N[a4(0x21e)]=M,N['textContent']=M;if(E['source']===M)N[a4(0x272)]=!![];I[a4(0x226)](N);}I[a4(0x1ea)]=()=>{const a5=a4;E['source']=I['value'],y(I[a5(0x21e)]);},I[a4(0x246)]=()=>y(I[a4(0x21e)]),G[a4(0x226)](I);const J=document['createElement'](a4(0x234));J[a4(0x21e)]=E['name']??'',J[a4(0x28e)]='e.g.\x20srm.rbg{__tagRoot}.error',J['style']['cssText']=n+a4(0x1dd),J['oninput']=()=>{const a6=a4;E[a6(0x23c)]=J[a6(0x21e)];},G[a4(0x226)](J);const K=document[a4(0x28d)]('button');K['title']=a4(0x277),K['style']['cssText']=n+'\x20flex:0\x200\x2022px;\x20width:22px;\x20padding:0;\x20display:flex;\x20align-items:center;\x20justify-content:center;';const L=document['createElement']('img');L['src']=assetsPath+'icons/delete.svg',L['style'][a4(0x248)]=a4(0x218),K[a4(0x226)](L),K['onclick']=()=>{const a7=a4;l[a7(0x20b)](F,0x1),B();},G['appendChild'](K),u[a4(0x226)](G);}),A();};B();const C=document['createElement']('button');C[Z(0x1c4)]='+\x20Add\x20signal',C[Z(0x1ff)]['cssText']=n+Z(0x1ca),C[Z(0x1b4)]=()=>{const a8=Z;l[a8(0x1d8)]({'source':a8(0x1b9),'name':''}),B();},o[Z(0x226)](C),y(l[0x0]?.['source']??'signal'),o[Z(0x226)](v);const D=await this['visualizationShell'][Z(0x225)](o,{'title':'Edit\x20signals','x':0x64,'y':0x32,'width':0x1f4,'height':0x190,'parent':this});D&&(this['_propertygrid']['setPropertyValue'](k['propertyPath'],l),this['_propertygrid']['refresh']());};this['_propertygrid'][V(0x1da)]=this[V(0x1da)],this['_propertygrid']['visualizationShell']=this[V(0x288)],this['_propertygrid'][V(0x1a9)]=this['serviceContainer'],this[V(0x290)]['instanceServiceContainer']=this[V(0x1c9)],this[V(0x290)][V(0x1bd)]='script',this[V(0x290)]['setNameColumnWidth'](0x82),this[V(0x290)]['getTypeInfo']=(k,l)=>{const a9=V,m=typeInfoFromJsonSchema(this['scriptCommandsTypeInfo'],k,l);return m&&(l==='If'||k?.['type']==='If')&&(m['properties']=m[a9(0x1b3)][a9(0x1cd)](n=>n[a9(0x23c)]!=='trueCommands'&&n['name']!==a9(0x27b))),m;},this[V(0x290)]['getSpecialEditorForType']=async(k,l,m,n,o)=>{const aa=V;if(!k['specialAllreadyAdded']){k['specialAllreadyAdded']=!![];if(k[aa(0x1e2)]===aa(0x24f)){}else{if(k[aa(0x1e2)]==='signalList'){let p=document['createElement']('button');p['style']['height']='calc(100%\x20-\x206px)',p[aa(0x1ff)]['position']='relative',p['style'][aa(0x1c1)]=aa(0x1fb),p[aa(0x1ff)][aa(0x251)]=aa(0x1ba),p['style'][aa(0x1ed)]='20px',p[aa(0x1ff)][aa(0x1db)]=aa(0x221),p[aa(0x1bb)]='del',p['onclick']=()=>{const ab=aa;this[ab(0x290)][ab(0x20c)](m,undefined),this['_propertygrid'][ab(0x240)]();},n[aa(0x262)][aa(0x269)](aa(0x270),p);const q=Array[aa(0x201)](l)?l:[];let r=document[aa(0x28d)]('div');r['style'][aa(0x1c1)]='flex';let s=document[aa(0x28d)](aa(0x1be));s[aa(0x1bb)]=q['map']((u,w)=>(u?.['varName']||'__'+w)+':\x20'+(u?.[aa(0x278)]??'')+':'+(u?.['name']??''))[aa(0x28f)](',\x20'),s[aa(0x1ff)]['overflow']='hidden',s[aa(0x1ff)]['whiteSpace']=aa(0x1a4),s[aa(0x1ff)]['textOverflow']=aa(0x1d6),s[aa(0x1ff)]['flexGrow']='1',s['title']=JSON[aa(0x25a)](q),r['appendChild'](s);let t=document[aa(0x28d)]('button');return t['innerText']='...',t[aa(0x1b4)]=()=>{j({'value':q,'propertyPath':m});},r['appendChild'](t),n[aa(0x262)]['style']['display']='flex',r;}else{if(k['format']==='formula'){const u=document['createElement']('div');u['style'][aa(0x248)]=aa(0x253);const v=new CodeViewMonaco();v[aa(0x1bc)]='javascript',v['singleRow']=!![],v['style'][aa(0x248)]='flex:1\x201\x20auto;\x20min-width:0;\x20height:100%;\x20position:relative;\x20overflow:hidden;',v[aa(0x1c3)]=l??'',v[aa(0x292)](aa(0x24e),()=>{this['_propertygrid']['setPropertyValue'](m,v['code']);}),u['appendChild'](v);const w=document['createElement']('button');return w[aa(0x1bb)]='...',w['title']=aa(0x1cc),w[aa(0x1ff)][aa(0x248)]='flex:0\x200\x2028px;\x20width:20px;',w[aa(0x1b4)]=()=>e({'value':v['code'],'propertyPath':m}),u[aa(0x226)](w),n[aa(0x262)]['style']['display']=aa(0x1fb),u;}else{if(typeof l==='object'&&l!==null||k[aa(0x1e2)]==='complex'){let x=document['createElement']('button');x['style'][aa(0x25c)]=aa(0x1a6),x['style'][aa(0x280)]='relative',x[aa(0x1ff)][aa(0x1c1)]=aa(0x1fb),x[aa(0x1ff)]['justifyContent']=aa(0x1ba),x[aa(0x1ff)]['width']='20px',x['style'][aa(0x1db)]='content-box',x[aa(0x1bb)]='del',x[aa(0x1b4)]=()=>{const ac=aa;this[ac(0x290)]['setPropertyValue'](m,undefined),this[ac(0x290)]['refresh']();},n['nodeElem'][aa(0x269)](aa(0x270),x);let y=document[aa(0x28d)](aa(0x1dc));y['style'][aa(0x1c1)]='flex';let z=document['createElement'](aa(0x1be));if(l)z[aa(0x1bb)]=(l[aa(0x278)]??'')+':\x20'+(l['name']??'');else z[aa(0x1bb)]='';z['style'][aa(0x1ab)]='hidden',z[aa(0x1ff)]['whiteSpace']=aa(0x1a4),z['style']['textOverflow']=aa(0x1d6),z[aa(0x1ff)]['flexGrow']='1',z['title']=JSON[aa(0x25a)](l),y['appendChild'](z);let A=document['createElement'](aa(0x1d7));return A['innerText']=aa(0x1e4),A['onclick']=()=>{d({'value':l,'propertyPath':m});},y['appendChild'](A),n['nodeElem'][aa(0x1ff)]['display']='flex',y;}else{let B=document['createElement'](aa(0x1d7));B[aa(0x1ff)]['height']=aa(0x1a6),B['style'][aa(0x280)]='relative',B['style']['display']=aa(0x1fb),B['style']['justifyContent']=aa(0x1ba),B['style']['width']=aa(0x1b7),B[aa(0x1ff)][aa(0x1db)]=aa(0x221),B[aa(0x265)]='complex\x20property\x20value',B['style'][aa(0x27d)]='0.2',B[aa(0x1bb)]='...',B['onclick']=()=>{d({'value':l,'propertyPath':m});},n[aa(0x262)]['insertAdjacentElement'](aa(0x270),B),n[aa(0x262)][aa(0x1ff)][aa(0x1c1)]='flex';}}}}}return null;},this['_propertygrid'][V(0x286)]['on'](k=>{const ad=V;ContextMenu[ad(0x28a)]([{'title':'edit\x20complex\x20value','action':async()=>{d(k);}},{'title':'edit\x20string','action':async()=>{const ae=ad,l=prompt(ae(0x28c));l&&(this[ae(0x290)]['setPropertyValue'](k[ae(0x1fd)],l),this['_propertygrid']['refresh']());}},{'title':ad(0x260),'action':async()=>{const af=ad;this[af(0x290)]['setPropertyValue'](k['propertyPath'],undefined),this[af(0x290)][af(0x240)]();}}],k['event']);});}['helpClicked'](){const ag=P,d=document[ag(0x28d)]('iframe');d[ag(0x1fa)]=simpleScriptEditorHelpHtml,d['style'][ag(0x248)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['visualizationShell']['openModal'](d,{'title':ag(0x291),'parent':this,'x':-0x28a,'y':-0x64,'width':0x26c,'height':0x26c}),this[ag(0x24d)]['emit']();}['toggleCodeView'](){const ah=P;if(!this['_showingCode']){const e=JSON['stringify']({'commands':this['getScriptCommands']()},null,0x2);this[ah(0x1b5)][ah(0x1f8)](e),this[ah(0x294)](!![]);return;}const d=this[ah(0x20f)]();if(!d)return;this[ah(0x294)](![]),this[ah(0x20d)](d);}['_showCodeView'](d){const ai=P;this['_codeView']['classList'][ai(0x1e0)]('visible',d),this[ai(0x271)][ai(0x281)]['toggle']('hidden',d),this['_splitView']['classList'][ai(0x1e0)](ai(0x1f4),d),this[ai(0x222)][ai(0x25f)]=d,this['_codeToggleBtn'][ai(0x1bb)]=d?ai(0x249):'Code',this['_showingCode']=d;if(d)requestAnimationFrame(()=>this[ai(0x1b5)]['activated']());}['_parseCodeViewScript'](){const aj=P;let d;try{d=JSON['parse'](this['_codeView']['getText']());}catch(f){return alert(aj(0x258)+f['message']),null;}if(!Array['isArray'](d?.['commands']))return alert('The\x20JSON\x20must\x20have\x20a\x20\x22commands\x22\x20array.'),null;return d;}[P(0x20d)](d){const ak=P;this['_script']=d;this[ak(0x26d)]&&(this[ak(0x26d)][ak(0x22f)](),this[ak(0x271)]=this['_getDomElement'](ak(0x24a)));let e=[];for(let f of this[ak(0x1ef)]['commands']){f=ScriptUpgrades['upgradeScriptCommand'](f),e['push'](this[ak(0x1b1)](f));}this['_commandListFancyTree']=new Wunderbaum({...defaultOptions,'element':this[ak(0x271)],'icon':![],'source':e,'activate':g=>{const al=ak;this[al(0x290)][al(0x24b)]=g[al(0x1f2)][al(0x1f6)]['data']['item']??null;},'render':g=>{const am=ak,h=!!g[am(0x1f2)][am(0x1f6)]['data']?.[am(0x1d5)];if(g['isNew']){g['nodeElem'][am(0x203)]=k=>{return k['preventDefault'](),![];};const j=document['createElement'](am(0x1be));j['style'][am(0x248)]='display:inline-block;\x20width:24px;',g['nodeElem'][am(0x274)](j);if(!h){const k=document['createElement']('div');k[am(0x1f7)]=am(0x1a7),k['title']='Drag\x20to\x20reorder',k['innerHTML']=am(0x255),g[am(0x262)]['prepend'](k);const l=g['nodeElem']['parentElement'],m=document['createElement']('span');m[am(0x1ff)][am(0x248)]=am(0x1f0),g[am(0x262)]['appendChild'](m);const n=document['createElement'](am(0x1dc));n['className']='cmd';const o=document[am(0x28d)]('img');o[am(0x1c5)]=assetsPath+'icons/copy.svg',o[am(0x265)]='Duplicate',o['onclick']=()=>{const an=am,q=structuredClone(g['node']['data'][an(0x1f6)][an(0x228)]),r=g['node'][an(0x25b)][an(0x26c)](this[an(0x1b1)](q));r[an(0x1ae)](g[an(0x1f2)],'after');};const p=document['createElement']('img');p['src']=assetsPath+'icons/delete.svg',p['title']='Remove',p['onclick']=()=>g[am(0x1f2)]['remove'](),n['append'](o,p),l['appendChild'](n),g['nodeElem'][am(0x1e8)]=j[am(0x283)]+m['offsetWidth'];}else g['nodeElem']['_reservedRowWidth']=j[am(0x283)];}const i=g[am(0x262)][am(0x1e8)]??0x0;if(i){const q=g['nodeElem']['querySelector']('span.wb-title');if(q){const r=parseFloat(q[am(0x1ff)][am(0x1ed)]);if(!isNaN(r))q['style']['width']=Math['max'](0x0,r-i)+'px';}}},'dnd':{'guessDropEffect':!![],'preventRecursion':!![],'preventVoidMoves':![],'serializeClipboardData':![],'dragStart':g=>{const ao=ak;if(!this['_dragFromHandle'])return![];return this[ao(0x21f)]=g['node'],g[ao(0x204)][ao(0x1b6)][ao(0x207)]=ao(0x256),g[ao(0x204)][ao(0x1b6)]['dropEffect']='move',g[ao(0x204)][ao(0x1b6)][ao(0x247)](SAME_TREE_MOVE_MIME,'1'),!![];},'dragEnd':()=>{this['_draggedNode']=null;},'dragEnter':g=>{const ap=ak,h=g[ap(0x204)][ap(0x1b6)]?.['types'][ap(0x244)](SAME_TREE_MOVE_MIME);g[ap(0x204)]['dataTransfer'][ap(0x289)]=h?ap(0x256):'copy';const i=!!g['node']['data']['data']?.['branch'];return i?new Set(['over']):new Set(['before',ap(0x209)]);},'dragOver':g=>{const aq=ak,h=g['event'][aq(0x1b6)]?.['types'][aq(0x244)](SAME_TREE_MOVE_MIME);g['event'][aq(0x1b6)][aq(0x289)]=h?'move':aq(0x217);},'drop':async g=>{const ar=ak,h=g['event']['dataTransfer']?.['types'][ar(0x244)](SAME_TREE_MOVE_MIME);if(g[ar(0x1e7)]===ar(0x216)){if(h&&this[ar(0x21f)])this['_draggedNode']['moveTo'](g['node'],'appendChild'),this['_draggedNode']['setClass'](ar(0x1e3),![]);else{const j=g['event']['dataTransfer']?.['getData'](ar(0x237));j&&g['node']['addChildren'](this[ar(0x1b1)]({'type':j}));}return;}const i=g[ar(0x1e7)]=='before'?'before':'after';if(h&&this[ar(0x21f)])this['_draggedNode'][ar(0x1ae)](g['node'],i),this['_draggedNode'][ar(0x257)]('wb-drag-source',![]);else{const k=g['event']['dataTransfer']?.['getData'](ar(0x237));if(k){const l={'type':k},m=this['createTreeItem'](l),n=g['node']['parent']['addChildren'](m);n[ar(0x1ae)](g['node'],i);}}}}}),this[ak(0x26d)]['root'][ak(0x1a5)]?.[0x0]?.[ak(0x202)]();}[P(0x1b1)](d){const as=P;if(d['type']==='If'){const e=d;return e[as(0x200)]??=[],e[as(0x27b)]??=[],{'title':'If','expanded':!![],'data':{'item':d},'children':[{'title':'true','expanded':!![],'data':{'branch':as(0x287)},'children':e[as(0x200)]['map'](f=>this[as(0x1b1)](f))},{'title':as(0x22d),'expanded':!![],'data':{'branch':'else'},'children':e[as(0x27b)][as(0x224)](f=>this[as(0x1b1)](f))}]};}return{'title':d[as(0x1f1)],'data':{'item':d}};}[P(0x1d9)](d){const at=P,e=d['data'][at(0x1f6)]['item'];if(e[at(0x1f1)]==='If'){const f=d[at(0x1a5)]?.[at(0x1e6)](h=>h['data'][at(0x1f6)]?.[at(0x1d5)]==='true'),g=d[at(0x1a5)]?.['find'](h=>h[at(0x1f6)][at(0x1f6)]?.['branch']===at(0x22d));e['trueCommands']=(f?.['children']??[])[at(0x224)](h=>this[at(0x1d9)](h)),e[at(0x27b)]=(g?.[at(0x1a5)]??[])['map'](h=>this[at(0x1d9)](h));}return e;}[P(0x267)](d){const au=P;let e=d;while(e){if(e['data']?.['data']?.['branch'])return e;e=e[au(0x25b)];}return null;}async[P(0x231)](){const av=P,d=new SimpleScriptCommandPicker();d['loadCommands'](this['scriptCommandsTypeInfo'],this[av(0x1cb)]),d['title']=av(0x219),d['commandTypeChosen']['on'](()=>{const aw=av;if(d['selectedType']){const f={'type':d['selectedType']},g=this['createTreeItem'](f),h=this['_getBranchContainerNode'](this[aw(0x26d)]['activeNode']);if(h)h[aw(0x26c)](g);else this[aw(0x26d)]['addChildren'](g);}});const e=new AbortController();d['closeRequested']['on'](()=>e[av(0x23b)]()),await this[av(0x288)]['openModal'](d,{'title':av(0x219),'x':0x12c,'y':0x32,'width':0x26c,'height':0x190,'parent':this,'abortSignal':e['signal']});}['getScriptCommands'](){const ax=P;if(this[ax(0x21b)]){const e=this['_parseCodeViewScript']();if(e)this['loadScript'](e);}let d=this[ax(0x26d)]['root']['children'];return d[ax(0x224)](f=>this['nodeToCommand'](f));}}customElements['define'](SimpleScriptEditor['is'],SimpleScriptEditor);function a(){const ay=['true','visualizationShell','dropEffect','show','655427JCUsDk','enter\x20value:','createElement','placeholder','join','_propertygrid','Simple\x20Script\x20Editor\x20Help','addEventListener','4nCpshQ','_showCodeView','nowrap','children','calc(100%\x20-\x206px)','drag-handle','context','serviceContainer','closest','overflow','public','flex:0\x200\x2022px;','moveTo','131697zjhRim','fullName','createTreeItem','addCommandBtn','properties','onclick','_codeView','dataTransfer','20px','interface','signal','center','innerText','language','bindableObjectsTarget','span','1793026NJJfLW','\x20flex:0\x200\x20130px;','display','_title','code','textContent','src','listContent','option','import','instanceServiceContainer','\x20align-self:flex-start;\x20padding:0\x208px;','commandDescriptions','Open\x20in\x20larger\x20editor','filter','arguments','case','break','read\x20the\x20value\x20from\x20a\x20Signal\x20(wich\x20name\x20is\x20in\x20the\x20Property)','this','adoptedStyleSheets','bindingDoubleClicked','branch','ellipsis','button','push','nodeToCommand','visualizationHandler','boxSizing','div','\x20flex:1\x201\x20auto;','propertygrid','has','toggle','757257BmZVdw','format','wb-drag-source','...','append','find','region','_reservedRowWidth','read\x20the\x20value\x20from\x20a\x20Signal','onchange','backgroundColor','expression','width','read\x20the\x20value\x20from\x20a\x20signal\x20wich\x20name\x20is\x20build\x20here\x20(it\x20can\x20contain\x20other\x20signals\x20in\x20{})','_script','display:inline-block;\x20width:32px;','type','node','some','code-mode','while','data','className','update','delete','srcdoc','flex','523926ktUuEN','propertyPath','target','style','trueCommands','isArray','setActive','oncontextmenu','event','length','forEach','effectAllowed','innerHTML','after','undefined','splice','setPropertyValue','loadScript','yield','_parseCodeViewScript','color:#333;\x20white-space:pre-line;','\x22\x20is\x20a\x20reserved\x20word\x20and\x20cannot\x20be\x20used\x20as\x20a\x20variable\x20name.','flex:1\x201\x20auto;','oninput','property','flex:0\x200\x20130px;','over','copy','width:12px;\x20height:12px;','Add\x20Script\x20Command','_getDomElement','_showingCode','Name','IScriptMultiplexValue','value','_draggedNode','\x22\x20is\x20not\x20a\x20valid\x20JavaScript\x20variable\x20name.','content-box','_addCommandBtn','a\x20value\x20of\x20the\x20context','map','openConfirmation','appendChild','enum','item','1080XaJlsC','false','elementProperty','3143640jkUUwt','else','1087667nzeVAh','destroy','borderColor','addCommand','let','Complex\x20for\x20\x22','input','super','\x20flex:0\x200\x20120px;\x20min-width:\x20120px;\x20font-family:monospace;','text/plain','catch','private','_codeToggleBtn','abort','name','implements','shadowRoot','a\x20parameter\x20you\x20hand\x20over','refresh','varName','root','js\x20expression,\x20\x27ctx\x27\x20is\x20context\x20object','includes','package','onfocus','setData','cssText','Visual','commandList','selectedObject','_bindingsParse','helpRequested','code-changed','collection','javascript','justifyContent','var','display:flex;\x20width:100%;\x20height:100%;\x20align-items:stretch;','dragover','<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20width=\x2214\x22\x20height=\x2214\x22><path\x20d=\x22M4\x206h16M4\x2012h16M4\x2018h16\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>','move','setClass','Invalid\x20JSON:\x0a','Edit\x20formula','stringify','parent','height','\x20if\x20empty)','read\x20the\x20value\x20of\x20a\x20property\x20of\x20the\x20event\x20object','disabled','remove\x20complex\x20value','template','nodeElem','new','node-projects-visualization-simple-script-editor','title','with','_getBranchContainerNode','export','insertAdjacentElement','switch','a\x20property\x20defined\x20on\x20the\x20element\x20raising\x20the\x20event','addChildren','_commandListFancyTree','#c0392b','Typ:\x20','afterbegin','_commandListDiv','selected','_splitView','prepend','relative','bindabletype','Remove\x20signal','source','instanceof','showHead','elseCommands','drop','opacity','extends','complexSignal','position','classList','script','offsetWidth','finally','ready','propertyNodeContextMenu'];a=function(){return ay;};return a();}