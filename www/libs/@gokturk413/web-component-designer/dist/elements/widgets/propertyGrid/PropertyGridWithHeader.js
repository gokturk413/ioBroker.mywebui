const i=b;function a(){const A=['oncontextmenu','selectedElements','contentRect','20ztEZJl','background','_id','appearance','_propertiesService','propertyContextMenuProvider','327363xknwTO','Enter','properties','4IzTrIj','show','_innerRect','630915RjgVOM','nodeName','_getDomElement','idRect','idProperty','_instanceServiceContainer','_selectionChangedHandler','_refreshHeaderForCurrentSelection','configUiService','content','6bvuCnD','preventDefault','nodeType','_openContextMenu','hasConfigUi','1855aAJDIv','370674GeOoVt','_contentRect','block','value','key','innerHtmlProperty','globalContext','dispose','5434PAgvil','textContent','define','_idRect','refreshIsSetElementAndEditorForDesignItems','804UmyWAa','serviceContainer','name','_type','contentProperty','none','getConfigUi','element','onkeydown','classic','_content','isRootItem','_configButton','1192vBRSIQ','instanceServiceContainer','disabled','6gGFiMI','attributeChangedCallback','style','3334279kaRFPf','getLastServiceWhereAsync','onblur','870NigMiv','emit','selectionService','propertyGrid','primarySelection','service','title','length','display',':host','getAttribute'];a=function(){return A;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x146))/0x1*(parseInt(h(0x14c))/0x2)+parseInt(h(0x160))/0x3*(-parseInt(h(0x163))/0x4)+parseInt(h(0x166))/0x5*(-parseInt(h(0x170))/0x6)+-parseInt(h(0x128))/0x7*(-parseInt(h(0x143))/0x8)+-parseInt(h(0x129))/0x9*(-parseInt(h(0x15a))/0xa)+-parseInt(h(0x131))/0xb*(parseInt(h(0x136))/0xc)+parseInt(h(0x149))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1a340));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x124;const e=a();let f=e[c];return f;}export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x15d)];static [i(0x162)]={'appearance':String};get['appearance'](){const j=i;return this[j(0x156)](j(0x15d))==='modern'?'modern':j(0x13f);}set['appearance'](c){const k=i;this['setAttribute'](k(0x15d),c);}[i(0x147)](){const l=i;if(this[l(0x14f)])this[l(0x14f)]['appearance']=this[l(0x15d)];}static [i(0x148)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x14f)];['_type'];['_id'];['_content'];['_selectionChangedHandler'];[i(0x16b)];['_idRect'];['_contentRect'];[i(0x165)];[i(0x15e)];[i(0x142)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this['_getDomElement']('type'),this['_id']=this[m(0x168)]('id'),this['_content']=this['_getDomElement'](m(0x16f)),this[m(0x14f)]=this['_getDomElement']('pg'),this[m(0x14f)]['appearance']=this[m(0x15d)],this['_idRect']=this['_getDomElement'](m(0x169)),this[m(0x12a)]=this[m(0x168)](m(0x159)),this[m(0x165)]=this['_getDomElement']('innerRect'),this['_configButton']=this[m(0x168)]('config'),this['_configButton']['onclick']=async()=>{const n=m,d=await this[n(0x137)]?.['getLastServiceWhereAsync'](n(0x16e),async f=>await f[n(0x127)](this['_instanceServiceContainer'][n(0x14e)]['primarySelection'])),e=await d[n(0x13c)](this[n(0x16b)][n(0x14e)][n(0x150)]);this['serviceContainer'][n(0x12f)]['showConfigClicked'][n(0x14d)]({'designItem':this['_instanceServiceContainer']['selectionService'][n(0x150)],'configUi':e});},this[m(0x15e)]=new ContentAndIdPropertiesService(),this[m(0x134)]['oncontextmenu']=d=>{const o=m;d[o(0x124)]();if(!this['_instanceServiceContainer']['selectionService'][o(0x150)]?.[o(0x141)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService'][o(0x158)],this['_propertiesService'][o(0x16a)]);},this[m(0x12a)][m(0x157)]=d=>{const p=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][p(0x150)]?.[p(0x141)])this[p(0x126)](d,this['_instanceServiceContainer'][p(0x14e)]['selectedElements'],this[p(0x15e)]['contentProperty']);},this[m(0x165)][m(0x157)]=d=>{const q=m;d[q(0x124)]();if(!this[q(0x16b)][q(0x14e)]['primarySelection']?.[q(0x141)])this[q(0x126)](d,this['_instanceServiceContainer'][q(0x14e)]['selectedElements'],this[q(0x15e)][q(0x12e)]);},this['_id'][m(0x13e)]=d=>{const r=m;if(d['key']==r(0x161))this[r(0x16b)][r(0x14e)]['primarySelection']['id']=this['_id'][r(0x12c)];else d['key']=='Escape'&&(this['_id']['value']=this['_instanceServiceContainer']['selectionService'][r(0x150)]?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x135)](this['_idRect'],this['_propertiesService'][r(0x16a)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[r(0x15e)]);},this[m(0x140)][m(0x13e)]=d=>{const s=m;if(d['key']==s(0x161))this['_instanceServiceContainer']['selectionService']['primarySelection'][s(0x16f)]=this['_content'][s(0x12c)],this[s(0x140)]['title']=this[s(0x140)][s(0x12c)];else d[s(0x12d)]=='Escape'&&(this['_content'][s(0x12c)]=this[s(0x16b)]['selectionService'][s(0x150)]?.['element']?.[s(0x132)]??'',d[s(0x124)](),d['stopPropagation']());PropertyGridPropertyList[s(0x135)](this['_contentRect'],this[s(0x15e)][s(0x13a)],this[s(0x16b)]['selectionService'][s(0x158)],this[s(0x15e)]),PropertyGridPropertyList[s(0x135)](this[s(0x165)],this[s(0x15e)]['innerHtmlProperty'],this[s(0x16b)][s(0x14e)][s(0x158)],this['_propertiesService']);};let c;this[m(0x15c)]['onfocus']=d=>{const t=m;c=this['_instanceServiceContainer'][t(0x14e)]['primarySelection'];},this['_id'][m(0x14b)]=d=>{const u=m;if(c)c['id']=this[u(0x15c)][u(0x12c)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x134)],this['_propertiesService'][u(0x16a)],this[u(0x16b)]['selectionService'][u(0x158)],this[u(0x15e)]);};}set['serviceContainer'](c){const v=i;this[v(0x14f)]['serviceContainer']=c;}set[i(0x144)](c){const w=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[w(0x130)](),d?(this[w(0x16c)]=d[w(0x14e)]['onSelectionChanged']['on'](async f=>{const x=w;this[x(0x14f)]['instanceServiceContainer']=d,await sleep(0x14),await this[x(0x16d)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton'][w(0x148)][w(0x154)]='none',this[w(0x15c)]['value']='',this[w(0x140)]['value']='',this[w(0x15c)][w(0x145)]=!![],this['_content']['disabled']=!![],this[w(0x134)]['style'][w(0x15b)]='',this[w(0x12a)][w(0x148)]['background']='',this['_innerRect'][w(0x148)][w(0x15b)]='',this['_type']['value']=w(0x155)),this[w(0x14f)][w(0x144)]=d;}async['_refreshHeaderForCurrentSelection'](c){const y=i;if(!c?.['selectionService']?.[y(0x150)]||c['selectionService']['primarySelection']?.[y(0x141)]){this['_configButton'][y(0x148)]['display']=y(0x13b),this['_id'][y(0x12c)]='',this[y(0x140)]['value']='',this['_id']['disabled']=!![],this['_content']['disabled']=!![],this[y(0x134)][y(0x148)][y(0x15b)]='',this[y(0x12a)][y(0x148)][y(0x15b)]='',this[y(0x165)][y(0x148)][y(0x15b)]='',this[y(0x139)]['value']=y(0x155),this['_type']['title']=this[y(0x139)][y(0x12c)];return;}this[y(0x15c)][y(0x145)]=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.[y(0x14a)]('configUiService',e=>e[y(0x127)](c['selectionService']['primarySelection']));d?this['_configButton'][y(0x148)]['display']=y(0x12b):this[y(0x142)][y(0x148)][y(0x154)]=y(0x13b);c[y(0x14e)][y(0x150)]?.['nodeType']==NodeType['Element']?this['_type']['value']=c[y(0x14e)][y(0x150)]?.[y(0x138)]??'':this[y(0x139)][y(0x12c)]=c[y(0x14e)][y(0x150)]?.['node']?.[y(0x167)]??'';this['_type'][y(0x152)]=this['_type'][y(0x12c)],this['_id'][y(0x12c)]=c[y(0x14e)][y(0x150)]?.['id']??'';if(c['selectionService'][y(0x150)]?.[y(0x13d)]?.[y(0x125)]!=NodeType['Element'])this['_content'][y(0x12c)]=c['selectionService'][y(0x150)]?.[y(0x16f)]??'';else{if(c['selectionService']['primarySelection']?.[y(0x13d)]?.['children']?.[y(0x153)]<=0x0)this['_content'][y(0x12c)]=c['selectionService'][y(0x150)]?.['content']??'';else this['_content']['value']='';}this[y(0x140)]['title']=this[y(0x140)]['value'],PropertyGridPropertyList[y(0x135)](this[y(0x134)],this[y(0x15e)][y(0x16a)],c[y(0x14e)]['selectedElements'],this[y(0x15e)]),PropertyGridPropertyList[y(0x135)](this['_contentRect'],this['_propertiesService'][y(0x13a)],c['selectionService'][y(0x158)],this[y(0x15e)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0x165)],this[y(0x15e)]['innerHtmlProperty'],c['selectionService']['selectedElements'],this[y(0x15e)]);}[i(0x126)](c,d,e){const z=i;let f;if(this[z(0x14f)][z(0x15f)])f=this[z(0x14f)][z(0x15f)](d,e);if(!f)f=e[z(0x151)]['getContextMenu'](d,e);ContextMenu[z(0x164)](f,c);}}customElements[i(0x133)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);