const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e8))/0x1+parseInt(h(0x1f9))/0x2+parseInt(h(0x1f2))/0x3*(-parseInt(h(0x1f1))/0x4)+parseInt(h(0x1ea))/0x5*(parseInt(h(0x1e4))/0x6)+parseInt(h(0x1f5))/0x7+parseInt(h(0x1f6))/0x8*(parseInt(h(0x1e3))/0x9)+-parseInt(h(0x1e9))/0xa*(parseInt(h(0x1e7))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7f745));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1e1;const e=a();let f=e[c];return f;}export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];[i(0x1f3)];static [i(0x1ed)]=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document[j(0x1ec)](j(0x1e5)),this[j(0x1ee)]['id']='placeholder',this['_placeholder']['style'][j(0x1ef)]=j(0x1e2),this[j(0x1fb)]['appendChild'](this[j(0x1ee)]),this[j(0x1f3)]=document['createElement'](j(0x1e5)),this['_loading']['id']='loading',this['_loading'][j(0x1f7)]=j(0x1fa),this[j(0x1fb)]['appendChild'](this[j(0x1f3)]);const c=document[j(0x1ec)]('div');c['id']='left';const d=document[j(0x1ec)]('span');d[j(0x1e6)]=j(0x1f8),c['appendChild'](d),this['shadowRoot']['appendChild'](c);}[i(0x1e1)](){}['executeCommand'];[i(0x1f4)];async['display'](c,d,e,f){const k=i;this[k(0x1f3)][k(0x1eb)]=![],await c['demoProviderService'][k(0x1fc)](this['_placeholder'],c,d,e,f),this[k(0x1f3)]['hidden']=!![];}}customElements[i(0x1f0)]('node-projects-demo-view',DemoView);function a(){const l=['3669530mFgqYw','3126395NTNHpq','hidden','createElement','style','_placeholder','transform','define','2863436qpRxTT','3jNEgAC','_loading','canExecuteCommand','3191993kiRubr','417736ZKDWfd','textContent','PREVIEW','632052jCHcbD','🛀\x20Hold\x20on,\x20loading...','shadowRoot','provideDemo','dispose','scale(1)','72FmEXBh','6dRtokQ','div','innerText','11sDQawn','210175CAYyXy'];a=function(){return l;};return a();}