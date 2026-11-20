const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x194))/0x1+parseInt(h(0x195))/0x2+parseInt(h(0x19c))/0x3+-parseInt(h(0x191))/0x4*(parseInt(h(0x197))/0x5)+parseInt(h(0x192))/0x6*(parseInt(h(0x19b))/0x7)+-parseInt(h(0x193))/0x8+-parseInt(h(0x196))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8224b));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';function b(c,d){c=c-0x191;const e=a();let f=e[c];return f;}function a(){const k=['2642832TPQEBk','length','1304aSWcVk','6dVecky','4216296GRtIAa','97961tCzriU','1329182WcsXsr','3259395OIQOUV','4830whaTEz','images/expander.svg','children','images/folder.svg','2027207nPIDPs'];a=function(){return k;};return a();}export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x198),'expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+i(0x19a),'folderLazy':assetsPath+i(0x19a),'folderOpen':assetsPath+i(0x19a),'doc':assetsPath+'images/file.svg'},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d[j(0x199)]||!d[j(0x199)]['length'])return null;return{'badge':d[j(0x199)][j(0x19d)]};}};