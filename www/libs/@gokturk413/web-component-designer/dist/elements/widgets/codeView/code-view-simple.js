var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x17e))/0x1*(parseInt(h(0x17f))/0x2)+parseInt(h(0x184))/0x3*(parseInt(h(0x181))/0x4)+parseInt(h(0x182))/0x5*(parseInt(h(0x177))/0x6)+parseInt(h(0x172))/0x7+parseInt(h(0x17a))/0x8+parseInt(h(0x183))/0x9+-parseInt(h(0x174))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x39410));function b(c,d){c=c-0x172;var e=a();var f=e[c];return f;}function a(){var o=['length','62070NeNfcA','executeCommand','setSelection','3197480HWdfrU','text','oninput','dispose','59177XVljke','12PavAKX','setSelectionRange','6452UddhlP','185TSCnVJ','3902517cJeime','813WwiFGP','focus','_text','onTextChanged','960162aOTvMO','start','19109020msIRaz','value'];a=function(){return o;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x17d)](){}['canvasElement'];['elementsToPackages'];[i(0x187)]=new TypedEvent();['_text'];static ['style']=css`
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
  `;[i(0x178)](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement'](j(0x17b)),this[j(0x186)][j(0x17c)]=()=>this['onTextChanged']['emit'](this['_text']['value']);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this['focus'](),this['_text'][k(0x185)]();});}['activated'](){}['update'](c){var l=i;this[l(0x186)]['value']=c;}['getText'](){var m=i;return this[m(0x186)][m(0x175)];}[i(0x179)](c){var n=i;this['_text'][n(0x180)](c[n(0x173)],c['start']+c[n(0x176)]);}}customElements['define']('node-projects-code-view-simple',CodeViewSimple);