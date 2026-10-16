var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x14e))/0x1*(parseInt(h(0x14c))/0x2)+parseInt(h(0x15e))/0x3*(-parseInt(h(0x15b))/0x4)+-parseInt(h(0x151))/0x5*(parseInt(h(0x15a))/0x6)+-parseInt(h(0x152))/0x7*(parseInt(h(0x149))/0x8)+parseInt(h(0x14b))/0x9+parseInt(h(0x150))/0xa+parseInt(h(0x154))/0xb*(parseInt(h(0x156))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf2010));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x14a)]=css`
        :host {
            display: block;
            height: 100%;
            box-sizing: border-box;
            background: var(--ui-surface, #252b38);
            color: var(--text-color, #e8e8ea);
        }
        #upper {
            height: calc(100% - 35px);
            position: relative;
        }
        #lower {
            height: 35px;
            display: grid;
            gap: 5px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            padding: 5px;
            box-sizing: border-box;
        }`;static [i(0x159)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0x14d)]();if(c?.['okText'])this[j(0x158)]('ok')[j(0x14f)]=c[j(0x147)];if(c?.['cancelText'])this['_getDomElement']('cancel')[j(0x14f)]=c[j(0x155)];}['ready'](){var k=i;this[k(0x153)]();}['_ok'](){var l=i;this[l(0x15c)]?.['emit']();}['_cancel'](){var m=i;this[m(0x15d)]?.[m(0x148)]();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}function a(){var n=['okClicked','cancelClicked','164121YJxyFA','define','okText','emit','72XotbuG','style','5228487iPwdXg','12HoYzNd','_restoreCachedInititalValues','152275nAELEV','textContent','476830FgJyMD','15ULUJNA','521682NoFXxx','_assignEvents','198yUSUrY','cancelText','2815836aGWeCu','iobroker-webui-confirmation-wrapper','_getDomElement','template','2912286yWipgz','60NrCnNz'];a=function(){return n;};return a();}function b(c,d){c=c-0x146;var e=a();var f=e[c];return f;}customElements[i(0x146)](i(0x157),IobrokerWebuiConfirmationWrapper);