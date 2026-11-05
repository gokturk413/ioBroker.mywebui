function b(c,d){c=c-0xa3;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xb2))/0x1*(-parseInt(h(0xa4))/0x2)+parseInt(h(0xb4))/0x3*(-parseInt(h(0xb9))/0x4)+-parseInt(h(0xb5))/0x5*(parseInt(h(0xa7))/0x6)+-parseInt(h(0xa8))/0x7*(-parseInt(h(0xbb))/0x8)+-parseInt(h(0xb7))/0x9+parseInt(h(0xaa))/0xa+parseInt(h(0xbc))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x61c29));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0xa5)](){}['canvasElement'];[i(0xba)];[i(0xae)]=new TypedEvent();[i(0xb8)];static [i(0xa6)]=css`
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
    `;static [i(0xad)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this[j(0xb3)](j(0xac)),this[j(0xb8)]['oninput']=()=>this[j(0xae)][j(0xb0)](this['_text']['value']);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0xb1)](),this[k(0xb8)]['focus']();});}['activated'](){}['update'](c){var l=i;this[l(0xb8)]['value']=c;}[i(0xab)](){return this['_text']['value'];}['setSelection'](c){var m=i;this['_text'][m(0xaf)](c['start'],c[m(0xb6)]+c[m(0xa9)]);}}customElements['define'](i(0xa3),CodeViewSimple);function a(){var n=['text','template','onTextChanged','setSelectionRange','emit','focus','1WcliSG','_getDomElement','219dqCidg','5XqoNYl','start','4113405koQgYn','_text','18492KDfPUS','elementsToPackages','111568khbxNt','23110670zmEOpC','node-projects-code-view-simple','1364334WWImmL','dispose','style','2491386FWVzRg','63GKBJcT','length','658630UXalpq','getText'];a=function(){return n;};return a();}