const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd6))/0x1+parseInt(h(0xba))/0x2*(-parseInt(h(0xa8))/0x3)+parseInt(h(0xb1))/0x4+-parseInt(h(0xc8))/0x5+parseInt(h(0xa1))/0x6+-parseInt(h(0xaa))/0x7+parseInt(h(0xca))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6021));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';function b(c,d){c=c-0x91;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0xbd)]=[i(0xc2)];static ['properties']={'appearance':String};get[i(0xc2)](){const j=i;return this[j(0xc9)]('appearance')==='modern'?'modern':'classic';}set['appearance'](c){this['setAttribute']('appearance',c);}[i(0x93)](){const k=i;if(this[k(0xd5)])this['propertyGrid'][k(0xc2)]=this['appearance'];}static ['style']=css`
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
    `;static [i(0x98)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0xd5)];['_type'];['_id'];['_content'];['_selectionChangedHandler'];['_instanceServiceContainer'];[i(0xcf)];[i(0x94)];[i(0x92)];['_propertiesService'];['_configButton'];constructor(){const l=i;super(),this['_restoreCachedInititalValues'](),this['_type']=this['_getDomElement']('type'),this[l(0xab)]=this[l(0x9c)]('id'),this[l(0xa6)]=this[l(0x9c)](l(0xb0)),this['propertyGrid']=this[l(0x9c)]('pg'),this['propertyGrid'][l(0xc2)]=this['appearance'],this[l(0xcf)]=this['_getDomElement']('idRect'),this['_contentRect']=this[l(0x9c)](l(0xbf)),this['_innerRect']=this['_getDomElement'](l(0x9f)),this['_configButton']=this[l(0x9c)](l(0xc4)),this['_configButton'][l(0xcb)]=async()=>{const m=l,d=await this[m(0xa0)]?.['getLastServiceWhereAsync'](m(0x97),async f=>await f[m(0xd1)](this[m(0xb4)][m(0xa2)][m(0xc6)])),e=await d[m(0xb3)](this['_instanceServiceContainer']['selectionService']['primarySelection']);this['serviceContainer']['globalContext']['showConfigClicked'][m(0xce)]({'designItem':this['_instanceServiceContainer'][m(0xa2)]['primarySelection'],'configUi':e});},this[l(0xa7)]=new ContentAndIdPropertiesService(),this[l(0xcf)][l(0x9a)]=d=>{const n=l;d['preventDefault']();if(!this['_instanceServiceContainer'][n(0xa2)][n(0xc6)]?.['isRootItem'])this['_openContextMenu'](d,this[n(0xb4)][n(0xa2)]['selectedElements'],this['_propertiesService'][n(0xc1)]);},this[l(0x94)]['oncontextmenu']=d=>{const o=l;d[o(0xb5)]();if(!this[o(0xb4)][o(0xa2)][o(0xc6)]?.[o(0xbc)])this[o(0xad)](d,this[o(0xb4)]['selectionService'][o(0xd0)],this['_propertiesService'][o(0xd2)]);},this[l(0x92)][l(0x9a)]=d=>{const p=l;d['preventDefault']();if(!this[p(0xb4)][p(0xa2)]['primarySelection']?.[p(0xbc)])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0xa2)]['selectedElements'],this[p(0xa7)]['innerHtmlProperty']);},this[l(0xab)]['onkeydown']=d=>{const q=l;if(d[q(0xa9)]=='Enter')this[q(0xb4)][q(0xa2)][q(0xc6)]['id']=this[q(0xab)]['value'];else d[q(0xa9)]=='Escape'&&(this[q(0xab)][q(0x9d)]=this['_instanceServiceContainer']['selectionService'][q(0xc6)]?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[q(0xb2)](this['_idRect'],this['_propertiesService'][q(0xc1)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[q(0xa7)]);},this[l(0xa6)]['onkeydown']=d=>{const r=l;if(d[r(0xa9)]==r(0xa4))this['_instanceServiceContainer'][r(0xa2)]['primarySelection']['content']=this['_content'][r(0x9d)],this[r(0xa6)]['title']=this['_content'][r(0x9d)];else d[r(0xa9)]==r(0xb7)&&(this['_content'][r(0x9d)]=this['_instanceServiceContainer'][r(0xa2)]['primarySelection']?.['element']?.[r(0xd4)]??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this[r(0xa7)][r(0xd2)],this['_instanceServiceContainer'][r(0xa2)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0x92)],this['_propertiesService']['innerHtmlProperty'],this[r(0xb4)]['selectionService']['selectedElements'],this[r(0xa7)]);};let c;this[l(0xab)][l(0xaf)]=d=>{const s=l;c=this['_instanceServiceContainer'][s(0xa2)][s(0xc6)];},this[l(0xab)]['onblur']=d=>{const t=l;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList[t(0xb2)](this['_idRect'],this[t(0xa7)][t(0xc1)],this['_instanceServiceContainer']['selectionService'][t(0xd0)],this[t(0xa7)]);};}set['serviceContainer'](c){this['propertyGrid']['serviceContainer']=c;}set['instanceServiceContainer'](c){const u=i,d=c;this[u(0xb4)]=d,this['_selectionChangedHandler']?.[u(0xcd)](),d?(this[u(0xa5)]=d[u(0xa2)][u(0xbb)]['on'](async f=>{const v=u;this['propertyGrid'][v(0xd3)]=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this[u(0xc0)](d)):(this['_configButton']['style']['display']='none',this[u(0xab)]['value']='',this['_content']['value']='',this[u(0xab)][u(0xb9)]=!![],this[u(0xa6)][u(0xb9)]=!![],this['_idRect']['style'][u(0xbe)]='',this[u(0x94)]['style']['background']='',this['_innerRect'][u(0xae)]['background']='',this[u(0xc3)]['value']=u(0x91)),this[u(0xd5)][u(0xd3)]=d;}async[i(0xc0)](c){const w=i;if(!c?.[w(0xa2)]?.['primarySelection']||c[w(0xa2)][w(0xc6)]?.[w(0xbc)]){this['_configButton']['style']['display']=w(0x96),this[w(0xab)]['value']='',this['_content']['value']='',this['_id'][w(0xb9)]=!![],this[w(0xa6)][w(0xb9)]=!![],this[w(0xcf)]['style']['background']='',this['_contentRect'][w(0xae)][w(0xbe)]='',this[w(0x92)][w(0xae)][w(0xbe)]='',this[w(0xc3)]['value']=':host',this[w(0xc3)][w(0xb6)]=this['_type'][w(0x9d)];return;}this[w(0xab)][w(0xb9)]=![],this[w(0xa6)][w(0xb9)]=![];const d=await this[w(0xa0)]?.['getLastServiceWhereAsync']('configUiService',e=>e[w(0xd1)](c['selectionService']['primarySelection']));d?this['_configButton']['style']['display']=w(0xc5):this['_configButton']['style']['display']=w(0x96);c[w(0xa2)]['primarySelection']?.[w(0x99)]==NodeType['Element']?this[w(0xc3)]['value']=c[w(0xa2)]['primarySelection']?.['name']??'':this['_type'][w(0x9d)]=c[w(0xa2)]['primarySelection']?.[w(0xa3)]?.[w(0x9b)]??'';this[w(0xc3)][w(0xb6)]=this[w(0xc3)]['value'],this[w(0xab)][w(0x9d)]=c['selectionService'][w(0xc6)]?.['id']??'';if(c['selectionService']['primarySelection']?.[w(0xcc)]?.[w(0x99)]!=NodeType['Element'])this['_content']['value']=c[w(0xa2)]['primarySelection']?.[w(0xb0)]??'';else{if(c['selectionService'][w(0xc6)]?.[w(0xcc)]?.[w(0xc7)]?.[w(0x95)]<=0x0)this['_content'][w(0x9d)]=c['selectionService'][w(0xc6)]?.[w(0xb0)]??'';else this['_content'][w(0x9d)]='';}this['_content']['title']=this['_content'][w(0x9d)],PropertyGridPropertyList[w(0xb2)](this['_idRect'],this['_propertiesService']['idProperty'],c[w(0xa2)]['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this[w(0xa7)][w(0xd2)],c['selectionService']['selectedElements'],this[w(0xa7)]),PropertyGridPropertyList[w(0xb2)](this[w(0x92)],this[w(0xa7)]['innerHtmlProperty'],c['selectionService']['selectedElements'],this[w(0xa7)]);}['_openContextMenu'](c,d,e){const x=i;let f;if(this[x(0xd5)][x(0xb8)])f=this[x(0xd5)][x(0xb8)](d,e);if(!f)f=e[x(0x9e)]['getContextMenu'](d,e);ContextMenu[x(0xac)](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);function a(){const y=['3AChpUF','key','5205620UtfIcg','_id','show','_openContextMenu','style','onfocus','content','2633400GSHqYZ','refreshIsSetElementAndEditorForDesignItems','getConfigUi','_instanceServiceContainer','preventDefault','title','Escape','propertyContextMenuProvider','disabled','948902SHquMq','onSelectionChanged','isRootItem','observedAttributes','background','contentRect','_refreshHeaderForCurrentSelection','idProperty','appearance','_type','config','block','primarySelection','children','6463620GLMFgH','getAttribute','26028528hAvaIA','onclick','element','dispose','emit','_idRect','selectedElements','hasConfigUi','contentProperty','instanceServiceContainer','textContent','propertyGrid','823546yleoyu',':host','_innerRect','attributeChangedCallback','_contentRect','length','none','configUiService','template','nodeType','oncontextmenu','nodeName','_getDomElement','value','service','innerRect','serviceContainer','1401036rBRoHr','selectionService','node','Enter','_selectionChangedHandler','_content','_propertiesService'];a=function(){return y;};return a();}