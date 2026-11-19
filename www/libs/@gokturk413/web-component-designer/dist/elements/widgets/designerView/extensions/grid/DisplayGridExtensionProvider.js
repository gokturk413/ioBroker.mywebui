const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1b9))/0x1*(-parseInt(h(0x1c2))/0x2)+parseInt(h(0x1bb))/0x3+-parseInt(h(0x1b7))/0x4*(-parseInt(h(0x1c1))/0x5)+parseInt(h(0x1c0))/0x6+parseInt(h(0x1c7))/0x7*(-parseInt(h(0x1c8))/0x8)+-parseInt(h(0x1c3))/0x9+-parseInt(h(0x1bc))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbc892));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1b7;const e=a();let f=e[c];return f;}function a(){const l=['nodeType','gridColor','1310351VPAQun','8MmfoZB','20kYeKVo','grid','286bZvpYY','Element','246894lDrpBb','19620390fAujAo','gridExtensionShowOverlay','element','designContext','4606464ieVAzV','1100555kNxAvb','8242ztFbIx','1869561yeTzfB','style'];a=function(){return l;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x1bd);export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c='orange',d='#ff944722'){const j=i;this[j(0x1c6)]=c,this['gridFillColor']=d;}['shouldExtend'](c,d,e){const k=i;if(e[k(0x1c5)]!=NodeType[k(0x1ba)])return![];const f=getComputedStyle(e[k(0x1be)])['display'];if(f==k(0x1b8)||f=='inline-grid')return d['instanceServiceContainer'][k(0x1bf)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){return new DisplayGridExtension(c,d,e,this['gridColor'],this['gridFillColor']);}static [i(0x1c4)]=css`
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