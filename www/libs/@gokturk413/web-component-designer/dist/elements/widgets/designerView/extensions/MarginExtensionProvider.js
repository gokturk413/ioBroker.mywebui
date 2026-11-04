var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xd3))/0x1+parseInt(h(0xdf))/0x2*(-parseInt(h(0xde))/0x3)+-parseInt(h(0xdd))/0x4+parseInt(h(0xd4))/0x5*(-parseInt(h(0xd5))/0x6)+parseInt(h(0xd6))/0x7*(-parseInt(h(0xe0))/0x8)+-parseInt(h(0xdc))/0x9*(parseInt(h(0xda))/0xa)+parseInt(h(0xd7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9865f));function a(){var k=['93363YjzzpU','44CEfzrw','15208lSXNon','style','916531pOuvcW','1120285NnvNDK','6MlrcVc','56VVjoJr','41431434rwVWaN','Element','svgDefs','2110200gSLmKT','getExtension','27kytIXB','2675012sxMgre'];a=function(){return k;};return a();}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd3;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e['nodeType']==NodeType[i(0xd8)])return!![];return![];}[j(0xdb)](c,d,e){return new MarginExtension(c,d,e);}[j(0xe1)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0xd9)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}