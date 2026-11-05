const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xd4))/0x1+parseInt(j(0xd2))/0x2*(parseInt(j(0xda))/0x3)+-parseInt(j(0xd0))/0x4+parseInt(j(0xd1))/0x5*(parseInt(j(0xdc))/0x6)+parseInt(j(0xcd))/0x7+parseInt(j(0xcf))/0x8+parseInt(j(0xdd))/0x9*(-parseInt(j(0xd9))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9a563));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0xd7)];static [k(0xdb)]=[super[k(0xdb)],css`
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
        </div>`;constructor(c){super(),this['designerCanvas']=c;}[k(0xd6)](){const l=k;this['_bindingsParse'](),this['designerCanvas']['serviceContainer'][l(0xce)][l(0xde)];}['getEditor'](c,d,e,f){const m=k,g=this[m(0xd7)][m(0xd3)]['forSomeServicesTillResult'](m(0xcc),h=>h[m(0xd8)](d,{'changedCallback':i=>this[m(0xd7)][m(0xd5)]({'type':c,'parameter':i}),...e}));return g['setValue'](f),g[m(0xcb)];}}function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}function a(){const n=['991420gVsYwG','executeCommand','ready','designerCanvas','getEditor','10ymZHjE','177pegkKt','style','164442qnVBjM','29018349wFXojH','strokeColor','element','editorTypeService','6819876MrdAiz','globalContext','8609288PRPdYy','4954156pLEzgK','205liWHys','31506FxguMy','serviceContainer'];a=function(){return n;};return a();}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);