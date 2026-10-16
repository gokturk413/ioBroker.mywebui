const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xe2))/0x1*(parseInt(j(0xe8))/0x2)+parseInt(j(0xe7))/0x3+parseInt(j(0xd7))/0x4+parseInt(j(0xee))/0x5+parseInt(j(0xd4))/0x6+parseInt(j(0xe9))/0x7*(-parseInt(j(0xe6))/0x8)+-parseInt(j(0xda))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x522dd));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd3;const e=a();let f=e[c];return f;}function a(){const q=['_updateValue','3080130QDHcNS','noValueInHeader','style','properties','header','unsetValue','739062BzeoHR','slot','_parseAttributesToProperties','2049908GhAXbk','block','dataset','6072849cptWZq','_value','value','value-set','background','display','ready','indexOf','1951FMMTQF','assignedElements','none','property','179464UvZwLf','1353852TadetS','502XoTNYo','63xAcHxn','value-changed','_getDomElement','vhd'];a=function(){return q;};return a();}export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0xf0)]=css`
    div {
      font-size: 10px;
      color: var(--wcd-color-text, white);
    }
    #property {
      color: var(--wcd-image-button-list-selector-property-color, #00aff0);
    }
    #value {
      color: var(--wcd-image-button-list-selector-value-color, lightgray);
    }
    #value.value-set {
      color: var(--wcd-image-button-list-selector-value-set-color, wheat);
    }
    .container {
      display: flex;
      flex-direction: row;
    }
    ::slotted(button) {
      min-width: 24px;
      height: 24px;
      padding: 1px;
      background: var(--wcd-image-button-list-selector-button-background, white);
      border: 1px solid var(--wcd-image-button-list-selector-button-border-color, lightgray);
    }
  `;static ['template']=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0xf1)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0xdb)];get[k(0xdc)](){const l=k;return this[l(0xdb)];}set[k(0xdc)](c){const m=k;this[m(0xdb)]=c,this[m(0xed)]();}['property'];['unsetValue'];[k(0xef)];['_updateValue'](){const n=k;this['value']?(this['_getDomElement'](n(0xdc))['innerText']=this[n(0xdc)],this['_getDomElement'](n(0xdc))['classList']['add'](n(0xdd))):this[n(0xeb)]('value')['classList']['remove'](n(0xdd));const c=this['_getDomElement']('slot');for(let d of c['assignedElements']()){if(d[n(0xd9)]['value']==this['value'])d[n(0xf0)][n(0xde)]='cornflowerblue';else d[n(0xf0)]['background']='';}}[k(0xe0)](){const o=k;this[o(0xd6)]();if(this[o(0xe5)])this['_getDomElement'](o(0xf2))['style']['display']=o(0xd8);if(this['noValueInHeader'])this['_getDomElement'](o(0xec))[o(0xf0)][o(0xdf)]=o(0xe4);const c=this['_getDomElement'](o(0xd5));c['onclick']=d=>{const p=o,f=d['composedPath']();for(let g of c[p(0xe3)]()){if(f[p(0xe1)](g)>=0x0){const h=this[p(0xdb)];this[p(0xdc)]=g[p(0xd9)]['value'];const i=new CustomEvent(p(0xea),{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0xeb)](o(0xe5))['innerText']=this[o(0xe5)]??'',this['_getDomElement']('value')['innerText']=this[o(0xd3)]??'',this[o(0xed)]();}}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);