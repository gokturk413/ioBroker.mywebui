const m=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x144))/0x1+parseInt(i(0x138))/0x2+parseInt(i(0x13d))/0x3+-parseInt(i(0x143))/0x4*(parseInt(i(0x135))/0x5)+parseInt(i(0x13e))/0x6*(-parseInt(i(0x136))/0x7)+-parseInt(i(0x133))/0x8*(parseInt(i(0x139))/0x9)+-parseInt(i(0x13b))/0xa*(-parseInt(i(0x13a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99dcf));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']='native';['_designerTabControl'];static ['style']=css`
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
    }`;constructor(){const j=b;super(),this['_restoreCachedInititalValues'](),this[j(0x145)]=new DesignerTabControl(),this['_designerTabControl'][j(0x142)]=0x0,this['shadowRoot'][j(0x140)](this['_designerTabControl']);}async['loadControls'](c,d){const k=b;this[k(0x145)]['innerHTML']='';for(const e of d){try{let f=await e[k(0x141)](),g=new PaletteElements();g['title']=e['name'],this[k(0x145)][k(0x140)](g),g[k(0x13f)](c,f),e['onElementsChanged']?.['on'](async()=>{const l=k;g['loadElements'](c,await e[l(0x141)]());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this[k(0x145)][k(0x13c)]();}}function b(c,d){c=c-0x133;const e=a();let f=e[c];return f;}function a(){const n=['601569NiQCwB','11EBvRPw','10671690XjmLyT','refreshItems','877782diXkhK','96AMQMMG','loadElements','appendChild','getElements','selectedIndex','467756cCXNgX','363723fDIruK','_designerTabControl','88dLNIyp','define','15FZmFVT','50848VlDonV','node-projects-palette-view','218058CgAOlK'];a=function(){return n;};return a();}customElements[m(0x134)](m(0x137),PaletteView);