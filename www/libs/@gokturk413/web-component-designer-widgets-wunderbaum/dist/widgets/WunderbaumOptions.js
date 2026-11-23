const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x11e))/0x1+parseInt(h(0x118))/0x2+-parseInt(h(0x11b))/0x3+parseInt(h(0x120))/0x4+-parseInt(h(0x11d))/0x5+-parseInt(h(0x119))/0x6*(parseInt(h(0x11a))/0x7)+parseInt(h(0x11c))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb8d5f));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';function b(c,d){c=c-0x118;const e=a();let f=e[c];return f;}function a(){const k=['images/folder.svg','183136ysbYGg','7237266NAXGOT','7LaBqRj','1792047ABqCYk','16841528AlSyzR','6219800mhMqHK','1062417RdauNF','images/expander.svg','2181724pkuRii','node','length','children','images/file.svg'];a=function(){return k;};return a();}export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x11f),'expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+i(0x125),'folderOpen':assetsPath+i(0x125),'doc':assetsPath+i(0x124)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c[j(0x121)];if(d['expanded']||!d[j(0x123)]||!d['children']['length'])return null;return{'badge':d[j(0x123)][j(0x122)]};}};