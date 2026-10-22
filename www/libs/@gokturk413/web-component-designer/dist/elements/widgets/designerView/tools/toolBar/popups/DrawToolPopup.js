const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1bb))/0x1*(parseInt(j(0x1c4))/0x2)+-parseInt(j(0x1c2))/0x3*(parseInt(j(0x1ce))/0x4)+-parseInt(j(0x1cd))/0x5*(parseInt(j(0x1be))/0x6)+-parseInt(j(0x1c0))/0x7+-parseInt(j(0x1cc))/0x8+parseInt(j(0x1c8))/0x9*(parseInt(j(0x1c9))/0xa)+parseInt(j(0x1b8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x26251));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x1ca)];static ['style']=[super['style'],css`
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
      `];static [k(0x1c6)]=html`
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
        </div>`;constructor(c){const l=k;super(),this[l(0x1ca)]=c;}[k(0x1c5)](){const m=k;this[m(0x1b9)](),this[m(0x1ca)][m(0x1c3)]['globalContext'][m(0x1ba)];}[k(0x1c1)](c,d,e,f){const n=k,g=this['designerCanvas']['serviceContainer'][n(0x1bc)]('editorTypeService',h=>h['getEditor'](d,{'changedCallback':i=>this['designerCanvas'][n(0x1bf)]({'type':c,'parameter':i}),...e}));return g[n(0x1c7)](f),g[n(0x1cb)];}}customElements['define'](k(0x1bd),DrawToolPopup);function b(c,d){c=c-0x1b8;const e=a();let f=e[c];return f;}function a(){const o=['3187162DdQQSH','_bindingsParse','strokeColor','1444hPKWWX','forSomeServicesTillResult','node-projects-designer-draw-tool-popup','421398AEgYiD','executeCommand','431991qEYFcP','getEditor','3SwsjyQ','serviceContainer','130xTGSLM','ready','template','setValue','700614zSptNz','20qEoIgI','designerCanvas','element','488080pdDagt','5oKygQs','9508drjumu'];a=function(){return o;};return a();}