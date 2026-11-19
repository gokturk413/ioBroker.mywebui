const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xf6))/0x1*(parseInt(h(0xf1))/0x2)+-parseInt(h(0xed))/0x3+parseInt(h(0xfe))/0x4+-parseInt(h(0xfb))/0x5*(-parseInt(h(0x10e))/0x6)+-parseInt(h(0x107))/0x7*(parseInt(h(0xea))/0x8)+-parseInt(h(0xf7))/0x9*(-parseInt(h(0xfa))/0xa)+parseInt(h(0x106))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99973));function a(){const w=['onkeyup','define','_valueBottom','_getDomElement','21378xToPxv','_rightInput','_topInput','1362576OZpidI','ready','Enter','2026380bvIkqV','unsetValue','bottom','left','2011818JawWAu','_valueLeft','valueRight','valueBottomChanged','_valueRight','1iRRbOl','27aFugcP','onblur','valueLeft','1770340eAmsFF','1205KHFQel','_valueTop','emit','1774376jRvora','_bottomInput','_updateValue','valueLeftChanged','_parseAttributesToProperties','valueTopChanged','valueBottom','_leftInput','12742235mnImYu','28YWXNSv','valueRightChanged','value'];a=function(){return w;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[i(0x105)];[i(0xe9)];['_rightInput'];['_bottomInput'];['_valueLeft'];get[i(0xf9)](){const j=i;return this[j(0xf2)];}set['valueLeft'](c){const k=i,d=this[k(0xf2)];this[k(0xf2)]=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged'][k(0xfd)]({'newValue':c,'oldValue':d}));}[i(0x101)]=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set['valueTop'](c){const l=i,d=this[l(0xfc)];this['_valueTop']=c,d!==c&&(this['_updateValue'](),this[l(0x103)][l(0xfd)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0xf3)](){const m=i;return this[m(0xf5)];}set[i(0xf3)](c){const n=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this[n(0x108)][n(0xfd)]({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();[i(0x10c)];get[i(0x104)](){const o=i;return this[o(0x10c)];}set['valueBottom'](c){const p=i,d=this['_valueBottom'];this[p(0x10c)]=c,d!==c&&(this['_updateValue'](),this[p(0xf4)][p(0xfd)]({'newValue':c,'oldValue':d}));}[i(0xf4)]=new TypedEvent();['property'];[i(0xee)];['_updateValue'](){const q=i;this[q(0x105)]['value']=this[q(0xf9)],this['_topInput']['value']=this['valueTop'],this['_rightInput'][q(0x109)]=this[q(0xf3)],this[q(0xff)]['value']=this[q(0x10c)];}[i(0xeb)](){const r=i;this[r(0x102)](),this[r(0x105)]=this['_getDomElement'](r(0xf0)),this['_topInput']=this['_getDomElement']('top'),this['_rightInput']=this[r(0x10d)]('right'),this[r(0xff)]=this['_getDomElement'](r(0xef)),this[r(0x105)][r(0x10a)]=c=>{const s=r;if(c['key']===s(0xec))this[s(0xf2)]=this[s(0x105)][s(0x109)];},this[r(0xe9)][r(0x10a)]=c=>{const t=r;if(c['key']==='Enter')this['_valueTop']=this[t(0xe9)]['value'];},this[r(0x10f)][r(0x10a)]=c=>{const u=r;if(c['key']==='Enter')this[u(0xf5)]=this['_rightInput']['value'];},this[r(0xff)][r(0x10a)]=c=>{const v=r;if(c['key']===v(0xec))this[v(0x10c)]=this[v(0xff)][v(0x109)];},this[r(0x105)][r(0xf8)]=c=>this['_valueLeft']=this[r(0x105)][r(0x109)],this[r(0xe9)]['onblur']=c=>this[r(0xfc)]=this[r(0xe9)]['value'],this[r(0x10f)][r(0xf8)]=c=>this[r(0xf5)]=this['_rightInput']['value'],this[r(0xff)][r(0xf8)]=c=>this['_valueBottom']=this[r(0xff)][r(0x109)],this[r(0x100)]();}}customElements[i(0x10b)]('node-projects-thickness-editor',ThicknessEditor);