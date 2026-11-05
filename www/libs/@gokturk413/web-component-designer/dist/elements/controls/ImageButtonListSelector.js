const k=b;function a(){const p=['3358TRkzBD','174615UbNcGu','add','value-set','remove','cornflowerblue','vhd','property','style','properties','unsetValue','header','1361586uUCSHr','innerText','7780270nNCqYc','120BoinZV','define','3334912UxEiSv','none','dispatchEvent','display','node-projects-image-button-list-selector','_getDomElement','_value','ready','background','7040838jeDQqV','indexOf','2065624fssQMV','value-changed','noValueInHeader','value','299HmGmbA','9HGYzah','_updateValue'];a=function(){return p;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x11e))/0x1*(-parseInt(j(0x121))/0x2)+-parseInt(j(0x12d))/0x3+-parseInt(j(0x11a))/0x4+-parseInt(j(0x122))/0x5*(-parseInt(j(0x10d))/0x6)+parseInt(j(0x118))/0x7+-parseInt(j(0x10f))/0x8+parseInt(j(0x11f))/0x9*(parseInt(j(0x12f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x90d10));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x10d;const e=a();let f=e[c];return f;}export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x12a)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get[k(0x11d)](){return this['_value'];}set[k(0x11d)](c){const l=k;this[l(0x115)]=c,this[l(0x120)]();}['property'];[k(0x12b)];['noValueInHeader'];['_updateValue'](){const m=k;this[m(0x11d)]?(this['_getDomElement'](m(0x11d))['innerText']=this[m(0x11d)],this['_getDomElement'](m(0x11d))['classList'][m(0x123)](m(0x124))):this['_getDomElement'](m(0x11d))['classList'][m(0x125)]('value-set');const c=this[m(0x114)]('slot');for(let d of c['assignedElements']()){if(d['dataset'][m(0x11d)]==this[m(0x11d)])d['style']['background']=m(0x126);else d['style'][m(0x117)]='';}}[k(0x116)](){const n=k;this['_parseAttributesToProperties']();if(this[n(0x128)])this['_getDomElement'](n(0x12c))['style'][n(0x112)]='block';if(this[n(0x11c)])this['_getDomElement'](n(0x127))[n(0x129)]['display']=n(0x110);const c=this['_getDomElement']('slot');c['onclick']=d=>{const o=n,f=d['composedPath']();for(let g of c['assignedElements']()){if(f[o(0x119)](g)>=0x0){const h=this['_value'];this['value']=g['dataset'][o(0x11d)];const i=new CustomEvent(o(0x11b),{'detail':{'newValue':this['_value'],'oldValue':h}});this[o(0x111)](i);}}},this['_getDomElement']('property')[n(0x12e)]=this['property']??'',this['_getDomElement'](n(0x11d))['innerText']=this['unsetValue']??'',this['_updateValue']();}}customElements[k(0x10e)](k(0x113),ImageButtonListSelector);