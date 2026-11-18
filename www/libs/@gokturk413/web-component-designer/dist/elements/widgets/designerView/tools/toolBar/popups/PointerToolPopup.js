var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x160))/0x1*(parseInt(h(0x15e))/0x2)+-parseInt(h(0x15f))/0x3*(parseInt(h(0x167))/0x4)+-parseInt(h(0x163))/0x5+-parseInt(h(0x169))/0x6+parseInt(h(0x165))/0x7+parseInt(h(0x162))/0x8*(parseInt(h(0x164))/0x9)+parseInt(h(0x168))/0xa*(parseInt(h(0x161))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x78e2f));function b(c,d){c=c-0x15d;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';function a(){var j=['node-projects-designer-pointer-tool-popup','1502sBPlmh','6OTPWil','1021ISmTOb','662695QYAKhI','8FknRgv','4832805bqFqaS','4800105OCVDQp','2438156IjgImx','define','175252oeKmws','310GAmJNN','2598834usUggX'];a=function(){return j;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x166)](i(0x15d),PointerToolPopup);