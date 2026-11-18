var j=b;function b(c,d){c=c-0x1e0;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1e5))/0x1*(-parseInt(h(0x1e1))/0x2)+-parseInt(h(0x1e0))/0x3*(-parseInt(h(0x1e7))/0x4)+parseInt(h(0x1ea))/0x5+-parseInt(h(0x1e3))/0x6+-parseInt(h(0x1e9))/0x7+-parseInt(h(0x1e8))/0x8+parseInt(h(0x1e4))/0x9*(parseInt(h(0x1eb))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2e376));import{MarginExtension}from'./MarginExtension.js';function a(){var k=['10hUcPzm','style','4SZQeLO','1521648OKuXjG','1293761ULIjFk','1847245dMiHOC','144890rlZwdq','272121cxLXlm','26046fMpbga','Element','71448ZBMkBv','153qxlrnu'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e['nodeType']==NodeType[i(0x1e2)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[j(0x1e6)]=css`
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