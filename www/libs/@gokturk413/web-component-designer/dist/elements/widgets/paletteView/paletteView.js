const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xd2))/0x1*(parseInt(i(0xd7))/0x2)+parseInt(i(0xe0))/0x3+-parseInt(i(0xdd))/0x4*(parseInt(i(0xe1))/0x5)+parseInt(i(0xde))/0x6+parseInt(i(0xd9))/0x7+parseInt(i(0xd3))/0x8*(-parseInt(i(0xe2))/0x9)+-parseInt(i(0xd6))/0xa*(-parseInt(i(0xd5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x46c0c));import'../../controls/DesignerTabControl.js';function a(){const m=['240555jONBgz','1179ZselZJ','style','13farOuS','10152BrpiAF','_designerTabControl','11SWOCQf','2288290ZNKqoM','29234QOzRac','node-projects-palette-view','886802lxYTSz','getElements','selected','warn','36wjsQhg','927984NIYSCa','appendChild','1706652VYZJfj'];a=function(){return m;};return a();}import{PaletteElements}from'./paletteElements.js';function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0xdb)]='native';[j(0xd4)];static [j(0xd1)]=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0xd4)]=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this['shadowRoot'][k(0xdf)](this[k(0xd4)]);}async['loadControls'](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e[l(0xda)](),g=new PaletteElements();g['title']=e['name'],this['_designerTabControl']['appendChild'](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console[l(0xdc)]('Error\x20loading\x20elements',h);}}this[l(0xd4)]['refreshItems']();}}customElements['define'](j(0xd8),PaletteView);