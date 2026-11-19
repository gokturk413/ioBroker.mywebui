const l=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x195))/0x1+-parseInt(j(0x17d))/0x2*(-parseInt(j(0x192))/0x3)+-parseInt(j(0x178))/0x4*(-parseInt(j(0x18a))/0x5)+-parseInt(j(0x18d))/0x6*(parseInt(j(0x182))/0x7)+-parseInt(j(0x193))/0x8*(-parseInt(j(0x18e))/0x9)+-parseInt(j(0x17f))/0xa*(-parseInt(j(0x174))/0xb)+-parseInt(j(0x189))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42235));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const k=b;super(),this[k(0x190)]();}[l(0x17a)];get['value'](){return this['_value'];}set['value'](c){const m=l;this[m(0x17a)]=c,this['_updateValue']();}[l(0x177)];[l(0x17e)];['noValueInHeader'];[l(0x197)](){const n=l;this[n(0x179)]?(this[n(0x199)](n(0x179))['innerText']=this[n(0x179)],this[n(0x199)]('value')[n(0x176)][n(0x198)](n(0x194))):this['_getDomElement'](n(0x179))['classList']['remove'](n(0x194));const c=this[n(0x199)](n(0x180));for(let d of c[n(0x191)]()){if(d[n(0x175)]['value']==this['value'])d['style']['background']='cornflowerblue';else d['style'][n(0x196)]='';}}[l(0x188)](){const o=l;this[o(0x184)]();if(this['property'])this['_getDomElement'](o(0x19a))['style']['display']=o(0x187);if(this['noValueInHeader'])this['_getDomElement'](o(0x185))['style'][o(0x186)]=o(0x17c);const c=this[o(0x199)]('slot');c[o(0x18f)]=d=>{const p=o,f=d[p(0x181)]();for(let g of c[p(0x191)]()){if(f[p(0x183)](g)>=0x0){const h=this[p(0x17a)];this['value']=g[p(0x175)][p(0x179)];const i=new CustomEvent(p(0x17b),{'detail':{'newValue':this['_value'],'oldValue':h}});this[p(0x18b)](i);}}},this[o(0x199)](o(0x177))['innerText']=this['property']??'',this['_getDomElement'](o(0x179))['innerText']=this['unsetValue']??'',this[o(0x197)]();}}function b(c,d){c=c-0x174;const e=a();let f=e[c];return f;}customElements['define'](l(0x18c),ImageButtonListSelector);function a(){const q=['unsetValue','21430XOcwWa','slot','composedPath','307181kJwoQZ','indexOf','_parseAttributesToProperties','vhd','display','block','ready','22927476jCExCB','250nnvHsV','dispatchEvent','node-projects-image-button-list-selector','6EfZfYa','9495YNyDil','onclick','_restoreCachedInititalValues','assignedElements','3msuBeb','2776WPwfCe','value-set','465520GHDEKF','background','_updateValue','add','_getDomElement','header','2453FYUMFF','dataset','classList','property','42372oLpRro','value','_value','value-changed','none','772526bCkptt'];a=function(){return q;};return a();}