const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd9))/0x1*(-parseInt(h(0xe3))/0x2)+-parseInt(h(0xea))/0x3+-parseInt(h(0xf6))/0x4+-parseInt(h(0xed))/0x5+parseInt(h(0xe5))/0x6+parseInt(h(0xf2))/0x7+parseInt(h(0xfa))/0x8*(parseInt(h(0xd8))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x362b2));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const v=['_rightInput','_updateValue','24iWZUXa','494451AlKDZy','21nZOdGj','valueTopChanged','valueBottomChanged','_valueLeft','define','valueRightChanged','right','_bottomInput','valueRight','onblur','41282ziVFBX','Enter','2020374SROvRp','onkeyup','_valueTop','unsetValue','_valueRight','836259eWHCRN','valueLeft','value','1961290UOdiRx','key','valueTop','valueBottom','_valueBottom','1083390scJLwD','property','_topInput','_leftInput','787568VRsGtK','_getDomElement'];a=function(){return v;};return a();}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[i(0xf5)];['_topInput'];[i(0xf8)];['_bottomInput'];['_valueLeft'];get[i(0xeb)](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this[j(0xdc)];this[j(0xdc)]=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set[i(0xef)](c){const k=i,d=this[k(0xe7)];this['_valueTop']=c,d!==c&&(this['_updateValue'](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0xda)]=new TypedEvent();[i(0xe9)];get[i(0xe1)](){const l=i;return this[l(0xe9)];}set['valueRight'](c){const m=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[m(0xf9)](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0xde)]=new TypedEvent();[i(0xf1)];get['valueBottom'](){const n=i;return this[n(0xf1)];}set[i(0xf0)](c){const o=i,d=this['_valueBottom'];this[o(0xf1)]=c,d!==c&&(this['_updateValue'](),this[o(0xdb)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0xf3)];[i(0xe8)];[i(0xf9)](){const p=i;this['_leftInput'][p(0xec)]=this['valueLeft'],this['_topInput']['value']=this['valueTop'],this['_rightInput']['value']=this['valueRight'],this[p(0xe0)][p(0xec)]=this[p(0xf1)];}['ready'](){const q=i;this['_parseAttributesToProperties'](),this['_leftInput']=this['_getDomElement']('left'),this['_topInput']=this[q(0xf7)]('top'),this['_rightInput']=this['_getDomElement'](q(0xdf)),this[q(0xe0)]=this['_getDomElement']('bottom'),this[q(0xf5)][q(0xe6)]=c=>{const r=q;if(c['key']==='Enter')this[r(0xdc)]=this['_leftInput'][r(0xec)];},this['_topInput']['onkeyup']=c=>{const s=q;if(c[s(0xee)]==='Enter')this['_valueTop']=this[s(0xf4)][s(0xec)];},this[q(0xf8)]['onkeyup']=c=>{const t=q;if(c[t(0xee)]===t(0xe4))this[t(0xe9)]=this[t(0xf8)]['value'];},this[q(0xe0)]['onkeyup']=c=>{const u=q;if(c[u(0xee)]==='Enter')this[u(0xf1)]=this['_bottomInput'][u(0xec)];},this[q(0xf5)]['onblur']=c=>this['_valueLeft']=this['_leftInput'][q(0xec)],this[q(0xf4)][q(0xe2)]=c=>this['_valueTop']=this[q(0xf4)][q(0xec)],this['_rightInput'][q(0xe2)]=c=>this[q(0xe9)]=this[q(0xf8)]['value'],this[q(0xe0)]['onblur']=c=>this[q(0xf1)]=this[q(0xe0)]['value'],this[q(0xf9)]();}}function b(c,d){c=c-0xd8;const e=a();let f=e[c];return f;}customElements[i(0xdd)]('node-projects-thickness-editor',ThicknessEditor);