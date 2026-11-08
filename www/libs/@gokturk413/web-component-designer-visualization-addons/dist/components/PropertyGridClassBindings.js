const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xea))/0x1*(-parseInt(t(0x105))/0x2)+-parseInt(t(0xda))/0x3*(parseInt(t(0xe8))/0x4)+-parseInt(t(0xe0))/0x5*(-parseInt(t(0xe1))/0x6)+-parseInt(t(0x110))/0x7+parseInt(t(0xf7))/0x8+parseInt(t(0xdb))/0x9+parseInt(t(0xdd))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeba38));function b(c,d){c=c-0xcf;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['539556KUkrnv','9379881hdjZVq','rawValue','21981410iqxteV','appendChild','submit','171485MvPREb','6HIfVfZ','showNameDialog','append','value','_rows','setAttribute','class','36JzLChl','row','316321LsIfoa','_toggle','Add\x20class\x20binding','Actions\x20for\x20class\x20binding\x20','binding','form','targetName','map','textContent','_add','hidden','config','title','5239440NFgaQZ','_editing','\x20Class\x20bindings','onclick','className','button','Add\x20class\x20binding…','define','replaceChildren','role','Class\x20name','style','showModal','type','6VVGjXo','toggle','Edit\x20binding…','actions','header','true','preventDefault','Edit\x20class\x20binding:\x20','length','help','label','2777390sTRiBb','message','_service','dialog','name','addBinding','_signature','openBindingsEditor','aria-label','createProperty','serviceContainer','join','querySelector','close','show','editBinding','alert','createElement','Rename\x20class…','disabled','▾\x20Class\x20bindings','aria-expanded','shadowRoot','div','_items'];a=function(){return E;};return a();}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();[u(0xe5)];[u(0xf3)];[u(0xeb)];['_signature'];[u(0xf8)]=![];static [u(0x102)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0xd2)]('div');c[v(0xfb)]=v(0x109),this['_toggle']=document[v(0xd2)](v(0xfc)),this[v(0xeb)][v(0x104)]='button',this['_toggle']['className']=v(0x106),this[v(0xeb)]['textContent']=v(0xd5),this[v(0xeb)][v(0xe6)](v(0xd6),v(0x10a)),this[v(0xeb)]['onclick']=()=>{const w=v;this['_rows'][w(0xf4)]=!this['_rows'][w(0xf4)],this[w(0xeb)][w(0xf2)]=(this['_rows']['hidden']?'▸':'▾')+w(0xf9),this[w(0xeb)]['setAttribute']('aria-expanded',String(!this[w(0xe5)][w(0xf4)]));},this['_add']=document['createElement']('button'),this['_add'][v(0x104)]=v(0xfc),this['_add'][v(0xf2)]='+',this['_add'][v(0xf6)]=v(0xfd),this['_add']['setAttribute'](v(0x118),v(0xec)),this['_add'][v(0xfa)]=()=>this[v(0x115)](),c[v(0xe3)](this[v(0xeb)],this['_add']),this[v(0xe5)]=document[v(0xd2)]('div'),this['shadowRoot']['append'](c,this[v(0xe5)]);}['refresh'](c){const x=u,d=this[x(0xd9)][0x0]!==c?.[0x0]||this[x(0xd9)]['length']!==c?.[x(0x10d)];if(d)this[x(0xd7)][x(0x11c)](x(0x113))?.[x(0x11d)]();this[x(0xd9)]=c??[];const e=this['_items'][x(0x10d)]===0x1?this['_items'][0x0]:null,f=e?this[x(0x112)]['getBindings'](e):[];this['_add']['disabled']=!e||!e[x(0x11a)]['config'][x(0x117)];const g=JSON['stringify'](f[x(0xf1)](({service:h,...i})=>i));if(!d&&g===this[x(0x116)])return;this['_signature']=g,this['_rows'][x(0xff)]();if(!e){const h=document['createElement']('div');h[x(0xfb)]=x(0x111),h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this['_rows']['appendChild'](h);return;}for(const i of f){const j=document[x(0xd2)](x(0xd8));j[x(0xfb)]=x(0xe9);const k=document['createElement'](x(0xfc));k[x(0x104)]='button',k[x(0xfb)]=x(0x114),k['textContent']=i['targetName'],k[x(0xf6)]=x(0x10c)+i[x(0xf0)],k[x(0xfa)]=()=>this[x(0xd0)](e,i);const l=document[x(0xd2)]('span');l['className']='summary',l[x(0xf2)]='←\x20'+(i['expression']||i['bindableObjectNames']?.[x(0x11b)](';')||i[x(0xdc)]||x(0xee)),l['title']=l['textContent'],l['ondblclick']=()=>this['editBinding'](e,i);const m=document[x(0xd2)]('button');m[x(0x104)]=x(0xfc),m['textContent']='⋯',m['setAttribute'](x(0x118),x(0xed)+i['targetName']);const n=o=>{const y=x;o[y(0x10b)](),ContextMenu[y(0xcf)]([{'title':y(0x107),'action':()=>this[y(0xd0)](e,i)},{'title':y(0xd3),'action':()=>this[y(0xe2)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this['_service']['remove'](e,i),this['refresh'](this[z(0xd9)]);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this['_rows'][x(0xde)](j);}}[u(0x115)](){const A=u;if(!this['_add'][A(0xd4)])this[A(0xe2)](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.[u(0xf0)]){const B=u;if(this['_editing'])return;const f=c['serviceContainer'][B(0xf5)]['openBindingsEditor'];if(f){this[B(0xf8)]=!![];try{await f(this['_service'][B(0x119)](e),[c],d,BindingTarget[B(0xe7)]),this['refresh'](this['_items']);}finally{this[B(0xf8)]=![];}}}['showNameDialog'](c,d,e=d?.[u(0xf0)]??''){const C=u;if(this[C(0xd7)]['querySelector'](C(0x113)))return;const f=document['createElement']('dialog'),g=document[C(0xd2)](C(0xef)),h=document[C(0xd2)]('h3');h['textContent']=d?'Rename\x20class':C(0xec);const i=document[C(0xd2)](C(0x10f));i[C(0xf2)]=C(0x101);const j=document[C(0xd2)]('input');j[C(0xe4)]=e,j['required']=!![];const k=document[C(0xd2)]('span');k['className']=C(0x10e),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0xe3)](j,k);const l=document[C(0xd2)](C(0xd8));l[C(0xfb)]='error',l['setAttribute'](C(0x100),C(0xd1)),l['hidden']=!![];const m=document['createElement'](C(0xd8));m[C(0xfb)]=C(0x108);const n=document[C(0xd2)]('button');n[C(0x104)]='button',n[C(0xf2)]='Cancel',n['onclick']=()=>f[C(0x11d)]();const o=document['createElement']('button');o['type']=C(0xdf),o[C(0xf2)]=d?'Save':'Next…',m['append'](n,o),g['append'](h,i),g[C(0xe3)](l,m),f['appendChild'](g),this['shadowRoot']['appendChild'](f),f['onclose']=()=>f['remove'](),g['onsubmit']=async p=>{const D=C;p[D(0x10b)]();const q=j[D(0xe4)]['trim'](),r=this['_service']['validateName'](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this['_service']['rename'](c,d,q);f['close']();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this[D(0xd9)]);}catch(s){l['textContent']=s[D(0x111)],l['hidden']=![];}},f[C(0x103)](),j['focus']();}}customElements[u(0xfe)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);