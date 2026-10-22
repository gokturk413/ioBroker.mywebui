function b(c,d){c=c-0x149;var e=a();var f=e[c];return f;}function a(){var m=['setSelectionRange','executeCommand','7605830gNaehy','template','2253054MytbAN','value','10728018CRxbeI','5SJdlKE','start','_text','11hgOgUU','390440tmlnsZ','setSelection','update','onTextChanged','canExecuteCommand','8QToflD','1935318lAakCZ','200729SpBhCQ','9igbCkl','_getDomElement','canvasElement','1899932TvylqW','dispose','text','getText'];a=function(){return m;};return a();}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x15e))/0x1*(-parseInt(h(0x15c))/0x2)+-parseInt(h(0x15f))/0x3*(parseInt(h(0x162))/0x4)+-parseInt(h(0x153))/0x5*(parseInt(h(0x150))/0x6)+-parseInt(h(0x15d))/0x7+parseInt(h(0x157))/0x8+parseInt(h(0x152))/0x9+-parseInt(h(0x14e))/0xa*(-parseInt(h(0x156))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb194e));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0x149)](){}[i(0x161)];['elementsToPackages'];[i(0x15a)]=new TypedEvent();[i(0x155)];static ['style']=css`
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
    `;static [i(0x14f)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0x14d)](c){}[i(0x15b)](c){return![];}constructor(){var j=i;super(),this[j(0x155)]=this[j(0x160)](j(0x14a)),this[j(0x155)]['oninput']=()=>this['onTextChanged']['emit'](this[j(0x155)]['value']);}['focusEditor'](){requestAnimationFrame(()=>{this['focus'](),this['_text']['focus']();});}['activated'](){}[i(0x159)](c){var k=i;this['_text'][k(0x151)]=c;}[i(0x14b)](){return this['_text']['value'];}[i(0x158)](c){var l=i;this['_text'][l(0x14c)](c[l(0x154)],c['start']+c['length']);}}customElements['define']('node-projects-code-view-simple',CodeViewSimple);