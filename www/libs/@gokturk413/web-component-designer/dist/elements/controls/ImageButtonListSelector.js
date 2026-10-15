const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1d7))/0x1*(parseInt(j(0x1eb))/0x2)+parseInt(j(0x1ee))/0x3+parseInt(j(0x1db))/0x4*(parseInt(j(0x1f1))/0x5)+-parseInt(j(0x1d3))/0x6+parseInt(j(0x1d4))/0x7*(parseInt(j(0x1e1))/0x8)+parseInt(j(0x1e6))/0x9+-parseInt(j(0x1e5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb86c2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x1d9)]=css`
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
  `;static [k(0x1e3)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x1f3)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get[k(0x1ed)](){return this['_value'];}set[k(0x1ed)](c){const l=k;this[l(0x1f0)]=c,this[l(0x1f2)]();}[k(0x1ef)];['unsetValue'];['noValueInHeader'];[k(0x1f2)](){const m=k;this[m(0x1ed)]?(this[m(0x1d6)](m(0x1ed))[m(0x1de)]=this[m(0x1ed)],this['_getDomElement'](m(0x1ed))['classList'][m(0x1e7)]('value-set')):this[m(0x1d6)](m(0x1ed))[m(0x1f8)]['remove'](m(0x1e9));const c=this[m(0x1d6)]('slot');for(let d of c[m(0x1d8)]()){if(d['dataset'][m(0x1ed)]==this[m(0x1ed)])d['style'][m(0x1f5)]=m(0x1da);else d['style']['background']='';}}['ready'](){const n=k;this[n(0x1e0)]();if(this[n(0x1ef)])this['_getDomElement']('header')[n(0x1d9)][n(0x1dc)]=n(0x1f6);if(this[n(0x1f4)])this[n(0x1d6)](n(0x1dd))[n(0x1d9)][n(0x1dc)]=n(0x1f7);const c=this[n(0x1d6)]('slot');c[n(0x1e2)]=d=>{const o=n,f=d['composedPath']();for(let g of c['assignedElements']()){if(f[o(0x1ea)](g)>=0x0){const h=this[o(0x1f0)];this[o(0x1ed)]=g[o(0x1df)]['value'];const i=new CustomEvent(o(0x1d5),{'detail':{'newValue':this[o(0x1f0)],'oldValue':h}});this['dispatchEvent'](i);}}},this[n(0x1d6)]('property')['innerText']=this['property']??'',this[n(0x1d6)](n(0x1ed))['innerText']=this[n(0x1e8)]??'',this['_updateValue']();}}customElements[k(0x1ec)](k(0x1e4),ImageButtonListSelector);function b(c,d){c=c-0x1d3;const e=a();let f=e[c];return f;}function a(){const p=['2708379nsuNBQ','property','_value','3415435uniJVK','_updateValue','properties','noValueInHeader','background','block','none','classList','2485596kXKxvS','416836hWtbAw','value-changed','_getDomElement','524301dEwqWJ','assignedElements','style','cornflowerblue','4UNAEef','display','vhd','innerText','dataset','_parseAttributesToProperties','32YhNMnP','onclick','template','node-projects-image-button-list-selector','4428130ijUDbD','2814318juFtub','add','unsetValue','value-set','indexOf','2KQqGhm','define','value'];a=function(){return p;};return a();}