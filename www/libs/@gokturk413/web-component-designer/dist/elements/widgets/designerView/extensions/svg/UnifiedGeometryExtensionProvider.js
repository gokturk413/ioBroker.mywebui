const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x171))/0x1+-parseInt(h(0x169))/0x2+parseInt(h(0x168))/0x3*(-parseInt(h(0x16a))/0x4)+parseInt(h(0x16b))/0x5+-parseInt(h(0x16c))/0x6*(parseInt(h(0x16e))/0x7)+parseInt(h(0x167))/0x8*(-parseInt(h(0x170))/0x9)+parseInt(h(0x172))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x79eee));function a(){const l=['shouldExtend','14kouQzi','_customReader','793026qKsIyi','593940RcxHYg','2614130UUOHVA','style','56kAeTKE','770826dGxkpA','321396GrUTcy','4gRoonE','4841625sAiqar','869406bQrClH'];a=function(){return l;};return a();}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function b(c,d){c=c-0x166;const e=a();let f=e[c];return f;}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}[i(0x16d)](c,d,e){const j=i;if(this[j(0x16f)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const k=i;return new UnifiedGeometryExtension(c,d,e,this[k(0x16f)]);}[i(0x166)]=css`
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