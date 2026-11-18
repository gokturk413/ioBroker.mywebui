const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xa2))/0x1*(parseInt(i(0xad))/0x2)+parseInt(i(0x98))/0x3*(-parseInt(i(0xa5))/0x4)+-parseInt(i(0x9b))/0x5*(parseInt(i(0x9f))/0x6)+-parseInt(i(0xa1))/0x7+-parseInt(i(0xb0))/0x8+parseInt(i(0x99))/0x9*(parseInt(i(0x9e))/0xa)+parseInt(i(0xae))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98961));import'../../controls/DesignerTabControl.js';function a(){const n=['16wwfIQJ','innerHTML','shadowRoot','loadControls','Error\x20loading\x20elements','appendChild','onElementsChanged','_restoreCachedInititalValues','8182sfUZEJ','20663654iBSGCE','refreshItems','9267440lrbPHa','style','define','124449QbpBoN','18TXqfVd','getElements','5vbMlum','_designerTabControl','warn','2507270NPgvir','7176462dGqnsV','name','3290126PcJhYO','302idAxVX','title','loadElements'];a=function(){return n;};return a();}function b(c,d){c=c-0x96;const e=a();let f=e[c];return f;}import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']='native';[j(0x9c)];static [j(0x96)]=css`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      min-height: 0;
      overflow: hidden;
    }

    node-projects-designer-tab-control {
      flex: 1;
      min-height: 0;
    }`;constructor(){const k=j;super(),this[k(0xac)](),this[k(0x9c)]=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this[k(0xa7)][k(0xaa)](this[k(0x9c)]);}async[j(0xa8)](c,d){const l=j;this[l(0x9c)][l(0xa6)]='';for(const e of d){try{let f=await e[l(0x9a)](),g=new PaletteElements();g[l(0xa3)]=e[l(0xa0)],this[l(0x9c)]['appendChild'](g),g[l(0xa4)](c,f),e[l(0xab)]?.['on'](async()=>{const m=l;g['loadElements'](c,await e[m(0x9a)]());});}catch(h){console[l(0x9d)](l(0xa9),h);}}this[l(0x9c)][l(0xaf)]();}}customElements[j(0x97)]('node-projects-palette-view',PaletteView);