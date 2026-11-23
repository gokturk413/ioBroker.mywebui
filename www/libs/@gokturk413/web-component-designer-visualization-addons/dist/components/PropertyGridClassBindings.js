const u=b;function a(){const E=['101122EobjzB','10RbcKUL','summary','3jJUcsD','appendChild','onclick','div','class','row','Rename\x20class…','2367704vsNukB','define','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','18WiACzX','textContent','button','Add\x20class\x20binding','Rename\x20class','querySelector','refresh','183150Xyqyoc','actions','ondblclick','7246870KTuSeS','rename','181971TrCjyJ','597048LSKNdN','showNameDialog','serviceContainer','setAttribute','_items','submit','trim','_rows','append','binding','shadowRoot','show','_toggle','label','close','createElement','disabled','title','_add','span','Next…','bindableObjectNames','rawValue','focus','onsubmit','703388CWHguM','error','Edit\x20class\x20binding:\x20','_signature','dialog','config','className','length','▾\x20Class\x20bindings','onclose','_service','createProperty','Add\x20class\x20binding…','addBinding','hidden','editBinding','oncontextmenu','targetName','message','validateName','aria-expanded','Cancel','_editing','alert','name','openBindingsEditor','\x20Class\x20bindings','type','required','map'];a=function(){return E;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x8d))/0x1*(-parseInt(t(0x8a))/0x2)+-parseInt(t(0xa3))/0x3+-parseInt(t(0xa4))/0x4*(parseInt(t(0x8b))/0x5)+-parseInt(t(0x97))/0x6*(parseInt(t(0x6c))/0x7)+parseInt(t(0x94))/0x8+-parseInt(t(0x9e))/0x9+parseInt(t(0xa1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2de50));function b(c,d){c=c-0x66;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();['_rows'];['_add'];['_toggle'];[u(0x6f)];[u(0x82)]=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document[v(0xb3)]('div');c['className']='header',this[v(0xb0)]=document[v(0xb3)]('button'),this['_toggle'][v(0x87)]='button',this['_toggle']['className']='toggle',this[v(0xb0)][v(0x98)]=v(0x74),this['_toggle'][v(0xa7)](v(0x80),'true'),this[v(0xb0)]['onclick']=()=>{const w=v;this[w(0xab)][w(0x7a)]=!this[w(0xab)]['hidden'],this[w(0xb0)]['textContent']=(this[w(0xab)][w(0x7a)]?'▸':'▾')+w(0x86),this[w(0xb0)][w(0xa7)]('aria-expanded',String(!this['_rows']['hidden']));},this[v(0xb6)]=document['createElement']('button'),this[v(0xb6)][v(0x87)]=v(0x99),this[v(0xb6)][v(0x98)]='+',this[v(0xb6)][v(0xb5)]=v(0x78),this[v(0xb6)][v(0xa7)]('aria-label','Add\x20class\x20binding'),this[v(0xb6)]['onclick']=()=>this['addBinding'](),c['append'](this[v(0xb0)],this['_add']),this[v(0xab)]=document['createElement']('div'),this['shadowRoot'][v(0xac)](c,this['_rows']);}[u(0x9d)](c){const x=u,d=this[x(0xa8)][0x0]!==c?.[0x0]||this['_items'][x(0x73)]!==c?.[x(0x73)];if(d)this[x(0xae)]['querySelector']('dialog')?.[x(0xb2)]();this[x(0xa8)]=c??[];const e=this[x(0xa8)]['length']===0x1?this[x(0xa8)][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0xb6)][x(0xb4)]=!e||!e['serviceContainer'][x(0x71)][x(0x85)];const g=JSON['stringify'](f[x(0x89)](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0x6f)]=g,this['_rows']['replaceChildren']();if(!e){const h=document[x(0xb3)](x(0x90));h['className']='message',h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this['_rows'][x(0x8e)](h);return;}for(const i of f){const j=document[x(0xb3)](x(0x90));j[x(0x72)]=x(0x92);const k=document[x(0xb3)](x(0x99));k[x(0x87)]='button',k['className']=x(0x84),k['textContent']=i[x(0x7d)],k[x(0xb5)]=x(0x6e)+i[x(0x7d)],k['onclick']=()=>this['editBinding'](e,i);const l=document['createElement'](x(0x66));l[x(0x72)]=x(0x8c),l[x(0x98)]='←\x20'+(i['expression']||i[x(0x68)]?.['join'](';')||i[x(0x69)]||x(0xad)),l['title']=l[x(0x98)],l[x(0xa0)]=()=>this['editBinding'](e,i);const m=document[x(0xb3)]('button');m[x(0x87)]='button',m['textContent']='⋯',m[x(0xa7)]('aria-label','Actions\x20for\x20class\x20binding\x20'+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu[y(0xaf)]([{'title':'Edit\x20binding…','action':()=>this[y(0x7b)](e,i)},{'title':y(0x93),'action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x76)]['remove'](e,i),this[z(0x9d)](this['_items']);}}],o);};m['onclick']=n,j[x(0x7c)]=n,j['append'](k,l,m),this['_rows'][x(0x8e)](j);}}[u(0x79)](){const A=u;if(!this['_add']['disabled'])this[A(0xa5)](this[A(0xa8)][0x0]);}async['editBinding'](c,d,e=d?.['targetName']){const B=u;if(this['_editing'])return;const f=c[B(0xa6)]['config']['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this['_service'][B(0x77)](e),[c],d,BindingTarget[B(0x91)]),this[B(0x9d)](this[B(0xa8)]);}finally{this[B(0x82)]=![];}}}['showNameDialog'](c,d,e=d?.[u(0x7d)]??''){const C=u;if(this[C(0xae)][C(0x9c)](C(0x70)))return;const f=document['createElement']('dialog'),g=document[C(0xb3)]('form'),h=document['createElement']('h3');h['textContent']=d?C(0x9b):C(0x9a);const i=document['createElement'](C(0xb1));i['textContent']='Class\x20name';const j=document['createElement']('input');j['value']=e,j[C(0x88)]=!![];const k=document['createElement']('span');k['className']='help',k['textContent']=C(0x96),i[C(0xac)](j,k);const l=document['createElement'](C(0x90));l['className']=C(0x6d),l['setAttribute']('role',C(0x83)),l[C(0x7a)]=!![];const m=document['createElement'](C(0x90));m['className']=C(0x9f);const n=document[C(0xb3)](C(0x99));n[C(0x87)]=C(0x99),n['textContent']=C(0x81),n[C(0x8f)]=()=>f['close']();const o=document[C(0xb3)]('button');o[C(0x87)]=C(0xa9),o[C(0x98)]=d?'Save':C(0x67),m[C(0xac)](n,o),g[C(0xac)](h,i),g['append'](l,m),f['appendChild'](g),this[C(0xae)]['appendChild'](f),f[C(0x75)]=()=>f['remove'](),g[C(0x6b)]=async p=>{const D=C;p['preventDefault']();const q=j['value'][D(0xaa)](),r=this[D(0x76)][D(0x7f)](c,q,d?.[D(0x7d)]);try{if(r)throw new Error(r);d&&this[D(0x76)][D(0xa2)](c,d,q);f['close']();if(!d)await this['editBinding'](c,undefined,q);this[D(0x9d)](this['_items']);}catch(s){l[D(0x98)]=s[D(0x7e)],l['hidden']=![];}},f['showModal'](),j[C(0x6a)]();}}customElements[u(0x95)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);