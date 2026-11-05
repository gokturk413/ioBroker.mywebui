const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xd9))/0x1*(parseInt(j(0xde))/0x2)+-parseInt(j(0xec))/0x3*(parseInt(j(0xf3))/0x4)+-parseInt(j(0xee))/0x5+-parseInt(j(0xf2))/0x6+parseInt(j(0xf7))/0x7*(-parseInt(j(0xf1))/0x8)+-parseInt(j(0xe2))/0x9+-parseInt(j(0xdd))/0xa*(-parseInt(j(0xdc))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8ed8));function a(){const q=['properties','onclick','display','slot','490788feeWYT','vhd','2953990IdYAPy','style','property','8OHtlUZ','1469832qQEAPR','12oZsbOO','noValueInHeader','classList','ready','8823199XRbsDZ','unsetValue','267344RrgaNp','composedPath','_getDomElement','22kaQrSp','12403490bvoXGy','14lEcZWq','value','assignedElements','value-set','7299171qiwPqa','_updateValue','cornflowerblue','remove','_value','innerText'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0xe8)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get[k(0xdf)](){const l=k;return this[l(0xe6)];}set['value'](c){const m=k;this['_value']=c,this[m(0xe3)]();}[k(0xf0)];[k(0xf8)];['noValueInHeader'];['_updateValue'](){const n=k;this['value']?(this['_getDomElement'](n(0xdf))[n(0xe7)]=this['value'],this[n(0xdb)]('value')['classList']['add'](n(0xe1))):this['_getDomElement'](n(0xdf))[n(0xf5)][n(0xe5)]('value-set');const c=this[n(0xdb)](n(0xeb));for(let d of c[n(0xe0)]()){if(d['dataset']['value']==this[n(0xdf)])d[n(0xef)]['background']=n(0xe4);else d[n(0xef)]['background']='';}}[k(0xf6)](){const o=k;this['_parseAttributesToProperties']();if(this['property'])this['_getDomElement']('header')[o(0xef)]['display']='block';if(this[o(0xf4)])this[o(0xdb)](o(0xed))['style'][o(0xea)]='none';const c=this['_getDomElement']('slot');c[o(0xe9)]=d=>{const p=o,f=d[p(0xda)]();for(let g of c['assignedElements']()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this[p(0xdf)]=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[p(0xe6)],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0xdb)](o(0xf0))[o(0xe7)]=this['property']??'',this[o(0xdb)]('value')['innerText']=this[o(0xf8)]??'',this[o(0xe3)]();}}function b(c,d){c=c-0xd9;const e=a();let f=e[c];return f;}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);