const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x7b))/0x1+-parseInt(h(0x6b))/0x2+-parseInt(h(0x6e))/0x3*(parseInt(h(0x7c))/0x4)+parseInt(h(0x7a))/0x5*(parseInt(h(0x79))/0x6)+parseInt(h(0x73))/0x7+parseInt(h(0x77))/0x8*(-parseInt(h(0x74))/0x9)+-parseInt(h(0x71))/0xa*(-parseInt(h(0x6c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68747));import{css}from'@node-projects/base-custom-webcomponent';function a(){const l=['element','inline-grid','8sPmtyg','getExtension','126vlTERB','38220gQxVfK','248857ODrZsl','3172pzkqiQ','style','gridColor','734860DBzYAy','3085478RRBlGN','svgDefs','1548cLpWGU','#ff944722','extensionOptions','30cfLDrh','designContext','4050473TKEnTW','5625441wXWaAq'];a=function(){return l;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';function b(c,d){c=c-0x69;const e=a();let f=e[c];return f;}export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0x6a)];['gridFillColor'];constructor(c='orange',d=i(0x6f)){this['gridColor']=c,this['gridFillColor']=d;}['shouldExtend'](c,d,e){const j=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e[j(0x75)])['display'];if(f=='grid'||f==j(0x76))return d['instanceServiceContainer'][j(0x72)][j(0x70)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x78)](c,d,e){const k=i;return new DisplayGridExtension(c,d,e,this[k(0x6a)],this['gridFillColor']);}static [i(0x69)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x6d)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}