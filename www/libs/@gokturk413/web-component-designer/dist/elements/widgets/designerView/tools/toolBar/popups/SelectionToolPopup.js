var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x9e))/0x1*(-parseInt(h(0x9c))/0x2)+-parseInt(h(0xa0))/0x3*(parseInt(h(0x99))/0x4)+parseInt(h(0x9b))/0x5+-parseInt(h(0x96))/0x6+parseInt(h(0xa1))/0x7*(-parseInt(h(0x9f))/0x8)+parseInt(h(0x9d))/0x9*(parseInt(h(0x9a))/0xa)+parseInt(h(0x97))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x29875));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x96;var e=a();var f=e[c];return f;}function a(){var j=['123608wvGeXQ','3GZffYH','84yXlDdS','883266CgvWxz','3735490EgEYIH','define','1242960gmmyIp','100fXmzYY','450105qjBnFl','2vbDWzj','266391AbkizD','87863BqwfqB'];a=function(){return j;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x98)]('node-projects-designer-selection-tool-popup',SelectionToolPopup);