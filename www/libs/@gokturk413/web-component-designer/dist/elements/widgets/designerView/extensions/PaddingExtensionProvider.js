var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xa0))/0x1+parseInt(h(0xa7))/0x2*(-parseInt(h(0xa1))/0x3)+-parseInt(h(0xa5))/0x4+parseInt(h(0x9b))/0x5*(-parseInt(h(0x9e))/0x6)+parseInt(h(0xa8))/0x7*(parseInt(h(0x9c))/0x8)+parseInt(h(0xa6))/0x9*(parseInt(h(0x9d))/0xa)+-parseInt(h(0xa3))/0xb*(-parseInt(h(0xa9))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6d88c));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function b(c,d){c=c-0x9a;var e=a();var f=e[c];return f;}import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var k=['6787462OifdIL','svgDefs','2370540biNTrQ','27RnWdZq','467242keFvRG','1178723Kgajlk','48jrylcU','Element','256310FChPXz','16gvsUPI','1206930XtXzcz','96MkJjha','style','838304gXTIDO','6yRZAMp','shouldExtend'];a=function(){return k;};return a();}export class PaddingExtensionProvider{[i(0xa2)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x9a)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x9f)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [i(0xa4)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}