const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x1c6))/0x1*(parseInt(t(0x1dc))/0x2)+-parseInt(t(0x1e5))/0x3+parseInt(t(0x1d2))/0x4*(parseInt(t(0x1cd))/0x5)+parseInt(t(0x1b6))/0x6*(-parseInt(t(0x1c4))/0x7)+parseInt(t(0x1ba))/0x8*(-parseInt(t(0x1f4))/0x9)+parseInt(t(0x1e1))/0xa+parseInt(t(0x1e4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3e9bd));function b(c,d){c=c-0x1b6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['▾\x20Class\x20bindings','3026010cezlli','actions','Rename\x20class…','4131853KfmiRk','700845HYdYrA','div','Save','querySelector','required','span','onsubmit','_rows','Add\x20class\x20binding','aria-expanded','button','map','Rename\x20class','label','textContent','9jZkDaK','serviceContainer','style','stringify','oncontextmenu','binding','toggle','title','Actions\x20for\x20class\x20binding\x20','help','message','appendChild','dialog','getBindings','Edit\x20binding…','6810iVjLDa','replaceChildren','shadowRoot','_editing','1961544yRTJzY','alert','editBinding','Class\x20name','_add','append','config','submit','class','hidden','1687JWOFvw','form','1402rdxYbL','createElement','rawValue','createProperty','close','_service','showModal','1243505hyjFKk','Edit\x20class\x20binding:\x20','true','refresh','define','8ZKwOLw','_toggle','_items','type','_signature','className','value','validateName','setAttribute','join','238oQAjih','length','disabled','onclick'];a=function(){return E;};return a();}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x1cb)]=new ClassBindingsPropertiesService();['_rows'];['_add'];['_toggle'];['_signature'];['_editing']=![];static [u(0x1f6)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x1c7)](v(0x1e6));c[v(0x1d7)]='header',this[v(0x1d3)]=document[v(0x1c7)](v(0x1ef)),this[v(0x1d3)][v(0x1d5)]=v(0x1ef),this[v(0x1d3)]['className']=v(0x1fa),this['_toggle'][v(0x1f3)]=v(0x1e0),this['_toggle']['setAttribute'](v(0x1ee),v(0x1cf)),this[v(0x1d3)][v(0x1df)]=()=>{const w=v;this[w(0x1ec)]['hidden']=!this['_rows']['hidden'],this['_toggle']['textContent']=(this['_rows'][w(0x1c3)]?'▸':'▾')+'\x20Class\x20bindings',this['_toggle'][w(0x1da)](w(0x1ee),String(!this[w(0x1ec)]['hidden']));},this['_add']=document['createElement']('button'),this[v(0x1be)]['type']=v(0x1ef),this[v(0x1be)]['textContent']='+',this['_add'][v(0x1fb)]='Add\x20class\x20binding…',this['_add'][v(0x1da)]('aria-label','Add\x20class\x20binding'),this['_add']['onclick']=()=>this['addBinding'](),c[v(0x1bf)](this['_toggle'],this[v(0x1be)]),this['_rows']=document['createElement']('div'),this['shadowRoot']['append'](c,this[v(0x1ec)]);}['refresh'](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this[x(0x1d4)]['length']!==c?.[x(0x1dd)];if(d)this['shadowRoot'][x(0x1e8)](x(0x200))?.[x(0x1ca)]();this['_items']=c??[];const e=this['_items'][x(0x1dd)]===0x1?this['_items'][0x0]:null,f=e?this['_service'][x(0x201)](e):[];this[x(0x1be)][x(0x1de)]=!e||!e['serviceContainer'][x(0x1c0)]['openBindingsEditor'];const g=JSON[x(0x1f7)](f[x(0x1f0)](({service:h,...i})=>i));if(!d&&g===this[x(0x1d6)])return;this['_signature']=g,this['_rows'][x(0x1b7)]();if(!e){const h=document['createElement']('div');h['className']='message',h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this[x(0x1ec)][x(0x1ff)](h);return;}for(const i of f){const j=document['createElement']('div');j[x(0x1d7)]='row';const k=document['createElement']('button');k['type']='button',k['className']='name',k['textContent']=i['targetName'],k['title']=x(0x1ce)+i['targetName'],k['onclick']=()=>this[x(0x1bc)](e,i);const l=document['createElement'](x(0x1ea));l['className']='summary',l[x(0x1f3)]='←\x20'+(i['expression']||i['bindableObjectNames']?.[x(0x1db)](';')||i[x(0x1c8)]||x(0x1f9)),l[x(0x1fb)]=l[x(0x1f3)],l['ondblclick']=()=>this['editBinding'](e,i);const m=document[x(0x1c7)]('button');m[x(0x1d5)]='button',m['textContent']='⋯',m[x(0x1da)]('aria-label',x(0x1fc)+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu['show']([{'title':y(0x202),'action':()=>this['editBinding'](e,i)},{'title':y(0x1e3),'action':()=>this['showNameDialog'](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this['_service']['remove'](e,i),this[z(0x1d0)](this['_items']);}}],o);};m[x(0x1df)]=n,j[x(0x1f8)]=n,j['append'](k,l,m),this[x(0x1ec)]['appendChild'](j);}}['addBinding'](){const A=u;if(!this[A(0x1be)][A(0x1de)])this['showNameDialog'](this['_items'][0x0]);}async[u(0x1bc)](c,d,e=d?.['targetName']){const B=u;if(this[B(0x1b9)])return;const f=c[B(0x1f5)][B(0x1c0)]['openBindingsEditor'];if(f){this[B(0x1b9)]=!![];try{await f(this['_service'][B(0x1c9)](e),[c],d,BindingTarget[B(0x1c2)]),this[B(0x1d0)](this['_items']);}finally{this['_editing']=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this['shadowRoot'][C(0x1e8)]('dialog'))return;const f=document[C(0x1c7)](C(0x200)),g=document['createElement'](C(0x1c5)),h=document[C(0x1c7)]('h3');h[C(0x1f3)]=d?C(0x1f1):C(0x1ed);const i=document[C(0x1c7)](C(0x1f2));i[C(0x1f3)]=C(0x1bd);const j=document[C(0x1c7)]('input');j[C(0x1d8)]=e,j[C(0x1e9)]=!![];const k=document[C(0x1c7)](C(0x1ea));k[C(0x1d7)]=C(0x1fd),k[C(0x1f3)]='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x1bf)](j,k);const l=document[C(0x1c7)]('div');l[C(0x1d7)]='error',l['setAttribute']('role',C(0x1bb)),l['hidden']=!![];const m=document[C(0x1c7)]('div');m[C(0x1d7)]=C(0x1e2);const n=document[C(0x1c7)](C(0x1ef));n['type']='button',n['textContent']='Cancel',n[C(0x1df)]=()=>f[C(0x1ca)]();const o=document[C(0x1c7)]('button');o[C(0x1d5)]=C(0x1c1),o['textContent']=d?C(0x1e7):'Next…',m['append'](n,o),g['append'](h,i),g['append'](l,m),f[C(0x1ff)](g),this[C(0x1b8)][C(0x1ff)](f),f['onclose']=()=>f['remove'](),g[C(0x1eb)]=async p=>{const D=C;p['preventDefault']();const q=j['value']['trim'](),r=this[D(0x1cb)][D(0x1d9)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x1cb)]['rename'](c,d,q);f[D(0x1ca)]();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this[D(0x1d4)]);}catch(s){l['textContent']=s[D(0x1fe)],l['hidden']=![];}},f[C(0x1cc)](),j['focus']();}}customElements[u(0x1d1)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);