const k=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x177))/0x1+parseInt(i(0x173))/0x2+parseInt(i(0x16f))/0x3*(-parseInt(i(0x16e))/0x4)+-parseInt(i(0x162))/0x5*(-parseInt(i(0x16b))/0x6)+parseInt(i(0x164))/0x7*(parseInt(i(0x163))/0x8)+parseInt(i(0x171))/0x9*(parseInt(i(0x167))/0xa)+parseInt(i(0x170))/0xb*(-parseInt(i(0x16a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f316));function a(){const n=['4ZGGUrE','1118397eqkqrm','27079261wvgFCj','917109ZaQDfe','loadElements','2250284LJCBxJ','warn','loadControls','title','130568NiioZm','40165TOfDRT','160kRAPLJ','151151KfRYGB','appendChild','shadowRoot','70GFskMH','getElements','_designerTabControl','12SIzNOh','762zPRpCx','define','innerHTML'];a=function(){return n;};return a();}import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x162;const e=a();let f=e[c];return f;}export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']='native';['_designerTabControl'];static ['style']=css`
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
    }`;constructor(){const j=b;super(),this['_restoreCachedInititalValues'](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this[j(0x166)]['appendChild'](this[j(0x169)]);}async[k(0x175)](c,d){const l=k;this['_designerTabControl'][l(0x16d)]='';for(const e of d){try{let f=await e[l(0x168)](),g=new PaletteElements();g[l(0x176)]=e['name'],this['_designerTabControl'][l(0x165)](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0x172)](c,await e['getElements']());});}catch(h){console[l(0x174)]('Error\x20loading\x20elements',h);}}this['_designerTabControl']['refreshItems']();}}customElements[k(0x16c)]('node-projects-palette-view',PaletteView);