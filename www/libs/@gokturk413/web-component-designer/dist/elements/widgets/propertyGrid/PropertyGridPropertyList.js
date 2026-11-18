const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xf4))/0x1+-parseInt(v(0xf5))/0x2*(-parseInt(v(0x139))/0x3)+parseInt(v(0x11d))/0x4*(parseInt(v(0x10b))/0x5)+-parseInt(v(0x13b))/0x6+parseInt(v(0x172))/0x7*(parseInt(v(0x11b))/0x8)+-parseInt(v(0x128))/0x9+-parseInt(v(0x124))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f863));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const V=['text','remove','properties','setAttribute','dataset','button','createElement','readonly','addNew','createPropertyEditors','valueType','shadowRoot','center','dropEffect','constructor','_designItems','propertiesService',',\x20default:\x20','_serviceContainer','onmouseenter','createExtension','bound','desc','propertyGridExtensions','editor-control','getAttribute','size','onkeyup','_datalist','complex','classic','none','indexOf','propertyContextMenuProvider','property-label','service','yellow','\x27\x20to\x20\x27','removeAllChildnodes','133uVzKBz','12px','hidden','forSomeServicesTillResult','value','gray','height','node-projects-property-grid-property-list','rename\x20property\x20name\x20from\x20\x27','refreshForDesignItems','createEditor','innerHTML','label_','_propertiesService','setPropertiesService','propertyGroupHover','className','getContextMenuItems','isSetElement','marginLeft','append','oncontextmenu','439238QIJQbL','4ItBKey','rowElement','title','dragOverOnProperty','appearance','20px','white','_onDragOver','type','dragOverProperty','add','description','_onDrop','orange','Enter','propertyGridDragDropService','background','hideLabel','width','editor','_onDragLeave','style','5SOwdQt','propertyType','expandOrCollapsePropertyGroups','name','define','openContextMenu','focus','refreshIsSetElementAndEditorForDesignItems','_div','expanded','hide-label','2px','disabled','preventDefault','attributeChangedCallback','ondragover','185960TCZnFE','htmlFor','783428EDIKwu','_propertyMap','borderRadius','_extensions','div','commit','propertyGroupClick','2315920owOLDE','setValue','toggle','isSet','2190834icHAZp','getPropertyNameSuggestions','label','appendChild','ondragleave','types','classList','addNew_input_','displayName','getUnsetValue','fromStylesheet','_addCounter','group-desc','_restoreCachedInititalValues','addEventListener','_rebuildElements','<br>','69366SMmTJH','element','2326686kezjjh','list','dispose','removeAttribute','span','show','designItemsChanged','all','textContent','click','onclick','_lastClassType','clickable','dataTransfer','bindableObjectDragDropService','10px'];a=function(){return V;};return a();}function b(c,d){c=c-0xe4;const e=a();let f=e[c];return f;}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];[w(0x119)](){const x=w;for(const {extension:c}of this['_extensions'])c['element']['setAttribute']('appearance',this[x(0x164)](x(0xf9))??x(0x169));}[w(0x113)];[w(0x11e)]=new Map();['_serviceContainer'];[w(0xeb)];['_designItems'];['_lastClassType'];[w(0x133)]=0x0;[w(0x120)]=[];['propertyGroupHover'];['propertyGroupClick'];['propertyContextMenuProvider'];get[w(0x15b)](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this[y(0x135)](),this[y(0x15d)]=c,this['_div']=document[y(0x151)](y(0x121)),this[y(0x113)]['className']='content-wrapper',this[y(0x156)][y(0x12b)](this[y(0x113)]);}[w(0xec)](c){const z=w;if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper[z(0x171)](this[z(0x113)]),this['_propertyMap']['clear']();for(const {extension:d}of this[z(0x120)])d['dispose']?.();this[z(0x120)]=[];}}async['createElements'](c){if(!this['_shouldCreateElements'](c))return!![];const d=await this['_propertiesService']?.['getProperties'](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const A=w;if(!this['_propertiesService'])return![];if(this[A(0x11e)][A(0x165)]==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode[A(0x16a)]&&(d!==RefreshMode['fullOnClassChange']||this[A(0x146)]!==c[A(0x13a)]['constructor']);}[w(0x137)](c,d){const B=w;this[B(0x146)]=c['element'][B(0x159)],DomHelper['removeAllChildnodes'](this['_div']),this[B(0x11e)]['clear']();for(const {extension:e}of this['_extensions'])e[B(0x13d)]?.();this[B(0x120)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const C=w;let d=document['createElement']('span');d[C(0x136)](C(0x144),()=>{const D=C;this[D(0x10d)](c),d['classList'][D(0x126)](D(0x114));}),d['innerHTML']=c['name']['replaceAll']('\x0a',C(0x138)),d[C(0xee)]='group-header',this[C(0x113)]['appendChild'](d);let e=document['createElement']('span');e[C(0xe9)]=c[C(0x100)]??'',e['className']=C(0x134);this['propertyGroupHover']&&(d[C(0x15e)]=()=>{const E=C;if(this['propertyGroupHover'](c,E(0x10e)))d['setAttribute']('clickable','');else d[E(0x13e)](E(0x147));},d[C(0x145)]=()=>{const F=C;if(this[F(0x123)])this[F(0x123)](c,'name');},e[C(0x15e)]=()=>{const G=C;if(this[G(0xed)](c,'desc'))e['setAttribute'](G(0x147),'');else e['removeAttribute'](G(0x147));},e[C(0x145)]=()=>{const H=C;if(this[H(0x123)])this['propertyGroupClick'](c,H(0x161));});this['_div'][C(0x12b)](e);for(const f of c[C(0x14d)])this['createPropertyEditors'](f,!![]);}[w(0x10d)](c){const I=w;for(let d of c[I(0x14d)]){const e=this['_propertyMap']['get'](d);e[I(0xf6)]['hidden']=!e[I(0xf6)][I(0x174)];for(const {property:f,extension:g}of this[I(0x120)])if(f===d)g[I(0x13a)][I(0x174)]=e[I(0xf6)][I(0x174)];}}[w(0x154)](c,d){const J=w;let e,f;if(c[J(0xe8)])e=c['createEditor'](c);else e=this['_serviceContainer'][J(0x175)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[J(0x151)](J(0x121));g[J(0xee)]='property-row';if(c[J(0x106)])g[J(0x12e)]['add'](J(0x115));let h=document[J(0x151)]('div');h['className']='property-actions';if(d)h['style'][J(0xf1)]=J(0x14a);h[J(0x10a)][J(0x107)]=J(0xfa),h['style'][J(0xe4)]=J(0xfa),h[J(0x10a)]['display']='flex',h[J(0x10a)]['alignItems']=J(0x157);let i=document['createElement'](J(0x150));i['type']=J(0x150),i['className']='property-status',i['textContent']='⋯',i[J(0x14e)]('aria-label','Actions\x20for\x20'+(c['displayName']??c[J(0x10e)])),i[J(0x117)]=c[J(0x152)]===!![],i['style']['width']=J(0x173),i[J(0x10a)][J(0xe4)]='12px',i[J(0x10a)][J(0x11f)]=J(0x116),i[J(0x10a)]['border']='1px\x20white\x20solid',i[J(0x10a)]['cursor']='pointer';if(c[J(0x10c)]!=PropertyType[J(0x168)])h[J(0x12b)](i);g[J(0x12b)](h);c['readonly']!==!![]&&(i[J(0xf3)]=j=>{const K=J;j['preventDefault'](),this[K(0x110)](j,c);},i['onclick']=j=>{const L=J;j[L(0x118)](),this['openContextMenu'](j,c);});if(c[J(0xfd)]==J(0x153)){let j=e['element'];j['disabled']=!![],j['id']=J(0x12f)+ ++this[J(0x133)];let k=document[J(0x151)]('input');f=k;d&&(k[J(0x10a)][J(0xf1)]=J(0x14a),k[J(0x10a)]['width']='calc(100%\x20-\x2010px)');k[J(0x176)]=c['name'],k[J(0xfd)]=J(0x14b),k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const M=J;l['key']==M(0x103)&&k['value']&&(c['name']=k['value'],k['disabled']=!![],j['disabled']=![],j[M(0x111)]());};if(c['service'][J(0x129)]){const l=c['service']['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']='addNew_'+this[J(0x133)]+J(0x167);for(let n of l){const o=document['createElement']('option');o[J(0x176)]=n,m[J(0xf2)](o);}g[J(0x12b)](m),k[J(0x14e)](J(0x13c),m['id']);}g[J(0x12b)](k);}else{if(c[J(0x106)])f=document['createElement'](J(0x13f));else{if(!c['renamable']){let p=document[J(0x151)](J(0x12a));f=p;if(d)p[J(0x10a)][J(0xf1)]='10px';p[J(0x11c)]=c[J(0x10e)],p[J(0x143)]=c[J(0x130)]??c[J(0x10e)],p[J(0xf7)]=c[J(0x100)]??(c[J(0x130)]??c[J(0x10e)])+'\x20(type:\x20'+c[J(0xfd)]+(c['defaultValue']?J(0x15c)+c['defaultValue']:'')+',\x20propertytype:\x20'+c['propertyType']+')',p[J(0x12c)]=q=>this[J(0x109)](q,c,p),p[J(0x11a)]=q=>this[J(0xfc)](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g['appendChild'](p);}else{let q=document['createElement']('input');f=q;d&&(q['style'][J(0xf1)]=J(0x14a),q['style']['width']='calc(100%\x20-\x2010px)');q['id']=J(0xea)+c['name'];let r=e['element'];q['value']=c['name'],q[J(0x166)]=async t=>{const N=J;if(t['key']=='Enter'&&q[N(0x176)]){const u=this['_designItems'][0x0]['openGroup'](N(0xe6)+c['name']+N(0x170)+q[N(0x176)]+'\x27');c['service']['clearValue'](this[N(0x15a)],c,N(0x142)),c[N(0x10e)]=q['value'],await c['service'][N(0x125)](this['_designItems'],c,r[N(0x176)]),u[N(0x122)](),this[N(0x15a)][0x0]['instanceServiceContainer']['designerCanvas']['extensionManager']['refreshAllExtensions'](this[N(0x15a)]);}},g['appendChild'](q);}}}if(c['name'])e['element']['id']=c['name'];if(e[J(0x13a)]instanceof HTMLElement)e['element'][J(0x12e)][J(0xff)](J(0x163));if(c['hideLabel'])e[J(0x13a)]['style']['gridColumn']='2\x20/\x204';f[J(0x12e)]['add'](J(0x16d)),g[J(0x12b)](e['element']),this[J(0x113)][J(0x12b)](g);for(const t of this[J(0x15d)][J(0x162)]){const u=t[J(0x15f)](c);u&&(u[J(0x13a)]['setAttribute']('appearance',this['getAttribute']('appearance')??'classic'),u[J(0x13a)]['style']['gridColumn']='1\x20/\x20-1',this['_extensions']['push']({'property':c,'extension':u}),this[J(0x113)][J(0x12b)](u['element']));}this[J(0x11e)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const O=w;c['preventDefault'](),e[O(0x12e)][O(0x14c)](O(0xfe));}[w(0xfc)](c,d,e){const P=w;c['preventDefault']();const f=c[P(0x148)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h[P(0xf8)](c,d,this[P(0x15a)]);(i??P(0x16a))!=P(0x16a)?(e[P(0x12e)][P(0xff)](P(0xfe)),c[P(0x148)][P(0x158)]=i):e[P(0x12e)]['remove'](P(0xfe));}}const g=c[P(0x148)][P(0x12d)][P(0x16b)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][P(0x104)];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??P(0x16a))!=P(0x16a)?(e[P(0x12e)][P(0xff)](P(0xfe)),c[P(0x148)][P(0x158)]=k):e[P(0x12e)][P(0x14c)]('dragOverProperty');}}}[w(0x101)](c,d,e){const Q=w;c[Q(0x118)](),e[Q(0x12e)]['remove'](Q(0xfe));const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][Q(0x149)];i&&i['dropOnProperty'](c,d,h,this[Q(0x15a)]);}const g=c[Q(0x148)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer'][Q(0x104)];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}[w(0x110)](c,d){const R=w;let e;if(this[R(0x16c)])e=this['propertyContextMenuProvider'](this['_designItems'],d);if(!e)e=d[R(0x16e)]['getContextMenu'](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g[R(0xef)]?.(this[R(0x15a)])??[]];ContextMenu[R(0x140)](e,c);}['designItemsChanged'](c){const S=w;this[S(0x15a)]=c;for(const {extension:d}of this[S(0x120)])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][S(0x108)][S(0x141)](c);}}[w(0xe7)](c){const T=w;for(const {extension:d}of this[T(0x120)])d['refresh'](c);for(let e of this[T(0x11e)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][T(0xf0)],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static[w(0x112)](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f[U(0x127)](e,d);c[U(0x14f)][U(0x155)]=h;let i=f['getValue'](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType['none'])c[U(0x10a)]['background']='',i=f[U(0x131)](e,d);else{if(h==ValueType['all'])c[U(0x10a)]['background']=U(0xfb);else{if(h==ValueType['some'])c['style']['background']=U(0x177);else{if(h==ValueType[U(0x160)])c['style'][U(0x105)]=U(0x102);else h==ValueType[U(0x132)]&&(i=f['getUnsetValue'](e,d),c['style']['background']=U(0x16f));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style'][U(0x105)]='';}}customElements[w(0x10f)](w(0xe5),PropertyGridPropertyList);