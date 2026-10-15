var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xa1))/0x1*(-parseInt(h(0xaa))/0x2)+parseInt(h(0xa7))/0x3+parseInt(h(0xab))/0x4*(-parseInt(h(0xac))/0x5)+parseInt(h(0xa2))/0x6*(parseInt(h(0xa9))/0x7)+parseInt(h(0xa3))/0x8+parseInt(h(0xa6))/0x9+-parseInt(h(0xa4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x79afb));function b(c,d){c=c-0xa1;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';function a(){var j=['16037630tcUQyH','define','738783qdBaHN','262494hjLkgv','node-projects-designer-pointer-tool-popup','864857SUbSnD','54nxXWlO','4oPBahF','2157635JTiodd','20977rEtjkk','48xjUOtX','6474760rCEOzA'];a=function(){return j;};return a();}import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0xa5)](i(0xa8),PointerToolPopup);