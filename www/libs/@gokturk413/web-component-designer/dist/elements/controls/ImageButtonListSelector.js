const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x18b))/0x1*(parseInt(j(0x188))/0x2)+-parseInt(j(0x173))/0x3*(-parseInt(j(0x18a))/0x4)+-parseInt(j(0x172))/0x5*(parseInt(j(0x181))/0x6)+-parseInt(j(0x16f))/0x7*(parseInt(j(0x174))/0x8)+parseInt(j(0x183))/0x9+parseInt(j(0x18d))/0xa*(parseInt(j(0x184))/0xb)+parseInt(j(0x16d))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2d16d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const q=['value-changed','1270570RQyAwX','properties','style','template','unsetValue','remove','vhd','4262076RNsyKl','assignedElements','7PDybFo','slot','classList','5WLwEWF','562794bfQUdX','2529224UuUliW','dataset','header','property','cornflowerblue','add','_updateValue','composedPath','value','_getDomElement','none','_value','background','751590aDYzpv','indexOf','910683FbxYRu','11DVBgec','innerText','value-set','dispatchEvent','72456rEmXMM','block','4NeqphF','4hwZbWs'];a=function(){return q;};return a();}export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x190)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x18e)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get[k(0x17c)](){const l=k;return this[l(0x17f)];}set[k(0x17c)](c){const m=k;this['_value']=c,this[m(0x17a)]();}['property'];['unsetValue'];['noValueInHeader'];['_updateValue'](){const n=k;this['value']?(this['_getDomElement']('value')['innerText']=this[n(0x17c)],this[n(0x17d)]('value')[n(0x171)][n(0x179)](n(0x186))):this[n(0x17d)](n(0x17c))[n(0x171)][n(0x192)](n(0x186));const c=this[n(0x17d)](n(0x170));for(let d of c[n(0x16e)]()){if(d[n(0x175)][n(0x17c)]==this[n(0x17c)])d['style'][n(0x180)]=n(0x178);else d[n(0x18f)][n(0x180)]='';}}['ready'](){const o=k;this['_parseAttributesToProperties']();if(this['property'])this['_getDomElement'](o(0x176))[o(0x18f)]['display']=o(0x189);if(this['noValueInHeader'])this[o(0x17d)](o(0x193))[o(0x18f)]['display']=o(0x17e);const c=this[o(0x17d)]('slot');c['onclick']=d=>{const p=o,f=d[p(0x17b)]();for(let g of c[p(0x16e)]()){if(f[p(0x182)](g)>=0x0){const h=this['_value'];this['value']=g['dataset']['value'];const i=new CustomEvent(p(0x18c),{'detail':{'newValue':this[p(0x17f)],'oldValue':h}});this[p(0x187)](i);}}},this['_getDomElement']('property')['innerText']=this[o(0x177)]??'',this[o(0x17d)](o(0x17c))[o(0x185)]=this[o(0x191)]??'',this[o(0x17a)]();}}function b(c,d){c=c-0x16d;const e=a();let f=e[c];return f;}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);