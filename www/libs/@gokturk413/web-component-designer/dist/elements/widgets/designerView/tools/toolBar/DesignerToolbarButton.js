const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x16a))/0x1*(-parseInt(h(0x173))/0x2)+parseInt(h(0x170))/0x3+-parseInt(h(0x17c))/0x4+-parseInt(h(0x17e))/0x5+parseInt(h(0x166))/0x6+-parseInt(h(0x179))/0x7+parseInt(h(0x16e))/0x8*(parseInt(h(0x169))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x764d9));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const p=['5202300iJMjWd','_img','tools','169083UrFdYO','31ZaOtQh','_div','onpointerdown','backgroundColor','432xQPjPK','node-projects-designer-toolbar-button','2719161LRsHYy','_getDomElement','title','5794sCqnrM','_longPress','src','setActiveTool','onpointerup','host','6516727xABWXc','showTool','getRootNode','1307028zoNLkj','lightgreen','4779205hGokdX','currentToolOnButton','getOwnPropertyNames','showPopup','style','div'];a=function(){return p;};return a();}function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}export class DesignerToolbarButton extends BaseCustomWebComponentConstructorAppend{static [i(0x164)]=css`
    div {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center; 
      align-items: center;
      background-color: inherit;
    }

    div:hover {
      background-color: darkgray;
    }

    img {
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      -webkit-user-drag: none;
    }    
    `;static ['template']=html`<div id="div"><img id="img"></div>`;[i(0x168)];['popup'];[i(0x17f)];[i(0x167)];['_div'];[i(0x174)];constructor(c,d){const j=i;super(),this[j(0x168)]=d,this[j(0x167)]=this[j(0x171)]('img'),this['_div']=this['_getDomElement'](j(0x165)),this['_div'][j(0x16c)]=()=>{const k=j;if(this['currentToolOnButton'])this[k(0x17b)]()['host']['setTool'](this[k(0x17f)]),setTimeout(()=>{c['clickOverlay']['focus']();},0x32),this['popup']&&(this[k(0x174)]=setTimeout(()=>{const l=k;this['_longPress']=null,this['getRootNode']()['host'][l(0x163)](this);},0xc8));else{if(this['popup'])this['getRootNode']()[k(0x178)][k(0x163)](this);}},this[j(0x16b)][j(0x177)]=()=>{const m=j;this[m(0x174)]&&(clearTimeout(this[m(0x174)]),this[m(0x174)]=null);},this[j(0x17a)](Object[j(0x180)](d)[0x0]);}['showTool'](c){const n=i,d=this[n(0x168)][c];d&&(this['_img'][n(0x172)]=c,this[n(0x167)][n(0x175)]=d['icon'],this['currentToolOnButton']=c);}[i(0x176)](c){const o=i;this['showTool'](c);const d=this[o(0x168)][c];d?this[o(0x16b)][o(0x164)][o(0x16d)]=o(0x17d):this['_div'][o(0x164)]['backgroundColor']='';}}customElements['define'](i(0x16f),DesignerToolbarButton);