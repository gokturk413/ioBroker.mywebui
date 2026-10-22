const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x143))/0x1*(-parseInt(i(0x141))/0x2)+-parseInt(i(0x134))/0x3*(-parseInt(i(0x130))/0x4)+parseInt(i(0x13f))/0x5*(parseInt(i(0x137))/0x6)+-parseInt(i(0x132))/0x7*(parseInt(i(0x135))/0x8)+-parseInt(i(0x12f))/0x9*(parseInt(i(0x13d))/0xa)+-parseInt(i(0x142))/0xb*(parseInt(i(0x145))/0xc)+-parseInt(i(0x13e))/0xd*(-parseInt(i(0x138))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3c7e3));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x139)]='native';[j(0x133)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0x12e)](),this[k(0x133)]=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this[k(0x140)]['appendChild'](this['_designerTabControl']);}async['loadControls'](c,d){const l=j;this['_designerTabControl'][l(0x13a)]='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0x13c)]=e['name'],this['_designerTabControl']['appendChild'](g),g['loadElements'](c,f),e[l(0x146)]?.['on'](async()=>{const m=l;g['loadElements'](c,await e[m(0x13b)]());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this[l(0x133)][l(0x136)]();}}function b(c,d){c=c-0x12e;const e=a();let f=e[c];return f;}function a(){const n=['refreshItems','12HrKbMj','42ysUhaW','selected','innerHTML','getElements','title','7680gwfvVc','2689154sDVoSg','646120WBUenp','shadowRoot','862124GWUlda','439802NRTeeW','1tqfxsW','node-projects-palette-view','12jrOozR','onElementsChanged','_restoreCachedInititalValues','2970NNUtFU','580NLfDQN','define','126PuWIcD','_designerTabControl','9669VTwvWx','166264vmyLKo'];a=function(){return n;};return a();}customElements[j(0x131)](j(0x144),PaletteView);