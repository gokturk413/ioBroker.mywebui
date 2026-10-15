var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x17e))/0x1+-parseInt(h(0x181))/0x2+parseInt(h(0x177))/0x3+-parseInt(h(0x176))/0x4+-parseInt(h(0x17d))/0x5*(parseInt(h(0x17f))/0x6)+parseInt(h(0x175))/0x7+-parseInt(h(0x179))/0x8*(-parseInt(h(0x180))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd353d));function a(){var k=['19623712kiLDuu','getExtension','nodeType','Element','5xHclMp','1355396yJryWM','10093506AVQmic','9EZmzWq','558380lDKKCu','style','9360407pAKMxb','1013604ksXJmx','1937010mDLdiC','svgDefs'];a=function(){return k;};return a();}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function b(c,d){c=c-0x175;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x17b)]==NodeType[i(0x17c)])return!![];return![];}[j(0x17a)](c,d,e){return new MarginExtension(c,d,e);}[j(0x182)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0x178)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}