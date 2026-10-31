const i=b;function b(c,d){c=c-0x95;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x99))/0x1+parseInt(h(0xa1))/0x2*(-parseInt(h(0x9c))/0x3)+-parseInt(h(0xa4))/0x4+-parseInt(h(0xa2))/0x5+-parseInt(h(0x9a))/0x6*(-parseInt(h(0x98))/0x7)+-parseInt(h(0x9d))/0x8+parseInt(h(0x9e))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcbf39));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';function a(){const l=['30707577vhjQog','getExtension','grid','178cNlsiJ','1628515LyaoVt','orange','3314740SVFLLm','gridExtensionShowOverlay','element','inline-grid','10920pxHBDy','687180mflwBs','294fxSAco','gridColor','31989BDcAvb','9894344mbrpfd'];a=function(){return l;};return a();}export const gridExtensionShowOverlayOptionName=i(0x95);export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c=i(0xa3),d='#ff944722'){const j=i;this[j(0x9b)]=c,this['gridFillColor']=d;}['shouldExtend'](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e[k(0x96)])['display'];if(f==k(0xa0)||f==k(0x97))return d['instanceServiceContainer']['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x9f)](c,d,e){return new DisplayGridExtension(c,d,e,this['gridColor'],this['gridFillColor']);}static ['style']=css`
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