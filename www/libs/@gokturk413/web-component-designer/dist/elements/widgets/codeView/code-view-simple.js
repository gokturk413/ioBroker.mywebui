function b(c,d){c=c-0x1f2;var e=a();var f=e[c];return f;}function a(){var n=['1158wsbYcD','254070TNRqDc','canvasElement','_getDomElement','value','oninput','start','node-projects-code-view-simple','canExecuteCommand','getText','_text','294378fgdVOl','focus','setSelectionRange','dispose','50SoHjFJ','166308IZhmDi','style','template','44XAdrCq','344ehSMFn','6sNMaIY','setSelection','onTextChanged','204665fWuiCM','728sWfXSr','activated','1047069UiFOwl','text','length','27559iTNNeK'];a=function(){return n;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x207))/0x1+-parseInt(h(0x1f2))/0x2+-parseInt(h(0x206))/0x3*(parseInt(h(0x200))/0x4)+parseInt(h(0x1ff))/0x5*(-parseInt(h(0x1fc))/0x6)+parseInt(h(0x205))/0x7*(parseInt(h(0x1fb))/0x8)+parseInt(h(0x202))/0x9*(parseInt(h(0x1f6))/0xa)+parseInt(h(0x1fa))/0xb*(parseInt(h(0x1f7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x47c64));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x1f5)](){}[i(0x208)];['elementsToPackages'];[i(0x1fe)]=new TypedEvent();['_text'];static [i(0x1f8)]=css`
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
    `;static [i(0x1f9)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}[i(0x20e)](c){return![];}constructor(){var j=i;super(),this[j(0x210)]=this[j(0x209)](j(0x203)),this[j(0x210)][j(0x20b)]=()=>this[j(0x1fe)]['emit'](this['_text'][j(0x20a)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x1f3)](),this['_text'][k(0x1f3)]();});}[i(0x201)](){}['update'](c){this['_text']['value']=c;}[i(0x20f)](){var l=i;return this['_text'][l(0x20a)];}[i(0x1fd)](c){var m=i;this['_text'][m(0x1f4)](c[m(0x20c)],c[m(0x20c)]+c[m(0x204)]);}}customElements['define'](i(0x20d),CodeViewSimple);