var i=b;function a(){var n=['266388RExCNA','5poxkwm','8583039PjNVdl','canvasElement','6dweZSn','emit','_text','1709743sOcYgu','text','value','node-projects-code-view-simple','oninput','start','activated','10BWFcwn','3186068rAoEcL','getText','define','setSelectionRange','_getDomElement','setSelection','5086536iEMBhd','649BNkBMr','3505896WGWOLE','2517022VMlrLf','1WeFWKP','executeCommand','focus'];a=function(){return n;};return a();}function b(c,d){c=c-0x88;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x89))/0x1*(-parseInt(h(0x88))/0x2)+parseInt(h(0xa3))/0x3+-parseInt(h(0x9b))/0x4*(-parseInt(h(0x8d))/0x5)+-parseInt(h(0x90))/0x6*(parseInt(h(0x93))/0x7)+parseInt(h(0xa1))/0x8+parseInt(h(0x8e))/0x9*(parseInt(h(0x9a))/0xa)+-parseInt(h(0xa2))/0xb*(parseInt(h(0x8c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb52f8));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0x8f)];['elementsToPackages'];['onTextChanged']=new TypedEvent();['_text'];static ['style']=css`
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
  `;[i(0x8a)](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this[j(0x9f)](j(0x94)),this[j(0x92)][j(0x97)]=()=>this['onTextChanged'][j(0x91)](this['_text'][j(0x95)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x8b)](),this[k(0x92)][k(0x8b)]();});}[i(0x99)](){}['update'](c){this['_text']['value']=c;}[i(0x9c)](){var l=i;return this[l(0x92)][l(0x95)];}[i(0xa0)](c){var m=i;this['_text'][m(0x9e)](c['start'],c[m(0x98)]+c['length']);}}customElements[i(0x9d)](i(0x96),CodeViewSimple);