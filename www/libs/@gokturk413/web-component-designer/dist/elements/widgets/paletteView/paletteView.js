const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x160))/0x1*(parseInt(i(0x163))/0x2)+-parseInt(i(0x162))/0x3+-parseInt(i(0x171))/0x4*(-parseInt(i(0x168))/0x5)+-parseInt(i(0x15c))/0x6*(parseInt(i(0x161))/0x7)+-parseInt(i(0x15f))/0x8+parseInt(i(0x16c))/0x9*(-parseInt(i(0x15e))/0xa)+parseInt(i(0x164))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a92b));import'../../controls/DesignerTabControl.js';function a(){const n=['_designerTabControl','native','4YXlREL','appendChild','loadElements','loadControls','438SQfraB','selected','146690kYAWoK','3118408WqKjkc','82oCSjlZ','61859DOwkAn','1637079bjhwiD','18846hskYcq','14122207AzOTVq','innerHTML','getElements','title','3396880Ipwxxq','onElementsChanged','Error\x20loading\x20elements','refreshItems','441HxQIsj','selectedIndex','style'];a=function(){return n;};return a();}import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x15a;const e=a();let f=e[c];return f;}export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x15d)]=j(0x170);['_designerTabControl'];static [j(0x16e)]=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x16f)]=new DesignerTabControl(),this[k(0x16f)][k(0x16d)]=0x0,this['shadowRoot'][k(0x172)](this['_designerTabControl']);}async[j(0x15b)](c,d){const l=j;this[l(0x16f)][l(0x165)]='';for(const e of d){try{let f=await e[l(0x166)](),g=new PaletteElements();g[l(0x167)]=e['name'],this['_designerTabControl'][l(0x172)](g),g['loadElements'](c,f),e[l(0x169)]?.['on'](async()=>{const m=l;g[m(0x15a)](c,await e['getElements']());});}catch(h){console['warn'](l(0x16a),h);}}this['_designerTabControl'][l(0x16b)]();}}customElements['define']('node-projects-palette-view',PaletteView);