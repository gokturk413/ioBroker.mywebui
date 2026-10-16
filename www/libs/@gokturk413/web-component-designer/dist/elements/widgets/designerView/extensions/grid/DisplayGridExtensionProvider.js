const i=b;function a(){const l=['grid','style','2186xRxCtB','designContext','extensionOptions','gridColor','2296467ssImQz','Element','inline-grid','shouldExtend','#ff944722','orange','1055clAfTp','263631QPUzCV','1194288DXcnDn','5416VnmHvk','705691PxzSrF','gridFillColor','129YEYSNx','113360doDuRi'];a=function(){return l;};return a();}function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xde))/0x1+-parseInt(h(0xe7))/0x2*(parseInt(h(0xe3))/0x3)+parseInt(h(0xe0))/0x4*(parseInt(h(0xdd))/0x5)+-parseInt(h(0xdf))/0x6+parseInt(h(0xe1))/0x7+parseInt(h(0xe4))/0x8+-parseInt(h(0xd7))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x27d1a));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0xd6)];[i(0xe2)];constructor(c=i(0xdc),d=i(0xdb)){this['gridColor']=c,this['gridFillColor']=d;}[i(0xda)](c,d,e){const j=i;if(e['nodeType']!=NodeType[j(0xd8)])return![];const f=getComputedStyle(e['element'])['display'];if(f==j(0xe5)||f==j(0xd9))return d['instanceServiceContainer'][j(0xe8)][j(0xd5)][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const k=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[k(0xe2)]);}static [i(0xe6)]=css`
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