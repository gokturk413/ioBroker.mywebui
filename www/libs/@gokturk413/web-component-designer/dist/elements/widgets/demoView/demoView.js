const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xb8))/0x1+parseInt(h(0xb7))/0x2+parseInt(h(0xbd))/0x3+parseInt(h(0xc0))/0x4+-parseInt(h(0xad))/0x5*(parseInt(h(0xc1))/0x6)+parseInt(h(0xb0))/0x7+-parseInt(h(0xc2))/0x8*(parseInt(h(0xbf))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x91f19));function b(c,d){c=c-0xad;const e=a();let f=e[c];return f;}function a(){const l=['705808BzwIqV','createElement','display','left','loading','1780473RfARIC','provideDemo','10755387rhaIJr','4743964IxfhQL','42kAAmQo','8FLyyHt','define','executeCommand','PREVIEW','appendChild','placeholder','790945rZwkSD','node-projects-demo-view','dispose','7155659kJgHcf','span','🛀\x20Hold\x20on,\x20loading...','_placeholder','innerText','_loading','div','1608480mHuJan'];a=function(){return l;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xb3)];[i(0xb5)];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this[j(0xb3)]=document['createElement']('div'),this[j(0xb3)]['id']=j(0xc7),this[j(0xb3)]['style']['transform']='scale(1)',this['shadowRoot'][j(0xc6)](this[j(0xb3)]),this['_loading']=document['createElement']('div'),this[j(0xb5)]['id']=j(0xbc),this[j(0xb5)]['textContent']=j(0xb2),this['shadowRoot'][j(0xc6)](this['_loading']);const c=document[j(0xb9)](j(0xb6));c['id']=j(0xbb);const d=document[j(0xb9)](j(0xb1));d[j(0xb4)]=j(0xc5),c[j(0xc6)](d),this['shadowRoot']['appendChild'](c);}[i(0xaf)](){}[i(0xc4)];['canExecuteCommand'];async[i(0xba)](c,d,e,f){const k=i;this['_loading']['hidden']=![],await c['demoProviderService'][k(0xbe)](this['_placeholder'],c,d,e,f),this['_loading']['hidden']=!![];}}customElements[i(0xc3)](i(0xae),DemoView);