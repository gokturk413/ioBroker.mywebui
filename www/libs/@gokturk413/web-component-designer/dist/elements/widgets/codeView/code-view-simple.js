function a(){var o=['onTextChanged','canvasElement','oninput','emit','length','3888132OKQzXQ','58600YBJmcF','_getDomElement','node-projects-code-view-simple','start','975863hRBjPh','elementsToPackages','423043lvfGNC','_text','update','focus','503284DQMLZq','template','16bqlBMG','346645Lujqen','define','9YefdZI','value','1302162OLgMOZ','setSelection'];a=function(){return o;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x187))/0x1+parseInt(h(0x172))/0x2+parseInt(h(0x179))/0x3+parseInt(h(0x174))/0x4*(-parseInt(h(0x175))/0x5)+-parseInt(h(0x180))/0x6+parseInt(h(0x185))/0x7+-parseInt(h(0x181))/0x8*(-parseInt(h(0x177))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x50997));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x170;var e=a();var f=e[c];return f;}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0x17c)];[i(0x186)];[i(0x17b)]=new TypedEvent();[i(0x188)];static ['style']=css`
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
    `;static [i(0x173)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this[j(0x188)]=this[j(0x182)]('text'),this['_text'][j(0x17d)]=()=>this[j(0x17b)][j(0x17e)](this['_text']['value']);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x171)](),this[k(0x188)][k(0x171)]();});}['activated'](){}[i(0x170)](c){var l=i;this[l(0x188)][l(0x178)]=c;}['getText'](){var m=i;return this[m(0x188)]['value'];}[i(0x17a)](c){var n=i;this['_text']['setSelectionRange'](c[n(0x184)],c['start']+c[n(0x17f)]);}}customElements[i(0x176)](i(0x183),CodeViewSimple);