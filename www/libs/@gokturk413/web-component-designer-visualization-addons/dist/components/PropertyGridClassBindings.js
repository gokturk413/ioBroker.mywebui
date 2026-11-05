const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x19f))/0x1*(parseInt(t(0x169))/0x2)+-parseInt(t(0x182))/0x3+parseInt(t(0x183))/0x4*(-parseInt(t(0x18d))/0x5)+parseInt(t(0x163))/0x6*(parseInt(t(0x16c))/0x7)+parseInt(t(0x162))/0x8*(parseInt(t(0x1a3))/0x9)+parseInt(t(0x15e))/0xa*(-parseInt(t(0x19c))/0xb)+parseInt(t(0x192))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbd46d));function b(c,d){c=c-0x159;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';function a(){const E=['createElement','140tlslre','form','editBinding','Add\x20class\x20binding','1915688uDgMSO','67986aRcCnh','replaceChildren','map','append','error','span','1478tNYFAf','_service','label','133awmbkt','showNameDialog','type','config','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','title','getBindings','appendChild','targetName','alert','Save','_editing','serviceContainer','button','Edit\x20class\x20binding:\x20','class','length','required','row','expression','div','className','3317316HYruZw','10444sLnDoT','input','bindableObjectNames','querySelector','createProperty','▾\x20Class\x20bindings','Rename\x20class…','onclick','remove','onsubmit','1595EUFSRM','refresh','focus','hidden','dialog','35074464xDhNLl','_add','define','true','stringify','close','_items','textContent','Remove\x20binding','shadowRoot','469832wwheVl','_rows','help','1061bsTaQs','ondblclick','addBinding','_signature','36RegjGC','_toggle','setAttribute','style','disabled'];a=function(){return E;};return a();}import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x16a)]=new ClassBindingsPropertiesService();[u(0x19d)];['_add'];['_toggle'];[u(0x1a2)];['_editing']=![];static [u(0x15b)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0x181)]='header',this['_toggle']=document['createElement'](v(0x179)),this[v(0x159)]['type']='button',this['_toggle'][v(0x181)]='toggle',this[v(0x159)]['textContent']=v(0x188),this[v(0x159)][v(0x15a)]('aria-expanded',v(0x195)),this[v(0x159)][v(0x18a)]=()=>{const w=v;this[w(0x19d)][w(0x190)]=!this[w(0x19d)]['hidden'],this[w(0x159)]['textContent']=(this[w(0x19d)][w(0x190)]?'▸':'▾')+'\x20Class\x20bindings',this[w(0x159)][w(0x15a)]('aria-expanded',String(!this[w(0x19d)]['hidden']));},this['_add']=document[v(0x15d)]('button'),this[v(0x193)]['type']=v(0x179),this[v(0x193)][v(0x199)]='+',this['_add'][v(0x171)]='Add\x20class\x20binding…',this[v(0x193)]['setAttribute']('aria-label','Add\x20class\x20binding'),this['_add']['onclick']=()=>this[v(0x1a1)](),c[v(0x166)](this[v(0x159)],this[v(0x193)]),this[v(0x19d)]=document['createElement']('div'),this[v(0x19b)][v(0x166)](c,this['_rows']);}[u(0x18e)](c){const x=u,d=this[x(0x198)][0x0]!==c?.[0x0]||this['_items'][x(0x17c)]!==c?.['length'];if(d)this['shadowRoot'][x(0x186)](x(0x191))?.['close']();this[x(0x198)]=c??[];const e=this[x(0x198)][x(0x17c)]===0x1?this['_items'][0x0]:null,f=e?this[x(0x16a)][x(0x172)](e):[];this[x(0x193)]['disabled']=!e||!e['serviceContainer']['config']['openBindingsEditor'];const g=JSON[x(0x196)](f[x(0x165)](({service:h,...i})=>i));if(!d&&g===this[x(0x1a2)])return;this[x(0x1a2)]=g,this['_rows'][x(0x164)]();if(!e){const h=document[x(0x15d)](x(0x180));h['className']='message',h['textContent']=x(0x170),this['_rows']['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j['className']=x(0x17e);const k=document[x(0x15d)](x(0x179));k['type']='button',k[x(0x181)]='name',k['textContent']=i[x(0x174)],k[x(0x171)]=x(0x17a)+i['targetName'],k[x(0x18a)]=()=>this[x(0x160)](e,i);const l=document['createElement'](x(0x168));l['className']='summary',l['textContent']='←\x20'+(i[x(0x17f)]||i[x(0x185)]?.['join'](';')||i['rawValue']||'binding'),l[x(0x171)]=l[x(0x199)],l[x(0x1a0)]=()=>this['editBinding'](e,i);const m=document['createElement']('button');m[x(0x16e)]='button',m['textContent']='⋯',m['setAttribute']('aria-label','Actions\x20for\x20class\x20binding\x20'+i[x(0x174)]);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':'Edit\x20binding…','action':()=>this[y(0x160)](e,i)},{'title':y(0x189),'action':()=>this[y(0x16d)](e,i)},{'title':y(0x19a),'action':()=>{const z=y;this['_service'][z(0x18b)](e,i),this[z(0x18e)](this[z(0x198)]);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this['_rows'][x(0x173)](j);}}['addBinding'](){const A=u;if(!this[A(0x193)][A(0x15c)])this[A(0x16d)](this['_items'][0x0]);}async[u(0x160)](c,d,e=d?.[u(0x174)]){const B=u;if(this[B(0x177)])return;const f=c[B(0x178)][B(0x16f)]['openBindingsEditor'];if(f){this[B(0x177)]=!![];try{await f(this[B(0x16a)][B(0x187)](e),[c],d,BindingTarget[B(0x17b)]),this[B(0x18e)](this[B(0x198)]);}finally{this['_editing']=![];}}}[u(0x16d)](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0x19b)]['querySelector'](C(0x191)))return;const f=document['createElement'](C(0x191)),g=document[C(0x15d)](C(0x15f)),h=document[C(0x15d)]('h3');h['textContent']=d?'Rename\x20class':C(0x161);const i=document[C(0x15d)](C(0x16b));i['textContent']='Class\x20name';const j=document[C(0x15d)](C(0x184));j['value']=e,j[C(0x17d)]=!![];const k=document['createElement'](C(0x168));k[C(0x181)]=C(0x19e),k[C(0x199)]='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i['append'](j,k);const l=document[C(0x15d)]('div');l['className']=C(0x167),l['setAttribute']('role',C(0x175)),l['hidden']=!![];const m=document[C(0x15d)]('div');m['className']='actions';const n=document[C(0x15d)]('button');n[C(0x16e)]=C(0x179),n[C(0x199)]='Cancel',n['onclick']=()=>f[C(0x197)]();const o=document[C(0x15d)](C(0x179));o[C(0x16e)]='submit',o['textContent']=d?C(0x176):'Next…',m['append'](n,o),g[C(0x166)](h,i),g['append'](l,m),f['appendChild'](g),this[C(0x19b)][C(0x173)](f),f['onclose']=()=>f['remove'](),g[C(0x18c)]=async p=>{const D=C;p['preventDefault']();const q=j['value']['trim'](),r=this['_service']['validateName'](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x16a)]['rename'](c,d,q);f['close']();if(!d)await this[D(0x160)](c,undefined,q);this[D(0x18e)](this[D(0x198)]);}catch(s){l[D(0x199)]=s['message'],l['hidden']=![];}},f['showModal'](),j[C(0x18f)]();}}customElements[u(0x194)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);