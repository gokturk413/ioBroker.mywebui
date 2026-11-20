const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x19d))/0x1*(-parseInt(h(0x18c))/0x2)+-parseInt(h(0x19b))/0x3*(-parseInt(h(0x185))/0x4)+parseInt(h(0x196))/0x5*(parseInt(h(0x1a5))/0x6)+parseInt(h(0x19f))/0x7*(parseInt(h(0x1a7))/0x8)+-parseInt(h(0x187))/0x9+-parseInt(h(0x18a))/0xa*(-parseInt(h(0x188))/0xb)+parseInt(h(0x184))/0xc*(parseInt(h(0x18d))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99081));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1a9)]=css`
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
  `;['_leftInput'];[i(0x1a4)];['_rightInput'];[i(0x1a2)];[i(0x1a3)];get['valueLeft'](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this[j(0x199)](),this[j(0x1a8)][j(0x18f)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get['valueTop'](){const k=i;return this[k(0x1ac)];}set[i(0x193)](c){const l=i,d=this[l(0x1ac)];this['_valueTop']=c,d!==c&&(this['_updateValue'](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0x197)](){const m=i;return this[m(0x18b)];}set[i(0x197)](c){const n=i,d=this[n(0x18b)];this[n(0x18b)]=c,d!==c&&(this['_updateValue'](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1aa)]=new TypedEvent();[i(0x198)];get['valueBottom'](){return this['_valueBottom'];}set[i(0x190)](c){const o=i,d=this[o(0x198)];this[o(0x198)]=c,d!==c&&(this['_updateValue'](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0x192)];[i(0x1a6)];[i(0x199)](){const p=i;this['_leftInput']['value']=this[p(0x195)],this[p(0x1a4)]['value']=this[p(0x193)],this['_rightInput'][p(0x186)]=this[p(0x197)],this['_bottomInput']['value']=this['_valueBottom'];}[i(0x1ab)](){const q=i;this['_parseAttributesToProperties'](),this[q(0x18e)]=this[q(0x1a0)]('left'),this[q(0x1a4)]=this[q(0x1a0)]('top'),this['_rightInput']=this['_getDomElement']('right'),this['_bottomInput']=this['_getDomElement'](q(0x191)),this[q(0x18e)][q(0x19a)]=c=>{const r=q;if(c['key']===r(0x19c))this['_valueLeft']=this['_leftInput'][r(0x186)];},this[q(0x1a4)][q(0x19a)]=c=>{const s=q;if(c[s(0x19e)]==='Enter')this[s(0x1ac)]=this[s(0x1a4)][s(0x186)];},this[q(0x183)]['onkeyup']=c=>{const t=q;if(c['key']==='Enter')this[t(0x18b)]=this['_rightInput'][t(0x186)];},this[q(0x1a2)][q(0x19a)]=c=>{const u=q;if(c[u(0x19e)]==='Enter')this['_valueBottom']=this[u(0x1a2)][u(0x186)];},this[q(0x18e)]['onblur']=c=>this['_valueLeft']=this['_leftInput'][q(0x186)],this[q(0x1a4)]['onblur']=c=>this[q(0x1ac)]=this[q(0x1a4)][q(0x186)],this[q(0x183)]['onblur']=c=>this[q(0x18b)]=this[q(0x183)][q(0x186)],this['_bottomInput'][q(0x194)]=c=>this[q(0x198)]=this[q(0x1a2)][q(0x186)],this[q(0x199)]();}}function b(c,d){c=c-0x183;const e=a();let f=e[c];return f;}customElements[i(0x189)](i(0x1a1),ThicknessEditor);function a(){const v=['property','valueTop','onblur','valueLeft','44935FoWrdu','valueRight','_valueBottom','_updateValue','onkeyup','417wtKcWh','Enter','33fMPFaY','key','7LgwSKy','_getDomElement','node-projects-thickness-editor','_bottomInput','_valueLeft','_topInput','60osiwCD','unsetValue','6797288JkFNMB','valueLeftChanged','style','valueRightChanged','ready','_valueTop','_rightInput','23952nCqjFl','13624bqBhMl','value','7210179TepKMs','22rURAyT','define','997190TgQLok','_valueRight','51462JEdWJm','4329DrOxAB','_leftInput','emit','valueBottom','bottom'];a=function(){return v;};return a();}