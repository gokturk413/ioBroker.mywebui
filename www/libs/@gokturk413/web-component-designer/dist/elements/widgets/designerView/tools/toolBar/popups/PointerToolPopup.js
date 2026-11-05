var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x9d))/0x1+parseInt(h(0x9f))/0x2*(-parseInt(h(0xa1))/0x3)+parseInt(h(0x98))/0x4+parseInt(h(0x99))/0x5+-parseInt(h(0x96))/0x6+parseInt(h(0xa2))/0x7*(-parseInt(h(0xa0))/0x8)+-parseInt(h(0x9e))/0x9*(-parseInt(h(0x9a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x85c62));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x96;var e=a();var f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['define','node-projects-designer-pointer-tool-popup','906751EBEPnQ','24620157huAVTH','176074PaMnjw','8VPOCec','6tnvgSa','5190094tYNSrS','5408640xTAwYC','template','751932QpHElc','1750445XzKbmo','10ruJoXm'];a=function(){return j;};return a();}export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x97)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x9b)](i(0x9c),PointerToolPopup);