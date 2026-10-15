const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x188))/0x1*(-parseInt(h(0x178))/0x2)+parseInt(h(0x16d))/0x3+-parseInt(h(0x171))/0x4*(parseInt(h(0x173))/0x5)+parseInt(h(0x184))/0x6+-parseInt(h(0x17b))/0x7*(-parseInt(h(0x17d))/0x8)+parseInt(h(0x176))/0x9+-parseInt(h(0x16c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3c574));function b(c,d){c=c-0x16a;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){const v=['250xMxDzI','define','valueRight','2658645wfPTjp','Enter','15108FlJFZx','valueLeftChanged','_getDomElement','312011jgBnzd','_topInput','8xJEnjY','value','left','_bottomInput','_rightInput','_updateValue','emit','2372478Xeqblz','valueTop','valueTopChanged','_valueRight','9aGcYuk','_valueTop','valueBottom','_leftInput','key','onblur','top','valueLeft','bottom','_valueBottom','4034920bZVCrc','589479GNxKGC','_valueLeft','valueBottomChanged','onkeyup','17060jwzzRr','valueRightChanged'];a=function(){return v;};return a();}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;['_leftInput'];['_topInput'];[i(0x181)];['_bottomInput'];[i(0x16e)];get['valueLeft'](){const j=i;return this[j(0x16e)];}set['valueLeft'](c){const k=i,d=this[k(0x16e)];this['_valueLeft']=c,d!==c&&(this[k(0x182)](),this[k(0x179)][k(0x183)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();[i(0x189)];get['valueTop'](){return this['_valueTop'];}set['valueTop'](c){const l=i,d=this[l(0x189)];this[l(0x189)]=c,d!==c&&(this['_updateValue'](),this[l(0x186)]['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();[i(0x187)];get['valueRight'](){return this['_valueRight'];}set[i(0x175)](c){const m=i,d=this['_valueRight'];this[m(0x187)]=c,d!==c&&(this[m(0x182)](),this[m(0x172)]['emit']({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();['_valueBottom'];get['valueBottom'](){const n=i;return this[n(0x16b)];}set[i(0x18a)](c){const o=i,d=this[o(0x16b)];this[o(0x16b)]=c,d!==c&&(this['_updateValue'](),this[o(0x16f)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];['unsetValue'];['_updateValue'](){const p=i;this[p(0x18b)]['value']=this[p(0x18f)],this['_topInput'][p(0x17e)]=this[p(0x185)],this['_rightInput']['value']=this['valueRight'],this[p(0x180)]['value']=this[p(0x16b)];}['ready'](){const q=i;this['_parseAttributesToProperties'](),this['_leftInput']=this['_getDomElement'](q(0x17f)),this['_topInput']=this[q(0x17a)](q(0x18e)),this[q(0x181)]=this[q(0x17a)]('right'),this[q(0x180)]=this['_getDomElement'](q(0x16a)),this[q(0x18b)]['onkeyup']=c=>{const r=q;if(c['key']==='Enter')this['_valueLeft']=this[r(0x18b)]['value'];},this['_topInput']['onkeyup']=c=>{const s=q;if(c[s(0x18c)]==='Enter')this[s(0x189)]=this['_topInput'][s(0x17e)];},this[q(0x181)][q(0x170)]=c=>{const t=q;if(c[t(0x18c)]===t(0x177))this['_valueRight']=this[t(0x181)][t(0x17e)];},this[q(0x180)][q(0x170)]=c=>{const u=q;if(c['key']===u(0x177))this['_valueBottom']=this['_bottomInput'][u(0x17e)];},this[q(0x18b)][q(0x18d)]=c=>this['_valueLeft']=this['_leftInput'][q(0x17e)],this['_topInput']['onblur']=c=>this['_valueTop']=this[q(0x17c)][q(0x17e)],this['_rightInput'][q(0x18d)]=c=>this[q(0x187)]=this[q(0x181)][q(0x17e)],this['_bottomInput']['onblur']=c=>this[q(0x16b)]=this[q(0x180)][q(0x17e)],this['_updateValue']();}}customElements[i(0x174)]('node-projects-thickness-editor',ThicknessEditor);