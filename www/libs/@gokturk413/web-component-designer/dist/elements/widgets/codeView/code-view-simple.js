var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1b6))/0x1+parseInt(h(0x1be))/0x2+parseInt(h(0x1b7))/0x3+parseInt(h(0x1ae))/0x4*(-parseInt(h(0x1b5))/0x5)+parseInt(h(0x1b3))/0x6*(parseInt(h(0x1b2))/0x7)+-parseInt(h(0x1b8))/0x8+-parseInt(h(0x1b0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd19bd));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x1c0)](){}[i(0x1ba)];['elementsToPackages'];['onTextChanged']=new TypedEvent();[i(0x1bf)];static ['style']=css`
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
  `;['executeCommand'](c){}[i(0x1bc)](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement']('text'),this['_text']['oninput']=()=>this[j(0x1c1)]['emit'](this['_text'][j(0x1bd)]);}[i(0x1bb)](){requestAnimationFrame(()=>{var k=b;this[k(0x1ad)](),this['_text'][k(0x1ad)]();});}[i(0x1b9)](){}['update'](c){var l=i;this[l(0x1bf)]['value']=c;}[i(0x1b1)](){return this['_text']['value'];}['setSelection'](c){var m=i;this['_text'][m(0x1b4)](c[m(0x1ac)],c['start']+c['length']);}}function b(c,d){c=c-0x1ac;var e=a();var f=e[c];return f;}function a(){var n=['setSelectionRange','10pYiemH','300459opQZIC','2014914MkbZWE','2178320BliyLp','activated','canvasElement','focusEditor','canExecuteCommand','value','623406uGjChb','_text','dispose','onTextChanged','start','focus','110196Izxycf','node-projects-code-view-simple','13559472nIdwxS','getText','1883hAKygr','31422tuVoCj'];a=function(){return n;};return a();}customElements['define'](i(0x1af),CodeViewSimple);