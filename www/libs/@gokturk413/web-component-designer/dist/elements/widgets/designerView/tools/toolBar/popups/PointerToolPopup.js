var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1ba))/0x1+parseInt(h(0x1bb))/0x2+-parseInt(h(0x1be))/0x3+parseInt(h(0x1bc))/0x4+parseInt(h(0x1b9))/0x5*(parseInt(h(0x1bd))/0x6)+parseInt(h(0x1bf))/0x7+-parseInt(h(0x1c1))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcb0e7));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x1c2)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0x1c0),PointerToolPopup);function b(c,d){c=c-0x1b9;var e=a();var f=e[c];return f;}function a(){var j=['template','15nNgbTa','896363MaxeCo','3245628JxDsmw','1645512hrIrxf','3118422PQtJzC','412389GKDpYG','7617134NiimAq','node-projects-designer-pointer-tool-popup','22528160wQXkQM'];a=function(){return j;};return a();}