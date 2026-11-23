function b(c,d){c=c-0x19a;const e=a();let f=e[c];return f;}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x19b))/0x1*(-parseInt(v(0x1c2))/0x2)+parseInt(v(0x1eb))/0x3*(-parseInt(v(0x1fa))/0x4)+parseInt(v(0x1d4))/0x5*(parseInt(v(0x1b1))/0x6)+-parseInt(v(0x21f))/0x7+-parseInt(v(0x1de))/0x8+parseInt(v(0x21d))/0x9+-parseInt(v(0x1c1))/0xa*(-parseInt(v(0x1b6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9d4d8));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function a(){const V=['\x20(type:\x20','preventDefault','rowElement','propertyContextMenuProvider','get','_shouldCreateElements','bindableObjectDragDropService','name','removeAllChildnodes','setPropertiesService','16wncYfI','key','onmouseenter','calc(100%\x20-\x2010px)','disabled','_serviceContainer','desc','classic','_propertyMap','1\x20/\x20-1','getRefreshMode','propertyGroupHover','appearance','push','dropOnProperty','_rebuildElements','addNew_','fullOnClassChange','Enter','\x27\x20to\x20\x27','append','propertyGroupClick','getValue','center','getUnsetValue','indexOf','textContent','yellow','property-status','_div','designerCanvas','dataset','addEventListener','display','_addCounter','9177588Rcowlh','setValue','3952095PaGYnn','appendChild','label_','input','add','_onDragOver','cursor','hideLabel','379163PowwSu','set','createElement','pointer','isSetElement','expandOrCollapsePropertyGroups','displayName','span','height','service','innerHTML','readonly','node-projects-property-grid-property-list','_onDrop','_designItems','marginLeft','button','fromStylesheet','all','_extensions','forSomeServicesTillResult','alignItems','29430DghHFT','dragOverProperty','gridColumn','10px','createPropertyGroups','3132239nnrIne','gray','ondragover','background','label','list','12px','size','oncontextmenu','classList','datalist','10ibQACd','4dtqPEk','properties','value','element','click','hide-label','div','dragOverOnProperty','_propertiesService','ondragleave','aria-label','dataTransfer','width','refreshIsSetElementAndEditorForDesignItems','1px\x20white\x20solid','parse','style','shadowRoot','760QvGuzq','onkeyup','defaultValue','hidden','white','refreshAllExtensions','complex','editor','setAttribute','getPropertyNameSuggestions','5466320jPyqfq','show',',\x20propertytype:\x20','clickable','getContextMenuItems','className','openContextMenu','refreshForDesignItems','commit','type','length','property-actions','_lastClassType','687135TjtDFa','title','description','none','getContextMenu'];a=function(){return V;};return a();}import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[w(0x206)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this['_extensions'])c[x(0x1c5)]['setAttribute']('appearance',this['getAttribute'](x(0x206))??x(0x201));}[w(0x217)];[w(0x202)]=new Map();['_serviceContainer'];['_propertiesService'];['_designItems'];['_lastClassType'];['_addCounter']=0x0;['_extensions']=[];['propertyGroupHover'];[w(0x20f)];['propertyContextMenuProvider'];get['propertiesService'](){const y=w;return this[y(0x1ca)];}static get[w(0x1d2)](){return css`
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
    `;}constructor(c){const z=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this['_div']=document['createElement'](z(0x1c8)),this[z(0x217)]['className']='content-wrapper',this[z(0x1d3)]['appendChild'](this[z(0x217)]);}[w(0x1f9)](c){const A=w;if(this[A(0x1ca)]!=c){this[A(0x1ca)]=c,DomHelper['removeAllChildnodes'](this[A(0x217)]),this[A(0x202)]['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this[A(0x1ae)]=[];}}async['createElements'](c){const B=w;if(!this[B(0x1f5)](c))return!![];const d=await this['_propertiesService']?.['getProperties'](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const C=w;if(!this[C(0x1ca)])return![];if(this['_propertyMap'][C(0x1bd)]==0x0)return!![];const d=this['_propertiesService'][C(0x204)](c);return d!==RefreshMode[C(0x1ee)]&&(d!==RefreshMode[C(0x20b)]||this['_lastClassType']!==c[C(0x1c5)]['constructor']);}[w(0x209)](c,d){const D=w;this[D(0x1ea)]=c['element']['constructor'],DomHelper[D(0x1f8)](this['_div']),this['_propertyMap']['clear']();for(const {extension:e}of this[D(0x1ae)])e['dispose']?.();this[D(0x1ae)]=[];if(d?.[D(0x1e8)]){for(let f of d){if('properties'in f)this[D(0x1b5)](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const E=w;let d=document['createElement'](E(0x1a2));d[E(0x21a)](E(0x1c6),()=>{this['expandOrCollapsePropertyGroups'](c),d['classList']['toggle']('expanded');}),d[E(0x1a5)]=c['name']['replaceAll']('\x0a','<br>'),d[E(0x1e3)]='group-header',this[E(0x217)]['appendChild'](d);let e=document[E(0x19d)](E(0x1a2));e['innerHTML']=c[E(0x1ed)]??'',e['className']='group-desc';this[E(0x205)]&&(d[E(0x1fc)]=()=>{const F=E;if(this['propertyGroupHover'](c,F(0x1f7)))d[F(0x1dc)](F(0x1e1),'');else d['removeAttribute']('clickable');},d['onclick']=()=>{const G=E;if(this[G(0x20f)])this['propertyGroupClick'](c,'name');},e['onmouseenter']=()=>{const H=E;if(this[H(0x205)](c,'desc'))e[H(0x1dc)](H(0x1e1),'');else e['removeAttribute']('clickable');},e['onclick']=()=>{const I=E;if(this['propertyGroupClick'])this['propertyGroupClick'](c,I(0x200));});this['_div']['appendChild'](e);for(const f of c[E(0x1c3)])this['createPropertyEditors'](f,!![]);}[w(0x1a0)](c){const J=w;for(let d of c[J(0x1c3)]){const e=this[J(0x202)][J(0x1f4)](d);e['rowElement']['hidden']=!e[J(0x1f2)][J(0x1d7)];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g[J(0x1c5)]['hidden']=e['rowElement']['hidden'];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[K(0x1ff)][K(0x1af)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document['createElement']('div');g['className']='property-row';if(c['hideLabel'])g['classList'][K(0x223)](K(0x1c7));let h=document['createElement']('div');h['className']=K(0x1e9);if(d)h['style'][K(0x1aa)]='10px';h[K(0x1d2)][K(0x1ce)]='20px',h[K(0x1d2)][K(0x1a3)]='20px',h[K(0x1d2)][K(0x21b)]='flex',h[K(0x1d2)][K(0x1b0)]=K(0x211);let i=document['createElement'](K(0x1ab));i[K(0x1e7)]='button',i['className']=K(0x216),i[K(0x214)]='⋯',i[K(0x1dc)](K(0x1cc),'Actions\x20for\x20'+(c['displayName']??c[K(0x1f7)])),i[K(0x1fe)]=c['readonly']===!![],i['style'][K(0x1ce)]=K(0x1bc),i['style'][K(0x1a3)]=K(0x1bc),i[K(0x1d2)]['borderRadius']='2px',i['style']['border']=K(0x1d0),i[K(0x1d2)][K(0x225)]=K(0x19e);if(c['propertyType']!=PropertyType[K(0x1da)])h['appendChild'](i);g['appendChild'](h);c[K(0x1a6)]!==!![]&&(i[K(0x1be)]=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i['onclick']=j=>{const L=K;j[L(0x1f1)](),this['openContextMenu'](j,c);});if(c[K(0x1e7)]=='addNew'){let j=e['element'];j[K(0x1fe)]=!![],j['id']='addNew_input_'+ ++this['_addCounter'];let k=document['createElement'](K(0x222));f=k;d&&(k['style'][K(0x1aa)]=K(0x1b4),k[K(0x1d2)]['width']='calc(100%\x20-\x2010px)');k[K(0x1c4)]=c['name'],k[K(0x1e7)]='text',k['id']='addNew_label_'+this['_addCounter'],k[K(0x1d5)]=l=>{const M=K;l['key']==M(0x20c)&&k[M(0x1c4)]&&(c[M(0x1f7)]=k['value'],k[M(0x1fe)]=!![],j[M(0x1fe)]=![],j['focus']());};if(c[K(0x1a4)][K(0x1dd)]){const l=c['service']['getPropertyNameSuggestions'](null),m=document[K(0x19d)](K(0x1c0));m['id']=K(0x20a)+this[K(0x21c)]+'_datalist';for(let n of l){const o=document['createElement']('option');o['value']=n,m[K(0x20e)](o);}g[K(0x220)](m),k[K(0x1dc)](K(0x1bb),m['id']);}g['appendChild'](k);}else{if(c[K(0x19a)])f=document['createElement']('span');else{if(!c['renamable']){let p=document[K(0x19d)](K(0x1ba));f=p;if(d)p['style']['marginLeft']=K(0x1b4);p['htmlFor']=c['name'],p['textContent']=c[K(0x1a1)]??c[K(0x1f7)],p[K(0x1ec)]=c['description']??(c['displayName']??c['name'])+K(0x1f0)+c[K(0x1e7)]+(c['defaultValue']?',\x20default:\x20'+c[K(0x1d6)]:'')+K(0x1e0)+c['propertyType']+')',p[K(0x1cb)]=q=>this['_onDragLeave'](q,c,p),p[K(0x1b8)]=q=>this[K(0x224)](q,c,p),p['ondrop']=q=>this[K(0x1a8)](q,c,p),g[K(0x220)](p);}else{let q=document['createElement'](K(0x222));f=q;d&&(q[K(0x1d2)][K(0x1aa)]='10px',q['style']['width']=K(0x1fd));q['id']=K(0x221)+c[K(0x1f7)];let r=e['element'];q['value']=c[K(0x1f7)],q['onkeyup']=async t=>{const N=K;if(t[N(0x1fb)]=='Enter'&&q['value']){const u=this[N(0x1a9)][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c['name']+N(0x20d)+q['value']+'\x27');c['service']['clearValue'](this['_designItems'],c,N(0x1ad)),c[N(0x1f7)]=q['value'],await c['service'][N(0x21e)](this['_designItems'],c,r['value']),u[N(0x1e6)](),this['_designItems'][0x0]['instanceServiceContainer'][N(0x218)]['extensionManager'][N(0x1d9)](this[N(0x1a9)]);}},g['appendChild'](q);}}}if(c[K(0x1f7)])e[K(0x1c5)]['id']=c['name'];if(e['element']instanceof HTMLElement)e[K(0x1c5)][K(0x1bf)]['add']('editor-control');if(c[K(0x19a)])e[K(0x1c5)]['style']['gridColumn']='2\x20/\x204';f[K(0x1bf)]['add']('property-label'),g[K(0x220)](e[K(0x1c5)]),this['_div'][K(0x220)](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u[K(0x1c5)]['setAttribute'](K(0x206),this['getAttribute']('appearance')??'classic'),u['element'][K(0x1d2)][K(0x1b3)]=K(0x203),this['_extensions'][K(0x207)]({'property':c,'extension':u}),this[K(0x217)][K(0x220)](u[K(0x1c5)]));}this['_propertyMap'][K(0x19c)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const O=w;c[O(0x1f1)](),e[O(0x1bf)]['remove'](O(0x1b2));}[w(0x224)](c,d,e){const P=w;c['preventDefault']();const f=c[P(0x1cd)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[P(0x1ff)][P(0x1f6)];if(h){const i=h[P(0x1c9)](c,d,this[P(0x1a9)]);(i??'none')!=P(0x1ee)?(e['classList'][P(0x223)](P(0x1b2)),c['dataTransfer']['dropEffect']=i):e[P(0x1bf)]['remove']('dragOverProperty');}}const g=c['dataTransfer']['types'][P(0x213)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??P(0x1ee))!=P(0x1ee)?(e[P(0x1bf)]['add'](P(0x1b2)),c[P(0x1cd)]['dropEffect']=k):e[P(0x1bf)]['remove'](P(0x1b2));}}}['_onDrop'](c,d,e){const Q=w;c[Q(0x1f1)](),e[Q(0x1bf)]['remove']('dragOverProperty');const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[Q(0x1d1)](f),i=this['_serviceContainer'][Q(0x1f6)];i&&i[Q(0x208)](c,d,h,this['_designItems']);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[Q(0x1ff)]['propertyGridDragDropService'];k&&k[Q(0x208)](c,d,j,this[Q(0x1a9)]);}}[w(0x1e4)](c,d){const R=w;let e;if(this[R(0x1f3)])e=this[R(0x1f3)](this['_designItems'],d);if(!e)e=d['service'][R(0x1ef)](this['_designItems'],d);for(const {property:f,extension:g}of this[R(0x1ae)])if(f===d)e=[...e??[],...g[R(0x1e2)]?.(this['_designItems'])??[]];ContextMenu[R(0x1df)](e,c);}['designItemsChanged'](c){const S=w;this[S(0x1a9)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this[S(0x202)]){e[0x1]['editor']['designItemsChanged'](c);}}[w(0x1e5)](c){const T=w;for(const {extension:d}of this[T(0x1ae)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[T(0x1cf)](e[0x1][T(0x19f)],e[0x0],c,this[T(0x1ca)],e[0x1][T(0x1db)]);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f['isSet'](e,d);c[U(0x219)]['valueType']=h;let i=f[U(0x210)](e,d);c['title']=d[U(0x1f7)]+':\x20'+h;if(h==ValueType[U(0x1ee)])c['style']['background']='',i=f[U(0x212)](e,d);else{if(h==ValueType[U(0x1ad)])c[U(0x1d2)][U(0x1b9)]=U(0x1d8);else{if(h==ValueType['some'])c['style']['background']=U(0x1b7);else{if(h==ValueType['bound'])c['style']['background']='orange';else h==ValueType[U(0x1ac)]&&(i=f[U(0x212)](e,d),c[U(0x1d2)]['background']=U(0x215));}}}g?.['refreshValueWithoutNotification'](h,i);}else c[U(0x1d2)][U(0x1b9)]='';}}customElements['define'](w(0x1a7),PropertyGridPropertyList);