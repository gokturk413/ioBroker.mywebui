const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x158))/0x1+parseInt(i(0x14c))/0x2+parseInt(i(0x145))/0x3*(parseInt(i(0x14b))/0x4)+-parseInt(i(0x157))/0x5+-parseInt(i(0x149))/0x6+parseInt(i(0x151))/0x7*(-parseInt(i(0x153))/0x8)+parseInt(i(0x14e))/0x9*(parseInt(i(0x14d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7df33));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';function a(){const n=['onElementsChanged','889fNeCnr','selected','2568CVSggD','style','warn','innerHTML','176240smoNtx','640485DjSWEp','_restoreCachedInititalValues','shadowRoot','44832DQcqDs','getElements','refreshItems','_designerTabControl','4634202GaIlns','node-projects-palette-view','148OgXgsj','1355304ilhZqh','10NRYZvC','6967602SKiPgI','loadElements'];a=function(){return n;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x152)]='native';['_designerTabControl'];static [j(0x154)]=css`
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
    }`;constructor(){const k=j;super(),this[k(0x143)](),this[k(0x148)]=new DesignerTabControl(),this[k(0x148)]['selectedIndex']=0x0,this[k(0x144)]['appendChild'](this['_designerTabControl']);}async['loadControls'](c,d){const l=j;this[l(0x148)][l(0x156)]='';for(const e of d){try{let f=await e[l(0x146)](),g=new PaletteElements();g['title']=e['name'],this[l(0x148)]['appendChild'](g),g[l(0x14f)](c,f),e[l(0x150)]?.['on'](async()=>{const m=l;g[m(0x14f)](c,await e['getElements']());});}catch(h){console[l(0x155)]('Error\x20loading\x20elements',h);}}this['_designerTabControl'][l(0x147)]();}}function b(c,d){c=c-0x143;const e=a();let f=e[c];return f;}customElements['define'](j(0x14a),PaletteView);