function a(){const D=['className','Next…','querySelector','span','Rename\x20class…','onclick','Remove\x20binding','toggle','_service','openBindingsEditor','div','remove','createProperty','_editing','_add','showModal','Edit\x20binding…','validateName','shadowRoot','close','value','getBindings','▾\x20Class\x20bindings','aria-expanded','253376rMtOzu','type','10ZVuIEJ','Add\x20class\x20binding','serviceContainer','editBinding','label','Edit\x20class\x20binding:\x20','709708wYsRkt','282020OylJMF','Save','559168BQQMws','actions','targetName','_toggle','471004NianPQ','setAttribute','_items','define','name','show','aria-label','createElement','input','button','config','length','371322BYfGYp','bindableObjectNames','hidden','Add\x20class\x20binding…','dialog','3718OGjqTI','showNameDialog','onsubmit','oncontextmenu','15SmgkPI','Rename\x20class','36xInscI','textContent','join','appendChild','refresh','52596OGCqHy','_rows','238PUuQkL'];a=function(){return D;};return a();}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x224))/0x1+parseInt(t(0x22b))/0x2*(-parseInt(t(0x1fa))/0x3)+-parseInt(t(0x227))/0x4+-parseInt(t(0x225))/0x5*(-parseInt(t(0x1fc))/0x6)+parseInt(t(0x203))/0x7*(parseInt(t(0x21c))/0x8)+-parseInt(t(0x1f1))/0x9*(-parseInt(t(0x21e))/0xa)+-parseInt(t(0x1f6))/0xb*(-parseInt(t(0x201))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xde67e));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0x22d)]=[];['_service']=new ClassBindingsPropertiesService();['_rows'];[u(0x212)];['_toggle'];['_signature'];['_editing']=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x204)]='header',this[v(0x22a)]=document['createElement'](v(0x1ee)),this[v(0x22a)][v(0x21d)]='button',this[v(0x22a)][v(0x204)]=v(0x20b),this[v(0x22a)]['textContent']=v(0x21a),this[v(0x22a)][v(0x22c)](v(0x21b),'true'),this[v(0x22a)]['onclick']=()=>{const w=v;this['_rows'][w(0x1f3)]=!this['_rows']['hidden'],this['_toggle'][w(0x1fd)]=(this['_rows']['hidden']?'▸':'▾')+'\x20Class\x20bindings',this[w(0x22a)][w(0x22c)](w(0x21b),String(!this['_rows']['hidden']));},this['_add']=document['createElement']('button'),this['_add'][v(0x21d)]=v(0x1ee),this['_add'][v(0x1fd)]='+',this['_add']['title']=v(0x1f4),this[v(0x212)][v(0x22c)](v(0x1eb),'Add\x20class\x20binding'),this['_add'][v(0x209)]=()=>this['addBinding'](),c['append'](this[v(0x22a)],this[v(0x212)]),this[v(0x202)]=document[v(0x1ec)](v(0x20e)),this['shadowRoot']['append'](c,this['_rows']);}['refresh'](c){const x=u,d=this[x(0x22d)][0x0]!==c?.[0x0]||this[x(0x22d)][x(0x1f0)]!==c?.[x(0x1f0)];if(d)this[x(0x216)][x(0x206)]('dialog')?.[x(0x217)]();this[x(0x22d)]=c??[];const e=this['_items']['length']===0x1?this[x(0x22d)][0x0]:null,f=e?this[x(0x20c)][x(0x219)](e):[];this['_add']['disabled']=!e||!e[x(0x220)][x(0x1ef)][x(0x20d)];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this['_signature']=g,this[x(0x202)]['replaceChildren']();if(!e){const h=document['createElement'](x(0x20e));h[x(0x204)]='message',h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this[x(0x202)]['appendChild'](h);return;}for(const i of f){const j=document[x(0x1ec)](x(0x20e));j['className']='row';const k=document[x(0x1ec)](x(0x1ee));k[x(0x21d)]='button',k['className']=x(0x1e9),k['textContent']=i[x(0x229)],k['title']=x(0x223)+i[x(0x229)],k[x(0x209)]=()=>this['editBinding'](e,i);const l=document['createElement']('span');l[x(0x204)]='summary',l['textContent']='←\x20'+(i['expression']||i[x(0x1f2)]?.[x(0x1fe)](';')||i['rawValue']||'binding'),l['title']=l[x(0x1fd)],l['ondblclick']=()=>this[x(0x221)](e,i);const m=document[x(0x1ec)](x(0x1ee));m[x(0x21d)]='button',m[x(0x1fd)]='⋯',m['setAttribute']('aria-label','Actions\x20for\x20class\x20binding\x20'+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu[y(0x1ea)]([{'title':y(0x214),'action':()=>this['editBinding'](e,i)},{'title':y(0x208),'action':()=>this['showNameDialog'](e,i)},{'title':y(0x20a),'action':()=>{const z=y;this['_service']['remove'](e,i),this[z(0x200)](this[z(0x22d)]);}}],o);};m[x(0x209)]=n,j[x(0x1f9)]=n,j['append'](k,l,m),this[x(0x202)][x(0x1ff)](j);}}['addBinding'](){if(!this['_add']['disabled'])this['showNameDialog'](this['_items'][0x0]);}async[u(0x221)](c,d,e=d?.['targetName']){const A=u;if(this[A(0x211)])return;const f=c[A(0x220)]['config']['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this[A(0x20c)][A(0x210)](e),[c],d,BindingTarget['class']),this['refresh'](this['_items']);}finally{this[A(0x211)]=![];}}}[u(0x1f7)](c,d,e=d?.[u(0x229)]??''){const B=u;if(this[B(0x216)][B(0x206)](B(0x1f5)))return;const f=document['createElement'](B(0x1f5)),g=document[B(0x1ec)]('form'),h=document[B(0x1ec)]('h3');h[B(0x1fd)]=d?B(0x1fb):B(0x21f);const i=document['createElement'](B(0x222));i['textContent']='Class\x20name';const j=document[B(0x1ec)](B(0x1ed));j[B(0x218)]=e,j['required']=!![];const k=document['createElement'](B(0x207));k['className']='help',k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i['append'](j,k);const l=document['createElement'](B(0x20e));l[B(0x204)]='error',l['setAttribute']('role','alert'),l[B(0x1f3)]=!![];const m=document['createElement'](B(0x20e));m[B(0x204)]=B(0x228);const n=document[B(0x1ec)]('button');n['type']='button',n['textContent']='Cancel',n[B(0x209)]=()=>f[B(0x217)]();const o=document['createElement'](B(0x1ee));o['type']='submit',o[B(0x1fd)]=d?B(0x226):B(0x205),m['append'](n,o),g['append'](h,i),g['append'](l,m),f['appendChild'](g),this[B(0x216)]['appendChild'](f),f['onclose']=()=>f[B(0x20f)](),g[B(0x1f8)]=async p=>{const C=B;p['preventDefault']();const q=j[C(0x218)]['trim'](),r=this['_service'][C(0x215)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this['_service']['rename'](c,d,q);f[C(0x217)]();if(!d)await this[C(0x221)](c,undefined,q);this[C(0x200)](this['_items']);}catch(s){l['textContent']=s['message'],l['hidden']=![];}},f[B(0x213)](),j['focus']();}}function b(c,d){c=c-0x1e9;const e=a();let f=e[c];return f;}customElements[u(0x22e)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);