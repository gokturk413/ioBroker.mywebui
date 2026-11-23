const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xce))/0x1*(parseInt(v(0xe9))/0x2)+parseInt(v(0xbe))/0x3*(parseInt(v(0xfa))/0x4)+-parseInt(v(0xe0))/0x5*(parseInt(v(0x105))/0x6)+-parseInt(v(0xfd))/0x7*(parseInt(v(0xf5))/0x8)+-parseInt(v(0x10b))/0x9*(-parseInt(v(0x106))/0xa)+parseInt(v(0xc6))/0xb+-parseInt(v(0x124))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbfe3e));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';function a(){const T=['classList','10px','innerHTML','rowElement','rename\x20property\x20name\x20from\x20\x27','_propertyMap','bound','option','focus','propertyGroupClick','commit','className','borderRadius','orange','appearance','hideLabel','removeAttribute','service','designerCanvas','forSomeServicesTillResult',',\x20propertytype:\x20','clickable','hide-label','3101532bxTwQT','disabled','fullOnClassChange','_propertiesService','bindableObjectDragDropService','hidden','property-status','node-projects-property-grid-property-list','9295451ukMvMx','refreshForDesignItems','style','content-wrapper','getUnsetValue','refreshIsSetElementAndEditorForDesignItems','dropOnProperty','defaultValue','766775BIWbqV','name','editor-control','property-actions','type','yellow','ondrop','propertyGroupHover','append','marginLeft','onclick','_addCounter','Enter','_extensions','getAttribute','white','valueType','_serviceContainer','235FaeyNX','refresh','renamable','length','20px','background','createPropertyGroups','properties','size','2vIGXSU','group-header','alignItems','propertyGridDragDropService','gridColumn','fromStylesheet','set','instanceServiceContainer','dataTransfer','span','getValue','createPropertyEditors','10616xONOdY','gray',',\x20default:\x20','propertyEditorTypesService','editor','4KBmNAN','key','createEditor','6755cdVMYX','desc','12px','setValue','2\x20/\x204','isSet','removeAllChildnodes','define','31224UAQVNp','580ORSlWD','_designItems','preventDefault','input','remove','128133MNCnJc','dragOverProperty','dragOverOnProperty','show','group-desc','border','propertiesService','openGroup','add','expanded','clear','getProperties','setPropertiesService','_rebuildElements','attributeChangedCallback','propertyGridExtensions','htmlFor','toggle','_shouldCreateElements','all','setAttribute','appendChild','getContextMenuItems','createElement','propertyType','13923372JrqNgj','textContent','label','_onDrop','1\x20/\x20-1','calc(100%\x20-\x2010px)','width','aria-label','_div','_onDragOver','click','div','openContextMenu','button','classic','value','text','cursor','Actions\x20for\x20','element','expandOrCollapsePropertyGroups','onkeyup'];a=function(){return T;};return a();}function b(c,d){c=c-0xbb;const e=a();let f=e[c];return f;}import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{static ['observedAttributes']=['appearance'];[w(0x119)](){const x=w;for(const {extension:c}of this['_extensions'])c['element']['setAttribute']('appearance',this[x(0xdc)](x(0x148))??x(0x132));}[w(0x12c)];['_propertyMap']=new Map();[w(0xdf)];['_propertiesService'];[w(0x107)];['_lastClassType'];[w(0xd9)]=0x0;[w(0xdb)]=[];[w(0xd5)];['propertyGroupClick'];['propertyContextMenuProvider'];get[w(0x111)](){return this['_propertiesService'];}static get['style'](){return css`
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
    `;}constructor(c){const y=w;super(),this['_restoreCachedInititalValues'](),this[y(0xdf)]=c,this[y(0x12c)]=document[y(0x122)](y(0x12f)),this['_div']['className']=y(0xc9),this['shadowRoot']['appendChild'](this[y(0x12c)]);}[w(0x117)](c){const z=w;if(this[z(0xc1)]!=c){this[z(0xc1)]=c,DomHelper[z(0x103)](this[z(0x12c)]),this[z(0x13f)][z(0x115)]();for(const {extension:d}of this[z(0xdb)])d['dispose']?.();this['_extensions']=[];}}async['createElements'](c){const A=w;if(!this['_shouldCreateElements'](c))return!![];const d=await this[A(0xc1)]?.[A(0x116)](c);return this[A(0x118)](c,d);}[w(0x11d)](c){const B=w;if(!this['_propertiesService'])return![];if(this[B(0x13f)][B(0xe8)]==0x0)return!![];const d=this[B(0xc1)]['getRefreshMode'](c);return d!==RefreshMode['none']&&(d!==RefreshMode[B(0xc0)]||this['_lastClassType']!==c[B(0x137)]['constructor']);}['_rebuildElements'](c,d){const C=w;this['_lastClassType']=c['element']['constructor'],DomHelper[C(0x103)](this['_div']),this[C(0x13f)]['clear']();for(const {extension:e}of this['_extensions'])e['dispose']?.();this['_extensions']=[];if(d?.['length']){for(let f of d){if(C(0xe7)in f)this['createPropertyGroups'](f);else this[C(0xf4)](f);}return!![];}return![];}[w(0xe6)](c){const D=w;let d=document[D(0x122)](D(0xf2));d['addEventListener'](D(0x12e),()=>{const E=D;this[E(0x138)](c),d['classList'][E(0x11c)](E(0x114));}),d[D(0x13c)]=c[D(0xcf)]['replaceAll']('\x0a','<br>'),d[D(0x145)]=D(0xea),this['_div']['appendChild'](d);let e=document['createElement']('span');e[D(0x13c)]=c['description']??'',e['className']=D(0x10f);this[D(0xd5)]&&(d['onmouseenter']=()=>{const F=D;if(this[F(0xd5)](c,F(0xcf)))d[F(0x11f)](F(0xbc),'');else d[F(0x14a)](F(0xbc));},d[D(0xd8)]=()=>{const G=D;if(this[G(0x143)])this['propertyGroupClick'](c,G(0xcf));},e['onmouseenter']=()=>{if(this['propertyGroupHover'](c,'desc'))e['setAttribute']('clickable','');else e['removeAttribute']('clickable');},e['onclick']=()=>{const H=D;if(this[H(0x143)])this['propertyGroupClick'](c,H(0xfe));});this['_div'][D(0x120)](e);for(const f of c[D(0xe7)])this[D(0xf4)](f,!![]);}['expandOrCollapsePropertyGroups'](c){const I=w;for(let d of c['properties']){const e=this['_propertyMap']['get'](d);e['rowElement'][I(0xc3)]=!e[I(0x13d)]['hidden'];for(const {property:f,extension:g}of this['_extensions'])if(f===d)g['element']['hidden']=e['rowElement'][I(0xc3)];}}[w(0xf4)](c,d){const J=w;let e,f;if(c['createEditor'])e=c[J(0xfc)](c);else e=this[J(0xdf)][J(0x14d)](J(0xf8),g=>g['getEditorForProperty'](c));if(e){const g=document['createElement']('div');g['className']='property-row';if(c[J(0x149)])g[J(0x13a)]['add'](J(0xbd));let h=document['createElement']('div');h[J(0x145)]=J(0xd1);if(d)h['style']['marginLeft']='10px';h[J(0xc8)][J(0x12a)]=J(0xe4),h['style']['height']=J(0xe4),h['style']['display']='flex',h['style'][J(0xeb)]='center';let i=document['createElement'](J(0x131));i['type']=J(0x131),i[J(0x145)]=J(0xc4),i[J(0x125)]='⋯',i[J(0x11f)](J(0x12b),J(0x136)+(c['displayName']??c['name'])),i[J(0xbf)]=c['readonly']===!![],i[J(0xc8)]['width']='12px',i['style']['height']=J(0xff),i['style'][J(0x146)]='2px',i['style'][J(0x110)]='1px\x20white\x20solid',i[J(0xc8)][J(0x135)]='pointer';if(c['propertyType']!=PropertyType['complex'])h[J(0x120)](i);g['appendChild'](h);c['readonly']!==!![]&&(i['oncontextmenu']=j=>{j['preventDefault'](),this['openContextMenu'](j,c);},i[J(0xd8)]=j=>{j['preventDefault'](),this['openContextMenu'](j,c);});if(c['type']=='addNew'){let j=e['element'];j[J(0xbf)]=!![],j['id']='addNew_input_'+ ++this[J(0xd9)];let k=document['createElement'](J(0x109));f=k;d&&(k[J(0xc8)][J(0xd7)]='10px',k[J(0xc8)][J(0x12a)]='calc(100%\x20-\x2010px)');k['value']=c[J(0xcf)],k[J(0xd2)]=J(0x134),k['id']='addNew_label_'+this[J(0xd9)],k['onkeyup']=l=>{const K=J;l['key']==K(0xda)&&k['value']&&(c['name']=k[K(0x133)],k[K(0xbf)]=!![],j['disabled']=![],j[K(0x142)]());};if(c[J(0x14b)]['getPropertyNameSuggestions']){const l=c['service']['getPropertyNameSuggestions'](null),m=document['createElement']('datalist');m['id']='addNew_'+this['_addCounter']+'_datalist';for(let n of l){const o=document[J(0x122)](J(0x141));o[J(0x133)]=n,m[J(0xd6)](o);}g['appendChild'](m),k[J(0x11f)]('list',m['id']);}g[J(0x120)](k);}else{if(c[J(0x149)])f=document[J(0x122)]('span');else{if(!c[J(0xe2)]){let p=document[J(0x122)](J(0x126));f=p;if(d)p['style']['marginLeft']=J(0x13b);p[J(0x11b)]=c['name'],p['textContent']=c['displayName']??c['name'],p['title']=c['description']??(c['displayName']??c['name'])+'\x20(type:\x20'+c[J(0xd2)]+(c['defaultValue']?J(0xf7)+c[J(0xcd)]:'')+J(0xbb)+c[J(0x123)]+')',p['ondragleave']=q=>this['_onDragLeave'](q,c,p),p['ondragover']=q=>this['_onDragOver'](q,c,p),p[J(0xd4)]=q=>this['_onDrop'](q,c,p),g[J(0x120)](p);}else{let q=document[J(0x122)](J(0x109));f=q;d&&(q[J(0xc8)]['marginLeft']='10px',q['style'][J(0x12a)]=J(0x129));q['id']='label_'+c['name'];let r=e[J(0x137)];q[J(0x133)]=c[J(0xcf)],q[J(0x139)]=async t=>{const L=J;if(t[L(0xfb)]=='Enter'&&q['value']){const u=this[L(0x107)][0x0][L(0x112)](L(0x13e)+c['name']+'\x27\x20to\x20\x27'+q[L(0x133)]+'\x27');c['service']['clearValue'](this[L(0x107)],c,L(0x11e)),c['name']=q[L(0x133)],await c[L(0x14b)][L(0x100)](this['_designItems'],c,r[L(0x133)]),u[L(0x144)](),this[L(0x107)][0x0][L(0xf0)][L(0x14c)]['extensionManager']['refreshAllExtensions'](this[L(0x107)]);}},g[J(0x120)](q);}}}if(c['name'])e['element']['id']=c[J(0xcf)];if(e['element']instanceof HTMLElement)e[J(0x137)]['classList']['add'](J(0xd0));if(c['hideLabel'])e['element']['style'][J(0xed)]=J(0x101);f['classList'][J(0x113)]('property-label'),g[J(0x120)](e[J(0x137)]),this['_div'][J(0x120)](g);for(const t of this['_serviceContainer'][J(0x11a)]){const u=t['createExtension'](c);u&&(u['element']['setAttribute'](J(0x148),this['getAttribute'](J(0x148))??'classic'),u['element']['style'][J(0xed)]=J(0x128),this['_extensions']['push']({'property':c,'extension':u}),this['_div'][J(0x120)](u[J(0x137)]));}this[J(0x13f)][J(0xef)](c,{'isSetElement':i,'labelElement':f,'editor':e,'rowElement':g});}}['_onDragLeave'](c,d,e){const M=w;c['preventDefault'](),e['classList'][M(0x10a)](M(0x10c));}[w(0x12d)](c,d,e){const N=w;c[N(0x108)]();const f=c['dataTransfer']['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this['_serviceContainer']['bindableObjectDragDropService'];if(h){const i=h['dragOverOnProperty'](c,d,this[N(0x107)]);(i??'none')!='none'?(e['classList'][N(0x113)](N(0x10c)),c['dataTransfer']['dropEffect']=i):e['classList']['remove'](N(0x10c));}}const g=c[N(0xf1)]['types']['indexOf'](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this[N(0xdf)][N(0xec)];if(j){const k=j[N(0x10d)](c,d,this[N(0x107)]);(k??'none')!='none'?(e['classList'][N(0x113)]('dragOverProperty'),c['dataTransfer']['dropEffect']=k):e[N(0x13a)]['remove']('dragOverProperty');}}}[w(0x127)](c,d,e){const O=w;c[O(0x108)](),e[O(0x13a)][O(0x10a)]('dragOverProperty');const f=c[O(0xf1)]['getData'](dragDropFormatNameBindingObject);if(f){const h=JSON['parse'](f),i=this['_serviceContainer'][O(0xc2)];i&&i[O(0xcc)](c,d,h,this[O(0x107)]);}const g=c[O(0xf1)]['getData'](dragDropFormatNamePropertyGrid);if(g){const j=JSON['parse'](g),k=this['_serviceContainer']['propertyGridDragDropService'];k&&k[O(0xcc)](c,d,j,this['_designItems']);}}[w(0x130)](c,d){const P=w;let e;if(this['propertyContextMenuProvider'])e=this['propertyContextMenuProvider'](this[P(0x107)],d);if(!e)e=d['service']['getContextMenu'](this['_designItems'],d);for(const {property:f,extension:g}of this[P(0xdb)])if(f===d)e=[...e??[],...g[P(0x121)]?.(this[P(0x107)])??[]];ContextMenu[P(0x10e)](e,c);}['designItemsChanged'](c){const Q=w;this[Q(0x107)]=c;for(const {extension:d}of this['_extensions'])d[Q(0xe1)](c);for(let e of this['_propertyMap']){e[0x1][Q(0xf9)]['designItemsChanged'](c);}}[w(0xc7)](c){const R=w;for(const {extension:d}of this['_extensions'])d[R(0xe1)](c);for(let e of this[R(0x13f)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](e[0x1]['isSetElement'],e[0x0],c,this[R(0xc1)],e[0x1][R(0xf9)]);}}static[w(0xcb)](c,d,e,f,g){const S=w;if(e&&e[S(0xe3)]){let h=f[S(0x102)](e,d);c['dataset'][S(0xde)]=h;let i=f[S(0xf3)](e,d);c['title']=d[S(0xcf)]+':\x20'+h;if(h==ValueType['none'])c['style']['background']='',i=f[S(0xca)](e,d);else{if(h==ValueType[S(0x11e)])c['style']['background']=S(0xdd);else{if(h==ValueType['some'])c['style'][S(0xe5)]=S(0xf6);else{if(h==ValueType[S(0x140)])c[S(0xc8)][S(0xe5)]=S(0x147);else h==ValueType[S(0xee)]&&(i=f[S(0xca)](e,d),c[S(0xc8)]['background']=S(0xd3));}}}g?.['refreshValueWithoutNotification'](h,i);}else c[S(0xc8)][S(0xe5)]='';}}customElements[w(0x104)](w(0xc5),PropertyGridPropertyList);