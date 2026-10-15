const i=b;function b(c,d){c=c-0x145;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x14f))/0x1+parseInt(h(0x150))/0x2*(parseInt(h(0x164))/0x3)+-parseInt(h(0x15e))/0x4+-parseInt(h(0x151))/0x5+parseInt(h(0x145))/0x6*(parseInt(h(0x156))/0x7)+parseInt(h(0x14d))/0x8*(parseInt(h(0x162))/0x9)+-parseInt(h(0x147))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf027a));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const t=['valueRight','2899824FafBoe','valueLeftChanged','left','_valueTop','7807257woLqSc','property','42XBkoKc','valueBottomChanged','_valueRight','onblur','onkeyup','emit','641166McWJRN','style','13221000UETrzu','_valueBottom','_topInput','_leftInput','_rightInput','define','16kqgoyC','_getDomElement','1167002ZsvUcR','175946ngJoUn','3461670gFMEVQ','ready','value','_bottomInput','valueTop','126GzdNpM','valueBottom','valueRightChanged','_valueLeft','top','_updateValue','key'];a=function(){return t;};return a();}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x146)]=css`
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
  `;['_leftInput'];[i(0x149)];['_rightInput'];[i(0x154)];['_valueLeft'];get['valueLeft'](){const j=i;return this[j(0x159)];}set['valueLeft'](c){const d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x15f)]=new TypedEvent();[i(0x161)];get['valueTop'](){return this['_valueTop'];}set[i(0x155)](c){const k=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[k(0x15b)](),this['valueTopChanged'][k(0x169)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0x15d)](){return this['_valueRight'];}set[i(0x15d)](c){const l=i,d=this['_valueRight'];this[l(0x166)]=c,d!==c&&(this[l(0x15b)](),this['valueRightChanged'][l(0x169)]({'newValue':c,'oldValue':d}));}[i(0x158)]=new TypedEvent();['_valueBottom'];get['valueBottom'](){return this['_valueBottom'];}set[i(0x157)](c){const m=i,d=this['_valueBottom'];this[m(0x148)]=c,d!==c&&(this[m(0x15b)](),this['valueBottomChanged'][m(0x169)]({'newValue':c,'oldValue':d}));}[i(0x165)]=new TypedEvent();[i(0x163)];['unsetValue'];[i(0x15b)](){const n=i;this[n(0x14a)][n(0x153)]=this['valueLeft'],this['_topInput']['value']=this[n(0x155)],this[n(0x14b)][n(0x153)]=this[n(0x15d)],this[n(0x154)][n(0x153)]=this['_valueBottom'];}[i(0x152)](){const o=i;this['_parseAttributesToProperties'](),this[o(0x14a)]=this[o(0x14e)](o(0x160)),this[o(0x149)]=this[o(0x14e)](o(0x15a)),this['_rightInput']=this['_getDomElement']('right'),this['_bottomInput']=this['_getDomElement']('bottom'),this[o(0x14a)]['onkeyup']=c=>{const p=o;if(c[p(0x15c)]==='Enter')this['_valueLeft']=this[p(0x14a)]['value'];},this[o(0x149)][o(0x168)]=c=>{const q=o;if(c[q(0x15c)]==='Enter')this['_valueTop']=this[q(0x149)][q(0x153)];},this['_rightInput']['onkeyup']=c=>{const r=o;if(c['key']==='Enter')this[r(0x166)]=this[r(0x14b)]['value'];},this['_bottomInput'][o(0x168)]=c=>{const s=o;if(c['key']==='Enter')this['_valueBottom']=this['_bottomInput'][s(0x153)];},this['_leftInput']['onblur']=c=>this['_valueLeft']=this['_leftInput']['value'],this[o(0x149)][o(0x167)]=c=>this[o(0x161)]=this[o(0x149)]['value'],this[o(0x14b)]['onblur']=c=>this['_valueRight']=this['_rightInput']['value'],this[o(0x154)][o(0x167)]=c=>this['_valueBottom']=this['_bottomInput']['value'],this['_updateValue']();}}customElements[i(0x14c)]('node-projects-thickness-editor',ThicknessEditor);