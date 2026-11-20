const w=b;function b(c,d){c=c-0x10c;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x10f))/0x1+parseInt(v(0x11a))/0x2+-parseInt(v(0x152))/0x3*(-parseInt(v(0x11b))/0x4)+parseInt(v(0x10d))/0x5*(-parseInt(v(0x194))/0x6)+-parseInt(v(0x120))/0x7*(parseInt(v(0x115))/0x8)+-parseInt(v(0x187))/0x9+parseInt(v(0x157))/0xa*(parseInt(v(0x161))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb4818));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x18d)]=[w(0x132)];[w(0x119)](){const x=w;for(const {extension:c}of this['_extensions'])c[x(0x18e)][x(0x136)]('appearance',this['getAttribute'](x(0x132))??x(0x165));}['_div'];[w(0x19a)]=new Map();[w(0x16f)];[w(0x197)];[w(0x191)];['_lastClassType'];['_addCounter']=0x0;[w(0x168)]=[];[w(0x17c)];[w(0x196)];['propertyContextMenuProvider'];get['propertiesService'](){const y=w;return this[y(0x197)];}static get['style'](){return css`
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
    `;}constructor(c){const z=w;super(),this['_restoreCachedInititalValues'](),this['_serviceContainer']=c,this['_div']=document[z(0x12f)](z(0x135)),this['_div']['className']=z(0x10e),this['shadowRoot'][z(0x12b)](this['_div']);}['setPropertiesService'](c){const A=w;if(this['_propertiesService']!=c){this[A(0x197)]=c,DomHelper[A(0x10c)](this[A(0x18f)]),this['_propertyMap'][A(0x113)]();for(const {extension:d}of this['_extensions'])d['dispose']?.();this[A(0x168)]=[];}}async[w(0x112)](c){const B=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[B(0x197)]?.['getProperties'](c);return this['_rebuildElements'](c,d);}[w(0x15d)](c){const C=w;if(!this['_propertiesService'])return![];if(this[C(0x19a)][C(0x11e)]==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode[C(0x12a)]||this['_lastClassType']!==c[C(0x18e)][C(0x145)]);}[w(0x16c)](c,d){const D=w;this['_lastClassType']=c['element'][D(0x145)],DomHelper[D(0x10c)](this['_div']),this['_propertyMap'][D(0x113)]();for(const {extension:e}of this[D(0x168)])e[D(0x122)]?.();this['_extensions']=[];if(d?.[D(0x199)]){for(let f of d){if(D(0x166)in f)this[D(0x15a)](f);else this['createPropertyEditors'](f);}return!![];}return![];}[w(0x15a)](c){const E=w;let d=document[E(0x12f)](E(0x164));d['addEventListener'](E(0x18b),()=>{const F=E;this['expandOrCollapsePropertyGroups'](c),d[F(0x175)]['toggle'](F(0x180));}),d[E(0x127)]=c['name']['replaceAll']('\x0a','<br>'),d['className']='group-header',this['_div']['appendChild'](d);let e=document[E(0x12f)]('span');e['innerHTML']=c[E(0x154)]??'',e[E(0x147)]=E(0x173);this['propertyGroupHover']&&(d[E(0x138)]=()=>{const G=E;if(this['propertyGroupHover'](c,G(0x163)))d[G(0x136)](G(0x111),'');else d[G(0x151)]('clickable');},d['onclick']=()=>{const H=E;if(this[H(0x196)])this['propertyGroupClick'](c,H(0x163));},e['onmouseenter']=()=>{const I=E;if(this['propertyGroupHover'](c,I(0x182)))e['setAttribute']('clickable','');else e[I(0x151)](I(0x111));},e[E(0x17f)]=()=>{const J=E;if(this['propertyGroupClick'])this[J(0x196)](c,J(0x182));});this['_div'][E(0x12b)](e);for(const f of c['properties'])this[E(0x183)](f,!![]);}[w(0x142)](c){const K=w;for(let d of c[K(0x166)]){const e=this['_propertyMap'][K(0x140)](d);e[K(0x110)]['hidden']=!e['rowElement'][K(0x178)];for(const {property:f,extension:g}of this[K(0x168)])if(f===d)g[K(0x18e)]['hidden']=e['rowElement'][K(0x178)];}}['createPropertyEditors'](c,d){const L=w;let e,f;if(c['createEditor'])e=c['createEditor'](c);else e=this[L(0x16f)][L(0x121)]('propertyEditorTypesService',g=>g[L(0x174)](c));if(e){const g=document['createElement']('div');g[L(0x147)]='property-row';if(c[L(0x17d)])g[L(0x175)]['add']('hide-label');let h=document[L(0x12f)]('div');h['className']='property-actions';if(d)h['style']['marginLeft']='10px';h['style'][L(0x16a)]='20px',h['style'][L(0x150)]=L(0x15f),h['style']['display']='flex',h['style']['alignItems']='center';let i=document['createElement'](L(0x184));i['type']=L(0x184),i[L(0x147)]=L(0x189),i['textContent']='⋯',i['setAttribute'](L(0x139),'Actions\x20for\x20'+(c[L(0x177)]??c[L(0x163)])),i[L(0x13c)]=c[L(0x19c)]===!![],i[L(0x146)]['width']='12px',i['style'][L(0x150)]=L(0x126),i[L(0x146)]['borderRadius']=L(0x198),i['style']['border']=L(0x17a),i[L(0x146)][L(0x158)]='pointer';if(c['propertyType']!=PropertyType[L(0x185)])h[L(0x12b)](i);g[L(0x12b)](h);c[L(0x19c)]!==!![]&&(i['oncontextmenu']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i[L(0x17f)]=j=>{const M=L;j[M(0x153)](),this['openContextMenu'](j,c);});if(c[L(0x12d)]=='addNew'){let j=e['element'];j['disabled']=!![],j['id']='addNew_input_'+ ++this[L(0x181)];let k=document[L(0x12f)]('input');f=k;d&&(k[L(0x146)]['marginLeft']='10px',k[L(0x146)][L(0x16a)]=L(0x118));k['value']=c['name'],k['type']='text',k['id']=L(0x18c)+this[L(0x181)],k['onkeyup']=l=>{const N=L;l[N(0x141)]==N(0x130)&&k[N(0x176)]&&(c['name']=k[N(0x176)],k['disabled']=!![],j['disabled']=![],j[N(0x13b)]());};if(c['service'][L(0x186)]){const l=c[L(0x11c)]['getPropertyNameSuggestions'](null),m=document[L(0x12f)](L(0x128));m['id']='addNew_'+this['_addCounter']+L(0x16e);for(let n of l){const o=document['createElement']('option');o['value']=n,m[L(0x190)](o);}g[L(0x12b)](m),k['setAttribute'](L(0x12c),m['id']);}g[L(0x12b)](k);}else{if(c[L(0x17d)])f=document[L(0x12f)](L(0x164));else{if(!c[L(0x148)]){let p=document[L(0x12f)](L(0x15e));f=p;if(d)p['style']['marginLeft']=L(0x170);p[L(0x156)]=c['name'],p[L(0x14c)]=c[L(0x177)]??c[L(0x163)],p['title']=c[L(0x154)]??(c[L(0x177)]??c[L(0x163)])+'\x20(type:\x20'+c['type']+(c['defaultValue']?',\x20default:\x20'+c['defaultValue']:'')+',\x20propertytype:\x20'+c[L(0x143)]+')',p['ondragleave']=q=>this[L(0x123)](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[L(0x133)]=q=>this[L(0x16b)](q,c,p),g[L(0x12b)](p);}else{let q=document['createElement'](L(0x11d));f=q;d&&(q['style']['marginLeft']='10px',q['style'][L(0x16a)]='calc(100%\x20-\x2010px)');q['id']=L(0x155)+c['name'];let r=e[L(0x18e)];q['value']=c['name'],q[L(0x13a)]=async t=>{const O=L;if(t['key']==O(0x130)&&q['value']){const u=this['_designItems'][0x0][O(0x129)](O(0x117)+c[O(0x163)]+O(0x19b)+q['value']+'\x27');c['service']['clearValue'](this[O(0x191)],c,'all'),c[O(0x163)]=q['value'],await c[O(0x11c)]['setValue'](this['_designItems'],c,r['value']),u['commit'](),this['_designItems'][0x0][O(0x193)]['designerCanvas']['extensionManager'][O(0x15b)](this[O(0x191)]);}},g['appendChild'](q);}}}if(c[L(0x163)])e[L(0x18e)]['id']=c['name'];if(e['element']instanceof HTMLElement)e['element']['classList']['add']('editor-control');if(c['hideLabel'])e['element']['style']['gridColumn']=L(0x172);f['classList']['add'](L(0x13f)),g[L(0x12b)](e[L(0x18e)]),this[L(0x18f)][L(0x12b)](g);for(const t of this[L(0x16f)][L(0x17e)]){const u=t[L(0x12e)](c);u&&(u['element']['setAttribute']('appearance',this[L(0x137)]('appearance')??'classic'),u[L(0x18e)]['style'][L(0x16d)]='1\x20/\x20-1',this['_extensions']['push']({'property':c,'extension':u}),this[L(0x18f)][L(0x12b)](u[L(0x18e)]));}this[L(0x19a)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){c['preventDefault'](),e['classList']['remove']('dragOverProperty');}['_onDragOver'](c,d,e){const P=w;c['preventDefault']();const f=c[P(0x131)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[P(0x16f)][P(0x116)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??P(0x192))!=P(0x192)?(e[P(0x175)][P(0x171)]('dragOverProperty'),c['dataTransfer']['dropEffect']=i):e['classList'][P(0x125)]('dragOverProperty');}}const g=c[P(0x131)][P(0x159)]['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][P(0x134)];if(j){const k=j[P(0x169)](c,d,this['_designItems']);(k??'none')!='none'?(e[P(0x175)]['add'](P(0x149)),c['dataTransfer']['dropEffect']=k):e['classList']['remove'](P(0x149));}}}['_onDrop'](c,d,e){const Q=w;c['preventDefault'](),e[Q(0x175)]['remove'](Q(0x149));const f=c[Q(0x131)][Q(0x144)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][Q(0x116)];i&&i['dropOnProperty'](c,d,h,this['_designItems']);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON[Q(0x13d)](g),k=this['_serviceContainer'][Q(0x134)];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}[w(0x11f)](c,d){const R=w;let e;if(this[R(0x14a)])e=this['propertyContextMenuProvider'](this['_designItems'],d);if(!e)e=d[R(0x11c)]['getContextMenu'](this[R(0x191)],d);for(const {property:f,extension:g}of this[R(0x168)])if(f===d)e=[...e??[],...g[R(0x14e)]?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}[w(0x179)](c){const S=w;this[S(0x191)]=c;for(const {extension:d}of this[S(0x168)])d[S(0x15c)](c);for(let e of this['_propertyMap']){e[0x1][S(0x188)]['designItemsChanged'](c);}}['refreshForDesignItems'](c){const T=w;for(const {extension:d}of this[T(0x168)])d['refresh'](c);for(let e of this['_propertyMap']){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1][T(0x13e)],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const U=w;if(e&&e['length']){let h=f[U(0x167)](e,d);c['dataset']['valueType']=h;let i=f[U(0x162)](e,d);c[U(0x17b)]=d[U(0x163)]+':\x20'+h;if(h==ValueType['none'])c[U(0x146)][U(0x18a)]='',i=f[U(0x14d)](e,d);else{if(h==ValueType['all'])c['style']['background']=U(0x195);else{if(h==ValueType['some'])c['style'][U(0x18a)]=U(0x114);else{if(h==ValueType[U(0x14b)])c['style'][U(0x18a)]=U(0x124);else h==ValueType['fromStylesheet']&&(i=f[U(0x14d)](e,d),c['style']['background']='yellow');}}}g?.[U(0x14f)](h,i);}else c[U(0x146)][U(0x18a)]='';}}function a(){const V=['className','renamable','dragOverProperty','propertyContextMenuProvider','bound','textContent','getUnsetValue','getContextMenuItems','refreshValueWithoutNotification','height','removeAttribute','153VcbJuK','preventDefault','description','label_','htmlFor','68430nYJIUw','cursor','types','createPropertyGroups','refreshAllExtensions','refresh','_shouldCreateElements','label','20px','define','1815xpbJDV','getValue','name','span','classic','properties','isSet','_extensions','dragOverOnProperty','width','_onDrop','_rebuildElements','gridColumn','_datalist','_serviceContainer','10px','add','2\x20/\x204','group-desc','getEditorForProperty','classList','value','displayName','hidden','designItemsChanged','1px\x20white\x20solid','title','propertyGroupHover','hideLabel','propertyGridExtensions','onclick','expanded','_addCounter','desc','createPropertyEditors','button','complex','getPropertyNameSuggestions','11072448wkRmzP','editor','property-status','background','click','addNew_label_','observedAttributes','element','_div','append','_designItems','none','instanceServiceContainer','5852982EwlopU','white','propertyGroupClick','_propertiesService','2px','length','_propertyMap','\x27\x20to\x20\x27','readonly','removeAllChildnodes','5FIEzvS','content-wrapper','217744klyNVS','rowElement','clickable','createElements','clear','gray','2768NRNOdQ','bindableObjectDragDropService','rename\x20property\x20name\x20from\x20\x27','calc(100%\x20-\x2010px)','attributeChangedCallback','1879994MDlgKj','55348rDGgeX','service','input','size','openContextMenu','959lCmceK','forSomeServicesTillResult','dispose','_onDragLeave','orange','remove','12px','innerHTML','datalist','openGroup','fullOnClassChange','appendChild','list','type','createExtension','createElement','Enter','dataTransfer','appearance','ondrop','propertyGridDragDropService','div','setAttribute','getAttribute','onmouseenter','aria-label','onkeyup','focus','disabled','parse','isSetElement','property-label','get','key','expandOrCollapsePropertyGroups','propertyType','getData','constructor','style'];a=function(){return V;};return a();}customElements[w(0x160)]('node-projects-property-grid-property-list',PropertyGridPropertyList);