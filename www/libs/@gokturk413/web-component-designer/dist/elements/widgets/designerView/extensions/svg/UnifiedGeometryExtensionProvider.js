const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1a1))/0x1+-parseInt(h(0x1a0))/0x2*(-parseInt(h(0x1a6))/0x3)+-parseInt(h(0x1a4))/0x4+parseInt(h(0x1a5))/0x5*(parseInt(h(0x1a2))/0x6)+parseInt(h(0x19b))/0x7*(-parseInt(h(0x19e))/0x8)+parseInt(h(0x1a3))/0x9+parseInt(h(0x19f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x50ae1));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function a(){const l=['478207hctKcq','12usDJCJ','3057525IzgQEC','2208724WnyqmE','75135SlzEIk','201KVNKSw','18949QxNyUj','shouldExtend','_customReader','1544FxEuWa','13588220yIOhLS','4618CQtbuC'];a=function(){return l;};return a();}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function b(c,d){c=c-0x19b;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0x19d)]=c;}[j(0x19c)](c,d,e){const k=j;if(this[k(0x19d)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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