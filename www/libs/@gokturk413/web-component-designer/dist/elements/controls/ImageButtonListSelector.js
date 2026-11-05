const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x127))/0x1*(-parseInt(j(0x11a))/0x2)+-parseInt(j(0x13b))/0x3*(-parseInt(j(0x11f))/0x4)+-parseInt(j(0x128))/0x5+-parseInt(j(0x122))/0x6+-parseInt(j(0x120))/0x7*(parseInt(j(0x125))/0x8)+-parseInt(j(0x123))/0x9+-parseInt(j(0x134))/0xa*(-parseInt(j(0x139))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80fec));function a(){const p=['53496eFPOdj','slot','16805aZvSwe','5101140HtosDX','value','property','_updateValue','_getDomElement','indexOf','onclick','unsetValue','_restoreCachedInititalValues','cornflowerblue','add','dispatchEvent','410JXsNOf','block','value-changed','classList','value-set','566621yWZRYW','assignedElements','383811LcUPTP','2tqiTHa','_value','dataset','header','innerText','20ahIdAR','21AcmrdC','noValueInHeader','3110130bAcOic','5830407zVdhlr','style'];a=function(){return p;};return a();}function b(c,d){c=c-0x11a;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x124)]=css`
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
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x130)]();}[k(0x11b)];get['value'](){return this['_value'];}set['value'](c){this['_value']=c,this['_updateValue']();}['property'];['unsetValue'];['noValueInHeader'];['_updateValue'](){const m=k;this['value']?(this['_getDomElement']('value')['innerText']=this['value'],this['_getDomElement']('value')['classList'][m(0x132)](m(0x138))):this[m(0x12c)]('value')[m(0x137)]['remove'](m(0x138));const c=this['_getDomElement'](m(0x126));for(let d of c['assignedElements']()){if(d[m(0x11c)][m(0x129)]==this[m(0x129)])d[m(0x124)]['background']=m(0x131);else d[m(0x124)]['background']='';}}['ready'](){const n=k;this['_parseAttributesToProperties']();if(this['property'])this[n(0x12c)](n(0x11d))[n(0x124)]['display']=n(0x135);if(this[n(0x121)])this['_getDomElement']('vhd')[n(0x124)]['display']='none';const c=this['_getDomElement'](n(0x126));c[n(0x12e)]=d=>{const o=n,f=d['composedPath']();for(let g of c[o(0x13a)]()){if(f[o(0x12d)](g)>=0x0){const h=this[o(0x11b)];this[o(0x129)]=g[o(0x11c)]['value'];const i=new CustomEvent(o(0x136),{'detail':{'newValue':this['_value'],'oldValue':h}});this[o(0x133)](i);}}},this['_getDomElement'](n(0x12a))['innerText']=this['property']??'',this[n(0x12c)](n(0x129))[n(0x11e)]=this[n(0x12f)]??'',this[n(0x12b)]();}}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);