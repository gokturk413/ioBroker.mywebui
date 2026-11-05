var i=b;function a(){var j=['template','7183414GtrTip','237704oDTcEi','2291346tWcJDc','3037840PxCzvw','node-projects-designer-selection-tool-popup','16RRFGIc','15719bTVlAC','46uBsAgr','803942fkUcUh','15460QhpIvK','52089RtrUCE','6mEARcu'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1af))/0x1+parseInt(h(0x1ae))/0x2*(-parseInt(h(0x1b1))/0x3)+parseInt(h(0x1a8))/0x4+-parseInt(h(0x1aa))/0x5+-parseInt(h(0x1b2))/0x6*(-parseInt(h(0x1b4))/0x7)+-parseInt(h(0x1ac))/0x8*(parseInt(h(0x1a9))/0x9)+-parseInt(h(0x1b0))/0xa*(-parseInt(h(0x1ad))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xedfdf));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x1b3)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}function b(c,d){c=c-0x1a8;var e=a();var f=e[c];return f;}customElements['define'](i(0x1ab),SelectionToolPopup);