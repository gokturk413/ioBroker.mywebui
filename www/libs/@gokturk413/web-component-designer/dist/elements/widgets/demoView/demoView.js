const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e8))/0x1*(parseInt(h(0x1f3))/0x2)+parseInt(h(0x1e3))/0x3+parseInt(h(0x1da))/0x4+-parseInt(h(0x1d9))/0x5+parseInt(h(0x1e7))/0x6*(-parseInt(h(0x1ef))/0x7)+parseInt(h(0x1dc))/0x8+-parseInt(h(0x1eb))/0x9*(-parseInt(h(0x1d8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x29dbc));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x1e5)];[i(0x1db)];static [i(0x1e9)]=css`
  :host {
    display: block;
    overflow: hidden;
    background: white;
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
    border-right: solid white 1px;
    box-sizing: border-box;
    background: black;
  }
  span {
    color: white;
    rotate: 270deg;
    display: block;
    position: absolute;
    top: 35px;
    left: -38px;
    font-weight: 600;
    font-family: monospace;
    font-size: 24px;
  }`;constructor(){const j=i;super(),this[j(0x1e5)]=document[j(0x1ea)](j(0x1e4)),this['_placeholder']['id']='placeholder',this['_placeholder'][j(0x1e9)][j(0x1e6)]=j(0x1ec),this['shadowRoot'][j(0x1dd)](this[j(0x1e5)]),this[j(0x1db)]=document['createElement'](j(0x1e4)),this['_loading']['id']=j(0x1f4),this['_loading']['textContent']=j(0x1f2),this[j(0x1df)]['appendChild'](this[j(0x1db)]);const c=document[j(0x1ea)](j(0x1e4));c['id']=j(0x1e0);const d=document[j(0x1ea)](j(0x1e2));d[j(0x1de)]=j(0x1f5),c['appendChild'](d),this['shadowRoot'][j(0x1dd)](c);}['dispose'](){}['executeCommand'];[i(0x1f0)];async['display'](c,d,e,f){const k=i;this[k(0x1db)][k(0x1ed)]=![],await c['demoProviderService'][k(0x1ee)](this[k(0x1e5)],c,d,e,f),this[k(0x1db)][k(0x1ed)]=!![];}}function b(c,d){c=c-0x1d8;const e=a();let f=e[c];return f;}customElements[i(0x1f1)](i(0x1e1),DemoView);function a(){const l=['canExecuteCommand','define','🛀\x20Hold\x20on,\x20loading...','14yCsNfF','loading','PREVIEW','20uiqwnk','1361110lnNrfy','1107136xSkjSr','_loading','2160416ZYUWRz','appendChild','innerText','shadowRoot','left','node-projects-demo-view','span','636963gNPyle','div','_placeholder','transform','225636fnoBys','42177ySPFOJ','style','createElement','78129YdtEtR','scale(1)','hidden','provideDemo','7uzausl'];a=function(){return l;};return a();}