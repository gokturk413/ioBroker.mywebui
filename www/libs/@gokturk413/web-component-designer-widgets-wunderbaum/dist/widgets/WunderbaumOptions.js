const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x13a))/0x1*(-parseInt(h(0x13d))/0x2)+parseInt(h(0x137))/0x3+parseInt(h(0x143))/0x4*(-parseInt(h(0x144))/0x5)+parseInt(h(0x13e))/0x6*(parseInt(h(0x13f))/0x7)+-parseInt(h(0x134))/0x8*(parseInt(h(0x133))/0x9)+parseInt(h(0x13b))/0xa*(-parseInt(h(0x135))/0xb)+-parseInt(h(0x142))/0xc*(-parseInt(h(0x138))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7927b));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;function b(c,d){c=c-0x133;const e=a();let f=e[c];return f;}function a(){const k=['images/expander.svg','images/file.svg','12tLbTkk','4kVQvBb','4172245UyFYnP','27PjjWJl','876696RuGTwI','11Qktzuq','images/folder.svg','2843826QqujVH','12173421jTuIRm','length','41OCSzib','7667790wNXpZG','children','7858HBWihN','30VCHFQo','984158npoboW'];a=function(){return k;};return a();}export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x140),'expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+i(0x136),'folderOpen':assetsPath+i(0x136),'doc':assetsPath+i(0x141)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d['children']||!d[j(0x13c)]['length'])return null;return{'badge':d[j(0x13c)][j(0x139)]};}};