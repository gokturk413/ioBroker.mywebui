const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1df))/0x1+parseInt(i(0x1f2))/0x2*(-parseInt(i(0x1e4))/0x3)+-parseInt(i(0x1ea))/0x4*(parseInt(i(0x1e0))/0x5)+-parseInt(i(0x1ec))/0x6+parseInt(i(0x1e3))/0x7+-parseInt(i(0x1e8))/0x8+parseInt(i(0x1e2))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe00ae));function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}import'../../controls/DesignerTabControl.js';function a(){const n=['10485128UhRIOT','define','6786748QltKIm','appendChild','4042002iOXHhX','selected','title','_restoreCachedInititalValues','loadElements','_designerTabControl','1163272NRsqgW','style','1670137xGsXBc','5EKENZE','native','60842070eRCpnp','8774416KkPzuq','9ikEQeS','Error\x20loading\x20elements','loadControls','name'];a=function(){return n;};return a();}import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x1ed)]=j(0x1e1);['_designerTabControl'];static [j(0x1de)]=css`
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
    }`;constructor(){const k=j;super(),this[k(0x1ef)](),this['_designerTabControl']=new DesignerTabControl(),this[k(0x1f1)]['selectedIndex']=0x0,this['shadowRoot']['appendChild'](this[k(0x1f1)]);}async[j(0x1e6)](c,d){const l=j;this[l(0x1f1)]['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0x1ee)]=e[l(0x1e7)],this['_designerTabControl'][l(0x1eb)](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0x1f0)](c,await e['getElements']());});}catch(h){console['warn'](l(0x1e5),h);}}this[l(0x1f1)]['refreshItems']();}}customElements[j(0x1e9)]('node-projects-palette-view',PaletteView);