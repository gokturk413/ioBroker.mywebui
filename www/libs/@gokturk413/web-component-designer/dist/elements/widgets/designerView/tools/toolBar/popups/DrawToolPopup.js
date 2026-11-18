const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xa3))/0x1*(parseInt(j(0xaf))/0x2)+-parseInt(j(0xb2))/0x3*(-parseInt(j(0xa7))/0x4)+-parseInt(j(0xa5))/0x5*(parseInt(j(0xa9))/0x6)+parseInt(j(0xae))/0x7+-parseInt(j(0xa2))/0x8+-parseInt(j(0xa1))/0x9+parseInt(j(0xa4))/0xa*(parseInt(j(0xa0))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x64983));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0xa0;const e=a();let f=e[c];return f;}function a(){const o=['style','forSomeServicesTillResult','serviceContainer','designerCanvas','1707748CiBFIE','8OMvmeE','setValue','getEditor','117GzdYvX','11SbHWCI','4070979ZBFiXf','2742160SrwzHj','82384sIqohx','5005010CEUrVr','3378820TYpqqw','element','82964UJBjQy','editorTypeService','6ysjMXZ'];a=function(){return o;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0xad)];static [k(0xaa)]=[super[k(0xaa)],css`
      .container {
          width: 232px;
      }
      .inputs {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          grid-auto-rows: 24px;
          gap: 8px;
          padding-top: 8px;
          margin-top: 8px;
          border-top: 1px solid var(--wcd-tool-popup-border-color, var(--wcd-color-border, #596c7a));
          align-items: center;
      }
      .inputs > * {
          min-width: 0;
      }
      .inputs > span:not(.text) {
          height: 24px;
          display: flex;
          align-items: center;
      }
      .inputs node-projects-color-input {
          padding: 0;
      }
      .inputs input {
          box-sizing: border-box;
          width: 100%;
          height: 24px;
          margin: 0;
          accent-color: var(--wcd-designer-view-tool-selected-background, deepskyblue);
      }
      .text {
          font-size: 11px;
      }
      `];static ['template']=html`
        <div class="container">
          <header><h2 id="title">Draw</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="DrawLine" title="Draw Line" style="--tool-icon: url('${assetsPath}images/tools/DrawLineTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="DrawPath" title="Draw Path" style="--tool-icon: url('${assetsPath}images/tools/DrawPathTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="DrawRect" title="Draw Rectangle" style="--tool-icon: url('${assetsPath}images/tools/DrawRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="DrawEllipsis" title="Draw Ellipse" style="--tool-icon: url('${assetsPath}images/tools/DrawEllipTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="PickColor" title="Pick Color" style="--tool-icon: url('${assetsPath}images/tools/ColorPickerTool.svg');"></button>
            </div>
            <div class="inputs">   
                <span class="text">Stroke Color</span>
                [[this.getEditor('setStrokeColor', 'color', {}, this.designerCanvas.serviceContainer.globalContext.strokeColor)]] 
                <span class="text">Fill Brush</span>
                [[this.getEditor('setFillBrush', 'color', {}, this.designerCanvas.serviceContainer.globalContext.fillBrush)]] 
                <span class="text">Stroke Thickness</span>
                [[this.getEditor('setStrokeThickness', 'range', { min: 1, max: 20, step: 1 }, this.designerCanvas.serviceContainer.globalContext.strokeThickness)]] 
            </div>
          </main>
        </div>`;constructor(c){const l=k;super(),this[l(0xad)]=c;}['ready'](){const m=k;this['_bindingsParse'](),this['designerCanvas'][m(0xac)]['globalContext']['strokeColor'];}['getEditor'](c,d,e,f){const n=k,g=this['designerCanvas'][n(0xac)][n(0xab)](n(0xa8),h=>h[n(0xb1)](d,{'changedCallback':i=>this['designerCanvas']['executeCommand']({'type':c,'parameter':i}),...e}));return g[n(0xb0)](f),g[n(0xa6)];}}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);