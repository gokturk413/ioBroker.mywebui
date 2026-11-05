function b(c,d){c=c-0x169;const e=a();let f=e[c];return f;}const i=b;function a(){const v=['valueLeftChanged','valueLeft','96238HUBFMa','125688zTjuvh','style','6773680ZCBoQI','_valueLeft','_topInput','_rightInput','key','onblur','emit','Enter','_valueTop','valueBottomChanged','_updateValue','6Aaffnj','234fvUQTx','1536168CusZjW','67732xsHycj','196QQgybC','valueTop','onkeyup','_leftInput','_getDomElement','_bottomInput','_valueRight','unsetValue','_valueBottom','valueRight','value','237184SIIOdM','bottom','145bOzoLA','41289149HVphRP','top'];a=function(){return v;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x17e))/0x1*(parseInt(h(0x18c))/0x2)+-parseInt(h(0x16a))/0x3+-parseInt(h(0x16b))/0x4*(parseInt(h(0x179))/0x5)+-parseInt(h(0x17f))/0x6*(parseInt(h(0x16c))/0x7)+-parseInt(h(0x177))/0x8*(parseInt(h(0x169))/0x9)+-parseInt(h(0x181))/0xa+parseInt(h(0x17a))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x683dc));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x180)]=css`
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
  `;[i(0x16f)];[i(0x183)];['_rightInput'];[i(0x171)];[i(0x182)];get['valueLeft'](){const j=i;return this[j(0x182)];}set[i(0x17d)](c){const k=i,d=this[k(0x182)];this['_valueLeft']=c,d!==c&&(this[k(0x18b)](),this['valueLeftChanged'][k(0x187)]({'newValue':c,'oldValue':d}));}[i(0x17c)]=new TypedEvent();[i(0x189)];get['valueTop'](){return this['_valueTop'];}set[i(0x16d)](c){const l=i,d=this[l(0x189)];this[l(0x189)]=c,d!==c&&(this[l(0x18b)](),this['valueTopChanged'][l(0x187)]({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();[i(0x172)];get[i(0x175)](){const m=i;return this[m(0x172)];}set['valueRight'](c){const n=i,d=this[n(0x172)];this[n(0x172)]=c,d!==c&&(this[n(0x18b)](),this['valueRightChanged']['emit']({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();['_valueBottom'];get['valueBottom'](){return this['_valueBottom'];}set['valueBottom'](c){const o=i,d=this['_valueBottom'];this['_valueBottom']=c,d!==c&&(this[o(0x18b)](),this[o(0x18a)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];[i(0x173)];['_updateValue'](){const p=i;this[p(0x16f)][p(0x176)]=this[p(0x17d)],this['_topInput'][p(0x176)]=this[p(0x16d)],this['_rightInput'][p(0x176)]=this[p(0x175)],this['_bottomInput'][p(0x176)]=this[p(0x174)];}['ready'](){const q=i;this['_parseAttributesToProperties'](),this['_leftInput']=this[q(0x170)]('left'),this['_topInput']=this[q(0x170)](q(0x17b)),this[q(0x184)]=this[q(0x170)]('right'),this['_bottomInput']=this[q(0x170)](q(0x178)),this['_leftInput'][q(0x16e)]=c=>{const r=q;if(c['key']===r(0x188))this[r(0x182)]=this['_leftInput'][r(0x176)];},this[q(0x183)][q(0x16e)]=c=>{const s=q;if(c[s(0x185)]===s(0x188))this[s(0x189)]=this['_topInput']['value'];},this['_rightInput']['onkeyup']=c=>{const t=q;if(c[t(0x185)]==='Enter')this[t(0x172)]=this['_rightInput']['value'];},this['_bottomInput'][q(0x16e)]=c=>{const u=q;if(c[u(0x185)]==='Enter')this[u(0x174)]=this[u(0x171)][u(0x176)];},this[q(0x16f)]['onblur']=c=>this['_valueLeft']=this[q(0x16f)][q(0x176)],this[q(0x183)][q(0x186)]=c=>this[q(0x189)]=this[q(0x183)][q(0x176)],this[q(0x184)][q(0x186)]=c=>this[q(0x172)]=this['_rightInput'][q(0x176)],this[q(0x171)][q(0x186)]=c=>this['_valueBottom']=this['_bottomInput'][q(0x176)],this[q(0x18b)]();}}customElements['define']('node-projects-thickness-editor',ThicknessEditor);