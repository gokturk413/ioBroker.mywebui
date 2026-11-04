const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xff))/0x1+parseInt(h(0xf9))/0x2*(-parseInt(h(0xfa))/0x3)+parseInt(h(0x126))/0x4*(parseInt(h(0x109))/0x5)+parseInt(h(0x115))/0x6+parseInt(h(0x10d))/0x7+-parseInt(h(0x118))/0x8*(parseInt(h(0x11b))/0x9)+-parseInt(h(0x10b))/0xa*(-parseInt(h(0x128))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6dd9));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const y=['getLastServiceWhereAsync','_instanceServiceContainer','getContextMenu','1619809COutCk','textContent','appearance','_propertiesService','refreshIsSetElementAndEditorForDesignItems','configUiService','contentProperty','contentRect','_configButton','style','20XFjYai','_contentRect','32498610MDGdMt','Element','1952923vzacbp','_innerRect','getAttribute','globalContext','background','oncontextmenu','stopPropagation','children','8792106WepnKC','_openContextMenu','idProperty','11550424vDwnaJ','serviceContainer','define','9DTIxHr','instanceServiceContainer','block','innerHtmlProperty','nodeType',':host','onclick','properties','_content','propertyContextMenuProvider','hasConfigUi','352796onkhPw','_id','11jzqmEq','isRootItem','selectionService','node-projects-web-component-designer-property-grid-with-header','_getDomElement','selectedElements','preventDefault','value','attributeChangedCallback','_refreshHeaderForCurrentSelection','_type','propertyGrid','disabled','_idRect','title','content','Escape','display','_selectionChangedHandler','element','key','8mwFtdR','1101624EAjEic','primarySelection'];a=function(){return y;};return a();}import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';function b(c,d){c=c-0xec;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x101)];static [i(0x122)]={'appearance':String};get['appearance'](){const j=i;return this[j(0x10f)]('appearance')==='modern'?'modern':'classic';}set[i(0x101)](c){this['setAttribute']('appearance',c);}[i(0xec)](){const k=i;if(this[k(0xef)])this['propertyGrid'][k(0x101)]=this['appearance'];}static [i(0x108)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];[i(0x127)];[i(0x123)];['_selectionChangedHandler'];['_instanceServiceContainer'];['_idRect'];['_contentRect'];['_innerRect'];[i(0x102)];[i(0x107)];constructor(){const l=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this['_getDomElement']('type'),this[l(0x127)]=this['_getDomElement']('id'),this['_content']=this[l(0x12c)](l(0xf3)),this[l(0xef)]=this[l(0x12c)]('pg'),this[l(0xef)][l(0x101)]=this['appearance'],this['_idRect']=this['_getDomElement']('idRect'),this['_contentRect']=this[l(0x12c)](l(0x106)),this['_innerRect']=this['_getDomElement']('innerRect'),this['_configButton']=this['_getDomElement']('config'),this['_configButton'][l(0x121)]=async()=>{const m=l,d=await this[m(0x119)]?.[m(0xfc)]('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][m(0x12a)][m(0xfb)])),e=await d['getConfigUi'](this['_instanceServiceContainer'][m(0x12a)]['primarySelection']);this['serviceContainer'][m(0x110)]['showConfigClicked']['emit']({'designItem':this['_instanceServiceContainer']['selectionService']['primarySelection'],'configUi':e});},this[l(0x102)]=new ContentAndIdPropertiesService(),this['_idRect'][l(0x112)]=d=>{const n=l;d[n(0x12e)]();if(!this['_instanceServiceContainer'][n(0x12a)][n(0xfb)]?.['isRootItem'])this[n(0x116)](d,this['_instanceServiceContainer']['selectionService'][n(0x12d)],this[n(0x102)]['idProperty']);},this[l(0x10a)][l(0x112)]=d=>{const o=l;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][o(0xfb)]?.['isRootItem'])this['_openContextMenu'](d,this[o(0xfd)]['selectionService'][o(0x12d)],this[o(0x102)][o(0x105)]);},this['_innerRect'][l(0x112)]=d=>{const p=l;d[p(0x12e)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[p(0x129)])this['_openContextMenu'](d,this[p(0xfd)][p(0x12a)][p(0x12d)],this[p(0x102)]['innerHtmlProperty']);},this[l(0x127)]['onkeydown']=d=>{const q=l;if(d['key']=='Enter')this['_instanceServiceContainer'][q(0x12a)]['primarySelection']['id']=this[q(0x127)][q(0x12f)];else d[q(0xf8)]=='Escape'&&(this['_id'][q(0x12f)]=this['_instanceServiceContainer'][q(0x12a)]['primarySelection']?.['id']??'',d[q(0x12e)](),d[q(0x113)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this[q(0x102)][q(0x117)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);},this[l(0x123)]['onkeydown']=d=>{const r=l;if(d['key']=='Enter')this[r(0xfd)]['selectionService']['primarySelection']['content']=this[r(0x123)][r(0x12f)],this[r(0x123)]['title']=this[r(0x123)]['value'];else d['key']==r(0xf4)&&(this['_content']['value']=this[r(0xfd)]['selectionService'][r(0xfb)]?.['element']?.[r(0x100)]??'',d[r(0x12e)](),d[r(0x113)]());PropertyGridPropertyList[r(0x103)](this[r(0x10a)],this[r(0x102)][r(0x105)],this[r(0xfd)]['selectionService']['selectedElements'],this[r(0x102)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService'][r(0x11e)],this[r(0xfd)][r(0x12a)][r(0x12d)],this['_propertiesService']);};let c;this['_id']['onfocus']=d=>{const s=l;c=this[s(0xfd)]['selectionService']['primarySelection'];},this['_id']['onblur']=d=>{const t=l;if(c)c['id']=this[t(0x127)][t(0x12f)];c=null,PropertyGridPropertyList[t(0x103)](this['_idRect'],this[t(0x102)][t(0x117)],this[t(0xfd)]['selectionService'][t(0x12d)],this['_propertiesService']);};}set[i(0x119)](c){this['propertyGrid']['serviceContainer']=c;}set[i(0x11c)](c){const u=i,d=c;this[u(0xfd)]=d,this[u(0xf6)]?.['dispose'](),d?(this[u(0xf6)]=d['selectionService']['onSelectionChanged']['on'](async f=>{const v=u;this['propertyGrid'][v(0x11c)]=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this[u(0xed)](d)):(this['_configButton']['style']['display']='none',this[u(0x127)][u(0x12f)]='',this[u(0x123)][u(0x12f)]='',this['_id'][u(0xf0)]=!![],this[u(0x123)][u(0xf0)]=!![],this['_idRect']['style']['background']='',this[u(0x10a)][u(0x108)]['background']='',this['_innerRect'][u(0x108)]['background']='',this[u(0xee)]['value']=':host'),this[u(0xef)]['instanceServiceContainer']=d;}async['_refreshHeaderForCurrentSelection'](c){const w=i;if(!c?.['selectionService']?.[w(0xfb)]||c[w(0x12a)][w(0xfb)]?.['isRootItem']){this[w(0x107)][w(0x108)][w(0xf5)]='none',this[w(0x127)][w(0x12f)]='',this[w(0x123)][w(0x12f)]='',this['_id'][w(0xf0)]=!![],this[w(0x123)]['disabled']=!![],this[w(0xf1)][w(0x108)][w(0x111)]='',this[w(0x10a)][w(0x108)][w(0x111)]='',this[w(0x10e)]['style'][w(0x111)]='',this['_type'][w(0x12f)]=w(0x120),this['_type'][w(0xf2)]=this[w(0xee)][w(0x12f)];return;}this['_id'][w(0xf0)]=![],this['_content'][w(0xf0)]=![];const d=await this[w(0x119)]?.[w(0xfc)](w(0x104),e=>e[w(0x125)](c['selectionService'][w(0xfb)]));d?this['_configButton'][w(0x108)][w(0xf5)]=w(0x11d):this['_configButton'][w(0x108)][w(0xf5)]='none';c['selectionService'][w(0xfb)]?.[w(0x11f)]==NodeType[w(0x10c)]?this['_type']['value']=c['selectionService'][w(0xfb)]?.['name']??'':this[w(0xee)]['value']=c['selectionService']['primarySelection']?.['node']?.['nodeName']??'';this['_type']['title']=this[w(0xee)]['value'],this['_id'][w(0x12f)]=c['selectionService'][w(0xfb)]?.['id']??'';if(c[w(0x12a)]['primarySelection']?.[w(0xf7)]?.['nodeType']!=NodeType['Element'])this['_content']['value']=c['selectionService']['primarySelection']?.['content']??'';else{if(c[w(0x12a)][w(0xfb)]?.['element']?.[w(0x114)]?.['length']<=0x0)this['_content']['value']=c[w(0x12a)][w(0xfb)]?.[w(0xf3)]??'';else this[w(0x123)]['value']='';}this['_content']['title']=this['_content']['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService']['idProperty'],c['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService']['contentProperty'],c[w(0x12a)][w(0x12d)],this['_propertiesService']),PropertyGridPropertyList[w(0x103)](this['_innerRect'],this[w(0x102)][w(0x11e)],c['selectionService'][w(0x12d)],this['_propertiesService']);}['_openContextMenu'](c,d,e){const x=i;let f;if(this[x(0xef)][x(0x124)])f=this[x(0xef)]['propertyContextMenuProvider'](d,e);if(!f)f=e['service'][x(0xfe)](d,e);ContextMenu['show'](f,c);}}customElements[i(0x11a)](i(0x12b),PropertyGridWithHeader);