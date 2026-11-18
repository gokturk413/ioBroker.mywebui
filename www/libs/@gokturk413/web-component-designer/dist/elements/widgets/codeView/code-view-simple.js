function b(c,d){c=c-0x9b;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xae))/0x1+-parseInt(h(0xac))/0x2*(-parseInt(h(0xb0))/0x3)+-parseInt(h(0xaf))/0x4*(parseInt(h(0x9b))/0x5)+parseInt(h(0xa3))/0x6+parseInt(h(0xb3))/0x7*(-parseInt(h(0xa2))/0x8)+-parseInt(h(0xb1))/0x9+parseInt(h(0xad))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd5e72));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){var n=['393uEUVuC','9158553qZVuwh','start','7rTNmUA','4765ZDbDfK','setSelection','update','canExecuteCommand','activated','value','node-projects-code-view-simple','6902680EhkpwA','2080698GnBktC','define','elementsToPackages','_text','_getDomElement','getText','onTextChanged','template','dispose','17486bYIchV','18514130cYIZhM','465900ccdFyB','508MesRUF'];a=function(){return n;};return a();}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0xab)](){}['canvasElement'];[i(0xa5)];['onTextChanged']=new TypedEvent();['_text'];static ['style']=css`
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
    `;static [i(0xaa)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}[i(0x9e)](c){return![];}constructor(){var j=i;super(),this[j(0xa6)]=this[j(0xa7)]('text'),this['_text']['oninput']=()=>this[j(0xa9)]['emit'](this['_text']['value']);}['focusEditor'](){requestAnimationFrame(()=>{this['focus'](),this['_text']['focus']();});}[i(0x9f)](){}[i(0x9d)](c){var k=i;this[k(0xa6)]['value']=c;}[i(0xa8)](){var l=i;return this['_text'][l(0xa0)];}[i(0x9c)](c){var m=i;this[m(0xa6)]['setSelectionRange'](c['start'],c[m(0xb2)]+c['length']);}}customElements[i(0xa4)](i(0xa1),CodeViewSimple);