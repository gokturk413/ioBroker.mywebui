function b(c,d){c=c-0x72;var e=a();var f=e[c];return f;}var i=b;function a(){var j=['8QsTadl','27414XRMAjT','440472UdAQqC','3352ZcnzWF','3790Jrhgvk','257702bOthYq','template','108933knQYIF','8234292XjlJHG','15PdHdSl','6214138FLmbhn','1228264CJhxVw'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x7d))/0x1+parseInt(h(0x78))/0x2*(-parseInt(h(0x7a))/0x3)+-parseInt(h(0x77))/0x4*(parseInt(h(0x75))/0x5)+-parseInt(h(0x74))/0x6+parseInt(h(0x76))/0x7+parseInt(h(0x7b))/0x8*(-parseInt(h(0x79))/0x9)+-parseInt(h(0x7c))/0xa*(-parseInt(h(0x73))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb5093));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x72)]=html`
        <div class="container">
          <header><h2 id="title">Pointer &amp; Pan</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="--tool-icon: url('${assetsPath}images/tools/PointerTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="--tool-icon: url('${assetsPath}images/tools/PanTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define']('node-projects-designer-pointer-tool-popup',PointerToolPopup);