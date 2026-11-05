const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xe5))/0x1+parseInt(h(0xd7))/0x2+parseInt(h(0xe3))/0x3+-parseInt(h(0xd5))/0x4+-parseInt(h(0xdc))/0x5+-parseInt(h(0xe0))/0x6*(-parseInt(h(0xdf))/0x7)+-parseInt(h(0xd8))/0x8*(-parseInt(h(0xda))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2739c));import{css}from'@node-projects/base-custom-webcomponent';function a(){const l=['836405khTEHw','designContext','#ff944722','7wgEUuI','1799538APQaqy','gridExtensionShowOverlay','svgDefs','203064WcVKFO','gridColor','277620LLqCrU','212780wLuxQi','gridFillColor','33678HdAQkB','24CJFDhq','extensionOptions','822942svGEpX','orange'];a=function(){return l;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}export const gridExtensionShowOverlayOptionName=i(0xe1);export class DisplayGridExtensionProvider{[i(0xe4)];['gridFillColor'];constructor(c=i(0xdb),d=i(0xde)){const j=i;this[j(0xe4)]=c,this[j(0xd6)]=d;}['shouldExtend'](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e['element'])['display'];if(f=='grid'||f=='inline-grid')return d['instanceServiceContainer'][k(0xdd)][k(0xd9)][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){return new DisplayGridExtension(c,d,e,this['gridColor'],this['gridFillColor']);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0xe2)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}