function b(c,d){c=c-0x110;var e=a();var f=e[c];return f;}function a(){var o=['44mBwsLO','692700itDqAC','557780GkzyPl','4122vzDzUf','88298vZgZjQ','2445pziDIo','canvasElement','3460WNzZBT','style','focus','136bSrQdi','node-projects-code-view-simple','value','1018FBohCw','3471588HNDbEy','dispose','define','start','_text','update','18AKunxS','onTextChanged','focusEditor','setSelection','587912fmkwNa','text','_getDomElement'];a=function(){return o;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x110))/0x1+-parseInt(h(0x11b))/0x2*(-parseInt(h(0x113))/0x3)+parseInt(h(0x126))/0x4+-parseInt(h(0x115))/0x5*(parseInt(h(0x111))/0x6)+parseInt(h(0x112))/0x7*(-parseInt(h(0x118))/0x8)+-parseInt(h(0x122))/0x9*(parseInt(h(0x12a))/0xa)+parseInt(h(0x129))/0xb*(parseInt(h(0x11c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5142f));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x11d)](){}[i(0x114)];['elementsToPackages'];['onTextChanged']=new TypedEvent();[i(0x120)];static [i(0x116)]=css`
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
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this[j(0x120)]=this[j(0x128)](j(0x127)),this[j(0x120)]['oninput']=()=>this[j(0x123)]['emit'](this['_text']['value']);}[i(0x124)](){requestAnimationFrame(()=>{var k=b;this['focus'](),this[k(0x120)][k(0x117)]();});}['activated'](){}[i(0x121)](c){var l=i;this['_text'][l(0x11a)]=c;}['getText'](){var m=i;return this[m(0x120)]['value'];}[i(0x125)](c){var n=i;this[n(0x120)]['setSelectionRange'](c[n(0x11f)],c[n(0x11f)]+c['length']);}}customElements[i(0x11e)](i(0x119),CodeViewSimple);