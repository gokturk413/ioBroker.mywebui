const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x86))/0x1*(-parseInt(i(0x85))/0x2)+-parseInt(i(0x73))/0x3+-parseInt(i(0x7d))/0x4*(parseInt(i(0x77))/0x5)+parseInt(i(0x75))/0x6*(-parseInt(i(0x8a))/0x7)+-parseInt(i(0x79))/0x8*(-parseInt(i(0x88))/0x9)+parseInt(i(0x83))/0xa+-parseInt(i(0x74))/0xb*(-parseInt(i(0x76))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe34fe));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';function b(c,d){c=c-0x73;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x7b)]=j(0x81);[j(0x84)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this[k(0x7f)][k(0x82)](this[k(0x84)]);}async[j(0x89)](c,d){const l=j;this[l(0x84)]['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g['title']=e['name'],this[l(0x84)][l(0x82)](g),g[l(0x80)](c,f),e[l(0x87)]?.['on'](async()=>{const m=l;g['loadElements'](c,await e[m(0x7a)]());});}catch(h){console[l(0x78)](l(0x7e),h);}}this['_designerTabControl'][l(0x7c)]();}}function a(){const n=['_designerTabControl','40iuLXnI','80247LcLLAT','onElementsChanged','333zTgfUy','loadControls','14IJARrW','1047741qqWDsx','110ofRGtP','5546220fkMbiX','779928nlHFih','5465455DYpDMG','warn','110512DjwVLh','getElements','selected','refreshItems','4YsHsZd','Error\x20loading\x20elements','shadowRoot','loadElements','native','appendChild','14561500xnjgJq'];a=function(){return n;};return a();}customElements['define']('node-projects-palette-view',PaletteView);