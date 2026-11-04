const m=b;function b(c,d){c=c-0x186;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x190))/0x1+-parseInt(j(0x18d))/0x2*(parseInt(j(0x19b))/0x3)+parseInt(j(0x19a))/0x4+parseInt(j(0x193))/0x5*(parseInt(j(0x188))/0x6)+-parseInt(j(0x18e))/0x7+parseInt(j(0x189))/0x8+parseInt(j(0x1a4))/0x9*(parseInt(j(0x187))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9659b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get['value'](){const k=b;return this[k(0x197)];}set['value'](c){const l=b;this[l(0x197)]=c,this['_updateValue']();}[m(0x192)];[m(0x18b)];['noValueInHeader'];['_updateValue'](){const n=m;this['value']?(this[n(0x198)]('value')['innerText']=this['value'],this[n(0x198)]('value')[n(0x18c)][n(0x19f)](n(0x18f))):this[n(0x198)](n(0x196))[n(0x18c)]['remove']('value-set');const c=this['_getDomElement'](n(0x1a0));for(let d of c['assignedElements']()){if(d[n(0x1a2)]['value']==this[n(0x196)])d[n(0x199)]['background']='cornflowerblue';else d[n(0x199)][n(0x186)]='';}}[m(0x19c)](){const o=m;this['_parseAttributesToProperties']();if(this[o(0x192)])this['_getDomElement']('header')[o(0x199)]['display']='block';if(this['noValueInHeader'])this[o(0x198)](o(0x18a))[o(0x199)]['display']=o(0x194);const c=this[o(0x198)]('slot');c[o(0x1a1)]=d=>{const p=o,f=d['composedPath']();for(let g of c[p(0x1a3)]()){if(f[p(0x195)](g)>=0x0){const h=this[p(0x197)];this[p(0x196)]=g['dataset']['value'];const i=new CustomEvent(p(0x19e),{'detail':{'newValue':this[p(0x197)],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0x198)]('property')[o(0x19d)]=this[o(0x192)]??'',this[o(0x198)](o(0x196))['innerText']=this['unsetValue']??'',this['_updateValue']();}}function a(){const q=['3714632XXRpxi','vhd','unsetValue','classList','397270htxTnf','5547724nEkrjz','value-set','1164936iubKdd','node-projects-image-button-list-selector','property','31585ZonDPp','none','indexOf','value','_value','_getDomElement','style','4193688vcQfaM','3IKbWcs','ready','innerText','value-changed','add','slot','onclick','dataset','assignedElements','36522ABRSeh','background','2060aiXsDM','402TKsuVz'];a=function(){return q;};return a();}customElements['define'](m(0x191),ImageButtonListSelector);