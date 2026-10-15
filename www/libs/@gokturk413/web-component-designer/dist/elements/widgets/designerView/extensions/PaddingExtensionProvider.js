var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x9c))/0x1+parseInt(h(0xa5))/0x2*(parseInt(h(0x99))/0x3)+parseInt(h(0x9d))/0x4*(parseInt(h(0xa3))/0x5)+-parseInt(h(0xa2))/0x6*(-parseInt(h(0x9a))/0x7)+-parseInt(h(0x97))/0x8*(-parseInt(h(0x98))/0x9)+-parseInt(h(0xa4))/0xa*(-parseInt(h(0x9b))/0xb)+parseInt(h(0xa6))/0xc*(-parseInt(h(0x9e))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd3fef));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function b(c,d){c=c-0x97;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0xa0)]==NodeType['Element'])return!![];return![];}[j(0xa1)](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [j(0x9f)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}function a(){var k=['2294140OYEeYh','4590dFZqCh','3522kLACkn','2467956alDLOF','202936pTxLNV','153wBhxMG','1926MpQCHe','7eZghjO','5225SqFPjD','688448ahzESF','4IkvfTc','104Uueuhk','svgDefs','nodeType','getExtension','5780598VMhUcs'];a=function(){return k;};return a();}