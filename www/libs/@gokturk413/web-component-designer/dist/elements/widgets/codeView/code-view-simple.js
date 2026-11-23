var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x12f))/0x1+-parseInt(h(0x13d))/0x2+parseInt(h(0x131))/0x3*(-parseInt(h(0x135))/0x4)+-parseInt(h(0x12a))/0x5+-parseInt(h(0x132))/0x6*(parseInt(h(0x129))/0x7)+parseInt(h(0x137))/0x8+parseInt(h(0x12b))/0x9*(parseInt(h(0x133))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe4673));function b(c,d){c=c-0x124;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0x12e)];['elementsToPackages'];['onTextChanged']=new TypedEvent();['_text'];static [i(0x13c)]=css`
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
    `;static [i(0x128)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}[i(0x13e)](c){return![];}constructor(){var j=i;super(),this[j(0x124)]=this['_getDomElement'](j(0x12d)),this['_text'][j(0x138)]=()=>this[j(0x125)][j(0x13a)](this[j(0x124)]['value']);}[i(0x130)](){requestAnimationFrame(()=>{var k=b;this[k(0x13b)](),this[k(0x124)]['focus']();});}[i(0x136)](){}[i(0x139)](c){var l=i;this[l(0x124)][l(0x126)]=c;}['getText'](){var m=i;return this[m(0x124)][m(0x126)];}['setSelection'](c){var n=i;this['_text'][n(0x127)](c[n(0x12c)],c['start']+c['length']);}}function a(){var o=['template','77756CeWtmr','9208175leEhPw','2268pVKWTh','start','text','canvasElement','393091bxpfHz','focusEditor','1027983TomKya','942chgqYR','233710vqbkIe','node-projects-code-view-simple','8GFxLkU','activated','6185072oEuUls','oninput','update','emit','focus','style','3698530KdfiqA','canExecuteCommand','_text','onTextChanged','value','setSelectionRange'];a=function(){return o;};return a();}customElements['define'](i(0x134),CodeViewSimple);