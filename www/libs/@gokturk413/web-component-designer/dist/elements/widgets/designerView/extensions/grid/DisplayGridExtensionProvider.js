const i=b;function b(c,d){c=c-0x1cf;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1d1))/0x1*(parseInt(h(0x1e2))/0x2)+parseInt(h(0x1db))/0x3+-parseInt(h(0x1d0))/0x4+-parseInt(h(0x1d8))/0x5*(parseInt(h(0x1d9))/0x6)+-parseInt(h(0x1da))/0x7+parseInt(h(0x1e0))/0x8+parseInt(h(0x1d2))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4b46b));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';function a(){const m=['element','2242672dIZbZq','3MNBKvX','10433817aMDNZp','nodeType','shouldExtend','designContext','getExtension','gridFillColor','14870YnRJvC','498XfXgRF','3381609CqmojU','1541946ZhKmrX','extensionOptions','display','orange','grid','3869856VQGdAr','gridExtensionShowOverlay','372066NyKnhv'];a=function(){return m;};return a();}import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x1e1);export class DisplayGridExtensionProvider{['gridColor'];[i(0x1d7)];constructor(c=i(0x1de),d='#ff944722'){const j=i;this['gridColor']=c,this[j(0x1d7)]=d;}[i(0x1d4)](c,d,e){const k=i;if(e[k(0x1d3)]!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x1cf)])[k(0x1dd)];if(f==k(0x1df)||f=='inline-grid')return d['instanceServiceContainer'][k(0x1d5)][k(0x1dc)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x1d6)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x1d7)]);}static ['style']=css`
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