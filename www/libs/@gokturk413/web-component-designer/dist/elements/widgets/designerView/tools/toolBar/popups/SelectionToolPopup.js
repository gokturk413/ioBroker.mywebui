(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x147))/0x1*(parseInt(h(0x14c))/0x2)+-parseInt(h(0x148))/0x3+parseInt(h(0x146))/0x4*(-parseInt(h(0x145))/0x5)+parseInt(h(0x14d))/0x6+-parseInt(h(0x149))/0x7+parseInt(h(0x14a))/0x8*(-parseInt(h(0x144))/0x9)+parseInt(h(0x14b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a836));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function b(c,d){c=c-0x144;var e=a();var f=e[c];return f;}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}function a(){var i=['9NNIdgN','5QhWddv','764364AVxgkQ','427984XwhEjU','526017EOSftb','595980aKVbnZ','2222504frvZuP','9292080YeFemf','2szptxg','2806974AuhkmO'];a=function(){return i;};return a();}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);