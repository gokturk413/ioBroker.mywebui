var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xa6))/0x1+parseInt(h(0x9d))/0x2*(-parseInt(h(0xa4))/0x3)+-parseInt(h(0x9e))/0x4*(parseInt(h(0xa0))/0x5)+-parseInt(h(0xa7))/0x6+-parseInt(h(0xa2))/0x7+parseInt(h(0xa1))/0x8+parseInt(h(0xa3))/0x9*(parseInt(h(0xa9))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x849a3));import{MarginExtension}from'./MarginExtension.js';function b(c,d){c=c-0x9d;var e=a();var f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){if(e['nodeType']==NodeType['Element'])return!![];return![];}[i(0xa8)](c,d,e){return new MarginExtension(c,d,e);}[i(0xa5)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x9f)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}function a(){var j=['10WxZMsC','15362CqvErn','4ZebXSZ','svgDefs','2140735XbQDda','1846464qWVyiE','3301389aqEWXZ','27550305YgNWAL','237yuSJLp','style','1057092zYVkki','1110894kWTjJF','getExtension'];a=function(){return j;};return a();}