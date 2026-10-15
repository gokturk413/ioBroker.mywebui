const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xdd))/0x1+-parseInt(i(0xe8))/0x2*(-parseInt(i(0xe9))/0x3)+parseInt(i(0xdc))/0x4*(-parseInt(i(0xe4))/0x5)+-parseInt(i(0xde))/0x6+-parseInt(i(0xea))/0x7+-parseInt(i(0xeb))/0x8*(-parseInt(i(0xed))/0x9)+-parseInt(i(0xef))/0xa*(-parseInt(i(0xdb))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf04ae));import'../../controls/DesignerTabControl.js';function a(){const n=['selected','appendChild','_designerTabControl','550UjrtmO','9699foOyQs','2794491iaWgNx','286728xYSuyt','shadowRoot','468MHTTbm','loadElements','10ZYwByr','getElements','22009350wqqpGR','15188brICZQ','904837IXZdez','9666264zoIQaf','define','onElementsChanged','node-projects-palette-view','native','selectedIndex','1125qTFWsc'];a=function(){return n;};return a();}import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0xe5)]=j(0xe2);['_designerTabControl'];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0xe7)]=new DesignerTabControl(),this['_designerTabControl'][k(0xe3)]=0x0,this[k(0xec)][k(0xe6)](this[k(0xe7)]);}async['loadControls'](c,d){const l=j;this[l(0xe7)]['innerHTML']='';for(const e of d){try{let f=await e[l(0xda)](),g=new PaletteElements();g['title']=e['name'],this[l(0xe7)][l(0xe6)](g),g[l(0xee)](c,f),e[l(0xe0)]?.['on'](async()=>{const m=l;g[m(0xee)](c,await e['getElements']());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this[l(0xe7)]['refreshItems']();}}function b(c,d){c=c-0xda;const e=a();let f=e[c];return f;}customElements[j(0xdf)](j(0xe1),PaletteView);