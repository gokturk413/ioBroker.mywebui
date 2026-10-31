const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x124))/0x1+-parseInt(h(0x123))/0x2+-parseInt(h(0x122))/0x3*(parseInt(h(0x11b))/0x4)+parseInt(h(0x11e))/0x5+-parseInt(h(0x126))/0x6*(-parseInt(h(0x119))/0x7)+-parseInt(h(0x12e))/0x8*(-parseInt(h(0x128))/0x9)+parseInt(h(0x11d))/0xa*(parseInt(h(0x12d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5fd31));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x117;const e=a();let f=e[c];return f;}export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];[i(0x117)];static [i(0x11a)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x12a)]=document['createElement']('div'),this['_placeholder']['id']='placeholder',this[j(0x12a)][j(0x11a)][j(0x125)]='scale(1)',this['shadowRoot']['appendChild'](this['_placeholder']),this[j(0x117)]=document['createElement']('div'),this[j(0x117)]['id']='loading',this['_loading'][j(0x12b)]=j(0x121),this['shadowRoot']['appendChild'](this['_loading']);const c=document[j(0x120)]('div');c['id']='left';const d=document[j(0x120)]('span');d[j(0x129)]='PREVIEW',c['appendChild'](d),this[j(0x12c)]['appendChild'](c);}[i(0x127)](){}['executeCommand'];['canExecuteCommand'];async[i(0x11c)](c,d,e,f){const k=i;this[k(0x117)][k(0x118)]=![],await c['demoProviderService']['provideDemo'](this[k(0x12a)],c,d,e,f),this[k(0x117)][k(0x118)]=!![];}}function a(){const l=['🛀\x20Hold\x20on,\x20loading...','1668333OoVJFY','792880AaXjna','368996Gjgciy','transform','4200810rmzQQV','dispose','1341ytkXZL','innerText','_placeholder','textContent','shadowRoot','6677YqMkbS','2792MAkoYX','_loading','hidden','7PranZr','style','4snoZIj','display','10350DSvYWA','1668315rQVEvX','node-projects-demo-view','createElement'];a=function(){return l;};return a();}customElements['define'](i(0x11f),DemoView);