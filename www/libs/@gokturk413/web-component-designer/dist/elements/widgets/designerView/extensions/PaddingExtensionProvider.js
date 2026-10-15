function b(c,d){c=c-0x1e1;var e=a();var f=e[c];return f;}function a(){var k=['4546912UwkXJa','876472XbfEVv','1737970pnHmDB','13434YVLxKg','548426mAMYeO','12lFsIGH','nodeType','svgDefs','6303493tVKAcP','24050187FegvCF','117QRDWcS','getExtension'];a=function(){return k;};return a();}var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1e9))/0x1+-parseInt(h(0x1e8))/0x2*(-parseInt(h(0x1e3))/0x3)+parseInt(h(0x1e6))/0x4+-parseInt(h(0x1e7))/0x5*(-parseInt(h(0x1ea))/0x6)+parseInt(h(0x1e1))/0x7+parseInt(h(0x1e5))/0x8+-parseInt(h(0x1e2))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7f463));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x1eb)]==NodeType['Element'])return!![];return![];}[j(0x1e4)](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [j(0x1ec)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}