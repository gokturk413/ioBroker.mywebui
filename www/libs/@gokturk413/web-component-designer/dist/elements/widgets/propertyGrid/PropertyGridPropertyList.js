const x=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x190))/0x1+parseInt(v(0x1cf))/0x2*(parseInt(v(0x1da))/0x3)+-parseInt(v(0x18e))/0x4*(-parseInt(v(0x1dc))/0x5)+-parseInt(v(0x1db))/0x6*(-parseInt(v(0x206))/0x7)+-parseInt(v(0x1a1))/0x8*(parseInt(v(0x1ab))/0x9)+-parseInt(v(0x1b9))/0xa*(parseInt(v(0x207))/0xb)+parseInt(v(0x1d7))/0xc*(-parseInt(v(0x19e))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf2eef));function a(){const V=['define','360371qjpgSQ','createPropertyGroups','property-row',',\x20default:\x20','openContextMenu','hidden','text','click','disabled','append','oncontextmenu','getContextMenu','list','defaultValue','52jutcXW','description','rowElement','565832EQGxam','focus','dispose','value','remove','flex','_div','center','setPropertiesService','type','63eQuEvh','20px','property-actions','refreshIsSetElementAndEditorForDesignItems','classList','_onDragLeave','Enter','dropOnProperty','preventDefault','createElement','onclick','display','title','label_','10913720UzemrM','node-projects-property-grid-property-list','_propertiesService','propertyGridDragDropService','none','renamable','10px','span','textContent','getPropertyNameSuggestions','background','_serviceContainer','appendChild','createElements','name','orange','appearance','hideLabel','_onDrop',',\x20propertytype:\x20','1px\x20white\x20solid','bound','3459914jtzHeM','getEditorForProperty','addNew','element','createExtension','service','\x20(type:\x20','div','2464992dFgxwh','editor','readonly','3FljKjK','18IHhczw','1555JwGvla','add','displayName','propertyContextMenuProvider','12px','_onDragOver','key','cursor','setAttribute','createEditor','getData','border','getUnsetValue','getContextMenuItems','_extensions','input','replaceAll','openGroup','propertyGroupHover','propertyEditorTypesService','addNew_','bindableObjectDragDropService','removeAttribute','htmlFor','gridColumn','getValue','toggle','style','className','forSomeServicesTillResult','dropEffect','height','clickable','constructor','parse','propertyType','dragOverOnProperty','marginLeft','dragOverProperty','width','_designItems','desc','4519403Htekqb','11zXvRAF','dataset','propertiesService','classic','_propertyMap','getAttribute','onkeyup','_addCounter','option','dataTransfer','createPropertyEditors','1244OTZHUc'];a=function(){return V;};return a();}import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];['attributeChangedCallback'](){const w=b;for(const {extension:c}of this[w(0x1ea)])c[w(0x1d2)]['setAttribute'](w(0x1c9),this[w(0x20c)](w(0x1c9))??w(0x20a));}[x(0x1a7)];[x(0x20b)]=new Map();[x(0x1c4)];[x(0x1bb)];['_designItems'];['_lastClassType'];['_addCounter']=0x0;['_extensions']=[];['propertyGroupHover'];['propertyGroupClick'];[x(0x1df)];get[x(0x209)](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=x;super(),this['_restoreCachedInititalValues'](),this[y(0x1c4)]=c,this['_div']=document['createElement']('div'),this[y(0x1a7)]['className']='content-wrapper',this['shadowRoot']['appendChild'](this[y(0x1a7)]);}[x(0x1a9)](c){const z=x;if(this[z(0x1bb)]!=c){this[z(0x1bb)]=c,DomHelper['removeAllChildnodes'](this['_div']),this['_propertyMap']['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this['_extensions']=[];}}async[x(0x1c6)](c){const A=x;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x1bb)]?.['getProperties'](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=x;if(!this[B(0x1bb)])return![];if(this['_propertyMap']['size']==0x0)return!![];const d=this['_propertiesService']['getRefreshMode'](c);return d!==RefreshMode[B(0x1bd)]&&(d!==RefreshMode['fullOnClassChange']||this['_lastClassType']!==c[B(0x1d2)][B(0x1fd)]);}['_rebuildElements'](c,d){const C=x;this['_lastClassType']=c['element']['constructor'],DomHelper['removeAllChildnodes'](this[C(0x1a7)]),this['_propertyMap']['clear']();for(const {extension:e}of this['_extensions'])e[C(0x1a3)]?.();this[C(0x1ea)]=[];if(d?.['length']){for(let f of d){if('properties'in f)this[C(0x191)](f);else this['createPropertyEditors'](f);}return!![];}return![];}['createPropertyGroups'](c){const D=x;let d=document[D(0x1b4)]('span');d['addEventListener'](D(0x197),()=>{const E=D;this['expandOrCollapsePropertyGroups'](c),d['classList'][E(0x1f6)]('expanded');}),d['innerHTML']=c[D(0x1c7)][D(0x1ec)]('\x0a','<br>'),d[D(0x1f8)]='group-header',this[D(0x1a7)]['appendChild'](d);let e=document['createElement'](D(0x1c0));e['innerHTML']=c[D(0x19f)]??'',e['className']='group-desc';this[D(0x1ee)]&&(d['onmouseenter']=()=>{const F=D;if(this[F(0x1ee)](c,'name'))d[F(0x1e4)](F(0x1fc),'');else d[F(0x1f2)](F(0x1fc));},d['onclick']=()=>{const G=D;if(this['propertyGroupClick'])this['propertyGroupClick'](c,G(0x1c7));},e['onmouseenter']=()=>{const H=D;if(this['propertyGroupHover'](c,H(0x205)))e['setAttribute'](H(0x1fc),'');else e['removeAttribute']('clickable');},e[D(0x1b5)]=()=>{if(this['propertyGroupClick'])this['propertyGroupClick'](c,'desc');});this['_div']['appendChild'](e);for(const f of c['properties'])this[D(0x211)](f,!![]);}['expandOrCollapsePropertyGroups'](c){const I=x;for(let d of c['properties']){const e=this[I(0x20b)]['get'](d);e['rowElement']['hidden']=!e['rowElement']['hidden'];for(const {property:f,extension:g}of this[I(0x1ea)])if(f===d)g[I(0x1d2)]['hidden']=e[I(0x1a0)][I(0x195)];}}[x(0x211)](c,d){const J=x;let e,f;if(c[J(0x1e5)])e=c[J(0x1e5)](c);else e=this[J(0x1c4)][J(0x1f9)](J(0x1ef),g=>g[J(0x1d0)](c));if(e){const g=document['createElement'](J(0x1d6));g[J(0x1f8)]=J(0x192);if(c[J(0x1ca)])g['classList']['add']('hide-label');let h=document[J(0x1b4)](J(0x1d6));h[J(0x1f8)]=J(0x1ad);if(d)h[J(0x1f7)][J(0x201)]='10px';h['style'][J(0x203)]=J(0x1ac),h['style'][J(0x1fb)]=J(0x1ac),h['style'][J(0x1b6)]=J(0x1a6),h['style']['alignItems']=J(0x1a8);let i=document['createElement']('button');i['type']='button',i['className']='property-status',i[J(0x1c1)]='⋯',i[J(0x1e4)]('aria-label','Actions\x20for\x20'+(c[J(0x1de)]??c['name'])),i['disabled']=c[J(0x1d9)]===!![],i['style'][J(0x203)]=J(0x1e0),i[J(0x1f7)][J(0x1fb)]=J(0x1e0),i['style']['borderRadius']='2px',i[J(0x1f7)][J(0x1e7)]=J(0x1cd),i['style'][J(0x1e3)]='pointer';if(c['propertyType']!=PropertyType['complex'])h['appendChild'](i);g[J(0x1c5)](h);c['readonly']!==!![]&&(i[J(0x19a)]=j=>{const K=J;j[K(0x1b3)](),this['openContextMenu'](j,c);},i['onclick']=j=>{const L=J;j[L(0x1b3)](),this[L(0x194)](j,c);});if(c['type']==J(0x1d1)){let j=e[J(0x1d2)];j[J(0x198)]=!![],j['id']='addNew_input_'+ ++this[J(0x20e)];let k=document['createElement'](J(0x1eb));f=k;d&&(k[J(0x1f7)][J(0x201)]=J(0x1bf),k['style'][J(0x203)]='calc(100%\x20-\x2010px)');k['value']=c['name'],k['type']=J(0x196),k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const M=J;l['key']==M(0x1b1)&&k['value']&&(c['name']=k['value'],k['disabled']=!![],j[M(0x198)]=![],j[M(0x1a2)]());};if(c[J(0x1d4)][J(0x1c2)]){const l=c['service'][J(0x1c2)](null),m=document[J(0x1b4)]('datalist');m['id']=J(0x1f0)+this[J(0x20e)]+'_datalist';for(let n of l){const o=document[J(0x1b4)](J(0x20f));o['value']=n,m[J(0x199)](o);}g['appendChild'](m),k['setAttribute'](J(0x19c),m['id']);}g['appendChild'](k);}else{if(c['hideLabel'])f=document['createElement']('span');else{if(!c[J(0x1be)]){let p=document[J(0x1b4)]('label');f=p;if(d)p[J(0x1f7)]['marginLeft']='10px';p[J(0x1f3)]=c[J(0x1c7)],p['textContent']=c['displayName']??c['name'],p[J(0x1b7)]=c['description']??(c['displayName']??c['name'])+J(0x1d5)+c[J(0x1aa)]+(c[J(0x19d)]?J(0x193)+c['defaultValue']:'')+J(0x1cc)+c[J(0x1ff)]+')',p['ondragleave']=q=>this[J(0x1b0)](q,c,p),p['ondragover']=q=>this[J(0x1e1)](q,c,p),p['ondrop']=q=>this[J(0x1cb)](q,c,p),g[J(0x1c5)](p);}else{let q=document['createElement'](J(0x1eb));f=q;d&&(q[J(0x1f7)]['marginLeft']='10px',q['style']['width']='calc(100%\x20-\x2010px)');q['id']=J(0x1b8)+c[J(0x1c7)];let r=e['element'];q[J(0x1a4)]=c['name'],q[J(0x20d)]=async t=>{const N=J;if(t[N(0x1e2)]==N(0x1b1)&&q['value']){const u=this['_designItems'][0x0][N(0x1ed)]('rename\x20property\x20name\x20from\x20\x27'+c[N(0x1c7)]+'\x27\x20to\x20\x27'+q['value']+'\x27');c[N(0x1d4)]['clearValue'](this['_designItems'],c,'all'),c['name']=q['value'],await c[N(0x1d4)]['setValue'](this['_designItems'],c,r['value']),u['commit'](),this[N(0x204)][0x0]['instanceServiceContainer']['designerCanvas']['extensionManager']['refreshAllExtensions'](this[N(0x204)]);}},g[J(0x1c5)](q);}}}if(c['name'])e[J(0x1d2)]['id']=c['name'];if(e['element']instanceof HTMLElement)e[J(0x1d2)]['classList'][J(0x1dd)]('editor-control');if(c[J(0x1ca)])e['element']['style'][J(0x1f4)]='2\x20/\x204';f['classList'][J(0x1dd)]('property-label'),g[J(0x1c5)](e['element']),this['_div'][J(0x1c5)](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t[J(0x1d3)](c);u&&(u[J(0x1d2)][J(0x1e4)]('appearance',this[J(0x20c)]('appearance')??'classic'),u['element'][J(0x1f7)][J(0x1f4)]='1\x20/\x20-1',this[J(0x1ea)]['push']({'property':c,'extension':u}),this['_div'][J(0x1c5)](u[J(0x1d2)]));}this[J(0x20b)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const O=x;c['preventDefault'](),e['classList'][O(0x1a5)](O(0x202));}['_onDragOver'](c,d,e){const P=x;c[P(0x1b3)]();const f=c[P(0x210)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[P(0x1c4)][P(0x1f1)];if(h){const i=h[P(0x200)](c,d,this[P(0x204)]);(i??P(0x1bd))!=P(0x1bd)?(e['classList'][P(0x1dd)](P(0x202)),c[P(0x210)][P(0x1fa)]=i):e[P(0x1af)][P(0x1a5)]('dragOverProperty');}}const g=c[P(0x210)]['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][P(0x1bc)];if(j){const k=j[P(0x200)](c,d,this[P(0x204)]);(k??P(0x1bd))!=P(0x1bd)?(e['classList'][P(0x1dd)]('dragOverProperty'),c[P(0x210)][P(0x1fa)]=k):e[P(0x1af)][P(0x1a5)]('dragOverProperty');}}}['_onDrop'](c,d,e){const Q=x;c[Q(0x1b3)](),e[Q(0x1af)]['remove'](Q(0x202));const f=c[Q(0x210)][Q(0x1e6)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this[Q(0x1c4)]['bindableObjectDragDropService'];i&&i[Q(0x1b2)](c,d,h,this[Q(0x204)]);}const g=c['dataTransfer'][Q(0x1e6)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[Q(0x1fe)](g),k=this['_serviceContainer'][Q(0x1bc)];k&&k['dropOnProperty'](c,d,j,this[Q(0x204)]);}}['openContextMenu'](c,d){const R=x;let e;if(this[R(0x1df)])e=this['propertyContextMenuProvider'](this[R(0x204)],d);if(!e)e=d[R(0x1d4)][R(0x19b)](this[R(0x204)],d);for(const {property:f,extension:g}of this[R(0x1ea)])if(f===d)e=[...e??[],...g[R(0x1e9)]?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}['designItemsChanged'](c){const S=x;this[S(0x204)]=c;for(const {extension:d}of this['_extensions'])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1][S(0x1d8)]['designItemsChanged'](c);}}['refreshForDesignItems'](c){const T=x;for(const {extension:d}of this[T(0x1ea)])d['refresh'](c);for(let e of this[T(0x20b)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static[x(0x1ae)](c,d,e,f,g){const U=x;if(e&&e['length']){let h=f['isSet'](e,d);c[U(0x208)]['valueType']=h;let i=f[U(0x1f5)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType[U(0x1bd)])c['style'][U(0x1c3)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c[U(0x1f7)]['background']='white';else{if(h==ValueType['some'])c[U(0x1f7)]['background']='gray';else{if(h==ValueType[U(0x1ce)])c[U(0x1f7)]['background']=U(0x1c8);else h==ValueType['fromStylesheet']&&(i=f[U(0x1e8)](e,d),c[U(0x1f7)][U(0x1c3)]='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}function b(c,d){c=c-0x18e;const e=a();let f=e[c];return f;}customElements[x(0x18f)](x(0x1ba),PropertyGridPropertyList);