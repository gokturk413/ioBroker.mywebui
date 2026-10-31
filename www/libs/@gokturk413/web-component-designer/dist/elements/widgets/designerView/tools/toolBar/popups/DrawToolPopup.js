const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x77))/0x1+-parseInt(j(0x7c))/0x2+parseInt(j(0x74))/0x3+parseInt(j(0x6d))/0x4+parseInt(j(0x7b))/0x5+-parseInt(j(0x6c))/0x6*(parseInt(j(0x76))/0x7)+-parseInt(j(0x73))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd20b9));function b(c,d){c=c-0x6b;const e=a();let f=e[c];return f;}import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function a(){const n=['style','template','forSomeServicesTillResult','12007280LqsUoM','4943262BOGABX','globalContext','2285374QnBTuM','733649mwusWN','designerCanvas','element','serviceContainer','6803935lseTEX','2501908IdGKbU','editorTypeService','setValue','12LCgQHC','2091932dOLbeK','strokeColor','getEditor'];a=function(){return n;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x78)];static [k(0x70)]=[super['style'],css`
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
      `];static [k(0x71)]=html`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}['ready'](){const l=k;this['_bindingsParse'](),this['designerCanvas'][l(0x7a)][l(0x75)][l(0x6e)];}[k(0x6f)](c,d,e,f){const m=k,g=this[m(0x78)]['serviceContainer'][m(0x72)](m(0x7d),h=>h[m(0x6f)](d,{'changedCallback':i=>this[m(0x78)]['executeCommand']({'type':c,'parameter':i}),...e}));return g[m(0x6b)](f),g[m(0x79)];}}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);