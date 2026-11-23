var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1e7))/0x1+-parseInt(h(0x1e2))/0x2+parseInt(h(0x1e4))/0x3+parseInt(h(0x1df))/0x4*(parseInt(h(0x1e3))/0x5)+parseInt(h(0x1e1))/0x6*(-parseInt(h(0x1de))/0x7)+-parseInt(h(0x1e0))/0x8+-parseInt(h(0x1e6))/0x9*(-parseInt(h(0x1e5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x706ec));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../../Constants.js';import{AbstractBaseToolPopup}from'./AbstractBaseToolPopup.js';export class SelectionToolPopup extends AbstractBaseToolPopup{static [i(0x1e9)]=html`
        <div class="container">
          <header><h2 id="title">Selection</h2></header>
          <main id="content-area">
            <div class="tools">
              <button type="button" class="tool" data-command="setTool" data-command-parameter="RectangleSelector" title="Rectangle Selector" style="--tool-icon: url('${assetsPath}images/tools/SelectRectTool.svg');"></button>
              <button type="button" class="tool" data-command="setTool" data-command-parameter="MagicWandSelector" title="Magic Wand Selector" style="--tool-icon: url('${assetsPath}images/tools/MagicWandTool.svg');"></button>
            </div>
          </main>
        </div>`;}customElements['define'](i(0x1e8),SelectionToolPopup);function b(c,d){c=c-0x1de;var e=a();var f=e[c];return f;}function a(){var j=['node-projects-designer-selection-tool-popup','template','3567949CQEtDZ','4268LRlDWM','5943768bFWJeD','6rGJttH','621678KYpXbg','3085TjcyNc','942819rzBCxE','270TwvFcw','269865aNhLMv','241834ofsSjM'];a=function(){return j;};return a();}