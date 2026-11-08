var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xe5))/0x1*(-parseInt(h(0xec))/0x2)+parseInt(h(0xf9))/0x3*(parseInt(h(0xfb))/0x4)+parseInt(h(0xf3))/0x5*(parseInt(h(0xf8))/0x6)+-parseInt(h(0xf6))/0x7*(parseInt(h(0xe9))/0x8)+parseInt(h(0xe3))/0x9*(parseInt(h(0xe6))/0xa)+parseInt(h(0xeb))/0xb*(parseInt(h(0xfc))/0xc)+-parseInt(h(0xed))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x58e04));function a(){var m=['template','style','5gSMrKU','canExecuteCommand','focus','21uSASDU','getText','2261928COWsPF','12HbKInY','update','90004OkheWi','21864ByAbmc','207LIphFf','length','2238glkAuO','224960ujOelb','activated','value','560328jDycMy','node-projects-code-view-simple','1441Imqshm','372IQVbRM','3024515TlFpoE','emit','setSelection','_text'];a=function(){return m;};return a();}function b(c,d){c=c-0xe3;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}['canvasElement'];['elementsToPackages'];['onTextChanged']=new TypedEvent();['_text'];static [i(0xf2)]=css`
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
    `;static [i(0xf1)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}[i(0xf4)](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement']('text'),this[j(0xf0)]['oninput']=()=>this['onTextChanged'][j(0xee)](this['_text'][j(0xe8)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0xf5)](),this['_text']['focus']();});}[i(0xe7)](){}[i(0xfa)](c){this['_text']['value']=c;}[i(0xf7)](){return this['_text']['value'];}[i(0xef)](c){var l=i;this[l(0xf0)]['setSelectionRange'](c['start'],c['start']+c[l(0xe4)]);}}customElements['define'](i(0xea),CodeViewSimple);