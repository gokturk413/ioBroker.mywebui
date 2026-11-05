const k=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xe3))/0x1+parseInt(h(0xe2))/0x2+-parseInt(h(0x105))/0x3+parseInt(h(0xf2))/0x4*(-parseInt(h(0xf5))/0x5)+parseInt(h(0xd4))/0x6*(parseInt(h(0xf0))/0x7)+-parseInt(h(0xe8))/0x8*(-parseInt(h(0xe1))/0x9)+parseInt(h(0xd9))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa97df));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}function a(){const z=['_contentRect',':host','service','style','refreshIsSetElementAndEditorForDesignItems','3882582qorZkj','modern','preventDefault','onSelectionChanged','selectionService','_id','idProperty','contentProperty','emit','element','onblur','type','children','node-projects-web-component-designer-property-grid-with-header','value','none','isRootItem','showConfigClicked','display','instanceServiceContainer','key','_innerRect','getLastServiceWhereAsync','_instanceServiceContainer','length','propertyGrid','12108JDBaEC','propertyContextMenuProvider','appearance','innerHtmlProperty','stopPropagation','27016870nQqEos','getAttribute','onkeydown','Element','_refreshHeaderForCurrentSelection','oncontextmenu','config','_content','1521wFRNxo','1071862bsVEOm','1206123StOTWI','_getDomElement','template','name','_openContextMenu','22696yjsytd','content','classic','_selectionChangedHandler','selectedElements','hasConfigUi','_configButton','_idRect','2786OCTyQH','nodeType','1956uihyzz','_type','globalContext','13555NErdrW','primarySelection','_propertiesService','title','textContent','block','attributeChangedCallback','disabled','serviceContainer','Enter','show'];a=function(){return z;};return a();}import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static ['properties']={'appearance':String};get['appearance'](){const i=b;return this[i(0xda)]('appearance')==='modern'?i(0x106):i(0xea);}set['appearance'](c){const j=b;this['setAttribute'](j(0xd6),c);}[k(0xfb)](){const l=k;if(this['propertyGrid'])this['propertyGrid']['appearance']=this[l(0xd6)];}static [k(0x103)]=css`
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
    `;static [k(0xe5)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[k(0xd3)];[k(0xf3)];['_id'];[k(0xe0)];[k(0xeb)];['_instanceServiceContainer'];[k(0xef)];[k(0x100)];['_innerRect'];[k(0xf7)];[k(0xee)];constructor(){const m=k;super(),this['_restoreCachedInititalValues'](),this['_type']=this[m(0xe4)](m(0x110)),this[m(0x10a)]=this['_getDomElement']('id'),this['_content']=this[m(0xe4)](m(0xe9)),this[m(0xd3)]=this['_getDomElement']('pg'),this[m(0xd3)]['appearance']=this[m(0xd6)],this[m(0xef)]=this[m(0xe4)]('idRect'),this[m(0x100)]=this['_getDomElement']('contentRect'),this['_innerRect']=this[m(0xe4)]('innerRect'),this[m(0xee)]=this[m(0xe4)](m(0xdf)),this[m(0xee)]['onclick']=async()=>{const n=m,d=await this[n(0xfd)]?.[n(0x11b)]('configUiService',async f=>await f[n(0xed)](this['_instanceServiceContainer'][n(0x109)][n(0xf6)])),e=await d['getConfigUi'](this['_instanceServiceContainer'][n(0x109)][n(0xf6)]);this['serviceContainer'][n(0xf4)][n(0x116)][n(0x10d)]({'designItem':this['_instanceServiceContainer']['selectionService'][n(0xf6)],'configUi':e});},this[m(0xf7)]=new ContentAndIdPropertiesService(),this[m(0xef)][m(0xde)]=d=>{const o=m;d[o(0x107)]();if(!this[o(0xd1)]['selectionService']['primarySelection']?.[o(0x115)])this['_openContextMenu'](d,this[o(0xd1)]['selectionService'][o(0xec)],this['_propertiesService']['idProperty']);},this[m(0x100)]['oncontextmenu']=d=>{const p=m;d[p(0x107)]();if(!this[p(0xd1)][p(0x109)][p(0xf6)]?.[p(0x115)])this[p(0xe7)](d,this[p(0xd1)]['selectionService'][p(0xec)],this['_propertiesService'][p(0x10c)]);},this[m(0x11a)]['oncontextmenu']=d=>{const q=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][q(0xf6)]?.[q(0x115)])this[q(0xe7)](d,this[q(0xd1)][q(0x109)][q(0xec)],this[q(0xf7)][q(0xd7)]);},this['_id']['onkeydown']=d=>{const r=m;if(d[r(0x119)]==r(0xfe))this['_instanceServiceContainer']['selectionService'][r(0xf6)]['id']=this[r(0x10a)][r(0x113)];else d['key']=='Escape'&&(this[r(0x10a)][r(0x113)]=this[r(0xd1)][r(0x109)]['primarySelection']?.['id']??'',d['preventDefault'](),d[r(0xd8)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0xef)],this[r(0xf7)][r(0x10b)],this[r(0xd1)][r(0x109)]['selectedElements'],this[r(0xf7)]);},this[m(0xe0)][m(0xdb)]=d=>{const s=m;if(d[s(0x119)]==s(0xfe))this[s(0xd1)][s(0x109)]['primarySelection']['content']=this[s(0xe0)][s(0x113)],this['_content'][s(0xf8)]=this[s(0xe0)][s(0x113)];else d[s(0x119)]=='Escape'&&(this[s(0xe0)]['value']=this[s(0xd1)]['selectionService']['primarySelection']?.[s(0x10e)]?.[s(0xf9)]??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService']['contentProperty'],this[s(0xd1)][s(0x109)]['selectedElements'],this[s(0xf7)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[s(0x11a)],this['_propertiesService']['innerHtmlProperty'],this[s(0xd1)][s(0x109)]['selectedElements'],this['_propertiesService']);};let c;this[m(0x10a)]['onfocus']=d=>{const t=m;c=this['_instanceServiceContainer'][t(0x109)]['primarySelection'];},this[m(0x10a)][m(0x10f)]=d=>{const u=m;if(c)c['id']=this['_id'][u(0x113)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0xef)],this[u(0xf7)][u(0x10b)],this['_instanceServiceContainer']['selectionService'][u(0xec)],this[u(0xf7)]);};}set['serviceContainer'](c){this['propertyGrid']['serviceContainer']=c;}set[k(0x118)](c){const v=k,d=c;this[v(0xd1)]=d,this[v(0xeb)]?.['dispose'](),d?(this[v(0xeb)]=d['selectionService'][v(0x108)]['on'](async f=>{const w=v;this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this[w(0xdd)](d);}),this[v(0xdd)](d)):(this[v(0xee)][v(0x103)][v(0x117)]='none',this[v(0x10a)]['value']='',this[v(0xe0)]['value']='',this['_id']['disabled']=!![],this[v(0xe0)][v(0xfc)]=!![],this[v(0xef)][v(0x103)]['background']='',this['_contentRect'][v(0x103)]['background']='',this[v(0x11a)][v(0x103)]['background']='',this[v(0xf3)][v(0x113)]=v(0x101)),this['propertyGrid']['instanceServiceContainer']=d;}async[k(0xdd)](c){const x=k;if(!c?.['selectionService']?.[x(0xf6)]||c[x(0x109)][x(0xf6)]?.['isRootItem']){this['_configButton']['style'][x(0x117)]='none',this['_id']['value']='',this['_content'][x(0x113)]='',this[x(0x10a)]['disabled']=!![],this[x(0xe0)]['disabled']=!![],this['_idRect'][x(0x103)]['background']='',this['_contentRect'][x(0x103)]['background']='',this[x(0x11a)][x(0x103)]['background']='',this['_type']['value']=x(0x101),this['_type'][x(0xf8)]=this[x(0xf3)]['value'];return;}this['_id'][x(0xfc)]=![],this[x(0xe0)][x(0xfc)]=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync']('configUiService',e=>e['hasConfigUi'](c[x(0x109)]['primarySelection']));d?this[x(0xee)][x(0x103)]['display']=x(0xfa):this[x(0xee)]['style'][x(0x117)]=x(0x114);c[x(0x109)][x(0xf6)]?.[x(0xf1)]==NodeType['Element']?this[x(0xf3)]['value']=c[x(0x109)][x(0xf6)]?.[x(0xe6)]??'':this['_type']['value']=c['selectionService'][x(0xf6)]?.['node']?.['nodeName']??'';this['_type']['title']=this[x(0xf3)]['value'],this['_id'][x(0x113)]=c[x(0x109)]['primarySelection']?.['id']??'';if(c[x(0x109)][x(0xf6)]?.[x(0x10e)]?.['nodeType']!=NodeType[x(0xdc)])this[x(0xe0)][x(0x113)]=c['selectionService'][x(0xf6)]?.['content']??'';else{if(c[x(0x109)][x(0xf6)]?.['element']?.[x(0x111)]?.[x(0xd2)]<=0x0)this[x(0xe0)][x(0x113)]=c['selectionService'][x(0xf6)]?.[x(0xe9)]??'';else this['_content'][x(0x113)]='';}this[x(0xe0)][x(0xf8)]=this['_content'][x(0x113)],PropertyGridPropertyList[x(0x104)](this[x(0xef)],this['_propertiesService'][x(0x10b)],c[x(0x109)][x(0xec)],this[x(0xf7)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService']['contentProperty'],c[x(0x109)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[x(0x104)](this['_innerRect'],this['_propertiesService'][x(0xd7)],c['selectionService'][x(0xec)],this['_propertiesService']);}['_openContextMenu'](c,d,e){const y=k;let f;if(this[y(0xd3)]['propertyContextMenuProvider'])f=this[y(0xd3)][y(0xd5)](d,e);if(!f)f=e[y(0x102)]['getContextMenu'](d,e);ContextMenu[y(0xff)](f,c);}}customElements['define'](k(0x112),PropertyGridWithHeader);