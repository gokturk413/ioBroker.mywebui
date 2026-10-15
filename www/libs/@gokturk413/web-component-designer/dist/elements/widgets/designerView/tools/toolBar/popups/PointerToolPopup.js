var i=b;function a(){var j=['3218wHodtF','1089ePqvMC','8DsdwFe','template','7441010EGGlFM','6lsuzcD','3999680eaTulz','4412296sdjmNy','1062345pUtxqc','8080929tjXhvj','16236360FnRDbs'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x159))/0x1+parseInt(h(0x15c))/0x2*(-parseInt(h(0x15d))/0x3)+parseInt(h(0x162))/0x4+-parseInt(h(0x160))/0x5*(-parseInt(h(0x161))/0x6)+parseInt(h(0x163))/0x7+parseInt(h(0x15e))/0x8*(parseInt(h(0x15a))/0x9)+-parseInt(h(0x15b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb632b));function b(c,d){c=c-0x159;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x15f)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);