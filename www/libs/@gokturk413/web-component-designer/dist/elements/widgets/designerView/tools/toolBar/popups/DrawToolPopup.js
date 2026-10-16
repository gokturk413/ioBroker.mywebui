const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x6c))/0x1*(-parseInt(j(0x72))/0x2)+parseInt(j(0x6f))/0x3+parseInt(j(0x69))/0x4+-parseInt(j(0x67))/0x5*(parseInt(j(0x71))/0x6)+parseInt(j(0x73))/0x7+-parseInt(j(0x75))/0x8*(-parseInt(j(0x77))/0x9)+-parseInt(j(0x68))/0xa*(parseInt(j(0x6a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x20954));function b(c,d){c=c-0x66;const e=a();let f=e[c];return f;}import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function a(){const o=['ready','756774YCemtd','template','13242GNpAao','2ZUbKAv','1147321qtvMvK','define','8LvHuEQ','element','53397XbclLH','serviceContainer','forSomeServicesTillResult','designerCanvas','30GCJDRK','10fcLVVt','910056VOMdcU','7207893DbMhlr','getEditor','152357IsddeA','setValue'];a=function(){return o;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x66)];static ['style']=[super['style'],css`
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
      `];static [k(0x70)]=html`
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
        </div>`;constructor(c){const l=k;super(),this[l(0x66)]=c;}[k(0x6e)](){const m=k;this['_bindingsParse'](),this[m(0x66)]['serviceContainer']['globalContext']['strokeColor'];}[k(0x6b)](c,d,e,f){const n=k,g=this[n(0x66)][n(0x78)][n(0x79)]('editorTypeService',h=>h['getEditor'](d,{'changedCallback':i=>this[n(0x66)]['executeCommand']({'type':c,'parameter':i}),...e}));return g[n(0x6d)](f),g[n(0x76)];}}customElements[k(0x74)]('node-projects-designer-draw-tool-popup',DrawToolPopup);