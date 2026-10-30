const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xdf))/0x1*(-parseInt(h(0xe0))/0x2)+-parseInt(h(0xeb))/0x3*(-parseInt(h(0xec))/0x4)+-parseInt(h(0xd9))/0x5+-parseInt(h(0xe2))/0x6+parseInt(h(0xe5))/0x7+-parseInt(h(0xf1))/0x8+-parseInt(h(0xde))/0x9*(-parseInt(h(0xdb))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1e876));function a(){const l=['appendChild','🛀\x20Hold\x20on,\x20loading...','createElement','_placeholder','604722SnHXew','4Qddjqc','loading','_loading','innerText','define','732848OPdAxR','PREVIEW','canExecuteCommand','shadowRoot','dispose','scale(1)','739580QpzPDf','style','10LdeFIi','textContent','node-projects-demo-view','3371841mhTuFP','57ZWKNDj','6826xKxBor','placeholder','1272840boMKGL','transform','demoProviderService','1365182QapgIx','span'];a=function(){return l;};return a();}function b(c,d){c=c-0xd9;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{[i(0xea)];[i(0xee)];static [i(0xda)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0xea)]=document[j(0xe9)]('div'),this['_placeholder']['id']=j(0xe1),this['_placeholder'][j(0xda)][j(0xe3)]=j(0xf6),this[j(0xf4)][j(0xe7)](this['_placeholder']),this['_loading']=document['createElement']('div'),this['_loading']['id']=j(0xed),this[j(0xee)][j(0xdc)]=j(0xe8),this[j(0xf4)][j(0xe7)](this[j(0xee)]);const c=document[j(0xe9)]('div');c['id']='left';const d=document['createElement'](j(0xe6));d[j(0xef)]=j(0xf2),c['appendChild'](d),this['shadowRoot']['appendChild'](c);}[i(0xf5)](){}['executeCommand'];[i(0xf3)];async['display'](c,d,e,f){const k=i;this[k(0xee)]['hidden']=![],await c[k(0xe4)]['provideDemo'](this['_placeholder'],c,d,e,f),this['_loading']['hidden']=!![];}}customElements[i(0xf0)](i(0xdd),DemoView);