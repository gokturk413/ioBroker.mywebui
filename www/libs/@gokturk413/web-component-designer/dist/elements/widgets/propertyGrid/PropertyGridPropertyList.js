const v=b;function a(){const T=['parse','1400802IGNdyE','onclick','appendChild','labelElement','classList','add','setAttribute','type','682620fcYTTQ','refreshAllExtensions','11810eWgQVL','show','innerHTML','commit','option','label_','11pYIlIl','_propertiesService','addNew_','propertyGridDragDropService','span','4UywsWX','propertyGroupHover','19769964HjrHiF','designerCanvas','7px','318AlOajU',',\x20default:\x20','datalist','_lastClassType',',\x20propertytype:\x20','properties','5463RAFwUQ','marginLeft','10px','editor-control','56936IYdbww','dataTransfer','toggle','readonly','propertyGroupClick','content-wrapper','click','_onDragLeave','_div','background','all','getPropertyNameSuggestions','editor','142525VRnfIm','flex','extensionManager','onkeyup','createElements','isSet','service','onmouseenter','size','_propertyMap','displayName','calc(100%\x20-\x2010px)','_onDragOver','cursor','187397IzMKnv','propertyContextMenuProvider','_onDrop','disabled','value','createElement','dragOverProperty','_designItems','input','dragOverOnProperty','setValue','oncontextmenu','description','element','addNew_input_','center','name','none','style','height','className','indexOf','ondragover','getProperties','removeAllChildnodes','openContextMenu','get','removeAttribute','\x27\x20to\x20\x27','htmlFor','getData','createPropertyGroups','defaultValue','1533iuMLbS','some','dropOnProperty','propertiesService','key','_datalist','clickable','clear','expandOrCollapsePropertyGroups','createEditor','div','parentElement','width','display','focus','preventDefault','alignItems','openGroup','remove','desc','node-projects-property-grid-property-list','Enter','getValue','_shouldCreateElements','_restoreCachedInititalValues','_serviceContainer','20px'];a=function(){return T;};return a();}(function(c,d){const u=b,e=c();while(!![]){try{const f=parseInt(u(0x1de))/0x1*(-parseInt(u(0x1b4))/0x2)+parseInt(u(0x19f))/0x3+-parseInt(u(0x1a7))/0x4+parseInt(u(0x1d0))/0x5*(parseInt(u(0x1b9))/0x6)+parseInt(u(0x1ff))/0x7*(-parseInt(u(0x1c3))/0x8)+parseInt(u(0x1bf))/0x9*(-parseInt(u(0x1a9))/0xa)+parseInt(u(0x1af))/0xb*(parseInt(u(0x1b6))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc45a1));import{BaseCustomWebComponentLazyAppend,css,DomHelper}from'@node-projects/base-custom-webcomponent';import{RefreshMode}from'../../services/propertiesService/IPropertiesService.js';import{ValueType}from'../../services/propertiesService/ValueType.js';import{ContextMenu}from'../../helper/contextMenu/ContextMenu.js';import{PropertyType}from'../../services/propertiesService/PropertyType.js';import{dragDropFormatNameBindingObject,dragDropFormatNamePropertyGrid}from'../../../Constants.js';export class PropertyGridPropertyList extends BaseCustomWebComponentLazyAppend{['_div'];[v(0x1d9)]=new Map();['_serviceContainer'];['_propertiesService'];[v(0x1e5)];[v(0x1bc)];['_addCounter']=0x0;[v(0x1b5)];['propertyGroupClick'];['propertyContextMenuProvider'];get[v(0x202)](){const w=v;return this[w(0x1b0)];}static get[v(0x1f0)](){return css`
    :host{
      display: block;
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
    }
    .content-wrapper {
      padding: .5em;
      display: grid;
      grid-template-columns: 11px minmax(80px, auto) minmax(120px, 1fr);
      align-items: center;
      grid-auto-rows: minmax(24px, auto);
      align-items: center;
    }
    label, input, select {
      display: inline-block;
      color: var(--text-color, white);
      background: transparent;
      margin: 2px 0;
      padding: 0 2px 0 4px;
      width: 110px;
      white-space: nowrap;
    }
    label, .style-label {
      box-sizing: border-box;
      display: inline-block;
      font-size: 13px;
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
    .editor-control, .content-wrapper > input, .content-wrapper > select {
      border: 1px solid var(--input-border-color, #596c7a);
      border-radius: 0;
    }
    .editor-control, input, select {
      height: 24px;
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
      color: #BDBDBD;
    }
    select {
      background: transparent;
    }
    select:focus option {
      color: black;
    }
    .unset-value {
      color: lightslategray
    }
    .unset-value > * {
      color: lightslategray
    }
    .unset-value:focus {
      color: var(--text-color, white)
    }
    .group-header {
      grid-column: 1 / 3;
      font-size: 10px;
      font-family: monospace;
    }
    .group-header[clickable]:hover {
      cursor:pointer;
      color: orange;
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
      color: orange;
      text-decoration: underline;
    }
    .dragOverProperty {
      outline: 2px dashed orange;
      outline-offset: -2px;
    }
    `;}constructor(c){const x=v;super(),this[x(0x19b)](),this[x(0x19c)]=c,this[x(0x1cb)]=document['createElement']('div'),this['_div'][x(0x1f2)]=x(0x1c8),this['shadowRoot']['appendChild'](this['_div']);}['setPropertiesService'](c){const y=v;this['_propertiesService']!=c&&(this['_propertiesService']=c,DomHelper[y(0x1f6)](this['_div']),this['_propertyMap'][y(0x206)]());}async[v(0x1d4)](c){const z=v;if(!this[z(0x19a)](c))return!![];const d=await this['_propertiesService']?.[z(0x1f5)](c);return this['_rebuildElements'](c,d);}[v(0x19a)](c){const A=v;if(!this[A(0x1b0)])return![];if(this[A(0x1d9)][A(0x1d8)]==0x0)return!![];const d=this[A(0x1b0)]['getRefreshMode'](c);return d!==RefreshMode[A(0x1ef)]&&(d!==RefreshMode['fullOnClassChange']||this[A(0x1bc)]!==c['element']['constructor']);}['_rebuildElements'](c,d){const B=v;this['_lastClassType']=c['element']['constructor'],DomHelper[B(0x1f6)](this[B(0x1cb)]),this[B(0x1d9)]['clear']();if(d?.['length']){for(let e of d){if('properties'in e)this['createPropertyGroups'](e);else this['createPropertyEditors'](e);}return!![];}return![];}[v(0x1fd)](c){const C=v;let d=document['createElement'](C(0x1b3));d['addEventListener'](C(0x1c9),()=>{const D=C;this[D(0x207)](c),d[D(0x1a3)][D(0x1c5)]('expanded');}),d[C(0x1ab)]=c[C(0x1ee)]['replaceAll']('\x0a','<br>'),d[C(0x1f2)]='group-header',this[C(0x1cb)]['appendChild'](d);let e=document[C(0x1e3)](C(0x1b3));e['innerHTML']=c[C(0x1ea)]??'',e['className']='group-desc';this['propertyGroupHover']&&(d[C(0x1d7)]=()=>{const E=C;if(this['propertyGroupHover'](c,'name'))d[E(0x1a5)](E(0x205),'');else d['removeAttribute']('clickable');},d[C(0x1a0)]=()=>{const F=C;if(this['propertyGroupClick'])this[F(0x1c7)](c,'name');},e[C(0x1d7)]=()=>{const G=C;if(this['propertyGroupHover'](c,G(0x212)))e[G(0x1a5)]('clickable','');else e[G(0x1f9)](G(0x205));},e['onclick']=()=>{const H=C;if(this['propertyGroupClick'])this['propertyGroupClick'](c,H(0x212));});this['_div'][C(0x1a1)](e);for(const f of c[C(0x1be)])this['createPropertyEditors'](f,!![]);}[v(0x207)](c){const I=v;for(let d of c['properties']){const e=this[I(0x1d9)][I(0x1f8)](d),f=e['labelElement'][I(0x1f0)][I(0x20c)]=='none'?I(0x1d1):'none';if(e[I(0x1cf)][I(0x1eb)])e[I(0x1cf)][I(0x1eb)]['style'][I(0x20c)]=f;if(e[I(0x1a2)])e['labelElement']['style'][I(0x20c)]=f;if(e['isSetElement']['parentElement'])e['isSetElement'][I(0x20a)]['style'][I(0x20c)]=f;}}['createPropertyEditors'](c,d){const J=v;let e,f;if(c['createEditor'])e=c[J(0x208)](c);else e=this['_serviceContainer']['forSomeServicesTillResult']('editorTypesService',g=>g['getEditorForProperty'](c));if(e){let g=document['createElement'](J(0x209));if(d)g['style'][J(0x1c0)]='10px';g[J(0x1f0)][J(0x20b)]=J(0x19d),g[J(0x1f0)]['height']=J(0x19d),g[J(0x1f0)][J(0x20c)]=J(0x1d1),g['style'][J(0x20f)]=J(0x1ed);let h=document['createElement']('div');h['style'][J(0x20b)]=J(0x1b8),h['style'][J(0x1f1)]='7px',h[J(0x1f0)]['border']='1px\x20white\x20solid',h[J(0x1f0)][J(0x1dd)]='pointer';if(c['propertyType']!=PropertyType['complex'])g['appendChild'](h);this[J(0x1cb)]['appendChild'](g);c[J(0x1c6)]!==!![]&&(h[J(0x1e9)]=i=>{i['preventDefault'](),this['openContextMenu'](i,c);},h['onclick']=i=>{i['preventDefault'](),this['openContextMenu'](i,c);});if(c[J(0x1a6)]=='addNew'){let i=e[J(0x1eb)];i['disabled']=!![],i['id']=J(0x1ec)+ ++this['_addCounter'];let j=document[J(0x1e3)](J(0x1e6));f=j;d&&(j['style']['marginLeft']='10px',j['style']['width']=J(0x1db));j[J(0x1e2)]=c['name'],j[J(0x1a6)]='text',j['id']='addNew_label_'+this['_addCounter'],j['onkeyup']=k=>{const K=J;k[K(0x203)]==K(0x214)&&j['value']&&(c['name']=j[K(0x1e2)],j[K(0x1e1)]=!![],i['disabled']=![],i[K(0x20d)]());};if(c[J(0x1d6)][J(0x1ce)]){const k=c['service'][J(0x1ce)](null),l=document[J(0x1e3)](J(0x1bb));l['id']=J(0x1b1)+this['_addCounter']+J(0x204);for(let m of k){const n=document['createElement'](J(0x1ad));n[J(0x1e2)]=m,l['append'](n);}this[J(0x1cb)][J(0x1a1)](l),j['setAttribute']('list',l['id']);}this[J(0x1cb)][J(0x1a1)](j);}else{if(!c['renamable']){let o=document[J(0x1e3)]('label');f=o;if(d)o[J(0x1f0)]['marginLeft']='10px';o[J(0x1fb)]=c['name'],o['textContent']=c[J(0x1da)]??c['name'],o['title']=c['description']??(c['displayName']??c['name'])+'\x20(type:\x20'+c[J(0x1a6)]+(c[J(0x1fe)]?J(0x1ba)+c['defaultValue']:'')+J(0x1bd)+c['propertyType']+')',o['ondragleave']=p=>this[J(0x1ca)](p,c,o),o[J(0x1f4)]=p=>this[J(0x1dc)](p,c,o),o['ondrop']=p=>this[J(0x1e0)](p,c,o),this['_div'][J(0x1a1)](o);}else{let p=document['createElement']('input');f=p;d&&(p[J(0x1f0)]['marginLeft']=J(0x1c1),p['style'][J(0x20b)]=J(0x1db));p['id']=J(0x1ae)+c['name'];let q=e[J(0x1eb)];p[J(0x1e2)]=c['name'],p[J(0x1d3)]=async r=>{const L=J;if(r['key']=='Enter'&&p['value']){const t=this['_designItems'][0x0][L(0x210)]('rename\x20property\x20name\x20from\x20\x27'+c[L(0x1ee)]+L(0x1fa)+p[L(0x1e2)]+'\x27');c['service']['clearValue'](this[L(0x1e5)],c,'all'),c['name']=p[L(0x1e2)],await c[L(0x1d6)][L(0x1e8)](this['_designItems'],c,q[L(0x1e2)]),t[L(0x1ac)](),this['_designItems'][0x0]['instanceServiceContainer'][L(0x1b7)][L(0x1d2)][L(0x1a8)](this[L(0x1e5)]);}},this['_div']['appendChild'](p);}}if(c['name'])e[J(0x1eb)]['id']=c[J(0x1ee)];if(e[J(0x1eb)]instanceof HTMLElement)e[J(0x1eb)]['classList'][J(0x1a4)](J(0x1c2));this['_div']['appendChild'](e[J(0x1eb)]),this['_propertyMap']['set'](c,{'isSetElement':h,'labelElement':f,'editor':e});}}[v(0x1ca)](c,d,e){const M=v;c[M(0x20e)](),e['classList']['remove'](M(0x1e4));}[v(0x1dc)](c,d,e){const N=v;c[N(0x20e)]();const f=c[N(0x1c4)]['types']['indexOf'](dragDropFormatNameBindingObject)>=0x0;if(f){const h=this[N(0x19c)]['bindableObjectDragDropService'];if(h){const i=h['dragOverOnProperty'](c,d,this['_designItems']);(i??'none')!=N(0x1ef)?(e['classList']['add']('dragOverProperty'),c['dataTransfer']['dropEffect']=i):e[N(0x1a3)][N(0x211)]('dragOverProperty');}}const g=c[N(0x1c4)]['types'][N(0x1f3)](dragDropFormatNamePropertyGrid)>=0x0;if(g){const j=this['_serviceContainer']['propertyGridDragDropService'];if(j){const k=j[N(0x1e7)](c,d,this['_designItems']);(k??'none')!=N(0x1ef)?(e['classList']['add'](N(0x1e4)),c[N(0x1c4)]['dropEffect']=k):e['classList']['remove']('dragOverProperty');}}}['_onDrop'](c,d,e){const O=v;c['preventDefault'](),e['classList']['remove']('dragOverProperty');const f=c[O(0x1c4)][O(0x1fc)](dragDropFormatNameBindingObject);if(f){const h=JSON[O(0x19e)](f),i=this[O(0x19c)]['bindableObjectDragDropService'];i&&i[O(0x201)](c,d,h,this[O(0x1e5)]);}const g=c[O(0x1c4)][O(0x1fc)](dragDropFormatNamePropertyGrid);if(g){const j=JSON[O(0x19e)](g),k=this['_serviceContainer'][O(0x1b2)];k&&k['dropOnProperty'](c,d,j,this['_designItems']);}}[v(0x1f7)](c,d){const P=v;let e;if(this['propertyContextMenuProvider'])e=this[P(0x1df)](this[P(0x1e5)],d);if(!e)e=d[P(0x1d6)]['getContextMenu'](this[P(0x1e5)],d);ContextMenu[P(0x1aa)](e,c);}['designItemsChanged'](c){const Q=v;this['_designItems']=c;for(let d of this['_propertyMap']){d[0x1][Q(0x1cf)]['designItemsChanged'](c);}}['refreshForDesignItems'](c){const R=v;for(let d of this[R(0x1d9)]){PropertyGridPropertyList['refreshIsSetElementAndEditorForDesignItems'](d[0x1]['isSetElement'],d[0x0],c,this['_propertiesService'],d[0x1][R(0x1cf)]);}}static['refreshIsSetElementAndEditorForDesignItems'](c,d,e,f,g){const S=v;if(e&&e['length']){let h=f[S(0x1d5)](e,d),i=f[S(0x215)](e,d);c['title']=d['name']+':\x20'+h;if(h==ValueType['none'])c['style'][S(0x1cc)]='',i=f['getUnsetValue'](e,d);else{if(h==ValueType[S(0x1cd)])c['style']['background']='white';else{if(h==ValueType[S(0x200)])c[S(0x1f0)][S(0x1cc)]='gray';else{if(h==ValueType['bound'])c['style']['background']='orange';else h==ValueType['fromStylesheet']&&(i=f['getUnsetValue'](e,d),c[S(0x1f0)][S(0x1cc)]='yellow');}}}g?.['refreshValueWithoutNotification'](h,i);}else c[S(0x1f0)][S(0x1cc)]='';}}function b(c,d){c=c-0x19a;const e=a();let f=e[c];return f;}customElements['define'](v(0x213),PropertyGridPropertyList);