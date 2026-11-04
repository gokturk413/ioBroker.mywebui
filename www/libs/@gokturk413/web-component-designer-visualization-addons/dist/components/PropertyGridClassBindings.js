const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x225))/0x1*(parseInt(t(0x22a))/0x2)+parseInt(t(0x232))/0x3*(-parseInt(t(0x20d))/0x4)+-parseInt(t(0x202))/0x5*(parseInt(t(0x221))/0x6)+parseInt(t(0x1ff))/0x7+-parseInt(t(0x21a))/0x8+parseInt(t(0x223))/0x9*(parseInt(t(0x201))/0xa)+parseInt(t(0x20f))/0xb*(parseInt(t(0x1fe))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2a045));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';function b(c,d){c=c-0x1f1;const e=a();let f=e[c];return f;}import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x206)]=new ClassBindingsPropertiesService();[u(0x231)];[u(0x21c)];[u(0x235)];[u(0x1f4)];['_editing']=![];static [u(0x1fa)]=css`
    :host { display: block; grid-column: 1 / -1; min-width: 0; color: var(--wcd-color-text, white); }
    :host([hidden]) { display: none !important; }
    .header, .row { display: flex; align-items: center; gap: 8px; min-height: 28px; }
    .row { padding-left: 16px; }
    button { font: inherit; color: inherit; background: transparent; border: none; cursor: pointer; padding: 4px; }
    button:focus-visible { outline: 2px solid var(--wcd-color-accent, #e91e63); outline-offset: -2px; }
    button:disabled { opacity: .5; cursor: default; }
    .toggle, .name { text-align: left; }
    .toggle { flex: 1; }
    .name { flex: 0 1 45%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .summary { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--wcd-color-text-muted, #bdbdbd); }
    .message { padding: 4px 16px; font-size: 12px; color: var(--wcd-color-text-muted, #bdbdbd); }
    dialog { box-sizing: border-box; width: min(420px, calc(100vw - 32px)); color: inherit; background: var(--wcd-property-grid-background, var(--wcd-color-surface-raised, #2f3545)); border: 1px solid var(--wcd-color-border, #596c7a); padding: 16px; }
    dialog::backdrop { background: #0006; }
    form, label { display: grid; gap: 8px; }
    form { gap: 16px; }
    h3 { font: inherit; font-weight: 600; margin: 0; }
    input { box-sizing: border-box; width: 100%; padding: 6px; font: inherit; color: inherit; background: transparent; border: 1px solid var(--wcd-color-border, #596c7a); }
    .help { font-size: 12px; color: var(--wcd-color-text-muted, #bdbdbd); }
    .error { color: var(--wcd-color-error, #ff8a80); font-size: 12px; }
    .actions { display: flex; justify-content: flex-end; gap: 8px; }
    .actions button { border: 1px solid var(--wcd-color-border, #596c7a); padding: 6px 12px; }
    [hidden] { display: none !important; }
    :host([appearance="modern"]) { color: var(--_wcd-pg-text); font-size: 13px; }
    :host([appearance="modern"]) .header {
      padding: 5px 12px;
      min-height: 38px;
      background: var(--_wcd-pg-raised);
      border-bottom: 1px solid var(--_wcd-pg-border);
    }
    :host([appearance="modern"]) .toggle { font-weight: 600; }
    :host([appearance="modern"]) .row {
      display: grid;
      grid-template-columns: minmax(0, .85fr) minmax(0, 1fr) 28px;
      padding: 5px 12px 5px 24px;
      min-height: 38px;
      border-bottom: 1px solid var(--_wcd-pg-border);
    }
    :host([appearance="modern"]) .row:hover,
    :host([appearance="modern"]) .row:focus-within { background: var(--_wcd-pg-hover); }
    :host([appearance="modern"]) .summary { color: var(--_wcd-pg-muted); }
    :host([appearance="modern"]) button { border-radius: 4px; }
    :host([appearance="modern"]) button:hover { background: var(--_wcd-pg-hover); }
    :host([appearance="modern"]) button:focus-visible { outline-color: var(--wcd-color-focus, var(--_wcd-pg-accent)); }
    :host([appearance="modern"]) dialog {
      padding: 24px;
      border-radius: 10px;
      color: var(--_wcd-pg-text);
      background: var(--_wcd-pg-surface);
      border-color: var(--_wcd-pg-border);
      box-shadow: 0 16px 64px #0003;
    }
    :host([appearance="modern"]) h3 { font-size: 16px; }
    :host([appearance="modern"]) input { border-radius: 5px; border-color: var(--_wcd-pg-border); padding: 8px; }
    :host([appearance="modern"]) input:focus-visible { outline: 2px solid var(--wcd-color-focus, var(--_wcd-pg-accent)); outline-offset: 1px; }
    :host([appearance="modern"]) .help { color: var(--_wcd-pg-muted); }
    :host([appearance="modern"]) .actions button { border-color: var(--_wcd-pg-border); }
    :host([appearance="modern"]) .actions button[type="submit"] {
      background: var(--_wcd-pg-accent);
      color: var(--wcd-color-accent-text, light-dark(white, #162b48));
      border-color: transparent;
    }
  `;constructor(){const v=u;super();const c=document[v(0x218)](v(0x1f5));c['className']=v(0x21e),this['_toggle']=document[v(0x218)](v(0x209)),this['_toggle']['type']=v(0x209),this[v(0x235)][v(0x205)]=v(0x234),this[v(0x235)][v(0x22f)]='▾\x20Class\x20bindings',this[v(0x235)][v(0x1fd)](v(0x22c),'true'),this['_toggle']['onclick']=()=>{const w=v;this[w(0x231)][w(0x213)]=!this[w(0x231)]['hidden'],this['_toggle']['textContent']=(this['_rows']['hidden']?'▸':'▾')+w(0x208),this[w(0x235)][w(0x1fd)](w(0x22c),String(!this[w(0x231)]['hidden']));},this['_add']=document['createElement'](v(0x209)),this[v(0x21c)][v(0x200)]=v(0x209),this[v(0x21c)][v(0x22f)]='+',this[v(0x21c)][v(0x1f6)]=v(0x21d),this['_add'][v(0x1fd)](v(0x233),v(0x1f9)),this['_add']['onclick']=()=>this[v(0x236)](),c['append'](this[v(0x235)],this[v(0x21c)]),this[v(0x231)]=document[v(0x218)]('div'),this[v(0x228)]['append'](c,this['_rows']);}['refresh'](c){const x=u,d=this[x(0x22e)][0x0]!==c?.[0x0]||this[x(0x22e)][x(0x20c)]!==c?.['length'];if(d)this['shadowRoot'][x(0x21f)]('dialog')?.['close']();this['_items']=c??[];const e=this['_items']['length']===0x1?this['_items'][0x0]:null,f=e?this[x(0x206)][x(0x22d)](e):[];this['_add']['disabled']=!e||!e['serviceContainer']['config']['openBindingsEditor'];const g=JSON[x(0x203)](f[x(0x216)](({service:h,...i})=>i));if(!d&&g===this[x(0x1f4)])return;this[x(0x1f4)]=g,this[x(0x231)][x(0x1f8)]();if(!e){const h=document[x(0x218)](x(0x1f5));h[x(0x205)]=x(0x20b),h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this[x(0x231)]['appendChild'](h);return;}for(const i of f){const j=document[x(0x218)](x(0x1f5));j['className']=x(0x215);const k=document['createElement']('button');k['type']=x(0x209),k[x(0x205)]=x(0x238),k[x(0x22f)]=i['targetName'],k[x(0x1f6)]=x(0x237)+i[x(0x219)],k['onclick']=()=>this[x(0x1f7)](e,i);const l=document[x(0x218)]('span');l['className']='summary',l['textContent']='←\x20'+(i[x(0x1fb)]||i['bindableObjectNames']?.[x(0x23b)](';')||i['rawValue']||x(0x1f1)),l['title']=l[x(0x22f)],l['ondblclick']=()=>this[x(0x1f7)](e,i);const m=document[x(0x218)]('button');m['type']='button',m[x(0x22f)]='⋯',m[x(0x1fd)]('aria-label',x(0x210)+i['targetName']);const n=o=>{const y=x;o[y(0x222)](),ContextMenu[y(0x211)]([{'title':y(0x204),'action':()=>this['editBinding'](e,i)},{'title':'Rename\x20class…','action':()=>this[y(0x230)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x206)][z(0x212)](e,i),this['refresh'](this[z(0x22e)]);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this['_rows'][x(0x214)](j);}}[u(0x236)](){const A=u;if(!this[A(0x21c)][A(0x229)])this['showNameDialog'](this['_items'][0x0]);}async[u(0x1f7)](c,d,e=d?.['targetName']){const B=u;if(this['_editing'])return;const f=c['serviceContainer'][B(0x22b)]['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this['_service']['createProperty'](e),[c],d,BindingTarget['class']),this['refresh'](this['_items']);}finally{this['_editing']=![];}}}[u(0x230)](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x228)]['querySelector']('dialog'))return;const f=document[C(0x218)]('dialog'),g=document[C(0x218)]('form'),h=document['createElement']('h3');h[C(0x22f)]=d?C(0x224):C(0x1f9);const i=document['createElement']('label');i[C(0x22f)]='Class\x20name';const j=document['createElement']('input');j['value']=e,j[C(0x239)]=!![];const k=document['createElement'](C(0x227));k['className']='help',k[C(0x22f)]='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x1f3)](j,k);const l=document[C(0x218)]('div');l['className']='error',l[C(0x1fd)](C(0x217),C(0x23a)),l['hidden']=!![];const m=document[C(0x218)](C(0x1f5));m['className']=C(0x226);const n=document[C(0x218)](C(0x209));n['type']=C(0x209),n['textContent']='Cancel',n['onclick']=()=>f['close']();const o=document[C(0x218)]('button');o[C(0x200)]='submit',o[C(0x22f)]=d?C(0x1f2):C(0x207),m[C(0x1f3)](n,o),g['append'](h,i),g['append'](l,m),f['appendChild'](g),this[C(0x228)][C(0x214)](f),f[C(0x1fc)]=()=>f[C(0x212)](),g['onsubmit']=async p=>{const D=C;p['preventDefault']();const q=j['value']['trim'](),r=this['_service'][D(0x20e)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x206)][D(0x21b)](c,d,q);f['close']();if(!d)await this[D(0x1f7)](c,undefined,q);this['refresh'](this['_items']);}catch(s){l['textContent']=s['message'],l[D(0x213)]=![];}},f['showModal'](),j[C(0x220)]();}}function a(){const E=['className','_service','Next…','\x20Class\x20bindings','button','node-projects-property-grid-class-bindings','message','length','405568EyUmbC','validateName','2914571asdeTW','Actions\x20for\x20class\x20binding\x20','show','remove','hidden','appendChild','row','map','role','createElement','targetName','1584088XhcKwc','rename','_add','Add\x20class\x20binding…','header','querySelector','focus','4146lDxHsa','preventDefault','2014245tjbmaH','Rename\x20class','1DMGmXT','actions','span','shadowRoot','disabled','428438Nqifqz','config','aria-expanded','getBindings','_items','textContent','showNameDialog','_rows','3DMiHMO','aria-label','toggle','_toggle','addBinding','Edit\x20class\x20binding:\x20','name','required','alert','join','binding','Save','append','_signature','div','title','editBinding','replaceChildren','Add\x20class\x20binding','style','expression','onclose','setAttribute','24cKGjJv','22183ljkCyI','type','10JVuOTg','515UmMdxi','stringify','Edit\x20binding…'];a=function(){return E;};return a();}customElements['define'](u(0x20a),PropertyGridClassBindings);