const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x154))/0x1+parseInt(j(0x14b))/0x2+-parseInt(j(0x157))/0x3*(parseInt(j(0x15c))/0x4)+parseInt(j(0x15b))/0x5*(-parseInt(j(0x14c))/0x6)+parseInt(j(0x14d))/0x7+parseInt(j(0x159))/0x8*(-parseInt(j(0x14e))/0x9)+parseInt(j(0x156))/0xa*(parseInt(j(0x151))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xac0af));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x14a;const e=a();let f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){const n=['3964281KyJzBZ','style','108440MfyGsE','designerCanvas','3556945LepoYm','4WrOlOg','define','100388bxUZtb','6FeKeyW','4904270RFPlra','243AMRMrt','getEditor','forSomeServicesTillResult','11sITuCs','executeCommand','editorTypeService','976477sTSMzR','element','13762070FkRjOn'];a=function(){return n;};return a();}export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x15a)];static ['style']=[super[k(0x158)],css`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}['ready'](){const l=k;this['_bindingsParse'](),this[l(0x15a)]['serviceContainer']['globalContext']['strokeColor'];}[k(0x14f)](c,d,e,f){const m=k,g=this['designerCanvas']['serviceContainer'][m(0x150)](m(0x153),h=>h['getEditor'](d,{'changedCallback':i=>this[m(0x15a)][m(0x152)]({'type':c,'parameter':i}),...e}));return g['setValue'](f),g[m(0x155)];}}customElements[k(0x14a)]('node-projects-designer-draw-tool-popup',DrawToolPopup);