function b(c,d){c=c-0x16a;const e=a();let f=e[c];return f;}const i=b;function a(){const k=['children','1134938tLUkTA','2739uBBlDC','images/expanderClose.svg','8239330YkqvUm','3676OQhuua','4232680ORHhyG','7445081ZYuIVT','5291034NJESBL','length','26162824wJNzfR'];a=function(){return k;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x171))/0x1+parseInt(h(0x16a))/0x2*(parseInt(h(0x172))/0x3)+parseInt(h(0x16b))/0x4+-parseInt(h(0x174))/0x5+parseInt(h(0x16d))/0x6+parseInt(h(0x16c))/0x7+-parseInt(h(0x16f))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdb565));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';export const defaultStyle=css`
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
}`;export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+'images/expander.svg','expanderExpanded':assetsPath+i(0x173),'folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+'images/folder.svg','doc':assetsPath+'images/file.svg'},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const j=i,d=c['node'];if(d['expanded']||!d['children']||!d['children'][j(0x16e)])return null;return{'badge':d[j(0x170)][j(0x16e)]};}};