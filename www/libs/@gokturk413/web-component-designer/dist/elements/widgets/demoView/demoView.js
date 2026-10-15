function a(){const l=['51GvOMvb','49214XvRoJV','8XTsFuu','623491uBZSbN','transform','hidden','dispose','126856ClupRz','7183lAPqnK','span','canExecuteCommand','1664292olNbVc','textContent','_loading','30LsEcPW','shadowRoot','left','display','_placeholder','style','appendChild','7010fsWNAT','9197279TvIIsl','PREVIEW','executeCommand','6398118qFAqoh','node-projects-demo-view','createElement'];a=function(){return l;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x14f))/0x1+-parseInt(h(0x14d))/0x2*(parseInt(h(0x14c))/0x3)+parseInt(h(0x153))/0x4+parseInt(h(0x13e))/0x5*(parseInt(h(0x13b))/0x6)+-parseInt(h(0x146))/0x7+parseInt(h(0x14e))/0x8*(parseInt(h(0x149))/0x9)+-parseInt(h(0x145))/0xa*(parseInt(h(0x154))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd2ee));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x142)];['_loading'];static [i(0x143)]=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document['createElement']('div'),this['_placeholder']['id']='placeholder',this['_placeholder'][j(0x143)][j(0x150)]='scale(1)',this[j(0x13f)]['appendChild'](this['_placeholder']),this['_loading']=document['createElement']('div'),this[j(0x13d)]['id']='loading',this[j(0x13d)][j(0x13c)]='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0x144)](this['_loading']);const c=document[j(0x14b)]('div');c['id']=j(0x140);const d=document['createElement'](j(0x139));d['innerText']=j(0x147),c[j(0x144)](d),this['shadowRoot'][j(0x144)](c);}[i(0x152)](){}[i(0x148)];[i(0x13a)];async[i(0x141)](c,d,e,f){const k=i;this[k(0x13d)][k(0x151)]=![],await c['demoProviderService']['provideDemo'](this[k(0x142)],c,d,e,f),this[k(0x13d)][k(0x151)]=!![];}}customElements['define'](i(0x14a),DemoView);