const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa7))/0x1*(parseInt(h(0xab))/0x2)+parseInt(h(0xa6))/0x3*(parseInt(h(0xb9))/0x4)+-parseInt(h(0xbf))/0x5*(parseInt(h(0xbc))/0x6)+-parseInt(h(0xbd))/0x7+-parseInt(h(0xaa))/0x8*(-parseInt(h(0xb0))/0x9)+-parseInt(h(0xa5))/0xa*(parseInt(h(0xa8))/0xb)+-parseInt(h(0xbe))/0xc*(-parseInt(h(0xb8))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2264e));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xc0)];[i(0xb3)];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document[j(0xb6)]('div'),this['_placeholder']['id']='placeholder',this['_placeholder'][j(0xb5)]['transform']=j(0xa3),this[j(0xbb)]['appendChild'](this[j(0xc0)]),this[j(0xb3)]=document['createElement'](j(0xc1)),this['_loading']['id']='loading',this[j(0xb3)][j(0xad)]=j(0xa9),this['shadowRoot']['appendChild'](this[j(0xb3)]);const c=document[j(0xb6)](j(0xc1));c['id']=j(0xae);const d=document['createElement']('span');d[j(0xb4)]=j(0xb7),c['appendChild'](d),this['shadowRoot'][j(0xac)](c);}['dispose'](){}[i(0xb1)];['canExecuteCommand'];async['display'](c,d,e,f){const k=i;this['_loading'][k(0xba)]=![],await c[k(0xb2)][k(0xa4)](this[k(0xc0)],c,d,e,f),this[k(0xb3)][k(0xba)]=!![];}}function a(){const l=['shadowRoot','8526cQocko','1578080OcefBj','72pcsYsD','635BIOqQL','_placeholder','div','scale(1)','provideDemo','490cwwfcS','9eJooTy','22091RxGMjs','19085wmCfqL','🛀\x20Hold\x20on,\x20loading...','136OJnYmb','2eINpUb','appendChild','textContent','left','define','60219wINpAw','executeCommand','demoProviderService','_loading','innerText','style','createElement','PREVIEW','1003509SRAEQm','102648KXlQRA','hidden'];a=function(){return l;};return a();}function b(c,d){c=c-0xa3;const e=a();let f=e[c];return f;}customElements[i(0xaf)]('node-projects-demo-view',DemoView);