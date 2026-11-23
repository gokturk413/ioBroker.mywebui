function a(){var i=['2748528iaCqJW','1347228NuAfOo','5Uzztlg','49zZBZxO','939763YaBXMo','2qsmfAr','12845584noHEOz','7771912AbKrnd','59548110ltiKWE','15422616VJACqx'];a=function(){return i;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xc6))/0x1+parseInt(h(0xc7))/0x2*(parseInt(h(0xc2))/0x3)+parseInt(h(0xbf))/0x4*(-parseInt(h(0xc4))/0x5)+parseInt(h(0xc3))/0x6*(-parseInt(h(0xc5))/0x7)+-parseInt(h(0xc8))/0x8+-parseInt(h(0xc1))/0x9+parseInt(h(0xc0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee72c));function b(c,d){c=c-0xbf;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);