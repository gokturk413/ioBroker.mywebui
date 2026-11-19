const i=b;function a(){const l=['963CNrkJG','75AsVkAP','node','7734GdFiyh','7492PjDqOj','366wkGwqO','567678STGVEW','getExtension','204JTkWyz','_customReader','9746709qRZMWI','27536ItWFIv','4971070BObNeg','44007546AtWRBN'];a=function(){return l;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd1))/0x1*(parseInt(h(0xd0))/0x2)+parseInt(h(0xcf))/0x3*(parseInt(h(0xd4))/0x4)+-parseInt(h(0xcd))/0x5*(parseInt(h(0xd2))/0x6)+-parseInt(h(0xc8))/0x7+parseInt(h(0xc9))/0x8*(parseInt(h(0xcc))/0x9)+parseInt(h(0xca))/0xa+parseInt(h(0xcb))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6f63));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xc7;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{[i(0xc7)];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){const j=i;if(this['_customReader'])return!![];const f=e[j(0xce)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0xd3)](c,d,e){const k=i;return new UnifiedGeometryExtension(c,d,e,this[k(0xc7)]);}['style']=css`
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