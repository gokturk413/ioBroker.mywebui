function a(){const l=['grid','2PAJJAe','nodeType','gridFillColor','2771353VEtCRp','shouldExtend','4039128bBlGcB','gridColor','9216922VqeXOy','24TwGPtT','610wNxGxd','1669979gxRSYp','2092185SQgVzh','instanceServiceContainer','56292JExyML','element','84GvzHxt','20ugMoUg','96432NFbEcf','inline-grid','9DhvZex','Element'];a=function(){return l;};return a();}function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x16c))/0x1*(parseInt(h(0x162))/0x2)+-parseInt(h(0x16d))/0x3+parseInt(h(0x159))/0x4*(parseInt(h(0x16b))/0x5)+parseInt(h(0x15b))/0x6*(-parseInt(h(0x15d))/0x7)+-parseInt(h(0x167))/0x8*(-parseInt(h(0x15f))/0x9)+parseInt(h(0x15c))/0xa*(parseInt(h(0x169))/0xb)+-parseInt(h(0x16a))/0xc*(parseInt(h(0x165))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xde699));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{['gridColor'];[i(0x164)];constructor(c='orange',d='#ff944722'){this['gridColor']=c,this['gridFillColor']=d;}[i(0x166)](c,d,e){const j=i;if(e[j(0x163)]!=NodeType[j(0x160)])return![];const f=getComputedStyle(e[j(0x15a)])['display'];if(f==j(0x161)||f==j(0x15e))return d[j(0x158)]['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const k=i;return new DisplayGridExtension(c,d,e,this[k(0x168)],this['gridFillColor']);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static ['svgDefs']=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}