function b(c,d){c=c-0x147;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x14d))/0x1+parseInt(j(0x149))/0x2+parseInt(j(0x15b))/0x3+-parseInt(j(0x165))/0x4*(-parseInt(j(0x161))/0x5)+-parseInt(j(0x166))/0x6*(parseInt(j(0x164))/0x7)+-parseInt(j(0x148))/0x8*(parseInt(j(0x14b))/0x9)+parseInt(j(0x155))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc177d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x158)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0x15e)];get[k(0x147)](){return this['_value'];}set[k(0x147)](c){const l=k;this['_value']=c,this[l(0x14c)]();}[k(0x162)];[k(0x150)];['noValueInHeader'];[k(0x14c)](){const m=k;this['value']?(this[m(0x15d)](m(0x147))['innerText']=this['value'],this[m(0x15d)](m(0x147))[m(0x14a)][m(0x157)]('value-set')):this[m(0x15d)](m(0x147))[m(0x14a)][m(0x159)](m(0x152));const c=this[m(0x15d)]('slot');for(let d of c[m(0x15c)]()){if(d[m(0x153)]['value']==this[m(0x147)])d[m(0x154)]['background']='cornflowerblue';else d['style']['background']='';}}[k(0x160)](){const n=k;this['_parseAttributesToProperties']();if(this[n(0x162)])this[n(0x15d)](n(0x15a))['style'][n(0x14e)]='block';if(this[n(0x163)])this[n(0x15d)]('vhd')['style'][n(0x14e)]=n(0x156);const c=this['_getDomElement'](n(0x151));c['onclick']=d=>{const o=n,f=d['composedPath']();for(let g of c['assignedElements']()){if(f[o(0x15f)](g)>=0x0){const h=this[o(0x15e)];this['value']=g[o(0x153)]['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this[o(0x14f)](i);}}},this['_getDomElement'](n(0x162))['innerText']=this[n(0x162)]??'',this['_getDomElement'](n(0x147))['innerText']=this[n(0x150)]??'',this['_updateValue']();}}function a(){const p=['noValueInHeader','7jaFIzA','4LvCBRE','6259338wMdiOV','value','2488bangAc','1642636GFzfAI','classList','4995yWyAGe','_updateValue','690480PgGRVU','display','dispatchEvent','unsetValue','slot','value-set','dataset','style','5629390xHQqwx','none','add','properties','remove','header','2243733hdvFUf','assignedElements','_getDomElement','_value','indexOf','ready','2832925vDKzir','property'];a=function(){return p;};return a();}customElements['define']('node-projects-image-button-list-selector',ImageButtonListSelector);