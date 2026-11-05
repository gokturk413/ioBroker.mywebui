var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xd3))/0x1+parseInt(h(0xdd))/0x2*(-parseInt(h(0xc9))/0x3)+-parseInt(h(0xcd))/0x4*(parseInt(h(0xcc))/0x5)+parseInt(h(0xd6))/0x6*(-parseInt(h(0xd2))/0x7)+-parseInt(h(0xce))/0x8*(parseInt(h(0xd4))/0x9)+-parseInt(h(0xc8))/0xa*(-parseInt(h(0xdc))/0xb)+-parseInt(h(0xda))/0xc*(-parseInt(h(0xc6))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x280c3));function a(){var m=['4264spjIAS','update','6040rZEtep','12oNDVYg','_text','elementsToPackages','10Gzdyij','498120rtAvkF','8nzCedA','oninput','text','start','26768wNbjcd','187538reOTvA','827703GQcPVv','template','402XSyxID','setSelectionRange','canvasElement','value','23544jMaytd','canExecuteCommand','836BiuEzz','57854GQaoSm','onTextChanged'];a=function(){return m;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xc5;var e=a();var f=e[c];return f;}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0xd8)];[i(0xcb)];['onTextChanged']=new TypedEvent();[i(0xca)];static ['style']=css`
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
    `;static [i(0xd5)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}[i(0xdb)](c){return![];}constructor(){var j=i;super(),this[j(0xca)]=this['_getDomElement'](j(0xd0)),this['_text'][j(0xcf)]=()=>this[j(0xc5)]['emit'](this[j(0xca)][j(0xd9)]);}['focusEditor'](){requestAnimationFrame(()=>{this['focus'](),this['_text']['focus']();});}['activated'](){}[i(0xc7)](c){var k=i;this['_text'][k(0xd9)]=c;}['getText'](){return this['_text']['value'];}['setSelection'](c){var l=i;this['_text'][l(0xd7)](c[l(0xd1)],c[l(0xd1)]+c['length']);}}customElements['define']('node-projects-code-view-simple',CodeViewSimple);