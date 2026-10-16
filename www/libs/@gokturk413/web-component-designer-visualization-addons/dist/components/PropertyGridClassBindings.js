const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x163))/0x1+parseInt(t(0x147))/0x2*(parseInt(t(0x14c))/0x3)+-parseInt(t(0x130))/0x4*(-parseInt(t(0x133))/0x5)+-parseInt(t(0x140))/0x6+-parseInt(t(0x151))/0x7*(parseInt(t(0x142))/0x8)+parseInt(t(0x13f))/0x9*(parseInt(t(0x12a))/0xa)+parseInt(t(0x12d))/0xb*(parseInt(t(0x144))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc4d48));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['Rename\x20class','label','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','summary','Rename\x20class…','close','expression','binding','hidden','config','remove','validateName','append','name','Remove\x20binding','_items','910xerQFz','value','_service','583mPVCHU','setAttribute','replaceChildren','20aqyXmM','define','onclose','785310IrOjWB','editBinding','Edit\x20binding…','Add\x20class\x20binding','Next…','title','trim','textContent','_editing','rename','actions','button','144549mlqqfQ','8879430ZgDfRU','message','3704olOhou','shadowRoot','124272eBmvPU','length','style','184274OvNJSF','_add','appendChild','error','Class\x20name','39IAjjJD','class','onclick','showNameDialog','createProperty','19915eWwSOJ','Cancel','_toggle','showModal','row','aria-expanded','show','node-projects-property-grid-class-bindings','Edit\x20class\x20binding:\x20','ondblclick','_signature','dialog','targetName','serviceContainer','_rows','addBinding','div','rawValue','390154jHGWEa','refresh','className','onsubmit','Save','type','form','stringify','preventDefault','createElement','querySelector','submit'];a=function(){return E;};return a();}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0x129)]=[];[u(0x12c)]=new ClassBindingsPropertiesService();[u(0x15f)];['_add'];[u(0x153)];[u(0x15b)];[u(0x13b)]=![];static [u(0x146)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x16c)]('div');c['className']='header',this['_toggle']=document[v(0x16c)]('button'),this[v(0x153)]['type']=v(0x13e),this[v(0x153)][v(0x165)]='toggle',this['_toggle'][v(0x13a)]='▾\x20Class\x20bindings',this['_toggle']['setAttribute'](v(0x156),'true'),this[v(0x153)]['onclick']=()=>{const w=v;this['_rows'][w(0x122)]=!this['_rows']['hidden'],this['_toggle'][w(0x13a)]=(this['_rows']['hidden']?'▸':'▾')+'\x20Class\x20bindings',this[w(0x153)][w(0x12e)]('aria-expanded',String(!this['_rows'][w(0x122)]));},this['_add']=document['createElement'](v(0x13e)),this['_add'][v(0x168)]=v(0x13e),this['_add']['textContent']='+',this[v(0x148)]['title']='Add\x20class\x20binding…',this['_add']['setAttribute']('aria-label',v(0x136)),this['_add']['onclick']=()=>this['addBinding'](),c['append'](this['_toggle'],this['_add']),this[v(0x15f)]=document[v(0x16c)]('div'),this[v(0x143)][v(0x126)](c,this[v(0x15f)]);}[u(0x164)](c){const x=u,d=this[x(0x129)][0x0]!==c?.[0x0]||this[x(0x129)]['length']!==c?.[x(0x145)];if(d)this['shadowRoot'][x(0x16d)]('dialog')?.[x(0x11f)]();this['_items']=c??[];const e=this[x(0x129)][x(0x145)]===0x1?this['_items'][0x0]:null,f=e?this[x(0x12c)]['getBindings'](e):[];this['_add']['disabled']=!e||!e[x(0x15e)][x(0x123)]['openBindingsEditor'];const g=JSON[x(0x16a)](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this['_signature']=g,this['_rows'][x(0x12f)]();if(!e){const h=document[x(0x16c)](x(0x161));h[x(0x165)]=x(0x141),h[x(0x13a)]='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this[x(0x15f)][x(0x149)](h);return;}for(const i of f){const j=document['createElement'](x(0x161));j[x(0x165)]=x(0x155);const k=document[x(0x16c)](x(0x13e));k[x(0x168)]=x(0x13e),k['className']=x(0x127),k['textContent']=i['targetName'],k['title']=x(0x159)+i['targetName'],k[x(0x14e)]=()=>this[x(0x134)](e,i);const l=document['createElement']('span');l[x(0x165)]=x(0x11d),l[x(0x13a)]='←\x20'+(i[x(0x120)]||i['bindableObjectNames']?.['join'](';')||i[x(0x162)]||x(0x121)),l[x(0x138)]=l['textContent'],l[x(0x15a)]=()=>this['editBinding'](e,i);const m=document[x(0x16c)]('button');m[x(0x168)]='button',m[x(0x13a)]='⋯',m['setAttribute']('aria-label','Actions\x20for\x20class\x20binding\x20'+i[x(0x15d)]);const n=o=>{const y=x;o[y(0x16b)](),ContextMenu[y(0x157)]([{'title':y(0x135),'action':()=>this[y(0x134)](e,i)},{'title':y(0x11e),'action':()=>this['showNameDialog'](e,i)},{'title':y(0x128),'action':()=>{const z=y;this[z(0x12c)][z(0x124)](e,i),this['refresh'](this[z(0x129)]);}}],o);};m[x(0x14e)]=n,j['oncontextmenu']=n,j[x(0x126)](k,l,m),this[x(0x15f)]['appendChild'](j);}}[u(0x160)](){const A=u;if(!this[A(0x148)]['disabled'])this['showNameDialog'](this[A(0x129)][0x0]);}async['editBinding'](c,d,e=d?.[u(0x15d)]){const B=u;if(this[B(0x13b)])return;const f=c['serviceContainer'][B(0x123)]['openBindingsEditor'];if(f){this[B(0x13b)]=!![];try{await f(this[B(0x12c)][B(0x150)](e),[c],d,BindingTarget[B(0x14d)]),this[B(0x164)](this['_items']);}finally{this['_editing']=![];}}}[u(0x14f)](c,d,e=d?.[u(0x15d)]??''){const C=u;if(this['shadowRoot']['querySelector'](C(0x15c)))return;const f=document['createElement']('dialog'),g=document[C(0x16c)](C(0x169)),h=document[C(0x16c)]('h3');h['textContent']=d?C(0x16f):C(0x136);const i=document['createElement'](C(0x170));i[C(0x13a)]=C(0x14b);const j=document['createElement']('input');j[C(0x12b)]=e,j['required']=!![];const k=document[C(0x16c)]('span');k['className']='help',k[C(0x13a)]=C(0x171),i['append'](j,k);const l=document[C(0x16c)](C(0x161));l['className']=C(0x14a),l['setAttribute']('role','alert'),l[C(0x122)]=!![];const m=document['createElement'](C(0x161));m[C(0x165)]=C(0x13d);const n=document['createElement']('button');n[C(0x168)]='button',n['textContent']=C(0x152),n[C(0x14e)]=()=>f['close']();const o=document['createElement']('button');o['type']=C(0x16e),o[C(0x13a)]=d?C(0x167):C(0x137),m[C(0x126)](n,o),g['append'](h,i),g[C(0x126)](l,m),f[C(0x149)](g),this['shadowRoot']['appendChild'](f),f[C(0x132)]=()=>f['remove'](),g[C(0x166)]=async p=>{const D=C;p['preventDefault']();const q=j['value'][D(0x139)](),r=this['_service'][D(0x125)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x12c)][D(0x13c)](c,d,q);f[D(0x11f)]();if(!d)await this[D(0x134)](c,undefined,q);this['refresh'](this['_items']);}catch(s){l[D(0x13a)]=s['message'],l['hidden']=![];}},f[C(0x154)](),j['focus']();}}function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}customElements[u(0x131)](u(0x158),PropertyGridClassBindings);