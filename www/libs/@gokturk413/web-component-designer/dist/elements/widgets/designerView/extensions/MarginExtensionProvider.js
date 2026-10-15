function a(){var k=['18536525yNDFWI','703002NonjDo','1332768lLVBNa','svgDefs','2245172txooEA','564705SsSNwY','Element','1364692gYdefV','shouldExtend','4939212OJwgaS'];a=function(){return k;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x161))/0x1+parseInt(h(0x163))/0x2+-parseInt(h(0x160))/0x3+parseInt(h(0x166))/0x4+parseInt(h(0x164))/0x5+parseInt(h(0x15e))/0x6+-parseInt(h(0x15f))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcf955));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function b(c,d){c=c-0x15d;var e=a();var f=e[c];return f;}export class MarginExtensionProvider{[i(0x15d)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x165)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x162)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}