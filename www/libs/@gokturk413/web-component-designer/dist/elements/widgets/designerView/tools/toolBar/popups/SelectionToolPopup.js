var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x6c))/0x1*(parseInt(h(0x71))/0x2)+parseInt(h(0x6e))/0x3*(parseInt(h(0x69))/0x4)+-parseInt(h(0x6b))/0x5*(-parseInt(h(0x67))/0x6)+parseInt(h(0x6f))/0x7*(-parseInt(h(0x66))/0x8)+-parseInt(h(0x6a))/0x9+parseInt(h(0x70))/0xa*(-parseInt(h(0x6d))/0xb)+parseInt(h(0x68))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x76bf2));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x65;var e=a();var f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0x65),SelectionToolPopup);function a(){var j=['2067jqlHBL','49eibCjJ','10AgWHOj','882254lATBcr','node-projects-designer-selection-tool-popup','995464mdIePa','6CinsUK','7630044vdFgeD','372HlMAWw','135333RgZULX','4803795bjrOyY','1xiOeDc','8022806ktMNxL'];a=function(){return j;};return a();}