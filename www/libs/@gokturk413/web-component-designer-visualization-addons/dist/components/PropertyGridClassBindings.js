const w=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1f4))/0x1+-parseInt(t(0x208))/0x2+parseInt(t(0x1d7))/0x3+parseInt(t(0x200))/0x4+-parseInt(t(0x211))/0x5*(parseInt(t(0x213))/0x6)+-parseInt(t(0x212))/0x7+parseInt(t(0x1d8))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe0838));function a(){const E=['aria-expanded','className','986776JBKrgt','querySelector','rename','shadowRoot','createElement','title','append','editBinding','Add\x20class\x20binding','195aoBVpi','11113214OvNzTY','117588cYsFsv','required','_editing','show','Edit\x20class\x20binding:\x20','type','help','_rows','button','1184160iOdMFf','5820720nnnneG','length','showNameDialog','onclick','name','refresh','appendChild','div','▾\x20Class\x20bindings','_toggle','input','_service','serviceContainer','dialog','ondblclick','_items','openBindingsEditor','showModal','disabled','error','aria-label','textContent','summary','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','hidden','rawValue','role','Edit\x20binding…','806570hXZhds','preventDefault','onsubmit','remove','Rename\x20class…','_signature','join','oncontextmenu','targetName','expression','define','label','7344160lXclgQ','Save','close','_add','setAttribute','message'];a=function(){return E;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x1d5;const e=a();let f=e[c];return f;}import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();['_rows'];['_add'];['_toggle'];['_signature'];['_editing']=![];static ['style']=css`
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
  `;constructor(){const u=b;super();const c=document['createElement'](u(0x1df));c['className']='header',this[u(0x1e1)]=document['createElement'](u(0x1d6)),this['_toggle'][u(0x218)]=u(0x1d6),this[u(0x1e1)]['className']='toggle',this['_toggle'][u(0x1ed)]=u(0x1e0),this['_toggle']['setAttribute'](u(0x206),'true'),this['_toggle'][u(0x1db)]=()=>{const v=u;this['_rows']['hidden']=!this['_rows'][v(0x1f0)],this['_toggle'][v(0x1ed)]=(this[v(0x1d5)]['hidden']?'▸':'▾')+'\x20Class\x20bindings',this['_toggle'][v(0x204)](v(0x206),String(!this['_rows']['hidden']));},this['_add']=document[u(0x20c)](u(0x1d6)),this['_add']['type']=u(0x1d6),this['_add']['textContent']='+',this['_add']['title']='Add\x20class\x20binding…',this[u(0x203)][u(0x204)]('aria-label','Add\x20class\x20binding'),this[u(0x203)]['onclick']=()=>this['addBinding'](),c[u(0x20e)](this['_toggle'],this[u(0x203)]),this[u(0x1d5)]=document[u(0x20c)](u(0x1df)),this[u(0x20b)]['append'](c,this['_rows']);}[w(0x1dd)](c){const x=w,d=this[x(0x1e7)][0x0]!==c?.[0x0]||this[x(0x1e7)][x(0x1d9)]!==c?.['length'];if(d)this['shadowRoot'][x(0x209)]('dialog')?.['close']();this['_items']=c??[];const e=this[x(0x1e7)][x(0x1d9)]===0x1?this[x(0x1e7)][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0x203)]['disabled']=!e||!e[x(0x1e4)]['config'][x(0x1e8)];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this[x(0x1f9)])return;this[x(0x1f9)]=g,this['_rows']['replaceChildren']();if(!e){const h=document['createElement']('div');h['className']='message',h['textContent']=x(0x1ef),this[x(0x1d5)]['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j['className']='row';const k=document['createElement'](x(0x1d6));k['type']=x(0x1d6),k[x(0x207)]=x(0x1dc),k[x(0x1ed)]=i['targetName'],k['title']=x(0x217)+i[x(0x1fc)],k[x(0x1db)]=()=>this['editBinding'](e,i);const l=document['createElement']('span');l[x(0x207)]=x(0x1ee),l[x(0x1ed)]='←\x20'+(i[x(0x1fd)]||i['bindableObjectNames']?.[x(0x1fa)](';')||i[x(0x1f1)]||'binding'),l[x(0x20d)]=l[x(0x1ed)],l[x(0x1e6)]=()=>this[x(0x20f)](e,i);const m=document['createElement'](x(0x1d6));m[x(0x218)]='button',m[x(0x1ed)]='⋯',m[x(0x204)](x(0x1ec),'Actions\x20for\x20class\x20binding\x20'+i[x(0x1fc)]);const n=o=>{const y=x;o[y(0x1f5)](),ContextMenu[y(0x216)]([{'title':y(0x1f3),'action':()=>this[y(0x20f)](e,i)},{'title':y(0x1f8),'action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x1e3)][z(0x1f7)](e,i),this['refresh'](this[z(0x1e7)]);}}],o);};m[x(0x1db)]=n,j[x(0x1fb)]=n,j[x(0x20e)](k,l,m),this['_rows']['appendChild'](j);}}['addBinding'](){const A=w;if(!this['_add'][A(0x1ea)])this[A(0x1da)](this[A(0x1e7)][0x0]);}async[w(0x20f)](c,d,e=d?.[w(0x1fc)]){const B=w;if(this['_editing'])return;const f=c['serviceContainer']['config'][B(0x1e8)];if(f){this['_editing']=!![];try{await f(this['_service']['createProperty'](e),[c],d,BindingTarget['class']),this['refresh'](this[B(0x1e7)]);}finally{this[B(0x215)]=![];}}}['showNameDialog'](c,d,e=d?.[w(0x1fc)]??''){const C=w;if(this['shadowRoot']['querySelector'](C(0x1e5)))return;const f=document[C(0x20c)]('dialog'),g=document['createElement']('form'),h=document[C(0x20c)]('h3');h['textContent']=d?'Rename\x20class':C(0x210);const i=document[C(0x20c)](C(0x1ff));i['textContent']='Class\x20name';const j=document[C(0x20c)](C(0x1e2));j['value']=e,j[C(0x214)]=!![];const k=document['createElement']('span');k['className']=C(0x219),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x20e)](j,k);const l=document['createElement'](C(0x1df));l['className']=C(0x1eb),l[C(0x204)](C(0x1f2),'alert'),l[C(0x1f0)]=!![];const m=document['createElement']('div');m['className']='actions';const n=document['createElement'](C(0x1d6));n['type']=C(0x1d6),n[C(0x1ed)]='Cancel',n[C(0x1db)]=()=>f[C(0x202)]();const o=document['createElement'](C(0x1d6));o[C(0x218)]='submit',o[C(0x1ed)]=d?C(0x201):'Next…',m[C(0x20e)](n,o),g['append'](h,i),g[C(0x20e)](l,m),f[C(0x1de)](g),this['shadowRoot'][C(0x1de)](f),f['onclose']=()=>f['remove'](),g[C(0x1f6)]=async p=>{const D=C;p[D(0x1f5)]();const q=j['value']['trim'](),r=this[D(0x1e3)]['validateName'](c,q,d?.[D(0x1fc)]);try{if(r)throw new Error(r);d&&this[D(0x1e3)][D(0x20a)](c,d,q);f[D(0x202)]();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this[D(0x1e7)]);}catch(s){l['textContent']=s[D(0x205)],l['hidden']=![];}},f[C(0x1e9)](),j['focus']();}}customElements[w(0x1fe)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);