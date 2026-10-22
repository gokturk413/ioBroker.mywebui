var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xc1))/0x1+parseInt(h(0xc5))/0x2*(parseInt(h(0xc0))/0x3)+parseInt(h(0xc7))/0x4*(parseInt(h(0xc4))/0x5)+-parseInt(h(0xbc))/0x6*(-parseInt(h(0xc8))/0x7)+-parseInt(h(0xc2))/0x8*(-parseInt(h(0xbf))/0x9)+parseInt(h(0xc9))/0xa*(-parseInt(h(0xc3))/0xb)+-parseInt(h(0xbd))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8226));import{MarginExtension}from'./MarginExtension.js';function b(c,d){c=c-0xbb;var e=a();var f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';function a(){var k=['7081015jbPoUt','8WbsiAd','getExtension','4SWXBia','155757jzXBBk','12508370unOPwX','Element','192lPuZoc','34308264fsBRBz','nodeType','2442627GHCeff','695397NYypfB','1602775RDUqoJ','8WRLWBe','11imanHu'];a=function(){return k;};return a();}import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0xbe)]==NodeType[i(0xbb)])return!![];return![];}[j(0xc6)](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
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