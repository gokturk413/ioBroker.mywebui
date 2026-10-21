const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1ab))/0x1*(-parseInt(j(0x1a1))/0x2)+parseInt(j(0x19f))/0x3+-parseInt(j(0x1a8))/0x4+parseInt(j(0x1a7))/0x5+parseInt(j(0x1aa))/0x6*(parseInt(j(0x1a6))/0x7)+-parseInt(j(0x1ad))/0x8*(-parseInt(j(0x1af))/0x9)+-parseInt(j(0x1a3))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x382b5));function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function a(){const n=['707LbKXiJ','2013940TgwJCy','1737452yotnYH','strokeColor','16914vPqbcH','369021Sudqyp','_bindingsParse','2872392HABBvu','designerCanvas','9DdDbld','editorTypeService','1360032OUjzTP','forSomeServicesTillResult','2WnQoMb','globalContext','12044890eaOKzo','executeCommand','style'];a=function(){return n;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x1ae)];static [k(0x1a5)]=[super[k(0x1a5)],css`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}['ready'](){const l=k;this[l(0x1ac)](),this[l(0x1ae)]['serviceContainer'][l(0x1a2)][l(0x1a9)];}['getEditor'](c,d,e,f){const m=k,g=this[m(0x1ae)]['serviceContainer'][m(0x1a0)](m(0x1b0),h=>h['getEditor'](d,{'changedCallback':i=>this['designerCanvas'][m(0x1a4)]({'type':c,'parameter':i}),...e}));return g['setValue'](f),g['element'];}}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);