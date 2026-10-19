(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x168))/0x1+parseInt(h(0x163))/0x2*(-parseInt(h(0x166))/0x3)+-parseInt(h(0x16e))/0x4+parseInt(h(0x16b))/0x5+parseInt(h(0x164))/0x6*(parseInt(h(0x167))/0x7)+parseInt(h(0x165))/0x8+-parseInt(h(0x16c))/0x9*(parseInt(h(0x16d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9299c));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function a(){const k=['1117839iSjbve','_customReader','node','3704700sCUnQK','39843KXPBnt','4430NwQMwx','4105108SLmIeR','395806BzhAtB','2310LPWbJV','9167192PLezQy','9DruUNq','21399lsqIWS'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0x169)]=c;}['shouldExtend'](c,d,e){const j=b;if(this['_customReader'])return!![];const f=e[j(0x16a)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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