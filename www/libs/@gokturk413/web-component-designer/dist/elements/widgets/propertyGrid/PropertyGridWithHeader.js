const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf4))/0x1*(-parseInt(h(0xfd))/0x2)+parseInt(h(0xf9))/0x3+-parseInt(h(0x124))/0x4*(-parseInt(h(0xf7))/0x5)+parseInt(h(0x11f))/0x6*(parseInt(h(0xf2))/0x7)+-parseInt(h(0x118))/0x8+parseInt(h(0xec))/0x9*(-parseInt(h(0x11a))/0xa)+parseInt(h(0x100))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x61d6e));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xdf;const e=a();let f=e[c];return f;}import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0xee)]=['appearance'];static ['properties']={'appearance':String};get[i(0x10b)](){const j=i;return this[j(0x123)]('appearance')===j(0x106)?j(0x106):j(0xe4);}set['appearance'](c){const k=i;this['setAttribute'](k(0x10b),c);}[i(0x10e)](){const l=i;if(this['propertyGrid'])this[l(0x107)][l(0x10b)]=this[l(0x10b)];}static ['style']=css`
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
    `;static [i(0x116)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];[i(0xe3)];[i(0x11d)];[i(0xe6)];['_selectionChangedHandler'];['_instanceServiceContainer'];[i(0xfb)];['_contentRect'];[i(0xf0)];[i(0xfc)];[i(0xe5)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this[m(0xe3)]=this[m(0x108)]('type'),this['_id']=this[m(0x108)]('id'),this['_content']=this['_getDomElement']('content'),this[m(0x107)]=this[m(0x108)]('pg'),this['propertyGrid'][m(0x10b)]=this['appearance'],this['_idRect']=this['_getDomElement'](m(0x10f)),this['_contentRect']=this['_getDomElement']('contentRect'),this['_innerRect']=this['_getDomElement'](m(0x11e)),this[m(0xe5)]=this['_getDomElement']('config'),this['_configButton']['onclick']=async()=>{const n=m,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f[n(0x120)](this[n(0xe1)][n(0xf8)][n(0x103)])),e=await d[n(0xfa)](this['_instanceServiceContainer']['selectionService'][n(0x103)]);this[n(0x10d)][n(0x125)][n(0xeb)]['emit']({'designItem':this['_instanceServiceContainer'][n(0xf8)]['primarySelection'],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect'][m(0x110)]=d=>{const o=m;d[o(0xff)]();if(!this[o(0xe1)][o(0xf8)]['primarySelection']?.['isRootItem'])this[o(0xe9)](d,this[o(0xe1)]['selectionService']['selectedElements'],this['_propertiesService']['idProperty']);},this['_contentRect']['oncontextmenu']=d=>{const p=m;d['preventDefault']();if(!this[p(0xe1)]['selectionService'][p(0x103)]?.['isRootItem'])this[p(0xe9)](d,this['_instanceServiceContainer'][p(0xf8)][p(0x102)],this[p(0xfc)][p(0xf3)]);},this[m(0xf0)][m(0x110)]=d=>{const q=m;d['preventDefault']();if(!this[q(0xe1)][q(0xf8)]['primarySelection']?.[q(0xdf)])this[q(0xe9)](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']['innerHtmlProperty']);},this[m(0x11d)][m(0x115)]=d=>{const r=m;if(d['key']=='Enter')this[r(0xe1)]['selectionService'][r(0x103)]['id']=this['_id']['value'];else d[r(0xe7)]==r(0xfe)&&(this[r(0x11d)]['value']=this[r(0xe1)]['selectionService'][r(0x103)]?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0xfb)],this['_propertiesService'][r(0x119)],this[r(0xe1)][r(0xf8)][r(0x102)],this[r(0xfc)]);},this[m(0xe6)]['onkeydown']=d=>{const s=m;if(d['key']==s(0xea))this[s(0xe1)]['selectionService'][s(0x103)]['content']=this['_content'][s(0x117)],this['_content']['title']=this[s(0xe6)]['value'];else d['key']==s(0xfe)&&(this[s(0xe6)]['value']=this[s(0xe1)]['selectionService']['primarySelection']?.['element']?.['textContent']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[s(0x111)](this[s(0x122)],this['_propertiesService']['contentProperty'],this[s(0xe1)][s(0xf8)]['selectedElements'],this[s(0xfc)]),PropertyGridPropertyList[s(0x111)](this['_innerRect'],this[s(0xfc)][s(0xed)],this[s(0xe1)]['selectionService']['selectedElements'],this[s(0xfc)]);};let c;this['_id']['onfocus']=d=>{const t=m;c=this[t(0xe1)][t(0xf8)][t(0x103)];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this['_id'][u(0x117)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0xfb)],this[u(0xfc)]['idProperty'],this[u(0xe1)]['selectionService'][u(0x102)],this[u(0xfc)]);};}set['serviceContainer'](c){const v=i;this[v(0x107)]['serviceContainer']=c;}set['instanceServiceContainer'](c){const w=i,d=c;this['_instanceServiceContainer']=d,this[w(0x10a)]?.[w(0xf5)](),d?(this[w(0x10a)]=d[w(0xf8)][w(0x105)]['on'](async f=>{const x=w;this[x(0x107)][x(0x104)]=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[w(0xe5)][w(0x114)][w(0xf1)]='none',this['_id']['value']='',this['_content']['value']='',this['_id'][w(0xe2)]=!![],this[w(0xe6)]['disabled']=!![],this[w(0xfb)][w(0x114)]['background']='',this[w(0x122)][w(0x114)]['background']='',this['_innerRect']['style']['background']='',this['_type'][w(0x117)]=w(0xe8)),this[w(0x107)][w(0x104)]=d;}async['_refreshHeaderForCurrentSelection'](c){const y=i;if(!c?.['selectionService']?.[y(0x103)]||c[y(0xf8)][y(0x103)]?.[y(0xdf)]){this['_configButton']['style'][y(0xf1)]='none',this['_id'][y(0x117)]='',this['_content']['value']='',this[y(0x11d)]['disabled']=!![],this['_content'][y(0xe2)]=!![],this['_idRect'][y(0x114)][y(0x113)]='',this['_contentRect'][y(0x114)]['background']='',this['_innerRect']['style'][y(0x113)]='',this[y(0xe3)]['value']=y(0xe8),this[y(0xe3)]['title']=this['_type']['value'];return;}this[y(0x11d)]['disabled']=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.[y(0x112)]('configUiService',e=>e[y(0x120)](c[y(0xf8)][y(0x103)]));d?this[y(0xe5)][y(0x114)][y(0xf1)]='block':this[y(0xe5)][y(0x114)]['display']=y(0x101);c['selectionService'][y(0x103)]?.[y(0x10c)]==NodeType['Element']?this['_type']['value']=c[y(0xf8)]['primarySelection']?.['name']??'':this[y(0xe3)][y(0x117)]=c[y(0xf8)][y(0x103)]?.[y(0xef)]?.[y(0xf6)]??'';this['_type']['title']=this['_type']['value'],this['_id'][y(0x117)]=c[y(0xf8)][y(0x103)]?.['id']??'';if(c['selectionService']['primarySelection']?.['element']?.[y(0x10c)]!=NodeType[y(0xe0)])this[y(0xe6)][y(0x117)]=c['selectionService'][y(0x103)]?.['content']??'';else{if(c['selectionService'][y(0x103)]?.[y(0x11b)]?.['children']?.[y(0x109)]<=0x0)this[y(0xe6)]['value']=c[y(0xf8)]['primarySelection']?.['content']??'';else this[y(0xe6)]['value']='';}this['_content']['title']=this[y(0xe6)]['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0xfb)],this[y(0xfc)]['idProperty'],c['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this[y(0xfc)]['contentProperty'],c[y(0xf8)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[y(0x111)](this['_innerRect'],this[y(0xfc)]['innerHtmlProperty'],c['selectionService'][y(0x102)],this['_propertiesService']);}['_openContextMenu'](c,d,e){const z=i;let f;if(this[z(0x107)][z(0x121)])f=this['propertyGrid']['propertyContextMenuProvider'](d,e);if(!f)f=e['service'][z(0x11c)](d,e);ContextMenu['show'](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);function a(){const A=['length','_selectionChangedHandler','appearance','nodeType','serviceContainer','attributeChangedCallback','idRect','oncontextmenu','refreshIsSetElementAndEditorForDesignItems','getLastServiceWhereAsync','background','style','onkeydown','template','value','4580392GUnbeh','idProperty','4445790thqkJB','element','getContextMenu','_id','innerRect','60KumhfY','hasConfigUi','propertyContextMenuProvider','_contentRect','getAttribute','1923548BZLetl','globalContext','isRootItem','Element','_instanceServiceContainer','disabled','_type','classic','_configButton','_content','key',':host','_openContextMenu','Enter','showConfigClicked','9jvrMca','innerHtmlProperty','observedAttributes','node','_innerRect','display','327740jHjeif','contentProperty','64357ztxxTz','dispose','nodeName','5sfsKlb','selectionService','1228536fIyrQK','getConfigUi','_idRect','_propertiesService','22QmHWwv','Escape','preventDefault','8439266ovBORk','none','selectedElements','primarySelection','instanceServiceContainer','onSelectionChanged','modern','propertyGrid','_getDomElement'];a=function(){return A;};return a();}