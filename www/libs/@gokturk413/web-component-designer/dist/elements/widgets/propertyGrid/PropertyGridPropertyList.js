const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x206))/0x1+-parseInt(v(0x1aa))/0x2*(parseInt(v(0x1df))/0x3)+-parseInt(v(0x1a9))/0x4+parseInt(v(0x1e3))/0x5*(-parseInt(v(0x228))/0x6)+-parseInt(v(0x227))/0x7+-parseInt(v(0x1e5))/0x8+-parseInt(v(0x1d0))/0x9*(-parseInt(v(0x1d3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x374b0));function b(c,d){c=c-0x1a2;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';function a(){const U=['_serviceContainer','111155qYyeEv','label_','bindableObjectDragDropService','white','indexOf','parse','2\x20/\x204','_onDrop','1\x20/\x20-1','clear','dragOverOnProperty','Enter','div','refresh','_div','show','button','_shouldCreateElements','\x27\x20to\x20\x27','property-actions','all','observedAttributes','dropOnProperty','createElements','propertyGroupClick','removeAttribute','_lastClassType','getContextMenuItems','group-desc','classList','getAttribute','renamable','propertyType','1024086etIFjW','24HlYlZm','rowElement','\x20(type:\x20','preventDefault','_extensions','setAttribute','replaceAll','element','some','readonly','_propertyMap','982916dSUtCs','137652WFKGxS','append','designItemsChanged','orange','marginLeft','hideLabel','gray','getUnsetValue','border','appearance','background','onmouseenter','service','fullOnClassChange','width','none','constructor','clickable','content-wrapper','_datalist','set','desc','20px','attributeChangedCallback','isSet','getContextMenu',',\x20propertytype:\x20','classic','2px','gridColumn','ondragleave','ondragover','span','displayName','types','type','add','_addCounter','9513gaYJmT','dataTransfer','addNew_input_','12360PUstmS','refreshIsSetElementAndEditorForDesignItems','addEventListener','getValue','bound','openContextMenu','_restoreCachedInititalValues','createElement','defaultValue','appendChild','aria-label','expandOrCollapsePropertyGroups','9sjKTwl','_rebuildElements','yellow','name','160855PfzLvN','dragOverProperty','1933024PkhlTm','display','dataset','complex','propertyGroupHover','addNew_','_propertiesService','description','hidden','onkeyup','onclick','Actions\x20for\x20','center','input','cursor','editor-control','10px','calc(100%\x20-\x2010px)','value','1px\x20white\x20solid','label','openGroup','_designItems','get','createPropertyEditors','12px','textContent','propertyContextMenuProvider','disabled','style','_onDragLeave','getPropertyNameSuggestions'];a=function(){return U;};return a();}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x21b)]=['appearance'];[w(0x1c1)](){const x=w;for(const {extension:c}of this['_extensions'])c['element'][x(0x1a3)]('appearance',this[x(0x224)](x(0x1b3))??x(0x1c5));}['_div'];[w(0x1a8)]=new Map();[w(0x205)];['_propertiesService'];[w(0x1fb)];[w(0x220)];[w(0x1cf)]=0x0;['_extensions']=[];['propertyGroupHover'];[w(0x21e)];[w(0x200)];get['propertiesService'](){return this['_propertiesService'];}static get[w(0x202)](){return css`
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
    `;}constructor(c){const y=w;super(),this[y(0x1d9)](),this[y(0x205)]=c,this[y(0x214)]=document['createElement'](y(0x212)),this[y(0x214)]['className']=y(0x1bc),this['shadowRoot'][y(0x1dc)](this['_div']);}['setPropertiesService'](c){const z=w;if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap'][z(0x20f)]();for(const {extension:d}of this[z(0x1a2)])d['dispose']?.();this['_extensions']=[];}}async[w(0x21d)](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x1eb)]?.['getProperties'](c);return this[A(0x1e0)](c,d);}[w(0x217)](c){const B=w;if(!this[B(0x1eb)])return![];if(this['_propertyMap']['size']==0x0)return!![];const d=this[B(0x1eb)]['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode[B(0x1b7)]||this['_lastClassType']!==c[B(0x1a5)][B(0x1ba)]);}[w(0x1e0)](c,d){const C=w;this[C(0x220)]=c['element']['constructor'],DomHelper['removeAllChildnodes'](this[C(0x214)]),this[C(0x1a8)][C(0x20f)]();for(const {extension:e}of this['_extensions'])e['dispose']?.();this[C(0x1a2)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this[C(0x1fd)](f);}return!![];}return![];}['createPropertyGroups'](c){const D=w;let d=document[D(0x1da)](D(0x1ca));d[D(0x1d5)]('click',()=>{const E=D;this[E(0x1de)](c),d['classList']['toggle']('expanded');}),d['innerHTML']=c[D(0x1e2)][D(0x1a4)]('\x0a','<br>'),d['className']='group-header',this['_div']['appendChild'](d);let e=document[D(0x1da)]('span');e['innerHTML']=c[D(0x1ec)]??'',e['className']=D(0x222);this[D(0x1e9)]&&(d[D(0x1b5)]=()=>{const F=D;if(this[F(0x1e9)](c,'name'))d[F(0x1a3)](F(0x1bb),'');else d[F(0x21f)](F(0x1bb));},d[D(0x1ef)]=()=>{const G=D;if(this['propertyGroupClick'])this[G(0x21e)](c,'name');},e[D(0x1b5)]=()=>{const H=D;if(this['propertyGroupHover'](c,H(0x1bf)))e['setAttribute']('clickable','');else e['removeAttribute']('clickable');},e[D(0x1ef)]=()=>{const I=D;if(this[I(0x21e)])this['propertyGroupClick'](c,I(0x1bf));});this['_div']['appendChild'](e);for(const f of c['properties'])this[D(0x1fd)](f,!![]);}[w(0x1de)](c){const J=w;for(let d of c['properties']){const e=this[J(0x1a8)][J(0x1fc)](d);e[J(0x229)][J(0x1ed)]=!e['rowElement']['hidden'];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g[J(0x1a5)][J(0x1ed)]=e[J(0x229)][J(0x1ed)];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[K(0x205)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document['createElement']('div');g['className']='property-row';if(c['hideLabel'])g[K(0x223)][K(0x1ce)]('hide-label');let h=document['createElement'](K(0x212));h['className']=K(0x219);if(d)h['style'][K(0x1ae)]='10px';h[K(0x202)]['width']=K(0x1c0),h['style']['height']=K(0x1c0),h[K(0x202)][K(0x1e6)]='flex',h[K(0x202)]['alignItems']=K(0x1f1);let i=document['createElement'](K(0x216));i[K(0x1cd)]='button',i['className']='property-status',i[K(0x1ff)]='⋯',i['setAttribute'](K(0x1dd),K(0x1f0)+(c['displayName']??c[K(0x1e2)])),i[K(0x201)]=c['readonly']===!![],i[K(0x202)][K(0x1b8)]=K(0x1fe),i[K(0x202)]['height']='12px',i['style']['borderRadius']=K(0x1c6),i['style'][K(0x1b2)]=K(0x1f8),i['style'][K(0x1f3)]='pointer';if(c[K(0x226)]!=PropertyType[K(0x1e8)])h['appendChild'](i);g[K(0x1dc)](h);c[K(0x1a7)]!==!![]&&(i['oncontextmenu']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i['onclick']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c['type']=='addNew'){let j=e[K(0x1a5)];j['disabled']=!![],j['id']=K(0x1d2)+ ++this['_addCounter'];let k=document['createElement'](K(0x1f2));f=k;d&&(k['style'][K(0x1ae)]=K(0x1f5),k[K(0x202)]['width']='calc(100%\x20-\x2010px)');k[K(0x1f7)]=c[K(0x1e2)],k[K(0x1cd)]='text',k['id']='addNew_label_'+this['_addCounter'],k[K(0x1ee)]=l=>{const L=K;l['key']=='Enter'&&k[L(0x1f7)]&&(c[L(0x1e2)]=k['value'],k[L(0x201)]=!![],j['disabled']=![],j['focus']());};if(c['service'][K(0x204)]){const l=c['service'][K(0x204)](null),m=document[K(0x1da)]('datalist');m['id']=K(0x1ea)+this[K(0x1cf)]+K(0x1bd);for(let n of l){const o=document['createElement']('option');o[K(0x1f7)]=n,m[K(0x1ab)](o);}g['appendChild'](m),k[K(0x1a3)]('list',m['id']);}g[K(0x1dc)](k);}else{if(c[K(0x1af)])f=document['createElement'](K(0x1ca));else{if(!c[K(0x225)]){let p=document[K(0x1da)](K(0x1f9));f=p;if(d)p[K(0x202)][K(0x1ae)]='10px';p['htmlFor']=c[K(0x1e2)],p[K(0x1ff)]=c['displayName']??c['name'],p['title']=c['description']??(c[K(0x1cb)]??c['name'])+K(0x22a)+c[K(0x1cd)]+(c[K(0x1db)]?',\x20default:\x20'+c[K(0x1db)]:'')+K(0x1c4)+c[K(0x226)]+')',p[K(0x1c8)]=q=>this[K(0x203)](q,c,p),p[K(0x1c9)]=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this[K(0x20d)](q,c,p),g['appendChild'](p);}else{let q=document[K(0x1da)](K(0x1f2));f=q;d&&(q['style']['marginLeft']=K(0x1f5),q['style'][K(0x1b8)]=K(0x1f6));q['id']=K(0x207)+c[K(0x1e2)];let r=e[K(0x1a5)];q['value']=c['name'],q[K(0x1ee)]=async t=>{const M=K;if(t['key']==M(0x211)&&q[M(0x1f7)]){const u=this['_designItems'][0x0][M(0x1fa)]('rename\x20property\x20name\x20from\x20\x27'+c[M(0x1e2)]+M(0x218)+q[M(0x1f7)]+'\x27');c[M(0x1b6)]['clearValue'](this['_designItems'],c,M(0x21a)),c[M(0x1e2)]=q[M(0x1f7)],await c[M(0x1b6)]['setValue'](this[M(0x1fb)],c,r['value']),u['commit'](),this[M(0x1fb)][0x0]['instanceServiceContainer']['designerCanvas']['extensionManager']['refreshAllExtensions'](this['_designItems']);}},g['appendChild'](q);}}}if(c['name'])e['element']['id']=c['name'];if(e[K(0x1a5)]instanceof HTMLElement)e[K(0x1a5)]['classList']['add'](K(0x1f4));if(c['hideLabel'])e[K(0x1a5)][K(0x202)][K(0x1c7)]=K(0x20c);f['classList']['add']('property-label'),g['appendChild'](e['element']),this[K(0x214)]['appendChild'](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u[K(0x1a5)][K(0x1a3)]('appearance',this['getAttribute']('appearance')??'classic'),u['element'][K(0x202)][K(0x1c7)]=K(0x20e),this[K(0x1a2)]['push']({'property':c,'extension':u}),this['_div'][K(0x1dc)](u['element']));}this['_propertyMap'][K(0x1be)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x203)](c,d,e){const N=w;c['preventDefault'](),e[N(0x223)]['remove']('dragOverProperty');}['_onDragOver'](c,d,e){const O=w;c['preventDefault']();const f=c['dataTransfer']['types'][O(0x20a)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[O(0x205)][O(0x208)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!='none'?(e['classList'][O(0x1ce)](O(0x1e4)),c['dataTransfer']['dropEffect']=i):e[O(0x223)]['remove']('dragOverProperty');}}const g=c['dataTransfer'][O(0x1cc)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j[O(0x210)](c,d,this['_designItems']);(k??O(0x1b9))!=O(0x1b9)?(e['classList']['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=k):e[O(0x223)]['remove'](O(0x1e4));}}}['_onDrop'](c,d,e){const P=w;c[P(0x22b)](),e[P(0x223)]['remove']('dragOverProperty');const f=c[P(0x1d1)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[P(0x20b)](f),i=this['_serviceContainer']['bindableObjectDragDropService'];i&&i['dropOnProperty'](c,d,h,this[P(0x1fb)]);}const g=c[P(0x1d1)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer']['propertyGridDragDropService'];k&&k[P(0x21c)](c,d,j,this[P(0x1fb)]);}}[w(0x1d8)](c,d){const Q=w;let e;if(this['propertyContextMenuProvider'])e=this[Q(0x200)](this[Q(0x1fb)],d);if(!e)e=d['service'][Q(0x1c3)](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g[Q(0x221)]?.(this['_designItems'])??[]];ContextMenu[Q(0x215)](e,c);}[w(0x1ac)](c){const R=w;this[R(0x1fb)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1]['editor']['designItemsChanged'](c);}}['refreshForDesignItems'](c){const S=w;for(const {extension:d}of this[S(0x1a2)])d[S(0x213)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[S(0x1d4)](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const T=w;if(e&&e['length']){let h=f[T(0x1c2)](e,d);c[T(0x1e7)]['valueType']=h;let i=f[T(0x1d6)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType['none'])c['style']['background']='',i=f[T(0x1b1)](e,d);else{if(h==ValueType['all'])c['style']['background']=T(0x209);else{if(h==ValueType[T(0x1a6)])c[T(0x202)]['background']=T(0x1b0);else{if(h==ValueType[T(0x1d7)])c[T(0x202)]['background']=T(0x1ad);else h==ValueType['fromStylesheet']&&(i=f[T(0x1b1)](e,d),c[T(0x202)][T(0x1b4)]=T(0x1e1));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);