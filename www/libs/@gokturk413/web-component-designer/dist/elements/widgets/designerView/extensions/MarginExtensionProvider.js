var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x11e))/0x1*(parseInt(h(0x12c))/0x2)+parseInt(h(0x128))/0x3*(-parseInt(h(0x123))/0x4)+parseInt(h(0x127))/0x5+parseInt(h(0x12d))/0x6*(-parseInt(h(0x120))/0x7)+parseInt(h(0x129))/0x8*(-parseInt(h(0x11f))/0x9)+-parseInt(h(0x126))/0xa*(-parseInt(h(0x12b))/0xb)+-parseInt(h(0x125))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8513a));function b(c,d){c=c-0x11e;var e=a();var f=e[c];return f;}import{MarginExtension}from'./MarginExtension.js';function a(){var k=['getExtension','shouldExtend','2637912caqXjf','style','7690968hynvgv','20nlojwT','5432825aBtrYZ','3yNesPK','141976rLmBVn','Element','2674155sAfkHS','1977722EnEDNQ','187350XDDnsb','1Xjmvkw','189pjOkdM','77JBMLIx'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{[i(0x122)](c,d,e){var j=i;if(e['nodeType']==NodeType[j(0x12a)])return!![];return![];}[i(0x121)](c,d,e){return new MarginExtension(c,d,e);}[i(0x124)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}