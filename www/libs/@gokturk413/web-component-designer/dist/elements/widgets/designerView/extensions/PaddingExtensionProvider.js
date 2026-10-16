function b(c,d){c=c-0x130;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x13b))/0x1+-parseInt(h(0x139))/0x2+parseInt(h(0x135))/0x3*(parseInt(h(0x132))/0x4)+parseInt(h(0x131))/0x5*(-parseInt(h(0x136))/0x6)+-parseInt(h(0x138))/0x7+-parseInt(h(0x13a))/0x8*(-parseInt(h(0x133))/0x9)+-parseInt(h(0x13c))/0xa*(-parseInt(h(0x134))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x53f70));import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';function a(){var j=['18lUbRNa','9264376bjYSqs','267bDtOUh','6dgeWwL','Element','2921051FUqZIK','439904cYhqzi','589712ZbMeIt','253301QsgosU','10SzpvSu','nodeType','1992795EFLZEF','28916qtmQJh'];a=function(){return j;};return a();}import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0x130)]==NodeType[i(0x137)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
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