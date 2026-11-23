function a(){var k=['16011182TtOVFy','nodeType','1862100HqRspk','7oFYqdS','214996YEXRrd','svgDefs','33494tIvdoj','69BDRpwQ','10liuGYu','5398983muDaNO','5FEyPDp','847392LzmOpF','633678NdhgTm','12EzxlBN'];a=function(){return k;};return a();}var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xd7))/0x1+parseInt(h(0xd1))/0x2*(parseInt(h(0xd2))/0x3)+-parseInt(h(0xcf))/0x4*(parseInt(h(0xd5))/0x5)+-parseInt(h(0xdb))/0x6+-parseInt(h(0xce))/0x7*(-parseInt(h(0xd6))/0x8)+parseInt(h(0xd4))/0x9*(-parseInt(h(0xd3))/0xa)+parseInt(h(0xd9))/0xb*(parseInt(h(0xd8))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5534b));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function b(c,d){c=c-0xce;var e=a();var f=e[c];return f;}import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0xda)]==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [j(0xd0)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}