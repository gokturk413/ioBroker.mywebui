function b(c,d){c=c-0x160;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x169))/0x1*(-parseInt(h(0x170))/0x2)+-parseInt(h(0x180))/0x3+parseInt(h(0x174))/0x4*(-parseInt(h(0x16c))/0x5)+-parseInt(h(0x167))/0x6+-parseInt(h(0x165))/0x7+parseInt(h(0x182))/0x8+parseInt(h(0x166))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4e57c));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x16e)]=css`
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
  `;[i(0x16d)];[i(0x160)];[i(0x177)];['_bottomInput'];['_valueLeft'];get['valueLeft'](){return this['_valueLeft'];}set[i(0x17b)](c){const j=i,d=this['_valueLeft'];this[j(0x16a)]=c,d!==c&&(this['_updateValue'](),this[j(0x17e)][j(0x171)]({'newValue':c,'oldValue':d}));}[i(0x17e)]=new TypedEvent();[i(0x175)];get[i(0x181)](){return this['_valueTop'];}set['valueTop'](c){const k=i,d=this[k(0x175)];this[k(0x175)]=c,d!==c&&(this['_updateValue'](),this[k(0x16f)]['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();[i(0x16b)];get[i(0x179)](){return this['_valueRight'];}set['valueRight'](c){const l=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[l(0x168)](),this[l(0x173)][l(0x171)]({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();[i(0x163)];get['valueBottom'](){return this['_valueBottom'];}set['valueBottom'](c){const m=i,d=this[m(0x163)];this[m(0x163)]=c,d!==c&&(this[m(0x168)](),this[m(0x178)]['emit']({'newValue':c,'oldValue':d}));}[i(0x178)]=new TypedEvent();['property'];['unsetValue'];['_updateValue'](){const n=i;this[n(0x16d)]['value']=this['valueLeft'],this[n(0x160)]['value']=this['valueTop'],this['_rightInput']['value']=this[n(0x179)],this['_bottomInput'][n(0x161)]=this[n(0x163)];}['ready'](){const o=i;this[o(0x176)](),this['_leftInput']=this['_getDomElement'](o(0x17f)),this[o(0x160)]=this['_getDomElement'](o(0x184)),this[o(0x177)]=this['_getDomElement']('right'),this[o(0x17c)]=this[o(0x172)](o(0x183)),this['_leftInput']['onkeyup']=c=>{const p=o;if(c['key']==='Enter')this['_valueLeft']=this[p(0x16d)]['value'];},this[o(0x160)]['onkeyup']=c=>{const q=o;if(c['key']===q(0x17d))this['_valueTop']=this[q(0x160)]['value'];},this[o(0x177)]['onkeyup']=c=>{const r=o;if(c['key']==='Enter')this['_valueRight']=this[r(0x177)]['value'];},this['_bottomInput'][o(0x164)]=c=>{const s=o;if(c['key']==='Enter')this['_valueBottom']=this[s(0x17c)][s(0x161)];},this['_leftInput']['onblur']=c=>this[o(0x16a)]=this[o(0x16d)][o(0x161)],this[o(0x160)][o(0x17a)]=c=>this['_valueTop']=this['_topInput']['value'],this[o(0x177)]['onblur']=c=>this[o(0x16b)]=this['_rightInput']['value'],this['_bottomInput']['onblur']=c=>this[o(0x163)]=this['_bottomInput']['value'],this[o(0x168)]();}}customElements['define'](i(0x162),ThicknessEditor);function a(){const t=['bottom','top','_topInput','value','node-projects-thickness-editor','_valueBottom','onkeyup','2233721vltZnA','14801220oSrpCA','1194552gPflny','_updateValue','1BeFCqV','_valueLeft','_valueRight','165qeNxAJ','_leftInput','style','valueTopChanged','540522xrklfM','emit','_getDomElement','valueRightChanged','56552HHyKJZ','_valueTop','_parseAttributesToProperties','_rightInput','valueBottomChanged','valueRight','onblur','valueLeft','_bottomInput','Enter','valueLeftChanged','left','1863009IjLpNS','valueTop','4418600YsjiSr'];a=function(){return t;};return a();}