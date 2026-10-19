const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xe9))/0x1+-parseInt(h(0xe5))/0x2*(-parseInt(h(0x112))/0x3)+parseInt(h(0x113))/0x4*(parseInt(h(0xf0))/0x5)+-parseInt(h(0xdd))/0x6*(parseInt(h(0xf4))/0x7)+-parseInt(h(0x106))/0x8*(parseInt(h(0xfb))/0x9)+parseInt(h(0xdb))/0xa*(parseInt(h(0x110))/0xb)+parseInt(h(0xda))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x602cf));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}function a(){const A=['contentRect','none','_propertiesService','getLastServiceWhereAsync','template','_instanceServiceContainer','isRootItem','nodeName','11300388pnGuzk','9380WRCVyN','style','6dImUML','emit',':host','primarySelection','contentProperty','title','setAttribute','onclick','450002WtXDXP','propertyGrid','dispose','serviceContainer','767173AOONdc','propertyContextMenuProvider','_contentRect','key','Element','_id','Escape','10CwDdmV','background','idProperty','classic','1369249ywxjNT','instanceServiceContainer','config','selectedElements','nodeType','appearance','selectionService','4211262kuMAuS','element','block','modern','refreshIsSetElementAndEditorForDesignItems','hasConfigUi','oncontextmenu','_getDomElement','getContextMenu','disabled','_type','8nYMZRP','getAttribute','innerHtmlProperty','_innerRect','_selectionChangedHandler','value','globalContext','_content','display','_idRect','4125lUrFcH','_refreshHeaderForCurrentSelection','6hTdMzj','162364lFVbCJ','preventDefault','name','onfocus','_configButton'];a=function(){return A;};return a();}import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static ['properties']={'appearance':String};get[i(0xf9)](){const j=i;return this[j(0x107)]('appearance')==='modern'?j(0xfe):j(0xf3);}set[i(0xf9)](c){const k=i;this[k(0xe3)](k(0xf9),c);}['attributeChangedCallback'](){const l=i;if(this[l(0xe6)])this['propertyGrid']['appearance']=this['appearance'];}static [i(0xdc)]=css`
    :host {
      display: block;
      height: 100%;
      user-select: none;
      -webkit-user-select: none;
      background: var(--wcd-property-grid-background, var(--medium-grey, var(--wcd-color-surface-raised, #2f3545)));
      color: var(--wcd-color-text, var(--text-color, white));
    }
    div.root {
      display: grid;
      grid-template-columns: 11px 11px auto 1fr auto;
      padding: 3px 6px;
      font-family: monospace; 
      align-items: center;
    }
    .desc {
      font-weight: 700;
      font-size: 10px;
      margin-right: 5px;
    }
    input {
      background: var(--wcd-property-grid-background, var(--medium-grey, var(--wcd-color-surface-raised, #2f3545)));
      border: solid 1px var(--wcd-color-border, gray);
      color: var(--wcd-color-text, var(--text-color, white));
      width: calc(100% - 6px);
    }
    #type {
      color: var(--wcd-property-grid-header-highlight-color, wheat);
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
      height: 20px;
      border: none;
    }
    #pg {
      height: calc(100% - 64px);
    }
    .inspector-heading { display: none; }
    :host([appearance="modern"]) {
      color-scheme: light dark;
      display: flex;
      flex-direction: column;
      font-family: var(--wcd-property-grid-font-family, system-ui, sans-serif);
      background: var(--wcd-property-grid-background, var(--wcd-color-surface, light-dark(#ffffff, #20242b)));
      color: var(--wcd-property-grid-text-color, var(--wcd-color-text, light-dark(#283344, #e8edf4)));
    }
    :host([appearance="modern"]) .inspector-heading {
      display: block;
      padding: 14px 16px 4px;
      font-size: 16px;
      font-weight: 600;
    }
    :host([appearance="modern"]) .root {
      flex: none;
      padding: 8px 16px 14px;
      gap: 5px 3px;
      font-family: inherit;
      border-bottom: 1px solid var(--wcd-color-border, light-dark(#e0e6ed, #3b4452));
    }
    :host([appearance="modern"]) .desc { font-size: 12px; font-weight: 400; }
    :host([appearance="modern"]) input {
      box-sizing: border-box;
      min-width: 0;
      width: 100%;
      padding: 5px 8px;
      font: inherit;
      font-size: 13px;
      border-radius: 4px;
      color: inherit;
      background: transparent;
      border-color: var(--wcd-color-border, light-dark(#e0e6ed, #3b4452));
    }
    :host([appearance="modern"]) #type { height: auto; color: inherit; padding-left: 0; }
    :host([appearance="modern"]) #idRect,
    :host([appearance="modern"]) #innerRect,
    :host([appearance="modern"]) #contentRect {
      border: none !important;
      border-radius: 50%;
      width: 5px !important;
      height: 5px !important;
      background: var(--wcd-color-text-muted, light-dark(#677489, #a6b3c5)) !important;
      opacity: .5;
      cursor: pointer;
    }
    :host([appearance="modern"]) .root [data-value-type="none"] { visibility: hidden; }
    :host([appearance="modern"]) .root [data-value-type="bound"] {
      background: var(--wcd-color-accent, #2168cc) !important;
      opacity: 1;
    }
    :host([appearance="modern"]) input:focus-visible { outline: 2px solid var(--wcd-color-focus, var(--wcd-color-accent, #2168cc)); outline-offset: 1px; }
    :host([appearance="modern"]) #pg { flex: 1; min-height: 0; height: auto; }
    `;static [i(0xd6)]=html`
  <div class="inspector-heading">Properties</div>
  <div class="root">
    <span style="grid-column: span 3;" class="desc">Type:</span><input type="text" readonly id="type">
    <button id="config" style="display: none; grid-column: 5; grid-row: span 3; height: calc(100% - 10px); margin-left: 10px;">config</button>
    <div title="id" id="idRect" style="grid-column: 1; width: 7px; height: 7px; border: 1px solid white;"></div>
    <span id="idSpan" style="grid-column: span 2;" class="desc">Id:</span><input type="text" id="id">
    <div title="innerHTML" id="innerRect" style="grid-column: 1; width: 7px; height: 7px; border: 1px solid white;"></div>
    <div title="textContent" id="contentRect" style="width: 7px; height: 7px; border: 1px solid white;"></div>
    <span id="contentSpan" class="desc">Content:</span><input type="text" id="content">
  </div>
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];['_id'];['_content'];['_selectionChangedHandler'];['_instanceServiceContainer'];['_idRect'];['_contentRect'];['_innerRect'];[i(0x11a)];['_configButton'];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this[m(0x105)]=this[m(0x102)]('type'),this['_id']=this['_getDomElement']('id'),this[m(0x10d)]=this['_getDomElement']('content'),this['propertyGrid']=this['_getDomElement']('pg'),this[m(0xe6)]['appearance']=this['appearance'],this['_idRect']=this['_getDomElement']('idRect'),this['_contentRect']=this[m(0x102)](m(0x118)),this[m(0x109)]=this[m(0x102)]('innerRect'),this['_configButton']=this['_getDomElement'](m(0xf6)),this['_configButton'][m(0xe4)]=async()=>{const n=m,d=await this[n(0xe8)]?.[n(0xd5)]('configUiService',async f=>await f[n(0x100)](this[n(0xd7)][n(0xfa)][n(0xe0)])),e=await d['getConfigUi'](this[n(0xd7)][n(0xfa)][n(0xe0)]);this['serviceContainer'][n(0x10c)]['showConfigClicked'][n(0xde)]({'designItem':this[n(0xd7)][n(0xfa)][n(0xe0)],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this[m(0x10f)][m(0x101)]=d=>{const o=m;d['preventDefault']();if(!this[o(0xd7)][o(0xfa)]['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this[o(0xd7)][o(0xfa)]['selectedElements'],this[o(0x11a)]['idProperty']);},this[m(0xeb)]['oncontextmenu']=d=>{const p=m;d['preventDefault']();if(!this['_instanceServiceContainer'][p(0xfa)][p(0xe0)]?.[p(0xd8)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[p(0x11a)][p(0xe1)]);},this[m(0x109)]['oncontextmenu']=d=>{const q=m;d['preventDefault']();if(!this['_instanceServiceContainer'][q(0xfa)]['primarySelection']?.[q(0xd8)])this['_openContextMenu'](d,this[q(0xd7)][q(0xfa)]['selectedElements'],this[q(0x11a)]['innerHtmlProperty']);},this['_id']['onkeydown']=d=>{const r=m;if(d[r(0xec)]=='Enter')this['_instanceServiceContainer'][r(0xfa)]['primarySelection']['id']=this['_id'][r(0x10b)];else d['key']=='Escape'&&(this['_id']['value']=this['_instanceServiceContainer']['selectionService'][r(0xe0)]?.['id']??'',d[r(0x114)](),d['stopPropagation']());PropertyGridPropertyList[r(0xff)](this[r(0x10f)],this['_propertiesService'][r(0xf2)],this[r(0xd7)][r(0xfa)][r(0xf7)],this['_propertiesService']);},this[m(0x10d)]['onkeydown']=d=>{const s=m;if(d['key']=='Enter')this['_instanceServiceContainer']['selectionService']['primarySelection']['content']=this[s(0x10d)][s(0x10b)],this['_content'][s(0xe2)]=this['_content']['value'];else d[s(0xec)]==s(0xef)&&(this[s(0x10d)][s(0x10b)]=this['_instanceServiceContainer'][s(0xfa)]['primarySelection']?.['element']?.['textContent']??'',d[s(0x114)](),d['stopPropagation']());PropertyGridPropertyList[s(0xff)](this['_contentRect'],this['_propertiesService']['contentProperty'],this[s(0xd7)]['selectionService']['selectedElements'],this[s(0x11a)]),PropertyGridPropertyList[s(0xff)](this[s(0x109)],this[s(0x11a)]['innerHtmlProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};let c;this[m(0xee)][m(0x116)]=d=>{const t=m;c=this[t(0xd7)][t(0xfa)][t(0xe0)];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this['_id'][u(0x10b)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x10f)],this[u(0x11a)][u(0xf2)],this['_instanceServiceContainer'][u(0xfa)]['selectedElements'],this[u(0x11a)]);};}set['serviceContainer'](c){const v=i;this[v(0xe6)][v(0xe8)]=c;}set['instanceServiceContainer'](c){const w=i,d=c;this[w(0xd7)]=d,this['_selectionChangedHandler']?.[w(0xe7)](),d?(this[w(0x10a)]=d['selectionService']['onSelectionChanged']['on'](async f=>{const x=w;this[x(0xe6)]['instanceServiceContainer']=d,await sleep(0x14),await this[x(0x111)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton'][w(0xdc)][w(0x10e)]='none',this['_id'][w(0x10b)]='',this[w(0x10d)][w(0x10b)]='',this[w(0xee)][w(0x104)]=!![],this['_content'][w(0x104)]=!![],this['_idRect']['style']['background']='',this[w(0xeb)]['style'][w(0xf1)]='',this[w(0x109)]['style']['background']='',this['_type'][w(0x10b)]=w(0xdf)),this[w(0xe6)][w(0xf5)]=d;}async['_refreshHeaderForCurrentSelection'](c){const y=i;if(!c?.[y(0xfa)]?.['primarySelection']||c[y(0xfa)]['primarySelection']?.[y(0xd8)]){this[y(0x117)]['style'][y(0x10e)]=y(0x119),this['_id']['value']='',this['_content'][y(0x10b)]='',this[y(0xee)][y(0x104)]=!![],this[y(0x10d)][y(0x104)]=!![],this[y(0x10f)][y(0xdc)][y(0xf1)]='',this[y(0xeb)]['style']['background']='',this['_innerRect']['style'][y(0xf1)]='',this['_type'][y(0x10b)]=y(0xdf),this[y(0x105)]['title']=this['_type'][y(0x10b)];return;}this[y(0xee)][y(0x104)]=![],this['_content'][y(0x104)]=![];const d=await this['serviceContainer']?.[y(0xd5)]('configUiService',e=>e['hasConfigUi'](c[y(0xfa)][y(0xe0)]));d?this['_configButton'][y(0xdc)]['display']=y(0xfd):this['_configButton']['style'][y(0x10e)]=y(0x119);c[y(0xfa)]['primarySelection']?.['nodeType']==NodeType['Element']?this[y(0x105)][y(0x10b)]=c[y(0xfa)][y(0xe0)]?.[y(0x115)]??'':this[y(0x105)][y(0x10b)]=c[y(0xfa)]['primarySelection']?.['node']?.[y(0xd9)]??'';this[y(0x105)][y(0xe2)]=this['_type']['value'],this['_id'][y(0x10b)]=c[y(0xfa)]['primarySelection']?.['id']??'';if(c[y(0xfa)][y(0xe0)]?.[y(0xfc)]?.[y(0xf8)]!=NodeType[y(0xed)])this[y(0x10d)][y(0x10b)]=c['selectionService']['primarySelection']?.['content']??'';else{if(c['selectionService'][y(0xe0)]?.['element']?.['children']?.['length']<=0x0)this[y(0x10d)]['value']=c[y(0xfa)]['primarySelection']?.['content']??'';else this[y(0x10d)][y(0x10b)]='';}this[y(0x10d)][y(0xe2)]=this['_content'][y(0x10b)],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[y(0x11a)]['idProperty'],c[y(0xfa)]['selectedElements'],this[y(0x11a)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0xeb)],this['_propertiesService']['contentProperty'],c[y(0xfa)][y(0xf7)],this['_propertiesService']),PropertyGridPropertyList[y(0xff)](this['_innerRect'],this[y(0x11a)][y(0x108)],c[y(0xfa)]['selectedElements'],this[y(0x11a)]);}['_openContextMenu'](c,d,e){const z=i;let f;if(this[z(0xe6)][z(0xea)])f=this['propertyGrid']['propertyContextMenuProvider'](d,e);if(!f)f=e['service'][z(0x103)](d,e);ContextMenu['show'](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);