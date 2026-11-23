const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x151))/0x1*(-parseInt(h(0x15b))/0x2)+parseInt(h(0x159))/0x3+-parseInt(h(0x15a))/0x4*(-parseInt(h(0x158))/0x5)+parseInt(h(0x15c))/0x6+-parseInt(h(0x153))/0x7*(-parseInt(h(0x156))/0x8)+parseInt(h(0x154))/0x9*(parseInt(h(0x150))/0xa)+-parseInt(h(0x157))/0xb*(parseInt(h(0x14f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9ade4));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function a(){const k=['_customReader','521626kughCS','225eXUxOP','shouldExtend','136wijPgN','350361dTTgLd','2967755SBhbAl','1771044EKPtwX','4jQZiMT','3024qvJGmC','861234jqhrBN','1284oCUXDz','507290xpgiDr','119rrpXBF'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x14f;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{[i(0x152)];constructor(c){const j=i;this[j(0x152)]=c;}[i(0x155)](c,d,e){if(this['_customReader'])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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