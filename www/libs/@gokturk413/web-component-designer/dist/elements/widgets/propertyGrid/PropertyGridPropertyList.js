const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x16f))/0x1*(-parseInt(v(0x1bf))/0x2)+parseInt(v(0x1a6))/0x3+parseInt(v(0x169))/0x4+parseInt(v(0x193))/0x5*(parseInt(v(0x165))/0x6)+-parseInt(v(0x161))/0x7+-parseInt(v(0x1af))/0x8+-parseInt(v(0x1c4))/0x9*(-parseInt(v(0x182))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x73e33));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';function b(c,d){c=c-0x149;const e=a();let f=e[c];return f;}import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x174)]=[w(0x154)];[w(0x19c)](){const x=w;for(const {extension:c}of this['_extensions'])c['element'][x(0x196)](x(0x154),this[x(0x1a7)](x(0x154))??x(0x16c));}['_div'];['_propertyMap']=new Map();[w(0x16a)];[w(0x197)];[w(0x164)];[w(0x1ae)];['_addCounter']=0x0;['_extensions']=[];[w(0x1c3)];['propertyGroupClick'];['propertyContextMenuProvider'];get[w(0x17f)](){const y=w;return this[y(0x197)];}static get[w(0x151)](){return css`
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
    `;}constructor(c){const z=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this['_div']=document[z(0x1b6)](z(0x172)),this[z(0x198)][z(0x1ba)]='content-wrapper',this[z(0x14f)]['appendChild'](this['_div']);}['setPropertiesService'](c){const A=w;if(this[A(0x197)]!=c){this['_propertiesService']=c,DomHelper[A(0x1a3)](this[A(0x198)]),this[A(0x192)][A(0x1b2)]();for(const {extension:d}of this['_extensions'])d[A(0x19d)]?.();this['_extensions']=[];}}async['createElements'](c){const B=w;if(!this[B(0x1c5)](c))return!![];const d=await this['_propertiesService']?.[B(0x186)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const C=w;if(!this[C(0x197)])return![];if(this[C(0x192)][C(0x1a1)]==0x0)return!![];const d=this['_propertiesService'][C(0x189)](c);return d!==RefreshMode['none']&&(d!==RefreshMode['fullOnClassChange']||this['_lastClassType']!==c[C(0x177)]['constructor']);}[w(0x15d)](c,d){const D=w;this['_lastClassType']=c[D(0x177)]['constructor'],DomHelper[D(0x1a3)](this['_div']),this[D(0x192)][D(0x1b2)]();for(const {extension:e}of this['_extensions'])e['dispose']?.();this['_extensions']=[];if(d?.['length']){for(let f of d){if('properties'in f)this[D(0x175)](f);else this[D(0x1d2)](f);}return!![];}return![];}['createPropertyGroups'](c){const E=w;let d=document['createElement'](E(0x1d4));d[E(0x1c6)]('click',()=>{const F=E;this[F(0x150)](c),d[F(0x18a)][F(0x173)]('expanded');}),d['innerHTML']=c['name'][E(0x149)]('\x0a',E(0x1b3)),d[E(0x1ba)]=E(0x1cc),this[E(0x198)]['appendChild'](d);let e=document[E(0x1b6)](E(0x1d4));e[E(0x1c8)]=c['description']??'',e['className']='group-desc';this[E(0x1c3)]&&(d['onmouseenter']=()=>{const G=E;if(this['propertyGroupHover'](c,G(0x18c)))d[G(0x196)]('clickable','');else d['removeAttribute']('clickable');},d['onclick']=()=>{const H=E;if(this['propertyGroupClick'])this[H(0x15a)](c,'name');},e['onmouseenter']=()=>{const I=E;if(this[I(0x1c3)](c,I(0x1b4)))e['setAttribute'](I(0x1a4),'');else e[I(0x1c9)](I(0x1a4));},e['onclick']=()=>{const J=E;if(this['propertyGroupClick'])this[J(0x15a)](c,J(0x1b4));});this['_div']['appendChild'](e);for(const f of c[E(0x18b)])this[E(0x1d2)](f,!![]);}[w(0x150)](c){const K=w;for(let d of c[K(0x18b)]){const e=this['_propertyMap']['get'](d);e[K(0x1b1)]['hidden']=!e['rowElement']['hidden'];for(const {property:f,extension:g}of this[K(0x14b)])if(f===d)g[K(0x177)]['hidden']=e['rowElement']['hidden'];}}[w(0x1d2)](c,d){const L=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this['_serviceContainer'][L(0x1cb)](L(0x1c7),g=>g['getEditorForProperty'](c));if(e){const g=document['createElement'](L(0x172));g['className']='property-row';if(c[L(0x1aa)])g['classList']['add'](L(0x171));let h=document[L(0x1b6)](L(0x172));h['className']='property-actions';if(d)h[L(0x151)][L(0x15c)]='10px';h[L(0x151)]['width']='20px',h['style']['height']='20px',h['style']['display']=L(0x1b5),h[L(0x151)]['alignItems']=L(0x14d);let i=document['createElement'](L(0x157));i['type']=L(0x157),i[L(0x1ba)]=L(0x1ab),i['textContent']='⋯',i[L(0x196)](L(0x16b),L(0x16d)+(c[L(0x17b)]??c['name'])),i['disabled']=c[L(0x1a2)]===!![],i['style'][L(0x155)]='12px',i['style'][L(0x179)]='12px',i['style']['borderRadius']=L(0x1c1),i['style']['border']=L(0x176),i[L(0x151)]['cursor']=L(0x18e);if(c['propertyType']!=PropertyType['complex'])h[L(0x14a)](i);g['appendChild'](h);c['readonly']!==!![]&&(i['oncontextmenu']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i['onclick']=j=>{const M=L;j['preventDefault'](),this[M(0x18d)](j,c);});if(c[L(0x160)]=='addNew'){let j=e[L(0x177)];j[L(0x19a)]=!![],j['id']=L(0x17d)+ ++this[L(0x167)];let k=document[L(0x1b6)](L(0x170));f=k;d&&(k['style']['marginLeft']=L(0x1bd),k[L(0x151)]['width']='calc(100%\x20-\x2010px)');k[L(0x156)]=c[L(0x18c)],k[L(0x160)]='text',k['id']=L(0x183)+this['_addCounter'],k[L(0x1d0)]=l=>{const N=L;l[N(0x1a9)]==N(0x184)&&k[N(0x156)]&&(c[N(0x18c)]=k[N(0x156)],k['disabled']=!![],j[N(0x19a)]=![],j['focus']());};if(c[L(0x1b7)]['getPropertyNameSuggestions']){const l=c[L(0x1b7)]['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']=L(0x1a8)+this[L(0x167)]+L(0x194);for(let n of l){const o=document[L(0x1b6)](L(0x1ce));o['value']=n,m['append'](o);}g[L(0x14a)](m),k['setAttribute'](L(0x1c0),m['id']);}g[L(0x14a)](k);}else{if(c[L(0x1aa)])f=document[L(0x1b6)](L(0x1d4));else{if(!c['renamable']){let p=document[L(0x1b6)]('label');f=p;if(d)p[L(0x151)][L(0x15c)]='10px';p['htmlFor']=c[L(0x18c)],p[L(0x185)]=c['displayName']??c['name'],p[L(0x14e)]=c[L(0x1b8)]??(c[L(0x17b)]??c['name'])+L(0x15f)+c[L(0x160)]+(c['defaultValue']?L(0x178)+c['defaultValue']:'')+L(0x153)+c['propertyType']+')',p[L(0x1d1)]=q=>this['_onDragLeave'](q,c,p),p[L(0x17c)]=q=>this[L(0x195)](q,c,p),p[L(0x191)]=q=>this[L(0x19e)](q,c,p),g['appendChild'](p);}else{let q=document['createElement'](L(0x170));f=q;d&&(q[L(0x151)]['marginLeft']=L(0x1bd),q[L(0x151)]['width']='calc(100%\x20-\x2010px)');q['id']=L(0x19f)+c['name'];let r=e['element'];q[L(0x156)]=c['name'],q[L(0x1d0)]=async t=>{const O=L;if(t[O(0x1a9)]=='Enter'&&q[O(0x156)]){const u=this['_designItems'][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c[O(0x18c)]+'\x27\x20to\x20\x27'+q[O(0x156)]+'\x27');c[O(0x1b7)][O(0x1d5)](this['_designItems'],c,O(0x1cd)),c['name']=q[O(0x156)],await c['service']['setValue'](this[O(0x164)],c,r[O(0x156)]),u['commit'](),this[O(0x164)][0x0]['instanceServiceContainer']['designerCanvas']['extensionManager']['refreshAllExtensions'](this['_designItems']);}},g[L(0x14a)](q);}}}if(c['name'])e['element']['id']=c['name'];if(e['element']instanceof HTMLElement)e['element']['classList'][L(0x163)]('editor-control');if(c['hideLabel'])e[L(0x177)][L(0x151)][L(0x17e)]=L(0x1cf);f[L(0x18a)][L(0x163)](L(0x166)),g[L(0x14a)](e['element']),this[L(0x198)]['appendChild'](g);for(const t of this[L(0x16a)]['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u['element'][L(0x196)](L(0x154),this[L(0x1a7)](L(0x154))??L(0x16c)),u[L(0x177)]['style'][L(0x17e)]=L(0x19b),this[L(0x14b)][L(0x1a0)]({'property':c,'extension':u}),this[L(0x198)]['appendChild'](u['element']));}this['_propertyMap'][L(0x1bb)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x1a5)](c,d,e){const P=w;c[P(0x152)](),e[P(0x18a)][P(0x1be)](P(0x181));}['_onDragOver'](c,d,e){const Q=w;c['preventDefault']();const f=c[Q(0x1d3)]['types'][Q(0x1c2)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[Q(0x16a)][Q(0x15b)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!=Q(0x16e)?(e['classList'][Q(0x163)](Q(0x181)),c['dataTransfer']['dropEffect']=i):e[Q(0x18a)]['remove'](Q(0x181));}}const g=c[Q(0x1d3)]['types'][Q(0x1c2)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j[Q(0x14c)](c,d,this[Q(0x164)]);(k??'none')!='none'?(e[Q(0x18a)]['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=k):e[Q(0x18a)][Q(0x1be)]('dragOverProperty');}}}[w(0x19e)](c,d,e){const R=w;c['preventDefault'](),e[R(0x18a)]['remove']('dragOverProperty');const f=c[R(0x1d3)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer']['bindableObjectDragDropService'];i&&i[R(0x190)](c,d,h,this[R(0x164)]);}const g=c['dataTransfer'][R(0x1ac)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[R(0x168)](g),k=this[R(0x16a)]['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}['openContextMenu'](c,d){const S=w;let e;if(this[S(0x1ca)])e=this[S(0x1ca)](this['_designItems'],d);if(!e)e=d[S(0x1b7)]['getContextMenu'](this[S(0x164)],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}['designItemsChanged'](c){const T=w;this['_designItems']=c;for(const {extension:d}of this[T(0x14b)])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][T(0x1b9)]['designItemsChanged'](c);}}['refreshForDesignItems'](c){const U=w;for(const {extension:d}of this[U(0x14b)])d[U(0x187)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[U(0x15e)](e[0x1][U(0x180)],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const V=w;if(e&&e['length']){let h=f[V(0x188)](e,d);c[V(0x18f)]['valueType']=h;let i=f[V(0x1ad)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType[V(0x16e)])c[V(0x151)]['background']='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c['style']['background']=V(0x199);else{if(h==ValueType['some'])c['style'][V(0x159)]=V(0x162);else{if(h==ValueType[V(0x158)])c[V(0x151)]['background']='orange';else h==ValueType['fromStylesheet']&&(i=f[V(0x1b0)](e,d),c[V(0x151)][V(0x159)]=V(0x17a));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style'][V(0x159)]='';}}function a(){const W=['setAttribute','_propertiesService','_div','white','disabled','1\x20/\x20-1','attributeChangedCallback','dispose','_onDrop','label_','push','size','readonly','removeAllChildnodes','clickable','_onDragLeave','1200537JKpuIi','getAttribute','addNew_','key','hideLabel','property-status','getData','getValue','_lastClassType','150616FAKsiT','getUnsetValue','rowElement','clear','<br>','desc','flex','createElement','service','description','editor','className','set','node-projects-property-grid-property-list','10px','remove','82AkAufL','list','2px','indexOf','propertyGroupHover','2979WfIBXv','_shouldCreateElements','addEventListener','propertyEditorTypesService','innerHTML','removeAttribute','propertyContextMenuProvider','forSomeServicesTillResult','group-header','all','option','2\x20/\x204','onkeyup','ondragleave','createPropertyEditors','dataTransfer','span','clearValue','replaceAll','appendChild','_extensions','dragOverOnProperty','center','title','shadowRoot','expandOrCollapsePropertyGroups','style','preventDefault',',\x20propertytype:\x20','appearance','width','value','button','bound','background','propertyGroupClick','bindableObjectDragDropService','marginLeft','_rebuildElements','refreshIsSetElementAndEditorForDesignItems','\x20(type:\x20','type','3200036USkCWs','gray','add','_designItems','82500CtQlQc','property-label','_addCounter','parse','1919192AZbGqU','_serviceContainer','aria-label','classic','Actions\x20for\x20','none','1746bLjiuu','input','hide-label','div','toggle','observedAttributes','createPropertyGroups','1px\x20white\x20solid','element',',\x20default:\x20','height','yellow','displayName','ondragover','addNew_input_','gridColumn','propertiesService','isSetElement','dragOverProperty','1390yJlSve','addNew_label_','Enter','textContent','getProperties','refresh','isSet','getRefreshMode','classList','properties','name','openContextMenu','pointer','dataset','dropOnProperty','ondrop','_propertyMap','35fVhOYB','_datalist','_onDragOver'];a=function(){return W;};return a();}customElements['define'](w(0x1bc),PropertyGridPropertyList);