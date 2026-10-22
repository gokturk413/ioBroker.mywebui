var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x19f))/0x1+-parseInt(h(0x198))/0x2+-parseInt(h(0x19b))/0x3*(-parseInt(h(0x195))/0x4)+parseInt(h(0x199))/0x5+parseInt(h(0x19c))/0x6+parseInt(h(0x194))/0x7+-parseInt(h(0x19d))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa7c89));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x194;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var j=['svgDefs','2698586JbjAZD','5062690qFjhDp','style','867cOLMYf','3982926VLgAIg','15704448iEgRxB','getExtension','415850uMHjFV','4644675ZWoNRX','17216LiCCuI','shouldExtend'];a=function(){return j;};return a();}export class PaddingExtensionProvider{[i(0x196)](c,d,e){if(e['nodeType']==NodeType['Element'])return!![];return![];}[i(0x19e)](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[i(0x19a)]=css`
    .svg-padding-fill { fill: #32cd3266; fill-rule: evenodd; }
    .svg-padding { fill: #32cd32FF; fill-rule: evenodd; mask: url(#mask-stripe-padding); }
  `;static [i(0x197)]=svgAsString`
    <pattern id="pattern-stripe-padding" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-padding">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-padding)" />
    </mask>
  `;}