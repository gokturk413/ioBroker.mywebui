function a(){var k=['style','shouldExtend','Element','7Ublciq','158622GEOhjG','16605KBZdON','5YhPLXN','6118640IXIdBt','nodeType','6103ZwTOje','1760934rzxPUp','84xqgDHw','1063908yrJqyu','283048lWiISA'];a=function(){return k;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x86))/0x1+-parseInt(h(0x81))/0x2+parseInt(h(0x82))/0x3*(parseInt(h(0x88))/0x4)+-parseInt(h(0x83))/0x5*(parseInt(h(0x87))/0x6)+parseInt(h(0x80))/0x7*(-parseInt(h(0x8a))/0x8)+-parseInt(h(0x89))/0x9+parseInt(h(0x84))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x32bc1));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function b(c,d){c=c-0x7e;var e=a();var f=e[c];return f;}export class MarginExtensionProvider{[i(0x7e)](c,d,e){var j=i;if(e[j(0x85)]==NodeType[j(0x7f)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[i(0x8b)]=css`
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