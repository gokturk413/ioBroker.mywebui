const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x231))/0x1*(parseInt(v(0x1d2))/0x2)+parseInt(v(0x237))/0x3+-parseInt(v(0x1d7))/0x4+-parseInt(v(0x20f))/0x5+-parseInt(v(0x1dc))/0x6*(-parseInt(v(0x23c))/0x7)+parseInt(v(0x1db))/0x8*(-parseInt(v(0x21c))/0x9)+-parseInt(v(0x238))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x356dc));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const V=['12px','oncontextmenu','_lastClassType','displayName','_onDragOver','input','openContextMenu','property-row','pointer','replaceAll','disabled','fullOnClassChange','rename\x20property\x20name\x20from\x20\x27','editor','option','_extensions','title','createElement','ondrop','2rtZKbE','indexOf','set','name','some','609708QYjVpl','label','cursor','rowElement','152IADKWb','6cKgrtO','_div','all',',\x20default:\x20','expandOrCollapsePropertyGroups','type','onclick','properties','dropOnProperty','width','show','property-actions','_serviceContainer','removeAllChildnodes','_propertiesService','setValue','addNew_label_','toggle','propertyGroupClick','classList','click','constructor','getRefreshMode','gridColumn','addNew','style','expanded','refreshValueWithoutNotification','_rebuildElements','getContextMenu','get','createPropertyEditors','value','propertyGroupHover','add','desc','10px','yellow','dragOverProperty','_datalist','2px','dropEffect','htmlFor','renamable','service','getPropertyNameSuggestions','removeAttribute','propertyGridDragDropService','propertyType','_shouldCreateElements','getData','479410CXlqMA','onkeyup','list','createPropertyGroups','hidden','shadowRoot','_restoreCachedInititalValues','description','instanceServiceContainer','setPropertiesService','refreshAllExtensions','propertyGridExtensions','dataset','81720hFNBjf','text','_onDrop','setAttribute','_propertyMap','dataTransfer','propertyContextMenuProvider','appearance','div','dispose','appendChild','span','innerHTML','designerCanvas','background','dragOverOnProperty','size','onmouseenter','className','observedAttributes','marginLeft','120922mGsyGY','_designItems','getEditorForProperty','getAttribute','designItemsChanged','element','1226811ZqXbcF','1678220rkJSFz','textContent','_addCounter',',\x20propertytype:\x20','1943452sJXtqn','bindableObjectDragDropService','forSomeServicesTillResult','gray','none','refreshIsSetElementAndEditorForDesignItems','length','createElements','_onDragLeave','push','flex','20px','hideLabel','types','fromStylesheet','define','remove','hide-label','preventDefault','readonly','button'];a=function(){return V;};return a();}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';function b(c,d){c=c-0x1c1;const e=a();let f=e[c];return f;}import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x22f)]=['appearance'];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this[x(0x1ce)])c['element']['setAttribute']('appearance',this['getAttribute']('appearance')??'classic');}[w(0x1dd)];[w(0x220)]=new Map();['_serviceContainer'];[w(0x1ea)];[w(0x232)];['_lastClassType'];[w(0x23a)]=0x0;[w(0x1ce)]=[];[w(0x1fd)];[w(0x1ee)];['propertyContextMenuProvider'];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
    :host{
      display: block;
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
    }
    .content-wrapper {
      padding: .5em;
      display: grid;
      grid-template-columns: var(--wcd-property-grid-columns, 18px minmax(80px, auto) minmax(120px, 1fr));
      row-gap: var(--wcd-property-grid-row-gap, 0);
      align-items: center;
      grid-auto-rows: minmax(24px, auto);
      align-items: center;
    }
    .property-row { display: contents; }
    .property-row[hidden] { display: none; }
    .property-status { padding: 0; margin: 0; font-size: 0; }
    label, input, select {
      display: inline-block;
      color: var(--wcd-color-text, var(--text-color, white));
      background: transparent;
      margin: 2px 0;
      padding: 0 2px 0 4px;
      width: 110px;
      white-space: nowrap;
    }
    label, .style-label {
      box-sizing: border-box;
      display: inline-block;
      font-size: var(--wcd-property-grid-label-font-size, 13px);
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 2px;
    }
    input, select {
      padding:0;
      padding-left: 3px;
    }
    input, select {
      border: none;
    }
    .editor-control, .property-row > input, .property-row > select {
      border: 1px solid var(--wcd-input-border-color, var(--input-border-color, var(--wcd-color-border, #596c7a)));
      border-radius: var(--wcd-property-grid-editor-border-radius, 0);
    }
    .editor-control, input, select {
      height: var(--wcd-property-grid-editor-height, 24px);
      box-sizing: border-box;
      font-size: 11px;
      width: 100%;
      margin: 0;
      /*min-width: 0;*/
    }
    .editor-control:focus, input:focus, select:focus {
      outline: none;
      box-shadow: none;
    }
    /*input {
      margin-left: 4px;
    }*/
    .editor-control[disabled], input[disabled], select[disabled] {
      color: var(--wcd-color-text-muted, #BDBDBD);
    }
    select {
      background: transparent;
    }
    select:focus option {
      color: var(--wcd-property-grid-select-option-color, black);
    }
    .unset-value {
      color: var(--wcd-property-grid-unset-value-color, var(--wcd-color-text-muted, lightslategray))
    }
    .unset-value > * {
      color: var(--wcd-property-grid-unset-value-color, var(--wcd-color-text-muted, lightslategray))
    }
    .unset-value:focus {
      color: var(--wcd-color-text, var(--text-color, white))
    }
    .group-header {
      grid-column: 1 / 3;
      font-size: 10px;
      font-family: monospace;
    }
    .group-header[clickable]:hover {
      cursor:pointer;
      color: var(--wcd-property-grid-group-header-hover-color, orange);
      text-decoration: underline;
    }
    .group-header::after{
      content: " ▾";
      font-size: 14px;
    }
    .group-header.expanded::after{
      content: " ▴";
      font-size: 14px;
    }
    .group-desc {
      display: inline-flex;
      flex-direction: row-reverse;
      font-size: 10px;
      text-decoration: underline;
    }
    .group-desc[clickable]:hover {
      cursor:pointer;
      color: var(--wcd-property-grid-group-header-hover-color, orange);
      text-decoration: underline;
    }
    .dragOverProperty {
      outline: 2px dashed var(--wcd-property-grid-drop-target-color, orange);
      outline-offset: -2px;
    }
    :host([appearance="modern"]) {
      font-family: var(--wcd-property-grid-font-family, system-ui, sans-serif);
      color: var(--_wcd-pg-text);
    }
    :host([appearance="modern"]) .content-wrapper {
      padding: 0;
      grid-template-columns: minmax(0, 1fr) auto;
      grid-auto-rows: auto;
    }
    :host([appearance="modern"]) .property-row {
      display: grid;
      grid-column: 1 / -1;
      grid-template-columns: minmax(0, .85fr) minmax(0, 1fr) 28px;
      align-items: center;
      min-height: var(--wcd-property-grid-row-height, 40px);
      padding: 5px 12px;
      gap: 8px;
      border-bottom: 1px solid var(--_wcd-pg-border);
    }
    :host([appearance="modern"]) .property-row[hidden] { display: none; }
    :host([appearance="modern"]) .property-row:hover,
    :host([appearance="modern"]) .property-row:focus-within { background: var(--_wcd-pg-hover); }
    :host([appearance="modern"]) .property-row > * { min-width: 0; }
    :host([appearance="modern"]) .property-label { grid-column: 1; grid-row: 1; color: inherit; }
    :host([appearance="modern"]) .editor-control { grid-column: 2; grid-row: 1; }
    :host([appearance="modern"]) .property-row.hide-label .editor-control { grid-column: 1 / 3 !important; }
    :host([appearance="modern"]) .property-actions {
      grid-column: 3;
      grid-row: 1;
      justify-content: center;
      width: 28px !important;
      height: 28px !important;
      margin-left: 0 !important;
    }
    :host([appearance="modern"]) .property-status {
      position: relative;
      width: 26px !important;
      height: 26px !important;
      background: transparent !important;
      border: none !important;
      border-radius: 4px;
      color: var(--_wcd-pg-muted);
      font-size: 18px;
    }
    :host([appearance="modern"]) .property-status:hover { background: var(--_wcd-pg-raised) !important; }
    :host([appearance="modern"]) .property-status::after {
      content: '';
      position: absolute;
      top: 3px;
      right: 1px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
    }
    :host([appearance="modern"]) .property-status[data-value-type="all"]::after { background: var(--_wcd-pg-muted); }
    :host([appearance="modern"]) .property-status[data-value-type="some"]::after { background: var(--_wcd-pg-muted); }
    :host([appearance="modern"]) .property-status[data-value-type="bound"]::after { background: var(--_wcd-pg-accent); }
    :host([appearance="modern"]) .property-status[data-value-type="fromStylesheet"]::after { background: var(--wcd-property-grid-stylesheet-indicator-color, #b79735); }
    :host([appearance="modern"]) input,
    :host([appearance="modern"]) select,
    :host([appearance="modern"]) .editor-control {
      color: inherit;
      font-size: 13px;
      height: var(--wcd-property-grid-editor-height, 28px);
      border-color: var(--wcd-input-border-color, transparent);
      border-radius: var(--wcd-property-grid-editor-border-radius, 4px);
    }
    :host([appearance="modern"]) input:not([type="checkbox"]),
    :host([appearance="modern"]) select { padding-inline: 6px; }
    :host([appearance="modern"]) input:hover,
    :host([appearance="modern"]) select:hover { border-color: var(--wcd-input-border-color, var(--_wcd-pg-border)); }
    :host([appearance="modern"]) input[type="checkbox"] { width: 16px; height: 16px; accent-color: var(--_wcd-pg-accent); }
    :host([appearance="modern"]) input:focus-visible,
    :host([appearance="modern"]) select:focus-visible,
    :host([appearance="modern"]) button:focus-visible {
      outline: 2px solid var(--wcd-color-focus, var(--_wcd-pg-accent));
      outline-offset: 1px;
    }
    :host([appearance="modern"]) .unset-value { color: var(--wcd-property-grid-unset-value-color, var(--_wcd-pg-muted)); }
    :host([appearance="modern"]) .group-header {
      grid-column: 1;
      padding: 10px 12px;
      font: inherit;
      font-weight: 600;
      color: var(--_wcd-pg-text);
      background: var(--_wcd-pg-raised);
    }
    :host([appearance="modern"]) .group-desc { padding-right: 12px; font-size: 12px; }
    `;}constructor(c){const y=w;super(),this[y(0x215)](),this['_serviceContainer']=c,this[y(0x1dd)]=document['createElement'](y(0x224)),this[y(0x1dd)]['className']='content-wrapper',this[y(0x214)]['appendChild'](this[y(0x1dd)]);}[w(0x218)](c){const z=w;if(this[z(0x1ea)]!=c){this['_propertiesService']=c,DomHelper[z(0x1e9)](this[z(0x1dd)]),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this[z(0x1ce)]=[];}}async[w(0x243)](c){const A=w;if(!this[A(0x20d)](c))return!![];const d=await this['_propertiesService']?.['getProperties'](c);return this[A(0x1f8)](c,d);}[w(0x20d)](c){const B=w;if(!this['_propertiesService'])return![];if(this['_propertyMap'][B(0x22c)]==0x0)return!![];const d=this[B(0x1ea)][B(0x1f2)](c);return d!==RefreshMode['none']&&(d!==RefreshMode[B(0x1ca)]||this['_lastClassType']!==c['element']['constructor']);}['_rebuildElements'](c,d){const C=w;this[C(0x1c1)]=c[C(0x236)][C(0x1f1)],DomHelper['removeAllChildnodes'](this[C(0x1dd)]),this[C(0x220)]['clear']();for(const {extension:e}of this[C(0x1ce)])e[C(0x225)]?.();this[C(0x1ce)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this[C(0x212)](f);else this[C(0x1fb)](f);}return!![];}return![];}[w(0x212)](c){const D=w;let d=document['createElement']('span');d['addEventListener'](D(0x1f0),()=>{const E=D;this['expandOrCollapsePropertyGroups'](c),d['classList'][E(0x1ed)](E(0x1f6));}),d['innerHTML']=c[D(0x1d5)][D(0x1c8)]('\x0a','<br>'),d[D(0x22e)]='group-header',this[D(0x1dd)]['appendChild'](d);let e=document['createElement'](D(0x227));e[D(0x228)]=c[D(0x216)]??'',e['className']='group-desc';this['propertyGroupHover']&&(d[D(0x22d)]=()=>{if(this['propertyGroupHover'](c,'name'))d['setAttribute']('clickable','');else d['removeAttribute']('clickable');},d[D(0x1e2)]=()=>{const F=D;if(this[F(0x1ee)])this[F(0x1ee)](c,F(0x1d5));},e['onmouseenter']=()=>{const G=D;if(this[G(0x1fd)](c,G(0x1ff)))e[G(0x21f)]('clickable','');else e[G(0x20a)]('clickable');},e[D(0x1e2)]=()=>{const H=D;if(this[H(0x1ee)])this['propertyGroupClick'](c,'desc');});this[D(0x1dd)][D(0x226)](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}[w(0x1e0)](c){const I=w;for(let d of c[I(0x1e3)]){const e=this[I(0x220)][I(0x1fa)](d);e[I(0x1da)][I(0x213)]=!e[I(0x1da)]['hidden'];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g['element'][I(0x213)]=e[I(0x1da)]['hidden'];}}[w(0x1fb)](c,d){const J=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this['_serviceContainer'][J(0x23e)]('propertyEditorTypesService',g=>g[J(0x233)](c));if(e){const g=document['createElement'](J(0x224));g['className']=J(0x1c6);if(c['hideLabel'])g['classList'][J(0x1fe)](J(0x24d));let h=document['createElement'](J(0x224));h['className']=J(0x1e7);if(d)h['style'][J(0x230)]=J(0x200);h[J(0x1f5)]['width']=J(0x247),h[J(0x1f5)]['height']=J(0x247),h[J(0x1f5)]['display']=J(0x246),h[J(0x1f5)]['alignItems']='center';let i=document['createElement'](J(0x250));i['type']='button',i['className']='property-status',i[J(0x239)]='⋯',i['setAttribute']('aria-label','Actions\x20for\x20'+(c[J(0x1c2)]??c['name'])),i[J(0x1c9)]=c[J(0x24f)]===!![],i['style'][J(0x1e5)]=J(0x251),i[J(0x1f5)]['height']=J(0x251),i[J(0x1f5)]['borderRadius']=J(0x204),i['style']['border']='1px\x20white\x20solid',i['style'][J(0x1d9)]=J(0x1c7);if(c[J(0x20c)]!=PropertyType['complex'])h['appendChild'](i);g['appendChild'](h);c['readonly']!==!![]&&(i[J(0x252)]=j=>{const K=J;j[K(0x24e)](),this['openContextMenu'](j,c);},i['onclick']=j=>{const L=J;j[L(0x24e)](),this['openContextMenu'](j,c);});if(c[J(0x1e1)]==J(0x1f4)){let j=e['element'];j[J(0x1c9)]=!![],j['id']='addNew_input_'+ ++this[J(0x23a)];let k=document['createElement'](J(0x1c4));f=k;d&&(k[J(0x1f5)]['marginLeft']='10px',k['style']['width']='calc(100%\x20-\x2010px)');k[J(0x1fc)]=c['name'],k['type']=J(0x21d),k['id']=J(0x1ec)+this['_addCounter'],k[J(0x210)]=l=>{const M=J;l['key']=='Enter'&&k['value']&&(c[M(0x1d5)]=k['value'],k[M(0x1c9)]=!![],j[M(0x1c9)]=![],j['focus']());};if(c['service'][J(0x209)]){const l=c['service']['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']='addNew_'+this['_addCounter']+J(0x203);for(let n of l){const o=document[J(0x1d0)](J(0x1cd));o['value']=n,m['append'](o);}g[J(0x226)](m),k['setAttribute'](J(0x211),m['id']);}g['appendChild'](k);}else{if(c[J(0x248)])f=document['createElement'](J(0x227));else{if(!c[J(0x207)]){let p=document[J(0x1d0)](J(0x1d8));f=p;if(d)p[J(0x1f5)][J(0x230)]=J(0x200);p[J(0x206)]=c[J(0x1d5)],p[J(0x239)]=c[J(0x1c2)]??c[J(0x1d5)],p[J(0x1cf)]=c[J(0x216)]??(c['displayName']??c[J(0x1d5)])+'\x20(type:\x20'+c[J(0x1e1)]+(c['defaultValue']?J(0x1df)+c['defaultValue']:'')+J(0x23b)+c[J(0x20c)]+')',p['ondragleave']=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[J(0x1d1)]=q=>this[J(0x21e)](q,c,p),g['appendChild'](p);}else{let q=document[J(0x1d0)]('input');f=q;d&&(q[J(0x1f5)]['marginLeft']=J(0x200),q[J(0x1f5)]['width']='calc(100%\x20-\x2010px)');q['id']='label_'+c['name'];let r=e['element'];q['value']=c['name'],q[J(0x210)]=async t=>{const N=J;if(t['key']=='Enter'&&q['value']){const u=this['_designItems'][0x0]['openGroup'](N(0x1cb)+c['name']+'\x27\x20to\x20\x27'+q[N(0x1fc)]+'\x27');c['service']['clearValue'](this['_designItems'],c,'all'),c[N(0x1d5)]=q['value'],await c[N(0x208)][N(0x1eb)](this[N(0x232)],c,r[N(0x1fc)]),u['commit'](),this[N(0x232)][0x0][N(0x217)][N(0x229)]['extensionManager'][N(0x219)](this[N(0x232)]);}},g[J(0x226)](q);}}}if(c['name'])e[J(0x236)]['id']=c[J(0x1d5)];if(e['element']instanceof HTMLElement)e['element']['classList']['add']('editor-control');if(c[J(0x248)])e['element'][J(0x1f5)]['gridColumn']='2\x20/\x204';f[J(0x1ef)]['add']('property-label'),g['appendChild'](e[J(0x236)]),this['_div']['appendChild'](g);for(const t of this[J(0x1e8)][J(0x21a)]){const u=t['createExtension'](c);u&&(u[J(0x236)]['setAttribute'](J(0x223),this[J(0x234)](J(0x223))??'classic'),u['element']['style'][J(0x1f3)]='1\x20/\x20-1',this['_extensions'][J(0x245)]({'property':c,'extension':u}),this['_div'][J(0x226)](u[J(0x236)]));}this[J(0x220)][J(0x1d4)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x244)](c,d,e){const O=w;c['preventDefault'](),e['classList'][O(0x24c)](O(0x202));}[w(0x1c3)](c,d,e){const P=w;c[P(0x24e)]();const f=c[P(0x221)]['types'][P(0x1d3)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][P(0x23d)];if(h){const i=h[P(0x22b)](c,d,this['_designItems']);(i??P(0x240))!='none'?(e[P(0x1ef)]['add']('dragOverProperty'),c['dataTransfer'][P(0x205)]=i):e['classList']['remove'](P(0x202));}}const g=c['dataTransfer'][P(0x249)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[P(0x1e8)]['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this[P(0x232)]);(k??P(0x240))!='none'?(e[P(0x1ef)][P(0x1fe)]('dragOverProperty'),c[P(0x221)][P(0x205)]=k):e[P(0x1ef)][P(0x24c)]('dragOverProperty');}}}['_onDrop'](c,d,e){const Q=w;c['preventDefault'](),e[Q(0x1ef)][Q(0x24c)](Q(0x202));const f=c[Q(0x221)][Q(0x20e)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer']['bindableObjectDragDropService'];i&&i['dropOnProperty'](c,d,h,this[Q(0x232)]);}const g=c[Q(0x221)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[Q(0x1e8)][Q(0x20b)];k&&k[Q(0x1e4)](c,d,j,this[Q(0x232)]);}}[w(0x1c5)](c,d){const R=w;let e;if(this[R(0x222)])e=this[R(0x222)](this[R(0x232)],d);if(!e)e=d[R(0x208)][R(0x1f9)](this[R(0x232)],d);for(const {property:f,extension:g}of this[R(0x1ce)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu[R(0x1e6)](e,c);}['designItemsChanged'](c){const S=w;this[S(0x232)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][S(0x1cc)][S(0x235)](c);}}['refreshForDesignItems'](c){const T=w;for(const {extension:d}of this[T(0x1ce)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[T(0x241)](e[0x1]['isSetElement'],e[0x0],c,this[T(0x1ea)],e[0x1]['editor']);}}static[w(0x241)](c,d,e,f,g){const U=w;if(e&&e[U(0x242)]){let h=f['isSet'](e,d);c[U(0x21b)]['valueType']=h;let i=f['getValue'](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType[U(0x240)])c[U(0x1f5)]['background']='',i=f['getUnsetValue'](e,d);else{if(h==ValueType[U(0x1de)])c['style'][U(0x22a)]='white';else{if(h==ValueType[U(0x1d6)])c[U(0x1f5)]['background']=U(0x23f);else{if(h==ValueType['bound'])c['style'][U(0x22a)]='orange';else h==ValueType[U(0x24a)]&&(i=f['getUnsetValue'](e,d),c[U(0x1f5)]['background']=U(0x201));}}}g?.[U(0x1f7)](h,i);}else c['style']['background']='';}}customElements[w(0x24b)]('node-projects-property-grid-property-list',PropertyGridPropertyList);