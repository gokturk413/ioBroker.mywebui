function b(c,d){c=c-0x1b8;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1bd))/0x1*(parseInt(h(0x1b8))/0x2)+-parseInt(h(0x1c2))/0x3*(parseInt(h(0x1ba))/0x4)+-parseInt(h(0x1bb))/0x5*(parseInt(h(0x1b9))/0x6)+parseInt(h(0x1c3))/0x7*(parseInt(h(0x1bf))/0x8)+parseInt(h(0x1c1))/0x9*(-parseInt(h(0x1c0))/0xa)+-parseInt(h(0x1c4))/0xb+-parseInt(h(0x1bc))/0xc*(-parseInt(h(0x1be))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe268c));import{html}from'@node-projects/base-custom-webcomponent';function a(){var i=['246621AhLKSf','13TTsDHF','136TGalOx','1397870yMbRuv','36VGkCPB','3gquuAp','738003IjHepc','16987575Bjvrpt','6lJrHVA','118710sXSLsp','5725124pJeXxi','45JXbtEb','25296420ZunDZA'];a=function(){return i;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);