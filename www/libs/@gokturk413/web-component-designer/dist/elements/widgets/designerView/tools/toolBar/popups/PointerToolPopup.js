var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1ce))/0x1*(-parseInt(h(0x1d7))/0x2)+parseInt(h(0x1cf))/0x3+parseInt(h(0x1d2))/0x4+parseInt(h(0x1d3))/0x5*(parseInt(h(0x1cd))/0x6)+parseInt(h(0x1d5))/0x7*(parseInt(h(0x1d1))/0x8)+parseInt(h(0x1d6))/0x9+-parseInt(h(0x1d0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70de5));import{html}from'@node-projects/base-custom-webcomponent';function a(){var j=['1783984YMYjXY','739656ArVlRn','640635IyKIun','template','7fPozKV','6475554uFTnFr','2EcuikJ','18VGgBKj','309171yRUVYP','1925271usSYRD','13820760SLDbLD'];a=function(){return j;};return a();}function b(c,d){c=c-0x1cd;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x1d4)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);