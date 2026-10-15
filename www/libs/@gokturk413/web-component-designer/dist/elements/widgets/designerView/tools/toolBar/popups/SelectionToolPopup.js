var i=b;function b(c,d){c=c-0x124;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x12a))/0x1+-parseInt(h(0x127))/0x2*(parseInt(h(0x129))/0x3)+-parseInt(h(0x12d))/0x4+-parseInt(h(0x128))/0x5+-parseInt(h(0x125))/0x6+parseInt(h(0x126))/0x7*(-parseInt(h(0x12b))/0x8)+parseInt(h(0x12c))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6f8f));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}function a(){var j=['3150315KXsjeq','294uOwocX','1338873IqkKWY','8EwpbTx','62841906WYrmMv','2597248nhhwpl','node-projects-designer-selection-tool-popup','4495854dpvAtc','8958656dTvCLC','31022QvxhSH'];a=function(){return j;};return a();}customElements['define'](i(0x124),SelectionToolPopup);