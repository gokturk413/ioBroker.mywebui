function b(c,d){c=c-0x108;const e=a();let f=e[c];return f;}function a(){const w=['_valueRight','onblur','54657cGrvUh','define','4519233OVsRbg','2356056YuWHlo','ready','valueBottom','6467248NluCIX','913512IbykSe','_valueLeft','valueTop','_bottomInput','valueLeftChanged','_getDomElement','4990RoIBLn','_rightInput','bottom','Enter','emit','value','valueLeft','_valueBottom','node-projects-thickness-editor','valueBottomChanged','left','_valueTop','1152302vdEtlE','475995EaOWbD','14wvgAel','onkeyup','2pAvRPv','template','_updateValue','_topInput','_leftInput'];a=function(){return w;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x111))/0x1*(-parseInt(h(0x115))/0x2)+parseInt(h(0x11e))/0x3+parseInt(h(0x11f))/0x4+parseInt(h(0x112))/0x5+parseInt(h(0x123))/0x6*(-parseInt(h(0x113))/0x7)+parseInt(h(0x122))/0x8+parseInt(h(0x11c))/0x9*(-parseInt(h(0x129))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc7511));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class ThicknessEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [i(0x116)]=html`
    <div id="container">
      <input id="left">
      <input id="top">
      <input id="right">
      <input id="bottom">
      <div id="rect"></div>
    </div>
  `;['_leftInput'];[i(0x118)];[i(0x12a)];[i(0x126)];[i(0x124)];get['valueLeft'](){const j=i;return this[j(0x124)];}set['valueLeft'](c){const k=i,d=this['_valueLeft'];this[k(0x124)]=c,d!==c&&(this[k(0x117)](),this[k(0x127)]['emit']({'newValue':c,'oldValue':d}));}[i(0x127)]=new TypedEvent();['_valueTop'];get['valueTop'](){const l=i;return this[l(0x110)];}set[i(0x125)](c){const m=i,d=this[m(0x110)];this[m(0x110)]=c,d!==c&&(this[m(0x117)](),this['valueTopChanged']['emit']({'newValue':c,'oldValue':d}));}['valueTopChanged']=new TypedEvent();['_valueRight'];get['valueRight'](){const n=i;return this[n(0x11a)];}set['valueRight'](c){const o=i,d=this[o(0x11a)];this['_valueRight']=c,d!==c&&(this['_updateValue'](),this['valueRightChanged'][o(0x109)]({'newValue':c,'oldValue':d}));}['valueRightChanged']=new TypedEvent();['_valueBottom'];get['valueBottom'](){const p=i;return this[p(0x10c)];}set[i(0x121)](c){const q=i,d=this['_valueBottom'];this[q(0x10c)]=c,d!==c&&(this['_updateValue'](),this[q(0x10e)]['emit']({'newValue':c,'oldValue':d}));}['valueBottomChanged']=new TypedEvent();['property'];['unsetValue'];['_updateValue'](){const r=i;this['_leftInput']['value']=this[r(0x10b)],this['_topInput']['value']=this['valueTop'],this[r(0x12a)]['value']=this['valueRight'],this['_bottomInput']['value']=this[r(0x10c)];}[i(0x120)](){const s=i;this['_parseAttributesToProperties'](),this['_leftInput']=this['_getDomElement'](s(0x10f)),this[s(0x118)]=this['_getDomElement']('top'),this[s(0x12a)]=this[s(0x128)]('right'),this['_bottomInput']=this['_getDomElement'](s(0x12b)),this[s(0x119)]['onkeyup']=c=>{const t=s;if(c['key']===t(0x108))this['_valueLeft']=this[t(0x119)]['value'];},this['_topInput']['onkeyup']=c=>{if(c['key']==='Enter')this['_valueTop']=this['_topInput']['value'];},this['_rightInput'][s(0x114)]=c=>{const u=s;if(c['key']===u(0x108))this[u(0x11a)]=this['_rightInput'][u(0x10a)];},this['_bottomInput'][s(0x114)]=c=>{const v=s;if(c['key']==='Enter')this['_valueBottom']=this[v(0x126)]['value'];},this[s(0x119)][s(0x11b)]=c=>this['_valueLeft']=this[s(0x119)]['value'],this[s(0x118)][s(0x11b)]=c=>this['_valueTop']=this['_topInput'][s(0x10a)],this['_rightInput']['onblur']=c=>this['_valueRight']=this[s(0x12a)][s(0x10a)],this['_bottomInput'][s(0x11b)]=c=>this[s(0x10c)]=this['_bottomInput'][s(0x10a)],this['_updateValue']();}}customElements[i(0x11d)](i(0x10d),ThicknessEditor);