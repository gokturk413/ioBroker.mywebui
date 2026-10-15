const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x220))/0x1*(parseInt(v(0x239))/0x2)+parseInt(v(0x201))/0x3*(-parseInt(v(0x261))/0x4)+parseInt(v(0x24f))/0x5+parseInt(v(0x272))/0x6+-parseInt(v(0x205))/0x7+-parseInt(v(0x253))/0x8*(-parseInt(v(0x23c))/0x9)+parseInt(v(0x1fb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5bea6));function b(c,d){c=c-0x1f3;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const V=['propertyType','dropEffect','propertyContextMenuProvider','onclick','<br>','complex','154PLqQde','indexOf','all','24993WsOzOY','hideLabel','content-wrapper','clearValue','attributeChangedCallback',',\x20propertytype:\x20','_serviceContainer','rowElement','width','push','openContextMenu','span','property-row','pointer','_onDragOver','expanded','ondragleave','set','Actions\x20for\x20','773215HospOT','disabled','createPropertyGroups','7px','88VEmIfB','hidden','_designItems','getUnsetValue','style','property-actions','service','Enter','types','classList','defaultValue','getProperties','instanceServiceContainer','valueType','656tvcFuo','_addCounter','element','some','appearance','background','_onDragLeave','isSet','_div','toggle','gray','onmouseenter','label_','refreshIsSetElementAndEditorForDesignItems','propertyGroupClick','datalist','removeAttribute','3891612aPDyFT','group-header','cursor','createEditor','center','readonly','white',',\x20default:\x20','yellow','_rebuildElements','bound','text','addNew_','oncontextmenu','getData','setValue','property-status','appendChild','getEditorForProperty','3307510lNaklG','add','ondrop','commit','dragOverProperty','className','1119LwXYaF','dragOverOnProperty','createExtension','createElement','1461264QNDwlX','div','htmlFor','flex','expandOrCollapsePropertyGroups','getPropertyNameSuggestions','constructor','group-desc','marginLeft','\x20(type:\x20','propertiesService','name','rename\x20property\x20name\x20from\x20\x27','_propertyMap','_propertiesService','10px','designerCanvas','bindableObjectDragDropService','dataTransfer','getValue','setPropertiesService','property-label','type','_onDrop','propertyGridExtensions','_extensions','description','6729CiCBuG','propertyGroupHover','preventDefault','desc','\x27\x20to\x20\x27','clickable','forSomeServicesTillResult','hide-label','height','_lastClassType','editor','getContextMenu','remove','value','none','displayName','focus','properties','setAttribute'];a=function(){return V;};return a();}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];[w(0x240)](){const x=w;for(const {extension:c}of this[x(0x21e)])c[x(0x263)][x(0x232)](x(0x265),this['getAttribute'](x(0x265))??'classic');}[w(0x269)];[w(0x212)]=new Map();[w(0x242)];[w(0x213)];[w(0x255)];[w(0x229)];['_addCounter']=0x0;['_extensions']=[];[w(0x221)];[w(0x26f)];[w(0x235)];get[w(0x20f)](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this[y(0x242)]=c,this['_div']=document[y(0x204)]('div'),this['_div']['className']=y(0x23e),this['shadowRoot']['appendChild'](this['_div']);}[w(0x219)](c){if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this['_extensions']=[];}}async['createElements'](c){const z=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[z(0x213)]?.[z(0x25e)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const A=w;if(!this[A(0x213)])return![];if(this[A(0x212)]['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode['fullOnClassChange']||this[A(0x229)]!==c[A(0x263)][A(0x20b)]);}[w(0x27b)](c,d){const B=w;this[B(0x229)]=c[B(0x263)][B(0x20b)],DomHelper['removeAllChildnodes'](this['_div']),this[B(0x212)]['clear']();for(const {extension:e}of this['_extensions'])e['dispose']?.();this['_extensions']=[];if(d?.['length']){for(let f of d){if(B(0x231)in f)this[B(0x251)](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const C=w;let d=document[C(0x204)](C(0x247));d['addEventListener']('click',()=>{const D=C;this['expandOrCollapsePropertyGroups'](c),d['classList'][D(0x26a)](D(0x24b));}),d['innerHTML']=c['name']['replaceAll']('\x0a',C(0x237)),d[C(0x200)]=C(0x273),this['_div'][C(0x1f9)](d);let e=document['createElement'](C(0x247));e['innerHTML']=c['description']??'',e['className']=C(0x20c);this[C(0x221)]&&(d[C(0x26c)]=()=>{const E=C;if(this[E(0x221)](c,E(0x210)))d['setAttribute']('clickable','');else d[E(0x271)](E(0x225));},d[C(0x236)]=()=>{const F=C;if(this['propertyGroupClick'])this[F(0x26f)](c,F(0x210));},e[C(0x26c)]=()=>{const G=C;if(this[G(0x221)](c,G(0x223)))e['setAttribute']('clickable','');else e['removeAttribute'](G(0x225));},e['onclick']=()=>{const H=C;if(this['propertyGroupClick'])this['propertyGroupClick'](c,H(0x223));});this[C(0x269)]['appendChild'](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}[w(0x209)](c){const I=w;for(let d of c[I(0x231)]){const e=this[I(0x212)]['get'](d);e[I(0x243)][I(0x254)]=!e[I(0x243)][I(0x254)];for(const {property:f,extension:g}of this[I(0x21e)])if(f===d)g['element'][I(0x254)]=e['rowElement']['hidden'];}}['createPropertyEditors'](c,d){const J=w;let e,f;if(c[J(0x275)])e=c['createEditor'](c);else e=this['_serviceContainer'][J(0x226)]('propertyEditorTypesService',g=>g[J(0x1fa)](c));if(e){const g=document[J(0x204)]('div');g[J(0x200)]=J(0x248);if(c[J(0x23d)])g['classList']['add'](J(0x227));let h=document[J(0x204)](J(0x206));h[J(0x200)]=J(0x258);if(d)h['style'][J(0x20d)]='10px';h['style']['width']='20px',h['style']['height']='20px',h['style']['display']=J(0x208),h['style']['alignItems']=J(0x276);let i=document[J(0x204)]('button');i['type']='button',i[J(0x200)]=J(0x1f8),i['textContent']='⋯',i['setAttribute']('aria-label',J(0x24e)+(c[J(0x22f)]??c['name'])),i['disabled']=c[J(0x277)]===!![],i['style'][J(0x244)]=J(0x252),i['style'][J(0x228)]=J(0x252),i[J(0x257)]['border']='1px\x20white\x20solid',i['style'][J(0x274)]=J(0x249);if(c[J(0x233)]!=PropertyType[J(0x238)])h['appendChild'](i);g[J(0x1f9)](h);c['readonly']!==!![]&&(i[J(0x1f5)]=j=>{const K=J;j[K(0x222)](),this['openContextMenu'](j,c);},i[J(0x236)]=j=>{const L=J;j['preventDefault'](),this[L(0x246)](j,c);});if(c[J(0x21b)]=='addNew'){let j=e[J(0x263)];j[J(0x250)]=!![],j['id']='addNew_input_'+ ++this['_addCounter'];let k=document[J(0x204)]('input');f=k;d&&(k['style']['marginLeft']=J(0x214),k['style']['width']='calc(100%\x20-\x2010px)');k['value']=c['name'],k[J(0x21b)]=J(0x1f3),k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const M=J;l['key']=='Enter'&&k['value']&&(c[M(0x210)]=k['value'],k['disabled']=!![],j['disabled']=![],j[M(0x230)]());};if(c[J(0x259)][J(0x20a)]){const l=c['service'][J(0x20a)](null),m=document[J(0x204)](J(0x270));m['id']=J(0x1f4)+this[J(0x262)]+'_datalist';for(let n of l){const o=document[J(0x204)]('option');o['value']=n,m['append'](o);}g[J(0x1f9)](m),k[J(0x232)]('list',m['id']);}g[J(0x1f9)](k);}else{if(c[J(0x23d)])f=document['createElement'](J(0x247));else{if(!c['renamable']){let p=document['createElement']('label');f=p;if(d)p[J(0x257)][J(0x20d)]='10px';p[J(0x207)]=c[J(0x210)],p['textContent']=c[J(0x22f)]??c['name'],p['title']=c[J(0x21f)]??(c['displayName']??c[J(0x210)])+J(0x20e)+c[J(0x21b)]+(c[J(0x25d)]?J(0x279)+c[J(0x25d)]:'')+J(0x241)+c[J(0x233)]+')',p[J(0x24c)]=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[J(0x1fd)]=q=>this[J(0x21c)](q,c,p),g['appendChild'](p);}else{let q=document[J(0x204)]('input');f=q;d&&(q['style']['marginLeft']='10px',q[J(0x257)]['width']='calc(100%\x20-\x2010px)');q['id']=J(0x26d)+c[J(0x210)];let r=e[J(0x263)];q[J(0x22d)]=c['name'],q['onkeyup']=async t=>{const N=J;if(t['key']==N(0x25a)&&q[N(0x22d)]){const u=this[N(0x255)][0x0]['openGroup'](N(0x211)+c[N(0x210)]+N(0x224)+q[N(0x22d)]+'\x27');c[N(0x259)][N(0x23f)](this['_designItems'],c,N(0x23b)),c['name']=q[N(0x22d)],await c['service'][N(0x1f7)](this['_designItems'],c,r[N(0x22d)]),u[N(0x1fe)](),this['_designItems'][0x0][N(0x25f)][N(0x215)]['extensionManager']['refreshAllExtensions'](this['_designItems']);}},g['appendChild'](q);}}}if(c['name'])e[J(0x263)]['id']=c[J(0x210)];if(e['element']instanceof HTMLElement)e[J(0x263)]['classList'][J(0x1fc)]('editor-control');if(c[J(0x23d)])e[J(0x263)]['style']['gridColumn']='2\x20/\x204';f['classList']['add'](J(0x21a)),g['appendChild'](e['element']),this[J(0x269)]['appendChild'](g);for(const t of this[J(0x242)][J(0x21d)]){const u=t[J(0x203)](c);u&&(u['element'][J(0x232)](J(0x265),this['getAttribute'](J(0x265))??'classic'),u['element'][J(0x257)]['gridColumn']='1\x20/\x20-1',this[J(0x21e)][J(0x245)]({'property':c,'extension':u}),this['_div']['appendChild'](u['element']));}this[J(0x212)][J(0x24d)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x267)](c,d,e){const O=w;c[O(0x222)](),e[O(0x25c)][O(0x22c)]('dragOverProperty');}[w(0x24a)](c,d,e){const P=w;c[P(0x222)]();const f=c['dataTransfer'][P(0x25b)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][P(0x216)];if(h){const i=h[P(0x202)](c,d,this[P(0x255)]);(i??'none')!='none'?(e['classList']['add'](P(0x1ff)),c['dataTransfer'][P(0x234)]=i):e[P(0x25c)][P(0x22c)](P(0x1ff));}}const g=c[P(0x217)][P(0x25b)][P(0x23a)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[P(0x242)]['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??P(0x22e))!=P(0x22e)?(e[P(0x25c)]['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=k):e['classList']['remove']('dragOverProperty');}}}[w(0x21c)](c,d,e){const Q=w;c[Q(0x222)](),e[Q(0x25c)]['remove']('dragOverProperty');const f=c[Q(0x217)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][Q(0x216)];i&&i['dropOnProperty'](c,d,h,this['_designItems']);}const g=c[Q(0x217)][Q(0x1f6)](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[Q(0x242)]['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this[Q(0x255)]);}}[w(0x246)](c,d){const R=w;let e;if(this['propertyContextMenuProvider'])e=this[R(0x235)](this[R(0x255)],d);if(!e)e=d['service'][R(0x22b)](this['_designItems'],d);for(const {property:f,extension:g}of this[R(0x21e)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[R(0x255)])??[]];ContextMenu['show'](e,c);}['designItemsChanged'](c){const S=w;this[S(0x255)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this[S(0x212)]){e[0x1][S(0x22a)]['designItemsChanged'](c);}}['refreshForDesignItems'](c){const T=w;for(const {extension:d}of this[T(0x21e)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this[T(0x213)],e[0x1][T(0x22a)]);}}static[w(0x26e)](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f[U(0x268)](e,d);c['dataset'][U(0x260)]=h;let i=f[U(0x218)](e,d);c['title']=d[U(0x210)]+':\x20'+h;if(h==ValueType['none'])c[U(0x257)][U(0x266)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType[U(0x23b)])c[U(0x257)][U(0x266)]=U(0x278);else{if(h==ValueType[U(0x264)])c['style']['background']=U(0x26b);else{if(h==ValueType[U(0x27c)])c['style'][U(0x266)]='orange';else h==ValueType['fromStylesheet']&&(i=f[U(0x256)](e,d),c['style']['background']=U(0x27a));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);