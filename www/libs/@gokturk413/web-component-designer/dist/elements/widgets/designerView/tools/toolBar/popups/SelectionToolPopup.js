(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xcb))/0x1+parseInt(h(0xc4))/0x2*(-parseInt(h(0xc2))/0x3)+parseInt(h(0xca))/0x4+-parseInt(h(0xc9))/0x5*(-parseInt(h(0xc5))/0x6)+-parseInt(h(0xc3))/0x7+parseInt(h(0xc6))/0x8*(-parseInt(h(0xc8))/0x9)+-parseInt(h(0xc7))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2ac07));function b(c,d){c=c-0xc2;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var i=['1197732mPATAg','246355zLhaBs','9WiBNkm','1516067nspeOh','54286WdmWPk','3744MUThGg','111736PAgnPb','2122040ztKHMa','9nBLtxO','1230GJQHcx'];a=function(){return i;};return a();}export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);