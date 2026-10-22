function a(){const o=['6PYaUNe','style','2766WpwHPj','11BvJoSp','28CQengC','12DEnRlg','259706YUNRsQ','element','getEditor','designerCanvas','strokeColor','globalContext','258510CxYZdr','7093060JkoRsb','335907NKchJA','5391UtVKOP','2264KMIWGo','1386XGMnmg','791260AQWLkp','serviceContainer','forSomeServicesTillResult'];a=function(){return o;};return a();}function b(c,d){c=c-0xf0;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xfb))/0x1+parseInt(j(0xf3))/0x2*(-parseInt(j(0x102))/0x3)+-parseInt(j(0xf1))/0x4*(-parseInt(j(0xf9))/0x5)+parseInt(j(0x104))/0x6*(parseInt(j(0xfe))/0x7)+-parseInt(j(0xfd))/0x8*(-parseInt(j(0xfc))/0x9)+parseInt(j(0xff))/0xa*(parseInt(j(0xf0))/0xb)+-parseInt(j(0xf2))/0xc*(parseInt(j(0xfa))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x38be0));import{html,css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{['designerCanvas'];static ['style']=[super[k(0x103)],css`
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
        </div>`;constructor(c){const l=k;super(),this[l(0xf6)]=c;}['ready'](){const m=k;this['_bindingsParse'](),this['designerCanvas'][m(0x100)][m(0xf8)][m(0xf7)];}['getEditor'](c,d,e,f){const n=k,g=this[n(0xf6)][n(0x100)][n(0x101)]('editorTypeService',h=>h[n(0xf5)](d,{'changedCallback':i=>this['designerCanvas']['executeCommand']({'type':c,'parameter':i}),...e}));return g['setValue'](f),g[n(0xf4)];}}customElements['define']('node-projects-designer-draw-tool-popup',DrawToolPopup);