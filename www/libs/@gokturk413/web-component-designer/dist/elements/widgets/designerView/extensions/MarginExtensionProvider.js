(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1c6))/0x1+-parseInt(h(0x1cf))/0x2+parseInt(h(0x1ca))/0x3+parseInt(h(0x1c7))/0x4+-parseInt(h(0x1ce))/0x5*(parseInt(h(0x1c8))/0x6)+-parseInt(h(0x1cc))/0x7+-parseInt(h(0x1cb))/0x8*(-parseInt(h(0x1c9))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a82f));import{MarginExtension}from'./MarginExtension.js';function a(){var j=['115446yFaxsO','90IBirCh','321228XLhQcu','1767368hIhaDs','3920371LNZOHw','Element','125xBJutn','1488000PySeTU','341748VOxHAA','987244twUzLr'];a=function(){return j;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function b(c,d){c=c-0x1c6;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e['nodeType']==NodeType[i(0x1cd)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
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