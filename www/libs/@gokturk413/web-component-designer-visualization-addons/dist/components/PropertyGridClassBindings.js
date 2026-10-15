const u=b;function a(){const E=['expression','_editing','targetName','_toggle','close','stringify','preventDefault','1221cQTpLZ','appendChild','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','textContent','input','getBindings','600130egiURI','Edit\x20class\x20binding:\x20','setAttribute','createElement','9yZFbGj','Save','validateName','append','88NLjnAb','toggle','config','ondblclick','role','Remove\x20binding','header','hidden','div','3495270mzVZXq','disabled','16120206NIESUs','button','map','span','createProperty','1771132prDZJx','showModal','editBinding','5658370ltMBYY','_service','remove','_add','querySelector','177106JCdTgs','▾\x20Class\x20bindings','className','message','serviceContainer','dialog','type','_items','\x20Class\x20bindings','form','rename','join','6JXFQaE','submit','class','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','Actions\x20for\x20class\x20binding\x20','showNameDialog','994973GuKwdF','onclick','_rows','Add\x20class\x20binding…','addBinding','bindableObjectNames','Cancel','Class\x20name','refresh','true','trim'];a=function(){return E;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x18a))/0x1*(parseInt(t(0x17e))/0x2)+parseInt(t(0x162))/0x3*(-parseInt(t(0x176))/0x4)+-parseInt(t(0x179))/0x5+parseInt(t(0x16f))/0x6+-parseInt(t(0x190))/0x7*(parseInt(t(0x166))/0x8)+-parseInt(t(0x171))/0x9+-parseInt(t(0x15e))/0xa*(-parseInt(t(0x158))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdb3c0));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';function b(c,d){c=c-0x14d;const e=a();let f=e[c];return f;}import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();[u(0x192)];['_add'];['_toggle'];['_signature'];[u(0x152)]=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x161)]('div');c[v(0x180)]=v(0x16c),this['_toggle']=document[v(0x161)]('button'),this['_toggle'][v(0x184)]='button',this[v(0x154)][v(0x180)]=v(0x167),this['_toggle']['textContent']=v(0x17f),this['_toggle'][v(0x160)]('aria-expanded',v(0x14f)),this[v(0x154)]['onclick']=()=>{const w=v;this['_rows']['hidden']=!this['_rows']['hidden'],this['_toggle']['textContent']=(this['_rows'][w(0x16d)]?'▸':'▾')+w(0x186),this['_toggle'][w(0x160)]('aria-expanded',String(!this['_rows']['hidden']));},this['_add']=document['createElement'](v(0x172)),this[v(0x17c)][v(0x184)]='button',this['_add'][v(0x15b)]='+',this['_add']['title']=v(0x193),this['_add'][v(0x160)]('aria-label','Add\x20class\x20binding'),this['_add'][v(0x191)]=()=>this['addBinding'](),c[v(0x165)](this[v(0x154)],this['_add']),this['_rows']=document['createElement']('div'),this['shadowRoot'][v(0x165)](c,this[v(0x192)]);}['refresh'](c){const x=u,d=this[x(0x185)][0x0]!==c?.[0x0]||this[x(0x185)]['length']!==c?.['length'];if(d)this['shadowRoot']['querySelector'](x(0x183))?.['close']();this[x(0x185)]=c??[];const e=this[x(0x185)]['length']===0x1?this['_items'][0x0]:null,f=e?this[x(0x17a)][x(0x15d)](e):[];this[x(0x17c)][x(0x170)]=!e||!e['serviceContainer'][x(0x168)]['openBindingsEditor'];const g=JSON[x(0x156)](f[x(0x173)](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this['_signature']=g,this[x(0x192)]['replaceChildren']();if(!e){const h=document['createElement']('div');h['className']=x(0x181),h['textContent']=x(0x15a),this['_rows'][x(0x159)](h);return;}for(const i of f){const j=document['createElement']('div');j['className']='row';const k=document[x(0x161)](x(0x172));k['type']=x(0x172),k['className']='name',k['textContent']=i[x(0x153)],k['title']=x(0x15f)+i['targetName'],k[x(0x191)]=()=>this[x(0x178)](e,i);const l=document[x(0x161)](x(0x174));l[x(0x180)]='summary',l['textContent']='←\x20'+(i[x(0x151)]||i[x(0x195)]?.[x(0x189)](';')||i['rawValue']||'binding'),l['title']=l['textContent'],l[x(0x169)]=()=>this['editBinding'](e,i);const m=document['createElement'](x(0x172));m[x(0x184)]=x(0x172),m['textContent']='⋯',m['setAttribute']('aria-label',x(0x18e)+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':'Edit\x20binding…','action':()=>this['editBinding'](e,i)},{'title':'Rename\x20class…','action':()=>this[y(0x18f)](e,i)},{'title':y(0x16b),'action':()=>{const z=y;this[z(0x17a)][z(0x17b)](e,i),this[z(0x14e)](this['_items']);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this['_rows']['appendChild'](j);}}[u(0x194)](){const A=u;if(!this['_add']['disabled'])this['showNameDialog'](this[A(0x185)][0x0]);}async['editBinding'](c,d,e=d?.[u(0x153)]){const B=u;if(this[B(0x152)])return;const f=c[B(0x182)]['config']['openBindingsEditor'];if(f){this[B(0x152)]=!![];try{await f(this[B(0x17a)][B(0x175)](e),[c],d,BindingTarget[B(0x18c)]),this[B(0x14e)](this['_items']);}finally{this[B(0x152)]=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this['shadowRoot'][C(0x17d)](C(0x183)))return;const f=document['createElement'](C(0x183)),g=document['createElement'](C(0x187)),h=document[C(0x161)]('h3');h[C(0x15b)]=d?'Rename\x20class':'Add\x20class\x20binding';const i=document[C(0x161)]('label');i[C(0x15b)]=C(0x14d);const j=document['createElement'](C(0x15c));j['value']=e,j['required']=!![];const k=document[C(0x161)](C(0x174));k['className']='help',k[C(0x15b)]=C(0x18d),i['append'](j,k);const l=document[C(0x161)]('div');l['className']='error',l['setAttribute'](C(0x16a),'alert'),l['hidden']=!![];const m=document['createElement'](C(0x16e));m['className']='actions';const n=document['createElement']('button');n[C(0x184)]=C(0x172),n[C(0x15b)]=C(0x196),n[C(0x191)]=()=>f[C(0x155)]();const o=document[C(0x161)](C(0x172));o[C(0x184)]=C(0x18b),o[C(0x15b)]=d?C(0x163):'Next…',m['append'](n,o),g[C(0x165)](h,i),g['append'](l,m),f['appendChild'](g),this['shadowRoot'][C(0x159)](f),f['onclose']=()=>f[C(0x17b)](),g['onsubmit']=async p=>{const D=C;p[D(0x157)]();const q=j['value'][D(0x150)](),r=this[D(0x17a)][D(0x164)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x17a)][D(0x188)](c,d,q);f['close']();if(!d)await this[D(0x178)](c,undefined,q);this[D(0x14e)](this['_items']);}catch(s){l['textContent']=s['message'],l[D(0x16d)]=![];}},f[C(0x177)](),j['focus']();}}customElements['define']('node-projects-property-grid-class-bindings',PropertyGridClassBindings);