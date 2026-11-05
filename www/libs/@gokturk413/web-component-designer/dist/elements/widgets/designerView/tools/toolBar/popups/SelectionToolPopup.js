var i=b;function b(c,d){c=c-0x82;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x84))/0x1*(parseInt(h(0x82))/0x2)+parseInt(h(0x85))/0x3*(-parseInt(h(0x88))/0x4)+-parseInt(h(0x86))/0x5*(parseInt(h(0x8c))/0x6)+parseInt(h(0x87))/0x7+-parseInt(h(0x8b))/0x8+parseInt(h(0x83))/0x9+parseInt(h(0x8a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5ff03));import{html}from'@node-projects/base-custom-webcomponent';function a(){var j=['1090432BtYzaO','11188dcjTvh','node-projects-designer-selection-tool-popup','9700090XRdLyy','2132160SYUICU','3084hwyivp','1834qhgDmR','5843970pxsbqE','451KIqbBc','597yPBTRN','1415eFTXcD'];a=function(){return j;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0x89),SelectionToolPopup);