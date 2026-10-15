const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x7c))/0x1+parseInt(h(0x79))/0x2+parseInt(h(0x7b))/0x3*(-parseInt(h(0x80))/0x4)+-parseInt(h(0x76))/0x5+-parseInt(h(0x7d))/0x6*(parseInt(h(0x78))/0x7)+-parseInt(h(0x7a))/0x8+parseInt(h(0x81))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa974f));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0x76;const e=a();let f=e[c];return f;}function a(){const j=['953070uelXyN','219712BUdOJi','901182sxUyGf','style','_customReader','16yIJIRE','14371128CnwBga','363820EmQimr','shouldExtend','21wyZWbD','2254486hdlrAC','128904GSPWpE'];a=function(){return j;};return a();}import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{[i(0x7f)];constructor(c){this['_customReader']=c;}[i(0x77)](c,d,e){if(this['_customReader'])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}[i(0x7e)]=css`
    .svg-control-line {
      stroke: #3899ec;
      fill: none;
      stroke-dasharray: 4;
      pointer-events: none;
      opacity: 0.9;
    }

    .svg-control-point {
      stroke: #3899ec;
      fill: white;
      pointer-events: auto;
    }
  `;}