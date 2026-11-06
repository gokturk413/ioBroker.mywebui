var i=b;function b(c,d){c=c-0x1f1;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1fb))/0x1+-parseInt(h(0x1f5))/0x2*(-parseInt(h(0x1fc))/0x3)+parseInt(h(0x1f7))/0x4+parseInt(h(0x1f3))/0x5*(parseInt(h(0x1f1))/0x6)+-parseInt(h(0x1f8))/0x7*(-parseInt(h(0x1fa))/0x8)+parseInt(h(0x1f2))/0x9+-parseInt(h(0x1f4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3588f));import{html}from'@node-projects/base-custom-webcomponent';function a(){var j=['define','216096cUIADA','433594OgiVcJ','node-projects-designer-selection-tool-popup','8ldCPZZ','247734tQVZNM','3Xucaph','502830mZfLdU','3251358zvhkhl','20jFwqvy','11830610nkLKHV','684316QQCstI'];a=function(){return j;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x1f6)](i(0x1f9),SelectionToolPopup);