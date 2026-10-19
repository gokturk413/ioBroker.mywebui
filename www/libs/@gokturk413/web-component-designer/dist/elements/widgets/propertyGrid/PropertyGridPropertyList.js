function a(){const V=['setAttribute','4221728LQTIwU','name','div','setPropertiesService','textContent','datalist','propertyGroupHover','shadowRoot','gridColumn','pointer','clear','<br>','propertyGridDragDropService','width','orange','addNew_input_','dispose','getUnsetValue','\x27\x20to\x20\x27','property-label','2859bAqOzm','createElement','2\x20/\x204','bindableObjectDragDropService','152141vKHQmq','span','_propertiesService','refreshIsSetElementAndEditorForDesignItems','createPropertyEditors','classic','createExtension','oncontextmenu','dragOverProperty','6dOBOvK','replaceAll','calc(100%\x20-\x2010px)','_addCounter','extensionManager','designerCanvas','10px','onmouseenter','onclick','openContextMenu','border','appendChild','getContextMenu','properties','preventDefault','option','2148616ULbmEn','property-row','getPropertyNameSuggestions','none','Enter','service','alignItems','createEditor','onkeyup','_div','indexOf','_designItems','remove','propertyGroupClick','some','element','designItemsChanged','hideLabel','clickable','property-status','removeAttribute','button','3828160YfbwJn','style','getContextMenuItems','parse','defaultValue','_extensions','group-header','_serviceContainer','input','623968vXjfip','title','readonly','_onDragLeave','type','get','commit',',\x20default:\x20','refreshAllExtensions','add','classList','disabled','dropOnProperty','key','displayName','constructor','removeAllChildnodes','_lastClassType','getAttribute','forSomeServicesTillResult','background','types','height','clearValue','propertyContextMenuProvider','6348924jhKwKJ','push','propertyGridExtensions','createPropertyGroups','getProperties','isSetElement','define','display','editor-control','_onDrop','htmlFor','20px','value','_restoreCachedInititalValues','rowElement','appearance','show','1550LFzoGB','size','text','refreshValueWithoutNotification','_propertyMap','marginLeft'];a=function(){return V;};return a();}const x=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x191))/0x1+-parseInt(v(0x172))/0x2*(-parseInt(v(0x18d))/0x3)+-parseInt(v(0x1c9))/0x4+parseInt(v(0x1c0))/0x5*(parseInt(v(0x19a))/0x6)+-parseInt(v(0x179))/0x7+parseInt(v(0x1aa))/0x8+-parseInt(v(0x161))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70669));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];['attributeChangedCallback'](){const w=b;for(const {extension:c}of this['_extensions'])c['element'][w(0x178)]('appearance',this[w(0x15a)]('appearance')??'classic');}['_div'];['_propertyMap']=new Map();['_serviceContainer'];['_propertiesService'];['_designItems'];[x(0x159)];[x(0x19d)]=0x0;['_extensions']=[];['propertyGroupHover'];['propertyGroupClick'];['propertyContextMenuProvider'];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=x;super(),this[y(0x16e)](),this[y(0x1c7)]=c,this['_div']=document['createElement'](y(0x17b)),this['_div']['className']='content-wrapper',this[y(0x180)]['appendChild'](this['_div']);}[x(0x17c)](c){const z=x;if(this[z(0x193)]!=c){this['_propertiesService']=c,DomHelper[z(0x158)](this[z(0x1b3)]),this['_propertyMap']['clear']();for(const {extension:d}of this[z(0x1c5)])d[z(0x189)]?.();this[z(0x1c5)]=[];}}async['createElements'](c){const A=x;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x193)]?.[A(0x165)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=x;if(!this[B(0x193)])return![];if(this['_propertyMap'][B(0x173)]==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode['fullOnClassChange']||this[B(0x159)]!==c[B(0x1b9)]['constructor']);}['_rebuildElements'](c,d){const C=x;this['_lastClassType']=c['element'][C(0x157)],DomHelper[C(0x158)](this['_div']),this[C(0x176)][C(0x183)]();for(const {extension:e}of this[C(0x1c5)])e[C(0x189)]?.();this[C(0x1c5)]=[];if(d?.['length']){for(let f of d){if(C(0x1a7)in f)this[C(0x164)](f);else this[C(0x195)](f);}return!![];}return![];}[x(0x164)](c){const D=x;let d=document[D(0x18e)](D(0x192));d['addEventListener']('click',()=>{const E=D;this['expandOrCollapsePropertyGroups'](c),d[E(0x152)]['toggle']('expanded');}),d['innerHTML']=c[D(0x17a)][D(0x19b)]('\x0a',D(0x184)),d['className']=D(0x1c6),this[D(0x1b3)]['appendChild'](d);let e=document[D(0x18e)](D(0x192));e['innerHTML']=c['description']??'',e['className']='group-desc';this[D(0x17f)]&&(d['onmouseenter']=()=>{const F=D;if(this['propertyGroupHover'](c,F(0x17a)))d['setAttribute'](F(0x1bc),'');else d['removeAttribute']('clickable');},d['onclick']=()=>{const G=D;if(this[G(0x1b7)])this[G(0x1b7)](c,'name');},e[D(0x1a1)]=()=>{const H=D;if(this[H(0x17f)](c,'desc'))e['setAttribute']('clickable','');else e[H(0x1be)]('clickable');},e['onclick']=()=>{const I=D;if(this['propertyGroupClick'])this[I(0x1b7)](c,'desc');});this['_div'][D(0x1a5)](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}['expandOrCollapsePropertyGroups'](c){const J=x;for(let d of c[J(0x1a7)]){const e=this[J(0x176)][J(0x1ce)](d);e[J(0x16f)]['hidden']=!e[J(0x16f)]['hidden'];for(const {property:f,extension:g}of this[J(0x1c5)])if(f===d)g['element']['hidden']=e[J(0x16f)]['hidden'];}}[x(0x195)](c,d){const K=x;let e,f;if(c[K(0x1b1)])e=c['createEditor'](c);else e=this[K(0x1c7)][K(0x15b)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[K(0x18e)]('div');g['className']=K(0x1ab);if(c[K(0x1bb)])g[K(0x152)]['add']('hide-label');let h=document['createElement'](K(0x17b));h['className']='property-actions';if(d)h[K(0x1c1)][K(0x177)]=K(0x1a0);h['style']['width']='20px',h['style'][K(0x15e)]=K(0x16c),h['style'][K(0x168)]='flex',h['style'][K(0x1b0)]='center';let i=document['createElement']('button');i[K(0x1cd)]=K(0x1bf),i['className']=K(0x1bd),i['textContent']='⋯',i[K(0x178)]('aria-label','Actions\x20for\x20'+(c['displayName']??c[K(0x17a)])),i['disabled']=c[K(0x1cb)]===!![],i[K(0x1c1)][K(0x186)]='7px',i['style']['height']='7px',i['style'][K(0x1a4)]='1px\x20white\x20solid',i[K(0x1c1)]['cursor']=K(0x182);if(c['propertyType']!=PropertyType['complex'])h[K(0x1a5)](i);g['appendChild'](h);c[K(0x1cb)]!==!![]&&(i[K(0x198)]=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i[K(0x1a2)]=j=>{const L=K;j[L(0x1a8)](),this[L(0x1a3)](j,c);});if(c['type']=='addNew'){let j=e['element'];j['disabled']=!![],j['id']=K(0x188)+ ++this[K(0x19d)];let k=document[K(0x18e)](K(0x1c8));f=k;d&&(k['style']['marginLeft']=K(0x1a0),k['style']['width']='calc(100%\x20-\x2010px)');k[K(0x16d)]=c[K(0x17a)],k['type']=K(0x174),k['id']='addNew_label_'+this[K(0x19d)],k['onkeyup']=l=>{const M=K;l[M(0x155)]==M(0x1ae)&&k[M(0x16d)]&&(c[M(0x17a)]=k[M(0x16d)],k[M(0x153)]=!![],j[M(0x153)]=![],j['focus']());};if(c['service'][K(0x1ac)]){const l=c['service'][K(0x1ac)](null),m=document[K(0x18e)](K(0x17e));m['id']='addNew_'+this['_addCounter']+'_datalist';for(let n of l){const o=document['createElement'](K(0x1a9));o[K(0x16d)]=n,m['append'](o);}g[K(0x1a5)](m),k['setAttribute']('list',m['id']);}g['appendChild'](k);}else{if(c['hideLabel'])f=document['createElement']('span');else{if(!c['renamable']){let p=document[K(0x18e)]('label');f=p;if(d)p[K(0x1c1)]['marginLeft']='10px';p[K(0x16b)]=c['name'],p[K(0x17d)]=c['displayName']??c['name'],p['title']=c['description']??(c[K(0x156)]??c['name'])+'\x20(type:\x20'+c[K(0x1cd)]+(c[K(0x1c4)]?K(0x1d0)+c[K(0x1c4)]:'')+',\x20propertytype:\x20'+c['propertyType']+')',p['ondragleave']=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g[K(0x1a5)](p);}else{let q=document[K(0x18e)](K(0x1c8));f=q;d&&(q['style'][K(0x177)]=K(0x1a0),q[K(0x1c1)]['width']=K(0x19c));q['id']='label_'+c['name'];let r=e['element'];q[K(0x16d)]=c[K(0x17a)],q[K(0x1b2)]=async t=>{const N=K;if(t['key']=='Enter'&&q[N(0x16d)]){const u=this['_designItems'][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c[N(0x17a)]+N(0x18b)+q[N(0x16d)]+'\x27');c[N(0x1af)][N(0x15f)](this['_designItems'],c,'all'),c[N(0x17a)]=q['value'],await c['service']['setValue'](this['_designItems'],c,r[N(0x16d)]),u[N(0x1cf)](),this['_designItems'][0x0]['instanceServiceContainer'][N(0x19f)][N(0x19e)][N(0x1d1)](this[N(0x1b5)]);}},g[K(0x1a5)](q);}}}if(c[K(0x17a)])e[K(0x1b9)]['id']=c['name'];if(e[K(0x1b9)]instanceof HTMLElement)e['element']['classList']['add'](K(0x169));if(c[K(0x1bb)])e[K(0x1b9)]['style'][K(0x181)]=K(0x18f);f[K(0x152)]['add'](K(0x18c)),g[K(0x1a5)](e['element']),this[K(0x1b3)][K(0x1a5)](g);for(const t of this[K(0x1c7)][K(0x163)]){const u=t[K(0x197)](c);u&&(u['element']['setAttribute']('appearance',this[K(0x15a)](K(0x170))??K(0x196)),u['element'][K(0x1c1)]['gridColumn']='1\x20/\x20-1',this['_extensions'][K(0x162)]({'property':c,'extension':u}),this['_div'][K(0x1a5)](u['element']));}this['_propertyMap']['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[x(0x1cc)](c,d,e){const O=x;c['preventDefault'](),e['classList'][O(0x1b6)](O(0x199));}['_onDragOver'](c,d,e){const P=x;c['preventDefault']();const f=c['dataTransfer'][P(0x15d)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][P(0x190)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!=P(0x1ad)?(e['classList']['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=i):e['classList'][P(0x1b6)]('dragOverProperty');}}const g=c['dataTransfer']['types'][P(0x1b4)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][P(0x185)];if(j){const k=j['dragOverOnProperty'](c,d,this[P(0x1b5)]);(k??P(0x1ad))!='none'?(e['classList'][P(0x151)]('dragOverProperty'),c['dataTransfer']['dropEffect']=k):e[P(0x152)][P(0x1b6)](P(0x199));}}}[x(0x16a)](c,d,e){const Q=x;c[Q(0x1a8)](),e[Q(0x152)][Q(0x1b6)]('dragOverProperty');const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[Q(0x1c3)](f),i=this[Q(0x1c7)][Q(0x190)];i&&i['dropOnProperty'](c,d,h,this['_designItems']);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer'][Q(0x185)];k&&k[Q(0x154)](c,d,j,this['_designItems']);}}[x(0x1a3)](c,d){const R=x;let e;if(this['propertyContextMenuProvider'])e=this[R(0x160)](this['_designItems'],d);if(!e)e=d[R(0x1af)][R(0x1a6)](this[R(0x1b5)],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g[R(0x1c2)]?.(this['_designItems'])??[]];ContextMenu[R(0x171)](e,c);}[x(0x1ba)](c){const S=x;this[S(0x1b5)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1]['editor']['designItemsChanged'](c);}}['refreshForDesignItems'](c){const T=x;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[T(0x194)](e[0x1][T(0x166)],e[0x0],c,this[T(0x193)],e[0x1]['editor']);}}static[x(0x194)](c,d,e,f,g){const U=x;if(e&&e['length']){let h=f['isSet'](e,d);c['dataset']['valueType']=h;let i=f['getValue'](e,d);c[U(0x1ca)]=d[U(0x17a)]+':\x20'+h;if(h==ValueType['none'])c[U(0x1c1)][U(0x15c)]='',i=f[U(0x18a)](e,d);else{if(h==ValueType['all'])c['style'][U(0x15c)]='white';else{if(h==ValueType[U(0x1b8)])c['style']['background']='gray';else{if(h==ValueType['bound'])c['style'][U(0x15c)]=U(0x187);else h==ValueType['fromStylesheet']&&(i=f[U(0x18a)](e,d),c['style'][U(0x15c)]='yellow');}}}g?.[U(0x175)](h,i);}else c[U(0x1c1)]['background']='';}}customElements[x(0x167)]('node-projects-property-grid-property-list',PropertyGridPropertyList);