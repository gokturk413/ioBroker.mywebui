var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x199))/0x1*(parseInt(h(0x196))/0x2)+parseInt(h(0x194))/0x3+parseInt(h(0x193))/0x4*(-parseInt(h(0x19f))/0x5)+parseInt(h(0x19b))/0x6*(-parseInt(h(0x198))/0x7)+-parseInt(h(0x197))/0x8*(parseInt(h(0x19a))/0x9)+-parseInt(h(0x195))/0xa+parseInt(h(0x19d))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x64b60));function b(c,d){c=c-0x193;var e=a();var f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';function a(){var j=['1004440NdkJLX','7qBrehP','618132CyIQIN','54RjPWbg','4215018rBYnDH','node-projects-designer-pointer-tool-popup','22324874WIEuvm','template','5FHTQPh','957000PNcusQ','837660EYIUlU','8192910BNSwUx','2TLYLSS'];a=function(){return j;};return a();}import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x19e)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0x19c),PointerToolPopup);