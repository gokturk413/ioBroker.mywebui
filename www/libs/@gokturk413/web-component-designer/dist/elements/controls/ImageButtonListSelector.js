function b(c,d){c=c-0x1c3;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1cd))/0x1*(-parseInt(j(0x1e2))/0x2)+-parseInt(j(0x1cf))/0x3+-parseInt(j(0x1c4))/0x4*(parseInt(j(0x1d6))/0x5)+parseInt(j(0x1dd))/0x6*(-parseInt(j(0x1c3))/0x7)+parseInt(j(0x1d3))/0x8+-parseInt(j(0x1d8))/0x9+parseInt(j(0x1c5))/0xa*(parseInt(j(0x1e1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xac26e));function a(){const q=['76130IMznvg','add','_updateValue','indexOf','composedPath','_value','style','dataset','267359GJrbye','background','779427CbqXly','noValueInHeader','classList','value','9414176EdYKVM','_getDomElement','define','3192530UbiFyn','value-set','8828262KpKAIk','assignedElements','template','innerText','property','60Psjoct','display','remove','_parseAttributesToProperties','2948JzvIZn','2tULdPE','255731BbTxgN','4unbVey'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x1cb)]=css`
    div {
      font-size: 10px;
      color: white;
    }
    #property {
      color: #00aff0;
    }
    #value {
      color: lightgray;
    }
    #value.value-set {
      color: wheat;
    }
    .container {
      display: flex;
      flex-direction: row;
    }
    ::slotted(button) {
      min-width: 24px;
      height: 24px;
      padding: 1px;
      background: white;
      border: 1px solid lightgray;
    }
  `;static [k(0x1da)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static ['properties']={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get['value'](){const l=k;return this[l(0x1ca)];}set['value'](c){const m=k;this['_value']=c,this[m(0x1c7)]();}[k(0x1dc)];['unsetValue'];[k(0x1d0)];[k(0x1c7)](){const n=k;this['value']?(this[n(0x1d4)](n(0x1d2))[n(0x1db)]=this[n(0x1d2)],this['_getDomElement'](n(0x1d2))['classList'][n(0x1c6)](n(0x1d7))):this['_getDomElement'](n(0x1d2))[n(0x1d1)][n(0x1df)]('value-set');const c=this[n(0x1d4)]('slot');for(let d of c[n(0x1d9)]()){if(d[n(0x1cc)]['value']==this[n(0x1d2)])d[n(0x1cb)]['background']='cornflowerblue';else d[n(0x1cb)][n(0x1ce)]='';}}['ready'](){const o=k;this[o(0x1e0)]();if(this['property'])this[o(0x1d4)]('header')['style'][o(0x1de)]='block';if(this[o(0x1d0)])this['_getDomElement']('vhd')['style'][o(0x1de)]='none';const c=this[o(0x1d4)]('slot');c['onclick']=d=>{const p=o,f=d[p(0x1c9)]();for(let g of c[p(0x1d9)]()){if(f[p(0x1c8)](g)>=0x0){const h=this[p(0x1ca)];this['value']=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[p(0x1ca)],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0x1d4)](o(0x1dc))[o(0x1db)]=this['property']??'',this[o(0x1d4)](o(0x1d2))['innerText']=this['unsetValue']??'',this['_updateValue']();}}customElements[k(0x1d5)]('node-projects-image-button-list-selector',ImageButtonListSelector);