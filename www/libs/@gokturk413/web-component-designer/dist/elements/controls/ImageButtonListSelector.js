const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x15b))/0x1*(parseInt(j(0x15e))/0x2)+parseInt(j(0x15c))/0x3*(-parseInt(j(0x15a))/0x4)+parseInt(j(0x142))/0x5*(parseInt(j(0x14f))/0x6)+parseInt(j(0x151))/0x7+-parseInt(j(0x158))/0x8*(-parseInt(j(0x154))/0x9)+parseInt(j(0x146))/0xa+-parseInt(j(0x15d))/0xb*(parseInt(j(0x143))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb8192));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x155)]=css`
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
  `;static [k(0x14d)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x159)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x141)]();}[k(0x14a)];get['value'](){return this['_value'];}set['value'](c){const m=k;this[m(0x14a)]=c,this[m(0x14e)]();}[k(0x144)];[k(0x145)];['noValueInHeader'];['_updateValue'](){const n=k;this[n(0x14b)]?(this[n(0x15f)](n(0x14b))['innerText']=this['value'],this[n(0x15f)]('value')['classList']['add'](n(0x140))):this[n(0x15f)]('value')['classList'][n(0x156)]('value-set');const c=this['_getDomElement']('slot');for(let d of c['assignedElements']()){if(d['dataset']['value']==this['value'])d[n(0x155)][n(0x14c)]='cornflowerblue';else d['style']['background']='';}}[k(0x147)](){const o=k;this[o(0x148)]();if(this['property'])this['_getDomElement']('header')[o(0x155)]['display']='block';if(this[o(0x150)])this[o(0x15f)]('vhd')[o(0x155)]['display']=o(0x149);const c=this['_getDomElement']('slot');c['onclick']=d=>{const p=o,f=d[p(0x157)]();for(let g of c[p(0x160)]()){if(f[p(0x153)](g)>=0x0){const h=this['_value'];this[p(0x14b)]=g['dataset'][p(0x14b)];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[p(0x14a)],'oldValue':h}});this[p(0x152)](i);}}},this[o(0x15f)](o(0x144))['innerText']=this['property']??'',this['_getDomElement']('value')['innerText']=this[o(0x145)]??'',this[o(0x14e)]();}}function b(c,d){c=c-0x140;const e=a();let f=e[c];return f;}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);function a(){const q=['style','remove','composedPath','776qeokwC','properties','20ygPMDH','2JPgtGN','802122gZbVfU','19476688FGkjBG','500170OGkCls','_getDomElement','assignedElements','value-set','_restoreCachedInititalValues','25UddCwS','12EmSGoK','property','unsetValue','2128040FRmKeK','ready','_parseAttributesToProperties','none','_value','value','background','template','_updateValue','1695228GBVsoJ','noValueInHeader','9234029GqCRMc','dispatchEvent','indexOf','131481DCHDNO'];a=function(){return q;};return a();}