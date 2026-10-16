const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x119))/0x1*(parseInt(i(0x11a))/0x2)+parseInt(i(0x11d))/0x3+-parseInt(i(0x113))/0x4*(parseInt(i(0x121))/0x5)+-parseInt(i(0x120))/0x6+parseInt(i(0x124))/0x7*(parseInt(i(0x11e))/0x8)+-parseInt(i(0x117))/0x9+parseInt(i(0x116))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9307c));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x113;const e=a();let f=e[c];return f;}function a(){const m=['selectedIndex','5bhDqXc','337138jEZSTE','title','define','1954320Ducrvm','88bTKgKC','style','3951156zytFNo','5oxXShw','native','_designerTabControl','521927XcGkGY','name','shadowRoot','_restoreCachedInititalValues','1879420BOioAH','appendChild','innerHTML','12199880QeBzTA','1063233zrRhGQ'];a=function(){return m;};return a();}export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']=j(0x122);['_designerTabControl'];static [j(0x11f)]=css`
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
    }`;constructor(){const k=j;super(),this[k(0x127)](),this[k(0x123)]=new DesignerTabControl(),this['_designerTabControl'][k(0x118)]=0x0,this[k(0x126)]['appendChild'](this[k(0x123)]);}async['loadControls'](c,d){const l=j;this[l(0x123)][l(0x115)]='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0x11b)]=e[l(0x125)],this[l(0x123)][l(0x114)](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console['warn']('Error\x20loading\x20elements',h);}}this[l(0x123)]['refreshItems']();}}customElements[j(0x11c)]('node-projects-palette-view',PaletteView);