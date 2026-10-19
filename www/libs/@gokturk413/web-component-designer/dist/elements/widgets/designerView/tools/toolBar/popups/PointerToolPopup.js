function b(c,d){c=c-0xc7;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xca))/0x1+-parseInt(h(0xc7))/0x2+parseInt(h(0xcf))/0x3+parseInt(h(0xce))/0x4*(parseInt(h(0xc9))/0x5)+parseInt(h(0xcc))/0x6+parseInt(h(0xc8))/0x7*(parseInt(h(0xcb))/0x8)+-parseInt(h(0xcd))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98721));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function a(){var i=['242652QoSSuH','2061122IlPAeb','105QcxXMV','615VkHOlT','194101XAOdiA','377320MMIwji','1564464FketKc','5621616bTSxAK','33704IoAsrr'];a=function(){return i;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);