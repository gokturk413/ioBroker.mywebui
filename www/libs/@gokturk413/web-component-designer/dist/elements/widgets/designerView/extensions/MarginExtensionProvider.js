var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xd7))/0x1+parseInt(h(0xd4))/0x2+parseInt(h(0xd8))/0x3+-parseInt(h(0xd6))/0x4+-parseInt(h(0xdb))/0x5*(-parseInt(h(0xd0))/0x6)+parseInt(h(0xd1))/0x7+parseInt(h(0xd5))/0x8*(parseInt(h(0xd2))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x90256));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function b(c,d){c=c-0xcf;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var k=['751989YjAVHU','223959kfscec','style','svgDefs','555685OzizjK','Element','12rcQPKM','7019152VXSWaU','740376ucCpMS','nodeType','910870IvoYOs','8tTQlON','1979804zJvFsz'];a=function(){return k;};return a();}export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0xd3)]==NodeType[i(0xcf)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[j(0xd9)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0xda)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}