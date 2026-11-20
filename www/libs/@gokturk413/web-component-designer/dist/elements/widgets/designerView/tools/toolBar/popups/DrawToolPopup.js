const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x108))/0x1+parseInt(j(0xfc))/0x2*(parseInt(j(0x104))/0x3)+-parseInt(j(0xf9))/0x4*(parseInt(j(0x106))/0x5)+parseInt(j(0xfe))/0x6*(parseInt(j(0xf8))/0x7)+parseInt(j(0xf5))/0x8+parseInt(j(0x100))/0x9+parseInt(j(0x103))/0xa*(-parseInt(j(0xfb))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7bfc7));function a(){const n=['596jyUnCC','editorTypeService','1569139gmgaAe','10oYRhyU','getEditor','18222GXYNfA','ready','8220321TuJrfl','setValue','strokeColor','130jYlApp','112065XYeRzt','define','26270JcCIHQ','serviceContainer','794478BarBZd','executeCommand','4294504XQisas','style','designerCanvas','1645QMcUgv'];a=function(){return n;};return a();}import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{['designerCanvas'];static [k(0xf6)]=[super['style'],css`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}[k(0xff)](){const l=k;this['_bindingsParse'](),this[l(0xf7)]['serviceContainer']['globalContext'][l(0x102)];}[k(0xfd)](c,d,e,f){const m=k,g=this['designerCanvas'][m(0x107)]['forSomeServicesTillResult'](m(0xfa),h=>h['getEditor'](d,{'changedCallback':i=>this[m(0xf7)][m(0xf4)]({'type':c,'parameter':i}),...e}));return g[m(0x101)](f),g['element'];}}function b(c,d){c=c-0xf4;const e=a();let f=e[c];return f;}customElements[k(0x105)]('node-projects-designer-draw-tool-popup',DrawToolPopup);