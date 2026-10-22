const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x8b))/0x1+parseInt(h(0x88))/0x2+parseInt(h(0x89))/0x3+-parseInt(h(0x85))/0x4+parseInt(h(0x8e))/0x5+-parseInt(h(0x86))/0x6+-parseInt(h(0x87))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80b26));function a(){const l=['node','getExtension','2684340SWehbO','style','1264032lbfFDH','1324908cvdcZO','4007437UgBhtH','1821728cWyJEv','1456017CLcfsE','_customReader','296612TQIONp'];a=function(){return l;};return a();}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';function b(c,d){c=c-0x85;const e=a();let f=e[c];return f;}import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){const i=b;if(this[i(0x8a)])return!![];const f=e[i(0x8c)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[j(0x8d)](c,d,e){const k=j;return new UnifiedGeometryExtension(c,d,e,this[k(0x8a)]);}[j(0x8f)]=css`
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