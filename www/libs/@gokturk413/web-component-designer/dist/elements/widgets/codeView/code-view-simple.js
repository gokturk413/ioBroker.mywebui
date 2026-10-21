function a(){var n=['6EXLqxF','354423HKwVrJ','dispose','style','onTextChanged','focus','canExecuteCommand','2933344EuWgpr','3094476uBMSaE','2062434hxWzSp','value','_text','setSelection','oninput','51722Blfwxn','1298188opMQwC','template','7533225DbUQRR','setSelectionRange','_getDomElement','define','start','elementsToPackages','getText','executeCommand','5ILpdIH'];a=function(){return n;};return a();}var i=b;function b(c,d){c=c-0x1cb;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1d7))/0x1*(parseInt(h(0x1cb))/0x2)+-parseInt(h(0x1d8))/0x3+parseInt(h(0x1cc))/0x4+-parseInt(h(0x1d6))/0x5*(-parseInt(h(0x1e0))/0x6)+parseInt(h(0x1df))/0x7+parseInt(h(0x1de))/0x8+-parseInt(h(0x1ce))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x59862));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x1d9)](){}['canvasElement'];[i(0x1d3)];[i(0x1db)]=new TypedEvent();['_text'];static [i(0x1da)]=css`
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
    `;static [i(0x1cd)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0x1d5)](c){}[i(0x1dd)](c){return![];}constructor(){var j=i;super(),this[j(0x1e2)]=this[j(0x1d0)]('text'),this['_text'][j(0x1e4)]=()=>this[j(0x1db)]['emit'](this['_text'][j(0x1e1)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x1dc)](),this['_text']['focus']();});}['activated'](){}['update'](c){var l=i;this[l(0x1e2)][l(0x1e1)]=c;}[i(0x1d4)](){return this['_text']['value'];}[i(0x1e3)](c){var m=i;this[m(0x1e2)][m(0x1cf)](c['start'],c[m(0x1d2)]+c['length']);}}customElements[i(0x1d1)]('node-projects-code-view-simple',CodeViewSimple);