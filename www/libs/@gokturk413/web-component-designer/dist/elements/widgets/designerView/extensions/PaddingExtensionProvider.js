var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x17a))/0x1+parseInt(h(0x17e))/0x2*(-parseInt(h(0x180))/0x3)+-parseInt(h(0x17c))/0x4*(-parseInt(h(0x181))/0x5)+-parseInt(h(0x17b))/0x6+-parseInt(h(0x183))/0x7*(-parseInt(h(0x17f))/0x8)+parseInt(h(0x17d))/0x9+parseInt(h(0x184))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb334f));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';function a(){var k=['2cBBjWO','40enoviu','569391EeEYIc','5srawzU','Element','937139NVoDCw','7992630OUqCTl','nodeType','style','getExtension','1113296FvIrFh','1747404gecOZd','2682552DWthjZ','1701648vjFmHx'];a=function(){return k;};return a();}import{PaddingExtension}from'./PaddingExtension.js';function b(c,d){c=c-0x179;var e=a();var f=e[c];return f;}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x185)]==NodeType[i(0x182)])return!![];return![];}[j(0x179)](c,d,e){return new PaddingExtension(c,d,e);}static [j(0x186)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[j(0x186)]=css`
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