const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x139))/0x1*(parseInt(h(0x125))/0x2)+-parseInt(h(0x111))/0x3+parseInt(h(0x133))/0x4+parseInt(h(0x134))/0x5*(-parseInt(h(0x105))/0x6)+parseInt(h(0x113))/0x7+parseInt(h(0x11a))/0x8*(parseInt(h(0x11d))/0x9)+-parseInt(h(0x128))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb87b8));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function a(){const z=['modern','primarySelection','attributeChangedCallback','586220qRqkGC','block','propertyGrid','29999290JbbmsC','content','preventDefault','innerHtmlProperty','_type','_content','stopPropagation','element','onSelectionChanged','selectionService','show','4988516wiRjjd','105oexQLk','emit','hasConfigUi','oncontextmenu','_instanceServiceContainer','5xgiucO','name','instanceServiceContainer','_configButton','serviceContainer','getConfigUi','contentProperty','display','propertyContextMenuProvider','_propertiesService','_innerRect','refreshIsSetElementAndEditorForDesignItems','none','idProperty','_refreshHeaderForCurrentSelection','328440wueSSn','disabled','innerRect','nodeType','background','_getDomElement','style','_idRect','node','Element','idRect','_contentRect','2047725kevBBl','onblur','10196137MOUGBb','textContent','service','appearance','isRootItem','_id',':host','5673656noTvmc','title','value','18CkzKYT','selectedElements','onkeydown','key','contentRect'];a=function(){return z;};return a();}import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';function b(c,d){c=c-0x105;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x116)];static ['properties']={'appearance':String};get[i(0x116)](){const j=i;return this['getAttribute']('appearance')===j(0x122)?j(0x122):'classic';}set['appearance'](c){const k=i;this['setAttribute'](k(0x116),c);}[i(0x124)](){const l=i;if(this['propertyGrid'])this[l(0x127)]['appearance']=this['appearance'];}static [i(0x10b)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x127)];['_type'];['_id'];[i(0x12d)];['_selectionChangedHandler'];['_instanceServiceContainer'];[i(0x10c)];['_contentRect'];[i(0x143)];['_propertiesService'];[i(0x13c)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this[m(0x10a)]('type'),this['_id']=this[m(0x10a)]('id'),this[m(0x12d)]=this[m(0x10a)]('content'),this['propertyGrid']=this['_getDomElement']('pg'),this[m(0x127)][m(0x116)]=this['appearance'],this[m(0x10c)]=this[m(0x10a)](m(0x10f)),this['_contentRect']=this[m(0x10a)](m(0x121)),this[m(0x143)]=this['_getDomElement'](m(0x107)),this['_configButton']=this[m(0x10a)]('config'),this[m(0x13c)]['onclick']=async()=>{const n=m,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][n(0x131)]['primarySelection'])),e=await d[n(0x13e)](this[n(0x138)][n(0x131)][n(0x123)]);this[n(0x13d)]['globalContext']['showConfigClicked'][n(0x135)]({'designItem':this['_instanceServiceContainer']['selectionService']['primarySelection'],'configUi':e});},this[m(0x142)]=new ContentAndIdPropertiesService(),this[m(0x10c)][m(0x137)]=d=>{const o=m;d['preventDefault']();if(!this['_instanceServiceContainer'][o(0x131)]['primarySelection']?.[o(0x117)])this['_openContextMenu'](d,this[o(0x138)][o(0x131)][o(0x11e)],this['_propertiesService'][o(0x146)]);},this[m(0x110)][m(0x137)]=d=>{const p=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][p(0x123)]?.[p(0x117)])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0x131)][p(0x11e)],this[p(0x142)][p(0x13f)]);},this[m(0x143)][m(0x137)]=d=>{const q=m;d['preventDefault']();if(!this['_instanceServiceContainer'][q(0x131)][q(0x123)]?.[q(0x117)])this['_openContextMenu'](d,this[q(0x138)][q(0x131)]['selectedElements'],this[q(0x142)][q(0x12b)]);},this[m(0x118)]['onkeydown']=d=>{const r=m;if(d['key']=='Enter')this['_instanceServiceContainer'][r(0x131)]['primarySelection']['id']=this['_id']['value'];else d['key']=='Escape'&&(this['_id']['value']=this[r(0x138)]['selectionService']['primarySelection']?.['id']??'',d[r(0x12a)](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[r(0x142)][r(0x146)],this['_instanceServiceContainer']['selectionService'][r(0x11e)],this['_propertiesService']);},this['_content'][m(0x11f)]=d=>{const s=m;if(d[s(0x120)]=='Enter')this[s(0x138)][s(0x131)][s(0x123)]['content']=this['_content'][s(0x11c)],this[s(0x12d)][s(0x11b)]=this['_content']['value'];else d['key']=='Escape'&&(this['_content'][s(0x11c)]=this[s(0x138)][s(0x131)]['primarySelection']?.['element']?.[s(0x114)]??'',d['preventDefault'](),d[s(0x12e)]());PropertyGridPropertyList[s(0x144)](this['_contentRect'],this[s(0x142)]['contentProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[s(0x142)]),PropertyGridPropertyList[s(0x144)](this[s(0x143)],this[s(0x142)]['innerHtmlProperty'],this[s(0x138)]['selectionService']['selectedElements'],this[s(0x142)]);};let c;this[m(0x118)]['onfocus']=d=>{c=this['_instanceServiceContainer']['selectionService']['primarySelection'];},this[m(0x118)][m(0x112)]=d=>{const t=m;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList[t(0x144)](this['_idRect'],this[t(0x142)]['idProperty'],this['_instanceServiceContainer']['selectionService'][t(0x11e)],this[t(0x142)]);};}set['serviceContainer'](c){const u=i;this[u(0x127)][u(0x13d)]=c;}set['instanceServiceContainer'](c){const v=i,d=c;this[v(0x138)]=d,this['_selectionChangedHandler']?.['dispose'](),d?(this['_selectionChangedHandler']=d[v(0x131)][v(0x130)]['on'](async f=>{const w=v;this[w(0x127)]['instanceServiceContainer']=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this[v(0x147)](d)):(this['_configButton']['style'][v(0x140)]='none',this[v(0x118)][v(0x11c)]='',this[v(0x12d)][v(0x11c)]='',this[v(0x118)]['disabled']=!![],this[v(0x12d)]['disabled']=!![],this[v(0x10c)]['style'][v(0x109)]='',this['_contentRect']['style']['background']='',this['_innerRect']['style']['background']='',this[v(0x12c)]['value']=':host'),this['propertyGrid'][v(0x13b)]=d;}async['_refreshHeaderForCurrentSelection'](c){const x=i;if(!c?.[x(0x131)]?.[x(0x123)]||c['selectionService'][x(0x123)]?.['isRootItem']){this[x(0x13c)][x(0x10b)]['display']=x(0x145),this[x(0x118)][x(0x11c)]='',this['_content'][x(0x11c)]='',this['_id']['disabled']=!![],this[x(0x12d)][x(0x106)]=!![],this[x(0x10c)][x(0x10b)]['background']='',this['_contentRect'][x(0x10b)][x(0x109)]='',this[x(0x143)][x(0x10b)]['background']='',this['_type'][x(0x11c)]=x(0x119),this[x(0x12c)]['title']=this['_type'][x(0x11c)];return;}this[x(0x118)][x(0x106)]=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',e=>e[x(0x136)](c['selectionService']['primarySelection']));d?this[x(0x13c)][x(0x10b)][x(0x140)]=x(0x126):this[x(0x13c)]['style'][x(0x140)]=x(0x145);c['selectionService'][x(0x123)]?.[x(0x108)]==NodeType[x(0x10e)]?this['_type'][x(0x11c)]=c['selectionService']['primarySelection']?.[x(0x13a)]??'':this['_type'][x(0x11c)]=c['selectionService'][x(0x123)]?.[x(0x10d)]?.['nodeName']??'';this[x(0x12c)]['title']=this[x(0x12c)][x(0x11c)],this['_id'][x(0x11c)]=c['selectionService']['primarySelection']?.['id']??'';if(c['selectionService']['primarySelection']?.['element']?.['nodeType']!=NodeType[x(0x10e)])this[x(0x12d)][x(0x11c)]=c[x(0x131)]['primarySelection']?.[x(0x129)]??'';else{if(c[x(0x131)]['primarySelection']?.[x(0x12f)]?.['children']?.['length']<=0x0)this[x(0x12d)][x(0x11c)]=c['selectionService'][x(0x123)]?.['content']??'';else this[x(0x12d)][x(0x11c)]='';}this[x(0x12d)][x(0x11b)]=this[x(0x12d)]['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService']['idProperty'],c['selectionService'][x(0x11e)],this[x(0x142)]),PropertyGridPropertyList[x(0x144)](this[x(0x110)],this[x(0x142)][x(0x13f)],c[x(0x131)][x(0x11e)],this['_propertiesService']),PropertyGridPropertyList[x(0x144)](this['_innerRect'],this['_propertiesService'][x(0x12b)],c['selectionService']['selectedElements'],this['_propertiesService']);}['_openContextMenu'](c,d,e){const y=i;let f;if(this[y(0x127)][y(0x141)])f=this[y(0x127)]['propertyContextMenuProvider'](d,e);if(!f)f=e[y(0x115)]['getContextMenu'](d,e);ContextMenu[y(0x132)](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);