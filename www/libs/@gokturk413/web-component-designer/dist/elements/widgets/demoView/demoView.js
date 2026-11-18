const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xca))/0x1+parseInt(h(0xd3))/0x2*(-parseInt(h(0xd2))/0x3)+parseInt(h(0xd1))/0x4*(parseInt(h(0xbf))/0x5)+parseInt(h(0xc3))/0x6+-parseInt(h(0xce))/0x7*(parseInt(h(0xc0))/0x8)+parseInt(h(0xd6))/0x9*(-parseInt(h(0xd0))/0xa)+-parseInt(h(0xd9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2c765));function b(c,d){c=c-0xbf;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xc2)];['_loading'];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this[j(0xc2)]=document['createElement'](j(0xc1)),this['_placeholder']['id']=j(0xc7),this['_placeholder'][j(0xcd)]['transform']='scale(1)',this['shadowRoot']['appendChild'](this[j(0xc2)]),this['_loading']=document[j(0xc8)](j(0xc1)),this['_loading']['id']='loading',this['_loading']['textContent']='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0xc6)](this[j(0xc9)]);const c=document['createElement'](j(0xc1));c['id']='left';const d=document['createElement'](j(0xc4));d[j(0xcf)]=j(0xd8),c['appendChild'](d),this[j(0xd4)]['appendChild'](c);}['dispose'](){}[i(0xcb)];[i(0xd5)];async['display'](c,d,e,f){const k=i;this[k(0xc9)][k(0xc5)]=![],await c[k(0xcc)]['provideDemo'](this[k(0xc2)],c,d,e,f),this['_loading'][k(0xc5)]=!![];}}function a(){const l=['hidden','appendChild','placeholder','createElement','_loading','109339trmOOa','executeCommand','demoProviderService','style','420XrUEIb','innerText','4260cROFbW','176CvPuRo','21RWjWRs','58512GWQSDe','shadowRoot','canExecuteCommand','603fCuqDq','define','PREVIEW','607860HGguMH','21085vjSJtB','20552WhtKMl','div','_placeholder','1979784iFUWge','span'];a=function(){return l;};return a();}customElements[i(0xd7)]('node-projects-demo-view',DemoView);