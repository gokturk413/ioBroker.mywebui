const u=b;function b(c,d){c=c-0x164;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x186))/0x1*(-parseInt(t(0x16e))/0x2)+-parseInt(t(0x199))/0x3*(parseInt(t(0x19f))/0x4)+-parseInt(t(0x173))/0x5*(parseInt(t(0x1ae))/0x6)+parseInt(t(0x175))/0x7+-parseInt(t(0x180))/0x8+-parseInt(t(0x172))/0x9+parseInt(t(0x197))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xadd20));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['openBindingsEditor','div','refresh','7139260GfEqxK','button','3ESnlSw','getBindings','actions','name','trim','_rows','263108poioRq','remove','_service','textContent','ondblclick','map','Rename\x20class…','toggle','type','_editing','value','replaceChildren','Next…','config','dialog','250644bkJtZl','Actions\x20for\x20class\x20binding\x20','Save','_toggle','Edit\x20class\x20binding:\x20','_items','showModal','show','aria-label','Add\x20class\x20binding','addBinding','showNameDialog','751148IIhSxw','style','hidden','editBinding','833139LFQNei','110PnszKX','submit','1375934NMobxR','close','title','aria-expanded','targetName','join','message','length','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','_add','querySelector','1982928olyMcx','header','append','createElement','define','shadowRoot','3hNMWbn','Edit\x20binding…','row','appendChild','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','validateName','className','setAttribute','Rename\x20class','_signature','span','onclick','node-projects-property-grid-class-bindings','class'];a=function(){return E;};return a();}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x1a1)]=new ClassBindingsPropertiesService();['_rows'];['_add'];['_toggle'];[u(0x18f)];[u(0x1a8)]=![];static [u(0x16f)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x183)]('div');c['className']=v(0x181),this[v(0x165)]=document[v(0x183)](v(0x198)),this['_toggle'][v(0x1a7)]=v(0x198),this['_toggle'][v(0x18c)]=v(0x1a6),this[v(0x165)]['textContent']='▾\x20Class\x20bindings',this[v(0x165)]['setAttribute']('aria-expanded','true'),this['_toggle']['onclick']=()=>{const w=v;this['_rows']['hidden']=!this['_rows']['hidden'],this['_toggle']['textContent']=(this['_rows'][w(0x170)]?'▸':'▾')+'\x20Class\x20bindings',this['_toggle']['setAttribute'](w(0x178),String(!this['_rows']['hidden']));},this[v(0x17e)]=document[v(0x183)]('button'),this['_add'][v(0x1a7)]='button',this[v(0x17e)][v(0x1a2)]='+',this['_add']['title']='Add\x20class\x20binding…',this[v(0x17e)]['setAttribute'](v(0x16a),v(0x16b)),this['_add'][v(0x191)]=()=>this[v(0x16c)](),c['append'](this[v(0x165)],this[v(0x17e)]),this[v(0x19e)]=document['createElement'](v(0x195)),this['shadowRoot'][v(0x182)](c,this[v(0x19e)]);}[u(0x196)](c){const x=u,d=this[x(0x167)][0x0]!==c?.[0x0]||this['_items']['length']!==c?.[x(0x17c)];if(d)this[x(0x185)][x(0x17f)](x(0x1ad))?.[x(0x176)]();this['_items']=c??[];const e=this[x(0x167)][x(0x17c)]===0x1?this[x(0x167)][0x0]:null,f=e?this['_service'][x(0x19a)](e):[];this['_add']['disabled']=!e||!e['serviceContainer'][x(0x1ac)]['openBindingsEditor'];const g=JSON['stringify'](f[x(0x1a4)](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this['_signature']=g,this[x(0x19e)][x(0x1aa)]();if(!e){const h=document[x(0x183)]('div');h[x(0x18c)]='message',h[x(0x1a2)]=x(0x17d),this['_rows']['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j['className']=x(0x188);const k=document['createElement'](x(0x198));k['type']='button',k[x(0x18c)]=x(0x19c),k[x(0x1a2)]=i[x(0x179)],k[x(0x177)]=x(0x166)+i['targetName'],k[x(0x191)]=()=>this['editBinding'](e,i);const l=document['createElement']('span');l[x(0x18c)]='summary',l[x(0x1a2)]='←\x20'+(i['expression']||i['bindableObjectNames']?.[x(0x17a)](';')||i['rawValue']||'binding'),l[x(0x177)]=l[x(0x1a2)],l[x(0x1a3)]=()=>this['editBinding'](e,i);const m=document[x(0x183)]('button');m[x(0x1a7)]=x(0x198),m[x(0x1a2)]='⋯',m[x(0x18d)](x(0x16a),x(0x1af)+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu[y(0x169)]([{'title':y(0x187),'action':()=>this['editBinding'](e,i)},{'title':y(0x1a5),'action':()=>this[y(0x16d)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this['_service'][z(0x1a0)](e,i),this[z(0x196)](this[z(0x167)]);}}],o);};m[x(0x191)]=n,j['oncontextmenu']=n,j['append'](k,l,m),this[x(0x19e)]['appendChild'](j);}}[u(0x16c)](){const A=u;if(!this['_add']['disabled'])this[A(0x16d)](this[A(0x167)][0x0]);}async['editBinding'](c,d,e=d?.['targetName']){const B=u;if(this['_editing'])return;const f=c['serviceContainer']['config'][B(0x194)];if(f){this['_editing']=!![];try{await f(this['_service']['createProperty'](e),[c],d,BindingTarget[B(0x193)]),this[B(0x196)](this['_items']);}finally{this[B(0x1a8)]=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x185)]['querySelector']('dialog'))return;const f=document[C(0x183)]('dialog'),g=document['createElement']('form'),h=document['createElement']('h3');h['textContent']=d?C(0x18e):C(0x16b);const i=document[C(0x183)]('label');i[C(0x1a2)]='Class\x20name';const j=document['createElement']('input');j[C(0x1a9)]=e,j['required']=!![];const k=document['createElement'](C(0x190));k[C(0x18c)]='help',k[C(0x1a2)]=C(0x18a),i['append'](j,k);const l=document['createElement'](C(0x195));l[C(0x18c)]='error',l['setAttribute']('role','alert'),l[C(0x170)]=!![];const m=document[C(0x183)](C(0x195));m['className']=C(0x19b);const n=document['createElement'](C(0x198));n[C(0x1a7)]=C(0x198),n['textContent']='Cancel',n[C(0x191)]=()=>f['close']();const o=document[C(0x183)]('button');o['type']=C(0x174),o[C(0x1a2)]=d?C(0x164):C(0x1ab),m['append'](n,o),g[C(0x182)](h,i),g['append'](l,m),f[C(0x189)](g),this[C(0x185)][C(0x189)](f),f['onclose']=()=>f[C(0x1a0)](),g['onsubmit']=async p=>{const D=C;p['preventDefault']();const q=j['value'][D(0x19d)](),r=this[D(0x1a1)][D(0x18b)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x1a1)]['rename'](c,d,q);f[D(0x176)]();if(!d)await this[D(0x171)](c,undefined,q);this[D(0x196)](this['_items']);}catch(s){l[D(0x1a2)]=s[D(0x17b)],l['hidden']=![];}},f[C(0x168)](),j['focus']();}}customElements[u(0x184)](u(0x192),PropertyGridClassBindings);