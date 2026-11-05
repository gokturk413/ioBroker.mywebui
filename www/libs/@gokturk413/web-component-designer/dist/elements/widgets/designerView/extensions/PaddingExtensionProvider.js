var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x99))/0x1*(parseInt(h(0x9c))/0x2)+parseInt(h(0x9f))/0x3*(-parseInt(h(0x98))/0x4)+-parseInt(h(0xa5))/0x5*(parseInt(h(0xa0))/0x6)+-parseInt(h(0xa7))/0x7+parseInt(h(0xa1))/0x8*(-parseInt(h(0xa3))/0x9)+parseInt(h(0x9e))/0xa+parseInt(h(0x9d))/0xb*(parseInt(h(0xa6))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd6888));function a(){var k=['118LUwKGU','1312399dacXmS','1633920JxGodf','1285152rtnYGl','4583622fTEPaa','88qYvXHD','style','295983ajZoIC','nodeType','5vAApPO','228fgoqdy','3528217vGYVns','4RxriZy','8586nHVfky','Element','getExtension'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x98;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0xa4)]==NodeType[i(0x9a)])return!![];return![];}[j(0x9b)](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[j(0xa2)]=css`
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