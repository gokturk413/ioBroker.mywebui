const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x166))/0x1+-parseInt(h(0x154))/0x2+parseInt(h(0x16f))/0x3+-parseInt(h(0x14a))/0x4*(parseInt(h(0x142))/0x5)+-parseInt(h(0x13a))/0x6+-parseInt(h(0x137))/0x7*(parseInt(h(0x12a))/0x8)+-parseInt(h(0x13e))/0x9*(-parseInt(h(0x15d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd9608));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x132)];static [i(0x163)]={'appearance':String};get['appearance'](){const j=i;return this[j(0x158)]('appearance')==='modern'?j(0x151):'classic';}set['appearance'](c){this['setAttribute']('appearance',c);}[i(0x141)](){const k=i;if(this['propertyGrid'])this[k(0x140)]['appearance']=this['appearance'];}static ['style']=css`
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
    `;static [i(0x143)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x140)];[i(0x148)];['_id'];['_content'];[i(0x153)];[i(0x152)];['_idRect'];[i(0x15f)];[i(0x159)];['_propertiesService'];['_configButton'];constructor(){const l=i;super(),this[l(0x149)](),this['_type']=this[l(0x14b)]('type'),this['_id']=this['_getDomElement']('id'),this['_content']=this['_getDomElement'](l(0x160)),this[l(0x140)]=this['_getDomElement']('pg'),this[l(0x140)]['appearance']=this[l(0x132)],this[l(0x136)]=this['_getDomElement'](l(0x150)),this['_contentRect']=this[l(0x14b)](l(0x165)),this[l(0x159)]=this[l(0x14b)]('innerRect'),this[l(0x16c)]=this['_getDomElement'](l(0x135)),this[l(0x16c)]['onclick']=async()=>{const m=l,d=await this['serviceContainer']?.[m(0x12b)](m(0x161),async f=>await f[m(0x14e)](this[m(0x152)]['selectionService'][m(0x13f)])),e=await d[m(0x133)](this[m(0x152)]['selectionService']['primarySelection']);this[m(0x15e)]['globalContext']['showConfigClicked'][m(0x167)]({'designItem':this[m(0x152)][m(0x155)]['primarySelection'],'configUi':e});},this[l(0x16a)]=new ContentAndIdPropertiesService(),this['_idRect']['oncontextmenu']=d=>{const n=l;d['preventDefault']();if(!this[n(0x152)][n(0x155)][n(0x13f)]?.['isRootItem'])this[n(0x13c)](d,this['_instanceServiceContainer'][n(0x155)][n(0x156)],this['_propertiesService']['idProperty']);},this['_contentRect']['oncontextmenu']=d=>{const o=l;d[o(0x131)]();if(!this[o(0x152)]['selectionService']['primarySelection']?.['isRootItem'])this[o(0x13c)](d,this['_instanceServiceContainer'][o(0x155)]['selectedElements'],this['_propertiesService']['contentProperty']);},this['_innerRect']['oncontextmenu']=d=>{const p=l;d['preventDefault']();if(!this[p(0x152)][p(0x155)][p(0x13f)]?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0x155)][p(0x156)],this['_propertiesService']['innerHtmlProperty']);},this[l(0x164)]['onkeydown']=d=>{const q=l;if(d[q(0x12f)]==q(0x14c))this[q(0x152)]['selectionService'][q(0x13f)]['id']=this[q(0x164)][q(0x144)];else d[q(0x12f)]==q(0x138)&&(this[q(0x164)]['value']=this['_instanceServiceContainer']['selectionService'][q(0x13f)]?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[q(0x14d)](this['_idRect'],this[q(0x16a)]['idProperty'],this[q(0x152)]['selectionService'][q(0x156)],this['_propertiesService']);},this[l(0x147)]['onkeydown']=d=>{const r=l;if(d[r(0x12f)]=='Enter')this['_instanceServiceContainer']['selectionService'][r(0x13f)]['content']=this['_content'][r(0x144)],this[r(0x147)][r(0x15b)]=this['_content'][r(0x144)];else d[r(0x12f)]==r(0x138)&&(this['_content']['value']=this[r(0x152)][r(0x155)]['primarySelection']?.[r(0x15a)]?.[r(0x14f)]??'',d['preventDefault'](),d[r(0x13b)]());PropertyGridPropertyList[r(0x14d)](this[r(0x15f)],this[r(0x16a)][r(0x139)],this[r(0x152)]['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService']['innerHtmlProperty'],this[r(0x152)][r(0x155)][r(0x156)],this['_propertiesService']);};let c;this['_id']['onfocus']=d=>{const s=l;c=this['_instanceServiceContainer'][s(0x155)][s(0x13f)];},this[l(0x164)]['onblur']=d=>{const t=l;if(c)c['id']=this[t(0x164)][t(0x144)];c=null,PropertyGridPropertyList[t(0x14d)](this[t(0x136)],this['_propertiesService']['idProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};}set['serviceContainer'](c){const u=i;this[u(0x140)][u(0x15e)]=c;}set[i(0x15c)](c){const v=i,d=c;this['_instanceServiceContainer']=d,this[v(0x153)]?.['dispose'](),d?(this['_selectionChangedHandler']=d[v(0x155)]['onSelectionChanged']['on'](async f=>{const w=v;this[w(0x140)]['instanceServiceContainer']=d,await sleep(0x14),await this[w(0x13d)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[v(0x16c)]['style']['display']='none',this['_id'][v(0x144)]='',this['_content']['value']='',this['_id'][v(0x16d)]=!![],this['_content']['disabled']=!![],this['_idRect']['style']['background']='',this['_contentRect']['style']['background']='',this[v(0x159)][v(0x169)]['background']='',this[v(0x148)]['value']=v(0x130)),this['propertyGrid']['instanceServiceContainer']=d;}async[i(0x13d)](c){const x=i;if(!c?.[x(0x155)]?.['primarySelection']||c[x(0x155)][x(0x13f)]?.[x(0x134)]){this['_configButton']['style']['display']=x(0x168),this['_id']['value']='',this[x(0x147)][x(0x144)]='',this[x(0x164)][x(0x16d)]=!![],this[x(0x147)][x(0x16d)]=!![],this['_idRect'][x(0x169)][x(0x16e)]='',this[x(0x15f)][x(0x169)]['background']='',this[x(0x159)]['style'][x(0x16e)]='',this['_type'][x(0x144)]=':host',this['_type'][x(0x15b)]=this['_type'][x(0x144)];return;}this[x(0x164)][x(0x16d)]=![],this[x(0x147)]['disabled']=![];const d=await this['serviceContainer']?.[x(0x12b)]('configUiService',e=>e[x(0x14e)](c[x(0x155)]['primarySelection']));d?this[x(0x16c)][x(0x169)][x(0x157)]='block':this['_configButton'][x(0x169)][x(0x157)]=x(0x168);c[x(0x155)]['primarySelection']?.[x(0x12c)]==NodeType['Element']?this[x(0x148)][x(0x144)]=c[x(0x155)][x(0x13f)]?.['name']??'':this[x(0x148)][x(0x144)]=c['selectionService']['primarySelection']?.['node']?.['nodeName']??'';this['_type']['title']=this['_type']['value'],this['_id']['value']=c['selectionService']['primarySelection']?.['id']??'';if(c['selectionService'][x(0x13f)]?.[x(0x15a)]?.[x(0x12c)]!=NodeType[x(0x162)])this['_content']['value']=c[x(0x155)]['primarySelection']?.['content']??'';else{if(c[x(0x155)][x(0x13f)]?.['element']?.[x(0x12e)]?.['length']<=0x0)this[x(0x147)][x(0x144)]=c[x(0x155)]['primarySelection']?.[x(0x160)]??'';else this['_content']['value']='';}this[x(0x147)][x(0x15b)]=this[x(0x147)]['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService']['idProperty'],c[x(0x155)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[x(0x14d)](this[x(0x15f)],this[x(0x16a)][x(0x139)],c[x(0x155)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[x(0x14d)](this[x(0x159)],this['_propertiesService']['innerHtmlProperty'],c[x(0x155)][x(0x156)],this[x(0x16a)]);}['_openContextMenu'](c,d,e){const y=i;let f;if(this[y(0x140)][y(0x145)])f=this['propertyGrid'][y(0x145)](d,e);if(!f)f=e[y(0x146)]['getContextMenu'](d,e);ContextMenu['show'](f,c);}}customElements[i(0x16b)](i(0x12d),PropertyGridWithHeader);function b(c,d){c=c-0x12a;const e=a();let f=e[c];return f;}function a(){const z=['refreshIsSetElementAndEditorForDesignItems','hasConfigUi','textContent','idRect','modern','_instanceServiceContainer','_selectionChangedHandler','1241396OnOnIc','selectionService','selectedElements','display','getAttribute','_innerRect','element','title','instanceServiceContainer','20490jKDYlm','serviceContainer','_contentRect','content','configUiService','Element','properties','_id','contentRect','744844PSgRYh','emit','none','style','_propertiesService','define','_configButton','disabled','background','3118887bElWpB','152RBUCvB','getLastServiceWhereAsync','nodeType','node-projects-web-component-designer-property-grid-with-header','children','key',':host','preventDefault','appearance','getConfigUi','isRootItem','config','_idRect','507066VqUOJy','Escape','contentProperty','9455964PBJRvr','stopPropagation','_openContextMenu','_refreshHeaderForCurrentSelection','18963AOTlsW','primarySelection','propertyGrid','attributeChangedCallback','35ZEWYOp','template','value','propertyContextMenuProvider','service','_content','_type','_restoreCachedInititalValues','84936ZSqWmw','_getDomElement','Enter'];a=function(){return z;};return a();}