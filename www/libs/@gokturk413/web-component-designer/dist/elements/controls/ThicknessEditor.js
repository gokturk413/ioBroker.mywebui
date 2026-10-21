const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x196))/0x1*(parseInt(h(0x1a1))/0x2)+-parseInt(h(0x19f))/0x3*(-parseInt(h(0x1a0))/0x4)+-parseInt(h(0x1a2))/0x5+parseInt(h(0x18e))/0x6*(-parseInt(h(0x1af))/0x7)+-parseInt(h(0x19a))/0x8+parseInt(h(0x1ab))/0x9*(-parseInt(h(0x192))/0xa)+parseInt(h(0x1a6))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xada7f));function b(c,d){c=c-0x18d;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[i(0x194)];['_topInput'];[i(0x195)];['_bottomInput'];[i(0x19d)];get['valueLeft'](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this[j(0x1b0)](),this[j(0x1ac)]['emit']({'newValue':c,'oldValue':d}));}[i(0x1ac)]=new TypedEvent();['_valueTop'];get['valueTop'](){const k=i;return this[k(0x191)];}set['valueTop'](c){const l=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this['_updateValue'](),this['valueTopChanged'][l(0x1aa)]({'newValue':c,'oldValue':d}));}[i(0x1a3)]=new TypedEvent();['_valueRight'];get[i(0x1a5)](){const m=i;return this[m(0x190)];}set['valueRight'](c){const n=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[n(0x1b0)](),this['valueRightChanged'][n(0x1aa)]({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();[i(0x1a7)];get[i(0x193)](){return this['_valueBottom'];}set['valueBottom'](c){const d=this['_valueBottom'];this['_valueBottom']=c,d!==c&&(this['_updateValue'](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x19b)]=new TypedEvent();[i(0x1ad)];['unsetValue'];['_updateValue'](){const o=i;this['_leftInput'][o(0x1a8)]=this['valueLeft'],this[o(0x1a9)]['value']=this[o(0x197)],this['_rightInput'][o(0x1a8)]=this['valueRight'],this[o(0x19e)]['value']=this[o(0x1a7)];}[i(0x1b1)](){const p=i;this['_parseAttributesToProperties'](),this['_leftInput']=this['_getDomElement'](p(0x18d)),this[p(0x1a9)]=this['_getDomElement']('top'),this['_rightInput']=this[p(0x198)]('right'),this[p(0x19e)]=this[p(0x198)]('bottom'),this[p(0x194)]['onkeyup']=c=>{const q=p;if(c['key']===q(0x18f))this[q(0x19d)]=this['_leftInput'][q(0x1a8)];},this[p(0x1a9)]['onkeyup']=c=>{const r=p;if(c[r(0x199)]==='Enter')this[r(0x191)]=this['_topInput'][r(0x1a8)];},this['_rightInput'][p(0x1a4)]=c=>{const s=p;if(c['key']==='Enter')this[s(0x190)]=this[s(0x195)][s(0x1a8)];},this['_bottomInput'][p(0x1a4)]=c=>{const t=p;if(c[t(0x199)]==='Enter')this[t(0x1a7)]=this[t(0x19e)]['value'];},this[p(0x194)]['onblur']=c=>this[p(0x19d)]=this['_leftInput'][p(0x1a8)],this[p(0x1a9)][p(0x1ae)]=c=>this[p(0x191)]=this['_topInput']['value'],this['_rightInput'][p(0x1ae)]=c=>this[p(0x190)]=this[p(0x195)][p(0x1a8)],this[p(0x19e)][p(0x1ae)]=c=>this[p(0x1a7)]=this['_bottomInput'][p(0x1a8)],this['_updateValue']();}}customElements['define'](i(0x19c),ThicknessEditor);function a(){const u=['valueBottomChanged','node-projects-thickness-editor','_valueLeft','_bottomInput','93663gTJkLv','124EIyxvP','2872cztXpm','7053040WAThjp','valueTopChanged','onkeyup','valueRight','51275466UTaYLX','_valueBottom','value','_topInput','emit','7655796DqGiBK','valueLeftChanged','property','onblur','182ReHbnZ','_updateValue','ready','left','326406gijcuW','Enter','_valueRight','_valueTop','10hkyABN','valueBottom','_leftInput','_rightInput','484RQQAkO','valueTop','_getDomElement','key','4378080LaKRtY'];a=function(){return u;};return a();}