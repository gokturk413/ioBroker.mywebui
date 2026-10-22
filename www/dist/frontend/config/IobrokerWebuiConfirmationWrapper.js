var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x159))/0x1*(parseInt(h(0x15e))/0x2)+-parseInt(h(0x15d))/0x3+parseInt(h(0x14f))/0x4*(parseInt(h(0x161))/0x5)+-parseInt(h(0x157))/0x6+parseInt(h(0x160))/0x7*(-parseInt(h(0x158))/0x8)+-parseInt(h(0x163))/0x9+parseInt(h(0x15c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2edb1));function b(c,d){c=c-0x14c;var e=a();var f=e[c];return f;}function a(){var n=['_assignEvents','56aJjrJf','5RzSpcX','_restoreCachedInititalValues','3023343KQHiJm','emit','define','ready','97132sKNDBG','cancelText','okClicked','textContent','_getDomElement','_ok','_cancel','cancel','1671186VkEcQM','223384TlffIL','293UmALqZ','iobroker-webui-confirmation-wrapper','cancelClicked','12782410Ityjtb','737415ZunmQf','184rZuOpn'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this[i(0x162)]();if(c?.['okText'])this[i(0x153)]('ok')[i(0x152)]=c['okText'];if(c?.[i(0x150)])this[i(0x153)](i(0x156))[i(0x152)]=c[i(0x150)];}[j(0x14e)](){var k=j;this[k(0x15f)]();}[j(0x154)](){var l=j;this[l(0x151)]?.['emit']();}[j(0x155)](){var m=j;this[m(0x15b)]?.[m(0x14c)]();}['okClicked']=new TypedEvent();[j(0x15b)]=new TypedEvent();}customElements[j(0x14d)](j(0x15a),IobrokerWebuiConfirmationWrapper);