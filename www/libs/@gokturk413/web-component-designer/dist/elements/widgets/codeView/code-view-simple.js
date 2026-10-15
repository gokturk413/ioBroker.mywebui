var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x134))/0x1+parseInt(h(0x145))/0x2*(-parseInt(h(0x13f))/0x3)+parseInt(h(0x146))/0x4+parseInt(h(0x139))/0x5+-parseInt(h(0x133))/0x6+-parseInt(h(0x13d))/0x7+parseInt(h(0x140))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb8162));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function a(){var o=['getText','define','_getDomElement','focus','2572952nAlkLn','247812UWYNdJ','4192176YytXgS','414015XORpxf','dispose','_text','update','setSelectionRange','1860625rsoxhd','canvasElement','template','onTextChanged','9766267DfyIQF','ready','3LKtJEN','26290224OphErn'];a=function(){return o;};return a();}function b(c,d){c=c-0x133;var e=a();var f=e[c];return f;}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x135)](){}[i(0x13a)];['elementsToPackages'];[i(0x13c)]=new TypedEvent();['_text'];static ['style']=css`
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
    `;static [i(0x13b)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}async[i(0x13e)](){var j=i;this['_text']=this[j(0x143)]('text');}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0x144)](),this['_text']['focus']();});}['activated'](){}[i(0x137)](c){var l=i;this[l(0x136)]['value']=c;}[i(0x141)](){var m=i;return this[m(0x136)]['value'];}['setSelection'](c){var n=i;this[n(0x136)][n(0x138)](c['start'],c['start']+c['length']);}}customElements[i(0x142)]('node-projects-code-view-simple',CodeViewSimple);