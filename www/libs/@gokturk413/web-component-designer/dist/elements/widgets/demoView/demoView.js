const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x16b))/0x1+parseInt(h(0x182))/0x2*(-parseInt(h(0x173))/0x3)+parseInt(h(0x16c))/0x4+parseInt(h(0x185))/0x5*(-parseInt(h(0x16e))/0x6)+-parseInt(h(0x180))/0x7*(-parseInt(h(0x174))/0x8)+-parseInt(h(0x181))/0x9*(-parseInt(h(0x183))/0xa)+parseInt(h(0x175))/0xb*(-parseInt(h(0x16f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf02b1));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static [i(0x184)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x17c)]=document['createElement'](j(0x176)),this['_placeholder']['id']='placeholder',this['_placeholder']['style'][j(0x178)]=j(0x17f),this['shadowRoot']['appendChild'](this['_placeholder']),this['_loading']=document['createElement']('div'),this[j(0x179)]['id']='loading',this[j(0x179)][j(0x171)]='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0x17b)](this['_loading']);const c=document[j(0x17e)]('div');c['id']=j(0x172);const d=document[j(0x17e)]('span');d[j(0x169)]='PREVIEW',c['appendChild'](d),this[j(0x177)]['appendChild'](c);}['dispose'](){}['executeCommand'];[i(0x17a)];async['display'](c,d,e,f){const k=i;this[k(0x179)][k(0x16d)]=![],await c[k(0x16a)][k(0x170)](this['_placeholder'],c,d,e,f),this['_loading']['hidden']=!![];}}customElements[i(0x17d)]('node-projects-demo-view',DemoView);function b(c,d){c=c-0x169;const e=a();let f=e[c];return f;}function a(){const l=['div','shadowRoot','transform','_loading','canExecuteCommand','appendChild','_placeholder','define','createElement','scale(1)','14YXWkus','117hDNnNQ','62PISIya','770120IJWWXy','style','685ODgNac','innerText','demoProviderService','1296651aQKfbs','1271024Lxxqoi','hidden','82428xRvFTa','60cpqGjb','provideDemo','textContent','left','39321UadZyP','2884696DwPmQv','142087FnnotE'];a=function(){return l;};return a();}