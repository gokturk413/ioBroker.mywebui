const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xf6))/0x1*(parseInt(v(0xa2))/0x2)+parseInt(v(0x9d))/0x3*(-parseInt(v(0xe3))/0x4)+parseInt(v(0x7f))/0x5+-parseInt(v(0xda))/0x6+parseInt(v(0xa0))/0x7*(-parseInt(v(0xbf))/0x8)+parseInt(v(0xd1))/0x9*(-parseInt(v(0x72))/0xa)+parseInt(v(0x8c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x519ce));function b(c,d){c=c-0x72;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';function a(){const U=['key','set','background','refreshIsSetElementAndEditorForDesignItems','focus','remove','getAttribute','_onDragOver','valueType','flex','342EFhEfd','refreshAllExtensions','aria-label','onmouseenter','appearance','openContextMenu','\x27\x20to\x20\x27','editor-control','classList','2085066cBLRui','getPropertyNameSuggestions','1\x20/\x20-1','_shouldCreateElements','_serviceContainer','appendChild','getData','none','marginLeft','4ZgNtRZ','gray','push','preventDefault','propertyGridDragDropService','propertyGroupClick','border','_lastClassType','20px','2\x20/\x204','defaultValue','onclick','clear','className','button','text','name','hide-label','getProperties','562VKHshP','bindableObjectDragDropService','textContent','center','5170vxMuSZ','_restoreCachedInititalValues','openGroup',',\x20default:\x20','span','constructor','dropOnProperty','width','10px','propertyType','observedAttributes','createPropertyEditors','height','2694715OLkjDX','_onDragLeave','yellow','rename\x20property\x20name\x20from\x20\x27','_datalist','<br>','setAttribute','shadowRoot','propertyContextMenuProvider','value','Enter','readonly','htmlFor','7556967fgpIUb','7px','hidden','fullOnClassChange','createElements','service','setPropertiesService','dataTransfer','dragOverProperty','add','desc','_propertiesService','isSetElement','dragOverOnProperty','_designItems','node-projects-property-grid-property-list','clickable','822561AtLCvx','label','length','378atMExr','displayName','386dpQdjT','_onDrop','removeAttribute',',\x20propertytype:\x20','onkeyup','createElement','bound','propertyGroupHover','getRefreshMode','hideLabel','dropEffect','type','_div','dataset','complex','_rebuildElements','getContextMenu','rowElement','renamable','attributeChangedCallback','expandOrCollapsePropertyGroups','fromStylesheet','style','define','_propertyMap','_extensions','refresh','append','commit','53152bMfxNP','element','dispose','classic','removeAllChildnodes','createPropertyGroups','disabled','ondragleave'];a=function(){return U;};return a();}import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x7c)]=['appearance'];[w(0xb5)](){const x=w;for(const {extension:c}of this[x(0xbb)])c[x(0xc0)][x(0x85)]('appearance',this[x(0xcd)]('appearance')??x(0xc2));}[w(0xae)];[w(0xba)]=new Map();[w(0xde)];['_propertiesService'];[w(0x9a)];['_lastClassType'];['_addCounter']=0x0;[w(0xbb)]=[];['propertyGroupHover'];['propertyGroupClick'];['propertyContextMenuProvider'];get['propertiesService'](){const y=w;return this[y(0x97)];}static get[w(0xb8)](){return css`
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
    `;}constructor(c){const z=w;super(),this[z(0x73)](),this[z(0xde)]=c,this[z(0xae)]=document['createElement']('div'),this[z(0xae)][z(0xf0)]='content-wrapper',this[z(0x86)]['appendChild'](this['_div']);}[w(0x92)](c){const A=w;if(this[A(0x97)]!=c){this[A(0x97)]=c,DomHelper[A(0xc3)](this[A(0xae)]),this[A(0xba)][A(0xef)]();for(const {extension:d}of this['_extensions'])d[A(0xc1)]?.();this[A(0xbb)]=[];}}async[w(0x90)](c){const B=w;if(!this[B(0xdd)](c))return!![];const d=await this[B(0x97)]?.[B(0xf5)](c);return this[B(0xb1)](c,d);}['_shouldCreateElements'](c){const C=w;if(!this['_propertiesService'])return![];if(this['_propertyMap']['size']==0x0)return!![];const d=this['_propertiesService'][C(0xaa)](c);return d!==RefreshMode[C(0xe1)]&&(d!==RefreshMode[C(0x8f)]||this[C(0xea)]!==c['element'][C(0x77)]);}[w(0xb1)](c,d){const D=w;this['_lastClassType']=c[D(0xc0)]['constructor'],DomHelper['removeAllChildnodes'](this['_div']),this[D(0xba)]['clear']();for(const {extension:e}of this[D(0xbb)])e['dispose']?.();this[D(0xbb)]=[];if(d?.[D(0x9f)]){for(let f of d){if('properties'in f)this[D(0xc4)](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const F=w;let d=document['createElement']('span');d['addEventListener']('click',()=>{const E=b;this[E(0xb6)](c),d[E(0xd9)]['toggle']('expanded');}),d['innerHTML']=c[F(0xf3)]['replaceAll']('\x0a',F(0x84)),d[F(0xf0)]='group-header',this[F(0xae)]['appendChild'](d);let e=document['createElement'](F(0x76));e['innerHTML']=c['description']??'',e[F(0xf0)]='group-desc';this[F(0xa9)]&&(d['onmouseenter']=()=>{const G=F;if(this[G(0xa9)](c,G(0xf3)))d['setAttribute'](G(0x9c),'');else d[G(0xa4)]('clickable');},d['onclick']=()=>{const H=F;if(this[H(0xe8)])this['propertyGroupClick'](c,H(0xf3));},e[F(0xd4)]=()=>{const I=F;if(this[I(0xa9)](c,I(0x96)))e['setAttribute']('clickable','');else e[I(0xa4)]('clickable');},e['onclick']=()=>{if(this['propertyGroupClick'])this['propertyGroupClick'](c,'desc');});this[F(0xae)][F(0xdf)](e);for(const f of c['properties'])this[F(0x7d)](f,!![]);}['expandOrCollapsePropertyGroups'](c){const J=w;for(let d of c['properties']){const e=this[J(0xba)]['get'](d);e[J(0xb3)]['hidden']=!e[J(0xb3)][J(0x8e)];for(const {property:f,extension:g}of this[J(0xbb)])if(f===d)g['element']['hidden']=e['rowElement']['hidden'];}}[w(0x7d)](c,d){const K=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[K(0xde)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[K(0xa7)]('div');g['className']='property-row';if(c[K(0xab)])g['classList'][K(0x95)](K(0xf4));let h=document[K(0xa7)]('div');h[K(0xf0)]='property-actions';if(d)h[K(0xb8)][K(0xe2)]='10px';h[K(0xb8)]['width']='20px',h['style']['height']=K(0xeb),h[K(0xb8)]['display']=K(0xd0),h[K(0xb8)]['alignItems']=K(0xf9);let i=document[K(0xa7)](K(0xf1));i[K(0xad)]=K(0xf1),i[K(0xf0)]='property-status',i[K(0xf8)]='⋯',i['setAttribute'](K(0xd3),'Actions\x20for\x20'+(c[K(0xa1)]??c[K(0xf3)])),i[K(0xc5)]=c[K(0x8a)]===!![],i['style'][K(0x79)]=K(0x8d),i['style'][K(0x7e)]='7px',i['style'][K(0xe9)]='1px\x20white\x20solid',i['style']['cursor']='pointer';if(c['propertyType']!=PropertyType[K(0xb0)])h[K(0xdf)](i);g['appendChild'](h);c[K(0x8a)]!==!![]&&(i['oncontextmenu']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i[K(0xee)]=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c['type']=='addNew'){let j=e[K(0xc0)];j['disabled']=!![],j['id']='addNew_input_'+ ++this['_addCounter'];let k=document[K(0xa7)]('input');f=k;d&&(k['style']['marginLeft']='10px',k['style'][K(0x79)]='calc(100%\x20-\x2010px)');k[K(0x88)]=c['name'],k[K(0xad)]=K(0xf2),k['id']='addNew_label_'+this['_addCounter'],k[K(0xa6)]=l=>{const L=K;l['key']==L(0x89)&&k[L(0x88)]&&(c[L(0xf3)]=k['value'],k[L(0xc5)]=!![],j[L(0xc5)]=![],j[L(0xcb)]());};if(c['service']['getPropertyNameSuggestions']){const l=c['service'][K(0xdb)](null),m=document['createElement']('datalist');m['id']='addNew_'+this['_addCounter']+K(0x83);for(let n of l){const o=document['createElement']('option');o[K(0x88)]=n,m[K(0xbd)](o);}g[K(0xdf)](m),k['setAttribute']('list',m['id']);}g['appendChild'](k);}else{if(c[K(0xab)])f=document['createElement'](K(0x76));else{if(!c[K(0xb4)]){let p=document[K(0xa7)](K(0x9e));f=p;if(d)p['style'][K(0xe2)]=K(0x7a);p[K(0x8b)]=c['name'],p[K(0xf8)]=c['displayName']??c[K(0xf3)],p['title']=c['description']??(c['displayName']??c[K(0xf3)])+'\x20(type:\x20'+c['type']+(c[K(0xed)]?K(0x75)+c['defaultValue']:'')+K(0xa5)+c[K(0x7b)]+')',p[K(0xc6)]=q=>this[K(0x80)](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this[K(0xa3)](q,c,p),g[K(0xdf)](p);}else{let q=document['createElement']('input');f=q;d&&(q['style'][K(0xe2)]=K(0x7a),q[K(0xb8)]['width']='calc(100%\x20-\x2010px)');q['id']='label_'+c['name'];let r=e['element'];q[K(0x88)]=c[K(0xf3)],q['onkeyup']=async t=>{const M=K;if(t[M(0xc7)]==M(0x89)&&q[M(0x88)]){const u=this['_designItems'][0x0][M(0x74)](M(0x82)+c[M(0xf3)]+M(0xd7)+q['value']+'\x27');c[M(0x91)]['clearValue'](this[M(0x9a)],c,'all'),c[M(0xf3)]=q[M(0x88)],await c[M(0x91)]['setValue'](this['_designItems'],c,r[M(0x88)]),u[M(0xbe)](),this['_designItems'][0x0]['instanceServiceContainer']['designerCanvas']['extensionManager'][M(0xd2)](this[M(0x9a)]);}},g['appendChild'](q);}}}if(c['name'])e['element']['id']=c['name'];if(e[K(0xc0)]instanceof HTMLElement)e[K(0xc0)]['classList'][K(0x95)](K(0xd8));if(c['hideLabel'])e['element'][K(0xb8)]['gridColumn']=K(0xec);f['classList']['add']('property-label'),g[K(0xdf)](e[K(0xc0)]),this[K(0xae)]['appendChild'](g);for(const t of this[K(0xde)]['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u[K(0xc0)][K(0x85)](K(0xd5),this['getAttribute'](K(0xd5))??K(0xc2)),u['element']['style']['gridColumn']=K(0xdc),this['_extensions'][K(0xe5)]({'property':c,'extension':u}),this['_div'][K(0xdf)](u['element']));}this['_propertyMap'][K(0xc8)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x80)](c,d,e){const N=w;c['preventDefault'](),e['classList'][N(0xcc)](N(0x94));}[w(0xce)](c,d,e){const O=w;c[O(0xe6)]();const f=c[O(0x93)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h['dragOverOnProperty'](c,d,this[O(0x9a)]);(i??'none')!='none'?(e['classList'][O(0x95)](O(0x94)),c[O(0x93)]['dropEffect']=i):e[O(0xd9)][O(0xcc)](O(0x94));}}const g=c[O(0x93)]['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[O(0xde)]['propertyGridDragDropService'];if(j){const k=j[O(0x99)](c,d,this['_designItems']);(k??'none')!='none'?(e['classList']['add'](O(0x94)),c[O(0x93)][O(0xac)]=k):e[O(0xd9)][O(0xcc)](O(0x94));}}}[w(0xa3)](c,d,e){const P=w;c[P(0xe6)](),e['classList'][P(0xcc)]('dragOverProperty');const f=c['dataTransfer'][P(0xe0)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][P(0xf7)];i&&i[P(0x78)](c,d,h,this[P(0x9a)]);}const g=c['dataTransfer'][P(0xe0)](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[P(0xde)][P(0xe7)];k&&k[P(0x78)](c,d,j,this['_designItems']);}}[w(0xd6)](c,d){const Q=w;let e;if(this['propertyContextMenuProvider'])e=this[Q(0x87)](this[Q(0x9a)],d);if(!e)e=d['service'][Q(0xb2)](this[Q(0x9a)],d);for(const {property:f,extension:g}of this[Q(0xbb)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}['designItemsChanged'](c){const R=w;this['_designItems']=c;for(const {extension:d}of this[R(0xbb)])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1]['editor']['designItemsChanged'](c);}}['refreshForDesignItems'](c){const S=w;for(const {extension:d}of this['_extensions'])d[S(0xbc)](c);for(let e of this[S(0xba)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][S(0x98)],e[0x0],c,this[S(0x97)],e[0x1]['editor']);}}static[w(0xca)](c,d,e,f,g){const T=w;if(e&&e['length']){let h=f['isSet'](e,d);c[T(0xaf)][T(0xcf)]=h;let i=f['getValue'](e,d);c['title']=d[T(0xf3)]+':\x20'+h;if(h==ValueType[T(0xe1)])c[T(0xb8)]['background']='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c[T(0xb8)]['background']='white';else{if(h==ValueType['some'])c[T(0xb8)][T(0xc9)]=T(0xe4);else{if(h==ValueType[T(0xa8)])c['style'][T(0xc9)]='orange';else h==ValueType[T(0xb7)]&&(i=f['getUnsetValue'](e,d),c[T(0xb8)]['background']=T(0x81));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style'][T(0xc9)]='';}}customElements[w(0xb9)](w(0x9b),PropertyGridPropertyList);