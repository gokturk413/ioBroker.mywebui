const i=b;function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x150))/0x1*(-parseInt(h(0x138))/0x2)+-parseInt(h(0x167))/0x3*(-parseInt(h(0x122))/0x4)+-parseInt(h(0x146))/0x5*(-parseInt(h(0x143))/0x6)+parseInt(h(0x130))/0x7+-parseInt(h(0x135))/0x8+parseInt(h(0x162))/0x9*(-parseInt(h(0x13f))/0xa)+parseInt(h(0x165))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4ce2d));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';function a(){const z=['3924088PqfZme','length','emit','_idRect','hasConfigUi','1559208nUsRBz','innerHtmlProperty','appearance','2GiwHsq','disabled','refreshIsSetElementAndEditorForDesignItems','contentProperty','_restoreCachedInititalValues','oncontextmenu','_type','10OXxcDU','nodeName','onkeydown','getConfigUi','118722cpvzgJ','stopPropagation','value','5OCOJOB','idRect','_innerRect','name','background','propertyGrid','modern','element','style','_configButton','575780YCahlZ','_contentRect','_id','selectionService','onSelectionChanged','serviceContainer','setAttribute','configUiService','preventDefault','block',':host','_content','_instanceServiceContainer','attributeChangedCallback','primarySelection','dispose','node','getLastServiceWhereAsync','4594689mbJEgs','none','nodeType','11047102YbstBW','type','3ntuswt','_getDomElement','idProperty','instanceServiceContainer','title','Escape','Element','content','45896lkNLiC','contentRect','_propertiesService','display','innerRect','_refreshHeaderForCurrentSelection','define','selectedElements','template','classic','isRootItem','propertyContextMenuProvider','_openContextMenu','key'];a=function(){return z;};return a();}import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static ['properties']={'appearance':String};get[i(0x137)](){const j=i;return this['getAttribute'](j(0x137))==='modern'?j(0x14c):j(0x12b);}set['appearance'](c){const k=i;this[k(0x156)](k(0x137),c);}[i(0x15d)](){const l=i;if(this['propertyGrid'])this['propertyGrid'][l(0x137)]=this['appearance'];}static [i(0x14e)]=css`
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
    `;static [i(0x12a)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[i(0x14b)];[i(0x13e)];[i(0x152)];['_content'];['_selectionChangedHandler'];[i(0x15c)];[i(0x133)];[i(0x151)];['_innerRect'];[i(0x124)];['_configButton'];constructor(){const m=i;super(),this[m(0x13c)](),this[m(0x13e)]=this['_getDomElement'](m(0x166)),this[m(0x152)]=this['_getDomElement']('id'),this[m(0x15b)]=this['_getDomElement'](m(0x121)),this[m(0x14b)]=this['_getDomElement']('pg'),this[m(0x14b)]['appearance']=this[m(0x137)],this[m(0x133)]=this[m(0x168)](m(0x147)),this['_contentRect']=this[m(0x168)](m(0x123)),this['_innerRect']=this['_getDomElement'](m(0x126)),this['_configButton']=this[m(0x168)]('config'),this['_configButton']['onclick']=async()=>{const n=m,d=await this['serviceContainer']?.['getLastServiceWhereAsync'](n(0x157),async f=>await f[n(0x134)](this['_instanceServiceContainer'][n(0x153)]['primarySelection'])),e=await d[n(0x142)](this[n(0x15c)]['selectionService']['primarySelection']);this[n(0x155)]['globalContext']['showConfigClicked'][n(0x132)]({'designItem':this['_instanceServiceContainer']['selectionService'][n(0x15e)],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect'][m(0x13d)]=d=>{const o=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][o(0x15e)]?.[o(0x12c)])this[o(0x12e)](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[o(0x124)][o(0x169)]);},this[m(0x151)]['oncontextmenu']=d=>{const p=m;d[p(0x158)]();if(!this[p(0x15c)][p(0x153)]['primarySelection']?.['isRootItem'])this[p(0x12e)](d,this[p(0x15c)]['selectionService'][p(0x129)],this[p(0x124)][p(0x13b)]);},this[m(0x148)][m(0x13d)]=d=>{const q=m;d[q(0x158)]();if(!this['_instanceServiceContainer']['selectionService'][q(0x15e)]?.[q(0x12c)])this['_openContextMenu'](d,this[q(0x15c)][q(0x153)]['selectedElements'],this[q(0x124)][q(0x136)]);},this['_id'][m(0x141)]=d=>{const r=m;if(d['key']=='Enter')this[r(0x15c)]['selectionService'][r(0x15e)]['id']=this[r(0x152)][r(0x145)];else d['key']==r(0x11f)&&(this[r(0x152)][r(0x145)]=this['_instanceServiceContainer']['selectionService'][r(0x15e)]?.['id']??'',d['preventDefault'](),d[r(0x144)]());PropertyGridPropertyList[r(0x13a)](this[r(0x133)],this[r(0x124)]['idProperty'],this[r(0x15c)][r(0x153)]['selectedElements'],this[r(0x124)]);},this['_content']['onkeydown']=d=>{const s=m;if(d[s(0x12f)]=='Enter')this[s(0x15c)]['selectionService']['primarySelection']['content']=this['_content'][s(0x145)],this['_content']['title']=this[s(0x15b)][s(0x145)];else d[s(0x12f)]==s(0x11f)&&(this['_content'][s(0x145)]=this[s(0x15c)]['selectionService'][s(0x15e)]?.[s(0x14d)]?.['textContent']??'',d[s(0x158)](),d[s(0x144)]());PropertyGridPropertyList[s(0x13a)](this['_contentRect'],this[s(0x124)][s(0x13b)],this[s(0x15c)]['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this['_propertiesService']['innerHtmlProperty'],this['_instanceServiceContainer']['selectionService'][s(0x129)],this[s(0x124)]);};let c;this[m(0x152)]['onfocus']=d=>{const t=m;c=this[t(0x15c)][t(0x153)]['primarySelection'];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x133)],this[u(0x124)]['idProperty'],this['_instanceServiceContainer']['selectionService'][u(0x129)],this['_propertiesService']);};}set['serviceContainer'](c){const v=i;this[v(0x14b)][v(0x155)]=c;}set[i(0x11d)](c){const w=i,d=c;this[w(0x15c)]=d,this['_selectionChangedHandler']?.[w(0x15f)](),d?(this['_selectionChangedHandler']=d['selectionService'][w(0x154)]['on'](async f=>{this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[w(0x14f)][w(0x14e)][w(0x125)]='none',this['_id'][w(0x145)]='',this[w(0x15b)]['value']='',this[w(0x152)]['disabled']=!![],this[w(0x15b)][w(0x139)]=!![],this['_idRect']['style'][w(0x14a)]='',this['_contentRect']['style']['background']='',this['_innerRect'][w(0x14e)][w(0x14a)]='',this['_type']['value']=w(0x15a)),this[w(0x14b)]['instanceServiceContainer']=d;}async[i(0x127)](c){const x=i;if(!c?.[x(0x153)]?.['primarySelection']||c['selectionService'][x(0x15e)]?.['isRootItem']){this['_configButton']['style']['display']='none',this['_id']['value']='',this['_content']['value']='',this[x(0x152)]['disabled']=!![],this[x(0x15b)]['disabled']=!![],this['_idRect'][x(0x14e)]['background']='',this['_contentRect']['style'][x(0x14a)]='',this['_innerRect'][x(0x14e)]['background']='',this['_type'][x(0x145)]=x(0x15a),this[x(0x13e)]['title']=this['_type']['value'];return;}this['_id'][x(0x139)]=![],this['_content']['disabled']=![];const d=await this['serviceContainer']?.[x(0x161)](x(0x157),e=>e[x(0x134)](c[x(0x153)][x(0x15e)]));d?this[x(0x14f)][x(0x14e)]['display']=x(0x159):this[x(0x14f)]['style'][x(0x125)]=x(0x163);c[x(0x153)][x(0x15e)]?.[x(0x164)]==NodeType[x(0x120)]?this['_type']['value']=c['selectionService'][x(0x15e)]?.[x(0x149)]??'':this[x(0x13e)][x(0x145)]=c['selectionService']['primarySelection']?.[x(0x160)]?.[x(0x140)]??'';this['_type'][x(0x11e)]=this[x(0x13e)][x(0x145)],this[x(0x152)]['value']=c[x(0x153)][x(0x15e)]?.['id']??'';if(c[x(0x153)]['primarySelection']?.['element']?.['nodeType']!=NodeType['Element'])this[x(0x15b)]['value']=c[x(0x153)][x(0x15e)]?.[x(0x121)]??'';else{if(c['selectionService']['primarySelection']?.['element']?.['children']?.[x(0x131)]<=0x0)this[x(0x15b)][x(0x145)]=c[x(0x153)][x(0x15e)]?.[x(0x121)]??'';else this[x(0x15b)][x(0x145)]='';}this[x(0x15b)][x(0x11e)]=this['_content'][x(0x145)],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[x(0x133)],this[x(0x124)]['idProperty'],c[x(0x153)]['selectedElements'],this[x(0x124)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[x(0x151)],this[x(0x124)]['contentProperty'],c['selectionService'][x(0x129)],this[x(0x124)]),PropertyGridPropertyList[x(0x13a)](this['_innerRect'],this[x(0x124)]['innerHtmlProperty'],c[x(0x153)][x(0x129)],this['_propertiesService']);}[i(0x12e)](c,d,e){const y=i;let f;if(this['propertyGrid']['propertyContextMenuProvider'])f=this['propertyGrid'][y(0x12d)](d,e);if(!f)f=e['service']['getContextMenu'](d,e);ContextMenu['show'](f,c);}}customElements[i(0x128)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);