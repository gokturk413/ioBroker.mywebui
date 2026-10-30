function b(c,d){c=c-0xcc;var e=a();var f=e[c];return f;}var i=b;function a(){var n=['oninput','46105rJbCFY','112MZEDQL','onTextChanged','191100rQnYFi','170814MhfDaV','text','emit','18106AszNWg','elementsToPackages','390dvqoWF','value','89253MXoxCs','32pXtiMp','start','95159HdGpOk','dispose','getText','style','focusEditor','canExecuteCommand','activated','96vYCWmQ','focus','224413MSDxzE','_getDomElement','define','_text'];a=function(){return n;};return a();}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xdd))/0x1+-parseInt(h(0xd3))/0x2+parseInt(h(0xd2))/0x3+-parseInt(h(0xdb))/0x4*(-parseInt(h(0xcf))/0x5)+parseInt(h(0xe4))/0x6*(parseInt(h(0xe6))/0x7)+-parseInt(h(0xd0))/0x8*(parseInt(h(0xda))/0x9)+parseInt(h(0xd8))/0xa*(-parseInt(h(0xd6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f9ac));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0xde)](){}['canvasElement'];[i(0xd7)];['onTextChanged']=new TypedEvent();['_text'];static [i(0xe0)]=css`
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
  `;['executeCommand'](c){}[i(0xe2)](c){return![];}constructor(){var j=i;super(),this[j(0xcd)]=this[j(0xe7)](j(0xd4)),this[j(0xcd)][j(0xce)]=()=>this[j(0xd1)][j(0xd5)](this[j(0xcd)][j(0xd9)]);}[i(0xe1)](){requestAnimationFrame(()=>{var k=b;this[k(0xe5)](),this['_text'][k(0xe5)]();});}[i(0xe3)](){}['update'](c){var l=i;this[l(0xcd)]['value']=c;}[i(0xdf)](){return this['_text']['value'];}['setSelection'](c){var m=i;this['_text']['setSelectionRange'](c['start'],c[m(0xdc)]+c['length']);}}customElements[i(0xcc)]('node-projects-code-view-simple',CodeViewSimple);