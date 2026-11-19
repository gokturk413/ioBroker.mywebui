function b(c,d){c=c-0xd9;const e=a();let f=e[c];return f;}const u=b;function a(){const D=['serviceContainer','disabled','oncontextmenu','append','hidden','class','message','_rows','querySelector','true','node-projects-property-grid-class-bindings','1885008BgyRDr','textContent','Actions\x20for\x20class\x20binding\x20','value','define','onclick','_items','39BYrmIb','title','type','_editing','style','binding','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','input','button','aria-expanded','focus','stringify','map','Save','Edit\x20class\x20binding:\x20','3523724jmrGhD','div','refresh','createElement','Add\x20class\x20binding…','createProperty','114iBZOVv','show','toggle','showNameDialog','_signature','close','Cancel','onclose','bindableObjectNames','config','help','setAttribute','4997902WiCqlI','_add','580836pxvHTq','editBinding','preventDefault','shadowRoot','targetName','length','appendChild','openBindingsEditor','remove','span','required','Add\x20class\x20binding','21052840VXGDFA','trim','_toggle','9EKoUEd','addBinding','84715eaFrhb','join','summary','_service','8272vRCQmB','className','▾\x20Class\x20bindings','\x20Class\x20bindings','dialog','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.'];a=function(){return D;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xf3))/0x1+-parseInt(t(0x108))/0x2*(parseInt(t(0x120))/0x3)+-parseInt(t(0xdf))/0x4+parseInt(t(0x104))/0x5*(-parseInt(t(0xe5))/0x6)+-parseInt(t(0xf1))/0x7+-parseInt(t(0x119))/0x8+-parseInt(t(0x102))/0x9*(-parseInt(t(0xff))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x75294));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();[u(0x115)];['_add'];['_toggle'];[u(0xe9)];[u(0x123)]=![];static [u(0x124)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0xe2)]('div');c['className']='header',this[v(0x101)]=document['createElement']('button'),this[v(0x101)]['type']='button',this['_toggle']['className']=v(0xe7),this['_toggle'][v(0x11a)]=v(0x10a),this[v(0x101)]['setAttribute'](v(0xd9),v(0x117)),this['_toggle'][v(0x11e)]=()=>{const w=v;this['_rows']['hidden']=!this['_rows'][w(0x112)],this[w(0x101)]['textContent']=(this[w(0x115)][w(0x112)]?'▸':'▾')+w(0x10b),this['_toggle']['setAttribute'](w(0xd9),String(!this['_rows'][w(0x112)]));},this[v(0xf2)]=document['createElement']('button'),this['_add'][v(0x122)]=v(0x128),this[v(0xf2)]['textContent']='+',this[v(0xf2)]['title']=v(0xe3),this[v(0xf2)][v(0xf0)]('aria-label',v(0xfe)),this[v(0xf2)]['onclick']=()=>this[v(0x103)](),c[v(0x111)](this[v(0x101)],this['_add']),this['_rows']=document[v(0xe2)]('div'),this['shadowRoot']['append'](c,this['_rows']);}['refresh'](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this[x(0x11f)][x(0xf8)]!==c?.['length'];if(d)this['shadowRoot'][x(0x116)](x(0x10c))?.[x(0xea)]();this['_items']=c??[];const e=this['_items']['length']===0x1?this[x(0x11f)][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0xf2)][x(0x10f)]=!e||!e['serviceContainer'][x(0xee)][x(0xfa)];const g=JSON[x(0xdb)](f[x(0xdc)](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0xe9)]=g,this[x(0x115)]['replaceChildren']();if(!e){const h=document[x(0xe2)](x(0xe0));h['className']=x(0x114),h[x(0x11a)]=x(0x10d),this[x(0x115)]['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j['className']='row';const k=document[x(0xe2)](x(0x128));k['type']=x(0x128),k[x(0x109)]='name',k[x(0x11a)]=i[x(0xf7)],k[x(0x121)]=x(0xde)+i['targetName'],k['onclick']=()=>this[x(0xf4)](e,i);const l=document[x(0xe2)](x(0xfc));l['className']=x(0x106),l['textContent']='←\x20'+(i['expression']||i[x(0xed)]?.[x(0x105)](';')||i['rawValue']||x(0x125)),l[x(0x121)]=l[x(0x11a)],l['ondblclick']=()=>this['editBinding'](e,i);const m=document[x(0xe2)](x(0x128));m[x(0x122)]=x(0x128),m[x(0x11a)]='⋯',m['setAttribute']('aria-label',x(0x11b)+i[x(0xf7)]);const n=o=>{const y=x;o[y(0xf5)](),ContextMenu[y(0xe6)]([{'title':'Edit\x20binding…','action':()=>this[y(0xf4)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x107)][z(0xfb)](e,i),this[z(0xe1)](this[z(0x11f)]);}}],o);};m['onclick']=n,j[x(0x110)]=n,j[x(0x111)](k,l,m),this['_rows'][x(0xf9)](j);}}[u(0x103)](){if(!this['_add']['disabled'])this['showNameDialog'](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.['targetName']){const A=u;if(this['_editing'])return;const f=c[A(0x10e)]['config']['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this[A(0x107)][A(0xe4)](e),[c],d,BindingTarget[A(0x113)]),this[A(0xe1)](this['_items']);}finally{this['_editing']=![];}}}[u(0xe8)](c,d,e=d?.[u(0xf7)]??''){const B=u;if(this[B(0xf6)][B(0x116)]('dialog'))return;const f=document['createElement']('dialog'),g=document[B(0xe2)]('form'),h=document[B(0xe2)]('h3');h[B(0x11a)]=d?'Rename\x20class':B(0xfe);const i=document[B(0xe2)]('label');i['textContent']='Class\x20name';const j=document[B(0xe2)](B(0x127));j[B(0x11c)]=e,j[B(0xfd)]=!![];const k=document[B(0xe2)](B(0xfc));k[B(0x109)]=B(0xef),k['textContent']=B(0x126),i[B(0x111)](j,k);const l=document['createElement']('div');l[B(0x109)]='error',l['setAttribute']('role','alert'),l['hidden']=!![];const m=document['createElement'](B(0xe0));m[B(0x109)]='actions';const n=document[B(0xe2)]('button');n['type']='button',n['textContent']=B(0xeb),n['onclick']=()=>f[B(0xea)]();const o=document[B(0xe2)](B(0x128));o[B(0x122)]='submit',o['textContent']=d?B(0xdd):'Next…',m[B(0x111)](n,o),g['append'](h,i),g['append'](l,m),f['appendChild'](g),this['shadowRoot']['appendChild'](f),f[B(0xec)]=()=>f['remove'](),g['onsubmit']=async p=>{const C=B;p['preventDefault']();const q=j['value'][C(0x100)](),r=this[C(0x107)]['validateName'](c,q,d?.[C(0xf7)]);try{if(r)throw new Error(r);d&&this[C(0x107)]['rename'](c,d,q);f[C(0xea)]();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this['_items']);}catch(s){l['textContent']=s['message'],l[C(0x112)]=![];}},f['showModal'](),j[B(0xda)]();}}customElements[u(0x11d)](u(0x118),PropertyGridClassBindings);