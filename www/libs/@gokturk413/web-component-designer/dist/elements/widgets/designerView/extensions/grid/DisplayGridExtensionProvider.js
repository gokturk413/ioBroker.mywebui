const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf1))/0x1+-parseInt(h(0xf3))/0x2+parseInt(h(0xfb))/0x3*(parseInt(h(0x102))/0x4)+parseInt(h(0xf6))/0x5*(parseInt(h(0xfc))/0x6)+-parseInt(h(0x101))/0x7+parseInt(h(0xff))/0x8*(-parseInt(h(0x100))/0x9)+-parseInt(h(0xf9))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcb927));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0xf1;const e=a();let f=e[c];return f;}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';function a(){const m=['4YmKCmP','grid','nodeType','1359098MXcouD','gridFillColor','1759528LDFtFX','display','element','15tHRlMk','shouldExtend','inline-grid','2722150DEbDUG','style','957465KFovYh','1726308RQbpvt','designContext','gridColor','169912IBsZZZ','18lhNXzt','3591833ysQwPr'];a=function(){return m;};return a();}export class DisplayGridExtensionProvider{[i(0xfe)];[i(0xf2)];constructor(c='orange',d='#ff944722'){const j=i;this[j(0xfe)]=c,this[j(0xf2)]=d;}[i(0xf7)](c,d,e){const k=i;if(e[k(0x104)]!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0xf5)])[k(0xf4)];if(f==k(0x103)||f==k(0xf8))return d['instanceServiceContainer'][k(0xfd)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0xfe)],this['gridFillColor']);}static [i(0xfa)]=css`
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