var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x192))/0x1+parseInt(h(0x19d))/0x2+parseInt(h(0x19a))/0x3*(parseInt(h(0x191))/0x4)+-parseInt(h(0x196))/0x5*(-parseInt(h(0x197))/0x6)+-parseInt(h(0x19c))/0x7+-parseInt(h(0x194))/0x8*(-parseInt(h(0x19b))/0x9)+-parseInt(h(0x193))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x556af));function a(){var k=['3qMIzUg','254493eXoXRC','436590pyHdDJ','928772dWWSEE','1032164LZZeVN','375511hJxuCX','1800680EXBcQH','32DuNJjc','nodeType','44095TItjCw','90IZvUzc','Element','shouldExtend'];a=function(){return k;};return a();}function b(c,d){c=c-0x191;var e=a();var f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x199)](c,d,e){var j=i;if(e[j(0x195)]==NodeType[j(0x198)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}