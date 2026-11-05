const w=b;function b(c,d){c=c-0x1d1;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x20f))/0x1+parseInt(v(0x1fc))/0x2+parseInt(v(0x231))/0x3+-parseInt(v(0x22b))/0x4+-parseInt(v(0x1d9))/0x5*(parseInt(v(0x201))/0x6)+parseInt(v(0x1e8))/0x7*(parseInt(v(0x21e))/0x8)+-parseInt(v(0x1e9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1da58));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';function a(){const V=['defaultValue','ondragleave','innerHTML','getEditorForProperty','properties','service','removeAttribute','getValue','hideLabel','append','_div','openContextMenu','add','constructor','clearValue','border','forSomeServicesTillResult','10px','propertyContextMenuProvider','12px','observedAttributes','click','_addCounter','propertyEditorTypesService','property-actions','_extensions','onkeyup','element','displayName','_propertyMap','clear','description','name','1145TzOQoD','gray','onclick','_serviceContainer','className','fromStylesheet','parse','disabled','key','removeAllChildnodes','refreshIsSetElementAndEditorForDesignItems','show','_onDragLeave','length','designerCanvas','1043RPPlES','1538766iebmtG','createEditor','dropOnProperty','commit','focus','width','type','1\x20/\x20-1','style','borderRadius','span','node-projects-property-grid-property-list','designItemsChanged','orange','background','replaceAll','some','button','readonly','47136XpdSkC','getRefreshMode','onmouseenter','preventDefault','_onDrop','6246TdJveB','createElements','hidden','propertyGroupClick','refreshForDesignItems','propertyGroupHover','shadowRoot','dragOverProperty','createElement','addNew_','2\x20/\x204','text','_datalist','propertyType','185956BQMsTa','attributeChangedCallback','Enter','marginLeft','define','_propertiesService','alignItems','none','content-wrapper',',\x20propertytype:\x20','htmlFor','oncontextmenu','createPropertyGroups','2px','editor-control','12248lnUJeF','expandOrCollapsePropertyGroups','rowElement','group-header','pointer','propertyGridDragDropService','clickable','classic','label_','hide-label','bound','list','value','535156ceyWFT','aria-label','remove','\x20(type:\x20','height','_designItems','680823ZKtSYz','calc(100%\x20-\x2010px)','getData','createPropertyEditors','dataTransfer','openGroup','size','property-status','_lastClassType','desc','appendChild','setAttribute','center','refresh','appearance','propertiesService','setValue','getAttribute','addNew_input_','classList'];a=function(){return V;};return a();}import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static [w(0x259)]=[w(0x23f)];[w(0x210)](){const x=w;for(const {extension:c}of this[x(0x1d1)])c[x(0x1d3)]['setAttribute']('appearance',this[x(0x242)]('appearance')??x(0x225));}['_div'];['_propertyMap']=new Map();['_serviceContainer'];[w(0x214)];[w(0x230)];[w(0x239)];[w(0x25b)]=0x0;['_extensions']=[];[w(0x206)];[w(0x204)];[w(0x257)];get[w(0x240)](){return this['_propertiesService'];}static get[w(0x1f1)](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this[y(0x1dc)]=c,this[y(0x24f)]=document[y(0x209)]('div'),this[y(0x24f)][y(0x1dd)]=y(0x217),this[y(0x207)]['appendChild'](this[y(0x24f)]);}['setPropertiesService'](c){const z=w;if(this['_propertiesService']!=c){this['_propertiesService']=c,DomHelper['removeAllChildnodes'](this[z(0x24f)]),this['_propertyMap'][z(0x1d6)]();for(const {extension:d}of this['_extensions'])d['dispose']?.();this[z(0x1d1)]=[];}}async[w(0x202)](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0x214)]?.['getProperties'](c);return this['_rebuildElements'](c,d);}['_shouldCreateElements'](c){const B=w;if(!this['_propertiesService'])return![];if(this['_propertyMap'][B(0x237)]==0x0)return!![];const d=this[B(0x214)][B(0x1fd)](c);return d!==RefreshMode[B(0x216)]&&(d!==RefreshMode['fullOnClassChange']||this[B(0x239)]!==c['element'][B(0x252)]);}['_rebuildElements'](c,d){const C=w;this[C(0x239)]=c[C(0x1d3)]['constructor'],DomHelper[C(0x1e2)](this['_div']),this[C(0x1d5)][C(0x1d6)]();for(const {extension:e}of this[C(0x1d1)])e['dispose']?.();this[C(0x1d1)]=[];if(d?.[C(0x1e6)]){for(let f of d){if(C(0x249)in f)this['createPropertyGroups'](f);else this[C(0x234)](f);}return!![];}return![];}[w(0x21b)](c){const D=w;let d=document[D(0x209)]('span');d['addEventListener'](D(0x25a),()=>{const E=D;this['expandOrCollapsePropertyGroups'](c),d[E(0x244)]['toggle']('expanded');}),d['innerHTML']=c['name'][D(0x1f8)]('\x0a','<br>'),d['className']=D(0x221),this[D(0x24f)]['appendChild'](d);let e=document['createElement']('span');e[D(0x247)]=c[D(0x1d7)]??'',e['className']='group-desc';this['propertyGroupHover']&&(d[D(0x1fe)]=()=>{const F=D;if(this['propertyGroupHover'](c,F(0x1d8)))d['setAttribute'](F(0x224),'');else d[F(0x24b)]('clickable');},d[D(0x1db)]=()=>{const G=D;if(this['propertyGroupClick'])this['propertyGroupClick'](c,G(0x1d8));},e[D(0x1fe)]=()=>{const H=D;if(this[H(0x206)](c,H(0x23a)))e[H(0x23c)]('clickable','');else e[H(0x24b)](H(0x224));},e['onclick']=()=>{const I=D;if(this[I(0x204)])this[I(0x204)](c,'desc');});this[D(0x24f)][D(0x23b)](e);for(const f of c['properties'])this['createPropertyEditors'](f,!![]);}[w(0x21f)](c){const J=w;for(let d of c['properties']){const e=this['_propertyMap']['get'](d);e[J(0x220)]['hidden']=!e['rowElement'][J(0x203)];for(const {property:f,extension:g}of this[J(0x1d1)])if(f===d)g['element'][J(0x203)]=e['rowElement'][J(0x203)];}}['createPropertyEditors'](c,d){const K=w;let e,f;if(c[K(0x1ea)])e=c['createEditor'](c);else e=this['_serviceContainer'][K(0x255)](K(0x25c),g=>g[K(0x248)](c));if(e){const g=document['createElement']('div');g[K(0x1dd)]='property-row';if(c[K(0x24d)])g['classList'][K(0x251)](K(0x227));let h=document['createElement']('div');h[K(0x1dd)]=K(0x25d);if(d)h['style'][K(0x212)]=K(0x256);h['style'][K(0x1ee)]='20px',h['style']['height']='20px',h['style']['display']='flex',h['style'][K(0x215)]=K(0x23d);let i=document[K(0x209)](K(0x1fa));i[K(0x1ef)]='button',i[K(0x1dd)]=K(0x238),i['textContent']='⋯',i['setAttribute'](K(0x22c),'Actions\x20for\x20'+(c[K(0x1d4)]??c[K(0x1d8)])),i[K(0x1e0)]=c[K(0x1fb)]===!![],i['style'][K(0x1ee)]='12px',i[K(0x1f1)][K(0x22f)]=K(0x258),i['style'][K(0x1f2)]=K(0x21c),i[K(0x1f1)][K(0x254)]='1px\x20white\x20solid',i[K(0x1f1)]['cursor']=K(0x222);if(c[K(0x20e)]!=PropertyType['complex'])h['appendChild'](i);g['appendChild'](h);c[K(0x1fb)]!==!![]&&(i[K(0x21a)]=j=>{const L=K;j[L(0x1ff)](),this['openContextMenu'](j,c);},i['onclick']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c['type']=='addNew'){let j=e['element'];j[K(0x1e0)]=!![],j['id']=K(0x243)+ ++this['_addCounter'];let k=document[K(0x209)]('input');f=k;d&&(k['style']['marginLeft']='10px',k[K(0x1f1)][K(0x1ee)]=K(0x232));k[K(0x22a)]=c['name'],k['type']=K(0x20c),k['id']='addNew_label_'+this['_addCounter'],k['onkeyup']=l=>{const M=K;l['key']==M(0x211)&&k['value']&&(c[M(0x1d8)]=k['value'],k[M(0x1e0)]=!![],j[M(0x1e0)]=![],j[M(0x1ed)]());};if(c[K(0x24a)]['getPropertyNameSuggestions']){const l=c[K(0x24a)]['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']=K(0x20a)+this[K(0x25b)]+K(0x20d);for(let n of l){const o=document[K(0x209)]('option');o[K(0x22a)]=n,m[K(0x24e)](o);}g['appendChild'](m),k['setAttribute'](K(0x229),m['id']);}g[K(0x23b)](k);}else{if(c[K(0x24d)])f=document['createElement'](K(0x1f3));else{if(!c['renamable']){let p=document['createElement']('label');f=p;if(d)p[K(0x1f1)]['marginLeft']=K(0x256);p[K(0x219)]=c[K(0x1d8)],p['textContent']=c['displayName']??c['name'],p['title']=c['description']??(c[K(0x1d4)]??c['name'])+K(0x22e)+c['type']+(c[K(0x245)]?',\x20default:\x20'+c['defaultValue']:'')+K(0x218)+c['propertyType']+')',p[K(0x246)]=q=>this[K(0x1e5)](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p['ondrop']=q=>this['_onDrop'](q,c,p),g[K(0x23b)](p);}else{let q=document['createElement']('input');f=q;d&&(q[K(0x1f1)]['marginLeft']='10px',q['style']['width']='calc(100%\x20-\x2010px)');q['id']=K(0x226)+c[K(0x1d8)];let r=e[K(0x1d3)];q[K(0x22a)]=c[K(0x1d8)],q[K(0x1d2)]=async t=>{const N=K;if(t[N(0x1e1)]==N(0x211)&&q[N(0x22a)]){const u=this[N(0x230)][0x0][N(0x236)]('rename\x20property\x20name\x20from\x20\x27'+c['name']+'\x27\x20to\x20\x27'+q[N(0x22a)]+'\x27');c[N(0x24a)][N(0x253)](this['_designItems'],c,'all'),c['name']=q['value'],await c[N(0x24a)][N(0x241)](this['_designItems'],c,r[N(0x22a)]),u[N(0x1ec)](),this[N(0x230)][0x0]['instanceServiceContainer'][N(0x1e7)]['extensionManager']['refreshAllExtensions'](this['_designItems']);}},g['appendChild'](q);}}}if(c['name'])e[K(0x1d3)]['id']=c['name'];if(e[K(0x1d3)]instanceof HTMLElement)e['element']['classList']['add'](K(0x21d));if(c[K(0x24d)])e['element']['style']['gridColumn']=K(0x20b);f[K(0x244)][K(0x251)]('property-label'),g[K(0x23b)](e[K(0x1d3)]),this['_div']['appendChild'](g);for(const t of this['_serviceContainer']['propertyGridExtensions']){const u=t['createExtension'](c);u&&(u['element']['setAttribute'](K(0x23f),this['getAttribute']('appearance')??'classic'),u[K(0x1d3)][K(0x1f1)]['gridColumn']=K(0x1f0),this[K(0x1d1)]['push']({'property':c,'extension':u}),this[K(0x24f)]['appendChild'](u[K(0x1d3)]));}this[K(0x1d5)]['set'](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}[w(0x1e5)](c,d,e){const O=w;c[O(0x1ff)](),e[O(0x244)][O(0x22d)]('dragOverProperty');}['_onDragOver'](c,d,e){const P=w;c[P(0x1ff)]();const f=c[P(0x235)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h['dragOverOnProperty'](c,d,this[P(0x230)]);(i??'none')!=P(0x216)?(e[P(0x244)]['add'](P(0x208)),c[P(0x235)]['dropEffect']=i):e[P(0x244)][P(0x22d)]('dragOverProperty');}}const g=c[P(0x235)]['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer'][P(0x223)];if(j){const k=j['dragOverOnProperty'](c,d,this['_designItems']);(k??'none')!='none'?(e[P(0x244)][P(0x251)](P(0x208)),c['dataTransfer']['dropEffect']=k):e['classList'][P(0x22d)]('dragOverProperty');}}}[w(0x200)](c,d,e){const Q=w;c[Q(0x1ff)](),e[Q(0x244)]['remove']('dragOverProperty');const f=c['dataTransfer'][Q(0x233)](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this[Q(0x1dc)]['bindableObjectDragDropService'];i&&i[Q(0x1eb)](c,d,h,this['_designItems']);}const g=c[Q(0x235)][Q(0x233)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[Q(0x1df)](g),k=this[Q(0x1dc)][Q(0x223)];k&&k['dropOnProperty'](c,d,j,this[Q(0x230)]);}}[w(0x250)](c,d){const R=w;let e;if(this[R(0x257)])e=this['propertyContextMenuProvider'](this['_designItems'],d);if(!e)e=d['service']['getContextMenu'](this[R(0x230)],d);for(const {property:f,extension:g}of this[R(0x1d1)])if(f===d)e=[...e??[],...g['getContextMenuItems']?.(this[R(0x230)])??[]];ContextMenu[R(0x1e4)](e,c);}['designItemsChanged'](c){const S=w;this[S(0x230)]=c;for(const {extension:d}of this['_extensions'])d[S(0x23e)](c);for(let e of this[S(0x1d5)]){e[0x1]['editor'][S(0x1f5)](c);}}[w(0x205)](c){const T=w;for(const {extension:d}of this['_extensions'])d[T(0x23e)](c);for(let e of this[T(0x1d5)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this['_propertiesService'],e[0x1]['editor']);}}static[w(0x1e3)](c,d,e,f,g){const U=w;if(e&&e[U(0x1e6)]){let h=f['isSet'](e,d);c['dataset']['valueType']=h;let i=f[U(0x24c)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType['none'])c['style']['background']='',i=f['getUnsetValue'](e,d);else{if(h==ValueType['all'])c['style']['background']='white';else{if(h==ValueType[U(0x1f9)])c['style']['background']=U(0x1da);else{if(h==ValueType[U(0x228)])c[U(0x1f1)]['background']=U(0x1f6);else h==ValueType[U(0x1de)]&&(i=f['getUnsetValue'](e,d),c[U(0x1f1)][U(0x1f7)]='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c['style']['background']='';}}customElements[w(0x213)](w(0x1f4),PropertyGridPropertyList);