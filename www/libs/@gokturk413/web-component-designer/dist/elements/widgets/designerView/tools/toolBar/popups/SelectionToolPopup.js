var i=b;function a(){var j=['2262425zCPMRx','9ofIUXQ','20yMKjTg','4236078tWLORI','7uPxVDD','48ATnTVn','80gqiwWG','35716QOXWmH','34427feQhab','16284048waQCyE','template','3663535MAGdhi','node-projects-designer-selection-tool-popup','144189kwsTlK'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xcb))/0x1*(parseInt(h(0xc8))/0x2)+parseInt(h(0xd2))/0x3*(-parseInt(h(0xca))/0x4)+-parseInt(h(0xce))/0x5+parseInt(h(0xc6))/0x6*(-parseInt(h(0xc7))/0x7)+parseInt(h(0xc9))/0x8*(parseInt(h(0xd0))/0x9)+-parseInt(h(0xd3))/0xa*(parseInt(h(0xd1))/0xb)+parseInt(h(0xcc))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x71ead));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function b(c,d){c=c-0xc6;var e=a();var f=e[c];return f;}export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0xcd)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0xcf),SelectionToolPopup);