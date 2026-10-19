const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x144))/0x1+-parseInt(t(0x14d))/0x2+-parseInt(t(0x151))/0x3*(parseInt(t(0x15e))/0x4)+-parseInt(t(0x166))/0x5*(-parseInt(t(0x146))/0x6)+parseInt(t(0x16a))/0x7+parseInt(t(0x158))/0x8+-parseInt(t(0x17d))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xca6b6));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const E=['\x20Class\x20bindings','hidden','dialog','_signature','_editing','replaceChildren','376890quQVKV','stringify','_add','aria-label','9471YXXczt','input','shadowRoot','editBinding','actions','node-projects-property-grid-class-bindings','createElement','2394672FWxmPB','serviceContainer','_rows','form','message','Next…','1984XfmNBa','row','rawValue','addBinding','_items','Cancel','type','targetName','974485OYxcQk','className','aria-expanded','refresh','1597764bEWeuk','button','setAttribute','join','summary','Class\x20name','disabled','append','submit','length','createProperty','bindableObjectNames','class','error','style','onclose','showNameDialog','oncontextmenu','alert','1940112rqxkbR','onclick','Remove\x20binding','required','close','appendChild','Actions\x20for\x20class\x20binding\x20','config','_toggle','preventDefault','remove','_service','title','validateName','div','Add\x20class\x20binding…','907130GhOPsR','textContent','42QjacHO'];a=function(){return E;};return a();}import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x141;const e=a();let f=e[c];return f;}import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x188)]=new ClassBindingsPropertiesService();['_rows'];['_add'];[u(0x185)];['_signature'];['_editing']=![];static [u(0x178)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x157)](v(0x142));c['className']='header',this['_toggle']=document[v(0x157)](v(0x16b)),this[v(0x185)][v(0x164)]=v(0x16b),this['_toggle']['className']='toggle',this[v(0x185)]['textContent']='▾\x20Class\x20bindings',this['_toggle'][v(0x16c)]('aria-expanded','true'),this[v(0x185)]['onclick']=()=>{const w=v;this[w(0x15a)][w(0x148)]=!this[w(0x15a)]['hidden'],this['_toggle']['textContent']=(this[w(0x15a)]['hidden']?'▸':'▾')+w(0x147),this['_toggle'][w(0x16c)](w(0x168),String(!this['_rows'][w(0x148)]));},this['_add']=document[v(0x157)]('button'),this['_add'][v(0x164)]=v(0x16b),this['_add'][v(0x145)]='+',this['_add'][v(0x189)]=v(0x143),this[v(0x14f)][v(0x16c)](v(0x150),'Add\x20class\x20binding'),this[v(0x14f)][v(0x17e)]=()=>this['addBinding'](),c['append'](this[v(0x185)],this[v(0x14f)]),this['_rows']=document[v(0x157)](v(0x142)),this['shadowRoot'][v(0x171)](c,this[v(0x15a)]);}[u(0x169)](c){const x=u,d=this[x(0x162)][0x0]!==c?.[0x0]||this[x(0x162)]['length']!==c?.['length'];if(d)this[x(0x153)]['querySelector']('dialog')?.[x(0x181)]();this['_items']=c??[];const e=this[x(0x162)][x(0x173)]===0x1?this['_items'][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0x14f)][x(0x170)]=!e||!e['serviceContainer'][x(0x184)]['openBindingsEditor'];const g=JSON[x(0x14e)](f['map'](({service:h,...i})=>i));if(!d&&g===this[x(0x14a)])return;this['_signature']=g,this[x(0x15a)][x(0x14c)]();if(!e){const h=document[x(0x157)](x(0x142));h[x(0x167)]=x(0x15c),h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this['_rows']['appendChild'](h);return;}for(const i of f){const j=document[x(0x157)](x(0x142));j['className']=x(0x15f);const k=document[x(0x157)](x(0x16b));k['type']='button',k['className']='name',k[x(0x145)]=i['targetName'],k['title']='Edit\x20class\x20binding:\x20'+i[x(0x165)],k['onclick']=()=>this['editBinding'](e,i);const l=document[x(0x157)]('span');l[x(0x167)]=x(0x16e),l['textContent']='←\x20'+(i['expression']||i[x(0x175)]?.[x(0x16d)](';')||i[x(0x160)]||'binding'),l['title']=l['textContent'],l['ondblclick']=()=>this['editBinding'](e,i);const m=document[x(0x157)]('button');m[x(0x164)]='button',m['textContent']='⋯',m[x(0x16c)](x(0x150),x(0x183)+i[x(0x165)]);const n=o=>{const y=x;o[y(0x186)](),ContextMenu['show']([{'title':'Edit\x20binding…','action':()=>this[y(0x154)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':y(0x17f),'action':()=>{const z=y;this['_service'][z(0x187)](e,i),this[z(0x169)](this['_items']);}}],o);};m[x(0x17e)]=n,j[x(0x17b)]=n,j['append'](k,l,m),this[x(0x15a)]['appendChild'](j);}}[u(0x161)](){const A=u;if(!this['_add'][A(0x170)])this[A(0x17a)](this[A(0x162)][0x0]);}async['editBinding'](c,d,e=d?.[u(0x165)]){const B=u;if(this[B(0x14b)])return;const f=c[B(0x159)][B(0x184)]['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this[B(0x188)][B(0x174)](e),[c],d,BindingTarget[B(0x176)]),this['refresh'](this['_items']);}finally{this['_editing']=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x153)]['querySelector'](C(0x149)))return;const f=document['createElement']('dialog'),g=document[C(0x157)](C(0x15b)),h=document['createElement']('h3');h['textContent']=d?'Rename\x20class':'Add\x20class\x20binding';const i=document[C(0x157)]('label');i['textContent']=C(0x16f);const j=document[C(0x157)](C(0x152));j['value']=e,j[C(0x180)]=!![];const k=document['createElement']('span');k[C(0x167)]='help',k[C(0x145)]='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x171)](j,k);const l=document['createElement'](C(0x142));l['className']=C(0x177),l['setAttribute']('role',C(0x17c)),l[C(0x148)]=!![];const m=document['createElement'](C(0x142));m['className']=C(0x155);const n=document[C(0x157)](C(0x16b));n[C(0x164)]='button',n[C(0x145)]=C(0x163),n[C(0x17e)]=()=>f['close']();const o=document[C(0x157)]('button');o[C(0x164)]=C(0x172),o[C(0x145)]=d?'Save':C(0x15d),m['append'](n,o),g[C(0x171)](h,i),g[C(0x171)](l,m),f[C(0x182)](g),this[C(0x153)]['appendChild'](f),f[C(0x179)]=()=>f[C(0x187)](),g['onsubmit']=async p=>{const D=C;p[D(0x186)]();const q=j['value']['trim'](),r=this['_service'][D(0x141)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x188)]['rename'](c,d,q);f[D(0x181)]();if(!d)await this['editBinding'](c,undefined,q);this[D(0x169)](this[D(0x162)]);}catch(s){l[D(0x145)]=s['message'],l[D(0x148)]=![];}},f['showModal'](),j['focus']();}}customElements['define'](u(0x156),PropertyGridClassBindings);