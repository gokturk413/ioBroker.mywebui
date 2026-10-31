function a(){const n=['name','7852785HhNSZx','loadElements','5108766GFEcuP','title','117IoIjVA','217SGhuYE','refreshItems','10604424SMDgfI','46cbaflk','54631JXwtaS','native','onElementsChanged','_designerTabControl','getElements','836950pwbWPX','2321748nZWBiG','appendChild','24952FrZEet'];a=function(){return n;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x1aa))/0x1*(parseInt(i(0x1a9))/0x2)+-parseInt(i(0x1a3))/0x3+parseInt(i(0x1b0))/0x4+parseInt(i(0x1b4))/0x5+-parseInt(i(0x1a8))/0x6+-parseInt(i(0x1a6))/0x7*(parseInt(i(0x1b2))/0x8)+-parseInt(i(0x1a5))/0x9*(-parseInt(i(0x1af))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe2b0f));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']=j(0x1ab);[j(0x1ad)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this['shadowRoot']['appendChild'](this[k(0x1ad)]);}async['loadControls'](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e[l(0x1ae)](),g=new PaletteElements();g[l(0x1a4)]=e[l(0x1b3)],this['_designerTabControl'][l(0x1b1)](g),g[l(0x1b5)](c,f),e[l(0x1ac)]?.['on'](async()=>{const m=l;g[m(0x1b5)](c,await e['getElements']());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this['_designerTabControl'][l(0x1a7)]();}}function b(c,d){c=c-0x1a3;const e=a();let f=e[c];return f;}customElements['define']('node-projects-palette-view',PaletteView);