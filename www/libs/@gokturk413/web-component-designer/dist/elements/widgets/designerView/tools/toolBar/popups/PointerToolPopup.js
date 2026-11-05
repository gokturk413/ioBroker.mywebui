function a(){var j=['template','349014cqPrpr','1768aSlGdo','4912260kWymkc','2364rqwUZW','5855fzfvWc','1678905RIVEOC','8743oBvCzK','6ojvrek','97802HZbOqU','2261572DRPTaq','define'];a=function(){return j;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x182))/0x1*(-parseInt(h(0x181))/0x2)+-parseInt(h(0x186))/0x3+parseInt(h(0x183))/0x4+parseInt(h(0x17e))/0x5*(-parseInt(h(0x189))/0x6)+-parseInt(h(0x180))/0x7*(parseInt(h(0x187))/0x8)+-parseInt(h(0x17f))/0x9+parseInt(h(0x188))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4b9eb));function b(c,d){c=c-0x17e;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x185)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x184)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);