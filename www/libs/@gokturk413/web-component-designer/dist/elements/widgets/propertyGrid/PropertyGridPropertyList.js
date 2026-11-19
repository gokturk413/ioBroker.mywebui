const w=b;function b(c,d){c=c-0x144;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x148))/0x1+parseInt(v(0x1b6))/0x2+-parseInt(v(0x170))/0x3*(-parseInt(v(0x1a6))/0x4)+-parseInt(v(0x1a5))/0x5+-parseInt(v(0x145))/0x6+-parseInt(v(0x1b0))/0x7+parseInt(v(0x156))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcdd04));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];[w(0x1be)](){const x=w;for(const {extension:c}of this[x(0x1a9)])c['element']['setAttribute']('appearance',this['getAttribute'](x(0x1a1))??x(0x16c));}[w(0x171)];[w(0x188)]=new Map();['_serviceContainer'];['_propertiesService'];[w(0x173)];[w(0x160)];['_addCounter']=0x0;[w(0x1a9)]=[];[w(0x14b)];[w(0x158)];[w(0x18c)];get['propertiesService'](){const y=w;return this[y(0x1bb)];}static get[w(0x178)](){return css`
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
    `;}constructor(c){const z=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this[z(0x171)]=document['createElement']('div'),this[z(0x171)]['className']='content-wrapper',this[z(0x17b)][z(0x14f)](this['_div']);}[w(0x187)](c){const A=w;if(this[A(0x1bb)]!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this[A(0x171)]),this['_propertyMap'][A(0x194)]();for(const {extension:d}of this[A(0x1a9)])d[A(0x16f)]?.();this[A(0x1a9)]=[];}}async['createElements'](c){const B=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[B(0x1bb)]?.[B(0x199)](c);return this[B(0x174)](c,d);}['_shouldCreateElements'](c){const C=w;if(!this['_propertiesService'])return![];if(this[C(0x188)][C(0x198)]==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode[C(0x191)]||this['_lastClassType']!==c[C(0x182)]['constructor']);}['_rebuildElements'](c,d){const D=w;this[D(0x160)]=c['element'][D(0x1a0)],DomHelper['removeAllChildnodes'](this[D(0x171)]),this[D(0x188)][D(0x194)]();for(const {extension:e}of this['_extensions'])e['dispose']?.();this[D(0x1a9)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this['createPropertyGroups'](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const E=w;let d=document[E(0x177)](E(0x1bc));d['addEventListener']('click',()=>{const F=E;this['expandOrCollapsePropertyGroups'](c),d[F(0x190)][F(0x1bd)](F(0x18e));}),d['innerHTML']=c['name']['replaceAll']('\x0a',E(0x1b8)),d[E(0x165)]=E(0x1c2),this['_div'][E(0x14f)](d);let e=document[E(0x177)](E(0x1bc));e['innerHTML']=c[E(0x19f)]??'',e['className']='group-desc';this['propertyGroupHover']&&(d[E(0x1ab)]=()=>{const G=E;if(this[G(0x14b)](c,'name'))d['setAttribute'](G(0x1c1),'');else d['removeAttribute']('clickable');},d[E(0x144)]=()=>{const H=E;if(this['propertyGroupClick'])this[H(0x158)](c,H(0x153));},e[E(0x1ab)]=()=>{const I=E;if(this['propertyGroupHover'](c,'desc'))e[I(0x17c)](I(0x1c1),'');else e[I(0x196)]('clickable');},e['onclick']=()=>{const J=E;if(this[J(0x158)])this['propertyGroupClick'](c,J(0x18a));});this[E(0x171)][E(0x14f)](e);for(const f of c['properties'])this[E(0x15a)](f,!![]);}[w(0x149)](c){const K=w;for(let d of c['properties']){const e=this['_propertyMap']['get'](d);e[K(0x19a)]['hidden']=!e['rowElement'][K(0x175)];for(const {property:f,extension:g}of this[K(0x1a9)])if(f===d)g['element']['hidden']=e['rowElement'][K(0x175)];}}[w(0x15a)](c,d){const L=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[L(0x14c)]['forSomeServicesTillResult']('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document['createElement']('div');g[L(0x165)]='property-row';if(c['hideLabel'])g[L(0x190)]['add']('hide-label');let h=document['createElement']('div');h[L(0x165)]='property-actions';if(d)h[L(0x178)]['marginLeft']=L(0x15d);h['style'][L(0x17e)]='20px',h[L(0x178)][L(0x1ae)]='20px',h[L(0x178)][L(0x16d)]='flex',h['style']['alignItems']='center';let i=document['createElement']('button');i['type']=L(0x15b),i[L(0x165)]='property-status',i[L(0x1ba)]='⋯',i['setAttribute'](L(0x193),'Actions\x20for\x20'+(c[L(0x1c6)]??c['name'])),i['disabled']=c[L(0x14d)]===!![],i['style'][L(0x17e)]='12px',i[L(0x178)]['height']='12px',i[L(0x178)]['borderRadius']='2px',i[L(0x178)]['border']='1px\x20white\x20solid',i['style'][L(0x167)]='pointer';if(c[L(0x162)]!=PropertyType['complex'])h['appendChild'](i);g['appendChild'](h);c[L(0x14d)]!==!![]&&(i['oncontextmenu']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i['onclick']=j=>{const M=L;j[M(0x1b7)](),this['openContextMenu'](j,c);});if(c[L(0x14e)]==L(0x1b2)){let j=e[L(0x182)];j[L(0x18b)]=!![],j['id']=L(0x1c8)+ ++this['_addCounter'];let k=document[L(0x177)](L(0x19b));f=k;d&&(k[L(0x178)][L(0x1b1)]='10px',k['style']['width']=L(0x19d));k[L(0x1ac)]=c['name'],k[L(0x14e)]=L(0x150),k['id']=L(0x164)+this['_addCounter'],k[L(0x168)]=l=>{const N=L;l[N(0x17f)]=='Enter'&&k[N(0x1ac)]&&(c[N(0x153)]=k['value'],k['disabled']=!![],j[N(0x18b)]=![],j[N(0x1b4)]());};if(c[L(0x1a7)]['getPropertyNameSuggestions']){const l=c['service']['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']=L(0x15c)+this['_addCounter']+'_datalist';for(let n of l){const o=document['createElement'](L(0x151));o['value']=n,m['append'](o);}g['appendChild'](m),k[L(0x17c)]('list',m['id']);}g[L(0x14f)](k);}else{if(c['hideLabel'])f=document[L(0x177)]('span');else{if(!c['renamable']){let p=document[L(0x177)](L(0x1a4));f=p;if(d)p[L(0x178)][L(0x1b1)]=L(0x15d);p[L(0x15e)]=c[L(0x153)],p[L(0x1ba)]=c[L(0x1c6)]??c['name'],p[L(0x159)]=c[L(0x19f)]??(c[L(0x1c6)]??c[L(0x153)])+L(0x1c9)+c[L(0x14e)]+(c['defaultValue']?L(0x185)+c['defaultValue']:'')+',\x20propertytype:\x20'+c[L(0x162)]+')',p['ondragleave']=q=>this[L(0x161)](q,c,p),p[L(0x1a2)]=q=>this[L(0x184)](q,c,p),p['ondrop']=q=>this[L(0x15f)](q,c,p),g['appendChild'](p);}else{let q=document[L(0x177)](L(0x19b));f=q;d&&(q[L(0x178)][L(0x1b1)]='10px',q['style'][L(0x17e)]='calc(100%\x20-\x2010px)');q['id']=L(0x1af)+c[L(0x153)];let r=e['element'];q[L(0x1ac)]=c[L(0x153)],q['onkeyup']=async t=>{const O=L;if(t['key']=='Enter'&&q[O(0x1ac)]){const u=this[O(0x173)][0x0][O(0x1c4)](O(0x1a8)+c['name']+'\x27\x20to\x20\x27'+q['value']+'\x27');c['service'][O(0x1c7)](this[O(0x173)],c,O(0x154)),c['name']=q['value'],await c[O(0x1a7)]['setValue'](this[O(0x173)],c,r['value']),u['commit'](),this[O(0x173)][0x0][O(0x146)][O(0x180)]['extensionManager'][O(0x166)](this[O(0x173)]);}},g['appendChild'](q);}}}if(c['name'])e['element']['id']=c['name'];if(e[L(0x182)]instanceof HTMLElement)e['element']['classList'][L(0x16a)](L(0x1c0));if(c['hideLabel'])e['element']['style'][L(0x19c)]='2\x20/\x204';f[L(0x190)]['add']('property-label'),g[L(0x14f)](e['element']),this['_div'][L(0x14f)](g);for(const t of this['_serviceContainer'][L(0x197)]){const u=t['createExtension'](c);u&&(u[L(0x182)]['setAttribute']('appearance',this['getAttribute'](L(0x1a1))??'classic'),u['element']['style'][L(0x19c)]='1\x20/\x20-1',this['_extensions'][L(0x192)]({'property':c,'extension':u}),this['_div'][L(0x14f)](u[L(0x182)]));}this['_propertyMap']['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x161)](c,d,e){const P=w;c[P(0x1b7)](),e[P(0x190)]['remove'](P(0x18d));}[w(0x184)](c,d,e){const Q=w;c['preventDefault']();const f=c[Q(0x179)][Q(0x147)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][Q(0x189)];if(h){const i=h[Q(0x1b9)](c,d,this['_designItems']);(i??'none')!='none'?(e['classList'][Q(0x16a)](Q(0x18d)),c['dataTransfer'][Q(0x16b)]=i):e[Q(0x190)]['remove'](Q(0x18d));}}const g=c['dataTransfer'][Q(0x147)][Q(0x1a3)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this[Q(0x173)]);(k??Q(0x1ad))!=Q(0x1ad)?(e[Q(0x190)]['add'](Q(0x18d)),c['dataTransfer'][Q(0x16b)]=k):e['classList'][Q(0x176)]('dragOverProperty');}}}['_onDrop'](c,d,e){const R=w;c['preventDefault'](),e[R(0x190)][R(0x176)]('dragOverProperty');const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[R(0x152)](f),i=this['_serviceContainer']['bindableObjectDragDropService'];i&&i[R(0x195)](c,d,h,this[R(0x173)]);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer'][R(0x17a)];k&&k[R(0x195)](c,d,j,this[R(0x173)]);}}['openContextMenu'](c,d){const S=w;let e;if(this[S(0x18c)])e=this[S(0x18c)](this['_designItems'],d);if(!e)e=d['service'][S(0x17d)](this[S(0x173)],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu[S(0x163)](e,c);}[w(0x14a)](c){const T=w;this[T(0x173)]=c;for(const {extension:d}of this[T(0x1a9)])d[T(0x1bf)](c);for(let e of this[T(0x188)]){e[0x1][T(0x155)]['designItemsChanged'](c);}}[w(0x172)](c){const U=w;for(const {extension:d}of this['_extensions'])d[U(0x1bf)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static[w(0x169)](c,d,e,f,g){const V=w;if(e&&e[V(0x1c3)]){let h=f['isSet'](e,d);c[V(0x181)][V(0x1b5)]=h;let i=f['getValue'](e,d);c[V(0x159)]=d[V(0x153)]+':\x20'+h;if(h==ValueType['none'])c[V(0x178)][V(0x186)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType[V(0x154)])c[V(0x178)]['background']=V(0x19e);else{if(h==ValueType[V(0x1aa)])c['style']['background']=V(0x18f);else{if(h==ValueType[V(0x157)])c['style']['background']=V(0x183);else h==ValueType['fromStylesheet']&&(i=f[V(0x1b3)](e,d),c[V(0x178)][V(0x186)]='yellow');}}}g?.[V(0x1c5)](h,i);}else c['style']['background']='';}}function a(){const W=['readonly','type','appendChild','text','option','parse','name','all','editor','24518496yOkmQJ','bound','propertyGroupClick','title','createPropertyEditors','button','addNew_','10px','htmlFor','_onDrop','_lastClassType','_onDragLeave','propertyType','show','addNew_label_','className','refreshAllExtensions','cursor','onkeyup','refreshIsSetElementAndEditorForDesignItems','add','dropEffect','classic','display','define','dispose','618DbBAmF','_div','refreshForDesignItems','_designItems','_rebuildElements','hidden','remove','createElement','style','dataTransfer','propertyGridDragDropService','shadowRoot','setAttribute','getContextMenu','width','key','designerCanvas','dataset','element','orange','_onDragOver',',\x20default:\x20','background','setPropertiesService','_propertyMap','bindableObjectDragDropService','desc','disabled','propertyContextMenuProvider','dragOverProperty','expanded','gray','classList','fullOnClassChange','push','aria-label','clear','dropOnProperty','removeAttribute','propertyGridExtensions','size','getProperties','rowElement','input','gridColumn','calc(100%\x20-\x2010px)','white','description','constructor','appearance','ondragover','indexOf','label','752750NQwkDI','2484CYPogY','service','rename\x20property\x20name\x20from\x20\x27','_extensions','some','onmouseenter','value','none','height','label_','8002036XwKsCG','marginLeft','addNew','getUnsetValue','focus','valueType','169180siSPKs','preventDefault','<br>','dragOverOnProperty','textContent','_propertiesService','span','toggle','attributeChangedCallback','refresh','editor-control','clickable','group-header','length','openGroup','refreshValueWithoutNotification','displayName','clearValue','addNew_input_','\x20(type:\x20','onclick','3136260eGtmPG','instanceServiceContainer','types','617908wMigdT','expandOrCollapsePropertyGroups','designItemsChanged','propertyGroupHover','_serviceContainer'];a=function(){return W;};return a();}customElements[w(0x16e)]('node-projects-property-grid-property-list',PropertyGridPropertyList);