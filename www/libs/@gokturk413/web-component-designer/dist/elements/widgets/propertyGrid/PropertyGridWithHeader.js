const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x177))/0x1*(-parseInt(h(0x1a5))/0x2)+parseInt(h(0x165))/0x3*(parseInt(h(0x166))/0x4)+-parseInt(h(0x194))/0x5*(-parseInt(h(0x18a))/0x6)+-parseInt(h(0x1a0))/0x7+-parseInt(h(0x16a))/0x8+parseInt(h(0x1a2))/0x9+-parseInt(h(0x19c))/0xa*(parseInt(h(0x197))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x454ff));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function a(){const y=['key','_openContextMenu','innerHtmlProperty','_configButton','selectedElements','textContent','510MIljLh','classic','Escape','1107139GVUHaS','none','Element','selectionService','style','40UEmOxi','innerRect','show','getLastServiceWhereAsync','951069IzpoBR','display','4710546EpMcdv','_getDomElement','preventDefault','2unqSJG','_id','isRootItem','_propertiesService','serviceContainer','configUiService','children','instanceServiceContainer','52146BOmXAP','36fGocqu','disabled','background','_content','342520fhBiKH','propertyGrid','appearance','block','_contentRect','_idRect','stopPropagation','nodeName','primarySelection','hasConfigUi','onkeydown','value','nodeType','172977lqkGbD','oncontextmenu','refreshIsSetElementAndEditorForDesignItems','Enter','propertyContextMenuProvider','node','_refreshHeaderForCurrentSelection','title','onfocus','onclick','content','length','_type','_innerRect','_instanceServiceContainer','idProperty','properties','_selectionChangedHandler','onSelectionChanged','21078GnFLHW','globalContext','element','template'];a=function(){return y;};return a();}export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static [i(0x187)]={'appearance':String};get['appearance'](){const j=i;return this['getAttribute'](j(0x16c))==='modern'?'modern':j(0x195);}set['appearance'](c){this['setAttribute']('appearance',c);}['attributeChangedCallback'](){const k=i;if(this[k(0x16b)])this[k(0x16b)]['appearance']=this['appearance'];}static [i(0x19b)]=css`
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
    `;static [i(0x18d)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];['_id'];[i(0x169)];['_selectionChangedHandler'];[i(0x185)];[i(0x16f)];['_contentRect'];['_innerRect'];['_propertiesService'];['_configButton'];constructor(){const l=i;super(),this['_restoreCachedInititalValues'](),this[l(0x183)]=this['_getDomElement']('type'),this['_id']=this[l(0x1a3)]('id'),this['_content']=this['_getDomElement'](l(0x181)),this['propertyGrid']=this['_getDomElement']('pg'),this[l(0x16b)]['appearance']=this['appearance'],this['_idRect']=this[l(0x1a3)]('idRect'),this['_contentRect']=this[l(0x1a3)]('contentRect'),this['_innerRect']=this['_getDomElement'](l(0x19d)),this['_configButton']=this[l(0x1a3)]('config'),this['_configButton'][l(0x180)]=async()=>{const m=l,d=await this[m(0x161)]?.['getLastServiceWhereAsync'](m(0x162),async f=>await f[m(0x173)](this[m(0x185)][m(0x19a)]['primarySelection'])),e=await d['getConfigUi'](this['_instanceServiceContainer']['selectionService']['primarySelection']);this[m(0x161)][m(0x18b)]['showConfigClicked']['emit']({'designItem':this[m(0x185)][m(0x19a)][m(0x172)],'configUi':e});},this[l(0x160)]=new ContentAndIdPropertiesService(),this['_idRect'][l(0x178)]=d=>{const n=l;d[n(0x1a4)]();if(!this[n(0x185)]['selectionService']['primarySelection']?.[n(0x1a7)])this['_openContextMenu'](d,this['_instanceServiceContainer'][n(0x19a)][n(0x192)],this[n(0x160)]['idProperty']);},this['_contentRect']['oncontextmenu']=d=>{const o=l;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][o(0x172)]?.['isRootItem'])this[o(0x18f)](d,this['_instanceServiceContainer'][o(0x19a)]['selectedElements'],this[o(0x160)]['contentProperty']);},this[l(0x184)][l(0x178)]=d=>{const p=l;d[p(0x1a4)]();if(!this['_instanceServiceContainer'][p(0x19a)][p(0x172)]?.[p(0x1a7)])this['_openContextMenu'](d,this['_instanceServiceContainer']['selectionService'][p(0x192)],this['_propertiesService'][p(0x190)]);},this['_id'][l(0x174)]=d=>{const q=l;if(d[q(0x18e)]=='Enter')this[q(0x185)]['selectionService']['primarySelection']['id']=this['_id']['value'];else d['key']==q(0x196)&&(this['_id'][q(0x175)]=this[q(0x185)][q(0x19a)][q(0x172)]?.['id']??'',d[q(0x1a4)](),d['stopPropagation']());PropertyGridPropertyList[q(0x179)](this['_idRect'],this['_propertiesService'][q(0x186)],this['_instanceServiceContainer'][q(0x19a)]['selectedElements'],this[q(0x160)]);},this[l(0x169)][l(0x174)]=d=>{const r=l;if(d['key']==r(0x17a))this[r(0x185)][r(0x19a)][r(0x172)][r(0x181)]=this['_content'][r(0x175)],this[r(0x169)][r(0x17e)]=this[r(0x169)]['value'];else d['key']==r(0x196)&&(this['_content'][r(0x175)]=this[r(0x185)][r(0x19a)][r(0x172)]?.[r(0x18c)]?.[r(0x193)]??'',d['preventDefault'](),d[r(0x170)]());PropertyGridPropertyList[r(0x179)](this[r(0x16e)],this[r(0x160)]['contentProperty'],this[r(0x185)]['selectionService']['selectedElements'],this[r(0x160)]),PropertyGridPropertyList[r(0x179)](this[r(0x184)],this['_propertiesService']['innerHtmlProperty'],this[r(0x185)]['selectionService'][r(0x192)],this[r(0x160)]);};let c;this[l(0x1a6)][l(0x17f)]=d=>{c=this['_instanceServiceContainer']['selectionService']['primarySelection'];},this[l(0x1a6)]['onblur']=d=>{const s=l;if(c)c['id']=this['_id']['value'];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[s(0x16f)],this['_propertiesService']['idProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[s(0x160)]);};}set['serviceContainer'](c){const t=i;this[t(0x16b)][t(0x161)]=c;}set['instanceServiceContainer'](c){const u=i,d=c;this[u(0x185)]=d,this['_selectionChangedHandler']?.['dispose'](),d?(this[u(0x188)]=d['selectionService'][u(0x189)]['on'](async f=>{const v=u;this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this[v(0x17d)](d);}),this[u(0x17d)](d)):(this[u(0x191)][u(0x19b)]['display']=u(0x198),this['_id'][u(0x175)]='',this['_content']['value']='',this['_id'][u(0x167)]=!![],this['_content']['disabled']=!![],this[u(0x16f)][u(0x19b)][u(0x168)]='',this['_contentRect']['style']['background']='',this['_innerRect'][u(0x19b)]['background']='',this[u(0x183)][u(0x175)]=':host'),this[u(0x16b)][u(0x164)]=d;}async['_refreshHeaderForCurrentSelection'](c){const w=i;if(!c?.[w(0x19a)]?.['primarySelection']||c['selectionService'][w(0x172)]?.[w(0x1a7)]){this[w(0x191)][w(0x19b)][w(0x1a1)]='none',this['_id']['value']='',this['_content'][w(0x175)]='',this[w(0x1a6)]['disabled']=!![],this['_content']['disabled']=!![],this[w(0x16f)]['style'][w(0x168)]='',this[w(0x16e)][w(0x19b)][w(0x168)]='',this[w(0x184)][w(0x19b)]['background']='',this[w(0x183)][w(0x175)]=':host',this['_type']['title']=this['_type']['value'];return;}this['_id']['disabled']=![],this['_content']['disabled']=![];const d=await this[w(0x161)]?.[w(0x19f)](w(0x162),e=>e[w(0x173)](c[w(0x19a)][w(0x172)]));d?this['_configButton'][w(0x19b)]['display']=w(0x16d):this[w(0x191)][w(0x19b)][w(0x1a1)]='none';c[w(0x19a)]['primarySelection']?.[w(0x176)]==NodeType['Element']?this[w(0x183)][w(0x175)]=c[w(0x19a)][w(0x172)]?.['name']??'':this['_type'][w(0x175)]=c['selectionService']['primarySelection']?.[w(0x17c)]?.[w(0x171)]??'';this[w(0x183)]['title']=this[w(0x183)]['value'],this['_id']['value']=c[w(0x19a)]['primarySelection']?.['id']??'';if(c[w(0x19a)][w(0x172)]?.[w(0x18c)]?.['nodeType']!=NodeType[w(0x199)])this['_content']['value']=c['selectionService']['primarySelection']?.['content']??'';else{if(c[w(0x19a)][w(0x172)]?.['element']?.[w(0x163)]?.[w(0x182)]<=0x0)this['_content']['value']=c[w(0x19a)][w(0x172)]?.[w(0x181)]??'';else this['_content']['value']='';}this[w(0x169)]['title']=this[w(0x169)]['value'],PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_idRect'],this['_propertiesService']['idProperty'],c['selectionService'][w(0x192)],this[w(0x160)]),PropertyGridPropertyList[w(0x179)](this['_contentRect'],this['_propertiesService']['contentProperty'],c['selectionService']['selectedElements'],this[w(0x160)]),PropertyGridPropertyList[w(0x179)](this[w(0x184)],this['_propertiesService'][w(0x190)],c['selectionService']['selectedElements'],this['_propertiesService']);}[i(0x18f)](c,d,e){const x=i;let f;if(this[x(0x16b)][x(0x17b)])f=this[x(0x16b)][x(0x17b)](d,e);if(!f)f=e['service']['getContextMenu'](d,e);ContextMenu[x(0x19e)](f,c);}}customElements['define']('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);