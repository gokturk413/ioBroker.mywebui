const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xf8))/0x1+parseInt(t(0x10f))/0x2+parseInt(t(0x119))/0x3*(-parseInt(t(0xfb))/0x4)+-parseInt(t(0x100))/0x5+parseInt(t(0xed))/0x6+parseInt(t(0x108))/0x7+parseInt(t(0x125))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2ce7d));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';function a(){const E=['28gPpPNR','show','appendChild','onsubmit','Cancel','901485pAiNwS','_signature','getBindings','refresh','length','showNameDialog','input','button','783944iEijAe','append','_add','disabled','oncontextmenu','onclick','_editing','600432DnbNcU','value','targetName','addBinding','error','shadowRoot','trim','_rows','close','textContent','145527nmpvBB','setAttribute','Class\x20name','help','Add\x20class\x20binding','createProperty','expression','preventDefault','onclose','querySelector','bindableObjectNames','node-projects-property-grid-class-bindings','3109120LFRkBg','label','validateName','role','_service','className','class','Next…','type','replaceChildren','true','form','openBindingsEditor','title','Edit\x20binding…','actions','1245018efHeWs','createElement','Rename\x20class…','_items','div','hidden','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','Save','_toggle','editBinding','▾\x20Class\x20bindings','304558Fqhype','aria-expanded','aria-label'];a=function(){return E;};return a();}function b(c,d){c=c-0xe7;const e=a();let f=e[c];return f;}export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{['_items']=[];[u(0x129)]=new ClassBindingsPropertiesService();[u(0x116)];[u(0x10a)];['_toggle'];[u(0x101)];['_editing']=![];static ['style']=css`
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
  `;constructor(){const v=u;super();const c=document['createElement'](v(0xf1));c[v(0x12a)]='header',this[v(0xf5)]=document['createElement'](v(0x107)),this['_toggle']['type']='button',this['_toggle']['className']='toggle',this[v(0xf5)][v(0x118)]=v(0xf7),this[v(0xf5)]['setAttribute'](v(0xf9),v(0xe7)),this[v(0xf5)]['onclick']=()=>{const w=v;this['_rows']['hidden']=!this[w(0x116)][w(0xf2)],this['_toggle']['textContent']=(this['_rows']['hidden']?'▸':'▾')+'\x20Class\x20bindings',this['_toggle']['setAttribute'](w(0xf9),String(!this['_rows']['hidden']));},this['_add']=document[v(0xee)]('button'),this['_add'][v(0x12d)]=v(0x107),this['_add'][v(0x118)]='+',this[v(0x10a)]['title']='Add\x20class\x20binding…',this[v(0x10a)]['setAttribute'](v(0xfa),'Add\x20class\x20binding'),this[v(0x10a)][v(0x10d)]=()=>this[v(0x112)](),c['append'](this[v(0xf5)],this['_add']),this[v(0x116)]=document['createElement'](v(0xf1)),this['shadowRoot']['append'](c,this[v(0x116)]);}['refresh'](c){const x=u,d=this[x(0xf0)][0x0]!==c?.[0x0]||this['_items']['length']!==c?.['length'];if(d)this[x(0x114)][x(0x122)]('dialog')?.['close']();this[x(0xf0)]=c??[];const e=this['_items'][x(0x104)]===0x1?this[x(0xf0)][0x0]:null,f=e?this['_service'][x(0x102)](e):[];this['_add']['disabled']=!e||!e['serviceContainer']['config']['openBindingsEditor'];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this[x(0x101)])return;this[x(0x101)]=g,this[x(0x116)][x(0x12e)]();if(!e){const h=document[x(0xee)](x(0xf1));h[x(0x12a)]='message',h[x(0x118)]=x(0xf3),this[x(0x116)]['appendChild'](h);return;}for(const i of f){const j=document['createElement']('div');j['className']='row';const k=document['createElement']('button');k[x(0x12d)]=x(0x107),k['className']='name',k[x(0x118)]=i[x(0x111)],k[x(0xea)]='Edit\x20class\x20binding:\x20'+i[x(0x111)],k[x(0x10d)]=()=>this[x(0xf6)](e,i);const l=document['createElement']('span');l[x(0x12a)]='summary',l['textContent']='←\x20'+(i[x(0x11f)]||i[x(0x123)]?.['join'](';')||i['rawValue']||'binding'),l['title']=l[x(0x118)],l['ondblclick']=()=>this[x(0xf6)](e,i);const m=document[x(0xee)](x(0x107));m[x(0x12d)]=x(0x107),m['textContent']='⋯',m[x(0x11a)](x(0xfa),'Actions\x20for\x20class\x20binding\x20'+i['targetName']);const n=o=>{const y=x;o[y(0x120)](),ContextMenu[y(0xfc)]([{'title':y(0xeb),'action':()=>this[y(0xf6)](e,i)},{'title':y(0xef),'action':()=>this[y(0x105)](e,i)},{'title':'Remove\x20binding','action':()=>{const z=y;this[z(0x129)]['remove'](e,i),this['refresh'](this[z(0xf0)]);}}],o);};m[x(0x10d)]=n,j[x(0x10c)]=n,j[x(0x109)](k,l,m),this['_rows']['appendChild'](j);}}['addBinding'](){const A=u;if(!this['_add'][A(0x10b)])this['showNameDialog'](this[A(0xf0)][0x0]);}async[u(0xf6)](c,d,e=d?.[u(0x111)]){const B=u;if(this['_editing'])return;const f=c['serviceContainer']['config'][B(0xe9)];if(f){this['_editing']=!![];try{await f(this[B(0x129)][B(0x11e)](e),[c],d,BindingTarget[B(0x12b)]),this['refresh'](this[B(0xf0)]);}finally{this[B(0x10e)]=![];}}}[u(0x105)](c,d,e=d?.[u(0x111)]??''){const C=u;if(this['shadowRoot'][C(0x122)]('dialog'))return;const f=document['createElement']('dialog'),g=document['createElement'](C(0xe8)),h=document[C(0xee)]('h3');h['textContent']=d?'Rename\x20class':C(0x11d);const i=document[C(0xee)](C(0x126));i[C(0x118)]=C(0x11b);const j=document[C(0xee)](C(0x106));j[C(0x110)]=e,j['required']=!![];const k=document[C(0xee)]('span');k[C(0x12a)]=C(0x11c),k['textContent']='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i[C(0x109)](j,k);const l=document['createElement']('div');l['className']=C(0x113),l['setAttribute'](C(0x128),'alert'),l[C(0xf2)]=!![];const m=document[C(0xee)]('div');m['className']=C(0xec);const n=document['createElement']('button');n['type']=C(0x107),n[C(0x118)]=C(0xff),n['onclick']=()=>f[C(0x117)]();const o=document['createElement']('button');o['type']='submit',o['textContent']=d?C(0xf4):C(0x12c),m['append'](n,o),g[C(0x109)](h,i),g[C(0x109)](l,m),f[C(0xfd)](g),this['shadowRoot'][C(0xfd)](f),f[C(0x121)]=()=>f['remove'](),g[C(0xfe)]=async p=>{const D=C;p[D(0x120)]();const q=j['value'][D(0x115)](),r=this[D(0x129)][D(0x127)](c,q,d?.['targetName']);try{if(r)throw new Error(r);d&&this[D(0x129)]['rename'](c,d,q);f[D(0x117)]();if(!d)await this[D(0xf6)](c,undefined,q);this[D(0x103)](this['_items']);}catch(s){l[D(0x118)]=s['message'],l[D(0xf2)]=![];}},f['showModal'](),j['focus']();}}customElements['define'](u(0x124),PropertyGridClassBindings);