const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xd5))/0x1+-parseInt(h(0xd9))/0x2+parseInt(h(0xe7))/0x3+-parseInt(h(0xe3))/0x4+-parseInt(h(0xe9))/0x5+-parseInt(h(0xe8))/0x6*(-parseInt(h(0xe6))/0x7)+parseInt(h(0xe2))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeceb4));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const l=['canExecuteCommand','style','shadowRoot','3695608unhsfR','2180428fbQhxC','appendChild','innerText','961079mTTrlc','2158707RaoFOc','12HzWvqi','6755525ISHwNW','PREVIEW','provideDemo','1937938yddDOM','createElement','display','loading','1054840jXGEPr','_placeholder','dispose','_loading','div','textContent'];a=function(){return l;};return a();}function b(c,d){c=c-0xd3;const e=a();let f=e[c];return f;}export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static ['style']=css`
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
  }`;constructor(){const i=b;super(),this[i(0xda)]=document['createElement']('div'),this[i(0xda)]['id']='placeholder',this[i(0xda)][i(0xe0)]['transform']='scale(1)',this[i(0xe1)][i(0xe4)](this[i(0xda)]),this['_loading']=document[i(0xd6)](i(0xdd)),this[i(0xdc)]['id']=i(0xd8),this['_loading'][i(0xde)]='🛀\x20Hold\x20on,\x20loading...',this[i(0xe1)]['appendChild'](this['_loading']);const c=document[i(0xd6)]('div');c['id']='left';const d=document[i(0xd6)]('span');d[i(0xe5)]=i(0xd3),c['appendChild'](d),this['shadowRoot']['appendChild'](c);}[j(0xdb)](){}['executeCommand'];[j(0xdf)];async[j(0xd7)](c,d,e,f){const k=j;this[k(0xdc)]['hidden']=![],await c['demoProviderService'][k(0xd4)](this[k(0xda)],c,d,e,f),this[k(0xdc)]['hidden']=!![];}}customElements['define']('node-projects-demo-view',DemoView);