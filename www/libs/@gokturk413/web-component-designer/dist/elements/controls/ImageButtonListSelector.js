function b(c,d){c=c-0x10a;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x118))/0x1+-parseInt(j(0x110))/0x2+-parseInt(j(0x122))/0x3*(parseInt(j(0x121))/0x4)+parseInt(j(0x114))/0x5*(parseInt(j(0x126))/0x6)+-parseInt(j(0x11a))/0x7+-parseInt(j(0x117))/0x8+-parseInt(j(0x124))/0x9*(-parseInt(j(0x115))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8513));function a(){const q=['unsetValue','_value','4820ySsUNP','755620LOHxhL','value-changed','12811104RPHPbq','1299442vCMlbo','_getDomElement','6298607kvStRD','assignedElements','add','noValueInHeader','property','_restoreCachedInititalValues','value','36wIvIPY','588681zniubO','dataset','531qqHUrj','slot','2226GiPZQK','style','innerText','define','_updateValue','properties','block','1792882PsYrmh','header'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x10a)]=css`
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
  `;static [k(0x10e)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x11f)]();}[k(0x113)];get['value'](){return this['_value'];}set[k(0x120)](c){const m=k;this['_value']=c,this[m(0x10d)]();}[k(0x11e)];[k(0x112)];[k(0x11d)];[k(0x10d)](){const n=k;this['value']?(this[n(0x119)]('value')[n(0x10b)]=this['value'],this[n(0x119)]('value')['classList'][n(0x11c)]('value-set')):this[n(0x119)](n(0x120))['classList']['remove']('value-set');const c=this['_getDomElement'](n(0x125));for(let d of c[n(0x11b)]()){if(d[n(0x123)]['value']==this['value'])d[n(0x10a)]['background']='cornflowerblue';else d['style']['background']='';}}['ready'](){const o=k;this['_parseAttributesToProperties']();if(this['property'])this['_getDomElement'](o(0x111))[o(0x10a)]['display']=o(0x10f);if(this['noValueInHeader'])this[o(0x119)]('vhd')[o(0x10a)]['display']='none';const c=this['_getDomElement'](o(0x125));c['onclick']=d=>{const p=o,f=d['composedPath']();for(let g of c[p(0x11b)]()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this['value']=g[p(0x123)][p(0x120)];const i=new CustomEvent(p(0x116),{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0x119)]('property')[o(0x10b)]=this['property']??'',this['_getDomElement'](o(0x120))[o(0x10b)]=this['unsetValue']??'',this['_updateValue']();}}customElements[k(0x10c)]('node-projects-image-button-list-selector',ImageButtonListSelector);