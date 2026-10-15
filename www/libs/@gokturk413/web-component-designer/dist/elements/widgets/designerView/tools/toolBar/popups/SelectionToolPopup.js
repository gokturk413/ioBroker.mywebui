var i=b;function a(){var j=['10eCjcni','define','2268304pjcEVZ','node-projects-designer-selection-tool-popup','4227433PFjvXp','5686CrVqQJ','3550761FKjwhU','7754460NTKIAK','6DomSyI','template','2787162OkCcia','8PolotC','6495960qrRzlT'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x112))/0x1*(-parseInt(h(0x10f))/0x2)+-parseInt(h(0x114))/0x3+parseInt(h(0x119))/0x4*(parseInt(h(0x117))/0x5)+parseInt(h(0x116))/0x6+parseInt(h(0x11b))/0x7+-parseInt(h(0x115))/0x8*(parseInt(h(0x110))/0x9)+-parseInt(h(0x111))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb45c8));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x10f;var e=a();var f=e[c];return f;}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x113)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x118)](i(0x11a),SelectionToolPopup);