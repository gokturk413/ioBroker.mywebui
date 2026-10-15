const i=b;function b(c,d){c=c-0x1a0;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1c3))/0x1+-parseInt(h(0x1b2))/0x2+parseInt(h(0x1a4))/0x3*(parseInt(h(0x1c4))/0x4)+parseInt(h(0x1c0))/0x5+parseInt(h(0x1b1))/0x6+parseInt(h(0x1b7))/0x7*(-parseInt(h(0x1ae))/0x8)+-parseInt(h(0x1a8))/0x9*(parseInt(h(0x1c1))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa68bc));function a(){const v=['_parseAttributesToProperties','emit','207yKoMdV','top','_leftInput','Enter','valueTop','template','7278760mKZxnu','_topInput','valueLeftChanged','7478976GpPDFX','654816dEXupJ','key','valueBottom','_valueLeft','valueBottomChanged','7ZkZsoY','onkeyup','onblur','_valueTop','valueRight','valueLeft','_rightInput','_updateValue','_valueBottom','4743965orPfnF','292090NiBCAt','_getDomElement','175967sIJURt','457528gnlfCS','style','valueRightChanged','node-projects-thickness-editor','_bottomInput','_valueRight','value','15YvhDau','unsetValue'];a=function(){return v;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1c5)]=css`
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
  `;static [i(0x1ad)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0x1aa)];['_topInput'];[i(0x1bd)];[i(0x1a1)];['_valueLeft'];get['valueLeft'](){return this['_valueLeft'];}set[i(0x1bc)](c){const j=i,d=this[j(0x1b5)];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[j(0x1b0)][j(0x1a7)]({'newValue':c,'oldValue':d}));}[i(0x1b0)]=new TypedEvent();[i(0x1ba)];get['valueTop'](){return this['_valueTop'];}set[i(0x1ac)](c){const k=i,d=this[k(0x1ba)];this['_valueTop']=c,d!==c&&(this[k(0x1be)](),this['valueTopChanged'][k(0x1a7)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0x1bb)](){const l=i;return this[l(0x1a2)];}set['valueRight'](c){const m=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[m(0x1be)](),this[m(0x1c6)]['emit']({'newValue':c,'oldValue':d}));}[i(0x1c6)]=new TypedEvent();['_valueBottom'];get[i(0x1b4)](){const n=i;return this[n(0x1bf)];}set[i(0x1b4)](c){const o=i,d=this[o(0x1bf)];this[o(0x1bf)]=c,d!==c&&(this[o(0x1be)](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1b6)]=new TypedEvent();['property'];[i(0x1a5)];[i(0x1be)](){const p=i;this['_leftInput']['value']=this['valueLeft'],this['_topInput'][p(0x1a3)]=this['valueTop'],this[p(0x1bd)]['value']=this['valueRight'],this['_bottomInput']['value']=this['_valueBottom'];}['ready'](){const q=i;this[q(0x1a6)](),this[q(0x1aa)]=this[q(0x1c2)]('left'),this['_topInput']=this[q(0x1c2)](q(0x1a9)),this['_rightInput']=this['_getDomElement']('right'),this['_bottomInput']=this['_getDomElement']('bottom'),this['_leftInput'][q(0x1b8)]=c=>{const r=q;if(c['key']===r(0x1ab))this[r(0x1b5)]=this[r(0x1aa)][r(0x1a3)];},this['_topInput'][q(0x1b8)]=c=>{const s=q;if(c[s(0x1b3)]===s(0x1ab))this['_valueTop']=this['_topInput']['value'];},this['_rightInput']['onkeyup']=c=>{const t=q;if(c['key']==='Enter')this[t(0x1a2)]=this['_rightInput'][t(0x1a3)];},this['_bottomInput'][q(0x1b8)]=c=>{const u=q;if(c['key']==='Enter')this['_valueBottom']=this[u(0x1a1)][u(0x1a3)];},this[q(0x1aa)]['onblur']=c=>this['_valueLeft']=this['_leftInput'][q(0x1a3)],this[q(0x1af)][q(0x1b9)]=c=>this['_valueTop']=this[q(0x1af)]['value'],this['_rightInput']['onblur']=c=>this[q(0x1a2)]=this[q(0x1bd)][q(0x1a3)],this[q(0x1a1)][q(0x1b9)]=c=>this[q(0x1bf)]=this[q(0x1a1)]['value'],this['_updateValue']();}}customElements['define'](i(0x1a0),ThicknessEditor);