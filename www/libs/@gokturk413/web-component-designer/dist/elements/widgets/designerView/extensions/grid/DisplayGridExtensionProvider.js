function b(c,d){c=c-0xc8;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd8))/0x1+parseInt(h(0xc8))/0x2+-parseInt(h(0xd1))/0x3*(-parseInt(h(0xcf))/0x4)+-parseInt(h(0xd6))/0x5*(parseInt(h(0xc9))/0x6)+parseInt(h(0xd0))/0x7+-parseInt(h(0xd7))/0x8*(parseInt(h(0xcc))/0x9)+parseInt(h(0xcb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf398d));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';function a(){const l=['6NPYmEY','Element','9302880jCWnRD','10541898tOWhEb','gridFillColor','svgDefs','4iejvNf','10114321CYEgeR','5087163fsvMJN','#ff944722','instanceServiceContainer','style','display','3930805RqZjkY','8QUmrwK','1573606OzEXzd','915900RhMRDX'];a=function(){return l;};return a();}export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c='orange',d=i(0xd2)){this['gridColor']=c,this['gridFillColor']=d;}['shouldExtend'](c,d,e){const j=i;if(e['nodeType']!=NodeType[j(0xca)])return![];const f=getComputedStyle(e['element'])[j(0xd5)];if(f=='grid'||f=='inline-grid')return d[j(0xd3)]['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const k=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[k(0xcd)]);}static [i(0xd4)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0xce)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}