const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x224))/0x1+-parseInt(h(0x21a))/0x2*(parseInt(h(0x208))/0x3)+-parseInt(h(0x21b))/0x4*(parseInt(h(0x1fa))/0x5)+parseInt(h(0x20c))/0x6*(parseInt(h(0x1eb))/0x7)+parseInt(h(0x203))/0x8*(parseInt(h(0x20d))/0x9)+-parseInt(h(0x1e0))/0xa*(parseInt(h(0x1fd))/0xb)+parseInt(h(0x214))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcee22));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';function b(c,d){c=c-0x1e0;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0x1e4)];static ['properties']={'appearance':String};get['appearance'](){const j=i;return this['getAttribute'](j(0x1e4))==='modern'?j(0x222):j(0x1ed);}set[i(0x1e4)](c){const k=i;this[k(0x201)]('appearance',c);}['attributeChangedCallback'](){const l=i;if(this['propertyGrid'])this[l(0x1f2)]['appearance']=this['appearance'];}static [i(0x202)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x1f2)];['_type'];['_id'];[i(0x219)];['_selectionChangedHandler'];['_instanceServiceContainer'];['_idRect'];[i(0x1ec)];[i(0x1e7)];[i(0x220)];[i(0x1ef)];constructor(){const m=i;super(),this[m(0x207)](),this[m(0x217)]=this[m(0x1fe)](m(0x1ee)),this['_id']=this['_getDomElement']('id'),this['_content']=this[m(0x1fe)](m(0x1e8)),this[m(0x1f2)]=this[m(0x1fe)]('pg'),this[m(0x1f2)][m(0x1e4)]=this['appearance'],this[m(0x1e9)]=this['_getDomElement'](m(0x213)),this['_contentRect']=this[m(0x1fe)](m(0x1f1)),this[m(0x1e7)]=this['_getDomElement'](m(0x218)),this[m(0x1ef)]=this[m(0x1fe)](m(0x1e2)),this[m(0x1ef)][m(0x21e)]=async()=>{const n=m,d=await this[n(0x20f)]?.[n(0x21d)]('configUiService',async f=>await f[n(0x21c)](this['_instanceServiceContainer'][n(0x1f8)][n(0x226)])),e=await d['getConfigUi'](this['_instanceServiceContainer'][n(0x1f8)][n(0x226)]);this[n(0x20f)]['globalContext']['showConfigClicked'][n(0x21f)]({'designItem':this[n(0x209)][n(0x1f8)][n(0x226)],'configUi':e});},this[m(0x220)]=new ContentAndIdPropertiesService(),this[m(0x1e9)][m(0x1fb)]=d=>{const o=m;d[o(0x206)]();if(!this['_instanceServiceContainer']['selectionService'][o(0x226)]?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer'][o(0x1f8)]['selectedElements'],this['_propertiesService']['idProperty']);},this[m(0x1ec)]['oncontextmenu']=d=>{const p=m;d[p(0x206)]();if(!this['_instanceServiceContainer'][p(0x1f8)]['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this[p(0x209)]['selectionService']['selectedElements'],this[p(0x220)]['contentProperty']);},this['_innerRect']['oncontextmenu']=d=>{const q=m;d[q(0x206)]();if(!this[q(0x209)]['selectionService']['primarySelection']?.[q(0x223)])this['_openContextMenu'](d,this[q(0x209)][q(0x1f8)][q(0x1f7)],this['_propertiesService']['innerHtmlProperty']);},this['_id'][m(0x1f6)]=d=>{const r=m;if(d[r(0x1e1)]==r(0x1f9))this[r(0x209)][r(0x1f8)]['primarySelection']['id']=this['_id'][r(0x216)];else d['key']=='Escape'&&(this['_id'][r(0x216)]=this[r(0x209)][r(0x1f8)]['primarySelection']?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x204)](this[r(0x1e9)],this[r(0x220)]['idProperty'],this[r(0x209)][r(0x1f8)][r(0x1f7)],this['_propertiesService']);},this['_content']['onkeydown']=d=>{const s=m;if(d[s(0x1e1)]=='Enter')this['_instanceServiceContainer'][s(0x1f8)]['primarySelection'][s(0x1e8)]=this['_content']['value'],this[s(0x219)]['title']=this['_content'][s(0x216)];else d[s(0x1e1)]=='Escape'&&(this[s(0x219)]['value']=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['element']?.[s(0x1e5)]??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService'][s(0x1f4)],this[s(0x209)]['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[s(0x204)](this[s(0x1e7)],this[s(0x220)][s(0x20b)],this[s(0x209)]['selectionService'][s(0x1f7)],this[s(0x220)]);};let c;this[m(0x1ea)]['onfocus']=d=>{const t=m;c=this[t(0x209)]['selectionService'][t(0x226)];},this['_id'][m(0x227)]=d=>{const u=m;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x1e9)],this[u(0x220)]['idProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};}set['serviceContainer'](c){const v=i;this['propertyGrid'][v(0x20f)]=c;}set['instanceServiceContainer'](c){const w=i,d=c;this[w(0x209)]=d,this['_selectionChangedHandler']?.[w(0x1f0)](),d?(this[w(0x212)]=d['selectionService']['onSelectionChanged']['on'](async f=>{const x=w;this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this[x(0x20a)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton']['style'][w(0x205)]='none',this[w(0x1ea)][w(0x216)]='',this['_content'][w(0x216)]='',this[w(0x1ea)]['disabled']=!![],this[w(0x219)][w(0x210)]=!![],this['_idRect']['style'][w(0x20e)]='',this['_contentRect'][w(0x202)]['background']='',this[w(0x1e7)][w(0x202)]['background']='',this[w(0x217)][w(0x216)]=':host'),this['propertyGrid'][w(0x1e3)]=d;}async['_refreshHeaderForCurrentSelection'](c){const y=i;if(!c?.['selectionService']?.[y(0x226)]||c['selectionService']['primarySelection']?.[y(0x223)]){this[y(0x1ef)]['style'][y(0x205)]='none',this[y(0x1ea)]['value']='',this['_content'][y(0x216)]='',this[y(0x1ea)][y(0x210)]=!![],this['_content'][y(0x210)]=!![],this[y(0x1e9)]['style'][y(0x20e)]='',this['_contentRect'][y(0x202)]['background']='',this['_innerRect']['style']['background']='',this['_type'][y(0x216)]=':host',this['_type']['title']=this['_type'][y(0x216)];return;}this['_id']['disabled']=![],this['_content'][y(0x210)]=![];const d=await this[y(0x20f)]?.['getLastServiceWhereAsync']('configUiService',e=>e[y(0x21c)](c['selectionService']['primarySelection']));d?this['_configButton'][y(0x202)]['display']='block':this['_configButton'][y(0x202)]['display']='none';c['selectionService'][y(0x226)]?.[y(0x1ff)]==NodeType[y(0x200)]?this[y(0x217)]['value']=c['selectionService'][y(0x226)]?.['name']??'':this[y(0x217)][y(0x216)]=c[y(0x1f8)]['primarySelection']?.[y(0x1e6)]?.[y(0x211)]??'';this[y(0x217)]['title']=this[y(0x217)]['value'],this['_id']['value']=c['selectionService'][y(0x226)]?.['id']??'';if(c[y(0x1f8)][y(0x226)]?.[y(0x1f5)]?.[y(0x1ff)]!=NodeType[y(0x200)])this[y(0x219)]['value']=c['selectionService'][y(0x226)]?.[y(0x1e8)]??'';else{if(c[y(0x1f8)]['primarySelection']?.['element']?.[y(0x1f3)]?.[y(0x225)]<=0x0)this[y(0x219)]['value']=c[y(0x1f8)][y(0x226)]?.['content']??'';else this[y(0x219)]['value']='';}this[y(0x219)][y(0x215)]=this['_content']['value'],PropertyGridPropertyList[y(0x204)](this[y(0x1e9)],this[y(0x220)][y(0x221)],c[y(0x1f8)][y(0x1f7)],this['_propertiesService']),PropertyGridPropertyList[y(0x204)](this[y(0x1ec)],this['_propertiesService'][y(0x1f4)],c['selectionService']['selectedElements'],this[y(0x220)]),PropertyGridPropertyList[y(0x204)](this['_innerRect'],this[y(0x220)][y(0x20b)],c['selectionService']['selectedElements'],this[y(0x220)]);}['_openContextMenu'](c,d,e){const z=i;let f;if(this['propertyGrid']['propertyContextMenuProvider'])f=this[z(0x1f2)]['propertyContextMenuProvider'](d,e);if(!f)f=e['service']['getContextMenu'](d,e);ContextMenu['show'](f,c);}}function a(){const A=['_id','7PhRmDK','_contentRect','classic','type','_configButton','dispose','contentRect','propertyGrid','children','contentProperty','element','onkeydown','selectedElements','selectionService','Enter','580655mZGUld','oncontextmenu','define','9834QJsXnJ','_getDomElement','nodeType','Element','setAttribute','style','1252184LRwHqN','refreshIsSetElementAndEditorForDesignItems','display','preventDefault','_restoreCachedInititalValues','6159zAJMhO','_instanceServiceContainer','_refreshHeaderForCurrentSelection','innerHtmlProperty','8757348avJOBi','90mDADBY','background','serviceContainer','disabled','nodeName','_selectionChangedHandler','idRect','15706704hJhDhx','title','value','_type','innerRect','_content','716rlKHmn','20UusoRq','hasConfigUi','getLastServiceWhereAsync','onclick','emit','_propertiesService','idProperty','modern','isRootItem','1258777iyotVD','length','primarySelection','onblur','10200WqiFKZ','key','config','instanceServiceContainer','appearance','textContent','node','_innerRect','content','_idRect'];a=function(){return A;};return a();}customElements[i(0x1fc)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);