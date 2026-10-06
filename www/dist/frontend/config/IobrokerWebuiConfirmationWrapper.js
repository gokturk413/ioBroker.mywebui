function a(){var m=['1580576rgaGWf','304RsNOeW','2892954pIQbAG','okText','16238QuNVjh','okClicked','cancelText','41679nytSUp','template','_cancel','6287570ZxdhfG','cancelClicked','20376eOQFKJ','2rhcrNd','1813SJFvnm','iobroker-webui-confirmation-wrapper','_assignEvents','9316516gOUwyr','10wgRdzU'];a=function(){return m;};return a();}function b(c,d){c=c-0x104;var e=a();var f=e[c];return f;}var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x116))/0x1+parseInt(h(0x10c))/0x2*(parseInt(h(0x114))/0x3)+parseInt(h(0x112))/0x4*(parseInt(h(0x111))/0x5)+-parseInt(h(0x10b))/0x6*(parseInt(h(0x10d))/0x7)+-parseInt(h(0x113))/0x8*(parseInt(h(0x106))/0x9)+parseInt(h(0x109))/0xa+-parseInt(h(0x110))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x795cf));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x107)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.[j(0x115)])this['_getDomElement']('ok')['textContent']=c['okText'];if(c?.[j(0x105)])this['_getDomElement']('cancel')['textContent']=c['cancelText'];}['ready'](){var k=i;this[k(0x10f)]();}['_ok'](){var l=i;this[l(0x104)]?.['emit']();}[i(0x108)](){this['cancelClicked']?.['emit']();}['okClicked']=new TypedEvent();[i(0x10a)]=new TypedEvent();}customElements['define'](i(0x10e),IobrokerWebuiConfirmationWrapper);