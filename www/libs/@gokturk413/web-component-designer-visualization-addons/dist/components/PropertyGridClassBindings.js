const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xcd))/0x1+parseInt(t(0xd0))/0x2*(-parseInt(t(0xf5))/0x3)+-parseInt(t(0xca))/0x4+-parseInt(t(0xd6))/0x5+parseInt(t(0xd3))/0x6*(parseInt(t(0xe5))/0x7)+parseInt(t(0xe7))/0x8+-parseInt(t(0xc2))/0x9*(-parseInt(t(0xd5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xef3b2));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';function b(c,d){c=c-0xba;const e=a();let f=e[c];return f;}import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['279DioMGY','aria-label','dialog','append','textContent','replaceChildren','value','preventDefault','5168260vHvODD','_signature','addBinding','1085455XeyveX','join','rename','3494678QBevRK','alert','targetName','102CDsuWp','appendChild','391370meckLA','4255600vfotXX','createProperty','form','setAttribute','shadowRoot','remove','showNameDialog','createElement','Remove\x20binding','_editing','_items','_service','Next…','querySelector','refresh','674408CpZjAW','length','7470912ESBFaZ','editBinding','type','error','_add','getBindings','aria-expanded','show','submit','showModal','openBindingsEditor','Rename\x20class','▾\x20Class\x20bindings','summary','3VubgmM','_toggle','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','title','className','oncontextmenu','style','header','config','focus','_rows','stringify','span','expression','hidden','Save','button','close','div','onclick','node-projects-property-grid-class-bindings'];a=function(){return E;};return a();}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];['_service']=new ClassBindingsPropertiesService();[u(0xff)];['_add'];[u(0xf6)];[u(0xcb)];['_editing']=![];static [u(0xfb)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement']('div');c[v(0xf9)]=v(0xfc),this[v(0xf6)]=document['createElement']('button'),this['_toggle']['type']='button',this['_toggle'][v(0xf9)]='toggle',this['_toggle']['textContent']=v(0xf3),this[v(0xf6)]['setAttribute']('aria-expanded','true'),this['_toggle']['onclick']=()=>{const w=v;this[w(0xff)][w(0xbb)]=!this[w(0xff)]['hidden'],this['_toggle']['textContent']=(this['_rows']['hidden']?'▸':'▾')+'\x20Class\x20bindings',this['_toggle'][w(0xd9)](w(0xed),String(!this[w(0xff)][w(0xbb)]));},this[v(0xeb)]=document[v(0xdd)]('button'),this['_add']['type']=v(0xbd),this['_add'][v(0xc6)]='+',this['_add']['title']='Add\x20class\x20binding…',this[v(0xeb)][v(0xd9)](v(0xc3),'Add\x20class\x20binding'),this['_add']['onclick']=()=>this['addBinding'](),c['append'](this['_toggle'],this['_add']),this['_rows']=document['createElement'](v(0xbf)),this[v(0xda)]['append'](c,this[v(0xff)]);}[u(0xe4)](c){const x=u,d=this['_items'][0x0]!==c?.[0x0]||this['_items'][x(0xe6)]!==c?.['length'];if(d)this[x(0xda)][x(0xe3)]('dialog')?.['close']();this[x(0xe0)]=c??[];const e=this[x(0xe0)][x(0xe6)]===0x1?this['_items'][0x0]:null,f=e?this['_service'][x(0xec)](e):[];this['_add']['disabled']=!e||!e['serviceContainer']['config'][x(0xf1)];const g=JSON[x(0x100)](f['map'](({service:h,...i})=>i));if(!d&&g===this['_signature'])return;this['_signature']=g,this[x(0xff)][x(0xc7)]();if(!e){const h=document['createElement']('div');h['className']='message',h[x(0xc6)]='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this['_rows'][x(0xd4)](h);return;}for(const i of f){const j=document['createElement'](x(0xbf));j['className']='row';const k=document[x(0xdd)](x(0xbd));k['type']=x(0xbd),k[x(0xf9)]='name',k[x(0xc6)]=i['targetName'],k[x(0xf8)]='Edit\x20class\x20binding:\x20'+i['targetName'],k['onclick']=()=>this[x(0xe8)](e,i);const l=document['createElement']('span');l[x(0xf9)]=x(0xf4),l[x(0xc6)]='←\x20'+(i[x(0xba)]||i['bindableObjectNames']?.[x(0xce)](';')||i['rawValue']||'binding'),l[x(0xf8)]=l[x(0xc6)],l['ondblclick']=()=>this[x(0xe8)](e,i);const m=document['createElement']('button');m[x(0xe9)]='button',m[x(0xc6)]='⋯',m[x(0xd9)]('aria-label','Actions\x20for\x20class\x20binding\x20'+i[x(0xd2)]);const n=o=>{const y=x;o[y(0xc9)](),ContextMenu[y(0xee)]([{'title':'Edit\x20binding…','action':()=>this[y(0xe8)](e,i)},{'title':'Rename\x20class…','action':()=>this[y(0xdc)](e,i)},{'title':y(0xde),'action':()=>{const z=y;this['_service']['remove'](e,i),this['refresh'](this[z(0xe0)]);}}],o);};m[x(0xc0)]=n,j[x(0xfa)]=n,j[x(0xc5)](k,l,m),this[x(0xff)]['appendChild'](j);}}[u(0xcc)](){const A=u;if(!this['_add']['disabled'])this[A(0xdc)](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.[u(0xd2)]){const B=u;if(this[B(0xdf)])return;const f=c['serviceContainer'][B(0xfd)][B(0xf1)];if(f){this[B(0xdf)]=!![];try{await f(this[B(0xe1)][B(0xd7)](e),[c],d,BindingTarget['class']),this[B(0xe4)](this['_items']);}finally{this[B(0xdf)]=![];}}}['showNameDialog'](c,d,e=d?.[u(0xd2)]??''){const C=u;if(this['shadowRoot'][C(0xe3)]('dialog'))return;const f=document[C(0xdd)](C(0xc4)),g=document[C(0xdd)](C(0xd8)),h=document['createElement']('h3');h['textContent']=d?C(0xf2):'Add\x20class\x20binding';const i=document[C(0xdd)]('label');i[C(0xc6)]='Class\x20name';const j=document['createElement']('input');j[C(0xc8)]=e,j['required']=!![];const k=document[C(0xdd)](C(0x101));k['className']='help',k[C(0xc6)]=C(0xf7),i['append'](j,k);const l=document['createElement']('div');l['className']=C(0xea),l[C(0xd9)]('role',C(0xd1)),l['hidden']=!![];const m=document['createElement'](C(0xbf));m[C(0xf9)]='actions';const n=document[C(0xdd)](C(0xbd));n[C(0xe9)]='button',n['textContent']='Cancel',n[C(0xc0)]=()=>f[C(0xbe)]();const o=document[C(0xdd)]('button');o[C(0xe9)]=C(0xef),o['textContent']=d?C(0xbc):C(0xe2),m['append'](n,o),g['append'](h,i),g[C(0xc5)](l,m),f[C(0xd4)](g),this[C(0xda)][C(0xd4)](f),f['onclose']=()=>f[C(0xdb)](),g['onsubmit']=async p=>{const D=C;p['preventDefault']();const q=j['value']['trim'](),r=this[D(0xe1)]['validateName'](c,q,d?.[D(0xd2)]);try{if(r)throw new Error(r);d&&this['_service'][D(0xcf)](c,d,q);f['close']();if(!d)await this['editBinding'](c,undefined,q);this[D(0xe4)](this['_items']);}catch(s){l[D(0xc6)]=s['message'],l['hidden']=![];}},f[C(0xf0)](),j[C(0xfe)]();}}customElements['define'](u(0xc1),PropertyGridClassBindings);