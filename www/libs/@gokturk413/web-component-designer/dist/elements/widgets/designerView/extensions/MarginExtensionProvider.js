function b(c,d){c=c-0x11a;var e=a();var f=e[c];return f;}var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x122))/0x1+-parseInt(h(0x120))/0x2*(-parseInt(h(0x11a))/0x3)+-parseInt(h(0x11f))/0x4*(parseInt(h(0x11b))/0x5)+-parseInt(h(0x11c))/0x6+parseInt(h(0x121))/0x7+parseInt(h(0x123))/0x8*(parseInt(h(0x11e))/0x9)+parseInt(h(0x127))/0xa*(parseInt(h(0x126))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7b5c7));import{MarginExtension}from'./MarginExtension.js';function a(){var k=['98492jikEQd','1318114ahAZLI','565864DEpNCN','8omezjq','Element','style','11xnglke','2052370lMMepn','30AuzKlM','5BeDHSn','4469160nVwclR','svgDefs','9001161auwbJm','280468owVTlf'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e['nodeType']==NodeType[i(0x124)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[j(0x125)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0x11d)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}