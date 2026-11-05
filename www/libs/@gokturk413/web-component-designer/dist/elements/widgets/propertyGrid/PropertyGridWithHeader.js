const k=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x194))/0x1+parseInt(h(0x185))/0x2*(parseInt(h(0x186))/0x3)+parseInt(h(0x180))/0x4*(parseInt(h(0x175))/0x5)+parseInt(h(0x168))/0x6*(parseInt(h(0x193))/0x7)+parseInt(h(0x1a1))/0x8*(-parseInt(h(0x19f))/0x9)+-parseInt(h(0x19c))/0xa*(-parseInt(h(0x19e))/0xb)+-parseInt(h(0x17b))/0xc*(parseInt(h(0x17d))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1e3e2));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function b(c,d){c=c-0x164;const e=a();let f=e[c];return f;}import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static ['properties']={'appearance':String};get['appearance'](){return this['getAttribute']('appearance')==='modern'?'modern':'classic';}set['appearance'](c){const i=b;this['setAttribute'](i(0x19d),c);}['attributeChangedCallback'](){const j=b;if(this['propertyGrid'])this['propertyGrid']['appearance']=this[j(0x19d)];}static ['style']=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[k(0x191)];['_type'];['_id'];[k(0x18f)];[k(0x198)];['_instanceServiceContainer'];['_idRect'];[k(0x16f)];[k(0x176)];[k(0x166)];[k(0x17a)];constructor(){const l=k;super(),this['_restoreCachedInititalValues'](),this['_type']=this[l(0x164)](l(0x18b)),this['_id']=this['_getDomElement']('id'),this['_content']=this['_getDomElement']('content'),this['propertyGrid']=this['_getDomElement']('pg'),this[l(0x191)]['appearance']=this['appearance'],this['_idRect']=this[l(0x164)]('idRect'),this['_contentRect']=this['_getDomElement']('contentRect'),this['_innerRect']=this['_getDomElement']('innerRect'),this[l(0x17a)]=this[l(0x164)](l(0x169)),this[l(0x17a)][l(0x188)]=async()=>{const m=l,d=await this[m(0x1a5)]?.['getLastServiceWhereAsync'](m(0x181),async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][m(0x199)][m(0x165)])),e=await d['getConfigUi'](this['_instanceServiceContainer']['selectionService']['primarySelection']);this[m(0x1a5)]['globalContext']['showConfigClicked']['emit']({'designItem':this['_instanceServiceContainer']['selectionService'][m(0x165)],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect'][l(0x16b)]=d=>{const n=l;d[n(0x187)]();if(!this['_instanceServiceContainer'][n(0x199)]['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer'][n(0x199)]['selectedElements'],this['_propertiesService'][n(0x19a)]);},this[l(0x16f)][l(0x16b)]=d=>{const o=l;d[o(0x187)]();if(!this[o(0x182)][o(0x199)][o(0x165)]?.[o(0x172)])this[o(0x1a6)](d,this[o(0x182)][o(0x199)][o(0x1a0)],this['_propertiesService'][o(0x17f)]);},this[l(0x176)][l(0x16b)]=d=>{const p=l;d[p(0x187)]();if(!this[p(0x182)][p(0x199)]['primarySelection']?.[p(0x172)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService'][p(0x1a0)],this['_propertiesService']['innerHtmlProperty']);},this[l(0x192)][l(0x19b)]=d=>{const q=l;if(d['key']=='Enter')this[q(0x182)][q(0x199)][q(0x165)]['id']=this[q(0x192)][q(0x18e)];else d[q(0x16c)]=='Escape'&&(this['_id'][q(0x18e)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['id']??'',d['preventDefault'](),d[q(0x17c)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[q(0x183)],this['_propertiesService'][q(0x19a)],this[q(0x182)][q(0x199)]['selectedElements'],this['_propertiesService']);},this[l(0x18f)]['onkeydown']=d=>{const r=l;if(d['key']=='Enter')this[r(0x182)]['selectionService'][r(0x165)][r(0x174)]=this['_content'][r(0x18e)],this[r(0x18f)][r(0x171)]=this[r(0x18f)]['value'];else d[r(0x16c)]==r(0x195)&&(this['_content'][r(0x18e)]=this['_instanceServiceContainer'][r(0x199)][r(0x165)]?.['element']?.[r(0x167)]??'',d[r(0x187)](),d[r(0x17c)]());PropertyGridPropertyList[r(0x179)](this['_contentRect'],this['_propertiesService']['contentProperty'],this[r(0x182)][r(0x199)][r(0x1a0)],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService'][r(0x197)],this[r(0x182)]['selectionService'][r(0x1a0)],this[r(0x166)]);};let c;this[l(0x192)]['onfocus']=d=>{const s=l;c=this[s(0x182)]['selectionService']['primarySelection'];},this[l(0x192)][l(0x16d)]=d=>{const t=l;if(c)c['id']=this['_id'][t(0x18e)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[t(0x183)],this[t(0x166)]['idProperty'],this['_instanceServiceContainer'][t(0x199)]['selectedElements'],this[t(0x166)]);};}set['serviceContainer'](c){const u=k;this[u(0x191)][u(0x1a5)]=c;}set[k(0x196)](c){const v=k,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[v(0x17e)](),d?(this[v(0x198)]=d['selectionService']['onSelectionChanged']['on'](async f=>{this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[v(0x17a)][v(0x178)][v(0x190)]='none',this[v(0x192)][v(0x18e)]='',this['_content']['value']='',this[v(0x192)][v(0x1a2)]=!![],this['_content'][v(0x1a2)]=!![],this['_idRect']['style'][v(0x184)]='',this['_contentRect'][v(0x178)]['background']='',this[v(0x176)]['style']['background']='',this[v(0x18a)][v(0x18e)]=':host'),this[v(0x191)]['instanceServiceContainer']=d;}async['_refreshHeaderForCurrentSelection'](c){const w=k;if(!c?.['selectionService']?.[w(0x165)]||c[w(0x199)]['primarySelection']?.['isRootItem']){this[w(0x17a)][w(0x178)]['display']='none',this['_id']['value']='',this[w(0x18f)][w(0x18e)]='',this[w(0x192)]['disabled']=!![],this['_content']['disabled']=!![],this['_idRect'][w(0x178)][w(0x184)]='',this[w(0x16f)][w(0x178)][w(0x184)]='',this['_innerRect']['style'][w(0x184)]='',this['_type']['value']=w(0x16a),this['_type']['title']=this['_type'][w(0x18e)];return;}this['_id'][w(0x1a2)]=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync'](w(0x181),e=>e['hasConfigUi'](c[w(0x199)][w(0x165)]));d?this['_configButton']['style']['display']=w(0x173):this[w(0x17a)]['style']['display']='none';c[w(0x199)][w(0x165)]?.['nodeType']==NodeType['Element']?this['_type'][w(0x18e)]=c['selectionService']['primarySelection']?.['name']??'':this['_type']['value']=c['selectionService'][w(0x165)]?.[w(0x189)]?.[w(0x170)]??'';this[w(0x18a)][w(0x171)]=this[w(0x18a)][w(0x18e)],this['_id']['value']=c[w(0x199)]['primarySelection']?.['id']??'';if(c[w(0x199)][w(0x165)]?.[w(0x16e)]?.['nodeType']!=NodeType[w(0x1a4)])this[w(0x18f)]['value']=c['selectionService']['primarySelection']?.[w(0x174)]??'';else{if(c[w(0x199)][w(0x165)]?.[w(0x16e)]?.['children']?.['length']<=0x0)this[w(0x18f)]['value']=c['selectionService']['primarySelection']?.[w(0x174)]??'';else this[w(0x18f)]['value']='';}this[w(0x18f)]['title']=this['_content'][w(0x18e)],PropertyGridPropertyList[w(0x179)](this[w(0x183)],this[w(0x166)]['idProperty'],c['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[w(0x16f)],this['_propertiesService'][w(0x17f)],c[w(0x199)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[w(0x176)],this[w(0x166)][w(0x197)],c['selectionService']['selectedElements'],this['_propertiesService']);}[k(0x1a6)](c,d,e){const x=k;let f;if(this[x(0x191)][x(0x177)])f=this['propertyGrid'][x(0x177)](d,e);if(!f)f=e[x(0x18d)][x(0x18c)](d,e);ContextMenu['show'](f,c);}}function a(){const y=['nodeName','title','isRootItem','block','content','2345IvXYht','_innerRect','propertyContextMenuProvider','style','refreshIsSetElementAndEditorForDesignItems','_configButton','36pSoXKv','stopPropagation','637884vXrvMj','dispose','contentProperty','1556iuiZGA','configUiService','_instanceServiceContainer','_idRect','background','108602jdbZjO','12eHzycb','preventDefault','onclick','node','_type','type','getContextMenu','service','value','_content','display','propertyGrid','_id','2037rXkppT','44044QbYXQB','Escape','instanceServiceContainer','innerHtmlProperty','_selectionChangedHandler','selectionService','idProperty','onkeydown','170mbCLme','appearance','17039FSBGEr','81bovRpb','selectedElements','99832ZrNxbK','disabled','define','Element','serviceContainer','_openContextMenu','_getDomElement','primarySelection','_propertiesService','textContent','30UgZKvf','config',':host','oncontextmenu','key','onblur','element','_contentRect'];a=function(){return y;};return a();}customElements[k(0x1a3)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);