const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x10d))/0x1+-parseInt(h(0x10e))/0x2*(parseInt(h(0x10b))/0x3)+-parseInt(h(0x111))/0x4+parseInt(h(0x117))/0x5+-parseInt(h(0x10c))/0x6*(-parseInt(h(0x113))/0x7)+parseInt(h(0x112))/0x8*(parseInt(h(0x116))/0x9)+-parseInt(h(0x115))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x916c2));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0x10b;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';function a(){const k=['18EKyxdA','395706wGkJKu','960hCERDd','_customReader','shouldExtend','3858936qXROnT','872QoSnMA','2695504KQLDXd','getExtension','12137130UmaGAp','96723PclGuQ','4000360PKRSiD','4677vajArz'];a=function(){return k;};return a();}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0x10f)]=c;}[j(0x110)](c,d,e){if(this['_customReader'])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[j(0x114)](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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