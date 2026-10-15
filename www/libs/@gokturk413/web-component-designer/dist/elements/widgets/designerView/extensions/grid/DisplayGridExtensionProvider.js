const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xef))/0x1*(parseInt(h(0xe7))/0x2)+-parseInt(h(0xe6))/0x3*(-parseInt(h(0xea))/0x4)+-parseInt(h(0xe9))/0x5*(parseInt(h(0xeb))/0x6)+-parseInt(h(0xe1))/0x7+parseInt(h(0xe4))/0x8+-parseInt(h(0xf0))/0x9*(-parseInt(h(0xe5))/0xa)+parseInt(h(0xf2))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6bf03));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';function b(c,d){c=c-0xe1;const e=a();let f=e[c];return f;}function a(){const m=['getExtension','3064288RVTcAV','30lvctbK','392181raAYSm','216IoInQh','gridFillColor','559770VeckWJ','24EvzmlW','6VnrVPi','gridColor','shouldExtend','svgDefs','7063eZkjNj','510795HxIoIT','inline-grid','6909540ySjxlr','style','grid','extensionOptions','4542510RKDKTB','element'];a=function(){return m;};return a();}export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0xec)];[i(0xe8)];constructor(c='orange',d='#ff944722'){const j=i;this['gridColor']=c,this[j(0xe8)]=d;}[i(0xed)](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0xe2)])['display'];if(f==k(0xf4)||f==k(0xf1))return d['instanceServiceContainer']['designContext'][k(0xf5)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0xe3)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0xec)],this[l(0xe8)]);}static [i(0xf3)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0xee)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}