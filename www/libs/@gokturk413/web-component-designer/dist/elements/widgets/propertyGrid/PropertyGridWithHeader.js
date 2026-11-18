const i=b;function b(c,d){c=c-0x110;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x137))/0x1*(parseInt(h(0x132))/0x2)+parseInt(h(0x14e))/0x3*(-parseInt(h(0x123))/0x4)+-parseInt(h(0x142))/0x5*(parseInt(h(0x145))/0x6)+parseInt(h(0x126))/0x7*(parseInt(h(0x13a))/0x8)+parseInt(h(0x12f))/0x9+parseInt(h(0x146))/0xa+-parseInt(h(0x111))/0xb*(-parseInt(h(0x14b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96b8c));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const A=['idProperty','_contentRect','Element','instanceServiceContainer','serviceContainer','onfocus','2775600TuMssF','modern','_selectionChangedHandler','18RPNlCp','getLastServiceWhereAsync','_idRect','_id','node-projects-web-component-designer-property-grid-with-header','4274HOYUff','nodeType','onkeydown','8ocEjok','primarySelection','_propertiesService','getAttribute','hasConfigUi','getConfigUi','globalContext','refreshIsSetElementAndEditorForDesignItems','5rIhgiO','innerHtmlProperty','contentProperty','4487052UkPrNU','8332710nQtcbh','_type','propertyGrid','onblur','setAttribute','12OUvdKJ','key','observedAttributes','3005121WcbwrF','display','_getDomElement','_innerRect','length','properties','background','none','selectedElements','6833299WLbuFc','Enter','_configButton','isRootItem','selectionService','_content','style','_openContextMenu','preventDefault','_refreshHeaderForCurrentSelection','disabled',':host','value','getContextMenu','type','Escape','_instanceServiceContainer','appearance','4NCZHty','textContent','content','3958913MUIsKQ','dispose','title'];a=function(){return A;};return a();}import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x14d)]=[i(0x122)];static [i(0x153)]={'appearance':String};get['appearance'](){const j=i;return this[j(0x13d)](j(0x122))==='modern'?j(0x130):'classic';}set[i(0x122)](c){const k=i;this[k(0x14a)]('appearance',c);}['attributeChangedCallback'](){const l=i;if(this['propertyGrid'])this[l(0x148)]['appearance']=this[l(0x122)];}static ['style']=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x148)];['_type'];['_id'];[i(0x116)];[i(0x131)];[i(0x121)];['_idRect'];[i(0x12a)];['_innerRect'];['_propertiesService'];['_configButton'];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this['_getDomElement'](m(0x11f)),this[m(0x135)]=this['_getDomElement']('id'),this['_content']=this[m(0x150)](m(0x125)),this[m(0x148)]=this['_getDomElement']('pg'),this['propertyGrid'][m(0x122)]=this['appearance'],this[m(0x134)]=this[m(0x150)]('idRect'),this['_contentRect']=this['_getDomElement']('contentRect'),this['_innerRect']=this['_getDomElement']('innerRect'),this['_configButton']=this[m(0x150)]('config'),this[m(0x113)]['onclick']=async()=>{const n=m,d=await this[n(0x12d)]?.['getLastServiceWhereAsync']('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][n(0x115)][n(0x13b)])),e=await d[n(0x13f)](this[n(0x121)]['selectionService']['primarySelection']);this['serviceContainer'][n(0x140)]['showConfigClicked']['emit']({'designItem':this['_instanceServiceContainer']['selectionService']['primarySelection'],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect']['oncontextmenu']=d=>{const o=m;d[o(0x119)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[o(0x114)])this[o(0x118)](d,this[o(0x121)]['selectionService'][o(0x110)],this['_propertiesService'][o(0x129)]);},this['_contentRect']['oncontextmenu']=d=>{const p=m;d[p(0x119)]();if(!this[p(0x121)]['selectionService']['primarySelection']?.[p(0x114)])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0x115)]['selectedElements'],this[p(0x13c)][p(0x144)]);},this[m(0x151)]['oncontextmenu']=d=>{const q=m;d[q(0x119)]();if(!this[q(0x121)]['selectionService']['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer'][q(0x115)][q(0x110)],this['_propertiesService'][q(0x143)]);},this[m(0x135)][m(0x139)]=d=>{const r=m;if(d['key']=='Enter')this[r(0x121)]['selectionService'][r(0x13b)]['id']=this['_id']['value'];else d['key']==r(0x120)&&(this[r(0x135)][r(0x11d)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x141)](this[r(0x134)],this['_propertiesService'][r(0x129)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[r(0x13c)]);},this[m(0x116)]['onkeydown']=d=>{const s=m;if(d[s(0x14c)]==s(0x112))this['_instanceServiceContainer'][s(0x115)][s(0x13b)]['content']=this[s(0x116)][s(0x11d)],this['_content'][s(0x128)]=this[s(0x116)][s(0x11d)];else d['key']==s(0x120)&&(this[s(0x116)]['value']=this[s(0x121)][s(0x115)][s(0x13b)]?.['element']?.[s(0x124)]??'',d[s(0x119)](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[s(0x12a)],this[s(0x13c)]['contentProperty'],this['_instanceServiceContainer'][s(0x115)]['selectedElements'],this[s(0x13c)]),PropertyGridPropertyList[s(0x141)](this[s(0x151)],this[s(0x13c)][s(0x143)],this['_instanceServiceContainer']['selectionService'][s(0x110)],this['_propertiesService']);};let c;this[m(0x135)][m(0x12e)]=d=>{const t=m;c=this[t(0x121)]['selectionService']['primarySelection'];},this['_id'][m(0x149)]=d=>{const u=m;if(c)c['id']=this[u(0x135)]['value'];c=null,PropertyGridPropertyList[u(0x141)](this[u(0x134)],this[u(0x13c)][u(0x129)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};}set['serviceContainer'](c){const v=i;this[v(0x148)]['serviceContainer']=c;}set[i(0x12c)](c){const w=i,d=c;this['_instanceServiceContainer']=d,this[w(0x131)]?.[w(0x127)](),d?(this['_selectionChangedHandler']=d['selectionService']['onSelectionChanged']['on'](async f=>{const x=w;this['propertyGrid'][x(0x12c)]=d,await sleep(0x14),await this[x(0x11a)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[w(0x113)][w(0x117)]['display']='none',this[w(0x135)][w(0x11d)]='',this['_content'][w(0x11d)]='',this[w(0x135)]['disabled']=!![],this[w(0x116)][w(0x11b)]=!![],this['_idRect']['style']['background']='',this['_contentRect']['style']['background']='',this[w(0x151)][w(0x117)]['background']='',this[w(0x147)]['value']=':host'),this['propertyGrid']['instanceServiceContainer']=d;}async[i(0x11a)](c){const y=i;if(!c?.['selectionService']?.[y(0x13b)]||c[y(0x115)][y(0x13b)]?.[y(0x114)]){this['_configButton']['style']['display']=y(0x155),this['_id'][y(0x11d)]='',this[y(0x116)][y(0x11d)]='',this['_id']['disabled']=!![],this[y(0x116)]['disabled']=!![],this['_idRect'][y(0x117)][y(0x154)]='',this[y(0x12a)][y(0x117)][y(0x154)]='',this['_innerRect']['style']['background']='',this['_type']['value']=y(0x11c),this['_type']['title']=this['_type'][y(0x11d)];return;}this['_id']['disabled']=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.[y(0x133)]('configUiService',e=>e[y(0x13e)](c['selectionService']['primarySelection']));d?this[y(0x113)][y(0x117)][y(0x14f)]='block':this[y(0x113)]['style'][y(0x14f)]=y(0x155);c['selectionService'][y(0x13b)]?.['nodeType']==NodeType[y(0x12b)]?this[y(0x147)]['value']=c[y(0x115)]['primarySelection']?.['name']??'':this['_type'][y(0x11d)]=c['selectionService'][y(0x13b)]?.['node']?.['nodeName']??'';this['_type'][y(0x128)]=this[y(0x147)]['value'],this['_id']['value']=c['selectionService'][y(0x13b)]?.['id']??'';if(c['selectionService']['primarySelection']?.['element']?.[y(0x138)]!=NodeType[y(0x12b)])this[y(0x116)]['value']=c['selectionService'][y(0x13b)]?.[y(0x125)]??'';else{if(c['selectionService']['primarySelection']?.['element']?.['children']?.[y(0x152)]<=0x0)this['_content'][y(0x11d)]=c[y(0x115)][y(0x13b)]?.['content']??'';else this['_content'][y(0x11d)]='';}this['_content'][y(0x128)]=this['_content']['value'],PropertyGridPropertyList[y(0x141)](this[y(0x134)],this['_propertiesService'][y(0x129)],c[y(0x115)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[y(0x141)](this[y(0x12a)],this[y(0x13c)]['contentProperty'],c['selectionService'][y(0x110)],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this[y(0x13c)]['innerHtmlProperty'],c['selectionService'][y(0x110)],this['_propertiesService']);}[i(0x118)](c,d,e){const z=i;let f;if(this['propertyGrid']['propertyContextMenuProvider'])f=this[z(0x148)]['propertyContextMenuProvider'](d,e);if(!f)f=e['service'][z(0x11e)](d,e);ContextMenu['show'](f,c);}}customElements['define'](i(0x136),PropertyGridWithHeader);