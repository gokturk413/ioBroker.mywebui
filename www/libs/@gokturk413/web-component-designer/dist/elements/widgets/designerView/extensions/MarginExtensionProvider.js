var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x12e))/0x1*(-parseInt(h(0x124))/0x2)+parseInt(h(0x126))/0x3+parseInt(h(0x127))/0x4+parseInt(h(0x12b))/0x5+-parseInt(h(0x12f))/0x6*(parseInt(h(0x12d))/0x7)+-parseInt(h(0x130))/0x8*(-parseInt(h(0x123))/0x9)+-parseInt(h(0x12a))/0xa*(parseInt(h(0x128))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xea247));function a(){var k=['186VavbeQ','2653928UZxvZM','9eWELCC','3638UToVdN','style','2235588lyFojT','2183164VPDdaK','35867777ZLNxIR','getExtension','10vxoxUr','4105985sKavQd','Element','24535tsdQHf','1036hYHfLM'];a=function(){return k;};return a();}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function b(c,d){c=c-0x123;var e=a();var f=e[c];return f;}export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e['nodeType']==NodeType[i(0x12c)])return!![];return![];}[j(0x129)](c,d,e){return new MarginExtension(c,d,e);}[j(0x125)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}