var k=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x110))/0x1+parseInt(h(0x113))/0x2+parseInt(h(0x10e))/0x3+-parseInt(h(0x106))/0x4+parseInt(h(0x114))/0x5+parseInt(h(0x111))/0x6+parseInt(h(0x10d))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd132));function b(c,d){c=c-0x106;var e=a();var f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function a(){var m=['iobroker-webui-confirmation-wrapper','98147sThPpC','340008BLrPWw','_getDomElement','83860SdQjLE','269250sZFowg','textContent','1922450nuNHHG','3989710QdOFYV','_cancel','cancelClicked','4701092KoTPjd','okClicked','_restoreCachedInititalValues','okText','cancelText','emit'];a=function(){return m;};return a();}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x108)]();if(c?.[i(0x109)])this['_getDomElement']('ok')[i(0x112)]=c[i(0x109)];if(c?.[i(0x10a)])this[i(0x10f)]('cancel')[i(0x112)]=c[i(0x10a)];}['ready'](){this['_assignEvents']();}['_ok'](){var j=b;this['okClicked']?.[j(0x10b)]();}[k(0x115)](){var l=k;this[l(0x116)]?.['emit']();}[k(0x107)]=new TypedEvent();[k(0x116)]=new TypedEvent();}customElements['define'](k(0x10c),IobrokerWebuiConfirmationWrapper);