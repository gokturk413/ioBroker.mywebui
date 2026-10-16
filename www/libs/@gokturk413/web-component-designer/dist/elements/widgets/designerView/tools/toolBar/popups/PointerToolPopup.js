function a(){var j=['6qAGGNH','define','node-projects-designer-pointer-tool-popup','27rnwYJt','2547146WYCbrE','5296668BZhvgj','1452170YvzWXu','136LHTLkc','577990wVzkaW','8201024ujUzih','638857CijRGk','40CTktFu','template','165414cyPDQt','22zJPtTh','4vNZphh'];a=function(){return j;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xdf))/0x1*(parseInt(h(0xd4))/0x2)+parseInt(h(0xd2))/0x3*(parseInt(h(0xdc))/0x4)+-parseInt(h(0xdb))/0x5*(parseInt(h(0xd5))/0x6)+parseInt(h(0xd9))/0x7*(-parseInt(h(0xd0))/0x8)+-parseInt(h(0xd8))/0x9*(-parseInt(h(0xdd))/0xa)+parseInt(h(0xd3))/0xb*(-parseInt(h(0xda))/0xc)+parseInt(h(0xde))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeb5d1));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd0;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0xd1)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0xd6)](i(0xd7),PointerToolPopup);