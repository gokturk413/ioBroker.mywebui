var j=b;function b(c,d){c=c-0x135;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x136))/0x1+-parseInt(h(0x137))/0x2+parseInt(h(0x140))/0x3*(-parseInt(h(0x139))/0x4)+-parseInt(h(0x13c))/0x5*(parseInt(h(0x135))/0x6)+parseInt(h(0x13d))/0x7*(-parseInt(h(0x13e))/0x8)+-parseInt(h(0x138))/0x9+parseInt(h(0x13a))/0xa*(parseInt(h(0x141))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x766f6));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function a(){var k=['303UYcdoW','9717609UyTKnk','3072rUGFJO','833439HUVKcH','413782dLNkwZ','7114383WtOGOi','28296FiQQlF','30JbGuWy','nodeType','3795kbIMuB','2338gdYjOQ','21512vSSfCH','getExtension'];a=function(){return k;};return a();}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x13b)]==NodeType['Element'])return!![];return![];}[j(0x13f)](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
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