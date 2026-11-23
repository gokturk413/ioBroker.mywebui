const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x14c))/0x1+parseInt(j(0x147))/0x2+-parseInt(j(0x150))/0x3+-parseInt(j(0x148))/0x4+parseInt(j(0x145))/0x5+parseInt(j(0x14a))/0x6+-parseInt(j(0x14e))/0x7*(-parseInt(j(0x156))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1ec09));import{html,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x144;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class DrawToolPopup extends AbstractBaseToolPopup{[k(0x157)];static [k(0x152)]=[super[k(0x152)],css`
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
      `];static [k(0x155)]=html`
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
        </div>`;constructor(c){const l=k;super(),this[l(0x157)]=c;}[k(0x14b)](){const m=k;this[m(0x144)](),this[m(0x157)]['serviceContainer'][m(0x146)][m(0x154)];}['getEditor'](c,d,e,f){const n=k,g=this[n(0x157)]['serviceContainer'][n(0x149)]('editorTypeService',h=>h['getEditor'](d,{'changedCallback':i=>this['designerCanvas'][n(0x14f)]({'type':c,'parameter':i}),...e}));return g['setValue'](f),g[n(0x14d)];}}function a(){const o=['815064WMpAzY','designerCanvas','_bindingsParse','536940XyGOxY','globalContext','24994NOhhAJ','391392SyNCez','forSomeServicesTillResult','1237932EVYYNJ','ready','71425oSHikP','element','7mPPVJG','executeCommand','398568dbUsNN','define','style','node-projects-designer-draw-tool-popup','strokeColor','template'];a=function(){return o;};return a();}customElements[k(0x151)](k(0x153),DrawToolPopup);