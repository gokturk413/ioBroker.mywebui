const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1da))/0x1*(parseInt(j(0x1e1))/0x2)+parseInt(j(0x1d9))/0x3*(parseInt(j(0x1cc))/0x4)+parseInt(j(0x1db))/0x5+-parseInt(j(0x1ea))/0x6*(-parseInt(j(0x1ed))/0x7)+-parseInt(j(0x1d1))/0x8*(-parseInt(j(0x1dc))/0x9)+parseInt(j(0x1e0))/0xa+-parseInt(j(0x1d3))/0xb*(parseInt(j(0x1d5))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x279b7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ImageButtonListSelector extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
  `;static [k(0x1eb)]=html`
    <div>
      <div id="header" style="display: none"><span id="property"></span><span id="vhd">: <span id="value"></span></span></div>
      <div part="container" class="container"><slot id="slot"></slot></div>
    </div>
  `;static [k(0x1d2)]={'value':String,'property':String,'unsetValue':String,'noValueInHeader':Boolean};constructor(){const l=k;super(),this[l(0x1cf)]();}[k(0x1e3)];get['value'](){const m=k;return this[m(0x1e3)];}set[k(0x1e2)](c){const n=k;this[n(0x1e3)]=c,this[n(0x1e4)]();}['property'];[k(0x1df)];[k(0x1d6)];[k(0x1e4)](){const o=k;this[o(0x1e2)]?(this[o(0x1d0)](o(0x1e2))['innerText']=this['value'],this[o(0x1d0)](o(0x1e2))[o(0x1d8)]['add'](o(0x1e7))):this[o(0x1d0)]('value')[o(0x1d8)][o(0x1e5)]('value-set');const c=this[o(0x1d0)]('slot');for(let d of c['assignedElements']()){if(d['dataset'][o(0x1e2)]==this['value'])d[o(0x1e8)][o(0x1e9)]='cornflowerblue';else d[o(0x1e8)][o(0x1e9)]='';}}['ready'](){const p=k;this['_parseAttributesToProperties']();if(this[p(0x1d4)])this['_getDomElement']('header')['style'][p(0x1dd)]=p(0x1de);if(this[p(0x1d6)])this[p(0x1d0)](p(0x1e6))[p(0x1e8)]['display']='none';const c=this['_getDomElement']('slot');c['onclick']=d=>{const q=p,f=d['composedPath']();for(let g of c['assignedElements']()){if(f[q(0x1ec)](g)>=0x0){const h=this[q(0x1e3)];this['value']=g[q(0x1ce)][q(0x1e2)];const i=new CustomEvent('value-changed',{'detail':{'newValue':this['_value'],'oldValue':h}});this[q(0x1cd)](i);}}},this['_getDomElement'](p(0x1d4))['innerText']=this[p(0x1d4)]??'',this[p(0x1d0)](p(0x1e2))['innerText']=this['unsetValue']??'',this['_updateValue']();}}function b(c,d){c=c-0x1cc;const e=a();let f=e[c];return f;}customElements['define'](k(0x1d7),ImageButtonListSelector);function a(){const r=['block','unsetValue','1983960dQPhIO','478HMvHgy','value','_value','_updateValue','remove','vhd','value-set','style','background','337854HQVtKW','template','indexOf','14TdJolx','84nSqnaS','dispatchEvent','dataset','_restoreCachedInititalValues','_getDomElement','549896KNqwun','properties','11ctLsoN','property','8053332ZVIlkH','noValueInHeader','node-projects-image-button-list-selector','classList','7875DQCdWr','1038QKHSLR','751920TCHOjA','9MBOLzr','display'];a=function(){return r;};return a();}