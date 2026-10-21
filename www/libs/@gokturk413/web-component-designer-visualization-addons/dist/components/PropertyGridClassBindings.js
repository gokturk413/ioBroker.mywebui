const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x14e))/0x1*(parseInt(t(0x141))/0x2)+parseInt(t(0x16f))/0x3*(-parseInt(t(0x13e))/0x4)+parseInt(t(0x158))/0x5*(-parseInt(t(0x159))/0x6)+-parseInt(t(0x172))/0x7+-parseInt(t(0x176))/0x8+-parseInt(t(0x13d))/0x9+parseInt(t(0x148))/0xa*(parseInt(t(0x166))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe1bf9));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const E=['4043745DkCxJD','help','input','6858040SrKVOe','shadowRoot','true','stringify','2793608tpFNqc','map','_items','targetName','config','message','oncontextmenu','textContent','refresh','showNameDialog','div','submit','error','rename','disabled','title','_signature','type','2999448qmrcRu','4nQueoQ','className','_rows','2ZedDTh','appendChild','value','row','Cancel','binding','aria-label','9740wRdPnr','class','editBinding','toggle','Next…','form','236173ZauZEs','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','button','span','onclose','length','_editing','createElement','_toggle','30rrsjBm','1068156CGUOQB','showModal','header','onclick','rawValue','append','name','aria-expanded','addBinding','_add','_service','Edit\x20binding…','define','53834SDrgJa','setAttribute','serviceContainer','querySelector','focus','Add\x20class\x20binding','actions','hidden','Save'];a=function(){return E;};return a();}import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function b(c,d){c=c-0x13a;const e=a();let f=e[c];return f;}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();['_rows'];[u(0x162)];['_toggle'];['_signature'];['_editing']=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x13f)]=v(0x15b),this[v(0x157)]=document['createElement']('button'),this['_toggle'][v(0x13c)]=v(0x151),this['_toggle'][v(0x13f)]=v(0x14b),this[v(0x157)]['textContent']='▾\x20Class\x20bindings',this[v(0x157)][v(0x167)](v(0x160),v(0x174)),this['_toggle'][v(0x15c)]=()=>{const w=v;this['_rows']['hidden']=!this[w(0x140)]['hidden'],this['_toggle'][w(0x17d)]=(this[w(0x140)]['hidden']?'▸':'▾')+'\x20Class\x20bindings',this['_toggle'][w(0x167)]('aria-expanded',String(!this['_rows'][w(0x16d)]));},this[v(0x162)]=document[v(0x156)]('button'),this[v(0x162)]['type']='button',this['_add'][v(0x17d)]='+',this['_add'][v(0x13a)]='Add\x20class\x20binding…',this[v(0x162)][v(0x167)](v(0x147),'Add\x20class\x20binding'),this[v(0x162)]['onclick']=()=>this[v(0x161)](),c[v(0x15e)](this[v(0x157)],this[v(0x162)]),this['_rows']=document[v(0x156)]('div'),this['shadowRoot'][v(0x15e)](c,this['_rows']);}[u(0x17e)](c){const x=u,d=this[x(0x178)][0x0]!==c?.[0x0]||this['_items'][x(0x154)]!==c?.[x(0x154)];if(d)this[x(0x173)]['querySelector']('dialog')?.['close']();this[x(0x178)]=c??[];const e=this[x(0x178)][x(0x154)]===0x1?this['_items'][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0x162)]['disabled']=!e||!e[x(0x168)][x(0x17a)]['openBindingsEditor'];const g=JSON[x(0x175)](f[x(0x177)](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0x13b)]=g,this[x(0x140)]['replaceChildren']();if(!e){const h=document['createElement'](x(0x180));h['className']=x(0x17b),h['textContent']=x(0x150),this[x(0x140)]['appendChild'](h);return;}for(const i of f){const j=document[x(0x156)]('div');j[x(0x13f)]=x(0x144);const k=document[x(0x156)]('button');k[x(0x13c)]='button',k['className']=x(0x15f),k['textContent']=i[x(0x179)],k['title']='Edit\x20class\x20binding:\x20'+i['targetName'],k['onclick']=()=>this['editBinding'](e,i);const l=document[x(0x156)]('span');l[x(0x13f)]='summary',l[x(0x17d)]='←\x20'+(i['expression']||i['bindableObjectNames']?.['join'](';')||i[x(0x15d)]||x(0x146)),l[x(0x13a)]=l['textContent'],l['ondblclick']=()=>this['editBinding'](e,i);const m=document[x(0x156)]('button');m[x(0x13c)]=x(0x151),m[x(0x17d)]='⋯',m['setAttribute'](x(0x147),'Actions\x20for\x20class\x20binding\x20'+i[x(0x179)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':y(0x164),'action':()=>this[y(0x14a)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x163)]['remove'](e,i),this['refresh'](this[z(0x178)]);}}],o);};m[x(0x15c)]=n,j[x(0x17c)]=n,j['append'](k,l,m),this['_rows'][x(0x142)](j);}}[u(0x161)](){const A=u;if(!this['_add'][A(0x184)])this[A(0x17f)](this[A(0x178)][0x0]);}async['editBinding'](c,d,e=d?.['targetName']){const B=u;if(this[B(0x155)])return;const f=c[B(0x168)][B(0x17a)]['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this['_service']['createProperty'](e),[c],d,BindingTarget[B(0x149)]),this[B(0x17e)](this[B(0x178)]);}finally{this[B(0x155)]=![];}}}[u(0x17f)](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x173)][C(0x169)]('dialog'))return;const f=document['createElement']('dialog'),g=document['createElement'](C(0x14d)),h=document['createElement']('h3');h[C(0x17d)]=d?'Rename\x20class':C(0x16b);const i=document['createElement']('label');i[C(0x17d)]='Class\x20name';const j=document[C(0x156)](C(0x171));j[C(0x143)]=e,j['required']=!![];const k=document[C(0x156)](C(0x152));k[C(0x13f)]=C(0x170),k[C(0x17d)]=C(0x14f),i[C(0x15e)](j,k);const l=document['createElement']('div');l[C(0x13f)]=C(0x182),l[C(0x167)]('role','alert'),l[C(0x16d)]=!![];const m=document[C(0x156)](C(0x180));m['className']=C(0x16c);const n=document[C(0x156)]('button');n[C(0x13c)]='button',n['textContent']=C(0x145),n[C(0x15c)]=()=>f['close']();const o=document['createElement']('button');o['type']=C(0x181),o[C(0x17d)]=d?C(0x16e):C(0x14c),m['append'](n,o),g[C(0x15e)](h,i),g['append'](l,m),f['appendChild'](g),this[C(0x173)]['appendChild'](f),f[C(0x153)]=()=>f['remove'](),g['onsubmit']=async p=>{const D=C;p['preventDefault']();const q=j[D(0x143)]['trim'](),r=this[D(0x163)]['validateName'](c,q,d?.[D(0x179)]);try{if(r)throw new Error(r);d&&this[D(0x163)][D(0x183)](c,d,q);f['close']();if(!d)await this[D(0x14a)](c,undefined,q);this['refresh'](this['_items']);}catch(s){l[D(0x17d)]=s[D(0x17b)],l[D(0x16d)]=![];}},f[C(0x15a)](),j[C(0x16a)]();}}customElements[u(0x165)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);