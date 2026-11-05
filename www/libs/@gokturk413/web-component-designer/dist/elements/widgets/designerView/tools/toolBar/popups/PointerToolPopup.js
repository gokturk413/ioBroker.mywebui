function b(c,d){c=c-0xd9;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xd9))/0x1+-parseInt(h(0xdc))/0x2+parseInt(h(0xe3))/0x3+-parseInt(h(0xda))/0x4+parseInt(h(0xdd))/0x5*(-parseInt(h(0xe0))/0x6)+parseInt(h(0xdf))/0x7*(-parseInt(h(0xde))/0x8)+-parseInt(h(0xdb))/0x9*(-parseInt(h(0xe1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x85fc3));function a(){var j=['2317866kjuQnW','963743fivCKM','3042968ZfkYRS','2090259uPEzgo','496236DiLkxR','1882960bhUWYF','8KgfEAp','3492041FunaCh','6TREphh','30OWNLjN','define'];a=function(){return j;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0xe2)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);