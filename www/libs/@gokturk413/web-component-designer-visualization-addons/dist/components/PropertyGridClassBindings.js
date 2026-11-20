const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x109))/0x1*(parseInt(t(0x107))/0x2)+parseInt(t(0x13a))/0x3*(parseInt(t(0x10b))/0x4)+parseInt(t(0x112))/0x5+-parseInt(t(0x122))/0x6*(-parseInt(t(0x142))/0x7)+-parseInt(t(0x123))/0x8+parseInt(t(0x13d))/0x9*(parseInt(t(0x12c))/0xa)+parseInt(t(0x119))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9d343));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';function b(c,d){c=c-0x100;const e=a();let f=e[c];return f;}import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0x11b)]=[];['_service']=new ClassBindingsPropertiesService();['_rows'];[u(0x145)];[u(0x12a)];[u(0x140)];['_editing']=![];static [u(0x108)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x118)]('div');c[v(0x113)]='header',this[v(0x12a)]=document['createElement'](v(0x101)),this[v(0x12a)]['type']='button',this[v(0x12a)][v(0x113)]=v(0x141),this[v(0x12a)]['textContent']=v(0x10f),this['_toggle']['setAttribute']('aria-expanded','true'),this[v(0x12a)][v(0x111)]=()=>{const w=v;this[w(0x117)]['hidden']=!this['_rows']['hidden'],this[w(0x12a)][w(0x139)]=(this['_rows'][w(0x11e)]?'▸':'▾')+w(0x11a),this[w(0x12a)][w(0x100)]('aria-expanded',String(!this['_rows'][w(0x11e)]));},this['_add']=document['createElement']('button'),this['_add']['type']=v(0x101),this[v(0x145)]['textContent']='+',this[v(0x145)]['title']='Add\x20class\x20binding…',this[v(0x145)][v(0x100)]('aria-label',v(0x105)),this[v(0x145)]['onclick']=()=>this[v(0x11d)](),c['append'](this['_toggle'],this['_add']),this[v(0x117)]=document['createElement'](v(0x13e)),this[v(0x11f)][v(0x144)](c,this[v(0x117)]);}['refresh'](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this['_items']['length']!==c?.[x(0x120)];if(d)this[x(0x11f)]['querySelector']('dialog')?.[x(0x121)]();this['_items']=c??[];const e=this[x(0x11b)][x(0x120)]===0x1?this[x(0x11b)][0x0]:null,f=e?this['_service']['getBindings'](e):[];this['_add'][x(0x129)]=!e||!e['serviceContainer'][x(0x12f)][x(0x12e)];const g=JSON[x(0x13b)](f[x(0x137)](({service:h,...i})=>i));if(!d&&g===this[x(0x140)])return;this[x(0x140)]=g,this[x(0x117)]['replaceChildren']();if(!e){const h=document[x(0x118)](x(0x13e));h['className']='message',h[x(0x139)]='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this['_rows']['appendChild'](h);return;}for(const i of f){const j=document[x(0x118)]('div');j['className']='row';const k=document['createElement']('button');k[x(0x130)]='button',k[x(0x113)]='name',k[x(0x139)]=i['targetName'],k[x(0x124)]=x(0x11c)+i[x(0x115)],k['onclick']=()=>this[x(0x138)](e,i);const l=document[x(0x118)](x(0x135));l['className']='summary',l[x(0x139)]='←\x20'+(i['expression']||i['bindableObjectNames']?.[x(0x133)](';')||i['rawValue']||'binding'),l[x(0x124)]=l[x(0x139)],l[x(0x10e)]=()=>this['editBinding'](e,i);const m=document['createElement'](x(0x101));m['type']='button',m[x(0x139)]='⋯',m['setAttribute'](x(0x12d),x(0x13c)+i[x(0x115)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':'Edit\x20binding…','action':()=>this[y(0x138)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x104)]['remove'](e,i),this[z(0x10a)](this['_items']);}}],o);};m[x(0x111)]=n,j[x(0x134)]=n,j[x(0x144)](k,l,m),this['_rows'][x(0x10c)](j);}}[u(0x11d)](){const A=u;if(!this['_add'][A(0x129)])this[A(0x10d)](this[A(0x11b)][0x0]);}async[u(0x138)](c,d,e=d?.['targetName']){const B=u;if(this[B(0x126)])return;const f=c['serviceContainer'][B(0x12f)][B(0x12e)];if(f){this['_editing']=!![];try{await f(this[B(0x104)][B(0x102)](e),[c],d,BindingTarget[B(0x110)]),this[B(0x10a)](this['_items']);}finally{this['_editing']=![];}}}[u(0x10d)](c,d,e=d?.[u(0x115)]??''){const C=u;if(this[C(0x11f)]['querySelector']('dialog'))return;const f=document['createElement']('dialog'),g=document['createElement'](C(0x143)),h=document[C(0x118)]('h3');h['textContent']=d?'Rename\x20class':C(0x105);const i=document['createElement']('label');i[C(0x139)]='Class\x20name';const j=document['createElement'](C(0x103));j['value']=e,j[C(0x128)]=!![];const k=document[C(0x118)](C(0x135));k[C(0x113)]=C(0x127),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i['append'](j,k);const l=document['createElement']('div');l['className']='error',l[C(0x100)](C(0x106),'alert'),l[C(0x11e)]=!![];const m=document[C(0x118)](C(0x13e));m['className']='actions';const n=document[C(0x118)]('button');n['type']='button',n['textContent']=C(0x136),n['onclick']=()=>f[C(0x121)]();const o=document['createElement']('button');o['type']='submit',o['textContent']=d?C(0x146):C(0x12b),m['append'](n,o),g[C(0x144)](h,i),g[C(0x144)](l,m),f[C(0x10c)](g),this[C(0x11f)]['appendChild'](f),f['onclose']=()=>f['remove'](),g['onsubmit']=async p=>{const D=C;p[D(0x116)]();const q=j['value']['trim'](),r=this[D(0x104)][D(0x125)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x104)][D(0x13f)](c,d,q);f['close']();if(!d)await this[D(0x138)](c,undefined,q);this['refresh'](this['_items']);}catch(s){l['textContent']=s[D(0x132)],l['hidden']=![];}},f['showModal'](),j['focus']();}}customElements[u(0x114)](u(0x131),PropertyGridClassBindings);function a(){const E=['editBinding','textContent','1587591UdULKy','stringify','Actions\x20for\x20class\x20binding\x20','1880667LQYowQ','div','rename','_signature','toggle','328755FqiJKV','form','append','_add','Save','setAttribute','button','createProperty','input','_service','Add\x20class\x20binding','role','166SiCBXO','style','8709otIjQB','refresh','4KBxqul','appendChild','showNameDialog','ondblclick','▾\x20Class\x20bindings','class','onclick','2682560qeawkt','className','define','targetName','preventDefault','_rows','createElement','3452702NkmVth','\x20Class\x20bindings','_items','Edit\x20class\x20binding:\x20','addBinding','hidden','shadowRoot','length','close','54JtBuIH','6827584OFPOVS','title','validateName','_editing','help','required','disabled','_toggle','Next…','20NmrtAe','aria-label','openBindingsEditor','config','type','node-projects-property-grid-class-bindings','message','join','oncontextmenu','span','Cancel','map'];a=function(){return E;};return a();}