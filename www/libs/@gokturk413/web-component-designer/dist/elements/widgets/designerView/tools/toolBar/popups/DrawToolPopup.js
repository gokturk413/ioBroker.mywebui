function a(){const n=['35610xDKuVw','serviceContainer','style','designerCanvas','8ktlfaG','strokeColor','10161040pAZTwR','2723rjQoxP','3LNoOYS','98948lRAJjR','template','editorTypeService','7732021lHTgWL','19992usBHcJ','globalContext','246402lEbWkX','1115hoVPFX','define','ready','getEditor','setValue','383204GTqaRS'];a=function(){return n;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x127))/0x1*(-parseInt(j(0x12c))/0x2)+parseInt(j(0x12b))/0x3*(-parseInt(j(0x122))/0x4)+parseInt(j(0x133))/0x5*(parseInt(j(0x123))/0x6)+parseInt(j(0x12a))/0x7*(parseInt(j(0x130))/0x8)+-parseInt(j(0x132))/0x9+-parseInt(j(0x129))/0xa+-parseInt(j(0x12f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcf53e));import{html,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x122;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x126)];static ['style']=[super[k(0x125)],css`
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
      `];static [k(0x12d)]=html`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}[k(0x135)](){const l=k;this['_bindingsParse'](),this[l(0x126)]['serviceContainer'][l(0x131)][l(0x128)];}[k(0x136)](c,d,e,f){const m=k,g=this['designerCanvas'][m(0x124)]['forSomeServicesTillResult'](m(0x12e),h=>h[m(0x136)](d,{'changedCallback':i=>this['designerCanvas']['executeCommand']({'type':c,'parameter':i}),...e}));return g[m(0x137)](f),g['element'];}}customElements[k(0x134)]('node-projects-designer-draw-tool-popup',DrawToolPopup);