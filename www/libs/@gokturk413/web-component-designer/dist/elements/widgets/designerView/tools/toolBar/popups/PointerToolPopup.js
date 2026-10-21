function a(){var j=['280BOTSyq','template','563548abkWEN','5136866cvjkbS','96800CGdeqo','843318mcoxYU','731862OrNDRq','4vbttcU','213296IdBPuW','153DMxIdK','4iUngxH','1509695hsiHeZ'];a=function(){return j;};return a();}var i=b;function b(c,d){c=c-0x80;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x82))/0x1+parseInt(h(0x8a))/0x2*(-parseInt(h(0x86))/0x3)+-parseInt(h(0x87))/0x4*(-parseInt(h(0x8b))/0x5)+parseInt(h(0x85))/0x6+parseInt(h(0x83))/0x7+-parseInt(h(0x88))/0x8*(parseInt(h(0x89))/0x9)+parseInt(h(0x80))/0xa*(-parseInt(h(0x84))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x86d7c));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x81)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);