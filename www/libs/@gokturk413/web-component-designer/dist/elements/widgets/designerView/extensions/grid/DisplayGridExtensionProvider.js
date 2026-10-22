const i=b;function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xcc))/0x1+parseInt(h(0xcd))/0x2*(parseInt(h(0xd1))/0x3)+-parseInt(h(0xce))/0x4+-parseInt(h(0xd9))/0x5+-parseInt(h(0xda))/0x6+parseInt(h(0xd3))/0x7+parseInt(h(0xd7))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7971f));function a(){const m=['gridColor','1026030EKgORY','2389134mwDZAj','Element','grid','orange','svgDefs','getExtension','592174VZnRzF','751264WLfEMw','360588BLPsPS','#ff944722','designContext','6ApdMyr','gridExtensionShowOverlay','3807713ILlqlB','nodeType','instanceServiceContainer','extensionOptions','3903456kBCDgJ'];a=function(){return m;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0xd2);export class DisplayGridExtensionProvider{[i(0xd8)];['gridFillColor'];constructor(c=i(0xdd),d=i(0xcf)){const j=i;this[j(0xd8)]=c,this['gridFillColor']=d;}['shouldExtend'](c,d,e){const k=i;if(e[k(0xd4)]!=NodeType[k(0xdb)])return![];const f=getComputedStyle(e['element'])['display'];if(f==k(0xdc)||f=='inline-grid')return d[k(0xd5)][k(0xd0)][k(0xd6)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0xcb)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0xd8)],this['gridFillColor']);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0xde)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}