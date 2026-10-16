var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x14b))/0x1+parseInt(h(0x14e))/0x2+parseInt(h(0x14f))/0x3+parseInt(h(0x148))/0x4*(-parseInt(h(0x149))/0x5)+-parseInt(h(0x153))/0x6+-parseInt(h(0x14a))/0x7+parseInt(h(0x14d))/0x8*(parseInt(h(0x150))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2f375));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function b(c,d){c=c-0x148;var e=a();var f=e[c];return f;}function a(){var k=['58824WXEzrv','shouldExtend','2955896cpOruu','50832eeBPZG','639525AonZbY','9AcPYkG','Element','nodeType','1597746IlVMvB','268oNzWxM','12475lcIULy','280343VToJJT'];a=function(){return k;};return a();}import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x14c)](c,d,e){var j=i;if(e[j(0x152)]==NodeType[j(0x151)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
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