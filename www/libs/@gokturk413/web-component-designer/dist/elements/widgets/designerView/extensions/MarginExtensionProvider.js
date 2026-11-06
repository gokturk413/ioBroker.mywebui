var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xfb))/0x1+-parseInt(h(0x103))/0x2*(parseInt(h(0xf5))/0x3)+parseInt(h(0x102))/0x4+-parseInt(h(0xf6))/0x5*(-parseInt(h(0xf9))/0x6)+parseInt(h(0x100))/0x7*(parseInt(h(0xfd))/0x8)+parseInt(h(0xfa))/0x9+-parseInt(h(0xf8))/0xa*(parseInt(h(0xf7))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8a001));function a(){var k=['119126fFxnIq','svgDefs','1445944KDQKDN','105394IcYPCa','33ErQBst','53555HcKieP','11BAKJma','10304740uZaSAA','474iMgxdu','702531PSnxex','668442nHdMcP','style','104ZMwdcU','getExtension','nodeType'];a=function(){return k;};return a();}import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function b(c,d){c=c-0xf5;var e=a();var f=e[c];return f;}export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e[i(0xff)]==NodeType['Element'])return!![];return![];}[j(0xfe)](c,d,e){return new MarginExtension(c,d,e);}[j(0xfc)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [j(0x101)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}