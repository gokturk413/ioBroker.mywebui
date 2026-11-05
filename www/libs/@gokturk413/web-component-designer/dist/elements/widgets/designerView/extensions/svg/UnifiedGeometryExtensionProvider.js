const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1a3))/0x1*(-parseInt(h(0x1a5))/0x2)+-parseInt(h(0x1a7))/0x3*(-parseInt(h(0x1a4))/0x4)+parseInt(h(0x1a6))/0x5*(parseInt(h(0x1af))/0x6)+-parseInt(h(0x1a2))/0x7*(-parseInt(h(0x1b0))/0x8)+parseInt(h(0x1ae))/0x9*(parseInt(h(0x1ac))/0xa)+-parseInt(h(0x1a9))/0xb*(-parseInt(h(0x1ad))/0xc)+-parseInt(h(0x1aa))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x29950));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function b(c,d){c=c-0x1a2;const e=a();let f=e[c];return f;}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function a(){const l=['1356yMhqfK','3717whUwJQ','36768UowtBX','16BPqBGa','1165668CMLOhN','237mFswff','4OpKkcf','2854LLAwdQ','30qqLOEL','443391TuGsIR','shouldExtend','12529DCcDpC','12608700CuKAUE','_customReader','3770tPLiTc'];a=function(){return l;};return a();}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){const i=b;this[i(0x1ab)]=c;}[j(0x1a8)](c,d,e){const k=j;if(this[k(0x1ab)])return!![];const f=e['node'];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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