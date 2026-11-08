function b(c,d){c=c-0xd0;const e=a();let f=e[c];return f;}function a(){const k=['images/expanderClose.svg','images/expander.svg','141155PvNtyv','1936342IhPtcS','1EqqgsG','6MTbABR','2256751WnZlwN','7451460qQKxrJ','1582608AKpyok','8334350cQpTCk','6vOsGix','1184868GyjNTX','children','expanded','11HWRHDM','node','images/file.svg'];a=function(){return k;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xd2))/0x1*(-parseInt(h(0xd1))/0x2)+parseInt(h(0xd3))/0x3*(parseInt(h(0xd9))/0x4)+-parseInt(h(0xd0))/0x5*(parseInt(h(0xd8))/0x6)+-parseInt(h(0xd4))/0x7+-parseInt(h(0xd6))/0x8+parseInt(h(0xd5))/0x9+-parseInt(h(0xd7))/0xa*(-parseInt(h(0xdc))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb3fa4));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
i.wb-icon > span.wb-badge {
  font-size: 70%;
  background-color: #486471;
}
div.wunderbaum {
  --wb-active-color-grayscale: #dddddd;
}
div.wunderbaum span.wb-node i.wb-icon {
  background-size: 12px 12px;
  background-position-x: 5px;
  background-position-y: 5px;
}
div.wunderbaum span.wb-node i.wb-expander {
  background-size: 12px 12px;
  background-position-x: 5px;
  background-position-y: 5px;
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0xe0),'expanderExpanded':assetsPath+i(0xdf),'folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+'images/folder.svg','doc':assetsPath+i(0xde)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c[j(0xdd)];if(d[j(0xdb)]||!d[j(0xda)]||!d['children']['length'])return null;return{'badge':d['children']['length']};}};