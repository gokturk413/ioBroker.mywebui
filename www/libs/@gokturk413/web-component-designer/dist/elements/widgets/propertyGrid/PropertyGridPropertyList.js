const x=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x153))/0x1+-parseInt(v(0x185))/0x2*(-parseInt(v(0x197))/0x3)+-parseInt(v(0x193))/0x4+parseInt(v(0x1b8))/0x5*(-parseInt(v(0x18e))/0x6)+-parseInt(v(0x1bc))/0x7+parseInt(v(0x19a))/0x8+parseInt(v(0x16d))/0x9*(parseInt(v(0x13a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4c488));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const W=['key','onkeyup','5hClTFA','display','background','Enter','175350hkGGCM','appearance','rowElement','refreshValueWithoutNotification','4072990oAUBTH','dropEffect','onclick','service','7px','gray','gridColumn','input','group-header','clearValue','valueType','hidden','_lastClassType','instanceServiceContainer','bindableObjectDragDropService','marginLeft','clear','extensionManager','property-status','_addCounter','constructor','propertyGroupHover','shadowRoot','orange','dragOverProperty','260745avSlwd','refresh','_propertyMap','yellow','ondrop','none','getValue','createElement','properties','defaultValue','span','propertiesService','removeAllChildnodes','addNew_label_','getData','parse','createPropertyEditors','_extensions','set','className','getPropertyNameSuggestions','hideLabel','innerHTML','htmlFor','remove','classic','18HgTdyd','dragOverOnProperty','dataTransfer','height','Actions\x20for\x20','width','renamable','click','append','getUnsetValue','title','node-projects-property-grid-property-list','disabled','add','getAttribute','content-wrapper','createExtension','_designItems','label','fullOnClassChange','define','cursor','clickable','element','144bwRrsE','designItemsChanged','_serviceContainer','onmouseenter','displayName','propertyGridDragDropService','div','appendChild','length','3170040hAykWO','some','dropOnProperty','refreshForDesignItems','_propertiesService','2042020KHYkvt','type','10px','alignItems','1023cUCLHC','oncontextmenu','_div','2211648zttFaH','preventDefault','center','expandOrCollapsePropertyGroups','dispose','editor-control','openContextMenu','propertyContextMenuProvider','flex','classList','calc(100%\x20-\x2010px)','replaceAll','value','addEventListener','forSomeServicesTillResult','addNew_','description','refreshIsSetElementAndEditorForDesignItems','desc','name','setAttribute','style','propertyGroupClick',',\x20propertytype:\x20','_onDragLeave','property-actions','property-label','designerCanvas'];a=function(){return W;};return a();}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';function b(c,d){c=c-0x137;const e=a();let f=e[c];return f;}import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];['attributeChangedCallback'](){const w=b;for(const {extension:c}of this[w(0x164)])c['element'][w(0x1ae)](w(0x137),this[w(0x17b)](w(0x137))??w(0x16c));}[x(0x199)];['_propertyMap']=new Map();[x(0x187)];[x(0x192)];[x(0x17e)];['_lastClassType'];['_addCounter']=0x0;[x(0x164)]=[];['propertyGroupHover'];['propertyGroupClick'];[x(0x1a1)];get[x(0x15e)](){const y=x;return this[y(0x192)];}static get[x(0x1af)](){return css`
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
    `;}constructor(c){const z=x;super(),this['_restoreCachedInititalValues'](),this[z(0x187)]=c,this['_div']=document[z(0x15a)]('div'),this[z(0x199)]['className']=z(0x17c),this[z(0x150)][z(0x18c)](this[z(0x199)]);}['setPropertiesService'](c){const A=x;if(this[A(0x192)]!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this[A(0x164)])d[A(0x19e)]?.();this['_extensions']=[];}}async['createElements'](c){const B=x;if(!this['_shouldCreateElements'](c))return!![];const d=await this[B(0x192)]?.['getProperties'](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const C=x;if(!this['_propertiesService'])return![];if(this['_propertyMap']['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode[C(0x158)]&&(d!==RefreshMode[C(0x180)]||this[C(0x146)]!==c['element'][C(0x14e)]);}['_rebuildElements'](c,d){const D=x;this['_lastClassType']=c['element']['constructor'],DomHelper[D(0x15f)](this[D(0x199)]),this['_propertyMap'][D(0x14a)]();for(const {extension:e}of this[D(0x164)])e['dispose']?.();this[D(0x164)]=[];if(d?.[D(0x18d)]){for(let f of d){if(D(0x15b)in f)this['createPropertyGroups'](f);else this[D(0x163)](f);}return!![];}return![];}['createPropertyGroups'](c){const E=x;let d=document[E(0x15a)](E(0x15d));d[E(0x1a7)](E(0x174),()=>{const F=E;this[F(0x19d)](c),d['classList']['toggle']('expanded');}),d['innerHTML']=c[E(0x1ad)][E(0x1a5)]('\x0a','<br>'),d[E(0x166)]=E(0x142),this[E(0x199)][E(0x18c)](d);let e=document[E(0x15a)]('span');e[E(0x169)]=c[E(0x1aa)]??'',e[E(0x166)]='group-desc';this[E(0x14f)]&&(d[E(0x188)]=()=>{const G=E;if(this[G(0x14f)](c,'name'))d['setAttribute'](G(0x183),'');else d['removeAttribute'](G(0x183));},d['onclick']=()=>{const H=E;if(this[H(0x1b0)])this['propertyGroupClick'](c,'name');},e[E(0x188)]=()=>{const I=E;if(this['propertyGroupHover'](c,I(0x1ac)))e[I(0x1ae)](I(0x183),'');else e['removeAttribute'](I(0x183));},e[E(0x13c)]=()=>{const J=E;if(this['propertyGroupClick'])this[J(0x1b0)](c,J(0x1ac));});this[E(0x199)]['appendChild'](e);for(const f of c['properties'])this[E(0x163)](f,!![]);}[x(0x19d)](c){const K=x;for(let d of c[K(0x15b)]){const e=this[K(0x155)]['get'](d);e[K(0x138)]['hidden']=!e[K(0x138)][K(0x145)];for(const {property:f,extension:g}of this[K(0x164)])if(f===d)g['element'][K(0x145)]=e[K(0x138)][K(0x145)];}}[x(0x163)](c,d){const L=x;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[L(0x187)][L(0x1a8)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document['createElement'](L(0x18b));g[L(0x166)]='property-row';if(c[L(0x168)])g['classList'][L(0x17a)]('hide-label');let h=document['createElement']('div');h['className']=L(0x1b3);if(d)h[L(0x1af)][L(0x149)]=L(0x195);h[L(0x1af)][L(0x172)]='20px',h['style'][L(0x170)]='20px',h['style'][L(0x1b9)]=L(0x1a2),h[L(0x1af)][L(0x196)]=L(0x19c);let i=document[L(0x15a)]('button');i[L(0x194)]='button',i['className']=L(0x14c),i['textContent']='⋯',i[L(0x1ae)]('aria-label',L(0x171)+(c['displayName']??c[L(0x1ad)])),i[L(0x179)]=c['readonly']===!![],i['style'][L(0x172)]='7px',i[L(0x1af)][L(0x170)]=L(0x13e),i['style']['border']='1px\x20white\x20solid',i['style'][L(0x182)]='pointer';if(c['propertyType']!=PropertyType['complex'])h['appendChild'](i);g[L(0x18c)](h);c['readonly']!==!![]&&(i[L(0x198)]=j=>{const M=L;j[M(0x19b)](),this[M(0x1a0)](j,c);},i[L(0x13c)]=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c[L(0x194)]=='addNew'){let j=e[L(0x184)];j[L(0x179)]=!![],j['id']='addNew_input_'+ ++this[L(0x14d)];let k=document['createElement']('input');f=k;d&&(k[L(0x1af)]['marginLeft']=L(0x195),k['style']['width']=L(0x1a4));k['value']=c[L(0x1ad)],k['type']='text',k['id']=L(0x160)+this[L(0x14d)],k[L(0x1b7)]=l=>{const N=L;l[N(0x1b6)]==N(0x1bb)&&k[N(0x1a6)]&&(c[N(0x1ad)]=k['value'],k['disabled']=!![],j['disabled']=![],j['focus']());};if(c['service'][L(0x167)]){const l=c['service'][L(0x167)](null),m=document['createElement']('datalist');m['id']=L(0x1a9)+this['_addCounter']+'_datalist';for(let n of l){const o=document['createElement']('option');o[L(0x1a6)]=n,m[L(0x175)](o);}g['appendChild'](m),k[L(0x1ae)]('list',m['id']);}g['appendChild'](k);}else{if(c[L(0x168)])f=document[L(0x15a)](L(0x15d));else{if(!c[L(0x173)]){let p=document['createElement'](L(0x17f));f=p;if(d)p['style']['marginLeft']='10px';p[L(0x16a)]=c['name'],p['textContent']=c[L(0x189)]??c[L(0x1ad)],p[L(0x177)]=c[L(0x1aa)]??(c['displayName']??c[L(0x1ad)])+'\x20(type:\x20'+c['type']+(c[L(0x15c)]?',\x20default:\x20'+c[L(0x15c)]:'')+L(0x1b1)+c['propertyType']+')',p['ondragleave']=q=>this[L(0x1b2)](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[L(0x157)]=q=>this['_onDrop'](q,c,p),g[L(0x18c)](p);}else{let q=document['createElement'](L(0x141));f=q;d&&(q['style']['marginLeft']=L(0x195),q[L(0x1af)]['width']=L(0x1a4));q['id']='label_'+c[L(0x1ad)];let r=e['element'];q['value']=c['name'],q['onkeyup']=async t=>{const O=L;if(t['key']=='Enter'&&q['value']){const u=this['_designItems'][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c[O(0x1ad)]+'\x27\x20to\x20\x27'+q['value']+'\x27');c['service'][O(0x143)](this[O(0x17e)],c,'all'),c['name']=q[O(0x1a6)],await c[O(0x13d)]['setValue'](this['_designItems'],c,r[O(0x1a6)]),u['commit'](),this[O(0x17e)][0x0][O(0x147)][O(0x1b5)][O(0x14b)]['refreshAllExtensions'](this['_designItems']);}},g[L(0x18c)](q);}}}if(c['name'])e[L(0x184)]['id']=c['name'];if(e[L(0x184)]instanceof HTMLElement)e['element'][L(0x1a3)]['add'](L(0x19f));if(c['hideLabel'])e[L(0x184)][L(0x1af)][L(0x140)]='2\x20/\x204';f[L(0x1a3)][L(0x17a)](L(0x1b4)),g['appendChild'](e[L(0x184)]),this[L(0x199)]['appendChild'](g);for(const t of this[L(0x187)]['propertyGridExtensions']){const u=t[L(0x17d)](c);u&&(u['element']['setAttribute'](L(0x137),this['getAttribute'](L(0x137))??'classic'),u[L(0x184)]['style'][L(0x140)]='1\x20/\x20-1',this['_extensions']['push']({'property':c,'extension':u}),this[L(0x199)][L(0x18c)](u['element']));}this[L(0x155)][L(0x165)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const P=x;c[P(0x19b)](),e['classList'][P(0x16b)]('dragOverProperty');}['_onDragOver'](c,d,e){const Q=x;c['preventDefault']();const f=c[Q(0x16f)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[Q(0x187)][Q(0x148)];if(h){const i=h[Q(0x16e)](c,d,this[Q(0x17e)]);(i??'none')!='none'?(e['classList'][Q(0x17a)](Q(0x152)),c[Q(0x16f)][Q(0x13b)]=i):e['classList'][Q(0x16b)]('dragOverProperty');}}const g=c['dataTransfer']['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[Q(0x187)]['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??Q(0x158))!=Q(0x158)?(e['classList'][Q(0x17a)](Q(0x152)),c['dataTransfer'][Q(0x13b)]=k):e['classList']['remove']('dragOverProperty');}}}['_onDrop'](c,d,e){const R=x;c['preventDefault'](),e[R(0x1a3)][R(0x16b)](R(0x152));const f=c['dataTransfer'][R(0x161)](dragDropFormatNameBindingObject);if(f){const h=JSON[R(0x162)](f),i=this['_serviceContainer']['bindableObjectDragDropService'];i&&i['dropOnProperty'](c,d,h,this[R(0x17e)]);}const g=c['dataTransfer'][R(0x161)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[R(0x162)](g),k=this['_serviceContainer'][R(0x18a)];k&&k[R(0x190)](c,d,j,this[R(0x17e)]);}}['openContextMenu'](c,d){const S=x;let e;if(this[S(0x1a1)])e=this[S(0x1a1)](this[S(0x17e)],d);if(!e)e=d['service']['getContextMenu'](this['_designItems'],d);for(const {property:f,extension:g}of this[S(0x164)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}[x(0x186)](c){const T=x;this['_designItems']=c;for(const {extension:d}of this['_extensions'])d[T(0x154)](c);for(let e of this[T(0x155)]){e[0x1]['editor'][T(0x186)](c);}}[x(0x191)](c){const U=x;for(const {extension:d}of this['_extensions'])d[U(0x154)](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[U(0x1ab)](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const V=x;if(e&&e[V(0x18d)]){let h=f['isSet'](e,d);c['dataset'][V(0x144)]=h;let i=f[V(0x159)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType['none'])c['style']['background']='',i=f[V(0x176)](e,d);else{if(h==ValueType['all'])c['style'][V(0x1ba)]='white';else{if(h==ValueType[V(0x18f)])c['style'][V(0x1ba)]=V(0x13f);else{if(h==ValueType['bound'])c[V(0x1af)][V(0x1ba)]=V(0x151);else h==ValueType['fromStylesheet']&&(i=f['getUnsetValue'](e,d),c['style'][V(0x1ba)]=V(0x156));}}}g?.[V(0x139)](h,i);}else c[V(0x1af)][V(0x1ba)]='';}}customElements[x(0x181)](x(0x178),PropertyGridPropertyList);