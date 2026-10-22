var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x16f))/0x1+parseInt(h(0x177))/0x2*(-parseInt(h(0x16e))/0x3)+-parseInt(h(0x16d))/0x4*(parseInt(h(0x16b))/0x5)+parseInt(h(0x165))/0x6*(-parseInt(h(0x170))/0x7)+parseInt(h(0x161))/0x8*(parseInt(h(0x163))/0x9)+parseInt(h(0x167))/0xa+parseInt(h(0x160))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x34b58));function a(){var n=['1856860tJVBly','_text','oninput','node-projects-code-view-simple','20TbRGhF','canvasElement','320176QrVSPM','21DjOYMM','331359Djgxvo','7wkeYLQ','start','canExecuteCommand','_getDomElement','text','focus','template','81482NyOJYI','onTextChanged','1948573eHHdbm','247832NEzCsA','define','117wRooxr','dispose','1653936airWqB','value'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x15f;var e=a();var f=e[c];return f;}export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x164)](){}[i(0x16c)];['elementsToPackages'];[i(0x15f)]=new TypedEvent();[i(0x168)];static ['style']=css`
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
    `;static [i(0x176)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;['executeCommand'](c){}[i(0x172)](c){return![];}constructor(){var j=i;super(),this[j(0x168)]=this[j(0x173)](j(0x174)),this['_text'][j(0x169)]=()=>this['onTextChanged']['emit'](this['_text']['value']);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this['focus'](),this['_text'][k(0x175)]();});}['activated'](){}['update'](c){this['_text']['value']=c;}['getText'](){var l=i;return this['_text'][l(0x166)];}['setSelection'](c){var m=i;this[m(0x168)]['setSelectionRange'](c['start'],c[m(0x171)]+c['length']);}}customElements[i(0x162)](i(0x16a),CodeViewSimple);