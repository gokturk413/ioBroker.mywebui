var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1a5))/0x1+-parseInt(h(0x1aa))/0x2*(parseInt(h(0x1ac))/0x3)+-parseInt(h(0x1a4))/0x4+-parseInt(h(0x1ab))/0x5*(parseInt(h(0x1a2))/0x6)+parseInt(h(0x1a8))/0x7+parseInt(h(0x1af))/0x8+parseInt(h(0x1ad))/0x9*(parseInt(h(0x1ae))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x84ed1));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a2;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var k=['517878pXEoGp','Element','773488iJkOEy','553208rhzQMu','nodeType','getExtension','5939248qSoExz','svgDefs','14jGgPTb','45lxnhga','250167junyzt','2129877OdbTFg','10oBtucS','3680416tAvuup','shouldExtend'];a=function(){return k;};return a();}export class MarginExtensionProvider{[i(0x1b0)](c,d,e){var j=i;if(e[j(0x1a6)]==NodeType[j(0x1a3)])return!![];return![];}[i(0x1a7)](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x1a9)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}