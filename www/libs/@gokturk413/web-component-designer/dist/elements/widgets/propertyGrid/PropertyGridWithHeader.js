const l=b;function b(c,d){c=c-0x7d;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x8c))/0x1+parseInt(h(0xa4))/0x2*(-parseInt(h(0x88))/0x3)+parseInt(h(0xc0))/0x4*(parseInt(h(0x92))/0x5)+-parseInt(h(0x8a))/0x6*(parseInt(h(0x9b))/0x7)+parseInt(h(0x97))/0x8*(parseInt(h(0xad))/0x9)+-parseInt(h(0x7e))/0xa+-parseInt(h(0xb9))/0xb*(-parseInt(h(0xb7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd1eb8));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function a(){const A=['name','globalContext','_id','show',':host','_idRect','isRootItem','_openContextMenu','_getDomElement','194238BTPMmz','getLastServiceWhereAsync','1168602aTGeoK','oncontextmenu','597565LaFIJv','content','element','block','key','disabled','865sCOWWl','selectedElements','preventDefault','serviceContainer','innerHtmlProperty','23824vqPfvc','_instanceServiceContainer','stopPropagation','appearance','7WXZVKW','propertyGrid','onSelectionChanged','service','title','refreshIsSetElementAndEditorForDesignItems','_content','onclick','_contentRect','22oojZsx','onfocus','Enter','style','onblur','define','_innerRect','hasConfigUi','primarySelection','3753OlusHw','contentRect','background','innerRect','value','_propertiesService','_configButton','_restoreCachedInititalValues','length','dispose','3743772plvKor','nodeName','11hoYjQd','onkeydown','_type','instanceServiceContainer','selectionService','_selectionChangedHandler','classic','19868aTUJaD','Element','idProperty','template','display','modern','487280pWLcPk'];a=function(){return A;};return a();}import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static ['properties']={'appearance':String};get['appearance'](){const i=b;return this['getAttribute']('appearance')===i(0x7d)?i(0x7d):i(0xbf);}set['appearance'](c){const j=b;this['setAttribute'](j(0x9a),c);}['attributeChangedCallback'](){const k=b;if(this[k(0x9c)])this[k(0x9c)][k(0x9a)]=this[k(0x9a)];}static [l(0xa7)]=css`
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
    `;static [l(0xc3)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];[l(0xbb)];['_id'];['_content'];[l(0xbe)];[l(0x98)];[l(0x84)];['_contentRect'];['_innerRect'];['_propertiesService'];[l(0xb3)];constructor(){const m=l;super(),this[m(0xb4)](),this['_type']=this[m(0x87)]('type'),this[m(0x81)]=this['_getDomElement']('id'),this[m(0xa1)]=this['_getDomElement']('content'),this[m(0x9c)]=this[m(0x87)]('pg'),this[m(0x9c)][m(0x9a)]=this['appearance'],this['_idRect']=this[m(0x87)]('idRect'),this['_contentRect']=this['_getDomElement'](m(0xae)),this['_innerRect']=this[m(0x87)](m(0xb0)),this['_configButton']=this[m(0x87)]('config'),this[m(0xb3)][m(0xa2)]=async()=>{const n=m,d=await this['serviceContainer']?.[n(0x89)]('configUiService',async f=>await f[n(0xab)](this['_instanceServiceContainer'][n(0xbd)]['primarySelection'])),e=await d['getConfigUi'](this[n(0x98)][n(0xbd)]['primarySelection']);this[n(0x95)][n(0x80)]['showConfigClicked']['emit']({'designItem':this[n(0x98)]['selectionService']['primarySelection'],'configUi':e});},this[m(0xb2)]=new ContentAndIdPropertiesService(),this['_idRect']['oncontextmenu']=d=>{const o=m;d[o(0x94)]();if(!this[o(0x98)][o(0xbd)]['primarySelection']?.[o(0x85)])this[o(0x86)](d,this['_instanceServiceContainer'][o(0xbd)]['selectedElements'],this['_propertiesService'][o(0xc2)]);},this['_contentRect'][m(0x8b)]=d=>{const p=m;d[p(0x94)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[p(0x85)])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0xbd)]['selectedElements'],this[p(0xb2)]['contentProperty']);},this[m(0xaa)][m(0x8b)]=d=>{const q=m;d['preventDefault']();if(!this[q(0x98)][q(0xbd)][q(0xac)]?.['isRootItem'])this['_openContextMenu'](d,this[q(0x98)]['selectionService'][q(0x93)],this['_propertiesService'][q(0x96)]);},this[m(0x81)]['onkeydown']=d=>{const r=m;if(d[r(0x90)]==r(0xa6))this[r(0x98)][r(0xbd)][r(0xac)]['id']=this['_id']['value'];else d['key']=='Escape'&&(this[r(0x81)]['value']=this['_instanceServiceContainer'][r(0xbd)][r(0xac)]?.['id']??'',d[r(0x94)](),d[r(0x99)]());PropertyGridPropertyList[r(0xa0)](this['_idRect'],this['_propertiesService'][r(0xc2)],this['_instanceServiceContainer']['selectionService'][r(0x93)],this['_propertiesService']);},this['_content'][m(0xba)]=d=>{const s=m;if(d['key']==s(0xa6))this[s(0x98)][s(0xbd)]['primarySelection']['content']=this['_content'][s(0xb1)],this[s(0xa1)]['title']=this['_content']['value'];else d['key']=='Escape'&&(this[s(0xa1)]['value']=this['_instanceServiceContainer'][s(0xbd)]['primarySelection']?.['element']?.['textContent']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService']['contentProperty'],this[s(0x98)][s(0xbd)]['selectedElements'],this[s(0xb2)]),PropertyGridPropertyList[s(0xa0)](this[s(0xaa)],this['_propertiesService']['innerHtmlProperty'],this[s(0x98)]['selectionService'][s(0x93)],this['_propertiesService']);};let c;this[m(0x81)][m(0xa5)]=d=>{const t=m;c=this['_instanceServiceContainer']['selectionService'][t(0xac)];},this[m(0x81)][m(0xa8)]=d=>{const u=m;if(c)c['id']=this[u(0x81)][u(0xb1)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x84)],this[u(0xb2)][u(0xc2)],this[u(0x98)][u(0xbd)]['selectedElements'],this['_propertiesService']);};}set['serviceContainer'](c){const v=l;this[v(0x9c)][v(0x95)]=c;}set['instanceServiceContainer'](c){const w=l,d=c;this['_instanceServiceContainer']=d,this[w(0xbe)]?.[w(0xb6)](),d?(this['_selectionChangedHandler']=d['selectionService'][w(0x9d)]['on'](async f=>{const x=w;this['propertyGrid'][x(0xbc)]=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton'][w(0xa7)]['display']='none',this[w(0x81)]['value']='',this['_content'][w(0xb1)]='',this[w(0x81)][w(0x91)]=!![],this['_content']['disabled']=!![],this[w(0x84)]['style']['background']='',this['_contentRect'][w(0xa7)]['background']='',this['_innerRect']['style'][w(0xaf)]='',this['_type'][w(0xb1)]=w(0x83)),this[w(0x9c)]['instanceServiceContainer']=d;}async['_refreshHeaderForCurrentSelection'](c){const y=l;if(!c?.[y(0xbd)]?.[y(0xac)]||c['selectionService'][y(0xac)]?.['isRootItem']){this['_configButton']['style'][y(0xc4)]='none',this['_id']['value']='',this['_content'][y(0xb1)]='',this['_id'][y(0x91)]=!![],this[y(0xa1)][y(0x91)]=!![],this['_idRect']['style']['background']='',this[y(0xa3)]['style']['background']='',this[y(0xaa)]['style']['background']='',this[y(0xbb)][y(0xb1)]=':host',this['_type']['title']=this[y(0xbb)]['value'];return;}this['_id']['disabled']=![],this[y(0xa1)]['disabled']=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',e=>e['hasConfigUi'](c[y(0xbd)][y(0xac)]));d?this[y(0xb3)][y(0xa7)]['display']=y(0x8f):this['_configButton']['style']['display']='none';c['selectionService']['primarySelection']?.['nodeType']==NodeType['Element']?this[y(0xbb)][y(0xb1)]=c['selectionService']['primarySelection']?.[y(0x7f)]??'':this[y(0xbb)][y(0xb1)]=c['selectionService']['primarySelection']?.['node']?.[y(0xb8)]??'';this['_type'][y(0x9f)]=this[y(0xbb)][y(0xb1)],this[y(0x81)][y(0xb1)]=c[y(0xbd)][y(0xac)]?.['id']??'';if(c['selectionService'][y(0xac)]?.['element']?.['nodeType']!=NodeType[y(0xc1)])this['_content']['value']=c['selectionService']['primarySelection']?.[y(0x8d)]??'';else{if(c[y(0xbd)]['primarySelection']?.[y(0x8e)]?.['children']?.[y(0xb5)]<=0x0)this[y(0xa1)]['value']=c['selectionService'][y(0xac)]?.[y(0x8d)]??'';else this['_content'][y(0xb1)]='';}this[y(0xa1)][y(0x9f)]=this['_content']['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0x84)],this['_propertiesService']['idProperty'],c['selectionService'][y(0x93)],this['_propertiesService']),PropertyGridPropertyList[y(0xa0)](this[y(0xa3)],this['_propertiesService']['contentProperty'],c[y(0xbd)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this[y(0xb2)]['innerHtmlProperty'],c['selectionService']['selectedElements'],this[y(0xb2)]);}['_openContextMenu'](c,d,e){const z=l;let f;if(this['propertyGrid']['propertyContextMenuProvider'])f=this[z(0x9c)]['propertyContextMenuProvider'](d,e);if(!f)f=e[z(0x9e)]['getContextMenu'](d,e);ContextMenu[z(0x82)](f,c);}}customElements[l(0xa9)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);