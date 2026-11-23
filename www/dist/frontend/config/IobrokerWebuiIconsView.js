const k=b;function b(c,d){c=c-0xeb;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xef))/0x1+-parseInt(j(0xfc))/0x2+parseInt(j(0xfe))/0x3+-parseInt(j(0x10c))/0x4*(parseInt(j(0x10a))/0x5)+-parseInt(j(0x10b))/0x6*(-parseInt(j(0xf3))/0x7)+-parseInt(j(0x10e))/0x8*(parseInt(j(0xf1))/0x9)+parseInt(j(0xeb))/0xa*(parseInt(j(0x108))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1916b));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const p=['createTextNode','template','title','isDir','match','stringify','11DbbNCE','_assignEvents','1585tOtswN','6xOUilK','2476dwqehC','_parseAttributesToProperties','2296BwFqaG','root','1490820dllQCt','lastIndexOf','iobroker-webui-icons-view','name','168053wdGDlz','substring','2439urNLxX','iconNames','917945RFzFAg','dataTransfer','_restoreCachedInititalValues','setData','all','appendChild','_filter','ready','_root','410566xpemoo','file','401328RXONTG','_readFolder','readDir','style'];a=function(){return p;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x103)]=html`
        <div id="root"></div>
    `;static [k(0x101)]=css`
        :host {
            box-sizing: border-box;
            background: rgb(44, 46, 53);
        }
        
        #root {
            display: flex;
            flex-wrap: wrap;
            overflow-x: hidden;
            overflow-y: scroll;
            align-content: flex-start;
            gap: 5px;
            height: calc(100% - 20px);
            padding: 10px;
        }

        #root div {
            & img {
                width: 40px;
                height: 40px;
                user-drag: none;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--text-color, white);
            font-size: 10px;
            width: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        `;static ['is']=k(0xed);static ['properties']={};[k(0xfb)];[k(0xf9)];constructor(){const l=k;super(),super[l(0xf5)](),this['_root']=this['_getDomElement'](l(0x10f));}async[k(0xfa)](){const m=k;this[m(0x10d)](),this[m(0x109)]();for await(const c of this[m(0xf2)]()){let d=c['path'];;const e=document['createElement']('div'),g=document['createElement']('img');g['src']=d,g['draggable']=![],e[m(0x104)]=c['name'],e['draggable']=!![],e['appendChild'](g),e[m(0xf8)](document[m(0x102)](c[m(0xee)])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0xf4)]['effectAllowed']=n(0xf7),h[n(0xf4)][n(0xf6)]('text/plain',d),h[n(0xf4)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0xf4)]['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x107)]({'type':'icon','text':d})),h[n(0xf4)]['dropEffect']='copy',!![];},this['_root']['appendChild'](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0xff)](c,d){const o=k,e=await iobrokerHandler['connection'][o(0x100)](c,d);for(const g of e){if(g[o(0x105)])yield*this[o(0xff)](c,d+'/'+g['file']);else{if(!g[o(0xfd)]['endsWith']('.html')){if(this['_filter']){if(!g['file'][o(0x106)](this[o(0xf9)]))continue;}const h=g[o(0xfd)][o(0xec)]('.'),i=g[o(0xfd)][o(0xf0)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[o(0xfd)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);