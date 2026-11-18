const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xaf))/0x1+-parseInt(h(0xae))/0x2*(-parseInt(h(0xb5))/0x3)+-parseInt(h(0xad))/0x4*(parseInt(h(0xb3))/0x5)+-parseInt(h(0xa8))/0x6+-parseInt(h(0xa9))/0x7+parseInt(h(0xb6))/0x8*(parseInt(h(0xb1))/0x9)+-parseInt(h(0xac))/0xa*(-parseInt(h(0xb0))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x53255));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function a(){const m=['1375984Ivdfjt','2USPqwV','331687LOCHIR','1298gsiClf','18SnoYRo','style','5HdYWRi','_customReader','1311243hVcmEV','1157960cDziTf','2109102sMBjJN','4192902QIGMBs','node','shouldExtend','105100pvQNHt'];a=function(){return m;};return a();}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xa8;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0xb4)]=c;}[j(0xab)](c,d,e){const k=j;if(this['_customReader'])return!![];const f=e[k(0xaa)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const l=j;return new UnifiedGeometryExtension(c,d,e,this[l(0xb4)]);}[j(0xb2)]=css`
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