var j=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=-parseInt(h(0x172))/0x1+-parseInt(h(0x179))/0x2+-parseInt(h(0x183))/0x3+parseInt(h(0x17a))/0x4+parseInt(h(0x178))/0x5*(-parseInt(h(0x182))/0x6)+parseInt(h(0x184))/0x7+-parseInt(h(0x185))/0x8*(-parseInt(h(0x17c))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3d28e));import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';function a(){var n=['textContent','define','774385IEqsxh','230378NbDhMH','1468212UGNDXV','emit','5710347fatTkl','ready','_assignEvents','okText','_cancel','okClicked','6YYhDEL','1115859viYsMq','2723896RuNWsX','8YqopXs','cancelText','498135rGWJZG','iobroker-webui-confirmation-wrapper','cancelClicked','_getDomElement'];a=function(){return n;};return a();}function b(c,d){c=c-0x171;var e=a();var f=e[c];return f;}export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(c){var i=b;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this['_getDomElement']('ok')[i(0x176)]=c[i(0x17f)];if(c?.[i(0x171)])this[i(0x175)]('cancel')['textContent']=c['cancelText'];}[j(0x17d)](){var k=j;this[k(0x17e)]();}['_ok'](){var l=j;this[l(0x181)]?.[l(0x17b)]();}[j(0x180)](){var m=j;this[m(0x174)]?.['emit']();}[j(0x181)]=new TypedEvent();[j(0x174)]=new TypedEvent();}customElements[j(0x177)](j(0x173),IobrokerWebuiConfirmationWrapper);