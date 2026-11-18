const u=b;function b(c,d){c=c-0x142;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x157))/0x1*(-parseInt(t(0x14c))/0x2)+-parseInt(t(0x171))/0x3+parseInt(t(0x16a))/0x4*(parseInt(t(0x172))/0x5)+parseInt(t(0x179))/0x6*(-parseInt(t(0x161))/0x7)+-parseInt(t(0x168))/0x8+parseInt(t(0x174))/0x9*(parseInt(t(0x159))/0xa)+-parseInt(t(0x185))/0xb*(parseInt(t(0x165))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa6076));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x15c)]=new ClassBindingsPropertiesService();[u(0x167)];['_add'];[u(0x15a)];['_signature'];['_editing']=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement'](v(0x18b));c['className']=v(0x15b),this['_toggle']=document['createElement'](v(0x182)),this['_toggle']['type']='button',this[v(0x15a)]['className']=v(0x17e),this['_toggle']['textContent']='▾\x20Class\x20bindings',this['_toggle']['setAttribute'](v(0x15f),v(0x178)),this[v(0x15a)][v(0x14b)]=()=>{const w=v;this[w(0x167)]['hidden']=!this['_rows'][w(0x145)],this[w(0x15a)][w(0x187)]=(this[w(0x167)]['hidden']?'▸':'▾')+'\x20Class\x20bindings',this['_toggle'][w(0x188)](w(0x15f),String(!this[w(0x167)][w(0x145)]));},this[v(0x18d)]=document['createElement']('button'),this['_add']['type']='button',this[v(0x18d)]['textContent']='+',this['_add'][v(0x17d)]=v(0x17b),this[v(0x18d)][v(0x188)]('aria-label',v(0x173)),this['_add']['onclick']=()=>this[v(0x16c)](),c['append'](this[v(0x15a)],this[v(0x18d)]),this[v(0x167)]=document['createElement'](v(0x18b)),this[v(0x186)]['append'](c,this[v(0x167)]);}[u(0x163)](c){const x=u,d=this[x(0x18e)][0x0]!==c?.[0x0]||this[x(0x18e)][x(0x184)]!==c?.['length'];if(d)this['shadowRoot']['querySelector']('dialog')?.['close']();this['_items']=c??[];const e=this['_items']['length']===0x1?this['_items'][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0x18d)][x(0x146)]=!e||!e['serviceContainer'][x(0x176)][x(0x150)];const g=JSON['stringify'](f[x(0x189)](({service:h,...i})=>i));if(!d&&g===this[x(0x144)])return;this['_signature']=g,this[x(0x167)][x(0x17f)]();if(!e){const h=document[x(0x14a)](x(0x18b));h['className']=x(0x181),h[x(0x187)]=x(0x153),this[x(0x167)]['appendChild'](h);return;}for(const i of f){const j=document['createElement'](x(0x18b));j[x(0x17a)]='row';const k=document[x(0x14a)](x(0x182));k[x(0x18c)]='button',k[x(0x17a)]='name',k[x(0x187)]=i['targetName'],k['title']=x(0x156)+i[x(0x152)],k[x(0x14b)]=()=>this['editBinding'](e,i);const l=document['createElement'](x(0x164));l['className']=x(0x147),l[x(0x187)]='←\x20'+(i['expression']||i[x(0x166)]?.['join'](';')||i[x(0x15d)]||'binding'),l[x(0x17d)]=l[x(0x187)],l['ondblclick']=()=>this['editBinding'](e,i);const m=document['createElement']('button');m['type']=x(0x182),m['textContent']='⋯',m[x(0x188)](x(0x170),'Actions\x20for\x20class\x20binding\x20'+i[x(0x152)]);const n=o=>{const y=x;o[y(0x15e)](),ContextMenu['show']([{'title':y(0x16e),'action':()=>this[y(0x18f)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this['_service'][z(0x183)](e,i),this['refresh'](this['_items']);}}],o);};m[x(0x14b)]=n,j[x(0x155)]=n,j['append'](k,l,m),this[x(0x167)]['appendChild'](j);}}['addBinding'](){const A=u;if(!this[A(0x18d)][A(0x146)])this['showNameDialog'](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.[u(0x152)]){const B=u;if(this['_editing'])return;const f=c['serviceContainer'][B(0x176)][B(0x150)];if(f){this[B(0x17c)]=!![];try{await f(this[B(0x15c)]['createProperty'](e),[c],d,BindingTarget['class']),this['refresh'](this[B(0x18e)]);}finally{this['_editing']=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x186)][C(0x143)]('dialog'))return;const f=document[C(0x14a)]('dialog'),g=document[C(0x14a)]('form'),h=document['createElement']('h3');h[C(0x187)]=d?C(0x14f):'Add\x20class\x20binding';const i=document['createElement'](C(0x158));i['textContent']=C(0x149);const j=document[C(0x14a)](C(0x154));j['value']=e,j['required']=!![];const k=document[C(0x14a)]('span');k['className']='help',k[C(0x187)]='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x16d)](j,k);const l=document[C(0x14a)]('div');l[C(0x17a)]=C(0x16b),l['setAttribute'](C(0x160),C(0x18a)),l[C(0x145)]=!![];const m=document['createElement']('div');m[C(0x17a)]=C(0x151);const n=document['createElement'](C(0x182));n['type']='button',n[C(0x187)]=C(0x169),n[C(0x14b)]=()=>f['close']();const o=document['createElement'](C(0x182));o[C(0x18c)]='submit',o['textContent']=d?C(0x148):'Next…',m[C(0x16d)](n,o),g[C(0x16d)](h,i),g['append'](l,m),f[C(0x180)](g),this[C(0x186)][C(0x180)](f),f[C(0x14e)]=()=>f[C(0x183)](),g['onsubmit']=async p=>{const D=C;p[D(0x15e)]();const q=j[D(0x177)][D(0x175)](),r=this['_service']['validateName'](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this['_service'][D(0x16f)](c,d,q);f[D(0x142)]();if(!d)await this[D(0x18f)](c,undefined,q);this[D(0x163)](this['_items']);}catch(s){l['textContent']=s[D(0x181)],l['hidden']=![];}},f['showModal'](),j['focus']();}}function a(){const E=['div','type','_add','_items','editBinding','close','querySelector','_signature','hidden','disabled','summary','Save','Class\x20name','createElement','onclick','7432PUejWU','node-projects-property-grid-class-bindings','onclose','Rename\x20class','openBindingsEditor','actions','targetName','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','input','oncontextmenu','Edit\x20class\x20binding:\x20','317jRUGhJ','label','22310pLtoFX','_toggle','header','_service','rawValue','preventDefault','aria-expanded','role','3199DCcGyi','define','refresh','span','12CwtcIU','bindableObjectNames','_rows','2842632hpYruR','Cancel','40aosHYb','error','addBinding','append','Edit\x20binding…','rename','aria-label','1962693qYizdN','432295mDFCXz','Add\x20class\x20binding','3618NWhmzP','trim','config','value','true','5604NxByKy','className','Add\x20class\x20binding…','_editing','title','toggle','replaceChildren','appendChild','message','button','remove','length','9052692XQsgXv','shadowRoot','textContent','setAttribute','map','alert'];a=function(){return E;};return a();}customElements[u(0x162)](u(0x14d),PropertyGridClassBindings);