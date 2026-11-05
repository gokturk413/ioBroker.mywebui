const i=b;function a(){const z=['background','1388381fffdNp','_openContextMenu','getLastServiceWhereAsync','key','_instanceServiceContainer','disabled','selectionService','Element','55KnYusp','idRect','refreshIsSetElementAndEditorForDesignItems','27JOAupg','_contentRect','title','42mciRXf','children','showConfigClicked','preventDefault','instanceServiceContainer','_id','config','_idRect','_selectionChangedHandler','service','nodeType','_propertiesService','getContextMenu','node-projects-web-component-designer-property-grid-with-header','5658348HGbJyd','nodeName','setAttribute','1656660rZIztH','textContent','2fNzGcW','primarySelection','5GzsrKF','1922824jzVGrW','_refreshHeaderForCurrentSelection','dispose','_getDomElement','configUiService','attributeChangedCallback','serviceContainer','idProperty','none','_type','contentProperty','Escape','4003419WRjhPO','style','propertyGrid','oncontextmenu','innerHtmlProperty','isRootItem','observedAttributes','1588370UuURxM','_configButton','block','Enter','appearance','value','_content','selectedElements','hasConfigUi','display','3526182YBDbWz','content','onSelectionChanged','propertyContextMenuProvider','getConfigUi','_innerRect'];a=function(){return z;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x212))/0x1*(parseInt(h(0x1eb))/0x2)+parseInt(h(0x1fa))/0x3+parseInt(h(0x1e6))/0x4+-parseInt(h(0x1ed))/0x5*(parseInt(h(0x20b))/0x6)+parseInt(h(0x1d8))/0x7*(-parseInt(h(0x1ee))/0x8)+-parseInt(h(0x1d5))/0x9*(parseInt(h(0x201))/0xa)+-parseInt(h(0x1d2))/0xb*(parseInt(h(0x1e9))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe5b28));import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{sleep}from'../../helper/Helper.js';import{NodeType}from'../../item/NodeType.js';function b(c,d){c=c-0x1cf;const e=a();let f=e[c];return f;}import{PropertyGridPropertyList}from'./PropertyGridPropertyList.js';import{ContentAndIdPropertiesService}from'../../services/propertiesService/services/ContentAndIdPropertiesService.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';export class PropertyGridWithHeader extends BaseCustomWebComponentLazyAppend{static [i(0x200)]=[i(0x205)];static ['properties']={'appearance':String};get[i(0x205)](){return this['getAttribute']('appearance')==='modern'?'modern':'classic';}set['appearance'](c){const j=i;this[j(0x1e8)](j(0x205),c);}[i(0x1f3)](){const k=i;if(this[k(0x1fc)])this['propertyGrid'][k(0x205)]=this[k(0x205)];}static ['style']=css`
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
  <node-projects-web-component-designer-property-grid id="pg"></node-projects-web-component-designer-property-grid>`;['propertyGrid'];['_type'];['_id'];[i(0x207)];[i(0x1e0)];['_instanceServiceContainer'];['_idRect'];[i(0x1d6)];['_innerRect'];[i(0x1e3)];[i(0x202)];constructor(){const l=i;super(),this['_restoreCachedInititalValues'](),this[l(0x1f7)]=this[l(0x1f1)]('type'),this['_id']=this['_getDomElement']('id'),this[l(0x207)]=this['_getDomElement'](l(0x20c)),this[l(0x1fc)]=this[l(0x1f1)]('pg'),this[l(0x1fc)]['appearance']=this['appearance'],this['_idRect']=this['_getDomElement'](l(0x1d3)),this['_contentRect']=this['_getDomElement']('contentRect'),this[l(0x210)]=this[l(0x1f1)]('innerRect'),this[l(0x202)]=this['_getDomElement'](l(0x1de)),this['_configButton']['onclick']=async()=>{const m=l,d=await this[m(0x1f4)]?.[m(0x214)]('configUiService',async f=>await f['hasConfigUi'](this['_instanceServiceContainer'][m(0x1d0)]['primarySelection'])),e=await d[m(0x20f)](this['_instanceServiceContainer'][m(0x1d0)]['primarySelection']);this[m(0x1f4)]['globalContext'][m(0x1da)]['emit']({'designItem':this[m(0x216)]['selectionService'][m(0x1ec)],'configUi':e});},this['_propertiesService']=new ContentAndIdPropertiesService(),this[l(0x1df)][l(0x1fd)]=d=>{const n=l;d['preventDefault']();if(!this['_instanceServiceContainer'][n(0x1d0)][n(0x1ec)]?.[n(0x1ff)])this[n(0x213)](d,this['_instanceServiceContainer'][n(0x1d0)][n(0x208)],this['_propertiesService']['idProperty']);},this['_contentRect'][l(0x1fd)]=d=>{const o=l;d[o(0x1db)]();if(!this['_instanceServiceContainer']['selectionService']['primarySelection']?.[o(0x1ff)])this[o(0x213)](d,this['_instanceServiceContainer']['selectionService']['selectedElements'],this[o(0x1e3)][o(0x1f8)]);},this['_innerRect'][l(0x1fd)]=d=>{const p=l;d['preventDefault']();if(!this['_instanceServiceContainer']['selectionService'][p(0x1ec)]?.[p(0x1ff)])this[p(0x213)](d,this[p(0x216)][p(0x1d0)]['selectedElements'],this['_propertiesService']['innerHtmlProperty']);},this['_id']['onkeydown']=d=>{const q=l;if(d[q(0x215)]=='Enter')this[q(0x216)][q(0x1d0)][q(0x1ec)]['id']=this[q(0x1dd)][q(0x206)];else d['key']=='Escape'&&(this['_id']['value']=this[q(0x216)][q(0x1d0)][q(0x1ec)]?.['id']??'',d[q(0x1db)](),d['stopPropagation']());PropertyGridPropertyList[q(0x1d4)](this['_idRect'],this[q(0x1e3)]['idProperty'],this[q(0x216)][q(0x1d0)]['selectedElements'],this['_propertiesService']);},this['_content']['onkeydown']=d=>{const r=l;if(d[r(0x215)]==r(0x204))this[r(0x216)]['selectionService']['primarySelection']['content']=this[r(0x207)][r(0x206)],this[r(0x207)][r(0x1d7)]=this[r(0x207)]['value'];else d[r(0x215)]==r(0x1f9)&&(this['_content']['value']=this['_instanceServiceContainer'][r(0x1d0)]['primarySelection']?.['element']?.[r(0x1ea)]??'',d['preventDefault'](),d['stopPropagation']());PropertyGridPropertyList[r(0x1d4)](this[r(0x1d6)],this[r(0x1e3)]['contentProperty'],this['_instanceServiceContainer']['selectionService']['selectedElements'],this['_propertiesService']),PropertyGridPropertyList[r(0x1d4)](this['_innerRect'],this['_propertiesService']['innerHtmlProperty'],this[r(0x216)]['selectionService']['selectedElements'],this['_propertiesService']);};let c;this[l(0x1dd)]['onfocus']=d=>{const s=l;c=this['_instanceServiceContainer'][s(0x1d0)][s(0x1ec)];},this[l(0x1dd)]['onblur']=d=>{const t=l;if(c)c['id']=this['_id'][t(0x206)];c=null,PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[t(0x1df)],this[t(0x1e3)][t(0x1f5)],this[t(0x216)]['selectionService']['selectedElements'],this['_propertiesService']);};}set[i(0x1f4)](c){const u=i;this[u(0x1fc)][u(0x1f4)]=c;}set[i(0x1dc)](c){const v=i,d=c;this[v(0x216)]=d,this['_selectionChangedHandler']?.[v(0x1f0)](),d?(this['_selectionChangedHandler']=d[v(0x1d0)][v(0x20d)]['on'](async f=>{const w=v;this[w(0x1fc)][w(0x1dc)]=d,await sleep(0x14),await this['_refreshHeaderForCurrentSelection'](d);}),this['_refreshHeaderForCurrentSelection'](d)):(this['_configButton']['style']['display']='none',this[v(0x1dd)][v(0x206)]='',this['_content']['value']='',this['_id']['disabled']=!![],this[v(0x207)][v(0x1cf)]=!![],this[v(0x1df)][v(0x1fb)][v(0x211)]='',this['_contentRect']['style'][v(0x211)]='',this['_innerRect']['style'][v(0x211)]='',this[v(0x1f7)]['value']=':host'),this['propertyGrid']['instanceServiceContainer']=d;}async[i(0x1ef)](c){const x=i;if(!c?.[x(0x1d0)]?.[x(0x1ec)]||c['selectionService'][x(0x1ec)]?.[x(0x1ff)]){this['_configButton']['style'][x(0x20a)]=x(0x1f6),this['_id'][x(0x206)]='',this['_content']['value']='',this[x(0x1dd)]['disabled']=!![],this[x(0x207)]['disabled']=!![],this['_idRect']['style'][x(0x211)]='',this[x(0x1d6)][x(0x1fb)]['background']='',this[x(0x210)]['style'][x(0x211)]='',this['_type']['value']=':host',this['_type']['title']=this['_type']['value'];return;}this['_id']['disabled']=![],this[x(0x207)][x(0x1cf)]=![];const d=await this['serviceContainer']?.[x(0x214)](x(0x1f2),e=>e[x(0x209)](c[x(0x1d0)]['primarySelection']));d?this[x(0x202)][x(0x1fb)]['display']=x(0x203):this['_configButton']['style'][x(0x20a)]=x(0x1f6);c['selectionService'][x(0x1ec)]?.[x(0x1e2)]==NodeType[x(0x1d1)]?this['_type']['value']=c['selectionService'][x(0x1ec)]?.['name']??'':this[x(0x1f7)]['value']=c[x(0x1d0)]['primarySelection']?.['node']?.[x(0x1e7)]??'';this[x(0x1f7)][x(0x1d7)]=this[x(0x1f7)]['value'],this['_id'][x(0x206)]=c['selectionService'][x(0x1ec)]?.['id']??'';if(c[x(0x1d0)]['primarySelection']?.['element']?.[x(0x1e2)]!=NodeType['Element'])this['_content']['value']=c['selectionService']['primarySelection']?.['content']??'';else{if(c[x(0x1d0)][x(0x1ec)]?.['element']?.[x(0x1d9)]?.['length']<=0x0)this['_content'][x(0x206)]=c['selectionService'][x(0x1ec)]?.['content']??'';else this['_content']['value']='';}this['_content'][x(0x1d7)]=this['_content'][x(0x206)],PropertyGridPropertyList[x(0x1d4)](this['_idRect'],this['_propertiesService']['idProperty'],c[x(0x1d0)][x(0x208)],this['_propertiesService']),PropertyGridPropertyList[x(0x1d4)](this['_contentRect'],this['_propertiesService']['contentProperty'],c[x(0x1d0)]['selectedElements'],this[x(0x1e3)]),PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](this[x(0x210)],this[x(0x1e3)][x(0x1fe)],c['selectionService'][x(0x208)],this[x(0x1e3)]);}['_openContextMenu'](c,d,e){const y=i;let f;if(this['propertyGrid'][y(0x20e)])f=this['propertyGrid'][y(0x20e)](d,e);if(!f)f=e[y(0x1e1)][y(0x1e4)](d,e);ContextMenu['show'](f,c);}}customElements['define'](i(0x1e5),PropertyGridWithHeader);