const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x15a))/0x1*(parseInt(i(0x14f))/0x2)+parseInt(i(0x163))/0x3*(parseInt(i(0x153))/0x4)+-parseInt(i(0x151))/0x5*(parseInt(i(0x15d))/0x6)+-parseInt(i(0x15e))/0x7*(-parseInt(i(0x162))/0x8)+-parseInt(i(0x164))/0x9*(parseInt(i(0x160))/0xa)+-parseInt(i(0x165))/0xb+parseInt(i(0x154))/0xc*(parseInt(i(0x158))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x666cd));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x14f;const e=a();let f=e[c];return f;}export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x156)]='native';[j(0x15b)];static [j(0x15f)]=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x15b)]=new DesignerTabControl(),this[k(0x15b)][k(0x155)]=0x0,this['shadowRoot'][k(0x15c)](this['_designerTabControl']);}async['loadControls'](c,d){const l=j;this['_designerTabControl'][l(0x157)]='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0x152)]=e['name'],this['_designerTabControl']['appendChild'](g),g[l(0x161)](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0x161)](c,await e['getElements']());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this['_designerTabControl'][l(0x150)]();}}customElements['define'](j(0x159),PaletteView);function a(){const n=['title','1636AuWNzg','12415056TziKFv','selectedIndex','selected','innerHTML','13ViOmBy','node-projects-palette-view','3ZqkDhq','_designerTabControl','appendChild','6HWREMV','482034djQcJN','style','10yjBWnf','loadElements','24hAgduk','3117FTNGKM','5699259uMgTom','1488905fmYcyE','145910kMvYhM','refreshItems','1295605vwZIXG'];a=function(){return n;};return a();}