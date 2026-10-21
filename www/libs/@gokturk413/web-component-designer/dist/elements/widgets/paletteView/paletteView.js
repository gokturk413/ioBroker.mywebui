function a(){const n=['node-projects-palette-view','_designerTabControl','675792RoEGWi','4840227UgFCJa','28747ekjmZC','2666744xpqHfN','style','287043DjmFSf','Error\x20loading\x20elements','loadElements','4431816qNTGdQ','10EBCCnm','16mmernN','3842424idFqXQ','define','getElements','innerHTML','_restoreCachedInititalValues'];a=function(){return n;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x90))/0x1*(parseInt(i(0x98))/0x2)+-parseInt(i(0x93))/0x3+parseInt(i(0x91))/0x4+parseInt(i(0x97))/0x5*(parseInt(i(0x8e))/0x6)+-parseInt(i(0x8f))/0x7+-parseInt(i(0x87))/0x8+parseInt(i(0x96))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x54b19));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';function b(c,d){c=c-0x87;const e=a();let f=e[c];return f;}import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']='native';[j(0x8d)];static [j(0x92)]=css`
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
    }`;constructor(){const k=j;super(),this[k(0x8b)](),this[k(0x8d)]=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this['shadowRoot']['appendChild'](this[k(0x8d)]);}async['loadControls'](c,d){const l=j;this['_designerTabControl'][l(0x8a)]='';for(const e of d){try{let f=await e[l(0x89)](),g=new PaletteElements();g['title']=e['name'],this[l(0x8d)]['appendChild'](g),g['loadElements'](c,f),e['onElementsChanged']?.['on'](async()=>{const m=l;g[m(0x95)](c,await e[m(0x89)]());});}catch(h){console['warn'](l(0x94),h);}}this[l(0x8d)]['refreshItems']();}}customElements[j(0x88)](j(0x8c),PaletteView);