var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x16e))/0x1+-parseInt(h(0x163))/0x2+-parseInt(h(0x168))/0x3+parseInt(h(0x167))/0x4+parseInt(h(0x164))/0x5*(parseInt(h(0x16c))/0x6)+-parseInt(h(0x165))/0x7*(parseInt(h(0x16b))/0x8)+parseInt(h(0x169))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x587be));function a(){var k=['298973QNcmXo','nodeType','567754vJMuUj','25YgZpWh','350KNlQDN','style','1968904LlTDqy','1156713RyHCoK','8460045IOhjfx','shouldExtend','75216ThEziC','442464ntrhKP','Element'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function b(c,d){c=c-0x162;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x16a)](c,d,e){var j=i;if(e[j(0x162)]==NodeType[j(0x16d)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x166)]=css`
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