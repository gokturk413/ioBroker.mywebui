const i=b;function a(){const k=['children','2CFySfA','images/folder.svg','4733952tIbkfg','images/expander.svg','289257hUUPHc','4joiQJh','length','1137363XUqphw','2676260exbcOK','1962810RgtoGo','1122456dahsaL','1022042uHZywh','images/file.svg'];a=function(){return k;};return a();}function b(c,d){c=c-0xd4;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd8))/0x1*(parseInt(h(0xd4))/0x2)+-parseInt(h(0xdb))/0x3*(-parseInt(h(0xd9))/0x4)+-parseInt(h(0xdc))/0x5+-parseInt(h(0xde))/0x6+parseInt(h(0xdf))/0x7+parseInt(h(0xd6))/0x8+parseInt(h(0xdd))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4ef30));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0xd7),'expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+i(0xd5),'folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+i(0xd5),'doc':assetsPath+i(0xe0)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d[j(0xe1)]||!d['children'][j(0xda)])return null;return{'badge':d['children']['length']};}};