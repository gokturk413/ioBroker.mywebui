var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xbc))/0x1+-parseInt(h(0xc2))/0x2*(-parseInt(h(0xbf))/0x3)+-parseInt(h(0xc3))/0x4+-parseInt(h(0xc1))/0x5+parseInt(h(0xbd))/0x6+-parseInt(h(0xb9))/0x7+-parseInt(h(0xba))/0x8*(-parseInt(h(0xc0))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5876f));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0xb9;var e=a();var f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}function a(){var j=['3581030qBepPd','46RTLiEq','2869536rYAwFp','966091FcXnWz','7391936pqoWzN','node-projects-designer-pointer-tool-popup','19280AQNnSv','3994500TZDMjb','define','47412XTZmOZ','9Muiere'];a=function(){return j;};return a();}customElements[i(0xbe)](i(0xbb),PointerToolPopup);