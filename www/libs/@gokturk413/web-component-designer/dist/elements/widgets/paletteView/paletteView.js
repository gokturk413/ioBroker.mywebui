const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1b4))/0x1+-parseInt(i(0x1be))/0x2*(-parseInt(i(0x1ad))/0x3)+parseInt(i(0x1b5))/0x4+-parseInt(i(0x1af))/0x5+parseInt(i(0x1ba))/0x6*(parseInt(i(0x1b8))/0x7)+-parseInt(i(0x1ae))/0x8+parseInt(i(0x1b1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5925));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1aa;const e=a();let f=e[c];return f;}function a(){const n=['loadControls','1403515AbGzJZ','4293368ShIYOA','loadElements','selected','56ldbeeS','innerHTML','476730DOHAYX','_designerTabControl','node-projects-palette-view','title','78WUAaUg','_restoreCachedInititalValues','getElements','appendChild','110019BHXYXO','11419392ccECjY','7725425hyAikw','Error\x20loading\x20elements','18414432rTUDXh','selectedIndex'];a=function(){return n;};return a();}export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x1b7)]='native';[j(0x1bb)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0x1aa)](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl'][k(0x1b2)]=0x0,this['shadowRoot']['appendChild'](this['_designerTabControl']);}async[j(0x1b3)](c,d){const l=j;this[l(0x1bb)][l(0x1b9)]='';for(const e of d){try{let f=await e[l(0x1ab)](),g=new PaletteElements();g[l(0x1bd)]=e['name'],this['_designerTabControl'][l(0x1ac)](g),g[l(0x1b6)](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0x1b6)](c,await e['getElements']());});}catch(h){console['warn'](l(0x1b0),h);}}this[l(0x1bb)]['refreshItems']();}}customElements['define'](j(0x1bc),PaletteView);