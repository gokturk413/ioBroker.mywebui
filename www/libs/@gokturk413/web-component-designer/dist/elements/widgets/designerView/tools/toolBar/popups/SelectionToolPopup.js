var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1b4))/0x1*(-parseInt(h(0x1b8))/0x2)+parseInt(h(0x1ac))/0x3+-parseInt(h(0x1b6))/0x4*(-parseInt(h(0x1af))/0x5)+parseInt(h(0x1b2))/0x6*(-parseInt(h(0x1b5))/0x7)+parseInt(h(0x1b7))/0x8+parseInt(h(0x1b1))/0x9*(parseInt(h(0x1ae))/0xa)+-parseInt(h(0x1ad))/0xb*(parseInt(h(0x1b0))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8caa7));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1ac;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';function a(){var j=['3000348OUQNBC','600490KrjEVO','2644810LfVwxv','45wpyIAa','204NSZjlC','18cNGgkX','266100RNRxvq','node-projects-designer-selection-tool-popup','67463lNqZdb','105JtNbgm','189676oUxuhW','4407304Gotxtd','10paquQH'];a=function(){return j;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0x1b3),SelectionToolPopup);