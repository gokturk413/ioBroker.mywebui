function b(c,d){c=c-0xd5;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0xd9))/0x1*(-parseInt(h(0xd8))/0x2)+-parseInt(h(0xe7))/0x3*(parseInt(h(0xd6))/0x4)+-parseInt(h(0xf4))/0x5*(-parseInt(h(0xf2))/0x6)+parseInt(h(0xe3))/0x7*(parseInt(h(0xeb))/0x8)+parseInt(h(0xd7))/0x9*(-parseInt(h(0xe2))/0xa)+parseInt(h(0xda))/0xb*(-parseInt(h(0xdc))/0xc)+parseInt(h(0xdf))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe0ce9));import{BaseCustomWebComponentConstructorAppend,css,html,TypedEvent}from'@node-projects/base-custom-webcomponent';export class CodeViewSimple extends BaseCustomWebComponentConstructorAppend{[i(0xed)](){}[i(0xee)];[i(0xf0)];[i(0xe1)]=new TypedEvent();['_text'];static [i(0xec)]=css`
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
    `;static [i(0xf3)]=html`
      <div id="container" style="width: 100%; height: 100%; position: absolute;">
        <textarea id="text"></textarea>
      </div>
  `;[i(0xdb)](c){}[i(0xe6)](c){return![];}constructor(){var j=i;super(),this[j(0xde)]=this['_getDomElement'](j(0xd5)),this[j(0xde)]['oninput']=()=>this[j(0xe1)][j(0xef)](this['_text'][j(0xe8)]);}[i(0xe9)](){requestAnimationFrame(()=>{var k=b;this[k(0xe5)](),this['_text'][k(0xe5)]();});}['activated'](){}[i(0xea)](c){var l=i;this[l(0xde)]['value']=c;}[i(0xdd)](){var m=i;return this[m(0xde)]['value'];}[i(0xe4)](c){var n=i;this[n(0xde)]['setSelectionRange'](c['start'],c['start']+c[n(0xe0)]);}}customElements[i(0xf1)]('node-projects-code-view-simple',CodeViewSimple);function a(){var o=['update','279384UEquYY','style','dispose','canvasElement','emit','elementsToPackages','define','214734ZNyMuu','template','80LVObhy','text','1466596yxgoPu','182142VCdJbh','25218uBVoUF','11jJUyYC','5720hhkvhQ','executeCommand','22116AEYmsX','getText','_text','29382886WiEoZL','length','onTextChanged','790EXITwk','175oiuDCS','setSelection','focus','canExecuteCommand','3kjPMFE','value','focusEditor'];a=function(){return o;};return a();}