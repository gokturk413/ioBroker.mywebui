const i=b;function b(c,d){c=c-0x14b;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x153))/0x1+parseInt(h(0x15a))/0x2+-parseInt(h(0x152))/0x3*(-parseInt(h(0x14c))/0x4)+-parseInt(h(0x159))/0x5+-parseInt(h(0x14f))/0x6+parseInt(h(0x15b))/0x7+parseInt(h(0x157))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcee42));function a(){const l=['span','2052012PUkMSq','691496wYFJcI','createElement','shadowRoot','innerText','15245192NEHThA','executeCommand','6932285MCScfQ','2268392jDIxmp','653821ECqZWR','div','_loading','hidden','_placeholder','appendChild','8DQoYJj','scale(1)','define','9455262lQXXBD','demoProviderService'];a=function(){return l;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0x15f)];['_loading'];static ['style']=css`
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
  }`;constructor(){const j=i;super(),this['_placeholder']=document['createElement'](j(0x15c)),this[j(0x15f)]['id']='placeholder',this['_placeholder']['style']['transform']=j(0x14d),this[j(0x155)]['appendChild'](this['_placeholder']),this[j(0x15d)]=document[j(0x154)](j(0x15c)),this['_loading']['id']='loading',this['_loading']['textContent']='🛀\x20Hold\x20on,\x20loading...',this['shadowRoot']['appendChild'](this['_loading']);const c=document[j(0x154)](j(0x15c));c['id']='left';const d=document[j(0x154)](j(0x151));d[j(0x156)]='PREVIEW',c[j(0x14b)](d),this['shadowRoot'][j(0x14b)](c);}['dispose'](){}[i(0x158)];['canExecuteCommand'];async['display'](c,d,e,f){const k=i;this[k(0x15d)]['hidden']=![],await c[k(0x150)]['provideDemo'](this['_placeholder'],c,d,e,f),this['_loading'][k(0x15e)]=!![];}}customElements[i(0x14e)]('node-projects-demo-view',DemoView);