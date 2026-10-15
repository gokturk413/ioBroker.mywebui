function a(){const l=['🛀\x20Hold\x20on,\x20loading...','placeholder','_placeholder','hidden','style','2436WTxDHC','406356brTVVR','provideDemo','shadowRoot','60389dOMIGC','624371LQzwOF','_loading','93nXEJVh','appendChild','2115200sZMIKi','createElement','80UwNEVT','div','8xscVbc','span','22162Vyofie','canExecuteCommand','4490svPxXV','1458234vrzudJ','dispose'];a=function(){return l;};return a();}const i=b;function b(c,d){c=c-0x6f;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x87))/0x1+parseInt(h(0x7c))/0x2*(-parseInt(h(0x74))/0x3)+parseInt(h(0x76))/0x4+parseInt(h(0x7e))/0x5*(parseInt(h(0x86))/0x6)+parseInt(h(0x71))/0x7+-parseInt(h(0x7a))/0x8*(parseInt(h(0x7f))/0x9)+-parseInt(h(0x78))/0xa*(parseInt(h(0x72))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5524a));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x83)];['_loading'];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this[j(0x83)]=document['createElement']('div'),this['_placeholder']['id']=j(0x82),this[j(0x83)][j(0x85)]['transform']='scale(1)',this['shadowRoot']['appendChild'](this[j(0x83)]),this[j(0x73)]=document['createElement'](j(0x79)),this[j(0x73)]['id']='loading',this[j(0x73)]['textContent']=j(0x81),this[j(0x70)][j(0x75)](this[j(0x73)]);const c=document['createElement'](j(0x79));c['id']='left';const d=document[j(0x77)](j(0x7b));d['innerText']='PREVIEW',c['appendChild'](d),this[j(0x70)][j(0x75)](c);}[i(0x80)](){}['executeCommand'];[i(0x7d)];async['display'](c,d,e,f){const k=i;this[k(0x73)][k(0x84)]=![],await c['demoProviderService'][k(0x6f)](this[k(0x83)],c,d,e,f),this['_loading'][k(0x84)]=!![];}}customElements['define']('node-projects-demo-view',DemoView);