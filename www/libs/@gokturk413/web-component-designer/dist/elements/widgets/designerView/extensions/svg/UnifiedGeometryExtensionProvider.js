function b(c,d){c=c-0xe2;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xe4))/0x1+-parseInt(h(0xec))/0x2+parseInt(h(0xe5))/0x3+-parseInt(h(0xe6))/0x4+-parseInt(h(0xe7))/0x5+-parseInt(h(0xe9))/0x6+parseInt(h(0xe8))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcaefa));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function a(){const l=['style','shouldExtend','node','507249xdJcZq','1803855MCSTvS','6343664oQJsNP','8250705NbQdMK','24627344UXgzxO','2238834ktvJbY','getExtension','_customReader','372608xKFaQK'];a=function(){return l;};return a();}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}[i(0xe2)](c,d,e){const j=i;if(this['_customReader'])return!![];const f=e[j(0xe3)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[i(0xea)](c,d,e){const k=i;return new UnifiedGeometryExtension(c,d,e,this[k(0xeb)]);}[i(0xed)]=css`
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