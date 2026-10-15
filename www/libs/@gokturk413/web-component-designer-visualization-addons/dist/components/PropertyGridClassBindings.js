function a(){const E=['message','Use\x20lowercase\x20names,\x20e.g.\x20is-active.','hidden','1199FeJsyZ','appendChild','show','bindableObjectNames','preventDefault','expression','div','disabled','error','style','_service','join','_add','row','append','config','284830oPZjRS','429066xgJRHb','input','_rows','aria-expanded','266tkbTiA','showNameDialog','onsubmit','createElement','targetName','className','value','_toggle','_items','querySelector','926015fkgxYA','shadowRoot','true','title','\x20Class\x20bindings','_editing','Class\x20name','refresh','editBinding','define','help','Rename\x20class…','dialog','Remove\x20binding','Cancel','Add\x20class\x20binding','1471232DcaOZp','replaceChildren','aria-label','addBinding','alert','openBindingsEditor','Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.','span','close','onclick','textContent','setAttribute','20328AwotlF','serviceContainer','label','_signature','30YVkqWD','type','6584280ingiuB','length','binding','button','Add\x20class\x20binding…','showModal','78ggsEAy'];a=function(){return E;};return a();}const u=b;function b(c,d){c=c-0x86;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xcf))/0x1*(parseInt(t(0x99))/0x2)+-parseInt(t(0xcb))/0x3*(parseInt(t(0xbf))/0x4)+parseInt(t(0xa3))/0x5+-parseInt(t(0xc3))/0x6*(parseInt(t(0x94))/0x7)+-parseInt(t(0xb3))/0x8+-parseInt(t(0x95))/0x9+parseInt(t(0xc5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1c90c));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0xa1)]=[];['_service']=new ClassBindingsPropertiesService();['_rows'];['_add'];[u(0xa0)];['_signature'];['_editing']=![];static [u(0x8d)]=css`
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
  `;constructor(){const v=u;super();const c=document['createElement'](v(0x8a));c['className']='header',this['_toggle']=document[v(0x9c)]('button'),this[v(0xa0)][v(0xc4)]='button',this['_toggle']['className']='toggle',this[v(0xa0)][v(0xbd)]='▾\x20Class\x20bindings',this['_toggle']['setAttribute'](v(0x98),v(0xa5)),this['_toggle']['onclick']=()=>{const w=v;this['_rows'][w(0xce)]=!this[w(0x97)]['hidden'],this[w(0xa0)][w(0xbd)]=(this[w(0x97)]['hidden']?'▸':'▾')+w(0xa7),this['_toggle']['setAttribute'](w(0x98),String(!this[w(0x97)][w(0xce)]));},this[v(0x90)]=document[v(0x9c)]('button'),this[v(0x90)][v(0xc4)]=v(0xc8),this[v(0x90)][v(0xbd)]='+',this[v(0x90)][v(0xa6)]=v(0xc9),this[v(0x90)]['setAttribute'](v(0xb5),v(0xb2)),this[v(0x90)]['onclick']=()=>this[v(0xb6)](),c[v(0x92)](this[v(0xa0)],this['_add']),this[v(0x97)]=document['createElement']('div'),this['shadowRoot']['append'](c,this[v(0x97)]);}['refresh'](c){const x=u,d=this[x(0xa1)][0x0]!==c?.[0x0]||this['_items']['length']!==c?.[x(0xc6)];if(d)this['shadowRoot']['querySelector'](x(0xaf))?.[x(0xbb)]();this[x(0xa1)]=c??[];const e=this['_items'][x(0xc6)]===0x1?this[x(0xa1)][0x0]:null,f=e?this[x(0x8e)]['getBindings'](e):[];this[x(0x90)][x(0x8b)]=!e||!e[x(0xc0)][x(0x93)][x(0xb8)];const g=JSON['stringify'](f['map'](({service:h,...i})=>i));if(!d&&g===this[x(0xc2)])return;this[x(0xc2)]=g,this[x(0x97)][x(0xb4)]();if(!e){const h=document['createElement']('div');h[x(0x9e)]=x(0xcc),h[x(0xbd)]=x(0xb9),this['_rows'][x(0xd0)](h);return;}for(const i of f){const j=document[x(0x9c)](x(0x8a));j['className']=x(0x91);const k=document['createElement'](x(0xc8));k['type']='button',k['className']='name',k['textContent']=i['targetName'],k['title']='Edit\x20class\x20binding:\x20'+i['targetName'],k['onclick']=()=>this['editBinding'](e,i);const l=document['createElement'](x(0xba));l['className']='summary',l[x(0xbd)]='←\x20'+(i[x(0x89)]||i[x(0x87)]?.[x(0x8f)](';')||i['rawValue']||x(0xc7)),l[x(0xa6)]=l['textContent'],l['ondblclick']=()=>this['editBinding'](e,i);const m=document['createElement'](x(0xc8));m[x(0xc4)]=x(0xc8),m['textContent']='⋯',m['setAttribute'](x(0xb5),'Actions\x20for\x20class\x20binding\x20'+i[x(0x9d)]);const n=o=>{const y=x;o[y(0x88)](),ContextMenu[y(0x86)]([{'title':'Edit\x20binding…','action':()=>this['editBinding'](e,i)},{'title':y(0xae),'action':()=>this[y(0x9a)](e,i)},{'title':y(0xb0),'action':()=>{const z=y;this[z(0x8e)]['remove'](e,i),this[z(0xaa)](this['_items']);}}],o);};m['onclick']=n,j['oncontextmenu']=n,j['append'](k,l,m),this[x(0x97)][x(0xd0)](j);}}[u(0xb6)](){const A=u;if(!this[A(0x90)][A(0x8b)])this['showNameDialog'](this[A(0xa1)][0x0]);}async['editBinding'](c,d,e=d?.[u(0x9d)]){const B=u;if(this[B(0xa8)])return;const f=c[B(0xc0)]['config']['openBindingsEditor'];if(f){this['_editing']=!![];try{await f(this[B(0x8e)]['createProperty'](e),[c],d,BindingTarget['class']),this['refresh'](this[B(0xa1)]);}finally{this['_editing']=![];}}}['showNameDialog'](c,d,e=d?.['targetName']??''){const C=u;if(this[C(0xa4)][C(0xa2)]('dialog'))return;const f=document['createElement'](C(0xaf)),g=document['createElement']('form'),h=document['createElement']('h3');h['textContent']=d?'Rename\x20class':C(0xb2);const i=document[C(0x9c)](C(0xc1));i[C(0xbd)]=C(0xa9);const j=document['createElement'](C(0x96));j[C(0x9f)]=e,j['required']=!![];const k=document['createElement'](C(0xba));k[C(0x9e)]=C(0xad),k[C(0xbd)]=C(0xcd),i[C(0x92)](j,k);const l=document[C(0x9c)](C(0x8a));l['className']=C(0x8c),l[C(0xbe)]('role',C(0xb7)),l[C(0xce)]=!![];const m=document['createElement'](C(0x8a));m['className']='actions';const n=document[C(0x9c)](C(0xc8));n[C(0xc4)]=C(0xc8),n['textContent']=C(0xb1),n[C(0xbc)]=()=>f['close']();const o=document['createElement'](C(0xc8));o['type']='submit',o[C(0xbd)]=d?'Save':'Next…',m['append'](n,o),g['append'](h,i),g[C(0x92)](l,m),f['appendChild'](g),this[C(0xa4)][C(0xd0)](f),f['onclose']=()=>f['remove'](),g[C(0x9b)]=async p=>{const D=C;p['preventDefault']();const q=j[D(0x9f)]['trim'](),r=this['_service']['validateName'](c,q,d?.[D(0x9d)]);try{if(r)throw new Error(r);d&&this['_service']['rename'](c,d,q);f[D(0xbb)]();if(!d)await this[D(0xab)](c,undefined,q);this['refresh'](this[D(0xa1)]);}catch(s){l[D(0xbd)]=s[D(0xcc)],l[D(0xce)]=![];}},f[C(0xca)](),j['focus']();}}customElements[u(0xac)]('node-projects-property-grid-class-bindings',PropertyGridClassBindings);