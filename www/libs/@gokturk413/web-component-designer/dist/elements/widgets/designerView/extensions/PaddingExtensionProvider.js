var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x6e))/0x1*(-parseInt(h(0x6f))/0x2)+-parseInt(h(0x75))/0x3+parseInt(h(0x78))/0x4+-parseInt(h(0x76))/0x5+parseInt(h(0x70))/0x6*(-parseInt(h(0x73))/0x7)+parseInt(h(0x71))/0x8+parseInt(h(0x77))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7d987));function b(c,d){c=c-0x6b;var e=a();var f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';function a(){var k=['14078385PgtdFZ','2777916kCFprM','Element','shouldExtend','svgDefs','1ZOrvSU','204876czWrgb','13722mJScYf','1316072TSLlfq','getExtension','2786wfHLWQ','nodeType','2925741QVJVia','628895Pmxbtz'];a=function(){return k;};return a();}import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x6c)](c,d,e){var j=i;if(e[j(0x74)]==NodeType[j(0x6b)])return!![];return![];}[i(0x72)](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [i(0x6d)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}