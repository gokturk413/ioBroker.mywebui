function a(){const l=['PREVIEW','109866xinXVC','2zAvsfm','dispose','demoProviderService','loading','🛀\x20Hold\x20on,\x20loading...','textContent','374057TuKWhj','style','6195elVyaU','983574NATHZy','transform','1968210pWHWDS','placeholder','span','shadowRoot','_loading','innerText','canExecuteCommand','3632kxRtOE','define','65100QiRBJX','201220TfMuPY','createElement','appendChild','hidden','33VNGyfi','_placeholder','20GwlItq','display','div'];a=function(){return l;};return a();}function b(c,d){c=c-0xe3;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf5))/0x1*(parseInt(h(0xef))/0x2)+parseInt(h(0xee))/0x3*(parseInt(h(0xea))/0x4)+-parseInt(h(0xe4))/0x5+-parseInt(h(0xe3))/0x6+-parseInt(h(0xf7))/0x7*(-parseInt(h(0x101))/0x8)+-parseInt(h(0xf8))/0x9+parseInt(h(0xfa))/0xa*(-parseInt(h(0xe8))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x32cf2));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xe9)];['_loading'];static [i(0xf6)]=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document['createElement'](j(0xec)),this['_placeholder']['id']=j(0xfb),this[j(0xe9)]['style'][j(0xf9)]='scale(1)',this[j(0xfd)]['appendChild'](this['_placeholder']),this[j(0xfe)]=document['createElement'](j(0xec)),this['_loading']['id']=j(0xf2),this[j(0xfe)][j(0xf4)]=j(0xf3),this[j(0xfd)]['appendChild'](this['_loading']);const c=document[j(0xe5)]('div');c['id']='left';const d=document['createElement'](j(0xfc));d[j(0xff)]=j(0xed),c['appendChild'](d),this[j(0xfd)][j(0xe6)](c);}[i(0xf0)](){}['executeCommand'];[i(0x100)];async[i(0xeb)](c,d,e,f){const k=i;this['_loading'][k(0xe7)]=![],await c[k(0xf1)]['provideDemo'](this[k(0xe9)],c,d,e,f),this['_loading'][k(0xe7)]=!![];}}customElements[i(0x102)]('node-projects-demo-view',DemoView);