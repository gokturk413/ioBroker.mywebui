const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xcb))/0x1+parseInt(h(0xc8))/0x2*(parseInt(h(0xd3))/0x3)+parseInt(h(0xba))/0x4+-parseInt(h(0xc0))/0x5*(parseInt(h(0xc2))/0x6)+-parseInt(h(0xbe))/0x7*(parseInt(h(0xbd))/0x8)+parseInt(h(0xca))/0x9*(parseInt(h(0xc1))/0xa)+parseInt(h(0xc9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7df85));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xd2)];[i(0xc5)];static [i(0xc6)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0xd2)]=document['createElement'](j(0xce)),this[j(0xd2)]['id']=j(0xb9),this[j(0xd2)]['style'][j(0xd1)]='scale(1)',this[j(0xc3)][j(0xc7)](this[j(0xd2)]),this['_loading']=document[j(0xbc)](j(0xce)),this[j(0xc5)]['id']=j(0xc4),this['_loading'][j(0xbf)]='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0xc7)](this[j(0xc5)]);const c=document[j(0xbc)]('div');c['id']=j(0xbb);const d=document['createElement'](j(0xcf));d[j(0xcd)]='PREVIEW',c[j(0xc7)](d),this[j(0xc3)]['appendChild'](c);}['dispose'](){}['executeCommand'];['canExecuteCommand'];async['display'](c,d,e,f){const k=i;this[k(0xc5)]['hidden']=![],await c['demoProviderService'][k(0xcc)](this[k(0xd2)],c,d,e,f),this[k(0xc5)]['hidden']=!![];}}customElements['define'](i(0xd0),DemoView);function b(c,d){c=c-0xb9;const e=a();let f=e[c];return f;}function a(){const l=['1918916xdzIfp','left','createElement','7654648PTcyep','7LtOCHy','textContent','7240MBiAzO','80ERMmLy','4146vDSkYL','shadowRoot','loading','_loading','style','appendChild','592674UXkdGu','1499212HvTbLB','794754aHsAjP','854566CNBXKJ','provideDemo','innerText','div','span','node-projects-demo-view','transform','_placeholder','3QYOLzk','placeholder'];a=function(){return l;};return a();}