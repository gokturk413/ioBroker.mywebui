const j=b;function b(c,d){c=c-0x18c;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x194))/0x1+-parseInt(i(0x192))/0x2*(parseInt(i(0x19a))/0x3)+-parseInt(i(0x18d))/0x4*(-parseInt(i(0x190))/0x5)+parseInt(i(0x191))/0x6+-parseInt(i(0x19c))/0x7*(parseInt(i(0x19d))/0x8)+parseInt(i(0x197))/0x9+parseInt(i(0x196))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc10af));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x198)]='native';['_designerTabControl'];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x195)]=new DesignerTabControl(),this[k(0x195)]['selectedIndex']=0x0,this['shadowRoot'][k(0x18f)](this['_designerTabControl']);}async['loadControls'](c,d){const l=j;this['_designerTabControl'][l(0x193)]='';for(const e of d){try{let f=await e[l(0x199)](),g=new PaletteElements();g[l(0x18e)]=e[l(0x19e)],this['_designerTabControl']['appendChild'](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console['warn'](l(0x18c),h);}}this['_designerTabControl']['refreshItems']();}}function a(){const m=['12LQXTQE','title','appendChild','411205TDYzLn','5984526gpBPaE','797874sjfrYl','innerHTML','1452012gEpIye','_designerTabControl','10678110gXCGwG','9261657SCncXr','selected','getElements','3KIBJrn','define','7tEgrws','5595008jRpKEI','name','Error\x20loading\x20elements'];a=function(){return m;};return a();}customElements[j(0x19b)]('node-projects-palette-view',PaletteView);