const j=b;function a(){const n=['loadControls','_designerTabControl','72wIyRYo','18882jPtHgD','4662660LUulhN','getElements','2596638wLWqwT','selectedIndex','appendChild','11060hNLlgB','146428AGenxu','loadElements','onElementsChanged','501182lZTINC','native','8FaGwuS','name','warn','649467hesLgE','102995HfuZMP','title','refreshItems'];a=function(){return n;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1ee))/0x1+parseInt(i(0x1db))/0x2+-parseInt(i(0x1ea))/0x3+parseInt(i(0x1e6))/0x4*(-parseInt(i(0x1e1))/0x5)+-parseInt(i(0x1e8))/0x6+-parseInt(i(0x1e0))/0x7*(parseInt(i(0x1dd))/0x8)+-parseInt(i(0x1e7))/0x9*(-parseInt(i(0x1ed))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x95374));function b(c,d){c=c-0x1d9;const e=a();let f=e[c];return f;}import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']=j(0x1dc);['_designerTabControl'];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x1e5)]=new DesignerTabControl(),this[k(0x1e5)][k(0x1eb)]=0x0,this['shadowRoot'][k(0x1ec)](this[k(0x1e5)]);}async[j(0x1e4)](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0x1e2)]=e[l(0x1de)],this['_designerTabControl'][l(0x1ec)](g),g[l(0x1d9)](c,f),e[l(0x1da)]?.['on'](async()=>{const m=l;g[m(0x1d9)](c,await e[m(0x1e9)]());});}catch(h){console[l(0x1df)]('Error\x20loading\x20elements',h);}}this['_designerTabControl'][l(0x1e3)]();}}customElements['define']('node-projects-palette-view',PaletteView);