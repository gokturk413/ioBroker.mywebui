function b(c,d){c=c-0x198;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a8))/0x1*(parseInt(h(0x1ab))/0x2)+parseInt(h(0x199))/0x3+parseInt(h(0x1ae))/0x4+parseInt(h(0x19d))/0x5*(parseInt(h(0x1a1))/0x6)+-parseInt(h(0x19c))/0x7+-parseInt(h(0x19f))/0x8+-parseInt(h(0x1b2))/0x9*(parseInt(h(0x19b))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7d474));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x1a6)];['_loading'];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this[j(0x1a6)]=document[j(0x1aa)]('div'),this['_placeholder']['id']='placeholder',this['_placeholder'][j(0x19a)]['transform']='scale(1)',this['shadowRoot']['appendChild'](this[j(0x1a6)]),this['_loading']=document[j(0x1aa)](j(0x1a9)),this['_loading']['id']='loading',this[j(0x1a2)][j(0x1b1)]='🛀\x20Hold\x20on,\x20loading...',this[j(0x1af)][j(0x1a3)](this[j(0x1a2)]);const c=document['createElement']('div');c['id']=j(0x198);const d=document[j(0x1aa)](j(0x1a7));d[j(0x1ac)]='PREVIEW',c['appendChild'](d),this['shadowRoot']['appendChild'](c);}[i(0x1a4)](){}[i(0x1a5)];['canExecuteCommand'];async[i(0x1ad)](c,d,e,f){const k=i;this['_loading']['hidden']=![],await c['demoProviderService'][k(0x19e)](this['_placeholder'],c,d,e,f),this['_loading'][k(0x1a0)]=!![];}}function a(){const l=['dispose','executeCommand','_placeholder','span','427247UCKROv','div','createElement','4iPJHBB','innerText','display','2314508ZZPbzG','shadowRoot','node-projects-demo-view','textContent','11493081OMLvaC','left','1705023KqnfxK','style','10sBhACd','2109527fVUWzj','10vmuErT','provideDemo','4118240MNTOxm','hidden','1814484fotQUB','_loading','appendChild'];a=function(){return l;};return a();}customElements['define'](i(0x1b0),DemoView);