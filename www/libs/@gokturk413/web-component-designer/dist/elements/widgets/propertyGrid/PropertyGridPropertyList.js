function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xdf))/0x1*(parseInt(v(0xfc))/0x2)+parseInt(v(0x13d))/0x3+parseInt(v(0x123))/0x4+parseInt(v(0x120))/0x5*(-parseInt(v(0xd9))/0x6)+-parseInt(v(0x12a))/0x7*(-parseInt(v(0x11b))/0x8)+-parseInt(v(0xfd))/0x9+parseInt(v(0x108))/0xa*(-parseInt(v(0x127))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8c7cb));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function a(){const W=['getValue','bound','isSet','alignItems','group-desc','element','\x27\x20to\x20\x27','text','expandOrCollapsePropertyGroups','1px\x20white\x20solid','propertyGridExtensions','_propertyMap','indexOf','refresh','property-actions','1040FzBTcw','remove','value','desc','defaultValue','3365rWvjih','_onDragLeave','push','4438672AJCMzd','valueType','width','createElement','3742607uiqgMm','clickable','set','11641xOkvDY','dispose','editor','designerCanvas','_div','gray','getContextMenuItems','description','length','style','add','getUnsetValue','htmlFor','display','none','setAttribute','oncontextmenu','designItemsChanged','fullOnClassChange','1092291uQIiSn','pointer','innerHTML','types','propertyContextMenuProvider','attributeChangedCallback','_designItems','property-row','span','className','constructor','createPropertyEditors','extensionManager','createElements','group-header','getProperties','background','hidden','Enter','marginLeft','service','properties','property-status','openGroup','getData','refreshIsSetElementAndEditorForDesignItems','textContent','Actions\x20for\x20','type','_rebuildElements','<br>','isSetElement','appendChild','12px','ondragover','_onDrop','key','onclick','_addCounter','_extensions','propertyGroupHover','borderRadius','center','preventDefault','5604GiuZCF','dropOnProperty','addNew_','disabled','setPropertiesService','hideLabel','14TXZaPd','height','classList','editor-control','bindableObjectDragDropService','addNew_input_','button','createPropertyGroups','label','dataTransfer','append','propertyType','\x20(type:\x20','dragOverProperty','readonly','openContextMenu','refreshValueWithoutNotification','getContextMenu','removeAttribute','20px','clear','name','removeAllChildnodes','show','_serviceContainer','all','datalist','property-label','refreshAllExtensions','120004SGTubc','5809428wwlOMO','rowElement','10px','appearance','addEventListener','observedAttributes','clearValue','propertyGroupClick','_propertiesService','ondragleave','getAttribute','20ZrudxY','fromStylesheet','title','_shouldCreateElements'];a=function(){return W;};return a();}import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x102)]=[w(0x100)];[w(0x142)](){const x=w;for(const {extension:c}of this['_extensions'])c[x(0x111)][x(0x139)]('appearance',this[x(0x107)]('appearance')??'classic');}[w(0x12e)];[w(0x117)]=new Map();['_serviceContainer'];[w(0x105)];[w(0x143)];['_lastClassType'];['_addCounter']=0x0;['_extensions']=[];[w(0xd5)];[w(0x104)];['propertyContextMenuProvider'];get['propertiesService'](){const y=w;return this[y(0x105)];}static get[w(0x133)](){return css`
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
    `;}constructor(c){const z=w;super(),this['_restoreCachedInititalValues'](),this[z(0xf7)]=c,this[z(0x12e)]=document['createElement']('div'),this[z(0x12e)]['className']='content-wrapper',this['shadowRoot']['appendChild'](this[z(0x12e)]);}[w(0xdd)](c){const A=w;if(this[A(0x105)]!=c){this['_propertiesService']=c,DomHelper[A(0xf5)](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this['_extensions']=[];}}async[w(0x14a)](c){const B=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[B(0x105)]?.[B(0x14c)](c);return this[B(0x15a)](c,d);}[w(0x10b)](c){const C=w;if(!this[C(0x105)])return![];if(this[C(0x117)]['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode[C(0x13c)]||this['_lastClassType']!==c[C(0x111)][C(0x147)]);}[w(0x15a)](c,d){const D=w;this['_lastClassType']=c[D(0x111)][D(0x147)],DomHelper['removeAllChildnodes'](this['_div']),this[D(0x117)][D(0xf3)]();for(const {extension:e}of this['_extensions'])e[D(0x12b)]?.();this[D(0xd4)]=[];if(d?.[D(0x132)]){for(let f of d){if('properties'in f)this[D(0xe6)](f);else this[D(0x148)](f);}return!![];}return![];}[w(0xe6)](c){const E=w;let d=document[E(0x126)]('span');d[E(0x101)]('click',()=>{const F=E;this[F(0x114)](c),d[F(0xe1)]['toggle']('expanded');}),d[E(0x13f)]=c[E(0xf4)]['replaceAll']('\x0a',E(0x15b)),d[E(0x146)]=E(0x14b),this[E(0x12e)]['appendChild'](d);let e=document[E(0x126)](E(0x145));e['innerHTML']=c['description']??'',e[E(0x146)]=E(0x110);this[E(0xd5)]&&(d['onmouseenter']=()=>{const G=E;if(this['propertyGroupHover'](c,G(0xf4)))d['setAttribute']('clickable','');else d[G(0xf1)](G(0x128));},d['onclick']=()=>{if(this['propertyGroupClick'])this['propertyGroupClick'](c,'name');},e['onmouseenter']=()=>{const H=E;if(this['propertyGroupHover'](c,H(0x11e)))e['setAttribute'](H(0x128),'');else e['removeAttribute'](H(0x128));},e[E(0xd2)]=()=>{const I=E;if(this['propertyGroupClick'])this[I(0x104)](c,I(0x11e));});this[E(0x12e)][E(0x15d)](e);for(const f of c[E(0x152)])this['createPropertyEditors'](f,!![]);}[w(0x114)](c){const J=w;for(let d of c[J(0x152)]){const e=this[J(0x117)]['get'](d);e['rowElement']['hidden']=!e[J(0xfe)]['hidden'];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g['element'][J(0x14e)]=e[J(0xfe)][J(0x14e)];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this['_serviceContainer']['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[K(0x126)]('div');g['className']=K(0x144);if(c[K(0xde)])g['classList'][K(0x134)]('hide-label');let h=document[K(0x126)]('div');h[K(0x146)]=K(0x11a);if(d)h[K(0x133)][K(0x150)]='10px';h['style']['width']=K(0xf2),h[K(0x133)][K(0xe0)]='20px',h[K(0x133)][K(0x137)]='flex',h['style'][K(0x10f)]=K(0xd7);let i=document['createElement']('button');i['type']=K(0xe5),i['className']=K(0x153),i['textContent']='⋯',i[K(0x139)]('aria-label',K(0x158)+(c['displayName']??c[K(0xf4)])),i[K(0xdc)]=c[K(0xed)]===!![],i[K(0x133)]['width']='12px',i['style']['height']=K(0x15e),i[K(0x133)][K(0xd6)]='2px',i['style']['border']=K(0x115),i['style']['cursor']=K(0x13e);if(c[K(0xea)]!=PropertyType['complex'])h['appendChild'](i);g['appendChild'](h);c[K(0xed)]!==!![]&&(i[K(0x13a)]=j=>{const L=K;j['preventDefault'](),this[L(0xee)](j,c);},i[K(0xd2)]=j=>{const M=K;j[M(0xd8)](),this[M(0xee)](j,c);});if(c['type']=='addNew'){let j=e[K(0x111)];j[K(0xdc)]=!![],j['id']=K(0xe4)+ ++this['_addCounter'];let k=document[K(0x126)]('input');f=k;d&&(k[K(0x133)][K(0x150)]='10px',k[K(0x133)][K(0x125)]='calc(100%\x20-\x2010px)');k['value']=c['name'],k[K(0x159)]=K(0x113),k['id']='addNew_label_'+this[K(0xd3)],k['onkeyup']=l=>{const N=K;l['key']==N(0x14f)&&k['value']&&(c[N(0xf4)]=k[N(0x11d)],k['disabled']=!![],j[N(0xdc)]=![],j['focus']());};if(c['service']['getPropertyNameSuggestions']){const l=c[K(0x151)]['getPropertyNameSuggestions'](null),m=document['createElement'](K(0xf9));m['id']=K(0xdb)+this[K(0xd3)]+'_datalist';for(let n of l){const o=document['createElement']('option');o['value']=n,m[K(0xe9)](o);}g[K(0x15d)](m),k['setAttribute']('list',m['id']);}g[K(0x15d)](k);}else{if(c['hideLabel'])f=document[K(0x126)]('span');else{if(!c['renamable']){let p=document[K(0x126)](K(0xe7));f=p;if(d)p['style'][K(0x150)]=K(0xff);p[K(0x136)]=c['name'],p[K(0x157)]=c['displayName']??c[K(0xf4)],p['title']=c[K(0x131)]??(c['displayName']??c['name'])+K(0xeb)+c['type']+(c['defaultValue']?',\x20default:\x20'+c[K(0x11f)]:'')+',\x20propertytype:\x20'+c[K(0xea)]+')',p[K(0x106)]=q=>this[K(0x121)](q,c,p),p[K(0x15f)]=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g['appendChild'](p);}else{let q=document['createElement']('input');f=q;d&&(q[K(0x133)]['marginLeft']=K(0xff),q[K(0x133)][K(0x125)]='calc(100%\x20-\x2010px)');q['id']='label_'+c[K(0xf4)];let r=e['element'];q['value']=c[K(0xf4)],q['onkeyup']=async t=>{const O=K;if(t[O(0xd1)]==O(0x14f)&&q[O(0x11d)]){const u=this[O(0x143)][0x0][O(0x154)]('rename\x20property\x20name\x20from\x20\x27'+c['name']+O(0x112)+q['value']+'\x27');c[O(0x151)][O(0x103)](this[O(0x143)],c,O(0xf8)),c[O(0xf4)]=q['value'],await c[O(0x151)]['setValue'](this['_designItems'],c,r[O(0x11d)]),u['commit'](),this['_designItems'][0x0]['instanceServiceContainer'][O(0x12d)][O(0x149)][O(0xfb)](this[O(0x143)]);}},g['appendChild'](q);}}}if(c['name'])e[K(0x111)]['id']=c[K(0xf4)];if(e['element']instanceof HTMLElement)e[K(0x111)]['classList']['add'](K(0xe2));if(c[K(0xde)])e[K(0x111)]['style']['gridColumn']='2\x20/\x204';f[K(0xe1)]['add'](K(0xfa)),g['appendChild'](e[K(0x111)]),this['_div']['appendChild'](g);for(const t of this[K(0xf7)][K(0x116)]){const u=t['createExtension'](c);u&&(u['element'][K(0x139)]('appearance',this['getAttribute'](K(0x100))??'classic'),u['element'][K(0x133)]['gridColumn']='1\x20/\x20-1',this[K(0xd4)][K(0x122)]({'property':c,'extension':u}),this[K(0x12e)][K(0x15d)](u[K(0x111)]));}this['_propertyMap'][K(0x129)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const P=w;c[P(0xd8)](),e['classList'][P(0x11c)](P(0xec));}['_onDragOver'](c,d,e){const Q=w;c['preventDefault']();const f=c[Q(0xe8)][Q(0x140)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[Q(0xf7)][Q(0xe3)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!='none'?(e[Q(0xe1)][Q(0x134)]('dragOverProperty'),c[Q(0xe8)]['dropEffect']=i):e['classList'][Q(0x11c)]('dragOverProperty');}}const g=c[Q(0xe8)][Q(0x140)][Q(0x118)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[Q(0xf7)]['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this[Q(0x143)]);(k??Q(0x138))!=Q(0x138)?(e['classList']['add']('dragOverProperty'),c[Q(0xe8)]['dropEffect']=k):e[Q(0xe1)][Q(0x11c)](Q(0xec));}}}[w(0x160)](c,d,e){const R=w;c[R(0xd8)](),e[R(0xe1)][R(0x11c)]('dragOverProperty');const f=c[R(0xe8)][R(0x155)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][R(0xe3)];i&&i[R(0xda)](c,d,h,this[R(0x143)]);}const g=c['dataTransfer'][R(0x155)](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer']['propertyGridDragDropService'];k&&k[R(0xda)](c,d,j,this['_designItems']);}}['openContextMenu'](c,d){const S=w;let e;if(this[S(0x141)])e=this[S(0x141)](this[S(0x143)],d);if(!e)e=d[S(0x151)][S(0xf0)](this[S(0x143)],d);for(const {property:f,extension:g}of this[S(0xd4)])if(f===d)e=[...e??[],...g[S(0x130)]?.(this[S(0x143)])??[]];ContextMenu[S(0xf6)](e,c);}[w(0x13b)](c){const T=w;this[T(0x143)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1]['editor'][T(0x13b)](c);}}['refreshForDesignItems'](c){const U=w;for(const {extension:d}of this[U(0xd4)])d[U(0x119)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][U(0x15c)],e[0x0],c,this[U(0x105)],e[0x1][U(0x12c)]);}}static[w(0x156)](c,d,e,f,g){const V=w;if(e&&e[V(0x132)]){let h=f[V(0x10e)](e,d);c['dataset'][V(0x124)]=h;let i=f[V(0x10c)](e,d);c[V(0x10a)]=d['name']+':\x20'+h;if(h==ValueType['none'])c[V(0x133)][V(0x14d)]='',i=f[V(0x135)](e,d);else{if(h==ValueType[V(0xf8)])c[V(0x133)]['background']='white';else{if(h==ValueType['some'])c['style']['background']=V(0x12f);else{if(h==ValueType[V(0x10d)])c[V(0x133)][V(0x14d)]='orange';else h==ValueType[V(0x109)]&&(i=f[V(0x135)](e,d),c[V(0x133)][V(0x14d)]='yellow');}}}g?.[V(0xef)](h,i);}else c['style'][V(0x14d)]='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);