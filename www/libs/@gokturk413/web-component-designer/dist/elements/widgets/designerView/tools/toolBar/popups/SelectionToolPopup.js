var i=b;function b(c,d){c=c-0x1e3;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1eb))/0x1*(parseInt(h(0x1ea))/0x2)+-parseInt(h(0x1ef))/0x3+parseInt(h(0x1e4))/0x4*(-parseInt(h(0x1ec))/0x5)+parseInt(h(0x1e7))/0x6*(parseInt(h(0x1ed))/0x7)+-parseInt(h(0x1e3))/0x8+-parseInt(h(0x1e6))/0x9*(parseInt(h(0x1e9))/0xa)+-parseInt(h(0x1f0))/0xb*(-parseInt(h(0x1ee))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe2aaa));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['897JYdBWd','265XwoaWR','4167611ZxHxjV','49983612OmRBmw','1167723OWAVLg','11SgnwSl','12435728jBdQPn','99124dkARlJ','define','95301KphoiX','12pKPywJ','template','670DHawKt','1028QaKZLt'];a=function(){return j;};return a();}export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x1e8)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x1e5)]('node-projects-designer-selection-tool-popup',SelectionToolPopup);