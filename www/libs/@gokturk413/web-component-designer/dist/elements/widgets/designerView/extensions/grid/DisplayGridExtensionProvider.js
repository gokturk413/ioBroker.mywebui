const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x10a))/0x1*(parseInt(h(0x10c))/0x2)+parseInt(h(0x11b))/0x3*(parseInt(h(0x10f))/0x4)+-parseInt(h(0x118))/0x5*(-parseInt(h(0x112))/0x6)+parseInt(h(0x11a))/0x7*(-parseInt(h(0x11f))/0x8)+-parseInt(h(0x116))/0x9*(-parseInt(h(0x10e))/0xa)+-parseInt(h(0x11e))/0xb+parseInt(h(0x113))/0xc*(parseInt(h(0x11c))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96c85));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';function b(c,d){c=c-0x109;const e=a();let f=e[c];return f;}function a(){const l=['svgDefs','6414nZysqD','designContext','10590ZAXfZn','122516gUypVG','getExtension','shouldExtend','114IlsjcP','12tPUxXt','extensionOptions','inline-grid','6057pNAcvu','gridFillColor','11920tnquLu','element','77gCjGZs','117XJVmTP','9462245VldqHJ','gridColor','11258533JcTEEX','601912CqaiBZ','#ff944722','66PSLiqW'];a=function(){return l;};return a();}import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0x11d)];['gridFillColor'];constructor(c='orange',d=i(0x109)){const j=i;this[j(0x11d)]=c,this[j(0x117)]=d;}[i(0x111)](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x119)])['display'];if(f=='grid'||f==k(0x115))return d['instanceServiceContainer'][k(0x10d)][k(0x114)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x110)](c,d,e){return new DisplayGridExtension(c,d,e,this['gridColor'],this['gridFillColor']);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x10b)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}