const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1ed))/0x1+-parseInt(j(0x1de))/0x2+parseInt(j(0x1e3))/0x3+parseInt(j(0x1e4))/0x4*(parseInt(j(0x1e8))/0x5)+-parseInt(j(0x1f1))/0x6+-parseInt(j(0x1ea))/0x7+parseInt(j(0x1ec))/0x8*(parseInt(j(0x1eb))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x847f6));import{html,css}from'@node-projects/base-custom-webcomponent';function a(){const o=['_bindingsParse','setValue','define','1991472fCWBau','32nzaCvS','designerCanvas','style','globalContext','2495JnDKSi','strokeColor','2901948ZUyIij','18KGIhCW','13171216cHJDOn','1023523UJLfvZ','template','node-projects-designer-draw-tool-popup','getEditor','5677908JXnoih','2067010ExzXSZ','ready'];a=function(){return o;};return a();}function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x1e5)];static [k(0x1e6)]=[super['style'],css`
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
      `];static [k(0x1ee)]=html`
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
        </div>`;constructor(c){const l=k;super(),this[l(0x1e5)]=c;}[k(0x1df)](){const m=k;this[m(0x1e0)](),this['designerCanvas']['serviceContainer'][m(0x1e7)][m(0x1e9)];}[k(0x1f0)](c,d,e,f){const n=k,g=this['designerCanvas']['serviceContainer']['forSomeServicesTillResult']('editorTypeService',h=>h['getEditor'](d,{'changedCallback':i=>this['designerCanvas']['executeCommand']({'type':c,'parameter':i}),...e}));return g[n(0x1e1)](f),g['element'];}}customElements[k(0x1e2)](k(0x1ef),DrawToolPopup);