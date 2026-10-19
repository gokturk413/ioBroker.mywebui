function a(){const n=['135220mmrQOR','6037QUEZQk','appendChild','_designerTabControl','_restoreCachedInititalValues','refreshItems','20868TgMdNw','title','Error\x20loading\x20elements','onElementsChanged','1445253zqVafM','2437491hbQHLG','445nGBuDp','671144CnAyCa','name','5375952FLyFzL','226RnIRte','getElements','loadElements'];a=function(){return n;};return a();}const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x110))/0x1*(parseInt(i(0x10c))/0x2)+-parseInt(i(0x119))/0x3+-parseInt(i(0x10f))/0x4+parseInt(i(0x11b))/0x5*(parseInt(i(0x115))/0x6)+-parseInt(i(0x11a))/0x7+-parseInt(i(0x109))/0x8+parseInt(i(0x10b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9c96d));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';function b(c,d){c=c-0x109;const e=a();let f=e[c];return f;}import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{['selected']='native';[j(0x112)];static ['style']=css`
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
    }`;constructor(){const k=j;super(),this[k(0x113)](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl']['selectedIndex']=0x0,this['shadowRoot']['appendChild'](this['_designerTabControl']);}async['loadControls'](c,d){const l=j;this['_designerTabControl']['innerHTML']='';for(const e of d){try{let f=await e[l(0x10d)](),g=new PaletteElements();g[l(0x116)]=e[l(0x10a)],this[l(0x112)][l(0x111)](g),g[l(0x10e)](c,f),e[l(0x118)]?.['on'](async()=>{const m=l;g['loadElements'](c,await e[m(0x10d)]());});}catch(h){console['warn'](l(0x117),h);}}this['_designerTabControl'][l(0x114)]();}}customElements['define']('node-projects-palette-view',PaletteView);