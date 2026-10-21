(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x18b))/0x1*(parseInt(h(0x186))/0x2)+parseInt(h(0x18f))/0x3+-parseInt(h(0x18c))/0x4*(parseInt(h(0x18d))/0x5)+parseInt(h(0x189))/0x6+parseInt(h(0x18a))/0x7+parseInt(h(0x18e))/0x8*(-parseInt(h(0x188))/0x9)+-parseInt(h(0x187))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1f906));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function b(c,d){c=c-0x186;var e=a();var f=e[c];return f;}function a(){var i=['2rHeBPu','3511160YoWovJ','400059AORCmU','858612MBsUrp','238070YUNhMz','230449VTCnFU','4GJzxAM','556475JKncHJ','8POWdTl','685761jQQFuf'];a=function(){return i;};return a();}export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);