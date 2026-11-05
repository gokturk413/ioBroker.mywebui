function a(){const n=['loadElements','refreshItems','selectedIndex','6827040XYcBWG','Error\x20loading\x20elements','267ylNhJy','shadowRoot','56346itekpZ','node-projects-palette-view','4UvODfi','title','_designerTabControl','3902838etrgCv','loadControls','36948kKPhHC','5cORfwj','11yIKEVw','16xmdCzL','459235aRhrpb','1399188YDpflL','selected','1369400jrTWQT'];a=function(){return n;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xdd))/0x1*(-parseInt(i(0xc9))/0x2)+parseInt(i(0xdb))/0x3*(parseInt(i(0xce))/0x4)+parseInt(i(0xcf))/0x5*(parseInt(i(0xcc))/0x6)+-parseInt(i(0xd2))/0x7*(parseInt(i(0xd1))/0x8)+-parseInt(i(0xd9))/0x9+-parseInt(i(0xd5))/0xa+parseInt(i(0xd0))/0xb*(parseInt(i(0xd3))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6dce3));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';function b(c,d){c=c-0xc9;const e=a();let f=e[c];return f;}import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0xd4)]='native';[j(0xcb)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0xcb)]=new DesignerTabControl(),this[k(0xcb)][k(0xd8)]=0x0,this[k(0xdc)]['appendChild'](this[k(0xcb)]);}async[j(0xcd)](c,d){const l=j;this[l(0xcb)]['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0xca)]=e['name'],this['_designerTabControl']['appendChild'](g),g[l(0xd6)](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0xd6)](c,await e['getElements']());});}catch(h){console['warn'](l(0xda),h);}}this[l(0xcb)][l(0xd7)]();}}customElements['define'](j(0xde),PaletteView);