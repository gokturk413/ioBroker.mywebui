const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xf9))/0x1+parseInt(h(0x11b))/0x2*(-parseInt(h(0xf3))/0x3)+parseInt(h(0x117))/0x4+parseInt(h(0x110))/0x5+parseInt(h(0x104))/0x6+-parseInt(h(0x10d))/0x7*(parseInt(h(0x122))/0x8)+parseInt(h(0x125))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8fd2));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function a(){const A=['modern','element','nodeType','primarySelection','configUiService','_innerRect','7046697BGVgPM','_id','Enter','7736905csCurC','Element','_propertiesService','observedAttributes','emit','show','globalContext','2223532DRcVAh','_contentRect','instanceServiceContainer','preventDefault','374fwqaNx','contentRect','disabled','classic','onSelectionChanged','_selectionChangedHandler','innerRect','8EqfQBb','display','properties','10590822GgQOQc','type','innerHtmlProperty','_refreshHeaderForCurrentSelection','title','hasConfigUi','appearance','propertyContextMenuProvider','setAttribute','_type','contentProperty','config','getContextMenu','nodeName','isRootItem','serviceContainer','key','selectionService','_instanceServiceContainer','idProperty','length','service','_idRect','refreshIsSetElementAndEditorForDesignItems','propertyGrid','onblur','background','_configButton','10572TTFBoB',':host','block','oncontextmenu','textContent','_openContextMenu','882541SYqAoL','_content','dispose','style','children','getLastServiceWhereAsync','content','none','stopPropagation','idRect','selectedElements','548568DpLSuH','_getDomElement','value'];a=function(){return A;};return a();}import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x113)]=[i(0x12b)];static [i(0x124)]={'appearance':String};get[i(0x12b)](){const j=i;return this['getAttribute']('appearance')===j(0x107)?j(0x107):j(0x11e);}set['appearance'](c){const k=i;this[k(0x12d)](k(0x12b),c);}['attributeChangedCallback'](){const l=i;if(this['propertyGrid'])this[l(0xef)]['appearance']=this[l(0x12b)];}static [i(0xfc)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];[i(0x10e)];[i(0xfa)];[i(0x120)];[i(0x137)];[i(0x13b)];[i(0x118)];['_innerRect'];[i(0x112)];['_configButton'];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this[m(0x12e)]=this['_getDomElement'](m(0x126)),this['_id']=this['_getDomElement']('id'),this[m(0xfa)]=this[m(0x105)]('content'),this[m(0xef)]=this['_getDomElement']('pg'),this[m(0xef)][m(0x12b)]=this['appearance'],this[m(0x13b)]=this[m(0x105)](m(0x102)),this['_contentRect']=this[m(0x105)](m(0x11c)),this[m(0x10c)]=this['_getDomElement'](m(0x121)),this['_configButton']=this['_getDomElement'](m(0x130)),this['_configButton']['onclick']=async()=>{const n=m,d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',async f=>await f[n(0x12a)](this[n(0x137)]['selectionService'][n(0x10a)])),e=await d['getConfigUi'](this['_instanceServiceContainer']['selectionService'][n(0x10a)]);this[n(0x134)][n(0x116)]['showConfigClicked'][n(0x114)]({'designItem':this[n(0x137)][n(0x136)]['primarySelection'],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect'][m(0xf6)]=d=>{const o=m;d[o(0x11a)]();if(!this[o(0x137)]['selectionService']['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this[o(0x137)][o(0x136)]['selectedElements'],this['_propertiesService'][o(0x138)]);},this[m(0x118)]['oncontextmenu']=d=>{const p=m;d['preventDefault']();if(!this[p(0x137)][p(0x136)]['primarySelection']?.['isRootItem'])this[p(0xf8)](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[p(0x112)]['contentProperty']);},this[m(0x10c)]['oncontextmenu']=d=>{const q=m;d[q(0x11a)]();if(!this[q(0x137)]['selectionService'][q(0x10a)]?.[q(0x133)])this[q(0xf8)](d,this[q(0x137)][q(0x136)]['selectedElements'],this[q(0x112)][q(0x127)]);},this[m(0x10e)]['onkeydown']=d=>{const r=m;if(d[r(0x135)]==r(0x10f))this[r(0x137)][r(0x136)][r(0x10a)]['id']=this['_id'][r(0x106)];else d[r(0x135)]=='Escape'&&(this[r(0x10e)][r(0x106)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['id']??'',d[r(0x11a)](),d[r(0x101)]());PropertyGridPropertyList[r(0xee)](this['_idRect'],this['_propertiesService'][r(0x138)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[r(0x112)]);},this[m(0xfa)]['onkeydown']=d=>{const s=m;if(d[s(0x135)]==s(0x10f))this[s(0x137)][s(0x136)][s(0x10a)]['content']=this['_content']['value'],this[s(0xfa)][s(0x129)]=this['_content'][s(0x106)];else d['key']=='Escape'&&(this['_content']['value']=this[s(0x137)]['selectionService'][s(0x10a)]?.['element']?.[s(0xf7)]??'',d[s(0x11a)](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[s(0x118)],this[s(0x112)][s(0x12f)],this[s(0x137)]['selectionService'][s(0x103)],this['_propertiesService']),PropertyGridPropertyList[s(0xee)](this['_innerRect'],this[s(0x112)][s(0x127)],this[s(0x137)][s(0x136)]['selectedElements'],this['_propertiesService']);};let c;this['_id']['onfocus']=d=>{const t=m;c=this[t(0x137)]['selectionService']['primarySelection'];},this[m(0x10e)][m(0xf0)]=d=>{const u=m;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList[u(0xee)](this[u(0x13b)],this[u(0x112)]['idProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};}set['serviceContainer'](c){const v=i;this[v(0xef)][v(0x134)]=c;}set[i(0x119)](c){const w=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[w(0xfb)](),d?(this['_selectionChangedHandler']=d[w(0x136)][w(0x11f)]['on'](async f=>{const x=w;this[x(0xef)][x(0x119)]=d,await sleep(0x14),await this[x(0x128)](d);}),this[w(0x128)](d)):(this[w(0xf2)]['style'][w(0x123)]='none',this['_id'][w(0x106)]='',this['_content'][w(0x106)]='',this['_id'][w(0x11d)]=!![],this['_content'][w(0x11d)]=!![],this['_idRect']['style']['background']='',this[w(0x118)]['style']['background']='',this[w(0x10c)][w(0xfc)][w(0xf1)]='',this['_type'][w(0x106)]=w(0xf4)),this[w(0xef)][w(0x119)]=d;}async[i(0x128)](c){const y=i;if(!c?.[y(0x136)]?.['primarySelection']||c[y(0x136)]['primarySelection']?.['isRootItem']){this[y(0xf2)]['style']['display']=y(0x100),this['_id'][y(0x106)]='',this['_content'][y(0x106)]='',this[y(0x10e)][y(0x11d)]=!![],this['_content']['disabled']=!![],this[y(0x13b)]['style']['background']='',this[y(0x118)][y(0xfc)][y(0xf1)]='',this[y(0x10c)]['style'][y(0xf1)]='',this['_type']['value']=':host',this['_type'][y(0x129)]=this[y(0x12e)][y(0x106)];return;}this['_id'][y(0x11d)]=![],this['_content'][y(0x11d)]=![];const d=await this[y(0x134)]?.[y(0xfe)](y(0x10b),e=>e['hasConfigUi'](c['selectionService'][y(0x10a)]));d?this['_configButton']['style']['display']=y(0xf5):this[y(0xf2)][y(0xfc)][y(0x123)]='none';c['selectionService']['primarySelection']?.['nodeType']==NodeType['Element']?this['_type'][y(0x106)]=c['selectionService']['primarySelection']?.['name']??'':this['_type']['value']=c['selectionService']['primarySelection']?.['node']?.[y(0x132)]??'';this['_type']['title']=this[y(0x12e)][y(0x106)],this['_id']['value']=c[y(0x136)]['primarySelection']?.['id']??'';if(c['selectionService']['primarySelection']?.[y(0x108)]?.[y(0x109)]!=NodeType[y(0x111)])this['_content']['value']=c[y(0x136)]['primarySelection']?.['content']??'';else{if(c['selectionService'][y(0x10a)]?.['element']?.[y(0xfd)]?.[y(0x139)]<=0x0)this['_content']['value']=c[y(0x136)][y(0x10a)]?.[y(0xff)]??'';else this['_content']['value']='';}this[y(0xfa)]['title']=this['_content']['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService']['idProperty'],c['selectionService'][y(0x103)],this[y(0x112)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this[y(0x112)][y(0x12f)],c[y(0x136)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[y(0xee)](this['_innerRect'],this[y(0x112)][y(0x127)],c[y(0x136)]['selectedElements'],this[y(0x112)]);}[i(0xf8)](c,d,e){const z=i;let f;if(this[z(0xef)][z(0x12c)])f=this[z(0xef)][z(0x12c)](d,e);if(!f)f=e[z(0x13a)][z(0x131)](d,e);ContextMenu[z(0x115)](f,c);}}function b(c,d){c=c-0xee;const e=a();let f=e[c];return f;}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);