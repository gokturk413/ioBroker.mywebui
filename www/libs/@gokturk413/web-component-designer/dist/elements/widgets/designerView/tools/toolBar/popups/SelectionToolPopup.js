var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xfd))/0x1+parseInt(h(0x100))/0x2+-parseInt(h(0x101))/0x3*(parseInt(h(0x103))/0x4)+parseInt(h(0x105))/0x5*(-parseInt(h(0xfe))/0x6)+parseInt(h(0xff))/0x7+parseInt(h(0xfc))/0x8+-parseInt(h(0x102))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc0843));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function b(c,d){c=c-0xfc;var e=a();var f=e[c];return f;}function a(){var j=['2812872QtsHdx','7335cJWQdb','825435xWXPLo','1344QcliyF','template','5WraLzN','6848344scRvbL','733249AxPprc','3677526myFDzw','5498311mMMrDP'];a=function(){return j;};return a();}export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x104)]=html`
        <div class="container">
          <header><h2 id="title" style="margin: 0;">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <div class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="background-image: url('${assetsPath}images/tools/SelectRectTool.svg');"></div>
              <div class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="background-image: url('${assetsPath}images/tools/MagicWandTool.svg');"></div>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-selection-tool-popup',SelectionToolPopup);