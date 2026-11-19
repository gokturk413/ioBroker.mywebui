function b(c,d){c=c-0x1bd;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1c9))/0x1*(parseInt(h(0x1cb))/0x2)+parseInt(h(0x1c5))/0x3+parseInt(h(0x1c6))/0x4+parseInt(h(0x1c2))/0x5*(-parseInt(h(0x1c1))/0x6)+parseInt(h(0x1c8))/0x7*(parseInt(h(0x1bf))/0x8)+parseInt(h(0x1c4))/0x9*(-parseInt(h(0x1c7))/0xa)+parseInt(h(0x1ca))/0xb*(parseInt(h(0x1c0))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x800a6));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var k=['style','2435778sxubkw','1511736nRyowC','267968rPYqrv','30tqTwIa','7SJooND','50TlzmhZ','11PaYVLP','23592OvfsCx','svgDefs','Element','shouldExtend','5758968qmuHKp','7978884wJDtjN','396vcEYtZ','2235CLGsME'];a=function(){return k;};return a();}export class MarginExtensionProvider{[i(0x1be)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x1bd)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[i(0x1c3)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x1cc)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}