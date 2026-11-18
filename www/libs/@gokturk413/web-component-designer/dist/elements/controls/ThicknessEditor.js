const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x9b))/0x1*(-parseInt(h(0x94))/0x2)+-parseInt(h(0x79))/0x3*(parseInt(h(0x7c))/0x4)+parseInt(h(0x88))/0x5+-parseInt(h(0x92))/0x6*(parseInt(h(0x97))/0x7)+parseInt(h(0x90))/0x8+-parseInt(h(0x8b))/0x9*(-parseInt(h(0x95))/0xa)+-parseInt(h(0x8e))/0xb*(-parseInt(h(0x8a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7a741));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x93)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];['_topInput'];[i(0x9d)];['_bottomInput'];[i(0x8d)];get[i(0x83)](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this[j(0x8d)];this['_valueLeft']=c,d!==c&&(this[j(0x9e)](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get[i(0x91)](){const k=i;return this[k(0x7a)];}set['valueTop'](c){const l=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[l(0x9e)](),this['valueTopChanged'][l(0x7e)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get['valueRight'](){return this['_valueRight'];}set[i(0x96)](c){const m=i,d=this[m(0x98)];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this['valueRightChanged'][m(0x7e)]({'newValue':c,'oldValue':d}));}[i(0x89)]=new TypedEvent();['_valueBottom'];get[i(0x8f)](){const n=i;return this[n(0x82)];}set['valueBottom'](c){const o=i,d=this['_valueBottom'];this[o(0x82)]=c,d!==c&&(this['_updateValue'](),this[o(0x81)]['emit']({'newValue':c,'oldValue':d}));}[i(0x81)]=new TypedEvent();['property'];['unsetValue'];[i(0x9e)](){const p=i;this[p(0x9f)][p(0x86)]=this[p(0x83)],this['_topInput'][p(0x86)]=this['valueTop'],this[p(0x9d)][p(0x86)]=this[p(0x96)],this[p(0x84)]['value']=this['_valueBottom'];}[i(0x8c)](){const q=i;this['_parseAttributesToProperties'](),this[q(0x9f)]=this[q(0x7b)]('left'),this[q(0x87)]=this[q(0x7b)](q(0x9c)),this[q(0x9d)]=this['_getDomElement']('right'),this['_bottomInput']=this[q(0x7b)]('bottom'),this['_leftInput'][q(0x9a)]=c=>{const r=q;if(c['key']===r(0x99))this[r(0x8d)]=this[r(0x9f)]['value'];},this[q(0x87)][q(0x9a)]=c=>{const s=q;if(c[s(0x7d)]==='Enter')this[s(0x7a)]=this['_topInput'][s(0x86)];},this[q(0x9d)]['onkeyup']=c=>{if(c['key']==='Enter')this['_valueRight']=this['_rightInput']['value'];},this['_bottomInput']['onkeyup']=c=>{const t=q;if(c[t(0x7d)]===t(0x99))this['_valueBottom']=this[t(0x84)]['value'];},this[q(0x9f)][q(0x80)]=c=>this['_valueLeft']=this[q(0x9f)][q(0x86)],this['_topInput']['onblur']=c=>this['_valueTop']=this[q(0x87)]['value'],this[q(0x9d)]['onblur']=c=>this[q(0x98)]=this['_rightInput']['value'],this['_bottomInput'][q(0x80)]=c=>this['_valueBottom']=this[q(0x84)]['value'],this['_updateValue']();}}customElements[i(0x85)](i(0x7f),ThicknessEditor);function b(c,d){c=c-0x79;const e=a();let f=e[c];return f;}function a(){const u=['key','emit','node-projects-thickness-editor','onblur','valueBottomChanged','_valueBottom','valueLeft','_bottomInput','define','value','_topInput','4760065UsqnoP','valueRightChanged','12pmEBww','9wWJETq','ready','_valueLeft','4536191ipYwSU','valueBottom','6760088hwjAQS','valueTop','6tZzIYC','template','16024pwSWRp','9176190MIcAhD','valueRight','6807367DfUrRr','_valueRight','Enter','onkeyup','124tjcGEm','top','_rightInput','_updateValue','_leftInput','597cteLqv','_valueTop','_getDomElement','13256SywQZu'];a=function(){return u;};return a();}