const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x18a))/0x1*(-parseInt(h(0x180))/0x2)+parseInt(h(0x192))/0x3+parseInt(h(0x189))/0x4*(parseInt(h(0x18d))/0x5)+parseInt(h(0x183))/0x6+-parseInt(h(0x17e))/0x7+parseInt(h(0x187))/0x8+parseInt(h(0x193))/0x9*(-parseInt(h(0x181))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1dabd));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function a(){const m=['getExtension','455570mHOwmA','instanceServiceContainer','Element','nodeType','display','317184vEdMtH','9fWPDZL','element','282345CBpMzN','shouldExtend','22676kOwErf','3335490SkjzXL','#ff944722','392742ubVozy','style','gridColor','gridExtensionShowOverlay','141568dunYXE','gridFillColor','4vBcfir','19ytLDuJ','svgDefs'];a=function(){return m;};return a();}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x186);function b(c,d){c=c-0x17d;const e=a();let f=e[c];return f;}export class DisplayGridExtensionProvider{['gridColor'];[i(0x188)];constructor(c='orange',d=i(0x182)){const j=i;this['gridColor']=c,this[j(0x188)]=d;}[i(0x17f)](c,d,e){const k=i;if(e[k(0x190)]!=NodeType[k(0x18f)])return![];const f=getComputedStyle(e[k(0x17d)])[k(0x191)];if(f=='grid'||f=='inline-grid')return d[k(0x18e)]['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x18c)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0x185)],this['gridFillColor']);}static [i(0x184)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x18b)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}