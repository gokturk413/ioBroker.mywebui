const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xf0))/0x1*(-parseInt(t(0x125))/0x2)+-parseInt(t(0xe7))/0x3*(-parseInt(t(0xfe))/0x4)+parseInt(t(0xef))/0x5+-parseInt(t(0x111))/0x6+parseInt(t(0xf5))/0x7*(parseInt(t(0x11a))/0x8)+-parseInt(t(0x124))/0x9+-parseInt(t(0xf3))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6e640));function b(c,d){c=c-0xe7;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['Save','_items','Remove\x20binding','span','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','Cancel','className','summary','dialog','_service','error','showNameDialog','help','node-projects-property-grid-class-bindings','show','onsubmit','querySelector','4260366gRIiZB','onclick','toggle','actions','Add\x20class\x20binding','true','define','▾\x20Class\x20bindings','name','2253296sKrPrf','_add','message','_editing','header','remove','config','rawValue','value','bindableObjectNames','1570086iKfNcB','14zgylcP','length','title','textContent','button','hidden','targetName','append','editBinding','_toggle','style','join','label','5496qWsmpm','div','alert','Edit\x20class\x20binding:\x20','role','Edit\x20binding…','createElement','_signature','3312090NsBYDI','81223bXsMWp','close','setAttribute','6907580ZqZUuB','preventDefault','7CriXXT','submit','appendChild','_rows','type','aria-expanded','focus','trim','Add\x20class\x20binding…','1124ngQUkL','aria-label'];a=function(){return E;};return a();}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x109)]=new ClassBindingsPropertiesService();[u(0xf8)];[u(0x11b)];[u(0x12e)];['_signature'];[u(0x11d)]=![];static [u(0x12f)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x106)]=v(0x11e),this[v(0x12e)]=document[v(0xed)](v(0x129)),this['_toggle'][v(0xf9)]=v(0x129),this['_toggle'][v(0x106)]=v(0x113),this['_toggle']['textContent']=v(0x118),this[v(0x12e)]['setAttribute'](v(0xfa),v(0x116)),this[v(0x12e)]['onclick']=()=>{const w=v;this['_rows'][w(0x12a)]=!this[w(0xf8)]['hidden'],this[w(0x12e)][w(0x128)]=(this[w(0xf8)][w(0x12a)]?'▸':'▾')+'\x20Class\x20bindings',this['_toggle'][w(0xf2)](w(0xfa),String(!this['_rows']['hidden']));},this[v(0x11b)]=document[v(0xed)](v(0x129)),this['_add'][v(0xf9)]='button',this[v(0x11b)]['textContent']='+',this['_add'][v(0x127)]=v(0xfd),this['_add']['setAttribute'](v(0xff),'Add\x20class\x20binding'),this['_add'][v(0x112)]=()=>this['addBinding'](),c[v(0x12c)](this['_toggle'],this[v(0x11b)]),this['_rows']=document[v(0xed)](v(0xe8)),this['shadowRoot']['append'](c,this[v(0xf8)]);}['refresh'](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this['_items'][x(0x126)]!==c?.['length'];if(d)this['shadowRoot']['querySelector']('dialog')?.['close']();this['_items']=c??[];const e=this['_items'][x(0x126)]===0x1?this[x(0x101)][0x0]:null,f=e?this[x(0x109)]['getBindings'](e):[];this['_add']['disabled']=!e||!e['serviceContainer'][x(0x120)]['openBindingsEditor'];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this[x(0xee)])return;this['_signature']=g,this[x(0xf8)]['replaceChildren']();if(!e){const h=document['createElement']('div');h['className']=x(0x11c),h[x(0x128)]=x(0x104),this[x(0xf8)][x(0xf7)](h);return;}for(const i of f){const j=document[x(0xed)]('div');j[x(0x106)]='row';const k=document['createElement']('button');k[x(0xf9)]=x(0x129),k[x(0x106)]=x(0x119),k[x(0x128)]=i[x(0x12b)],k['title']=x(0xea)+i['targetName'],k[x(0x112)]=()=>this[x(0x12d)](e,i);const l=document['createElement'](x(0x103));l['className']=x(0x107),l[x(0x128)]='←\x20'+(i['expression']||i[x(0x123)]?.[x(0x130)](';')||i[x(0x121)]||'binding'),l['title']=l['textContent'],l['ondblclick']=()=>this[x(0x12d)](e,i);const m=document[x(0xed)](x(0x129));m['type']='button',m['textContent']='⋯',m['setAttribute'](x(0xff),'Actions\x20for\x20class\x20binding\x20'+i[x(0x12b)]);const n=o=>{const y=x;o[y(0xf4)](),ContextMenu[y(0x10e)]([{'title':y(0xec),'action':()=>this[y(0x12d)](e,i)},{'title':'Rename\x20class…','action':()=>this[y(0x10b)](e,i)},{'title':y(0x102),'action':()=>{const z=y;this['_service']['remove'](e,i),this['refresh'](this[z(0x101)]);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this[x(0xf8)][x(0xf7)](j);}}['addBinding'](){const A=u;if(!this[A(0x11b)]['disabled'])this['showNameDialog'](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.[u(0x12b)]){const B=u;if(this['_editing'])return;const f=c['serviceContainer']['config']['openBindingsEditor'];if(f){this[B(0x11d)]=!![];try{await f(this['_service']['createProperty'](e),[c],d,BindingTarget['class']),this['refresh'](this[B(0x101)]);}finally{this[B(0x11d)]=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this['shadowRoot'][C(0x110)]('dialog'))return;const f=document['createElement'](C(0x108)),g=document['createElement']('form'),h=document[C(0xed)]('h3');h['textContent']=d?'Rename\x20class':C(0x115);const i=document['createElement'](C(0x131));i['textContent']='Class\x20name';const j=document['createElement']('input');j[C(0x122)]=e,j['required']=!![];const k=document['createElement']('span');k[C(0x106)]=C(0x10c),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x12c)](j,k);const l=document[C(0xed)]('div');l[C(0x106)]=C(0x10a),l['setAttribute'](C(0xeb),C(0xe9)),l[C(0x12a)]=!![];const m=document['createElement']('div');m[C(0x106)]=C(0x114);const n=document['createElement'](C(0x129));n[C(0xf9)]=C(0x129),n[C(0x128)]=C(0x105),n[C(0x112)]=()=>f[C(0xf1)]();const o=document[C(0xed)]('button');o[C(0xf9)]=C(0xf6),o[C(0x128)]=d?C(0x100):'Next…',m['append'](n,o),g[C(0x12c)](h,i),g[C(0x12c)](l,m),f['appendChild'](g),this['shadowRoot']['appendChild'](f),f['onclose']=()=>f[C(0x11f)](),g[C(0x10f)]=async p=>{const D=C;p['preventDefault']();const q=j['value'][D(0xfc)](),r=this['_service']['validateName'](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this['_service']['rename'](c,d,q);f[D(0xf1)]();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this['_items']);}catch(s){l[D(0x128)]=s[D(0x11c)],l[D(0x12a)]=![];}},f['showModal'](),j[C(0xfb)]();}}customElements[u(0x117)](u(0x10d),PropertyGridClassBindings);