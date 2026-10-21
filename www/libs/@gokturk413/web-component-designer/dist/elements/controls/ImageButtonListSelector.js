function b(c,d){c=c-0x9e;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xb2))/0x1+parseInt(j(0xb8))/0x2+parseInt(j(0xb5))/0x3+parseInt(j(0xaa))/0x4+-parseInt(j(0xa9))/0x5*(parseInt(j(0xbb))/0x6)+-parseInt(j(0xbc))/0x7*(-parseInt(j(0xb4))/0x8)+parseInt(j(0xac))/0x9*(-parseInt(j(0xad))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa926d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0xa5)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0xb7)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0x9f)];get['value'](){const l=k;return this[l(0x9f)];}set[k(0xa3)](c){const m=k;this[m(0x9f)]=c,this['_updateValue']();}['property'];['unsetValue'];['noValueInHeader'];[k(0xa2)](){const n=k;this['value']?(this[n(0xa8)](n(0xa3))['innerText']=this['value'],this[n(0xa8)]('value')[n(0x9e)][n(0xaf)]('value-set')):this['_getDomElement'](n(0xa3))[n(0x9e)][n(0xa7)]('value-set');const c=this[n(0xa8)](n(0xa6));for(let d of c[n(0xab)]()){if(d['dataset']['value']==this[n(0xa3)])d[n(0xbd)]['background']=n(0xba);else d['style'][n(0xb9)]='';}}['ready'](){const o=k;this['_parseAttributesToProperties']();if(this['property'])this['_getDomElement']('header')['style'][o(0xa0)]=o(0xae);if(this['noValueInHeader'])this['_getDomElement'](o(0xb1))['style'][o(0xa0)]=o(0xa4);const c=this[o(0xa8)]('slot');c[o(0xbe)]=d=>{const p=o,f=d[p(0xb3)]();for(let g of c[p(0xab)]()){if(f['indexOf'](g)>=0x0){const h=this[p(0x9f)];this['value']=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this['_getDomElement'](o(0xb6))[o(0xb0)]=this['property']??'',this[o(0xa8)](o(0xa3))['innerText']=this['unsetValue']??'',this[o(0xa2)]();}}customElements['define'](k(0xa1),ImageButtonListSelector);function a(){const q=['_updateValue','value','none','template','slot','remove','_getDomElement','640wadlys','653776JsqGLV','assignedElements','9NOQATG','2296540zwemng','block','add','innerText','vhd','812237iZdRqF','composedPath','8sTwGQR','575076VsUNUF','property','properties','203312efCqDR','background','cornflowerblue','40488oBWfEU','3620498wABAbs','style','onclick','classList','_value','display','node-projects-image-button-list-selector'];a=function(){return q;};return a();}