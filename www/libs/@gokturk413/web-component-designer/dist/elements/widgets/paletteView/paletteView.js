const j=b;function b(c,d){c=c-0xc6;const e=a();let f=e[c];return f;}function a(){const n=['_designerTabControl','356wYQTpw','2474796AGCXmb','_restoreCachedInititalValues','3688191gQtXKR','selectedIndex','54096TPRcaf','loadControls','appendChild','Error\x20loading\x20elements','getElements','4933UVzVLm','title','loadElements','1366542YpBnwQ','innerHTML','56DkClpX','2476675lPPkVQ','selected','onElementsChanged','1886970YuNFeC'];a=function(){return n;};return a();}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0xd2))/0x1*(parseInt(i(0xc8))/0x2)+-parseInt(i(0xc6))/0x3+parseInt(i(0xc9))/0x4+parseInt(i(0xd8))/0x5+-parseInt(i(0xd5))/0x6+-parseInt(i(0xd7))/0x7*(-parseInt(i(0xcd))/0x8)+-parseInt(i(0xcb))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbe58a));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0xd9)]='native';[j(0xc7)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0xca)](),this[k(0xc7)]=new DesignerTabControl(),this[k(0xc7)][k(0xcc)]=0x0,this['shadowRoot']['appendChild'](this['_designerTabControl']);}async[j(0xce)](c,d){const l=j;this['_designerTabControl'][l(0xd6)]='';for(const e of d){try{let f=await e[l(0xd1)](),g=new PaletteElements();g[l(0xd3)]=e['name'],this['_designerTabControl'][l(0xcf)](g),g[l(0xd4)](c,f),e[l(0xda)]?.['on'](async()=>{const m=l;g[m(0xd4)](c,await e[m(0xd1)]());});}catch(h){console['warn'](l(0xd0),h);}}this['_designerTabControl']['refreshItems']();}}customElements['define']('node-projects-palette-view',PaletteView);