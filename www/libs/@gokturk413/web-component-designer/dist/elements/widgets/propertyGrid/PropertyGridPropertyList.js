function a(){const V=['_extensions','forSomeServicesTillResult','_datalist','ondragleave','10855190okcIfK','removeAllChildnodes','removeAttribute','refreshForDesignItems','dispose','indexOf','length','\x27\x20to\x20\x27','label_','getEditorForProperty','display','textContent','setPropertiesService','observedAttributes','20px','name','hidden','9198nwVUJc','marginLeft','properties','editor','valueType','ondragover','_onDrop','propertyGroupHover','designItemsChanged','show','constructor','flex','yellow','refreshAllExtensions','types',',\x20propertytype:\x20','12px','dragOverProperty','element','remove','1751520fSrMvk','_addCounter','bindableObjectDragDropService','height','attributeChangedCallback','designerCanvas','classList','appearance','getContextMenuItems','bound','desc','disabled','561NCZDcv','border','26152BrPSNU','1982510PzRACS','value','option','\x20(type:\x20','getValue','getPropertyNameSuggestions','openContextMenu','_restoreCachedInititalValues','Enter','createElements','propertyContextMenuProvider','displayName','fromStylesheet','expanded','fullOnClassChange','_rebuildElements','replaceAll','input','dragOverOnProperty','getData','toggle','propertiesService','readonly','isSet','none','description','propertyType','onmouseenter','div','expandOrCollapsePropertyGroups','appendChild','createElement','append','text','rowElement','node-projects-property-grid-property-list','<br>','add','_designItems','refresh','innerHTML','2px','10px','getAttribute','addEventListener','onclick','2\x20/\x204','type','button','5926365ecWIIL','get','setAttribute','getContextMenu','refreshIsSetElementAndEditorForDesignItems','width','hideLabel',',\x20default:\x20','property-label','_shouldCreateElements','alignItems','_propertyMap','dataTransfer','createPropertyGroups','1px\x20white\x20solid','preventDefault','aria-label','propertyGroupClick','calc(100%\x20-\x2010px)','service','cursor','span','addNew_label_','4YIexBY','_propertiesService','white','dataset','478502YEgmET','addNew_input_','property-status','hide-label','shadowRoot','background','createExtension','title','_div','_serviceContainer','group-header','center','style','ondrop','_lastClassType','defaultValue','clickable','className','1926eGYvEe','1\x20/\x20-1','dropEffect','onkeyup'];a=function(){return V;};return a();}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x158))/0x1+parseInt(v(0x183))/0x2*(-parseInt(v(0x1a3))/0x3)+-parseInt(v(0x154))/0x4*(parseInt(v(0x1a6))/0x5)+-parseInt(v(0x16a))/0x6*(-parseInt(v(0x1a5))/0x7)+-parseInt(v(0x197))/0x8+-parseInt(v(0x13d))/0x9+parseInt(v(0x172))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99a59));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';function b(c,d){c=c-0x110;const e=a();let f=e[c];return f;}export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x17f)]=[w(0x19e)];[w(0x19b)](){const x=w;for(const {extension:c}of this[x(0x16e)])c[x(0x195)]['setAttribute']('appearance',this[x(0x137)](x(0x19e))??'classic');}['_div'];[w(0x148)]=new Map();[w(0x161)];['_propertiesService'];['_designItems'];[w(0x166)];[w(0x198)]=0x0;['_extensions']=[];['propertyGroupHover'];[w(0x14e)];[w(0x116)];get[w(0x121)](){return this['_propertiesService'];}static get[w(0x164)](){return css`
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
    `;}constructor(c){const y=w;super(),this[y(0x113)](),this['_serviceContainer']=c,this[y(0x160)]=document['createElement']('div'),this[y(0x160)][y(0x169)]='content-wrapper',this[y(0x15c)]['appendChild'](this[y(0x160)]);}[w(0x17e)](c){const z=w;if(this[z(0x155)]!=c){this[z(0x155)]=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d[z(0x176)]?.();this['_extensions']=[];}}async[w(0x115)](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x155)]?.['getProperties'](c);return this[A(0x11b)](c,d);}[w(0x146)](c){const B=w;if(!this[B(0x155)])return![];if(this[B(0x148)]['size']==0x0)return!![];const d=this[B(0x155)]['getRefreshMode'](c);return d!==RefreshMode[B(0x124)]&&(d!==RefreshMode[B(0x11a)]||this['_lastClassType']!==c['element']['constructor']);}[w(0x11b)](c,d){const C=w;this[C(0x166)]=c['element'][C(0x18d)],DomHelper[C(0x173)](this['_div']),this['_propertyMap']['clear']();for(const {extension:e}of this['_extensions'])e[C(0x176)]?.();this['_extensions']=[];if(d?.[C(0x178)]){for(let f of d){if('properties'in f)this[C(0x14a)](f);else this['createPropertyEditors'](f);}return!![];}return![];}[w(0x14a)](c){const D=w;let d=document[D(0x12b)](D(0x152));d[D(0x138)]('click',()=>{const E=D;this[E(0x129)](c),d['classList'][E(0x120)](E(0x119));}),d['innerHTML']=c['name'][D(0x11c)]('\x0a',D(0x130)),d['className']=D(0x162),this['_div']['appendChild'](d);let e=document[D(0x12b)](D(0x152));e[D(0x134)]=c['description']??'',e[D(0x169)]='group-desc';this['propertyGroupHover']&&(d[D(0x127)]=()=>{const F=D;if(this[F(0x18a)](c,F(0x181)))d[F(0x13f)]('clickable','');else d['removeAttribute'](F(0x168));},d['onclick']=()=>{if(this['propertyGroupClick'])this['propertyGroupClick'](c,'name');},e[D(0x127)]=()=>{const G=D;if(this[G(0x18a)](c,G(0x1a1)))e['setAttribute'](G(0x168),'');else e[G(0x174)]('clickable');},e[D(0x139)]=()=>{const H=D;if(this['propertyGroupClick'])this[H(0x14e)](c,H(0x1a1));});this['_div'][D(0x12a)](e);for(const f of c[D(0x185)])this['createPropertyEditors'](f,!![]);}[w(0x129)](c){const I=w;for(let d of c['properties']){const e=this[I(0x148)][I(0x13e)](d);e['rowElement'][I(0x182)]=!e['rowElement'][I(0x182)];for(const {property:f,extension:g}of this[I(0x16e)])if(f===d)g['element']['hidden']=e[I(0x12e)][I(0x182)];}}['createPropertyEditors'](c,d){const J=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[J(0x161)][J(0x16f)]('propertyEditorTypesService',g=>g[J(0x17b)](c));if(e){const g=document['createElement'](J(0x128));g['className']='property-row';if(c['hideLabel'])g[J(0x19d)]['add'](J(0x15b));let h=document[J(0x12b)]('div');h['className']='property-actions';if(d)h['style']['marginLeft']='10px';h[J(0x164)]['width']=J(0x180),h['style'][J(0x19a)]=J(0x180),h['style'][J(0x17c)]=J(0x18e),h[J(0x164)][J(0x147)]=J(0x163);let i=document['createElement'](J(0x13c));i[J(0x13b)]=J(0x13c),i[J(0x169)]=J(0x15a),i[J(0x17d)]='⋯',i[J(0x13f)](J(0x14d),'Actions\x20for\x20'+(c['displayName']??c['name'])),i[J(0x1a2)]=c['readonly']===!![],i[J(0x164)][J(0x142)]=J(0x193),i[J(0x164)]['height']=J(0x193),i['style']['borderRadius']=J(0x135),i[J(0x164)][J(0x1a4)]=J(0x14b),i[J(0x164)][J(0x151)]='pointer';if(c[J(0x126)]!=PropertyType['complex'])h[J(0x12a)](i);g['appendChild'](h);c[J(0x122)]!==!![]&&(i['oncontextmenu']=j=>{const K=J;j['preventDefault'](),this[K(0x112)](j,c);},i[J(0x139)]=j=>{const L=J;j[L(0x14c)](),this[L(0x112)](j,c);});if(c[J(0x13b)]=='addNew'){let j=e['element'];j[J(0x1a2)]=!![],j['id']=J(0x159)+ ++this[J(0x198)];let k=document['createElement'](J(0x11d));f=k;d&&(k['style']['marginLeft']=J(0x136),k['style']['width']=J(0x14f));k[J(0x1a7)]=c['name'],k['type']=J(0x12d),k['id']=J(0x153)+this['_addCounter'],k['onkeyup']=l=>{const M=J;l['key']==M(0x114)&&k[M(0x1a7)]&&(c['name']=k['value'],k[M(0x1a2)]=!![],j['disabled']=![],j['focus']());};if(c[J(0x150)][J(0x111)]){const l=c['service'][J(0x111)](null),m=document[J(0x12b)]('datalist');m['id']='addNew_'+this['_addCounter']+J(0x170);for(let n of l){const o=document[J(0x12b)](J(0x1a8));o[J(0x1a7)]=n,m[J(0x12c)](o);}g[J(0x12a)](m),k[J(0x13f)]('list',m['id']);}g['appendChild'](k);}else{if(c[J(0x143)])f=document['createElement']('span');else{if(!c['renamable']){let p=document[J(0x12b)]('label');f=p;if(d)p['style'][J(0x184)]='10px';p['htmlFor']=c['name'],p['textContent']=c['displayName']??c['name'],p[J(0x15f)]=c[J(0x125)]??(c[J(0x117)]??c[J(0x181)])+J(0x1a9)+c['type']+(c[J(0x167)]?J(0x144)+c[J(0x167)]:'')+J(0x192)+c[J(0x126)]+')',p[J(0x171)]=q=>this['_onDragLeave'](q,c,p),p[J(0x188)]=q=>this['_onDragOver'](q,c,p),p[J(0x165)]=q=>this[J(0x189)](q,c,p),g[J(0x12a)](p);}else{let q=document['createElement']('input');f=q;d&&(q[J(0x164)][J(0x184)]='10px',q[J(0x164)][J(0x142)]='calc(100%\x20-\x2010px)');q['id']=J(0x17a)+c[J(0x181)];let r=e['element'];q['value']=c['name'],q[J(0x16d)]=async t=>{const N=J;if(t['key']==N(0x114)&&q[N(0x1a7)]){const u=this[N(0x132)][0x0]['openGroup']('rename\x20property\x20name\x20from\x20\x27'+c['name']+N(0x179)+q[N(0x1a7)]+'\x27');c['service']['clearValue'](this['_designItems'],c,'all'),c['name']=q[N(0x1a7)],await c[N(0x150)]['setValue'](this['_designItems'],c,r[N(0x1a7)]),u['commit'](),this['_designItems'][0x0]['instanceServiceContainer'][N(0x19c)]['extensionManager'][N(0x190)](this['_designItems']);}},g[J(0x12a)](q);}}}if(c[J(0x181)])e['element']['id']=c[J(0x181)];if(e['element']instanceof HTMLElement)e['element']['classList']['add']('editor-control');if(c[J(0x143)])e['element']['style']['gridColumn']=J(0x13a);f['classList'][J(0x131)](J(0x145)),g[J(0x12a)](e['element']),this['_div']['appendChild'](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t[J(0x15e)](c);u&&(u['element']['setAttribute'](J(0x19e),this[J(0x137)](J(0x19e))??'classic'),u['element'][J(0x164)]['gridColumn']=J(0x16b),this['_extensions']['push']({'property':c,'extension':u}),this['_div']['appendChild'](u['element']));}this[J(0x148)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const O=w;c['preventDefault'](),e[O(0x19d)][O(0x196)](O(0x194));}['_onDragOver'](c,d,e){const P=w;c[P(0x14c)]();const f=c['dataTransfer'][P(0x191)]['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer'][P(0x199)];if(h){const i=h['dragOverOnProperty'](c,d,this[P(0x132)]);(i??P(0x124))!='none'?(e['classList'][P(0x131)]('dragOverProperty'),c['dataTransfer'][P(0x16c)]=i):e['classList']['remove'](P(0x194));}}const g=c['dataTransfer'][P(0x191)][P(0x177)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j[P(0x11e)](c,d,this[P(0x132)]);(k??'none')!=P(0x124)?(e['classList'][P(0x131)]('dragOverProperty'),c[P(0x149)]['dropEffect']=k):e['classList']['remove'](P(0x194));}}}[w(0x189)](c,d,e){const Q=w;c['preventDefault'](),e[Q(0x19d)]['remove']('dragOverProperty');const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this[Q(0x161)][Q(0x199)];i&&i['dropOnProperty'](c,d,h,this[Q(0x132)]);}const g=c['dataTransfer'][Q(0x11f)](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer']['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this[Q(0x132)]);}}[w(0x112)](c,d){const R=w;let e;if(this['propertyContextMenuProvider'])e=this[R(0x116)](this['_designItems'],d);if(!e)e=d[R(0x150)][R(0x140)](this['_designItems'],d);for(const {property:f,extension:g}of this['_extensions'])if(f===d)e=[...e??[],...g[R(0x19f)]?.(this['_designItems'])??[]];ContextMenu[R(0x18c)](e,c);}[w(0x18b)](c){const S=w;this[S(0x132)]=c;for(const {extension:d}of this['_extensions'])d[S(0x133)](c);for(let e of this[S(0x148)]){e[0x1]['editor'][S(0x18b)](c);}}[w(0x175)](c){const T=w;for(const {extension:d}of this[T(0x16e)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList[T(0x141)](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1][T(0x186)]);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f[U(0x123)](e,d);c[U(0x157)][U(0x187)]=h;let i=f[U(0x110)](e,d);c[U(0x15f)]=d[U(0x181)]+':\x20'+h;if(h==ValueType[U(0x124)])c[U(0x164)]['background']='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c[U(0x164)][U(0x15d)]=U(0x156);else{if(h==ValueType['some'])c['style'][U(0x15d)]='gray';else{if(h==ValueType[U(0x1a0)])c['style']['background']='orange';else h==ValueType[U(0x118)]&&(i=f['getUnsetValue'](e,d),c['style'][U(0x15d)]=U(0x18f));}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements['define'](w(0x12f),PropertyGridPropertyList);