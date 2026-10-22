const i=b;function a(){const k=['550XrbWID','63182uEsBfu','110534775WOedHT','length','children','140145OoNXCB','images/folder.svg','3205025mJMDiO','140aeXBOy','1246BrTQaK','40EOAOrn','27tonnWz','images/expanderClose.svg','12lLtffC','5963780jYZqVt','images/expander.svg','446124NThawt','1509nEDBHC'];a=function(){return k;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e6))/0x1*(parseInt(h(0x1de))/0x2)+parseInt(h(0x1ec))/0x3*(-parseInt(h(0x1dd))/0x4)+parseInt(h(0x1dc))/0x5*(-parseInt(h(0x1e2))/0x6)+parseInt(h(0x1e8))/0x7*(-parseInt(h(0x1df))/0x8)+parseInt(h(0x1e0))/0x9*(-parseInt(h(0x1e3))/0xa)+-parseInt(h(0x1e7))/0xb*(parseInt(h(0x1e5))/0xc)+parseInt(h(0x1e9))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8863));function b(c,d){c=c-0x1db;const e=a();let f=e[c];return f;}import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+i(0x1e4),'expanderExpanded':assetsPath+i(0x1e1),'folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+i(0x1db),'doc':assetsPath+'images/file.svg'},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d['children']||!d[j(0x1eb)][j(0x1ea)])return null;return{'badge':d[j(0x1eb)][j(0x1ea)]};}};