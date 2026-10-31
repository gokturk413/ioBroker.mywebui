const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x1c3))/0x1+parseInt(v(0x1aa))/0x2+parseInt(v(0x157))/0x3*(parseInt(v(0x197))/0x4)+parseInt(v(0x16c))/0x5+parseInt(v(0x17a))/0x6*(parseInt(v(0x146))/0x7)+-parseInt(v(0x1a5))/0x8+parseInt(v(0x18e))/0x9*(parseInt(v(0x1a8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd19e4));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';function a(){const X=['refreshForDesignItems','getProperties','\x20(type:\x20','defaultValue','createEditor','preventDefault','extensionManager','14DSolkY','refreshAllExtensions','constructor','renamable','displayName','indexOf','none','value','toggle','style','parse','property-row','_serviceContainer','10px','shadowRoot','propertiesService','editor','5169FrIGlD','display','propertyGridDragDropService','div','12px','clear','push','oncontextmenu','getContextMenuItems','20px','list','clickable','width','hideLabel','getUnsetValue','append','onmouseenter','setAttribute','complex','length','Enter','1949795nhTTSt','_addCounter','className','type','ondragover','expandOrCollapsePropertyGroups','disabled','element','dragOverProperty','name','getPropertyNameSuggestions','properties','_shouldCreateElements','types','1376916yepigZ','propertyGroupHover','classic','isSet','classList','clearValue','removeAllChildnodes','valueType','remove','content-wrapper','key','cursor','addNew_label_','readonly','borderRadius','dropEffect','marginLeft','_propertyMap','propertyGroupClick','desc','9549bdpBZG','expanded','setPropertiesService','_extensions','datalist','border','gridColumn','editor-control','service','824gdapkU','dataTransfer','openContextMenu','_div','_propertiesService','textContent','addNew_','rowElement','_rebuildElements','appearance','label','_onDrop','description','_lastClassType','4219752ogIcEH','dispose','calc(100%\x20-\x2010px)','3980TdWxKq','getAttribute','137668nhnTUv','propertyContextMenuProvider','input','replaceAll','hidden','add','createPropertyEditors','alignItems','yellow','onkeyup','addEventListener',',\x20default:\x20','group-desc','isSetElement','background','appendChild','observedAttributes','createElements',',\x20propertytype:\x20','openGroup','all','refresh','white','bindableObjectDragDropService','focus','308916gyIIqs','_onDragLeave','createElement','removeAttribute','get','designerCanvas','aria-label','onclick','<br>','refreshIsSetElementAndEditorForDesignItems','hide-label','option','htmlFor','center','some','addNew','span','_designItems'];a=function(){return X;};return a();}import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';function b(c,d){c=c-0x137;const e=a();let f=e[c];return f;}import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x1ba)]=[w(0x1a0)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this['_extensions'])c['element'][x(0x168)](x(0x1a0),this[x(0x1a9)](x(0x1a0))??x(0x17c));}['_div'];[w(0x18b)]=new Map();[w(0x152)];['_propertiesService'];[w(0x13e)];['_lastClassType'];[w(0x16d)]=0x0;[w(0x191)]=[];['propertyGroupHover'];['propertyGroupClick'];[w(0x1ab)];get[w(0x155)](){const y=w;return this[y(0x19b)];}static get[w(0x14f)](){return css`
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
    `;}constructor(c){const z=w;super(),this['_restoreCachedInititalValues'](),this[z(0x152)]=c,this[z(0x19a)]=document[z(0x1c5)]('div'),this[z(0x19a)]['className']=z(0x183),this[z(0x154)]['appendChild'](this[z(0x19a)]);}[w(0x190)](c){const A=w;if(this[A(0x19b)]!=c){this['_propertiesService']=c,DomHelper[A(0x180)](this[A(0x19a)]),this[A(0x18b)][A(0x15c)]();for(const {extension:d}of this['_extensions'])d['dispose']?.();this[A(0x191)]=[];}}async[w(0x1bb)](c){const B=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this['_propertiesService']?.[B(0x140)](c);return this[B(0x19f)](c,d);}[w(0x178)](c){const C=w;if(!this[C(0x19b)])return![];if(this[C(0x18b)]['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode['fullOnClassChange']||this[C(0x1a4)]!==c['element']['constructor']);}['_rebuildElements'](c,d){const D=w;this[D(0x1a4)]=c[D(0x173)][D(0x148)],DomHelper[D(0x180)](this['_div']),this[D(0x18b)]['clear']();for(const {extension:e}of this[D(0x191)])e[D(0x1a6)]?.();this[D(0x191)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const E=w;let d=document[E(0x1c5)]('span');d[E(0x1b4)]('click',()=>{const F=E;this[F(0x171)](c),d['classList'][F(0x14e)](F(0x18f));}),d['innerHTML']=c['name'][E(0x1ad)]('\x0a',E(0x1cb)),d['className']='group-header',this[E(0x19a)][E(0x1b9)](d);let e=document[E(0x1c5)]('span');e['innerHTML']=c[E(0x1a3)]??'',e[E(0x16e)]=E(0x1b6);this['propertyGroupHover']&&(d['onmouseenter']=()=>{const G=E;if(this[G(0x17b)](c,'name'))d[G(0x168)]('clickable','');else d['removeAttribute'](G(0x162));},d[E(0x1ca)]=()=>{const H=E;if(this[H(0x18c)])this[H(0x18c)](c,H(0x175));},e[E(0x167)]=()=>{const I=E;if(this['propertyGroupHover'](c,I(0x18d)))e[I(0x168)]('clickable','');else e[I(0x1c6)](I(0x162));},e[E(0x1ca)]=()=>{const J=E;if(this[J(0x18c)])this['propertyGroupClick'](c,'desc');});this['_div']['appendChild'](e);for(const f of c[E(0x177)])this[E(0x1b0)](f,!![]);}[w(0x171)](c){const K=w;for(let d of c[K(0x177)]){const e=this[K(0x18b)][K(0x1c7)](d);e[K(0x19e)][K(0x1ae)]=!e[K(0x19e)][K(0x1ae)];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g['element'][K(0x1ae)]=e[K(0x19e)]['hidden'];}}['createPropertyEditors'](c,d){const L=w;let e,f;if(c['createEditor'])e=c[L(0x143)](c);else e=this[L(0x152)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document[L(0x1c5)](L(0x15a));g['className']=L(0x151);if(c['hideLabel'])g['classList'][L(0x1af)](L(0x137));let h=document[L(0x1c5)](L(0x15a));h['className']='property-actions';if(d)h[L(0x14f)][L(0x18a)]='10px';h[L(0x14f)]['width']=L(0x160),h['style']['height']='20px',h['style'][L(0x158)]='flex',h[L(0x14f)][L(0x1b1)]=L(0x13a);let i=document[L(0x1c5)]('button');i['type']='button',i['className']='property-status',i['textContent']='⋯',i['setAttribute'](L(0x1c9),'Actions\x20for\x20'+(c[L(0x14a)]??c['name'])),i[L(0x172)]=c['readonly']===!![],i[L(0x14f)]['width']='12px',i[L(0x14f)]['height']=L(0x15b),i['style'][L(0x188)]='2px',i[L(0x14f)][L(0x193)]='1px\x20white\x20solid',i[L(0x14f)][L(0x185)]='pointer';if(c['propertyType']!=PropertyType[L(0x169)])h['appendChild'](i);g['appendChild'](h);c[L(0x187)]!==!![]&&(i[L(0x15e)]=j=>{const M=L;j['preventDefault'](),this[M(0x199)](j,c);},i['onclick']=j=>{const N=L;j[N(0x144)](),this['openContextMenu'](j,c);});if(c['type']==L(0x13c)){let j=e['element'];j[L(0x172)]=!![],j['id']='addNew_input_'+ ++this[L(0x16d)];let k=document[L(0x1c5)]('input');f=k;d&&(k['style']['marginLeft']=L(0x153),k['style'][L(0x163)]='calc(100%\x20-\x2010px)');k['value']=c[L(0x175)],k['type']='text',k['id']=L(0x186)+this[L(0x16d)],k[L(0x1b3)]=l=>{const O=L;l[O(0x184)]==O(0x16b)&&k['value']&&(c['name']=k['value'],k[O(0x172)]=!![],j[O(0x172)]=![],j[O(0x1c2)]());};if(c[L(0x196)][L(0x176)]){const l=c[L(0x196)][L(0x176)](null),m=document['createElement'](L(0x192));m['id']=L(0x19d)+this['_addCounter']+'_datalist';for(let n of l){const o=document[L(0x1c5)](L(0x138));o[L(0x14d)]=n,m[L(0x166)](o);}g['appendChild'](m),k['setAttribute'](L(0x161),m['id']);}g[L(0x1b9)](k);}else{if(c[L(0x164)])f=document['createElement'](L(0x13d));else{if(!c[L(0x149)]){let p=document['createElement'](L(0x1a1));f=p;if(d)p['style'][L(0x18a)]='10px';p[L(0x139)]=c[L(0x175)],p[L(0x19c)]=c['displayName']??c['name'],p['title']=c[L(0x1a3)]??(c[L(0x14a)]??c['name'])+L(0x141)+c[L(0x16f)]+(c[L(0x142)]?L(0x1b5)+c['defaultValue']:'')+L(0x1bc)+c['propertyType']+')',p['ondragleave']=q=>this[L(0x1c4)](q,c,p),p[L(0x170)]=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this[L(0x1a2)](q,c,p),g[L(0x1b9)](p);}else{let q=document[L(0x1c5)](L(0x1ac));f=q;d&&(q[L(0x14f)][L(0x18a)]='10px',q[L(0x14f)]['width']=L(0x1a7));q['id']='label_'+c[L(0x175)];let r=e[L(0x173)];q[L(0x14d)]=c['name'],q[L(0x1b3)]=async t=>{const P=L;if(t[P(0x184)]=='Enter'&&q[P(0x14d)]){const u=this[P(0x13e)][0x0][P(0x1bd)]('rename\x20property\x20name\x20from\x20\x27'+c['name']+'\x27\x20to\x20\x27'+q[P(0x14d)]+'\x27');c[P(0x196)][P(0x17f)](this['_designItems'],c,P(0x1be)),c['name']=q[P(0x14d)],await c['service']['setValue'](this[P(0x13e)],c,r['value']),u['commit'](),this['_designItems'][0x0]['instanceServiceContainer'][P(0x1c8)][P(0x145)][P(0x147)](this[P(0x13e)]);}},g['appendChild'](q);}}}if(c[L(0x175)])e['element']['id']=c['name'];if(e[L(0x173)]instanceof HTMLElement)e[L(0x173)][L(0x17e)]['add'](L(0x195));if(c['hideLabel'])e[L(0x173)]['style'][L(0x194)]='2\x20/\x204';f['classList']['add']('property-label'),g[L(0x1b9)](e[L(0x173)]),this['_div'][L(0x1b9)](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u['element']['setAttribute'](L(0x1a0),this['getAttribute'](L(0x1a0))??'classic'),u['element']['style']['gridColumn']='1\x20/\x20-1',this[L(0x191)][L(0x15d)]({'property':c,'extension':u}),this['_div'][L(0x1b9)](u['element']));}this[L(0x18b)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x1c4)](c,d,e){const Q=w;c[Q(0x144)](),e[Q(0x17e)][Q(0x182)](Q(0x174));}['_onDragOver'](c,d,e){const R=w;c[R(0x144)]();const f=c['dataTransfer'][R(0x179)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[R(0x152)][R(0x1c1)];if(h){const i=h['dragOverOnProperty'](c,d,this[R(0x13e)]);(i??R(0x14c))!=R(0x14c)?(e[R(0x17e)]['add'](R(0x174)),c[R(0x198)][R(0x189)]=i):e[R(0x17e)][R(0x182)](R(0x174));}}const g=c[R(0x198)][R(0x179)][R(0x14b)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][R(0x159)];if(j){const k=j['dragOverOnProperty'](c,d,this[R(0x13e)]);(k??'none')!=R(0x14c)?(e[R(0x17e)][R(0x1af)]('dragOverProperty'),c['dataTransfer']['dropEffect']=k):e[R(0x17e)][R(0x182)](R(0x174));}}}[w(0x1a2)](c,d,e){const S=w;c['preventDefault'](),e[S(0x17e)][S(0x182)]('dragOverProperty');const f=c[S(0x198)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[S(0x150)](f),i=this['_serviceContainer'][S(0x1c1)];i&&i['dropOnProperty'](c,d,h,this[S(0x13e)]);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON[S(0x150)](g),k=this[S(0x152)][S(0x159)];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}[w(0x199)](c,d){const T=w;let e;if(this['propertyContextMenuProvider'])e=this['propertyContextMenuProvider'](this['_designItems'],d);if(!e)e=d[T(0x196)]['getContextMenu'](this[T(0x13e)],d);for(const {property:f,extension:g}of this[T(0x191)])if(f===d)e=[...e??[],...g[T(0x15f)]?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}['designItemsChanged'](c){const U=w;this[U(0x13e)]=c;for(const {extension:d}of this[U(0x191)])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][U(0x156)]['designItemsChanged'](c);}}[w(0x13f)](c){const V=w;for(const {extension:d}of this['_extensions'])d[V(0x1bf)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[V(0x1cc)](e[0x1][V(0x1b7)],e[0x0],c,this[V(0x19b)],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const W=w;if(e&&e[W(0x16a)]){let h=f[W(0x17d)](e,d);c['dataset'][W(0x181)]=h;let i=f['getValue'](e,d);c['title']=d[W(0x175)]+':\x20'+h;if(h==ValueType['none'])c['style']['background']='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c[W(0x14f)]['background']=W(0x1c0);else{if(h==ValueType[W(0x13b)])c[W(0x14f)]['background']='gray';else{if(h==ValueType['bound'])c[W(0x14f)][W(0x1b8)]='orange';else h==ValueType['fromStylesheet']&&(i=f[W(0x165)](e,d),c['style'][W(0x1b8)]=W(0x1b2));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);