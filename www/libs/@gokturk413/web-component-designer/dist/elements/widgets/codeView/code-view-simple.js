function a(){var o=['template','10muqvnH','490AmHNHK','node-projects-code-view-simple','_getDomElement','focusEditor','executeCommand','41820BrqgHs','492129cnzpiX','2672373nwckUy','elementsToPackages','5266680gGOyzR','length','getText','oninput','2730GgVIzc','1818MqxDyw','start','setSelection','7noGbFb','143764alFIgz','value','focus','_text','update','300463avOojZ'];a=function(){return o;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x143))/0x1+-parseInt(h(0x12b))/0x2*(-parseInt(h(0x132))/0x3)+parseInt(h(0x13e))/0x4+-parseInt(h(0x12c))/0x5*(parseInt(h(0x139))/0x6)+-parseInt(h(0x13d))/0x7*(parseInt(h(0x135))/0x8)+-parseInt(h(0x13a))/0x9*(-parseInt(h(0x131))/0xa)+-parseInt(h(0x133))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6efbd));function b(c,d){c=c-0x12a;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}['canvasElement'];[i(0x134)];['onTextChanged']=new TypedEvent();['_text'];static ['style']=css`
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
    `;static [i(0x12a)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0x130)](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this[j(0x141)]=this[j(0x12e)]('text'),this[j(0x141)][j(0x138)]=()=>this['onTextChanged']['emit'](this['_text'][j(0x13f)]);}[i(0x12f)](){requestAnimationFrame(()=>{var k=b;this['focus'](),this['_text'][k(0x140)]();});}['activated'](){}[i(0x142)](c){var l=i;this[l(0x141)]['value']=c;}[i(0x137)](){var m=i;return this['_text'][m(0x13f)];}[i(0x13c)](c){var n=i;this['_text']['setSelectionRange'](c[n(0x13b)],c['start']+c[n(0x136)]);}}customElements['define'](i(0x12d),CodeViewSimple);