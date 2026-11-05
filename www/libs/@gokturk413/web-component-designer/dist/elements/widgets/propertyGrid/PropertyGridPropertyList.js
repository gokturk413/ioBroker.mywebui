const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x1a6))/0x1+-parseInt(v(0x1be))/0x2*(parseInt(v(0x1a4))/0x3)+-parseInt(v(0x1a3))/0x4+parseInt(v(0x17d))/0x5*(parseInt(v(0x144))/0x6)+-parseInt(v(0x18d))/0x7*(parseInt(v(0x14c))/0x8)+parseInt(v(0x13d))/0x9*(parseInt(v(0x19e))/0xa)+parseInt(v(0x13b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67bf7));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x166)]=[w(0x133)];[w(0x154)](){const x=w;for(const {extension:c}of this[x(0x153)])c['element'][x(0x145)](x(0x133),this['getAttribute'](x(0x133))??x(0x1ab));}[w(0x1b2)];['_propertyMap']=new Map();[w(0x1c0)];['_propertiesService'];[w(0x1b7)];['_lastClassType'];[w(0x1a1)]=0x0;[w(0x153)]=[];[w(0x161)];['propertyGroupClick'];['propertyContextMenuProvider'];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this['_div']=document['createElement']('div'),this['_div']['className']=y(0x15b),this['shadowRoot']['appendChild'](this['_div']);}[w(0x164)](c){const z=w;if(this[z(0x152)]!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this[z(0x1b2)]),this['_propertyMap'][z(0x167)]();for(const {extension:d}of this[z(0x153)])d['dispose']?.();this['_extensions']=[];}}async['createElements'](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this['_propertiesService']?.[A(0x141)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=w;if(!this[B(0x152)])return![];if(this[B(0x19d)][B(0x16a)]==0x0)return!![];const d=this[B(0x152)][B(0x175)](c);return d!==RefreshMode[B(0x1a2)]&&(d!==RefreshMode['fullOnClassChange']||this[B(0x1ad)]!==c[B(0x170)][B(0x18f)]);}['_rebuildElements'](c,d){const C=w;this[C(0x1ad)]=c[C(0x170)][C(0x18f)],DomHelper[C(0x1b3)](this[C(0x1b2)]),this['_propertyMap'][C(0x167)]();for(const {extension:e}of this[C(0x153)])e[C(0x16e)]?.();this['_extensions']=[];if(d?.[C(0x15c)]){for(let f of d){if('properties'in f)this[C(0x1bc)](f);else this[C(0x17e)](f);}return!![];}return![];}[w(0x1bc)](c){const D=w;let d=document[D(0x181)]('span');d[D(0x168)](D(0x155),()=>{const E=D;this[E(0x136)](c),d[E(0x1ae)][E(0x179)]('expanded');}),d['innerHTML']=c[D(0x13e)]['replaceAll']('\x0a',D(0x190)),d['className']='group-header',this[D(0x1b2)][D(0x1bb)](d);let e=document['createElement'](D(0x146));e['innerHTML']=c[D(0x17f)]??'',e['className']=D(0x16d);this['propertyGroupHover']&&(d[D(0x159)]=()=>{const F=D;if(this['propertyGroupHover'](c,F(0x13e)))d['setAttribute']('clickable','');else d['removeAttribute'](F(0x186));},d[D(0x147)]=()=>{const G=D;if(this['propertyGroupClick'])this[G(0x131)](c,'name');},e['onmouseenter']=()=>{const H=D;if(this['propertyGroupHover'](c,H(0x1a7)))e['setAttribute'](H(0x186),'');else e['removeAttribute'](H(0x186));},e['onclick']=()=>{const I=D;if(this['propertyGroupClick'])this['propertyGroupClick'](c,I(0x1a7));});this['_div']['appendChild'](e);for(const f of c['properties'])this[D(0x17e)](f,!![]);}['expandOrCollapsePropertyGroups'](c){const J=w;for(let d of c[J(0x160)]){const e=this[J(0x19d)][J(0x171)](d);e[J(0x180)][J(0x178)]=!e['rowElement'][J(0x178)];for(const {property:f,extension:g}of this[J(0x153)])if(f===d)g[J(0x170)]['hidden']=e[J(0x180)][J(0x178)];}}[w(0x17e)](c,d){const K=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this['_serviceContainer'][K(0x184)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document['createElement'](K(0x1a0));g['className']=K(0x1b5);if(c[K(0x1af)])g[K(0x1ae)][K(0x14b)](K(0x139));let h=document['createElement']('div');h[K(0x15e)]='property-actions';if(d)h['style']['marginLeft']=K(0x183);h['style'][K(0x17c)]='20px',h['style']['height']='20px',h[K(0x1a8)]['display']='flex',h[K(0x1a8)]['alignItems']='center';let i=document[K(0x181)](K(0x1c1));i[K(0x15d)]=K(0x1c1),i['className']='property-status',i['textContent']='⋯',i[K(0x145)]('aria-label','Actions\x20for\x20'+(c['displayName']??c[K(0x13e)])),i['disabled']=c['readonly']===!![],i['style']['width']=K(0x14f),i['style']['height']=K(0x14f),i['style']['borderRadius']=K(0x1b0),i[K(0x1a8)][K(0x1bf)]='1px\x20white\x20solid',i[K(0x1a8)][K(0x143)]=K(0x182);if(c[K(0x1ac)]!=PropertyType[K(0x14a)])h[K(0x1bb)](i);g[K(0x1bb)](h);c['readonly']!==!![]&&(i[K(0x1bd)]=j=>{const L=K;j[L(0x18c)](),this[L(0x1a5)](j,c);},i['onclick']=j=>{const M=K;j[M(0x18c)](),this[M(0x1a5)](j,c);});if(c[K(0x15d)]==K(0x198)){let j=e[K(0x170)];j[K(0x14d)]=!![],j['id']=K(0x191)+ ++this['_addCounter'];let k=document[K(0x181)]('input');f=k;d&&(k['style']['marginLeft']='10px',k[K(0x1a8)]['width']=K(0x177));k[K(0x18b)]=c['name'],k[K(0x15d)]=K(0x196),k['id']='addNew_label_'+this[K(0x1a1)],k['onkeyup']=l=>{const N=K;l['key']==N(0x193)&&k[N(0x18b)]&&(c['name']=k['value'],k['disabled']=!![],j[N(0x14d)]=![],j[N(0x138)]());};if(c[K(0x195)]['getPropertyNameSuggestions']){const l=c[K(0x195)]['getPropertyNameSuggestions'](null),m=document['createElement'](K(0x158));m['id']='addNew_'+this['_addCounter']+'_datalist';for(let n of l){const o=document[K(0x181)]('option');o[K(0x18b)]=n,m['append'](o);}g[K(0x1bb)](m),k[K(0x145)](K(0x130),m['id']);}g[K(0x1bb)](k);}else{if(c[K(0x1af)])f=document['createElement']('span');else{if(!c['renamable']){let p=document[K(0x181)]('label');f=p;if(d)p['style'][K(0x151)]='10px';p[K(0x142)]=c['name'],p[K(0x1b8)]=c['displayName']??c['name'],p[K(0x172)]=c[K(0x17f)]??(c['displayName']??c['name'])+K(0x187)+c[K(0x15d)]+(c['defaultValue']?K(0x1b4)+c[K(0x18e)]:'')+',\x20propertytype:\x20'+c['propertyType']+')',p['ondragleave']=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this[K(0x137)](q,c,p),p[K(0x192)]=q=>this['_onDrop'](q,c,p),g['appendChild'](p);}else{let q=document['createElement'](K(0x197));f=q;d&&(q['style'][K(0x151)]='10px',q[K(0x1a8)]['width']=K(0x177));q['id']=K(0x135)+c['name'];let r=e[K(0x170)];q[K(0x18b)]=c['name'],q[K(0x15f)]=async t=>{const O=K;if(t[O(0x1b1)]==O(0x193)&&q['value']){const u=this[O(0x1b7)][0x0][O(0x156)](O(0x199)+c[O(0x13e)]+O(0x194)+q[O(0x18b)]+'\x27');c[O(0x195)][O(0x1b9)](this['_designItems'],c,'all'),c['name']=q['value'],await c[O(0x195)][O(0x15a)](this[O(0x1b7)],c,r['value']),u['commit'](),this[O(0x1b7)][0x0]['instanceServiceContainer']['designerCanvas'][O(0x16f)][O(0x185)](this['_designItems']);}},g['appendChild'](q);}}}if(c[K(0x13e)])e['element']['id']=c[K(0x13e)];if(e[K(0x170)]instanceof HTMLElement)e['element']['classList']['add']('editor-control');if(c['hideLabel'])e['element']['style'][K(0x169)]='2\x20/\x204';f[K(0x1ae)][K(0x14b)]('property-label'),g['appendChild'](e[K(0x170)]),this[K(0x1b2)][K(0x1bb)](g);for(const t of this['_serviceContainer'][K(0x19f)]){const u=t[K(0x157)](c);u&&(u[K(0x170)]['setAttribute']('appearance',this[K(0x174)]('appearance')??'classic'),u['element']['style']['gridColumn']='1\x20/\x20-1',this['_extensions'][K(0x17b)]({'property':c,'extension':u}),this['_div'][K(0x1bb)](u['element']));}this[K(0x19d)][K(0x13a)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x188)](c,d,e){const P=w;c[P(0x18c)](),e[P(0x1ae)][P(0x19b)](P(0x19a));}['_onDragOver'](c,d,e){const Q=w;c[Q(0x18c)]();const f=c['dataTransfer'][Q(0x16b)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][Q(0x148)];if(h){const i=h[Q(0x1b6)](c,d,this['_designItems']);(i??Q(0x1a2))!=Q(0x1a2)?(e[Q(0x1ae)]['add']('dragOverProperty'),c[Q(0x16c)][Q(0x19c)]=i):e[Q(0x1ae)]['remove']('dragOverProperty');}}const g=c['dataTransfer'][Q(0x16b)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[Q(0x1c0)][Q(0x14e)];if(j){const k=j['dragOverOnProperty'](c,d,this[Q(0x1b7)]);(k??Q(0x1a2))!=Q(0x1a2)?(e[Q(0x1ae)]['add']('dragOverProperty'),c[Q(0x16c)][Q(0x19c)]=k):e[Q(0x1ae)][Q(0x19b)]('dragOverProperty');}}}['_onDrop'](c,d,e){const R=w;c[R(0x18c)](),e[R(0x1ae)][R(0x19b)]('dragOverProperty');const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[R(0x162)](f),i=this[R(0x1c0)]['bindableObjectDragDropService'];i&&i[R(0x18a)](c,d,h,this['_designItems']);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[R(0x1c0)][R(0x14e)];k&&k['dropOnProperty'](c,d,j,this[R(0x1b7)]);}}[w(0x1a5)](c,d){const S=w;let e;if(this['propertyContextMenuProvider'])e=this[S(0x149)](this['_designItems'],d);if(!e)e=d['service']['getContextMenu'](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[S(0x1b7)])??[]];ContextMenu[S(0x173)](e,c);}['designItemsChanged'](c){const T=w;this[T(0x1b7)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1]['editor'][T(0x134)](c);}}[w(0x13f)](c){const U=w;for(const {extension:d}of this['_extensions'])d[U(0x150)](c);for(let e of this[U(0x19d)]){PropertyGridPropertyList[U(0x163)](e[0x1][U(0x1aa)],e[0x0],c,this[U(0x152)],e[0x1]['editor']);}}static[w(0x163)](c,d,e,f,g){const V=w;if(e&&e['length']){let h=f[V(0x13c)](e,d);c[V(0x132)]['valueType']=h;let i=f[V(0x176)](e,d);c['title']=d[V(0x13e)]+':\x20'+h;if(h==ValueType[V(0x1a2)])c['style'][V(0x1a9)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c[V(0x1a8)]['background']='white';else{if(h==ValueType[V(0x165)])c[V(0x1a8)]['background']=V(0x17a);else{if(h==ValueType[V(0x1ba)])c['style']['background']=V(0x189);else h==ValueType['fromStylesheet']&&(i=f['getUnsetValue'](e,d),c[V(0x1a8)]['background']=V(0x140));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style'][V(0x1a9)]='';}}function a(){const W=['createPropertyGroups','oncontextmenu','1083886yxMuNf','border','_serviceContainer','button','list','propertyGroupClick','dataset','appearance','designItemsChanged','label_','expandOrCollapsePropertyGroups','_onDragOver','focus','hide-label','set','19855132JZbasw','isSet','5450229cnZuHv','name','refreshForDesignItems','yellow','getProperties','htmlFor','cursor','327108HSNgmJ','setAttribute','span','onclick','bindableObjectDragDropService','propertyContextMenuProvider','complex','add','360sHCqCY','disabled','propertyGridDragDropService','12px','refresh','marginLeft','_propertiesService','_extensions','attributeChangedCallback','click','openGroup','createExtension','datalist','onmouseenter','setValue','content-wrapper','length','type','className','onkeyup','properties','propertyGroupHover','parse','refreshIsSetElementAndEditorForDesignItems','setPropertiesService','some','observedAttributes','clear','addEventListener','gridColumn','size','types','dataTransfer','group-desc','dispose','extensionManager','element','get','title','show','getAttribute','getRefreshMode','getValue','calc(100%\x20-\x2010px)','hidden','toggle','gray','push','width','25unSPOv','createPropertyEditors','description','rowElement','createElement','pointer','10px','forSomeServicesTillResult','refreshAllExtensions','clickable','\x20(type:\x20','_onDragLeave','orange','dropOnProperty','value','preventDefault','130865qEwkab','defaultValue','constructor','<br>','addNew_input_','ondrop','Enter','\x27\x20to\x20\x27','service','text','input','addNew','rename\x20property\x20name\x20from\x20\x27','dragOverProperty','remove','dropEffect','_propertyMap','10iAMvkR','propertyGridExtensions','div','_addCounter','none','3198104dFqTJj','3mUBjQQ','openContextMenu','75488bYnHAE','desc','style','background','isSetElement','classic','propertyType','_lastClassType','classList','hideLabel','2px','key','_div','removeAllChildnodes',',\x20default:\x20','property-row','dragOverOnProperty','_designItems','textContent','clearValue','bound','appendChild'];a=function(){return W;};return a();}function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);