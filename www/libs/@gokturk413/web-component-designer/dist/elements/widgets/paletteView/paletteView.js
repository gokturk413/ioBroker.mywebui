const j=b;function b(c,d){c=c-0x84;const e=a();let f=e[c];return f;}(function(c,d){const i=b,e=c();while(!![]){try{const f=parseInt(i(0x88))/0x1*(parseInt(i(0x99))/0x2)+-parseInt(i(0x8f))/0x3+-parseInt(i(0x97))/0x4*(parseInt(i(0x96))/0x5)+-parseInt(i(0x94))/0x6*(-parseInt(i(0x91))/0x7)+parseInt(i(0x90))/0x8+parseInt(i(0x95))/0x9*(-parseInt(i(0x9a))/0xa)+-parseInt(i(0x92))/0xb*(parseInt(i(0x8d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe6310));import'../../controls/DesignerTabControl.js';import{PaletteElements}from'./paletteElements.js';function a(){const m=['title','onElementsChanged','351444jbNMKT','innerHTML','4086294PRrAQI','8933528LOLATh','7YuzRMQ','176IlVOJW','_restoreCachedInititalValues','3874092qWZhBu','216SCHHkp','143135ejtdHt','52bluYSA','selected','828838GsvzxD','114310qIZHbL','loadControls','selectedIndex','warn','_designerTabControl','appendChild','style','4XCfpAV','getElements','node-projects-palette-view'];a=function(){return m;};return a();}import{DesignerTabControl}from'../../controls/DesignerTabControl.js';import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';export class PaletteView extends BaseCustomWebComponentLazyAppend{[j(0x98)]='native';['_designerTabControl'];static [j(0x87)]=css`
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
    }`;constructor(){const k=j;super(),this[k(0x93)](),this['_designerTabControl']=new DesignerTabControl(),this['_designerTabControl'][k(0x9c)]=0x0,this['shadowRoot'][k(0x86)](this[k(0x85)]);}async[j(0x9b)](c,d){const l=j;this[l(0x85)][l(0x8e)]='';for(const e of d){try{let f=await e[l(0x89)](),g=new PaletteElements();g[l(0x8b)]=e['name'],this[l(0x85)]['appendChild'](g),g['loadElements'](c,f),e[l(0x8c)]?.['on'](async()=>{g['loadElements'](c,await e['getElements']());});}catch(h){console[l(0x84)]('Error\x20loading\x20elements',h);}}this['_designerTabControl']['refreshItems']();}}customElements['define'](j(0x8a),PaletteView);