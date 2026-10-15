var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x18b))/0x1+-parseInt(h(0x18d))/0x2+parseInt(h(0x18e))/0x3*(-parseInt(h(0x18a))/0x4)+-parseInt(h(0x188))/0x5+parseInt(h(0x18c))/0x6+parseInt(h(0x190))/0x7*(parseInt(h(0x18f))/0x8)+-parseInt(h(0x189))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe0684));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x188;var e=a();var f=e[c];return f;}import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';function a(){var j=['9234780uLNKAa','321818DLydhD','3300333CPInOK','18536bPIJQR','917qsHZHc','svgDefs','3868845RDcwhv','4215195eiVtZP','4aJlqEb','1579659BfwSHn'];a=function(){return j;};return a();}export class MarginExtensionProvider{['shouldExtend'](c,d,e){if(e['nodeType']==NodeType['Element'])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}['style']=css`
    .svg-margin-fill { fill: color(display-p3 1 0 1 / 15%); fill-rule: evenodd; }
    .svg-margin { fill: color(display-p3 1 0 1 / 80%); fill-rule: evenodd; mask: url(#mask-stripe-margin); }
  `;static [i(0x191)]=svgAsString`
    <pattern id="pattern-stripe-margin" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)" class="pattern">
      <line x1="0" y="0" x2="0" y2="10" stroke="color(display-p3 1 0 1 / 80%)" stroke-width="1"></line>
    </pattern>
    <mask id="mask-stripe-margin">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-margin)" />
    </mask>
  `;}