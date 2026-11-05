const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x12d))/0x1*(-parseInt(j(0x12c))/0x2)+parseInt(j(0x12f))/0x3+parseInt(j(0x136))/0x4+-parseInt(j(0x138))/0x5+-parseInt(j(0x128))/0x6*(parseInt(j(0x131))/0x7)+-parseInt(j(0x129))/0x8+parseInt(j(0x12a))/0x9*(parseInt(j(0x134))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x45e55));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x128;const e=a();let f=e[c];return f;}function a(){const o=['getEditor','180826YaGctZ','3PaxdoP','serviceContainer','1634763xiWXtD','element','782810CKlxnX','designerCanvas','forSomeServicesTillResult','10zhbKhH','template','1677772oQPLUB','strokeColor','875330wHwpoH','12fqLlvJ','728536ZwzKqy','746649hlciNK'];a=function(){return o;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{['designerCanvas'];static ['style']=[super['style'],css`
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
      `];static [k(0x135)]=html`
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
        </div>`;constructor(c){const l=k;super(),this[l(0x132)]=c;}['ready'](){const m=k;this['_bindingsParse'](),this[m(0x132)][m(0x12e)]['globalContext'][m(0x137)];}['getEditor'](c,d,e,f){const n=k,g=this[n(0x132)]['serviceContainer'][n(0x133)]('editorTypeService',h=>h[n(0x12b)](d,{'changedCallback':i=>this[n(0x132)]['executeCommand']({'type':c,'parameter':i}),...e}));return g['setValue'](f),g[n(0x130)];}}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);