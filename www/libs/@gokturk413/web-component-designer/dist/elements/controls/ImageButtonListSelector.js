const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x167))/0x1+parseInt(j(0x163))/0x2+-parseInt(j(0x16d))/0x3*(-parseInt(j(0x15e))/0x4)+parseInt(j(0x161))/0x5+parseInt(j(0x16b))/0x6*(parseInt(j(0x154))/0x7)+-parseInt(j(0x150))/0x8*(parseInt(j(0x159))/0x9)+-parseInt(j(0x151))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6c944));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x164)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x152)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x153)]();}[k(0x165)];get['value'](){const m=k;return this[m(0x165)];}set['value'](c){const n=k;this[n(0x165)]=c,this[n(0x15d)]();}[k(0x160)];['unsetValue'];['noValueInHeader'];[k(0x15d)](){const o=k;this['value']?(this['_getDomElement']('value')[o(0x156)]=this[o(0x15a)],this['_getDomElement'](o(0x15a))['classList']['add']('value-set')):this[o(0x158)]('value')[o(0x155)]['remove']('value-set');const c=this['_getDomElement'](o(0x16a));for(let d of c['assignedElements']()){if(d[o(0x168)][o(0x15a)]==this[o(0x15a)])d['style']['background']=o(0x15b);else d['style'][o(0x169)]='';}}['ready'](){const p=k;this[p(0x15f)]();if(this['property'])this['_getDomElement']('header')['style'][p(0x157)]='block';if(this['noValueInHeader'])this[p(0x158)]('vhd')['style']['display']='none';const c=this['_getDomElement'](p(0x16a));c['onclick']=d=>{const q=p,f=d['composedPath']();for(let g of c['assignedElements']()){if(f[q(0x16c)](g)>=0x0){const h=this['_value'];this['value']=g[q(0x168)][q(0x15a)];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this[q(0x15c)](i);}}},this[p(0x158)]('property')['innerText']=this['property']??'',this[p(0x158)](p(0x15a))['innerText']=this['unsetValue']??'',this[p(0x15d)]();}}customElements[k(0x162)](k(0x166),ImageButtonListSelector);function b(c,d){c=c-0x150;const e=a();let f=e[c];return f;}function a(){const r=['display','_getDomElement','440289EMJNfI','value','cornflowerblue','dispatchEvent','_updateValue','4PPtLKI','_parseAttributesToProperties','property','4331145FKVKJU','define','1233414oVmwzi','template','_value','node-projects-image-button-list-selector','590774qEtbFw','dataset','background','slot','4490310rPIxEt','indexOf','2636667DivQwW','48QjRpcg','17811700BiUDYJ','properties','_restoreCachedInititalValues','7wuJVDM','classList','innerText'];a=function(){return r;};return a();}