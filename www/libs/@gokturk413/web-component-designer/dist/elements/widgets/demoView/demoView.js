function a(){const l=['node-projects-demo-view','_loading','13SumZwf','265459KnSZZC','demoProviderService','13917732vqVGCu','_placeholder','scale(1)','canExecuteCommand','11nmVPaS','innerText','549070yOMalK','20605krGEQs','style','hidden','textContent','placeholder','654exajFm','appendChild','left','21lQdXGy','965512qtuslX','div','2948292pOlDSb','span','6308bAVNlS','12HhqwCD','2DIZTak','dispose','createElement','loading'];a=function(){return l;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xe0))/0x1*(parseInt(h(0xd9))/0x2)+parseInt(h(0xd8))/0x3*(parseInt(h(0xd7))/0x4)+-parseInt(h(0xe9))/0x5*(parseInt(h(0xcf))/0x6)+-parseInt(h(0xd2))/0x7*(parseInt(h(0xd3))/0x8)+-parseInt(h(0xd5))/0x9+-parseInt(h(0xe8))/0xa*(parseInt(h(0xe6))/0xb)+-parseInt(h(0xe2))/0xc*(-parseInt(h(0xdf))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a103));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xe3)];['_loading'];static [i(0xcb)]=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document[j(0xdb)]('div'),this[j(0xe3)]['id']=j(0xce),this[j(0xe3)][j(0xcb)]['transform']=j(0xe4),this['shadowRoot'][j(0xd0)](this[j(0xe3)]),this['_loading']=document[j(0xdb)](j(0xd4)),this[j(0xde)]['id']=j(0xdc),this[j(0xde)][j(0xcd)]='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0xd0)](this[j(0xde)]);const c=document[j(0xdb)](j(0xd4));c['id']=j(0xd1);const d=document['createElement'](j(0xd6));d[j(0xe7)]='PREVIEW',c['appendChild'](d),this['shadowRoot']['appendChild'](c);}[i(0xda)](){}['executeCommand'];[i(0xe5)];async['display'](c,d,e,f){const k=i;this['_loading']['hidden']=![],await c[k(0xe1)]['provideDemo'](this['_placeholder'],c,d,e,f),this['_loading'][k(0xcc)]=!![];}}customElements['define'](i(0xdd),DemoView);