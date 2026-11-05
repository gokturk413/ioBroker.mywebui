function b(c,d){c=c-0x17f;const e=a();let f=e[c];return f;}function a(){const k=['images/expanderClose.svg','images/folder.svg','length','1545lnMIpH','3728774xjFhHK','children','46890aHBVqt','9301806BMnKcv','2628ARQKrM','16FleTad','2463248iXKzSI','2688018JUkLUD','1648173VqoMEu'];a=function(){return k;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x18a))/0x1*(-parseInt(h(0x187))/0x2)+parseInt(h(0x180))/0x3+parseInt(h(0x189))/0x4*(parseInt(h(0x184))/0x5)+parseInt(h(0x17f))/0x6+-parseInt(h(0x185))/0x7+parseInt(h(0x18b))/0x8+-parseInt(h(0x188))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4d721));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+'images/expander.svg','expanderExpanded':assetsPath+i(0x181),'folder':assetsPath+i(0x182),'folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+'images/folder.svg','doc':assetsPath+'images/file.svg'},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d[j(0x186)]||!d[j(0x186)][j(0x183)])return null;return{'badge':d[j(0x186)]['length']};}};