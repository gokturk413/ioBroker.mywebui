const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1e0))/0x1+parseInt(h(0x1c2))/0x2+-parseInt(h(0x1e3))/0x3*(-parseInt(h(0x1d9))/0x4)+-parseInt(h(0x1da))/0x5+-parseInt(h(0x1df))/0x6*(parseInt(h(0x1d8))/0x7)+-parseInt(h(0x1d4))/0x8*(parseInt(h(0x1dc))/0x9)+parseInt(h(0x1e4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1fe86));function b(c,d){c=c-0x1c0;const e=a();let f=e[c];return f;}function a(){const w=['node-projects-thickness-editor','352386vJeKhK','template','_leftInput','valueRight','_rightInput','_getDomElement','valueBottom','emit','define','valueLeftChanged','left','_valueRight','_valueTop','valueTop','valueLeft','_bottomInput','key','Enter','872vBWVjQ','_updateValue','onblur','_topInput','226191mFsBGg','12qpkadI','41220ORzipR','_valueBottom','20646FiomPo','value','_valueLeft','30aMdmHs','16750aoSGod','onkeyup','property','82317GUyMLe','3087890PeIgxy','unsetValue','valueBottomChanged'];a=function(){return w;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x1c3)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0x1c4)];['_topInput'];[i(0x1c6)];['_bottomInput'];['_valueLeft'];get[i(0x1d0)](){const j=i;return this[j(0x1de)];}set['valueLeft'](c){const k=i,d=this[k(0x1de)];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1cb)]=new TypedEvent();[i(0x1ce)];get['valueTop'](){const l=i;return this[l(0x1ce)];}set['valueTop'](c){const m=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[m(0x1d5)](),this['valueTopChanged'][m(0x1c9)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get[i(0x1c5)](){const n=i;return this[n(0x1cd)];}set[i(0x1c5)](c){const o=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[o(0x1d5)](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();[i(0x1db)];get['valueBottom'](){return this['_valueBottom'];}set[i(0x1c8)](c){const p=i,d=this[p(0x1db)];this['_valueBottom']=c,d!==c&&(this[p(0x1d5)](),this[p(0x1c0)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();[i(0x1e2)];[i(0x1e5)];['_updateValue'](){const q=i;this[q(0x1c4)]['value']=this['valueLeft'],this[q(0x1d7)]['value']=this[q(0x1cf)],this[q(0x1c6)]['value']=this['valueRight'],this[q(0x1d1)][q(0x1dd)]=this['_valueBottom'];}['ready'](){const r=i;this['_parseAttributesToProperties'](),this['_leftInput']=this['_getDomElement'](r(0x1cc)),this[r(0x1d7)]=this[r(0x1c7)]('top'),this[r(0x1c6)]=this['_getDomElement']('right'),this[r(0x1d1)]=this['_getDomElement']('bottom'),this[r(0x1c4)][r(0x1e1)]=c=>{const s=r;if(c['key']===s(0x1d3))this['_valueLeft']=this['_leftInput']['value'];},this[r(0x1d7)]['onkeyup']=c=>{const t=r;if(c['key']==='Enter')this[t(0x1ce)]=this['_topInput'][t(0x1dd)];},this[r(0x1c6)]['onkeyup']=c=>{const u=r;if(c[u(0x1d2)]==='Enter')this['_valueRight']=this['_rightInput'][u(0x1dd)];},this['_bottomInput'][r(0x1e1)]=c=>{const v=r;if(c['key']==='Enter')this['_valueBottom']=this['_bottomInput'][v(0x1dd)];},this[r(0x1c4)]['onblur']=c=>this[r(0x1de)]=this[r(0x1c4)][r(0x1dd)],this['_topInput'][r(0x1d6)]=c=>this[r(0x1ce)]=this['_topInput']['value'],this[r(0x1c6)]['onblur']=c=>this['_valueRight']=this['_rightInput'][r(0x1dd)],this[r(0x1d1)]['onblur']=c=>this[r(0x1db)]=this['_bottomInput']['value'],this['_updateValue']();}}customElements[i(0x1ca)](i(0x1c1),ThicknessEditor);