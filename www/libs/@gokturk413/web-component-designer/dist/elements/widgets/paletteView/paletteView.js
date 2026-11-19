const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x188))/0x1*(-parseInt(i(0x18e))/0x2)+parseInt(i(0x184))/0x3*(-parseInt(i(0x18b))/0x4)+-parseInt(i(0x19c))/0x5*(-parseInt(i(0x185))/0x6)+parseInt(i(0x191))/0x7*(parseInt(i(0x186))/0x8)+-parseInt(i(0x19b))/0x9*(-parseInt(i(0x18f))/0xa)+parseInt(i(0x19d))/0xb*(-parseInt(i(0x198))/0xc)+parseInt(i(0x194))/0xd*(parseInt(i(0x199))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdfc27));import'../../controls/DesignerTabControl.js';function a(){const m=['Error\x20loading\x20elements','916hBNjUk','loadElements','native','96616Hovetq','10fJcKvn','warn','464779aRBkMv','innerHTML','appendChild','13GtylVO','_designerTabControl','onElementsChanged','selectedIndex','375324PhgFZc','10598812JIIJQE','selected','13819293HqFOnN','1366815wNAZas','396dnfOSi','16194NCxneg','30Jeyxau','88LqYzTr','node-projects-palette-view','23ZpKDtk','refreshItems'];a=function(){return m;};return a();}import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x184;const e=a();let f=e[c];return f;}export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x19a)]=j(0x18d);['_designerTabControl'];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this['_restoreCachedInititalValues'](),this[k(0x195)]=new DesignerTabControl(),this[k(0x195)][k(0x197)]=0x0,this['shadowRoot'][k(0x193)](this[k(0x195)]);}async['loadControls'](c,d){const l=j;this[l(0x195)][l(0x192)]='';for(const e of d){try{let f=await e['getElements'](),g=new PaletteElements();g['title']=e['name'],this[l(0x195)]['appendChild'](g),g[l(0x18c)](c,f),e[l(0x196)]?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console[l(0x190)](l(0x18a),h);}}this['_designerTabControl'][l(0x189)]();}}customElements['define'](j(0x187),PaletteView);