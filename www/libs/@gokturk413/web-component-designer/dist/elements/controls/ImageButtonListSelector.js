function a(){const p=['indexOf','value-set','composedPath','property','noValueInHeader','onclick','_value','innerText','3471qDuOkE','78lAmzBn','assignedElements','display','292avAWjo','block','_updateValue','360019SffCbl','background','template','node-projects-image-button-list-selector','style','unsetValue','556285ZxUKmT','184BYcYCH','ready','_getDomElement','24qsVNtB','dataset','90540FOzKsQ','1485130PFwtEy','remove','143311kxlxMr','4wUOGzz','117514kKcASL','value'];a=function(){return p;};return a();}const k=b;function b(c,d){c=c-0x71;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x78))/0x1*(-parseInt(j(0x77))/0x2)+parseInt(j(0x82))/0x3*(parseInt(j(0x86))/0x4)+-parseInt(j(0x8f))/0x5+parseInt(j(0x83))/0x6*(parseInt(j(0x76))/0x7)+parseInt(j(0x90))/0x8*(parseInt(j(0x73))/0x9)+-parseInt(j(0x74))/0xa+-parseInt(j(0x89))/0xb*(-parseInt(j(0x71))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2544a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x8d)]=css`
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
  `;static [k(0x8b)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get['value'](){const l=k;return this[l(0x80)];}set['value'](c){this['_value']=c,this['_updateValue']();}[k(0x7d)];[k(0x8e)];['noValueInHeader'];['_updateValue'](){const m=k;this['value']?(this['_getDomElement'](m(0x79))[m(0x81)]=this['value'],this['_getDomElement'](m(0x79))['classList']['add']('value-set')):this['_getDomElement']('value')['classList'][m(0x75)](m(0x7b));const c=this['_getDomElement']('slot');for(let d of c[m(0x84)]()){if(d[m(0x72)]['value']==this[m(0x79)])d['style'][m(0x8a)]='cornflowerblue';else d[m(0x8d)][m(0x8a)]='';}}[k(0x91)](){const n=k;this['_parseAttributesToProperties']();if(this['property'])this[n(0x92)]('header')['style']['display']=n(0x87);if(this[n(0x7e)])this[n(0x92)]('vhd')[n(0x8d)][n(0x85)]='none';const c=this['_getDomElement']('slot');c[n(0x7f)]=d=>{const o=n,f=d[o(0x7c)]();for(let g of c[o(0x84)]()){if(f[o(0x7a)](g)>=0x0){const h=this[o(0x80)];this[o(0x79)]=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[o(0x80)],'oldValue':h}});this['dispatchEvent'](i);}}},this[n(0x92)](n(0x7d))['innerText']=this['property']??'',this['_getDomElement']('value')[n(0x81)]=this['unsetValue']??'',this[n(0x88)]();}}customElements['define'](k(0x8c),ImageButtonListSelector);