const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xec))/0x1*(parseInt(j(0xe5))/0x2)+-parseInt(j(0xe7))/0x3+parseInt(j(0xed))/0x4+parseInt(j(0xeb))/0x5*(-parseInt(j(0xe6))/0x6)+-parseInt(j(0xef))/0x7+parseInt(j(0xe8))/0x8+parseInt(j(0xe9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe200a));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){const n=['566855ONfozT','6hrMYIN','2490252FmleWI','strokeColor','12660683Eumkmb','_bindingsParse','node-projects-designer-draw-tool-popup','style','editorTypeService','setValue','template','getEditor','serviceContainer','designerCanvas','forSomeServicesTillResult','128692EeZknO','6QulmKh','920097KuNyUr','1555520ZYydfW','17562294oIgbyB','define'];a=function(){return n;};return a();}export class DrawToolPopup extends AbstractBaseToolPopup{[k(0xe3)];static ['style']=[super[k(0xf2)],css`
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
      `];static [k(0xf5)]=html`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}['ready'](){const l=k;this[l(0xf0)](),this[l(0xe3)]['serviceContainer']['globalContext'][l(0xee)];}[k(0xf6)](c,d,e,f){const m=k,g=this[m(0xe3)][m(0xe2)][m(0xe4)](m(0xf3),h=>h[m(0xf6)](d,{'changedCallback':i=>this[m(0xe3)]['executeCommand']({'type':c,'parameter':i}),...e}));return g[m(0xf4)](f),g['element'];}}function b(c,d){c=c-0xe2;const e=a();let f=e[c];return f;}customElements[k(0xea)](k(0xf1),DrawToolPopup);