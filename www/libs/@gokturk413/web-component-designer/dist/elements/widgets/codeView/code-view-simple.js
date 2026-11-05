function b(c,d){c=c-0x1c1;var e=a();var f=e[c];return f;}var i=b;function a(){var n=['24dAtdHh','133748unWVog','start','onTextChanged','getText','template','17229Vlsdcj','focusEditor','focus','9qNrBtX','64aVViKU','_getDomElement','120BfaTaD','executeCommand','6KqLaUQ','setSelectionRange','11867812JoXRbg','968104ziRKme','update','length','value','define','765650QnLYgO','3533275WXNhsR','_text','187754AaebWJ','canExecuteCommand','dispose'];a=function(){return n;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1cf))/0x1+parseInt(h(0x1d8))/0x2*(-parseInt(h(0x1d4))/0x3)+-parseInt(h(0x1c3))/0x4+-parseInt(h(0x1c9))/0x5*(parseInt(h(0x1dc))/0x6)+-parseInt(h(0x1cb))/0x7*(parseInt(h(0x1da))/0x8)+-parseInt(h(0x1d7))/0x9*(parseInt(h(0x1c8))/0xa)+parseInt(h(0x1c2))/0xb*(parseInt(h(0x1ce))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x64c0c));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x1cd)](){}['canvasElement'];['elementsToPackages'];['onTextChanged']=new TypedEvent();[i(0x1ca)];static ['style']=css`
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
    `;static [i(0x1d3)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0x1db)](c){}[i(0x1cc)](c){return![];}constructor(){var j=i;super(),this[j(0x1ca)]=this[j(0x1d9)]('text'),this['_text']['oninput']=()=>this[j(0x1d1)]['emit'](this[j(0x1ca)][j(0x1c6)]);}[i(0x1d5)](){requestAnimationFrame(()=>{var k=b;this['focus'](),this[k(0x1ca)][k(0x1d6)]();});}['activated'](){}[i(0x1c4)](c){this['_text']['value']=c;}[i(0x1d2)](){var l=i;return this[l(0x1ca)][l(0x1c6)];}['setSelection'](c){var m=i;this['_text'][m(0x1c1)](c[m(0x1d0)],c[m(0x1d0)]+c[m(0x1c5)]);}}customElements[i(0x1c7)]('node-projects-code-view-simple',CodeViewSimple);