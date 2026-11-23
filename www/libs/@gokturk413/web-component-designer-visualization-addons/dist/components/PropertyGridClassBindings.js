const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x113))/0x1+-parseInt(t(0xdb))/0x2*(-parseInt(t(0x100))/0x3)+-parseInt(t(0x117))/0x4+parseInt(t(0xed))/0x5*(parseInt(t(0xf2))/0x6)+-parseInt(t(0x11e))/0x7+-parseInt(t(0xdd))/0x8*(parseInt(t(0xf7))/0x9)+parseInt(t(0xea))/0xa*(parseInt(t(0x108))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb3dd7));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';function a(){const E=['hidden','className','textContent','onsubmit','135YOhLAD','refresh','append','addBinding','stringify','openBindingsEditor','onclick','dialog','ondblclick','4347JMQzQL','validateName','_editing','\x20Class\x20bindings','message','node-projects-property-grid-class-bindings','showNameDialog','required','582593RpsWZv','appendChild','targetName','_service','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','div','bindableObjectNames','aria-expanded','Remove\x20binding','button','createProperty','621771evUlGq','replaceChildren','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','shadowRoot','429772MXGagH','_add','Save','title','header','Actions\x20for\x20class\x20binding\x20','rawValue','1813476JedHtp','_signature','remove','preventDefault','createElement','1446dpxOvP','_toggle','720680eeyPXr','span','type','_items','show','Rename\x20class','name','error','▾\x20Class\x20bindings','setAttribute','Add\x20class\x20binding','editBinding','class','370Hsbfll','disabled','expression','5RFyuLh','_rows','oncontextmenu','close','config','414156tNkyFI'];a=function(){return E;};return a();}function b(c,d){c=c-0xd7;const e=a();let f=e[c];return f;}import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0xe0)]=[];[u(0x10b)]=new ClassBindingsPropertiesService();['_rows'];['_add'];['_toggle'];['_signature'];['_editing']=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c['className']=v(0x11b),this[v(0xdc)]=document['createElement'](v(0x111)),this['_toggle'][v(0xdf)]='button',this[v(0xdc)]['className']='toggle',this['_toggle']['textContent']=v(0xe5),this[v(0xdc)][v(0xe6)]('aria-expanded','true'),this[v(0xdc)]['onclick']=()=>{const w=v;this[w(0xee)][w(0xf3)]=!this[w(0xee)][w(0xf3)],this['_toggle'][w(0xf5)]=(this[w(0xee)]['hidden']?'▸':'▾')+w(0x103),this[w(0xdc)]['setAttribute'](w(0x10f),String(!this[w(0xee)]['hidden']));},this['_add']=document[v(0xda)](v(0x111)),this['_add'][v(0xdf)]='button',this[v(0x118)][v(0xf5)]='+',this[v(0x118)][v(0x11a)]='Add\x20class\x20binding…',this['_add'][v(0xe6)]('aria-label',v(0xe7)),this[v(0x118)]['onclick']=()=>this['addBinding'](),c['append'](this['_toggle'],this['_add']),this[v(0xee)]=document['createElement'](v(0x10d)),this['shadowRoot'][v(0xf9)](c,this[v(0xee)]);}[u(0xf8)](c){const x=u,d=this[x(0xe0)][0x0]!==c?.[0x0]||this['_items']['length']!==c?.['length'];if(d)this['shadowRoot']['querySelector'](x(0xfe))?.[x(0xf0)]();this[x(0xe0)]=c??[];const e=this[x(0xe0)]['length']===0x1?this[x(0xe0)][0x0]:null,f=e?this[x(0x10b)]['getBindings'](e):[];this['_add']['disabled']=!e||!e['serviceContainer'][x(0xf1)]['openBindingsEditor'];const g=JSON[x(0xfb)](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0xd7)]=g,this['_rows'][x(0x114)]();if(!e){const h=document['createElement']('div');h[x(0xf4)]='message',h['textContent']=x(0x115),this[x(0xee)][x(0x109)](h);return;}for(const i of f){const j=document[x(0xda)]('div');j[x(0xf4)]='row';const k=document[x(0xda)](x(0x111));k[x(0xdf)]=x(0x111),k[x(0xf4)]=x(0xe3),k[x(0xf5)]=i['targetName'],k['title']='Edit\x20class\x20binding:\x20'+i[x(0x10a)],k[x(0xfd)]=()=>this[x(0xe8)](e,i);const l=document['createElement']('span');l[x(0xf4)]='summary',l[x(0xf5)]='←\x20'+(i[x(0xec)]||i[x(0x10e)]?.['join'](';')||i[x(0x11d)]||'binding'),l['title']=l[x(0xf5)],l[x(0xff)]=()=>this[x(0xe8)](e,i);const m=document['createElement']('button');m[x(0xdf)]=x(0x111),m['textContent']='⋯',m[x(0xe6)]('aria-label',x(0x11c)+i[x(0x10a)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu[y(0xe1)]([{'title':'Edit\x20binding…','action':()=>this[y(0xe8)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':y(0x110),'action':()=>{const z=y;this[z(0x10b)][z(0xd8)](e,i),this[z(0xf8)](this[z(0xe0)]);}}],o);};m[x(0xfd)]=n,j[x(0xef)]=n,j[x(0xf9)](k,l,m),this['_rows'][x(0x109)](j);}}[u(0xfa)](){const A=u;if(!this[A(0x118)][A(0xeb)])this['showNameDialog'](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.[u(0x10a)]){const B=u;if(this['_editing'])return;const f=c['serviceContainer'][B(0xf1)][B(0xfc)];if(f){this['_editing']=!![];try{await f(this[B(0x10b)][B(0x112)](e),[c],d,BindingTarget[B(0xe9)]),this['refresh'](this[B(0xe0)]);}finally{this[B(0x102)]=![];}}}[u(0x106)](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x116)]['querySelector'](C(0xfe)))return;const f=document['createElement'](C(0xfe)),g=document[C(0xda)]('form'),h=document[C(0xda)]('h3');h['textContent']=d?C(0xe2):C(0xe7);const i=document[C(0xda)]('label');i[C(0xf5)]='Class\x20name';const j=document['createElement']('input');j['value']=e,j[C(0x107)]=!![];const k=document['createElement'](C(0xde));k['className']='help',k[C(0xf5)]=C(0x10c),i[C(0xf9)](j,k);const l=document[C(0xda)]('div');l[C(0xf4)]=C(0xe4),l[C(0xe6)]('role','alert'),l[C(0xf3)]=!![];const m=document[C(0xda)](C(0x10d));m[C(0xf4)]='actions';const n=document['createElement'](C(0x111));n[C(0xdf)]='button',n['textContent']='Cancel',n[C(0xfd)]=()=>f['close']();const o=document['createElement']('button');o['type']='submit',o['textContent']=d?C(0x119):'Next…',m['append'](n,o),g[C(0xf9)](h,i),g[C(0xf9)](l,m),f[C(0x109)](g),this['shadowRoot']['appendChild'](f),f['onclose']=()=>f['remove'](),g[C(0xf6)]=async p=>{const D=C;p[D(0xd9)]();const q=j['value']['trim'](),r=this['_service'][D(0x101)](c,q,d?.[D(0x10a)]);try{if(r)throw new Error(r);d&&this['_service']['rename'](c,d,q);f[D(0xf0)]();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this[D(0xe0)]);}catch(s){l['textContent']=s[D(0x104)],l[D(0xf3)]=![];}},f['showModal'](),j['focus']();}}customElements['define'](u(0x105),PropertyGridClassBindings);