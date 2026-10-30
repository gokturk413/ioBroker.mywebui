const i=b;function a(){const v=['valueBottom','valueRight','valueLeft','34GApDeq','_valueRight','value','3742956MGBUuD','_valueLeft','_leftInput','valueBottomChanged','ready','_topInput','_updateValue','key','onblur','Enter','2072394IIhfGo','valueTopChanged','valueRightChanged','_bottomInput','14753010QlWDZM','_rightInput','_valueTop','15DFqrUr','_getDomElement','1011216bYhugj','_valueBottom','745717oywGJW','onkeyup','762yIUhMY','node-projects-thickness-editor','40lAGUoT','6550299PoyVSY','template','bottom','emit','valueTop'];a=function(){return v;};return a();}function b(c,d){c=c-0x1da;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f5))/0x1+-parseInt(h(0x1df))/0x2*(parseInt(h(0x1f9))/0x3)+parseInt(h(0x1e2))/0x4+parseInt(h(0x1f3))/0x5*(-parseInt(h(0x1ec))/0x6)+-parseInt(h(0x1f7))/0x7*(parseInt(h(0x1fb))/0x8)+parseInt(h(0x1fc))/0x9+parseInt(h(0x1f0))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x875e1));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x1fd)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];[i(0x1e7)];[i(0x1f1)];[i(0x1ef)];['_valueLeft'];get[i(0x1de)](){const j=i;return this[j(0x1e3)];}set['valueLeft'](c){const k=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this[k(0x1e8)](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0x1f2)];get[i(0x1db)](){return this['_valueTop'];}set['valueTop'](c){const l=i,d=this[l(0x1f2)];this['_valueTop']=c,d!==c&&(this[l(0x1e8)](),this[l(0x1ed)][l(0x1da)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();[i(0x1e0)];get[i(0x1dd)](){const m=i;return this[m(0x1e0)];}set['valueRight'](c){const n=i,d=this[n(0x1e0)];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this[n(0x1ee)]['emit']({'newValue':c,'oldValue':d}));}[i(0x1ee)]=new TypedEvent();[i(0x1f6)];get[i(0x1dc)](){return this['_valueBottom'];}set[i(0x1dc)](c){const o=i,d=this[o(0x1f6)];this['_valueBottom']=c,d!==c&&(this[o(0x1e8)](),this[o(0x1e5)][o(0x1da)]({'newValue':c,'oldValue':d}));}[i(0x1e5)]=new TypedEvent();['property'];['unsetValue'];[i(0x1e8)](){const p=i;this['_leftInput'][p(0x1e1)]=this['valueLeft'],this[p(0x1e7)]['value']=this['valueTop'],this['_rightInput']['value']=this['valueRight'],this['_bottomInput'][p(0x1e1)]=this[p(0x1f6)];}[i(0x1e6)](){const q=i;this['_parseAttributesToProperties'](),this[q(0x1e4)]=this['_getDomElement']('left'),this[q(0x1e7)]=this['_getDomElement']('top'),this[q(0x1f1)]=this['_getDomElement']('right'),this['_bottomInput']=this[q(0x1f4)](q(0x1fe)),this['_leftInput'][q(0x1f8)]=c=>{const r=q;if(c[r(0x1e9)]==='Enter')this[r(0x1e3)]=this['_leftInput'][r(0x1e1)];},this['_topInput'][q(0x1f8)]=c=>{const s=q;if(c[s(0x1e9)]==='Enter')this['_valueTop']=this['_topInput']['value'];},this[q(0x1f1)]['onkeyup']=c=>{const t=q;if(c[t(0x1e9)]===t(0x1eb))this['_valueRight']=this[t(0x1f1)]['value'];},this['_bottomInput']['onkeyup']=c=>{const u=q;if(c['key']===u(0x1eb))this['_valueBottom']=this[u(0x1ef)]['value'];},this[q(0x1e4)][q(0x1ea)]=c=>this['_valueLeft']=this['_leftInput']['value'],this[q(0x1e7)]['onblur']=c=>this['_valueTop']=this[q(0x1e7)][q(0x1e1)],this[q(0x1f1)][q(0x1ea)]=c=>this[q(0x1e0)]=this['_rightInput'][q(0x1e1)],this['_bottomInput'][q(0x1ea)]=c=>this['_valueBottom']=this[q(0x1ef)][q(0x1e1)],this['_updateValue']();}}customElements['define'](i(0x1fa),ThicknessEditor);