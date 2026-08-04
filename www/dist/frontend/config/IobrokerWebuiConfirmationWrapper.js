var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x11f))/0x1*(parseInt(h(0x11c))/0x2)+parseInt(h(0x120))/0x3+-parseInt(h(0x10e))/0x4*(parseInt(h(0x118))/0x5)+-parseInt(h(0x10d))/0x6+parseInt(h(0x11d))/0x7*(parseInt(h(0x11b))/0x8)+parseInt(h(0x10f))/0x9+-parseInt(h(0x116))/0xa*(-parseInt(h(0x110))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xda6fe));function a(){var l=['textContent','cancelText','1616550IRwfMG','8UXNxcG','6124653xejdEC','11yHILXz','_cancel','define','_getDomElement','okClicked','ready','7910330PnHpsn','cancelClicked','2528870pWWwuQ','template','iobroker-webui-confirmation-wrapper','765856CJzGdq','2ESZdxh','77wAnrUM','cancel','1076032WpIoYo','2181363SaiaCK'];a=function(){return l;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x119)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this[j(0x113)]('ok')['textContent']=c['okText'];if(c?.[j(0x10c)])this['_getDomElement'](j(0x11e))[j(0x10b)]=c[j(0x10c)];}[i(0x115)](){this['_assignEvents']();}['_ok'](){this['okClicked']?.['emit']();}[i(0x111)](){var k=i;this[k(0x117)]?.['emit']();}[i(0x114)]=new TypedEvent();['cancelClicked']=new TypedEvent();}function b(c,d){c=c-0x10b;var e=a();var f=e[c];return f;}customElements[i(0x112)](i(0x11a),IobrokerWebuiConfirmationWrapper);