function b(c,d){c=c-0x150;const e=a();let f=e[c];return f;}function a(){const k=['32bfbBXJ','17240nzvvrj','designContext','getExtension','#ff944722','nodeType','grid','style','36954RaLSeh','gridExtensionShowOverlay','shouldExtend','1761615xDBhre','14DemjyC','16556980RYgYgU','Element','867140LtRvRU','1340433GqyXHZ','306538uZrcZv','492JqOMRd','inline-grid'];a=function(){return k;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15d))/0x1+-parseInt(h(0x15b))/0x2+-parseInt(h(0x15e))/0x3*(parseInt(h(0x161))/0x4)+-parseInt(h(0x157))/0x5+-parseInt(h(0x154))/0x6*(-parseInt(h(0x158))/0x7)+-parseInt(h(0x160))/0x8*(-parseInt(h(0x15c))/0x9)+parseInt(h(0x159))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7166d));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x155);export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c='orange',d=i(0x150)){this['gridColor']=c,this['gridFillColor']=d;}[i(0x156)](c,d,e){const j=i;if(e[j(0x151)]!=NodeType[j(0x15a)])return![];const f=getComputedStyle(e['element'])['display'];if(f==j(0x152)||f==j(0x15f))return d['instanceServiceContainer'][j(0x162)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x163)](c,d,e){return new DisplayGridExtension(c,d,e,this['gridColor'],this['gridFillColor']);}static [i(0x153)]=css`
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