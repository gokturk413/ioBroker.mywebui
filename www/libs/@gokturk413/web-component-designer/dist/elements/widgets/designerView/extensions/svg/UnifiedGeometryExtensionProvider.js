const i=b;function b(c,d){c=c-0x113;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x11c))/0x1+-parseInt(h(0x117))/0x2*(-parseInt(h(0x115))/0x3)+parseInt(h(0x11d))/0x4+-parseInt(h(0x11b))/0x5+-parseInt(h(0x114))/0x6+parseInt(h(0x113))/0x7+parseInt(h(0x116))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeb746));function a(){const m=['style','getExtension','_customReader','1544135jwYCBh','58489WSRHzD','6065316VuAKBT','5894BIPZxk','4406034xXOdkY','46401PGxcTB','184224hNoDlV','68cFeGkU'];a=function(){return m;};return a();}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{[i(0x11a)];constructor(c){const j=i;this[j(0x11a)]=c;}['shouldExtend'](c,d,e){const k=i;if(this[k(0x11a)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0x119)](c,d,e){const l=i;return new UnifiedGeometryExtension(c,d,e,this[l(0x11a)]);}[i(0x118)]=css`
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