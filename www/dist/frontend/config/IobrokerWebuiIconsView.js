const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x125))/0x1+-parseInt(j(0x11b))/0x2*(parseInt(j(0x123))/0x3)+-parseInt(j(0x138))/0x4+-parseInt(j(0x11e))/0x5*(parseInt(j(0x11f))/0x6)+parseInt(j(0x11d))/0x7*(parseInt(j(0x121))/0x8)+-parseInt(j(0x12b))/0x9+-parseInt(j(0x122))/0xa*(-parseInt(j(0x134))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb6e9b));function b(c,d){c=c-0x118;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static ['style']=css`
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
        `;static ['is']=k(0x129);static [k(0x118)]={};['_root'];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0x12c)]=this[l(0x127)]('root');}async['ready'](){const m=k;this[m(0x12d)](),this['_assignEvents']();for await(const c of this[m(0x132)]()){let d=c[m(0x11a)];;const e=document[m(0x124)]('div'),g=document[m(0x124)](m(0x126));g[m(0x11c)]=d,g[m(0x130)]=![],e['title']=c['name'],e['draggable']=!![],e['appendChild'](g),e[m(0x13a)](document[m(0x13c)](c[m(0x136)])),e[m(0x141)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x13d)]=n(0x131),h['dataTransfer']['setData']('text/plain',d),h[n(0x139)][n(0x13f)](dragDropFormatNameElementDefinition,JSON[n(0x13e)](i)),h[n(0x139)][n(0x13f)](dragDropFormatNamePropertyGrid,JSON[n(0x13e)]({'type':n(0x12e),'text':d})),h['dataTransfer'][n(0x12f)]='copy',!![];},this[m(0x12c)]['appendChild'](e);}}async*[k(0x132)](){const o=k,c=await iobrokerHandler[o(0x119)]();for(const d of c){yield*this[o(0x137)](d,'');}}async*['_readFolder'](c,d){const p=k,e=await iobrokerHandler[p(0x13b)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g['file']['endsWith'](p(0x120))){if(this['_filter']){if(!g[p(0x140)]['match'](this[p(0x128)]))continue;}const h=g[p(0x140)][p(0x133)]('.'),i=g[p(0x140)][p(0x135)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[p(0x140)]};}}}}}customElements[k(0x12a)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);function a(){const q=['69110tVSbJf','src','187208YhUSNb','300uyHoxQ','135906hxqYap','.html','432CuMaqE','20690smrFuD','102CbVVwV','createElement','157227qgAboc','img','_getDomElement','_filter','iobroker-webui-icons-view','define','9497925utNAEz','_root','_parseAttributesToProperties','icon','dropEffect','draggable','all','iconNames','lastIndexOf','16797MxdtmE','substring','name','_readFolder','1689200PxQiRJ','dataTransfer','appendChild','connection','createTextNode','effectAllowed','stringify','setData','file','ondragstart','properties','getIconAdapterFoldernames','path'];a=function(){return q;};return a();}