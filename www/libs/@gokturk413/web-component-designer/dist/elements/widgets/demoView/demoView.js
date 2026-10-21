const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xa3))/0x1*(parseInt(h(0x95))/0x2)+-parseInt(h(0x8a))/0x3*(-parseInt(h(0x97))/0x4)+parseInt(h(0x9a))/0x5*(-parseInt(h(0xa2))/0x6)+parseInt(h(0xa0))/0x7*(-parseInt(h(0x8e))/0x8)+-parseInt(h(0x96))/0x9*(parseInt(h(0x91))/0xa)+-parseInt(h(0x98))/0xb+parseInt(h(0x99))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x81f9b));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x90)];[i(0x92)];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document['createElement'](j(0x9f)),this['_placeholder']['id']=j(0x9e),this['_placeholder'][j(0x93)]['transform']=j(0xa1),this[j(0x9b)]['appendChild'](this['_placeholder']),this[j(0x92)]=document['createElement'](j(0x9f)),this[j(0x92)]['id']=j(0x8d),this['_loading'][j(0x94)]=j(0x9d),this['shadowRoot'][j(0x8f)](this[j(0x92)]);const c=document[j(0x8b)]('div');c['id']='left';const d=document['createElement']('span');d[j(0x9c)]=j(0xa4),c[j(0x8f)](d),this['shadowRoot'][j(0x8f)](c);}['dispose'](){}[i(0xa5)];['canExecuteCommand'];async['display'](c,d,e,f){const k=i;this[k(0x92)]['hidden']=![],await c[k(0x8c)]['provideDemo'](this['_placeholder'],c,d,e,f),this[k(0x92)]['hidden']=!![];}}customElements['define']('node-projects-demo-view',DemoView);function b(c,d){c=c-0x8a;const e=a();let f=e[c];return f;}function a(){const l=['div','2534rWHwWJ','scale(1)','6cnimka','520878tvVJwg','PREVIEW','executeCommand','21423zGxmSQ','createElement','demoProviderService','loading','10544xIVKFg','appendChild','_placeholder','10DMRZHt','_loading','style','textContent','2doMAub','942840dPLwvE','52XWvBgG','9966814hUwXaE','26449956YtLEeK','3987725fsgTlb','shadowRoot','innerText','🛀\x20Hold\x20on,\x20loading...','placeholder'];a=function(){return l;};return a();}