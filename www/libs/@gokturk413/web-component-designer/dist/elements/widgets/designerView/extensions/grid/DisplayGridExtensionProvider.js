const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x180))/0x1+parseInt(h(0x188))/0x2+-parseInt(h(0x18b))/0x3+parseInt(h(0x182))/0x4*(parseInt(h(0x181))/0x5)+-parseInt(h(0x193))/0x6*(parseInt(h(0x184))/0x7)+-parseInt(h(0x183))/0x8*(parseInt(h(0x189))/0x9)+parseInt(h(0x192))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6d11b));import{css}from'@node-projects/base-custom-webcomponent';function a(){const l=['5699800qzYUyB','6jHTUZF','463393xyOzUI','40OwfYmv','362156qyFVrA','8hzkfaD','4577587rkpMVy','shouldExtend','inline-grid','extensionOptions','567496yyRTDR','3614319HieHSb','instanceServiceContainer','1617462zjnCBj','Element','svgDefs','element','nodeType','gridColor','display'];a=function(){return l;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';function b(c,d){c=c-0x180;const e=a();let f=e[c];return f;}export class DisplayGridExtensionProvider{[i(0x190)];['gridFillColor'];constructor(c='orange',d='#ff944722'){this['gridColor']=c,this['gridFillColor']=d;}[i(0x185)](c,d,e){const j=i;if(e[j(0x18f)]!=NodeType[j(0x18c)])return![];const f=getComputedStyle(e[j(0x18e)])[j(0x191)];if(f=='grid'||f==j(0x186))return d[j(0x18a)]['designContext'][j(0x187)][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const k=i;return new DisplayGridExtension(c,d,e,this[k(0x190)],this['gridFillColor']);}static ['style']=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x18d)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}