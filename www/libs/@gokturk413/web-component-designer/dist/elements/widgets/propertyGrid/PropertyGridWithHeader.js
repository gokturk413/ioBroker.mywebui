const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xfb))/0x1*(parseInt(h(0x11a))/0x2)+parseInt(h(0xe3))/0x3*(-parseInt(h(0x11d))/0x4)+-parseInt(h(0xee))/0x5+-parseInt(h(0x113))/0x6*(parseInt(h(0xed))/0x7)+-parseInt(h(0x110))/0x8*(-parseInt(h(0xfd))/0x9)+-parseInt(h(0x128))/0xa*(-parseInt(h(0xe8))/0xb)+parseInt(h(0x10b))/0xc*(parseInt(h(0x115))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x768ee));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';function a(){const A=['_getDomElement','stopPropagation','onkeydown','1326976xPNtNv','2488140XdmYwR','style','attributeChangedCallback','primarySelection','_type','appearance','_openContextMenu','Element','globalContext','nodeType','_propertiesService','getContextMenu','contentRect','33xFOlaL','showConfigClicked','366939xQblRz','children','contentProperty','nodeName','_content','serviceContainer','_id','template','preventDefault','element','length','_idRect','innerRect','refreshIsSetElementAndEditorForDesignItems','257304YvOrwV','configUiService','instanceServiceContainer','background','_instanceServiceContainer','136iMJbqv','value','_contentRect','6RCtBDD','dispose','598oNcPfU','key','disabled','propertyGrid','textContent','13058NgZTKZ','show','isRootItem','16QlDCGy','node','_configButton','getLastServiceWhereAsync','properties','define','display','emit','config','_selectionChangedHandler','service','10bvHcZm','idProperty','hasConfigUi','_innerRect','_refreshHeaderForCurrentSelection','306231IJypWD','_restoreCachedInititalValues','getConfigUi','selectionService','selectedElements','1288496euNkSp','oncontextmenu'];a=function(){return A;};return a();}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';function b(c,d){c=c-0xe3;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[i(0xf3)];static [i(0x121)]={'appearance':String};get[i(0xf3)](){const j=i;return this['getAttribute'](j(0xf3))==='modern'?'modern':'classic';}set[i(0xf3)](c){const k=i;this['setAttribute'](k(0xf3),c);}[i(0xf0)](){const l=i;if(this[l(0x118)])this['propertyGrid'][l(0xf3)]=this[l(0xf3)];}static [i(0xef)]=css`
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
    `;static [i(0x104)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];[i(0xf2)];[i(0x103)];['_content'];[i(0x126)];[i(0x10f)];[i(0x108)];[i(0x112)];[i(0x12b)];[i(0xf8)];['_configButton'];constructor(){const m=i;super(),this[m(0xe4)](),this[m(0xf2)]=this[m(0xea)]('type'),this['_id']=this['_getDomElement']('id'),this['_content']=this['_getDomElement']('content'),this['propertyGrid']=this[m(0xea)]('pg'),this[m(0x118)]['appearance']=this['appearance'],this['_idRect']=this[m(0xea)]('idRect'),this[m(0x112)]=this[m(0xea)](m(0xfa)),this[m(0x12b)]=this['_getDomElement'](m(0x109)),this['_configButton']=this['_getDomElement'](m(0x125)),this[m(0x11f)]['onclick']=async()=>{const n=m,d=await this[n(0x102)]?.[n(0x120)](n(0x10c),async f=>await f[n(0x12a)](this[n(0x10f)][n(0xe6)][n(0xf1)])),e=await d[n(0xe5)](this[n(0x10f)]['selectionService'][n(0xf1)]);this['serviceContainer'][n(0xf6)][n(0xfc)][n(0x124)]({'designItem':this['_instanceServiceContainer'][n(0xe6)]['primarySelection'],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this['_idRect']['oncontextmenu']=d=>{const o=m;d['preventDefault']();if(!this[o(0x10f)][o(0xe6)][o(0xf1)]?.['isRootItem'])this['_openContextMenu'](d,this[o(0x10f)]['selectionService']['selectedElements'],this[o(0xf8)][o(0x129)]);},this['_contentRect'][m(0xe9)]=d=>{const p=m;d[p(0x105)]();if(!this[p(0x10f)][p(0xe6)]['primarySelection']?.[p(0x11c)])this[p(0xf4)](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService'][p(0xff)]);},this[m(0x12b)][m(0xe9)]=d=>{const q=m;d['preventDefault']();if(!this[q(0x10f)]['selectionService']['primarySelection']?.[q(0x11c)])this[q(0xf4)](d,this['_instanceServiceContainer'][q(0xe6)][q(0xe7)],this['_propertiesService']['innerHtmlProperty']);},this['_id'][m(0xec)]=d=>{const r=m;if(d['key']=='Enter')this['_instanceServiceContainer'][r(0xe6)]['primarySelection']['id']=this['_id']['value'];else d[r(0x116)]=='Escape'&&(this['_id'][r(0x111)]=this[r(0x10f)][r(0xe6)]['primarySelection']?.['id']??'',d[r(0x105)](),d[r(0xeb)]());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0x108)],this['_propertiesService'][r(0x129)],this['_instanceServiceContainer'][r(0xe6)][r(0xe7)],this[r(0xf8)]);},this[m(0x101)][m(0xec)]=d=>{const s=m;if(d['key']=='Enter')this['_instanceServiceContainer']['selectionService'][s(0xf1)]['content']=this['_content']['value'],this['_content']['title']=this[s(0x101)]['value'];else d['key']=='Escape'&&(this['_content'][s(0x111)]=this['_instanceServiceContainer'][s(0xe6)]['primarySelection']?.[s(0x106)]?.[s(0x119)]??'',d[s(0x105)](),d['stopPropagation']());PropertyGridPropertyList[s(0x10a)](this['_contentRect'],this['_propertiesService']['contentProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this[s(0xf8)]),PropertyGridPropertyList[s(0x10a)](this[s(0x12b)],this['_propertiesService']['innerHtmlProperty'],this[s(0x10f)][s(0xe6)]['selectedElements'],this[s(0xf8)]);};let c;this['_id']['onfocus']=d=>{const t=m;c=this[t(0x10f)]['selectionService']['primarySelection'];},this['_id']['onblur']=d=>{const u=m;if(c)c['id']=this['_id'][u(0x111)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[u(0x108)],this['_propertiesService'][u(0x129)],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']);};}set[i(0x102)](c){const v=i;this['propertyGrid'][v(0x102)]=c;}set[i(0x10d)](c){const w=i,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.[w(0x114)](),d?(this[w(0x126)]=d['selectionService']['onSelectionChanged']['on'](async f=>{const x=w;this[x(0x118)][x(0x10d)]=d,await sleep(0x14),await this[x(0x12c)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton']['style'][w(0x123)]='none',this['_id'][w(0x111)]='',this[w(0x101)]['value']='',this['_id']['disabled']=!![],this[w(0x101)][w(0x117)]=!![],this['_idRect']['style']['background']='',this['_contentRect']['style']['background']='',this['_innerRect']['style']['background']='',this['_type']['value']=':host'),this['propertyGrid']['instanceServiceContainer']=d;}async[i(0x12c)](c){const y=i;if(!c?.['selectionService']?.['primarySelection']||c[y(0xe6)][y(0xf1)]?.[y(0x11c)]){this['_configButton'][y(0xef)]['display']='none',this[y(0x103)]['value']='',this['_content'][y(0x111)]='',this[y(0x103)][y(0x117)]=!![],this['_content'][y(0x117)]=!![],this['_idRect']['style'][y(0x10e)]='',this['_contentRect'][y(0xef)]['background']='',this[y(0x12b)]['style'][y(0x10e)]='',this[y(0xf2)]['value']=':host',this[y(0xf2)]['title']=this['_type']['value'];return;}this['_id']['disabled']=![],this[y(0x101)]['disabled']=![];const d=await this['serviceContainer']?.['getLastServiceWhereAsync'](y(0x10c),e=>e['hasConfigUi'](c[y(0xe6)]['primarySelection']));d?this['_configButton']['style'][y(0x123)]='block':this['_configButton'][y(0xef)][y(0x123)]='none';c['selectionService']['primarySelection']?.['nodeType']==NodeType['Element']?this['_type']['value']=c['selectionService'][y(0xf1)]?.['name']??'':this['_type'][y(0x111)]=c['selectionService']['primarySelection']?.[y(0x11e)]?.[y(0x100)]??'';this['_type']['title']=this['_type']['value'],this[y(0x103)]['value']=c[y(0xe6)]['primarySelection']?.['id']??'';if(c['selectionService'][y(0xf1)]?.['element']?.[y(0xf7)]!=NodeType[y(0xf5)])this[y(0x101)][y(0x111)]=c['selectionService'][y(0xf1)]?.['content']??'';else{if(c[y(0xe6)]['primarySelection']?.['element']?.[y(0xfe)]?.[y(0x107)]<=0x0)this[y(0x101)][y(0x111)]=c['selectionService'][y(0xf1)]?.['content']??'';else this['_content']['value']='';}this[y(0x101)]['title']=this['_content'][y(0x111)],PropertyGridPropertyList[y(0x10a)](this['_idRect'],this[y(0xf8)][y(0x129)],c[y(0xe6)][y(0xe7)],this[y(0xf8)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[y(0x112)],this['_propertiesService'][y(0xff)],c['selectionService'][y(0xe7)],this['_propertiesService']),PropertyGridPropertyList[y(0x10a)](this['_innerRect'],this[y(0xf8)]['innerHtmlProperty'],c['selectionService'][y(0xe7)],this[y(0xf8)]);}['_openContextMenu'](c,d,e){const z=i;let f;if(this[z(0x118)]['propertyContextMenuProvider'])f=this[z(0x118)]['propertyContextMenuProvider'](d,e);if(!f)f=e[z(0x127)][z(0xf9)](d,e);ContextMenu[z(0x11b)](f,c);}}customElements[i(0x122)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);