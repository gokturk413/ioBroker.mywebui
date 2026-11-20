var i=b;function b(c,d){c=c-0x17b;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x17e))/0x1*(-parseInt(h(0x17c))/0x2)+-parseInt(h(0x181))/0x3*(parseInt(h(0x184))/0x4)+parseInt(h(0x182))/0x5+-parseInt(h(0x180))/0x6+parseInt(h(0x186))/0x7*(parseInt(h(0x185))/0x8)+parseInt(h(0x17b))/0x9*(parseInt(h(0x183))/0xa)+-parseInt(h(0x17f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x52690));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['249528CIxBLC','6arYPAw','2159815XceSqd','277060AGgJuk','1196188QFPDyK','1048RadEiX','20006freNSd','144LcjSik','123502NNkmOK','define','6PCjZmI','7072219ONiMsS'];a=function(){return j;};return a();}export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x17d)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);