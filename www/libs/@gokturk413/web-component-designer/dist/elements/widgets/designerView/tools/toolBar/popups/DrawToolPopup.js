const l=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xe0))/0x1+-parseInt(j(0xd8))/0x2+-parseInt(j(0xce))/0x3*(-parseInt(j(0xe1))/0x4)+parseInt(j(0xd0))/0x5+parseInt(j(0xde))/0x6*(parseInt(j(0xd6))/0x7)+parseInt(j(0xe2))/0x8*(-parseInt(j(0xdc))/0x9)+parseInt(j(0xdb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcec55));import{html,css}from'@node-projects/base-custom-webcomponent';function a(){const o=['editorTypeService','ready','21wjxPMp','designerCanvas','604720KhufYL','_bindingsParse','strokeColor','916580GAmBdy','1602540JWgYew','element','1136982EEbVas','forSomeServicesTillResult','82449jTrjUO','3298220gsZLXk','40McLfrd','3EVgagg','define','3186690mOTdtR','executeCommand','setValue','getEditor'];a=function(){return o;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function b(c,d){c=c-0xce;const e=a();let f=e[c];return f;}export class DrawToolPopup extends AbstractBaseToolPopup{['designerCanvas'];static ['style']=[super['style'],css`
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
        </div>`;constructor(c){const k=b;super(),this[k(0xd7)]=c;}[l(0xd5)](){const m=l;this[m(0xd9)](),this[m(0xd7)]['serviceContainer']['globalContext'][m(0xda)];}[l(0xd3)](c,d,e,f){const n=l,g=this[n(0xd7)]['serviceContainer'][n(0xdf)](n(0xd4),h=>h[n(0xd3)](d,{'changedCallback':i=>this['designerCanvas'][n(0xd1)]({'type':c,'parameter':i}),...e}));return g[n(0xd2)](f),g[n(0xdd)];}}customElements[l(0xcf)]('node-projects-designer-draw-tool-popup',DrawToolPopup);