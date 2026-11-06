const u=b;function b(c,d){c=c-0x6d;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x71))/0x1+-parseInt(t(0x78))/0x2*(-parseInt(t(0xb7))/0x3)+-parseInt(t(0x76))/0x4*(parseInt(t(0x81))/0x5)+-parseInt(t(0x91))/0x6+parseInt(t(0x7b))/0x7+-parseInt(t(0x80))/0x8+parseInt(t(0x95))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8c107));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const D=['appendChild','_rows','value','config','hidden','length','onclose','focus','targetName','div','message','_toggle','3VLMaaH','toggle','title','map','node-projects-property-grid-class-bindings','aria-label','getBindings','116385yvBJoo','help','span','_signature','shadowRoot','4PGTNnk','actions','455446xJZKYN','Add\x20class\x20binding…','bindableObjectNames','5510218pDmKmY','Add\x20class\x20binding','style','summary','stringify','1404680GqyOZK','1275385ToqjHk','_items','submit','close','rawValue','binding','Next…','editBinding','openBindingsEditor','name','showNameDialog','textContent','button','Rename\x20class','type','Save','2164374olWUwW','className','createProperty','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','4199238LLlTbh','refresh','_add','row','createElement','addBinding','_service','required','append','Class\x20name','querySelector','rename','setAttribute','Edit\x20class\x20binding:\x20','Remove\x20binding','_editing','role','input','onclick','label','Edit\x20binding…','aria-expanded'];a=function(){return D;};return a();}import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0x82)]=[];['_service']=new ClassBindingsPropertiesService();['_rows'];['_add'];['_toggle'];['_signature'];[u(0xa4)]=![];static [u(0x7d)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x99)]('div');c['className']='header',this['_toggle']=document['createElement']('button'),this['_toggle']['type']=v(0x8d),this['_toggle'][v(0x92)]=v(0xb8),this['_toggle']['textContent']='▾\x20Class\x20bindings',this[v(0xb6)]['setAttribute'](v(0xaa),'true'),this['_toggle']['onclick']=()=>{const w=v;this['_rows']['hidden']=!this[w(0xac)][w(0xaf)],this['_toggle']['textContent']=(this['_rows']['hidden']?'▸':'▾')+'\x20Class\x20bindings',this[w(0xb6)][w(0xa1)](w(0xaa),String(!this['_rows'][w(0xaf)]));},this[v(0x97)]=document[v(0x99)](v(0x8d)),this[v(0x97)][v(0x8f)]=v(0x8d),this['_add']['textContent']='+',this['_add'][v(0xb9)]=v(0x79),this[v(0x97)][v(0xa1)](v(0x6f),v(0x7c)),this['_add']['onclick']=()=>this['addBinding'](),c[v(0x9d)](this[v(0xb6)],this['_add']),this[v(0xac)]=document['createElement']('div'),this['shadowRoot']['append'](c,this[v(0xac)]);}['refresh'](c){const x=u,d=this[x(0x82)][0x0]!==c?.[0x0]||this[x(0x82)]['length']!==c?.['length'];if(d)this['shadowRoot']['querySelector']('dialog')?.[x(0x84)]();this[x(0x82)]=c??[];const e=this[x(0x82)][x(0xb0)]===0x1?this[x(0x82)][0x0]:null,f=e?this[x(0x9b)][x(0x70)](e):[];this['_add']['disabled']=!e||!e['serviceContainer'][x(0xae)][x(0x89)];const g=JSON[x(0x7f)](f[x(0x6d)](({service:h,...i})=>i));if(!d&&g===this[x(0x74)])return;this[x(0x74)]=g,this['_rows']['replaceChildren']();if(!e){const h=document[x(0x99)]('div');h['className']=x(0xb5),h[x(0x8c)]='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this[x(0xac)][x(0xab)](h);return;}for(const i of f){const j=document[x(0x99)](x(0xb4));j['className']=x(0x98);const k=document['createElement'](x(0x8d));k['type']='button',k[x(0x92)]=x(0x8a),k[x(0x8c)]=i['targetName'],k['title']=x(0xa2)+i[x(0xb3)],k['onclick']=()=>this['editBinding'](e,i);const l=document['createElement'](x(0x73));l[x(0x92)]=x(0x7e),l[x(0x8c)]='←\x20'+(i['expression']||i[x(0x7a)]?.['join'](';')||i[x(0x85)]||x(0x86)),l['title']=l[x(0x8c)],l['ondblclick']=()=>this[x(0x88)](e,i);const m=document[x(0x99)]('button');m[x(0x8f)]=x(0x8d),m[x(0x8c)]='⋯',m['setAttribute'](x(0x6f),'Actions\x20for\x20class\x20binding\x20'+i[x(0xb3)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':y(0xa9),'action':()=>this[y(0x88)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':y(0xa3),'action':()=>{this['_service']['remove'](e,i),this['refresh'](this['_items']);}}],o);};m[x(0xa7)]=n,j['oncontextmenu']=n,j['append'](k,l,m),this[x(0xac)]['appendChild'](j);}}[u(0x9a)](){const z=u;if(!this[z(0x97)]['disabled'])this['showNameDialog'](this['_items'][0x0]);}async[u(0x88)](c,d,e=d?.[u(0xb3)]){const A=u;if(this['_editing'])return;const f=c['serviceContainer']['config']['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this['_service'][A(0x93)](e),[c],d,BindingTarget['class']),this['refresh'](this['_items']);}finally{this[A(0xa4)]=![];}}}[u(0x8b)](c,d,e=d?.[u(0xb3)]??''){const B=u;if(this['shadowRoot'][B(0x9f)]('dialog'))return;const f=document[B(0x99)]('dialog'),g=document['createElement']('form'),h=document[B(0x99)]('h3');h['textContent']=d?B(0x8e):'Add\x20class\x20binding';const i=document['createElement'](B(0xa8));i[B(0x8c)]=B(0x9e);const j=document[B(0x99)](B(0xa6));j[B(0xad)]=e,j[B(0x9c)]=!![];const k=document['createElement']('span');k[B(0x92)]=B(0x72),k['textContent']=B(0x94),i['append'](j,k);const l=document['createElement']('div');l['className']='error',l[B(0xa1)](B(0xa5),'alert'),l[B(0xaf)]=!![];const m=document[B(0x99)](B(0xb4));m[B(0x92)]=B(0x77);const n=document['createElement']('button');n[B(0x8f)]=B(0x8d),n['textContent']='Cancel',n[B(0xa7)]=()=>f[B(0x84)]();const o=document['createElement'](B(0x8d));o['type']=B(0x83),o[B(0x8c)]=d?B(0x90):B(0x87),m[B(0x9d)](n,o),g['append'](h,i),g[B(0x9d)](l,m),f['appendChild'](g),this[B(0x75)]['appendChild'](f),f[B(0xb1)]=()=>f['remove'](),g['onsubmit']=async p=>{const C=B;p['preventDefault']();const q=j['value']['trim'](),r=this[C(0x9b)]['validateName'](c,q,d?.[C(0xb3)]);try{if(r)throw new Error(r);d&&this['_service'][C(0xa0)](c,d,q);f['close']();if(!d)await this[C(0x88)](c,undefined,q);this[C(0x96)](this['_items']);}catch(s){l['textContent']=s[C(0xb5)],l[C(0xaf)]=![];}},f['showModal'](),j[B(0xb2)]();}}customElements['define'](u(0x6e),PropertyGridClassBindings);