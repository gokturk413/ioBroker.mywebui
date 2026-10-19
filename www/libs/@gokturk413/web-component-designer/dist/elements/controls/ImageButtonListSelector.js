const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xc9))/0x1*(-parseInt(j(0xc0))/0x2)+-parseInt(j(0xb7))/0x3*(parseInt(j(0xb0))/0x4)+parseInt(j(0xb2))/0x5+parseInt(j(0xb3))/0x6*(-parseInt(j(0xb8))/0x7)+parseInt(j(0xc3))/0x8*(parseInt(j(0xc8))/0x9)+parseInt(j(0xc4))/0xa+parseInt(j(0xc1))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8ff5));function a(){const o=['_value','2474058qsacbq','5850130gOpUMR','dataset','311120DnRuPJ','15440660LTqwxx','value','ready','_getDomElement','9xAdkQD','1NepnNi','onclick','node-projects-image-button-list-selector','assignedElements','4649412AHQNPU','style','822190tjkyjq','9183690JLvXPz','_updateValue','display','innerText','3wevGMy','7VyAluz','classList','noValueInHeader','property','properties','slot','template'];a=function(){return o;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xae;const e=a();let f=e[c];return f;}export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0xb1)]=css`
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
  `;static [k(0xbe)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0xbc)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0xbf)];get['value'](){return this['_value'];}set['value'](c){this['_value']=c,this['_updateValue']();}[k(0xbb)];['unsetValue'];[k(0xba)];[k(0xb4)](){const l=k;this['value']?(this[l(0xc7)]('value')['innerText']=this[l(0xc5)],this['_getDomElement']('value')[l(0xb9)]['add']('value-set')):this[l(0xc7)]('value')['classList']['remove']('value-set');const c=this[l(0xc7)](l(0xbd));for(let d of c[l(0xaf)]()){if(d['dataset'][l(0xc5)]==this[l(0xc5)])d['style']['background']='cornflowerblue';else d[l(0xb1)]['background']='';}}[k(0xc6)](){const m=k;this['_parseAttributesToProperties']();if(this['property'])this[m(0xc7)]('header')[m(0xb1)][m(0xb5)]='block';if(this['noValueInHeader'])this['_getDomElement']('vhd')[m(0xb1)]['display']='none';const c=this['_getDomElement']('slot');c[m(0xca)]=d=>{const n=m,f=d['composedPath']();for(let g of c[n(0xaf)]()){if(f['indexOf'](g)>=0x0){const h=this[n(0xbf)];this[n(0xc5)]=g[n(0xc2)]['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[n(0xbf)],'oldValue':h}});this['dispatchEvent'](i);}}},this['_getDomElement']('property')['innerText']=this[m(0xbb)]??'',this['_getDomElement']('value')[m(0xb6)]=this['unsetValue']??'',this['_updateValue']();}}customElements['define'](k(0xae),ImageButtonListSelector);