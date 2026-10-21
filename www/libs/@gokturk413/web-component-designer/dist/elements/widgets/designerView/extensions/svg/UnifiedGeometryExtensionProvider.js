const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x10e))/0x1+-parseInt(h(0x110))/0x2+parseInt(h(0x113))/0x3+parseInt(h(0x111))/0x4*(-parseInt(h(0x10f))/0x5)+parseInt(h(0x116))/0x6+parseInt(h(0x114))/0x7+-parseInt(h(0x10b))/0x8*(-parseInt(h(0x115))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe6ea1));function a(){const k=['shouldExtend','1087264SSycvQ','4170115szWnVb','757216RWKuYr','4hJGwNd','style','580809hfaZVq','3381336woDfOs','19720359wDmMhC','2267508EFWjdm','8PHzfVJ','node'];a=function(){return k;};return a();}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x10b;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}[i(0x10d)](c,d,e){const j=i;if(this['_customReader'])return!![];const f=e[j(0x10c)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}[i(0x112)]=css`
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