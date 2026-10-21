const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x255))/0x1*(parseInt(v(0x232))/0x2)+parseInt(v(0x20e))/0x3*(parseInt(v(0x201))/0x4)+parseInt(v(0x257))/0x5*(-parseInt(v(0x242))/0x6)+-parseInt(v(0x263))/0x7*(-parseInt(v(0x241))/0x8)+-parseInt(v(0x1f2))/0x9+parseInt(v(0x1fb))/0xa+parseInt(v(0x1f9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5816));function b(c,d){c=c-0x1e8;const e=a();let f=e[c];return f;}function a(){const W=['_datalist','getProperties','propertyEditorTypesService','aria-label','rename\x20property\x20name\x20from\x20\x27','162068iiaeto','appendChild','toggle','setAttribute','createElements','dataset','openContextMenu','none','disabled','fullOnClassChange','background','option','refreshIsSetElementAndEditorForDesignItems','93lvCDko','div','1\x20/\x20-1','flex','createEditor','set','_extensions','content-wrapper','name','property-status','group-header','removeAttribute','service','openGroup','span','addEventListener','createPropertyGroups','length','hide-label','7px','defaultValue','shadowRoot','width','_rebuildElements','description','<br>','parse','marginLeft','constructor','20px','rowElement','setValue','add','instanceServiceContainer','yellow','remove','2zfrpqx','innerHTML','dragOverProperty','orange','readonly','title','propertyGroupClick','fromStylesheet','10px','getValue','type','button','forSomeServicesTillResult','_div','pointer','296KZDJlp','24sOrRMJ','classList','expandOrCollapsePropertyGroups','gridColumn','properties','Enter','element','hidden','getUnsetValue','_designItems','dataTransfer','_serviceContainer','designItemsChanged','propertyContextMenuProvider','_restoreCachedInititalValues','border','bindableObjectDragDropService','classic','value','1432438fzPgRF','_lastClassType','432530usHXuT','onkeyup','input',',\x20propertytype:\x20','textContent','refresh','appearance','createPropertyEditors','desc','editor','style','Actions\x20for\x20','230853XICdKu','_addCounter','className','getAttribute','complex','2\x20/\x204','getRefreshMode','_onDragLeave','ondragleave','size','preventDefault','white','createElement','_propertiesService','9341370LvQwbs','propertyGroupHover','extensionManager','\x27\x20to\x20\x27','onclick','_onDragOver','_propertyMap','5326783HDAnMT','calc(100%\x20-\x2010px)','6648710hpuAMG'];a=function(){return W;};return a();}import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=[w(0x25d)];['attributeChangedCallback'](){const x=w;for(const {extension:c}of this[x(0x214)])c['element']['setAttribute'](x(0x25d),this[x(0x266)](x(0x25d))??'classic');}['_div'];['_propertyMap']=new Map();[w(0x24d)];['_propertiesService'];['_designItems'];['_lastClassType'];['_addCounter']=0x0;['_extensions']=[];['propertyGroupHover'];[w(0x238)];[w(0x24f)];get['propertiesService'](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this[y(0x250)](),this['_serviceContainer']=c,this[y(0x23f)]=document['createElement']('div'),this[y(0x23f)][y(0x265)]=y(0x215),this[y(0x223)]['appendChild'](this[y(0x23f)]);}['setPropertiesService'](c){const z=w;if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this['_div']),this[z(0x1f8)]['clear']();for(const {extension:d}of this['_extensions'])d['dispose']?.();this['_extensions']=[];}}async[w(0x205)](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this['_propertiesService']?.[A(0x1fd)](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=w;if(!this[B(0x1f1)])return![];if(this['_propertyMap'][B(0x1ed)]==0x0)return!![];const d=this[B(0x1f1)][B(0x1ea)](c);return d!==RefreshMode[B(0x208)]&&(d!==RefreshMode[B(0x20a)]||this[B(0x256)]!==c[B(0x248)]['constructor']);}[w(0x225)](c,d){const C=w;this[C(0x256)]=c['element'][C(0x22a)],DomHelper['removeAllChildnodes'](this[C(0x23f)]),this['_propertyMap']['clear']();for(const {extension:e}of this['_extensions'])e['dispose']?.();this[C(0x214)]=[];if(d?.[C(0x21f)]){for(let f of d){if(C(0x246)in f)this[C(0x21e)](f);else this['createPropertyEditors'](f);}return!![];}return![];}[w(0x21e)](c){const D=w;let d=document[D(0x1f0)]('span');d[D(0x21d)]('click',()=>{const E=D;this[E(0x244)](c),d['classList'][E(0x203)]('expanded');}),d[D(0x233)]=c[D(0x216)]['replaceAll']('\x0a',D(0x227)),d[D(0x265)]=D(0x218),this['_div'][D(0x202)](d);let e=document[D(0x1f0)](D(0x21c));e['innerHTML']=c['description']??'',e[D(0x265)]='group-desc';this['propertyGroupHover']&&(d['onmouseenter']=()=>{const F=D;if(this['propertyGroupHover'](c,F(0x216)))d[F(0x204)]('clickable','');else d['removeAttribute']('clickable');},d[D(0x1f6)]=()=>{const G=D;if(this[G(0x238)])this[G(0x238)](c,'name');},e['onmouseenter']=()=>{const H=D;if(this[H(0x1f3)](c,H(0x25f)))e['setAttribute']('clickable','');else e[H(0x219)]('clickable');},e['onclick']=()=>{const I=D;if(this[I(0x238)])this['propertyGroupClick'](c,I(0x25f));});this['_div']['appendChild'](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}['expandOrCollapsePropertyGroups'](c){const J=w;for(let d of c[J(0x246)]){const e=this['_propertyMap']['get'](d);e[J(0x22c)]['hidden']=!e['rowElement'][J(0x249)];for(const {property:f,extension:g}of this[J(0x214)])if(f===d)g[J(0x248)]['hidden']=e[J(0x22c)][J(0x249)];}}[w(0x25e)](c,d){const K=w;let e,f;if(c['createEditor'])e=c[K(0x212)](c);else e=this[K(0x24d)][K(0x23e)](K(0x1fe),g=>g['getEditorForProperty'](c));if(e){const g=document[K(0x1f0)](K(0x20f));g[K(0x265)]='property-row';if(c['hideLabel'])g['classList']['add'](K(0x220));let h=document['createElement'](K(0x20f));h[K(0x265)]='property-actions';if(d)h['style'][K(0x229)]='10px';h[K(0x261)][K(0x224)]='20px',h[K(0x261)]['height']=K(0x22b),h[K(0x261)]['display']=K(0x211),h[K(0x261)]['alignItems']='center';let i=document['createElement'](K(0x23d));i[K(0x23c)]='button',i[K(0x265)]=K(0x217),i[K(0x25b)]='⋯',i[K(0x204)](K(0x1ff),K(0x262)+(c['displayName']??c['name'])),i[K(0x209)]=c[K(0x236)]===!![],i['style'][K(0x224)]=K(0x221),i['style']['height']=K(0x221),i['style'][K(0x251)]='1px\x20white\x20solid',i['style']['cursor']=K(0x240);if(c['propertyType']!=PropertyType[K(0x1e8)])h[K(0x202)](i);g[K(0x202)](h);c['readonly']!==!![]&&(i['oncontextmenu']=j=>{const L=K;j[L(0x1ee)](),this[L(0x207)](j,c);},i['onclick']=j=>{const M=K;j[M(0x1ee)](),this[M(0x207)](j,c);});if(c[K(0x23c)]=='addNew'){let j=e[K(0x248)];j['disabled']=!![],j['id']='addNew_input_'+ ++this[K(0x264)];let k=document['createElement'](K(0x259));f=k;d&&(k['style'][K(0x229)]=K(0x23a),k['style']['width']='calc(100%\x20-\x2010px)');k[K(0x254)]=c['name'],k['type']='text',k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const N=K;l['key']==N(0x247)&&k['value']&&(c[N(0x216)]=k[N(0x254)],k['disabled']=!![],j['disabled']=![],j['focus']());};if(c[K(0x21a)]['getPropertyNameSuggestions']){const l=c[K(0x21a)]['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']='addNew_'+this[K(0x264)]+K(0x1fc);for(let n of l){const o=document['createElement'](K(0x20c));o[K(0x254)]=n,m['append'](o);}g['appendChild'](m),k[K(0x204)]('list',m['id']);}g[K(0x202)](k);}else{if(c['hideLabel'])f=document['createElement']('span');else{if(!c['renamable']){let p=document['createElement']('label');f=p;if(d)p[K(0x261)]['marginLeft']=K(0x23a);p['htmlFor']=c['name'],p['textContent']=c['displayName']??c[K(0x216)],p[K(0x237)]=c[K(0x226)]??(c['displayName']??c['name'])+'\x20(type:\x20'+c[K(0x23c)]+(c[K(0x222)]?',\x20default:\x20'+c[K(0x222)]:'')+K(0x25a)+c['propertyType']+')',p[K(0x1ec)]=q=>this[K(0x1eb)](q,c,p),p['ondragover']=q=>this[K(0x1f7)](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g[K(0x202)](p);}else{let q=document['createElement'](K(0x259));f=q;d&&(q[K(0x261)]['marginLeft']='10px',q['style']['width']=K(0x1fa));q['id']='label_'+c[K(0x216)];let r=e['element'];q['value']=c[K(0x216)],q[K(0x258)]=async t=>{const O=K;if(t['key']=='Enter'&&q[O(0x254)]){const u=this[O(0x24b)][0x0][O(0x21b)](O(0x200)+c[O(0x216)]+O(0x1f5)+q['value']+'\x27');c['service']['clearValue'](this[O(0x24b)],c,'all'),c[O(0x216)]=q['value'],await c[O(0x21a)][O(0x22d)](this['_designItems'],c,r[O(0x254)]),u['commit'](),this['_designItems'][0x0][O(0x22f)]['designerCanvas'][O(0x1f4)]['refreshAllExtensions'](this[O(0x24b)]);}},g['appendChild'](q);}}}if(c['name'])e[K(0x248)]['id']=c[K(0x216)];if(e[K(0x248)]instanceof HTMLElement)e['element'][K(0x243)][K(0x22e)]('editor-control');if(c['hideLabel'])e[K(0x248)][K(0x261)][K(0x245)]=K(0x1e9);f[K(0x243)][K(0x22e)]('property-label'),g[K(0x202)](e[K(0x248)]),this[K(0x23f)]['appendChild'](g);for(const t of this[K(0x24d)]['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u[K(0x248)][K(0x204)]('appearance',this['getAttribute']('appearance')??K(0x253)),u[K(0x248)]['style']['gridColumn']=K(0x210),this[K(0x214)]['push']({'property':c,'extension':u}),this[K(0x23f)]['appendChild'](u[K(0x248)]));}this['_propertyMap'][K(0x213)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x1eb)](c,d,e){const P=w;c[P(0x1ee)](),e[P(0x243)]['remove'](P(0x234));}[w(0x1f7)](c,d,e){const Q=w;c['preventDefault']();const f=c[Q(0x24c)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[Q(0x24d)][Q(0x252)];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!='none'?(e['classList']['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=i):e['classList'][Q(0x231)](Q(0x234));}}const g=c['dataTransfer']['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??'none')!=Q(0x208)?(e['classList'][Q(0x22e)](Q(0x234)),c[Q(0x24c)]['dropEffect']=k):e['classList'][Q(0x231)]('dragOverProperty');}}}['_onDrop'](c,d,e){const R=w;c['preventDefault'](),e['classList']['remove'](R(0x234));const f=c['dataTransfer']['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON[R(0x228)](f),i=this['_serviceContainer'][R(0x252)];i&&i['dropOnProperty'](c,d,h,this['_designItems']);}const g=c['dataTransfer']['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON[R(0x228)](g),k=this[R(0x24d)]['propertyGridDragDropService'];k&&k['dropOnProperty'](c,d,j,this[R(0x24b)]);}}['openContextMenu'](c,d){const S=w;let e;if(this[S(0x24f)])e=this['propertyContextMenuProvider'](this['_designItems'],d);if(!e)e=d[S(0x21a)]['getContextMenu'](this['_designItems'],d);for(const {property:f,extension:g}of this[S(0x214)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this['_designItems'])??[]];ContextMenu['show'](e,c);}[w(0x24e)](c){const T=w;this[T(0x24b)]=c;for(const {extension:d}of this[T(0x214)])d['refresh'](c);for(let e of this['_propertyMap']){e[0x1]['editor'][T(0x24e)](c);}}['refreshForDesignItems'](c){const U=w;for(const {extension:d}of this['_extensions'])d[U(0x25c)](c);for(let e of this[U(0x1f8)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this[U(0x1f1)],e[0x1][U(0x260)]);}}static[w(0x20d)](c,d,e,f,g){const V=w;if(e&&e[V(0x21f)]){let h=f['isSet'](e,d);c[V(0x206)]['valueType']=h;let i=f[V(0x23b)](e,d);c['title']=d[V(0x216)]+':\x20'+h;if(h==ValueType['none'])c['style'][V(0x20b)]='',i=f[V(0x24a)](e,d);else{if(h==ValueType['all'])c[V(0x261)][V(0x20b)]=V(0x1ef);else{if(h==ValueType['some'])c[V(0x261)]['background']='gray';else{if(h==ValueType['bound'])c['style'][V(0x20b)]=V(0x235);else h==ValueType[V(0x239)]&&(i=f['getUnsetValue'](e,d),c[V(0x261)]['background']=V(0x230));}}}g?.['refreshValueWithoutNotification'](h,i);}else c[V(0x261)]['background']='';}}customElements['define']('node-projects-property-grid-property-list',PropertyGridPropertyList);