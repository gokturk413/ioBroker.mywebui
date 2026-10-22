var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xda))/0x1+-parseInt(h(0xe0))/0x2*(parseInt(h(0xe3))/0x3)+parseInt(h(0xdb))/0x4+parseInt(h(0xdd))/0x5+-parseInt(h(0xe2))/0x6*(-parseInt(h(0xd9))/0x7)+-parseInt(h(0xdf))/0x8*(parseInt(h(0xde))/0x9)+parseInt(h(0xe1))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x272e9));import{html}from'@node-projects/base-custom-webcomponent';function a(){var j=['9eNBoYj','3500pMhoiL','52900TJvGMa','190596SDvRfj','define','617405ZnRqrU','18jFXHaV','83656UaZpUy','192482JcCTSz','2833960wRCeCM','822ZKOUqa'];a=function(){return j;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}function b(c,d){c=c-0xd9;var e=a();var f=e[c];return f;}customElements[i(0xdc)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);