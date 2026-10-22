function a(){const l=['getExtension','1120166DhdNPO','191527vbaszO','node','51196XOTDLI','893790uTVhSk','128GDOBjz','705054yLHlsd','592780LjxwmI','2387516CLMaQQ','_customReader'];a=function(){return l;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x105))/0x1+-parseInt(h(0x102))/0x2+-parseInt(h(0xfd))/0x3+parseInt(h(0xff))/0x4+-parseInt(h(0xfe))/0x5+parseInt(h(0xfb))/0x6+-parseInt(h(0x103))/0x7*(-parseInt(h(0xfc))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4e687));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xfb;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{[i(0x100)];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){const j=i;if(this[j(0x100)])return!![];const f=e[j(0x104)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0x101)](c,d,e){const k=i;return new UnifiedGeometryExtension(c,d,e,this[k(0x100)]);}['style']=css`
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