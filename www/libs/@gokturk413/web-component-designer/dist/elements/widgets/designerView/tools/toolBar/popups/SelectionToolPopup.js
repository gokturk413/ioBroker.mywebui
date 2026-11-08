var i=b;function b(c,d){c=c-0x149;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x14f))/0x1+parseInt(h(0x14c))/0x2*(-parseInt(h(0x14b))/0x3)+-parseInt(h(0x14e))/0x4+parseInt(h(0x150))/0x5+-parseInt(h(0x14d))/0x6*(parseInt(h(0x156))/0x7)+parseInt(h(0x155))/0x8*(-parseInt(h(0x153))/0x9)+parseInt(h(0x151))/0xa*(parseInt(h(0x149))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf41c6));function a(){var j=['30669LdPaMS','118PPZxLS','702hJBdAS','6463048zcHbHS','428474kTRhTQ','6736745Xrpyfh','715870TxmaCl','define','152982iSrMsX','node-projects-designer-selection-tool-popup','272ThJkVB','3423UNkUZi','451QskMpq','template'];a=function(){return j;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x14a)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x152)](i(0x154),SelectionToolPopup);