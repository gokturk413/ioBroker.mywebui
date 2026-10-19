function b(c,d){c=c-0x109;var e=a();var f=e[c];return f;}function a(){var k=['9SQWyuy','3356240KXQrge','style','15124SiBMwA','246590IwQkBN','1195675KqCHNu','6ahphNE','2497392XtbDaH','45512rKTzCP','3622325ovlPtV','Element'];a=function(){return k;};return a();}var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x109))/0x1+-parseInt(h(0x10a))/0x2*(parseInt(h(0x10c))/0x3)+-parseInt(h(0x10e))/0x4+parseInt(h(0x10b))/0x5+parseInt(h(0x10d))/0x6+-parseInt(h(0x10f))/0x7+parseInt(h(0x112))/0x8*(parseInt(h(0x111))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4ccd2));import{MarginExtension}from'./MarginExtension.js';import{css}from'@node-projects/base-custom-webcomponent';import{NodeType}from'../../../item/NodeType.js';import{svgAsString}from'../../../helper/SvgHelper.js';export class MarginExtensionProvider{['shouldExtend'](c,d,e){var i=b;if(e['nodeType']==NodeType[i(0x110)])return!![];return![];}['getExtension'](c,d,e){return new MarginExtension(c,d,e);}[j(0x113)]=css`
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