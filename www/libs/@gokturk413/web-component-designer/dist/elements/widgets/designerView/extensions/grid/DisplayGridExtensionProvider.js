function b(c,d){c=c-0x1e3;const e=a();let f=e[c];return f;}const i=b;function a(){const m=['element','style','display','extensionOptions','282319Ffybos','739010SXieqc','3132256bZUzRq','171352spUMIA','9lGFykn','designContext','gridFillColor','gridColor','4122630QeHUlJ','orange','inline-grid','svgDefs','331610opXtBT','#ff944722','7316676ZEmnQt','7uMUXbw'];a=function(){return m;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1ef))/0x1+parseInt(h(0x1e7))/0x2+parseInt(h(0x1f3))/0x3*(parseInt(h(0x1f2))/0x4)+-parseInt(h(0x1f0))/0x5+-parseInt(h(0x1e3))/0x6+-parseInt(h(0x1ea))/0x7*(-parseInt(h(0x1f1))/0x8)+parseInt(h(0x1e9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5d295));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0x1f6)];[i(0x1f5)];constructor(c=i(0x1e4),d=i(0x1e8)){const j=i;this[j(0x1f6)]=c,this[j(0x1f5)]=d;}['shouldExtend'](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x1eb)])[k(0x1ed)];if(f=='grid'||f==k(0x1e5))return d['instanceServiceContainer'][k(0x1f4)][k(0x1ee)][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0x1f6)],this[l(0x1f5)]);}static [i(0x1ec)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x1e6)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}