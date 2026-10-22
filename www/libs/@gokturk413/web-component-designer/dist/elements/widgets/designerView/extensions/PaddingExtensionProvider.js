var j=b;function b(c,d){c=c-0x1c7;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1d0))/0x1+parseInt(h(0x1d5))/0x2*(-parseInt(h(0x1d2))/0x3)+parseInt(h(0x1c7))/0x4*(parseInt(h(0x1c9))/0x5)+-parseInt(h(0x1d3))/0x6*(-parseInt(h(0x1d4))/0x7)+parseInt(h(0x1cd))/0x8*(-parseInt(h(0x1c8))/0x9)+parseInt(h(0x1d1))/0xa*(parseInt(h(0x1cb))/0xb)+parseInt(h(0x1cf))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f7b4));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function a(){var k=['12TExEll','2105222KssHik','1250902mGdciZ','1868gUfcqf','192321aQZnFd','1090OCHkvN','nodeType','352HjTQpj','svgDefs','184rktpdx','style','8504832tiNaYy','644612Ojdola','251920DeaGkx','3kECSVQ'];a=function(){return k;};return a();}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x1ca)]==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[j(0x1ce)]=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [j(0x1cc)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}