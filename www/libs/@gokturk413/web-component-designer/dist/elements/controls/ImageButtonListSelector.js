const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x197))/0x1*(parseInt(j(0x1b8))/0x2)+-parseInt(j(0x1b2))/0x3+-parseInt(j(0x19a))/0x4*(parseInt(j(0x1b3))/0x5)+parseInt(j(0x1b6))/0x6*(-parseInt(j(0x1ba))/0x7)+parseInt(j(0x1aa))/0x8*(parseInt(j(0x1b4))/0x9)+-parseInt(j(0x199))/0xa*(-parseInt(j(0x1ab))/0xb)+parseInt(j(0x198))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40495));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x197;const e=a();let f=e[c];return f;}export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x19e)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}[k(0x1a0)];get[k(0x1b9)](){const l=k;return this[l(0x1a0)];}set[k(0x1b9)](c){const m=k;this[m(0x1a0)]=c,this['_updateValue']();}['property'];['unsetValue'];['noValueInHeader'];['_updateValue'](){const n=k;this['value']?(this[n(0x1a4)](n(0x1b9))[n(0x19b)]=this[n(0x1b9)],this[n(0x1a4)](n(0x1b9))[n(0x1b1)][n(0x1a3)](n(0x19f))):this['_getDomElement']('value')['classList'][n(0x1a6)]('value-set');const c=this[n(0x1a4)](n(0x19d));for(let d of c['assignedElements']()){if(d['dataset']['value']==this[n(0x1b9)])d['style']['background']=n(0x1a7);else d['style'][n(0x1a2)]='';}}[k(0x1a9)](){const o=k;this[o(0x1b5)]();if(this[o(0x1af)])this[o(0x1a4)]('header')[o(0x1a8)][o(0x1b7)]='block';if(this[o(0x1ad)])this[o(0x1a4)]('vhd')[o(0x1a8)]['display']=o(0x1b0);const c=this['_getDomElement']('slot');c['onclick']=d=>{const p=o,f=d[p(0x1a5)]();for(let g of c[p(0x1ae)]()){if(f['indexOf'](g)>=0x0){const h=this['_value'];this['value']=g['dataset'][p(0x1b9)];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0x1a4)]('property')[o(0x19b)]=this[o(0x1af)]??'',this[o(0x1a4)](o(0x1b9))[o(0x19b)]=this[o(0x1ac)]??'',this['_updateValue']();}}function a(){const q=['slot','properties','value-set','_value','define','background','add','_getDomElement','composedPath','remove','cornflowerblue','style','ready','184QCLlyy','11297qNHfHY','unsetValue','noValueInHeader','assignedElements','property','none','classList','1339302lOutUu','30qsYQHK','142056JdBiIT','_parseAttributesToProperties','114BYidgq','display','3966SWoJTn','value','106883pjYgXO','3diEchg','10536240hVXhqO','310QNLdWX','178052MDdXxl','innerText','node-projects-image-button-list-selector'];a=function(){return q;};return a();}customElements[k(0x1a1)](k(0x19c),ImageButtonListSelector);