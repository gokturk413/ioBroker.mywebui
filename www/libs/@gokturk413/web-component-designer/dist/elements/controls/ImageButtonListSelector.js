function b(c,d){c=c-0x134;const e=a();let f=e[c];return f;}function a(){const q=['4468464pccnwm','remove','properties','define','13140860rizPij','node-projects-image-button-list-selector','ready','_restoreCachedInititalValues','block','none','136109hOMFMr','_getDomElement','display','4689405veETjs','2381928MENmpB','noValueInHeader','add','value-changed','template','_updateValue','_value','background','unsetValue','162ZGGcvl','innerText','cornflowerblue','style','value-set','10628WpCfIW','9WqWAog','slot','value','property','_parseAttributesToProperties','273manAFM','136290GyKMuo','header'];a=function(){return q;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x14f))/0x1+-parseInt(j(0x153))/0x2+-parseInt(j(0x137))/0x3*(-parseInt(j(0x13c))/0x4)+-parseInt(j(0x152))/0x5+-parseInt(j(0x143))/0x6*(-parseInt(j(0x142))/0x7)+parseInt(j(0x145))/0x8+parseInt(j(0x13d))/0x9*(parseInt(j(0x149))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9b87d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x157)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x147)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x14c)]();}['_value'];get['value'](){return this['_value'];}set['value'](c){const m=k;this['_value']=c,this[m(0x158)]();}['property'];[k(0x136)];[k(0x154)];[k(0x158)](){const n=k;this['value']?(this['_getDomElement']('value')[n(0x138)]=this['value'],this[n(0x150)](n(0x13f))['classList'][n(0x155)]('value-set')):this['_getDomElement'](n(0x13f))['classList'][n(0x146)](n(0x13b));const c=this[n(0x150)](n(0x13e));for(let d of c['assignedElements']()){if(d['dataset'][n(0x13f)]==this[n(0x13f)])d[n(0x13a)][n(0x135)]=n(0x139);else d['style'][n(0x135)]='';}}[k(0x14b)](){const o=k;this[o(0x141)]();if(this[o(0x140)])this[o(0x150)](o(0x144))[o(0x13a)][o(0x151)]=o(0x14d);if(this['noValueInHeader'])this[o(0x150)]('vhd')['style'][o(0x151)]=o(0x14e);const c=this[o(0x150)]('slot');c['onclick']=d=>{const p=o,f=d['composedPath']();for(let g of c['assignedElements']()){if(f['indexOf'](g)>=0x0){const h=this[p(0x134)];this[p(0x13f)]=g['dataset'][p(0x13f)];const i=new CustomEvent(p(0x156),{'detail':{'newValue':this['_value'],'oldValue':h}});this['dispatchEvent'](i);}}},this[o(0x150)]('property')[o(0x138)]=this['property']??'',this[o(0x150)]('value')[o(0x138)]=this['unsetValue']??'',this[o(0x158)]();}}customElements[k(0x148)](k(0x14a),ImageButtonListSelector);