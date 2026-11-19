var i=b;function b(c,d){c=c-0x7c;var e=a();var f=e[c];return f;}(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x8d))/0x1*(parseInt(h(0x8a))/0x2)+-parseInt(h(0x7f))/0x3*(-parseInt(h(0x7d))/0x4)+-parseInt(h(0x7e))/0x5*(-parseInt(h(0x7c))/0x6)+-parseInt(h(0x83))/0x7*(-parseInt(h(0x8c))/0x8)+-parseInt(h(0x8b))/0x9*(parseInt(h(0x8f))/0xa)+-parseInt(h(0x80))/0xb*(parseInt(h(0x86))/0xc)+-parseInt(h(0x88))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x600e8));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static [i(0x87)]=css`
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
        }`;static ['template']=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this[j(0x82)]();if(c?.[j(0x81)])this['_getDomElement']('ok')['textContent']=c['okText'];if(c?.['cancelText'])this[j(0x90)]('cancel')['textContent']=c[j(0x89)];}['ready'](){this['_assignEvents']();}[i(0x92)](){var k=i;this['okClicked']?.[k(0x8e)]();}['_cancel'](){var l=i;this[l(0x91)]?.[l(0x8e)]();}[i(0x85)]=new TypedEvent();[i(0x91)]=new TypedEvent();}function a(){var m=['2533643uClkCi','iobroker-webui-confirmation-wrapper','okClicked','450204RsbkTH','style','14902628oLyKJG','cancelText','745472qjqNbX','459UBscwT','16EECPBi','2wlurDM','emit','123230TKMoOK','_getDomElement','cancelClicked','_ok','1914162hulGWG','4tRduAK','5iaSQKF','2152599hbxUJg','99konqGh','okText','_restoreCachedInititalValues'];a=function(){return m;};return a();}customElements['define'](i(0x84),IobrokerWebuiConfirmationWrapper);