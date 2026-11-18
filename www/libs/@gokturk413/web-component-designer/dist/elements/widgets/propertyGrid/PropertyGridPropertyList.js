const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0xe3))/0x1*(-parseInt(v(0xe1))/0x2)+-parseInt(v(0x134))/0x3+-parseInt(v(0xf5))/0x4*(-parseInt(v(0xd3))/0x5)+parseInt(v(0x106))/0x6+parseInt(v(0x12b))/0x7+parseInt(v(0x13d))/0x8+parseInt(v(0xcf))/0x9*(-parseInt(v(0x142))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaadc8));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const V=['displayName','getAttribute','calc(100%\x20-\x2010px)','observedAttributes','element','createEditor','_serviceContainer','dataTransfer','key','_onDragOver','marginLeft','value','white','designerCanvas','shadowRoot','properties','createExtension','disabled','propertiesService','\x20(type:\x20','onclick','8356810pXCtAp','getPropertyNameSuggestions','propertyGroupHover','addNew_','rowElement',',\x20default:\x20','editor','parse','dataset','2235165xSNmhk','2px','text','innerHTML','title','width','appearance','property-status','property-label','10790464ltECAk','size','dropEffect','display','_lastClassType','172370AEyKsB','propertyGridDragDropService','indexOf','1px\x20white\x20solid','Enter','readonly','removeAttribute','openContextMenu','createPropertyGroups','classic','\x27\x20to\x20\x27','propertyGroupClick','borderRadius','hideLabel','_designItems','2007dfFWkA','defaultValue','getValue','height','10DPHMrE','label_','editor-control','_onDragLeave','property-actions','12px','createElement','openGroup','_addCounter','hidden','refreshForDesignItems','appendChild','ondragover','dragOverProperty','2IONnRg','bindableObjectDragDropService','117146WreZnE','preventDefault','clear','gridColumn','set','service','datalist','type','1\x20/\x20-1','clearValue','clickable','name','border','div','background','getUnsetValue','propertyGridExtensions','push','2547284WpIcVB','getContextMenu','propertyContextMenuProvider','createPropertyEditors','_div','add','focus','className','htmlFor','desc','button','constructor','all','cursor','classList','some','list','8131968WQNcjt','_propertyMap','show','designItemsChanged','setPropertiesService','_shouldCreateElements','instanceServiceContainer','span','propertyType','textContent','_extensions','style','append','none','getRefreshMode','_propertiesService'];a=function(){return V;};return a();}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';function b(c,d){c=c-0xcd;const e=a();let f=e[c];return f;}export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x119)]=['appearance'];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this['_extensions'])c['element']['setAttribute'](x(0x13a),this[x(0x117)](x(0x13a))??x(0x14b));}[w(0xf9)];[w(0x107)]=new Map();[w(0x11c)];[w(0x115)];['_designItems'];[w(0x141)];['_addCounter']=0x0;[w(0x110)]=[];[w(0x12d)];[w(0x14d)];[w(0xf7)];get[w(0x128)](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this['_div']=document[y(0xd9)](y(0xf0)),this['_div'][y(0xfc)]='content-wrapper',this[y(0x124)]['appendChild'](this[y(0xf9)]);}[w(0x10a)](c){const z=w;if(this[z(0x115)]!=c){this[z(0x115)]=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this[z(0x110)]=[];}}async['createElements'](c){const A=w;if(!this[A(0x10b)](c))return!![];const d=await this[A(0x115)]?.['getProperties'](c);return this['_rebuildElements'](c,d);}[w(0x10b)](c){const B=w;if(!this['_propertiesService'])return![];if(this[B(0x107)][B(0x13e)]==0x0)return!![];const d=this[B(0x115)][B(0x114)](c);return d!==RefreshMode[B(0x113)]&&(d!==RefreshMode['fullOnClassChange']||this[B(0x141)]!==c['element'][B(0x100)]);}['_rebuildElements'](c,d){const C=w;this[C(0x141)]=c[C(0x11a)]['constructor'],DomHelper['removeAllChildnodes'](this[C(0xf9)]),this['_propertyMap'][C(0xe5)]();for(const {extension:e}of this[C(0x110)])e['dispose']?.();this['_extensions']=[];if(d?.['length']){for(let f of d){if(C(0x125)in f)this[C(0x14a)](f);else this[C(0xf8)](f);}return!![];}return![];}['createPropertyGroups'](c){const D=w;let d=document[D(0xd9)](D(0x10d));d['addEventListener']('click',()=>{this['expandOrCollapsePropertyGroups'](c),d['classList']['toggle']('expanded');}),d['innerHTML']=c[D(0xee)]['replaceAll']('\x0a','<br>'),d['className']='group-header',this[D(0xf9)][D(0xde)](d);let e=document['createElement']('span');e[D(0x137)]=c['description']??'',e[D(0xfc)]='group-desc';this['propertyGroupHover']&&(d['onmouseenter']=()=>{const E=D;if(this['propertyGroupHover'](c,'name'))d['setAttribute'](E(0xed),'');else d['removeAttribute'](E(0xed));},d['onclick']=()=>{const F=D;if(this[F(0x14d)])this[F(0x14d)](c,F(0xee));},e['onmouseenter']=()=>{const G=D;if(this['propertyGroupHover'](c,'desc'))e['setAttribute']('clickable','');else e[G(0x148)](G(0xed));},e['onclick']=()=>{const H=D;if(this[H(0x14d)])this['propertyGroupClick'](c,H(0xfe));});this['_div'][D(0xde)](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}['expandOrCollapsePropertyGroups'](c){const I=w;for(let d of c['properties']){const e=this['_propertyMap']['get'](d);e[I(0x12f)][I(0xdc)]=!e['rowElement'][I(0xdc)];for(const {property:f,extension:g}of this[I(0x110)])if(f===d)g[I(0x11a)][I(0xdc)]=e[I(0x12f)]['hidden'];}}[w(0xf8)](c,d){const J=w;let e,f;if(c['createEditor'])e=c[J(0x11b)](c);else e=this[J(0x11c)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[J(0xd9)]('div');g[J(0xfc)]='property-row';if(c[J(0xcd)])g['classList'][J(0xfa)]('hide-label');let h=document[J(0xd9)]('div');h[J(0xfc)]=J(0xd7);if(d)h[J(0x111)]['marginLeft']='10px';h['style']['width']='20px',h[J(0x111)][J(0xd2)]='20px',h[J(0x111)][J(0x140)]='flex',h['style']['alignItems']='center';let i=document['createElement'](J(0xff));i['type']='button',i['className']=J(0x13b),i[J(0x10f)]='⋯',i['setAttribute']('aria-label','Actions\x20for\x20'+(c['displayName']??c['name'])),i[J(0x127)]=c['readonly']===!![],i[J(0x111)][J(0x139)]=J(0xd8),i['style']['height']=J(0xd8),i['style'][J(0x14e)]=J(0x135),i['style'][J(0xef)]=J(0x145),i['style'][J(0x102)]='pointer';if(c[J(0x10e)]!=PropertyType['complex'])h['appendChild'](i);g['appendChild'](h);c[J(0x147)]!==!![]&&(i['oncontextmenu']=j=>{const K=J;j['preventDefault'](),this[K(0x149)](j,c);},i[J(0x12a)]=j=>{const L=J;j['preventDefault'](),this[L(0x149)](j,c);});if(c['type']=='addNew'){let j=e[J(0x11a)];j['disabled']=!![],j['id']='addNew_input_'+ ++this[J(0xdb)];let k=document[J(0xd9)]('input');f=k;d&&(k[J(0x111)][J(0x120)]='10px',k['style'][J(0x139)]='calc(100%\x20-\x2010px)');k['value']=c['name'],k[J(0xea)]=J(0x136),k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const M=J;l['key']==M(0x146)&&k[M(0x121)]&&(c['name']=k[M(0x121)],k[M(0x127)]=!![],j['disabled']=![],j[M(0xfb)]());};if(c[J(0xe8)]['getPropertyNameSuggestions']){const l=c[J(0xe8)][J(0x12c)](null),m=document['createElement'](J(0xe9));m['id']=J(0x12e)+this[J(0xdb)]+'_datalist';for(let n of l){const o=document[J(0xd9)]('option');o['value']=n,m[J(0x112)](o);}g['appendChild'](m),k['setAttribute'](J(0x105),m['id']);}g[J(0xde)](k);}else{if(c[J(0xcd)])f=document[J(0xd9)]('span');else{if(!c['renamable']){let p=document[J(0xd9)]('label');f=p;if(d)p[J(0x111)]['marginLeft']='10px';p[J(0xfd)]=c['name'],p['textContent']=c['displayName']??c['name'],p['title']=c['description']??(c[J(0x116)]??c['name'])+J(0x129)+c['type']+(c[J(0xd0)]?J(0x130)+c[J(0xd0)]:'')+',\x20propertytype:\x20'+c['propertyType']+')',p['ondragleave']=q=>this[J(0xd6)](q,c,p),p[J(0xdf)]=q=>this[J(0x11f)](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g[J(0xde)](p);}else{let q=document['createElement']('input');f=q;d&&(q['style'][J(0x120)]='10px',q['style']['width']=J(0x118));q['id']=J(0xd4)+c['name'];let r=e['element'];q['value']=c['name'],q['onkeyup']=async t=>{const N=J;if(t[N(0x11e)]=='Enter'&&q[N(0x121)]){const u=this[N(0xce)][0x0][N(0xda)]('rename\x20property\x20name\x20from\x20\x27'+c[N(0xee)]+N(0x14c)+q['value']+'\x27');c[N(0xe8)][N(0xec)](this[N(0xce)],c,N(0x101)),c['name']=q[N(0x121)],await c['service']['setValue'](this[N(0xce)],c,r[N(0x121)]),u['commit'](),this[N(0xce)][0x0][N(0x10c)][N(0x123)]['extensionManager']['refreshAllExtensions'](this['_designItems']);}},g['appendChild'](q);}}}if(c['name'])e[J(0x11a)]['id']=c['name'];if(e[J(0x11a)]instanceof HTMLElement)e[J(0x11a)]['classList'][J(0xfa)](J(0xd5));if(c['hideLabel'])e[J(0x11a)]['style'][J(0xe6)]='2\x20/\x204';f['classList'][J(0xfa)](J(0x13c)),g[J(0xde)](e['element']),this['_div']['appendChild'](g);for(const t of this['_serviceContainer'][J(0xf3)]){const u=t[J(0x126)](c);u&&(u['element']['setAttribute']('appearance',this[J(0x117)]('appearance')??J(0x14b)),u['element']['style'][J(0xe6)]=J(0xeb),this['_extensions'][J(0xf4)]({'property':c,'extension':u}),this['_div'][J(0xde)](u['element']));}this[J(0x107)][J(0xe7)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0xd6)](c,d,e){const O=w;c[O(0xe4)](),e[O(0x103)]['remove']('dragOverProperty');}['_onDragOver'](c,d,e){const P=w;c[P(0xe4)]();const f=c['dataTransfer']['types'][P(0x144)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][P(0xe2)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!=P(0x113)?(e[P(0x103)][P(0xfa)]('dragOverProperty'),c['dataTransfer'][P(0x13f)]=i):e[P(0x103)]['remove'](P(0xe0));}}const g=c[P(0x11d)]['types'][P(0x144)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[P(0x11c)][P(0x143)];if(j){const k=j['dragOverOnProperty'](c,d,this[P(0xce)]);(k??'none')!='none'?(e[P(0x103)][P(0xfa)]('dragOverProperty'),c['dataTransfer'][P(0x13f)]=k):e[P(0x103)]['remove']('dragOverProperty');}}}['_onDrop'](c,d,e){const Q=w;c[Q(0xe4)](),e[Q(0x103)]['remove'](Q(0xe0));const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this[Q(0x11c)][Q(0xe2)];i&&i['dropOnProperty'](c,d,h,this[Q(0xce)]);}const g=c[Q(0x11d)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON[Q(0x132)](g),k=this[Q(0x11c)][Q(0x143)];k&&k['dropOnProperty'](c,d,j,this[Q(0xce)]);}}['openContextMenu'](c,d){const R=w;let e;if(this['propertyContextMenuProvider'])e=this['propertyContextMenuProvider'](this[R(0xce)],d);if(!e)e=d[R(0xe8)][R(0xf6)](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu[R(0x108)](e,c);}[w(0x109)](c){const S=w;this[S(0xce)]=c;for(const {extension:d}of this[S(0x110)])d['refresh'](c);for(let e of this[S(0x107)]){e[0x1][S(0x131)][S(0x109)](c);}}[w(0xdd)](c){const T=w;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1][T(0x131)]);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f['isSet'](e,d);c[U(0x133)]['valueType']=h;let i=f[U(0xd1)](e,d);c[U(0x138)]=d['name']+':\x20'+h;if(h==ValueType[U(0x113)])c['style'][U(0xf1)]='',i=f[U(0xf2)](e,d);else{if(h==ValueType[U(0x101)])c['style'][U(0xf1)]=U(0x122);else{if(h==ValueType[U(0x104)])c['style']['background']='gray';else{if(h==ValueType['bound'])c[U(0x111)]['background']='orange';else h==ValueType['fromStylesheet']&&(i=f['getUnsetValue'](e,d),c['style'][U(0xf1)]='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c[U(0x111)][U(0xf1)]='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);