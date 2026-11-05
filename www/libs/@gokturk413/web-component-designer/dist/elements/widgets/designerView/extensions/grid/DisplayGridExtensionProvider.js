function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf8))/0x1+parseInt(h(0xf9))/0x2*(parseInt(h(0xff))/0x3)+parseInt(h(0xfc))/0x4*(parseInt(h(0x107))/0x5)+-parseInt(h(0x108))/0x6*(parseInt(h(0xf7))/0x7)+-parseInt(h(0x101))/0x8+-parseInt(h(0x109))/0x9+parseInt(h(0x102))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x910d9));import{css}from'@node-projects/base-custom-webcomponent';import{DisplayGridExtension}from'./DisplayGridExtension.js';function a(){const m=['90715bTvxxM','30HjYBBf','4765554EjXvQz','display','instanceServiceContainer','1561588JZCfmV','1120091uIqoKa','12ukyxaH','Element','orange','124OhFlPY','designContext','gridColor','98823lgjDVh','shouldExtend','9285952fkJWyq','15196370IRPYnO','svgDefs','gridFillColor','style','nodeType'];a=function(){return m;};return a();}import{svgAsString}from'../../../../helper/SvgHelper.js';import{NodeType}from'../../../../item/NodeType.js';export const gridExtensionShowOverlayOptionName='gridExtensionShowOverlay';export class DisplayGridExtensionProvider{[i(0xfe)];[i(0x104)];constructor(c=i(0xfb),d='#ff944722'){const j=i;this[j(0xfe)]=c,this['gridFillColor']=d;}[i(0x100)](c,d,e){const k=i;if(e[k(0x106)]!=NodeType[k(0xfa)])return![];const f=getComputedStyle(e['element'])[k(0x10a)];if(f=='grid'||f=='inline-grid')return d[k(0x10b)][k(0xfd)]['extensionOptions'][gridExtensionShowOverlayOptionName]!==![];return![];}['getExtension'](c,d,e){const l=i;return new DisplayGridExtension(c,d,e,this[l(0xfe)],this['gridFillColor']);}static [i(0x105)]=css`
    .svg-grid { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: var(--wcd-grid-fill-color, var(--svg-grid-fill-color)); }

    .svg-grid-current-cell { stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); stroke-dasharray: 5; fill: #e3ff4722; }
    .svg-grid-area { font-size: 8px; }
    .svg-grid-gap { stroke: transparent; fill: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); opacity: 0.3; mask: url(#mask-stripe-grid) }
    .svg-grid-header { fill: var(--wcd-grid-fill-color, var(--wcd-grid-fill-color, var(--svg-grid-fill-color))); stroke: var(--wcd-grid-stroke-color, var(--svg-grid-stroke-color)); }
    .svg-grid-plus-sign { stroke: black; }
  `;static [i(0x103)]=svgAsString`
    <pattern id="pattern-stripe-grid" 
      width="4" height="4" 
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
      <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
    </pattern>
    <mask id="mask-stripe-grid">
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe-grid)" />
    </mask>`;}