(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x12e))/0x1*(-parseInt(h(0x12c))/0x2)+parseInt(h(0x12f))/0x3+-parseInt(h(0x12d))/0x4*(-parseInt(h(0x12a))/0x5)+-parseInt(h(0x127))/0x6*(-parseInt(h(0x128))/0x7)+-parseInt(h(0x129))/0x8*(-parseInt(h(0x131))/0x9)+-parseInt(h(0x132))/0xa+-parseInt(h(0x12b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6bae8));import{css}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../Constants.js';function a(){const j=['8rIMSRk','7265Qezhjl','8240694ucPOKv','250412kvYiCX','340xwpjFW','7eHAfEB','1013661JeoGcK','length','3258198TVCQSo','7705060ZnMquq','children','260868aKAhmC','42ozcSzX'];a=function(){return j;};return a();}export const defaultStyle=css`
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
}`;function b(c,d){c=c-0x126;const e=a();let f=e[c];return f;}export const defaultOptions={'element':null,'debugLevel':0x0,'scrollIntoViewOnExpandClick':![],'iconMap':{'expanderCollapsed':assetsPath+'images/expander.svg','expanderExpanded':assetsPath+'images/expanderClose.svg','folder':assetsPath+'images/folder.svg','folderLazy':assetsPath+'images/folder.svg','folderOpen':assetsPath+'images/folder.svg','doc':assetsPath+'images/file.svg'},'quicksearch':!![],'checkbox':![],'source':[],'header':![],'iconBadge':c=>{const i=b,d=c['node'];if(d['expanded']||!d[i(0x126)]||!d['children']['length'])return null;return{'badge':d['children'][i(0x130)]};}};