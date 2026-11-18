const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x121))/0x1+-parseInt(j(0x107))/0x2+-parseInt(j(0x109))/0x3*(parseInt(j(0x10e))/0x4)+-parseInt(j(0x11f))/0x5+-parseInt(j(0x10a))/0x6*(parseInt(j(0x10b))/0x7)+parseInt(j(0x116))/0x8+parseInt(j(0x110))/0x9*(parseInt(j(0x11d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc99ed));function b(c,d){c=c-0x107;const e=a();let f=e[c];return f;}function a(){const q=['none','classList','add','625972qxnVjv','node-projects-image-button-list-selector','2478921pqZntx','78bSQHsd','663635PEaQMX','_getDomElement','value','4vIQkmh','style','64899lKRjyt','noValueInHeader','assignedElements','block','slot','_updateValue','11619936wggbTf','properties','_parseAttributesToProperties','_value','unsetValue','innerText','display','3680SENwni','value-set','1795305PylKPP','background','549484AKnKQo','cornflowerblue'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x117)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0x119)];get[k(0x10d)](){const l=k;return this[l(0x119)];}set[k(0x10d)](c){const m=k;this['_value']=c,this[m(0x115)]();}['property'];[k(0x11a)];[k(0x111)];[k(0x115)](){const n=k;this[n(0x10d)]?(this[n(0x10c)]('value')['innerText']=this['value'],this['_getDomElement'](n(0x10d))[n(0x124)][n(0x125)](n(0x11e))):this['_getDomElement'](n(0x10d))['classList']['remove'](n(0x11e));const c=this['_getDomElement'](n(0x114));for(let d of c[n(0x112)]()){if(d['dataset'][n(0x10d)]==this['value'])d['style']['background']=n(0x122);else d['style'][n(0x120)]='';}}['ready'](){const o=k;this[o(0x118)]();if(this['property'])this[o(0x10c)]('header')['style']['display']=o(0x113);if(this[o(0x111)])this['_getDomElement']('vhd')[o(0x10f)][o(0x11c)]=o(0x123);const c=this['_getDomElement']('slot');c['onclick']=d=>{const p=o,f=d['composedPath']();for(let g of c['assignedElements']()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this['value']=g['dataset'][p(0x10d)];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[p(0x119)],'oldValue':h}});this['dispatchEvent'](i);}}},this['_getDomElement']('property')[o(0x11b)]=this['property']??'',this[o(0x10c)]('value')['innerText']=this[o(0x11a)]??'',this[o(0x115)]();}}customElements['define'](k(0x108),ImageButtonListSelector);