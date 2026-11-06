const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xa3))/0x1+parseInt(h(0x96))/0x2+parseInt(h(0x97))/0x3*(parseInt(h(0x9d))/0x4)+-parseInt(h(0x9b))/0x5*(parseInt(h(0x9c))/0x6)+parseInt(h(0xa1))/0x7+parseInt(h(0x9e))/0x8+-parseInt(h(0xa4))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2e4b9));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';function a(){const m=['#ff944722','gridFillColor','303754CbiVFE','29523cHiKNu','nodeType','element','getExtension','37735HAuMQA','252OyYCtO','136btxgpG','2464528YBVsoO','style','extensionOptions','1453081moxjSQ','svgDefs','339516TChWDJ','7515333lauBIG','gridExtensionShowOverlay','instanceServiceContainer','display'];a=function(){return m;};return a();}function b(c,d){c=c-0x92;const e=a();let f=e[c];return f;}import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0xa5);export class DisplayGridExtensionProvider{['gridColor'];[i(0x95)];constructor(c='orange',d=i(0x94)){const j=i;this['gridColor']=c,this[j(0x95)]=d;}['shouldExtend'](c,d,e){const k=i;if(e[k(0x98)]!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x99)])[k(0x93)];if(f=='grid'||f=='inline-grid')return d[k(0x92)]['designContext'][k(0xa0)][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x9a)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x95)]);}static [i(0x9f)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0xa2)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}