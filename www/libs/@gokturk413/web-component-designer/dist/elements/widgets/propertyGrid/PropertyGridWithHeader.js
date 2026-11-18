const i=b;function b(c,d){c=c-0xfd;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x105))/0x1+parseInt(h(0x10e))/0x2+-parseInt(h(0x135))/0x3+parseInt(h(0x11f))/0x4*(-parseInt(h(0x13e))/0x5)+parseInt(h(0x122))/0x6+parseInt(h(0xfd))/0x7+-parseInt(h(0x123))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x20ad6));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';function a(){const y=['content','appearance','config','Element','2990eeOchi','_contentRect','instanceServiceContainer','1636600QAisOy','_propertiesService','innerHtmlProperty','element','idRect','background','isRootItem','propertyGrid','5224wqmQOl','selectedElements','globalContext','preventDefault','_openContextMenu','Escape','primarySelection','_id','_restoreCachedInititalValues','228910oqDYgz','value','_instanceServiceContainer','title','idProperty','textContent','key','disabled','show','none','children','observedAttributes','_configButton','onSelectionChanged','onkeydown','configUiService','_type','52nfVytO','dispose','oncontextmenu','1315176nAFAtw','2607856CocXKg','node','_idRect','serviceContainer','selectionService','display','hasConfigUi','nodeName','_selectionChangedHandler','refreshIsSetElementAndEditorForDesignItems','service','template','_getDomElement','name','type','_innerRect','stopPropagation','_content','315219eMnTYc','style','contentProperty','propertyContextMenuProvider','block'];a=function(){return y;};return a();}import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x119)]=[i(0x13b)];static ['properties']={'appearance':String};get[i(0x13b)](){return this['getAttribute']('appearance')==='modern'?'modern':'classic';}set['appearance'](c){this['setAttribute']('appearance',c);}['attributeChangedCallback'](){const j=i;if(this['propertyGrid'])this['propertyGrid'][j(0x13b)]=this['appearance'];}static ['style']=css`
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
    `;static [i(0x12e)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x104)];[i(0x11e)];[i(0x10c)];[i(0x134)];[i(0x12b)];['_instanceServiceContainer'];['_idRect'];['_contentRect'];['_innerRect'];[i(0xfe)];[i(0x11a)];constructor(){const k=i;super(),this[k(0x10d)](),this['_type']=this[k(0x12f)](k(0x131)),this[k(0x10c)]=this['_getDomElement']('id'),this['_content']=this['_getDomElement'](k(0x13a)),this['propertyGrid']=this[k(0x12f)]('pg'),this['propertyGrid']['appearance']=this[k(0x13b)],this['_idRect']=this[k(0x12f)](k(0x101)),this[k(0x13f)]=this[k(0x12f)]('contentRect'),this[k(0x132)]=this['_getDomElement']('innerRect'),this[k(0x11a)]=this[k(0x12f)](k(0x13c)),this[k(0x11a)]['onclick']=async()=>{const l=k,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f[l(0x129)](this['_instanceServiceContainer']['selectionService']['primarySelection'])),e=await d['getConfigUi'](this[l(0x110)][l(0x127)][l(0x10b)]);this[l(0x126)][l(0x107)]['showConfigClicked']['emit']({'designItem':this[l(0x110)][l(0x127)]['primarySelection'],'configUi':e});},this[k(0xfe)]=new ContentAndIdPropertiesService(),this['_idRect'][k(0x121)]=d=>{const m=k;d['preventDefault']();if(!this[m(0x110)][m(0x127)]['primarySelection']?.[m(0x103)])this['_openContextMenu'](d,this[m(0x110)]['selectionService'][m(0x106)],this[m(0xfe)][m(0x112)]);},this['_contentRect']['oncontextmenu']=d=>{const n=k;d[n(0x108)]();if(!this[n(0x110)]['selectionService']['primarySelection']?.['isRootItem'])this[n(0x109)](d,this[n(0x110)][n(0x127)]['selectedElements'],this['_propertiesService']['contentProperty']);},this[k(0x132)]['oncontextmenu']=d=>{const o=k;d['preventDefault']();if(!this[o(0x110)]['selectionService'][o(0x10b)]?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']['innerHtmlProperty']);},this['_id'][k(0x11c)]=d=>{const p=k;if(d[p(0x114)]=='Enter')this['_instanceServiceContainer']['selectionService'][p(0x10b)]['id']=this[p(0x10c)]['value'];else d[p(0x114)]==p(0x10a)&&(this['_id'][p(0x10f)]=this[p(0x110)][p(0x127)]['primarySelection']?.['id']??'',d['preventDefault'](),d[p(0x133)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService'][p(0x112)],this[p(0x110)][p(0x127)]['selectedElements'],this[p(0xfe)]);},this['_content']['onkeydown']=d=>{const q=k;if(d[q(0x114)]=='Enter')this['_instanceServiceContainer'][q(0x127)][q(0x10b)]['content']=this[q(0x134)][q(0x10f)],this['_content']['title']=this['_content']['value'];else d[q(0x114)]=='Escape'&&(this['_content']['value']=this[q(0x110)][q(0x127)][q(0x10b)]?.['element']?.[q(0x113)]??'',d[q(0x108)](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[q(0x13f)],this['_propertiesService']['contentProperty'],this[q(0x110)]['selectionService']['selectedElements'],this[q(0xfe)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[q(0x132)],this[q(0xfe)][q(0xff)],this['_instanceServiceContainer'][q(0x127)][q(0x106)],this[q(0xfe)]);};let c;this[k(0x10c)]['onfocus']=d=>{const r=k;c=this[r(0x110)][r(0x127)]['primarySelection'];},this[k(0x10c)]['onblur']=d=>{const s=k;if(c)c['id']=this['_id'][s(0x10f)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[s(0xfe)]['idProperty'],this[s(0x110)][s(0x127)]['selectedElements'],this[s(0xfe)]);};}set['serviceContainer'](c){const t=i;this['propertyGrid'][t(0x126)]=c;}set['instanceServiceContainer'](c){const u=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[u(0x120)](),d?(this['_selectionChangedHandler']=d[u(0x127)][u(0x11b)]['on'](async f=>{const v=u;this['propertyGrid'][v(0x140)]=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[u(0x11a)][u(0x136)]['display']=u(0x117),this['_id'][u(0x10f)]='',this['_content'][u(0x10f)]='',this[u(0x10c)][u(0x115)]=!![],this[u(0x134)][u(0x115)]=!![],this[u(0x125)]['style'][u(0x102)]='',this[u(0x13f)]['style']['background']='',this['_innerRect']['style']['background']='',this[u(0x11e)]['value']=':host'),this[u(0x104)][u(0x140)]=d;}async['_refreshHeaderForCurrentSelection'](c){const w=i;if(!c?.['selectionService']?.['primarySelection']||c[w(0x127)][w(0x10b)]?.[w(0x103)]){this[w(0x11a)][w(0x136)]['display']=w(0x117),this['_id'][w(0x10f)]='',this['_content']['value']='',this['_id'][w(0x115)]=!![],this[w(0x134)][w(0x115)]=!![],this['_idRect']['style']['background']='',this[w(0x13f)]['style'][w(0x102)]='',this['_innerRect'][w(0x136)]['background']='',this['_type']['value']=':host',this['_type']['title']=this[w(0x11e)]['value'];return;}this[w(0x10c)][w(0x115)]=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync'](w(0x11d),e=>e[w(0x129)](c[w(0x127)]['primarySelection']));d?this[w(0x11a)]['style'][w(0x128)]=w(0x139):this['_configButton'][w(0x136)]['display']=w(0x117);c['selectionService'][w(0x10b)]?.['nodeType']==NodeType['Element']?this[w(0x11e)]['value']=c[w(0x127)]['primarySelection']?.[w(0x130)]??'':this[w(0x11e)]['value']=c[w(0x127)]['primarySelection']?.[w(0x124)]?.[w(0x12a)]??'';this['_type']['title']=this['_type'][w(0x10f)],this['_id']['value']=c[w(0x127)]['primarySelection']?.['id']??'';if(c['selectionService'][w(0x10b)]?.[w(0x100)]?.['nodeType']!=NodeType[w(0x13d)])this[w(0x134)]['value']=c['selectionService'][w(0x10b)]?.['content']??'';else{if(c[w(0x127)]['primarySelection']?.['element']?.[w(0x118)]?.['length']<=0x0)this['_content']['value']=c['selectionService'][w(0x10b)]?.['content']??'';else this[w(0x134)][w(0x10f)]='';}this[w(0x134)][w(0x111)]=this[w(0x134)]['value'],PropertyGridPropertyList[w(0x12c)](this[w(0x125)],this['_propertiesService'][w(0x112)],c[w(0x127)][w(0x106)],this[w(0xfe)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[w(0x13f)],this[w(0xfe)][w(0x137)],c[w(0x127)]['selectedElements'],this[w(0xfe)]),PropertyGridPropertyList[w(0x12c)](this[w(0x132)],this[w(0xfe)]['innerHtmlProperty'],c['selectionService']['selectedElements'],this['_propertiesService']);}['_openContextMenu'](c,d,e){const x=i;let f;if(this['propertyGrid'][x(0x138)])f=this['propertyGrid'][x(0x138)](d,e);if(!f)f=e[x(0x12d)]['getContextMenu'](d,e);ContextMenu[x(0x116)](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);