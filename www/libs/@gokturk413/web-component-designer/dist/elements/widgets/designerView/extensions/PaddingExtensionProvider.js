var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1a6))/0x1*(parseInt(h(0x1b0))/0x2)+parseInt(h(0x1a9))/0x3*(parseInt(h(0x1af))/0x4)+parseInt(h(0x1b2))/0x5+-parseInt(h(0x1ad))/0x6+-parseInt(h(0x1a7))/0x7*(parseInt(h(0x1ab))/0x8)+-parseInt(h(0x1aa))/0x9*(-parseInt(h(0x1ac))/0xa)+-parseInt(h(0x1b1))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc80bc));function a(){var k=['88pjSiGS','40490eRFQNP','894894PxOLEO','nodeType','20cwNYsW','22htkuDi','12547018PDZemr','3262625ZXIbke','shouldExtend','78721QiHwwL','621565ZmIKnO','style','622227rvYkcU','1179BXDeYI'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a5;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x1a5)](c,d,e){var j=i;if(e[j(0x1ae)]==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static [i(0x1a8)]=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[i(0x1a8)]=css`
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