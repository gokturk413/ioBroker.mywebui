const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x14c))/0x1*(-parseInt(h(0x155))/0x2)+parseInt(h(0x150))/0x3+-parseInt(h(0x14e))/0x4*(-parseInt(h(0x15e))/0x5)+parseInt(h(0x149))/0x6+-parseInt(h(0x145))/0x7+-parseInt(h(0x146))/0x8+parseInt(h(0x162))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5cc7c));function a(){const t=['_leftInput','2xqdxaf','key','valueLeftChanged','value','_getDomElement','onkeyup','node-projects-thickness-editor','valueTop','_updateValue','31610FasFTM','_rightInput','_valueRight','valueLeft','898605IrLqda','_bottomInput','_valueBottom','Enter','2377550XvUwdu','2864416JZLIXG','ready','onblur','2888796iykpeT','valueRight','emit','711239jFjths','_valueLeft','436FoDRSr','left','1555680DlywQN','_topInput','valueBottomChanged','property'];a=function(){return t;};return a();}function b(c,d){c=c-0x143;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;[i(0x154)];[i(0x151)];['_rightInput'];['_bottomInput'];['_valueLeft'];get[i(0x161)](){return this['_valueLeft'];}set[i(0x161)](c){const j=i,d=this[j(0x14d)];this[j(0x14d)]=c,d!==c&&(this[j(0x15d)](),this['valueLeftChanged'][j(0x14b)]({'newValue':c,'oldValue':d}));}[i(0x157)]=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set[i(0x15c)](c){const k=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[k(0x15d)](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0x14a)](){return this['_valueRight'];}set[i(0x14a)](c){const l=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[l(0x15d)](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();[i(0x143)];get['valueBottom'](){return this['_valueBottom'];}set['valueBottom'](c){const m=i,d=this[m(0x143)];this['_valueBottom']=c,d!==c&&(this['_updateValue'](),this[m(0x152)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0x153)];['unsetValue'];['_updateValue'](){const n=i;this[n(0x154)][n(0x158)]=this['valueLeft'],this['_topInput'][n(0x158)]=this[n(0x15c)],this['_rightInput'][n(0x158)]=this['valueRight'],this['_bottomInput'][n(0x158)]=this[n(0x143)];}[i(0x147)](){const o=i;this['_parseAttributesToProperties'](),this[o(0x154)]=this['_getDomElement'](o(0x14f)),this[o(0x151)]=this['_getDomElement']('top'),this['_rightInput']=this[o(0x159)]('right'),this['_bottomInput']=this['_getDomElement']('bottom'),this[o(0x154)]['onkeyup']=c=>{const p=o;if(c[p(0x156)]===p(0x144))this[p(0x14d)]=this['_leftInput'][p(0x158)];},this['_topInput'][o(0x15a)]=c=>{const q=o;if(c['key']===q(0x144))this['_valueTop']=this['_topInput'][q(0x158)];},this[o(0x15f)]['onkeyup']=c=>{const r=o;if(c[r(0x156)]===r(0x144))this['_valueRight']=this['_rightInput'][r(0x158)];},this['_bottomInput'][o(0x15a)]=c=>{const s=o;if(c[s(0x156)]==='Enter')this['_valueBottom']=this['_bottomInput']['value'];},this['_leftInput']['onblur']=c=>this[o(0x14d)]=this['_leftInput'][o(0x158)],this['_topInput'][o(0x148)]=c=>this['_valueTop']=this[o(0x151)]['value'],this['_rightInput']['onblur']=c=>this[o(0x160)]=this['_rightInput']['value'],this['_bottomInput'][o(0x148)]=c=>this['_valueBottom']=this[o(0x163)]['value'],this['_updateValue']();}}customElements['define'](i(0x15b),ThicknessEditor);