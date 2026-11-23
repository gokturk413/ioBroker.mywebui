function a(){const p=['417540qIVDsi','block','innerText','3486237GAdynd','623268KWclsy','36OndhoF','unsetValue','add','header','_value','value','_updateValue','define','property','3168iazGHZ','4xlFdLp','18240ZpOcsG','_getDomElement','7SNaTIF','dataset','template','onclick','properties','style','value-set','value-changed','slot','vhd','display','classList','background','_parseAttributesToProperties','none','1669384sEJkdC','8086716gTGCCT','894530GjPkAH'];a=function(){return p;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x14f))/0x1+-parseInt(j(0x14a))/0x2+parseInt(j(0x14e))/0x3*(parseInt(j(0x136))/0x4)+-parseInt(j(0x14b))/0x5*(-parseInt(j(0x150))/0x6)+parseInt(j(0x139))/0x7*(-parseInt(j(0x148))/0x8)+parseInt(j(0x149))/0x9+-parseInt(j(0x137))/0xa*(parseInt(j(0x135))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb8d8d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x13b)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x13d)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0x130)];get[k(0x131)](){return this['_value'];}set[k(0x131)](c){const l=k;this[l(0x130)]=c,this[l(0x132)]();}[k(0x134)];[k(0x151)];['noValueInHeader'];['_updateValue'](){const m=k;this[m(0x131)]?(this[m(0x138)]('value')['innerText']=this['value'],this['_getDomElement'](m(0x131))[m(0x144)][m(0x152)]('value-set')):this['_getDomElement'](m(0x131))['classList']['remove'](m(0x13f));const c=this[m(0x138)]('slot');for(let d of c['assignedElements']()){if(d['dataset'][m(0x131)]==this[m(0x131)])d['style'][m(0x145)]='cornflowerblue';else d[m(0x13e)][m(0x145)]='';}}['ready'](){const n=k;this[n(0x146)]();if(this[n(0x134)])this['_getDomElement'](n(0x153))['style']['display']=n(0x14c);if(this['noValueInHeader'])this['_getDomElement'](n(0x142))[n(0x13e)][n(0x143)]=n(0x147);const c=this[n(0x138)](n(0x141));c[n(0x13c)]=d=>{const o=n,f=d['composedPath']();for(let g of c['assignedElements']()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this[o(0x131)]=g[o(0x13a)]['value'];const i=new CustomEvent(o(0x140),{'detail':{'newValue':this[o(0x130)],'oldValue':h}});this['dispatchEvent'](i);}}},this[n(0x138)](n(0x134))['innerText']=this[n(0x134)]??'',this[n(0x138)](n(0x131))[n(0x14d)]=this['unsetValue']??'',this[n(0x132)]();}}function b(c,d){c=c-0x130;const e=a();let f=e[c];return f;}customElements[k(0x133)]('node-projects-image-button-list-selector',ImageButtonListSelector);