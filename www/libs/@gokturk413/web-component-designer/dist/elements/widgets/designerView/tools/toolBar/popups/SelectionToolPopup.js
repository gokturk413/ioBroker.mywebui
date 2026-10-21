function a(){var j=['2836359BPofUb','252RLQJvZ','276861pixhZg','1DQRRZe','1115560AFwPGi','define','1266408JEcwzv','497186nFGyjw','11000znttSE','node-projects-designer-selection-tool-popup','1259100eLWCkG'];a=function(){return j;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x134))/0x1*(parseInt(h(0x138))/0x2)+-parseInt(h(0x133))/0x3+-parseInt(h(0x135))/0x4+parseInt(h(0x130))/0x5+-parseInt(h(0x137))/0x6+-parseInt(h(0x132))/0x7*(parseInt(h(0x139))/0x8)+parseInt(h(0x131))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2ce0b));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x12f;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x136)](i(0x12f),SelectionToolPopup);