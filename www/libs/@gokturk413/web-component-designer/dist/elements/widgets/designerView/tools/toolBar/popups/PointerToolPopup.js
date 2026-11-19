var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1e0))/0x1*(-parseInt(h(0x1e4))/0x2)+-parseInt(h(0x1e2))/0x3+-parseInt(h(0x1e7))/0x4*(parseInt(h(0x1e6))/0x5)+-parseInt(h(0x1e3))/0x6+parseInt(h(0x1e8))/0x7+-parseInt(h(0x1de))/0x8+parseInt(h(0x1e1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x28667));function a(){var j=['50121xlykQG','1730574UbWZMz','531610HIcMns','define','65MYulRM','31852VZbPDJ','1859613RCeMFy','2147200AnWqOk','template','1CfhdVe','2799630UDGnjS'];a=function(){return j;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x1de;var e=a();var f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x1df)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x1e5)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);