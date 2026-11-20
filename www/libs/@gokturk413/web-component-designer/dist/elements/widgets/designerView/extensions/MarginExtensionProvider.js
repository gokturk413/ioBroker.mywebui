var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x181))/0x1+-parseInt(h(0x176))/0x2*(parseInt(h(0x17e))/0x3)+parseInt(h(0x183))/0x4*(parseInt(h(0x17c))/0x5)+-parseInt(h(0x17a))/0x6*(-parseInt(h(0x180))/0x7)+-parseInt(h(0x179))/0x8*(parseInt(h(0x182))/0x9)+parseInt(h(0x17f))/0xa*(-parseInt(h(0x177))/0xb)+-parseInt(h(0x17b))/0xc*(-parseInt(h(0x178))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7e19b));function b(c,d){c=c-0x175;var e=a();var f=e[c];return f;}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x17d)]==NodeType['Element'])return!![];return![];}[j(0x175)](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}function a(){var k=['7324097omQkHN','13jgpsdb','2832dmSfIy','1243722pqGABU','14874852PGlGnk','205dcJcJy','nodeType','501TXuEqR','10gVDbih','7CDQVbt','590747ODKNzO','3951UbnrLd','4728DLFmOs','getExtension','8962GTpAIh'];a=function(){return k;};return a();}