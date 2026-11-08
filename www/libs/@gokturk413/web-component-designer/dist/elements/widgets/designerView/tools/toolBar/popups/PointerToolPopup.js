var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x11d))/0x1*(-parseInt(h(0x122))/0x2)+-parseInt(h(0x11c))/0x3+-parseInt(h(0x121))/0x4*(parseInt(h(0x123))/0x5)+parseInt(h(0x11a))/0x6+-parseInt(h(0x120))/0x7+-parseInt(h(0x11b))/0x8+parseInt(h(0x11f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8dcb));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['template','28024803YwNbhj','7811335FcAfdH','5596ouBBZx','64edzDIF','2960yMMmHm','3564120RSxqIB','11326520xLaFSi','2988516gxAFkg','50063mZQlKZ'];a=function(){return j;};return a();}function b(c,d){c=c-0x11a;var e=a();var f=e[c];return f;}export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x11e)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);