var i=b;function b(c,d){c=c-0x1a6;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1ab))/0x1*(parseInt(h(0x1ae))/0x2)+parseInt(h(0x1ba))/0x3+-parseInt(h(0x1bd))/0x4*(-parseInt(h(0x1a8))/0x5)+-parseInt(h(0x1b6))/0x6+-parseInt(h(0x1bb))/0x7+parseInt(h(0x1b4))/0x8*(parseInt(h(0x1ac))/0x9)+parseInt(h(0x1af))/0xa*(parseInt(h(0x1b2))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcc519));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){var o=['dispose','506CVHlvJ','executeCommand','1752kEHlNI','style','2677086irzmiL','emit','value','text','1375323tckZJt','3119956dwQzLt','update','116xAJhqG','getText','setSelection','72685PWEynq','onTextChanged','elementsToPackages','2399igndSw','52227nyKLnP','focus','538nRqJSg','48530DtPZlF','_text'];a=function(){return o;};return a();}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x1b1)](){}['canvasElement'];[i(0x1aa)];[i(0x1a9)]=new TypedEvent();[i(0x1b0)];static [i(0x1b5)]=css`
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
    `;static ['template']=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0x1b3)](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement'](j(0x1b9)),this[j(0x1b0)]['oninput']=()=>this[j(0x1a9)][j(0x1b7)](this[j(0x1b0)][j(0x1b8)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this['focus'](),this['_text'][k(0x1ad)]();});}['activated'](){}[i(0x1bc)](c){var l=i;this[l(0x1b0)][l(0x1b8)]=c;}[i(0x1a6)](){var m=i;return this[m(0x1b0)]['value'];}[i(0x1a7)](c){var n=i;this[n(0x1b0)]['setSelectionRange'](c['start'],c['start']+c['length']);}}customElements['define']('node-projects-code-view-simple',CodeViewSimple);