const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x15e))/0x1+-parseInt(j(0x152))/0x2+parseInt(j(0x15c))/0x3+-parseInt(j(0x148))/0x4+parseInt(j(0x149))/0x5+parseInt(j(0x15f))/0x6+parseInt(j(0x157))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6c74a));function b(c,d){c=c-0x146;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const p=['text/plain','ondragstart','connection','div','isDir','img','_filter','appendChild','file','2277312LvohLr','779720yjbMSQ','_readFolder','match','_root','properties','readDir','dataTransfer','stringify','createElement','1256884RJkBCB','name','icon','_parseAttributesToProperties','createTextNode','4509498cdhtuK','style','draggable','lastIndexOf','substring','2624922wuXfqO','iconNames','403580LQoTwx','2222712aYYrlf'];a=function(){return p;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x158)]=css`
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
        `;static ['is']='iobroker-webui-icons-view';static [k(0x14d)]={};[k(0x14c)];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0x14c)]=this['_getDomElement']('root');}async['ready'](){const m=k;this[m(0x155)](),this['_assignEvents']();for await(const c of this[m(0x15d)]()){let d=c['path'];;const e=document[m(0x151)](m(0x163)),g=document[m(0x151)]('img');g['src']=d,g[m(0x159)]=![],e['title']=c[m(0x153)],e[m(0x159)]=!![],e['appendChild'](g),e[m(0x146)](document[m(0x156)](c['name'])),e[m(0x161)]=h=>{const n=m,i={'tag':n(0x165),'defaultAttributes':{'src':d}};return h['dataTransfer']['effectAllowed']='all',h[n(0x14f)]['setData'](n(0x160),d),h[n(0x14f)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x14f)]['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x150)]({'type':n(0x154),'text':d})),h[n(0x14f)]['dropEffect']='copy',!![];},this[m(0x14c)]['appendChild'](e);}}async*['iconNames'](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x14a)](c,d){const o=k,e=await iobrokerHandler[o(0x162)][o(0x14e)](c,d);for(const g of e){if(g[o(0x164)])yield*this['_readFolder'](c,d+'/'+g[o(0x147)]);else{if(!g['file']['endsWith']('.html')){if(this[o(0x166)]){if(!g[o(0x147)][o(0x14b)](this['_filter']))continue;}const h=g[o(0x147)][o(0x15a)]('.'),i=g['file'][o(0x15b)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g[o(0x147)]};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);