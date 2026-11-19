const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1db))/0x1+parseInt(h(0x1b6))/0x2*(parseInt(h(0x1c1))/0x3)+parseInt(h(0x1d5))/0x4*(parseInt(h(0x1b0))/0x5)+-parseInt(h(0x1f1))/0x6+parseInt(h(0x1b5))/0x7*(parseInt(h(0x1e3))/0x8)+-parseInt(h(0x1f4))/0x9*(parseInt(h(0x1e7))/0xa)+parseInt(h(0x1de))/0xb*(-parseInt(h(0x1b1))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9e96f));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x1ad;const e=a();let f=e[c];return f;}export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x1ce)]=[i(0x1c0)];static ['properties']={'appearance':String};get[i(0x1c0)](){const j=i;return this['getAttribute'](j(0x1c0))===j(0x1ec)?j(0x1ec):j(0x1ef);}set[i(0x1c0)](c){const k=i;this[k(0x1f7)]('appearance',c);}[i(0x1bb)](){const l=i;if(this[l(0x1d4)])this['propertyGrid'][l(0x1c0)]=this[l(0x1c0)];}static [i(0x1d3)]=css`
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
    `;static [i(0x1c5)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];[i(0x1e2)];[i(0x1f3)];[i(0x1f9)];['_instanceServiceContainer'];['_idRect'];['_contentRect'];[i(0x1ee)];[i(0x1dd)];['_configButton'];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this[m(0x1c8)](m(0x1b2)),this[m(0x1e2)]=this['_getDomElement']('id'),this['_content']=this['_getDomElement'](m(0x1c9)),this['propertyGrid']=this[m(0x1c8)]('pg'),this['propertyGrid']['appearance']=this[m(0x1c0)],this['_idRect']=this[m(0x1c8)]('idRect'),this[m(0x1d9)]=this['_getDomElement'](m(0x1b8)),this['_innerRect']=this[m(0x1c8)](m(0x1b4)),this[m(0x1d8)]=this[m(0x1c8)]('config'),this[m(0x1d8)]['onclick']=async()=>{const n=m,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][n(0x1d0)]['primarySelection'])),e=await d[n(0x1ed)](this['_instanceServiceContainer'][n(0x1d0)]['primarySelection']);this['serviceContainer']['globalContext'][n(0x1e1)][n(0x1f8)]({'designItem':this[n(0x1e4)]['selectionService']['primarySelection'],'configUi':e});},this[m(0x1dd)]=new ContentAndIdPropertiesService(),this['_idRect'][m(0x1d6)]=d=>{const o=m;d[o(0x1c7)]();if(!this[o(0x1e4)]['selectionService']['primarySelection']?.[o(0x1cf)])this[o(0x1bd)](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']['idProperty']);},this[m(0x1d9)]['oncontextmenu']=d=>{const p=m;d['preventDefault']();if(!this[p(0x1e4)][p(0x1d0)][p(0x1bc)]?.[p(0x1cf)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']['contentProperty']);},this[m(0x1ee)][m(0x1d6)]=d=>{const q=m;d['preventDefault']();if(!this[q(0x1e4)][q(0x1d0)]['primarySelection']?.['isRootItem'])this[q(0x1bd)](d,this['_instanceServiceContainer']['selectionService'][q(0x1b7)],this[q(0x1dd)][q(0x1c6)]);},this[m(0x1e2)][m(0x1f6)]=d=>{const r=m;if(d[r(0x1e0)]=='Enter')this['_instanceServiceContainer'][r(0x1d0)][r(0x1bc)]['id']=this[r(0x1e2)][r(0x1e6)];else d['key']=='Escape'&&(this[r(0x1e2)]['value']=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['id']??'',d[r(0x1c7)](),d[r(0x1d7)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0x1e9)],this['_propertiesService'][r(0x1ea)],this['_instanceServiceContainer']['selectionService'][r(0x1b7)],this['_propertiesService']);},this[m(0x1f3)][m(0x1f6)]=d=>{const s=m;if(d[s(0x1e0)]=='Enter')this['_instanceServiceContainer'][s(0x1d0)][s(0x1bc)][s(0x1c9)]=this['_content']['value'],this[s(0x1f3)][s(0x1ba)]=this[s(0x1f3)][s(0x1e6)];else d['key']==s(0x1ae)&&(this[s(0x1f3)][s(0x1e6)]=this['_instanceServiceContainer'][s(0x1d0)][s(0x1bc)]?.[s(0x1be)]?.['textContent']??'',d['preventDefault'](),d[s(0x1d7)]());PropertyGridPropertyList[s(0x1d2)](this[s(0x1d9)],this['_propertiesService'][s(0x1cd)],this[s(0x1e4)]['selectionService'][s(0x1b7)],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[s(0x1ee)],this[s(0x1dd)]['innerHtmlProperty'],this['_instanceServiceContainer'][s(0x1d0)]['selectedElements'],this[s(0x1dd)]);};let c;this[m(0x1e2)][m(0x1ad)]=d=>{const t=m;c=this[t(0x1e4)][t(0x1d0)]['primarySelection'];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this['_id'][u(0x1e6)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[u(0x1dd)]['idProperty'],this[u(0x1e4)]['selectionService'][u(0x1b7)],this['_propertiesService']);};}set['serviceContainer'](c){const v=i;this[v(0x1d4)][v(0x1c3)]=c;}set['instanceServiceContainer'](c){const w=i,d=c;this['_instanceServiceContainer']=d,this[w(0x1f9)]?.[w(0x1cc)](),d?(this['_selectionChangedHandler']=d[w(0x1d0)][w(0x1e8)]['on'](async f=>{const x=w;this[x(0x1d4)]['instanceServiceContainer']=d,await sleep(0x14),await this[x(0x1eb)](d);}),this[w(0x1eb)](d)):(this['_configButton']['style'][w(0x1af)]='none',this[w(0x1e2)]['value']='',this['_content'][w(0x1e6)]='',this['_id'][w(0x1bf)]=!![],this['_content'][w(0x1bf)]=!![],this['_idRect']['style'][w(0x1da)]='',this[w(0x1d9)]['style']['background']='',this['_innerRect'][w(0x1d3)]['background']='',this[w(0x1f5)]['value']=':host'),this[w(0x1d4)]['instanceServiceContainer']=d;}async[i(0x1eb)](c){const y=i;if(!c?.[y(0x1d0)]?.['primarySelection']||c['selectionService']['primarySelection']?.['isRootItem']){this[y(0x1d8)]['style'][y(0x1af)]='none',this['_id']['value']='',this[y(0x1f3)]['value']='',this[y(0x1e2)]['disabled']=!![],this[y(0x1f3)]['disabled']=!![],this[y(0x1e9)][y(0x1d3)]['background']='',this['_contentRect']['style'][y(0x1da)]='',this['_innerRect'][y(0x1d3)]['background']='',this['_type']['value']=y(0x1df),this[y(0x1f5)][y(0x1ba)]=this[y(0x1f5)]['value'];return;}this[y(0x1e2)]['disabled']=![],this[y(0x1f3)][y(0x1bf)]=![];const d=await this['serviceContainer']?.[y(0x1ca)]('configUiService',e=>e[y(0x1c4)](c[y(0x1d0)][y(0x1bc)]));d?this['_configButton'][y(0x1d3)][y(0x1af)]=y(0x1f0):this['_configButton']['style']['display']='none';c['selectionService'][y(0x1bc)]?.['nodeType']==NodeType[y(0x1b3)]?this[y(0x1f5)]['value']=c[y(0x1d0)][y(0x1bc)]?.[y(0x1d1)]??'':this[y(0x1f5)][y(0x1e6)]=c['selectionService']['primarySelection']?.['node']?.[y(0x1b9)]??'';this['_type']['title']=this[y(0x1f5)]['value'],this[y(0x1e2)]['value']=c[y(0x1d0)]['primarySelection']?.['id']??'';if(c['selectionService'][y(0x1bc)]?.[y(0x1be)]?.[y(0x1f2)]!=NodeType[y(0x1b3)])this['_content']['value']=c[y(0x1d0)][y(0x1bc)]?.['content']??'';else{if(c['selectionService'][y(0x1bc)]?.[y(0x1be)]?.['children']?.[y(0x1c2)]<=0x0)this['_content']['value']=c['selectionService'][y(0x1bc)]?.[y(0x1c9)]??'';else this[y(0x1f3)][y(0x1e6)]='';}this[y(0x1f3)][y(0x1ba)]=this[y(0x1f3)]['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0x1e9)],this['_propertiesService']['idProperty'],c['selectionService']['selectedElements'],this[y(0x1dd)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService'][y(0x1cd)],c[y(0x1d0)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0x1ee)],this[y(0x1dd)]['innerHtmlProperty'],c[y(0x1d0)]['selectedElements'],this[y(0x1dd)]);}['_openContextMenu'](c,d,e){const z=i;let f;if(this['propertyGrid'][z(0x1e5)])f=this[z(0x1d4)]['propertyContextMenuProvider'](d,e);if(!f)f=e[z(0x1dc)]['getContextMenu'](d,e);ContextMenu['show'](f,c);}}function a(){const A=['getLastServiceWhereAsync','define','dispose','contentProperty','observedAttributes','isRootItem','selectionService','name','refreshIsSetElementAndEditorForDesignItems','style','propertyGrid','287684xATSkR','oncontextmenu','stopPropagation','_configButton','_contentRect','background','1053532MMSIpl','service','_propertiesService','755249BpQYek',':host','key','showConfigClicked','_id','120BjGLDd','_instanceServiceContainer','propertyContextMenuProvider','value','2362230WDHkHy','onSelectionChanged','_idRect','idProperty','_refreshHeaderForCurrentSelection','modern','getConfigUi','_innerRect','classic','block','922950OPUjjF','nodeType','_content','36tvvUNG','_type','onkeydown','setAttribute','emit','_selectionChangedHandler','onfocus','Escape','display','55ScUkFG','72nYPxnv','type','Element','innerRect','53991gCJcJE','66632KrEYxZ','selectedElements','contentRect','nodeName','title','attributeChangedCallback','primarySelection','_openContextMenu','element','disabled','appearance','18ElONtA','length','serviceContainer','hasConfigUi','template','innerHtmlProperty','preventDefault','_getDomElement','content'];a=function(){return A;};return a();}customElements[i(0x1cb)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);