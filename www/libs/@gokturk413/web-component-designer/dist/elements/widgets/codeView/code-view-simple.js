var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x160))/0x1+-parseInt(h(0x175))/0x2*(-parseInt(h(0x162))/0x3)+parseInt(h(0x172))/0x4*(-parseInt(h(0x173))/0x5)+-parseInt(h(0x161))/0x6+parseInt(h(0x165))/0x7*(parseInt(h(0x166))/0x8)+-parseInt(h(0x179))/0x9+-parseInt(h(0x167))/0xa*(-parseInt(h(0x16d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x18d3f));function a(){var n=['885501OvQCzt','120117jDabAY','341502qFwacP','3DLYoJw','focusEditor','canvasElement','14KeQAfH','437096IiPKGr','2404700bHzDjZ','_text','activated','text','node-projects-code-view-simple','elementsToPackages','11jbVJdy','value','length','update','define','748UyNiHF','520RWpzuE','start','93644SGTOmk','executeCommand','_getDomElement','onTextChanged'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0x164)];[i(0x16c)];[i(0x178)]=new TypedEvent();['_text'];static ['style']=css`
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
  `;[i(0x176)](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this[j(0x177)](j(0x16a)),this[j(0x168)]['oninput']=()=>this[j(0x178)]['emit'](this[j(0x168)][j(0x16e)]);}[i(0x163)](){requestAnimationFrame(()=>{this['focus'](),this['_text']['focus']();});}[i(0x169)](){}[i(0x170)](c){var k=i;this['_text'][k(0x16e)]=c;}['getText'](){var l=i;return this[l(0x168)][l(0x16e)];}['setSelection'](c){var m=i;this[m(0x168)]['setSelectionRange'](c[m(0x174)],c['start']+c[m(0x16f)]);}}function b(c,d){c=c-0x160;var e=a();var f=e[c];return f;}customElements[i(0x171)](i(0x16b),CodeViewSimple);