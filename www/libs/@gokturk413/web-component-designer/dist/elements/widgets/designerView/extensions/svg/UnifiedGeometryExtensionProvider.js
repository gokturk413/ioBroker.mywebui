const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1d5))/0x1*(-parseInt(h(0x1cc))/0x2)+-parseInt(h(0x1da))/0x3+-parseInt(h(0x1d3))/0x4*(parseInt(h(0x1ce))/0x5)+parseInt(h(0x1d1))/0x6+-parseInt(h(0x1d0))/0x7*(-parseInt(h(0x1cd))/0x8)+-parseInt(h(0x1d8))/0x9*(parseInt(h(0x1cf))/0xa)+parseInt(h(0x1d9))/0xb*(parseInt(h(0x1d2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69075));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function a(){const m=['getExtension','28446SiiBkb','node','_customReader','9SKOdIg','11rTsNeT','1545891tGxFwU','34OoVxpy','16nqvGOQ','2953345LYlIVZ','6560890LMwCTZ','2058413JvBNsW','1495806RdcCaT','10455012jUTlWl','4wcGcSA'];a=function(){return m;};return a();}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{[i(0x1d7)];constructor(c){const j=i;this[j(0x1d7)]=c;}['shouldExtend'](c,d,e){const k=i;if(this[k(0x1d7)])return!![];const f=e[k(0x1d6)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0x1d4)](c,d,e){const l=i;return new UnifiedGeometryExtension(c,d,e,this[l(0x1d7)]);}['style']=css`
    .svg-control-line {
      stroke: var(--wcd-color-selection, #3899ec);
      fill: none;
      stroke-dasharray: 4;
      pointer-events: none;
      opacity: 0.9;
    }

    .svg-control-point {
      stroke: var(--wcd-color-selection, #3899ec);
      fill: var(--wcd-color-handle, white);
      pointer-events: auto;
    }

    .svg-path-selected-part {
      stroke: var(--wcd-color-handle-stroke, black);
      fill: var(--wcd-color-handle-active, lime);
    }
  `;}