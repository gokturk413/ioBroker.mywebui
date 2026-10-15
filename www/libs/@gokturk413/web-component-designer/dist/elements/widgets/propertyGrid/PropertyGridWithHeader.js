const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x172))/0x1*(parseInt(h(0x150))/0x2)+parseInt(h(0x161))/0x3*(parseInt(h(0x168))/0x4)+-parseInt(h(0x184))/0x5*(-parseInt(h(0x174))/0x6)+-parseInt(h(0x173))/0x7*(-parseInt(h(0x16f))/0x8)+-parseInt(h(0x14d))/0x9*(parseInt(h(0x160))/0xa)+-parseInt(h(0x182))/0xb+parseInt(h(0x14e))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9f8a7));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function b(c,d){c=c-0x13e;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';function a(){const A=['_configButton','535kYpFSR','_refreshHeaderForCurrentSelection','display','primarySelection','refreshIsSetElementAndEditorForDesignItems','oncontextmenu','_openContextMenu','configUiService','properties','serviceContainer','onblur','stopPropagation','globalContext','config','instanceServiceContainer','_getDomElement','_idRect','isRootItem','4718781TFTNzY','8037576vqiEIc','hasConfigUi','2ENWvrv','name','selectedElements','setAttribute','idProperty','getLastServiceWhereAsync','onkeydown','element','propertyContextMenuProvider','getContextMenu','template','value','_contentRect','disabled','nodeName','propertyGrid','10QSdFRk','6UKQdrf','getAttribute','preventDefault','innerHtmlProperty','appearance','_propertiesService','service','1250876JeJDiZ','modern','key','_innerRect','observedAttributes',':host','idRect','8ZuGmts','_type','_id','667657yhVhAe','4371297edPzei','20148PiQYtd','contentProperty','selectionService','_selectionChangedHandler','title','style','nodeType','_content','none','define','Enter','_instanceServiceContainer','background','emit','4769248newudt'];a=function(){return A;};return a();}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x16c)]=[i(0x165)];static [i(0x143)]={'appearance':String};get[i(0x165)](){const j=i;return this[j(0x162)](j(0x165))===j(0x169)?'modern':'classic';}set['appearance'](c){const k=i;this[k(0x153)](k(0x165),c);}['attributeChangedCallback'](){const l=i;if(this['propertyGrid'])this['propertyGrid']['appearance']=this[l(0x165)];}static [i(0x179)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x15f)];['_type'];[i(0x171)];[i(0x17b)];[i(0x177)];['_instanceServiceContainer'];['_idRect'];['_contentRect'];['_innerRect'];['_propertiesService'];[i(0x183)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this[m(0x170)]=this[m(0x14a)]('type'),this['_id']=this['_getDomElement']('id'),this[m(0x17b)]=this['_getDomElement']('content'),this['propertyGrid']=this['_getDomElement']('pg'),this[m(0x15f)][m(0x165)]=this['appearance'],this[m(0x14b)]=this[m(0x14a)](m(0x16e)),this[m(0x15c)]=this[m(0x14a)]('contentRect'),this[m(0x16b)]=this['_getDomElement']('innerRect'),this['_configButton']=this[m(0x14a)](m(0x148)),this[m(0x183)]['onclick']=async()=>{const n=m,d=await this[n(0x144)]?.[n(0x155)]('configUiService',async f=>await f['hasConfigUi'](this[n(0x17f)]['selectionService'][n(0x13e)])),e=await d['getConfigUi'](this[n(0x17f)]['selectionService'][n(0x13e)]);this[n(0x144)][n(0x147)]['showConfigClicked'][n(0x181)]({'designItem':this[n(0x17f)][n(0x176)]['primarySelection'],'configUi':e});},this[m(0x166)]=new ContentAndIdPropertiesService(),this[m(0x14b)][m(0x140)]=d=>{const o=m;d[o(0x163)]();if(!this[o(0x17f)][o(0x176)][o(0x13e)]?.['isRootItem'])this[o(0x141)](d,this[o(0x17f)][o(0x176)][o(0x152)],this[o(0x166)]['idProperty']);},this[m(0x15c)][m(0x140)]=d=>{const p=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][p(0x13e)]?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[p(0x166)]['contentProperty']);},this[m(0x16b)]['oncontextmenu']=d=>{const q=m;d['preventDefault']();if(!this['_instanceServiceContainer'][q(0x176)][q(0x13e)]?.[q(0x14c)])this[q(0x141)](d,this[q(0x17f)][q(0x176)]['selectedElements'],this[q(0x166)]['innerHtmlProperty']);},this[m(0x171)][m(0x156)]=d=>{const r=m;if(d['key']==r(0x17e))this[r(0x17f)]['selectionService']['primarySelection']['id']=this[r(0x171)]['value'];else d[r(0x16a)]=='Escape'&&(this['_id'][r(0x15b)]=this[r(0x17f)]['selectionService']['primarySelection']?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x13f)](this['_idRect'],this['_propertiesService']['idProperty'],this['_instanceServiceContainer'][r(0x176)][r(0x152)],this[r(0x166)]);},this[m(0x17b)]['onkeydown']=d=>{const s=m;if(d[s(0x16a)]=='Enter')this['_instanceServiceContainer'][s(0x176)][s(0x13e)]['content']=this[s(0x17b)][s(0x15b)],this[s(0x17b)][s(0x178)]=this['_content']['value'];else d[s(0x16a)]=='Escape'&&(this['_content'][s(0x15b)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.[s(0x157)]?.['textContent']??'',d[s(0x163)](),d[s(0x146)]());PropertyGridPropertyList[s(0x13f)](this['_contentRect'],this[s(0x166)]['contentProperty'],this['_instanceServiceContainer']['selectionService'][s(0x152)],this[s(0x166)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService'][s(0x164)],this['_instanceServiceContainer'][s(0x176)][s(0x152)],this['_propertiesService']);};let c;this['_id']['onfocus']=d=>{const t=m;c=this[t(0x17f)]['selectionService']['primarySelection'];},this['_id'][m(0x145)]=d=>{const u=m;if(c)c['id']=this['_id'][u(0x15b)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x14b)],this['_propertiesService']['idProperty'],this[u(0x17f)]['selectionService'][u(0x152)],this[u(0x166)]);};}set[i(0x144)](c){const v=i;this[v(0x15f)]['serviceContainer']=c;}set[i(0x149)](c){const w=i,d=c;this[w(0x17f)]=d,this[w(0x177)]?.['dispose'](),d?(this['_selectionChangedHandler']=d[w(0x176)]['onSelectionChanged']['on'](async f=>{const x=w;this[x(0x15f)][x(0x149)]=d,await sleep(0x14),await this[x(0x185)](d);}),this[w(0x185)](d)):(this[w(0x183)]['style'][w(0x186)]=w(0x17c),this['_id']['value']='',this[w(0x17b)][w(0x15b)]='',this[w(0x171)]['disabled']=!![],this['_content']['disabled']=!![],this[w(0x14b)][w(0x179)]['background']='',this['_contentRect'][w(0x179)]['background']='',this[w(0x16b)]['style'][w(0x180)]='',this['_type'][w(0x15b)]=w(0x16d)),this['propertyGrid']['instanceServiceContainer']=d;}async['_refreshHeaderForCurrentSelection'](c){const y=i;if(!c?.['selectionService']?.[y(0x13e)]||c[y(0x176)][y(0x13e)]?.[y(0x14c)]){this[y(0x183)][y(0x179)][y(0x186)]=y(0x17c),this[y(0x171)]['value']='',this['_content'][y(0x15b)]='',this[y(0x171)]['disabled']=!![],this[y(0x17b)]['disabled']=!![],this[y(0x14b)]['style'][y(0x180)]='',this['_contentRect'][y(0x179)]['background']='',this[y(0x16b)]['style']['background']='',this['_type']['value']=y(0x16d),this[y(0x170)][y(0x178)]=this[y(0x170)][y(0x15b)];return;}this[y(0x171)][y(0x15d)]=![],this[y(0x17b)]['disabled']=![];const d=await this['serviceContainer']?.[y(0x155)](y(0x142),e=>e[y(0x14f)](c[y(0x176)]['primarySelection']));d?this[y(0x183)][y(0x179)][y(0x186)]='block':this[y(0x183)]['style'][y(0x186)]='none';c['selectionService']['primarySelection']?.[y(0x17a)]==NodeType['Element']?this['_type'][y(0x15b)]=c['selectionService']['primarySelection']?.[y(0x151)]??'':this[y(0x170)]['value']=c['selectionService']['primarySelection']?.['node']?.[y(0x15e)]??'';this[y(0x170)][y(0x178)]=this[y(0x170)][y(0x15b)],this[y(0x171)]['value']=c[y(0x176)][y(0x13e)]?.['id']??'';if(c[y(0x176)]['primarySelection']?.[y(0x157)]?.['nodeType']!=NodeType['Element'])this['_content'][y(0x15b)]=c['selectionService']['primarySelection']?.['content']??'';else{if(c[y(0x176)][y(0x13e)]?.['element']?.['children']?.['length']<=0x0)this[y(0x17b)]['value']=c[y(0x176)][y(0x13e)]?.['content']??'';else this[y(0x17b)][y(0x15b)]='';}this['_content']['title']=this['_content'][y(0x15b)],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[y(0x166)][y(0x154)],c[y(0x176)]['selectedElements'],this[y(0x166)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this[y(0x166)][y(0x175)],c['selectionService'][y(0x152)],this[y(0x166)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService']['innerHtmlProperty'],c['selectionService'][y(0x152)],this[y(0x166)]);}['_openContextMenu'](c,d,e){const z=i;let f;if(this['propertyGrid'][z(0x158)])f=this[z(0x15f)]['propertyContextMenuProvider'](d,e);if(!f)f=e[z(0x167)][z(0x159)](d,e);ContextMenu['show'](f,c);}}customElements[i(0x17d)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);