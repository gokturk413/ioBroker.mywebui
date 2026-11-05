const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0xe1))/0x1*(parseInt(i(0xe4))/0x2)+-parseInt(i(0xdd))/0x3*(parseInt(i(0xdc))/0x4)+-parseInt(i(0xde))/0x5+-parseInt(i(0xed))/0x6+-parseInt(i(0xe6))/0x7+parseInt(i(0xe0))/0x8*(parseInt(i(0xe3))/0x9)+parseInt(i(0xe9))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xadbe5));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xdb;const e=a();let f=e[c];return f;}function a(){const n=['27pnCmMz','2782406AVGFOx','loadElements','8816220rljYQP','loadControls','Error\x20loading\x20elements','34228540IQzpYa','selectedIndex','selected','appendChild','1903698aCATnL','_designerTabControl','name','57108LrtLMW','207KXaYyx','260015qAJdSP','title','3450296InZMKT','1tKmINC','refreshItems'];a=function(){return n;};return a();}export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0xeb)]='native';[j(0xee)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this['_designerTabControl']=new DesignerTabControl(),this[k(0xee)][k(0xea)]=0x0,this['shadowRoot']['appendChild'](this['_designerTabControl']);}async[j(0xe7)](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g[l(0xdf)]=e[l(0xdb)],this[l(0xee)][l(0xec)](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0xe5)](c,await e['getElements']());});}catch(h){console['warn'](l(0xe8),h);}}this['_designerTabControl'][l(0xe2)]();}}customElements['define']('node-projects-palette-view',PaletteView);