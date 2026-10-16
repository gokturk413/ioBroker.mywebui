(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x16c))/0x1+parseInt(h(0x16f))/0x2+parseInt(h(0x175))/0x3*(parseInt(h(0x16d))/0x4)+parseInt(h(0x170))/0x5*(-parseInt(h(0x16e))/0x6)+parseInt(h(0x174))/0x7*(-parseInt(h(0x176))/0x8)+parseInt(h(0x173))/0x9+-parseInt(h(0x172))/0xa*(parseInt(h(0x171))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5e905));import{html}from'@node-projects/base-custom-webcomponent';function a(){var i=['2495132HTQFQg','4580706lIvXnB','525486fKMrzO','5hgCNpY','400873mkAtWB','90HPdtdi','6006078LuWCbm','658XEewph','3ylfIdg','60872sAOyPJ','640149cuLtrZ'];a=function(){return i;};return a();}function b(c,d){c=c-0x16c;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);