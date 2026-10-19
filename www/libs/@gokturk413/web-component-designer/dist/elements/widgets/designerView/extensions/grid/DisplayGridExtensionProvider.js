const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x131))/0x1*(parseInt(h(0x13a))/0x2)+parseInt(h(0x140))/0x3*(parseInt(h(0x134))/0x4)+parseInt(h(0x13e))/0x5+parseInt(h(0x139))/0x6+-parseInt(h(0x132))/0x7+-parseInt(h(0x135))/0x8*(-parseInt(h(0x142))/0x9)+-parseInt(h(0x13f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xab1d8));import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x131;const e=a();let f=e[c];return f;}function a(){const m=['3101004FSFsNX','87148lCbkbq','svgDefs','gridColor','gridFillColor','4399800rvrIkp','10070720NWKbZV','357354RmGqyR','getExtension','99891RBGsYf','1UoAEOY','1850625UrPZDm','style','16YYkVCW','40IfeqzI','inline-grid','gridExtensionShowOverlay','grid'];a=function(){return m;};return a();}import{DisplayGridExtension}from'./DisplayGridExtension.js';import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName=i(0x137);export class DisplayGridExtensionProvider{['gridColor'];['gridFillColor'];constructor(c='orange',d='#ff944722'){const j=i;this[j(0x13c)]=c,this['gridFillColor']=d;}['shouldExtend'](c,d,e){const k=i;if(e['nodeType']!=NodeType['Element'])return![];const f=getComputedStyle(e['element'])['display'];if(f==k(0x138)||f==k(0x136))return d['instanceServiceContainer']['designContext']['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}[i(0x141)](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this['gridColor'],this[l(0x13d)]);}static [i(0x133)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x13b)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}