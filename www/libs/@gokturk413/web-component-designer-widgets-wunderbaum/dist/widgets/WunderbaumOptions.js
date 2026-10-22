const i=b;function b(c,d){c=c-0x1e6;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e8))/0x1*(-parseInt(h(0x1f3))/0x2)+parseInt(h(0x1f1))/0x3+-parseInt(h(0x1e6))/0x4+parseInt(h(0x1ec))/0x5+parseInt(h(0x1eb))/0x6*(parseInt(h(0x1f2))/0x7)+parseInt(h(0x1ed))/0x8+-parseInt(h(0x1f0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68c76));function a(){const k=['574080nMEjmr','895069Qqnksw','766qUNbaw','1515100dbjTry','images/file.svg','1011pkiNgR','length','images/expander.svg','6aAxFDW','3332650rwnhkI','1680672TchZvr','images/folder.svg','children','6975945SZRLGg'];a=function(){return k;};return a();}import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x1ea),'expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+i(0x1ee),'doc':assetsPath+i(0x1e7)},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d[j(0x1ef)]||!d[j(0x1ef)]['length'])return null;return{'badge':d['children'][j(0x1e9)]};}};