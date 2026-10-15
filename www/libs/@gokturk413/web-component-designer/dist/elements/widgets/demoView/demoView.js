const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a7))/0x1*(parseInt(h(0x1ac))/0x2)+parseInt(h(0x1aa))/0x3*(parseInt(h(0x1a6))/0x4)+-parseInt(h(0x1b6))/0x5+parseInt(h(0x1a5))/0x6*(parseInt(h(0x1b4))/0x7)+parseInt(h(0x1ba))/0x8+-parseInt(h(0x1be))/0x9+-parseInt(h(0x1b0))/0xa*(-parseInt(h(0x1b5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9fbdf));function b(c,d){c=c-0x1a5;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x1b1)];[i(0x1ad)];static [i(0x1b2)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x1b1)]=document[j(0x1bf)](j(0x1b3)),this['_placeholder']['id']='placeholder',this['_placeholder'][j(0x1b2)]['transform']=j(0x1a9),this['shadowRoot'][j(0x1bd)](this['_placeholder']),this['_loading']=document[j(0x1bf)](j(0x1b3)),this[j(0x1ad)]['id']='loading',this['_loading']['textContent']='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot'][j(0x1bd)](this[j(0x1ad)]);const c=document['createElement']('div');c['id']='left';const d=document[j(0x1bf)]('span');d['innerText']=j(0x1bb),c[j(0x1bd)](d),this[j(0x1a8)]['appendChild'](c);}[i(0x1ae)](){}[i(0x1af)];[i(0x1b8)];async[i(0x1b7)](c,d,e,f){const k=i;this['_loading'][k(0x1b9)]=![],await c['demoProviderService'][k(0x1bc)](this['_placeholder'],c,d,e,f),this['_loading'][k(0x1b9)]=!![];}}customElements['define'](i(0x1ab),DemoView);function a(){const l=['hidden','2935832odHZDA','PREVIEW','provideDemo','appendChild','10429425HxsOPm','createElement','54072lmZNkP','996sqXYay','10iscvDI','shadowRoot','scale(1)','8331HdkSZP','node-projects-demo-view','80566wMQtuL','_loading','dispose','executeCommand','230CNbWUd','_placeholder','style','div','952UNyThD','86812IdnUAa','5276510FxHvbV','display','canExecuteCommand'];a=function(){return l;};return a();}