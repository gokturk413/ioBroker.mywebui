var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x184))/0x1+parseInt(h(0x187))/0x2+parseInt(h(0x183))/0x3*(-parseInt(h(0x182))/0x4)+parseInt(h(0x180))/0x5+parseInt(h(0x18b))/0x6+-parseInt(h(0x189))/0x7+parseInt(h(0x185))/0x8*(parseInt(h(0x18a))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcb1e6));function a(){var k=['svgDefs','949784arIaty','shouldExtend','2895438OrrAco','45018zUhgoO','3824436oJqvIE','468705YwvesU','Element','51512mJwrDh','273oQJvcu','766289VsOiVj','712MoGTRH'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x180;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x188)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x181)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;['style']=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [i(0x186)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}