const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x20a))/0x1+-parseInt(h(0x217))/0x2+-parseInt(h(0x221))/0x3+parseInt(h(0x220))/0x4*(parseInt(h(0x22b))/0x5)+parseInt(h(0x1fe))/0x6*(parseInt(h(0x21f))/0x7)+parseInt(h(0x21b))/0x8*(-parseInt(h(0x212))/0x9)+parseInt(h(0x229))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56b39));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';function a(){const z=['isRootItem','serviceContainer','_content','8027470WIFUab','children','745qtYvcQ','classic','idProperty','_instanceServiceContainer','_propertiesService','textContent','onclick','getConfigUi','Element','value','getAttribute','modern','configUiService','show','node','getContextMenu','contentProperty','selectedElements','innerHtmlProperty','instanceServiceContainer','none','getLastServiceWhereAsync','_innerRect','onfocus','hasConfigUi','_id','_configButton','_contentRect','appearance','_selectionChangedHandler','setAttribute','onkeydown','emit','6dIUXyO','display','nodeType','_refreshHeaderForCurrentSelection','length',':host','key','showConfigClicked','style','Enter','idRect','_idRect','57948NwuxxU','type','content','_getDomElement','oncontextmenu','_openContextMenu','Escape','propertyGrid','513vdVMLy','template','onSelectionChanged','define','name','275372hZxIfx','disabled','globalContext','selectionService','33896XYEJZq','_type','_restoreCachedInititalValues','block','2307109HJnPqD','4064HuDmOf','1474338LqoPhp','nodeName','refreshIsSetElementAndEditorForDesignItems','primarySelection','propertyContextMenuProvider'];a=function(){return z;};return a();}function b(c,d){c=c-0x1e1;const e=a();let f=e[c];return f;}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];static ['properties']={'appearance':String};get['appearance'](){const i=b;return this[i(0x1e7)]('appearance')==='modern'?i(0x1e8):i(0x22c);}set[j(0x1f9)](c){const k=j;this[k(0x1fb)](k(0x1f9),c);}['attributeChangedCallback'](){const l=j;if(this['propertyGrid'])this[l(0x211)]['appearance']=this['appearance'];}static [j(0x206)]=css`
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
    `;static [j(0x213)]=html`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;[j(0x211)];['_type'];[j(0x1f6)];[j(0x228)];[j(0x1fa)];[j(0x22e)];[j(0x209)];[j(0x1f8)];[j(0x1f3)];['_propertiesService'];['_configButton'];constructor(){const m=j;super(),this[m(0x21d)](),this[m(0x21c)]=this[m(0x20d)](m(0x20b)),this[m(0x1f6)]=this['_getDomElement']('id'),this[m(0x228)]=this[m(0x20d)](m(0x20c)),this['propertyGrid']=this[m(0x20d)]('pg'),this[m(0x211)]['appearance']=this[m(0x1f9)],this['_idRect']=this[m(0x20d)](m(0x208)),this[m(0x1f8)]=this[m(0x20d)]('contentRect'),this['_innerRect']=this['_getDomElement']('innerRect'),this['_configButton']=this['_getDomElement']('config'),this['_configButton'][m(0x1e3)]=async()=>{const n=m,d=await this['serviceContainer']?.[n(0x1f2)]('configUiService',async f=>await f[n(0x1f5)](this[n(0x22e)][n(0x21a)]['primarySelection'])),e=await d[n(0x1e4)](this['_instanceServiceContainer'][n(0x21a)]['primarySelection']);this['serviceContainer'][n(0x219)][n(0x205)][n(0x1fd)]({'designItem':this['_instanceServiceContainer']['selectionService']['primarySelection'],'configUi':e});},this[m(0x1e1)]=new ContentAndIdPropertiesService(),this[m(0x209)][m(0x20e)]=d=>{const o=m;d['preventDefault']();if(!this[o(0x22e)][o(0x21a)][o(0x224)]?.[o(0x226)])this[o(0x20f)](d,this[o(0x22e)]['selectionService'][o(0x1ee)],this[o(0x1e1)][o(0x22d)]);},this[m(0x1f8)][m(0x20e)]=d=>{const p=m;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][p(0x224)]?.[p(0x226)])this['_openContextMenu'](d,this[p(0x22e)][p(0x21a)][p(0x1ee)],this[p(0x1e1)]['contentProperty']);},this[m(0x1f3)][m(0x20e)]=d=>{const q=m;d['preventDefault']();if(!this[q(0x22e)]['selectionService'][q(0x224)]?.['isRootItem'])this[q(0x20f)](d,this[q(0x22e)]['selectionService'][q(0x1ee)],this[q(0x1e1)][q(0x1ef)]);},this['_id'][m(0x1fc)]=d=>{const r=m;if(d['key']=='Enter')this['_instanceServiceContainer']['selectionService'][r(0x224)]['id']=this[r(0x1f6)]['value'];else d[r(0x204)]==r(0x210)&&(this[r(0x1f6)][r(0x1e6)]=this['_instanceServiceContainer'][r(0x21a)][r(0x224)]?.['id']??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[r(0x209)],this['_propertiesService']['idProperty'],this[r(0x22e)]['selectionService']['selectedElements'],this['_propertiesService']);},this[m(0x228)][m(0x1fc)]=d=>{const s=m;if(d['key']==s(0x207))this['_instanceServiceContainer']['selectionService']['primarySelection']['content']=this['_content'][s(0x1e6)],this['_content']['title']=this[s(0x228)]['value'];else d['key']==s(0x210)&&(this[s(0x228)][s(0x1e6)]=this['_instanceServiceContainer']['selectionService']['primarySelection']?.['element']?.[s(0x1e2)]??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this['_contentRect'],this['_propertiesService'][s(0x1ed)],this[s(0x22e)]['selectionService'][s(0x1ee)],this[s(0x1e1)]),PropertyGridPropertyList[s(0x223)](this['_innerRect'],this['_propertiesService']['innerHtmlProperty'],this[s(0x22e)]['selectionService']['selectedElements'],this[s(0x1e1)]);};let c;this['_id'][m(0x1f4)]=d=>{c=this['_instanceServiceContainer']['selectionService']['primarySelection'];},this[m(0x1f6)]['onblur']=d=>{const t=m;if(c)c['id']=this['_id'][t(0x1e6)];c=null,PropertyGridPropertyList[t(0x223)](this['_idRect'],this[t(0x1e1)]['idProperty'],this[t(0x22e)]['selectionService']['selectedElements'],this[t(0x1e1)]);};}set[j(0x227)](c){const u=j;this[u(0x211)][u(0x227)]=c;}set['instanceServiceContainer'](c){const v=j,d=c;this['_instanceServiceContainer']=d,this['_selectionChangedHandler']?.['dispose'](),d?(this[v(0x1fa)]=d[v(0x21a)][v(0x214)]['on'](async f=>{const w=v;this['propertyGrid']['instanceServiceContainer']=d,await sleep(0x14),await this[w(0x201)](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton']['style'][v(0x1ff)]=v(0x1f1),this['_id']['value']='',this['_content']['value']='',this[v(0x1f6)][v(0x218)]=!![],this[v(0x228)][v(0x218)]=!![],this['_idRect'][v(0x206)]['background']='',this[v(0x1f8)]['style']['background']='',this[v(0x1f3)]['style']['background']='',this['_type']['value']=':host'),this['propertyGrid'][v(0x1f0)]=d;}async['_refreshHeaderForCurrentSelection'](c){const x=j;if(!c?.['selectionService']?.['primarySelection']||c[x(0x21a)][x(0x224)]?.[x(0x226)]){this['_configButton'][x(0x206)]['display']=x(0x1f1),this[x(0x1f6)][x(0x1e6)]='',this[x(0x228)]['value']='',this[x(0x1f6)]['disabled']=!![],this[x(0x228)]['disabled']=!![],this[x(0x209)][x(0x206)]['background']='',this[x(0x1f8)][x(0x206)]['background']='',this[x(0x1f3)][x(0x206)]['background']='',this[x(0x21c)]['value']=x(0x203),this[x(0x21c)]['title']=this[x(0x21c)][x(0x1e6)];return;}this[x(0x1f6)]['disabled']=![],this['_content'][x(0x218)]=![];const d=await this['serviceContainer']?.[x(0x1f2)](x(0x1e9),e=>e['hasConfigUi'](c['selectionService']['primarySelection']));d?this[x(0x1f7)]['style'][x(0x1ff)]=x(0x21e):this[x(0x1f7)][x(0x206)][x(0x1ff)]='none';c['selectionService']['primarySelection']?.[x(0x200)]==NodeType[x(0x1e5)]?this['_type'][x(0x1e6)]=c['selectionService'][x(0x224)]?.[x(0x216)]??'':this[x(0x21c)]['value']=c[x(0x21a)]['primarySelection']?.[x(0x1eb)]?.[x(0x222)]??'';this['_type']['title']=this['_type']['value'],this[x(0x1f6)][x(0x1e6)]=c['selectionService'][x(0x224)]?.['id']??'';if(c['selectionService']['primarySelection']?.['element']?.[x(0x200)]!=NodeType[x(0x1e5)])this['_content'][x(0x1e6)]=c['selectionService'][x(0x224)]?.[x(0x20c)]??'';else{if(c[x(0x21a)][x(0x224)]?.['element']?.[x(0x22a)]?.[x(0x202)]<=0x0)this[x(0x228)]['value']=c['selectionService'][x(0x224)]?.['content']??'';else this[x(0x228)]['value']='';}this[x(0x228)]['title']=this['_content']['value'],PropertyGridPropertyList[x(0x223)](this[x(0x209)],this[x(0x1e1)][x(0x22d)],c[x(0x21a)][x(0x1ee)],this[x(0x1e1)]),PropertyGridPropertyList[x(0x223)](this['_contentRect'],this[x(0x1e1)][x(0x1ed)],c['selectionService'][x(0x1ee)],this[x(0x1e1)]),PropertyGridPropertyList[x(0x223)](this[x(0x1f3)],this[x(0x1e1)][x(0x1ef)],c[x(0x21a)][x(0x1ee)],this['_propertiesService']);}[j(0x20f)](c,d,e){const y=j;let f;if(this[y(0x211)]['propertyContextMenuProvider'])f=this[y(0x211)][y(0x225)](d,e);if(!f)f=e['service'][y(0x1ec)](d,e);ContextMenu[y(0x1ea)](f,c);}}customElements[j(0x215)]('node-projects-web-component-designer-property-grid-with-header',PropertyGridWithHeader);