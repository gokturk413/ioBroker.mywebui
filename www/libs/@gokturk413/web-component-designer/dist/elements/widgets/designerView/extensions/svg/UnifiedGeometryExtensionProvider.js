function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf9))/0x1*(-parseInt(h(0xfb))/0x2)+-parseInt(h(0x101))/0x3*(parseInt(h(0xf7))/0x4)+parseInt(h(0xfd))/0x5*(-parseInt(h(0xfa))/0x6)+parseInt(h(0x105))/0x7*(-parseInt(h(0x100))/0x8)+-parseInt(h(0x103))/0x9*(parseInt(h(0xf8))/0xa)+-parseInt(h(0xfc))/0xb+-parseInt(h(0x102))/0xc*(-parseInt(h(0x104))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x247b6));import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';function a(){const j=['_customReader','node','8AmXLjl','31953LpTqbq','12vOHAgo','761103CHKTLZ','15975193qwEkuE','1236585JOfIMg','44CVDUtS','20PqzPqt','2Ntrxhc','20502tnUaPb','140368QnCCNO','3207545YbpRfr','270huEWPe'];a=function(){return j;};return a();}import{css}from'@node-projects/base-custom-webcomponent';export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){const i=b;if(this[i(0xfe)])return!![];const f=e[i(0xff)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}['getExtension'](c,d,e){return new UnifiedGeometryExtension(c,d,e,this['_customReader']);}['style']=css`
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