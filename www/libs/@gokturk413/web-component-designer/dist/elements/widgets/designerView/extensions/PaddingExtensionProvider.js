var i=b;function b(c,d){c=c-0x13a;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x145))/0x1+-parseInt(h(0x140))/0x2*(-parseInt(h(0x13f))/0x3)+parseInt(h(0x13a))/0x4*(parseInt(h(0x147))/0x5)+parseInt(h(0x13b))/0x6+-parseInt(h(0x143))/0x7+-parseInt(h(0x13d))/0x8*(parseInt(h(0x13e))/0x9)+parseInt(h(0x144))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x297f2));import{css}from'@node-projects/base-custom-webcomponent';function a(){var k=['6296STdXli','3483uelqvi','6963ratrDR','258ctaCgh','style','shouldExtend','1371734ltHqQk','2781430JRgurs','154243hLvgkG','svgDefs','105cCxAhM','7976MREGlu','1231908HwjFfq','nodeType'];a=function(){return k;};return a();}import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x142)](c,d,e){var j=i;if(e[j(0x13c)]==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x141)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [i(0x146)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}