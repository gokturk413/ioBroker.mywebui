const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa0))/0x1*(-parseInt(h(0x9f))/0x2)+-parseInt(h(0x92))/0x3+parseInt(h(0x94))/0x4+parseInt(h(0x9c))/0x5+parseInt(h(0x96))/0x6+parseInt(h(0x9e))/0x7+-parseInt(h(0x93))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf1599));import{css}from'@node-projects/base-custom-webcomponent';function a(){const m=['getExtension','nodeType','4188195OrAfaa','10736688nrCRLF','2729216cyifjK','gridColor','7600812WtwzHK','Element','svgDefs','gridFillColor','grid','gridExtensionShowOverlay','1220280hLwiJh','#ff944722','7981120hVJFTg','4PeVrWH','196699KOZfgZ'];a=function(){return m;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0x91;const e=a();let f=e[c];return f;}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x9b);export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c='orange',d=i(0x9d)){const j=i;this[j(0x95)]=c,this[j(0x99)]=d;}['shouldExtend'](c,d,e){const k=i;if(e[k(0x91)]!=NodeType[k(0x97)])return![];const f=getComputedStyle(e['element'])['display'];if(f==k(0x9a)||f=='inline-grid')return d['instanceServiceContainer']['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0xa1)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0x95)],this[l(0x99)]);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x98)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}