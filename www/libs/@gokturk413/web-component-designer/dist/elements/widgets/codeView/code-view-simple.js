var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x1e8))/0x1+-parseInt(h(0x1ee))/0x2*(-parseInt(h(0x1eb))/0x3)+-parseInt(h(0x1e0))/0x4+-parseInt(h(0x1f2))/0x5*(parseInt(h(0x1f0))/0x6)+parseInt(h(0x1dd))/0x7*(parseInt(h(0x1e6))/0x8)+parseInt(h(0x1de))/0x9+-parseInt(h(0x1e9))/0xa*(parseInt(h(0x1e3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x591a6));function b(c,d){c=c-0x1dd;var e=a();var f=e[c];return f;}function a(){var n=['dispose','30gzzzJH','_getDomElement','12aUiiCJ','node-projects-code-view-simple','1169765tKngor','canExecuteCommand','focus','executeCommand','activated','define','start','setSelection','1743hENnge','4647546MWFeWN','oninput','46828dzwbdU','onTextChanged','text','18416959IEUIjh','getText','canvasElement','23424acHDgU','template','571322YLNOqF','10fahFZf','_text','140412cXaxIT','value'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x1ed)](){}[i(0x1e5)];['elementsToPackages'];['onTextChanged']=new TypedEvent();[i(0x1ea)];static ['style']=css`
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
    `;static [i(0x1e7)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0x1f5)](c){}[i(0x1f3)](c){return![];}constructor(){var j=i;super(),this['_text']=this[j(0x1ef)](j(0x1e2)),this[j(0x1ea)][j(0x1df)]=()=>this[j(0x1e1)]['emit'](this['_text'][j(0x1ec)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x1f4)](),this[k(0x1ea)]['focus']();});}[i(0x1f6)](){}['update'](c){var l=i;this[l(0x1ea)]['value']=c;}[i(0x1e4)](){return this['_text']['value'];}[i(0x1f9)](c){var m=i;this['_text']['setSelectionRange'](c['start'],c[m(0x1f8)]+c['length']);}}customElements[i(0x1f7)](i(0x1f1),CodeViewSimple);