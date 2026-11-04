const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x196))/0x1*(parseInt(h(0x195))/0x2)+parseInt(h(0x1a0))/0x3*(parseInt(h(0x1af))/0x4)+-parseInt(h(0x1aa))/0x5*(-parseInt(h(0x197))/0x6)+-parseInt(h(0x19a))/0x7*(-parseInt(h(0x19c))/0x8)+-parseInt(h(0x1ac))/0x9+parseInt(h(0x198))/0xa+-parseInt(h(0x1a6))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7733));function b(c,d){c=c-0x192;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static ['style']=css`
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
  }`;constructor(){const i=b;super(),this[i(0x1a7)]=document[i(0x199)](i(0x1ad)),this['_placeholder']['id']=i(0x1a2),this['_placeholder']['style'][i(0x1a5)]=i(0x1a4),this[i(0x192)][i(0x19e)](this[i(0x1a7)]),this['_loading']=document[i(0x199)](i(0x1ad)),this['_loading']['id']=i(0x193),this['_loading']['textContent']=i(0x19f),this[i(0x192)]['appendChild'](this[i(0x1a8)]);const c=document[i(0x199)](i(0x1ad));c['id']=i(0x19d);const d=document['createElement'](i(0x1a9));d['innerText']=i(0x1ab),c[i(0x19e)](d),this['shadowRoot'][i(0x19e)](c);}['dispose'](){}[j(0x1b0)];['canExecuteCommand'];async[j(0x1ae)](c,d,e,f){const k=j;this[k(0x1a8)]['hidden']=![],await c[k(0x1a1)]['provideDemo'](this['_placeholder'],c,d,e,f),this[k(0x1a8)][k(0x194)]=!![];}}function a(){const l=['3bQhqwd','52290TZdjsu','9700970YlWejr','createElement','14GliOwH','define','620904AwTxxs','left','appendChild','🛀\x20Hold\x20on,\x20loading...','24xmpAVx','demoProviderService','placeholder','node-projects-demo-view','scale(1)','transform','3576276YhzQic','_placeholder','_loading','span','210OMUTrR','PREVIEW','10827468PmRzdk','div','display','393556pstljN','executeCommand','shadowRoot','loading','hidden','42948pEJCSc'];a=function(){return l;};return a();}customElements[j(0x19b)](j(0x1a3),DemoView);