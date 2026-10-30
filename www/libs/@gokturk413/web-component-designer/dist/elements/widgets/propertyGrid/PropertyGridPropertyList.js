const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x155))/0x1*(parseInt(v(0x1d6))/0x2)+parseInt(v(0x14c))/0x3*(parseInt(v(0x1bf))/0x4)+parseInt(v(0x183))/0x5*(parseInt(v(0x17f))/0x6)+-parseInt(v(0x1c8))/0x7+parseInt(v(0x1c3))/0x8*(-parseInt(v(0x174))/0x9)+parseInt(v(0x163))/0xa*(-parseInt(v(0x166))/0xb)+-parseInt(v(0x14a))/0xc*(-parseInt(v(0x187))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcc728));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x141;const e=a();let f=e[c];return f;}import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[w(0x1bc)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this['_extensions'])c[x(0x172)]['setAttribute']('appearance',this[x(0x182)](x(0x1bc))??x(0x157));}[w(0x1ab)];['_propertyMap']=new Map();[w(0x1cf)];['_propertiesService'];[w(0x1a7)];['_lastClassType'];[w(0x189)]=0x0;[w(0x151)]=[];[w(0x199)];[w(0x160)];[w(0x171)];get[w(0x16c)](){return this['_propertiesService'];}static get[w(0x1af)](){return css`
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
    `;}constructor(c){const y=w;super(),this[y(0x1cc)](),this['_serviceContainer']=c,this[y(0x1ab)]=document['createElement'](y(0x15c)),this[y(0x1ab)][y(0x170)]='content-wrapper',this[y(0x1a5)]['appendChild'](this[y(0x1ab)]);}[w(0x1aa)](c){const z=w;if(this[z(0x19e)]!=c){this[z(0x19e)]=c,DomHelper[z(0x14d)](this['_div']),this[z(0x1b1)]['clear']();for(const {extension:d}of this['_extensions'])d[z(0x1ad)]?.();this[z(0x151)]=[];}}async['createElements'](c){const A=w;if(!this[A(0x164)](c))return!![];const d=await this[A(0x19e)]?.[A(0x16f)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=w;if(!this[B(0x19e)])return![];if(this['_propertyMap'][B(0x1d2)]==0x0)return!![];const d=this[B(0x19e)][B(0x1cb)](c);return d!==RefreshMode['none']&&(d!==RefreshMode[B(0x15f)]||this[B(0x177)]!==c['element'][B(0x197)]);}['_rebuildElements'](c,d){const C=w;this['_lastClassType']=c['element']['constructor'],DomHelper[C(0x14d)](this['_div']),this['_propertyMap'][C(0x19b)]();for(const {extension:e}of this[C(0x151)])e['dispose']?.();this[C(0x151)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const D=w;let d=document[D(0x1b3)]('span');d['addEventListener'](D(0x1ae),()=>{const E=D;this[E(0x1d4)](c),d[E(0x195)]['toggle']('expanded');}),d[D(0x15d)]=c['name'][D(0x162)]('\x0a','<br>'),d[D(0x170)]=D(0x1da),this[D(0x1ab)][D(0x147)](d);let e=document[D(0x1b3)](D(0x149));e['innerHTML']=c['description']??'',e[D(0x170)]=D(0x1b9);this[D(0x199)]&&(d[D(0x1b7)]=()=>{const F=D;if(this[F(0x199)](c,F(0x1d9)))d['setAttribute'](F(0x17e),'');else d[F(0x17b)]('clickable');},d['onclick']=()=>{const G=D;if(this['propertyGroupClick'])this['propertyGroupClick'](c,G(0x1d9));},e[D(0x1b7)]=()=>{const H=D;if(this[H(0x199)](c,H(0x146)))e['setAttribute'](H(0x17e),'');else e['removeAttribute'](H(0x17e));},e[D(0x1a9)]=()=>{const I=D;if(this[I(0x160)])this[I(0x160)](c,'desc');});this[D(0x1ab)][D(0x147)](e);for(const f of c[D(0x1d3)])this['createPropertyEditors'](f,!![]);}[w(0x1d4)](c){const J=w;for(let d of c['properties']){const e=this['_propertyMap']['get'](d);e[J(0x1ba)][J(0x178)]=!e[J(0x1ba)][J(0x178)];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g[J(0x172)]['hidden']=e[J(0x1ba)]['hidden'];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c[K(0x16d)])e=c[K(0x16d)](c);else e=this['_serviceContainer']['forSomeServicesTillResult'](K(0x1b6),g=>g['getEditorForProperty'](c));if(e){const g=document[K(0x1b3)]('div');g[K(0x170)]='property-row';if(c['hideLabel'])g[K(0x195)][K(0x1bb)](K(0x1b2));let h=document['createElement'](K(0x15c));h['className']='property-actions';if(d)h[K(0x1af)]['marginLeft']=K(0x14e);h['style'][K(0x19d)]=K(0x175),h['style'][K(0x1ce)]=K(0x175),h[K(0x1af)]['display']=K(0x1cd),h['style'][K(0x1c4)]=K(0x16a);let i=document['createElement'](K(0x19c));i['type']='button',i['className']='property-status',i['textContent']='⋯',i['setAttribute']('aria-label','Actions\x20for\x20'+(c[K(0x17a)]??c[K(0x1d9)])),i[K(0x18c)]=c[K(0x1b5)]===!![],i['style']['width']=K(0x1db),i['style'][K(0x1ce)]='12px',i[K(0x1af)][K(0x156)]=K(0x1ac),i[K(0x1af)][K(0x1d5)]=K(0x1a4),i['style']['cursor']='pointer';if(c[K(0x168)]!=PropertyType[K(0x145)])h['appendChild'](i);g['appendChild'](h);c['readonly']!==!![]&&(i[K(0x185)]=j=>{const L=K;j['preventDefault'](),this[L(0x190)](j,c);},i['onclick']=j=>{const M=K;j[M(0x198)](),this['openContextMenu'](j,c);});if(c['type']==K(0x158)){let j=e[K(0x172)];j[K(0x18c)]=!![],j['id']='addNew_input_'+ ++this['_addCounter'];let k=document['createElement'](K(0x1a6));f=k;d&&(k['style']['marginLeft']='10px',k[K(0x1af)][K(0x19d)]=K(0x159));k[K(0x148)]=c['name'],k['type']=K(0x19a),k['id']=K(0x188)+this[K(0x189)],k[K(0x144)]=l=>{const N=K;l[N(0x14b)]==N(0x18e)&&k[N(0x148)]&&(c['name']=k['value'],k[N(0x18c)]=!![],j[N(0x18c)]=![],j['focus']());};if(c[K(0x15b)]['getPropertyNameSuggestions']){const l=c['service']['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']='addNew_'+this[K(0x189)]+'_datalist';for(let n of l){const o=document['createElement']('option');o['value']=n,m[K(0x15e)](o);}g['appendChild'](m),k[K(0x1c2)](K(0x1a3),m['id']);}g[K(0x147)](k);}else{if(c[K(0x1c0)])f=document['createElement'](K(0x149));else{if(!c[K(0x191)]){let p=document[K(0x1b3)]('label');f=p;if(d)p[K(0x1af)][K(0x17c)]=K(0x14e);p[K(0x1d0)]=c[K(0x1d9)],p['textContent']=c[K(0x17a)]??c[K(0x1d9)],p[K(0x16b)]=c['description']??(c['displayName']??c[K(0x1d9)])+K(0x142)+c['type']+(c['defaultValue']?K(0x169)+c[K(0x173)]:'')+K(0x1b0)+c['propertyType']+')',p['ondragleave']=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this[K(0x1d7)](q,c,p),p[K(0x16e)]=q=>this['_onDrop'](q,c,p),g[K(0x147)](p);}else{let q=document[K(0x1b3)]('input');f=q;d&&(q['style']['marginLeft']=K(0x14e),q['style'][K(0x19d)]=K(0x159));q['id']=K(0x176)+c[K(0x1d9)];let r=e[K(0x172)];q[K(0x148)]=c[K(0x1d9)],q[K(0x144)]=async t=>{const O=K;if(t[O(0x14b)]=='Enter'&&q['value']){const u=this['_designItems'][0x0][O(0x165)]('rename\x20property\x20name\x20from\x20\x27'+c['name']+'\x27\x20to\x20\x27'+q['value']+'\x27');c[O(0x15b)]['clearValue'](this[O(0x1a7)],c,O(0x18f)),c['name']=q[O(0x148)],await c['service']['setValue'](this[O(0x1a7)],c,r['value']),u[O(0x1ca)](),this['_designItems'][0x0][O(0x167)]['designerCanvas'][O(0x154)]['refreshAllExtensions'](this['_designItems']);}},g['appendChild'](q);}}}if(c['name'])e['element']['id']=c['name'];if(e[K(0x172)]instanceof HTMLElement)e['element']['classList'][K(0x1bb)]('editor-control');if(c[K(0x1c0)])e['element'][K(0x1af)][K(0x179)]=K(0x194);f['classList'][K(0x1bb)](K(0x161)),g['appendChild'](e[K(0x172)]),this[K(0x1ab)][K(0x147)](g);for(const t of this['_serviceContainer'][K(0x1c7)]){const u=t[K(0x19f)](c);u&&(u['element'][K(0x1c2)]('appearance',this[K(0x182)](K(0x1bc))??'classic'),u[K(0x172)][K(0x1af)]['gridColumn']=K(0x192),this['_extensions'][K(0x1a8)]({'property':c,'extension':u}),this[K(0x1ab)][K(0x147)](u[K(0x172)]));}this['_propertyMap'][K(0x1c1)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x14f)](c,d,e){const P=w;c[P(0x198)](),e['classList'][P(0x1d1)]('dragOverProperty');}['_onDragOver'](c,d,e){const Q=w;c['preventDefault']();const f=c[Q(0x193)]['types'][Q(0x1c6)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h['dragOverOnProperty'](c,d,this[Q(0x1a7)]);(i??'none')!=Q(0x1b8)?(e['classList'][Q(0x1bb)](Q(0x1a2)),c['dataTransfer'][Q(0x1c5)]=i):e[Q(0x195)]['remove'](Q(0x1a2));}}const g=c[Q(0x193)][Q(0x17d)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][Q(0x1be)];if(j){const k=j[Q(0x1c9)](c,d,this['_designItems']);(k??Q(0x1b8))!=Q(0x1b8)?(e['classList'][Q(0x1bb)]('dragOverProperty'),c['dataTransfer'][Q(0x1c5)]=k):e[Q(0x195)]['remove']('dragOverProperty');}}}['_onDrop'](c,d,e){const R=w;c[R(0x198)](),e[R(0x195)][R(0x1d1)]('dragOverProperty');const f=c[R(0x193)][R(0x18a)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][R(0x152)];i&&i[R(0x15a)](c,d,h,this['_designItems']);}const g=c['dataTransfer'][R(0x18a)](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this[R(0x1cf)]['propertyGridDragDropService'];k&&k[R(0x15a)](c,d,j,this[R(0x1a7)]);}}[w(0x190)](c,d){const S=w;let e;if(this['propertyContextMenuProvider'])e=this[S(0x171)](this[S(0x1a7)],d);if(!e)e=d['service'][S(0x1a1)](this[S(0x1a7)],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}['designItemsChanged'](c){const T=w;this['_designItems']=c;for(const {extension:d}of this[T(0x151)])d['refresh'](c);for(let e of this[T(0x1b1)]){e[0x1][T(0x1a0)][T(0x180)](c);}}[w(0x150)](c){const U=w;for(const {extension:d}of this[U(0x151)])d[U(0x141)](c);for(let e of this[U(0x1b1)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this[U(0x19e)],e[0x1]['editor']);}}static[w(0x153)](c,d,e,f,g){const V=w;if(e&&e[V(0x1d8)]){let h=f[V(0x181)](e,d);c[V(0x143)][V(0x18d)]=h;let i=f[V(0x1bd)](e,d);c[V(0x16b)]=d[V(0x1d9)]+':\x20'+h;if(h==ValueType[V(0x1b8)])c['style']['background']='',i=f[V(0x184)](e,d);else{if(h==ValueType['all'])c['style']['background']='white';else{if(h==ValueType[V(0x1dc)])c[V(0x1af)][V(0x1b4)]=V(0x196);else{if(h==ValueType['bound'])c[V(0x1af)]['background']=V(0x18b);else h==ValueType['fromStylesheet']&&(i=f[V(0x184)](e,d),c['style'][V(0x1b4)]=V(0x186));}}}g?.['refreshValueWithoutNotification'](h,i);}else c[V(0x1af)]['background']='';}}function a(){const W=['getValue','propertyGridDragDropService','111796xbTQXn','hideLabel','set','setAttribute','240QtCKKM','alignItems','dropEffect','indexOf','propertyGridExtensions','9473562WJnAuj','dragOverOnProperty','commit','getRefreshMode','_restoreCachedInititalValues','flex','height','_serviceContainer','htmlFor','remove','size','properties','expandOrCollapsePropertyGroups','border','30242WcbVYD','_onDragOver','length','name','group-header','12px','some','refresh','\x20(type:\x20','dataset','onkeyup','complex','desc','appendChild','value','span','3171720GTTciW','key','6aUNgUg','removeAllChildnodes','10px','_onDragLeave','refreshForDesignItems','_extensions','bindableObjectDragDropService','refreshIsSetElementAndEditorForDesignItems','extensionManager','77wjcxzB','borderRadius','classic','addNew','calc(100%\x20-\x2010px)','dropOnProperty','service','div','innerHTML','append','fullOnClassChange','propertyGroupClick','property-label','replaceAll','50uQmeVG','_shouldCreateElements','openGroup','1017489WhAjrJ','instanceServiceContainer','propertyType',',\x20default:\x20','center','title','propertiesService','createEditor','ondrop','getProperties','className','propertyContextMenuProvider','element','defaultValue','245223OJCJjf','20px','label_','_lastClassType','hidden','gridColumn','displayName','removeAttribute','marginLeft','types','clickable','72444jrPIdE','designItemsChanged','isSet','getAttribute','145uFwepH','getUnsetValue','oncontextmenu','yellow','208BRNSjb','addNew_label_','_addCounter','getData','orange','disabled','valueType','Enter','all','openContextMenu','renamable','1\x20/\x20-1','dataTransfer','2\x20/\x204','classList','gray','constructor','preventDefault','propertyGroupHover','text','clear','button','width','_propertiesService','createExtension','editor','getContextMenu','dragOverProperty','list','1px\x20white\x20solid','shadowRoot','input','_designItems','push','onclick','setPropertiesService','_div','2px','dispose','click','style',',\x20propertytype:\x20','_propertyMap','hide-label','createElement','background','readonly','propertyEditorTypesService','onmouseenter','none','group-desc','rowElement','add','appearance'];a=function(){return W;};return a();}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);