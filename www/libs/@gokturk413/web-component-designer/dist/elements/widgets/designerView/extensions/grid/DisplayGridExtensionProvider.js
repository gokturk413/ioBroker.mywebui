const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a1))/0x1+-parseInt(h(0x19c))/0x2*(parseInt(h(0x19e))/0x3)+-parseInt(h(0x196))/0x4+-parseInt(h(0x193))/0x5*(-parseInt(h(0x194))/0x6)+parseInt(h(0x19a))/0x7+-parseInt(h(0x199))/0x8+-parseInt(h(0x19b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x851e3));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function a(){const m=['510759rXuuEc','4XkXggt','gridColor','68001AMOhui','gridFillColor','inline-grid','260163cAKDRp','designContext','Element','5qXGwHF','3649944ToyRUE','#ff944722','807304ZXFzTu','shouldExtend','display','1838232JgtyWo','1473178sttyik'];a=function(){return m;};return a();}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';function b(c,d){c=c-0x191;const e=a();let f=e[c];return f;}export class DisplayGridExtensionProvider{[i(0x19d)];['gridFillColor'];constructor(c='orange',d=i(0x195)){const j=i;this[j(0x19d)]=c,this[j(0x19f)]=d;}[i(0x197)](c,d,e){const k=i;if(e['nodeType']!=NodeType[k(0x192)])return![];const f=getComputedStyle(e['element'])[k(0x198)];if(f=='grid'||f==k(0x1a0))return d['instanceServiceContainer'][k(0x191)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x19f)]);}static ['style']=css`
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