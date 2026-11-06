const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x10e))/0x1*(parseInt(h(0x101))/0x2)+parseInt(h(0x104))/0x3+parseInt(h(0x109))/0x4*(parseInt(h(0x102))/0x5)+-parseInt(h(0x107))/0x6+-parseInt(h(0x100))/0x7+parseInt(h(0x110))/0x8+parseInt(h(0x10b))/0x9*(-parseInt(h(0x114))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd5310));function b(c,d){c=c-0x100;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const l=['appendChild','textContent','159164cgtJGP','loading','9367008XxuQiS','shadowRoot','div','display','3284570vbYPPA','innerText','style','3212517jcRGBO','12PSTzRp','795DgaKHt','demoProviderService','4310364IkjZSe','_loading','_placeholder','2397024XthwjJ','createElement','3516OEIHgO','node-projects-demo-view','54IGBlrR'];a=function(){return l;};return a();}export class DemoView extends BaseCustomWebComponentLazyAppend{['_placeholder'];['_loading'];static [i(0x116)]=css`
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
  }`;constructor(){const j=i;super(),this[j(0x106)]=document[j(0x108)]('div'),this[j(0x106)]['id']='placeholder',this['_placeholder']['style']['transform']='scale(1)',this[j(0x111)][j(0x10c)](this['_placeholder']),this['_loading']=document[j(0x108)](j(0x112)),this['_loading']['id']=j(0x10f),this[j(0x105)][j(0x10d)]='🛀\x20Hold\x20on,\x20loading...',this[j(0x111)]['appendChild'](this['_loading']);const c=document['createElement']('div');c['id']='left';const d=document['createElement']('span');d[j(0x115)]='PREVIEW',c[j(0x10c)](d),this['shadowRoot'][j(0x10c)](c);}['dispose'](){}['executeCommand'];['canExecuteCommand'];async[i(0x113)](c,d,e,f){const k=i;this[k(0x105)]['hidden']=![],await c[k(0x103)]['provideDemo'](this[k(0x106)],c,d,e,f),this[k(0x105)]['hidden']=!![];}}customElements['define'](i(0x10a),DemoView);