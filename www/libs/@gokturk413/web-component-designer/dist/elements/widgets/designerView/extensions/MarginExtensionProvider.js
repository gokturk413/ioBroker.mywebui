var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xb7))/0x1+parseInt(h(0xb1))/0x2+-parseInt(h(0xb0))/0x3*(-parseInt(h(0xb4))/0x4)+parseInt(h(0xb3))/0x5*(parseInt(h(0xb5))/0x6)+-parseInt(h(0xb9))/0x7*(parseInt(h(0xb8))/0x8)+parseInt(h(0xb6))/0x9+parseInt(h(0xb2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98822));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';function a(){var k=['2554856UOSFfH','7uFpMUo','svgDefs','shouldExtend','Element','nodeType','696JfMuZI','2167860HBgzlT','504930kBFiDH','435smReFP','192KCzckK','33918SjCRxP','2457423uMkblZ','966386LfNXIj'];a=function(){return k;};return a();}import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function b(c,d){c=c-0xac;var e=a();var f=e[c];return f;}export class MarginExtensionProvider{[i(0xad)](c,d,e){var j=i;if(e[j(0xaf)]==NodeType[j(0xae)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0xac)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}