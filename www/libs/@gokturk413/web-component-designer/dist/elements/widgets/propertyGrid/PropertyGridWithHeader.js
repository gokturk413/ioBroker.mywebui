const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x138))/0x1*(parseInt(h(0x151))/0x2)+parseInt(h(0x164))/0x3*(-parseInt(h(0x14f))/0x4)+-parseInt(h(0x159))/0x5*(parseInt(h(0x168))/0x6)+-parseInt(h(0x122))/0x7*(-parseInt(h(0x152))/0x8)+parseInt(h(0x162))/0x9*(-parseInt(h(0x12d))/0xa)+-parseInt(h(0x158))/0xb+-parseInt(h(0x134))/0xc*(-parseInt(h(0x154))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x302c2));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0x121;const e=a();let f=e[c];return f;}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x130)];static ['properties']={'appearance':String};get['appearance'](){const j=i;return this['getAttribute']('appearance')==='modern'?'modern':j(0x15d);}set['appearance'](c){this['setAttribute']('appearance',c);}[i(0x124)](){const k=i;if(this[k(0x129)])this[k(0x129)][k(0x130)]=this['appearance'];}static [i(0x140)]=css`
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
    `;static [i(0x15a)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x129)];['_type'];[i(0x169)];['_content'];['_selectionChangedHandler'];['_instanceServiceContainer'];['_idRect'];['_contentRect'];['_innerRect'];[i(0x12c)];[i(0x13a)];constructor(){const l=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this['_getDomElement']('type'),this[l(0x169)]=this[l(0x14a)]('id'),this['_content']=this['_getDomElement'](l(0x147)),this['propertyGrid']=this[l(0x14a)]('pg'),this[l(0x129)]['appearance']=this['appearance'],this['_idRect']=this['_getDomElement'](l(0x126)),this[l(0x165)]=this['_getDomElement'](l(0x121)),this['_innerRect']=this[l(0x14a)]('innerRect'),this['_configButton']=this[l(0x14a)]('config'),this[l(0x13a)]['onclick']=async()=>{const m=l,d=await this['serviceContainer']?.[m(0x153)]('configUiService',async f=>await f[m(0x127)](this[m(0x128)][m(0x149)]['primarySelection'])),e=await d[m(0x166)](this[m(0x128)][m(0x149)][m(0x13c)]);this['serviceContainer'][m(0x148)][m(0x13e)]['emit']({'designItem':this[m(0x128)][m(0x149)][m(0x13c)],'configUi':e});},this[l(0x12c)]=new ContentAndIdPropertiesService(),this['_idRect'][l(0x14d)]=d=>{const n=l;d[n(0x133)]();if(!this['_instanceServiceContainer']['selectionService'][n(0x13c)]?.[n(0x12b)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[n(0x12c)]['idProperty']);},this[l(0x165)][l(0x14d)]=d=>{const o=l;d[o(0x133)]();if(!this['_instanceServiceContainer']['selectionService'][o(0x13c)]?.['isRootItem'])this[o(0x150)](d,this['_instanceServiceContainer'][o(0x149)][o(0x145)],this[o(0x12c)]['contentProperty']);},this['_innerRect']['oncontextmenu']=d=>{const p=l;d[p(0x133)]();if(!this[p(0x128)]['selectionService'][p(0x13c)]?.['isRootItem'])this[p(0x150)](d,this[p(0x128)][p(0x149)][p(0x145)],this['_propertiesService'][p(0x12f)]);},this['_id'][l(0x143)]=d=>{const q=l;if(d['key']==q(0x12a))this[q(0x128)]['selectionService']['primarySelection']['id']=this[q(0x169)][q(0x137)];else d[q(0x155)]==q(0x13b)&&(this[q(0x169)]['value']=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['id']??'',d[q(0x133)](),d[q(0x123)]());PropertyGridPropertyList[q(0x125)](this['_idRect'],this['_propertiesService'][q(0x161)],this['_instanceServiceContainer']['selectionService'][q(0x145)],this[q(0x12c)]);},this['_content'][l(0x143)]=d=>{const r=l;if(d[r(0x155)]=='Enter')this[r(0x128)][r(0x149)][r(0x13c)]['content']=this['_content']['value'],this[r(0x136)]['title']=this['_content'][r(0x137)];else d['key']=='Escape'&&(this[r(0x136)][r(0x137)]=this['_instanceServiceContainer']['selectionService'][r(0x13c)]?.['element']?.[r(0x12e)]??'',d[r(0x133)](),d['stopPropagation']());PropertyGridPropertyList[r(0x125)](this['_contentRect'],this[r(0x12c)]['contentProperty'],this[r(0x128)]['selectionService']['selectedElements'],this[r(0x12c)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0x142)],this['_propertiesService']['innerHtmlProperty'],this[r(0x128)][r(0x149)]['selectedElements'],this['_propertiesService']);};let c;this['_id'][l(0x13f)]=d=>{c=this['_instanceServiceContainer']['selectionService']['primarySelection'];},this[l(0x169)][l(0x135)]=d=>{const s=l;if(c)c['id']=this[s(0x169)]['value'];c=null,PropertyGridPropertyList[s(0x125)](this[s(0x163)],this['_propertiesService'][s(0x161)],this['_instanceServiceContainer'][s(0x149)]['selectedElements'],this[s(0x12c)]);};}set[i(0x14c)](c){const t=i;this['propertyGrid'][t(0x14c)]=c;}set['instanceServiceContainer'](c){const u=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.['dispose'](),d?(this['_selectionChangedHandler']=d[u(0x149)]['onSelectionChanged']['on'](async f=>{this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton'][u(0x140)]['display']='none',this['_id']['value']='',this[u(0x136)]['value']='',this[u(0x169)]['disabled']=!![],this['_content']['disabled']=!![],this[u(0x163)][u(0x140)][u(0x13d)]='',this[u(0x165)][u(0x140)]['background']='',this['_innerRect'][u(0x140)][u(0x13d)]='',this['_type'][u(0x137)]=u(0x160)),this['propertyGrid'][u(0x131)]=d;}async[i(0x15e)](c){const v=i;if(!c?.[v(0x149)]?.['primarySelection']||c['selectionService'][v(0x13c)]?.['isRootItem']){this['_configButton'][v(0x140)][v(0x15f)]=v(0x141),this['_id']['value']='',this[v(0x136)][v(0x137)]='',this[v(0x169)][v(0x132)]=!![],this['_content'][v(0x132)]=!![],this['_idRect'][v(0x140)][v(0x13d)]='',this['_contentRect'][v(0x140)][v(0x13d)]='',this['_innerRect']['style']['background']='',this['_type'][v(0x137)]=v(0x160),this['_type']['title']=this[v(0x144)]['value'];return;}this['_id']['disabled']=![],this[v(0x136)][v(0x132)]=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',e=>e['hasConfigUi'](c[v(0x149)]['primarySelection']));d?this['_configButton'][v(0x140)][v(0x15f)]=v(0x157):this['_configButton']['style'][v(0x15f)]='none';c['selectionService']['primarySelection']?.['nodeType']==NodeType['Element']?this['_type']['value']=c[v(0x149)][v(0x13c)]?.[v(0x146)]??'':this[v(0x144)]['value']=c[v(0x149)][v(0x13c)]?.['node']?.['nodeName']??'';this[v(0x144)]['title']=this['_type'][v(0x137)],this[v(0x169)][v(0x137)]=c[v(0x149)]['primarySelection']?.['id']??'';if(c['selectionService'][v(0x13c)]?.['element']?.[v(0x15b)]!=NodeType[v(0x156)])this['_content']['value']=c['selectionService'][v(0x13c)]?.['content']??'';else{if(c['selectionService'][v(0x13c)]?.[v(0x139)]?.['children']?.[v(0x14e)]<=0x0)this['_content'][v(0x137)]=c['selectionService'][v(0x13c)]?.[v(0x147)]??'';else this[v(0x136)]['value']='';}this[v(0x136)]['title']=this['_content'][v(0x137)],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[v(0x163)],this[v(0x12c)]['idProperty'],c['selectionService']['selectedElements'],this[v(0x12c)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService']['contentProperty'],c['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[v(0x125)](this['_innerRect'],this[v(0x12c)]['innerHtmlProperty'],c[v(0x149)]['selectedElements'],this['_propertiesService']);}['_openContextMenu'](c,d,e){const w=i;let f;if(this['propertyGrid'][w(0x15c)])f=this[w(0x129)]['propertyContextMenuProvider'](d,e);if(!f)f=e['service']['getContextMenu'](d,e);ContextMenu[w(0x14b)](f,c);}}function a(){const x=['onblur','_content','value','9tDOGel','element','_configButton','Escape','primarySelection','background','showConfigClicked','onfocus','style','none','_innerRect','onkeydown','_type','selectedElements','name','content','globalContext','selectionService','_getDomElement','show','serviceContainer','oncontextmenu','length','260eFmCek','_openContextMenu','13394GQmvOl','1778136lGZPAO','getLastServiceWhereAsync','5265bOHTYp','key','Element','block','2817100NCAmXO','150pnmOYP','template','nodeType','propertyContextMenuProvider','classic','_refreshHeaderForCurrentSelection','display',':host','idProperty','31689QULMNB','_idRect','2289pWGNZC','_contentRect','getConfigUi','node-projects-web-component-designer-property-grid-with-header','67632lEqJOf','_id','contentRect','7TcJUIg','stopPropagation','attributeChangedCallback','refreshIsSetElementAndEditorForDesignItems','idRect','hasConfigUi','_instanceServiceContainer','propertyGrid','Enter','isRootItem','_propertiesService','860EswdZR','textContent','innerHtmlProperty','appearance','instanceServiceContainer','disabled','preventDefault','25524jaVhtN'];a=function(){return x;};return a();}customElements['define'](i(0x167),PropertyGridWithHeader);