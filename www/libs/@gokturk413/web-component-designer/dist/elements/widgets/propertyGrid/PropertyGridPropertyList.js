const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0xdc))/0x1*(-parseInt(v(0x13f))/0x2)+-parseInt(v(0x135))/0x3*(parseInt(v(0x141))/0x4)+-parseInt(v(0xd3))/0x5*(parseInt(v(0x149))/0x6)+-parseInt(v(0x123))/0x7*(-parseInt(v(0x115))/0x8)+-parseInt(v(0x153))/0x9+-parseInt(v(0x11b))/0xa*(parseInt(v(0x136))/0xb)+parseInt(v(0xfc))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1e0b5));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';function a(){const W=[',\x20default:\x20','getContextMenuItems','designItemsChanged','hidden','2px','flex','857048qgZsAE','get','_rebuildElements','isSet','getProperties','getAttribute','10GgrKSX','width','center','type','dragOverOnProperty','name','12px','_designItems','7QINMVN','gridColumn','pointer','attributeChangedCallback','displayName','addNew','designerCanvas','_extensions','classList','removeAllChildnodes','removeAttribute','marginLeft','toggle','propertyGroupClick','_serviceContainer','append','10px','hideLabel','72rZaWld','1329691GkkDzK','setPropertiesService','rename\x20property\x20name\x20from\x20\x27','_propertiesService','<br>','_onDrop','editor','disabled','createPropertyEditors','38YGCRzF','fullOnClassChange','8152vlHRGE','list','ondrop','complex','addNew_label_','propertyContextMenuProvider','_lastClassType','properties','12VlQONC','getData','desc','onclick','style','createPropertyGroups','ondragleave','background','className','dropEffect','2198763gJkRJH','createExtension','1px\x20white\x20solid','content-wrapper','Enter','bound','refreshForDesignItems','\x27\x20to\x20\x27','fromStylesheet','alignItems','orange','element','div','instanceServiceContainer','shadowRoot','height',',\x20propertytype:\x20','none','addNew_input_','some','preventDefault','dragOverProperty','textContent','gray','_datalist','513355mtbGzv','add','property-row','setValue','getUnsetValue','20px','types','editor-control','onmouseenter','121BVNxAa','value','_onDragLeave','length','htmlFor','set','service','_addCounter','_div','createElements','defaultValue','dataTransfer','define','expandOrCollapsePropertyGroups','remove','appendChild','indexOf','addNew_','onkeyup','clickable','Actions\x20for\x20','dispose','bindableObjectDragDropService','_propertyMap','renamable','button','clear','refreshIsSetElementAndEditorForDesignItems','property-label','createElement','click','hide-label','7596876xtfHMA','property-status','_onDragOver','_restoreCachedInititalValues','oncontextmenu','rowElement','setAttribute','key','input','aria-label','commit','show','ondragover','readonly','getPropertyNameSuggestions','createEditor','openGroup','constructor','replaceAll'];a=function(){return W;};return a();}import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];[w(0x126)](){const x=w;for(const {extension:c}of this['_extensions'])c[x(0xc5)][x(0x102)]('appearance',this[x(0x11a)]('appearance')??'classic');}[w(0xe4)];[w(0xf3)]=new Map();[w(0x131)];[w(0x139)];[w(0x122)];[w(0x147)];[w(0xe3)]=0x0;[w(0x12a)]=[];['propertyGroupHover'];[w(0x130)];[w(0x146)];get['propertiesService'](){const y=w;return this[y(0x139)];}static get[w(0x14d)](){return css`
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
    `;}constructor(c){const z=w;super(),this[z(0xff)](),this['_serviceContainer']=c,this[z(0xe4)]=document[z(0xf9)](z(0xc6)),this[z(0xe4)]['className']=z(0xbd),this[z(0xc8)][z(0xeb)](this[z(0xe4)]);}[w(0x137)](c){const A=w;if(this['_propertiesService']!=c){this[A(0x139)]=c,DomHelper['removeAllChildnodes'](this[A(0xe4)]),this['_propertyMap'][A(0xf6)]();for(const {extension:d}of this[A(0x12a)])d[A(0xf1)]?.();this[A(0x12a)]=[];}}async[w(0xe5)](c){const B=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this['_propertiesService']?.[B(0x119)](c);return this[B(0x117)](c,d);}['_shouldCreateElements'](c){const C=w;if(!this[C(0x139)])return![];if(this[C(0xf3)]['size']==0x0)return!![];const d=this[C(0x139)]['getRefreshMode'](c);return d!==RefreshMode[C(0xcb)]&&(d!==RefreshMode[C(0x140)]||this[C(0x147)]!==c['element']['constructor']);}[w(0x117)](c,d){const D=w;this[D(0x147)]=c[D(0xc5)][D(0x10d)],DomHelper[D(0x12c)](this['_div']),this[D(0xf3)][D(0xf6)]();for(const {extension:e}of this['_extensions'])e[D(0xf1)]?.();this[D(0x12a)]=[];if(d?.['length']){for(let f of d){if(D(0x148)in f)this[D(0x14e)](f);else this[D(0x13e)](f);}return!![];}return![];}[w(0x14e)](c){const E=w;let d=document[E(0xf9)]('span');d['addEventListener'](E(0xfa),()=>{const F=E;this[F(0xe9)](c),d[F(0x12b)][F(0x12f)]('expanded');}),d['innerHTML']=c[E(0x120)][E(0x10e)]('\x0a',E(0x13a)),d['className']='group-header',this[E(0xe4)][E(0xeb)](d);let e=document[E(0xf9)]('span');e['innerHTML']=c['description']??'',e['className']='group-desc';this['propertyGroupHover']&&(d['onmouseenter']=()=>{const G=E;if(this['propertyGroupHover'](c,'name'))d[G(0x102)]('clickable','');else d[G(0x12d)](G(0xef));},d[E(0x14c)]=()=>{const H=E;if(this[H(0x130)])this['propertyGroupClick'](c,H(0x120));},e[E(0xdb)]=()=>{const I=E;if(this['propertyGroupHover'](c,I(0x14b)))e[I(0x102)](I(0xef),'');else e[I(0x12d)](I(0xef));},e[E(0x14c)]=()=>{const J=E;if(this[J(0x130)])this[J(0x130)](c,J(0x14b));});this['_div']['appendChild'](e);for(const f of c[E(0x148)])this['createPropertyEditors'](f,!![]);}[w(0xe9)](c){const K=w;for(let d of c[K(0x148)]){const e=this['_propertyMap'][K(0x116)](d);e[K(0x101)]['hidden']=!e[K(0x101)]['hidden'];for(const {property:f,extension:g}of this[K(0x12a)])if(f===d)g[K(0xc5)][K(0x112)]=e[K(0x101)][K(0x112)];}}[w(0x13e)](c,d){const L=w;let e,f;if(c[L(0x10b)])e=c['createEditor'](c);else e=this[L(0x131)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[L(0xf9)]('div');g[L(0x151)]=L(0xd5);if(c[L(0x134)])g['classList'][L(0xd4)](L(0xfb));let h=document[L(0xf9)](L(0xc6));h[L(0x151)]='property-actions';if(d)h['style']['marginLeft']='10px';h['style']['width']=L(0xd8),h['style']['height']='20px',h[L(0x14d)]['display']=L(0x114),h['style'][L(0xc3)]=L(0x11d);let i=document['createElement']('button');i[L(0x11e)]=L(0xf5),i['className']=L(0xfd),i[L(0xd0)]='⋯',i[L(0x102)](L(0x105),L(0xf0)+(c[L(0x127)]??c['name'])),i[L(0x13d)]=c['readonly']===!![],i[L(0x14d)]['width']=L(0x121),i[L(0x14d)][L(0xc9)]='12px',i[L(0x14d)]['borderRadius']=L(0x113),i[L(0x14d)]['border']=L(0xbc),i[L(0x14d)]['cursor']=L(0x125);if(c['propertyType']!=PropertyType[L(0x144)])h[L(0xeb)](i);g['appendChild'](h);c[L(0x109)]!==!![]&&(i[L(0x100)]=j=>{const M=L;j[M(0xce)](),this['openContextMenu'](j,c);},i['onclick']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c['type']==L(0x128)){let j=e['element'];j['disabled']=!![],j['id']=L(0xcc)+ ++this[L(0xe3)];let k=document['createElement'](L(0x104));f=k;d&&(k['style'][L(0x12e)]=L(0x133),k[L(0x14d)][L(0x11c)]='calc(100%\x20-\x2010px)');k['value']=c['name'],k['type']='text',k['id']=L(0x145)+this[L(0xe3)],k[L(0xee)]=l=>{const N=L;l['key']==N(0xbe)&&k[N(0xdd)]&&(c[N(0x120)]=k['value'],k['disabled']=!![],j[N(0x13d)]=![],j['focus']());};if(c['service'][L(0x10a)]){const l=c[L(0xe2)][L(0x10a)](null),m=document[L(0xf9)]('datalist');m['id']=L(0xed)+this[L(0xe3)]+L(0xd2);for(let n of l){const o=document[L(0xf9)]('option');o[L(0xdd)]=n,m[L(0x132)](o);}g['appendChild'](m),k[L(0x102)](L(0x142),m['id']);}g[L(0xeb)](k);}else{if(c[L(0x134)])f=document[L(0xf9)]('span');else{if(!c[L(0xf4)]){let p=document['createElement']('label');f=p;if(d)p[L(0x14d)]['marginLeft']='10px';p[L(0xe0)]=c[L(0x120)],p[L(0xd0)]=c['displayName']??c['name'],p['title']=c['description']??(c[L(0x127)]??c['name'])+'\x20(type:\x20'+c[L(0x11e)]+(c[L(0xe6)]?L(0x10f)+c['defaultValue']:'')+L(0xca)+c['propertyType']+')',p[L(0x14f)]=q=>this[L(0xde)](q,c,p),p[L(0x108)]=q=>this['_onDragOver'](q,c,p),p[L(0x143)]=q=>this['_onDrop'](q,c,p),g[L(0xeb)](p);}else{let q=document[L(0xf9)]('input');f=q;d&&(q[L(0x14d)][L(0x12e)]='10px',q[L(0x14d)][L(0x11c)]='calc(100%\x20-\x2010px)');q['id']='label_'+c['name'];let r=e[L(0xc5)];q[L(0xdd)]=c['name'],q['onkeyup']=async t=>{const O=L;if(t[O(0x103)]==O(0xbe)&&q['value']){const u=this['_designItems'][0x0][O(0x10c)](O(0x138)+c[O(0x120)]+O(0xc1)+q['value']+'\x27');c['service']['clearValue'](this[O(0x122)],c,'all'),c[O(0x120)]=q['value'],await c['service'][O(0xd6)](this['_designItems'],c,r['value']),u[O(0x106)](),this[O(0x122)][0x0][O(0xc7)][O(0x129)]['extensionManager']['refreshAllExtensions'](this[O(0x122)]);}},g[L(0xeb)](q);}}}if(c['name'])e[L(0xc5)]['id']=c[L(0x120)];if(e['element']instanceof HTMLElement)e['element'][L(0x12b)]['add'](L(0xda));if(c[L(0x134)])e['element']['style'][L(0x124)]='2\x20/\x204';f[L(0x12b)]['add'](L(0xf8)),g['appendChild'](e[L(0xc5)]),this['_div'][L(0xeb)](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t[L(0xbb)](c);u&&(u[L(0xc5)]['setAttribute']('appearance',this[L(0x11a)]('appearance')??'classic'),u[L(0xc5)][L(0x14d)]['gridColumn']='1\x20/\x20-1',this['_extensions']['push']({'property':c,'extension':u}),this['_div']['appendChild'](u[L(0xc5)]));}this['_propertyMap'][L(0xe1)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0xde)](c,d,e){const P=w;c['preventDefault'](),e[P(0x12b)]['remove']('dragOverProperty');}[w(0xfe)](c,d,e){const Q=w;c[Q(0xce)]();const f=c[Q(0xe7)][Q(0xd9)][Q(0xec)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h['dragOverOnProperty'](c,d,this[Q(0x122)]);(i??Q(0xcb))!='none'?(e[Q(0x12b)][Q(0xd4)](Q(0xcf)),c['dataTransfer']['dropEffect']=i):e['classList'][Q(0xea)](Q(0xcf));}}const g=c['dataTransfer'][Q(0xd9)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[Q(0x131)]['propertyGridDragDropService'];if(j){const k=j[Q(0x11f)](c,d,this['_designItems']);(k??'none')!='none'?(e['classList'][Q(0xd4)]('dragOverProperty'),c[Q(0xe7)][Q(0x152)]=k):e[Q(0x12b)][Q(0xea)](Q(0xcf));}}}[w(0x13b)](c,d,e){const R=w;c[R(0xce)](),e['classList']['remove']('dragOverProperty');const f=c[R(0xe7)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][R(0xf2)];i&&i['dropOnProperty'](c,d,h,this['_designItems']);}const g=c['dataTransfer'][R(0x14a)](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer']['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this[R(0x122)]);}}['openContextMenu'](c,d){const S=w;let e;if(this[S(0x146)])e=this[S(0x146)](this['_designItems'],d);if(!e)e=d[S(0xe2)]['getContextMenu'](this[S(0x122)],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g[S(0x110)]?.(this['_designItems'])??[]];ContextMenu[S(0x107)](e,c);}['designItemsChanged'](c){const T=w;this[T(0x122)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][T(0x13c)][T(0x111)](c);}}[w(0xc0)](c){const U=w;for(const {extension:d}of this[U(0x12a)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[U(0xf7)](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const V=w;if(e&&e[V(0xdf)]){let h=f[V(0x118)](e,d);c['dataset']['valueType']=h;let i=f['getValue'](e,d);c['title']=d[V(0x120)]+':\x20'+h;if(h==ValueType[V(0xcb)])c['style'][V(0x150)]='',i=f[V(0xd7)](e,d);else{if(h==ValueType['all'])c[V(0x14d)]['background']='white';else{if(h==ValueType[V(0xcd)])c[V(0x14d)]['background']=V(0xd1);else{if(h==ValueType[V(0xbf)])c['style'][V(0x150)]=V(0xc4);else h==ValueType[V(0xc2)]&&(i=f[V(0xd7)](e,d),c[V(0x14d)][V(0x150)]='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c[V(0x14d)]['background']='';}}function b(c,d){c=c-0xbb;const e=a();let f=e[c];return f;}customElements[w(0xe8)]('node-projects-property-grid-property-list',PropertyGridPropertyList);