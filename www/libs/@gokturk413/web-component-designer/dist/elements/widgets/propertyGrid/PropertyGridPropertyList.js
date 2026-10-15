const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x20c))/0x1*(-parseInt(v(0x1d4))/0x2)+parseInt(v(0x229))/0x3+parseInt(v(0x1d8))/0x4+parseInt(v(0x1a9))/0x5*(parseInt(v(0x21e))/0x6)+-parseInt(v(0x1a7))/0x7+parseInt(v(0x222))/0x8+parseInt(v(0x1ff))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x38e81));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x20d)]=[w(0x21c)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this[x(0x1be)])c[x(0x21d)][x(0x1ef)]('appearance',this[x(0x1e9)]('appearance')??x(0x22b));}['_div'];['_propertyMap']=new Map();['_serviceContainer'];['_propertiesService'];['_designItems'];[w(0x1da)];[w(0x1f6)]=0x0;[w(0x1be)]=[];['propertyGroupHover'];[w(0x210)];[w(0x1f1)];get[w(0x1a3)](){return this['_propertiesService'];}static get[w(0x1a4)](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this[y(0x218)]=c,this[y(0x204)]=document['createElement']('div'),this[y(0x204)][y(0x1d0)]='content-wrapper',this[y(0x1c6)][y(0x1d3)](this['_div']);}['setPropertiesService'](c){const z=w;if(this[z(0x21b)]!=c){this[z(0x21b)]=c,DomHelper[z(0x1e2)](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this[z(0x1be)])d[z(0x1ae)]?.();this[z(0x1be)]=[];}}async['createElements'](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x21b)]?.['getProperties'](c);return this[A(0x202)](c,d);}[w(0x212)](c){const B=w;if(!this['_propertiesService'])return![];if(this[B(0x1f3)]['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode[B(0x1a6)]&&(d!==RefreshMode[B(0x1e7)]||this[B(0x1da)]!==c[B(0x21d)]['constructor']);}[w(0x202)](c,d){const C=w;this[C(0x1da)]=c['element'][C(0x213)],DomHelper[C(0x1e2)](this[C(0x204)]),this['_propertyMap']['clear']();for(const {extension:e}of this[C(0x1be)])e['dispose']?.();this[C(0x1be)]=[];if(d?.[C(0x1b2)]){for(let f of d){if(C(0x1d9)in f)this['createPropertyGroups'](f);else this[C(0x1c4)](f);}return!![];}return![];}['createPropertyGroups'](c){const D=w;let d=document[D(0x1ac)](D(0x209));d['addEventListener']('click',()=>{const E=D;this['expandOrCollapsePropertyGroups'](c),d['classList']['toggle'](E(0x1f2));}),d['innerHTML']=c['name'][D(0x1b0)]('\x0a',D(0x1f4)),d['className']='group-header',this['_div'][D(0x1d3)](d);let e=document[D(0x1ac)]('span');e[D(0x1df)]=c['description']??'',e['className']=D(0x1de);this['propertyGroupHover']&&(d[D(0x20b)]=()=>{const F=D;if(this[F(0x1e0)](c,F(0x1b5)))d[F(0x1ef)](F(0x225),'');else d[F(0x1ee)](F(0x225));},d['onclick']=()=>{const G=D;if(this['propertyGroupClick'])this['propertyGroupClick'](c,G(0x1b5));},e[D(0x20b)]=()=>{const H=D;if(this[H(0x1e0)](c,H(0x217)))e['setAttribute'](H(0x225),'');else e[H(0x1ee)]('clickable');},e['onclick']=()=>{const I=D;if(this['propertyGroupClick'])this[I(0x210)](c,I(0x217));});this[D(0x204)][D(0x1d3)](e);for(const f of c['properties'])this[D(0x1c4)](f,!![]);}[w(0x1b4)](c){const J=w;for(let d of c['properties']){const e=this[J(0x1f3)][J(0x223)](d);e['rowElement'][J(0x1af)]=!e['rowElement']['hidden'];for(const {property:f,extension:g}of this[J(0x1be)])if(f===d)g[J(0x21d)][J(0x1af)]=e[J(0x207)]['hidden'];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[K(0x218)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g[K(0x22a)](c));if(e){const g=document['createElement']('div');g['className']='property-row';if(c[K(0x1fe)])g[K(0x200)]['add']('hide-label');let h=document[K(0x1ac)](K(0x215));h[K(0x1d0)]='property-actions';if(d)h['style']['marginLeft']='10px';h[K(0x1a4)]['width']='20px',h['style']['height']=K(0x227),h['style'][K(0x208)]=K(0x1d6),h[K(0x1a4)][K(0x1cb)]=K(0x211);let i=document['createElement'](K(0x1cd));i['type']='button',i['className']='property-status',i['textContent']='⋯',i[K(0x1ef)](K(0x1b8),K(0x1db)+(c['displayName']??c[K(0x1b5)])),i[K(0x219)]=c['readonly']===!![],i[K(0x1a4)]['width']=K(0x1eb),i[K(0x1a4)][K(0x1c9)]='7px',i[K(0x1a4)]['border']='1px\x20white\x20solid',i['style']['cursor']=K(0x1b6);if(c[K(0x1ad)]!=PropertyType[K(0x1e8)])h[K(0x1d3)](i);g[K(0x1d3)](h);c['readonly']!==!![]&&(i[K(0x1c5)]=j=>{const L=K;j[L(0x1ea)](),this['openContextMenu'](j,c);},i[K(0x21f)]=j=>{const M=K;j[M(0x1ea)](),this[M(0x1bf)](j,c);});if(c[K(0x224)]==K(0x203)){let j=e['element'];j['disabled']=!![],j['id']=K(0x1cf)+ ++this['_addCounter'];let k=document[K(0x1ac)]('input');f=k;d&&(k['style']['marginLeft']=K(0x1c2),k[K(0x1a4)][K(0x1ca)]=K(0x1fc));k[K(0x1dd)]=c['name'],k[K(0x224)]='text',k['id']='addNew_label_'+this[K(0x1f6)],k[K(0x201)]=l=>{const N=K;l['key']=='Enter'&&k['value']&&(c['name']=k[N(0x1dd)],k[N(0x219)]=!![],j[N(0x219)]=![],j['focus']());};if(c[K(0x1f8)][K(0x1f9)]){const l=c[K(0x1f8)][K(0x1f9)](null),m=document[K(0x1ac)]('datalist');m['id']='addNew_'+this['_addCounter']+K(0x21a);for(let n of l){const o=document['createElement']('option');o[K(0x1dd)]=n,m[K(0x1ab)](o);}g['appendChild'](m),k['setAttribute']('list',m['id']);}g['appendChild'](k);}else{if(c[K(0x1fe)])f=document['createElement'](K(0x209));else{if(!c[K(0x1d1)]){let p=document['createElement']('label');f=p;if(d)p[K(0x1a4)][K(0x1ec)]='10px';p[K(0x221)]=c[K(0x1b5)],p[K(0x1c0)]=c[K(0x1ba)]??c[K(0x1b5)],p['title']=c['description']??(c['displayName']??c[K(0x1b5)])+'\x20(type:\x20'+c[K(0x224)]+(c['defaultValue']?',\x20default:\x20'+c['defaultValue']:'')+',\x20propertytype:\x20'+c[K(0x1ad)]+')',p['ondragleave']=q=>this[K(0x1e3)](q,c,p),p[K(0x1ed)]=q=>this[K(0x206)](q,c,p),p[K(0x1c8)]=q=>this[K(0x1f5)](q,c,p),g['appendChild'](p);}else{let q=document[K(0x1ac)]('input');f=q;d&&(q[K(0x1a4)]['marginLeft']='10px',q[K(0x1a4)][K(0x1ca)]='calc(100%\x20-\x2010px)');q['id']='label_'+c['name'];let r=e[K(0x21d)];q['value']=c[K(0x1b5)],q['onkeyup']=async t=>{const O=K;if(t['key']=='Enter'&&q['value']){const u=this[O(0x1b1)][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c['name']+'\x27\x20to\x20\x27'+q['value']+'\x27');c[O(0x1f8)][O(0x214)](this['_designItems'],c,O(0x1bb)),c[O(0x1b5)]=q['value'],await c['service']['setValue'](this['_designItems'],c,r[O(0x1dd)]),u[O(0x1d2)](),this['_designItems'][0x0]['instanceServiceContainer']['designerCanvas'][O(0x20a)][O(0x226)](this[O(0x1b1)]);}},g['appendChild'](q);}}}if(c[K(0x1b5)])e['element']['id']=c['name'];if(e[K(0x21d)]instanceof HTMLElement)e['element'][K(0x200)][K(0x1fb)](K(0x1c1));if(c['hideLabel'])e[K(0x21d)][K(0x1a4)]['gridColumn']=K(0x1c7);f[K(0x200)]['add']('property-label'),g['appendChild'](e[K(0x21d)]),this[K(0x204)]['appendChild'](g);for(const t of this['_serviceContainer'][K(0x1cc)]){const u=t[K(0x1c3)](c);u&&(u[K(0x21d)]['setAttribute']('appearance',this[K(0x1e9)](K(0x21c))??K(0x22b)),u['element']['style']['gridColumn']='1\x20/\x20-1',this['_extensions']['push']({'property':c,'extension':u}),this[K(0x204)]['appendChild'](u['element']));}this[K(0x1f3)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x1e3)](c,d,e){const P=w;c['preventDefault'](),e[P(0x200)]['remove']('dragOverProperty');}['_onDragOver'](c,d,e){const Q=w;c['preventDefault']();const f=c[Q(0x1a8)][Q(0x1a2)][Q(0x1bc)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h[Q(0x1a5)](c,d,this[Q(0x1b1)]);(i??'none')!='none'?(e['classList']['add'](Q(0x1dc)),c['dataTransfer']['dropEffect']=i):e[Q(0x200)]['remove']('dragOverProperty');}}const g=c['dataTransfer']['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[Q(0x218)][Q(0x228)];if(j){const k=j['dragOverOnProperty'](c,d,this[Q(0x1b1)]);(k??'none')!='none'?(e['classList'][Q(0x1fb)](Q(0x1dc)),c['dataTransfer']['dropEffect']=k):e['classList'][Q(0x1e4)]('dragOverProperty');}}}['_onDrop'](c,d,e){const R=w;c['preventDefault'](),e[R(0x200)]['remove'](R(0x1dc));const f=c['dataTransfer'][R(0x1b3)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][R(0x1ce)];i&&i[R(0x1aa)](c,d,h,this['_designItems']);}const g=c[R(0x1a8)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[R(0x218)]['propertyGridDragDropService'];k&&k[R(0x1aa)](c,d,j,this['_designItems']);}}['openContextMenu'](c,d){const S=w;let e;if(this[S(0x1f1)])e=this[S(0x1f1)](this['_designItems'],d);if(!e)e=d['service']['getContextMenu'](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g[S(0x1f7)]?.(this[S(0x1b1)])??[]];ContextMenu[S(0x1b9)](e,c);}[w(0x1b7)](c){const T=w;this['_designItems']=c;for(const {extension:d}of this[T(0x1be)])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][T(0x1e5)][T(0x1b7)](c);}}[w(0x1f0)](c){const U=w;for(const {extension:d}of this[U(0x1be)])d[U(0x220)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][U(0x1bd)],e[0x0],c,this[U(0x21b)],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const V=w;if(e&&e[V(0x1b2)]){let h=f[V(0x1e6)](e,d);c[V(0x20e)]['valueType']=h;let i=f[V(0x1fd)](e,d);c[V(0x1e1)]=d[V(0x1b5)]+':\x20'+h;if(h==ValueType['none'])c[V(0x1a4)][V(0x20f)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c['style']['background']=V(0x216);else{if(h==ValueType[V(0x205)])c['style'][V(0x20f)]=V(0x1d7);else{if(h==ValueType[V(0x1fa)])c['style'][V(0x20f)]='orange';else h==ValueType['fromStylesheet']&&(i=f['getUnsetValue'](e,d),c['style']['background']=V(0x1d5));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}function a(){const W=['style','dragOverOnProperty','none','1384768DBjMyv','dataTransfer','5QgeFCj','dropOnProperty','append','createElement','propertyType','dispose','hidden','replaceAll','_designItems','length','getData','expandOrCollapsePropertyGroups','name','pointer','designItemsChanged','aria-label','show','displayName','all','indexOf','isSetElement','_extensions','openContextMenu','textContent','editor-control','10px','createExtension','createPropertyEditors','oncontextmenu','shadowRoot','2\x20/\x204','ondrop','height','width','alignItems','propertyGridExtensions','button','bindableObjectDragDropService','addNew_input_','className','renamable','commit','appendChild','2mIOzCq','yellow','flex','gray','1435888dyeryk','properties','_lastClassType','Actions\x20for\x20','dragOverProperty','value','group-desc','innerHTML','propertyGroupHover','title','removeAllChildnodes','_onDragLeave','remove','editor','isSet','fullOnClassChange','complex','getAttribute','preventDefault','7px','marginLeft','ondragover','removeAttribute','setAttribute','refreshForDesignItems','propertyContextMenuProvider','expanded','_propertyMap','<br>','_onDrop','_addCounter','getContextMenuItems','service','getPropertyNameSuggestions','bound','add','calc(100%\x20-\x2010px)','getValue','hideLabel','432810LRIsuz','classList','onkeyup','_rebuildElements','addNew','_div','some','_onDragOver','rowElement','display','span','extensionManager','onmouseenter','448447QlbVIK','observedAttributes','dataset','background','propertyGroupClick','center','_shouldCreateElements','constructor','clearValue','div','white','desc','_serviceContainer','disabled','_datalist','_propertiesService','appearance','element','1249962PdBKGC','onclick','refresh','htmlFor','1195640tTkZzC','get','type','clickable','refreshAllExtensions','20px','propertyGridDragDropService','343548lKCiRd','getEditorForProperty','classic','types','propertiesService'];a=function(){return W;};return a();}function b(c,d){c=c-0x1a2;const e=a();let f=e[c];return f;}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);