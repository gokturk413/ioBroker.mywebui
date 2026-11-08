var i=b;function b(c,d){c=c-0x175;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x178))/0x1+parseInt(h(0x183))/0x2*(-parseInt(h(0x17b))/0x3)+parseInt(h(0x181))/0x4+-parseInt(h(0x17a))/0x5*(-parseInt(h(0x17f))/0x6)+-parseInt(h(0x177))/0x7+parseInt(h(0x175))/0x8*(-parseInt(h(0x176))/0x9)+parseInt(h(0x182))/0xa*(parseInt(h(0x180))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdae3f));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function a(){var k=['2958644EMbNXC','20ZyijAC','9482oSNIdT','4248thBCct','17217gPgenI','7856555WLcWRo','702306WGePPd','shouldExtend','644970RobQwF','1098xliCgZ','nodeType','style','getExtension','72qhunfT','9790297zPWVnv'];a=function(){return k;};return a();}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x179)](c,d,e){var j=i;if(e[j(0x17c)]==NodeType['Element'])return!![];return![];}[i(0x17e)](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x17d)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[i(0x17d)]=css`
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