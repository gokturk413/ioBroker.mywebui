const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x7a))/0x1*(-parseInt(i(0x6d))/0x2)+-parseInt(i(0x7d))/0x3+parseInt(i(0x71))/0x4*(parseInt(i(0x6e))/0x5)+-parseInt(i(0x67))/0x6+parseInt(i(0x76))/0x7*(parseInt(i(0x70))/0x8)+parseInt(i(0x7c))/0x9*(-parseInt(i(0x77))/0xa)+parseInt(i(0x65))/0xb*(parseInt(i(0x6f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70352));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x69)]=j(0x72);[j(0x79)];static [j(0x73)]=css`
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
    }`;constructor(){const k=j;super(),this[k(0x66)](),this[k(0x79)]=new DesignerTabControl(),this[k(0x79)][k(0x74)]=0x0,this[k(0x75)][k(0x7b)](this[k(0x79)]);}async[j(0x6b)](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e[l(0x78)](),g=new PaletteElements();g['title']=e['name'],this[l(0x79)]['appendChild'](g),g['loadElements'](c,f),e[l(0x6c)]?.['on'](async()=>{const m=l;g[m(0x68)](c,await e[m(0x78)]());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this[l(0x79)]['refreshItems']();}}customElements[j(0x6a)]('node-projects-palette-view',PaletteView);function b(c,d){c=c-0x65;const e=a();let f=e[c];return f;}function a(){const n=['native','style','selectedIndex','shadowRoot','169547wslzIY','1420ZyOjli','getElements','_designerTabControl','171gEwiCh','appendChild','297HQgTML','794676pyIeQr','3738955NBSCSF','_restoreCachedInititalValues','1259328yDnYcV','loadElements','selected','define','loadControls','onElementsChanged','3310iwzuNK','274345IaDCGb','24mxPhAa','16Vmqskc','36Yybkdf'];a=function(){return n;};return a();}