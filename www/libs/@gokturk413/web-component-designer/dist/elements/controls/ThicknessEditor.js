function a(){const v=['_bottomInput','_valueLeft','onkeyup','124638ojbEfy','valueRight','_topInput','_valueBottom','define','ready','_leftInput','value','63ekHNXP','_valueRight','onblur','valueBottom','_getDomElement','bottom','1439081FhDKKk','_updateValue','emit','3wqIELt','_parseAttributesToProperties','valueTop','_valueTop','25TsinPY','valueRightChanged','key','411344Kgwuuo','valueLeft','property','_rightInput','4ayvgjZ','65309ILekML','56830YTpAjG','472373xxANnu','672196pwurkn','unsetValue','Enter'];a=function(){return v;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xe3))/0x1*(-parseInt(h(0xe2))/0x2)+parseInt(h(0xd7))/0x3*(-parseInt(h(0xe6))/0x4)+-parseInt(h(0xdb))/0x5*(-parseInt(h(0xec))/0x6)+parseInt(h(0xd4))/0x7+parseInt(h(0xde))/0x8+-parseInt(h(0xf4))/0x9*(-parseInt(h(0xe4))/0xa)+parseInt(h(0xe5))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2361b));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xcf;const e=a();let f=e[c];return f;}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[i(0xf2)];['_topInput'];[i(0xe1)];['_bottomInput'];[i(0xea)];get['valueLeft'](){return this['_valueLeft'];}set['valueLeft'](c){const d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0xda)];get[i(0xd9)](){const j=i;return this[j(0xda)];}set[i(0xd9)](c){const k=i,d=this[k(0xda)];this['_valueTop']=c,d!==c&&(this[k(0xd5)](),this['valueTopChanged'][k(0xd6)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0xed)](){const l=i;return this[l(0xcf)];}set['valueRight'](c){const m=i,d=this[m(0xcf)];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this[m(0xdc)][m(0xd6)]({'newValue':c,'oldValue':d}));}[i(0xdc)]=new TypedEvent();[i(0xef)];get[i(0xd1)](){const n=i;return this[n(0xef)];}set[i(0xd1)](c){const o=i,d=this[o(0xef)];this['_valueBottom']=c,d!==c&&(this[o(0xd5)](),this['valueBottomChanged'][o(0xd6)]({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0xe0)];[i(0xe7)];['_updateValue'](){const p=i;this[p(0xf2)][p(0xf3)]=this[p(0xdf)],this[p(0xee)][p(0xf3)]=this[p(0xd9)],this[p(0xe1)][p(0xf3)]=this[p(0xed)],this[p(0xe9)]['value']=this[p(0xef)];}[i(0xf1)](){const q=i;this[q(0xd8)](),this[q(0xf2)]=this['_getDomElement']('left'),this[q(0xee)]=this['_getDomElement']('top'),this['_rightInput']=this['_getDomElement']('right'),this[q(0xe9)]=this[q(0xd2)](q(0xd3)),this['_leftInput']['onkeyup']=c=>{const r=q;if(c[r(0xdd)]===r(0xe8))this[r(0xea)]=this[r(0xf2)][r(0xf3)];},this[q(0xee)][q(0xeb)]=c=>{const s=q;if(c['key']===s(0xe8))this['_valueTop']=this[s(0xee)][s(0xf3)];},this[q(0xe1)][q(0xeb)]=c=>{const t=q;if(c[t(0xdd)]===t(0xe8))this[t(0xcf)]=this[t(0xe1)]['value'];},this[q(0xe9)][q(0xeb)]=c=>{const u=q;if(c['key']==='Enter')this[u(0xef)]=this['_bottomInput'][u(0xf3)];},this['_leftInput']['onblur']=c=>this[q(0xea)]=this['_leftInput']['value'],this['_topInput'][q(0xd0)]=c=>this['_valueTop']=this['_topInput']['value'],this['_rightInput']['onblur']=c=>this['_valueRight']=this[q(0xe1)]['value'],this[q(0xe9)]['onblur']=c=>this['_valueBottom']=this[q(0xe9)][q(0xf3)],this[q(0xd5)]();}}customElements[i(0xf0)]('node-projects-thickness-editor',ThicknessEditor);