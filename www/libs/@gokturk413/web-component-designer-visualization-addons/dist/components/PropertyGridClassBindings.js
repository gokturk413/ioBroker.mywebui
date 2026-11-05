const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x122))/0x1*(-parseInt(t(0xd9))/0x2)+parseInt(t(0xf1))/0x3+-parseInt(t(0xe8))/0x4+-parseInt(t(0x105))/0x5+parseInt(t(0x112))/0x6*(parseInt(t(0xf5))/0x7)+parseInt(t(0xff))/0x8*(-parseInt(t(0x126))/0x9)+parseInt(t(0x120))/0xa*(parseInt(t(0x115))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7043));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd7;const e=a();let f=e[c];return f;}import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';function a(){const E=['show','dialog','div','createElement','disabled','targetName','_editing','_toggle','submit','addBinding','actions','showNameDialog','24crxwNw','onclose','Add\x20class\x20binding…','39567kjchlW','binding','span','Remove\x20binding','preventDefault','message','showModal','_add','ondblclick','serviceContainer','_signature','5090mnvEfT','name','1tpmapN','input','createProperty','openBindingsEditor','2652309eaKant','_items','shadowRoot','Class\x20name','1041658udMfli','type','replaceChildren','onclick','node-projects-property-grid-class-bindings','value','hidden','button','header','help','title','className','length','trim','_rows','970348ClaIBB','style','required','aria-label','rename','remove','map','append','expression','2793297oZFHQx','getBindings','role','join','99701XvOUSQ','Add\x20class\x20binding','toggle','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','\x20Class\x20bindings','editBinding','bindableObjectNames','setAttribute','_service','appendChild','8jIBURS','textContent','▾\x20Class\x20bindings','refresh','stringify','config','5383640oWrsDV'];a=function(){return E;};return a();}import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0xfd)]=new ClassBindingsPropertiesService();[u(0xe7)];[u(0x11c)];['_toggle'];['_signature'];['_editing']=![];static [u(0xe9)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0xe4)]=v(0xe1),this[v(0x10d)]=document['createElement'](v(0xe0)),this['_toggle'][v(0xda)]='button',this['_toggle'][v(0xe4)]=v(0xf7),this[v(0x10d)]['textContent']=v(0x101),this[v(0x10d)][v(0xfc)]('aria-expanded','true'),this['_toggle'][v(0xdc)]=()=>{const w=v;this[w(0xe7)]['hidden']=!this[w(0xe7)]['hidden'],this['_toggle'][w(0x100)]=(this['_rows']['hidden']?'▸':'▾')+w(0xf9),this['_toggle'][w(0xfc)]('aria-expanded',String(!this['_rows']['hidden']));},this[v(0x11c)]=document['createElement'](v(0xe0)),this['_add']['type']=v(0xe0),this[v(0x11c)]['textContent']='+',this['_add'][v(0xe3)]=v(0x114),this['_add']['setAttribute'](v(0xeb),v(0xf6)),this['_add']['onclick']=()=>this[v(0x10f)](),c[v(0xef)](this['_toggle'],this[v(0x11c)]),this[v(0xe7)]=document['createElement']('div'),this[v(0xd7)][v(0xef)](c,this['_rows']);}[u(0x102)](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this[x(0x127)]['length']!==c?.[x(0xe5)];if(d)this['shadowRoot']['querySelector'](x(0x107))?.['close']();this[x(0x127)]=c??[];const e=this[x(0x127)][x(0xe5)]===0x1?this[x(0x127)][0x0]:null,f=e?this['_service'][x(0xf2)](e):[];this[x(0x11c)][x(0x10a)]=!e||!e[x(0x11e)][x(0x104)][x(0x125)];const g=JSON[x(0x103)](f[x(0xee)](({service:h,...i})=>i));if(!d&&g===this[x(0x11f)])return;this[x(0x11f)]=g,this['_rows'][x(0xdb)]();if(!e){const h=document[x(0x109)]('div');h['className']=x(0x11a),h['textContent']=x(0xf8),this[x(0xe7)]['appendChild'](h);return;}for(const i of f){const j=document['createElement'](x(0x108));j['className']='row';const k=document['createElement'](x(0xe0));k['type']=x(0xe0),k['className']=x(0x121),k[x(0x100)]=i[x(0x10b)],k['title']='Edit\x20class\x20binding:\x20'+i[x(0x10b)],k[x(0xdc)]=()=>this['editBinding'](e,i);const l=document['createElement']('span');l['className']='summary',l[x(0x100)]='←\x20'+(i[x(0xf0)]||i[x(0xfb)]?.[x(0xf4)](';')||i['rawValue']||x(0x116)),l[x(0xe3)]=l['textContent'],l[x(0x11d)]=()=>this['editBinding'](e,i);const m=document[x(0x109)]('button');m['type']=x(0xe0),m[x(0x100)]='⋯',m[x(0xfc)](x(0xeb),'Actions\x20for\x20class\x20binding\x20'+i[x(0x10b)]);const n=o=>{const y=x;o[y(0x119)](),ContextMenu[y(0x106)]([{'title':'Edit\x20binding…','action':()=>this[y(0xfa)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':y(0x118),'action':()=>{const z=y;this['_service'][z(0xed)](e,i),this[z(0x102)](this[z(0x127)]);}}],o);};m[x(0xdc)]=n,j['oncontextmenu']=n,j['append'](k,l,m),this['_rows']['appendChild'](j);}}['addBinding'](){const A=u;if(!this['_add']['disabled'])this[A(0x111)](this[A(0x127)][0x0]);}async[u(0xfa)](c,d,e=d?.[u(0x10b)]){const B=u;if(this[B(0x10c)])return;const f=c[B(0x11e)][B(0x104)][B(0x125)];if(f){this[B(0x10c)]=!![];try{await f(this[B(0xfd)][B(0x124)](e),[c],d,BindingTarget['class']),this[B(0x102)](this['_items']);}finally{this['_editing']=![];}}}[u(0x111)](c,d,e=d?.['targetName']??''){const C=u;if(this['shadowRoot']['querySelector'](C(0x107)))return;const f=document[C(0x109)]('dialog'),g=document['createElement']('form'),h=document['createElement']('h3');h[C(0x100)]=d?'Rename\x20class':C(0xf6);const i=document[C(0x109)]('label');i[C(0x100)]=C(0xd8);const j=document[C(0x109)](C(0x123));j[C(0xde)]=e,j[C(0xea)]=!![];const k=document[C(0x109)](C(0x117));k[C(0xe4)]=C(0xe2),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0xef)](j,k);const l=document[C(0x109)]('div');l[C(0xe4)]='error',l['setAttribute'](C(0xf3),'alert'),l[C(0xdf)]=!![];const m=document[C(0x109)](C(0x108));m['className']=C(0x110);const n=document[C(0x109)]('button');n['type']='button',n[C(0x100)]='Cancel',n['onclick']=()=>f['close']();const o=document['createElement'](C(0xe0));o[C(0xda)]=C(0x10e),o['textContent']=d?'Save':'Next…',m['append'](n,o),g['append'](h,i),g[C(0xef)](l,m),f[C(0xfe)](g),this[C(0xd7)][C(0xfe)](f),f[C(0x113)]=()=>f['remove'](),g['onsubmit']=async p=>{const D=C;p['preventDefault']();const q=j['value'][D(0xe6)](),r=this[D(0xfd)]['validateName'](c,q,d?.[D(0x10b)]);try{if(r)throw new Error(r);d&&this['_service'][D(0xec)](c,d,q);f['close']();if(!d)await this['editBinding'](c,undefined,q);this[D(0x102)](this['_items']);}catch(s){l['textContent']=s[D(0x11a)],l['hidden']=![];}},f[C(0x11b)](),j['focus']();}}customElements['define'](u(0xdd),PropertyGridClassBindings);