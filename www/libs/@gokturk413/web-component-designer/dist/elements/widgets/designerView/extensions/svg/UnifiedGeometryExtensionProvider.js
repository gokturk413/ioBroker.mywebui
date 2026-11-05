const k=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x167))/0x1*(-parseInt(h(0x16e))/0x2)+-parseInt(h(0x16d))/0x3+parseInt(h(0x163))/0x4*(parseInt(h(0x166))/0x5)+parseInt(h(0x16b))/0x6*(-parseInt(h(0x16f))/0x7)+-parseInt(h(0x168))/0x8+-parseInt(h(0x165))/0x9*(-parseInt(h(0x16c))/0xa)+-parseInt(h(0x164))/0xb*(-parseInt(h(0x16a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7a7b2));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function b(c,d){c=c-0x162;const e=a();let f=e[c];return f;}function a(){const l=['4334872uIhQqp','_customReader','84khcYPA','89274zUERhe','1443390ShtsOc','1703802jHfolm','50kEAHMs','238YDDIJl','style','8gWSCXG','859045xLMjDG','45SPHASr','600815XywkrY','24347IvMldh'];a=function(){return l;};return a();}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){const i=b;if(this[i(0x169)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const j=b;return new UnifiedGeometryExtension(c,d,e,this[j(0x169)]);}[k(0x162)]=css`
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