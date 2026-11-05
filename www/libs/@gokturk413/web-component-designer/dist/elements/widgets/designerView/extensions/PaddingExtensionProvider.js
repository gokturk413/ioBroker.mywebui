var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x76))/0x1*(-parseInt(h(0x7f))/0x2)+-parseInt(h(0x7a))/0x3*(-parseInt(h(0x7d))/0x4)+-parseInt(h(0x75))/0x5+parseInt(h(0x7e))/0x6*(parseInt(h(0x80))/0x7)+parseInt(h(0x83))/0x8*(parseInt(h(0x7b))/0x9)+-parseInt(h(0x79))/0xa+parseInt(h(0x74))/0xb*(parseInt(h(0x82))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x50d58));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x74;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';function a(){var k=['shouldExtend','290356zJeBov','309336RaOIQo','71622FxpmTW','63bEMLSO','nodeType','24KGkfRl','8hTNmAR','2103926juaBxB','3044005ObkUdh','2Jmbsqp','style','Element','2118910MrAZeM','9xwBQIK','142767LLyHRY'];a=function(){return k;};return a();}import{PaddingExtension}from'./PaddingExtension.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class PaddingExtensionProvider{[i(0x7c)](c,d,e){var j=i;if(e[j(0x81)]==NodeType[j(0x78)])return!![];return![];}['getExtension'](c,d,e){return new PaddingExtension(c,d,e);}static ['style']=css`
    .svg-padding { fill: #32cd3266; fill-rule: evenodd; }
  `;[i(0x77)]=css`
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