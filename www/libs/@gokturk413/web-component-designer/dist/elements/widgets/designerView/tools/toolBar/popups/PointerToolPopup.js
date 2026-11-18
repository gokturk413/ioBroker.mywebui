var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x15d))/0x1+-parseInt(h(0x15e))/0x2+-parseInt(h(0x161))/0x3*(parseInt(h(0x163))/0x4)+parseInt(h(0x15c))/0x5+-parseInt(h(0x15b))/0x6*(parseInt(h(0x15a))/0x7)+parseInt(h(0x160))/0x8*(-parseInt(h(0x162))/0x9)+parseInt(h(0x15f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x85c5f));function b(c,d){c=c-0x15a;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['1326020umHkIV','define','176862JBexDX','12jczKDI','2235850asDOAm','765685UpjdFD','1949400kizREj','28448240oninBZ','8DxWdwH','3dZjxgO','5594733eCaPRG'];a=function(){return j;};return a();}export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x164)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);