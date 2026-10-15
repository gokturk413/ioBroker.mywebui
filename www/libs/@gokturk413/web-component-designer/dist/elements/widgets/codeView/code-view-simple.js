var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x17c))/0x1*(-parseInt(h(0x17e))/0x2)+parseInt(h(0x187))/0x3+-parseInt(h(0x17a))/0x4*(parseInt(h(0x184))/0x5)+parseInt(h(0x179))/0x6*(-parseInt(h(0x185))/0x7)+parseInt(h(0x177))/0x8*(parseInt(h(0x172))/0x9)+-parseInt(h(0x17b))/0xa*(parseInt(h(0x16f))/0xb)+parseInt(h(0x186))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x975e2));function b(c,d){c=c-0x16e;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}['canvasElement'];[i(0x174)];['onTextChanged']=new TypedEvent();['_text'];static [i(0x173)]=css`
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
  `;[i(0x16e)](c){}[i(0x183)](c){return![];}constructor(){var j=i;super(),this[j(0x178)]=this['_getDomElement'](j(0x170)),this['_text']['oninput']=()=>this['onTextChanged'][j(0x175)](this['_text']['value']);}[i(0x182)](){requestAnimationFrame(()=>{var k=b;this[k(0x17f)](),this['_text'][k(0x17f)]();});}['activated'](){}['update'](c){var l=i;this['_text'][l(0x176)]=c;}[i(0x181)](){var m=i;return this['_text'][m(0x176)];}['setSelection'](c){var n=i;this['_text'][n(0x171)](c['start'],c['start']+c[n(0x180)]);}}customElements[i(0x17d)]('node-projects-code-view-simple',CodeViewSimple);function a(){var o=['value','4191808UmXJfo','_text','573954gXjfFa','3584792VueelD','9792110tRpqIR','1mxwKnh','define','1144982bdQqjM','focus','length','getText','focusEditor','canExecuteCommand','5KqZlCF','28vVVFVp','20803344ApFhIp','2006922LacVyi','executeCommand','11vrCvDP','text','setSelectionRange','18qPCPMt','style','elementsToPackages','emit'];a=function(){return o;};return a();}