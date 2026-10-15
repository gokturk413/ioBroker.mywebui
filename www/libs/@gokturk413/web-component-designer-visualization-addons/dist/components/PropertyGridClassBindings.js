const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1a6))/0x1*(-parseInt(t(0x176))/0x2)+-parseInt(t(0x1a7))/0x3+parseInt(t(0x16d))/0x4+parseInt(t(0x184))/0x5*(parseInt(t(0x173))/0x6)+parseInt(t(0x16c))/0x7+parseInt(t(0x18e))/0x8*(-parseInt(t(0x199))/0x9)+parseInt(t(0x16a))/0xa*(parseInt(t(0x189))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaa086));function a(){const E=['showModal','refresh','304JbpACP','appendChild','_toggle','querySelector','Add\x20class\x20binding…','value','onclick','Next…','hidden','error','oncontextmenu','68004mtVGDh','length','aria-expanded','name','button','dialog','remove','role','_rows','setAttribute','disabled','Cancel','true','610108mCVQrd','4147758BRyRbl','aria-label','help','style','append','message','shadowRoot','createProperty','editBinding','className','_service','serviceContainer','29650ZYCANn','submit','926408DmbNyL','1348648LEkaSx','close','Edit\x20class\x20binding:\x20','toggle','Edit\x20binding…','targetName','30HUUJtn','createElement','Save','2vjwChm','label','_items','▾\x20Class\x20bindings','type','rename','showNameDialog','_signature','title','alert','config','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','onclose','required','42855MUCEVd','textContent','_editing','span','Add\x20class\x20binding','9141jbHqyY','_add','expression'];a=function(){return E;};return a();}function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();['_rows'];[u(0x18a)];['_toggle'];[u(0x17d)];[u(0x186)]=![];static [u(0x161)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x167)]='header',this['_toggle']=document[v(0x174)](v(0x19d)),this['_toggle'][v(0x17a)]=v(0x19d),this[v(0x190)][v(0x167)]=v(0x170),this['_toggle']['textContent']=v(0x179),this['_toggle'][v(0x1a2)]('aria-expanded',v(0x1a5)),this[v(0x190)]['onclick']=()=>{const w=v;this['_rows']['hidden']=!this['_rows']['hidden'],this[w(0x190)][w(0x185)]=(this[w(0x1a1)][w(0x196)]?'▸':'▾')+'\x20Class\x20bindings',this['_toggle']['setAttribute'](w(0x19b),String(!this['_rows']['hidden']));},this['_add']=document[v(0x174)](v(0x19d)),this[v(0x18a)]['type']=v(0x19d),this['_add'][v(0x185)]='+',this[v(0x18a)][v(0x17e)]=v(0x192),this['_add'][v(0x1a2)](v(0x1a8),v(0x188)),this[v(0x18a)]['onclick']=()=>this['addBinding'](),c['append'](this[v(0x190)],this[v(0x18a)]),this['_rows']=document['createElement']('div'),this[v(0x164)]['append'](c,this[v(0x1a1)]);}['refresh'](c){const x=u,d=this[x(0x178)][0x0]!==c?.[0x0]||this[x(0x178)][x(0x19a)]!==c?.[x(0x19a)];if(d)this['shadowRoot'][x(0x191)]('dialog')?.['close']();this['_items']=c??[];const e=this['_items'][x(0x19a)]===0x1?this[x(0x178)][0x0]:null,f=e?this['_service']['getBindings'](e):[];this['_add'][x(0x1a3)]=!e||!e[x(0x169)][x(0x180)]['openBindingsEditor'];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this['_signature']=g,this['_rows']['replaceChildren']();if(!e){const h=document['createElement']('div');h[x(0x167)]=x(0x163),h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this['_rows'][x(0x18f)](h);return;}for(const i of f){const j=document['createElement']('div');j[x(0x167)]='row';const k=document[x(0x174)]('button');k['type']=x(0x19d),k['className']=x(0x19c),k[x(0x185)]=i[x(0x172)],k[x(0x17e)]=x(0x16f)+i[x(0x172)],k['onclick']=()=>this['editBinding'](e,i);const l=document['createElement'](x(0x187));l['className']='summary',l['textContent']='←\x20'+(i[x(0x18b)]||i['bindableObjectNames']?.['join'](';')||i['rawValue']||'binding'),l[x(0x17e)]=l[x(0x185)],l['ondblclick']=()=>this[x(0x166)](e,i);const m=document[x(0x174)]('button');m[x(0x17a)]=x(0x19d),m['textContent']='⋯',m[x(0x1a2)](x(0x1a8),'Actions\x20for\x20class\x20binding\x20'+i[x(0x172)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':y(0x171),'action':()=>this[y(0x166)](e,i)},{'title':'Rename\x20class…','action':()=>this[y(0x17c)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x168)]['remove'](e,i),this[z(0x18d)](this['_items']);}}],o);};m[x(0x194)]=n,j[x(0x198)]=n,j[x(0x162)](k,l,m),this[x(0x1a1)]['appendChild'](j);}}['addBinding'](){const A=u;if(!this['_add']['disabled'])this[A(0x17c)](this[A(0x178)][0x0]);}async[u(0x166)](c,d,e=d?.['targetName']){const B=u;if(this[B(0x186)])return;const f=c['serviceContainer'][B(0x180)]['openBindingsEditor'];if(f){this[B(0x186)]=!![];try{await f(this['_service'][B(0x165)](e),[c],d,BindingTarget['class']),this['refresh'](this['_items']);}finally{this['_editing']=![];}}}['showNameDialog'](c,d,e=d?.[u(0x172)]??''){const C=u;if(this[C(0x164)]['querySelector'](C(0x19e)))return;const f=document['createElement'](C(0x19e)),g=document['createElement']('form'),h=document['createElement']('h3');h['textContent']=d?'Rename\x20class':'Add\x20class\x20binding';const i=document[C(0x174)](C(0x177));i['textContent']='Class\x20name';const j=document[C(0x174)]('input');j[C(0x193)]=e,j[C(0x183)]=!![];const k=document[C(0x174)]('span');k[C(0x167)]=C(0x160),k['textContent']=C(0x181),i[C(0x162)](j,k);const l=document['createElement']('div');l[C(0x167)]=C(0x197),l[C(0x1a2)](C(0x1a0),C(0x17f)),l['hidden']=!![];const m=document['createElement']('div');m['className']='actions';const n=document[C(0x174)](C(0x19d));n['type']=C(0x19d),n['textContent']=C(0x1a4),n[C(0x194)]=()=>f[C(0x16e)]();const o=document['createElement']('button');o[C(0x17a)]=C(0x16b),o['textContent']=d?C(0x175):C(0x195),m[C(0x162)](n,o),g[C(0x162)](h,i),g[C(0x162)](l,m),f[C(0x18f)](g),this[C(0x164)]['appendChild'](f),f[C(0x182)]=()=>f[C(0x19f)](),g['onsubmit']=async p=>{const D=C;p['preventDefault']();const q=j[D(0x193)]['trim'](),r=this[D(0x168)]['validateName'](c,q,d?.[D(0x172)]);try{if(r)throw new Error(r);d&&this[D(0x168)][D(0x17b)](c,d,q);f[D(0x16e)]();if(!d)await this[D(0x166)](c,undefined,q);this['refresh'](this['_items']);}catch(s){l[D(0x185)]=s['message'],l['hidden']=![];}},f[C(0x18c)](),j['focus']();}}customElements['define']('node-projects-property-grid-class-bindings',PropertyGridClassBindings);