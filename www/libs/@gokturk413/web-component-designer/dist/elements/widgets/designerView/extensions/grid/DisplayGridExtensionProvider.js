const i=b;function a(){const m=['71420kpuAgU','2IXliAG','60nfCuyo','instanceServiceContainer','28dyHxDs','designContext','198lLzbKj','1194nsOUwO','358655LwNHcg','extensionOptions','11050FHexrr','orange','11751psofXk','1680uXdqPF','105088akVpHc','54usIPOh','nodeType','style','shouldExtend','4665583BExdyH','gridFillColor'];a=function(){return m;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x7d))/0x1*(-parseInt(h(0x72))/0x2)+parseInt(h(0x78))/0x3*(parseInt(h(0x7e))/0x4)+-parseInt(h(0x71))/0x5*(parseInt(h(0x80))/0x6)+parseInt(h(0x75))/0x7*(-parseInt(h(0x7f))/0x8)+parseInt(h(0x77))/0x9*(-parseInt(h(0x7b))/0xa)+parseInt(h(0x79))/0xb*(-parseInt(h(0x73))/0xc)+parseInt(h(0x84))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x239c9));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';function b(c,d){c=c-0x71;const e=a();let f=e[c];return f;}export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c=i(0x7c),d='#ff944722'){const j=i;this['gridColor']=c,this[j(0x85)]=d;}[i(0x83)](c,d,e){const k=i;if(e[k(0x81)]!=NodeType['Element'])return![];const f=getComputedStyle(e['element'])['display'];if(f=='grid'||f=='inline-grid')return d[k(0x74)][k(0x76)][k(0x7a)][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x85)]);}static [i(0x82)]=css`
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