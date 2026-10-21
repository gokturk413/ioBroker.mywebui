const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xe9))/0x1*(parseInt(h(0xe8))/0x2)+parseInt(h(0xeb))/0x3+parseInt(h(0xea))/0x4+-parseInt(h(0xe7))/0x5+-parseInt(h(0xed))/0x6+parseInt(h(0xe6))/0x7+-parseInt(h(0xee))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa28b9));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function b(c,d){c=c-0xe5;const e=a();let f=e[c];return f;}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{[i(0xec)];constructor(c){const j=i;this[j(0xec)]=c;}['shouldExtend'](c,d,e){const k=i;if(this['_customReader'])return!![];const f=e[k(0xe5)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){const l=i;return new UnifiedGeometryExtension(c,d,e,this[l(0xec)]);}['style']=css`
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
  `;}function a(){const m=['50cNauqg','3762520CBXTCE','342339xtGANY','_customReader','3782244cFtZdj','8231192mCjjyY','node','4377289DOXhRq','3221560gsRcWL','51572ZFzCiM'];a=function(){return m;};return a();}