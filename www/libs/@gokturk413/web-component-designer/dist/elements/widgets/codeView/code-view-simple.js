var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0xae))/0x1*(-parseInt(h(0xaa))/0x2)+parseInt(h(0xa5))/0x3+parseInt(h(0xb3))/0x4*(-parseInt(h(0xac))/0x5)+-parseInt(h(0xb0))/0x6*(-parseInt(h(0xa9))/0x7)+parseInt(h(0xb4))/0x8+-parseInt(h(0xa3))/0x9+parseInt(h(0xb6))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x76f29));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{['dispose'](){}[i(0xa8)];['elementsToPackages'];['onTextChanged']=new TypedEvent();[i(0xa2)];static ['style']=css`
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
  `;['executeCommand'](c){}['canExecuteCommand'](c){return![];}constructor(){var j=i;super(),this[j(0xa2)]=this['_getDomElement'](j(0xab)),this['_text'][j(0xb7)]=()=>this['onTextChanged']['emit'](this['_text'][j(0xb2)]);}['focusEditor'](){requestAnimationFrame(()=>{var k=b;this[k(0xa7)](),this[k(0xa2)][k(0xa7)]();});}[i(0xa6)](){}['update'](c){var l=i;this[l(0xa2)][l(0xb2)]=c;}[i(0xad)](){var m=i;return this[m(0xa2)][m(0xb2)];}[i(0xb1)](c){var n=i;this[n(0xa2)][n(0xaf)](c['start'],c[n(0xb5)]+c[n(0xa4)]);}}function b(c,d){c=c-0xa2;var e=a();var f=e[c];return f;}customElements['define']('node-projects-code-view-simple',CodeViewSimple);function a(){var o=['4UuzNMU','656656bsXjQp','start','258970KPVHXv','oninput','_text','1922688yYetUG','length','1412007vjkiHT','activated','focus','canvasElement','133KYCPqZ','1060pUNJSB','text','630300bgZauG','getText','1016aeUiaO','setSelectionRange','248442ZnQHDU','setSelection','value'];a=function(){return o;};return a();}