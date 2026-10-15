const u=b;function b(c,d){c=c-0x161;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x177))/0x1+parseInt(t(0x190))/0x2*(parseInt(t(0x180))/0x3)+parseInt(t(0x191))/0x4*(-parseInt(t(0x179))/0x5)+-parseInt(t(0x186))/0x6+-parseInt(t(0x184))/0x7*(-parseInt(t(0x18b))/0x8)+-parseInt(t(0x194))/0x9+-parseInt(t(0x189))/0xa*(-parseInt(t(0x199))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98e69));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{BindingTarget}from'@gokturk413/web-component-designer/dist/elements/item/BindingTarget.js';import{ContextMenu}from'@gokturk413/web-component-designer/dist/elements/helper/contextMenu/ContextMenu.js';import{ClassBindingsPropertiesService}from'./ClassBindingsPropertiesService.js';export class PropertyGridClassBindings extends BaseCustomWebComponentLazyAppend{[u(0x17b)]=[];[u(0x18d)]=new ClassBindingsPropertiesService();[u(0x172)];['_add'];[u(0x198)];[u(0x1a8)];['_editing']=![];static [u(0x1a1)]=css`
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
  `;constructor(){const v=u;super();const c=document[v(0x173)]('div');c[v(0x17d)]=v(0x19f),this['_toggle']=document[v(0x173)]('button'),this['_toggle'][v(0x187)]='button',this['_toggle'][v(0x17d)]='toggle',this['_toggle'][v(0x16a)]=v(0x17f),this['_toggle']['setAttribute'](v(0x17c),'true'),this[v(0x198)]['onclick']=()=>{const w=v;this[w(0x172)][w(0x19c)]=!this['_rows'][w(0x19c)],this['_toggle'][w(0x16a)]=(this['_rows'][w(0x19c)]?'▸':'▾')+w(0x16e),this['_toggle']['setAttribute']('aria-expanded',String(!this[w(0x172)][w(0x19c)]));},this[v(0x17a)]=document[v(0x173)](v(0x174)),this['_add'][v(0x187)]='button',this['_add']['textContent']='+',this[v(0x17a)]['title']='Add\x20class\x20binding…',this['_add']['setAttribute'](v(0x18f),v(0x171)),this['_add']['onclick']=()=>this[v(0x168)](),c[v(0x178)](this['_toggle'],this[v(0x17a)]),this[v(0x172)]=document[v(0x173)](v(0x197)),this['shadowRoot']['append'](c,this[v(0x172)]);}[u(0x1a2)](c){const x=u,d=this[x(0x17b)][0x0]!==c?.[0x0]||this[x(0x17b)]['length']!==c?.[x(0x1a0)];if(d)this['shadowRoot'][x(0x1a3)](x(0x182))?.['close']();this['_items']=c??[];const e=this['_items']['length']===0x1?this[x(0x17b)][0x0]:null,f=e?this[x(0x18d)]['getBindings'](e):[];this['_add'][x(0x195)]=!e||!e['serviceContainer']['config']['openBindingsEditor'];const g=JSON[x(0x16b)](f[x(0x164)](({service:h,...i})=>i));if(!d&&g===this[x(0x1a8)])return;this[x(0x1a8)]=g,this['_rows']['replaceChildren']();if(!e){const h=document[x(0x173)](x(0x197));h[x(0x17d)]='message',h['textContent']='Select\x20one\x20element\x20to\x20edit\x20class\x20bindings.',this[x(0x172)][x(0x1a6)](h);return;}for(const i of f){const j=document['createElement']('div');j['className']=x(0x193);const k=document[x(0x173)](x(0x174));k['type']=x(0x174),k[x(0x17d)]=x(0x18a),k['textContent']=i[x(0x1aa)],k['title']='Edit\x20class\x20binding:\x20'+i[x(0x1aa)],k[x(0x18e)]=()=>this['editBinding'](e,i);const l=document['createElement'](x(0x161));l['className']=x(0x176),l[x(0x16a)]='←\x20'+(i['expression']||i[x(0x1a5)]?.[x(0x162)](';')||i[x(0x1a9)]||'binding'),l['title']=l['textContent'],l['ondblclick']=()=>this['editBinding'](e,i);const m=document['createElement']('button');m[x(0x187)]='button',m['textContent']='⋯',m[x(0x167)]('aria-label','Actions\x20for\x20class\x20binding\x20'+i['targetName']);const n=o=>{const y=x;o['preventDefault'](),ContextMenu[y(0x169)]([{'title':y(0x19b),'action':()=>this['editBinding'](e,i)},{'title':y(0x19a),'action':()=>this['showNameDialog'](e,i)},{'title':y(0x183),'action':()=>{const z=y;this['_service']['remove'](e,i),this[z(0x1a2)](this[z(0x17b)]);}}],o);};m[x(0x18e)]=n,j['oncontextmenu']=n,j['append'](k,l,m),this[x(0x172)]['appendChild'](j);}}[u(0x168)](){const A=u;if(!this[A(0x17a)]['disabled'])this['showNameDialog'](this['_items'][0x0]);}async['editBinding'](c,d,e=d?.[u(0x1aa)]){const B=u;if(this[B(0x170)])return;const f=c['serviceContainer'][B(0x16f)][B(0x19e)];if(f){this[B(0x170)]=!![];try{await f(this[B(0x18d)]['createProperty'](e),[c],d,BindingTarget[B(0x181)]),this['refresh'](this[B(0x17b)]);}finally{this[B(0x170)]=![];}}}[u(0x175)](c,d,e=d?.['targetName']??''){const C=u;if(this['shadowRoot']['querySelector'](C(0x182)))return;const f=document[C(0x173)](C(0x182)),g=document[C(0x173)]('form'),h=document[C(0x173)]('h3');h['textContent']=d?C(0x192):C(0x171);const i=document['createElement']('label');i[C(0x16a)]=C(0x19d);const j=document[C(0x173)]('input');j[C(0x166)]=e,j['required']=!![];const k=document[C(0x173)](C(0x161));k[C(0x17d)]='help',k[C(0x16a)]='Use\x20lowercase\x20names,\x20e.g.\x20is-active.',i['append'](j,k);const l=document[C(0x173)]('div');l[C(0x17d)]='error',l['setAttribute'](C(0x18c),'alert'),l[C(0x19c)]=!![];const m=document['createElement'](C(0x197));m['className']='actions';const n=document['createElement'](C(0x174));n[C(0x187)]='button',n['textContent']=C(0x163),n[C(0x18e)]=()=>f['close']();const o=document['createElement']('button');o[C(0x187)]=C(0x16d),o['textContent']=d?'Save':C(0x185),m['append'](n,o),g[C(0x178)](h,i),g['append'](l,m),f['appendChild'](g),this[C(0x196)][C(0x1a6)](f),f[C(0x16c)]=()=>f['remove'](),g[C(0x17e)]=async p=>{const D=C;p['preventDefault']();const q=j['value']['trim'](),r=this[D(0x18d)]['validateName'](c,q,d?.[D(0x1aa)]);try{if(r)throw new Error(r);d&&this['_service']['rename'](c,d,q);f['close']();if(!d)await this[D(0x1a4)](c,undefined,q);this['refresh'](this[D(0x17b)]);}catch(s){l['textContent']=s['message'],l[D(0x19c)]=![];}},f['showModal'](),j[C(0x165)]();}}function a(){const E=['focus','value','setAttribute','addBinding','show','textContent','stringify','onclose','submit','\x20Class\x20bindings','config','_editing','Add\x20class\x20binding','_rows','createElement','button','showNameDialog','summary','378494PtAVzF','append','5370HYzRHL','_add','_items','aria-expanded','className','onsubmit','▾\x20Class\x20bindings','2682987kjFFgP','class','dialog','Remove\x20binding','7qJvKfD','Next…','4074282bpeCLg','type','node-projects-property-grid-class-bindings','110HStbJu','name','3635216NdhYSN','role','_service','onclick','aria-label','2AgTPUl','3992fsajIP','Rename\x20class','row','3357594ciHgvV','disabled','shadowRoot','div','_toggle','1780009vQChxx','Rename\x20class…','Edit\x20binding…','hidden','Class\x20name','openBindingsEditor','header','length','style','refresh','querySelector','editBinding','bindableObjectNames','appendChild','define','_signature','rawValue','targetName','span','join','Cancel','map'];a=function(){return E;};return a();}customElements[u(0x1a7)](u(0x188),PropertyGridClassBindings);