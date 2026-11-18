const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x15f))/0x1*(parseInt(h(0x160))/0x2)+parseInt(h(0x15c))/0x3+-parseInt(h(0x15e))/0x4*(parseInt(h(0x165))/0x5)+parseInt(h(0x159))/0x6+-parseInt(h(0x164))/0x7+-parseInt(h(0x157))/0x8*(parseInt(h(0x158))/0x9)+parseInt(h(0x167))/0xa*(-parseInt(h(0x161))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68d13));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function a(){const m=['5684503GOAUNi','shouldExtend','Element','4356646ymozfi','175365vxYLuz','svgDefs','10jGoHeq','gridColor','inline-grid','24RNnhrg','1620954tjjtDX','4346100szLglN','designContext','gridFillColor','2035206lwyxwD','#ff944722','4aLRydk','1kcnotw','1482242ytkviZ'];a=function(){return m;};return a();}function b(c,d){c=c-0x156;const e=a();let f=e[c];return f;}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0x168)];[i(0x15b)];constructor(c='orange',d=i(0x15d)){const j=i;this['gridColor']=c,this[j(0x15b)]=d;}[i(0x162)](c,d,e){const k=i;if(e['nodeType']!=NodeType[k(0x163)])return![];const f=getComputedStyle(e['element'])['display'];if(f=='grid'||f==k(0x156))return d['instanceServiceContainer'][k(0x15a)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x15b)]);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x166)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}