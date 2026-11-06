function b(c,d){c=c-0x16a;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x183))/0x1+parseInt(h(0x177))/0x2+-parseInt(h(0x186))/0x3+parseInt(h(0x17a))/0x4*(-parseInt(h(0x191))/0x5)+parseInt(h(0x17e))/0x6+-parseInt(h(0x185))/0x7+-parseInt(h(0x17b))/0x8*(-parseInt(h(0x197))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcbc59));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function a(){const z=['_id','_idRect','preventDefault','idRect','display','_getDomElement','90268hKGjCk','node','none','4CvlHbe','1639696WPqVnu','instanceServiceContainer','_configButton','7281210zflHdm','node-projects-web-component-designer-property-grid-with-header','_type','textContent','contentProperty','445658tjYOqN','value','4838323JauXHL','600789vBTpXW','content','background','emit','serviceContainer','Element','appearance','contentRect','_selectionChangedHandler','disabled','refreshIsSetElementAndEditorForDesignItems','8089610nJVuuU','attributeChangedCallback','_propertiesService','primarySelection','_contentRect','_refreshHeaderForCurrentSelection','72aCLxCy','style','onkeydown','children','_content','selectionService','propertyGrid','_openContextMenu','element','innerHtmlProperty','setAttribute','_innerRect','_instanceServiceContainer','properties','stopPropagation','key','globalContext','showConfigClicked','getContextMenu','length','configUiService','block','oncontextmenu','config','type','Escape','idProperty','onclick','title','selectedElements','Enter','isRootItem','propertyContextMenuProvider',':host'];a=function(){return z;};return a();}import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static [i(0x1a4)]={'appearance':String};get[i(0x18c)](){const j=i;return this['getAttribute'](j(0x18c))==='modern'?'modern':'classic';}set[i(0x18c)](c){const k=i;this[k(0x1a1)](k(0x18c),c);}[i(0x192)](){const l=i;if(this['propertyGrid'])this[l(0x19d)]['appearance']=this['appearance'];}static [i(0x198)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x19d)];['_type'];['_id'];['_content'];[i(0x18e)];[i(0x1a3)];['_idRect'];[i(0x195)];['_innerRect'];['_propertiesService'];[i(0x17d)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this[m(0x180)]=this['_getDomElement'](m(0x1af)),this[m(0x171)]=this['_getDomElement']('id'),this[m(0x19b)]=this['_getDomElement'](m(0x187)),this['propertyGrid']=this[m(0x176)]('pg'),this['propertyGrid']['appearance']=this[m(0x18c)],this[m(0x172)]=this['_getDomElement'](m(0x174)),this['_contentRect']=this[m(0x176)](m(0x18d)),this[m(0x1a2)]=this[m(0x176)]('innerRect'),this[m(0x17d)]=this[m(0x176)](m(0x1ae)),this['_configButton'][m(0x16a)]=async()=>{const n=m,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer']['selectionService']['primarySelection'])),e=await d['getConfigUi'](this['_instanceServiceContainer']['selectionService']['primarySelection']);this['serviceContainer'][n(0x1a7)][n(0x1a8)][n(0x189)]({'designItem':this[n(0x1a3)]['selectionService']['primarySelection'],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect'][m(0x1ad)]=d=>{const o=m;d['preventDefault']();if(!this['_instanceServiceContainer'][o(0x19c)][o(0x194)]?.['isRootItem'])this['_openContextMenu'](d,this[o(0x1a3)][o(0x19c)][o(0x16c)],this['_propertiesService']['idProperty']);},this[m(0x195)]['oncontextmenu']=d=>{const p=m;d['preventDefault']();if(!this['_instanceServiceContainer'][p(0x19c)][p(0x194)]?.[p(0x16e)])this['_openContextMenu'](d,this[p(0x1a3)][p(0x19c)][p(0x16c)],this['_propertiesService'][p(0x182)]);},this['_innerRect']['oncontextmenu']=d=>{const q=m;d['preventDefault']();if(!this[q(0x1a3)][q(0x19c)]['primarySelection']?.[q(0x16e)])this[q(0x19e)](d,this[q(0x1a3)][q(0x19c)][q(0x16c)],this[q(0x193)][q(0x1a0)]);},this['_id'][m(0x199)]=d=>{const r=m;if(d['key']==r(0x16d))this[r(0x1a3)][r(0x19c)]['primarySelection']['id']=this['_id'][r(0x184)];else d[r(0x1a6)]=='Escape'&&(this[r(0x171)][r(0x184)]=this[r(0x1a3)][r(0x19c)]['primarySelection']?.['id']??'',d['preventDefault'](),d[r(0x1a5)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService'][r(0x1b1)],this[r(0x1a3)]['selectionService']['selectedElements'],this['_propertiesService']);},this['_content'][m(0x199)]=d=>{const s=m;if(d['key']==s(0x16d))this[s(0x1a3)][s(0x19c)]['primarySelection'][s(0x187)]=this[s(0x19b)][s(0x184)],this['_content'][s(0x16b)]=this[s(0x19b)]['value'];else d['key']==s(0x1b0)&&(this[s(0x19b)][s(0x184)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['element']?.[s(0x181)]??'',d[s(0x173)](),d[s(0x1a5)]());PropertyGridPropertyList[s(0x190)](this[s(0x195)],this['_propertiesService'][s(0x182)],this[s(0x1a3)]['selectionService'][s(0x16c)],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService'][s(0x1a0)],this[s(0x1a3)][s(0x19c)]['selectedElements'],this['_propertiesService']);};let c;this[m(0x171)]['onfocus']=d=>{const t=m;c=this[t(0x1a3)]['selectionService'][t(0x194)];},this[m(0x171)]['onblur']=d=>{const u=m;if(c)c['id']=this[u(0x171)][u(0x184)];c=null,PropertyGridPropertyList[u(0x190)](this[u(0x172)],this['_propertiesService']['idProperty'],this[u(0x1a3)][u(0x19c)]['selectedElements'],this[u(0x193)]);};}set['serviceContainer'](c){this['propertyGrid']['serviceContainer']=c;}set[i(0x17c)](c){const v=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.['dispose'](),d?(this['_selectionChangedHandler']=d[v(0x19c)]['onSelectionChanged']['on'](async f=>{const w=v;this[w(0x19d)]['instanceServiceContainer']=d,await sleep(0x14),await this[w(0x196)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton']['style']['display']='none',this[v(0x171)]['value']='',this['_content']['value']='',this['_id']['disabled']=!![],this['_content'][v(0x18f)]=!![],this['_idRect']['style']['background']='',this['_contentRect'][v(0x198)][v(0x188)]='',this['_innerRect']['style']['background']='',this['_type'][v(0x184)]=v(0x170)),this['propertyGrid'][v(0x17c)]=d;}async[i(0x196)](c){const x=i;if(!c?.[x(0x19c)]?.['primarySelection']||c[x(0x19c)]['primarySelection']?.[x(0x16e)]){this[x(0x17d)][x(0x198)][x(0x175)]=x(0x179),this['_id']['value']='',this[x(0x19b)]['value']='',this[x(0x171)]['disabled']=!![],this[x(0x19b)][x(0x18f)]=!![],this[x(0x172)]['style'][x(0x188)]='',this['_contentRect']['style']['background']='',this[x(0x1a2)][x(0x198)]['background']='',this[x(0x180)][x(0x184)]=':host',this[x(0x180)][x(0x16b)]=this[x(0x180)][x(0x184)];return;}this['_id'][x(0x18f)]=![],this[x(0x19b)][x(0x18f)]=![];const d=await this[x(0x18a)]?.['getLastServiceWhereAsync'](x(0x1ab),e=>e['hasConfigUi'](c['selectionService']['primarySelection']));d?this['_configButton'][x(0x198)]['display']=x(0x1ac):this['_configButton'][x(0x198)][x(0x175)]=x(0x179);c[x(0x19c)][x(0x194)]?.['nodeType']==NodeType[x(0x18b)]?this[x(0x180)]['value']=c[x(0x19c)][x(0x194)]?.['name']??'':this[x(0x180)]['value']=c['selectionService'][x(0x194)]?.[x(0x178)]?.['nodeName']??'';this['_type'][x(0x16b)]=this[x(0x180)]['value'],this[x(0x171)]['value']=c['selectionService'][x(0x194)]?.['id']??'';if(c[x(0x19c)][x(0x194)]?.['element']?.['nodeType']!=NodeType[x(0x18b)])this['_content']['value']=c[x(0x19c)]['primarySelection']?.[x(0x187)]??'';else{if(c[x(0x19c)][x(0x194)]?.[x(0x19f)]?.[x(0x19a)]?.[x(0x1aa)]<=0x0)this['_content'][x(0x184)]=c[x(0x19c)]['primarySelection']?.['content']??'';else this['_content'][x(0x184)]='';}this['_content']['title']=this[x(0x19b)][x(0x184)],PropertyGridPropertyList[x(0x190)](this['_idRect'],this['_propertiesService'][x(0x1b1)],c[x(0x19c)]['selectedElements'],this[x(0x193)]),PropertyGridPropertyList[x(0x190)](this[x(0x195)],this['_propertiesService']['contentProperty'],c[x(0x19c)][x(0x16c)],this[x(0x193)]),PropertyGridPropertyList[x(0x190)](this[x(0x1a2)],this['_propertiesService'][x(0x1a0)],c['selectionService']['selectedElements'],this[x(0x193)]);}['_openContextMenu'](c,d,e){const y=i;let f;if(this['propertyGrid'][y(0x16f)])f=this['propertyGrid']['propertyContextMenuProvider'](d,e);if(!f)f=e['service'][y(0x1a9)](d,e);ContextMenu['show'](f,c);}}customElements['define'](i(0x17f),PropertyGridWithHeader);