function a(){const w=['valueLeft','3033975TrHQJo','120pOMKDL','2853GwVUmr','_valueLeft','_topInput','valueRight','valueLeftChanged','valueTopChanged','valueBottom','9951OcvYwb','_rightInput','1440vyxDda','_valueBottom','_leftInput','_getDomElement','4FnYiZi','Enter','left','style','_parseAttributesToProperties','_updateValue','value','6555030LYHqhQ','valueRightChanged','173876KFulMP','right','368448YQIIyI','_valueTop','2337945SLqmAK','emit','onkeyup','_bottomInput','valueTop','onblur','_valueRight','unsetValue','key'];a=function(){return w;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1d4))/0x1*(parseInt(h(0x1dd))/0x2)+parseInt(h(0x1ce))/0x3*(parseInt(h(0x1ec))/0x4)+-parseInt(h(0x1e1))/0x5+-parseInt(h(0x1df))/0x6+parseInt(h(0x1eb))/0x7+parseInt(h(0x1d0))/0x8*(-parseInt(h(0x1ed))/0x9)+parseInt(h(0x1db))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3e2a5));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1c8;const e=a();let f=e[c];return f;}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1d7)]=css`
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
    border: 1px solid black;
    background: lightgray;
  }
  `;static ['template']=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0x1d2)];[i(0x1c9)];['_rightInput'];[i(0x1e4)];[i(0x1c8)];get['valueLeft'](){const j=i;return this[j(0x1c8)];}set[i(0x1ea)](c){const k=i,d=this[k(0x1c8)];this[k(0x1c8)]=c,d!==c&&(this['_updateValue'](),this[k(0x1cb)][k(0x1e2)]({'newValue':c,'oldValue':d}));}[i(0x1cb)]=new TypedEvent();['_valueTop'];get[i(0x1e5)](){const l=i;return this[l(0x1e0)];}set['valueTop'](c){const m=i,d=this[m(0x1e0)];this['_valueTop']=c,d!==c&&(this[m(0x1d9)](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1cc)]=new TypedEvent();[i(0x1e7)];get['valueRight'](){return this['_valueRight'];}set['valueRight'](c){const n=i,d=this[n(0x1e7)];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this[n(0x1dc)]['emit']({'newValue':c,'oldValue':d}));}[i(0x1dc)]=new TypedEvent();['_valueBottom'];get[i(0x1cd)](){const o=i;return this[o(0x1d1)];}set[i(0x1cd)](c){const p=i,d=this[p(0x1d1)];this[p(0x1d1)]=c,d!==c&&(this[p(0x1d9)](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];[i(0x1e8)];['_updateValue'](){const q=i;this[q(0x1d2)][q(0x1da)]=this['valueLeft'],this['_topInput'][q(0x1da)]=this[q(0x1e5)],this[q(0x1cf)]['value']=this[q(0x1ca)],this[q(0x1e4)]['value']=this[q(0x1d1)];}['ready'](){const r=i;this[r(0x1d8)](),this[r(0x1d2)]=this['_getDomElement'](r(0x1d6)),this['_topInput']=this[r(0x1d3)]('top'),this[r(0x1cf)]=this[r(0x1d3)](r(0x1de)),this['_bottomInput']=this['_getDomElement']('bottom'),this[r(0x1d2)]['onkeyup']=c=>{const s=r;if(c[s(0x1e9)]==='Enter')this[s(0x1c8)]=this[s(0x1d2)]['value'];},this['_topInput'][r(0x1e3)]=c=>{const t=r;if(c['key']==='Enter')this[t(0x1e0)]=this[t(0x1c9)][t(0x1da)];},this[r(0x1cf)][r(0x1e3)]=c=>{const u=r;if(c['key']===u(0x1d5))this['_valueRight']=this[u(0x1cf)]['value'];},this['_bottomInput']['onkeyup']=c=>{const v=r;if(c[v(0x1e9)]==='Enter')this[v(0x1d1)]=this[v(0x1e4)][v(0x1da)];},this[r(0x1d2)]['onblur']=c=>this[r(0x1c8)]=this[r(0x1d2)]['value'],this[r(0x1c9)]['onblur']=c=>this[r(0x1e0)]=this['_topInput']['value'],this[r(0x1cf)][r(0x1e6)]=c=>this['_valueRight']=this[r(0x1cf)]['value'],this[r(0x1e4)]['onblur']=c=>this[r(0x1d1)]=this[r(0x1e4)]['value'],this['_updateValue']();}}customElements['define']('node-projects-thickness-editor',ThicknessEditor);