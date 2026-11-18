var i=b;function b(c,d){c=c-0x1ca;var e=a();var f=e[c];return f;}function a(){var k=['2260928GdSlBK','14823wsfDCC','nodeType','146684ExWjRW','525lXcdlN','2207694ItHCch','4940WdGyHU','getExtension','Element','12JUSKAR','style','shouldExtend','1231220GejoBt','1119294wHTPTo','110368GIsPch'];a=function(){return k;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1ca))/0x1+parseInt(h(0x1d4))/0x2+-parseInt(h(0x1cc))/0x3+-parseInt(h(0x1d6))/0x4+-parseInt(h(0x1d3))/0x5*(parseInt(h(0x1d0))/0x6)+-parseInt(h(0x1cb))/0x7*(-parseInt(h(0x1d5))/0x8)+parseInt(h(0x1d7))/0x9*(parseInt(h(0x1cd))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb9cc7));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x1d2)](c,d,e){var j=i;if(e[j(0x1d8)]==NodeType[j(0x1cf)])return!![];return![];}[i(0x1ce)](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x1d1)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}