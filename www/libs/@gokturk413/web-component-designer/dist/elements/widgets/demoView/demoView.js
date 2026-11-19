const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a7))/0x1*(parseInt(h(0x19f))/0x2)+-parseInt(h(0x19a))/0x3+-parseInt(h(0x1af))/0x4*(parseInt(h(0x1a0))/0x5)+parseInt(h(0x1b0))/0x6+parseInt(h(0x1ab))/0x7+-parseInt(h(0x19b))/0x8*(parseInt(h(0x1a1))/0x9)+parseInt(h(0x19d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x39f2e));function b(c,d){c=c-0x198;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const l=['define','demoProviderService','1277864qKMAMS','shadowRoot','_loading','provideDemo','556BdUnev','2811720RyLimT','style','executeCommand','_placeholder','textContent','595188efrWin','440cSdwgb','appendChild','2389040hcwDuY','span','8YltzZZ','9385dctsxe','32013ewjTub','createElement','div','transform','display','left','554LZuLpL','hidden'];a=function(){return l;};return a();}export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x198)];['_loading'];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this[j(0x198)]=document[j(0x1a2)]('div'),this['_placeholder']['id']='placeholder',this['_placeholder'][j(0x1b1)][j(0x1a4)]='scale(1)',this[j(0x1ac)]['appendChild'](this['_placeholder']),this['_loading']=document['createElement'](j(0x1a3)),this[j(0x1ad)]['id']='loading',this[j(0x1ad)][j(0x199)]='🛀\x20Hold\x20on,\x20loading...',this[j(0x1ac)]['appendChild'](this[j(0x1ad)]);const c=document[j(0x1a2)]('div');c['id']=j(0x1a6);const d=document['createElement'](j(0x19e));d['innerText']='PREVIEW',c[j(0x19c)](d),this['shadowRoot'][j(0x19c)](c);}['dispose'](){}[i(0x1b2)];['canExecuteCommand'];async[i(0x1a5)](c,d,e,f){const k=i;this['_loading']['hidden']=![],await c[k(0x1aa)][k(0x1ae)](this[k(0x198)],c,d,e,f),this[k(0x1ad)][k(0x1a8)]=!![];}}customElements[i(0x1a9)]('node-projects-demo-view',DemoView);