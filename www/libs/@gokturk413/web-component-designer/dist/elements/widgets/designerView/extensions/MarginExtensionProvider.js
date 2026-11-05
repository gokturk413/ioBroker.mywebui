var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x99))/0x1+-parseInt(h(0x95))/0x2*(-parseInt(h(0x9a))/0x3)+parseInt(h(0x94))/0x4*(-parseInt(h(0x98))/0x5)+-parseInt(h(0x97))/0x6+parseInt(h(0x96))/0x7+parseInt(h(0x9c))/0x8+-parseInt(h(0x9d))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb9e72));function b(c,d){c=c-0x94;var e=a();var f=e[c];return f;}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{[i(0x9b)](c,d,e){if(e['nodeType']==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}function a(){var j=['shouldExtend','687832DPrvpq','8126793JhyYLF','156xSIdxY','466NCvurB','6253688FimYGw','4793220TggrOV','32740IulBog','579207GokcIK','14937zSPsUk'];a=function(){return j;};return a();}