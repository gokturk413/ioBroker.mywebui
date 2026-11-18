function a(){const p=['41816LfHUOR','style','dispatchEvent','36vDIDxu','composedPath','cornflowerblue','_updateValue','ready','1186626DmdOgt','value','13otpEGR','template','6AMbsdI','dataset','210MNphon','_getDomElement','slot','27401ErlNDt','49851nmWVjC','31214MbErof','block','6KWdfKT','value-set','value-changed','241525AbWwiF','unsetValue','56AxTlNG','3551316tMFfFg','assignedElements','_value','header','classList','property'];a=function(){return p;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x130))/0x1*(-parseInt(j(0x12e))/0x2)+-parseInt(j(0x12d))/0x3*(-parseInt(j(0x135))/0x4)+-parseInt(j(0x133))/0x5*(-parseInt(j(0x148))/0x6)+parseInt(j(0x144))/0x7+-parseInt(j(0x13c))/0x8*(-parseInt(j(0x13f))/0x9)+-parseInt(j(0x14a))/0xa*(-parseInt(j(0x12c))/0xb)+-parseInt(j(0x136))/0xc*(parseInt(j(0x146))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x20bcf));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x147)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get[k(0x145)](){return this['_value'];}set['value'](c){const l=k;this['_value']=c,this[l(0x142)]();}['property'];[k(0x134)];['noValueInHeader'];[k(0x142)](){const m=k;this['value']?(this[m(0x14b)](m(0x145))['innerText']=this['value'],this['_getDomElement'](m(0x145))[m(0x13a)]['add'](m(0x131))):this[m(0x14b)]('value')['classList']['remove']('value-set');const c=this['_getDomElement']('slot');for(let d of c['assignedElements']()){if(d[m(0x149)][m(0x145)]==this['value'])d['style']['background']=m(0x141);else d['style']['background']='';}}[k(0x143)](){const n=k;this['_parseAttributesToProperties']();if(this[n(0x13b)])this[n(0x14b)](n(0x139))[n(0x13d)]['display']=n(0x12f);if(this['noValueInHeader'])this[n(0x14b)]('vhd')[n(0x13d)]['display']='none';const c=this['_getDomElement'](n(0x12b));c['onclick']=d=>{const o=n,f=d[o(0x140)]();for(let g of c[o(0x137)]()){if(f['indexOf'](g)>=0x0){const h=this[o(0x138)];this[o(0x145)]=g['dataset']['value'];const i=new CustomEvent(o(0x132),{'detail':{'newValue':this['_value'],'oldValue':h}});this[o(0x13e)](i);}}},this['_getDomElement'](n(0x13b))['innerText']=this[n(0x13b)]??'',this['_getDomElement']('value')['innerText']=this['unsetValue']??'',this[n(0x142)]();}}function b(c,d){c=c-0x12b;const e=a();let f=e[c];return f;}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);