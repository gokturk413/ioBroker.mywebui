const i=b;function b(c,d){c=c-0x1f1;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x201))/0x1*(-parseInt(h(0x202))/0x2)+-parseInt(h(0x1f7))/0x3+-parseInt(h(0x208))/0x4+-parseInt(h(0x1fc))/0x5*(parseInt(h(0x20f))/0x6)+parseInt(h(0x20b))/0x7+-parseInt(h(0x207))/0x8+-parseInt(h(0x20d))/0x9*(-parseInt(h(0x1fe))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee02a));function a(){const l=['138oMMJsy','div','createElement','_loading','placeholder','appendChild','_placeholder','display','5631180pJMURI','style','transform','PREVIEW','textContent','281455aZMKib','shadowRoot','10PdpocI','provideDemo','🛀\x20Hold\x20on,\x20loading...','1aRlSIy','3652238EjePBQ','hidden','scale(1)','dispose','node-projects-demo-view','9580200sBQGmh','3597980tvGbJv','demoProviderService','loading','3483305DskgEs','executeCommand','35279361gqNYcA','span'];a=function(){return l;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static [i(0x1f8)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x1f5)]=document[j(0x1f1)]('div'),this[j(0x1f5)]['id']=j(0x1f3),this[j(0x1f5)]['style'][j(0x1f9)]=j(0x204),this['shadowRoot'][j(0x1f4)](this[j(0x1f5)]),this[j(0x1f2)]=document[j(0x1f1)](j(0x210)),this[j(0x1f2)]['id']=j(0x20a),this['_loading'][j(0x1fb)]=j(0x200),this['shadowRoot']['appendChild'](this[j(0x1f2)]);const c=document['createElement'](j(0x210));c['id']='left';const d=document['createElement'](j(0x20e));d['innerText']=j(0x1fa),c[j(0x1f4)](d),this[j(0x1fd)]['appendChild'](c);}[i(0x205)](){}[i(0x20c)];['canExecuteCommand'];async[i(0x1f6)](c,d,e,f){const k=i;this[k(0x1f2)][k(0x203)]=![],await c[k(0x209)][k(0x1ff)](this[k(0x1f5)],c,d,e,f),this[k(0x1f2)]['hidden']=!![];}}customElements['define'](i(0x206),DemoView);