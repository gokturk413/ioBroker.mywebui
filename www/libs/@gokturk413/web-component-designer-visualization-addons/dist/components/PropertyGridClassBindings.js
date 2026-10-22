const u=b;function b(c,d){c=c-0x194;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x19d))/0x1+-parseInt(t(0x1d5))/0x2*(-parseInt(t(0x1cc))/0x3)+parseInt(t(0x19f))/0x4*(parseInt(t(0x1b9))/0x5)+-parseInt(t(0x1a8))/0x6*(parseInt(t(0x1c8))/0x7)+-parseInt(t(0x1c9))/0x8+-parseInt(t(0x194))/0x9*(parseInt(t(0x1ac))/0xa)+parseInt(t(0x195))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x362cc));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x198)]=new ClassBindingsPropertiesService();[u(0x1d7)];['_add'];['_toggle'];['_signature'];[u(0x1d9)]=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x1c0)]='header',this['_toggle']=document[v(0x1d1)]('button'),this[v(0x1d4)]['type']='button',this['_toggle'][v(0x1c0)]='toggle',this[v(0x1d4)][v(0x1b0)]=v(0x1b6),this[v(0x1d4)]['setAttribute']('aria-expanded','true'),this[v(0x1d4)][v(0x1bc)]=()=>{const w=v;this['_rows']['hidden']=!this['_rows'][w(0x1de)],this['_toggle'][w(0x1b0)]=(this[w(0x1d7)]['hidden']?'▸':'▾')+w(0x1bd),this['_toggle'][w(0x1a3)]('aria-expanded',String(!this[w(0x1d7)][w(0x1de)]));},this['_add']=document['createElement'](v(0x1d8)),this[v(0x1bf)]['type']='button',this[v(0x1bf)][v(0x1b0)]='+',this[v(0x1bf)][v(0x1c2)]=v(0x1c1),this[v(0x1bf)]['setAttribute']('aria-label','Add\x20class\x20binding'),this[v(0x1bf)][v(0x1bc)]=()=>this['addBinding'](),c[v(0x1dc)](this[v(0x1d4)],this['_add']),this[v(0x1d7)]=document['createElement']('div'),this[v(0x1a5)]['append'](c,this[v(0x1d7)]);}['refresh'](c){const x=u,d=this[x(0x19c)][0x0]!==c?.[0x0]||this[x(0x19c)]['length']!==c?.['length'];if(d)this['shadowRoot']['querySelector']('dialog')?.[x(0x1ae)]();this[x(0x19c)]=c??[];const e=this['_items']['length']===0x1?this['_items'][0x0]:null,f=e?this[x(0x198)][x(0x1b4)](e):[];this['_add'][x(0x1a2)]=!e||!e[x(0x1a9)]['config'][x(0x1ad)];const g=JSON['stringify'](f[x(0x1b5)](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0x1c6)]=g,this['_rows'][x(0x1ba)]();if(!e){const h=document['createElement']('div');h['className']='message',h['textContent']=x(0x1aa),this['_rows']['appendChild'](h);return;}for(const i of f){const j=document['createElement'](x(0x1b3));j['className']=x(0x1df);const k=document['createElement']('button');k[x(0x1cf)]=x(0x1d8),k[x(0x1c0)]='name',k['textContent']=i[x(0x19b)],k['title']=x(0x1c7)+i[x(0x19b)],k['onclick']=()=>this[x(0x1b8)](e,i);const l=document['createElement']('span');l[x(0x1c0)]=x(0x1d3),l['textContent']='←\x20'+(i[x(0x1d2)]||i[x(0x1ca)]?.[x(0x1da)](';')||i[x(0x1b1)]||'binding'),l['title']=l[x(0x1b0)],l[x(0x1be)]=()=>this['editBinding'](e,i);const m=document[x(0x1d1)](x(0x1d8));m[x(0x1cf)]=x(0x1d8),m['textContent']='⋯',m[x(0x1a3)]('aria-label','Actions\x20for\x20class\x20binding\x20'+i[x(0x19b)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':'Edit\x20binding…','action':()=>this[y(0x1b8)](e,i)},{'title':y(0x19e),'action':()=>this[y(0x1c4)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this['_service'][z(0x1a4)](e,i),this[z(0x1ab)](this[z(0x19c)]);}}],o);};m[x(0x1bc)]=n,j[x(0x1b7)]=n,j[x(0x1dc)](k,l,m),this[x(0x1d7)][x(0x1af)](j);}}['addBinding'](){const A=u;if(!this['_add']['disabled'])this[A(0x1c4)](this[A(0x19c)][0x0]);}async['editBinding'](c,d,e=d?.[u(0x19b)]){const B=u;if(this['_editing'])return;const f=c['serviceContainer'][B(0x1a6)][B(0x1ad)];if(f){this[B(0x1d9)]=!![];try{await f(this['_service'][B(0x1dd)](e),[c],d,BindingTarget[B(0x1a0)]),this['refresh'](this['_items']);}finally{this[B(0x1d9)]=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x1a5)]['querySelector'](C(0x1db)))return;const f=document[C(0x1d1)]('dialog'),g=document['createElement'](C(0x19a)),h=document[C(0x1d1)]('h3');h['textContent']=d?C(0x1c5):C(0x1cd);const i=document[C(0x1d1)]('label');i[C(0x1b0)]=C(0x1cb);const j=document['createElement']('input');j['value']=e,j[C(0x199)]=!![];const k=document['createElement'](C(0x1a1));k['className']='help',k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x1dc)](j,k);const l=document['createElement'](C(0x1b3));l['className']='error',l[C(0x1a3)](C(0x1d6),'alert'),l['hidden']=!![];const m=document[C(0x1d1)]('div');m['className']='actions';const n=document[C(0x1d1)](C(0x1d8));n['type']=C(0x1d8),n['textContent']='Cancel',n['onclick']=()=>f[C(0x1ae)]();const o=document[C(0x1d1)](C(0x1d8));o['type']=C(0x1b2),o['textContent']=d?C(0x197):'Next…',m[C(0x1dc)](n,o),g[C(0x1dc)](h,i),g['append'](l,m),f[C(0x1af)](g),this['shadowRoot']['appendChild'](f),f[C(0x196)]=()=>f[C(0x1a4)](),g['onsubmit']=async p=>{const D=C;p[D(0x1bb)]();const q=j[D(0x1a7)][D(0x1c3)](),r=this[D(0x198)]['validateName'](c,q,d?.[D(0x19b)]);try{if(r)throw new Error(r);d&&this['_service'][D(0x1ce)](c,d,q);f['close']();if(!d)await this[D(0x1b8)](c,undefined,q);this['refresh'](this['_items']);}catch(s){l[D(0x1b0)]=s['message'],l['hidden']=![];}},f['showModal'](),j[C(0x1d0)]();}}function a(){const E=['type','focus','createElement','expression','summary','_toggle','301486HOTGxX','role','_rows','button','_editing','join','dialog','append','createProperty','hidden','row','40059PgTPcU','5201867lXNqIU','onclose','Save','_service','required','form','targetName','_items','395289DhQnJw','Rename\x20class…','112EMNONy','class','span','disabled','setAttribute','remove','shadowRoot','config','value','54agaNFo','serviceContainer','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','refresh','950LQvBxD','openBindingsEditor','close','appendChild','textContent','rawValue','submit','div','getBindings','map','▾\x20Class\x20bindings','oncontextmenu','editBinding','29395piKWHk','replaceChildren','preventDefault','onclick','\x20Class\x20bindings','ondblclick','_add','className','Add\x20class\x20binding…','title','trim','showNameDialog','Rename\x20class','_signature','Edit\x20class\x20binding:\x20','75831PrMIJp','3530392VfJnal','bindableObjectNames','Class\x20name','3ABPDdQ','Add\x20class\x20binding','rename'];a=function(){return E;};return a();}customElements['define']('node-projects-property-grid-class-bindings',PropertyGridClassBindings);