const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1b7))/0x1+-parseInt(i(0x1b5))/0x2+parseInt(i(0x1c2))/0x3*(parseInt(i(0x1b0))/0x4)+-parseInt(i(0x1ba))/0x5*(-parseInt(i(0x1b2))/0x6)+-parseInt(i(0x1c0))/0x7+parseInt(i(0x1b9))/0x8*(-parseInt(i(0x1bf))/0x9)+parseInt(i(0x1bc))/0xa*(parseInt(i(0x1b4))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6866b));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1b0;const e=a();let f=e[c];return f;}function a(){const m=['_restoreCachedInititalValues','24pvbFjL','appendChild','16940hdNVzJ','617372XlTrdh','name','454170jwuMGp','loadElements','163912HFQIGb','460455GpYAao','_designerTabControl','8920dQcDQD','onElementsChanged','selected','351LYyWwh','1627556bNypZF','loadControls','720027BzNilt','8mPlGxm'];a=function(){return m;};return a();}export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x1be)]='native';[j(0x1bb)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0x1b1)](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this['shadowRoot'][k(0x1b3)](this['_designerTabControl']);}async[j(0x1c1)](c,d){const l=j;this[l(0x1bb)]['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g['title']=e[l(0x1b6)],this['_designerTabControl'][l(0x1b3)](g),g[l(0x1b8)](c,f),e[l(0x1bd)]?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this['_designerTabControl']['refreshItems']();}}customElements['define']('node-projects-palette-view',PaletteView);