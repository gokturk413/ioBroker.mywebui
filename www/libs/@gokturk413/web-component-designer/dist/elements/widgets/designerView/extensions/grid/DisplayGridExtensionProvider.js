const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x11e))/0x1*(-parseInt(h(0x10f))/0x2)+parseInt(h(0x113))/0x3*(parseInt(h(0x115))/0x4)+parseInt(h(0x11b))/0x5+parseInt(h(0x118))/0x6*(-parseInt(h(0x11c))/0x7)+-parseInt(h(0x119))/0x8+parseInt(h(0x10e))/0x9*(-parseInt(h(0x11d))/0xa)+-parseInt(h(0x111))/0xb*(-parseInt(h(0x117))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb3ad9));function a(){const m=['gridFillColor','228tvBiVy','6uIwcnY','3017832AkStiz','gridExtensionShowOverlay','2036270UsrQqq','2909137jcXVQA','820WaRpaN','13PwytyQ','135513SCpTVF','130334Ceevbi','instanceServiceContainer','116743HTcNOU','gridColor','560307HLhzWn','orange','28VlrLme'];a=function(){return m;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0x10e;const e=a();let f=e[c];return f;}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x11a);export class DisplayGridExtensionProvider{['gridColor'];[i(0x116)];constructor(c=i(0x114),d='#ff944722'){const j=i;this[j(0x112)]=c,this[j(0x116)]=d;}['shouldExtend'](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e['element'])['display'];if(f=='grid'||f=='inline-grid')return d[k(0x110)]['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0x112)],this['gridFillColor']);}static ['style']=css`
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