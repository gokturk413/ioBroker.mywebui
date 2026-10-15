const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xb2))/0x1*(parseInt(j(0xc0))/0x2)+-parseInt(j(0xc2))/0x3+-parseInt(j(0xc7))/0x4*(-parseInt(j(0xbe))/0x5)+-parseInt(j(0xc9))/0x6*(-parseInt(j(0xb0))/0x7)+-parseInt(j(0xc5))/0x8*(-parseInt(j(0xa9))/0x9)+parseInt(j(0xb7))/0xa*(-parseInt(j(0xc1))/0xb)+parseInt(j(0xc3))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x676ff));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0xb5)]=css`
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
  `;static [k(0xb8)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0xbd)];get[k(0xc8)](){const l=k;return this[l(0xbd)];}set[k(0xc8)](c){const m=k;this[m(0xbd)]=c,this[m(0xaf)]();}['property'];['unsetValue'];[k(0xac)];[k(0xaf)](){const n=k;this['value']?(this['_getDomElement']('value')['innerText']=this[n(0xc8)],this['_getDomElement'](n(0xc8))['classList'][n(0xb3)]('value-set')):this['_getDomElement']('value')['classList']['remove'](n(0xa8));const c=this[n(0xb6)](n(0xab));for(let d of c['assignedElements']()){if(d[n(0xbf)][n(0xc8)]==this['value'])d['style'][n(0xad)]='cornflowerblue';else d[n(0xb5)]['background']='';}}['ready'](){const o=k;this['_parseAttributesToProperties']();if(this[o(0xbc)])this['_getDomElement'](o(0xa6))[o(0xb5)]['display']=o(0xbb);if(this['noValueInHeader'])this[o(0xb6)]('vhd')[o(0xb5)]['display']=o(0xae);const c=this['_getDomElement']('slot');c[o(0xba)]=d=>{const p=o,f=d[p(0xb9)]();for(let g of c[p(0xb1)]()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this['value']=g[p(0xbf)][p(0xc8)];const i=new CustomEvent(p(0xaa),{'detail':{'newValue':this[p(0xbd)],'oldValue':h}});this['dispatchEvent'](i);}}},this['_getDomElement'](o(0xbc))[o(0xc6)]=this['property']??'',this[o(0xb6)]('value')['innerText']=this[o(0xa7)]??'',this['_updateValue']();}}customElements[k(0xc4)](k(0xb4),ImageButtonListSelector);function b(c,d){c=c-0xa6;const e=a();let f=e[c];return f;}function a(){const q=['unsetValue','value-set','75780QAFZid','value-changed','slot','noValueInHeader','background','none','_updateValue','14SCnjRR','assignedElements','31833sEabXU','add','node-projects-image-button-list-selector','style','_getDomElement','7520660MLayMO','template','composedPath','onclick','block','property','_value','115rUQBOA','dataset','52UVMdfy','11rpBhUN','276936ePYreR','13587192sJRWFU','define','584sjiJXj','innerText','14428iOgqOu','value','797484MjRwZc','header'];a=function(){return q;};return a();}