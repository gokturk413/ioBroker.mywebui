(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1cc))/0x1+-parseInt(h(0x1c8))/0x2+-parseInt(h(0x1cd))/0x3*(parseInt(h(0x1ce))/0x4)+parseInt(h(0x1cf))/0x5+-parseInt(h(0x1ca))/0x6*(parseInt(h(0x1cb))/0x7)+-parseInt(h(0x1c9))/0x8*(-parseInt(h(0x1d0))/0x9)+parseInt(h(0x1c7))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa3e75));import{html}from'@node-projects/base-custom-webcomponent';function a(){var i=['282945ZHrbxG','52acWQYd','771685FQpQaL','1112733VbnhpW','9694120CgIDZT','916582gJipJk','72yUMkSp','180492HNxxfZ','7Sbkjge','149335LHCeEm'];a=function(){return i;};return a();}import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x1c7;var e=a();var f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);