function b(c,d){c=c-0x150;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x15f))/0x1+parseInt(h(0x159))/0x2+-parseInt(h(0x158))/0x3*(parseInt(h(0x156))/0x4)+parseInt(h(0x15e))/0x5+parseInt(h(0x161))/0x6*(-parseInt(h(0x157))/0x7)+parseInt(h(0x160))/0x8*(parseInt(h(0x15c))/0x9)+parseInt(h(0x154))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5e67b));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x152)]=css`
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
        }`;static [i(0x150)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0x15a)]();if(c?.['okText'])this[j(0x15d)]('ok')['textContent']=c['okText'];if(c?.['cancelText'])this[j(0x15d)]('cancel')['textContent']=c['cancelText'];}['ready'](){var k=i;this[k(0x151)]();}['_ok'](){this['okClicked']?.['emit']();}[i(0x153)](){var l=i;this[l(0x15b)]?.[l(0x155)]();}['okClicked']=new TypedEvent();['cancelClicked']=new TypedEvent();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);function a(){var m=['template','_assignEvents','style','_cancel','10825570mgBwfF','emit','20636ZGmsYK','2318687LvqAuw','315VQePxx','124090LvhjKX','_restoreCachedInititalValues','cancelClicked','17973peIfIM','_getDomElement','1739335LrlRKW','94397JAcxeY','16fgELbQ','12EGsEyv'];a=function(){return m;};return a();}