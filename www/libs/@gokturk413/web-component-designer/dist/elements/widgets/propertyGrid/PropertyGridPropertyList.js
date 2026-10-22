const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x14f))/0x1+-parseInt(v(0x138))/0x2*(parseInt(v(0x161))/0x3)+-parseInt(v(0x102))/0x4*(-parseInt(v(0x136))/0x5)+-parseInt(v(0x119))/0x6*(-parseInt(v(0x13e))/0x7)+-parseInt(v(0x112))/0x8+-parseInt(v(0x110))/0x9*(parseInt(v(0x158))/0xa)+parseInt(v(0x144))/0xb*(parseInt(v(0x109))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x73c2c));function b(c,d){c=c-0xea;const e=a();let f=e[c];return f;}function a(){const U=['\x27\x20to\x20\x27','hideLabel','getData','expanded','title','renamable','orange','Actions\x20for\x20','background','property-row','openContextMenu','classList','setPropertiesService','value','length','6532VaVPJX','click','hidden','appearance','properties','getValue','type','12iRgfOY','hide-label','instanceServiceContainer','dataTransfer','style','yellow','clear','72zBFSmK','all','2589784kkEPdl','desc','readonly','refreshIsSetElementAndEditorForDesignItems','createExtension','forSomeServicesTillResult','set','42XRlLOD','bound','addNew_label_','pointer','_propertiesService','appendChild','textContent','2\x20/\x204','_restoreCachedInititalValues','setAttribute','getRefreshMode','none','input','ondrop','preventDefault','datalist','_div','some','border','clearValue','property-actions','parse','displayName','node-projects-property-grid-property-list','flex','add','marginLeft','createEditor','designItemsChanged','680NstqCR','addNew_','101828wRMxVg','rowElement','editor','2px','cursor','_designItems','604597YDsuNM','description','20px','_onDrop','10px','setValue','14513092LKoksH','className','button','constructor','element','disabled','show','_serviceContainer','types','onkeyup','12px','886622ttIpNV','htmlFor','rename\x20property\x20name\x20from\x20\x27','white','removeAttribute','gray','propertyContextMenuProvider','isSetElement','_rebuildElements','449660DHcAmt','isSet','indexOf','clickable','refresh','propertyGroupHover','editor-control','createPropertyGroups','_shouldCreateElements','6CnuHCS','property-label','height','removeAllChildnodes','dragOverOnProperty','center','_onDragOver','getPropertyNameSuggestions','remove','1\x20/\x20-1','replaceAll','ondragleave','_lastClassType','calc(100%\x20-\x2010px)','label_','dropOnProperty','createElement','dragOverProperty','_propertyMap','propertyGridExtensions','propertyGroupClick','width','getContextMenu','dataset','propertyType','_extensions','service','expandOrCollapsePropertyGroups','div','name','dispose','borderRadius','span','_addCounter'];a=function(){return U;};return a();}import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[w(0x105)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this['_extensions'])c['element'][x(0x122)]('appearance',this['getAttribute'](x(0x105))??'classic');}['_div'];[w(0x173)]=new Map();[w(0x14b)];[w(0x11d)];[w(0x13d)];[w(0x16d)];['_addCounter']=0x0;['_extensions']=[];[w(0x15d)];[w(0x175)];[w(0x155)];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this[y(0x121)](),this[y(0x14b)]=c,this[y(0x129)]=document[y(0x171)](y(0xed)),this['_div']['className']='content-wrapper',this['shadowRoot']['appendChild'](this['_div']);}[w(0xff)](c){const z=w;if(this[z(0x11d)]!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap'][z(0x10f)]();for(const {extension:d}of this[z(0xea)])d['dispose']?.();this[z(0xea)]=[];}}async['createElements'](c){if(!this['_shouldCreateElements'](c))return!![];const d=await this['_propertiesService']?.['getProperties'](c);return this['_rebuildElements'](c,d);}[w(0x160)](c){const A=w;if(!this['_propertiesService'])return![];if(this['_propertyMap']['size']==0x0)return!![];const d=this['_propertiesService'][A(0x123)](c);return d!==RefreshMode[A(0x124)]&&(d!==RefreshMode['fullOnClassChange']||this['_lastClassType']!==c[A(0x148)][A(0x147)]);}[w(0x157)](c,d){const B=w;this['_lastClassType']=c[B(0x148)]['constructor'],DomHelper[B(0x164)](this[B(0x129)]),this['_propertyMap'][B(0x10f)]();for(const {extension:e}of this[B(0xea)])e[B(0xef)]?.();this['_extensions']=[];if(d?.[B(0x101)]){for(let f of d){if(B(0x106)in f)this[B(0x15f)](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const C=w;let d=document['createElement'](C(0xf1));d['addEventListener'](C(0x103),()=>{const D=C;this[D(0xec)](c),d[D(0xfe)]['toggle'](D(0xf6));}),d['innerHTML']=c['name'][C(0x16b)]('\x0a','<br>'),d['className']='group-header',this['_div'][C(0x11e)](d);let e=document[C(0x171)]('span');e['innerHTML']=c[C(0x13f)]??'',e['className']='group-desc';this[C(0x15d)]&&(d['onmouseenter']=()=>{const E=C;if(this['propertyGroupHover'](c,'name'))d[E(0x122)]('clickable','');else d[E(0x153)](E(0x15b));},d['onclick']=()=>{const F=C;if(this['propertyGroupClick'])this[F(0x175)](c,F(0xee));},e['onmouseenter']=()=>{const G=C;if(this['propertyGroupHover'](c,G(0x113)))e[G(0x122)]('clickable','');else e[G(0x153)]('clickable');},e['onclick']=()=>{const H=C;if(this[H(0x175)])this['propertyGroupClick'](c,'desc');});this[C(0x129)][C(0x11e)](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}[w(0xec)](c){const I=w;for(let d of c[I(0x106)]){const e=this['_propertyMap']['get'](d);e['rowElement'][I(0x104)]=!e['rowElement'][I(0x104)];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g['element']['hidden']=e[I(0x139)]['hidden'];}}['createPropertyEditors'](c,d){const J=w;let e,f;if(c['createEditor'])e=c[J(0x134)](c);else e=this[J(0x14b)][J(0x117)]('propertyEditorTypesService',g=>g['getEditorForProperty'](c));if(e){const g=document['createElement'](J(0xed));g[J(0x145)]=J(0xfc);if(c['hideLabel'])g['classList']['add'](J(0x10a));let h=document[J(0x171)](J(0xed));h['className']=J(0x12d);if(d)h[J(0x10d)]['marginLeft']=J(0x142);h['style']['width']='20px',h['style'][J(0x163)]=J(0x140),h['style']['display']=J(0x131),h['style']['alignItems']=J(0x166);let i=document[J(0x171)]('button');i['type']=J(0x146),i['className']='property-status',i['textContent']='⋯',i['setAttribute']('aria-label',J(0xfa)+(c[J(0x12f)]??c['name'])),i[J(0x149)]=c[J(0x114)]===!![],i[J(0x10d)][J(0x176)]='12px',i[J(0x10d)]['height']=J(0x14e),i['style'][J(0xf0)]=J(0x13b),i['style'][J(0x12b)]='1px\x20white\x20solid',i['style'][J(0x13c)]=J(0x11c);if(c[J(0x179)]!=PropertyType['complex'])h['appendChild'](i);g['appendChild'](h);c[J(0x114)]!==!![]&&(i['oncontextmenu']=j=>{const K=J;j['preventDefault'](),this[K(0xfd)](j,c);},i['onclick']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c['type']=='addNew'){let j=e['element'];j[J(0x149)]=!![],j['id']='addNew_input_'+ ++this[J(0xf2)];let k=document['createElement'](J(0x125));f=k;d&&(k['style'][J(0x133)]='10px',k['style']['width']=J(0x16e));k['value']=c[J(0xee)],k['type']='text',k['id']=J(0x11b)+this['_addCounter'],k[J(0x14d)]=l=>{const L=J;l['key']=='Enter'&&k['value']&&(c['name']=k[L(0x100)],k[L(0x149)]=!![],j['disabled']=![],j['focus']());};if(c['service'][J(0x168)]){const l=c[J(0xeb)]['getPropertyNameSuggestions'](null),m=document[J(0x171)](J(0x128));m['id']=J(0x137)+this[J(0xf2)]+'_datalist';for(let n of l){const o=document[J(0x171)]('option');o[J(0x100)]=n,m['append'](o);}g[J(0x11e)](m),k[J(0x122)]('list',m['id']);}g['appendChild'](k);}else{if(c[J(0xf4)])f=document[J(0x171)]('span');else{if(!c[J(0xf8)]){let p=document[J(0x171)]('label');f=p;if(d)p['style']['marginLeft']=J(0x142);p[J(0x150)]=c[J(0xee)],p[J(0x11f)]=c['displayName']??c['name'],p[J(0xf7)]=c[J(0x13f)]??(c[J(0x12f)]??c['name'])+'\x20(type:\x20'+c[J(0x108)]+(c['defaultValue']?',\x20default:\x20'+c['defaultValue']:'')+',\x20propertytype:\x20'+c[J(0x179)]+')',p[J(0x16c)]=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[J(0x126)]=q=>this['_onDrop'](q,c,p),g['appendChild'](p);}else{let q=document[J(0x171)](J(0x125));f=q;d&&(q[J(0x10d)]['marginLeft']='10px',q['style']['width']='calc(100%\x20-\x2010px)');q['id']=J(0x16f)+c['name'];let r=e['element'];q[J(0x100)]=c[J(0xee)],q['onkeyup']=async t=>{const M=J;if(t['key']=='Enter'&&q[M(0x100)]){const u=this[M(0x13d)][0x0]['openGroup'](M(0x151)+c[M(0xee)]+M(0xf3)+q[M(0x100)]+'\x27');c[M(0xeb)][M(0x12c)](this[M(0x13d)],c,'all'),c[M(0xee)]=q['value'],await c[M(0xeb)][M(0x143)](this[M(0x13d)],c,r[M(0x100)]),u['commit'](),this['_designItems'][0x0][M(0x10b)]['designerCanvas']['extensionManager']['refreshAllExtensions'](this['_designItems']);}},g['appendChild'](q);}}}if(c[J(0xee)])e[J(0x148)]['id']=c['name'];if(e['element']instanceof HTMLElement)e[J(0x148)]['classList'][J(0x132)](J(0x15e));if(c[J(0xf4)])e[J(0x148)][J(0x10d)]['gridColumn']=J(0x120);f['classList'][J(0x132)](J(0x162)),g['appendChild'](e[J(0x148)]),this['_div']['appendChild'](g);for(const t of this[J(0x14b)][J(0x174)]){const u=t[J(0x116)](c);u&&(u[J(0x148)]['setAttribute'](J(0x105),this['getAttribute'](J(0x105))??'classic'),u['element'][J(0x10d)]['gridColumn']=J(0x16a),this['_extensions']['push']({'property':c,'extension':u}),this[J(0x129)][J(0x11e)](u[J(0x148)]));}this[J(0x173)][J(0x118)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const N=w;c[N(0x127)](),e[N(0xfe)]['remove'](N(0x172));}[w(0x167)](c,d,e){const O=w;c[O(0x127)]();const f=c['dataTransfer'][O(0x14c)][O(0x15a)](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[O(0x14b)]['bindableObjectDragDropService'];if(h){const i=h[O(0x165)](c,d,this[O(0x13d)]);(i??'none')!='none'?(e[O(0xfe)]['add']('dragOverProperty'),c[O(0x10c)]['dropEffect']=i):e['classList'][O(0x169)](O(0x172));}}const g=c['dataTransfer'][O(0x14c)][O(0x15a)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??O(0x124))!='none'?(e[O(0xfe)][O(0x132)](O(0x172)),c[O(0x10c)]['dropEffect']=k):e[O(0xfe)]['remove'](O(0x172));}}}[w(0x141)](c,d,e){const P=w;c['preventDefault'](),e['classList'][P(0x169)]('dragOverProperty');const f=c[P(0x10c)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[P(0x12e)](f),i=this[P(0x14b)]['bindableObjectDragDropService'];i&&i[P(0x170)](c,d,h,this[P(0x13d)]);}const g=c['dataTransfer'][P(0xf5)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[P(0x12e)](g),k=this[P(0x14b)]['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}[w(0xfd)](c,d){const Q=w;let e;if(this['propertyContextMenuProvider'])e=this[Q(0x155)](this[Q(0x13d)],d);if(!e)e=d['service'][Q(0x177)](this['_designItems'],d);for(const {property:f,extension:g}of this[Q(0xea)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[Q(0x13d)])??[]];ContextMenu[Q(0x14a)](e,c);}['designItemsChanged'](c){const R=w;this['_designItems']=c;for(const {extension:d}of this['_extensions'])d[R(0x15c)](c);for(let e of this['_propertyMap']){e[0x1][R(0x13a)][R(0x135)](c);}}['refreshForDesignItems'](c){const S=w;for(const {extension:d}of this['_extensions'])d[S(0x15c)](c);for(let e of this[S(0x173)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][S(0x156)],e[0x0],c,this[S(0x11d)],e[0x1][S(0x13a)]);}}static[w(0x115)](c,d,e,f,g){const T=w;if(e&&e[T(0x101)]){let h=f[T(0x159)](e,d);c[T(0x178)]['valueType']=h;let i=f[T(0x107)](e,d);c[T(0xf7)]=d[T(0xee)]+':\x20'+h;if(h==ValueType['none'])c['style'][T(0xfb)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType[T(0x111)])c[T(0x10d)]['background']=T(0x152);else{if(h==ValueType[T(0x12a)])c['style']['background']=T(0x154);else{if(h==ValueType[T(0x11a)])c['style']['background']=T(0xf9);else h==ValueType['fromStylesheet']&&(i=f['getUnsetValue'](e,d),c[T(0x10d)]['background']=T(0x10e));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements['define'](w(0x130),PropertyGridPropertyList);