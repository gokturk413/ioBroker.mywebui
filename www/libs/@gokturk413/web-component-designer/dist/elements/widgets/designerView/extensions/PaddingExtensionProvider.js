function b(c,d){c=c-0x1bb;var e=a();var f=e[c];return f;}function a(){var k=['9rEgofS','12dKAboR','209498yFcgKY','78681ACAolz','145308aTsdJu','29561Qqgjdu','13055eElyIo','nodeType','Element','300gwtLsX','getExtension','68MGQbmt','2352450GOSoID','style','10879FRnLFO','1272afIiYt'];a=function(){return k;};return a();}var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1c5))/0x1+-parseInt(h(0x1c3))/0x2+parseInt(h(0x1c4))/0x3*(-parseInt(h(0x1bc))/0x4)+-parseInt(h(0x1c7))/0x5*(-parseInt(h(0x1ca))/0x6)+parseInt(h(0x1c6))/0x7*(parseInt(h(0x1c0))/0x8)+-parseInt(h(0x1c1))/0x9*(-parseInt(h(0x1bd))/0xa)+parseInt(h(0x1bf))/0xb*(parseInt(h(0x1c2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x53935));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x1c8)]==NodeType[i(0x1c9)])return!![];return![];}[j(0x1bb)](c,d,e){return new PaddingExtension(c,d,e);}static [j(0x1be)]=css`
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