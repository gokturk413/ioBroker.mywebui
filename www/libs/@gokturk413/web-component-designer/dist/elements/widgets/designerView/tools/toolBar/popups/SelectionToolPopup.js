var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x16a))/0x1+-parseInt(h(0x16f))/0x2+parseInt(h(0x16c))/0x3+parseInt(h(0x166))/0x4+parseInt(h(0x165))/0x5+parseInt(h(0x168))/0x6*(parseInt(h(0x16d))/0x7)+parseInt(h(0x169))/0x8*(parseInt(h(0x16e))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6b300));function a(){var j=['node-projects-designer-selection-tool-popup','6414jQFCRe','2480dQlwof','759239DaqupG','define','380676DGKxEf','791VWggbh','13473jhQuWT','1353830LqHcTC','1537885fDMxgQ','3423432JzdoSU'];a=function(){return j;};return a();}function b(c,d){c=c-0x165;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x16b)](i(0x167),SelectionToolPopup);