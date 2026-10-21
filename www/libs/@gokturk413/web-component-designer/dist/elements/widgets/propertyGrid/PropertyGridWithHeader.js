function b(c,d){c=c-0x19e;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c6))/0x1+parseInt(h(0x1d1))/0x2+parseInt(h(0x1c7))/0x3*(-parseInt(h(0x1d5))/0x4)+-parseInt(h(0x19e))/0x5*(-parseInt(h(0x1a5))/0x6)+parseInt(h(0x1da))/0x7*(-parseInt(h(0x1cd))/0x8)+parseInt(h(0x1b2))/0x9*(-parseInt(h(0x1e3))/0xa)+parseInt(h(0x1b9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69e77));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x1cf)]=['appearance'];static ['properties']={'appearance':String};get[i(0x1a7)](){const j=i;return this['getAttribute']('appearance')==='modern'?j(0x1a9):'classic';}set['appearance'](c){const k=i;this[k(0x19f)]('appearance',c);}['attributeChangedCallback'](){const l=i;if(this[l(0x1d2)])this['propertyGrid'][l(0x1a7)]=this['appearance'];}static [i(0x1b6)]=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];[i(0x1ad)];[i(0x1dd)];[i(0x1c8)];[i(0x1bf)];['_idRect'];[i(0x1be)];[i(0x1db)];['_propertiesService'];[i(0x1aa)];constructor(){const m=i;super(),this['_restoreCachedInititalValues'](),this[m(0x1b0)]=this['_getDomElement'](m(0x1ab)),this[m(0x1ad)]=this['_getDomElement']('id'),this['_content']=this['_getDomElement'](m(0x1bc)),this['propertyGrid']=this[m(0x1b4)]('pg'),this[m(0x1d2)]['appearance']=this['appearance'],this['_idRect']=this[m(0x1b4)](m(0x1ac)),this['_contentRect']=this[m(0x1b4)](m(0x1a8)),this[m(0x1db)]=this[m(0x1b4)]('innerRect'),this[m(0x1aa)]=this[m(0x1b4)]('config'),this['_configButton'][m(0x1a2)]=async()=>{const n=m,d=await this[n(0x1bd)]?.['getLastServiceWhereAsync'](n(0x1c2),async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][n(0x1a4)][n(0x1c0)])),e=await d['getConfigUi'](this['_instanceServiceContainer'][n(0x1a4)][n(0x1c0)]);this['serviceContainer'][n(0x1c4)]['showConfigClicked']['emit']({'designItem':this[n(0x1bf)][n(0x1a4)]['primarySelection'],'configUi':e});},this[m(0x1cc)]=new ContentAndIdPropertiesService(),this[m(0x1e1)]['oncontextmenu']=d=>{const o=m;d['preventDefault']();if(!this[o(0x1bf)]['selectionService'][o(0x1c0)]?.[o(0x1bb)])this[o(0x1de)](d,this['_instanceServiceContainer']['selectionService'][o(0x1a0)],this[o(0x1cc)][o(0x1e0)]);},this['_contentRect'][m(0x1d6)]=d=>{const p=m;d[p(0x1d8)]();if(!this['_instanceServiceContainer'][p(0x1a4)]['primarySelection']?.['isRootItem'])this['_openContextMenu'](d,this['_instanceServiceContainer'][p(0x1a4)][p(0x1a0)],this['_propertiesService']['contentProperty']);},this['_innerRect'][m(0x1d6)]=d=>{const q=m;d[q(0x1d8)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[q(0x1bb)])this[q(0x1de)](d,this[q(0x1bf)]['selectionService'][q(0x1a0)],this[q(0x1cc)]['innerHtmlProperty']);},this['_id'][m(0x1b1)]=d=>{const r=m;if(d[r(0x1d0)]==r(0x1cb))this[r(0x1bf)][r(0x1a4)]['primarySelection']['id']=this['_id'][r(0x1a1)];else d['key']=='Escape'&&(this[r(0x1ad)]['value']=this['_instanceServiceContainer'][r(0x1a4)]['primarySelection']?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x1b3)](this['_idRect'],this[r(0x1cc)]['idProperty'],this[r(0x1bf)][r(0x1a4)]['selectedElements'],this[r(0x1cc)]);},this[m(0x1dd)][m(0x1b1)]=d=>{const s=m;if(d['key']==s(0x1cb))this['_instanceServiceContainer']['selectionService']['primarySelection'][s(0x1bc)]=this[s(0x1dd)][s(0x1a1)],this[s(0x1dd)]['title']=this['_content'][s(0x1a1)];else d[s(0x1d0)]=='Escape'&&(this[s(0x1dd)][s(0x1a1)]=this[s(0x1bf)]['selectionService']['primarySelection']?.[s(0x1df)]?.[s(0x1d9)]??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[s(0x1b3)](this[s(0x1be)],this[s(0x1cc)][s(0x1dc)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[s(0x1cc)]),PropertyGridPropertyList[s(0x1b3)](this['_innerRect'],this[s(0x1cc)][s(0x1c1)],this['_instanceServiceContainer']['selectionService'][s(0x1a0)],this[s(0x1cc)]);};let c;this[m(0x1ad)][m(0x1e2)]=d=>{const t=m;c=this[t(0x1bf)]['selectionService']['primarySelection'];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this[u(0x1ad)]['value'];c=null,PropertyGridPropertyList[u(0x1b3)](this[u(0x1e1)],this['_propertiesService']['idProperty'],this['_instanceServiceContainer']['selectionService'][u(0x1a0)],this[u(0x1cc)]);};}set[i(0x1bd)](c){const v=i;this[v(0x1d2)]['serviceContainer']=c;}set[i(0x1af)](c){const w=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[w(0x1d7)](),d?(this['_selectionChangedHandler']=d['selectionService'][w(0x1c9)]['on'](async f=>{this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this[w(0x1aa)][w(0x1b6)]['display']='none',this['_id']['value']='',this[w(0x1dd)]['value']='',this[w(0x1ad)]['disabled']=!![],this['_content'][w(0x1b7)]=!![],this[w(0x1e1)][w(0x1b6)][w(0x1ba)]='',this['_contentRect']['style'][w(0x1ba)]='',this['_innerRect']['style']['background']='',this['_type'][w(0x1a1)]=':host'),this['propertyGrid'][w(0x1af)]=d;}async['_refreshHeaderForCurrentSelection'](c){const x=i;if(!c?.[x(0x1a4)]?.['primarySelection']||c[x(0x1a4)][x(0x1c0)]?.['isRootItem']){this['_configButton']['style'][x(0x1ca)]='none',this[x(0x1ad)]['value']='',this['_content']['value']='',this['_id']['disabled']=!![],this['_content'][x(0x1b7)]=!![],this[x(0x1e1)][x(0x1b6)][x(0x1ba)]='',this[x(0x1be)][x(0x1b6)]['background']='',this['_innerRect']['style']['background']='',this[x(0x1b0)]['value']=x(0x1b8),this[x(0x1b0)]['title']=this['_type'][x(0x1a1)];return;}this[x(0x1ad)]['disabled']=![],this['_content']['disabled']=![];const d=await this[x(0x1bd)]?.[x(0x1ce)]('configUiService',e=>e[x(0x1a6)](c['selectionService']['primarySelection']));d?this[x(0x1aa)]['style']['display']='block':this['_configButton']['style']['display']='none';c['selectionService']['primarySelection']?.[x(0x1b5)]==NodeType[x(0x1a3)]?this['_type'][x(0x1a1)]=c['selectionService'][x(0x1c0)]?.['name']??'':this[x(0x1b0)][x(0x1a1)]=c[x(0x1a4)][x(0x1c0)]?.['node']?.['nodeName']??'';this[x(0x1b0)][x(0x1c3)]=this['_type']['value'],this['_id'][x(0x1a1)]=c[x(0x1a4)][x(0x1c0)]?.['id']??'';if(c[x(0x1a4)][x(0x1c0)]?.[x(0x1df)]?.[x(0x1b5)]!=NodeType['Element'])this['_content']['value']=c[x(0x1a4)][x(0x1c0)]?.[x(0x1bc)]??'';else{if(c[x(0x1a4)][x(0x1c0)]?.[x(0x1df)]?.[x(0x1ae)]?.['length']<=0x0)this['_content'][x(0x1a1)]=c[x(0x1a4)]['primarySelection']?.[x(0x1bc)]??'';else this['_content'][x(0x1a1)]='';}this[x(0x1dd)][x(0x1c3)]=this[x(0x1dd)][x(0x1a1)],PropertyGridPropertyList[x(0x1b3)](this[x(0x1e1)],this['_propertiesService'][x(0x1e0)],c[x(0x1a4)][x(0x1a0)],this[x(0x1cc)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[x(0x1be)],this[x(0x1cc)][x(0x1dc)],c['selectionService'][x(0x1a0)],this['_propertiesService']),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_innerRect'],this[x(0x1cc)]['innerHtmlProperty'],c[x(0x1a4)][x(0x1a0)],this['_propertiesService']);}[i(0x1de)](c,d,e){const y=i;let f;if(this[y(0x1d2)][y(0x1c5)])f=this[y(0x1d2)][y(0x1c5)](d,e);if(!f)f=e['service']['getContextMenu'](d,e);ContextMenu[y(0x1d3)](f,c);}}customElements[i(0x1d4)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);function a(){const z=['213492aSDPvy','oncontextmenu','dispose','preventDefault','textContent','1553699bYjhqb','_innerRect','contentProperty','_content','_openContextMenu','element','idProperty','_idRect','onfocus','4214410cVWtGp','85bsZNnG','setAttribute','selectedElements','value','onclick','Element','selectionService','61980WDwefG','hasConfigUi','appearance','contentRect','modern','_configButton','type','idRect','_id','children','instanceServiceContainer','_type','onkeydown','9UIjvdF','refreshIsSetElementAndEditorForDesignItems','_getDomElement','nodeType','style','disabled',':host','7718667IGrPCh','background','isRootItem','content','serviceContainer','_contentRect','_instanceServiceContainer','primarySelection','innerHtmlProperty','configUiService','title','globalContext','propertyContextMenuProvider','325744pvsJSO','9nuVVLL','_selectionChangedHandler','onSelectionChanged','display','Enter','_propertiesService','8pkUeWJ','getLastServiceWhereAsync','observedAttributes','key','68498uygGdz','propertyGrid','show','define'];a=function(){return z;};return a();}