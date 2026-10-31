const i=b;function b(c,d){c=c-0x16d;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x16e))/0x1+-parseInt(h(0x16d))/0x2+parseInt(h(0x172))/0x3+-parseInt(h(0x175))/0x4*(parseInt(h(0x177))/0x5)+-parseInt(h(0x16f))/0x6*(parseInt(h(0x170))/0x7)+parseInt(h(0x173))/0x8+-parseInt(h(0x171))/0x9*(-parseInt(h(0x176))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa79f4));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function a(){const j=['2850864Ksiguv','8776632aFYldP','getExtension','34796igEtDC','10hCPwqG','25OeWErR','1031432xtOdPL','324212Tzyfkm','689226opfuKB','49pwLrox','2940597uJRHgM'];a=function(){return j;};return a();}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){if(this['_customReader'])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0x174)](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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