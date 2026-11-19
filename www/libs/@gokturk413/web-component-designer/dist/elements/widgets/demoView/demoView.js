const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x202))/0x1+parseInt(h(0x201))/0x2*(parseInt(h(0x1e9))/0x3)+-parseInt(h(0x1f9))/0x4*(-parseInt(h(0x203))/0x5)+-parseInt(h(0x1fa))/0x6+parseInt(h(0x1ef))/0x7*(parseInt(h(0x1f3))/0x8)+-parseInt(h(0x1f0))/0x9+-parseInt(h(0x1f7))/0xa*(-parseInt(h(0x1f8))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7535));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];[i(0x1ea)];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document[j(0x1fe)](j(0x1fb)),this['_placeholder']['id']='placeholder',this[j(0x1f6)][j(0x1f1)]['transform']='scale(1)',this['shadowRoot'][j(0x1ed)](this['_placeholder']),this[j(0x1ea)]=document[j(0x1fe)](j(0x1fb)),this['_loading']['id']='loading',this[j(0x1ea)]['textContent']='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot']['appendChild'](this['_loading']);const c=document['createElement'](j(0x1fb));c['id']=j(0x1ff);const d=document['createElement'](j(0x1fc));d[j(0x1f5)]=j(0x200),c[j(0x1ed)](d),this[j(0x1f4)][j(0x1ed)](c);}[i(0x1fd)](){}['executeCommand'];['canExecuteCommand'];async['display'](c,d,e,f){const k=i;this['_loading']['hidden']=![],await c[k(0x1ee)][k(0x1eb)](this[k(0x1f6)],c,d,e,f),this['_loading'][k(0x1ec)]=!![];}}customElements[i(0x1e8)](i(0x1f2),DemoView);function b(c,d){c=c-0x1e8;const e=a();let f=e[c];return f;}function a(){const l=['5845941zmzKmv','style','node-projects-demo-view','8IvAclC','shadowRoot','innerText','_placeholder','2486470PbecCE','22FPvSvh','1003916DKvncf','47274eqDawu','div','span','dispose','createElement','left','PREVIEW','140FVsklr','86492VjhkdJ','5QahlTs','define','14007BiPyAy','_loading','provideDemo','hidden','appendChild','demoProviderService','2479274JvKdzB'];a=function(){return l;};return a();}