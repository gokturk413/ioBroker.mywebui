const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x8f))/0x1+parseInt(t(0xbd))/0x2+-parseInt(t(0x9d))/0x3*(parseInt(t(0x8a))/0x4)+parseInt(t(0xa6))/0x5+-parseInt(t(0xa9))/0x6+parseInt(t(0x8b))/0x7+-parseInt(t(0xb5))/0x8*(parseInt(t(0xc5))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3bcce));function b(c,d){c=c-0x87;const e=a();let f=e[c];return f;}function a(){const E=['441054lgunvJ','onsubmit','message','Save','textContent','input','rename','ondblclick','4587453AKXdJq','append','error','title','_items','Actions\x20for\x20class\x20binding\x20','help','onclick','createProperty','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','Add\x20class\x20binding','_signature','length','refresh','querySelector','1793212UEjdEC','2719101bntZpZ','disabled','span','hidden','479077QRCvUC','_toggle','dialog','_rows','toggle','Edit\x20class\x20binding:\x20','bindableObjectNames','div','Next…','Edit\x20binding…','define','button','_editing','preventDefault','3HGAiog','serviceContainer','appendChild','className','Remove\x20binding','_service','setAttribute','Cancel','type','757710xbgAVW','header','show','219762onDZvI','openBindingsEditor','Class\x20name','focus','editBinding','aria-label','style','shadowRoot','targetName','remove','showNameDialog','true','8CFCrwe','_add','row','createElement','addBinding','alert','onclose','form'];a=function(){return E;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0xc9)]=[];[u(0xa2)]=new ClassBindingsPropertiesService();[u(0x92)];[u(0xb6)];['_toggle'];[u(0xd0)];[u(0x9b)]=![];static [u(0xaf)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement'](v(0x96));c['className']=v(0xa7),this[v(0x90)]=document['createElement']('button'),this[v(0x90)]['type']=v(0x9a),this[v(0x90)][v(0xa0)]=v(0x93),this['_toggle'][v(0xc1)]='▾\x20Class\x20bindings',this[v(0x90)][v(0xa3)]('aria-expanded',v(0xb4)),this[v(0x90)][v(0xcc)]=()=>{const w=v;this['_rows'][w(0x8e)]=!this['_rows']['hidden'],this['_toggle']['textContent']=(this[w(0x92)][w(0x8e)]?'▸':'▾')+'\x20Class\x20bindings',this[w(0x90)]['setAttribute']('aria-expanded',String(!this['_rows']['hidden']));},this[v(0xb6)]=document['createElement']('button'),this['_add'][v(0xa5)]=v(0x9a),this['_add'][v(0xc1)]='+',this[v(0xb6)][v(0xc8)]='Add\x20class\x20binding…',this['_add']['setAttribute'](v(0xae),v(0xcf)),this['_add']['onclick']=()=>this[v(0xb9)](),c['append'](this['_toggle'],this['_add']),this['_rows']=document['createElement']('div'),this[v(0xb0)]['append'](c,this['_rows']);}['refresh'](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this['_items'][x(0x87)]!==c?.['length'];if(d)this['shadowRoot']['querySelector']('dialog')?.['close']();this[x(0xc9)]=c??[];const e=this[x(0xc9)]['length']===0x1?this['_items'][0x0]:null,f=e?this['_service']['getBindings'](e):[];this[x(0xb6)][x(0x8c)]=!e||!e[x(0x9e)]['config']['openBindingsEditor'];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this[x(0xd0)]=g,this[x(0x92)]['replaceChildren']();if(!e){const h=document['createElement'](x(0x96));h['className']='message',h[x(0xc1)]=x(0xce),this['_rows']['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j[x(0xa0)]=x(0xb7);const k=document[x(0xb8)](x(0x9a));k['type']='button',k['className']='name',k['textContent']=i[x(0xb1)],k['title']=x(0x94)+i[x(0xb1)],k[x(0xcc)]=()=>this['editBinding'](e,i);const l=document[x(0xb8)](x(0x8d));l[x(0xa0)]='summary',l[x(0xc1)]='←\x20'+(i['expression']||i[x(0x95)]?.['join'](';')||i['rawValue']||'binding'),l['title']=l[x(0xc1)],l[x(0xc4)]=()=>this['editBinding'](e,i);const m=document['createElement'](x(0x9a));m[x(0xa5)]='button',m['textContent']='⋯',m['setAttribute'](x(0xae),x(0xca)+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu[y(0xa8)]([{'title':y(0x98),'action':()=>this[y(0xad)](e,i)},{'title':'Rename\x20class…','action':()=>this['showNameDialog'](e,i)},{'title':y(0xa1),'action':()=>{const z=y;this[z(0xa2)]['remove'](e,i),this[z(0x88)](this[z(0xc9)]);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this['_rows'][x(0x9f)](j);}}['addBinding'](){const A=u;if(!this['_add'][A(0x8c)])this[A(0xb3)](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.['targetName']){const B=u;if(this['_editing'])return;const f=c[B(0x9e)]['config'][B(0xaa)];if(f){this['_editing']=!![];try{await f(this[B(0xa2)][B(0xcd)](e),[c],d,BindingTarget['class']),this[B(0x88)](this['_items']);}finally{this[B(0x9b)]=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this['shadowRoot'][C(0x89)]('dialog'))return;const f=document[C(0xb8)](C(0x91)),g=document['createElement'](C(0xbc)),h=document[C(0xb8)]('h3');h[C(0xc1)]=d?'Rename\x20class':C(0xcf);const i=document['createElement']('label');i['textContent']=C(0xab);const j=document[C(0xb8)](C(0xc2));j['value']=e,j['required']=!![];const k=document['createElement'](C(0x8d));k[C(0xa0)]=C(0xcb),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0xc6)](j,k);const l=document['createElement']('div');l[C(0xa0)]=C(0xc7),l[C(0xa3)]('role',C(0xba)),l[C(0x8e)]=!![];const m=document['createElement'](C(0x96));m[C(0xa0)]='actions';const n=document['createElement'](C(0x9a));n['type']='button',n[C(0xc1)]=C(0xa4),n[C(0xcc)]=()=>f['close']();const o=document['createElement']('button');o['type']='submit',o[C(0xc1)]=d?C(0xc0):C(0x97),m[C(0xc6)](n,o),g['append'](h,i),g[C(0xc6)](l,m),f[C(0x9f)](g),this[C(0xb0)]['appendChild'](f),f[C(0xbb)]=()=>f[C(0xb2)](),g[C(0xbe)]=async p=>{const D=C;p[D(0x9c)]();const q=j['value']['trim'](),r=this['_service']['validateName'](c,q,d?.[D(0xb1)]);try{if(r)throw new Error(r);d&&this['_service'][D(0xc3)](c,d,q);f['close']();if(!d)await this['editBinding'](c,undefined,q);this['refresh'](this['_items']);}catch(s){l[D(0xc1)]=s[D(0xbf)],l['hidden']=![];}},f['showModal'](),j[C(0xac)]();}}customElements[u(0x99)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);