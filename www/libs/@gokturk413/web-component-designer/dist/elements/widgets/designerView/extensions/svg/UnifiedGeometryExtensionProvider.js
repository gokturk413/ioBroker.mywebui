const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x12c))/0x1+-parseInt(h(0x12b))/0x2*(-parseInt(h(0x129))/0x3)+parseInt(h(0x126))/0x4+parseInt(h(0x12a))/0x5+parseInt(h(0x127))/0x6+-parseInt(h(0x12d))/0x7*(parseInt(h(0x125))/0x8)+parseInt(h(0x128))/0x9*(-parseInt(h(0x12e))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9bd70));function a(){const l=['2013744mysAna','77220twjNct','3520002YVPoPe','650340eTxfus','2hofPVe','475960xEnpxZ','63TRylLH','560uXFMSW','shouldExtend','_customReader','1016896IErtcL','4398968lhNvmb'];a=function(){return l;};return a();}function b(c,d){c=c-0x125;const e=a();let f=e[c];return f;}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}[i(0x12f)](c,d,e){const j=i;if(this[j(0x130)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const k=i;return new UnifiedGeometryExtension(c,d,e,this[k(0x130)]);}['style']=css`
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