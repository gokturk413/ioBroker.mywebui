var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xfe))/0x1*(-parseInt(h(0x100))/0x2)+parseInt(h(0xff))/0x3*(-parseInt(h(0x109))/0x4)+-parseInt(h(0x101))/0x5+-parseInt(h(0x103))/0x6+parseInt(h(0x102))/0x7*(parseInt(h(0x106))/0x8)+parseInt(h(0x105))/0x9+-parseInt(h(0x104))/0xa*(parseInt(h(0xfd))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa39a1));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function b(c,d){c=c-0xfd;var e=a();var f=e[c];return f;}export class MarginExtensionProvider{[i(0x107)](c,d,e){if(e['nodeType']==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[i(0x108)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}function a(){var j=['27616aPhMVp','shouldExtend','style','6296bEhDzR','88eLxNqI','1VQQNVQ','1632TzhdHd','2094512pcunUm','2815725QWXxmR','2471dCmZVj','2113542vTgxSE','732610mLxGfb','6858423uqauzH'];a=function(){return j;};return a();}