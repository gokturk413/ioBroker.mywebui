var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xb2))/0x1*(parseInt(h(0xbc))/0x2)+parseInt(h(0xc4))/0x3+-parseInt(h(0xb4))/0x4+-parseInt(h(0xbe))/0x5*(-parseInt(h(0xab))/0x6)+-parseInt(h(0xc0))/0x7+parseInt(h(0xb0))/0x8+-parseInt(h(0xbd))/0x9*(parseInt(h(0xbf))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb024b));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0xc1)](){}[i(0xb9)];[i(0xb5)];['onTextChanged']=new TypedEvent();['_text'];static [i(0xb3)]=css`
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
    `;static [i(0xc3)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0xbb)](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this['_text']=this['_getDomElement'](j(0xba)),this[j(0xb6)]['oninput']=()=>this[j(0xa9)]['emit'](this[j(0xb6)][j(0xc2)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0xb1)](),this['_text'][k(0xb1)]();});}[i(0xb7)](){}[i(0xb8)](c){var l=i;this['_text'][l(0xc2)]=c;}[i(0xaa)](){var m=i;return this[m(0xb6)]['value'];}[i(0xae)](c){var n=i;this[n(0xb6)][n(0xaf)](c[n(0xac)],c[n(0xac)]+c['length']);}}function b(c,d){c=c-0xa9;var e=a();var f=e[c];return f;}function a(){var o=['dispose','value','template','2685294AUxZMc','onTextChanged','getText','1244112NemEsX','start','define','setSelection','setSelectionRange','4079392yXtCgh','focus','1DelwYo','style','4097544eaYbrc','elementsToPackages','_text','activated','update','canvasElement','text','executeCommand','1259686NYFjUJ','1974789wVphEV','25LmFMOq','10GNOLDf','7744345JiKMop'];a=function(){return o;};return a();}customElements[i(0xad)]('node-projects-code-view-simple',CodeViewSimple);