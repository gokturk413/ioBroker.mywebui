const i=b;function a(){const u=['9925560vNVGkc','_valueRight','ready','valueLeftChanged','_valueBottom','valueBottom','419352KEqTnK','91MAcCup','valueTop','bottom','1562CDHRGZ','2056gPkRKK','_topInput','2vupbDD','73790VDtEZW','_getDomElement','43137RUdVKU','_leftInput','right','_valueTop','template','valueRightChanged','1278188SRHGZl','valueTopChanged','define','value','_bottomInput','_rightInput','emit','valueLeft','valueRight','_updateValue','Enter','4562262JNFQtf','onkeyup','_valueLeft','80nZqpbo','valueBottomChanged','102076HFSXvM','unsetValue','style'];a=function(){return u;};return a();}function b(c,d){c=c-0x1c4;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1d5))/0x1*(-parseInt(h(0x1cc))/0x2)+-parseInt(h(0x1e0))/0x3+parseInt(h(0x1e5))/0x4*(-parseInt(h(0x1e3))/0x5)+parseInt(h(0x1c5))/0x6*(parseInt(h(0x1c6))/0x7)+-parseInt(h(0x1ca))/0x8*(-parseInt(h(0x1cf))/0x9)+-parseInt(h(0x1cd))/0xa*(-parseInt(h(0x1c9))/0xb)+parseInt(h(0x1e8))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc54a3));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1e7)]=css`
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
  `;static [i(0x1d3)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0x1d0)];[i(0x1cb)];[i(0x1da)];[i(0x1d9)];[i(0x1e2)];get['valueLeft'](){return this['_valueLeft'];}set[i(0x1dc)](c){const j=i,d=this[j(0x1e2)];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[j(0x1eb)]['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0x1d2)];get['valueTop'](){return this['_valueTop'];}set[i(0x1c7)](c){const k=i,d=this[k(0x1d2)];this['_valueTop']=c,d!==c&&(this['_updateValue'](),this[k(0x1d6)][k(0x1db)]({'newValue':c,'oldValue':d}));}[i(0x1d6)]=new TypedEvent();[i(0x1e9)];get['valueRight'](){const l=i;return this[l(0x1e9)];}set[i(0x1dd)](c){const m=i,d=this[m(0x1e9)];this[m(0x1e9)]=c,d!==c&&(this[m(0x1de)](),this[m(0x1d4)]['emit']({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();[i(0x1ec)];get['valueBottom'](){return this['_valueBottom'];}set[i(0x1c4)](c){const n=i,d=this[n(0x1ec)];this[n(0x1ec)]=c,d!==c&&(this[n(0x1de)](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1e4)]=new TypedEvent();['property'];[i(0x1e6)];['_updateValue'](){const o=i;this[o(0x1d0)][o(0x1d8)]=this[o(0x1dc)],this['_topInput'][o(0x1d8)]=this['valueTop'],this[o(0x1da)]['value']=this['valueRight'],this[o(0x1d9)]['value']=this['_valueBottom'];}[i(0x1ea)](){const p=i;this['_parseAttributesToProperties'](),this[p(0x1d0)]=this[p(0x1ce)]('left'),this['_topInput']=this[p(0x1ce)]('top'),this[p(0x1da)]=this['_getDomElement'](p(0x1d1)),this[p(0x1d9)]=this[p(0x1ce)](p(0x1c8)),this[p(0x1d0)][p(0x1e1)]=c=>{const q=p;if(c['key']==='Enter')this['_valueLeft']=this['_leftInput'][q(0x1d8)];},this['_topInput'][p(0x1e1)]=c=>{const r=p;if(c['key']===r(0x1df))this['_valueTop']=this['_topInput'][r(0x1d8)];},this['_rightInput'][p(0x1e1)]=c=>{const s=p;if(c['key']==='Enter')this['_valueRight']=this['_rightInput'][s(0x1d8)];},this[p(0x1d9)]['onkeyup']=c=>{const t=p;if(c['key']===t(0x1df))this['_valueBottom']=this[t(0x1d9)][t(0x1d8)];},this['_leftInput']['onblur']=c=>this[p(0x1e2)]=this['_leftInput'][p(0x1d8)],this['_topInput']['onblur']=c=>this['_valueTop']=this['_topInput'][p(0x1d8)],this[p(0x1da)]['onblur']=c=>this['_valueRight']=this['_rightInput'][p(0x1d8)],this['_bottomInput']['onblur']=c=>this[p(0x1ec)]=this[p(0x1d9)][p(0x1d8)],this['_updateValue']();}}customElements[i(0x1d7)]('node-projects-thickness-editor',ThicknessEditor);