const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xb9))/0x1*(parseInt(h(0xab))/0x2)+parseInt(h(0xae))/0x3+-parseInt(h(0x97))/0x4+-parseInt(h(0xb6))/0x5+parseInt(h(0xac))/0x6+parseInt(h(0xa3))/0x7*(-parseInt(h(0xb8))/0x8)+-parseInt(h(0x93))/0x9*(-parseInt(h(0xa8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a9a2));function a(){const v=['_rightInput','valueTop','valueRightChanged','833amUvqa','_valueRight','value','_topInput','top','5780fxQFYi','onblur','onkeyup','4vPDeFS','618072yFkttq','template','689244fYuPzI','valueTopChanged','valueBottomChanged','Enter','_parseAttributesToProperties','valueLeftChanged','style','key','2625725mWsSff','_bottomInput','58568tnnHJJ','312519OOKfLn','define','15525wVXIuL','left','_valueBottom','valueLeft','487448ClaDZQ','valueBottom','_valueTop','_leftInput','_getDomElement','property','emit','valueRight','_updateValue'];a=function(){return v;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0xb4)]=css`
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
  `;static [i(0xad)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0x9a)];['_topInput'];['_rightInput'];[i(0xb7)];['_valueLeft'];get['valueLeft'](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[j(0xb3)]['emit']({'newValue':c,'oldValue':d}));}[i(0xb3)]=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set['valueTop'](c){const k=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[k(0x9f)](),this[k(0xaf)][k(0x9d)]({'newValue':c,'oldValue':d}));}[i(0xaf)]=new TypedEvent();[i(0xa4)];get['valueRight'](){const l=i;return this[l(0xa4)];}set[i(0x9e)](c){const m=i,d=this[m(0xa4)];this[m(0xa4)]=c,d!==c&&(this[m(0x9f)](),this[m(0xa2)]['emit']({'newValue':c,'oldValue':d}));}[i(0xa2)]=new TypedEvent();[i(0x95)];get[i(0x98)](){const n=i;return this[n(0x95)];}set[i(0x98)](c){const o=i,d=this['_valueBottom'];this[o(0x95)]=c,d!==c&&(this[o(0x9f)](),this['valueBottomChanged'][o(0x9d)]({'newValue':c,'oldValue':d}));}[i(0xb0)]=new TypedEvent();[i(0x9c)];['unsetValue'];[i(0x9f)](){const p=i;this['_leftInput']['value']=this[p(0x96)],this['_topInput'][p(0xa5)]=this[p(0xa1)],this['_rightInput']['value']=this['valueRight'],this[p(0xb7)]['value']=this['_valueBottom'];}['ready'](){const q=i;this[q(0xb2)](),this['_leftInput']=this['_getDomElement'](q(0x94)),this['_topInput']=this[q(0x9b)](q(0xa7)),this[q(0xa0)]=this[q(0x9b)]('right'),this['_bottomInput']=this[q(0x9b)]('bottom'),this['_leftInput'][q(0xaa)]=c=>{const r=q;if(c['key']===r(0xb1))this['_valueLeft']=this[r(0x9a)][r(0xa5)];},this['_topInput'][q(0xaa)]=c=>{const s=q;if(c[s(0xb5)]==='Enter')this[s(0x99)]=this[s(0xa6)][s(0xa5)];},this[q(0xa0)]['onkeyup']=c=>{const t=q;if(c[t(0xb5)]==='Enter')this[t(0xa4)]=this[t(0xa0)]['value'];},this[q(0xb7)][q(0xaa)]=c=>{const u=q;if(c['key']==='Enter')this['_valueBottom']=this[u(0xb7)]['value'];},this['_leftInput']['onblur']=c=>this['_valueLeft']=this['_leftInput']['value'],this['_topInput'][q(0xa9)]=c=>this['_valueTop']=this['_topInput']['value'],this[q(0xa0)]['onblur']=c=>this['_valueRight']=this[q(0xa0)][q(0xa5)],this['_bottomInput'][q(0xa9)]=c=>this['_valueBottom']=this['_bottomInput'][q(0xa5)],this[q(0x9f)]();}}function b(c,d){c=c-0x93;const e=a();let f=e[c];return f;}customElements[i(0xba)]('node-projects-thickness-editor',ThicknessEditor);