const j=b;function a(){const l=['7425790MVqaWf','18NCglIA','demoProviderService','canExecuteCommand','createElement','🛀\x20Hold\x20on,\x20loading...','node-projects-demo-view','3703502nzBnip','provideDemo','_loading','div','5mEPasF','transform','3518hCtztl','132vWmiKt','style','7567384dxpgmM','4515824LsCBfR','PREVIEW','display','appendChild','textContent','shadowRoot','_placeholder','6burmgo','28Ezihhn','2844192JKeNtj','dispose','scale(1)','11077073cuPWnw','hidden'];a=function(){return l;};return a();}function b(c,d){c=c-0x1c4;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1d1))/0x1*(parseInt(h(0x1dd))/0x2)+-parseInt(h(0x1de))/0x3+-parseInt(h(0x1d5))/0x4*(parseInt(h(0x1cf))/0x5)+parseInt(h(0x1dc))/0x6*(parseInt(h(0x1e1))/0x7)+-parseInt(h(0x1d4))/0x8+parseInt(h(0x1c5))/0x9*(-parseInt(h(0x1c4))/0xa)+parseInt(h(0x1cb))/0xb*(parseInt(h(0x1d2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc9ed4));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static ['style']=css`
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
  }`;constructor(){const i=b;super(),this['_placeholder']=document['createElement']('div'),this[i(0x1db)]['id']='placeholder',this[i(0x1db)][i(0x1d3)][i(0x1d0)]=i(0x1e0),this['shadowRoot'][i(0x1d8)](this['_placeholder']),this[i(0x1cd)]=document['createElement'](i(0x1ce)),this[i(0x1cd)]['id']='loading',this['_loading'][i(0x1d9)]=i(0x1c9),this[i(0x1da)]['appendChild'](this[i(0x1cd)]);const c=document[i(0x1c8)]('div');c['id']='left';const d=document['createElement']('span');d['innerText']=i(0x1d6),c['appendChild'](d),this['shadowRoot'][i(0x1d8)](c);}[j(0x1df)](){}['executeCommand'];[j(0x1c7)];async[j(0x1d7)](c,d,e,f){const k=j;this['_loading'][k(0x1e2)]=![],await c[k(0x1c6)][k(0x1cc)](this[k(0x1db)],c,d,e,f),this['_loading']['hidden']=!![];}}customElements['define'](j(0x1ca),DemoView);