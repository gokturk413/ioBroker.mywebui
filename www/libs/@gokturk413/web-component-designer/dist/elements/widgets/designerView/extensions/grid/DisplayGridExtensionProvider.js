function a(){const m=['gridExtensionShowOverlay','1195377IvNhcL','display','shouldExtend','extensionOptions','inline-grid','gridColor','152879ZVEiSx','10933990SIfgqP','orange','gridFillColor','282152DFJVqD','element','14JtuCxi','304XjNzeF','grid','9569508cMxGum','20DTKSmF','style','nodeType','8952053opKSvo','339297vOzhpp','9FKuDgh'];a=function(){return m;};return a();}function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1b4))/0x1*(parseInt(h(0x1a3))/0x2)+-parseInt(h(0x1ae))/0x3+parseInt(h(0x1a1))/0x4*(parseInt(h(0x1a7))/0x5)+-parseInt(h(0x1a6))/0x6+parseInt(h(0x1ab))/0x7*(parseInt(h(0x1a4))/0x8)+parseInt(h(0x1ac))/0x9*(parseInt(h(0x1b5))/0xa)+parseInt(h(0x1aa))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xec43e));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x1ad);export class DisplayGridExtensionProvider{[i(0x1b3)];[i(0x1a0)];constructor(c=i(0x19f),d='#ff944722'){const j=i;this[j(0x1b3)]=c,this[j(0x1a0)]=d;}[i(0x1b0)](c,d,e){const k=i;if(e[k(0x1a9)]!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x1a2)])[k(0x1af)];if(f==k(0x1a5)||f==k(0x1b2))return d['instanceServiceContainer']['designContext'][k(0x1b1)][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x1a0)]);}static [i(0x1a8)]=css`
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