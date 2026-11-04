const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x114))/0x1*(parseInt(h(0x11a))/0x2)+parseInt(h(0x11c))/0x3*(parseInt(h(0x118))/0x4)+parseInt(h(0x121))/0x5*(-parseInt(h(0x117))/0x6)+parseInt(h(0x11f))/0x7+-parseInt(h(0x119))/0x8*(parseInt(h(0x11b))/0x9)+-parseInt(h(0x116))/0xa*(-parseInt(h(0x120))/0xb)+parseInt(h(0x113))/0xc*(parseInt(h(0x122))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7e884));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x113;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{[i(0x123)];constructor(c){const j=i;this[j(0x123)]=c;}[i(0x11e)](c,d,e){const k=i;if(this[k(0x123)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0x11d)](c,d,e){const l=i;return new UnifiedGeometryExtension(c,d,e,this[l(0x123)]);}[i(0x115)]=css`
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
  `;}function a(){const m=['_customReader','204PGpcgE','8353jRKbOx','style','20EXSXtP','4855596dgBVPO','3148mdPvKd','16bQMAeL','98kvfxMP','4594059oAzzZt','2877GzTdUK','getExtension','shouldExtend','4812339MMQmMn','4416676PALhcz','5nWVbMP','391911maStco'];a=function(){return m;};return a();}