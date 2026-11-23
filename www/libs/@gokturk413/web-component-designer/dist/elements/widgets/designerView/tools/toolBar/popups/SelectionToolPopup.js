function b(c,d){c=c-0x89;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x91))/0x1*(parseInt(h(0x92))/0x2)+parseInt(h(0x8d))/0x3+-parseInt(h(0x8f))/0x4+parseInt(h(0x93))/0x5+parseInt(h(0x8e))/0x6*(-parseInt(h(0x8b))/0x7)+parseInt(h(0x8a))/0x8+-parseInt(h(0x90))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbfad8));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x8c)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}function a(){var j=['template','1790709dNgYrj','39834GfvWUx','5104392BQGStW','16425891sIPyHi','1totsrj','3128594aTJlVZ','2395825avONQC','node-projects-designer-selection-tool-popup','10020664sQJNTv','7DzGthL'];a=function(){return j;};return a();}customElements['define'](i(0x89),SelectionToolPopup);