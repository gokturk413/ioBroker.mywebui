function b(c,d){c=c-0x79;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x7e))/0x1+parseInt(h(0x81))/0x2+-parseInt(h(0x7f))/0x3+parseInt(h(0x7d))/0x4*(parseInt(h(0x82))/0x5)+-parseInt(h(0x7a))/0x6+-parseInt(h(0x7c))/0x7*(parseInt(h(0x80))/0x8)+parseInt(h(0x79))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x298c7));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0x7b)]=c;}['shouldExtend'](c,d,e){const j=b;if(this[j(0x7b)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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
  `;}function a(){const k=['43676uHsCAu','310186xjeqxg','917952pfEmta','10632jAKzGY','470160huYQeO','110hFEouq','741726dwSIWl','1911816mkpQUY','_customReader','385llHXOB'];a=function(){return k;};return a();}