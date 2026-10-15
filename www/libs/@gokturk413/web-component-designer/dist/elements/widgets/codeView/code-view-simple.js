function b(c,d){c=c-0x102;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x106))/0x1*(parseInt(h(0x114))/0x2)+parseInt(h(0x110))/0x3+parseInt(h(0x112))/0x4*(parseInt(h(0x102))/0x5)+-parseInt(h(0x11d))/0x6*(-parseInt(h(0x109))/0x7)+parseInt(h(0x10e))/0x8*(-parseInt(h(0x11b))/0x9)+-parseInt(h(0x10a))/0xa+parseInt(h(0x10f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x27710));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x10c)](){}[i(0x103)];[i(0x11c)];[i(0x108)]=new TypedEvent();[i(0x107)];static ['style']=css`
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
    `;static [i(0x113)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement'](j(0x104)),this[j(0x107)][j(0x118)]=()=>this['onTextChanged']['emit'](this['_text']['value']);}[i(0x11a)](){requestAnimationFrame(()=>{var k=b;this[k(0x111)](),this[k(0x107)][k(0x111)]();});}[i(0x10b)](){}['update'](c){this['_text']['value']=c;}['getText'](){var l=i;return this['_text'][l(0x117)];}['setSelection'](c){var m=i;this['_text'][m(0x10d)](c['start'],c[m(0x105)]+c[m(0x115)]);}}customElements[i(0x119)](i(0x116),CodeViewSimple);function a(){var n=['1008843TTKEmt','564609AWRhry','focus','143516vJXAIR','template','48bzvWWR','length','node-projects-code-view-simple','value','oninput','define','focusEditor','27aiIfeH','elementsToPackages','126672KLmWzk','5PqpebW','canvasElement','text','start','928kXHQvb','_text','onTextChanged','98StlCbV','2817420XzUaVC','activated','dispose','setSelectionRange','388792GOgIyr'];a=function(){return n;};return a();}