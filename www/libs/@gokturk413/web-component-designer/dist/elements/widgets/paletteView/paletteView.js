const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x147))/0x1+parseInt(i(0x14e))/0x2+parseInt(i(0x142))/0x3*(parseInt(i(0x14d))/0x4)+-parseInt(i(0x153))/0x5*(parseInt(i(0x148))/0x6)+parseInt(i(0x146))/0x7*(-parseInt(i(0x14f))/0x8)+-parseInt(i(0x151))/0x9+parseInt(i(0x150))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc70ac));function a(){const m=['style','Error\x20loading\x20elements','3116nLcFDa','2403702gToqZo','4904dXSXOz','14456350mryibW','9769464OBrBpY','warn','20bLzHWn','5823NTLOix','_designerTabControl','appendChild','selectedIndex','8939XSHbtx','670516EPKecH','1208154ifDqAw','define','name'];a=function(){return m;};return a();}import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';function b(c,d){c=c-0x142;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']='native';[j(0x143)];static [j(0x14b)]=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x143)]=new DesignerTabControl(),this['_designerTabControl'][k(0x145)]=0x0,this['shadowRoot'][k(0x144)](this[k(0x143)]);}async['loadControls'](c,d){const l=j;this[l(0x143)]['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g['title']=e[l(0x14a)],this['_designerTabControl']['appendChild'](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console[l(0x152)](l(0x14c),h);}}this[l(0x143)]['refreshItems']();}}customElements[j(0x149)]('node-projects-palette-view',PaletteView);