function a(){var i=['1158122sXdsTS','12toAikj','7114070yRCmEF','44QeynFl','892EqYDRS','62151WuTxNR','12904nIeEWZ','3242657SsfwXD','1556TZvFhu','3177qQvJln','3970240TXRZNi','36mgzYPT'];a=function(){return i;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1ef))/0x1*(parseInt(h(0x1e7))/0x2)+parseInt(h(0x1e4))/0x3*(-parseInt(h(0x1ee))/0x4)+parseInt(h(0x1e9))/0x5+-parseInt(h(0x1ec))/0x6*(parseInt(h(0x1eb))/0x7)+parseInt(h(0x1e5))/0x8*(-parseInt(h(0x1e8))/0x9)+parseInt(h(0x1ed))/0xa+parseInt(h(0x1e6))/0xb*(parseInt(h(0x1ea))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8a978));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function b(c,d){c=c-0x1e4;var e=a();var f=e[c];return f;}export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);