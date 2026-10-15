const j=b;function a(){const n=['warn','349223WHWZZD','name','title','4615044nHEDMu','_restoreCachedInititalValues','4594100RfAraQ','156CUBNji','248eZEGCv','appendChild','define','294070pcxkPP','207693KbTtyu','getElements','_designerTabControl','240tmfEUH','6898REabfr','295FDtLtL','native','15368221NxPTaa','shadowRoot'];a=function(){return n;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x125))/0x1*(-parseInt(i(0x124))/0x2)+parseInt(i(0x12d))/0x3+parseInt(i(0x12f))/0x4+parseInt(i(0x11f))/0x5*(parseInt(i(0x130))/0x6)+-parseInt(i(0x12a))/0x7*(parseInt(i(0x131))/0x8)+-parseInt(i(0x120))/0x9*(-parseInt(i(0x123))/0xa)+-parseInt(i(0x127))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5738));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']=j(0x126);[j(0x122)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0x12e)](),this[k(0x122)]=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this[k(0x128)][k(0x132)](this[k(0x122)]);}async['loadControls'](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e[l(0x121)](),g=new PaletteElements();g[l(0x12c)]=e[l(0x12b)],this[l(0x122)]['appendChild'](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g['loadElements'](c,await e[m(0x121)]());});}catch(h){console[l(0x129)]('Error\x20loading\x20elements',h);}}this['_designerTabControl']['refreshItems']();}}function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}customElements[j(0x11e)]('node-projects-palette-view',PaletteView);