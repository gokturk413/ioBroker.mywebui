const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1c3))/0x1*(-parseInt(h(0x1a6))/0x2)+-parseInt(h(0x1d2))/0x3*(parseInt(h(0x1a3))/0x4)+parseInt(h(0x1bc))/0x5*(-parseInt(h(0x1a9))/0x6)+parseInt(h(0x196))/0x7+parseInt(h(0x19b))/0x8*(-parseInt(h(0x1cb))/0x9)+-parseInt(h(0x1a4))/0xa*(-parseInt(h(0x1ae))/0xb)+parseInt(h(0x1b9))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe81b2));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0x18f;const e=a();let f=e[c];return f;}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';function a(){const z=['_type','define','element','idProperty','instanceServiceContainer','selectedElements','_getDomElement','Enter','_refreshHeaderForCurrentSelection','291420sdGoMw','nodeType','appearance','330820pOmtMa','dispose','modern','_configButton','_selectionChangedHandler','_id','isRootItem','1412658PMvceW',':host','onSelectionChanged','selectionService','_openContextMenu','disabled','preventDefault','style','9KZtEYp','block','serviceContainer','getAttribute','key','propertyGrid','background','3039WttWQU','Escape','emit','display','configUiService','_propertiesService','content','name','_idRect','_content','_contentRect','stopPropagation','contentProperty','_instanceServiceContainer','8309371MbNXDb','_restoreCachedInititalValues','getConfigUi','hasConfigUi','Element','5281360qsvYSc','observedAttributes','getLastServiceWhereAsync','title','refreshIsSetElementAndEditorForDesignItems','onkeydown','classic','primarySelection','5720NoOpqI','10xUDYhm','innerHtmlProperty','2pUferO','value','children','6INZcXI','properties','propertyContextMenuProvider','attributeChangedCallback','service','5517974ykRiBi','_innerRect'];a=function(){return z;};return a();}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x19c)]=['appearance'];static [i(0x1aa)]={'appearance':String};get['appearance'](){const j=i;return this[j(0x1ce)]('appearance')===j(0x1be)?j(0x1be):j(0x1a1);}set['appearance'](c){const k=i;this['setAttribute'](k(0x1bb),c);}[i(0x1ac)](){const l=i;if(this[l(0x1d0)])this[l(0x1d0)][l(0x1bb)]=this[l(0x1bb)];}static ['style']=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];[i(0x1b0)];['_id'];['_content'];['_selectionChangedHandler'];[i(0x195)];[i(0x190)];['_contentRect'];[i(0x1af)];[i(0x1d7)];[i(0x1bf)];constructor(){const m=i;super(),this[m(0x197)](),this[m(0x1b0)]=this[m(0x1b6)]('type'),this['_id']=this['_getDomElement']('id'),this[m(0x191)]=this[m(0x1b6)](m(0x1d8)),this[m(0x1d0)]=this['_getDomElement']('pg'),this['propertyGrid'][m(0x1bb)]=this['appearance'],this['_idRect']=this['_getDomElement']('idRect'),this[m(0x192)]=this[m(0x1b6)]('contentRect'),this['_innerRect']=this[m(0x1b6)]('innerRect'),this[m(0x1bf)]=this[m(0x1b6)]('config'),this['_configButton']['onclick']=async()=>{const n=m,d=await this[n(0x1cd)]?.[n(0x19d)]('configUiService',async f=>await f[n(0x199)](this[n(0x195)][n(0x1c6)][n(0x1a2)])),e=await d[n(0x198)](this['_instanceServiceContainer']['selectionService'][n(0x1a2)]);this[n(0x1cd)]['globalContext']['showConfigClicked'][n(0x1d4)]({'designItem':this[n(0x195)][n(0x1c6)][n(0x1a2)],'configUi':e});},this[m(0x1d7)]=new ContentAndIdPropertiesService(),this['_idRect']['oncontextmenu']=d=>{const o=m;d[o(0x1c9)]();if(!this['_instanceServiceContainer']['selectionService'][o(0x1a2)]?.[o(0x1c2)])this['_openContextMenu'](d,this[o(0x195)]['selectionService']['selectedElements'],this[o(0x1d7)]['idProperty']);},this['_contentRect']['oncontextmenu']=d=>{const p=m;d['preventDefault']();if(!this[p(0x195)]['selectionService'][p(0x1a2)]?.[p(0x1c2)])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0x1c6)]['selectedElements'],this['_propertiesService'][p(0x194)]);},this['_innerRect']['oncontextmenu']=d=>{const q=m;d['preventDefault']();if(!this[q(0x195)]['selectionService']['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this[q(0x195)][q(0x1c6)][q(0x1b5)],this['_propertiesService'][q(0x1a5)]);},this[m(0x1c1)]['onkeydown']=d=>{const r=m;if(d[r(0x1cf)]==r(0x1b7))this[r(0x195)][r(0x1c6)][r(0x1a2)]['id']=this['_id']['value'];else d[r(0x1cf)]==r(0x1d3)&&(this['_id']['value']=this[r(0x195)]['selectionService'][r(0x1a2)]?.['id']??'',d[r(0x1c9)](),d['stopPropagation']());PropertyGridPropertyList[r(0x19f)](this['_idRect'],this[r(0x1d7)][r(0x1b3)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[r(0x1d7)]);},this['_content'][m(0x1a0)]=d=>{const s=m;if(d['key']==s(0x1b7))this['_instanceServiceContainer'][s(0x1c6)]['primarySelection']['content']=this[s(0x191)]['value'],this[s(0x191)]['title']=this[s(0x191)][s(0x1a7)];else d['key']==s(0x1d3)&&(this['_content'][s(0x1a7)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.[s(0x1b2)]?.['textContent']??'',d['preventDefault'](),d[s(0x193)]());PropertyGridPropertyList[s(0x19f)](this[s(0x192)],this[s(0x1d7)]['contentProperty'],this[s(0x195)][s(0x1c6)][s(0x1b5)],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this[s(0x1d7)]['innerHtmlProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};let c;this[m(0x1c1)]['onfocus']=d=>{const t=m;c=this['_instanceServiceContainer']['selectionService'][t(0x1a2)];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this[u(0x1c1)]['value'];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService'][u(0x1b3)],this[u(0x195)][u(0x1c6)]['selectedElements'],this[u(0x1d7)]);};}set[i(0x1cd)](c){this['propertyGrid']['serviceContainer']=c;}set['instanceServiceContainer'](c){const v=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[v(0x1bd)](),d?(this[v(0x1c0)]=d['selectionService'][v(0x1c5)]['on'](async f=>{const w=v;this[w(0x1d0)]['instanceServiceContainer']=d,await sleep(0x14),await this[w(0x1b8)](d);}),this[v(0x1b8)](d)):(this[v(0x1bf)]['style'][v(0x1d5)]='none',this['_id']['value']='',this[v(0x191)][v(0x1a7)]='',this['_id'][v(0x1c8)]=!![],this[v(0x191)][v(0x1c8)]=!![],this['_idRect'][v(0x1ca)]['background']='',this[v(0x192)]['style'][v(0x1d1)]='',this[v(0x1af)][v(0x1ca)][v(0x1d1)]='',this[v(0x1b0)]['value']=':host'),this['propertyGrid'][v(0x1b4)]=d;}async['_refreshHeaderForCurrentSelection'](c){const x=i;if(!c?.[x(0x1c6)]?.['primarySelection']||c['selectionService']['primarySelection']?.[x(0x1c2)]){this[x(0x1bf)]['style']['display']='none',this['_id'][x(0x1a7)]='',this[x(0x191)][x(0x1a7)]='',this[x(0x1c1)]['disabled']=!![],this[x(0x191)]['disabled']=!![],this['_idRect'][x(0x1ca)]['background']='',this[x(0x192)][x(0x1ca)]['background']='',this[x(0x1af)]['style']['background']='',this['_type'][x(0x1a7)]=x(0x1c4),this[x(0x1b0)][x(0x19e)]=this['_type']['value'];return;}this[x(0x1c1)][x(0x1c8)]=![],this['_content']['disabled']=![];const d=await this[x(0x1cd)]?.['getLastServiceWhereAsync'](x(0x1d6),e=>e[x(0x199)](c[x(0x1c6)]['primarySelection']));d?this['_configButton'][x(0x1ca)][x(0x1d5)]=x(0x1cc):this['_configButton']['style']['display']='none';c['selectionService']['primarySelection']?.[x(0x1ba)]==NodeType[x(0x19a)]?this['_type'][x(0x1a7)]=c['selectionService']['primarySelection']?.[x(0x18f)]??'':this[x(0x1b0)][x(0x1a7)]=c[x(0x1c6)][x(0x1a2)]?.['node']?.['nodeName']??'';this['_type'][x(0x19e)]=this['_type']['value'],this['_id']['value']=c[x(0x1c6)][x(0x1a2)]?.['id']??'';if(c['selectionService']['primarySelection']?.[x(0x1b2)]?.[x(0x1ba)]!=NodeType['Element'])this[x(0x191)]['value']=c[x(0x1c6)]['primarySelection']?.[x(0x1d8)]??'';else{if(c[x(0x1c6)]['primarySelection']?.[x(0x1b2)]?.[x(0x1a8)]?.['length']<=0x0)this['_content'][x(0x1a7)]=c[x(0x1c6)]['primarySelection']?.[x(0x1d8)]??'';else this['_content'][x(0x1a7)]='';}this[x(0x191)][x(0x19e)]=this['_content']['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[x(0x1d7)]['idProperty'],c[x(0x1c6)]['selectedElements'],this[x(0x1d7)]),PropertyGridPropertyList[x(0x19f)](this[x(0x192)],this['_propertiesService']['contentProperty'],c['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this[x(0x1d7)][x(0x1a5)],c['selectionService'][x(0x1b5)],this['_propertiesService']);}[i(0x1c7)](c,d,e){const y=i;let f;if(this['propertyGrid']['propertyContextMenuProvider'])f=this[y(0x1d0)][y(0x1ab)](d,e);if(!f)f=e[y(0x1ad)]['getContextMenu'](d,e);ContextMenu['show'](f,c);}}customElements[i(0x1b1)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);