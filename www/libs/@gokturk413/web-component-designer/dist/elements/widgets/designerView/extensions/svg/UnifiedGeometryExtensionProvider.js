const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xc6))/0x1*(parseInt(h(0xc1))/0x2)+-parseInt(h(0xbe))/0x3*(-parseInt(h(0xbf))/0x4)+-parseInt(h(0xc3))/0x5+-parseInt(h(0xc9))/0x6*(parseInt(h(0xc8))/0x7)+-parseInt(h(0xca))/0x8+-parseInt(h(0xcb))/0x9*(-parseInt(h(0xc7))/0xa)+-parseInt(h(0xc2))/0xb*(-parseInt(h(0xc0))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x59cea));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function a(){const k=['420SjxXuq','7ikFohT','2868594VkDnhj','5505248yqIFdq','91071pumBni','shouldExtend','96frYHmc','83152HiUZod','16128732bIGmOl','280842vjMeXX','11VdldlD','3096640pAIYLk','style','_customReader','2zxbGNM'];a=function(){return k;};return a();}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xbe;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{[i(0xc5)];constructor(c){this['_customReader']=c;}[i(0xcc)](c,d,e){const j=i;if(this[j(0xc5)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}[i(0xc4)]=css`
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