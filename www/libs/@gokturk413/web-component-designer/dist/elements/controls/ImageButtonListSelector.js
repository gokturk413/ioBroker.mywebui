function b(c,d){c=c-0x8b;const e=a();let f=e[c];return f;}const k=b;function a(){const p=['_getDomElement','1338885BJUkWF','node-projects-image-button-list-selector','688359PiqcsM','2105979QzzOfw','style','properties','_value','value-set','13972530awAvQr','10hGOIOD','display','classList','cornflowerblue','innerText','4368705RSRJcv','composedPath','_updateValue','dispatchEvent','56WcLbFt','3378716WNaeaI','903454XgsMjj','assignedElements','6BtyGgk','2xewUGG','none','add','value','unsetValue','slot'];a=function(){return p;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x94))/0x1*(parseInt(j(0x97))/0x2)+-parseInt(j(0xa1))/0x3+parseInt(j(0x93))/0x4+-parseInt(j(0x8e))/0x5*(parseInt(j(0x96))/0x6)+-parseInt(j(0xa0))/0x7*(parseInt(j(0x92))/0x8)+parseInt(j(0x9e))/0x9*(-parseInt(j(0xa7))/0xa)+parseInt(j(0xa6))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x93d41));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0xa3)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){super(),this['_restoreCachedInititalValues']();}['_value'];get[k(0x9a)](){return this['_value'];}set['value'](c){const l=k;this[l(0xa4)]=c,this[l(0x90)]();}['property'];['unsetValue'];['noValueInHeader'];['_updateValue'](){const m=k;this['value']?(this['_getDomElement'](m(0x9a))[m(0x8d)]=this[m(0x9a)],this[m(0x9d)]('value')[m(0x8b)][m(0x99)](m(0xa5))):this[m(0x9d)](m(0x9a))[m(0x8b)]['remove'](m(0xa5));const c=this[m(0x9d)](m(0x9c));for(let d of c['assignedElements']()){if(d['dataset']['value']==this['value'])d['style']['background']=m(0x8c);else d[m(0xa2)]['background']='';}}['ready'](){const n=k;this['_parseAttributesToProperties']();if(this['property'])this[n(0x9d)]('header')[n(0xa2)][n(0xa8)]='block';if(this['noValueInHeader'])this[n(0x9d)]('vhd')['style'][n(0xa8)]=n(0x98);const c=this['_getDomElement'](n(0x9c));c['onclick']=d=>{const o=n,f=d[o(0x8f)]();for(let g of c[o(0x95)]()){if(f['indexOf'](g)>=0x0){const h=this[o(0xa4)];this[o(0x9a)]=g['dataset']['value'];const i=new CustomEvent('value-changed',{'detail':{'newValue':this[o(0xa4)],'oldValue':h}});this[o(0x91)](i);}}},this['_getDomElement']('property')['innerText']=this['property']??'',this[n(0x9d)](n(0x9a))[n(0x8d)]=this[n(0x9b)]??'',this['_updateValue']();}}customElements['define'](k(0x9f),ImageButtonListSelector);