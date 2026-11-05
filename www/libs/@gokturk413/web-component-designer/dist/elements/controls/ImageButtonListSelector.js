const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x156))/0x1+parseInt(j(0x14c))/0x2*(-parseInt(j(0x159))/0x3)+parseInt(j(0x140))/0x4+-parseInt(j(0x14f))/0x5*(-parseInt(j(0x15c))/0x6)+parseInt(j(0x146))/0x7+-parseInt(j(0x14d))/0x8+-parseInt(j(0x15d))/0x9*(parseInt(j(0x14a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x45854));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x140;const e=a();let f=e[c];return f;}function a(){const q=['_value','display','cornflowerblue','properties','1410864vuGEas','_restoreCachedInititalValues','background','indexOf','1943440XZUaSN','innerText','14rcVcEn','1201872YFdKVK','value','55HBLUFQ','style','node-projects-image-button-list-selector','_getDomElement','remove','_updateValue','_parseAttributesToProperties','478971PIGBWM','property','value-changed','173577DwJbfX','slot','ready','40350kigklq','18jpOzdx','classList','dispatchEvent','1896772oRDGQh','composedPath'];a=function(){return q;};return a();}export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x145)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x147)]();}[k(0x142)];get[k(0x14e)](){return this['_value'];}set[k(0x14e)](c){const m=k;this[m(0x142)]=c,this['_updateValue']();}['property'];['unsetValue'];['noValueInHeader'];['_updateValue'](){const n=k;this['value']?(this['_getDomElement']('value')[n(0x14b)]=this['value'],this[n(0x152)](n(0x14e))[n(0x15e)]['add']('value-set')):this['_getDomElement']('value')['classList'][n(0x153)]('value-set');const c=this[n(0x152)](n(0x15a));for(let d of c['assignedElements']()){if(d['dataset']['value']==this[n(0x14e)])d[n(0x150)][n(0x148)]=n(0x144);else d['style']['background']='';}}[k(0x15b)](){const o=k;this[o(0x155)]();if(this[o(0x157)])this['_getDomElement']('header')['style'][o(0x143)]='block';if(this['noValueInHeader'])this[o(0x152)]('vhd')[o(0x150)][o(0x143)]='none';const c=this[o(0x152)](o(0x15a));c['onclick']=d=>{const p=o,f=d[p(0x141)]();for(let g of c['assignedElements']()){if(f[p(0x149)](g)>=0x0){const h=this['_value'];this['value']=g['dataset'][p(0x14e)];const i=new CustomEvent(p(0x158),{'detail':{'newValue':this[p(0x142)],'oldValue':h}});this[p(0x15f)](i);}}},this[o(0x152)](o(0x157))[o(0x14b)]=this[o(0x157)]??'',this[o(0x152)](o(0x14e))['innerText']=this['unsetValue']??'',this[o(0x154)]();}}customElements['define'](k(0x151),ImageButtonListSelector);