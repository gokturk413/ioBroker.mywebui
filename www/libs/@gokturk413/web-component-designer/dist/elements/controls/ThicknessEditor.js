const i=b;function a(){const w=['top','_valueBottom','value','right','6131104SGlTNz','195159PXomow','_bottomInput','valueTop','valueBottom','valueBottomChanged','emit','1465464cbQCIC','valueLeft','8uMORId','valueTopChanged','327460aOvLtZ','_leftInput','valueLeftChanged','15803348LqHfrq','36RKGcSm','126wxEyNy','_updateValue','key','valueRight','205510CKtkxM','style','_rightInput','_topInput','valueRightChanged','onkeyup','onblur','property','_getDomElement','16mcXiVX','_valueTop','_valueRight','493266TKJbrX','bottom','_valueLeft'];a=function(){return w;};return a();}function b(c,d){c=c-0x66;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x76))/0x1+-parseInt(h(0x73))/0x2*(-parseInt(h(0x7e))/0x3)+-parseInt(h(0x84))/0x4+parseInt(h(0x6a))/0x5*(-parseInt(h(0x8c))/0x6)+-parseInt(h(0x7d))/0x7*(parseInt(h(0x86))/0x8)+parseInt(h(0x66))/0x9*(-parseInt(h(0x88))/0xa)+parseInt(h(0x8b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7ad18));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x6b)]=css`
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
  `;[i(0x89)];['_topInput'];[i(0x6c)];['_bottomInput'];['_valueLeft'];get[i(0x85)](){const j=i;return this[j(0x78)];}set['valueLeft'](c){const k=i,d=this['_valueLeft'];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[k(0x8a)][k(0x83)]({'newValue':c,'oldValue':d}));}[i(0x8a)]=new TypedEvent();['_valueTop'];get['valueTop'](){const l=i;return this[l(0x74)];}set['valueTop'](c){const m=i,d=this[m(0x74)];this[m(0x74)]=c,d!==c&&(this[m(0x67)](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x87)]=new TypedEvent();[i(0x75)];get['valueRight'](){const n=i;return this[n(0x75)];}set[i(0x69)](c){const o=i,d=this[o(0x75)];this[o(0x75)]=c,d!==c&&(this['_updateValue'](),this[o(0x6e)]['emit']({'newValue':c,'oldValue':d}));}[i(0x6e)]=new TypedEvent();[i(0x7a)];get['valueBottom'](){return this['_valueBottom'];}set[i(0x81)](c){const p=i,d=this[p(0x7a)];this['_valueBottom']=c,d!==c&&(this[p(0x67)](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x82)]=new TypedEvent();[i(0x71)];['unsetValue'];[i(0x67)](){const q=i;this['_leftInput']['value']=this[q(0x85)],this[q(0x6d)][q(0x7b)]=this[q(0x80)],this[q(0x6c)][q(0x7b)]=this['valueRight'],this[q(0x7f)]['value']=this[q(0x7a)];}['ready'](){const r=i;this['_parseAttributesToProperties'](),this['_leftInput']=this[r(0x72)]('left'),this['_topInput']=this[r(0x72)](r(0x79)),this[r(0x6c)]=this['_getDomElement'](r(0x7c)),this[r(0x7f)]=this[r(0x72)](r(0x77)),this[r(0x89)][r(0x6f)]=c=>{const s=r;if(c[s(0x68)]==='Enter')this['_valueLeft']=this['_leftInput'][s(0x7b)];},this[r(0x6d)]['onkeyup']=c=>{const t=r;if(c[t(0x68)]==='Enter')this['_valueTop']=this['_topInput'][t(0x7b)];},this[r(0x6c)]['onkeyup']=c=>{const u=r;if(c[u(0x68)]==='Enter')this[u(0x75)]=this[u(0x6c)]['value'];},this['_bottomInput']['onkeyup']=c=>{const v=r;if(c['key']==='Enter')this[v(0x7a)]=this['_bottomInput']['value'];},this[r(0x89)][r(0x70)]=c=>this['_valueLeft']=this[r(0x89)][r(0x7b)],this['_topInput']['onblur']=c=>this['_valueTop']=this[r(0x6d)]['value'],this['_rightInput'][r(0x70)]=c=>this['_valueRight']=this['_rightInput']['value'],this['_bottomInput']['onblur']=c=>this[r(0x7a)]=this['_bottomInput']['value'],this['_updateValue']();}}customElements['define']('node-projects-thickness-editor',ThicknessEditor);