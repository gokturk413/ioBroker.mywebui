var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1e7))/0x1+parseInt(h(0x1ec))/0x2+-parseInt(h(0x1ed))/0x3+parseInt(h(0x1ea))/0x4*(-parseInt(h(0x1eb))/0x5)+-parseInt(h(0x1e9))/0x6+-parseInt(h(0x1e4))/0x7*(parseInt(h(0x1e8))/0x8)+parseInt(h(0x1e3))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x54df7));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1e3;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var k=['764144pfHyYB','1578567RQBzih','Element','10007190JziAGG','7kgCXtb','svgDefs','nodeType','434783ReRCzF','3972888WXDnyK','3180432qusYts','204PErYrS','2770gSZhxN'];a=function(){return k;};return a();}export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x1e6)]==NodeType[i(0x1ee)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0x1e5)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}