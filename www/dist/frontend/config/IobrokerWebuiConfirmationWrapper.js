var i=b;(function(c,d){var h=b,e=c();while(!![]){try{var f=parseInt(h(0x127))/0x1*(-parseInt(h(0x12b))/0x2)+-parseInt(h(0x122))/0x3*(-parseInt(h(0x130))/0x4)+-parseInt(h(0x12a))/0x5*(-parseInt(h(0x12e))/0x6)+parseInt(h(0x128))/0x7+parseInt(h(0x12d))/0x8+parseInt(h(0x129))/0x9+-parseInt(h(0x12f))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x423fd));function b(c,d){c=c-0x122;var e=a();var f=e[c];return f;}function a(){var n=['185946ArDZXh','emit','cancelText','okClicked','okText','1XelDBQ','1842610CbVulG','3004317sSoRAd','365qeGTnY','997508YQuwFA','_assignEvents','443816FfnvVR','11298BqjwAW','3297780kMJbJF','20dOOdnV','cancelClicked','template'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,TypedEvent,css,html}from'@gokturk413/base-custom-webcomponent';export class IobrokerWebuiConfirmationWrapper extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x132)]=html`
        <div id="upper"><slot></slot></div>
        <div id="lower">
            <button id="ok" @click="_ok">Ok</button>
            <button id="cancel" @click="_cancel">Cancel</button>
        </div>`;constructor(c){var j=i;super(),this['_restoreCachedInititalValues']();if(c?.['okText'])this['_getDomElement']('ok')['textContent']=c[j(0x126)];if(c?.[j(0x124)])this['_getDomElement']('cancel')['textContent']=c[j(0x124)];}['ready'](){var k=i;this[k(0x12c)]();}['_ok'](){var l=i;this[l(0x125)]?.[l(0x123)]();}['_cancel'](){var m=i;this[m(0x131)]?.['emit']();}['okClicked']=new TypedEvent();[i(0x131)]=new TypedEvent();}customElements['define']('iobroker-webui-confirmation-wrapper',IobrokerWebuiConfirmationWrapper);