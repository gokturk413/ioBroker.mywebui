function a(){const l=['_loading','loading','innerText','10658745wuMniS','7963550KzSpsZ','node-projects-demo-view','span','_placeholder','PREVIEW','30fYqwHm','1979607KVuXuu','left','🛀\x20Hold\x20on,\x20loading...','provideDemo','hidden','div','createElement','appendChild','8AFzKXS','executeCommand','9588593NpQXLu','1eoCkDD','4890960modDly','demoProviderService','style','666940cfYhnB','dispose','2728618VcJfBc','display'];a=function(){return l;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x11d))/0x1*(-parseInt(h(0x106))/0x2)+-parseInt(h(0x112))/0x3+parseInt(h(0x104))/0x4*(parseInt(h(0x111))/0x5)+parseInt(h(0x11e))/0x6+parseInt(h(0x11c))/0x7*(-parseInt(h(0x11a))/0x8)+-parseInt(h(0x10b))/0x9+parseInt(h(0x10c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xba195));function b(c,d){c=c-0x102;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x10f)];[i(0x108)];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this[j(0x10f)]=document['createElement'](j(0x117)),this[j(0x10f)]['id']='placeholder',this['_placeholder'][j(0x103)]['transform']='scale(1)',this['shadowRoot'][j(0x119)](this[j(0x10f)]),this[j(0x108)]=document[j(0x118)](j(0x117)),this['_loading']['id']=j(0x109),this[j(0x108)]['textContent']=j(0x114),this['shadowRoot']['appendChild'](this['_loading']);const c=document[j(0x118)]('div');c['id']=j(0x113);const d=document['createElement'](j(0x10e));d[j(0x10a)]=j(0x110),c['appendChild'](d),this['shadowRoot']['appendChild'](c);}[i(0x105)](){}[i(0x11b)];['canExecuteCommand'];async[i(0x107)](c,d,e,f){const k=i;this[k(0x108)][k(0x116)]=![],await c[k(0x102)][k(0x115)](this[k(0x10f)],c,d,e,f),this['_loading'][k(0x116)]=!![];}}customElements['define'](i(0x10d),DemoView);