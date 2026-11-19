const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x156))/0x1*(-parseInt(h(0x15a))/0x2)+-parseInt(h(0x14f))/0x3*(parseInt(h(0x138))/0x4)+parseInt(h(0x12b))/0x5*(-parseInt(h(0x152))/0x6)+parseInt(h(0x129))/0x7+-parseInt(h(0x12e))/0x8*(-parseInt(h(0x154))/0x9)+parseInt(h(0x162))/0xa+parseInt(h(0x15c))/0xb*(-parseInt(h(0x15f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80438));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';function a(){const z=['selectedElements','getAttribute','_propertiesService','refreshIsSetElementAndEditorForDesignItems','showConfigClicked','hasConfigUi','_getDomElement','disabled','_refreshHeaderForCurrentSelection','contentProperty','node','isRootItem','idProperty','value','_innerRect','emit','28311ljNwRf','background','type','90hrwNIJ','title','6103593pxGDie','Escape','63Fvpqne','Enter','_idRect','none','3178mOYlyX','_id','5400681PvxWUx','onfocus','_contentRect','12zpRZyz','content','configUiService','5539840nCGAIB','_restoreCachedInititalValues','_openContextMenu','setAttribute','innerRect',':host','_configButton','key','appearance','getLastServiceWhereAsync','getContextMenu','show','4241811dXDBjb','oncontextmenu','227980BxOlPE','display','_type','8zMEAUG','primarySelection','_content','style','_selectionChangedHandler','service','element','instanceServiceContainer','preventDefault','selectionService','16FoUYFF','length','nodeType','_instanceServiceContainer','propertyGrid','serviceContainer','propertyContextMenuProvider'];a=function(){return z;};return a();}import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x123;const e=a();let f=e[c];return f;}export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x125)];static ['properties']={'appearance':String};get['appearance'](){const j=i;return this[j(0x140)]('appearance')==='modern'?'modern':'classic';}set['appearance'](c){const k=i;this[k(0x165)](k(0x125),c);}['attributeChangedCallback'](){const l=i;if(this['propertyGrid'])this[l(0x13c)]['appearance']=this['appearance'];}static ['style']=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x13c)];[i(0x12d)];['_id'];['_content'];[i(0x132)];[i(0x13b)];['_idRect'];[i(0x15e)];[i(0x14d)];['_propertiesService'];['_configButton'];constructor(){const m=i;super(),this[m(0x163)](),this[m(0x12d)]=this[m(0x145)](m(0x151)),this['_id']=this[m(0x145)]('id'),this['_content']=this[m(0x145)](m(0x160)),this['propertyGrid']=this['_getDomElement']('pg'),this['propertyGrid'][m(0x125)]=this['appearance'],this[m(0x158)]=this[m(0x145)]('idRect'),this['_contentRect']=this['_getDomElement']('contentRect'),this[m(0x14d)]=this[m(0x145)](m(0x166)),this[m(0x123)]=this[m(0x145)]('config'),this['_configButton']['onclick']=async()=>{const n=m,d=await this['serviceContainer']?.[n(0x126)](n(0x161),async f=>await f['hasConfigUi'](this[n(0x13b)]['selectionService']['primarySelection'])),e=await d['getConfigUi'](this[n(0x13b)][n(0x137)][n(0x12f)]);this['serviceContainer']['globalContext'][n(0x143)][n(0x14e)]({'designItem':this['_instanceServiceContainer'][n(0x137)][n(0x12f)],'configUi':e});},this[m(0x141)]=new ContentAndIdPropertiesService(),this['_idRect'][m(0x12a)]=d=>{const o=m;d['preventDefault']();if(!this[o(0x13b)][o(0x137)][o(0x12f)]?.['isRootItem'])this[o(0x164)](d,this['_instanceServiceContainer'][o(0x137)][o(0x13f)],this['_propertiesService'][o(0x14b)]);},this[m(0x15e)]['oncontextmenu']=d=>{const p=m;d[p(0x136)]();if(!this[p(0x13b)][p(0x137)]['primarySelection']?.[p(0x14a)])this['_openContextMenu'](d,this[p(0x13b)][p(0x137)][p(0x13f)],this['_propertiesService'][p(0x148)]);},this[m(0x14d)][m(0x12a)]=d=>{const q=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[q(0x141)]['innerHtmlProperty']);},this[m(0x15b)]['onkeydown']=d=>{const r=m;if(d['key']==r(0x157))this[r(0x13b)]['selectionService'][r(0x12f)]['id']=this['_id'][r(0x14c)];else d[r(0x124)]=='Escape'&&(this[r(0x15b)][r(0x14c)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['id']??'',d[r(0x136)](),d['stopPropagation']());PropertyGridPropertyList[r(0x142)](this['_idRect'],this['_propertiesService']['idProperty'],this[r(0x13b)][r(0x137)]['selectedElements'],this['_propertiesService']);},this['_content']['onkeydown']=d=>{const s=m;if(d['key']==s(0x157))this['_instanceServiceContainer']['selectionService'][s(0x12f)][s(0x160)]=this[s(0x130)]['value'],this[s(0x130)]['title']=this[s(0x130)]['value'];else d['key']==s(0x155)&&(this['_content'][s(0x14c)]=this['_instanceServiceContainer'][s(0x137)][s(0x12f)]?.['element']?.['textContent']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[s(0x15e)],this['_propertiesService'][s(0x148)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[s(0x142)](this[s(0x14d)],this['_propertiesService']['innerHtmlProperty'],this['_instanceServiceContainer'][s(0x137)][s(0x13f)],this[s(0x141)]);};let c;this[m(0x15b)][m(0x15d)]=d=>{const t=m;c=this[t(0x13b)]['selectionService'][t(0x12f)];},this[m(0x15b)]['onblur']=d=>{const u=m;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList[u(0x142)](this['_idRect'],this[u(0x141)]['idProperty'],this[u(0x13b)]['selectionService'][u(0x13f)],this['_propertiesService']);};}set[i(0x13d)](c){this['propertyGrid']['serviceContainer']=c;}set[i(0x135)](c){const v=i,d=c;this[v(0x13b)]=d,this['_selectionChangedHandler']?.['dispose'](),d?(this['_selectionChangedHandler']=d[v(0x137)]['onSelectionChanged']['on'](async f=>{const w=v;this[w(0x13c)]['instanceServiceContainer']=d,await sleep(0x14),await this[w(0x147)](d);}),this[v(0x147)](d)):(this[v(0x123)][v(0x131)][v(0x12c)]='none',this['_id'][v(0x14c)]='',this[v(0x130)]['value']='',this[v(0x15b)][v(0x146)]=!![],this[v(0x130)][v(0x146)]=!![],this[v(0x158)][v(0x131)][v(0x150)]='',this[v(0x15e)][v(0x131)][v(0x150)]='',this['_innerRect']['style'][v(0x150)]='',this['_type']['value']=v(0x167)),this[v(0x13c)]['instanceServiceContainer']=d;}async['_refreshHeaderForCurrentSelection'](c){const x=i;if(!c?.[x(0x137)]?.['primarySelection']||c['selectionService'][x(0x12f)]?.[x(0x14a)]){this[x(0x123)][x(0x131)]['display']='none',this[x(0x15b)]['value']='',this['_content']['value']='',this[x(0x15b)]['disabled']=!![],this[x(0x130)][x(0x146)]=!![],this['_idRect']['style'][x(0x150)]='',this['_contentRect'][x(0x131)][x(0x150)]='',this['_innerRect'][x(0x131)][x(0x150)]='',this[x(0x12d)]['value']=':host',this['_type']['title']=this['_type']['value'];return;}this[x(0x15b)]['disabled']=![],this['_content']['disabled']=![];const d=await this[x(0x13d)]?.[x(0x126)](x(0x161),e=>e[x(0x144)](c[x(0x137)][x(0x12f)]));d?this[x(0x123)][x(0x131)][x(0x12c)]='block':this[x(0x123)][x(0x131)][x(0x12c)]=x(0x159);c[x(0x137)]['primarySelection']?.['nodeType']==NodeType['Element']?this[x(0x12d)]['value']=c[x(0x137)][x(0x12f)]?.['name']??'':this[x(0x12d)]['value']=c[x(0x137)][x(0x12f)]?.[x(0x149)]?.['nodeName']??'';this['_type'][x(0x153)]=this[x(0x12d)]['value'],this['_id'][x(0x14c)]=c['selectionService'][x(0x12f)]?.['id']??'';if(c['selectionService']['primarySelection']?.['element']?.[x(0x13a)]!=NodeType['Element'])this[x(0x130)]['value']=c[x(0x137)][x(0x12f)]?.[x(0x160)]??'';else{if(c['selectionService']['primarySelection']?.[x(0x134)]?.['children']?.[x(0x139)]<=0x0)this[x(0x130)][x(0x14c)]=c['selectionService'][x(0x12f)]?.['content']??'';else this[x(0x130)][x(0x14c)]='';}this['_content'][x(0x153)]=this[x(0x130)][x(0x14c)],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[x(0x158)],this[x(0x141)][x(0x14b)],c[x(0x137)]['selectedElements'],this[x(0x141)]),PropertyGridPropertyList[x(0x142)](this['_contentRect'],this[x(0x141)][x(0x148)],c['selectionService']['selectedElements'],this[x(0x141)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this[x(0x141)]['innerHtmlProperty'],c[x(0x137)]['selectedElements'],this['_propertiesService']);}[i(0x164)](c,d,e){const y=i;let f;if(this['propertyGrid'][y(0x13e)])f=this['propertyGrid']['propertyContextMenuProvider'](d,e);if(!f)f=e[y(0x133)][y(0x127)](d,e);ContextMenu[y(0x128)](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);