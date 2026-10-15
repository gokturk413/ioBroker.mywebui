var i=b;function a(){var j=['5327274WXIsTi','define','11827190PYJifR','377348XKyrYY','template','5GGLYGo','9DdWBOz','16EDoCkw','2xaeqTj','4675958DHkzyL','13909456HlParr','76501eWdUhc','21YQOJzt','23219556GMuLDB'];a=function(){return j;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x133))/0x1*(parseInt(h(0x13e))/0x2)+-parseInt(h(0x134))/0x3*(-parseInt(h(0x139))/0x4)+parseInt(h(0x13b))/0x5*(-parseInt(h(0x136))/0x6)+parseInt(h(0x13f))/0x7*(parseInt(h(0x13d))/0x8)+-parseInt(h(0x13c))/0x9*(parseInt(h(0x138))/0xa)+-parseInt(h(0x140))/0xb+parseInt(h(0x135))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa43cd));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class PointerToolPopup extends AbstractBaseToolPopup{static [i(0x13a)]=html`
        <div class="container">
          <header><h2 id="title" style="margin: 0;">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <div class="tool" data-command="setTool" data-command-parameter="Pointer" title="Pointer" style="background-image: url('${assetsPath}images/tools/PointerTool.svg');"></div>
              <div class="tool" data-command="setTool" data-command-parameter="Pan" title="Pan" style="background-image: url('${assetsPath}images/tools/PanTool.svg');"></div>
            </div>
          </main>
        </div>`;}function b(c,d){c=c-0x133;var e=a();var f=e[c];return f;}customElements[i(0x137)]('node-projects-designer-pointer-tool-popup',PointerToolPopup);