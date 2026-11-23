function b(c,d){c=c-0x16d;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x195))/0x1*(parseInt(h(0x181))/0x2)+-parseInt(h(0x184))/0x3+parseInt(h(0x188))/0x4*(parseInt(h(0x173))/0x5)+parseInt(h(0x17c))/0x6*(-parseInt(h(0x18d))/0x7)+-parseInt(h(0x185))/0x8+-parseInt(h(0x17b))/0x9*(parseInt(h(0x178))/0xa)+-parseInt(h(0x177))/0xb*(-parseInt(h(0x172))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xac89c));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const v=['3449082UpJuOm','6851656novhpk','right','_updateValue','55036WfqBQg','node-projects-thickness-editor','valueLeft','ready','_valueBottom','112616ThgKBx','valueBottom','_leftInput','left','_valueTop','valueRightChanged','onblur','template','926731OKNbfG','Enter','emit','_getDomElement','unsetValue','_valueRight','key','32005668FoCclL','65hiqrZc','_valueLeft','valueBottomChanged','_bottomInput','22uAOfjL','10KlJhJD','_rightInput','valueTopChanged','10925451cwWSjR','246dQdbIJ','_topInput','define','valueTop','onkeyup','2kdDbvO','bottom','value'];a=function(){return v;};return a();}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x194)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];[i(0x17d)];['_rightInput'];[i(0x176)];['_valueLeft'];get[i(0x18a)](){const j=i;return this[j(0x174)];}set['valueLeft'](c){const k=i,d=this['_valueLeft'];this[k(0x174)]=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged'][k(0x16d)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0x191)];get['valueTop'](){const l=i;return this[l(0x191)];}set['valueTop'](c){const m=i,d=this[m(0x191)];this[m(0x191)]=c,d!==c&&(this['_updateValue'](),this[m(0x17a)]['emit']({'newValue':c,'oldValue':d}));}[i(0x17a)]=new TypedEvent();['_valueRight'];get['valueRight'](){return this['_valueRight'];}set['valueRight'](c){const n=i,d=this[n(0x170)];this[n(0x170)]=c,d!==c&&(this['_updateValue'](),this['valueRightChanged'][n(0x16d)]({'newValue':c,'oldValue':d}));}[i(0x192)]=new TypedEvent();[i(0x18c)];get['valueBottom'](){return this['_valueBottom'];}set[i(0x18e)](c){const o=i,d=this[o(0x18c)];this[o(0x18c)]=c,d!==c&&(this[o(0x187)](),this[o(0x175)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];[i(0x16f)];['_updateValue'](){const p=i;this[p(0x18f)]['value']=this[p(0x18a)],this['_topInput'][p(0x183)]=this[p(0x17f)],this['_rightInput'][p(0x183)]=this['valueRight'],this[p(0x176)]['value']=this[p(0x18c)];}[i(0x18b)](){const q=i;this['_parseAttributesToProperties'](),this['_leftInput']=this[q(0x16e)](q(0x190)),this[q(0x17d)]=this['_getDomElement']('top'),this[q(0x179)]=this[q(0x16e)](q(0x186)),this['_bottomInput']=this[q(0x16e)](q(0x182)),this['_leftInput'][q(0x180)]=c=>{const r=q;if(c['key']===r(0x196))this[r(0x174)]=this['_leftInput'][r(0x183)];},this['_topInput'][q(0x180)]=c=>{const s=q;if(c['key']==='Enter')this['_valueTop']=this[s(0x17d)]['value'];},this['_rightInput'][q(0x180)]=c=>{const t=q;if(c['key']===t(0x196))this['_valueRight']=this[t(0x179)]['value'];},this['_bottomInput'][q(0x180)]=c=>{const u=q;if(c[u(0x171)]==='Enter')this[u(0x18c)]=this['_bottomInput'][u(0x183)];},this[q(0x18f)][q(0x193)]=c=>this[q(0x174)]=this[q(0x18f)]['value'],this[q(0x17d)]['onblur']=c=>this['_valueTop']=this['_topInput']['value'],this['_rightInput'][q(0x193)]=c=>this['_valueRight']=this['_rightInput']['value'],this[q(0x176)]['onblur']=c=>this['_valueBottom']=this['_bottomInput'][q(0x183)],this['_updateValue']();}}customElements[i(0x17e)](i(0x189),ThicknessEditor);