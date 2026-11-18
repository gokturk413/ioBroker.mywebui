const u=b;function a(){const E=['div','Actions\x20for\x20class\x20binding\x20','true','_signature','value','_rows','config','shadowRoot','rename','close','1166945EjaXaN','showNameDialog','Edit\x20binding…','2272736oDcTJh','9310972FyVPYx','onsubmit','16LrfFhK','dialog','required','refresh','aria-expanded','Cancel','class','onclick','stringify','role','Remove\x20binding','submit','editBinding','32244IWPSCM','_editing','message','2161188XDzntv','button','24240jMtvZk','join','error','span','remove','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','createElement','hidden','onclose','name','Edit\x20class\x20binding:\x20','6402150WwMUYG','_toggle','trim','textContent','validateName','aria-label','targetName','serviceContainer','openBindingsEditor','\x20Class\x20bindings','expression','_service','14uKpPOS','42jUPFdx','_add','Add\x20class\x20binding','Rename\x20class','Class\x20name','setAttribute','_items','title','className','row','header','disabled','define','node-projects-property-grid-class-bindings','append','oncontextmenu','appendChild','actions','type','binding','2799vouEho'];a=function(){return E;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x198))/0x1*(parseInt(t(0x1ca))/0x2)+parseInt(t(0x1cd))/0x3+-parseInt(t(0x1bd))/0x4*(-parseInt(t(0x1b7))/0x5)+-parseInt(t(0x18b))/0x6+parseInt(t(0x197))/0x7*(-parseInt(t(0x1ba))/0x8)+parseInt(t(0x1ac))/0x9*(parseInt(t(0x180))/0xa)+parseInt(t(0x1bb))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe5f6f));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x17f;const e=a();let f=e[c];return f;}import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0x19e)]=[];[u(0x196)]=new ClassBindingsPropertiesService();['_rows'];[u(0x199)];['_toggle'];[u(0x1b0)];['_editing']=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x1a0)]=v(0x1a2),this[v(0x18c)]=document[v(0x186)]('button'),this['_toggle'][v(0x1aa)]='button',this[v(0x18c)][v(0x1a0)]='toggle',this['_toggle'][v(0x18e)]='▾\x20Class\x20bindings',this['_toggle']['setAttribute'](v(0x1c1),v(0x1af)),this['_toggle'][v(0x1c4)]=()=>{const w=v;this[w(0x1b2)]['hidden']=!this[w(0x1b2)]['hidden'],this['_toggle'][w(0x18e)]=(this[w(0x1b2)]['hidden']?'▸':'▾')+w(0x194),this['_toggle']['setAttribute'](w(0x1c1),String(!this['_rows']['hidden']));},this['_add']=document['createElement']('button'),this[v(0x199)]['type']=v(0x17f),this['_add']['textContent']='+',this[v(0x199)]['title']='Add\x20class\x20binding…',this['_add']['setAttribute'](v(0x190),'Add\x20class\x20binding'),this['_add'][v(0x1c4)]=()=>this['addBinding'](),c['append'](this[v(0x18c)],this['_add']),this[v(0x1b2)]=document['createElement'](v(0x1ad)),this[v(0x1b4)]['append'](c,this[v(0x1b2)]);}[u(0x1c0)](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this[x(0x19e)]['length']!==c?.['length'];if(d)this['shadowRoot']['querySelector'](x(0x1be))?.['close']();this[x(0x19e)]=c??[];const e=this['_items']['length']===0x1?this[x(0x19e)][0x0]:null,f=e?this[x(0x196)]['getBindings'](e):[];this[x(0x199)][x(0x1a3)]=!e||!e['serviceContainer']['config']['openBindingsEditor'];const g=JSON[x(0x1c5)](f['map'](({service:h,...i})=>i));if(!d&&g===this[x(0x1b0)])return;this[x(0x1b0)]=g,this['_rows']['replaceChildren']();if(!e){const h=document[x(0x186)](x(0x1ad));h[x(0x1a0)]=x(0x1cc),h['textContent']=x(0x185),this['_rows'][x(0x1a8)](h);return;}for(const i of f){const j=document[x(0x186)]('div');j['className']=x(0x1a1);const k=document[x(0x186)](x(0x17f));k[x(0x1aa)]='button',k['className']=x(0x189),k[x(0x18e)]=i[x(0x191)],k['title']=x(0x18a)+i['targetName'],k['onclick']=()=>this[x(0x1c9)](e,i);const l=document[x(0x186)]('span');l[x(0x1a0)]='summary',l[x(0x18e)]='←\x20'+(i[x(0x195)]||i['bindableObjectNames']?.[x(0x181)](';')||i['rawValue']||x(0x1ab)),l[x(0x19f)]=l[x(0x18e)],l['ondblclick']=()=>this['editBinding'](e,i);const m=document[x(0x186)]('button');m[x(0x1aa)]='button',m[x(0x18e)]='⋯',m[x(0x19d)]('aria-label',x(0x1ae)+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':y(0x1b9),'action':()=>this[y(0x1c9)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':y(0x1c7),'action':()=>{const z=y;this[z(0x196)][z(0x184)](e,i),this[z(0x1c0)](this['_items']);}}],o);};m[x(0x1c4)]=n,j[x(0x1a7)]=n,j[x(0x1a6)](k,l,m),this['_rows'][x(0x1a8)](j);}}['addBinding'](){const A=u;if(!this[A(0x199)][A(0x1a3)])this[A(0x1b8)](this[A(0x19e)][0x0]);}async['editBinding'](c,d,e=d?.['targetName']){const B=u;if(this['_editing'])return;const f=c[B(0x192)][B(0x1b3)][B(0x193)];if(f){this[B(0x1cb)]=!![];try{await f(this[B(0x196)]['createProperty'](e),[c],d,BindingTarget[B(0x1c3)]),this[B(0x1c0)](this[B(0x19e)]);}finally{this[B(0x1cb)]=![];}}}['showNameDialog'](c,d,e=d?.[u(0x191)]??''){const C=u;if(this[C(0x1b4)]['querySelector']('dialog'))return;const f=document[C(0x186)]('dialog'),g=document[C(0x186)]('form'),h=document[C(0x186)]('h3');h[C(0x18e)]=d?C(0x19b):C(0x19a);const i=document['createElement']('label');i[C(0x18e)]=C(0x19c);const j=document['createElement']('input');j[C(0x1b1)]=e,j[C(0x1bf)]=!![];const k=document[C(0x186)](C(0x183));k[C(0x1a0)]='help',k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x1a6)](j,k);const l=document['createElement']('div');l['className']=C(0x182),l[C(0x19d)](C(0x1c6),'alert'),l[C(0x187)]=!![];const m=document['createElement'](C(0x1ad));m['className']=C(0x1a9);const n=document['createElement']('button');n[C(0x1aa)]='button',n[C(0x18e)]=C(0x1c2),n['onclick']=()=>f['close']();const o=document['createElement'](C(0x17f));o['type']=C(0x1c8),o['textContent']=d?'Save':'Next…',m['append'](n,o),g['append'](h,i),g[C(0x1a6)](l,m),f[C(0x1a8)](g),this['shadowRoot'][C(0x1a8)](f),f[C(0x188)]=()=>f['remove'](),g[C(0x1bc)]=async p=>{const D=C;p['preventDefault']();const q=j['value'][D(0x18d)](),r=this['_service'][D(0x18f)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this['_service'][D(0x1b5)](c,d,q);f[D(0x1b6)]();if(!d)await this['editBinding'](c,undefined,q);this[D(0x1c0)](this[D(0x19e)]);}catch(s){l['textContent']=s['message'],l[D(0x187)]=![];}},f['showModal'](),j['focus']();}}customElements[u(0x1a4)](u(0x1a5),PropertyGridClassBindings);