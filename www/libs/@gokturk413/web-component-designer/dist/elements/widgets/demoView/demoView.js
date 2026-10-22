const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x199))/0x1+-parseInt(h(0x19a))/0x2*(-parseInt(h(0x189))/0x3)+-parseInt(h(0x185))/0x4+-parseInt(h(0x196))/0x5+parseInt(h(0x190))/0x6*(-parseInt(h(0x197))/0x7)+-parseInt(h(0x18d))/0x8+-parseInt(h(0x18f))/0x9*(-parseInt(h(0x18c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe4b2d));function a(){const l=['hidden','🛀\x20Hold\x20on,\x20loading...','5619300gaREdd','dispose','style','define','130047ZiGEGi','canExecuteCommand','node-projects-demo-view','14451370OOIQaw','3904152EPZbIo','span','18oofKpt','1104498GGQWhw','_loading','PREVIEW','placeholder','demoProviderService','appendChild','5398795htyxDe','63jFLPSR','transform','1418704iknXOL','58zKEHLd','_placeholder','shadowRoot','executeCommand'];a=function(){return l;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];[i(0x191)];static [i(0x187)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x19b)]=document['createElement']('div'),this[j(0x19b)]['id']=j(0x193),this[j(0x19b)]['style'][j(0x198)]='scale(1)',this['shadowRoot']['appendChild'](this['_placeholder']),this[j(0x191)]=document['createElement']('div'),this[j(0x191)]['id']='loading',this['_loading']['textContent']=j(0x19f),this[j(0x19c)][j(0x195)](this['_loading']);const c=document['createElement']('div');c['id']='left';const d=document['createElement'](j(0x18e));d['innerText']=j(0x192),c[j(0x195)](d),this['shadowRoot']['appendChild'](c);}[i(0x186)](){}[i(0x19d)];[i(0x18a)];async['display'](c,d,e,f){const k=i;this['_loading'][k(0x19e)]=![],await c[k(0x194)]['provideDemo'](this['_placeholder'],c,d,e,f),this[k(0x191)]['hidden']=!![];}}function b(c,d){c=c-0x185;const e=a();let f=e[c];return f;}customElements[i(0x188)](i(0x18b),DemoView);