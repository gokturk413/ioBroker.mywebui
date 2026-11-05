function a(){const w=['8877177cVaJxc','_updateValue','1038582dTMAMK','node-projects-thickness-editor','unsetValue','_rightInput','Enter','valueLeft','valueBottomChanged','value','896nSGszm','1545888KQLwsf','bottom','_valueTop','_valueLeft','onblur','valueRight','key','_topInput','valueRightChanged','_getDomElement','emit','_parseAttributesToProperties','valueTopChanged','onkeyup','valueTop','182016NRxQmn','_leftInput','_bottomInput','ready','define','47864ORDaZR','_valueRight','1ttAMoT','valueLeftChanged','style','3168800gkOasq','right','valueBottom','546399SXEzfT','_valueBottom'];a=function(){return w;};return a();}function b(c,d){c=c-0xdd;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x101))/0x1*(parseInt(h(0xe2))/0x2)+-parseInt(h(0xde))/0x3+parseInt(h(0xfa))/0x4+parseInt(h(0x104))/0x5+parseInt(h(0xeb))/0x6+-parseInt(h(0xea))/0x7*(parseInt(h(0xff))/0x8)+parseInt(h(0xe0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f551));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x103)]=css`
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
  `;['_leftInput'];[i(0xf2)];['_rightInput'];['_bottomInput'];[i(0xee)];get[i(0xe7)](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this[j(0xe1)](),this[j(0x102)][j(0xf5)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0xed)];get['valueTop'](){const k=i;return this[k(0xed)];}set['valueTop'](c){const l=i,d=this[l(0xed)];this[l(0xed)]=c,d!==c&&(this[l(0xe1)](),this[l(0xf7)]['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();[i(0x100)];get[i(0xf0)](){const m=i;return this[m(0x100)];}set['valueRight'](c){const n=i,d=this[n(0x100)];this[n(0x100)]=c,d!==c&&(this[n(0xe1)](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0xf3)]=new TypedEvent();[i(0xdf)];get[i(0xdd)](){const o=i;return this[o(0xdf)];}set['valueBottom'](c){const p=i,d=this['_valueBottom'];this['_valueBottom']=c,d!==c&&(this[p(0xe1)](),this[p(0xe8)]['emit']({'newValue':c,'oldValue':d}));}[i(0xe8)]=new TypedEvent();['property'];[i(0xe4)];[i(0xe1)](){const q=i;this['_leftInput'][q(0xe9)]=this[q(0xe7)],this[q(0xf2)][q(0xe9)]=this[q(0xf9)],this[q(0xe5)][q(0xe9)]=this[q(0xf0)],this['_bottomInput']['value']=this[q(0xdf)];}[i(0xfd)](){const r=i;this[r(0xf6)](),this['_leftInput']=this['_getDomElement']('left'),this['_topInput']=this[r(0xf4)]('top'),this['_rightInput']=this['_getDomElement'](r(0x105)),this['_bottomInput']=this['_getDomElement'](r(0xec)),this[r(0xfb)][r(0xf8)]=c=>{const s=r;if(c['key']===s(0xe6))this['_valueLeft']=this[s(0xfb)]['value'];},this[r(0xf2)][r(0xf8)]=c=>{const t=r;if(c['key']==='Enter')this['_valueTop']=this['_topInput'][t(0xe9)];},this[r(0xe5)][r(0xf8)]=c=>{const u=r;if(c[u(0xf1)]==='Enter')this[u(0x100)]=this[u(0xe5)][u(0xe9)];},this['_bottomInput']['onkeyup']=c=>{const v=r;if(c[v(0xf1)]===v(0xe6))this[v(0xdf)]=this['_bottomInput']['value'];},this[r(0xfb)][r(0xef)]=c=>this[r(0xee)]=this['_leftInput']['value'],this['_topInput']['onblur']=c=>this['_valueTop']=this[r(0xf2)][r(0xe9)],this['_rightInput'][r(0xef)]=c=>this[r(0x100)]=this['_rightInput']['value'],this[r(0xfc)]['onblur']=c=>this['_valueBottom']=this[r(0xfc)]['value'],this['_updateValue']();}}customElements[i(0xfe)](i(0xe3),ThicknessEditor);