function b(c,d){c=c-0x64;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x64))/0x1+-parseInt(j(0x7b))/0x2+parseInt(j(0x6d))/0x3+parseInt(j(0x77))/0x4*(parseInt(j(0x7c))/0x5)+parseInt(j(0x67))/0x6+-parseInt(j(0x6e))/0x7+parseInt(j(0x73))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22d38));function a(){const q=['1473798rjUpHd','header','onclick','assignedElements','innerText','property','793008cJicAv','1383837LgHjkc','dataset','value','composedPath','ready','1818400RaSIBR','style','_parseAttributesToProperties','define','212MSlwSA','slot','properties','_value','376950UvqwuB','2185EObfNS','_getDomElement','background','unsetValue','231616DYeoNC','none','_updateValue'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x79)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0x7a)];get[k(0x70)](){const l=k;return this[l(0x7a)];}set[k(0x70)](c){const m=k;this[m(0x7a)]=c,this['_updateValue']();}['property'];[k(0x7f)];['noValueInHeader'];[k(0x66)](){const n=k;this['value']?(this['_getDomElement']('value')[n(0x6b)]=this[n(0x70)],this['_getDomElement'](n(0x70))['classList']['add']('value-set')):this['_getDomElement']('value')['classList']['remove']('value-set');const c=this[n(0x7d)](n(0x78));for(let d of c[n(0x6a)]()){if(d[n(0x6f)]['value']==this[n(0x70)])d[n(0x74)][n(0x7e)]='cornflowerblue';else d[n(0x74)]['background']='';}}[k(0x72)](){const o=k;this[o(0x75)]();if(this[o(0x6c)])this['_getDomElement'](o(0x68))['style']['display']='block';if(this['noValueInHeader'])this['_getDomElement']('vhd')[o(0x74)]['display']=o(0x65);const c=this['_getDomElement'](o(0x78));c[o(0x69)]=d=>{const p=o,f=d[p(0x71)]();for(let g of c[p(0x6a)]()){if(f['indexOf'](g)>=0x0){const h=this[p(0x7a)];this[p(0x70)]=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0x7d)]('property')['innerText']=this[o(0x6c)]??'',this[o(0x7d)]('value')['innerText']=this['unsetValue']??'',this[o(0x66)]();}}customElements[k(0x76)]('node-projects-image-button-list-selector',ImageButtonListSelector);