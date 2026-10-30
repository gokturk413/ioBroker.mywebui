const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1e7))/0x1*(parseInt(t(0x1eb))/0x2)+-parseInt(t(0x1d7))/0x3*(-parseInt(t(0x1b4))/0x4)+parseInt(t(0x1c2))/0x5*(-parseInt(t(0x1d3))/0x6)+parseInt(t(0x1d1))/0x7+-parseInt(t(0x1be))/0x8+-parseInt(t(0x1e1))/0x9+parseInt(t(0x1c7))/0xa*(parseInt(t(0x1ec))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1a062));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x1aa;const e=a();let f=e[c];return f;}function a(){const E=['span','serviceContainer','743896RmrmSX','focus','rename','showNameDialog','10105WCVUOG','help','input','hidden','setAttribute','270OUdOSm','refresh','div','preventDefault','length','_editing','className','_add','Rename\x20class','aria-expanded','767228muqvuP','_signature','306GbQoxj','Actions\x20for\x20class\x20binding\x20','editBinding','appendChild','3pRwuSB','_service','type','define','_toggle','config','_rows','Next…','dialog','title','48969AMSpNc','onclick','class','_items','replaceChildren','append','27SuLNba','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','aria-label','createElement','8802eyahok','26521sVCwQl','Add\x20class\x20binding…','show','rawValue','textContent','join','value','style','Rename\x20class…','button','onclose','name','row','Edit\x20class\x20binding:\x20','querySelector','58260Incjjm','Class\x20name','shadowRoot','form','close','getBindings','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','targetName'];a=function(){return E;};return a();}import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();[u(0x1dd)];[u(0x1ce)];['_toggle'];[u(0x1d2)];['_editing']=![];static [u(0x1ac)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x1ea)](v(0x1c9));c[v(0x1cd)]='header',this[v(0x1db)]=document['createElement']('button'),this['_toggle'][v(0x1d9)]='button',this[v(0x1db)]['className']='toggle',this['_toggle']['textContent']='▾\x20Class\x20bindings',this[v(0x1db)]['setAttribute']('aria-expanded','true'),this[v(0x1db)][v(0x1e2)]=()=>{const w=v;this[w(0x1dd)]['hidden']=!this['_rows'][w(0x1c5)],this[w(0x1db)][w(0x1f0)]=(this['_rows'][w(0x1c5)]?'▸':'▾')+'\x20Class\x20bindings',this[w(0x1db)][w(0x1c6)](w(0x1d0),String(!this['_rows'][w(0x1c5)]));},this['_add']=document['createElement'](v(0x1ae)),this['_add']['type']=v(0x1ae),this['_add'][v(0x1f0)]='+',this['_add']['title']=v(0x1ed),this[v(0x1ce)][v(0x1c6)](v(0x1e9),'Add\x20class\x20binding'),this[v(0x1ce)]['onclick']=()=>this['addBinding'](),c['append'](this['_toggle'],this['_add']),this['_rows']=document[v(0x1ea)]('div'),this[v(0x1b6)][v(0x1e6)](c,this['_rows']);}['refresh'](c){const x=u,d=this[x(0x1e4)][0x0]!==c?.[0x0]||this[x(0x1e4)][x(0x1cb)]!==c?.[x(0x1cb)];if(d)this[x(0x1b6)]['querySelector'](x(0x1df))?.['close']();this['_items']=c??[];const e=this[x(0x1e4)][x(0x1cb)]===0x1?this[x(0x1e4)][0x0]:null,f=e?this[x(0x1d8)][x(0x1b9)](e):[];this[x(0x1ce)]['disabled']=!e||!e[x(0x1bd)]['config']['openBindingsEditor'];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0x1d2)]=g,this['_rows'][x(0x1e5)]();if(!e){const h=document[x(0x1ea)](x(0x1c9));h[x(0x1cd)]='message',h['textContent']=x(0x1ba),this['_rows']['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j[x(0x1cd)]=x(0x1b1);const k=document[x(0x1ea)](x(0x1ae));k['type']=x(0x1ae),k['className']=x(0x1b0),k[x(0x1f0)]=i[x(0x1bb)],k[x(0x1e0)]=x(0x1b2)+i['targetName'],k[x(0x1e2)]=()=>this['editBinding'](e,i);const l=document['createElement'](x(0x1bc));l['className']='summary',l[x(0x1f0)]='←\x20'+(i['expression']||i['bindableObjectNames']?.[x(0x1aa)](';')||i[x(0x1ef)]||'binding'),l['title']=l[x(0x1f0)],l['ondblclick']=()=>this[x(0x1d5)](e,i);const m=document[x(0x1ea)]('button');m[x(0x1d9)]='button',m[x(0x1f0)]='⋯',m['setAttribute']('aria-label',x(0x1d4)+i['targetName']);const n=o=>{const y=x;o[y(0x1ca)](),ContextMenu[y(0x1ee)]([{'title':'Edit\x20binding…','action':()=>this[y(0x1d5)](e,i)},{'title':y(0x1ad),'action':()=>this[y(0x1c1)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this['_service']['remove'](e,i),this['refresh'](this[z(0x1e4)]);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this[x(0x1dd)]['appendChild'](j);}}['addBinding'](){const A=u;if(!this['_add']['disabled'])this['showNameDialog'](this[A(0x1e4)][0x0]);}async['editBinding'](c,d,e=d?.[u(0x1bb)]){const B=u;if(this[B(0x1cc)])return;const f=c['serviceContainer'][B(0x1dc)]['openBindingsEditor'];if(f){this[B(0x1cc)]=!![];try{await f(this['_service']['createProperty'](e),[c],d,BindingTarget[B(0x1e3)]),this[B(0x1c8)](this[B(0x1e4)]);}finally{this[B(0x1cc)]=![];}}}[u(0x1c1)](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x1b6)][C(0x1b3)]('dialog'))return;const f=document[C(0x1ea)](C(0x1df)),g=document[C(0x1ea)](C(0x1b7)),h=document['createElement']('h3');h[C(0x1f0)]=d?C(0x1cf):'Add\x20class\x20binding';const i=document[C(0x1ea)]('label');i['textContent']=C(0x1b5);const j=document['createElement'](C(0x1c4));j[C(0x1ab)]=e,j['required']=!![];const k=document[C(0x1ea)]('span');k[C(0x1cd)]=C(0x1c3),k['textContent']=C(0x1e8),i[C(0x1e6)](j,k);const l=document[C(0x1ea)](C(0x1c9));l['className']='error',l['setAttribute']('role','alert'),l['hidden']=!![];const m=document[C(0x1ea)]('div');m[C(0x1cd)]='actions';const n=document[C(0x1ea)]('button');n['type']=C(0x1ae),n['textContent']='Cancel',n['onclick']=()=>f[C(0x1b8)]();const o=document['createElement'](C(0x1ae));o['type']='submit',o['textContent']=d?'Save':C(0x1de),m['append'](n,o),g[C(0x1e6)](h,i),g['append'](l,m),f[C(0x1d6)](g),this['shadowRoot'][C(0x1d6)](f),f[C(0x1af)]=()=>f['remove'](),g['onsubmit']=async p=>{const D=C;p[D(0x1ca)]();const q=j[D(0x1ab)]['trim'](),r=this[D(0x1d8)]['validateName'](c,q,d?.[D(0x1bb)]);try{if(r)throw new Error(r);d&&this['_service'][D(0x1c0)](c,d,q);f[D(0x1b8)]();if(!d)await this[D(0x1d5)](c,undefined,q);this[D(0x1c8)](this[D(0x1e4)]);}catch(s){l[D(0x1f0)]=s['message'],l['hidden']=![];}},f['showModal'](),j[C(0x1bf)]();}}customElements[u(0x1da)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);