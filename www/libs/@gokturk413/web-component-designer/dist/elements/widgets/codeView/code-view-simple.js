function b(c,d){c=c-0x109;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x11b))/0x1*(-parseInt(h(0x116))/0x2)+-parseInt(h(0x11e))/0x3*(-parseInt(h(0x10f))/0x4)+-parseInt(h(0x10e))/0x5+parseInt(h(0x11d))/0x6*(parseInt(h(0x110))/0x7)+-parseInt(h(0x117))/0x8+-parseInt(h(0x119))/0x9+parseInt(h(0x11f))/0xa*(parseInt(h(0x10c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc62c7));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0x112)];[i(0x10d)];[i(0x115)]=new TypedEvent();[i(0x113)];static ['style']=css`
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
    `;static [i(0x11a)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this[j(0x113)]=this['_getDomElement']('text'),this[j(0x113)]['oninput']=()=>this['onTextChanged'][j(0x118)](this[j(0x113)]['value']);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this['focus'](),this['_text'][k(0x109)]();});}[i(0x10b)](){}[i(0x11c)](c){var l=i;this[l(0x113)][l(0x114)]=c;}[i(0x111)](){var m=i;return this[m(0x113)][m(0x114)];}['setSelection'](c){this['_text']['setSelectionRange'](c['start'],c['start']+c['length']);}}customElements['define'](i(0x10a),CodeViewSimple);function a(){var n=['elementsToPackages','4190110PxawGA','4oWhpcY','2266600Toyuxm','getText','canvasElement','_text','value','onTextChanged','7236HmiNLk','2522152pZFWMz','emit','11437038eFztCc','template','2DwDwdF','update','18AodSyh','2964582NPWtqk','12689620LNtKXt','focus','node-projects-code-view-simple','activated','11dnNChh'];a=function(){return n;};return a();}