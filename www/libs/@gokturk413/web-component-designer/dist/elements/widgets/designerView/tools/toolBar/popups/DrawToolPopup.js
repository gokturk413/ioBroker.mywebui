const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1ec))/0x1*(parseInt(j(0x1fc))/0x2)+-parseInt(j(0x1ea))/0x3*(parseInt(j(0x1f0))/0x4)+-parseInt(j(0x1e8))/0x5+-parseInt(j(0x1f2))/0x6*(-parseInt(j(0x1f5))/0x7)+-parseInt(j(0x1f3))/0x8*(-parseInt(j(0x1e4))/0x9)+-parseInt(j(0x1fb))/0xa+-parseInt(j(0x1f1))/0xb*(-parseInt(j(0x1ee))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x23dea));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function a(){const n=['style','95184MzeapV','33nCHttD','564546FAbUYY','5008ECRRHg','getEditor','21LIofPQ','setValue','globalContext','_bindingsParse','forSomeServicesTillResult','serviceContainer','2807730FJmoUD','516eOpWIe','459nHQnRR','executeCommand','editorTypeService','strokeColor','1154310NkOMnJ','ready','3cjUcKP','element','315ChLlCc','designerCanvas','1797696Snhpdu'];a=function(){return n;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{['designerCanvas'];static [k(0x1ef)]=[super[k(0x1ef)],css`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}[k(0x1e9)](){const l=k;this[l(0x1f8)](),this[l(0x1ed)]['serviceContainer'][l(0x1f7)][l(0x1e7)];}['getEditor'](c,d,e,f){const m=k,g=this[m(0x1ed)][m(0x1fa)][m(0x1f9)](m(0x1e6),h=>h[m(0x1f4)](d,{'changedCallback':i=>this['designerCanvas'][m(0x1e5)]({'type':c,'parameter':i}),...e}));return g[m(0x1f6)](f),g[m(0x1eb)];}}function b(c,d){c=c-0x1e4;const e=a();let f=e[c];return f;}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);