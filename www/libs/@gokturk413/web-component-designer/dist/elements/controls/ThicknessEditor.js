function a(){const u=['2200552IMtuNQ','_valueRight','valueRight','key','valueTop','_rightInput','top','_valueTop','valueRightChanged','4200518rRPFbt','property','4ifsOKK','1RMMgnn','4706916BsgeUN','45dfDsrI','bottom','valueBottom','_parseAttributesToProperties','_valueLeft','valueBottomChanged','_topInput','ready','onkeyup','_leftInput','_getDomElement','_valueBottom','_bottomInput','valueLeft','emit','value','Enter','1845185XBgDFa','2379054PrjZjs','3765747IuaciE','valueTopChanged','style','onblur','_updateValue','29469190Sujxhj'];a=function(){return u;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd6))/0x1*(-parseInt(h(0xea))/0x2)+parseInt(h(0xeb))/0x3*(parseInt(h(0xd5))/0x4)+-parseInt(h(0xe9))/0x5+parseInt(h(0xd7))/0x6+-parseInt(h(0xd3))/0x7+-parseInt(h(0xf1))/0x8*(-parseInt(h(0xd8))/0x9)+-parseInt(h(0xf0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa81c1));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xce;const e=a();let f=e[c];return f;}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0xed)]=css`
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
  `;static ['template']=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0xe1)];[i(0xde)];['_rightInput'];['_bottomInput'];['_valueLeft'];get['valueLeft'](){const j=i;return this[j(0xdc)];}set[i(0xe5)](c){const k=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged'][k(0xe6)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0xd1)];get[i(0xce)](){return this['_valueTop'];}set['valueTop'](c){const l=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this['_updateValue'](),this[l(0xec)][l(0xe6)]({'newValue':c,'oldValue':d}));}[i(0xec)]=new TypedEvent();[i(0xf2)];get[i(0xf3)](){return this['_valueRight'];}set['valueRight'](c){const m=i,d=this[m(0xf2)];this['_valueRight']=c,d!==c&&(this[m(0xef)](),this['valueRightChanged'][m(0xe6)]({'newValue':c,'oldValue':d}));}[i(0xd2)]=new TypedEvent();['_valueBottom'];get[i(0xda)](){return this['_valueBottom'];}set['valueBottom'](c){const n=i,d=this[n(0xe3)];this['_valueBottom']=c,d!==c&&(this['_updateValue'](),this[n(0xdd)][n(0xe6)]({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0xd4)];['unsetValue'];[i(0xef)](){const o=i;this[o(0xe1)][o(0xe7)]=this['valueLeft'],this['_topInput']['value']=this[o(0xce)],this[o(0xcf)][o(0xe7)]=this['valueRight'],this[o(0xe4)]['value']=this[o(0xe3)];}[i(0xdf)](){const p=i;this[p(0xdb)](),this[p(0xe1)]=this[p(0xe2)]('left'),this[p(0xde)]=this['_getDomElement'](p(0xd0)),this[p(0xcf)]=this['_getDomElement']('right'),this[p(0xe4)]=this[p(0xe2)](p(0xd9)),this['_leftInput']['onkeyup']=c=>{const q=p;if(c[q(0xf4)]==='Enter')this['_valueLeft']=this['_leftInput']['value'];},this[p(0xde)]['onkeyup']=c=>{const r=p;if(c[r(0xf4)]===r(0xe8))this['_valueTop']=this[r(0xde)][r(0xe7)];},this[p(0xcf)]['onkeyup']=c=>{const s=p;if(c[s(0xf4)]==='Enter')this['_valueRight']=this['_rightInput'][s(0xe7)];},this[p(0xe4)][p(0xe0)]=c=>{const t=p;if(c[t(0xf4)]===t(0xe8))this['_valueBottom']=this['_bottomInput'][t(0xe7)];},this['_leftInput']['onblur']=c=>this['_valueLeft']=this['_leftInput']['value'],this[p(0xde)]['onblur']=c=>this['_valueTop']=this[p(0xde)]['value'],this[p(0xcf)]['onblur']=c=>this['_valueRight']=this['_rightInput'][p(0xe7)],this['_bottomInput'][p(0xee)]=c=>this['_valueBottom']=this[p(0xe4)]['value'],this[p(0xef)]();}}customElements['define']('node-projects-thickness-editor',ThicknessEditor);