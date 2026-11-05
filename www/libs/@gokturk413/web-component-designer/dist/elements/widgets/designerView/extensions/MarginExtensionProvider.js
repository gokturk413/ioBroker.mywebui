var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x15e))/0x1*(-parseInt(h(0x158))/0x2)+parseInt(h(0x153))/0x3+parseInt(h(0x15f))/0x4*(parseInt(h(0x156))/0x5)+parseInt(h(0x15b))/0x6*(-parseInt(h(0x15c))/0x7)+-parseInt(h(0x15a))/0x8+parseInt(h(0x154))/0x9+parseInt(h(0x15d))/0xa*(parseInt(h(0x159))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x79930));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function a(){var k=['shouldExtend','699006QsyHba','1709262OBwAbq','nodeType','100fLBdFc','getExtension','825326tLpxvK','4283576UVzilG','5142560koowmh','5947374ZcxFXg','7kXtmsK','50vibytR','1otGXMe','34936YPkGvj'];a=function(){return k;};return a();}function b(c,d){c=c-0x152;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{[i(0x152)](c,d,e){var j=i;if(e[j(0x155)]==NodeType['Element'])return!![];return![];}[i(0x157)](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}