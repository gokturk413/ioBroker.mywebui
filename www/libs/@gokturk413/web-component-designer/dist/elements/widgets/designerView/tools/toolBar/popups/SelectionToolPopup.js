function b(c,d){c=c-0x17a;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x181))/0x1+parseInt(h(0x184))/0x2*(parseInt(h(0x17a))/0x3)+-parseInt(h(0x180))/0x4+-parseInt(h(0x182))/0x5*(parseInt(h(0x17b))/0x6)+parseInt(h(0x183))/0x7+-parseInt(h(0x17f))/0x8+parseInt(h(0x17d))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x815b2));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';function a(){var j=['3536096mfuAIQ','588887bJVJoN','95otqZxt','329679eIouII','2WCvblD','421782BhPkdP','202476fvCTtx','node-projects-designer-selection-tool-popup','15003900eoPBTc','define','3109104ZESTUW'];a=function(){return j;};return a();}export class SelectionToolPopup extends AbstractBaseToolPopup{static ['template']=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements[i(0x17e)](i(0x17c),SelectionToolPopup);