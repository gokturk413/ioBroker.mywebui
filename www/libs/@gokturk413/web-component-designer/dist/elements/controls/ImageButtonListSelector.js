const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1c1))/0x1*(-parseInt(j(0x1ad))/0x2)+parseInt(j(0x1af))/0x3*(parseInt(j(0x1a8))/0x4)+-parseInt(j(0x1ab))/0x5*(parseInt(j(0x1b1))/0x6)+parseInt(j(0x1b8))/0x7*(-parseInt(j(0x1bd))/0x8)+-parseInt(j(0x1a7))/0x9+parseInt(j(0x1b7))/0xa*(parseInt(j(0x1c2))/0xb)+-parseInt(j(0x1c8))/0xc*(-parseInt(j(0x1cb))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25d41));function a(){const q=['properties','13fFWbig','_restoreCachedInititalValues','2259765EGLjjL','712kSbtdp','slot','composedPath','546620wkrjKj','background','64VeKXkD','display','4827FFcRud','property','12uvnWxS','remove','classList','style','innerText','_getDomElement','10chhJwT','5299tuZyIX','assignedElements','noValueInHeader','cornflowerblue','value-set','1744LtkWCZ','value','_value','template','9586EFuSDO','1039357CxxEZo','_updateValue','_parseAttributesToProperties','unsetValue','dataset','vhd','8586804lBGmHb','ready'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x1b4)]=css`
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
  `;static [k(0x1c0)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x1ca)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x1cc)]();}[k(0x1bf)];get['value'](){const m=k;return this[m(0x1bf)];}set[k(0x1be)](c){this['_value']=c,this['_updateValue']();}['property'];['unsetValue'];['noValueInHeader'];[k(0x1c3)](){const n=k;this[n(0x1be)]?(this['_getDomElement']('value')[n(0x1b5)]=this[n(0x1be)],this['_getDomElement']('value')['classList']['add'](n(0x1bc))):this['_getDomElement']('value')[n(0x1b3)][n(0x1b2)](n(0x1bc));const c=this['_getDomElement'](n(0x1a9));for(let d of c['assignedElements']()){if(d['dataset'][n(0x1be)]==this['value'])d[n(0x1b4)][n(0x1ac)]=n(0x1bb);else d[n(0x1b4)][n(0x1ac)]='';}}[k(0x1c9)](){const o=k;this[o(0x1c4)]();if(this[o(0x1b0)])this['_getDomElement']('header')['style'][o(0x1ae)]='block';if(this[o(0x1ba)])this[o(0x1b6)](o(0x1c7))[o(0x1b4)][o(0x1ae)]='none';const c=this[o(0x1b6)](o(0x1a9));c['onclick']=d=>{const p=o,f=d[p(0x1aa)]();for(let g of c[p(0x1b9)]()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this['value']=g[p(0x1c6)][p(0x1be)];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this['_getDomElement']('property')['innerText']=this[o(0x1b0)]??'',this[o(0x1b6)]('value')['innerText']=this[o(0x1c5)]??'',this[o(0x1c3)]();}}function b(c,d){c=c-0x1a7;const e=a();let f=e[c];return f;}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);