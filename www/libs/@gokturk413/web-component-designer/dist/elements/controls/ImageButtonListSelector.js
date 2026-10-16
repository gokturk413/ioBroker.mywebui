function a(){const o=['10cKDplP','792253XeiWva','slot','template','7698IroDEU','background','_getDomElement','_updateValue','1299lFriri','property','12sALoYX','_parseAttributesToProperties','unsetValue','classList','10nZblNr','innerText','3916492uyETXP','dispatchEvent','6852264wWoGAe','remove','14HabLUA','node-projects-image-button-list-selector','1736004xdPTAt','dataset','properties','define','style','154503vblpCf','43194338BBbTvS','value-changed','header','value'];a=function(){return o;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x117))/0x1+parseInt(j(0x11a))/0x2*(-parseInt(j(0xfe))/0x3)+-parseInt(j(0x106))/0x4+-parseInt(j(0x104))/0x5*(-parseInt(j(0x10c))/0x6)+-parseInt(j(0x10a))/0x7*(parseInt(j(0x108))/0x8)+-parseInt(j(0x111))/0x9*(-parseInt(j(0x116))/0xa)+parseInt(j(0x112))/0xb*(parseInt(j(0x100))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe9688));function b(c,d){c=c-0xfd;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x110)]=css`
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
  `;static [k(0x119)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x10e)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get['value'](){return this['_value'];}set['value'](c){this['_value']=c,this['_updateValue']();}[k(0xff)];[k(0x102)];['noValueInHeader'];[k(0xfd)](){const l=k;this['value']?(this['_getDomElement'](l(0x115))[l(0x105)]=this['value'],this[l(0x11c)](l(0x115))['classList']['add']('value-set')):this[l(0x11c)](l(0x115))[l(0x103)][l(0x109)]('value-set');const c=this[l(0x11c)](l(0x118));for(let d of c['assignedElements']()){if(d[l(0x10d)]['value']==this[l(0x115)])d['style']['background']='cornflowerblue';else d[l(0x110)][l(0x11b)]='';}}['ready'](){const m=k;this[m(0x101)]();if(this[m(0xff)])this['_getDomElement'](m(0x114))[m(0x110)]['display']='block';if(this['noValueInHeader'])this['_getDomElement']('vhd')[m(0x110)]['display']='none';const c=this['_getDomElement']('slot');c['onclick']=d=>{const n=m,f=d['composedPath']();for(let g of c['assignedElements']()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this[n(0x115)]=g['dataset'][n(0x115)];const i=new CustomEvent(n(0x113),{'detail':{'newValue':this['_value'],'oldValue':h}});this[n(0x107)](i);}}},this['_getDomElement'](m(0xff))['innerText']=this['property']??'',this[m(0x11c)]('value')[m(0x105)]=this[m(0x102)]??'',this['_updateValue']();}}customElements[k(0x10f)](k(0x10b),ImageButtonListSelector);