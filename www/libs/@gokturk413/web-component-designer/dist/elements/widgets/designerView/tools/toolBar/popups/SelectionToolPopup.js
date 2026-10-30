var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xec))/0x1+-parseInt(h(0xf4))/0x2+parseInt(h(0xed))/0x3*(parseInt(h(0xf2))/0x4)+-parseInt(h(0xf5))/0x5+-parseInt(h(0xee))/0x6*(-parseInt(h(0xf3))/0x7)+-parseInt(h(0xf1))/0x8+parseInt(h(0xf6))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8767));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0xec;var e=a();var f=e[c];return f;}function a(){var j=['node-projects-designer-selection-tool-popup','template','13091448DQldqO','428scDpro','42gHtWDR','1284778HJEomp','3107030jYqZXm','43166133vUIZQy','1337157PTzqgL','9429MkocQS','57012Dqmpmp'];a=function(){return j;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0xf0)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0xef),SelectionToolPopup);