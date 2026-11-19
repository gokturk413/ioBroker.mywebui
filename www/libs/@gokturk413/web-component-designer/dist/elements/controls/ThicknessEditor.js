function b(c,d){c=c-0xee;const e=a();let f=e[c];return f;}const i=b;function a(){const t=['_updateValue','value','_valueTop','left','8350146cSOeSS','node-projects-thickness-editor','valueTop','Enter','4387537XZQSoW','valueRight','_bottomInput','property','key','_getDomElement','valueTopChanged','valueLeft','_leftInput','emit','_valueLeft','285689tZWOHC','_valueBottom','1355163PjdRrk','valueBottom','_topInput','_rightInput','20SjbKto','_valueRight','30RFkTnQ','6pWdQsg','4601548Syolop','valueLeftChanged','top','onblur','unsetValue','ready','onkeyup','1002966mTogix','8318976utPSxA'];a=function(){return t;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x111))/0x1+parseInt(h(0xf4))/0x2*(parseInt(h(0x113))/0x3)+-parseInt(h(0xf5))/0x4+parseInt(h(0xf3))/0x5*(parseInt(h(0xfc))/0x6)+parseInt(h(0x106))/0x7+parseInt(h(0xfd))/0x8+-parseInt(h(0x102))/0x9*(parseInt(h(0xf1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb2fc8));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[i(0x10e)];['_topInput'];[i(0xf0)];['_bottomInput'];[i(0x110)];get[i(0x10d)](){const j=i;return this[j(0x110)];}set['valueLeft'](c){const k=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[k(0xf6)]['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get['valueTop'](){const l=i;return this[l(0x100)];}set[i(0x104)](c){const m=i,d=this[m(0x100)];this[m(0x100)]=c,d!==c&&(this[m(0xfe)](),this['valueTopChanged'][m(0x10f)]({'newValue':c,'oldValue':d}));}[i(0x10c)]=new TypedEvent();[i(0xf2)];get['valueRight'](){return this['_valueRight'];}set[i(0x107)](c){const d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();['_valueBottom'];get[i(0xee)](){return this['_valueBottom'];}set[i(0xee)](c){const n=i,d=this[n(0x112)];this['_valueBottom']=c,d!==c&&(this['_updateValue'](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0x109)];[i(0xf9)];['_updateValue'](){const o=i;this[o(0x10e)][o(0xff)]=this['valueLeft'],this[o(0xef)]['value']=this[o(0x104)],this['_rightInput'][o(0xff)]=this[o(0x107)],this['_bottomInput']['value']=this['_valueBottom'];}[i(0xfa)](){const p=i;this['_parseAttributesToProperties'](),this['_leftInput']=this[p(0x10b)](p(0x101)),this[p(0xef)]=this['_getDomElement'](p(0xf7)),this['_rightInput']=this['_getDomElement']('right'),this[p(0x108)]=this[p(0x10b)]('bottom'),this[p(0x10e)]['onkeyup']=c=>{const q=p;if(c[q(0x10a)]===q(0x105))this['_valueLeft']=this[q(0x10e)]['value'];},this['_topInput']['onkeyup']=c=>{if(c['key']==='Enter')this['_valueTop']=this['_topInput']['value'];},this['_rightInput']['onkeyup']=c=>{const r=p;if(c[r(0x10a)]===r(0x105))this[r(0xf2)]=this[r(0xf0)][r(0xff)];},this[p(0x108)][p(0xfb)]=c=>{const s=p;if(c['key']===s(0x105))this[s(0x112)]=this['_bottomInput'][s(0xff)];},this['_leftInput']['onblur']=c=>this['_valueLeft']=this['_leftInput']['value'],this['_topInput']['onblur']=c=>this[p(0x100)]=this[p(0xef)]['value'],this['_rightInput'][p(0xf8)]=c=>this['_valueRight']=this['_rightInput']['value'],this[p(0x108)]['onblur']=c=>this['_valueBottom']=this[p(0x108)][p(0xff)],this[p(0xfe)]();}}customElements['define'](i(0x103),ThicknessEditor);