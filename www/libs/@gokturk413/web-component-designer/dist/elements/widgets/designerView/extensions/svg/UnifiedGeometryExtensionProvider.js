const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x140))/0x1*(parseInt(h(0x13e))/0x2)+parseInt(h(0x13f))/0x3*(parseInt(h(0x13c))/0x4)+-parseInt(h(0x132))/0x5+-parseInt(h(0x137))/0x6+-parseInt(h(0x136))/0x7+parseInt(h(0x133))/0x8*(parseInt(h(0x139))/0x9)+-parseInt(h(0x13d))/0xa*(-parseInt(h(0x135))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd69b6));function b(c,d){c=c-0x132;const e=a();let f=e[c];return f;}import{UnifiedGeometryExtension}from'./UnifiedGeometryExtension.js';import{isVisualSvgElement}from'../../../../helper/SvgHelper.js';import{css}from'@node-projects/base-custom-webcomponent';function a(){const l=['_customReader','280472dGjDgX','86300FIOfSX','132212gqAlVf','72JmdISP','3aHBbCh','5928815QBKoyp','536WarJjX','node','572IfUsUf','770392XbYrVX','3906798zfXvzn','style','119916ICVKlZ','getExtension'];a=function(){return l;};return a();}export class UnifiedGeometryExtensionProvider{['_customReader'];constructor(c){this['_customReader']=c;}['shouldExtend'](c,d,e){const i=b;if(this[i(0x13b)])return!![];const f=e[i(0x134)];if(f instanceof SVGPathElement||f instanceof SVGRectElement||f instanceof SVGForeignObjectElement||f instanceof SVGLineElement||f instanceof SVGEllipseElement||f instanceof SVGCircleElement||f instanceof SVGPolygonElement||f instanceof SVGPolylineElement)return isVisualSvgElement(f);return![];}[j(0x13a)](c,d,e){const k=j;return new UnifiedGeometryExtension(c,d,e,this[k(0x13b)]);}[j(0x138)]=css`
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