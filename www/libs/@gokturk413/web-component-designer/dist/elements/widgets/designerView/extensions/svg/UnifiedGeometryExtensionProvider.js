const i=b;function a(){const m=['54foJiqb','41718DURGHw','2212310VqmglP','node','50PHpQYo','512JlWTzL','156688oJUtFi','8384aoWLes','44peUEqD','6450856SZHcvR','435MCzlzb','_customReader','style','9704484zRVpkm','4998840WdvsNw'];a=function(){return m;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x161))/0x1*(-parseInt(h(0x164))/0x2)+parseInt(h(0x16b))/0x3+parseInt(h(0x166))/0x4+parseInt(h(0x167))/0x5*(parseInt(h(0x16d))/0x6)+parseInt(h(0x163))/0x7*(parseInt(h(0x162))/0x8)+parseInt(h(0x16c))/0x9*(-parseInt(h(0x16e))/0xa)+parseInt(h(0x165))/0xb*(-parseInt(h(0x16a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeb51b));function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{[i(0x168)];constructor(c){const j=i;this[j(0x168)]=c;}['shouldExtend'](c,d,e){const k=i;if(this[k(0x168)])return!![];const f=e[k(0x160)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const l=i;return new UnifiedGeometryExtension(c,d,e,this[l(0x168)]);}[i(0x169)]=css`
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