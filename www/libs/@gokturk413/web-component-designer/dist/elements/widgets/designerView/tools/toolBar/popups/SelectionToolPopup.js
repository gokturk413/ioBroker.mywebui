function b(c,d){c=c-0x140;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x149))/0x1*(parseInt(h(0x145))/0x2)+parseInt(h(0x14a))/0x3+parseInt(h(0x142))/0x4+-parseInt(h(0x147))/0x5+parseInt(h(0x141))/0x6+parseInt(h(0x148))/0x7*(-parseInt(h(0x140))/0x8)+-parseInt(h(0x144))/0x9*(-parseInt(h(0x14b))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb855f));function a(){var j=['1106432UBqpvP','591732VFKJAk','5166892xYqeHA','define','135dUOPIq','4XzdBTn','node-projects-designer-selection-tool-popup','7174570eOVUcc','28XXznns','331069ZCfHSO','954573GzMMMj','248330KLYvlC'];a=function(){return j;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x143)](i(0x146),SelectionToolPopup);