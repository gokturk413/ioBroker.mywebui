function b(c,d){c=c-0xb0;const e=a();let f=e[c];return f;}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xe6))/0x1*(parseInt(v(0xe1))/0x2)+parseInt(v(0xb7))/0x3+-parseInt(v(0xbc))/0x4+parseInt(v(0x12f))/0x5+parseInt(v(0xd2))/0x6*(parseInt(v(0x10d))/0x7)+parseInt(v(0x12b))/0x8+parseInt(v(0xcc))/0x9*(-parseInt(v(0xc3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x453b2));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';function a(){const V=['value','setValue','classList','parse','2637enpHLa','getProperties','dragOverOnProperty','length','clear','Enter','60hCdcWR','none','propertyGroupHover','onmouseenter','_propertyMap','title','appendChild','getUnsetValue','removeAllChildnodes','addNew_input_','Actions\x20for\x20','type','refreshIsSetElementAndEditorForDesignItems','_div','designerCanvas','21198BTnaTC','editor','_designItems','datalist','innerHTML','36wSMAMj','12px','height','commit','1px\x20white\x20solid','createPropertyEditors','displayName','createEditor','dataTransfer','hideLabel','createPropertyGroups','center','size','remove','style','expandOrCollapsePropertyGroups','borderRadius','getAttribute','setAttribute','_serviceContainer','getValue','readonly','refreshForDesignItems','hide-label','properties','focus','appearance','_onDrop','property-label','name','textContent','clickable','node-projects-property-grid-property-list','1\x20/\x20-1','_propertiesService','disabled','border','bindableObjectDragDropService','dragOverProperty','330631xYezmi','propertiesService','click','background','getData','flex','get','ondragover','_onDragLeave','fullOnClassChange','\x27\x20to\x20\x27','_lastClassType','_addCounter','removeAttribute','propertyGroupClick','gray','div','gridColumn','label','span','classic','className','width','designItemsChanged','10px','_extensions','\x20(type:\x20','20px','hidden','bound','938712GscOwB','orange','preventDefault','valueType','1059340rIcYtD','_onDragOver','propertyContextMenuProvider','show','defaultValue','element','input','content-wrapper','calc(100%\x20-\x2010px)','expanded','createElements','marginLeft','all','append','clearValue','ondragleave','onclick','group-desc','service','_datalist','constructor','addNew_label_','openContextMenu','fromStylesheet','574317oymnov','complex','editor-control','option','property-row','195076hbgwDG','getPropertyNameSuggestions','<br>','description','getEditorForProperty','add','group-header','35570IxppIV','createElement','push','dataset','addEventListener'];a=function(){return V;};return a();}import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[w(0x100)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this['_extensions'])c[x(0x134)][x(0xf8)]('appearance',this[x(0xf7)]('appearance')??x(0x121));}[w(0xdf)];['_propertyMap']=new Map();['_serviceContainer'];['_propertiesService'];[w(0xe3)];['_lastClassType'];[w(0x119)]=0x0;[w(0x126)]=[];['propertyGroupHover'];[w(0x11b)];[w(0x131)];get[w(0x10e)](){return this['_propertiesService'];}static get[w(0xf4)](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this['_div']=document['createElement']('div'),this['_div'][y(0x122)]=y(0x136),this['shadowRoot'][y(0xd8)](this['_div']);}['setPropertiesService'](c){const z=w;if(this['_propertiesService']!=c){this[z(0x108)]=c,DomHelper[z(0xda)](this[z(0xdf)]),this['_propertyMap']['clear']();for(const {extension:d}of this[z(0x126)])d['dispose']?.();this['_extensions']=[];}}async[w(0x139)](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x108)]?.[A(0xcd)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=w;if(!this['_propertiesService'])return![];if(this[B(0xd6)][B(0xf2)]==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode[B(0x116)]||this[B(0x118)]!==c['element'][B(0xb3)]);}['_rebuildElements'](c,d){const C=w;this['_lastClassType']=c['element']['constructor'],DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap'][C(0xd0)]();for(const {extension:e}of this[C(0x126)])e['dispose']?.();this['_extensions']=[];if(d?.[C(0xcf)]){for(let f of d){if(C(0xfe)in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}[w(0xf0)](c){const D=w;let d=document[D(0xc4)](D(0x120));d[D(0xc7)](D(0x10f),()=>{const E=D;this['expandOrCollapsePropertyGroups'](c),d[E(0xca)]['toggle'](E(0x138));}),d['innerHTML']=c['name']['replaceAll']('\x0a',D(0xbe)),d['className']=D(0xc2),this['_div'][D(0xd8)](d);let e=document['createElement'](D(0x120));e[D(0xe5)]=c['description']??'',e['className']=D(0xb0);this[D(0xd4)]&&(d[D(0xd5)]=()=>{const F=D;if(this['propertyGroupHover'](c,'name'))d[F(0xf8)]('clickable','');else d[F(0x11a)]('clickable');},d['onclick']=()=>{const G=D;if(this[G(0x11b)])this['propertyGroupClick'](c,'name');},e['onmouseenter']=()=>{const H=D;if(this[H(0xd4)](c,'desc'))e[H(0xf8)](H(0x105),'');else e[H(0x11a)](H(0x105));},e[D(0x13f)]=()=>{if(this['propertyGroupClick'])this['propertyGroupClick'](c,'desc');});this[D(0xdf)][D(0xd8)](e);for(const f of c['properties'])this[D(0xeb)](f,!![]);}[w(0xf5)](c){const I=w;for(let d of c[I(0xfe)]){const e=this[I(0xd6)][I(0x113)](d);e['rowElement']['hidden']=!e['rowElement'][I(0x129)];for(const {property:f,extension:g}of this[I(0x126)])if(f===d)g[I(0x134)][I(0x129)]=e['rowElement']['hidden'];}}['createPropertyEditors'](c,d){const J=w;let e,f;if(c[J(0xed)])e=c[J(0xed)](c);else e=this[J(0xf9)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g[J(0xc0)](c));if(e){const g=document['createElement'](J(0x11d));g['className']=J(0xbb);if(c['hideLabel'])g[J(0xca)]['add'](J(0xfd));let h=document['createElement'](J(0x11d));h['className']='property-actions';if(d)h[J(0xf4)]['marginLeft']=J(0x125);h['style']['width']=J(0x128),h['style'][J(0xe8)]='20px',h[J(0xf4)]['display']=J(0x112),h[J(0xf4)]['alignItems']=J(0xf1);let i=document[J(0xc4)]('button');i['type']='button',i[J(0x122)]='property-status',i[J(0x104)]='⋯',i[J(0xf8)]('aria-label',J(0xdc)+(c['displayName']??c['name'])),i[J(0x109)]=c[J(0xfb)]===!![],i['style'][J(0x123)]=J(0xe7),i['style'][J(0xe8)]=J(0xe7),i[J(0xf4)][J(0xf6)]='2px',i['style'][J(0x10a)]=J(0xea),i['style']['cursor']='pointer';if(c['propertyType']!=PropertyType[J(0xb8)])h[J(0xd8)](i);g['appendChild'](h);c['readonly']!==!![]&&(i['oncontextmenu']=j=>{const K=J;j['preventDefault'](),this[K(0xb5)](j,c);},i[J(0x13f)]=j=>{const L=J;j['preventDefault'](),this[L(0xb5)](j,c);});if(c[J(0xdd)]=='addNew'){let j=e['element'];j[J(0x109)]=!![],j['id']=J(0xdb)+ ++this[J(0x119)];let k=document[J(0xc4)](J(0x135));f=k;d&&(k['style']['marginLeft']=J(0x125),k[J(0xf4)][J(0x123)]=J(0x137));k['value']=c['name'],k[J(0xdd)]='text',k['id']=J(0xb4)+this[J(0x119)],k['onkeyup']=l=>{const M=J;l['key']==M(0xd1)&&k['value']&&(c[M(0x103)]=k[M(0xc8)],k['disabled']=!![],j['disabled']=![],j[M(0xff)]());};if(c['service'][J(0xbd)]){const l=c['service'][J(0xbd)](null),m=document['createElement'](J(0xe4));m['id']='addNew_'+this['_addCounter']+J(0xb2);for(let n of l){const o=document['createElement'](J(0xba));o[J(0xc8)]=n,m[J(0x13c)](o);}g[J(0xd8)](m),k[J(0xf8)]('list',m['id']);}g[J(0xd8)](k);}else{if(c[J(0xef)])f=document['createElement']('span');else{if(!c['renamable']){let p=document['createElement'](J(0x11f));f=p;if(d)p['style'][J(0x13a)]=J(0x125);p['htmlFor']=c['name'],p[J(0x104)]=c['displayName']??c[J(0x103)],p['title']=c[J(0xbf)]??(c[J(0xec)]??c['name'])+J(0x127)+c['type']+(c[J(0x133)]?',\x20default:\x20'+c['defaultValue']:'')+',\x20propertytype:\x20'+c['propertyType']+')',p[J(0x13e)]=q=>this[J(0x115)](q,c,p),p[J(0x114)]=q=>this[J(0x130)](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g['appendChild'](p);}else{let q=document[J(0xc4)]('input');f=q;d&&(q['style'][J(0x13a)]=J(0x125),q['style']['width']=J(0x137));q['id']='label_'+c['name'];let r=e['element'];q['value']=c[J(0x103)],q['onkeyup']=async t=>{const N=J;if(t['key']==N(0xd1)&&q['value']){const u=this[N(0xe3)][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c['name']+N(0x117)+q[N(0xc8)]+'\x27');c[N(0xb1)][N(0x13d)](this[N(0xe3)],c,N(0x13b)),c['name']=q['value'],await c['service'][N(0xc9)](this['_designItems'],c,r['value']),u[N(0xe9)](),this[N(0xe3)][0x0]['instanceServiceContainer'][N(0xe0)]['extensionManager']['refreshAllExtensions'](this[N(0xe3)]);}},g['appendChild'](q);}}}if(c['name'])e[J(0x134)]['id']=c[J(0x103)];if(e[J(0x134)]instanceof HTMLElement)e['element']['classList']['add'](J(0xb9));if(c[J(0xef)])e['element'][J(0xf4)][J(0x11e)]='2\x20/\x204';f[J(0xca)]['add'](J(0x102)),g['appendChild'](e[J(0x134)]),this['_div'][J(0xd8)](g);for(const t of this[J(0xf9)]['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u[J(0x134)][J(0xf8)]('appearance',this['getAttribute']('appearance')??J(0x121)),u['element']['style'][J(0x11e)]=J(0x107),this['_extensions'][J(0xc5)]({'property':c,'extension':u}),this[J(0xdf)][J(0xd8)](u['element']));}this['_propertyMap']['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const O=w;c[O(0x12d)](),e[O(0xca)]['remove']('dragOverProperty');}[w(0x130)](c,d,e){const P=w;c['preventDefault']();const f=c[P(0xee)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[P(0xf9)]['bindableObjectDragDropService'];if(h){const i=h[P(0xce)](c,d,this[P(0xe3)]);(i??P(0xd3))!=P(0xd3)?(e[P(0xca)]['add'](P(0x10c)),c['dataTransfer']['dropEffect']=i):e['classList'][P(0xf3)](P(0x10c));}}const g=c[P(0xee)]['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[P(0xf9)]['propertyGridDragDropService'];if(j){const k=j[P(0xce)](c,d,this['_designItems']);(k??P(0xd3))!='none'?(e['classList'][P(0xc1)](P(0x10c)),c['dataTransfer']['dropEffect']=k):e['classList'][P(0xf3)](P(0x10c));}}}[w(0x101)](c,d,e){const Q=w;c[Q(0x12d)](),e['classList'][Q(0xf3)]('dragOverProperty');const f=c['dataTransfer'][Q(0x111)](dragDropFormatNameBindingObject);if(f){const h=JSON[Q(0xcb)](f),i=this['_serviceContainer'][Q(0x10b)];i&&i['dropOnProperty'](c,d,h,this[Q(0xe3)]);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON[Q(0xcb)](g),k=this[Q(0xf9)]['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this[Q(0xe3)]);}}['openContextMenu'](c,d){const R=w;let e;if(this[R(0x131)])e=this['propertyContextMenuProvider'](this[R(0xe3)],d);if(!e)e=d['service']['getContextMenu'](this[R(0xe3)],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[R(0xe3)])??[]];ContextMenu[R(0x132)](e,c);}[w(0x124)](c){const S=w;this['_designItems']=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this[S(0xd6)]){e[0x1][S(0xe2)]['designItemsChanged'](c);}}[w(0xfc)](c){const T=w;for(const {extension:d}of this[T(0x126)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[T(0xde)](e[0x1]['isSetElement'],e[0x0],c,this[T(0x108)],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const U=w;if(e&&e[U(0xcf)]){let h=f['isSet'](e,d);c[U(0xc6)][U(0x12e)]=h;let i=f[U(0xfa)](e,d);c[U(0xd7)]=d[U(0x103)]+':\x20'+h;if(h==ValueType['none'])c[U(0xf4)][U(0x110)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType[U(0x13b)])c[U(0xf4)]['background']='white';else{if(h==ValueType['some'])c[U(0xf4)]['background']=U(0x11c);else{if(h==ValueType[U(0x12a)])c[U(0xf4)]['background']=U(0x12c);else h==ValueType[U(0xb6)]&&(i=f[U(0xd9)](e,d),c['style']['background']='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements['define'](w(0x106),PropertyGridPropertyList);