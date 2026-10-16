const x=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x1fc))/0x1+-parseInt(v(0x1f7))/0x2+parseInt(v(0x248))/0x3+-parseInt(v(0x223))/0x4+-parseInt(v(0x232))/0x5*(-parseInt(v(0x270))/0x6)+-parseInt(v(0x212))/0x7*(-parseInt(v(0x1f4))/0x8)+-parseInt(v(0x240))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x28236));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const V=['constructor','hideLabel','addNew_','indexOf','propertyType','defaultValue','addNew_input_','property-status','1px\x20white\x20solid','gray','add','10px','label','refreshAllExtensions','refresh','isSetElement','addEventListener','36kEBgAC','dragOverProperty','hidden','key','dataTransfer','value','hide-label','size','push','designItemsChanged','createPropertyGroups','dispose','_onDrop','toggle','_onDragOver','propertyGroupClick','505928TMsyaW','htmlFor','readonly','147416gNknoM','className','fromStylesheet','get','gridColumn','225234tooVIY','pointer','appearance','style','Actions\x20for\x20','properties','designerCanvas','yellow','disabled','complex','clickable','createPropertyEditors','7px','onkeyup','extensionManager','classic','propertyGridDragDropService','option',',\x20propertytype:\x20','dropOnProperty','calc(100%\x20-\x2010px)','createEditor','35jUKmPY','forSomeServicesTillResult','instanceServiceContainer','input','cursor','<br>','displayName','isSet','addNew_label_','remove','_shouldCreateElements','type','desc','openContextMenu','service','dragOverOnProperty','_restoreCachedInititalValues','1257132ilAoAf','rename\x20property\x20name\x20from\x20\x27','_serviceContainer','getAttribute','innerHTML','_propertyMap','flex','_extensions','classList','_div','_onDragLeave','createElement','height','rowElement','span','24435XZqxUL','_addCounter','getContextMenu','define','expandOrCollapsePropertyGroups','_designItems','parse','openGroup','element','ondragover','propertyGroupHover','appendChild','ondrop','_rebuildElements','1305630QdJDtw','div','property-actions','name','ondragleave','oncontextmenu','getProperties','width','380118OhgHzR','marginLeft','editor','textContent','dropEffect','setAttribute','_lastClassType','property-row','onmouseenter','_propertiesService','none','getEditorForProperty','expanded','preventDefault','refreshValueWithoutNotification','background','clear','getValue','getUnsetValue','getData','display','description','propertyContextMenuProvider'];a=function(){return V;};return a();}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x1ed;const e=a();let f=e[c];return f;}import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];['attributeChangedCallback'](){const w=b;for(const {extension:c}of this['_extensions'])c['element']['setAttribute']('appearance',this[w(0x226)]('appearance')??'classic');}[x(0x22c)];['_propertyMap']=new Map();[x(0x225)];['_propertiesService'];['_designItems'];['_lastClassType'];['_addCounter']=0x0;['_extensions']=[];['propertyGroupHover'];[x(0x1f3)];[x(0x25e)];get['propertiesService'](){return this['_propertiesService'];}static get[x(0x1ff)](){return css`
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
    `;}constructor(c){const y=x;super(),this[y(0x222)](),this['_serviceContainer']=c,this['_div']=document['createElement'](y(0x241)),this['_div'][y(0x1f8)]='content-wrapper',this['shadowRoot'][y(0x23d)](this['_div']);}['setPropertiesService'](c){const z=x;if(this[z(0x251)]!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this[z(0x22c)]),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d[z(0x1ef)]?.();this[z(0x22a)]=[];}}async['createElements'](c){const A=x;if(!this[A(0x21c)](c))return!![];const d=await this[A(0x251)]?.[A(0x246)](c);return this[A(0x23f)](c,d);}[x(0x21c)](c){const B=x;if(!this[B(0x251)])return![];if(this['_propertyMap'][B(0x277)]==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode[B(0x252)]&&(d!==RefreshMode['fullOnClassChange']||this[B(0x24e)]!==c['element'][B(0x25f)]);}['_rebuildElements'](c,d){const C=x;this['_lastClassType']=c[C(0x23a)][C(0x25f)],DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap'][C(0x258)]();for(const {extension:e}of this['_extensions'])e['dispose']?.();this['_extensions']=[];if(d?.['length']){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}[x(0x1ee)](c){const D=x;let d=document[D(0x22e)](D(0x231));d[D(0x26f)]('click',()=>{const E=D;this[E(0x236)](c),d[E(0x22b)][E(0x1f1)](E(0x254));}),d['innerHTML']=c['name']['replaceAll']('\x0a',D(0x217)),d[D(0x1f8)]='group-header',this[D(0x22c)]['appendChild'](d);let e=document['createElement']('span');e[D(0x227)]=c[D(0x25d)]??'',e[D(0x1f8)]='group-desc';this[D(0x23c)]&&(d[D(0x250)]=()=>{const F=D;if(this['propertyGroupHover'](c,'name'))d['setAttribute']('clickable','');else d['removeAttribute'](F(0x206));},d['onclick']=()=>{const G=D;if(this['propertyGroupClick'])this[G(0x1f3)](c,G(0x243));},e[D(0x250)]=()=>{const H=D;if(this['propertyGroupHover'](c,'desc'))e['setAttribute']('clickable','');else e['removeAttribute'](H(0x206));},e['onclick']=()=>{const I=D;if(this['propertyGroupClick'])this['propertyGroupClick'](c,I(0x21e));});this['_div'][D(0x23d)](e);for(const f of c[D(0x201)])this[D(0x207)](f,!![]);}[x(0x236)](c){const J=x;for(let d of c['properties']){const e=this[J(0x228)][J(0x1fa)](d);e[J(0x230)][J(0x272)]=!e['rowElement']['hidden'];for(const {property:f,extension:g}of this[J(0x22a)])if(f===d)g[J(0x23a)]['hidden']=e['rowElement'][J(0x272)];}}[x(0x207)](c,d){const K=x;let e,f;if(c[K(0x211)])e=c[K(0x211)](c);else e=this['_serviceContainer'][K(0x213)]('propertyEditorTypesService',g=>g[K(0x253)](c));if(e){const g=document[K(0x22e)]('div');g[K(0x1f8)]=K(0x24f);if(c[K(0x260)])g[K(0x22b)][K(0x269)](K(0x276));let h=document['createElement'](K(0x241));h[K(0x1f8)]=K(0x242);if(d)h['style']['marginLeft']=K(0x26a);h[K(0x1ff)][K(0x247)]='20px',h['style'][K(0x22f)]='20px',h[K(0x1ff)][K(0x25c)]=K(0x229),h[K(0x1ff)]['alignItems']='center';let i=document[K(0x22e)]('button');i[K(0x21d)]='button',i['className']=K(0x266),i['textContent']='⋯',i['setAttribute']('aria-label',K(0x200)+(c[K(0x218)]??c[K(0x243)])),i['disabled']=c[K(0x1f6)]===!![],i['style']['width']='7px',i[K(0x1ff)]['height']=K(0x208),i[K(0x1ff)]['border']=K(0x267),i[K(0x1ff)][K(0x216)]=K(0x1fd);if(c['propertyType']!=PropertyType[K(0x205)])h[K(0x23d)](i);g[K(0x23d)](h);c[K(0x1f6)]!==!![]&&(i[K(0x245)]=j=>{const L=K;j[L(0x255)](),this[L(0x21f)](j,c);},i['onclick']=j=>{const M=K;j[M(0x255)](),this['openContextMenu'](j,c);});if(c['type']=='addNew'){let j=e[K(0x23a)];j[K(0x204)]=!![],j['id']=K(0x265)+ ++this[K(0x233)];let k=document[K(0x22e)](K(0x215));f=k;d&&(k['style']['marginLeft']=K(0x26a),k[K(0x1ff)][K(0x247)]='calc(100%\x20-\x2010px)');k[K(0x275)]=c['name'],k[K(0x21d)]='text',k['id']=K(0x21a)+this['_addCounter'],k[K(0x209)]=l=>{const N=K;l[N(0x273)]=='Enter'&&k[N(0x275)]&&(c['name']=k[N(0x275)],k[N(0x204)]=!![],j[N(0x204)]=![],j['focus']());};if(c['service']['getPropertyNameSuggestions']){const l=c['service']['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']=K(0x261)+this['_addCounter']+'_datalist';for(let n of l){const o=document['createElement'](K(0x20d));o[K(0x275)]=n,m['append'](o);}g[K(0x23d)](m),k[K(0x24d)]('list',m['id']);}g[K(0x23d)](k);}else{if(c['hideLabel'])f=document['createElement']('span');else{if(!c['renamable']){let p=document['createElement'](K(0x26b));f=p;if(d)p['style']['marginLeft']='10px';p[K(0x1f5)]=c[K(0x243)],p[K(0x24b)]=c['displayName']??c[K(0x243)],p['title']=c[K(0x25d)]??(c['displayName']??c['name'])+'\x20(type:\x20'+c[K(0x21d)]+(c[K(0x264)]?',\x20default:\x20'+c[K(0x264)]:'')+K(0x20e)+c[K(0x263)]+')',p[K(0x244)]=q=>this['_onDragLeave'](q,c,p),p[K(0x23b)]=q=>this['_onDragOver'](q,c,p),p[K(0x23e)]=q=>this[K(0x1f0)](q,c,p),g['appendChild'](p);}else{let q=document[K(0x22e)]('input');f=q;d&&(q['style'][K(0x249)]='10px',q['style'][K(0x247)]=K(0x210));q['id']='label_'+c['name'];let r=e[K(0x23a)];q[K(0x275)]=c[K(0x243)],q['onkeyup']=async t=>{const O=K;if(t[O(0x273)]=='Enter'&&q['value']){const u=this[O(0x237)][0x0][O(0x239)](O(0x224)+c['name']+'\x27\x20to\x20\x27'+q[O(0x275)]+'\x27');c[O(0x220)]['clearValue'](this['_designItems'],c,'all'),c[O(0x243)]=q['value'],await c[O(0x220)]['setValue'](this['_designItems'],c,r['value']),u['commit'](),this['_designItems'][0x0][O(0x214)][O(0x202)][O(0x20a)][O(0x26c)](this[O(0x237)]);}},g[K(0x23d)](q);}}}if(c['name'])e[K(0x23a)]['id']=c[K(0x243)];if(e['element']instanceof HTMLElement)e['element']['classList'][K(0x269)]('editor-control');if(c['hideLabel'])e['element'][K(0x1ff)]['gridColumn']='2\x20/\x204';f['classList']['add']('property-label'),g[K(0x23d)](e[K(0x23a)]),this[K(0x22c)][K(0x23d)](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u['element'][K(0x24d)](K(0x1fe),this['getAttribute'](K(0x1fe))??K(0x20b)),u[K(0x23a)][K(0x1ff)][K(0x1fb)]='1\x20/\x20-1',this[K(0x22a)][K(0x278)]({'property':c,'extension':u}),this['_div']['appendChild'](u['element']));}this['_propertyMap']['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[x(0x22d)](c,d,e){c['preventDefault'](),e['classList']['remove']('dragOverProperty');}[x(0x1f2)](c,d,e){const P=x;c[P(0x255)]();const f=c['dataTransfer']['types'][P(0x262)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[P(0x225)]['bindableObjectDragDropService'];if(h){const i=h[P(0x221)](c,d,this['_designItems']);(i??'none')!='none'?(e['classList'][P(0x269)](P(0x271)),c[P(0x274)]['dropEffect']=i):e[P(0x22b)][P(0x21b)](P(0x271));}}const g=c[P(0x274)]['types'][P(0x262)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[P(0x225)][P(0x20c)];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??P(0x252))!='none'?(e[P(0x22b)]['add'](P(0x271)),c['dataTransfer'][P(0x24c)]=k):e[P(0x22b)]['remove']('dragOverProperty');}}}['_onDrop'](c,d,e){const Q=x;c[Q(0x255)](),e['classList']['remove'](Q(0x271));const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[Q(0x238)](f),i=this[Q(0x225)]['bindableObjectDragDropService'];i&&i[Q(0x20f)](c,d,h,this[Q(0x237)]);}const g=c['dataTransfer'][Q(0x25b)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[Q(0x238)](g),k=this['_serviceContainer']['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this[Q(0x237)]);}}[x(0x21f)](c,d){const R=x;let e;if(this['propertyContextMenuProvider'])e=this['propertyContextMenuProvider'](this[R(0x237)],d);if(!e)e=d[R(0x220)][R(0x234)](this['_designItems'],d);for(const {property:f,extension:g}of this[R(0x22a)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[R(0x237)])??[]];ContextMenu['show'](e,c);}[x(0x1ed)](c){const S=x;this['_designItems']=c;for(const {extension:d}of this['_extensions'])d[S(0x26d)](c);for(let e of this[S(0x228)]){e[0x1]['editor'][S(0x1ed)](c);}}['refreshForDesignItems'](c){const T=x;for(const {extension:d}of this[T(0x22a)])d['refresh'](c);for(let e of this[T(0x228)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][T(0x26e)],e[0x0],c,this[T(0x251)],e[0x1][T(0x24a)]);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const U=x;if(e&&e['length']){let h=f[U(0x219)](e,d);c['dataset']['valueType']=h;let i=f[U(0x259)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType['none'])c[U(0x1ff)]['background']='',i=f[U(0x25a)](e,d);else{if(h==ValueType['all'])c[U(0x1ff)]['background']='white';else{if(h==ValueType['some'])c['style']['background']=U(0x268);else{if(h==ValueType['bound'])c['style'][U(0x257)]='orange';else h==ValueType[U(0x1f9)]&&(i=f['getUnsetValue'](e,d),c[U(0x1ff)][U(0x257)]=U(0x203));}}}g?.[U(0x256)](h,i);}else c[U(0x1ff)]['background']='';}}customElements[x(0x235)]('node-projects-property-grid-property-list',PropertyGridPropertyList);