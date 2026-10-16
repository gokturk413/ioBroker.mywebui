var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x1a5))/0x1+-parseInt(h(0x1a2))/0x2+-parseInt(h(0x19e))/0x3*(-parseInt(h(0x199))/0x4)+-parseInt(h(0x19c))/0x5*(parseInt(h(0x1aa))/0x6)+parseInt(h(0x198))/0x7*(-parseInt(h(0x19f))/0x8)+parseInt(h(0x19a))/0x9+parseInt(h(0x1a4))/0xa*(parseInt(h(0x19b))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc0eb1));function a(){var o=['oninput','length','value','_getDomElement','203RbAtWW','8PvWaMs','14213943EbqPQB','22LsNJrk','2245vwWZPK','dispose','551469DfnABH','201368grDrcD','style','getText','561228cHTlbq','focusEditor','10159190KWUGOc','661323ItUJQj','_text','canExecuteCommand','start','onTextChanged','20268tYaJnY','activated','focus'];a=function(){return o;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x194;var e=a();var f=e[c];return f;}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x19d)](){}['canvasElement'];['elementsToPackages'];['onTextChanged']=new TypedEvent();['_text'];static [i(0x1a0)]=css`
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
  `;['executeCommand'](c){}[i(0x1a7)](c){return![];}constructor(){var j=i;super(),this['_text']=this[j(0x197)]('text'),this[j(0x1a6)][j(0x194)]=()=>this[j(0x1a9)]['emit'](this[j(0x1a6)]['value']);}[i(0x1a3)](){requestAnimationFrame(()=>{var k=b;this[k(0x1ac)](),this[k(0x1a6)][k(0x1ac)]();});}[i(0x1ab)](){}['update'](c){var l=i;this[l(0x1a6)]['value']=c;}[i(0x1a1)](){var m=i;return this[m(0x1a6)][m(0x196)];}['setSelection'](c){var n=i;this['_text']['setSelectionRange'](c[n(0x1a8)],c['start']+c[n(0x195)]);}}customElements['define']('node-projects-code-view-simple',CodeViewSimple);