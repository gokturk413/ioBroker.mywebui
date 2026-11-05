const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1f1))/0x1+parseInt(h(0x1d2))/0x2+parseInt(h(0x1db))/0x3+parseInt(h(0x1e0))/0x4+-parseInt(h(0x1f2))/0x5*(-parseInt(h(0x1dd))/0x6)+-parseInt(h(0x1df))/0x7*(parseInt(h(0x1d6))/0x8)+-parseInt(h(0x1e5))/0x9*(parseInt(h(0x1e3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7b99b));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1d0;const e=a();let f=e[c];return f;}function a(){const u=['_valueLeft','valueBottom','onblur','valueRightChanged','key','_valueTop','_bottomInput','valueBottomChanged','703409LLdMcA','95Eezwmy','valueRight','right','unsetValue','style','template','valueTop','_valueBottom','510652cQgIGt','_rightInput','property','Enter','280LyGKdP','_topInput','_leftInput','_valueRight','top','2198904XTYmdz','emit','54570PlFhRM','bottom','154525WZMgco','558760VEjXlz','ready','onkeyup','380AmVQNC','value','171783tmmouS','valueLeft','_updateValue','valueTopChanged'];a=function(){return u;};return a();}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1f6)]=css`
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
  `;static [i(0x1f7)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;[i(0x1d8)];[i(0x1d7)];['_rightInput'];[i(0x1ef)];['_valueLeft'];get[i(0x1e6)](){return this['_valueLeft'];}set[i(0x1e6)](c){const j=i,d=this[j(0x1e9)];this[j(0x1e9)]=c,d!==c&&(this['_updateValue'](),this['valueLeftChanged']['emit']({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set['valueTop'](c){const k=i,d=this[k(0x1ee)];this[k(0x1ee)]=c,d!==c&&(this['_updateValue'](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1e8)]=new TypedEvent();[i(0x1d9)];get['valueRight'](){return this['_valueRight'];}set[i(0x1f3)](c){const l=i,d=this[l(0x1d9)];this['_valueRight']=c,d!==c&&(this[l(0x1e7)](),this['valueRightChanged'][l(0x1dc)]({'newValue':c,'oldValue':d}));}[i(0x1ec)]=new TypedEvent();['_valueBottom'];get['valueBottom'](){const m=i;return this[m(0x1d1)];}set[i(0x1ea)](c){const n=i,d=this['_valueBottom'];this[n(0x1d1)]=c,d!==c&&(this['_updateValue'](),this['valueBottomChanged']['emit']({'newValue':c,'oldValue':d}));}[i(0x1f0)]=new TypedEvent();[i(0x1d4)];[i(0x1f5)];[i(0x1e7)](){const o=i;this[o(0x1d8)]['value']=this[o(0x1e6)],this['_topInput']['value']=this[o(0x1d0)],this[o(0x1d3)]['value']=this['valueRight'],this['_bottomInput']['value']=this[o(0x1d1)];}[i(0x1e1)](){const p=i;this['_parseAttributesToProperties'](),this['_leftInput']=this['_getDomElement']('left'),this['_topInput']=this['_getDomElement'](p(0x1da)),this['_rightInput']=this['_getDomElement'](p(0x1f4)),this['_bottomInput']=this['_getDomElement'](p(0x1de)),this['_leftInput'][p(0x1e2)]=c=>{const q=p;if(c['key']==='Enter')this['_valueLeft']=this[q(0x1d8)]['value'];},this[p(0x1d7)][p(0x1e2)]=c=>{const r=p;if(c['key']==='Enter')this[r(0x1ee)]=this['_topInput']['value'];},this[p(0x1d3)]['onkeyup']=c=>{const s=p;if(c[s(0x1ed)]===s(0x1d5))this[s(0x1d9)]=this['_rightInput'][s(0x1e4)];},this[p(0x1ef)]['onkeyup']=c=>{const t=p;if(c['key']===t(0x1d5))this['_valueBottom']=this['_bottomInput']['value'];},this['_leftInput'][p(0x1eb)]=c=>this['_valueLeft']=this['_leftInput'][p(0x1e4)],this['_topInput'][p(0x1eb)]=c=>this[p(0x1ee)]=this[p(0x1d7)][p(0x1e4)],this[p(0x1d3)][p(0x1eb)]=c=>this[p(0x1d9)]=this['_rightInput'][p(0x1e4)],this[p(0x1ef)]['onblur']=c=>this['_valueBottom']=this['_bottomInput'][p(0x1e4)],this['_updateValue']();}}customElements['define']('node-projects-thickness-editor',ThicknessEditor);