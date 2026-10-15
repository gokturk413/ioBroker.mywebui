function b(c,d){c=c-0x1ea;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1ec))/0x1*(-parseInt(h(0x1ff))/0x2)+-parseInt(h(0x208))/0x3+parseInt(h(0x1f7))/0x4+-parseInt(h(0x1ef))/0x5*(-parseInt(h(0x202))/0x6)+parseInt(h(0x207))/0x7*(parseInt(h(0x1f4))/0x8)+parseInt(h(0x206))/0x9+parseInt(h(0x204))/0xa*(-parseInt(h(0x203))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd634d));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x1f8)];['_loading'];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document[j(0x1eb)]('div'),this[j(0x1f8)]['id']=j(0x1f9),this['_placeholder']['style']['transform']='scale(1)',this[j(0x1f0)][j(0x1f1)](this[j(0x1f8)]),this[j(0x1fa)]=document['createElement'](j(0x1f5)),this['_loading']['id']=j(0x1fb),this['_loading'][j(0x1fe)]=j(0x1ea),this['shadowRoot']['appendChild'](this['_loading']);const c=document['createElement'](j(0x1f5));c['id']=j(0x1ed);const d=document[j(0x1eb)](j(0x201));d['innerText']='PREVIEW',c[j(0x1f1)](d),this[j(0x1f0)]['appendChild'](c);}[i(0x1f6)](){}[i(0x200)];[i(0x1fd)];async[i(0x1f2)](c,d,e,f){const k=i;this[k(0x1fa)]['hidden']=![],await c[k(0x1f3)][k(0x205)](this['_placeholder'],c,d,e,f),this[k(0x1fa)][k(0x1fc)]=!![];}}function a(){const l=['_loading','loading','hidden','canExecuteCommand','textContent','2448232qepbag','executeCommand','span','54fzlIlI','33817817YxvTUw','10WaqBxd','provideDemo','9089388yYrNNJ','91xauLDq','93270nudvux','🛀\x20Hold\x20on,\x20loading...','createElement','1oWArEp','left','define','554980bzxRxl','shadowRoot','appendChild','display','demoProviderService','412792dlzLYe','div','dispose','316108zYDrVD','_placeholder','placeholder'];a=function(){return l;};return a();}customElements[i(0x1ee)]('node-projects-demo-view',DemoView);