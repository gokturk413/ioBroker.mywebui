const l=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x105))/0x1*(-parseInt(h(0x10b))/0x2)+-parseInt(h(0x107))/0x3+parseInt(h(0x101))/0x4+-parseInt(h(0x109))/0x5*(parseInt(h(0x104))/0x6)+parseInt(h(0xfe))/0x7*(-parseInt(h(0x108))/0x8)+-parseInt(h(0x103))/0x9*(parseInt(h(0x10a))/0xa)+parseInt(h(0xff))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6eca0));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xfe;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0x100)]=c;}['shouldExtend'](c,d,e){const j=b;if(this[j(0x100)])return!![];const f=e[j(0x106)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const k=b;return new UnifiedGeometryExtension(c,d,e,this[k(0x100)]);}[l(0x102)]=css`
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
  `;}function a(){const m=['15509sGwoCh','node','1302378pAizvu','8vLMbEF','7855RJEipn','1413530cxYUnV','110jljJQY','1231426EMcxZH','14794340UTChKN','_customReader','571756uUpeco','style','45hIClSn','2178YfGgHd'];a=function(){return m;};return a();}