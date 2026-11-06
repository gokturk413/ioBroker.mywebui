var i=b;function b(c,d){c=c-0x69;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x69))/0x1+parseInt(h(0x6f))/0x2+parseInt(h(0x6b))/0x3*(-parseInt(h(0x6e))/0x4)+-parseInt(h(0x71))/0x5*(-parseInt(h(0x70))/0x6)+-parseInt(h(0x6c))/0x7+-parseInt(h(0x72))/0x8*(-parseInt(h(0x73))/0x9)+-parseInt(h(0x6a))/0xa*(-parseInt(h(0x6d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbca52));function a(){var j=['2468636ebQkUY','831156PMKenP','6945402QIUABa','5jSaEan','3069088TPaymq','36ElUyyc','template','932615aXFrbf','5907350fGnhdc','3dmRVvX','9631720UYvGle','11qmNrsT'];a=function(){return j;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x74)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);