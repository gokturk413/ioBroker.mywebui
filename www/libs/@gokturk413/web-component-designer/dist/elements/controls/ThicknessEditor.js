function a(){const s=['_valueBottom','onblur','_rightInput','_getDomElement','emit','18DYeoeD','value','define','top','valueRightChanged','_topInput','_updateValue','_valueTop','147069pZlJzA','4653oSovrt','style','15ZaSBss','_valueLeft','right','valueTopChanged','template','149208WHHhWN','_leftInput','valueLeftChanged','Enter','516BSCDqs','valueRight','_bottomInput','4ILQMHA','83392ZhoerP','1070bYZyNf','_parseAttributesToProperties','valueBottomChanged','valueLeft','onkeyup','332164tXALAF','16020RpTCed','_valueRight','key','unsetValue','175810CWVQHv'];a=function(){return s;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x204))/0x1+-parseInt(h(0x1f8))/0x2*(parseInt(h(0x212))/0x3)+parseInt(h(0x1f1))/0x4*(parseInt(h(0x215))/0x5)+parseInt(h(0x20a))/0x6*(parseInt(h(0x1ff))/0x7)+parseInt(h(0x1f9))/0x8+-parseInt(h(0x200))/0x9*(parseInt(h(0x1fa))/0xa)+-parseInt(h(0x213))/0xb*(parseInt(h(0x1f5))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x20aa9));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1f1;const e=a();let f=e[c];return f;}export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x214)]=css`
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
  `;static [i(0x219)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];['_topInput'];[i(0x207)];['_bottomInput'];[i(0x216)];get[i(0x1fd)](){return this['_valueLeft'];}set[i(0x1fd)](c){const j=i,d=this['_valueLeft'];this[j(0x216)]=c,d!==c&&(this[j(0x210)](),this[j(0x1f3)][j(0x209)]({'newValue':c,'oldValue':d}));}['valueLeftChanged']=new TypedEvent();['_valueTop'];get['valueTop'](){return this['_valueTop'];}set['valueTop'](c){const k=i,d=this['_valueTop'];this[k(0x211)]=c,d!==c&&(this[k(0x210)](),this['valueTopChanged'][k(0x209)]({'newValue':c,'oldValue':d}));}[i(0x218)]=new TypedEvent();[i(0x201)];get[i(0x1f6)](){return this['_valueRight'];}set[i(0x1f6)](c){const l=i,d=this['_valueRight'];this[l(0x201)]=c,d!==c&&(this[l(0x210)](),this[l(0x20e)][l(0x209)]({'newValue':c,'oldValue':d}));}[i(0x20e)]=new TypedEvent();[i(0x205)];get['valueBottom'](){return this['_valueBottom'];}set['valueBottom'](c){const m=i,d=this['_valueBottom'];this[m(0x205)]=c,d!==c&&(this[m(0x210)](),this[m(0x1fc)][m(0x209)]({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];[i(0x203)];[i(0x210)](){const n=i;this[n(0x1f2)]['value']=this[n(0x1fd)],this['_topInput'][n(0x20b)]=this['valueTop'],this[n(0x207)]['value']=this['valueRight'],this['_bottomInput'][n(0x20b)]=this['_valueBottom'];}['ready'](){const o=i;this[o(0x1fb)](),this['_leftInput']=this['_getDomElement']('left'),this[o(0x20f)]=this['_getDomElement'](o(0x20d)),this['_rightInput']=this[o(0x208)](o(0x217)),this[o(0x1f7)]=this['_getDomElement']('bottom'),this[o(0x1f2)][o(0x1fe)]=c=>{const p=o;if(c[p(0x202)]==='Enter')this[p(0x216)]=this['_leftInput']['value'];},this['_topInput']['onkeyup']=c=>{if(c['key']==='Enter')this['_valueTop']=this['_topInput']['value'];},this['_rightInput'][o(0x1fe)]=c=>{const q=o;if(c['key']===q(0x1f4))this[q(0x201)]=this['_rightInput'][q(0x20b)];},this[o(0x1f7)][o(0x1fe)]=c=>{const r=o;if(c['key']===r(0x1f4))this['_valueBottom']=this[r(0x1f7)]['value'];},this[o(0x1f2)][o(0x206)]=c=>this[o(0x216)]=this[o(0x1f2)][o(0x20b)],this[o(0x20f)]['onblur']=c=>this['_valueTop']=this[o(0x20f)][o(0x20b)],this['_rightInput']['onblur']=c=>this['_valueRight']=this['_rightInput'][o(0x20b)],this[o(0x1f7)][o(0x206)]=c=>this[o(0x205)]=this[o(0x1f7)][o(0x20b)],this['_updateValue']();}}customElements[i(0x20c)]('node-projects-thickness-editor',ThicknessEditor);