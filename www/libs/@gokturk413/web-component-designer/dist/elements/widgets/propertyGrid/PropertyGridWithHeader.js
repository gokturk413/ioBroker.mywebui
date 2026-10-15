const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xca))/0x1+parseInt(h(0xda))/0x2+parseInt(h(0xbb))/0x3+-parseInt(h(0xd2))/0x4+parseInt(h(0xe0))/0x5*(-parseInt(h(0xdc))/0x6)+parseInt(h(0xd0))/0x7*(parseInt(h(0xd4))/0x8)+parseInt(h(0xa8))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x756e6));function b(c,d){c=c-0xa3;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';function a(){const z=['399JOTdFT',':host','2184892Xtpmrn','_restoreCachedInititalValues','6416didjje','title','key','_idRect','preventDefault','serviceContainer','241236dVMSJf','idProperty','2568IwaoWc','Escape','emit','Enter','9895BgCzSN','background','getContextMenu','style','innerRect','_configButton','none','_openContextMenu','14669838OLnzPV','element','display','_innerRect','selectedElements','value','disabled','show','content','instanceServiceContainer','propertyGrid','_contentRect','children','_content','contentProperty','_instanceServiceContainer','node','selectionService','onkeydown','2851161RvgZQk','globalContext','contentRect','refreshIsSetElementAndEditorForDesignItems','onfocus','stopPropagation','isRootItem','Element','block','_refreshHeaderForCurrentSelection','propertyContextMenuProvider','primarySelection','_id','_selectionChangedHandler','_propertiesService','872468ECknTt','_getDomElement','_type','observedAttributes','innerHtmlProperty','appearance'];a=function(){return z;};return a();}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0xcd)]=[i(0xcf)];static ['properties']={'appearance':String};get[i(0xcf)](){const j=i;return this['getAttribute'](j(0xcf))==='modern'?'modern':'classic';}set[i(0xcf)](c){this['setAttribute']('appearance',c);}['attributeChangedCallback'](){const k=i;if(this[k(0xb2)])this[k(0xb2)][k(0xcf)]=this[k(0xcf)];}static ['style']=css`
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
    `;static ['template']=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];[i(0xc7)];[i(0xb5)];[i(0xc8)];['_instanceServiceContainer'];['_idRect'];['_contentRect'];['_innerRect'];['_propertiesService'];['_configButton'];constructor(){const l=i;super(),this[l(0xd3)](),this[l(0xcc)]=this['_getDomElement']('type'),this[l(0xc7)]=this['_getDomElement']('id'),this['_content']=this[l(0xcb)](l(0xb0)),this['propertyGrid']=this[l(0xcb)]('pg'),this[l(0xb2)][l(0xcf)]=this[l(0xcf)],this['_idRect']=this[l(0xcb)]('idRect'),this[l(0xb3)]=this['_getDomElement'](l(0xbd)),this['_innerRect']=this['_getDomElement'](l(0xa4)),this['_configButton']=this[l(0xcb)]('config'),this['_configButton']['onclick']=async()=>{const m=l,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer']['selectionService']['primarySelection'])),e=await d['getConfigUi'](this[m(0xb7)]['selectionService']['primarySelection']);this['serviceContainer'][m(0xbc)]['showConfigClicked'][m(0xde)]({'designItem':this[m(0xb7)][m(0xb9)][m(0xc6)],'configUi':e});},this[l(0xc9)]=new ContentAndIdPropertiesService(),this[l(0xd7)]['oncontextmenu']=d=>{const n=l;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[n(0xc1)])this['_openContextMenu'](d,this['_instanceServiceContainer'][n(0xb9)][n(0xac)],this[n(0xc9)]['idProperty']);},this['_contentRect']['oncontextmenu']=d=>{const o=l;d[o(0xd8)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.['isRootItem'])this[o(0xa7)](d,this[o(0xb7)][o(0xb9)]['selectedElements'],this[o(0xc9)]['contentProperty']);},this['_innerRect']['oncontextmenu']=d=>{const p=l;d[p(0xd8)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[p(0xc1)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService'][p(0xac)],this[p(0xc9)][p(0xce)]);},this['_id'][l(0xba)]=d=>{const q=l;if(d['key']==q(0xdf))this['_instanceServiceContainer']['selectionService'][q(0xc6)]['id']=this['_id'][q(0xad)];else d[q(0xd6)]==q(0xdd)&&(this['_id'][q(0xad)]=this[q(0xb7)]['selectionService']['primarySelection']?.['id']??'',d[q(0xd8)](),d[q(0xc0)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[q(0xd7)],this['_propertiesService'][q(0xdb)],this['_instanceServiceContainer'][q(0xb9)][q(0xac)],this[q(0xc9)]);},this[l(0xb5)][l(0xba)]=d=>{const r=l;if(d[r(0xd6)]==r(0xdf))this[r(0xb7)][r(0xb9)]['primarySelection'][r(0xb0)]=this['_content']['value'],this['_content']['title']=this[r(0xb5)][r(0xad)];else d['key']==r(0xdd)&&(this[r(0xb5)][r(0xad)]=this[r(0xb7)][r(0xb9)][r(0xc6)]?.[r(0xa9)]?.['textContent']??'',d['preventDefault'](),d[r(0xc0)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0xb3)],this['_propertiesService'][r(0xb6)],this[r(0xb7)][r(0xb9)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[r(0xbe)](this[r(0xab)],this['_propertiesService'][r(0xce)],this['_instanceServiceContainer']['selectionService'][r(0xac)],this[r(0xc9)]);};let c;this[l(0xc7)][l(0xbf)]=d=>{const s=l;c=this['_instanceServiceContainer']['selectionService'][s(0xc6)];},this[l(0xc7)]['onblur']=d=>{const t=l;if(c)c['id']=this['_id'][t(0xad)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[t(0xd7)],this['_propertiesService'][t(0xdb)],this['_instanceServiceContainer'][t(0xb9)]['selectedElements'],this[t(0xc9)]);};}set['serviceContainer'](c){const u=i;this[u(0xb2)][u(0xd9)]=c;}set[i(0xb1)](c){const v=i,d=c;this['_instanceServiceContainer']=d,this[v(0xc8)]?.['dispose'](),d?(this[v(0xc8)]=d[v(0xb9)]['onSelectionChanged']['on'](async f=>{const w=v;this['propertyGrid'][w(0xb1)]=d,await sleep(0x14),await this[w(0xc4)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton'][v(0xa3)][v(0xaa)]=v(0xa6),this[v(0xc7)]['value']='',this[v(0xb5)][v(0xad)]='',this['_id']['disabled']=!![],this[v(0xb5)][v(0xae)]=!![],this[v(0xd7)]['style']['background']='',this[v(0xb3)]['style']['background']='',this[v(0xab)]['style'][v(0xe1)]='',this['_type']['value']=':host'),this[v(0xb2)][v(0xb1)]=d;}async['_refreshHeaderForCurrentSelection'](c){const x=i;if(!c?.['selectionService']?.[x(0xc6)]||c[x(0xb9)]['primarySelection']?.[x(0xc1)]){this['_configButton'][x(0xa3)]['display']='none',this[x(0xc7)][x(0xad)]='',this['_content'][x(0xad)]='',this[x(0xc7)][x(0xae)]=!![],this[x(0xb5)]['disabled']=!![],this[x(0xd7)]['style'][x(0xe1)]='',this['_contentRect'][x(0xa3)]['background']='',this[x(0xab)]['style']['background']='',this['_type']['value']=x(0xd1),this['_type'][x(0xd5)]=this['_type'][x(0xad)];return;}this[x(0xc7)][x(0xae)]=![],this['_content'][x(0xae)]=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',e=>e['hasConfigUi'](c['selectionService'][x(0xc6)]));d?this[x(0xa5)][x(0xa3)]['display']=x(0xc3):this['_configButton']['style'][x(0xaa)]='none';c['selectionService']['primarySelection']?.['nodeType']==NodeType[x(0xc2)]?this[x(0xcc)][x(0xad)]=c['selectionService'][x(0xc6)]?.['name']??'':this[x(0xcc)][x(0xad)]=c['selectionService'][x(0xc6)]?.[x(0xb8)]?.['nodeName']??'';this['_type']['title']=this[x(0xcc)][x(0xad)],this[x(0xc7)][x(0xad)]=c['selectionService'][x(0xc6)]?.['id']??'';if(c[x(0xb9)]['primarySelection']?.['element']?.['nodeType']!=NodeType[x(0xc2)])this['_content']['value']=c['selectionService'][x(0xc6)]?.[x(0xb0)]??'';else{if(c[x(0xb9)][x(0xc6)]?.['element']?.[x(0xb4)]?.['length']<=0x0)this['_content'][x(0xad)]=c[x(0xb9)][x(0xc6)]?.[x(0xb0)]??'';else this[x(0xb5)]['value']='';}this['_content'][x(0xd5)]=this['_content']['value'],PropertyGridPropertyList[x(0xbe)](this['_idRect'],this[x(0xc9)]['idProperty'],c[x(0xb9)]['selectedElements'],this[x(0xc9)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[x(0xb3)],this[x(0xc9)]['contentProperty'],c[x(0xb9)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService']['innerHtmlProperty'],c['selectionService'][x(0xac)],this[x(0xc9)]);}[i(0xa7)](c,d,e){const y=i;let f;if(this[y(0xb2)][y(0xc5)])f=this['propertyGrid']['propertyContextMenuProvider'](d,e);if(!f)f=e['service'][y(0xe2)](d,e);ContextMenu[y(0xaf)](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);