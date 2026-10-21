const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x13d))/0x1*(parseInt(v(0x179))/0x2)+parseInt(v(0x10c))/0x3+parseInt(v(0x15c))/0x4*(parseInt(v(0x163))/0x5)+-parseInt(v(0x11f))/0x6+parseInt(v(0x116))/0x7+parseInt(v(0x159))/0x8+parseInt(v(0x182))/0x9*(parseInt(v(0x11a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69cba));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';function a(){const W=['title','gridColumn','fromStylesheet','clickable','Enter','classic','editor-control','name','cursor','disabled','getContextMenu','openContextMenu','editor','display','group-header','10px','service','14151Uzsblq','click','dropOnProperty','_div','onmouseenter','center','focus','dropEffect','list','createPropertyEditors','orange','extensionManager','ondrop','20px','length','fullOnClassChange','createPropertyGroups','\x27\x20to\x20\x27','description','preventDefault','appendChild','setAttribute','forSomeServicesTillResult','none','removeAttribute','dragOverProperty','addNew_input_','gray','2739704NwXfgI','types','hidden','4CynEUp','propertyGridDragDropService','propertyGroupClick','_addCounter','complex','getUnsetValue','height','2489895bkIuzV','_onDragOver','alignItems','background','getRefreshMode','innerHTML','_propertiesService','hideLabel','bindableObjectDragDropService','className','createElement','size','createEditor','desc','Actions\x20for\x20','_extensions','refreshForDesignItems','style','calc(100%\x20-\x2010px)','_serviceContainer','width','shadowRoot','100CcPZzP','rowElement','group-desc','input','add','span',',\x20propertytype:\x20','_shouldCreateElements','getData','1980uwKAfo','createExtension','getProperties','<br>','classList','set','_onDrop','attributeChangedCallback','propertyGroupHover','div','setValue','_designItems','property-actions','refresh','properties','displayName','valueType','refreshValueWithoutNotification','type','isSet','dragOverOnProperty','parse','813567WMqDAz','key','value','dataTransfer','getValue','ondragleave','renamable','clear','\x20(type:\x20','designItemsChanged','2003022dwOmOM','refreshIsSetElementAndEditorForDesignItems','1px\x20white\x20solid','readonly','12380opRghf','refreshAllExtensions','dispose','_rebuildElements','marginLeft','3175494BnArak','constructor','expandOrCollapsePropertyGroups','_propertyMap','toggle','defaultValue','appearance','propertyEditorTypesService','textContent','addNew_','element','flex','onclick'];a=function(){return W;};return a();}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];[w(0xfd)](){const x=w;for(const {extension:c}of this['_extensions'])c['element']['setAttribute'](x(0x125),this['getAttribute']('appearance')??x(0x131));}['_div'];['_propertyMap']=new Map();['_serviceContainer'];[w(0x169)];[w(0x101)];['_lastClassType'];[w(0x15f)]=0x0;['_extensions']=[];[w(0xfe)];[w(0x15e)];['propertyContextMenuProvider'];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this[y(0x176)]=c,this[y(0x140)]=document['createElement'](y(0xff)),this['_div'][y(0x16c)]='content-wrapper',this[y(0x178)]['appendChild'](this['_div']);}['setPropertiesService'](c){const z=w;if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this[z(0x140)]),this['_propertyMap']['clear']();for(const {extension:d}of this[z(0x172)])d[z(0x11c)]?.();this[z(0x172)]=[];}}async['createElements'](c){const A=w;if(!this[A(0x180)](c))return!![];const d=await this['_propertiesService']?.[A(0xf8)](c);return this[A(0x11d)](c,d);}['_shouldCreateElements'](c){const B=w;if(!this['_propertiesService'])return![];if(this[B(0x122)][B(0x16e)]==0x0)return!![];const d=this['_propertiesService'][B(0x167)](c);return d!==RefreshMode['none']&&(d!==RefreshMode[B(0x14c)]||this['_lastClassType']!==c[B(0x129)]['constructor']);}[w(0x11d)](c,d){const C=w;this['_lastClassType']=c['element'][C(0x120)],DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap'][C(0x113)]();for(const {extension:e}of this['_extensions'])e[C(0x11c)]?.();this['_extensions']=[];if(d?.[C(0x14b)]){for(let f of d){if(C(0x104)in f)this[C(0x14d)](f);else this[C(0x146)](f);}return!![];}return![];}['createPropertyGroups'](c){const D=w;let d=document[D(0x16d)]('span');d['addEventListener'](D(0x13e),()=>{const E=D;this[E(0x121)](c),d[E(0xfa)][E(0x123)]('expanded');}),d[D(0x168)]=c[D(0x133)]['replaceAll']('\x0a',D(0xf9)),d[D(0x16c)]=D(0x13a),this[D(0x140)]['appendChild'](d);let e=document['createElement'](D(0x17e));e['innerHTML']=c[D(0x14f)]??'',e[D(0x16c)]=D(0x17b);this[D(0xfe)]&&(d['onmouseenter']=()=>{const F=D;if(this[F(0xfe)](c,'name'))d[F(0x152)](F(0x12f),'');else d['removeAttribute']('clickable');},d[D(0x12b)]=()=>{const G=D;if(this[G(0x15e)])this[G(0x15e)](c,G(0x133));},e[D(0x141)]=()=>{const H=D;if(this['propertyGroupHover'](c,H(0x170)))e['setAttribute'](H(0x12f),'');else e[H(0x155)](H(0x12f));},e[D(0x12b)]=()=>{const I=D;if(this[I(0x15e)])this['propertyGroupClick'](c,I(0x170));});this[D(0x140)]['appendChild'](e);for(const f of c[D(0x104)])this[D(0x146)](f,!![]);}['expandOrCollapsePropertyGroups'](c){const J=w;for(let d of c['properties']){const e=this[J(0x122)]['get'](d);e['rowElement'][J(0x15b)]=!e[J(0x17a)][J(0x15b)];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g[J(0x129)][J(0x15b)]=e['rowElement']['hidden'];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c['createEditor'])e=c[K(0x16f)](c);else e=this['_serviceContainer'][K(0x153)](K(0x126),g=>g['getEditorForProperty'](c));if(e){const g=document['createElement']('div');g['className']='property-row';if(c[K(0x16a)])g['classList']['add']('hide-label');let h=document['createElement'](K(0xff));h[K(0x16c)]=K(0x102);if(d)h[K(0x174)][K(0x11e)]=K(0x13b);h['style'][K(0x177)]=K(0x14a),h['style']['height']=K(0x14a),h['style'][K(0x139)]=K(0x12a),h[K(0x174)][K(0x165)]=K(0x142);let i=document[K(0x16d)]('button');i[K(0x108)]='button',i[K(0x16c)]='property-status',i['textContent']='⋯',i[K(0x152)]('aria-label',K(0x171)+(c[K(0x105)]??c['name'])),i['disabled']=c[K(0x119)]===!![],i[K(0x174)]['width']='7px',i[K(0x174)][K(0x162)]='7px',i['style']['border']=K(0x118),i[K(0x174)][K(0x134)]='pointer';if(c['propertyType']!=PropertyType[K(0x160)])h[K(0x151)](i);g[K(0x151)](h);c['readonly']!==!![]&&(i['oncontextmenu']=j=>{const L=K;j[L(0x150)](),this[L(0x137)](j,c);},i['onclick']=j=>{const M=K;j['preventDefault'](),this[M(0x137)](j,c);});if(c['type']=='addNew'){let j=e[K(0x129)];j['disabled']=!![],j['id']=K(0x157)+ ++this[K(0x15f)];let k=document[K(0x16d)]('input');f=k;d&&(k[K(0x174)]['marginLeft']=K(0x13b),k[K(0x174)][K(0x177)]='calc(100%\x20-\x2010px)');k['value']=c['name'],k[K(0x108)]='text',k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const N=K;l[N(0x10d)]==N(0x130)&&k['value']&&(c[N(0x133)]=k['value'],k[N(0x135)]=!![],j[N(0x135)]=![],j[N(0x143)]());};if(c['service']['getPropertyNameSuggestions']){const l=c['service']['getPropertyNameSuggestions'](null),m=document[K(0x16d)]('datalist');m['id']=K(0x128)+this['_addCounter']+'_datalist';for(let n of l){const o=document[K(0x16d)]('option');o[K(0x10e)]=n,m['append'](o);}g[K(0x151)](m),k[K(0x152)](K(0x145),m['id']);}g[K(0x151)](k);}else{if(c[K(0x16a)])f=document['createElement'](K(0x17e));else{if(!c[K(0x112)]){let p=document['createElement']('label');f=p;if(d)p[K(0x174)]['marginLeft']=K(0x13b);p['htmlFor']=c[K(0x133)],p[K(0x127)]=c['displayName']??c[K(0x133)],p[K(0x12c)]=c[K(0x14f)]??(c[K(0x105)]??c[K(0x133)])+K(0x114)+c[K(0x108)]+(c['defaultValue']?',\x20default:\x20'+c[K(0x124)]:'')+K(0x17f)+c['propertyType']+')',p[K(0x111)]=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[K(0x149)]=q=>this[K(0xfc)](q,c,p),g[K(0x151)](p);}else{let q=document['createElement'](K(0x17c));f=q;d&&(q[K(0x174)]['marginLeft']='10px',q[K(0x174)]['width']=K(0x175));q['id']='label_'+c['name'];let r=e['element'];q['value']=c[K(0x133)],q['onkeyup']=async t=>{const O=K;if(t['key']==O(0x130)&&q['value']){const u=this[O(0x101)][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c[O(0x133)]+O(0x14e)+q['value']+'\x27');c['service']['clearValue'](this[O(0x101)],c,'all'),c['name']=q['value'],await c[O(0x13c)][O(0x100)](this['_designItems'],c,r['value']),u['commit'](),this[O(0x101)][0x0]['instanceServiceContainer']['designerCanvas'][O(0x148)][O(0x11b)](this[O(0x101)]);}},g['appendChild'](q);}}}if(c[K(0x133)])e['element']['id']=c['name'];if(e['element']instanceof HTMLElement)e[K(0x129)][K(0xfa)][K(0x17d)](K(0x132));if(c[K(0x16a)])e['element']['style'][K(0x12d)]='2\x20/\x204';f[K(0xfa)]['add']('property-label'),g['appendChild'](e['element']),this[K(0x140)]['appendChild'](g);for(const t of this[K(0x176)]['propertyGridExtensions']){const u=t[K(0xf7)](c);u&&(u[K(0x129)]['setAttribute']('appearance',this['getAttribute'](K(0x125))??K(0x131)),u['element']['style']['gridColumn']='1\x20/\x20-1',this[K(0x172)]['push']({'property':c,'extension':u}),this[K(0x140)][K(0x151)](u['element']));}this[K(0x122)][K(0xfb)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const P=w;c[P(0x150)](),e[P(0xfa)]['remove']('dragOverProperty');}[w(0x164)](c,d,e){const Q=w;c['preventDefault']();const f=c['dataTransfer']['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][Q(0x16b)];if(h){const i=h[Q(0x10a)](c,d,this[Q(0x101)]);(i??Q(0x154))!='none'?(e['classList'][Q(0x17d)](Q(0x156)),c[Q(0x10f)]['dropEffect']=i):e[Q(0xfa)]['remove']('dragOverProperty');}}const g=c['dataTransfer'][Q(0x15a)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[Q(0x176)][Q(0x15d)];if(j){const k=j['dragOverOnProperty'](c,d,this[Q(0x101)]);(k??Q(0x154))!=Q(0x154)?(e['classList']['add'](Q(0x156)),c['dataTransfer'][Q(0x144)]=k):e['classList']['remove'](Q(0x156));}}}['_onDrop'](c,d,e){const R=w;c[R(0x150)](),e['classList']['remove'](R(0x156));const f=c[R(0x10f)][R(0x181)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this[R(0x176)][R(0x16b)];i&&i[R(0x13f)](c,d,h,this[R(0x101)]);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON[R(0x10b)](g),k=this['_serviceContainer'][R(0x15d)];k&&k[R(0x13f)](c,d,j,this['_designItems']);}}[w(0x137)](c,d){const S=w;let e;if(this['propertyContextMenuProvider'])e=this['propertyContextMenuProvider'](this[S(0x101)],d);if(!e)e=d[S(0x13c)][S(0x136)](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[S(0x101)])??[]];ContextMenu['show'](e,c);}[w(0x115)](c){const T=w;this[T(0x101)]=c;for(const {extension:d}of this[T(0x172)])d[T(0x103)](c);for(let e of this['_propertyMap']){e[0x1][T(0x138)][T(0x115)](c);}}[w(0x173)](c){const U=w;for(const {extension:d}of this[U(0x172)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[U(0x117)](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1][U(0x138)]);}}static[w(0x117)](c,d,e,f,g){const V=w;if(e&&e['length']){let h=f[V(0x109)](e,d);c['dataset'][V(0x106)]=h;let i=f[V(0x110)](e,d);c[V(0x12c)]=d['name']+':\x20'+h;if(h==ValueType[V(0x154)])c[V(0x174)][V(0x166)]='',i=f[V(0x161)](e,d);else{if(h==ValueType['all'])c[V(0x174)][V(0x166)]='white';else{if(h==ValueType['some'])c[V(0x174)]['background']=V(0x158);else{if(h==ValueType['bound'])c['style'][V(0x166)]=V(0x147);else h==ValueType[V(0x12e)]&&(i=f['getUnsetValue'](e,d),c[V(0x174)][V(0x166)]='yellow');}}}g?.[V(0x107)](h,i);}else c['style']['background']='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);