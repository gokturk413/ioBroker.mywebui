var i=b;function b(c,d){c=c-0x71;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x71))/0x1*(-parseInt(h(0x76))/0x2)+parseInt(h(0x75))/0x3*(-parseInt(h(0x73))/0x4)+parseInt(h(0x79))/0x5+-parseInt(h(0x7b))/0x6+-parseInt(h(0x78))/0x7+-parseInt(h(0x7c))/0x8*(parseInt(h(0x7a))/0x9)+parseInt(h(0x72))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcfad3));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['define','648781pCjuvF','1179805LHyiVR','63HVvSBZ','8370012AyadBj','618872DjpdSD','3479YRKfOs','30991270PHwbLa','732wLcGVu','node-projects-designer-selection-tool-popup','14307MComVP','240AhPNUh'];a=function(){return j;};return a();}export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x77)](i(0x74),SelectionToolPopup);