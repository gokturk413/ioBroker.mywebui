const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x109))/0x1*(parseInt(h(0x10d))/0x2)+parseInt(h(0x112))/0x3+parseInt(h(0x10b))/0x4*(parseInt(h(0x103))/0x5)+parseInt(h(0x105))/0x6+parseInt(h(0x10c))/0x7+parseInt(h(0x10f))/0x8+-parseInt(h(0x101))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc3fac));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x10a);export class DisplayGridExtensionProvider{['gridColor'];[i(0x114)];constructor(c=i(0x107),d='#ff944722'){const j=i;this[j(0x102)]=c,this[j(0x114)]=d;}['shouldExtend'](c,d,e){const k=i;if(e['nodeType']!=NodeType[k(0x108)])return![];const f=getComputedStyle(e['element'])['display'];if(f==k(0x113)||f==k(0x110))return d[k(0x111)][k(0x104)][k(0x106)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x10e)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x114)]);}static ['style']=css`
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
    </mask>`;}function b(c,d){c=c-0x101;const e=a();let f=e[c];return f;}function a(){const m=['grid','gridFillColor','23219811JmJREM','gridColor','44590adoGeN','designContext','2411088TLMlTm','extensionOptions','orange','Element','12429WDtctp','gridExtensionShowOverlay','44wgbYMm','3509156cUARda','22tZUHeg','getExtension','9087568QlfpiU','inline-grid','instanceServiceContainer','3326376ammFbI'];a=function(){return m;};return a();}