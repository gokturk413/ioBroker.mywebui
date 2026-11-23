var i=b;function b(c,d){c=c-0x198;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1a0))/0x1*(-parseInt(h(0x1a4))/0x2)+parseInt(h(0x1a2))/0x3*(-parseInt(h(0x198))/0x4)+-parseInt(h(0x19e))/0x5+-parseInt(h(0x19a))/0x6+parseInt(h(0x19f))/0x7+parseInt(h(0x19c))/0x8*(-parseInt(h(0x19d))/0x9)+parseInt(h(0x1a1))/0xa*(parseInt(h(0x1a3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf1e4d));function a(){var j=['211206OvNNeL','13000RdlaRR','define','837312TDiOdT','node-projects-designer-pointer-tool-popup','55592NQuwCQ','1314iNGbmO','9869435BrEdcM','3506692AshdCD','3ssMTPk','10WIoVhf','6yPOVAL','43352573pOHGON'];a=function(){return j;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x199)](i(0x19b),PointerToolPopup);