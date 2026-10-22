const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x98))/0x1*(-parseInt(h(0x8b))/0x2)+-parseInt(h(0xa1))/0x3*(-parseInt(h(0x74))/0x4)+parseInt(h(0x99))/0x5+parseInt(h(0x87))/0x6*(parseInt(h(0xac))/0x7)+-parseInt(h(0x93))/0x8*(-parseInt(h(0x77))/0x9)+parseInt(h(0x8c))/0xa+-parseInt(h(0x66))/0xb*(parseInt(h(0x80))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd82f8));function a(){const A=['serviceContainer','disabled','_idRect','Escape','oncontextmenu','1141FLjlWa','_propertiesService','10359151ybnMQb','stopPropagation','contentProperty','innerHtmlProperty','instanceServiceContainer','idProperty','Enter','key',':host','_contentRect','_id','node-projects-web-component-designer-property-grid-with-header','textContent','_innerRect','80xkYlmX','element','onclick','665739gUEYEC','primarySelection','hasConfigUi','isRootItem','properties','_refreshHeaderForCurrentSelection','_type','onkeydown','selectionService','12AFIhiV','dispose','value','_configButton','setAttribute','refreshIsSetElementAndEditorForDesignItems','propertyGrid','5898cYWOFP','selectedElements','_getDomElement','title','26nrTxJu','10326170MfNXJo','type','display','Element','style','content','propertyContextMenuProvider','48ZjExVx','background','_instanceServiceContainer','appearance','getConfigUi','114358FgFvMD','6257295BkUVvn','nodeType','_openContextMenu','onfocus','modern','configUiService','_selectionChangedHandler','preventDefault','63864ndfkSX','observedAttributes','_content','getContextMenu','length','none'];a=function(){return A;};return a();}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x66;const e=a();let f=e[c];return f;}import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0xa2)]=['appearance'];static [i(0x7b)]={'appearance':String};get['appearance'](){const j=i;return this['getAttribute'](j(0x96))===j(0x9d)?j(0x9d):'classic';}set['appearance'](c){const k=i;this[k(0x84)]('appearance',c);}['attributeChangedCallback'](){const l=i;if(this[l(0x86)])this['propertyGrid']['appearance']=this['appearance'];}static ['style']=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x86)];['_type'];['_id'];['_content'];['_selectionChangedHandler'];['_instanceServiceContainer'];['_idRect'];[i(0x6f)];['_innerRect'];[i(0xad)];[i(0x83)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this['_getDomElement'](m(0x8d)),this[m(0x70)]=this['_getDomElement']('id'),this['_content']=this[m(0x89)](m(0x91)),this['propertyGrid']=this[m(0x89)]('pg'),this[m(0x86)][m(0x96)]=this['appearance'],this[m(0xa9)]=this[m(0x89)]('idRect'),this[m(0x6f)]=this['_getDomElement']('contentRect'),this[m(0x73)]=this['_getDomElement']('innerRect'),this[m(0x83)]=this[m(0x89)]('config'),this[m(0x83)][m(0x76)]=async()=>{const n=m,d=await this[n(0xa7)]?.['getLastServiceWhereAsync']('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer']['selectionService']['primarySelection'])),e=await d[n(0x97)](this[n(0x95)][n(0x7f)]['primarySelection']);this['serviceContainer']['globalContext']['showConfigClicked']['emit']({'designItem':this[n(0x95)]['selectionService'][n(0x78)],'configUi':e});},this[m(0xad)]=new ContentAndIdPropertiesService(),this[m(0xa9)][m(0xab)]=d=>{const o=m;d[o(0xa0)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[o(0x7a)])this['_openContextMenu'](d,this['_instanceServiceContainer'][o(0x7f)][o(0x88)],this[o(0xad)][o(0x6b)]);},this[m(0x6f)][m(0xab)]=d=>{const p=m;d[p(0xa0)]();if(!this[p(0x95)][p(0x7f)][p(0x78)]?.['isRootItem'])this[p(0x9b)](d,this[p(0x95)][p(0x7f)]['selectedElements'],this['_propertiesService']['contentProperty']);},this['_innerRect']['oncontextmenu']=d=>{const q=m;d[q(0xa0)]();if(!this['_instanceServiceContainer']['selectionService'][q(0x78)]?.['isRootItem'])this['_openContextMenu'](d,this[q(0x95)][q(0x7f)]['selectedElements'],this['_propertiesService'][q(0x69)]);},this['_id'][m(0x7e)]=d=>{const r=m;if(d[r(0x6d)]==r(0x6c))this['_instanceServiceContainer']['selectionService'][r(0x78)]['id']=this['_id']['value'];else d['key']==r(0xaa)&&(this['_id'][r(0x82)]=this[r(0x95)][r(0x7f)]['primarySelection']?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x85)](this['_idRect'],this[r(0xad)][r(0x6b)],this['_instanceServiceContainer']['selectionService'][r(0x88)],this[r(0xad)]);},this['_content']['onkeydown']=d=>{const s=m;if(d['key']=='Enter')this['_instanceServiceContainer']['selectionService'][s(0x78)]['content']=this[s(0xa3)][s(0x82)],this['_content'][s(0x8a)]=this['_content'][s(0x82)];else d[s(0x6d)]=='Escape'&&(this['_content']['value']=this['_instanceServiceContainer']['selectionService']['primarySelection']?.[s(0x75)]?.[s(0x72)]??'',d[s(0xa0)](),d[s(0x67)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService'][s(0x68)],this['_instanceServiceContainer'][s(0x7f)]['selectedElements'],this[s(0xad)]),PropertyGridPropertyList[s(0x85)](this[s(0x73)],this['_propertiesService'][s(0x69)],this['_instanceServiceContainer']['selectionService'][s(0x88)],this['_propertiesService']);};let c;this[m(0x70)][m(0x9c)]=d=>{const t=m;c=this[t(0x95)]['selectionService'][t(0x78)];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this[u(0x70)][u(0x82)];c=null,PropertyGridPropertyList[u(0x85)](this[u(0xa9)],this[u(0xad)]['idProperty'],this['_instanceServiceContainer']['selectionService'][u(0x88)],this[u(0xad)]);};}set[i(0xa7)](c){const v=i;this[v(0x86)]['serviceContainer']=c;}set['instanceServiceContainer'](c){const w=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[w(0x81)](),d?(this[w(0x9f)]=d['selectionService']['onSelectionChanged']['on'](async f=>{const x=w;this[x(0x86)][x(0x6a)]=d,await sleep(0x14),await this[x(0x7c)](d);}),this[w(0x7c)](d)):(this['_configButton']['style']['display']=w(0xa6),this[w(0x70)]['value']='',this['_content'][w(0x82)]='',this[w(0x70)]['disabled']=!![],this['_content']['disabled']=!![],this[w(0xa9)]['style'][w(0x94)]='',this['_contentRect'][w(0x90)][w(0x94)]='',this['_innerRect'][w(0x90)]['background']='',this['_type'][w(0x82)]=w(0x6e)),this['propertyGrid']['instanceServiceContainer']=d;}async[i(0x7c)](c){const y=i;if(!c?.['selectionService']?.['primarySelection']||c[y(0x7f)][y(0x78)]?.['isRootItem']){this[y(0x83)]['style'][y(0x8e)]='none',this[y(0x70)][y(0x82)]='',this['_content'][y(0x82)]='',this['_id']['disabled']=!![],this['_content'][y(0xa8)]=!![],this['_idRect']['style'][y(0x94)]='',this[y(0x6f)][y(0x90)][y(0x94)]='',this[y(0x73)]['style'][y(0x94)]='',this['_type'][y(0x82)]=':host',this['_type'][y(0x8a)]=this[y(0x7d)][y(0x82)];return;}this['_id']['disabled']=![],this[y(0xa3)]['disabled']=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync'](y(0x9e),e=>e[y(0x79)](c[y(0x7f)]['primarySelection']));d?this[y(0x83)]['style'][y(0x8e)]='block':this[y(0x83)][y(0x90)][y(0x8e)]=y(0xa6);c['selectionService'][y(0x78)]?.[y(0x9a)]==NodeType[y(0x8f)]?this[y(0x7d)]['value']=c[y(0x7f)][y(0x78)]?.['name']??'':this['_type'][y(0x82)]=c[y(0x7f)]['primarySelection']?.['node']?.['nodeName']??'';this['_type']['title']=this[y(0x7d)]['value'],this['_id'][y(0x82)]=c['selectionService']['primarySelection']?.['id']??'';if(c['selectionService']['primarySelection']?.['element']?.[y(0x9a)]!=NodeType[y(0x8f)])this[y(0xa3)][y(0x82)]=c[y(0x7f)]['primarySelection']?.['content']??'';else{if(c['selectionService']['primarySelection']?.['element']?.['children']?.[y(0xa5)]<=0x0)this['_content'][y(0x82)]=c['selectionService']['primarySelection']?.[y(0x91)]??'';else this['_content'][y(0x82)]='';}this['_content']['title']=this['_content']['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0xa9)],this[y(0xad)][y(0x6b)],c[y(0x7f)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService']['contentProperty'],c['selectionService'][y(0x88)],this['_propertiesService']),PropertyGridPropertyList[y(0x85)](this[y(0x73)],this[y(0xad)]['innerHtmlProperty'],c[y(0x7f)][y(0x88)],this['_propertiesService']);}['_openContextMenu'](c,d,e){const z=i;let f;if(this[z(0x86)]['propertyContextMenuProvider'])f=this[z(0x86)][z(0x92)](d,e);if(!f)f=e['service'][z(0xa4)](d,e);ContextMenu['show'](f,c);}}customElements['define'](i(0x71),PropertyGridWithHeader);