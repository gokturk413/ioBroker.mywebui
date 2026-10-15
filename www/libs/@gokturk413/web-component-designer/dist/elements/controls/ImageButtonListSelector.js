const k=b;function b(c,d){c=c-0x1de;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1e3))/0x1*(-parseInt(j(0x1ec))/0x2)+-parseInt(j(0x1de))/0x3+-parseInt(j(0x1f9))/0x4*(parseInt(j(0x1f8))/0x5)+parseInt(j(0x1ea))/0x6*(parseInt(j(0x1f0))/0x7)+-parseInt(j(0x1f1))/0x8*(-parseInt(j(0x1e9))/0x9)+-parseInt(j(0x1e5))/0xa+-parseInt(j(0x1fb))/0xb*(-parseInt(j(0x1ed))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbea2f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static [k(0x1e1)]=css`
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
  `;static [k(0x1fc)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x1f7)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x1e4)]();}['_value'];get[k(0x1e6)](){return this['_value'];}set['value'](c){const m=k;this['_value']=c,this[m(0x1ee)]();}['property'];['unsetValue'];['noValueInHeader'];['_updateValue'](){const n=k;this[n(0x1e6)]?(this['_getDomElement'](n(0x1e6))[n(0x1eb)]=this['value'],this['_getDomElement'](n(0x1e6))['classList']['add'](n(0x1df))):this['_getDomElement']('value')['classList']['remove']('value-set');const c=this['_getDomElement']('slot');for(let d of c['assignedElements']()){if(d['dataset'][n(0x1e6)]==this[n(0x1e6)])d['style']['background']='cornflowerblue';else d['style']['background']='';}}[k(0x1e8)](){const o=k;this['_parseAttributesToProperties']();if(this[o(0x1e7)])this[o(0x1f5)]('header')[o(0x1e1)][o(0x1e0)]='block';if(this['noValueInHeader'])this['_getDomElement'](o(0x1f4))['style']['display']='none';const c=this[o(0x1f5)](o(0x1f6));c['onclick']=d=>{const p=o,f=d['composedPath']();for(let g of c['assignedElements']()){if(f[p(0x1f3)](g)>=0x0){const h=this[p(0x1ef)];this[p(0x1e6)]=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this['_getDomElement'](o(0x1e7))['innerText']=this['property']??'',this[o(0x1f5)]('value')[o(0x1eb)]=this[o(0x1e2)]??'',this['_updateValue']();}}customElements[k(0x1f2)](k(0x1fa),ImageButtonListSelector);function a(){const q=['135094rmUFph','300VloLfZ','_updateValue','_value','4040183oHtRKd','16aObamB','define','indexOf','vhd','_getDomElement','slot','properties','2983345RMCMfu','4sQYtoG','node-projects-image-button-list-selector','952457YYljyx','template','2411016lIIRpD','value-set','display','style','unsetValue','1BKZbMS','_restoreCachedInititalValues','8816850iDsyRn','value','property','ready','1140669dpqGdf','6QpYmPj','innerText'];a=function(){return q;};return a();}