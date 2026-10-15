var i=b;function a(){var j=['34855550gDGglQ','1891384hjuUGL','260ieTReZ','8216FYrFEr','11StPMUT','define','6759vUaSbh','10764663cbxHam','755936PFAPOC','1376564sJQGwu','15wZzIDo','115230uwEQVN'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x108))/0x1+parseInt(h(0x10c))/0x2+-parseInt(h(0x109))/0x3*(parseInt(h(0x107))/0x4)+parseInt(h(0x10d))/0x5*(parseInt(h(0x10a))/0x6)+-parseInt(h(0x106))/0x7+parseInt(h(0x10e))/0x8*(-parseInt(h(0x105))/0x9)+-parseInt(h(0x10b))/0xa*(-parseInt(h(0x10f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc3269));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x105;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x110)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);