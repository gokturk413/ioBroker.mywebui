function b(c,d){c=c-0x147;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15b))/0x1*(-parseInt(h(0x159))/0x2)+parseInt(h(0x14f))/0x3+-parseInt(h(0x152))/0x4+parseInt(h(0x150))/0x5*(-parseInt(h(0x157))/0x6)+-parseInt(h(0x14a))/0x7+parseInt(h(0x156))/0x8+parseInt(h(0x15c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbf46e));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static [i(0x155)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x14e)]=document[j(0x158)](j(0x147)),this[j(0x14e)]['id']=j(0x14c),this['_placeholder'][j(0x155)]['transform']='scale(1)',this['shadowRoot'][j(0x154)](this['_placeholder']),this[j(0x15a)]=document['createElement'](j(0x147)),this['_loading']['id']=j(0x153),this[j(0x15a)]['textContent']='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0x154)](this[j(0x15a)]);const c=document[j(0x158)](j(0x147));c['id']='left';const d=document['createElement'](j(0x148));d['innerText']=j(0x151),c['appendChild'](d),this[j(0x149)][j(0x154)](c);}['dispose'](){}['executeCommand'];[i(0x14b)];async['display'](c,d,e,f){const k=i;this[k(0x15a)][k(0x14d)]=![],await c['demoProviderService']['provideDemo'](this['_placeholder'],c,d,e,f),this[k(0x15a)]['hidden']=!![];}}customElements['define']('node-projects-demo-view',DemoView);function a(){const l=['div','span','shadowRoot','10655554gXQucn','canExecuteCommand','placeholder','hidden','_placeholder','2984424ZctGuq','21760zvaoRJ','PREVIEW','3506204CCpEoP','loading','appendChild','style','7414032cTMPwl','1374wvdxxj','createElement','2oEzmWT','_loading','1041175UMKqgJ','10945026ezUUzG'];a=function(){return l;};return a();}