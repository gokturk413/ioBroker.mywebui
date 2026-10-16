const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1d9))/0x1*(-parseInt(h(0x1d8))/0x2)+parseInt(h(0x1e9))/0x3*(-parseInt(h(0x1e8))/0x4)+-parseInt(h(0x1df))/0x5*(-parseInt(h(0x1e6))/0x6)+-parseInt(h(0x1e3))/0x7*(-parseInt(h(0x1db))/0x8)+-parseInt(h(0x1ea))/0x9*(-parseInt(h(0x1d5))/0xa)+-parseInt(h(0x1d6))/0xb+parseInt(h(0x1ed))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a302));function a(){const l=['hidden','436258IVfvtN','3wtMrWw','scale(1)','1133096mFqtwl','🛀\x20Hold\x20on,\x20loading...','executeCommand','_loading','238450JITDxt','canExecuteCommand','placeholder','div','14YRLQmv','PREVIEW','createElement','24ylYUdN','left','88mHaqzS','8709uVuXHs','6204951qhOurK','appendChild','shadowRoot','3158316jeiZMw','_placeholder','10yjtVyF','3008137HQWYVK'];a=function(){return l;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x1d4)];[i(0x1de)];static ['style']=css`
  :host {
    display: block;
    overflow: hidden;
    background: var(--wcd-demo-view-background, white);
    height: 100%;
    width: 100%;
    position: relative;
  }
  #placeholder {
    position: absolute;
    left: 24px;
    height: 100%;
    width: calc(100% - 24px);
  }
  #loading {
    position: absolute;
    top: 60px;
    left: 20px;
  }
  #left {
    position:absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 24px;
    border-right: solid var(--wcd-demo-view-toolbar-border-color, white) 1px;
    box-sizing: border-box;
    background: var(--wcd-demo-view-toolbar-background, black);
  }
  span {
    color: var(--wcd-color-text, white);
    rotate: 270deg;
    display: block;
    position: absolute;
    top: 35px;
    left: -38px;
    font-weight: 600;
    font-family: monospace;
    font-size: 24px;
  }`;constructor(){const j=i;super(),this[j(0x1d4)]=document[j(0x1e5)](j(0x1e2)),this['_placeholder']['id']=j(0x1e1),this['_placeholder']['style']['transform']=j(0x1da),this['shadowRoot'][j(0x1eb)](this['_placeholder']),this[j(0x1de)]=document['createElement']('div'),this[j(0x1de)]['id']='loading',this[j(0x1de)]['textContent']=j(0x1dc),this[j(0x1ec)]['appendChild'](this['_loading']);const c=document['createElement']('div');c['id']=j(0x1e7);const d=document['createElement']('span');d['innerText']=j(0x1e4),c[j(0x1eb)](d),this[j(0x1ec)]['appendChild'](c);}['dispose'](){}[i(0x1dd)];[i(0x1e0)];async['display'](c,d,e,f){const k=i;this['_loading']['hidden']=![],await c['demoProviderService']['provideDemo'](this[k(0x1d4)],c,d,e,f),this['_loading'][k(0x1d7)]=!![];}}function b(c,d){c=c-0x1d4;const e=a();let f=e[c];return f;}customElements['define']('node-projects-demo-view',DemoView);