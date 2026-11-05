function b(c,d){c=c-0x17c;var e=a();var f=e[c];return f;}var i=b;function a(){var o=['702261BxszHa','902456BbKyoD','emit','1NGkNEn','235ShlqbT','template','setSelection','544922bIJfhm','20cmZnjb','setSelectionRange','dispose','_text','style','focus','value','3230447tBLJbL','8MnDpbS','550CYPyae','964353EEqSzF','start','update','26844DiNWIO'];a=function(){return o;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x181))/0x1*(parseInt(h(0x18f))/0x2)+-parseInt(h(0x190))/0x3+-parseInt(h(0x17f))/0x4+-parseInt(h(0x182))/0x5*(-parseInt(h(0x17d))/0x6)+-parseInt(h(0x185))/0x7*(parseInt(h(0x18e))/0x8)+parseInt(h(0x17e))/0x9+-parseInt(h(0x186))/0xa*(-parseInt(h(0x18d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3d26b));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x188)](){}['canvasElement'];['elementsToPackages'];['onTextChanged']=new TypedEvent();['_text'];static [i(0x18a)]=css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    textarea {
      height: 100%;
      width: 100%;
      resize: none;
      white-space: nowrap;
      box-sizing: border-box;
    }
    `;static [i(0x183)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement']('text'),this[j(0x189)]['oninput']=()=>this['onTextChanged'][j(0x180)](this[j(0x189)]['value']);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x18b)](),this['_text']['focus']();});}['activated'](){}[i(0x17c)](c){var l=i;this['_text'][l(0x18c)]=c;}['getText'](){var m=i;return this['_text'][m(0x18c)];}[i(0x184)](c){var n=i;this['_text'][n(0x187)](c['start'],c[n(0x191)]+c['length']);}}customElements['define']('node-projects-code-view-simple',CodeViewSimple);