const j=b;function b(c,d){c=c-0x1ef;const e=a();let f=e[c];return f;}function a(){const n=['title','1002qgCISN','239270dEcwVh','onElementsChanged','warn','1417155vKYWPN','native','innerHTML','appendChild','loadElements','18XrmczK','selected','9385070jRrgiG','19565GwSBWt','_restoreCachedInititalValues','385wDxoCq','4537436xlzajp','_designerTabControl','132520pWoyEl','684946fcVZTc'];a=function(){return n;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1fd))/0x1+-parseInt(i(0x200))/0x2+parseInt(i(0x1ef))/0x3+-parseInt(i(0x1fa))/0x4+-parseInt(i(0x1f7))/0x5*(parseInt(i(0x1ff))/0x6)+parseInt(i(0x1f9))/0x7*(parseInt(i(0x1fc))/0x8)+parseInt(i(0x1f4))/0x9*(parseInt(i(0x1f6))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa319f));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x1f5)]=j(0x1f0);[j(0x1fb)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0x1f8)](),this[k(0x1fb)]=new DesignerTabControl(),this[k(0x1fb)]['selectedIndex']=0x0,this['shadowRoot']['appendChild'](this['_designerTabControl']);}async['loadControls'](c,d){const l=j;this[l(0x1fb)][l(0x1f1)]='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0x1fe)]=e['name'],this[l(0x1fb)][l(0x1f2)](g),g[l(0x1f3)](c,f),e[l(0x201)]?.['on'](async()=>{const m=l;g[m(0x1f3)](c,await e['getElements']());});}catch(h){console[l(0x202)]('Error\x20loading\x20elements',h);}}this['_designerTabControl']['refreshItems']();}}customElements['define']('node-projects-palette-view',PaletteView);