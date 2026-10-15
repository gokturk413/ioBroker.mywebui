const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xe6))/0x1+-parseInt(h(0xdc))/0x2+-parseInt(h(0xef))/0x3+-parseInt(h(0xdd))/0x4*(parseInt(h(0xea))/0x5)+-parseInt(h(0xe7))/0x6*(-parseInt(h(0xe9))/0x7)+-parseInt(h(0xe5))/0x8*(-parseInt(h(0xe3))/0x9)+-parseInt(h(0xe2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbb9af));function a(){const l=['17013050XayjJl','9ZPLNpB','svgDefs','10712080gdHJsL','1047944ZCWVLr','24fTItZj','style','2568083urneLF','5pWuWGd','gridColor','grid','gridFillColor','element','1798383BDXWIe','990662Pqobip','1159608MSSGIQ','#ff944722','designContext','shouldExtend','display'];a=function(){return l;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';function b(c,d){c=c-0xdc;const e=a();let f=e[c];return f;}export class DisplayGridExtensionProvider{[i(0xeb)];[i(0xed)];constructor(c='orange',d=i(0xde)){this['gridColor']=c,this['gridFillColor']=d;}[i(0xe0)](c,d,e){const j=i,f=getComputedStyle(e[j(0xee)])[j(0xe1)];if(f==j(0xec)||f=='inline-grid')return d['instanceServiceContainer'][j(0xdf)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const k=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[k(0xed)]);}static [i(0xe8)]=css`
    .svg-grid { stroke: var(--svg-grid-stroke-color); stroke-dasharray: 5; fill: var(--svg-grid-fill-color); }
    .svg-grid-current-cell { stroke: var(--svg-grid-stroke-color); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--svg-grid-stroke-color); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--svg-grid-fill-color); stroke: var(--svg-grid-stroke-color); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0xe4)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}