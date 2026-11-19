const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x189))/0x1+-parseInt(h(0x182))/0x2+parseInt(h(0x17e))/0x3*(parseInt(h(0x188))/0x4)+parseInt(h(0x17d))/0x5*(-parseInt(h(0x17f))/0x6)+parseInt(h(0x17a))/0x7+parseInt(h(0x184))/0x8+-parseInt(h(0x18d))/0x9*(parseInt(h(0x17b))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3ea8b));import{css}from'@node-projects/base-custom-webcomponent';function a(){const m=['grid','299092nNQHFb','gridColor','2778424ktVzbO','gridExtensionShowOverlay','instanceServiceContainer','element','4YZXark','160946pxKIdH','shouldExtend','style','nodeType','9xQeZeY','getExtension','svgDefs','1402625mdLDqi','3309010yKjmrK','designContext','1627385CuptZf','1061853LxpZFK','6AZCiLP','gridFillColor'];a=function(){return m;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';function b(c,d){c=c-0x178;const e=a();let f=e[c];return f;}export const gridExtensionShowOverlayOptionName=i(0x185);export class DisplayGridExtensionProvider{[i(0x183)];[i(0x180)];constructor(c='orange',d='#ff944722'){const j=i;this['gridColor']=c,this[j(0x180)]=d;}[i(0x18a)](c,d,e){const k=i;if(e[k(0x18c)]!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x187)])['display'];if(f==k(0x181)||f=='inline-grid')return d[k(0x186)][k(0x17c)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x178)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x180)]);}static [i(0x18b)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x179)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}