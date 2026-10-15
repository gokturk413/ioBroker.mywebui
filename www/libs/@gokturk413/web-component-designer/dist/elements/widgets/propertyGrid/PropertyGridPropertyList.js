const w=b;function b(c,d){c=c-0x19e;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x1bd))/0x1*(-parseInt(v(0x1aa))/0x2)+parseInt(v(0x21d))/0x3*(-parseInt(v(0x1e7))/0x4)+parseInt(v(0x1ea))/0x5*(parseInt(v(0x21a))/0x6)+-parseInt(v(0x1a7))/0x7+parseInt(v(0x20d))/0x8+-parseInt(v(0x1cb))/0x9*(-parseInt(v(0x1d3))/0xa)+parseInt(v(0x1df))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6b010));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';function a(){const V=['903329WjKORx','desc','propertyGroupHover','2pPpHKJ','datalist','10px','createPropertyEditors','name','element','ondragover','onclick','createElements','dropOnProperty','<br>','propertyContextMenuProvider','clearValue','replaceAll','title','forSomeServicesTillResult','_rebuildElements','disabled','preventDefault','377501uqOohF','center','hideLabel','aria-label','property-actions','define','editor','displayName','key','append','_shouldCreateElements','propertyGroupClick','parse','pointer','501651ebcptj','dragOverOnProperty','extensionManager','length','input',',\x20propertytype:\x20','createElement','expandOrCollapsePropertyGroups','50VwRqjy','getAttribute','service','add','value','classic','_lastClassType','_div','types','createExtension','setAttribute','_extensions','3539800bCmpKW','_serviceContainer','dataTransfer','alignItems','refreshIsSetElementAndEditorForDesignItems','readonly','background','bindableObjectDragDropService','8fEiNXW','openContextMenu','type','16920mLXylE','propertyType','_propertiesService','_addCounter','properties','designItemsChanged','complex','addNew_label_','some','push','propertyGridExtensions','Enter','marginLeft','createEditor','width','_propertyMap','instanceServiceContainer','remove','fromStylesheet','refresh','border','getUnsetValue','onmouseenter','className','constructor','propertyGridDragDropService','click','_designItems','focus','getProperties','appendChild','hidden','content-wrapper','dropEffect','clickable','6079080YIXuWl','calc(100%\x20-\x2010px)','node-projects-property-grid-property-list','style','toggle','_onDrop','description','appearance','renamable','_restoreCachedInititalValues','textContent','getContextMenu','option','24qaXjlS','classList','none','643620OeTDVm','designerCanvas','attributeChangedCallback','7px','valueType','dispose','createPropertyGroups','1\x20/\x20-1','editor-control','openGroup','button','dragOverProperty','defaultValue'];a=function(){return V;};return a();}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[w(0x214)];[w(0x21f)](){const x=w;for(const {extension:c}of this[x(0x1de)])c['element'][x(0x1dd)](x(0x214),this[x(0x1d4)](x(0x214))??x(0x1d8));}[w(0x1da)];['_propertyMap']=new Map();['_serviceContainer'];[w(0x1ec)];['_designItems'];['_lastClassType'];[w(0x1ed)]=0x0;['_extensions']=[];[w(0x1a9)];[w(0x1c8)];[w(0x1b5)];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
    :host{
      display: block;
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
    }
    .content-wrapper {
      padding: .5em;
      display: grid;
      grid-template-columns: var(--wcd-property-grid-columns, 11px minmax(80px, auto) minmax(120px, 1fr));
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
    `;}constructor(c){const y=w;super(),this[y(0x216)](),this[y(0x1e0)]=c,this['_div']=document[y(0x1d1)]('div'),this[y(0x1da)]['className']=y(0x20a),this['shadowRoot'][y(0x208)](this[y(0x1da)]);}['setPropertiesService'](c){const z=w;if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this[z(0x1da)]),this[z(0x1f9)]['clear']();for(const {extension:d}of this['_extensions'])d[z(0x19f)]?.();this[z(0x1de)]=[];}}async[w(0x1b2)](c){const A=w;if(!this[A(0x1c7)](c))return!![];const d=await this['_propertiesService']?.[A(0x207)](c);return this[A(0x1ba)](c,d);}['_shouldCreateElements'](c){const B=w;if(!this[B(0x1ec)])return![];if(this['_propertyMap']['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode[B(0x21c)]&&(d!==RefreshMode['fullOnClassChange']||this[B(0x1d9)]!==c['element']['constructor']);}[w(0x1ba)](c,d){const C=w;this['_lastClassType']=c[C(0x1af)][C(0x202)],DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap']['clear']();for(const {extension:e}of this[C(0x1de)])e[C(0x19f)]?.();this['_extensions']=[];if(d?.[C(0x1ce)]){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}[w(0x1a0)](c){const D=w;let d=document[D(0x1d1)]('span');d['addEventListener'](D(0x204),()=>{const E=D;this[E(0x1d2)](c),d[E(0x21b)][E(0x211)]('expanded');}),d['innerHTML']=c['name'][D(0x1b7)]('\x0a',D(0x1b4)),d['className']='group-header',this[D(0x1da)][D(0x208)](d);let e=document[D(0x1d1)]('span');e['innerHTML']=c['description']??'',e[D(0x201)]='group-desc';this['propertyGroupHover']&&(d[D(0x200)]=()=>{if(this['propertyGroupHover'](c,'name'))d['setAttribute']('clickable','');else d['removeAttribute']('clickable');},d['onclick']=()=>{const F=D;if(this[F(0x1c8)])this['propertyGroupClick'](c,F(0x1ae));},e[D(0x200)]=()=>{const G=D;if(this[G(0x1a9)](c,G(0x1a8)))e['setAttribute']('clickable','');else e['removeAttribute'](G(0x20c));},e[D(0x1b1)]=()=>{const H=D;if(this[H(0x1c8)])this[H(0x1c8)](c,'desc');});this['_div']['appendChild'](e);for(const f of c[D(0x1ee)])this['createPropertyEditors'](f,!![]);}[w(0x1d2)](c){const I=w;for(let d of c[I(0x1ee)]){const e=this['_propertyMap']['get'](d);e['rowElement'][I(0x209)]=!e['rowElement'][I(0x209)];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g[I(0x1af)]['hidden']=e['rowElement']['hidden'];}}[w(0x1ad)](c,d){const J=w;let e,f;if(c[J(0x1f7)])e=c['createEditor'](c);else e=this[J(0x1e0)][J(0x1b9)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[J(0x1d1)]('div');g[J(0x201)]='property-row';if(c[J(0x1bf)])g['classList'][J(0x1d6)]('hide-label');let h=document['createElement']('div');h['className']=J(0x1c1);if(d)h['style'][J(0x1f6)]=J(0x1ac);h['style']['width']='20px',h['style']['height']='20px',h[J(0x210)]['display']='flex',h['style'][J(0x1e2)]=J(0x1be);let i=document['createElement'](J(0x1a4));i['type']=J(0x1a4),i['className']='property-status',i[J(0x217)]='⋯',i['setAttribute'](J(0x1c0),'Actions\x20for\x20'+(c[J(0x1c4)]??c[J(0x1ae)])),i[J(0x1bb)]=c['readonly']===!![],i[J(0x210)][J(0x1f8)]='7px',i['style']['height']=J(0x220),i['style'][J(0x1fe)]='1px\x20white\x20solid',i[J(0x210)]['cursor']=J(0x1ca);if(c['propertyType']!=PropertyType[J(0x1f0)])h['appendChild'](i);g[J(0x208)](h);c[J(0x1e4)]!==!![]&&(i['oncontextmenu']=j=>{const K=J;j[K(0x1bc)](),this[K(0x1e8)](j,c);},i['onclick']=j=>{const L=J;j['preventDefault'](),this[L(0x1e8)](j,c);});if(c[J(0x1e9)]=='addNew'){let j=e['element'];j['disabled']=!![],j['id']='addNew_input_'+ ++this['_addCounter'];let k=document['createElement']('input');f=k;d&&(k[J(0x210)][J(0x1f6)]='10px',k[J(0x210)][J(0x1f8)]=J(0x20e));k['value']=c['name'],k[J(0x1e9)]='text',k['id']=J(0x1f1)+this[J(0x1ed)],k['onkeyup']=l=>{const M=J;l[M(0x1c5)]==M(0x1f5)&&k['value']&&(c[M(0x1ae)]=k[M(0x1d7)],k[M(0x1bb)]=!![],j['disabled']=![],j[M(0x206)]());};if(c['service']['getPropertyNameSuggestions']){const l=c[J(0x1d5)]['getPropertyNameSuggestions'](null),m=document['createElement'](J(0x1ab));m['id']='addNew_'+this[J(0x1ed)]+'_datalist';for(let n of l){const o=document['createElement'](J(0x219));o[J(0x1d7)]=n,m[J(0x1c6)](o);}g['appendChild'](m),k['setAttribute']('list',m['id']);}g[J(0x208)](k);}else{if(c[J(0x1bf)])f=document['createElement']('span');else{if(!c[J(0x215)]){let p=document[J(0x1d1)]('label');f=p;if(d)p['style'][J(0x1f6)]='10px';p['htmlFor']=c[J(0x1ae)],p[J(0x217)]=c[J(0x1c4)]??c[J(0x1ae)],p[J(0x1b8)]=c[J(0x213)]??(c[J(0x1c4)]??c[J(0x1ae)])+'\x20(type:\x20'+c[J(0x1e9)]+(c['defaultValue']?',\x20default:\x20'+c[J(0x1a6)]:'')+J(0x1d0)+c[J(0x1eb)]+')',p['ondragleave']=q=>this['_onDragLeave'](q,c,p),p[J(0x1b0)]=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g['appendChild'](p);}else{let q=document[J(0x1d1)](J(0x1cf));f=q;d&&(q['style'][J(0x1f6)]='10px',q['style']['width']='calc(100%\x20-\x2010px)');q['id']='label_'+c[J(0x1ae)];let r=e['element'];q[J(0x1d7)]=c[J(0x1ae)],q['onkeyup']=async t=>{const N=J;if(t['key']=='Enter'&&q[N(0x1d7)]){const u=this['_designItems'][0x0][N(0x1a3)]('rename\x20property\x20name\x20from\x20\x27'+c['name']+'\x27\x20to\x20\x27'+q[N(0x1d7)]+'\x27');c['service'][N(0x1b6)](this['_designItems'],c,'all'),c[N(0x1ae)]=q['value'],await c[N(0x1d5)]['setValue'](this['_designItems'],c,r[N(0x1d7)]),u['commit'](),this[N(0x205)][0x0][N(0x1fa)][N(0x21e)][N(0x1cd)]['refreshAllExtensions'](this['_designItems']);}},g[J(0x208)](q);}}}if(c[J(0x1ae)])e['element']['id']=c[J(0x1ae)];if(e['element']instanceof HTMLElement)e['element']['classList']['add'](J(0x1a2));if(c[J(0x1bf)])e['element'][J(0x210)]['gridColumn']='2\x20/\x204';f['classList']['add']('property-label'),g[J(0x208)](e[J(0x1af)]),this[J(0x1da)]['appendChild'](g);for(const t of this[J(0x1e0)][J(0x1f4)]){const u=t[J(0x1dc)](c);u&&(u['element'][J(0x1dd)](J(0x214),this[J(0x1d4)](J(0x214))??J(0x1d8)),u['element'][J(0x210)]['gridColumn']=J(0x1a1),this['_extensions'][J(0x1f3)]({'property':c,'extension':u}),this[J(0x1da)][J(0x208)](u['element']));}this['_propertyMap']['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const O=w;c['preventDefault'](),e[O(0x21b)][O(0x1fb)]('dragOverProperty');}['_onDragOver'](c,d,e){const P=w;c['preventDefault']();const f=c[P(0x1e1)][P(0x1db)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h[P(0x1cc)](c,d,this[P(0x205)]);(i??'none')!=P(0x21c)?(e[P(0x21b)]['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=i):e['classList'][P(0x1fb)](P(0x1a5));}}const g=c[P(0x1e1)][P(0x1db)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[P(0x1e0)][P(0x203)];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??P(0x21c))!=P(0x21c)?(e[P(0x21b)]['add'](P(0x1a5)),c[P(0x1e1)][P(0x20b)]=k):e['classList'][P(0x1fb)]('dragOverProperty');}}}[w(0x212)](c,d,e){const Q=w;c[Q(0x1bc)](),e[Q(0x21b)]['remove']('dragOverProperty');const f=c[Q(0x1e1)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[Q(0x1c9)](f),i=this[Q(0x1e0)][Q(0x1e6)];i&&i[Q(0x1b3)](c,d,h,this['_designItems']);}const g=c[Q(0x1e1)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[Q(0x1e0)]['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}['openContextMenu'](c,d){const R=w;let e;if(this[R(0x1b5)])e=this['propertyContextMenuProvider'](this['_designItems'],d);if(!e)e=d['service'][R(0x218)](this['_designItems'],d);for(const {property:f,extension:g}of this[R(0x1de)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[R(0x205)])??[]];ContextMenu['show'](e,c);}[w(0x1ef)](c){const S=w;this[S(0x205)]=c;for(const {extension:d}of this['_extensions'])d[S(0x1fd)](c);for(let e of this['_propertyMap']){e[0x1]['editor'][S(0x1ef)](c);}}['refreshForDesignItems'](c){const T=w;for(const {extension:d}of this[T(0x1de)])d['refresh'](c);for(let e of this[T(0x1f9)]){PropertyGridPropertyList[T(0x1e3)](e[0x1]['isSetElement'],e[0x0],c,this[T(0x1ec)],e[0x1][T(0x1c3)]);}}static[w(0x1e3)](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f['isSet'](e,d);c['dataset'][U(0x19e)]=h;let i=f['getValue'](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType[U(0x21c)])c['style'][U(0x1e5)]='',i=f[U(0x1ff)](e,d);else{if(h==ValueType['all'])c[U(0x210)][U(0x1e5)]='white';else{if(h==ValueType[U(0x1f2)])c[U(0x210)]['background']='gray';else{if(h==ValueType['bound'])c[U(0x210)]['background']='orange';else h==ValueType[U(0x1fc)]&&(i=f['getUnsetValue'](e,d),c[U(0x210)][U(0x1e5)]='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements[w(0x1c2)](w(0x20f),PropertyGridPropertyList);