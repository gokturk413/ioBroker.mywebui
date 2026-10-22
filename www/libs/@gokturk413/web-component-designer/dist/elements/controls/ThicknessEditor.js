const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xdd))/0x1*(-parseInt(h(0xf5))/0x2)+-parseInt(h(0xde))/0x3*(parseInt(h(0xe7))/0x4)+parseInt(h(0xf2))/0x5*(parseInt(h(0xec))/0x6)+parseInt(h(0xe2))/0x7+parseInt(h(0xf6))/0x8*(parseInt(h(0xf8))/0x9)+parseInt(h(0xf4))/0xa+parseInt(h(0xfa))/0xb*(-parseInt(h(0xdb))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8bdd));function b(c,d){c=c-0xd4;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0xe5)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];[i(0xe1)];[i(0xf9)];[i(0xe8)];[i(0xda)];get[i(0xed)](){const j=i;return this[j(0xda)];}set['valueLeft'](c){const k=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[k(0xeb)][k(0xf3)]({'newValue':c,'oldValue':d}));}[i(0xeb)]=new TypedEvent();['_valueTop'];get['valueTop'](){const l=i;return this[l(0xef)];}set['valueTop'](c){const m=i,d=this[m(0xef)];this[m(0xef)]=c,d!==c&&(this['_updateValue'](),this[m(0xe9)]['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get['valueRight'](){return this['_valueRight'];}set[i(0xe6)](c){const n=i,d=this[n(0xe4)];this[n(0xe4)]=c,d!==c&&(this['_updateValue'](),this['valueRightChanged'][n(0xf3)]({'newValue':c,'oldValue':d}));}[i(0xd6)]=new TypedEvent();['_valueBottom'];get['valueBottom'](){const o=i;return this[o(0xd4)];}set['valueBottom'](c){const p=i,d=this[p(0xd4)];this[p(0xd4)]=c,d!==c&&(this[p(0xd7)](),this['valueBottomChanged'][p(0xf3)]({'newValue':c,'oldValue':d}));}[i(0xd5)]=new TypedEvent();['property'];[i(0xdc)];[i(0xd7)](){const q=i;this['_leftInput'][q(0xd9)]=this['valueLeft'],this['_topInput']['value']=this[q(0xee)],this['_rightInput'][q(0xd9)]=this[q(0xe6)],this[q(0xe8)]['value']=this['_valueBottom'];}[i(0xf0)](){const r=i;this['_parseAttributesToProperties'](),this[r(0xfb)]=this[r(0xd8)](r(0xe0)),this[r(0xe1)]=this['_getDomElement'](r(0xf7)),this['_rightInput']=this['_getDomElement']('right'),this['_bottomInput']=this['_getDomElement']('bottom'),this['_leftInput']['onkeyup']=c=>{const s=r;if(c['key']===s(0xea))this[s(0xda)]=this[s(0xfb)][s(0xd9)];},this['_topInput']['onkeyup']=c=>{const t=r;if(c[t(0xdf)]===t(0xea))this[t(0xef)]=this[t(0xe1)][t(0xd9)];},this[r(0xf9)]['onkeyup']=c=>{const u=r;if(c[u(0xdf)]===u(0xea))this['_valueRight']=this['_rightInput']['value'];},this[r(0xe8)]['onkeyup']=c=>{const v=r;if(c['key']==='Enter')this[v(0xd4)]=this[v(0xe8)][v(0xd9)];},this['_leftInput']['onblur']=c=>this[r(0xda)]=this['_leftInput']['value'],this['_topInput']['onblur']=c=>this['_valueTop']=this['_topInput']['value'],this['_rightInput'][r(0xf1)]=c=>this[r(0xe4)]=this[r(0xf9)]['value'],this[r(0xe8)]['onblur']=c=>this['_valueBottom']=this['_bottomInput']['value'],this['_updateValue']();}}customElements[i(0xe3)]('node-projects-thickness-editor',ThicknessEditor);function a(){const w=['valueTopChanged','Enter','valueLeftChanged','6pNFAwp','valueLeft','valueTop','_valueTop','ready','onblur','3813470Eyqhbo','emit','17437010vFWAcu','2zJpnAs','200QrGtUZ','top','380223iyVSEY','_rightInput','60797YRKICi','_leftInput','_valueBottom','valueBottomChanged','valueRightChanged','_updateValue','_getDomElement','value','_valueLeft','5748WzEfhe','unsetValue','436973JZIBzX','38163aslyaJ','key','left','_topInput','3949344bthcCV','define','_valueRight','template','valueRight','28MiTYcd','_bottomInput'];a=function(){return w;};return a();}