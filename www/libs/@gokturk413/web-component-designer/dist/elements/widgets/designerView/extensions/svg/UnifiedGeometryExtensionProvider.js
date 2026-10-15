function a(){const m=['_customReader','2534880MRYsqg','25MXvJji','383076TQExtx','38426twDFlz','6KjhPfU','3001691uqTKqK','33hnlohX','4708260sCuNWJ','node','shouldExtend','3204830qLIJTQ','1996636AZpFmL','136YtMnNN'];a=function(){return m;};return a();}const i=b;function b(c,d){c=c-0x170;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x17c))/0x1*(-parseInt(h(0x170))/0x2)+parseInt(h(0x171))/0x3*(parseInt(h(0x178))/0x4)+-parseInt(h(0x17b))/0x5+parseInt(h(0x174))/0x6+parseInt(h(0x172))/0x7+-parseInt(h(0x179))/0x8*(parseInt(h(0x17d))/0x9)+-parseInt(h(0x177))/0xa*(parseInt(h(0x173))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7a1b9));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{[i(0x17a)];constructor(c){const j=i;this[j(0x17a)]=c;}[i(0x176)](c,d,e){const k=i;if(this['_customReader'])return!![];const f=e[k(0x175)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const l=i;return new UnifiedGeometryExtension(c,d,e,this[l(0x17a)]);}['style']=css`
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