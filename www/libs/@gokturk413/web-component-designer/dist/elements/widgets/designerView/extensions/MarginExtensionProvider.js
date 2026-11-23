var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x150))/0x1+parseInt(h(0x14f))/0x2+-parseInt(h(0x147))/0x3+parseInt(h(0x14b))/0x4+-parseInt(h(0x154))/0x5*(-parseInt(h(0x152))/0x6)+-parseInt(h(0x149))/0x7*(-parseInt(h(0x146))/0x8)+-parseInt(h(0x148))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x74fb0));import{MarginExtension}from'./MarginExtension.js';function b(c,d){c=c-0x146;var e=a();var f=e[c];return f;}function a(){var k=['7806cxtNVI','getExtension','2480seUOwR','128QIVCmt','2519226fASxaY','9097974VpGrSN','401107JHWIWr','style','2496168QqvsEp','shouldExtend','Element','svgDefs','1781132NIBsZL','746940zkPQHp','nodeType'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{[i(0x14c)](c,d,e){var j=i;if(e[j(0x151)]==NodeType[j(0x14d)])return!![];return![];}[i(0x153)](c,d,e){return new MarginExtension(c,d,e);}[i(0x14a)]=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x14e)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}