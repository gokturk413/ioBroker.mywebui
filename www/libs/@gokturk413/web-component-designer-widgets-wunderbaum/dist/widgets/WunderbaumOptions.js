const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x183))/0x1+parseInt(h(0x177))/0x2+-parseInt(h(0x180))/0x3+parseInt(h(0x17d))/0x4*(parseInt(h(0x182))/0x5)+-parseInt(h(0x17b))/0x6+parseInt(h(0x17f))/0x7*(parseInt(h(0x181))/0x8)+-parseInt(h(0x184))/0x9*(parseInt(h(0x178))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x519d0));function b(c,d){c=c-0x175;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';function a(){const k=['length','713914gGGNLQ','695570ZJCpFJ','images/folder.svg','images/expander.svg','2258880UaOsof','images/file.svg','4SmFzIg','node','3395406jVwJEZ','654369fySRTj','8nnhBve','1026770tWDeWr','507535HsigBA','81EwJagY','children'];a=function(){return k;};return a();}import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x17a),'expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+i(0x179),'doc':assetsPath+i(0x17c)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c[j(0x17e)];if(d['expanded']||!d[j(0x175)]||!d[j(0x175)][j(0x176)])return null;return{'badge':d['children'][j(0x176)]};}};