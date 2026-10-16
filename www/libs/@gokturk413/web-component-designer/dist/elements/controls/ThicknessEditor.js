const i=b;function b(c,d){c=c-0x117;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x11c))/0x1+parseInt(h(0x12c))/0x2+parseInt(h(0x11b))/0x3*(parseInt(h(0x11a))/0x4)+-parseInt(h(0x122))/0x5+-parseInt(h(0x12b))/0x6+-parseInt(h(0x131))/0x7*(-parseInt(h(0x120))/0x8)+parseInt(h(0x11f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa4a32));function a(){const t=['left','Enter','top','onblur','value','_updateValue','unsetValue','168Mufwmi','91344HsIutV','661738Vooofg','style','emit','9889443sSnYyp','368GsvdJb','_getDomElement','5538955bZsUAq','_leftInput','valueBottomChanged','valueRight','_topInput','_bottomInput','_valueBottom','valueTopChanged','valueLeftChanged','3847554vPDwPu','455070tIlGuy','valueTop','_valueRight','_valueTop','_valueLeft','73038thHIhQ','valueRightChanged','bottom','onkeyup','_rightInput'];a=function(){return t;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x11d)]=css`
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
  `;['_leftInput'];[i(0x126)];['_rightInput'];[i(0x127)];['_valueLeft'];get['valueLeft'](){return this['_valueLeft'];}set['valueLeft'](c){const j=i,d=this[j(0x130)];this['_valueLeft']=c,d!==c&&(this['_updateValue'](),this[j(0x12a)]['emit']({'newValue':c,'oldValue':d}));}[i(0x12a)]=new TypedEvent();[i(0x12f)];get['valueTop'](){return this['_valueTop'];}set[i(0x12d)](c){const k=i,d=this['_valueTop'];this['_valueTop']=c,d!==c&&(this[k(0x118)](),this[k(0x129)][k(0x11e)]({'newValue':c,'oldValue':d}));}[i(0x129)]=new TypedEvent();['_valueRight'];get[i(0x125)](){const l=i;return this[l(0x12e)];}set[i(0x125)](c){const m=i,d=this['_valueRight'];this['_valueRight']=c,d!==c&&(this[m(0x118)](),this[m(0x132)][m(0x11e)]({'newValue':c,'oldValue':d}));}[i(0x132)]=new TypedEvent();[i(0x128)];get['valueBottom'](){return this['_valueBottom'];}set['valueBottom'](c){const n=i,d=this['_valueBottom'];this['_valueBottom']=c,d!==c&&(this['_updateValue'](),this[n(0x124)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];[i(0x119)];['_updateValue'](){const o=i;this[o(0x123)]['value']=this['valueLeft'],this['_topInput']['value']=this[o(0x12d)],this['_rightInput'][o(0x117)]=this[o(0x125)],this['_bottomInput']['value']=this[o(0x128)];}['ready'](){const p=i;this['_parseAttributesToProperties'](),this['_leftInput']=this[p(0x121)](p(0x136)),this[p(0x126)]=this[p(0x121)](p(0x138)),this['_rightInput']=this[p(0x121)]('right'),this['_bottomInput']=this['_getDomElement'](p(0x133)),this[p(0x123)]['onkeyup']=c=>{const q=p;if(c['key']==='Enter')this['_valueLeft']=this['_leftInput'][q(0x117)];},this['_topInput'][p(0x134)]=c=>{const r=p;if(c['key']===r(0x137))this[r(0x12f)]=this['_topInput'][r(0x117)];},this['_rightInput'][p(0x134)]=c=>{const s=p;if(c['key']==='Enter')this['_valueRight']=this[s(0x135)][s(0x117)];},this[p(0x127)][p(0x134)]=c=>{if(c['key']==='Enter')this['_valueBottom']=this['_bottomInput']['value'];},this[p(0x123)]['onblur']=c=>this[p(0x130)]=this[p(0x123)][p(0x117)],this['_topInput'][p(0x139)]=c=>this['_valueTop']=this[p(0x126)][p(0x117)],this['_rightInput']['onblur']=c=>this[p(0x12e)]=this[p(0x135)][p(0x117)],this[p(0x127)][p(0x139)]=c=>this['_valueBottom']=this['_bottomInput'][p(0x117)],this['_updateValue']();}}customElements['define']('node-projects-thickness-editor',ThicknessEditor);