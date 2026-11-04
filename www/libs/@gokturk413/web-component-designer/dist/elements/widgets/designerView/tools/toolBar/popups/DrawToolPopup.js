const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x120))/0x1*(parseInt(j(0x12d))/0x2)+parseInt(j(0x127))/0x3*(-parseInt(j(0x131))/0x4)+parseInt(j(0x12c))/0x5+-parseInt(j(0x128))/0x6+parseInt(j(0x12b))/0x7+-parseInt(j(0x125))/0x8*(-parseInt(j(0x123))/0x9)+parseInt(j(0x130))/0xa*(parseInt(j(0x12f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbd31a));import{html,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x126)];static [k(0x124)]=[super['style'],css`
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
      `];static [k(0x12a)]=html`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}[k(0x11e)](){const l=k;this['_bindingsParse'](),this['designerCanvas'][l(0x129)]['globalContext'][l(0x121)];}[k(0x12e)](c,d,e,f){const m=k,g=this[m(0x126)][m(0x129)][m(0x122)](m(0x132),h=>h['getEditor'](d,{'changedCallback':i=>this[m(0x126)][m(0x11f)]({'type':c,'parameter':i}),...e}));return g['setValue'](f),g['element'];}}function a(){const n=['serviceContainer','template','10810303UudulN','4586950WfzAIs','10066MhnETC','getEditor','1012vlOMJw','27920dfCpqq','831876yYgkyW','editorTypeService','ready','executeCommand','293PXprxP','strokeColor','forSomeServicesTillResult','9QluYVv','style','9967528bdbMBU','designerCanvas','3hoCcyT','9041688eVzZpB'];a=function(){return n;};return a();}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);