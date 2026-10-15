var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1c9))/0x1*(-parseInt(h(0x1bf))/0x2)+-parseInt(h(0x1c3))/0x3*(-parseInt(h(0x1c2))/0x4)+parseInt(h(0x1c4))/0x5*(-parseInt(h(0x1c7))/0x6)+parseInt(h(0x1c8))/0x7*(parseInt(h(0x1c0))/0x8)+parseInt(h(0x1c6))/0x9*(-parseInt(h(0x1c1))/0xa)+parseInt(h(0x1ca))/0xb+parseInt(h(0x1cc))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4993d));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function a(){var k=['shouldExtend','2000352FPDuXY','Element','487670XovmGg','400KyHBza','3676700drMdmk','58664ZDtgne','96DnAEIe','73665DPQAHI','style','9WNJFqF','102DnRgKo','20419vglTeS','1TJiBeo','4196291QGiJcM'];a=function(){return k;};return a();}function b(c,d){c=c-0x1be;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x1cb)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x1be)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x1c5)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[i(0x1c5)]=css`
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