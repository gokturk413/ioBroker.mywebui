var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x9a))/0x1+-parseInt(h(0x96))/0x2+-parseInt(h(0x91))/0x3*(parseInt(h(0x9b))/0x4)+parseInt(h(0x97))/0x5+-parseInt(h(0x92))/0x6+parseInt(h(0x9c))/0x7*(-parseInt(h(0x95))/0x8)+-parseInt(h(0x94))/0x9*(-parseInt(h(0x93))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98354));function b(c,d){c=c-0x91;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}function a(){var j=['301209hofsrP','40OylmqF','177877jljRHi','346206AAdwtr','1679118FvLUwa','1830lXlvXG','94113nvHaCU','192RzizbZ','1131732NpPWKM','5091035xtwanb','define','node-projects-designer-selection-tool-popup'];a=function(){return j;};return a();}customElements[i(0x98)](i(0x99),SelectionToolPopup);