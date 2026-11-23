const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15c))/0x1+parseInt(h(0x161))/0x2*(parseInt(h(0x166))/0x3)+-parseInt(h(0x154))/0x4*(-parseInt(h(0x160))/0x5)+-parseInt(h(0x151))/0x6+parseInt(h(0x15a))/0x7*(-parseInt(h(0x15d))/0x8)+-parseInt(h(0x152))/0x9*(parseInt(h(0x162))/0xa)+-parseInt(h(0x159))/0xb*(-parseInt(h(0x163))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc2d91));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x157);export class DisplayGridExtensionProvider{[i(0x165)];[i(0x156)];constructor(c='orange',d='#ff944722'){const j=i;this[j(0x165)]=c,this['gridFillColor']=d;}[i(0x15f)](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e['element'])[k(0x155)];if(f=='grid'||f=='inline-grid')return d[k(0x158)][k(0x153)][k(0x164)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x15b)](c,d,e){return new DisplayGridExtension(c,d,e,this['gridColor'],this['gridFillColor']);}static [i(0x15e)]=css`
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
    </mask>`;}function a(){const l=['20OQndox','display','gridFillColor','gridExtensionShowOverlay','instanceServiceContainer','5027qCVYZh','1261582wmuMDo','getExtension','822915BpGxhZ','16tieqsD','style','shouldExtend','610025YKHYQS','4NhpKsg','4910230mkVHHE','65028vuIErd','extensionOptions','gridColor','100866LfPTbT','4087590LVeyDT','9XLwOfT','designContext'];a=function(){return l;};return a();}