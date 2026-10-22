var j=b;function b(c,d){c=c-0x117;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x124))/0x1+-parseInt(h(0x11c))/0x2*(-parseInt(h(0x11f))/0x3)+parseInt(h(0x120))/0x4+parseInt(h(0x11b))/0x5+parseInt(h(0x122))/0x6*(-parseInt(h(0x117))/0x7)+-parseInt(h(0x11a))/0x8*(-parseInt(h(0x11d))/0x9)+-parseInt(h(0x11e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc34fe));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function a(){var k=['svgDefs','style','6209000tAzQpy','6839560Kvkxpw','6LnWRvu','18vlImJs','19808740vJYylN','181257LTSORC','5264124EUTdxX','nodeType','5862caeOTC','Element','1129515CmgSYA','3633KAauER'];a=function(){return k;};return a();}import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x121)]==NodeType[i(0x123)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[j(0x119)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0x118)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}