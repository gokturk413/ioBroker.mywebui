function a(){const u=['4hzVRHw','onblur','_rightInput','2684665OzgHnf','valueTop','16ZMEAXt','_valueTop','1288368JCfwTI','_topInput','_valueRight','_leftInput','emit','_valueBottom','12SIfDuM','3583867APBbeA','unsetValue','key','129842mKDIwK','valueLeftChanged','valueLeft','1437402zkuOLB','property','valueRightChanged','template','valueBottomChanged','1600xpjhWe','_updateValue','ready','Enter','6LsuEvv','9978912QCuOre','_valueLeft','valueBottom','value','node-projects-thickness-editor','45452PmWyAb','onkeyup','valueTopChanged'];a=function(){return u;};return a();}function b(c,d){c=c-0xb7;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xd7))/0x1*(-parseInt(h(0xd3))/0x2)+parseInt(h(0xda))/0x3+parseInt(h(0xc6))/0x4*(-parseInt(h(0xc9))/0x5)+parseInt(h(0xbd))/0x6*(-parseInt(h(0xd4))/0x7)+-parseInt(h(0xcb))/0x8*(-parseInt(h(0xcd))/0x9)+parseInt(h(0xb9))/0xa*(parseInt(h(0xc3))/0xb)+parseInt(h(0xbe))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x69058));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
  :host {
    margin: 4px;
    margin-left: auto;
    margin-right: auto;
  }
  #container {
    display: grid;
    grid-template-columns: minmax(30px, 40px) minmax(30px, 60px) minmax(30px, 40px);
    grid-template-rows: auto;
    grid-template-areas: 
          "  .   top     ."
          "left middle right"
          "  .  bottom   .";
    column-gap: 2px;
    row-gap: 2px;
  }
  input {
    width: 20px;
    text-align: center;
    font-size: 10px;
    height: 20px;
    padding: 0;
  }
  #left {
    grid-area: left;
    justify-self: end;
  }
  #top {
    grid-area: top;
    align-self: end;
    justify-self: center;
  }
  #right {
    grid-area: right;
    justify-self: start;
  }
  #bottom {
    grid-area: bottom;
    align-self: start;
    justify-self: center;
  }
  #rect {
    grid-area: middle;
    border: 1px solid var(--wcd-thickness-editor-border-color, black);
    background: var(--wcd-thickness-editor-background, lightgray);
  }
  `;static [i(0xb7)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];[i(0xce)];[i(0xc8)];['_bottomInput'];[i(0xbf)];get[i(0xd9)](){const j=i;return this[j(0xbf)];}set['valueLeft'](c){const k=i,d=this[k(0xbf)];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0xd8)]=new TypedEvent();[i(0xcc)];get[i(0xca)](){return this['_valueTop'];}set['valueTop'](c){const l=i,d=this[l(0xcc)];this['_valueTop']=c,d!==c&&(this[l(0xba)](),this[l(0xc5)]['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();[i(0xcf)];get['valueRight'](){return this['_valueRight'];}set['valueRight'](c){const m=i,d=this[m(0xcf)];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this[m(0xdc)][m(0xd1)]({'newValue':c,'oldValue':d}));}[i(0xdc)]=new TypedEvent();['_valueBottom'];get['valueBottom'](){return this['_valueBottom'];}set[i(0xc0)](c){const n=i,d=this[n(0xd2)];this[n(0xd2)]=c,d!==c&&(this[n(0xba)](),this[n(0xb8)][n(0xd1)]({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0xdb)];[i(0xd5)];[i(0xba)](){const o=i;this['_leftInput']['value']=this[o(0xd9)],this['_topInput'][o(0xc1)]=this['valueTop'],this[o(0xc8)]['value']=this['valueRight'],this['_bottomInput'][o(0xc1)]=this['_valueBottom'];}[i(0xbb)](){const p=i;this['_parseAttributesToProperties'](),this[p(0xd0)]=this['_getDomElement']('left'),this['_topInput']=this['_getDomElement']('top'),this[p(0xc8)]=this['_getDomElement']('right'),this['_bottomInput']=this['_getDomElement']('bottom'),this['_leftInput'][p(0xc4)]=c=>{const q=p;if(c[q(0xd6)]==='Enter')this[q(0xbf)]=this[q(0xd0)][q(0xc1)];},this['_topInput']['onkeyup']=c=>{const r=p;if(c['key']===r(0xbc))this['_valueTop']=this['_topInput'][r(0xc1)];},this[p(0xc8)][p(0xc4)]=c=>{const s=p;if(c['key']===s(0xbc))this['_valueRight']=this['_rightInput'][s(0xc1)];},this['_bottomInput']['onkeyup']=c=>{const t=p;if(c[t(0xd6)]==='Enter')this['_valueBottom']=this['_bottomInput'][t(0xc1)];},this[p(0xd0)]['onblur']=c=>this['_valueLeft']=this['_leftInput']['value'],this[p(0xce)]['onblur']=c=>this['_valueTop']=this['_topInput'][p(0xc1)],this['_rightInput'][p(0xc7)]=c=>this[p(0xcf)]=this[p(0xc8)][p(0xc1)],this['_bottomInput'][p(0xc7)]=c=>this[p(0xd2)]=this['_bottomInput'][p(0xc1)],this['_updateValue']();}}customElements['define'](i(0xc2),ThicknessEditor);