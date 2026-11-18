const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xad))/0x1*(parseInt(h(0xa1))/0x2)+parseInt(h(0xa7))/0x3+-parseInt(h(0xa0))/0x4*(-parseInt(h(0x9a))/0x5)+parseInt(h(0x95))/0x6+parseInt(h(0xb4))/0x7*(parseInt(h(0x99))/0x8)+parseInt(h(0xa5))/0x9*(-parseInt(h(0x98))/0xa)+-parseInt(h(0xb7))/0xb*(-parseInt(h(0xa4))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x233db));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x94)]=css`
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
  `;[i(0x93)];[i(0xa2)];[i(0x9f)];[i(0xb0)];['_valueLeft'];get['valueLeft'](){const j=i;return this[j(0xa8)];}set[i(0xab)](c){const k=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this[k(0xb1)](),this[k(0x9c)][k(0xaf)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set[i(0x9d)](c){const l=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[l(0xb1)](),this[l(0xa3)][l(0xaf)]({'newValue':c,'oldValue':d}));}[i(0xa3)]=new TypedEvent();[i(0x91)];get['valueRight'](){const m=i;return this[m(0x91)];}set[i(0x97)](c){const n=i,d=this[n(0x91)];this[n(0x91)]=c,d!==c&&(this[n(0xb1)](),this[n(0xa6)][n(0xaf)]({'newValue':c,'oldValue':d}));}[i(0xa6)]=new TypedEvent();['_valueBottom'];get['valueBottom'](){return this['_valueBottom'];}set['valueBottom'](c){const o=i,d=this[o(0xb6)];this[o(0xb6)]=c,d!==c&&(this['_updateValue'](),this[o(0xb3)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0x90)];['unsetValue'];['_updateValue'](){const p=i;this[p(0x93)]['value']=this['valueLeft'],this[p(0xa2)]['value']=this['valueTop'],this[p(0x9f)]['value']=this[p(0x97)],this[p(0xb0)]['value']=this[p(0xb6)];}[i(0xb2)](){const q=i;this[q(0xaa)](),this[q(0x93)]=this['_getDomElement']('left'),this[q(0xa2)]=this[q(0xb8)]('top'),this['_rightInput']=this['_getDomElement'](q(0x9e)),this['_bottomInput']=this['_getDomElement']('bottom'),this[q(0x93)]['onkeyup']=c=>{const r=q;if(c[r(0xb5)]==='Enter')this['_valueLeft']=this[r(0x93)]['value'];},this[q(0xa2)][q(0xae)]=c=>{if(c['key']==='Enter')this['_valueTop']=this['_topInput']['value'];},this[q(0x9f)][q(0xae)]=c=>{const s=q;if(c[s(0xb5)]==='Enter')this['_valueRight']=this[s(0x9f)]['value'];},this[q(0xb0)]['onkeyup']=c=>{const t=q;if(c['key']===t(0x92))this[t(0xb6)]=this[t(0xb0)]['value'];},this['_leftInput'][q(0xac)]=c=>this['_valueLeft']=this['_leftInput']['value'],this['_topInput']['onblur']=c=>this['_valueTop']=this[q(0xa2)]['value'],this['_rightInput'][q(0xac)]=c=>this[q(0x91)]=this['_rightInput']['value'],this['_bottomInput']['onblur']=c=>this['_valueBottom']=this[q(0xb0)][q(0xa9)],this[q(0xb1)]();}}customElements[i(0x9b)](i(0x96),ThicknessEditor);function b(c,d){c=c-0x90;const e=a();let f=e[c];return f;}function a(){const u=['define','valueLeftChanged','valueTop','right','_rightInput','382188sZmxRn','172MjKrwn','_topInput','valueTopChanged','4536oBpfbV','7542GkJKvP','valueRightChanged','748899TgYYJg','_valueLeft','value','_parseAttributesToProperties','valueLeft','onblur','1987nrVIVR','onkeyup','emit','_bottomInput','_updateValue','ready','valueBottomChanged','7NVyyDV','key','_valueBottom','3267MLerST','_getDomElement','property','_valueRight','Enter','_leftInput','style','840582dznjuF','node-projects-thickness-editor','valueRight','3440uYeOXV','47664DQgIyM','5jgvJJL'];a=function(){return u;};return a();}