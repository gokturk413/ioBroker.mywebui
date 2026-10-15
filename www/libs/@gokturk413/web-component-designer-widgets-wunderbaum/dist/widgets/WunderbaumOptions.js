const i=b;function a(){const k=['2155ZujBPY','images/file.svg','9cnojff','children','5607952oUZZAN','1483982vVuVuC','4szHUsn','images/expander.svg','550923ZnCYym','images/folder.svg','length','814835omKIjx','13458TbIZxy','240870OTCpLe','17009710XgsZwe','images/expanderClose.svg'];a=function(){return k;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x183))/0x1+-parseInt(h(0x17d))/0x2+-parseInt(h(0x180))/0x3*(-parseInt(h(0x17e))/0x4)+parseInt(h(0x178))/0x5*(parseInt(h(0x184))/0x6)+-parseInt(h(0x175))/0x7+-parseInt(h(0x17c))/0x8+-parseInt(h(0x17a))/0x9*(-parseInt(h(0x176))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8880b));function b(c,d){c=c-0x175;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x17f),'expanderExpanded':assetsPath+i(0x177),'folder':assetsPath+i(0x181),'folderLazy':assetsPath+i(0x181),'folderOpen':assetsPath+'images/folder.svg','doc':assetsPath+i(0x179)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d[j(0x17b)]||!d['children'][j(0x182)])return null;return{'badge':d[j(0x17b)]['length']};}};