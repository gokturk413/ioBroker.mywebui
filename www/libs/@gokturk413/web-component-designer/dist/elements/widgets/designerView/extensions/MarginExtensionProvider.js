var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x16f))/0x1*(parseInt(h(0x173))/0x2)+parseInt(h(0x175))/0x3+-parseInt(h(0x16c))/0x4*(-parseInt(h(0x171))/0x5)+-parseInt(h(0x16b))/0x6+-parseInt(h(0x174))/0x7+-parseInt(h(0x170))/0x8*(-parseInt(h(0x16e))/0x9)+parseInt(h(0x169))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4dfe9));function a(){var k=['8hnGPZS','Element','420138ymISlI','21fQxhyd','56cbzReM','580225WQwlnV','getExtension','39322WbXCsm','2379405nusvMx','34245IiGKKp','svgDefs','5859830HErYYv','shouldExtend','504006skheOY'];a=function(){return k;};return a();}function b(c,d){c=c-0x169;var e=a();var f=e[c];return f;}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{[i(0x16a)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x16d)])return!![];return![];}[i(0x172)](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x176)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}